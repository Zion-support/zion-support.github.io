#!/bin/bash

# Simple script to merge the most recent PRs
set -e

echo "🚀 Starting simple PR merge process..."

# Get the latest branches
echo "📋 Fetching latest branches..."
git fetch origin

# Get the 10 most recent branches
RECENT_BRANCHES=$(git branch -r | grep -E "cursor/fix-errors-and-merge-to-main" | tail -10 | sed 's/origin\///' | sort -r)

echo "📊 Found recent branches to merge:"
echo "$RECENT_BRANCHES"

# Process each branch
COUNT=0
MERGED=0
FAILED=0

for branch in $RECENT_BRANCHES; do
    ((COUNT++))
    echo ""
    echo "🔄 [$COUNT/10] Processing branch: $branch"
    
    # Checkout and merge
    if git checkout -b temp-$branch origin/$branch 2>/dev/null; then
        git checkout main
        
        if git merge --no-ff temp-$branch -m "Merge $branch into main" 2>/dev/null; then
            echo "✅ Successfully merged $branch"
            ((MERGED++))
            
            # Push the merge
            git push origin main
            
            # Clean up
            git branch -D temp-$branch
        else
            echo "❌ Failed to merge $branch due to conflicts"
            git merge --abort
            git branch -D temp-$branch
            ((FAILED++))
        fi
    else
        echo "⚠️  Could not checkout branch $branch"
        ((FAILED++))
    fi
done

echo ""
echo "🎯 Summary:"
echo "  Total processed: $COUNT"
echo "  Successfully merged: $MERGED"
echo "  Failed: $FAILED"

echo ""
echo "✅ Simple merge process completed!"