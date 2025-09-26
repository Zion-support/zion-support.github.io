#!/bin/bash

# Comprehensive PR merge script
# This will systematically merge different types of PRs

set -e

echo "Starting comprehensive PR merge process..."

# Function to merge a single PR
merge_pr() {
    local pr_branch=$1
    echo "Attempting to merge $pr_branch..."
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$pr_branch"; then
        echo "✗ Branch $pr_branch does not exist, skipping..."
        return 1
    fi
    
    # Try to merge
    merge_output=$(git merge "$pr_branch" 2>&1)
    if echo "$merge_output" | grep -q "Already up to date"; then
        echo "✓ $pr_branch already up to date"
        return 0
    elif echo "$merge_output" | grep -q "Automatic merge went well"; then
        echo "✓ Successfully merged $pr_branch"
        return 0
    else
        echo "✗ Conflict in $pr_branch, skipping..."
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# Function to merge branches by pattern
merge_branches_by_pattern() {
    local pattern=$1
    local limit=$2
    local description=$3
    
    echo "=== Merging $description ==="
    branches=$(git branch -r | grep "$pattern" | head -$limit)
    
    successful=0
    failed=0
    
    for branch in $branches; do
        if merge_pr "$branch"; then
            ((successful++))
        else
            ((failed++))
        fi
    done
    
    echo "Completed $description: $successful successful, $failed failed"
    return $successful
}

# Merge different types of branches
total_merged=0

# 1. Merge cursor branches
if merge_branches_by_pattern "origin/cursor/" 20 "cursor branches"; then
    total_merged=$((total_merged + $?))
fi

# 2. Merge clean branches
if merge_branches_by_pattern "origin/clean-" 15 "clean branches"; then
    total_merged=$((total_merged + $?))
fi

# 3. Merge comprehensive branches
if merge_branches_by_pattern "origin/comprehensive-" 10 "comprehensive branches"; then
    total_merged=$((total_merged + $?))
fi

# 4. Merge content branches
if merge_branches_by_pattern "origin/content-" 10 "content branches"; then
    total_merged=$((total_merged + $?))
fi

echo "Total successful merges: $total_merged"

# Push the changes
echo "Pushing changes to remote..."
git push origin main

echo "Comprehensive merge process completed!"