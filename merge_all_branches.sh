#!/bin/bash

# Script to merge all remaining branches systematically
echo "Starting comprehensive branch merge process..."

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

# Get list of all branches to merge
echo "Fetching latest branches..."
git fetch --all

# Get all cursor branches (excluding backup and automation branches)
branches=$(git branch -r --sort=-committerdate | grep -v "aggressive-merge-backup" | grep -v "automation" | grep "cursor/" | head -50)

echo "Found branches to merge:"
echo "$branches"

# Counter for successful merges
successful_merges=0
total_branches=0

# Merge each branch
for branch in $branches; do
    branch_name=$(echo $branch | sed 's/origin\///')
    total_branches=$((total_branches + 1))
    
    echo "Processing branch $total_branches: $branch_name"
    
    if merge_branch "$branch_name"; then
        successful_merges=$((successful_merges + 1))
        echo "✅ Successfully merged $branch_name ($successful_merges/$total_branches)"
    else
        echo "❌ Failed to merge $branch_name"
    fi
    
    echo "---"
    
    # Push every 10 successful merges
    if [ $((successful_merges % 10)) -eq 0 ] && [ $successful_merges -gt 0 ]; then
        echo "Pushing changes after $successful_merges merges..."
        git push origin main
    fi
done

echo "Merge process completed!"
echo "Successfully merged: $successful_merges out of $total_branches branches"

# Final push
echo "Pushing final changes..."
git push origin main

echo "All merges completed and pushed to origin/main!"