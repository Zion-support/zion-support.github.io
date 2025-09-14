#!/bin/bash

# Script to merge all open PRs systematically
# This script will fetch open PRs and merge them one by one

echo "Starting comprehensive PR merge process..."

# Function to merge a PR
merge_pr() {
    local pr_number=$1
    local pr_title=$2
    local branch_name=$3
    
    echo "Processing PR #$pr_number: $pr_title"
    echo "Branch: $branch_name"
    
    # Checkout the branch
    if git checkout "$branch_name" 2>/dev/null; then
        echo "Successfully checked out $branch_name"
        
        # Pull latest changes
        git pull origin "$branch_name" 2>/dev/null
        
        # Merge into main
        git checkout main
        if git merge "$branch_name" --no-edit 2>/dev/null; then
            echo "Successfully merged PR #$pr_number"
            return 0
        else
            echo "Failed to merge PR #$pr_number - resolving conflicts..."
            # Try to resolve conflicts automatically
            git status
            # For now, just continue with the next PR
            git merge --abort 2>/dev/null
            return 1
        fi
    else
        echo "Failed to checkout branch $branch_name"
        return 1
    fi
}

# Get list of open PRs
echo "Fetching open PRs..."
PRS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | grep -E '"number":|"title":|"ref":' | tr -d '",' | awk '
/^[[:space:]]*"number":/ { pr = $2; next }
/^[[:space:]]*"title":/ { title = $0; gsub(/^[[:space:]]*"title":[[:space:]]*/, "", title); next }
/^[[:space:]]*"ref":/ { ref = $2; print pr "|" title "|" ref; next }
')

echo "Found PRs to process:"
echo "$PRS"

# Process each PR
echo "$PRS" | while IFS='|' read -r pr_number pr_title pr_ref; do
    if [ -n "$pr_number" ] && [ -n "$pr_ref" ]; then
        echo "Processing PR #$pr_number..."
        merge_pr "$pr_number" "$pr_title" "$pr_ref"
        echo "---"
    fi
done

echo "PR merge process completed!"
echo "Pushing all changes to main..."

# Push all changes
git push origin main

echo "All changes pushed to main branch!"