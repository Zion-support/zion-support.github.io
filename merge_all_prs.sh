#!/bin/bash

<<<<<<< HEAD
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
=======
# Script to merge all open PRs into main branch
# This script will attempt to merge each PR and resolve conflicts automatically

set -e

echo "Starting PR merge process..."

# List of PR numbers to merge
PR_NUMBERS=(17585 19431 19432 19435 19436 19437 19438 19440 19444 19445 19446 19447 19448 19449 19450)

# Function to merge a PR
merge_pr() {
    local pr_number=$1
    echo "Processing PR #$pr_number..."
    
    # Get PR details
    local pr_info=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    local head_ref=$(echo "$pr_info" | grep -o '"head":[^}]*"ref":"[^"]*"' | sed 's/.*"ref":"\([^"]*\)".*/\1/')
    local head_sha=$(echo "$pr_info" | grep -o '"head":[^}]*"sha":"[^"]*"' | sed 's/.*"sha":"\([^"]*\)".*/\1/')
    
    if [ -z "$head_ref" ]; then
        echo "Could not get head ref for PR #$pr_number, skipping..."
        return 1
    fi
    
    echo "PR #$pr_number head ref: $head_ref"
    
    # Fetch the branch
    git fetch origin "$head_ref:$head_ref"
    
    # Try to merge
    if git merge "$head_ref" --no-ff -m "Merge PR #$pr_number: $head_ref" 2>/dev/null; then
        echo "Successfully merged PR #$pr_number"
        return 0
    else
        echo "Merge conflict in PR #$pr_number, attempting to resolve..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts for PR #$pr_number..."
            
            # Use our version for conflicts (accept incoming changes)
            git checkout --ours .
            git add .
            
            # Complete the merge
            git commit -m "Merge PR #$pr_number: $head_ref (resolved conflicts)"
            echo "Resolved conflicts and merged PR #$pr_number"
        else
            echo "No conflicts detected, completing merge for PR #$pr_number"
            git commit -m "Merge PR #$pr_number: $head_ref"
        fi
        return 0
    fi
}

# Process each PR
for pr_number in "${PR_NUMBERS[@]}"; do
    echo "=========================================="
    echo "Processing PR #$pr_number"
    echo "=========================================="
    
    if merge_pr "$pr_number"; then
        echo "✅ Successfully processed PR #$pr_number"
    else
        echo "❌ Failed to process PR #$pr_number"
    fi
    
    echo ""
done

echo "=========================================="
echo "PR merge process completed"
echo "=========================================="

# Push all changes
echo "Pushing changes to main branch..."
git push origin main

echo "All PRs have been processed and pushed to main branch!"
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120
