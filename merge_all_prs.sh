#!/bin/bash

# Script to merge all open PRs into main branch
set -e

echo "Starting PR merge process..."

# Get list of open PRs
PR_LIST=$(gh pr list --state open --json number,headRefName --jq '.[] | "\(.number) \(.headRefName)"')

# Process each PR
while IFS= read -r line; do
    if [ -z "$line" ]; then
        continue
    fi
    
    PR_NUMBER=$(echo $line | cut -d' ' -f1)
    BRANCH_NAME=$(echo $line | cut -d' ' -f2)
    
    echo "Processing PR #$PR_NUMBER (branch: $BRANCH_NAME)"
    
    # Checkout the PR branch
    if git checkout "$BRANCH_NAME" 2>/dev/null; then
        echo "Checked out branch $BRANCH_NAME"
        
        # Fetch latest main
        git fetch origin main
        
        # Try to merge with main
        if git merge origin/main --no-edit; then
            echo "Successfully merged $BRANCH_NAME with main"
            
            # Switch to main and merge
            git checkout main
            if git merge "$BRANCH_NAME" --no-edit; then
                echo "Successfully merged $BRANCH_NAME into main"
                
                # Push to main
                if git push origin main; then
                    echo "Successfully pushed main"
                    
                    # Delete the branch
                    git branch -D "$BRANCH_NAME" 2>/dev/null || true
                    echo "Deleted local branch $BRANCH_NAME"
                else
                    echo "Failed to push main"
                fi
            else
                echo "Failed to merge $BRANCH_NAME into main"
                git merge --abort 2>/dev/null || true
            fi
        else
            echo "Failed to merge $BRANCH_NAME with main - resolving conflicts"
            git merge --abort 2>/dev/null || true
            
            # Try to resolve conflicts by removing problematic files
            if [ -f "tsconfig.tsbuildinfo" ]; then
                rm tsconfig.tsbuildinfo
                git add .
                git commit -m "Remove tsconfig.tsbuildinfo - build cache file should not be committed" || true
            fi
            
            # Try merge again
            if git merge origin/main --no-edit; then
                echo "Successfully merged $BRANCH_NAME with main after conflict resolution"
                
                # Switch to main and merge
                git checkout main
                if git merge "$BRANCH_NAME" --no-edit; then
                    echo "Successfully merged $BRANCH_NAME into main"
                    
                    # Push to main
                    if git push origin main; then
                        echo "Successfully pushed main"
                        
                        # Delete the branch
                        git branch -D "$BRANCH_NAME" 2>/dev/null || true
                        echo "Deleted local branch $BRANCH_NAME"
                    else
                        echo "Failed to push main"
                    fi
                else
                    echo "Failed to merge $BRANCH_NAME into main after conflict resolution"
                    git merge --abort 2>/dev/null || true
                fi
            else
                echo "Failed to merge $BRANCH_NAME with main even after conflict resolution"
                git merge --abort 2>/dev/null || true
            fi
        fi
    else
        echo "Failed to checkout branch $BRANCH_NAME"
    fi
    
    echo "Completed processing PR #$PR_NUMBER"
    echo "---"
    
done <<< "$PR_LIST"

echo "PR merge process completed!"