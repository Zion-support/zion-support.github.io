#!/bin/bash

# Merge Conflicts Resolver Script
# This script will resolve merge conflicts and merge all open PRs into main

set -e

echo "Starting merge conflicts resolution process..."

# Function to check if a branch exists
branch_exists() {
    git show-ref --verify --quiet refs/remotes/origin/$1
}

# Function to merge a branch into main
merge_branch() {
    local branch_name=$1
    echo "Processing branch: $branch_name"
    
    if branch_exists "$branch_name"; then
        echo "Branch $branch_name exists, attempting merge..."
        
        # Checkout the branch
        git checkout -b "local-$branch_name" "origin/$branch_name" 2>/dev/null || {
            echo "Branch $branch_name already exists locally, switching to it..."
            git checkout "local-$branch_name" 2>/dev/null || git checkout -b "local-$branch_name" "origin/$branch_name"
        }
        
        # Try to merge with main
        if git merge main --no-edit; then
            echo "Successfully merged $branch_name with main"
            git checkout main
            git merge "local-$branch_name" --no-edit
            echo "Successfully merged $branch_name into main"
            git branch -d "local-$branch_name"
        else
            echo "Merge conflicts detected in $branch_name, attempting to resolve..."
            
            # Check for common conflict files
