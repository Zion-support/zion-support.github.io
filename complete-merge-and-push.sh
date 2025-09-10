#!/bin/bash

echo "🚀 Completing merge and pushing to main branch..."

# Check current branch
echo "📍 Current branch:"
git branch --show-current

# Check git status
echo "📊 Git status:"
git status

# Switch to main branch
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Merge our feature branch
echo "🔀 Merging feature branch into main..."
git merge cursor/analyze-improve-and-deploy-ziontechgroup-app-4210

# Push changes to remote
echo "📤 Pushing changes to remote..."
git push origin main

echo "✅ Merge completed successfully!"
echo "🎉 Feature branch has been merged into main branch"