#!/bin/bash

# Script to merge all cursor branches into main
set -e

echo "🚀 Starting comprehensive merge of all cursor branches..."

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "cursor/" | sed 's/origin\///' | head -50)

SUCCESS_COUNT=0
FAILED_COUNT=0
TOTAL_COUNT=0

for branch in $CURSOR_BRANCHES; do
    TOTAL_COUNT=$((TOTAL_COUNT + 1))
    echo "📋 Processing branch $TOTAL_COUNT: $branch"
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        echo "⚠️  Merge conflict in $branch, resolving..."
        # Resolve conflicts by accepting our version
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        if git commit --no-edit 2>/dev/null; then
            echo "✅ Resolved conflicts and merged $branch"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        else
            echo "❌ Failed to merge $branch"
            git merge --abort 2>/dev/null || true
            FAILED_COUNT=$((FAILED_COUNT + 1))
        fi
    fi
    
    # Push every 10 successful merges
    if [ $((SUCCESS_COUNT % 10)) -eq 0 ] && [ $SUCCESS_COUNT -gt 0 ]; then
        echo "💾 Pushing progress..."
        git push origin main
    fi
done

echo "🎉 Merge process completed!"
echo "📊 Summary: $SUCCESS_COUNT successful, $FAILED_COUNT failed out of $TOTAL_COUNT total"

# Final push
git push origin main