#!/bin/bash

# Efficient batch merge script for cursor branches
set -e

echo "Starting efficient batch merge process..."

# Function to merge a single PR
merge_pr() {
    local pr_branch=$1
    echo "Processing $pr_branch..."
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$pr_branch"; then
        echo "✗ Branch does not exist"
        return 1
    fi
    
    # Try fast-forward merge first (most efficient)
    if git merge --ff-only "$pr_branch" 2>/dev/null; then
        echo "✓ Fast-forward merged"
        return 0
    fi
    
    # Try regular merge
    if git merge --no-ff "$pr_branch" -m "Merge $pr_branch" 2>/dev/null; then
        echo "✓ Successfully merged"
        return 0
    else
        echo "⚠ Conflict detected, aborting"
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# Get recent cursor branches (limit to most recent 100 to avoid overwhelming)
echo "Getting recent cursor branches..."
recent_branches=$(git branch -r | grep "origin/cursor/check-fix-push-and-merge-to-main-" | tail -100)

successful_merges=0
failed_merges=0
processed=0

echo "Processing recent cursor branches in batches..."

for branch in $recent_branches; do
    ((processed++))
    echo ""
    echo "[$processed] $branch"
    
    if merge_pr "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    
    # Commit every 10 successful merges
    if [ $successful_merges -gt 0 ] && [ $((successful_merges % 10)) -eq 0 ]; then
        echo "Committing batch..."
        git commit -m "Batch merge: $successful_merges branches processed" || true
    fi
    
    # Limit to prevent overwhelming the system
    if [ $processed -ge 50 ]; then
        echo "Processed 50 branches, stopping for safety"
        break
    fi
done

echo ""
echo "=== BATCH MERGE COMPLETED ==="
echo "Processed: $processed"
echo "Successful: $successful_merges"
echo "Failed: $failed_merges"

# Final commit and push
if [ $successful_merges -gt 0 ]; then
    echo "Committing final changes..."
    git commit -m "Final batch: merged $successful_merges cursor branches" || true
    
    echo "Pushing to remote..."
    git push origin main
fi

echo "✅ Batch merge completed!"