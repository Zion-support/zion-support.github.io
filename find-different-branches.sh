#!/bin/bash

# Script to find cursor branches that actually have differences from main
set -e

echo "🔍 Finding cursor branches with actual differences from main..."
echo "📊 Total cursor branches available: $(git branch -r | grep "origin/cursor/" | wc -l)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
MAX_BRANCHES_TO_CHECK=100
LOG_FILE="different-branches-$(date +%Y%m%d-%H%M%S).txt"

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
}

# Initialize counters
BRANCHES_WITH_DIFFERENCES=0
BRANCHES_CHECKED=0
BRANCHES_WITHOUT_DIFFERENCES=0

# Get list of cursor branches
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort | head -$MAX_BRANCHES_TO_CHECK)

log_message "🔍 Checking first $MAX_BRANCHES_TO_CHECK branches for differences..."

for branch in $BRANCHES; do
    BRANCHES_CHECKED=$((BRANCHES_CHECKED + 1))
    
    log_message "📋 Checking branch $BRANCHES_CHECKED: $branch"
    
    # Fetch the branch
    git fetch origin "$branch" >/dev/null 2>&1
    
    # Check if there are differences
    if git diff --quiet main "origin/$branch"; then
        log_message "⏭️  Branch $branch has no differences"
        BRANCHES_WITHOUT_DIFFERENCES=$((BRANCHES_WITHOUT_DIFFERENCES + 1))
    else
        log_message "✅ Branch $branch HAS DIFFERENCES!"
        BRANCHES_WITH_DIFFERENCES=$((BRANCHES_WITH_DIFFERENCES + 1))
        
        # Show what files are different
        DIFFERENT_FILES=$(git diff --name-only main "origin/$branch" | head -5)
        if [ -n "$DIFFERENT_FILES" ]; then
            log_message "📁 Different files: $DIFFERENT_FILES"
        fi
        
        # Show the number of files changed
        TOTAL_FILES=$(git diff --name-only main "origin/$branch" | wc -l)
        log_message "📊 Total files changed: $TOTAL_FILES"
    fi
    
    echo "---"
    
    # Progress update
    log_message "📊 Progress: $BRANCHES_CHECKED checked, $BRANCHES_WITH_DIFFERENCES with differences, $BRANCHES_WITHOUT_DIFFERENCES without differences"
    
    # Stop if we found enough branches with differences
    if [ $BRANCHES_WITH_DIFFERENCES -ge 10 ]; then
        log_message "🎯 Found 10 branches with differences, stopping search"
        break
    fi
done

# Summary
echo ""
log_message "🎉 Branch difference search completed!"
log_message "📊 Summary:"
log_message "   📋 Total branches checked: $BRANCHES_CHECKED"
log_message "   ✅ Branches with differences: $BRANCHES_WITH_DIFFERENCES"
log_message "   ⏭️  Branches without differences: $BRANCHES_WITHOUT_DIFFERENCES"
log_message "⏰ Completed at: $(date)"

# Recommendations
log_message ""
log_message "💡 Recommendations:"
if [ $BRANCHES_WITH_DIFFERENCES -gt 0 ]; then
    log_message "   1. Focus on merging branches with actual differences"
    log_message "   2. Skip branches that are already up to date"
    log_message "   3. Consider running merge process only on different branches"
else
    log_message "   1. Most branches appear to be already merged"
    log_message "   2. Check if there are newer branches not in this sample"
    log_message "   3. Consider checking branches from different time periods"
fi