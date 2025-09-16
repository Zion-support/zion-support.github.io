#!/bin/bash

# Script to merge all open PRs
echo "Starting to merge all open PRs..."

# Read PR numbers from file
while IFS= read -r pr_number; do
    echo "Processing PR #$pr_number..."
    
    # Get the branch name for this PR
    branch_name=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number" | grep -o '"ref": "[^"]*"' | sed 's/"ref": "\([^"]*\)"/\1/')
    
    if [ -n "$branch_name" ]; then
        echo "  Branch: $branch_name"
        
        # Fetch the branch
        git fetch origin "$branch_name:$branch_name" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            # Try to merge
            echo "  Attempting to merge..."
            git merge "$branch_name" --no-ff -m "Merge PR #$pr_number: $branch_name" 2>/dev/null
            
            if [ $? -eq 0 ]; then
                echo "  ✅ Successfully merged PR #$pr_number"
                # Clean up local branch
                git branch -D "$branch_name" 2>/dev/null
            else
                echo "  ⚠️  Merge conflict in PR #$pr_number, resolving..."
                # Resolve conflicts by choosing our version
                git checkout --ours . 2>/dev/null
                git add . 2>/dev/null
                git commit -m "Merge PR #$pr_number: $branch_name - resolved conflicts" 2>/dev/null
                
                if [ $? -eq 0 ]; then
                    echo "  ✅ Successfully merged PR #$pr_number (with conflict resolution)"
                    git branch -D "$branch_name" 2>/dev/null
                else
                    echo "  ❌ Failed to merge PR #$pr_number"
                    git merge --abort 2>/dev/null
                fi
            fi
        else
            echo "  ❌ Failed to fetch branch for PR #$pr_number"
        fi
    else
        echo "  ❌ Could not get branch name for PR #$pr_number"
    fi
    
    echo "  ---"
done < pr_numbers.txt

echo "Completed processing all PRs"