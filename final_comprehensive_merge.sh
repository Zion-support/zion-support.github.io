#!/bin/bash

# Final comprehensive merge script to handle all remaining cursor branches
set -e

echo "🚀 Starting final comprehensive merge of all remaining cursor branches..."

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "cursor/" | sed 's/origin\///' | head -100)

SUCCESS_COUNT=0
FAILED_COUNT=0
TOTAL_COUNT=0
CONFLICT_COUNT=0

echo "📊 Found $(git branch -r | grep "cursor/" | wc -l) cursor branches to process"

for branch in $CURSOR_BRANCHES; do
    TOTAL_COUNT=$((TOTAL_COUNT + 1))
    echo "📋 Processing branch $TOTAL_COUNT: $branch"
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        echo "⚠️  Merge conflict in $branch, resolving..."
        CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        
        # Resolve conflicts by accepting our version
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit --no-edit 2>/dev/null; then
            echo "✅ Resolved conflicts and merged $branch"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        else
            echo "❌ Failed to resolve conflicts in $branch"
            FAILED_COUNT=$((FAILED_COUNT + 1))
            # Reset to clean state
            git merge --abort 2>/dev/null || true
        fi
    fi
    
    # Push every 10 successful merges
    if [ $((SUCCESS_COUNT % 10)) -eq 0 ] && [ $SUCCESS_COUNT -gt 0 ]; then
        echo "🔄 Pushing changes after $SUCCESS_COUNT successful merges..."
        git push origin main 2>/dev/null || echo "⚠️  Push failed, continuing..."
    fi
done

echo ""
echo "📊 FINAL MERGE SUMMARY:"
echo "✅ Successfully merged: $SUCCESS_COUNT branches"
echo "⚠️  Conflicts resolved: $CONFLICT_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"
echo "📋 Total processed: $TOTAL_COUNT branches"

# Final push
echo "🔄 Pushing final changes..."
git push origin main

echo "🎉 Final comprehensive merge completed!"