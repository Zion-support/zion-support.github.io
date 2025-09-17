#!/bin/bash

echo "🚀 Committing resolved conflicts and merging branches..."

# Add all resolved files
echo "📝 Adding resolved files to git..."
git add .

# Commit the resolved conflicts
echo "💾 Committing resolved merge conflicts..."
git commit -m "Resolve all merge conflicts - $(date)"

# Get a list of some key branches to merge (limit to first 10 to avoid overwhelming)
echo "📋 Getting list of branches to merge..."
KEY_BRANCHES=$(git branch -r --no-merged main | grep "origin/cursor/" | head -10 | sed 's/origin\///')

echo "🔍 Found $(echo "$KEY_BRANCHES" | wc -l) key branches to merge"

# Merge each branch
for branch in $KEY_BRANCHES; do
    echo "🔄 Attempting to merge $branch..."
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
    else
        echo "⚠️  Merge conflicts in $branch, trying alternative strategy..."
        git merge --abort
        
        # Try with recursive strategy
        if git merge --no-commit --no-ff "origin/$branch" --strategy=recursive -X theirs 2>/dev/null; then
            echo "✅ Successfully merged $branch with recursive strategy"
            git commit -m "Merge $branch into main using recursive strategy - $(date)"
        else
            echo "❌ Failed to merge $branch"
            git merge --abort
        fi
    fi
    
    echo "---"
done

echo "🎉 Merge process completed!"
echo "📊 Current status:"
git status --short