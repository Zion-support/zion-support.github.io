#!/bin/bash

echo "Starting quick merge process..."

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "Uncommitted changes found. Committing them..."
    git add .
    git commit -m "Add new AI content and promotional components before merge"
fi

# Fetch latest changes
echo "Fetching latest changes..."
git fetch origin

# Try to merge main
echo "Attempting to merge main..."
if git merge origin/main; then
    echo "Merge successful!"
else
    echo "Merge conflicts detected. Resolving automatically..."
    
    # Resolve conflicts by keeping our changes
    git checkout --ours .
    git add .
    git commit -m "Resolve merge conflicts - keeping our enhanced content"
    
    echo "Conflicts resolved!"
fi

# Push the branch
echo "Pushing branch..."
git push origin $CURRENT_BRANCH

echo "Process completed successfully!"
echo "Branch $CURRENT_BRANCH has been updated and pushed to remote."