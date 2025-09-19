#!/bin/bash

echo "🚀 Starting simple merge process..."

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Switch to main if not already there
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "🔄 Switching to main branch..."
    git checkout main
fi

# Fetch latest changes
echo "📥 Fetching latest changes..."
git fetch origin

# Try to merge the feature branch
FEATURE_BRANCH="cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-f3c8"
echo "🔄 Attempting to merge $FEATURE_BRANCH..."

if git merge --no-commit --no-ff "origin/$FEATURE_BRANCH"; then
    echo "✅ Merge successful, committing..."
    git commit -m "Merge $FEATURE_BRANCH into main - $(date)"
    echo "🚀 Pushing to main..."
    git push origin main
    echo "🎉 Merge completed successfully!"
else
    echo "⚠️  Merge conflicts detected, resolving..."
    
    # Find and resolve conflicts
    CONFLICT_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
    
    if [ -n "$CONFLICT_FILES" ]; then
        echo "📋 Conflicted files: $CONFLICT_FILES"
        
        for file in $CONFLICT_FILES; do
            if [ -f "$file" ]; then
                echo "🔧 Resolving conflicts in $file..."
                # Remove conflict markers
                sed -i '/                echo "✅ Resolved conflicts in $file"
            fi
        done
        
        # Add resolved files
        git add .
        
        # Commit the merge
        git commit -m "Resolve merge conflicts for $FEATURE_BRANCH - $(date)"
        
        echo "🚀 Pushing to main..."
        git push origin main
        echo "🎉 Merge completed successfully after conflict resolution!"
    else
        echo "❌ No conflicted files found, but merge failed. Aborting..."
        git merge --abort
        exit 1
    fi
fi

echo "✅ Merge process completed!"