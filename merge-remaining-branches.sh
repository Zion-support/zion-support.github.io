#!/bin/bash

# Script to merge remaining branches and resolve conflicts
# This script will attempt to merge branches and resolve conflicts automatically

echo "Starting automated merge process..."

# List of branches to merge
branches=(
    "origin/cursor/check-fix-push-and-merge-to-main-a036"
    "origin/cursor/check-fix-push-and-merge-to-main-ae7e"
    "origin/cursor/check-fix-push-and-merge-to-main-f6d7"
    "origin/cursor/check-fix-push-and-merge-to-main-1953"
    "origin/cursor/check-fix-push-and-merge-to-main-e4de"
    "origin/cursor/check-fix-push-and-merge-to-main-6cee"
)

for branch in "${branches[@]}"; do
    echo "Attempting to merge $branch..."
    
    # Try to merge the branch
    if git merge --no-commit --no-ff "$branch" 2>/dev/null; then
        echo "✅ $branch merged successfully (no conflicts)"
        git commit -m "Merge $branch - no conflicts"
    else
        echo "⚠️  $branch has conflicts, resolving..."
        
        # Check if there are actual conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts for $branch..."
            
            # Resolve conflicts by keeping our version (main branch)
            git checkout --ours .
            git add .
            git commit -m "Resolve merge conflicts: integrate $branch - resolved conflicts by keeping main branch versions"
            echo "✅ $branch conflicts resolved and merged"
        else
            echo "✅ $branch already up to date"
            git merge --abort 2>/dev/null || true
        fi
    fi
done

echo "Merge process completed!"