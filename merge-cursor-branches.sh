#!/bin/bash

# Script to systematically merge cursor enhancement branches
set -e

echo "🚀 Starting systematic merge of cursor enhancement branches..."
echo "⏰ Started at: $(date)"
echo "---"

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message"
}

# Get list of cursor enhancement branches that are not merged
BRANCHES=$(git branch -r --no-merged main | grep "cursor/enhance" | sed 's/^[[:space:]]*origin\///' | head -5)

# Counter for tracking progress
SUCCESS_COUNT=0
FAILED_COUNT=0
TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)

log_message "📊 Found $TOTAL_BRANCHES cursor enhancement branches to merge (test run - first 5)"

# Process each branch
for branch in $BRANCHES; do
    log_message "🔄 Processing branch: $branch"
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        log_message "✅ Successfully merged: $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        log_message "⚠️  Merge conflict detected in: $branch"
        
        # Try to resolve conflicts automatically
        if ./resolve-merge-conflicts.sh 2>/dev/null; then
            log_message "✅ Conflict resolved and merged: $branch"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        else
            log_message "❌ Failed to resolve conflicts for: $branch"
            FAILED_COUNT=$((FAILED_COUNT + 1))
            
            # Abort the merge and continue with next branch
            git merge --abort 2>/dev/null || true
        fi
    fi
    
    # Push changes after each successful merge
    if [ $? -eq 0 ]; then
        log_message "🚀 Pushing changes for: $branch"
        git push origin main
    fi
    
    echo "---"
done

# Summary
log_message "📊 Merge Summary:"
log_message "   ✅ Successfully merged: $SUCCESS_COUNT branches"
log_message "   ❌ Failed to merge: $FAILED_COUNT branches"
log_message "   📈 Success rate: $(echo "scale=1; $SUCCESS_COUNT * 100 / $TOTAL_BRANCHES" | bc 2>/dev/null || echo "N/A")%"

if [ $FAILED_COUNT -gt 0 ]; then
    log_message "⚠️  Some branches failed to merge. Manual review may be needed."
fi

log_message "🎉 Systematic merge process completed!"

echo "🎯 Process completed! Check the logs above for details."