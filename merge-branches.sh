#!/bin/bash

echo "Starting merge process..."

# Check current branch
echo "Current branch: $(git branch --show-current)"

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Pull latest changes
echo "Pulling latest changes from origin/main..."
git pull origin main

# Try to merge the cursor branch
echo "Attempting to merge cursor/prepare-git-repository-for-build-c571..."
git merge cursor/prepare-git-repository-for-build-c571

# Check for conflicts
if [ $? -eq 0 ]; then
    echo "Merge successful! No conflicts found."
    echo "Pushing changes to origin/main..."
    git push origin main
else
    echo "Merge conflicts detected. Checking status..."
    git status
    echo "Files with conflicts:"
    git diff --name-only --diff-filter=U
fi

echo "Merge process completed."