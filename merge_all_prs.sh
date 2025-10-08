#!/bin/bash

# Script to merge all open PRs into main branch
# Handles merge conflicts automatically

set -e

MAIN_BRANCH="main"
LOG_FILE="pr_merge_log_$(date +%Y%m%d_%H%M%S).txt"
SUCCESS_COUNT=0
FAILURE_COUNT=0
CONFLICT_COUNT=0

echo "Starting PR merge process..." | tee -a "$LOG_FILE"
echo "Target branch: $MAIN_BRANCH" | tee -a "$LOG_FILE"
echo "======================================" | tee -a "$LOG_FILE"

# Read PR data
if [ ! -f "open_prs.json" ]; then
    echo "Error: open_prs.json not found" | tee -a "$LOG_FILE"
    exit 1
fi

# Extract branch names from JSON
BRANCHES=$(python3 -c "
import json
data = json.load(open('open_prs.json'))
for pr in data:
    branch = pr.get('head', {}).get('ref', '')
    if branch:
        print(branch)
")

# Ensure we're on main
git checkout "$MAIN_BRANCH" 2>&1 | tee -a "$LOG_FILE"

# Process each branch
for BRANCH in $BRANCHES; do
    echo "" | tee -a "$LOG_FILE"
    echo "Processing branch: $BRANCH" | tee -a "$LOG_FILE"
    echo "--------------------------------------" | tee -a "$LOG_FILE"
    
    # Fetch the branch
    if git fetch origin "$BRANCH:$BRANCH" 2>&1 | tee -a "$LOG_FILE"; then
        echo "✓ Fetched $BRANCH" | tee -a "$LOG_FILE"
    else
        echo "✗ Failed to fetch $BRANCH" | tee -a "$LOG_FILE"
        ((FAILURE_COUNT++))
        continue
    fi
    
    # Attempt merge
    if git merge "$BRANCH" --no-edit -m "Merge branch '$BRANCH' into main" 2>&1 | tee -a "$LOG_FILE"; then
        echo "✓ Successfully merged $BRANCH" | tee -a "$LOG_FILE"
        ((SUCCESS_COUNT++))
    else
        # Check if there are conflicts
        if git status | grep -q "both modified\|both added"; then
            echo "⚠ Merge conflict detected for $BRANCH" | tee -a "$LOG_FILE"
            ((CONFLICT_COUNT++))
            
            # Auto-resolve conflicts by keeping main version
            echo "  Resolving conflicts by keeping main version..." | tee -a "$LOG_FILE"
            git checkout --theirs . 2>&1 | tee -a "$LOG_FILE" || true
            git add -A 2>&1 | tee -a "$LOG_FILE"
            
            if git commit --no-edit -m "Merge branch '$BRANCH' into main (conflicts resolved)" 2>&1 | tee -a "$LOG_FILE"; then
                echo "✓ Merged $BRANCH with conflict resolution" | tee -a "$LOG_FILE"
                ((SUCCESS_COUNT++))
            else
                echo "✗ Failed to commit merge for $BRANCH" | tee -a "$LOG_FILE"
                git merge --abort 2>&1 | tee -a "$LOG_FILE" || true
                ((FAILURE_COUNT++))
            fi
        else
            echo "✗ Merge failed for $BRANCH (non-conflict error)" | tee -a "$LOG_FILE"
            git merge --abort 2>&1 | tee -a "$LOG_FILE" || true
            ((FAILURE_COUNT++))
        fi
    fi
done

echo "" | tee -a "$LOG_FILE"
echo "======================================" | tee -a "$LOG_FILE"
echo "Merge Summary:" | tee -a "$LOG_FILE"
echo "  Successful merges: $SUCCESS_COUNT" | tee -a "$LOG_FILE"
echo "  Conflicts resolved: $CONFLICT_COUNT" | tee -a "$LOG_FILE"
echo "  Failed merges: $FAILURE_COUNT" | tee -a "$LOG_FILE"
echo "======================================" | tee -a "$LOG_FILE"
echo "Log saved to: $LOG_FILE" | tee -a "$LOG_FILE"

if [ $FAILURE_COUNT -eq 0 ]; then
    echo "✓ All PRs merged successfully!" | tee -a "$LOG_FILE"
    exit 0
else
    echo "⚠ Some PRs failed to merge. Check log for details." | tee -a "$LOG_FILE"
    exit 1
fi