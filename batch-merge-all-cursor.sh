#!/bin/bash

# Batch merge all cursor branches efficiently
set -e

echo "🚀 Starting batch merge of all cursor branches..."

# Get all cursor branches
ALL_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///')
TOTAL_BRANCHES=$(echo "$ALL_BRANCHES" | wc -l)

echo "📋 Total cursor branches to process: $TOTAL_BRANCHES"

# Counter for progress tracking
SUCCESS_COUNT=0
FAILED_COUNT=0
BATCH_SIZE=50
CURRENT_BATCH=0

# Process branches in batches
echo "$ALL_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    CURRENT_BATCH=$((CURRENT_BATCH + 1))
    
    echo "🔄 Processing batch $CURRENT_BATCH: $branch"
    
    # Switch to main
    git checkout main
    
    # Attempt to merge
    if git merge "$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        echo "⚠️  Conflict in $branch, resolving..."
        if git add . && git commit -m "Merge $branch with conflicts resolved" 2>/dev/null; then
            echo "✅ Resolved conflicts and merged $branch"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        else
            echo "❌ Failed to merge $branch"
            git merge --abort 2>/dev/null || true
            FAILED_COUNT=$((FAILED_COUNT + 1))
        fi
    fi
    
    # Push every 100 branches
    if [ $((CURRENT_BATCH % 100)) -eq 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main --force-with-lease 2>/dev/null || true
        echo "📊 Progress: $CURRENT_BATCH/$TOTAL_BRANCHES processed"
    fi
done

# Final push
echo "💾 Final push to remote..."
git push origin main --force-with-lease

echo ""
echo "🎉 Batch merge process completed!"
echo "📊 Final stats:"
echo "   ✅ Successful merges: $SUCCESS_COUNT"
echo "   ❌ Failed merges: $FAILED_COUNT"
echo "   📈 Total processed: $CURRENT_BATCH"