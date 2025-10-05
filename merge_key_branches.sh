#!/bin/bash

echo "🚀 Starting targeted merge of key branches..."

# Get the most recent cursor branches
RECENT_BRANCHES=$(git branch -r | grep "cursor/" | head -10 | sed 's/origin\///')

echo "📋 Found recent branches to merge:"
echo "$RECENT_BRANCHES"

SUCCESSFUL_MERGES=0
FAILED_MERGES=0

for branch in $RECENT_BRANCHES; do
    echo ""
    echo "🔄 Attempting to merge $branch..."
    
    if git merge "origin/$branch" --no-ff -m "Merge $branch into main"; then
        echo "✅ Successfully merged $branch"
        ((SUCCESSFUL_MERGES++))
    else
        echo "❌ Failed to merge $branch"
        git merge --abort 2>/dev/null
        ((FAILED_MERGES++))
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "  ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "  ❌ Failed merges: $FAILED_MERGES"
echo "  📝 Total branches processed: $((SUCCESSFUL_MERGES + FAILED_MERGES))"

if [ $SUCCESSFUL_MERGES -gt 0 ]; then
    echo ""
    echo "🚀 Pushing merged changes to origin..."
    git push origin main
fi

echo "✅ Targeted merge process completed!"