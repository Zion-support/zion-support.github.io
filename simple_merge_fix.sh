#!/bin/bash

echo "🚀 Starting simple merge conflict resolution..."

# Configure git
git config pull.rebase false
git config merge.tool vimdiff

# Switch to main branch
git checkout main

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main || git pull origin main --rebase

# Get all remote branches
echo "🔍 Fetching remote branches..."
git fetch origin

# Get list of branches to merge
branches=$(git branch -r | grep -v "origin/HEAD" | grep -v "origin/main" | sed 's/origin\///' | head -20)

echo "📋 Found branches to process:"
echo "$branches"

# Process each branch
for branch in $branches; do
    echo "🔄 Processing branch: $branch"
    
    # Create temporary branch
    git checkout -b "temp-$branch" "origin/$branch" || continue
    
    # Try to merge main
    git merge main --no-ff || {
        echo "⚠️  Merge conflict, resolving..."
        
        # Auto-resolve conflicts by keeping main version
        git checkout --ours . || true
        git add .
        git commit --no-edit || {
            echo "❌ Failed to resolve conflicts in $branch"
            git checkout main
            git branch -D "temp-$branch"
            continue
        }
    }
    
    # Switch back to main
    git checkout main
    
    # Merge the branch into main
    git merge "temp-$branch" --no-ff || {
        echo "⚠️  Conflict merging to main, resolving..."
        git checkout --ours . || true
        git add .
        git commit --no-edit || {
            echo "❌ Failed to merge $branch to main"
            git branch -D "temp-$branch"
            continue
        }
    }
    
    # Clean up
    git branch -D "temp-$branch"
    echo "✅ Successfully merged $branch"
done

echo "📤 Pushing changes..."
git push origin main

echo "🎉 Merge process completed!"