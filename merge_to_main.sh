#!/bin/bash

# Script to merge current branch to main
set -e

echo "Current branch: $(git branch --show-current)"
echo "Switching to main branch..."
git checkout main

echo "Pulling latest changes from main..."
git pull origin main

echo "Merging cursor/fix-netlify-build-and-merge-to-main-bd5d into main..."
git merge cursor/fix-netlify-build-and-merge-to-main-bd5d

echo "Pushing changes to main..."
git push origin main

echo "Deleting feature branch..."
git branch -d cursor/fix-netlify-build-and-merge-to-main-bd5d

echo "Merge completed successfully!"