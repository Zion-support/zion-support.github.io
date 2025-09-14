#!/bin/bash

# Robust PR merge script that handles pull/push cycles
set -e

echo "Starting robust PR merge process..."

# Function to process a single PR
process_pr() {
    local pr=$1
    echo "Processing PR #$pr..."
    
    # Fetch the PR
    if ! git fetch origin pull/$pr/head:pr-$pr 2>/dev/null; then
        echo "Failed to fetch PR #$pr, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge pr-$pr --no-commit 2>/dev/null; then
        echo "PR #$pr merged successfully without conflicts"
        git commit -m "Merge PR #$pr"
        return 0
    else
        echo "PR #$pr has conflicts, resolving automatically..."
        
        # Get conflicted files
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
        
        # Resolve conflicts by preferring incoming changes
        for file in $CONFLICT_FILES; do
            echo "Resolving conflicts in $file..."
            git checkout --theirs "$file" 2>/dev/null || true
        done
        
        # Add all resolved files
        git add .
        
        # Commit the merge
        if git commit -m "Merge PR #$pr with automatic conflict resolution" 2>/dev/null; then
            echo "PR #$pr merged successfully after conflict resolution"
            return 0
        else
            echo "Failed to commit PR #$pr, aborting merge..."
            git merge --abort
            return 1
        fi
    fi
}

# Function to sync with remote
sync_with_remote() {
    echo "Syncing with remote..."
    if ! git pull origin main --no-rebase 2>/dev/null; then
        echo "Pull had conflicts, resolving..."
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
        for file in $CONFLICT_FILES; do
            echo "Resolving conflicts in $file..."
            git checkout --theirs "$file" 2>/dev/null || true
        done
        git add .
        git commit -m "Merge remote changes with local PR merges"
    fi
    git push origin main
}

# Get list of open PRs
echo "Fetching open PRs..."
PR_NUMBERS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=50" | grep '"number"' | sed 's/.*"number": \([0-9]*\).*/\1/' | sort -n)

echo "Found PRs: $PR_NUMBERS"

# Process PRs in batches of 10
BATCH_SIZE=10
BATCH_COUNT=0

for pr in $PR_NUMBERS; do
    if process_pr $pr; then
        echo "PR #$pr completed successfully"
        BATCH_COUNT=$((BATCH_COUNT + 1))
        
        # Clean up the branch
        git branch -D pr-$pr 2>/dev/null || true
        
        # Sync with remote every 10 PRs
        if [ $BATCH_COUNT -eq $BATCH_SIZE ]; then
            echo "Processed $BATCH_SIZE PRs, syncing with remote..."
            sync_with_remote
            BATCH_COUNT=0
        fi
    else
        echo "PR #$pr failed, continuing with next PR..."
    fi
    
    echo "---"
done

# Final sync
echo "Final sync with remote..."
sync_with_remote

echo "All PRs processed!"