#!/bin/bash

# Script to merge all open PRs
echo "Starting to merge all open PRs..."

# Get list of open PRs
PRS=$(gh pr list --state open --json number,title,headRefName --jq '.[] | "\(.number) \(.headRefName)"')

echo "Found open PRs:"
echo "$PRS"

# Process each PR
while IFS= read -r line; do
    if [ -n "$line" ]; then
        PR_NUMBER=$(echo "$line" | awk '{print $1}')
        BRANCH_NAME=$(echo "$line" | awk '{print $2}')
        
        echo "Processing PR #$PR_NUMBER (branch: $BRANCH_NAME)"
        
        # Try to merge the PR
        if gh pr merge "$PR_NUMBER" --merge --delete-branch; then
            echo "Successfully merged PR #$PR_NUMBER"
        else
            echo "Failed to merge PR #$PR_NUMBER, trying to resolve conflicts..."
            
            # Try to checkout the branch and resolve conflicts
            if git fetch origin "$BRANCH_NAME" && git checkout -b "temp-$BRANCH_NAME" "origin/$BRANCH_NAME"; then
                echo "Checked out branch $BRANCH_NAME"
                
                # Try to merge with main
                if git merge main --no-ff; then
                    echo "Successfully merged $BRANCH_NAME with main"
                    git push origin "temp-$BRANCH_NAME"
                else
                    echo "Merge conflicts detected in $BRANCH_NAME"
                    # Try to resolve conflicts automatically
                    git status
                    # For now, just abort the merge and continue
                    git merge --abort
                fi
                
                # Clean up
                git checkout main
                git branch -D "temp-$BRANCH_NAME"
            else
                echo "Could not checkout branch $BRANCH_NAME"
            fi
        fi
        
        echo "---"
    fi
done <<< "$PRS"

echo "Finished processing all PRs"