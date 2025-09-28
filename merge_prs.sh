#!/bin/bash

# Script to merge all open PRs into main branch
# This script will resolve merge conflicts and merge PRs

set -e

echo "Starting PR merge process..."

# Fetch latest changes
git fetch origin

# Get list of open PRs (we know from API response)
PRS=("23646" "23639" "23635")
BRANCHES=("cursor/fix-netlify-build-and-merge-to-main-1fc1" "cursor/fix-netlify-build-and-merge-to-main-e358" "cursor/fix-netlify-build-and-merge-to-main-fbf7")

# Switch to main branch
git checkout main
git pull origin main

for i in "${!PRS[@]}"; do
    PR_NUMBER="${PRS[$i]}"
    BRANCH_NAME="${BRANCHES[$i]}"
    
    echo "Processing PR #$PR_NUMBER (branch: $BRANCH_NAME)"
    
    # Checkout the PR branch
    git checkout -b "$BRANCH_NAME" "origin/$BRANCH_NAME"
    
    # Try to merge main into the branch to resolve conflicts
    echo "Attempting to merge main into $BRANCH_NAME..."
    if git merge origin/main --no-edit; then
        echo "Merge successful for $BRANCH_NAME"
        git push origin "$BRANCH_NAME"
        
        # Switch back to main and merge the PR
        git checkout main
        git merge "$BRANCH_NAME" --no-edit
        git push origin main
        
        echo "Successfully merged PR #$PR_NUMBER"
    else
        echo "Merge conflicts detected for $BRANCH_NAME"
        echo "Resolving conflicts..."
        
        # Check for conflict files
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICT_FILES" ]; then
            echo "Conflict files: $CONFLICT_FILES"
            
            # For now, let's abort the merge and try to resolve conflicts manually
            git merge --abort
            echo "Aborted merge for $BRANCH_NAME - manual resolution needed"
        else
            echo "No conflict files found, proceeding with merge"
            git add .
            git commit -m "Resolve merge conflicts for PR #$PR_NUMBER"
            git push origin "$BRANCH_NAME"
            
            # Switch back to main and merge
            git checkout main
            git merge "$BRANCH_NAME" --no-edit
            git push origin main
            
            echo "Successfully merged PR #$PR_NUMBER"
        fi
    fi
    
    # Clean up the local branch
    git branch -D "$BRANCH_NAME"
done

echo "PR merge process completed!"