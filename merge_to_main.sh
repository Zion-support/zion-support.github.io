#!/bin/bash

# Script to merge current branch to main
echo "Starting merge process..."

# Check current branch
echo "Current branch:"
git branch --show-current

# Switch to main
echo "Switching to main branch..."
git checkout main

# Pull latest changes from origin
echo "Pulling latest changes from origin..."
git pull origin main

# Merge the feature branch
echo "Merging cursor/fix-netlify-build-and-merge-to-main-133c..."
git merge cursor/fix-netlify-build-and-merge-to-main-133c

# Push to origin main
echo "Pushing to origin main..."
git push origin main

echo "Merge completed successfully!"