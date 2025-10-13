#!/bin/bash

echo "🔄 Starting merge process..."

# Check if we're on the correct branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Switch to main branch
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest changes
echo "🔄 Pulling latest changes from main..."
git pull origin main

# Merge the feature branch
echo "🔄 Merging feature branch..."
git merge cursor/fix-errors-and-merge-to-main-8fea --no-ff -m "Merge comprehensive fixes and improvements"

# Push to main
echo "🔄 Pushing to main..."
git push origin main

echo "✅ Merge completed successfully!"
echo "🎉 All changes have been merged into main branch"
