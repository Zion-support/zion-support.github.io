#!/bin/bash

# Script to merge all open PRs into main branch
# This script will handle merge conflicts and merge all pending PRs

echo "Starting PR merge process..."

# List of branches to merge (based on recent activity)
BRANCHES=(
    "origin/website-audit-and-improvements"
    "origin/test-merge8"
    "origin/temp-pr-28049"
    "origin/temp-merge-branch"
    "origin/resolve-merge-conflicts-and-deploy"
    "origin/resolve-merge-conflicts-1759965566"
    "origin/resolve-merge-conflicts"
    "origin/resolved-merge-conflicts-and-improvements"
)

# Function to check if branch has commits ahead of main
check_branch_ahead() {
    local branch=$1
    local commits_ahead=$(git log --oneline main..$branch | wc -l)
    echo $commits_ahead
}

# Function to merge branch with conflict resolution
merge_branch() {
    local branch=$1
    echo "Attempting to merge $branch..."
    
    # Check if branch has commits ahead of main
    local commits_ahead=$(check_branch_ahead $branch)
    
    if [ $commits_ahead -gt 0 ]; then
        echo "Branch $branch has $commits_ahead commits ahead of main"
        
        # Try to merge
        if git merge $branch --no-edit; then
            echo "Successfully merged $branch"
            return 0
        else
            echo "Merge conflict in $branch, attempting to resolve..."
            
            # Check for merge conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "Resolving merge conflicts in $branch..."
                
                # Auto-resolve conflicts by accepting incoming changes for most files
                # This is a simple strategy - in production you'd want more sophisticated conflict resolution
                git checkout --theirs .
                git add .
                
                if git commit --no-edit; then
                    echo "Successfully resolved conflicts and merged $branch"
                    return 0
                else
                    echo "Failed to resolve conflicts for $branch"
                    git merge --abort
                    return 1
                fi
            else
                echo "No merge conflicts detected for $branch"
                return 0
            fi
        fi
    else
        echo "Branch $branch is up to date with main"
        return 0
    fi
}

# Main merge process
echo "Checking branches for merge..."

for branch in "${BRANCHES[@]}"; do
    echo "Processing $branch..."
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/$branch; then
        merge_branch $branch
        if [ $? -eq 0 ]; then
            echo "✓ Successfully processed $branch"
        else
            echo "✗ Failed to process $branch"
        fi
    else
        echo "Branch $branch does not exist, skipping..."
    fi
    
    echo "---"
done

echo "PR merge process completed!"
echo "Current status:"
git status

echo "Recent commits:"
git log --oneline -10