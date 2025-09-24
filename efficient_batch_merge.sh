#!/bin/bash

# Efficient batch merge script for all cursor branches
set -e

echo "Starting efficient batch merge process..."

# Configuration
BATCH_SIZE=50
MAX_RETRIES=3
LOG_FILE="/workspace/merge_log.txt"

# Initialize log file
echo "Merge process started at $(date)" > "$LOG_FILE"

# Function to log messages
log_message() {
    echo "$(date): $1" | tee -a "$LOG_FILE"
}

# Function to merge a single branch with conflict resolution
merge_branch() {
    local branch=$1
    local attempt=1
    
    log_message "Attempting to merge branch: $branch"
    
    while [ $attempt -le $MAX_RETRIES ]; do
        log_message "Merge attempt $attempt for branch: $branch"
        
        # Try different merge strategies
        if [ $attempt -eq 1 ]; then
            # First attempt: try normal merge
            if git merge "origin/$branch" --no-commit 2>/dev/null; then
                git commit -m "Merge $branch into main"
                log_message "Successfully merged $branch (normal merge)"
                return 0
            fi
        elif [ $attempt -eq 2 ]; then
            # Second attempt: prefer main branch changes
            if git merge "origin/$branch" --no-commit --strategy=recursive -X ours 2>/dev/null; then
                git commit -m "Merge $branch into main, auto-resolve by preferring main"
                log_message "Successfully merged $branch (preferring main)"
                return 0
            fi
        else
            # Third attempt: prefer branch changes
            if git merge "origin/$branch" --no-commit --strategy=recursive -X theirs 2>/dev/null; then
                git commit -m "Merge $branch into main, auto-resolve by preferring branch"
                log_message "Successfully merged $branch (preferring branch)"
                return 0
            fi
        fi
        
        # Clean up failed merge
        git merge --abort 2>/dev/null || git reset --hard HEAD
        
        attempt=$((attempt + 1))
    done
    
    log_message "Failed to merge $branch after $MAX_RETRIES attempts"
    return 1
}

# Get all branches that need to be merged
ALL_BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed 's/origin\///' | sort)
BUILD_BRANCHES=$(git branch -r | grep "cursor/build-nextjs-app-with-dependency-install" | sed 's/origin\///')

ALL_BRANCHES="$ALL_BRANCHES $BUILD_BRANCHES"
TOTAL_BRANCHES=$(echo "$ALL_BRANCHES" | wc -w)

log_message "Total branches to merge: $TOTAL_BRANCHES"

SUCCESS_COUNT=0
FAILED_COUNT=0
FAILED_BRANCHES=()

# Process branches in batches
current_batch=0
processed_count=0

for branch in $ALL_BRANCHES; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    processed_count=$((processed_count + 1))
    
    # Check if we need to start a new batch
    if [ $((processed_count % BATCH_SIZE)) -eq 1 ]; then
        current_batch=$((current_batch + 1))
        log_message "Starting batch $current_batch (branches $processed_count-$((processed_count + BATCH_SIZE - 1)))"
    fi
    
    # Verify branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        log_message "Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor "origin/$branch" HEAD 2>/dev/null; then
        log_message "Branch $branch is already merged, skipping..."
        continue
    fi
    
    # Attempt to merge the branch
    if merge_branch "$branch"; then
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        FAILED_COUNT=$((FAILED_COUNT + 1))
        FAILED_BRANCHES+=("$branch")
    fi
    
    # Progress update every 10 branches
    if [ $((processed_count % 10)) -eq 0 ]; then
        log_message "Progress: $processed_count/$TOTAL_BRANCHES branches processed. Success: $SUCCESS_COUNT, Failed: $FAILED_COUNT"
    fi
done

# Final summary
log_message "=========================================="
log_message "Batch merge completed!"
log_message "Successful merges: $SUCCESS_COUNT"
log_message "Failed merges: $FAILED_COUNT"
log_message "=========================================="

if [ $FAILED_COUNT -gt 0 ]; then
    log_message "Failed branches:"
    for failed_branch in "${FAILED_BRANCHES[@]}"; do
        log_message "  - $failed_branch"
    done
fi

log_message "Final git status:"
git status --short >> "$LOG_FILE"

echo "Merge process completed. Check $LOG_FILE for details."