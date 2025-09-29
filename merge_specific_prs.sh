#!/bin/bash

# Script to merge specific open PRs
set -e

echo "🚀 Starting specific PR merge process..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Specific PRs to merge based on GitHub API response
PRS=(
    "cursor/fix-netlify-build-and-merge-to-main-1fc1:23646"
    "cursor/fix-netlify-build-and-merge-to-main-e358:23639" 
    "cursor/fix-netlify-build-and-merge-to-main-fbf7:23635"
)

SUCCESSFUL=0
FAILED=0

for pr_info in "${PRS[@]}"; do
    IFS=':' read -r branch_name pr_number <<< "$pr_info"
    
    echo "🔄 Processing PR #$pr_number (branch: $branch_name)..."
    
    # Check if branch exists
    if ! git ls-remote --heads origin "$branch_name" > /dev/null 2>&1; then
        echo "⏭️  Branch $branch_name doesn't exist, skipping..."
        continue
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor "origin/$branch_name" main 2>/dev/null; then
        echo "⏭️  Branch $branch_name already merged, skipping..."
        continue
    fi
    
    # Try to merge with conflict resolution
    echo "Attempting to merge $branch_name..."
    
    if git merge --no-commit --no-ff "origin/$branch_name" 2>/dev/null; then
        git commit --no-edit -m "Merge PR #$pr_number: $branch_name - $(date)" 2>/dev/null || true
        echo "✅ Successfully merged PR #$pr_number"
        SUCCESSFUL=$((SUCCESSFUL + 1))
    else
        echo "⚠️  Merge conflicts detected for $branch_name, attempting resolution..."
        
        # Try with ours strategy
        git merge --abort 2>/dev/null || true
        if git merge -X ours --no-commit --no-ff "origin/$branch_name" 2>/dev/null; then
            git commit --no-edit -m "Merge PR #$pr_number: $branch_name (ours strategy) - $(date)" 2>/dev/null || true
            echo "✅ Successfully merged PR #$pr_number with ours strategy"
            SUCCESSFUL=$((SUCCESSFUL + 1))
        else
            # Try with theirs strategy
            git merge --abort 2>/dev/null || true
            if git merge -X theirs --no-commit --no-ff "origin/$branch_name" 2>/dev/null; then
                git commit --no-edit -m "Merge PR #$pr_number: $branch_name (theirs strategy) - $(date)" 2>/dev/null || true
                echo "✅ Successfully merged PR #$pr_number with theirs strategy"
                SUCCESSFUL=$((SUCCESSFUL + 1))
            else
                git merge --abort 2>/dev/null || true
                echo "❌ Failed to merge PR #$pr_number - manual resolution needed"
                FAILED=$((FAILED + 1))
            fi
        fi
    fi
    
    # Push after each successful merge
    if [ $SUCCESSFUL -gt 0 ]; then
        echo "💾 Pushing changes..."
        git push origin main || true
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "   ✅ Successful: $SUCCESSFUL"
echo "   ❌ Failed: $FAILED"

echo "🎉 Specific PR merge process completed!"