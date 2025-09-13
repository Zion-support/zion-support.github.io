#!/bin/bash

# Script to merge all open PRs into main branch
set -e

echo "Starting PR merge process..."

# Check current status
echo "Current git status:"
git status

# Ensure we're on main branch
echo "Switching to main branch..."
git checkout main

# Pull latest changes
echo "Pulling latest changes from main..."
git pull origin main

# Get list of open PRs
echo "Fetching open PRs..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open" > open_prs.json

# Extract PR numbers and branches
echo "Processing open PRs..."
PR_NUMBERS=$(grep -o '"number": [0-9]*' open_prs.json | grep -o '[0-9]*')
BRANCH_NAMES=$(grep -o '"ref": "[^"]*"' open_prs.json | sed 's/"ref": "//g' | sed 's/"//g')

echo "Found PR numbers: $PR_NUMBERS"
echo "Found branch names: $BRANCH_NAMES"

# Process each PR
for branch in $BRANCH_NAMES; do
    echo "Processing branch: $branch"
    
    # Fetch the branch
    echo "Fetching branch $branch..."
    git fetch origin $branch
    
    # Try to merge
    echo "Attempting to merge $branch into main..."
    if git merge origin/$branch --no-ff -m "Merge PR from $branch"; then
        echo "Successfully merged $branch"
    else
        echo "Merge conflict detected for $branch, resolving..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving merge conflicts for $branch..."
            
            # Auto-resolve conflicts by accepting incoming changes for most files
            git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
                echo "Resolving conflict in $file"
                if [ -f "$file" ]; then
                    # Use git checkout to resolve conflicts
                    git checkout --theirs "$file" || git checkout --ours "$file" || true
                    git add "$file"
                fi
            done
            
            # Commit the resolved merge
            git commit -m "Resolve merge conflicts for $branch"
            echo "Resolved conflicts for $branch"
        fi
    fi
done

# Push changes to main
echo "Pushing merged changes to main..."
git push origin main

echo "All PRs merged successfully!"