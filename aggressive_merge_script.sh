#!/bin/bash

# Aggressive merge script for remaining branches
# This script will process remaining branches more aggressively

set -e

echo "Starting aggressive merge process for remaining branches..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Create a backup branch
BACKUP_BRANCH="backup-main-aggressive-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

echo "Created backup branch: $BACKUP_BRANCH"

# Get branches by priority (recent, important patterns)
PRIORITY_PATTERNS=(
    "cursor/"
    "comprehensive-"
    "content-"
    "fix-"
    "improve-"
    "update-"
    "add-"
    "implement-"
)

# Initialize counters
MERGED_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0
BATCH_SIZE=20
BATCH_NUM=1

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

# Process branches by priority patterns
for pattern in "${PRIORITY_PATTERNS[@]}"; do
    echo ""
    echo "Processing branches matching pattern: $pattern"
    
    # Get branches matching this pattern
    MATCHING_BRANCHES=$(git branch -r | grep -v main | grep "$pattern" | head -50)
    
    if [ -z "$MATCHING_BRANCHES" ]; then
        echo "No branches found matching pattern: $pattern"
        continue
    fi
    
    echo "Found $(echo "$MATCHING_BRANCHES" | wc -l) branches matching $pattern"
    
    CURRENT_BATCH=0
    BATCH_BRANCHES=()
    
    echo "$MATCHING_BRANCHES" | while IFS= read -r branch; do
        if [ -z "$branch" ]; then
            continue
        fi
        
        # Skip if branch is the same as current branch
        if [ "$branch" = "origin/$(git branch --show-current)" ]; then
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
    
    # Process remaining branches in the last batch for this pattern
    if [ ${#BATCH_BRANCHES[@]} -gt 0 ]; then
        echo ""
        echo "Processing final batch for pattern $pattern with ${#BATCH_BRANCHES[@]} branches..."
        
        for batch_branch in "${BATCH_BRANCHES[@]}"; do
            echo "Processing: $batch_branch"
            if merge_branch "$batch_branch"; then
                echo "Branch $batch_branch merged successfully"
            else
                echo "Branch $batch_branch failed to merge"
            fi
        done
        
        # Push final changes for this pattern
        echo "Pushing final batch changes for pattern $pattern..."
        git push origin main || echo "Warning: Failed to push final batch for pattern $pattern"
    fi
done

# Process any remaining branches (non-priority)
echo ""
echo "Processing remaining non-priority branches..."

REMAINING_BRANCHES=$(git branch -r | grep -v main | grep -v -E "(cursor/|comprehensive-|content-|fix-|improve-|update-|add-|implement-)" | head -100)

if [ -n "$REMAINING_BRANCHES" ]; then
    echo "Found $(echo "$REMAINING_BRANCHES" | wc -l) remaining branches to process"
    
    CURRENT_BATCH=0
    BATCH_BRANCHES=()
    
    echo "$REMAINING_BRANCHES" | while IFS= read -r branch; do
        if [ -z "$branch" ]; then
            continue
        fi
        
        # Skip if branch is the same as current branch
        if [ "$branch" = "origin/$(git branch --show-current)" ]; then
            continue
        fi
        
        BATCH_BRANCHES+=("$branch")
        ((CURRENT_BATCH++))
        
        # Process batch when it reaches the batch size
        if [ $CURRENT_BATCH -eq $BATCH_SIZE ]; then
            echo ""
            echo "Processing remaining batch $BATCH_NUM with ${#BATCH_BRANCHES[@]} branches..."
            
            for batch_branch in "${BATCH_BRANCHES[@]}"; do
                echo "Processing: $batch_branch"
                if merge_branch "$batch_branch"; then
                    echo "Branch $batch_branch merged successfully"
                else
                    echo "Branch $batch_branch failed to merge"
                fi
            done
            
            # Push changes after each batch
            echo "Pushing remaining batch $BATCH_NUM changes..."
            git push origin main || echo "Warning: Failed to push remaining batch $BATCH_NUM"
            
            # Reset for next batch
            BATCH_BRANCHES=()
            CURRENT_BATCH=0
            ((BATCH_NUM++))
            
            echo "Remaining batch $BATCH_NUM completed. Continuing..."
            echo "---"
        fi
    done
    
    # Process remaining branches in the last batch
    if [ ${#BATCH_BRANCHES[@]} -gt 0 ]; then
        echo ""
        echo "Processing final remaining batch with ${#BATCH_BRANCHES[@]} branches..."
        
        for batch_branch in "${BATCH_BRANCHES[@]}"; do
            echo "Processing: $batch_branch"
            if merge_branch "$batch_branch"; then
                echo "Branch $batch_branch merged successfully"
            else
                echo "Branch $batch_branch failed to merge"
            fi
        done
        
        # Push final changes
        echo "Pushing final remaining batch changes..."
        git push origin main || echo "Warning: Failed to push final remaining batch"
    fi
fi

# Push final changes
echo "Pushing final changes..."
git push origin main

# Print summary
echo ""
echo "=== AGGRESSIVE MERGE SUMMARY ==="
echo "Successfully merged: $MERGED_COUNT"
echo "Conflicts resolved: $CONFLICT_COUNT"
echo "Failed to merge: $ERROR_COUNT"
echo "Backup branch created: $BACKUP_BRANCH"

echo "Aggressive merge process completed!"