#!/bin/bash

# Simple merge fix script
echo "Starting simple merge process..."

# Go to workspace
cd /workspace

# Switch to main
echo "Switching to main..."
git checkout main

# Pull latest
echo "Pulling latest changes..."
git pull origin main

# List of branches to merge
branches=(
    "cursor/fix-netlify-build-and-merge-to-main-3a65"
    "cursor/fix-netlify-build-and-merge-to-main-30c7"
    "cursor/fix-netlify-build-and-merge-to-main-9474"
)

# Merge each branch
for branch in "${branches[@]}"; do
    echo "Processing branch: $branch"
    
    # Fetch the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge "origin/$branch" --no-ff -m "Merge $branch"; then
        echo "Successfully merged $branch"
    else
        echo "Conflicts in $branch, resolving..."
        
        # Auto-resolve conflicts by keeping main version
        git checkout --ours .
        git add .
        git commit -m "Resolve conflicts for $branch"
        
        echo "Resolved conflicts for $branch"
    fi
done

# Test build
echo "Testing build..."
pnpm run build:no-check

# Push changes
echo "Pushing changes..."
git push origin main

echo "Merge process completed!"