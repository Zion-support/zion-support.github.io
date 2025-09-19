#!/bin/bash

# Script to merge current branch to main and push changes

echo "Starting merge process..."

# Check current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $CURRENT_BRANCH"

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Pull latest changes from origin
echo "Pulling latest changes from origin..."
git pull origin main

# Merge the feature branch
echo "Merging branch $CURRENT_BRANCH into main..."
git merge $CURRENT_BRANCH

# Push changes to main
echo "Pushing changes to main..."
git push origin main

echo "Merge completed successfully!"
