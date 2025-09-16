#!/bin/bash

# Script to merge all cursor branches into main
echo "🚀 Starting merge process for all cursor branches..."

# Get all cursor branches
branches=$(git branch -r | grep "cursor/create-and-deploy-new-content" | head -20)

for branch in $branches; do
    branch_name=$(echo $branch | sed 's/origin\///')
    echo "🔄 Processing branch: $branch_name"
    
    # Try to merge the branch
    if git merge "origin/$branch_name" --no-commit 2>/dev/null; then
        echo "  ✅ Successfully merged $branch_name"
        git commit -m "Merge $branch_name - clean merge"
    else
        echo "  ⚠️  Merge conflicts detected for $branch_name, resolving in favor of main..."
        
        # Resolve conflicts by keeping our version (main branch)
        git checkout --ours . 2>/dev/null
        git add . 2>/dev/null
        
        if git commit -m "Merge $branch_name - resolved conflicts in favor of main branch" 2>/dev/null; then
            echo "  ✅ Successfully resolved conflicts and merged $branch_name"
        else
            echo "  ❌ Failed to merge $branch_name, aborting..."
            git merge --abort 2>/dev/null
        fi
    fi
    
    echo "  ---"
done

# Push all changes to main branch
echo "📤 Pushing all changes to main branch..."
git push origin main

echo "🎉 Merge process completed!"