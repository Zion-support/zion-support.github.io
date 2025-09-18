#!/bin/bash

echo "=== Resolving Merge Conflicts and Merging PRs ==="

# Function to clean up merge conflict markers
cleanup_conflicts() {
    echo "Cleaning up merge conflict markers..."
    
    # Find and remove merge conflict markers from backup files
    find /workspace -name "*.backup*" -type f -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
        echo "Cleaning $file"
        # Remove the file if it's just a backup with conflicts
        if [[ "$file" == *.backup* ]]; then
            rm -f "$file"
        fi
    done
    
    # Find and clean actual source files with conflicts
    find /workspace/src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
        if grep -q "<<<<<<< HEAD" "$file"; then
            echo "Resolving conflicts in $file"
            # Use git checkout to resolve conflicts by taking the current branch version
            git checkout --ours "$file" 2>/dev/null || true
        fi
    done
}

# Function to merge all open PRs
merge_open_prs() {
    echo "Checking for open PRs..."
    
    # Get list of open PRs
    PRS=$(gh pr list --state open --json number,title,headRefName --jq '.[].number' 2>/dev/null || echo "")
    
    if [ -z "$PRS" ]; then
        echo "No open PRs found or GitHub CLI not available"
        return
    fi
    
    echo "Found open PRs: $PRS"
    
    for pr in $PRS; do
        echo "Processing PR #$pr"
        
        # Get PR details
        PR_BRANCH=$(gh pr view $pr --json headRefName --jq '.headRefName' 2>/dev/null)
        
        if [ -n "$PR_BRANCH" ]; then
            echo "Merging PR #$pr from branch $PR_BRANCH"
            
            # Try to merge the PR
            gh pr merge $pr --merge --delete-branch 2>/dev/null || {
                echo "Failed to merge PR #$pr, trying to resolve conflicts..."
                
                # Checkout the PR branch
                git fetch origin $PR_BRANCH:$PR_BRANCH
                git checkout $PR_BRANCH
                
                # Try to merge with main
                git checkout main
                git pull origin main
                git merge $PR_BRANCH --no-ff -m "Merge PR #$pr: $PR_BRANCH" || {
                    echo "Merge conflict detected, resolving..."
                    cleanup_conflicts
                    git add .
                    git commit -m "Resolve merge conflicts for PR #$pr"
                }
                
                # Push changes
                git push origin main
                
                # Delete the branch
                git branch -D $PR_BRANCH
                git push origin --delete $PR_BRANCH 2>/dev/null || true
            }
        fi
    done
}

# Main execution
echo "Starting merge conflict resolution and PR merging process..."

# Clean up any existing merge state
git merge --abort 2>/dev/null || true

# Switch to main branch
git checkout main 2>/dev/null || {
    echo "Failed to checkout main branch"
    exit 1
}

# Pull latest changes
git pull origin main

# Clean up merge conflicts
cleanup_conflicts

# Merge open PRs
merge_open_prs

# Final cleanup
echo "Performing final cleanup..."
git add .
git commit -m "Clean up merge conflicts and consolidate changes" || true
git push origin main

echo "=== Merge conflict resolution and PR merging completed ==="