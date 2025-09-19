#!/bin/bash

# Comprehensive branch merge script
# This script will merge all remote branches into main, handling conflicts automatically

set -e

echo "Starting comprehensive branch merge process..."

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

# Function to merge a single branch
merge_branch() {
    local branch=$1
    local attempt=1
    local max_attempts=3
    
    echo "Attempting to merge branch: $branch (attempt $attempt/$max_attempts)"
    
    while [ $attempt -le $max_attempts ]; do
        # Try to merge the branch
        if git merge "origin/$branch" --no-ff -m "Merge branch $branch into main" 2>/dev/null; then
            echo "✅ Successfully merged: $branch"
            ((MERGED_COUNT++))
            return 0
        else
            # Check if there are conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "⚠️  Conflicts detected in: $branch"
                
                # Auto-resolve conflicts using git's strategy
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
                    return 0
                else
                    echo "❌ Failed to commit after conflict resolution: $branch"
                    git merge --abort 2>/dev/null || true
                fi
            else
                echo "❌ Merge failed for: $branch (not conflicts, other error)"
                git merge --abort 2>/dev/null || true
            fi
        fi
        
        ((attempt++))
        if [ $attempt -le $max_attempts ]; then
            echo "Retrying merge for: $branch (attempt $attempt/$max_attempts)"
            sleep 2
        fi
    done
    
    echo "❌ Failed to merge after $max_attempts attempts: $branch"
    ((ERROR_COUNT++))
    return 1
}

# Process branches in batches
BATCH_SIZE=10
BATCH_NUM=1
CURRENT_BATCH=0

echo "$REMOTE_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    # Skip if branch is the same as current branch
    if [ "$branch" = "$(git branch --show-current)" ]; then
        continue
    fi
    
    ((CURRENT_BATCH++))
    
    echo "Processing batch $BATCH_NUM, branch $CURRENT_BATCH: $branch"
    
    # Merge the branch
    if merge_branch "$branch"; then
        echo "Branch $branch merged successfully"
    else
        echo "Branch $branch failed to merge"
    fi
    
    # Push changes every batch
    if [ $((CURRENT_BATCH % BATCH_SIZE)) -eq 0 ]; then
        echo "Pushing batch $BATCH_NUM changes..."
        git push origin main || echo "Warning: Failed to push batch $BATCH_NUM"
        ((BATCH_NUM++))
        CURRENT_BATCH=0
    fi
done

# Push final changes
echo "Pushing final changes..."
git push origin main

# Print summary
echo ""
echo "=== MERGE SUMMARY ==="
echo "Total branches processed: $TOTAL_BRANCHES"
echo "Successfully merged: $MERGED_COUNT"
echo "Conflicts resolved: $CONFLICT_COUNT"
echo "Failed to merge: $ERROR_COUNT"
echo "Backup branch created: $BACKUP_BRANCH"

# Clean up local branches (optional)
echo "Cleaning up local branches..."
git branch | grep -v main | xargs -r git branch -D || true

echo "Merge process completed!"