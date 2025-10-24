#!/bin/bash

# Continue merging remaining cursor branches
set -e

echo "Continuing merge process for remaining cursor branches..."

# Get remaining cursor branches
BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | head -50)

for branch in $BRANCHES; do
    echo "Processing branch: $branch"
    
    # Extract branch name without origin/
    branch_name=$(echo $branch | sed 's/origin\///')
    
    # Create local branch
    git checkout -b $branch_name $branch 2>/dev/null || git checkout $branch_name
    
    # Switch to main
    git checkout main
    
    # Try to merge with strategy to accept incoming changes
    echo "Merging $branch_name into main..."
    
    if git merge $branch_name --strategy-option=theirs --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        git branch -D $branch_name
    else
        echo "❌ Failed to merge $branch_name, resolving conflicts..."
        
        # Resolve conflicts by accepting incoming changes
        git status --porcelain | while read status file; do
            if [[ $status == "UU" || $status == "AA" || $status == "AU" ]]; then
                echo "Resolving conflict in $file by accepting incoming changes"
                git checkout --theirs "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            elif [[ $status == "DD" || $status == "UD" ]]; then
                echo "Removing deleted file $file"
                git rm "$file" 2>/dev/null || true
            elif [[ $status == "DU" ]]; then
                echo "Adding new file $file"
                git add "$file" 2>/dev/null || true
            fi
        done
        
        # Add all remaining files
        git add . 2>/dev/null || true
        
        # Commit the merge
        if git commit --no-edit -m "Merge $branch_name with conflict resolution" 2>/dev/null; then
            echo "✅ Successfully resolved conflicts and merged $branch_name"
            git branch -D $branch_name
        else
            echo "❌ Failed to resolve conflicts for $branch_name, aborting merge"
            git merge --abort 2>/dev/null || true
            git branch -D $branch_name
        fi
    fi
    
    echo "---"
done

echo "Continue merge process completed!"
git status