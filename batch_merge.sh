#!/bin/bash

# Process multiple branches efficiently
set -e

echo "Starting batch branch processing..."

# Get recent branches, excluding already processed ones
recent_branches=($(git branch -r --sort=-committerdate | head -50 | grep -v "origin/main" | grep -v "origin/HEAD" | grep -v "cursor/enhance-and-expand-ziontechgroup-com-services-and-site-bf6e" | grep -v "cursor/add-new-services-and-deploy-updates-1399" | grep -v "cursor/fix-errors-and-merge-to-main-0499" | grep -v "cursor/add-new-services-and-deploy-updates-0c16" | grep -v "cursor/fix-errors-and-merge-to-main-1c5e" | grep -v "cursor/fix-errors-and-merge-to-main-50bf" | grep -v "cursor/fix-errors-and-merge-to-main-e83a"))

echo "Found ${#recent_branches[@]} branches to process"

# Process first 5 branches
branches_to_process=("${recent_branches[@]:0:5}")

for branch in "${branches_to_process[@]}"; do
    branch_name=$(echo $branch | sed 's/origin\///')
    echo "Processing: $branch_name"
    
    # Create local branch if it doesn't exist
    if ! git show-ref --verify --quiet refs/heads/$branch_name; then
        git checkout -b $branch_name $branch > /dev/null 2>&1
    else
        git checkout $branch_name > /dev/null 2>&1
        git pull origin $branch_name > /dev/null 2>&1
    fi
    
    # Check for meaningful differences
    diff_count=$(git diff main --name-only | grep -v "\.backup\." | wc -l)
    
    if [ "$diff_count" -gt 0 ]; then
        echo "Branch $branch_name has $diff_count meaningful changes"
        
        # Try to merge
        git checkout main > /dev/null 2>&1
        if git merge $branch_name --no-ff -m "Merge $branch_name: Automated merge" > /dev/null 2>&1; then
            echo "Successfully merged $branch_name"
            git push origin main > /dev/null 2>&1
        else
            echo "Merge conflict for $branch_name - skipping"
            git merge --abort > /dev/null 2>&1
        fi
    else
        echo "Branch $branch_name has no meaningful changes - skipping"
    fi
    
    echo "---"
done

echo "Batch processing completed!"