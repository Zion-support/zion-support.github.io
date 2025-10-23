#!/bin/bash

# Script to merge all open PRs
echo "Starting to merge all open PRs..."

# Get list of open PRs
PR_LIST=$(gh pr list --state open --json number,title,headRefName --jq '.[] | "\(.number) \(.headRefName)"')

# Process each PR
while IFS= read -r line; do
    if [ -z "$line" ]; then
        continue
    fi
    
    PR_NUMBER=$(echo "$line" | awk '{print $1}')
    BRANCH_NAME=$(echo "$line" | awk '{print $2}')
    
    echo "Processing PR #$PR_NUMBER ($BRANCH_NAME)..."
    
    # Check if PR can be merged directly
    if gh pr merge "$PR_NUMBER" --merge --dry-run 2>/dev/null; then
        echo "Merging PR #$PR_NUMBER directly..."
        gh pr merge "$PR_NUMBER" --merge
    else
        echo "PR #$PR_NUMBER has conflicts, resolving..."
        
        # Checkout the PR branch
        gh pr checkout "$PR_NUMBER"
        
        # Fetch latest main
        git fetch origin main
        
        # Try to merge main into the branch
        if git merge origin/main; then
            echo "Merge successful, pushing changes..."
            git push origin "$BRANCH_NAME"
            
            # Now try to merge the PR
            if gh pr merge "$PR_NUMBER" --merge; then
                echo "Successfully merged PR #$PR_NUMBER"
            else
                echo "Failed to merge PR #$PR_NUMBER after conflict resolution"
            fi
        else
            echo "Merge conflict detected, attempting to resolve..."
            
            # Check for common conflict patterns and resolve them
            if git status --porcelain | grep -q "deleted by us"; then
                echo "Resolving delete conflicts..."
                git status --porcelain | grep "deleted by us" | awk '{print $2}' | xargs git rm
            fi
            
            if git status --porcelain | grep -q "deleted by them"; then
                echo "Resolving delete conflicts (deleted by them)..."
                git status --porcelain | grep "deleted by them" | awk '{print $2}' | xargs git add
            fi
            
            # Add all changes
            git add .
            
            # Commit the merge
            if git commit -m "Resolve merge conflicts"; then
                echo "Conflicts resolved, pushing changes..."
                git push origin "$BRANCH_NAME"
                
                # Try to merge the PR
                if gh pr merge "$PR_NUMBER" --merge; then
                    echo "Successfully merged PR #$PR_NUMBER after conflict resolution"
                else
                    echo "Failed to merge PR #$PR_NUMBER after conflict resolution"
                fi
            else
                echo "Failed to resolve conflicts for PR #$PR_NUMBER"
            fi
        fi
    fi
    
    echo "Completed processing PR #$PR_NUMBER"
    echo "---"
    
done <<< "$PR_LIST"

echo "Finished processing all PRs"