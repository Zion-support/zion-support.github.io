#!/bin/bash

# Fast merge remaining cursor branches
set -e

echo "🚀 Fast merging remaining cursor branches..."

# Get remaining branches
REMAINING_BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sed 's/origin\///' | head -100)

MERGED_COUNT=0
TOTAL_COUNT=$(echo "$REMAINING_BRANCHES" | wc -l)

echo "📊 Processing $TOTAL_COUNT branches..."

for branch in $REMAINING_BRANCHES; do
    echo -n "🔄 $branch... "
    
    # Try fast-forward merge
    if git merge --ff-only origin/$branch 2>/dev/null; then
        echo "✅"
        MERGED_COUNT=$((MERGED_COUNT + 1))
    else
        echo "⏭️"
    fi
    
    # Push every 10 merges
    if [ $((MERGED_COUNT % 10)) -eq 0 ] && [ $MERGED_COUNT -gt 0 ]; then
        echo "📤 Pushing progress... ($MERGED_COUNT merged)"
        git push origin main
    fi
done

echo "📤 Final push..."
git push origin main

echo "🎉 Fast merge complete! Merged $MERGED_COUNT out of $TOTAL_COUNT branches"