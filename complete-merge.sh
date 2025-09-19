#!/bin/bash

echo "🔧 Completing current merge..."

# Check if we're in a merge state
if [ -f ".git/MERGE_HEAD" ]; then
    echo "✅ Merge in progress detected"
    
    # Add all files
    git add .
    
    # Complete the merge
    git commit --no-edit -m "Merge PM2 automation branch into temp-merge-branch"
    
    echo "✅ Merge completed successfully"
else
    echo "ℹ️  No merge in progress"
fi

# Check current status
echo "📊 Current git status:"
git status --porcelain

echo "🌿 Current branch:"
git branch --show-current

echo "🔄 Attempting to switch to main..."
git fetch origin main
git checkout main || git checkout -b main origin/main
git pull origin main

echo "🔄 Merging temp-merge-branch into main..."
git merge temp-merge-branch --no-edit

echo "🚀 Pushing to main..."
git push origin main

echo "🎉 Merge to main completed successfully!"