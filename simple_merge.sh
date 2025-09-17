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
echo "Merge process completed!"
git status
