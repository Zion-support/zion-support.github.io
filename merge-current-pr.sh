#!/bin/bash

# Simple script to merge the current PR into main
set -e

echo "🚀 Merging current PR into main branch..."

# Navigate to workspace
cd /workspace

# Check current status
echo "📊 Current status:"
git status --short

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "🌿 Current branch: $CURRENT_BRANCH"

# Fetch latest changes
echo "📥 Fetching latest changes..."
git fetch origin

# Switch to main
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest main
echo "📥 Pulling latest main..."
git pull origin main

# Merge the current branch into main
echo "🔀 Merging $CURRENT_BRANCH into main..."
git merge $CURRENT_BRANCH --no-edit

# Push to main
echo "📤 Pushing to main..."
git push origin main

echo "✅ Successfully merged $CURRENT_BRANCH into main!"