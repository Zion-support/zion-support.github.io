#!/bin/bash

# Systematic PR merge script
# This script will merge branches in batches to avoid overwhelming the system

set -e

echo "Starting systematic PR merge process..."

# Get the most recent branches (excluding main and known problematic branches)
RECENT_BRANCHES=$(git branch -r | grep -v -E "(main|HEAD|origin/merge|origin/pr-|origin/batch)" | head -50)

echo "Found branches to merge:"
echo "$RECENT_BRANCHES"

# Function to merge a single branch
merge_branch() {
    local branch=$1
    local branch_name=${branch#origin/}
    
    echo "Attempting to merge $branch_name..."
    
    # Checkout the branch locally
    git checkout -b "local-$branch_name" "$branch" 2>/dev/null || {
        echo "Failed to checkout $branch_name, skipping..."
        return 1
    }
    
    # Try to merge into main
    git checkout main
    if git merge --no-ff "local-$branch_name" -m "Merge $branch_name: automated merge" 2>/dev/null; then
        echo "Successfully merged $branch_name"
        git branch -d "local-$branch_name"
        return 0
    else
        echo "Merge conflict in $branch_name, attempting to resolve..."
        
        # Try to resolve conflicts automatically
        if git status --porcelain | grep -q "^UU"; then
            echo "Conflicts detected, attempting auto-resolution..."
            
            # For common conflicts, try to resolve
            git checkout --theirs . 2>/dev/null || true
            git add . 2>/dev/null || true
            
            if git commit --no-edit 2>/dev/null; then
                echo "Auto-resolved conflicts for $branch_name"
                git branch -d "local-$branch_name"
                return 0
            fi
        fi
        
        # If we can't resolve, abort and clean up
        echo "Could not resolve conflicts for $branch_name, aborting merge..."
        git merge --abort 2>/dev/null || true
        git checkout main
        git branch -D "local-$branch_name" 2>/dev/null || true
        return 1
    fi
}

# Merge branches in batches of 5
batch_size=5
batch_num=1

echo "$RECENT_BRANCHES" | while IFS= read -r branch; do
    if [ -n "$branch" ]; then
        echo "Processing batch $batch_num..."
        
        if merge_branch "$branch"; then
            echo "Successfully processed $branch"
        else
            echo "Failed to process $branch"
        fi
        
        # Push changes every batch
        if [ $((batch_num % batch_size)) -eq 0 ]; then
            echo "Pushing batch $batch_num..."
            git push origin main || echo "Push failed, continuing..."
        fi
        
        ((batch_num++))
    fi
done

echo "Completed systematic PR merge process"
echo "Final push to origin main..."
git push origin main || echo "Final push failed"

echo "Summary:"
git log --oneline -10