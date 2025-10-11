#!/bin/bash

# Comprehensive PR Merger Script
# This script will systematically merge all open branches

set -e

LOG_FILE="merge-log-$(date +%Y%m%d-%H%M%S).txt"
SUCCESS_COUNT=0
SKIP_COUNT=0
CONFLICT_COUNT=0

echo "=== Comprehensive PR Merger ===" | tee -a "$LOG_FILE"
echo "Started at: $(date)" | tee -a "$LOG_FILE"

# Make sure we're on main and up to date
git checkout main
git pull origin main

# Get all remote branches related to fix-errors and check-fix-push tasks
BRANCHES=$(git branch -r | grep -E 'origin/cursor/(fix-errors-and-merge|check-fix-push)' | sed 's/origin\///' | head -100)

TOTAL=$(echo "$BRANCHES" | wc -l)
CURRENT=0

echo "Found $TOTAL branches to process" | tee -a "$LOG_FILE"

for BRANCH in $BRANCHES; do
    CURRENT=$((CURRENT + 1))
    echo "" | tee -a "$LOG_FILE"
    echo "[$CURRENT/$TOTAL] Processing: $BRANCH" | tee -a "$LOG_FILE"
    
    # Check if branch is already merged
    MERGE_BASE=$(git merge-base main "origin/$BRANCH" 2>/dev/null || echo "")
    HEAD_COMMIT=$(git rev-parse main 2>/dev/null || echo "")
    
    if [ "$MERGE_BASE" == "$HEAD_COMMIT" ]; then
        echo "  ✓ Already merged, skipping" | tee -a "$LOG_FILE"
        SKIP_COUNT=$((SKIP_COUNT + 1))
        continue
    fi
    
    # Check if there are any actual changes
    DIFF_COUNT=$(git diff main..."origin/$BRANCH" --stat | wc -l)
    if [ "$DIFF_COUNT" -eq 0 ]; then
        echo "  ✓ No changes, skipping" | tee -a "$LOG_FILE"
        SKIP_COUNT=$((SKIP_COUNT + 1))
        continue
    fi
    
    # Try to merge
    echo "  → Attempting merge..." | tee -a "$LOG_FILE"
    if git merge --no-edit "origin/$BRANCH" 2>&1 | tee -a "$LOG_FILE"; then
        echo "  ✓ Successfully merged" | tee -a "$LOG_FILE"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        echo "  ✗ Merge conflict detected" | tee -a "$LOG_FILE"
        CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        
        # Try to auto-resolve common conflicts
        git status | grep "both modified" | awk '{print $NF}' | while read FILE; do
            if [[ "$FILE" == *.json ]] || [[ "$FILE" == *.md ]] || [[ "$FILE" == *report* ]]; then
                # For reports and JSON files, use incoming version
                git checkout --theirs "$FILE" 2>/dev/null || true
            elif [[ "$FILE" == *package*.json ]] || [[ "$FILE" == *tsconfig*.json ]]; then
                # For config files, use main version
                git checkout --ours "$FILE" 2>/dev/null || true
            fi
        done
        
        # Try to continue merge
        git add -A
        if git commit --no-edit 2>&1 | tee -a "$LOG_FILE"; then
            echo "  ✓ Conflicts auto-resolved" | tee -a "$LOG_FILE"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            CONFLICT_COUNT=$((CONFLICT_COUNT - 1))
        else
            echo "  ✗ Could not auto-resolve, aborting merge" | tee -a "$LOG_FILE"
            git merge --abort 2>/dev/null || true
        fi
    fi
    
    # Progress update every 10 branches
    if [ $((CURRENT % 10)) -eq 0 ]; then
        echo "" | tee -a "$LOG_FILE"
        echo "=== Progress Update ===" | tee -a "$LOG_FILE"
        echo "Processed: $CURRENT/$TOTAL" | tee -a "$LOG_FILE"
        echo "Successful: $SUCCESS_COUNT" | tee -a "$LOG_FILE"
        echo "Skipped: $SKIP_COUNT" | tee -a "$LOG_FILE"
        echo "Conflicts: $CONFLICT_COUNT" | tee -a "$LOG_FILE"
        echo "" | tee -a "$LOG_FILE"
    fi
done

echo "" | tee -a "$LOG_FILE"
echo "=== Final Summary ===" | tee -a "$LOG_FILE"
echo "Total branches processed: $TOTAL" | tee -a "$LOG_FILE"
echo "Successfully merged: $SUCCESS_COUNT" | tee -a "$LOG_FILE"
echo "Skipped (already merged/no changes): $SKIP_COUNT" | tee -a "$LOG_FILE"
echo "Failed (conflicts): $CONFLICT_COUNT" | tee -a "$LOG_FILE"
echo "Completed at: $(date)" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"
echo "Log file: $LOG_FILE" | tee -a "$LOG_FILE"

exit 0