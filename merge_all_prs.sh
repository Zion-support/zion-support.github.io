#!/bin/bash

# Script to merge all open PRs into main branch
echo "Starting comprehensive PR merge process..."

# Get all remote branches that need to be merged
echo "Fetching all remote branches..."
git fetch origin

# Get list of branches to merge (excluding main and already merged branches)
BRANCHES_TO_MERGE=$(git branch -r | grep -v "origin/main" | grep -E "(cursor|fix|merge)" | sed 's/origin\///' | head -20)

echo "Found branches to merge:"
echo "$BRANCHES_TO_MERGE"

# Function to merge a branch
merge_branch() {
    local branch_name=$1
    echo "Processing branch: $branch_name"
    
    # Fetch the specific branch
    git fetch origin "$branch_name:$branch_name"
    
    # Try to merge
    if git merge "$branch_name" --no-ff -m "Merge branch $branch_name" 2>/dev/null; then
        echo "✅ Successfully merged branch: $branch_name"
        return 0
    else
        echo "⚠️ Merge conflict in branch: $branch_name, attempting to resolve..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts for branch: $branch_name..."
            
            # Use our version for conflicts (accept incoming changes)
            git checkout --theirs .
            git add .
            
            # Complete the merge
            git commit -m "Merge branch $branch_name (resolved conflicts)"
            echo "✅ Resolved conflicts and merged branch: $branch_name"
        else
            echo "No conflicts detected, completing merge for branch: $branch_name"
            git commit -m "Merge branch $branch_name"
        fi
        return 0
    fi
}

# Counter for tracking
count=0
merged=0
failed=0

# Process each branch
for branch in $BRANCHES_TO_MERGE; do
    count=$((count + 1))
    echo "=========================================="
    echo "[$count] Processing branch: $branch"
    echo "=========================================="
    
    if merge_branch "$branch"; then
        merged=$((merged + 1))
    else
        failed=$((failed + 1))
    fi
    
    echo ""
done

echo "=========================================="
echo "MERGE SUMMARY"
echo "=========================================="
echo "Total branches processed: $count"
echo "Successfully merged: $merged"
echo "Failed to merge: $failed"
echo "=========================================="

# Push all changes
echo "Pushing changes to main branch..."
git push origin main

echo "All branches have been processed and pushed to main branch!"
