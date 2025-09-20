#!/bin/bash

# Batch merge script for cursor branches
set -e

echo "🚀 Starting batch merge of cursor branches..."
echo "⏰ Started at: $(date)"

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

# Process each branch
while IFS= read -r branch; do
    # Skip empty lines and trim whitespace
    branch=$(echo "$branch" | xargs)
    [ -z "$branch" ] && continue
    
    TOTAL_COUNT=$((TOTAL_COUNT + 1))
    log_message "🔄 Processing branch $TOTAL_COUNT: $branch"
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        log_message "✅ Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    elif git merge "origin/$branch" --no-edit 2>&1 | grep -q "Already up to date"; then
        log_message "ℹ️  Branch $branch already up to date"
        ALREADY_UPTODATE=$((ALREADY_UPTODATE + 1))
    else
        log_message "⚠️  Merge conflict in $branch, resolving..."
        CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        
        # Aggressive conflict resolution - keep main version
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit --no-edit 2>/dev/null; then
            log_message "✅ Resolved conflicts and merged $branch"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        else
            log_message "❌ Failed to resolve conflicts in $branch, skipping..."
            FAILED_COUNT=$((FAILED_COUNT + 1))
            # Reset to clean state
            git merge --abort 2>/dev/null || true
        fi
    fi
    
    # Push every 5 successful merges
    if [ $((SUCCESS_COUNT % 5)) -eq 0 ] && [ $SUCCESS_COUNT -gt 0 ]; then
        log_message "🔄 Pushing changes after $SUCCESS_COUNT successful merges..."
        git push origin main 2>/dev/null || log_message "⚠️  Push failed, continuing..."
    fi
    
    # Show progress every 10 branches
    if [ $((TOTAL_COUNT % 10)) -eq 0 ]; then
        log_message "📊 Progress: $TOTAL_COUNT processed, $SUCCESS_COUNT merged, $ALREADY_UPTODATE up-to-date, $CONFLICT_COUNT conflicts, $FAILED_COUNT failed"
    fi
    
done < batch1_branches.txt

# Final summary
log_message "🎯 BATCH MERGE SUMMARY"
log_message "======================"
log_message "✅ Successfully merged: $SUCCESS_COUNT branches"
log_message "ℹ️  Already up to date: $ALREADY_UPTODATE branches"
log_message "⚠️  Conflicts resolved: $CONFLICT_COUNT branches"
log_message "❌ Failed to merge: $FAILED_COUNT branches"
log_message "📋 Total processed: $TOTAL_COUNT branches"
log_message "⏰ Completed at: $(date)"

# Final push
log_message "🔄 Pushing final changes..."
git push origin main

log_message "🎉 Batch merge completed!"