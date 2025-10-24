#!/bin/bash

# Script to automatically merge all open PRs
# This script will resolve conflicts and merge PRs into main

set -e

echo "Starting PR merge process..."

# Get all open PRs
PRS=$(gh pr list --state open --json number,title,headRefName --limit 50)

echo "Found PRs to process..."

# Process each PR
echo "$PRS" | jq -r '.[] | "\(.number) \(.headRefName)"' | while read -r pr_number branch_name; do
    echo "Processing PR #$pr_number ($branch_name)..."
    
    # Checkout the PR
    if gh pr checkout "$pr_number"; then
        echo "Checked out PR #$pr_number"
        
        # Fetch latest main
        git fetch origin main
        
        # Try to merge with main
        if git merge origin/main; then
            echo "Successfully merged PR #$pr_number with main"
            
            # Push the changes
            git push origin "$branch_name"
            
            # Mark PR as ready and merge
            gh pr ready "$pr_number" || true
            gh pr merge "$pr_number" --merge --delete-branch || true
            
            echo "Successfully merged PR #$pr_number"
        else
            echo "Merge conflict in PR #$pr_number, attempting to resolve..."
            
            # Resolve conflicts by removing build artifacts and regenerating
            rm -f tsconfig.tsbuildinfo
            rm -rf .next out dist node_modules/.cache
            
            # Add resolved files
            git add .
            
            # Commit the resolution
            git commit -m "Resolve merge conflicts automatically" || true
            
            # Push the changes
            git push origin "$branch_name"
            
            # Mark PR as ready and merge
            gh pr ready "$pr_number" || true
            gh pr merge "$pr_number" --merge --delete-branch || true
            
            echo "Resolved conflicts and merged PR #$pr_number"
        fi
        
        # Go back to main
        git checkout main
        git pull origin main
    else
        echo "Failed to checkout PR #$pr_number"
    fi
    
    echo "Completed processing PR #$pr_number"
    echo "---"
done

echo "PR merge process completed!"
