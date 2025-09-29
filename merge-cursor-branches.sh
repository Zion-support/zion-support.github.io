#!/bin/bash

# Simple script to merge cursor branches with automatic conflict resolution
set -e

echo "🚀 Starting cursor branch merge process..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Get all cursor branches
BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed 's/origin\///' | head -50)

SUCCESSFUL=0
FAILED=0
SKIPPED=0

for branch in $BRANCHES; do
    echo "🔄 Processing $branch..."
    
    # Check if branch exists and can be merged
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        echo "⏭️  Branch $branch doesn't exist, skipping..."
        SKIPPED=$((SKIPPED + 1))
        continue
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor "origin/$branch" main 2>/dev/null; then
        echo "⏭️  Branch $branch already merged, skipping..."
        SKIPPED=$((SKIPPED + 1))
        continue
    fi
    
    # Try to merge with automatic conflict resolution
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit --no-edit -m "Merge $branch - $(date)" 2>/dev/null || true
        echo "✅ Successfully merged $branch"
        SUCCESSFUL=$((SUCCESSFUL + 1))
    else
        # Try with ours strategy for conflicts
        git merge --abort 2>/dev/null || true
        if git merge -X ours --no-commit --no-ff "origin/$branch" 2>/dev/null; then
            git commit --no-edit -m "Merge $branch (ours strategy) - $(date)" 2>/dev/null || true
            echo "✅ Successfully merged $branch with ours strategy"
            SUCCESSFUL=$((SUCCESSFUL + 1))
        else
            git merge --abort 2>/dev/null || true
            echo "❌ Failed to merge $branch"
            FAILED=$((FAILED + 1))
        fi
    fi
    
    # Push every 10 successful merges
    if [ $((SUCCESSFUL % 10)) -eq 0 ] && [ $SUCCESSFUL -gt 0 ]; then
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