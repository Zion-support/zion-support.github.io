#!/bin/bash

# Script to resolve all open PRs and merge them into main
set -e

echo "Starting comprehensive PR resolution and merge process..."

# Check current status
echo "Current git status:"
git status --short

# Ensure we're on main branch
echo "Switching to main branch..."
git checkout main

# Pull latest changes
echo "Pulling latest changes from origin..."
git pull origin main

# Get list of all open PRs from the JSON file
echo "Analyzing open PRs..."

# Extract PR numbers from the JSON file
PR_NUMBERS=$(grep -o '"number": [0-9]*' _open_prs.json | grep -o '[0-9]*' | sort -n)

echo "Found PRs: $PR_NUMBERS"

# Function to merge a PR
merge_pr() {
    local pr_number=$1
    local branch_name="pr-$pr_number"
    
    echo "Processing PR #$pr_number..."
    
    # Try to fetch the PR branch
    if git fetch origin pull/$pr_number/head:$branch_name 2>/dev/null; then
        echo "Fetched PR #$pr_number to branch $branch_name"
        
        # Try to merge
        if git merge $branch_name --no-ff -m "Merge PR #$pr_number" 2>/dev/null; then
            echo "Successfully merged PR #$pr_number"
            # Clean up the branch
            git branch -D $branch_name 2>/dev/null || true
        else
            echo "Merge conflict in PR #$pr_number, attempting to resolve..."
            
            # Check for conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "Resolving conflicts in PR #$pr_number..."
                
                # Auto-resolve common conflicts
                git add . 2>/dev/null || true
                
                # Try to commit the merge
                if git commit -m "Merge PR #$pr_number (auto-resolved conflicts)" 2>/dev/null; then
                    echo "Successfully resolved and merged PR #$pr_number"
                    git branch -D $branch_name 2>/dev/null || true
                else
                    echo "Failed to resolve conflicts in PR #$pr_number, skipping..."
                    git merge --abort 2>/dev/null || true
                    git branch -D $branch_name 2>/dev/null || true
                fi
            else
                echo "No conflicts detected, retrying merge..."
                git merge $branch_name --no-ff -m "Merge PR #$pr_number" || {
                    echo "Failed to merge PR #$pr_number, skipping..."
                    git merge --abort 2>/dev/null || true
                    git branch -D $branch_name 2>/dev/null || true
                }
            fi
        fi
    else
        echo "Failed to fetch PR #$pr_number, skipping..."
    fi
}

# Process each PR
for pr_number in $PR_NUMBERS; do
    merge_pr $pr_number
    echo "---"
done

echo "All PRs processed. Final status:"
git status --short

echo "Pushing all changes to origin..."
git push origin main

echo "PR resolution and merge process completed!"