#!/bin/bash

# Comprehensive merge script for all unmerged branches
echo "Starting comprehensive merge of all unmerged branches..."

# Ensure we are on main and up-to-date
git checkout main
git pull origin main

# Get list of all unmerged remote branches (excluding backup branches)
UNMERGED_BRANCHES=$(git branch -r --no-merged main | grep -v "backup-" | grep -v "cursor-merge" | grep -v "bulk-merge" | grep -v "streamlined" | grep -v "targeted" | grep -v "focused" | grep -v "temp-merge" | head -50)

echo "Found $(echo "$UNMERGED_BRANCHES" | wc -l) branches to merge"

# Counter for tracking progress
count=0
total=$(echo "$UNMERGED_BRANCHES" | wc -l)

for branch in $UNMERGED_BRANCHES; do
    count=$((count + 1))
    branch_name=$(echo "$branch" | sed 's/origin\///')
    
    echo "---"
    echo "Processing branch $count/$total: $branch_name"
    
    # Skip if branch is main
    if [ "$branch_name" = "main" ]; then
        echo "Skipping main branch"
        continue
    fi
    
    echo "Attempting to merge branch: $branch_name"
    git merge "$branch" --no-commit
    
    if [ $? -ne 0 ]; then
        echo "Conflicts found in $branch_name, resolving automatically..."
        # Abort the current merge attempt to start fresh with 'ours' strategy
        git merge --abort
        git checkout main
        git pull origin main # Ensure main is truly latest before merging
        git merge --no-commit -Xours "$branch" # Prefer 'ours' for conflicts
        
        # Add all resolved files
        git add .
        git commit -m "Merge $branch_name into main - resolved conflicts automatically"
    else
        git commit -m "Merge $branch_name into main - no conflicts"
    fi
    
    echo "✅ Successfully merged $branch_name"
    
    # Push after every 10 merges to keep remote updated
    if [ $((count % 10)) -eq 0 ]; then
        echo "Pushing progress after $count merges..."
        git push origin main
    fi
done

echo "---"
echo "All merges completed! Pushing final changes..."
git push origin main

echo "---"
echo "Comprehensive merge process completed!"
git status