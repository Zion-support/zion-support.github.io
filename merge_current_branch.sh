#!/bin/bash

# Merge script for cursor/fix-netlify-build-and-merge-to-main-133c
set -e

echo "🚀 Starting merge for cursor/fix-netlify-build-and-merge-to-main-133c..."

# Change to workspace directory
cd /workspace

# Check current status
echo "📊 Current git status:"
git status --short

# Ensure we're on main
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Merge our feature branch
echo "✅ Merging cursor/fix-netlify-build-and-merge-to-main-133c..."
git merge cursor/fix-netlify-build-and-merge-to-main-133c

# Push changes
echo "💾 Pushing changes to remote..."
git push origin main

echo "🎉 Merge completed successfully!"
echo "📊 Final status:"
git status --short