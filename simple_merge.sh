#!/bin/bash

echo "🚀 Starting simple merge process..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository. Exiting."
    exit 1
fi

# Fetch latest changes
echo "📥 Fetching latest changes..."
git fetch origin --all

# Check current branch
current_branch=$(git branch --show-current)
echo "📍 Current branch: $current_branch"

# Switch to main if not already there
if [ "$current_branch" != "main" ]; then
    echo "🔄 Switching to main branch..."
    git checkout main
    git pull origin main
fi

# Try to merge our feature branch
echo "🔄 Attempting to merge feature branch..."
if git merge cursor/create-and-deploy-new-content-1c73 --no-ff -m "Merge: Add revolutionary AI breakthrough content and enhanced frontend advertising"; then
    echo "✅ Successfully merged feature branch!"
    
    # Push changes
    echo "📤 Pushing changes to remote..."
    if git push origin main; then
        echo "✅ Successfully pushed changes to remote!"
        echo "🎉 Merge completed successfully!"
    else
        echo "❌ Failed to push changes to remote"
        exit 1
    fi
else
    echo "⚠️  Merge conflict detected. Attempting resolution..."
    
    # Check for conflicted files
    conflicted_files=$(git diff --name-only --diff-filter=U)
    echo "📄 Conflicted files: $conflicted_files"
    
    # Try to resolve by taking our version for key files
    for file in $conflicted_files; do
        echo "🔧 Resolving conflicts in $file..."
        if [[ "$file" == "public/index.html" || "$file" == "tailwind.config.ts" ]]; then
            git checkout --ours "$file"
        else
            git checkout --theirs "$file"
        fi
    done
    
    # Add resolved files
    git add .
    
    # Complete the merge
    if git commit --no-edit; then
        echo "✅ Successfully resolved conflicts and completed merge!"
        
        # Push changes
        echo "📤 Pushing changes to remote..."
        if git push origin main; then
            echo "✅ Successfully pushed changes to remote!"
            echo "🎉 Merge completed successfully!"
        else
            echo "❌ Failed to push changes to remote"
            exit 1
        fi
    else
        echo "❌ Failed to complete merge"
        exit 1
    fi
fi

echo "🏁 Merge process completed!"