#!/bin/bash

# Mass merge all branches script
set -e

echo "🚀 Starting MASS MERGE of ALL branches..."

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "cursor/" | sed 's/origin\///' | head -500)

SUCCESS_COUNT=0
FAILED_COUNT=0
TOTAL_COUNT=0
ALREADY_UPTODATE=0

echo "📊 Found $(git branch -r | grep "cursor/" | wc -l) cursor branches to process"

for branch in $CURSOR_BRANCHES; do
    TOTAL_COUNT=$((TOTAL_COUNT + 1))
    echo "📋 Processing branch $TOTAL_COUNT: $branch"
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    elif git merge "origin/$branch" --no-edit 2>&1 | grep -q "Already up to date"; then
        echo "ℹ️  Branch $branch already up to date"
        ALREADY_UPTODATE=$((ALREADY_UPTODATE + 1))
    else
        echo "⚠️  Merge conflict in $branch, resolving..."
        
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
    
    # Show progress every 100 branches
    if [ $((TOTAL_COUNT % 100)) -eq 0 ]; then
        echo "📊 Progress: $TOTAL_COUNT processed, $SUCCESS_COUNT merged, $ALREADY_UPTODATE up-to-date, $FAILED_COUNT failed"
    fi
done

echo ""
echo "📊 MASS MERGE SUMMARY:"
echo "✅ Successfully merged: $SUCCESS_COUNT branches"
echo "ℹ️  Already up to date: $ALREADY_UPTODATE branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"
echo "📋 Total processed: $TOTAL_COUNT branches"

# Final push
echo "🔄 Pushing final changes..."
git push origin main

echo "🎉 MASS MERGE completed!"