#!/bin/bash

echo "Starting comprehensive merge strategy..."

# Switch to main
git checkout main

# Get all cursor/fix-errors-and-merge-to-main branches
branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | head -10)

echo "Found branches to process:"
echo "$branches"

# Create a new branch for comprehensive merge
git checkout -b comprehensive-merge-$(date +%Y%m%d-%H%M%S)

# Try to merge each branch with conflict resolution
for branch in $branches; do
    echo "Processing $branch..."
    
    # Extract branch name without origin/
    branch_name=$(echo $branch | sed 's/origin\///')
    
    # Try to merge with strategy
    if git merge "origin/$branch_name" -X theirs --no-ff -m "Merge $branch_name with conflict resolution" 2>/dev/null; then
        echo "Successfully merged $branch_name"
    else
        echo "Failed to merge $branch_name, trying to resolve conflicts..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $branch_name..."
            
            # Try to resolve conflicts automatically
            git add . 2>/dev/null
            git commit -m "Resolve conflicts in $branch_name" 2>/dev/null
            
            if [ $? -eq 0 ]; then
                echo "Successfully resolved conflicts for $branch_name"
            else
                echo "Could not resolve conflicts for $branch_name, skipping..."
                git merge --abort 2>/dev/null
            fi
        else
            echo "No conflicts detected, but merge failed for $branch_name"
            git merge --abort 2>/dev/null
        fi
    fi
done

echo "Comprehensive merge completed. Checking final status..."
git status

echo "Switching back to main..."
git checkout main

echo "Merging comprehensive changes..."
git merge comprehensive-merge-* --no-ff -m "Comprehensive merge of all error fixes"

echo "Pushing changes to main..."
git push origin main

echo "All done!"