#!/bin/bash

echo "🚀 Quick merge conflict resolution starting..."

# Configure git
git config pull.rebase false

# Switch to main and pull latest
git checkout main
git pull origin main || git pull origin main --rebase

# Get first 10 branches to merge
branches=$(git branch -r | grep -v "origin/HEAD" | grep -v "origin/main" | head -10 | sed 's/origin\///')

echo "📋 Processing branches:"
echo "$branches"

for branch in $branches; do
    echo "🔄 Processing: $branch"
    
    # Create temp branch
    git checkout -b "temp-$branch" "origin/$branch" 2>/dev/null || continue
    
    # Merge main into branch
    git merge main --no-ff 2>/dev/null || {
        echo "⚠️  Resolving conflicts in $branch"
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        git commit --no-edit 2>/dev/null || {
            echo "❌ Failed to resolve conflicts in $branch"
            git checkout main
            git branch -D "temp-$branch" 2>/dev/null || true
            continue
        }
    }
    
    # Switch to main
    git checkout main
    
    # Merge branch into main
    git merge "temp-$branch" --no-ff 2>/dev/null || {
        echo "⚠️  Resolving conflicts merging to main"
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        git commit --no-edit 2>/dev/null || {
            echo "❌ Failed to merge $branch to main"
            git branch -D "temp-$branch" 2>/dev/null || true
            continue
        }
    }
    
    # Clean up
    git branch -D "temp-$branch" 2>/dev/null || true
    echo "✅ Merged $branch"
done

echo "📤 Pushing changes..."
git push origin main

echo "🎉 Quick merge completed!"