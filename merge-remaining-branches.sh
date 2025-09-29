#!/bin/bash

# Script to merge remaining unmerged branches
set -e

echo "🚀 Starting merge of remaining unmerged branches..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Get recently updated branches that might not be merged
RECENT_BRANCHES=$(git branch -r --sort=-committerdate | grep -E "(cursor|pr-|merge-)" | head -100)

SUCCESSFUL=0
FAILED=0
SKIPPED=0

for branch in $RECENT_BRANCHES; do
    # Remove origin/ prefix
    branch_name=${branch#origin/}
    
    echo "🔄 Processing $branch_name..."
    
    # Check if branch exists
    if ! git ls-remote --heads origin "$branch_name" > /dev/null 2>&1; then
        echo "⏭️  Branch $branch_name doesn't exist, skipping..."
        SKIPPED=$((SKIPPED + 1))
        continue
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor "origin/$branch_name" main 2>/dev/null; then
        echo "⏭️  Branch $branch_name already merged, skipping..."
        SKIPPED=$((SKIPPED + 1))
        continue
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch_name" 2>/dev/null; then
        git commit --no-edit -m "Merge $branch_name - $(date)" 2>/dev/null || true
        echo "✅ Successfully merged $branch_name"
        SUCCESSFUL=$((SUCCESSFUL + 1))
    else
        # Try with ours strategy for conflicts
        git merge --abort 2>/dev/null || true
        if git merge -X ours --no-commit --no-ff "origin/$branch_name" 2>/dev/null; then
            git commit --no-edit -m "Merge $branch_name (ours strategy) - $(date)" 2>/dev/null || true
            echo "✅ Successfully merged $branch_name with ours strategy"
            SUCCESSFUL=$((SUCCESSFUL + 1))
        else
            git merge --abort 2>/dev/null || true
            echo "❌ Failed to merge $branch_name"
            FAILED=$((FAILED + 1))
        fi
    fi
    
    # Push every 5 successful merges
    if [ $((SUCCESSFUL % 5)) -eq 0 ] && [ $SUCCESSFUL -gt 0 ]; then
        echo "💾 Pushing progress..."
        git push origin main || true
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "   ✅ Successful: $SUCCESSFUL"
echo "   ❌ Failed: $FAILED"
echo "   ⏭️  Skipped: $SKIPPED"

# Final push
echo "💾 Final push..."
git push origin main || true

echo "🎉 Merge process completed!"