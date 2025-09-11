#!/bin/bash

# Merge improvements script
set -e

echo "🔄 Starting merge of improvements branch..."
echo "Current time: $(date)"

# Check current branch
echo "Current branch: $(git branch --show-current)"

# Fetch latest changes
echo "🔄 Fetching latest changes..."
git fetch --all

# Merge our improvements branch
echo "🔄 Merging cursor/analyze-improve-and-deploy-ziontechgroup-app-ccbe..."
git merge cursor/analyze-improve-and-deploy-ziontechgroup-app-ccbe --no-edit

echo "✅ Merge completed successfully!"

# Push changes
echo "🚀 Pushing to main..."
git push origin main

echo "🎉 All done!"