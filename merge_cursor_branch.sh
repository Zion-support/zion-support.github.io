#!/bin/bash

echo "🚀 Starting merge process for cursor branch..."

# Check current branch
echo "📍 Current branch: $(git branch --show-current)"

# Switch to main branch
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest changes
echo "📥 Pulling latest changes from origin..."
git pull origin main

# Check for merge conflicts before attempting merge
echo "🔍 Checking for potential conflicts..."
git merge --no-commit --no-ff cursor/fix-errors-and-merge-to-main-a141

# Check merge status
if [ $? -eq 0 ]; then
    echo "✅ No conflicts detected, proceeding with merge..."
    git merge cursor/fix-errors-and-merge-to-main-a141
    echo "✅ Merge completed successfully!"
    
    # Push changes
    echo "📤 Pushing changes to origin..."
    git push origin main
    echo "✅ Changes pushed successfully!"
else
    echo "⚠️ Merge conflicts detected. Please resolve them manually."
    echo "Conflicted files:"
    git status --porcelain | grep "^UU\|^AA\|^DD"
fi

echo "🎉 Merge process completed!"