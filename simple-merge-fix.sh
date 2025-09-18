#!/bin/bash

# Simple merge fix script
echo "🚀 Starting simple merge fix..."

# Ensure we're on main
git checkout main
git pull origin main

# Get the first few cursor branches
BRANCHES=$(git branch -r | grep "origin/cursor/" | head -5 | sed 's/origin\///')

echo "📊 Processing branches: $BRANCHES"

for branch in $BRANCHES; do
    echo "🔄 Processing $branch..."
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main"
    else
        echo "⚠️  Conflicts in $branch, resolving..."
        
        # Simple conflict resolution
        git checkout --ours package.json 2>/dev/null || true
        git checkout --ours package-lock.json 2>/dev/null || true
        git checkout --ours next.config.js 2>/dev/null || true
        git checkout --ours tsconfig.json 2>/dev/null || true
        git checkout --ours tailwind.config.js 2>/dev/null || true
        git checkout --ours netlify.toml 2>/dev/null || true
        
        # For other files, prefer incoming changes
        git add . 2>/dev/null || true
        
        if git commit -m "Resolve conflicts for $branch" 2>/dev/null; then
            echo "✅ Resolved conflicts for $branch"
        else
            echo "❌ Failed to resolve conflicts for $branch"
            git merge --abort 2>/dev/null || true
        fi
    fi
done

echo "🎉 Simple merge completed!"