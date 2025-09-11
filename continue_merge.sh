#!/bin/bash

# Script to continue merging remaining PRs
# This script will handle the remaining PRs that weren't merged in the first batch

set -e  # Exit on any error

echo "Continuing merge of remaining PRs..."
echo "====================================="

# Function to resolve merge conflicts
resolve_conflicts() {
    local branch_name=$1
    echo "Resolving conflicts in $branch_name..."
    
    # Check if there are any merge conflicts
    if git diff --name-only --diff-filter=U | grep -q .; then
        echo "Found merge conflicts. Attempting to resolve..."
        
        # List all conflicted files
        echo "Conflicted files:"
        git diff --name-only --diff-filter=U
        
        # For each conflicted file, try to resolve conflicts
        for file in $(git diff --name-only --diff-filter=U); do
            echo "Resolving conflicts in $file..."
            
            # For most files, keep the incoming version to avoid conflicts
            if [[ "$file" == *.ts || "$file" == *.tsx || "$file" == *.js || "$file" == *.jsx ]]; then
                # For code files, keep incoming version to minimize conflicts
                echo "Keeping incoming version for $file"
                git checkout --theirs "$file"
            else
                # For other files, keep the incoming version
                echo "Keeping incoming version for $file"
                git checkout --theirs "$file"
            fi
        done
        
        # Add all resolved files
        git add .
        
        # Check if conflicts are resolved
        if git diff --name-only --diff-filter=U | grep -q .; then
            echo "Some conflicts still exist. Manual resolution needed."
            return 1
        else
            echo "All conflicts resolved automatically."
            return 0
        fi
    else
        echo "No conflicts found."
        return 0
    fi
}

# Function to merge a single PR branch
merge_pr_branch() {
    local branch_name=$1
    local pr_number=$2
    
    echo "Attempting to merge $branch_name (PR #$pr_number)..."
    
    # Check if branch exists
    if ! git ls-remote --heads origin "$branch_name" | grep -q .; then
        echo "Branch $branch_name not found, skipping..."
        return 1
    fi
    
    # Fetch the latest version of the branch
    git fetch origin "$branch_name"
    
    # Try to merge
    if git merge "origin/$branch_name" --no-ff --no-commit; then
        echo "Merge successful for $branch_name"
        git commit -m "Merge PR #$pr_number: $branch_name"
        return 0
    else
        echo "Merge failed for $branch_name, attempting to resolve conflicts..."
        
        # Try to resolve conflicts
        if resolve_conflicts "$branch_name"; then
            echo "Conflicts resolved for $branch_name"
            git commit -m "Merge PR #$pr_number: $branch_name (conflicts resolved)"
            return 0
        else
            echo "Failed to resolve conflicts for $branch_name, aborting merge..."
            git merge --abort
            return 1
        fi
    fi
}

# Main merge process
main() {
    # Ensure we're on main branch
    git checkout main
    
    # Get list of remaining open PRs
    echo "Fetching remaining open PRs..."
    curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > prs_remaining.json
    
    # Extract PR information and attempt to merge each one
    echo "Starting merge process for remaining PRs..."
    
    # Parse PRs and attempt merges
    awk '
    /"number":/ {
        number = $2
        gsub(/,/, "", number)
        pr_number = number
    }
    /"ref":/ && !/compare_url/ {
        ref = substr($0, index($0, ":") + 3)
        gsub(/,$/, "", ref)
        gsub(/"/, "", ref)
        if (ref != "ref" && ref != "href" && ref != "archive_url" && ref != "git_refs_url" && ref != "main") {
            printf "%s %s\n", pr_number, ref
        }
    }
    ' prs_remaining.json | while read pr_number branch_name; do
        if [[ -n "$pr_number" && -n "$branch_name" ]]; then
            echo "Processing PR #$pr_number: $branch_name"
            
            # Check if this branch has already been merged
            if git log --oneline | grep -q "Merge PR #$pr_number"; then
                echo "PR #$pr_number already merged, skipping..."
                continue
            fi
            
            if merge_pr_branch "$branch_name" "$pr_number"; then
                echo "✓ Successfully merged PR #$pr_number"
            else
                echo "✗ Failed to merge PR #$pr_number"
            fi
            echo "---"
        fi
    done
    
    echo "Merge process completed!"
    echo "Pushing changes to main..."
    git push origin main
}

# Run the main function
main "$@"