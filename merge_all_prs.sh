#!/bin/bash

# Comprehensive PR merging script
set -e

echo "=== Starting comprehensive PR merge process ==="

# Function to safely merge a branch
merge_branch() {
    local branch_name="$1"
    local branch_ref="origin/$branch_name"
    
    echo "Attempting to merge $branch_ref..."
    
    # Create a temporary merge branch
    local merge_branch="merge-$branch_name-$(date +%s)"
    
    # Checkout main and ensure it's up to date
    git checkout main
    git pull origin main
    
    # Create merge branch
    git checkout -b "$merge_branch"
    
    # Try to merge the branch
    if git merge "$branch_ref" --no-ff --no-edit --allow-unrelated-histories; then
        echo "✅ Successfully merged $branch_ref"
        
        # Merge back to main
        git checkout main
        git merge "$merge_branch" --no-ff --no-edit
        
        # Push to origin
        git push origin main
        
        # Clean up merge branch
        git branch -D "$merge_branch"
        
        return 0
    else
        echo "❌ Merge conflict in $branch_ref, trying with -X theirs strategy..."
        
        # Abort current merge
        git merge --abort
        
        # Try with theirs strategy
        if git merge "$branch_ref" --no-ff --no-edit -X theirs --allow-unrelated-histories; then
            echo "✅ Successfully merged $branch_ref with theirs strategy"
            
            # Merge back to main
            git checkout main
            git merge "$merge_branch" --no-ff --no-edit
            
            # Push to origin
            git push origin main
            
            # Clean up merge branch
            git branch -D "$merge_branch"
            
            return 0
        else
            echo "❌ Failed to merge $branch_ref even with theirs strategy"
            
            # Clean up merge branch
            git checkout main
            git branch -D "$merge_branch"
            
            return 1
        fi
    fi
}

# Get list of unmerged branches (excluding backups)
branches=$(git branch -r --no-merged origin/main | grep -v backup | sed 's/origin\///' | head -20)

echo "Found unmerged branches:"
echo "$branches"
echo ""

# Count total branches
total_branches=$(echo "$branches" | wc -l)
echo "Total branches to process: $total_branches"
echo ""

# Initialize counters
merged=0
failed=0

# Process each branch
for branch in $branches; do
    echo "Processing branch: $branch"
    
    if merge_branch "$branch"; then
        ((merged++))
        echo "✅ Successfully merged $branch"
    else
        ((failed++))
        echo "❌ Failed to merge $branch"
    fi
    
    echo "Progress: $((merged + failed))/$total_branches"
    echo "---"
done

echo ""
echo "=== Merge Summary ==="
echo "✅ Successfully merged: $merged"
echo "❌ Failed to merge: $failed"
echo "Total processed: $((merged + failed))"

# Final status check
echo ""
echo "=== Final Status ==="
git status