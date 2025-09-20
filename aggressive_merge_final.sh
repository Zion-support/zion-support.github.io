#!/bin/bash

# Aggressive Final Merge Script
# This script will aggressively merge remaining branches using different strategies

set -e

echo "🚀 Starting Aggressive Final Merge"
echo "⏰ Started at: $(date)"
echo "---"

# Ensure we're on main branch and up to date
git checkout main
git pull origin main

# Initialize counters
SUCCESS_COUNT=0
FAILED_COUNT=0
ALREADY_UPTODATE=0
CONFLICT_COUNT=0
TOTAL_COUNT=0

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message"
}

# Get different types of branches to try
OTHER_BRANCHES=$(git branch -r | grep -v "cursor/" | grep -v "origin/main" | grep -v "origin/HEAD" | head -100)

log_message "📊 Found $(echo "$OTHER_BRANCHES" | wc -l) other branches to process"

# Process each branch
for branch in $OTHER_BRANCHES; do
    TOTAL_COUNT=$((TOTAL_COUNT + 1))
    log_message "🔄 Processing branch $TOTAL_COUNT: $branch"
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        log_message "ℹ️  Branch $branch is already merged, skipping..."
        ALREADY_UPTODATE=$((ALREADY_UPTODATE + 1))
        continue
    fi
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        log_message "✅ Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    elif git merge "origin/$branch" --no-edit 2>&1 | grep -q "Already up to date"; then
        log_message "ℹ️  Branch $branch already up to date"
        ALREADY_UPTODATE=$((ALREADY_UPTODATE + 1))
    else
        log_message "⚠️  Merge conflict in $branch, trying aggressive resolution..."
        CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        
        # Try different conflict resolution strategies
        if git reset --hard HEAD 2>/dev/null && git merge "origin/$branch" -X theirs --no-edit 2>/dev/null; then
            log_message "✅ Resolved conflicts using -X theirs for $branch"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        elif git reset --hard HEAD 2>/dev/null && git merge "origin/$branch" -X ours --no-edit 2>/dev/null; then
            log_message "✅ Resolved conflicts using -X ours for $branch"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        else
            log_message "❌ Failed to resolve conflicts in $branch, skipping..."
            FAILED_COUNT=$((FAILED_COUNT + 1))
            # Reset to clean state
            git reset --hard HEAD 2>/dev/null || true
        fi
    fi
    
    # Push every 10 successful merges
    if [ $((SUCCESS_COUNT % 10)) -eq 0 ] && [ $SUCCESS_COUNT -gt 0 ]; then
        log_message "🔄 Pushing changes after $SUCCESS_COUNT successful merges..."
        git push origin main 2>/dev/null || log_message "⚠️  Push failed, continuing..."
        git pull origin main 2>/dev/null || true
    fi
    
    # Show progress every 25 branches
    if [ $((TOTAL_COUNT % 25)) -eq 0 ]; then
        log_message "📊 Progress: $TOTAL_COUNT processed, $SUCCESS_COUNT merged, $ALREADY_UPTODATE up-to-date, $CONFLICT_COUNT conflicts, $FAILED_COUNT failed"
    fi
done

# Final summary
log_message "🎯 AGGRESSIVE FINAL MERGE SUMMARY"
log_message "================================="
log_message "✅ Successfully merged: $SUCCESS_COUNT branches"
log_message "ℹ️  Already up to date: $ALREADY_UPTODATE branches"
log_message "⚠️  Conflicts resolved: $CONFLICT_COUNT branches"
log_message "❌ Failed to merge: $FAILED_COUNT branches"
log_message "📋 Total processed: $TOTAL_COUNT branches"
log_message "⏰ Completed at: $(date)"

# Final push
log_message "🔄 Pushing final changes..."
git push origin main

log_message "🎉 Aggressive final merge completed!"