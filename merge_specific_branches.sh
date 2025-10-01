#!/bin/bash

# Script to merge the specific unmerged cursor branches
set -e

echo "🚀 Starting merge of specific unmerged cursor branches..."
echo "⏰ Started at: $(date)"

# Ensure we're on main and up to date
echo "📋 Checking out main branch..."
git checkout main
git pull origin main

# List of specific branches to merge
BRANCHES=(
    "origin/cursor/fix-errors-and-merge-to-main-0ce9"
    "origin/cursor/fix-errors-and-merge-to-main-3529"
    "origin/cursor/fix-errors-and-merge-to-main-9056"
)

SUCCESSFUL_MERGES=0
FAILED_MERGES=0

for branch in "${BRANCHES[@]}"; do
    echo ""
    echo "=========================================="
    echo "🔄 Processing branch: $branch"
    echo "=========================================="
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "❌ Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Try to merge
    echo "🔄 Attempting to merge $branch..."
    if git merge --no-edit --no-ff "$branch"; then
        echo "✅ Successfully merged $branch"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "⚠️  Merge conflicts detected, resolving..."
        
        # Resolve conflicts by taking the branch version for most files
        git checkout --theirs .
        git add .
        
        # Commit the resolved merge
        if git commit --no-edit -m "Merge $branch (auto-resolved conflicts)"; then
            echo "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        else
            echo "❌ Failed to resolve conflicts for $branch"
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
        fi
    fi
    
    echo "=========================================="
done

# Push all changes
echo ""
echo "💾 Pushing changes to remote..."
if git push origin main; then
    echo "✅ Successfully pushed to remote"
else
    echo "❌ Failed to push to remote"
fi

# Summary
echo ""
echo "🎉 Merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "⏰ Completed at: $(date)"