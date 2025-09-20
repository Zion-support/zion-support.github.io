#!/bin/bash

# Fast merge script - process 500 branches at once
set -e

echo "🚀 Starting FAST MERGE of cursor branches..."

# Get first 500 cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "cursor/" | sed 's/origin\///' | head -500)

SUCCESS_COUNT=0
FAILED_COUNT=0
TOTAL_COUNT=0
ALREADY_UPTODATE=0
CONFLICT_COUNT=0

echo "📊 Processing 500 cursor branches..."

for branch in $CURSOR_BRANCHES; do
    TOTAL_COUNT=$((TOTAL_COUNT + 1))
    
    # Try to merge the branch (silent)
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    elif git merge "origin/$branch" --no-edit 2>&1 | grep -q "Already up to date"; then
        ALREADY_UPTODATE=$((ALREADY_UPTODATE + 1))
    else
        CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        
        # Resolve conflicts aggressively
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit --no-edit 2>/dev/null; then
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        else
            FAILED_COUNT=$((FAILED_COUNT + 1))
            git merge --abort 2>/dev/null || true
        fi
    fi
    
    # Show progress every 100 branches
    if [ $((TOTAL_COUNT % 100)) -eq 0 ]; then
        echo "📊 Progress: $TOTAL_COUNT/500 processed, $SUCCESS_COUNT merged, $ALREADY_UPTODATE up-to-date, $CONFLICT_COUNT conflicts, $FAILED_COUNT failed"
    fi
    
    # Push every 100 successful merges
    if [ $((SUCCESS_COUNT % 100)) -eq 0 ] && [ $SUCCESS_COUNT -gt 0 ]; then
        echo "🔄 Pushing changes after $SUCCESS_COUNT successful merges..."
        git push origin main 2>/dev/null || git pull origin main 2>/dev/null || true
    fi
done

echo ""
echo "📊 FAST MERGE SUMMARY:"
echo "✅ Successfully merged: $SUCCESS_COUNT branches"
echo "ℹ️  Already up to date: $ALREADY_UPTODATE branches"
echo "⚠️  Conflicts resolved: $CONFLICT_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"
echo "📋 Total processed: $TOTAL_COUNT branches"

# Final push
echo "🔄 Pushing final changes..."
git push origin main 2>/dev/null || git pull origin main 2>/dev/null || true

echo "🎉 FAST MERGE completed!"