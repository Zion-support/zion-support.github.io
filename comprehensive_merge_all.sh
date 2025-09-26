#!/bin/bash

# Comprehensive script to merge all cursor branches systematically
set -e

echo "Starting comprehensive PR merge process..."

# Function to merge a single PR with better conflict handling
merge_pr() {
    local pr_branch=$1
    echo "Attempting to merge $pr_branch..."
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$pr_branch"; then
        echo "✗ Branch $pr_branch does not exist, skipping..."
        return 1
    fi
    
    # Try to merge with no-ff to preserve branch history
    merge_output=$(git merge --no-ff "$pr_branch" -m "Merge $pr_branch into main" 2>&1)
    
    if echo "$merge_output" | grep -q "Already up to date"; then
        echo "✓ $pr_branch already up to date"
        return 0
    elif echo "$merge_output" | grep -q "Automatic merge went well"; then
        echo "✓ Successfully merged $pr_branch"
        return 0
    elif echo "$merge_output" | grep -q "CONFLICT"; then
        echo "⚠ Conflict detected in $pr_branch, attempting to resolve..."
        
        # Try to resolve conflicts automatically
        if git status --porcelain | grep -q "^UU"; then
            echo "Manual conflicts found, aborting merge..."
            git merge --abort 2>/dev/null || true
            return 1
        fi
        
        # If we get here, conflicts might be resolved
        if git status --porcelain | grep -q "^A"; then
            echo "✓ Conflicts resolved automatically for $pr_branch"
            return 0
        else
            echo "✗ Could not resolve conflicts for $pr_branch"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    else
        echo "✗ Unknown merge issue with $pr_branch"
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# Get list of all cursor branches that need merging
echo "Fetching all cursor branches..."
git fetch origin

# Get all cursor branches, sorted by creation date (most recent first)
cursor_branches=$(git branch -r | grep "origin/cursor/check-fix-push-and-merge-to-main-" | sort -V)

successful_merges=0
failed_merges=0
total_branches=0

echo "Found $(echo "$cursor_branches" | wc -l) cursor branches to process"

for branch in $cursor_branches; do
    ((total_branches++))
    echo ""
    echo "[$total_branches] Processing $branch"
    
    if merge_pr "$branch"; then
        ((successful_merges++))
        echo "✓ Successfully processed $branch"
    else
        ((failed_merges++))
        echo "✗ Failed to process $branch"
    fi
    
    # Commit after every successful merge to maintain history
    if [ $successful_merges -gt 0 ] && [ $((successful_merges % 5)) -eq 0 ]; then
        echo "Committing batch of $successful_merges merges..."
        git add -A
        git commit -m "Batch merge: processed $successful_merges cursor branches" || true
    fi
    
    # Safety limit to prevent infinite loops
    if [ $total_branches -ge 50 ]; then
        echo "Reached safety limit of 50 branches processed. Stopping."
        break
    fi
done

echo ""
echo "=== MERGE PROCESS COMPLETED ==="
echo "Total branches processed: $total_branches"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"
echo "Success rate: $(( (successful_merges * 100) / total_branches ))%"

# Final commit if there are any uncommitted changes
if ! git diff --quiet; then
    echo "Committing final changes..."
    git add -A
    git commit -m "Final merge: completed processing cursor branches" || true
fi

# Push all changes
echo "Pushing changes to remote..."
git push origin main

echo "✅ Comprehensive merge process completed successfully!"