#!/bin/bash

# Batch merge remaining branches script
# This script will merge remaining branches in small batches to avoid overwhelming the system

set -e

echo "Starting batch merge of remaining branches..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Create a backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

echo "Created backup branch: $BACKUP_BRANCH"

# Get all remote branches (excluding main and HEAD)
REMOTE_BRANCHES=$(git branch -r | grep -v -E "(main|HEAD)" | sed 's/origin\///' | sort)

# Count total branches
TOTAL_BRANCHES=$(echo "$REMOTE_BRANCHES" | wc -l)
echo "Found $TOTAL_BRANCHES branches to merge"

# Initialize counters
MERGED_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0
BATCH_SIZE=5
BATCH_NUM=1

# Function to merge a single branch
merge_branch() {
    local branch=$1
    
    echo "Attempting to merge branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-ff -m "Merge branch $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged: $branch"
        ((MERGED_COUNT++))
        return 0
    else
        echo "⚠️  Conflicts detected in: $branch"
        
        # Auto-resolve conflicts using git's strategy
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts automatically..."
            
            # List conflicted files and resolve them
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                echo "Resolving conflict in: $file"
                # Use git checkout to resolve conflicts (take our version)
                git checkout --ours "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            done
            
            # Try to commit the merge
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Successfully resolved conflicts and merged: $branch"
                ((MERGED_COUNT++))
                ((CONFLICT_COUNT++))
                return 0
            else
                echo "❌ Failed to commit after conflict resolution: $branch"
                git merge --abort 2>/dev/null || true
            fi
        else
            echo "❌ Merge failed for: $branch (not conflicts, other error)"
            git merge --abort 2>/dev/null || true
        fi
        
        ((ERROR_COUNT++))
        return 1
    fi
}

# Process branches in batches
CURRENT_BATCH=0
BATCH_BRANCHES=()

echo "$REMOTE_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    # Skip if branch is the same as current branch
    if [ "$branch" = "$(git branch --show-current)" ]; then
        continue
    fi
    
    BATCH_BRANCHES+=("$branch")
    ((CURRENT_BATCH++))
    
    # Process batch when it reaches the batch size
    if [ $CURRENT_BATCH -eq $BATCH_SIZE ]; then
        echo ""
        echo "Processing batch $BATCH_NUM with ${#BATCH_BRANCHES[@]} branches..."
        
        for batch_branch in "${BATCH_BRANCHES[@]}"; do
            echo "Processing: $batch_branch"
            if merge_branch "$batch_branch"; then
                echo "Branch $batch_branch merged successfully"
            else
                echo "Branch $batch_branch failed to merge"
            fi
        done
        
        # Push changes after each batch
        echo "Pushing batch $BATCH_NUM changes..."
        git push origin main || echo "Warning: Failed to push batch $BATCH_NUM"
        
        # Reset for next batch
        BATCH_BRANCHES=()
        CURRENT_BATCH=0
        ((BATCH_NUM++))
        
        echo "Batch $BATCH_NUM completed. Continuing..."
        echo "---"
    fi
done

# Process remaining branches in the last batch
if [ ${#BATCH_BRANCHES[@]} -gt 0 ]; then
    echo ""
    echo "Processing final batch with ${#BATCH_BRANCHES[@]} branches..."
    
    for batch_branch in "${BATCH_BRANCHES[@]}"; do
        echo "Processing: $batch_branch"
        if merge_branch "$batch_branch"; then
            echo "Branch $batch_branch merged successfully"
        else
            echo "Branch $batch_branch failed to merge"
        fi
    done
    
    # Push final changes
    echo "Pushing final batch changes..."
    git push origin main || echo "Warning: Failed to push final batch"
fi

# Print summary
echo ""
echo "=== BATCH MERGE SUMMARY ==="
echo "Total branches processed: $TOTAL_BRANCHES"
echo "Successfully merged: $MERGED_COUNT"
echo "Conflicts resolved: $CONFLICT_COUNT"
echo "Failed to merge: $ERROR_COUNT"
echo "Backup branch created: $BACKUP_BRANCH"

echo "Batch merge process completed!"