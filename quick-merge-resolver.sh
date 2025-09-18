#!/bin/bash

# Quick merge resolver for open PRs
set -e

echo "🚀 Starting quick merge resolution..."

# Ensure we're on main
git checkout main
git pull origin main

# Get all cursor branches
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | head -10)

echo "📊 Processing branches: $BRANCHES"

for branch in $BRANCHES; do
    echo "🔄 Processing $branch..."
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main"
    else
        echo "⚠️  Conflicts in $branch, resolving..."
        
        # Resolve conflicts by keeping main version for config files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        for file in $CONFLICTED_FILES; do
            if [[ "$file" == "package.json" || "$file" == "next.config.js" || "$file" == "tsconfig.json" ]]; then
                git checkout --ours "$file"
            else
                git checkout --theirs "$file"
            fi
        done
        
        git add .
        git commit -m "Resolve conflicts for $branch"
        echo "✅ Resolved conflicts for $branch"
    fi
done

echo "🎉 Quick merge completed!"