#!/bin/bash

# Script to merge PRs in smaller batches
set -e

echo "🚀 Starting batch PR merge process..."

# Get the first 10 cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | head -10 | sed 's/origin\///')

echo "📊 Processing first 10 cursor branches"

count=0
for branch in $CURSOR_BRANCHES; do
    count=$((count + 1))
    echo ""
    echo "🔄 Processing branch $count/10: $branch"
    
    # Try to merge directly without checkout
    if git merge "origin/$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch into main"
    else
        echo "⚠️  Merge conflict in $branch - attempting to resolve..."
        
        # Abort the failed merge
        git merge --abort 2>/dev/null || true
        
        # Try with checkout and conflict resolution
        if git checkout "$branch" 2>/dev/null; then
            git pull origin "$branch" 2>/dev/null || true
            git checkout main
            
            # Try merge again
            if git merge "$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
                echo "✅ Successfully merged $branch after checkout"
            else
                echo "❌ Skipping $branch due to unresolvable conflicts"
                git merge --abort 2>/dev/null || true
            fi
        else
            echo "❌ Failed to checkout $branch - skipping"
        fi
    fi
done

echo ""
echo "🎉 Batch merge completed! Processed $count branches"