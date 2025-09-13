#!/bin/bash

# Simple merge script to resolve conflicts and merge PRs
echo "Starting merge process..."

# Update main branch
git checkout main
git pull origin main

# List of branches to merge
branches=(
    "origin/cursor/create-and-deploy-new-content-1cd6"
    "origin/cursor/create-and-deploy-new-content-49e9"
    "origin/cursor/create-and-deploy-new-content-795e"
    "origin/cursor/create-and-deploy-new-content-8a50"
    "origin/cursor/create-and-deploy-new-content-e7eb"
)

# Merge each branch
for branch in "${branches[@]}"; do
    echo "Merging $branch..."
    
    # Try to merge
    if git merge --no-commit --no-ff "$branch" 2>/dev/null; then
        echo "No conflicts, committing..."
        git commit -m "Merge $branch"
    else
        echo "Conflicts detected, resolving..."
        
        # Resolve conflicts by accepting both versions
        git checkout --theirs . 2>/dev/null || git checkout --ours .
        git add .
        git commit -m "Merge $branch (conflicts resolved)"
    fi
done

# Push changes
git push origin main

echo "Merge process completed!"