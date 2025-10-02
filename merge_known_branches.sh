#!/bin/bash

# Simple script to merge the known unmerged branches
set -e

echo "🚀 Merging known unmerged branches..."

# Ensure we're on main
git checkout main
git pull origin main

# Known unmerged branches from our analysis
BRANCHES=(
    "origin/cursor/fix-errors-and-merge-to-main-0ce9"
    "origin/cursor/fix-errors-and-merge-to-main-3529"
    "origin/cursor/fix-errors-and-merge-to-main-9056"
)

for branch in "${BRANCHES[@]}"; do
    echo "🔄 Merging $branch..."
    
    # Try to merge with automatic conflict resolution
    if git merge --no-edit --no-ff "$branch" -X theirs; then
        echo "✅ Successfully merged $branch"
    else
        echo "⚠️  Conflicts detected, resolving..."
        
        # Resolve conflicts by taking branch version
        git checkout --theirs .
        git add .
        git commit --no-edit -m "Merge $branch (auto-resolved)"
        
        echo "✅ Resolved conflicts and merged $branch"
    fi
done

echo "💾 Pushing to remote..."
git push origin main

echo "🎉 All branches merged successfully!"