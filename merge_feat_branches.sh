#!/bin/bash

# Script to merge feat branches automatically
echo "Starting automated merge of feat branches..."

# Get list of feat branches to merge
feat_branches=$(git branch -r --no-merged main | grep "origin/feat/" | head -20)

for branch in $feat_branches; do
    branch_name=$(echo "$branch" | sed 's/origin\///')
    echo "Merging $branch..."
    
    # Attempt merge
    git merge "$branch" -m "Merge $branch_name: Auto-merge feat branch"
    
    if [ $? -ne 0 ]; then
        echo "Merge conflicts detected for $branch_name. Resolving..."
        
        # Fix merge conflicts
        ./fix_merge_conflicts.sh
        
        # Add resolved files
        git add .
        
        # Complete the merge
        git commit -m "Merge $branch_name: Resolve conflicts and integrate changes"
        
        if [ $? -eq 0 ]; then
            echo "Successfully merged $branch_name"
        else
            echo "Failed to merge $branch_name"
            git merge --abort
        fi
    else
        echo "Successfully merged $branch_name without conflicts"
    fi
    
    echo "---"
done

echo "Automated merge of feat branches completed!"