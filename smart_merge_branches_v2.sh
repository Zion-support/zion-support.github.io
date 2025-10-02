#!/bin/bash

# Enhanced script to find and merge branches with actual new content
set -e

echo "Starting comprehensive branch analysis and merging..."

# Get recent branches, excluding already processed ones
recent_branches=($(git branch -r --sort=-committerdate | head -50 | grep -v "origin/main" | grep -v "origin/HEAD" | grep -v "cursor/enhance-and-expand-ziontechgroup-com-services-and-site-bf6e"))

echo "Found ${#recent_branches[@]} recent branches to analyze"

# Function to check if branch has new content
check_branch_content() {
    local branch=$1
    local branch_name=$(echo $branch | sed 's/origin\///')
    
    echo "Checking branch: $branch_name"
    
    # Create local branch if it doesn't exist
    if ! git show-ref --verify --quiet refs/heads/$branch_name; then
        git checkout -b $branch_name $branch > /dev/null 2>&1
    else
        git checkout $branch_name > /dev/null 2>&1
        git pull origin $branch_name > /dev/null 2>&1
    fi
    
    # Check for meaningful differences (excluding backup files)
    local diff_count=$(git diff main --name-only | grep -v "\.backup\." | wc -l)
    
    if [ "$diff_count" -gt 0 ]; then
        echo "Branch $branch_name has $diff_count meaningful changes"
        return 0
    else
        echo "Branch $branch_name has no meaningful changes"
        return 1
    fi
}

# Function to merge a branch
merge_branch() {
    local branch=$1
    local branch_name=$(echo $branch | sed 's/origin\///')
    
    echo "Attempting to merge $branch_name..."
    
    git checkout main > /dev/null 2>&1
    
    if git merge $branch_name --no-ff -m "Merge $branch_name: Automated merge of branch with new content" > /dev/null 2>&1; then
        echo "Successfully merged $branch_name"
        git push origin main > /dev/null 2>&1
        return 0
    else
        echo "Merge conflict detected for $branch_name"
        git merge --abort > /dev/null 2>&1
        return 1
    fi
}

# Process branches
merged_count=0
conflict_count=0
no_changes_count=0

for branch in "${recent_branches[@]}"; do
    if check_branch_content "$branch"; then
        if merge_branch "$branch"; then
            ((merged_count++))
        else
            ((conflict_count++))
        fi
    else
        ((no_changes_count++))
    fi
    echo "---"
done

echo "Summary:"
echo "- Successfully merged: $merged_count branches"
echo "- Merge conflicts: $conflict_count branches"
echo "- No meaningful changes: $no_changes_count branches"

echo "Branch merging process completed!"