#!/bin/bash

# Simple merge script
echo "Starting simple merge process..."

# Ensure we're on main
git checkout main

# Fetch latest changes
git fetch origin

# Try to merge the specific branches
branches=(
    "origin/cursor/fix-netlify-build-and-merge-to-main-3149"
    "origin/cursor/fix-netlify-build-and-merge-to-main-84b6"
    "origin/cursor/fix-netlify-build-and-merge-to-main-84cc"
)

for branch in "${branches[@]}"; do
    echo "Attempting to merge $branch"
    if git merge "$branch" --no-edit; then
        echo "Successfully merged $branch"
    else
        echo "Merge failed for $branch, attempting to resolve conflicts..."
        
        # Check for common conflict files and resolve them
        if [ -f "package.json" ] && grep -q "<<<<<<< HEAD" package.json; then
            echo "Resolving package.json conflicts..."
            git checkout --ours package.json
            git add package.json
        fi
        
        if [ -f "package-lock.json" ] && grep -q "<<<<<<< HEAD" package-lock.json; then
            echo "Resolving package-lock.json conflicts..."
            git checkout --ours package-lock.json
            git add package-lock.json
        fi
        
        # Try to commit the resolved conflicts
        if git commit -m "Resolve merge conflicts for $branch"; then
            echo "Successfully resolved conflicts for $branch"
        else
            echo "No conflicts to resolve or commit failed for $branch"
            git merge --abort
        fi
    fi
done

echo "Merge process completed!"
git status