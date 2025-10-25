#!/bin/bash

# Script to resolve merge conflicts by accepting incoming changes
# This will merge branches and automatically resolve conflicts

echo "Starting merge conflict resolution process..."

# Function to merge a branch and resolve conflicts
merge_branch() {
    local branch=$1
    echo "Attempting to merge $branch..."
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-edit; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts by accepting incoming changes..."
            
            # Find all conflicted files
            conflicted_files=$(git diff --name-only --diff-filter=U)
            
            if [ -n "$conflicted_files" ]; then
                echo "Conflicted files: $conflicted_files"
                
                # For each conflicted file, accept the incoming version
                for file in $conflicted_files; do
                    echo "Resolving conflicts in $file..."
                    git checkout --theirs "$file"
                    git add "$file"
                done
                
                # Commit the merge
                git commit --no-edit
                echo "✅ Successfully resolved conflicts and merged $branch"
                return 0
            else
                echo "No conflicted files found, aborting merge"
                git merge --abort
                return 1
            fi
        else
            echo "No conflicts found, merge should be successful"
            return 0
        fi
    fi
}

# Get list of recent branches to merge
echo "Fetching latest branches..."
git fetch --all

# Get the most recent branches (excluding backup and automation branches)
branches=$(git branch -r --sort=-committerdate | grep -v "aggressive-merge-backup" | grep -v "automation" | grep "cursor/fix-errors-and-merge-to-main" | head -10)

echo "Found branches to merge:"
echo "$branches"

# Merge each branch
for branch in $branches; do
    branch_name=$(echo $branch | sed 's/origin\///')
    merge_branch "$branch_name"
    echo "---"
done

echo "Merge conflict resolution process completed!"