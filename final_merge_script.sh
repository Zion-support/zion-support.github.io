#!/bin/bash

# Final comprehensive merge script
# This script will handle remaining branches in a systematic way

set -e

echo "Starting final comprehensive merge process..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Create a backup branch
BACKUP_BRANCH="backup-main-final-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

echo "Created backup branch: $BACKUP_BRANCH"

# Get recent branches (last 30 days)
RECENT_BRANCHES=$(git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin | grep -v main | head -50)

echo "Found $(echo "$RECENT_BRANCHES" | wc -l) recent branches to process"

# Initialize counters
MERGED_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0

# Function to merge a single branch
merge_branch() {
    local branch=$1
    local branch_name=$(echo "$branch" | sed 's/origin\///')
    
    echo "Attempting to merge branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Try to merge the branch
    if git merge "$branch" --no-ff -m "Merge branch $branch_name into main" 2>/dev/null; then
        echo "✅ Successfully merged: $branch_name"
        ((MERGED_COUNT++))
        return 0
    else
        echo "⚠️  Conflicts detected in: $branch_name"
        
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
                echo "✅ Successfully resolved conflicts and merged: $branch_name"
                ((MERGED_COUNT++))
                ((CONFLICT_COUNT++))
                return 0
            else
                echo "❌ Failed to commit after conflict resolution: $branch_name"
                git merge --abort 2>/dev/null || true
            fi
        else
            echo "❌ Merge failed for: $branch_name (not conflicts, other error)"
            git merge --abort 2>/dev/null || true
        fi
        
        ((ERROR_COUNT++))
        return 1
    fi
}

# Process recent branches in batches
BATCH_SIZE=10
BATCH_NUM=1
CURRENT_BATCH=0

echo "$RECENT_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    # Skip if branch is the same as current branch
    if [ "$branch" = "origin/$(git branch --show-current)" ]; then
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
echo "=== FINAL MERGE SUMMARY ==="
echo "Recent branches processed: $(echo "$RECENT_BRANCHES" | wc -l)"
echo "Successfully merged: $MERGED_COUNT"
echo "Conflicts resolved: $CONFLICT_COUNT"
echo "Failed to merge: $ERROR_COUNT"
echo "Backup branch created: $BACKUP_BRANCH"

echo "Final merge process completed!"