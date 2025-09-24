#!/bin/bash

# Aggressive merge strategy for handling large number of branches
set -e

echo "Starting aggressive merge strategy..."

# Configuration
BATCH_SIZE=100
MAX_ATTEMPTS=2
LOG_FILE="/workspace/aggressive_merge_log.txt"

# Initialize log file
echo "Aggressive merge process started at $(date)" > "$LOG_FILE"

# Function to log messages
log_message() {
    echo "$(date): $1" | tee -a "$LOG_FILE"
}

# Function to aggressively merge branches
aggressive_merge() {
    local branch=$1
    local attempt=1
    
    log_message "Aggressively merging branch: $branch"
    
    # Try aggressive merge strategies
    if git merge "origin/$branch" --no-commit --strategy=recursive -X ours 2>/dev/null; then
        git commit -m "Aggressive merge $branch into main (preferring main)"
        log_message "Successfully merged $branch (aggressive - preferring main)"
        return 0
    elif git merge "origin/$branch" --no-commit --strategy=recursive -X theirs 2>/dev/null; then
        git commit -m "Aggressive merge $branch into main (preferring branch)"
        log_message "Successfully merged $branch (aggressive - preferring branch)"
        return 0
    else
        # Final attempt: use octopus merge strategy
        if git merge "origin/$branch" --no-commit --strategy=octopus 2>/dev/null; then
            git commit -m "Aggressive merge $branch into main (octopus strategy)"
            log_message "Successfully merged $branch (octopus strategy)"
            return 0
        fi
    fi
    
    # Clean up failed merge
    git merge --abort 2>/dev/null || git reset --hard HEAD
    
    log_message "Failed to aggressively merge $branch"
    return 1
}

# Get all branches that need to be merged
ALL_BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed 's/origin\///' | sort)
BUILD_BRANCHES=$(git branch -r | grep "cursor/build-nextjs-app-with-dependency-install" | sed 's/origin\///')

ALL_BRANCHES="$ALL_BRANCHES $BUILD_BRANCHES"
TOTAL_BRANCHES=$(echo "$ALL_BRANCHES" | wc -w)

log_message "Total branches to merge aggressively: $TOTAL_BRANCHES"

SUCCESS_COUNT=0
FAILED_COUNT=0
FAILED_BRANCHES=()

# Process branches in large batches
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
        log_message "Starting aggressive batch $current_batch (branches $processed_count-$((processed_count + BATCH_SIZE - 1)))"
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
    
    # Attempt aggressive merge
    if aggressive_merge "$branch"; then
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        FAILED_COUNT=$((FAILED_COUNT + 1))
        FAILED_BRANCHES+=("$branch")
    fi
    
    # Progress update every 50 branches
    if [ $((processed_count % 50)) -eq 0 ]; then
        log_message "Aggressive progress: $processed_count/$TOTAL_BRANCHES branches processed. Success: $SUCCESS_COUNT, Failed: $FAILED_COUNT"
        # Push progress every 50 merges
        if [ $((processed_count % 50)) -eq 0 ] && [ $SUCCESS_COUNT -gt 0 ]; then
            log_message "Pushing progress..."
            git push origin main || log_message "Push failed, continuing..."
        fi
    fi
done

# Final summary
log_message "=========================================="
log_message "Aggressive merge completed!"
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

# Final push
log_message "Performing final push..."
git push origin main || log_message "Final push failed"

echo "Aggressive merge process completed. Check $LOG_FILE for details."