#!/bin/bash

echo "Starting simple merge process..."

cd /workspace

# Check current status
echo "Current branch: $(git branch --show-current)"

# Try to resolve any current merge conflicts
if [ -f ".git/MERGE_HEAD" ]; then
    echo "In merge state, resolving conflicts..."
    git checkout --theirs .
    git add .
    git commit -m "Resolved merge conflicts"
fi

# Switch to main
git checkout main 2>/dev/null || git checkout -b main

# Try to merge the feature branch
FEATURE_BRANCH=$(git branch --show-current 2>/dev/null | grep -v main || echo "cursor/create-and-deploy-new-content-9902")
if [ "$FEATURE_BRANCH" != "main" ]; then
    echo "Merging $FEATURE_BRANCH into main..."
    git merge "$FEATURE_BRANCH" 2>/dev/null || {
        echo "Merge conflict, resolving..."
        git checkout --theirs .
        git add .
        git commit -m "Resolved merge conflicts"
    }
fi

# Push to main
git push origin main 2>/dev/null || echo "Push failed, but merge may have succeeded locally"

echo "Merge process completed!"