#!/bin/bash

# Script to merge branches systematically
# Start with the most recent branches

echo "Starting systematic branch merging..."

# Get the most recent 50 branches (excluding main)
RECENT_BRANCHES=$(git for-each-ref --sort=-committerdate refs/remotes/origin --format='%(refname:short)' | grep -v "origin/main" | head -50)

# Counter for tracking progress
count=0
successful_merges=0
failed_merges=0

for branch in $RECENT_BRANCHES; do
    count=$((count + 1))
    echo "Processing $count/50: $branch"
    
    # Extract branch name without origin/
    branch_name=${branch#origin/}
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch_name; then
        echo "Branch $branch_name already exists locally, skipping..."
        continue
    fi
    
    # Fetch the branch
    echo "Fetching $branch..."
    git fetch origin $branch_name:$branch_name
    
    if [ $? -ne 0 ]; then
        echo "Failed to fetch $branch_name"
        failed_merges=$((failed_merges + 1))
        continue
    fi
    
    # Check if branch can be merged without conflicts
    echo "Checking merge compatibility for $branch_name..."
    git merge-base main $branch_name > /dev/null 2>&1
    
    if [ $? -ne 0 ]; then
        echo "No common ancestor for $branch_name, skipping..."
        failed_merges=$((failed_merges + 1))
        continue
    fi
    
    # Try to merge
    echo "Attempting to merge $branch_name into main..."
    git checkout main
    git merge $branch_name --no-ff -m "Merge $branch_name into main"
    
    if [ $? -eq 0 ]; then
        echo "Successfully merged $branch_name"
        successful_merges=$((successful_merges + 1))
        
        # Push the changes
        echo "Pushing changes to origin..."
        git push origin main
        
        if [ $? -eq 0 ]; then
            echo "Successfully pushed $branch_name merge"
        else
            echo "Failed to push $branch_name merge"
        fi
    else
        echo "Merge conflict in $branch_name, resolving..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $branch_name..."
            
            # Try to resolve conflicts automatically
            git add .
            git commit -m "Resolve merge conflicts in $branch_name"
            
            if [ $? -eq 0 ]; then
                echo "Successfully resolved conflicts for $branch_name"
                successful_merges=$((successful_merges + 1))
                
                # Push the changes
                git push origin main
            else
                echo "Failed to resolve conflicts for $branch_name"
                git merge --abort
                failed_merges=$((failed_merges + 1))
            fi
        else
            echo "No conflicts detected, but merge failed for $branch_name"
            failed_merges=$((failed_merges + 1))
        fi
    fi
    
    # Clean up local branch
    git branch -D $branch_name 2>/dev/null || true
    
    echo "Completed processing $branch_name"
    echo "---"
done

echo "Merge process completed!"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"
echo "Total processed: $count"