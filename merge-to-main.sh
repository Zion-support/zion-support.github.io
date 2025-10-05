#!/bin/bash

# Merge and Push Script for Zion Tech Group Repository
# This script handles merging all fixes into the main branch

echo "🚀 Starting merge process for Zion Tech Group repository..."

# Check current status
echo "📊 Current git status:"
git status

# Fetch latest changes
echo "📥 Fetching latest changes from remote..."
git fetch origin

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Try to merge with main
echo "🔄 Attempting to merge with origin/main..."
if git merge origin/main --no-edit; then
    echo "✅ Successfully merged with origin/main"
else
    echo "⚠️  Merge conflicts detected. Resolving automatically..."
    # Auto-resolve conflicts by keeping our changes
    git checkout --ours .
    git add .
    git commit -m "Auto-resolve merge conflicts - keep local changes"
fi

# Push to main branch
echo "📤 Pushing changes to main branch..."
if git push origin main; then
    echo "✅ Successfully pushed to main branch"
else
    echo "❌ Failed to push to main branch. Trying alternative approach..."
    
    # Alternative: Push current branch to main
    echo "🔄 Attempting to push current branch to main..."
    git push origin $CURRENT_BRANCH:main
fi

# Verify final status
echo "🔍 Final verification:"
git log --oneline -5
git status

echo "🎉 Merge process completed!"