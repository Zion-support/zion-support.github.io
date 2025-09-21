#!/bin/bash

# Script to merge recent branches that have actual differences
echo "Starting targeted branch merging..."

# List of specific branches to try merging
BRANCHES=(
    "8aozst-codex/implement-cart-functionality-with-react-context"
    "8arrdw-codex/centralize-fetch-error-handling"
    "8axt14-codex/add-error-handling-and-fallback-data"
    "74tfm8-codex/implement-instant-messaging-for-negotiations"
    "75rlpk-codex/fix-modulenamemapper-configuration-for-tests"
    "87zh7m-codex/fix-netlify-build-failures-due-to-typescript-errors"
    "2xbrce-codex/introduce-automated-testing-with-jest-and-cypress"
)

successful_merges=0
failed_merges=0

for branch in "${BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Fetch the branch
    echo "Fetching $branch..."
    git fetch origin $branch:$branch
    
    if [ $? -ne 0 ]; then
        echo "Failed to fetch $branch"
        failed_merges=$((failed_merges + 1))
        continue
    fi
    
    # Check if there are differences
    echo "Checking differences for $branch..."
    DIFF_COUNT=$(git diff main..$branch --name-only | wc -l)
    
    if [ $DIFF_COUNT -eq 0 ]; then
        echo "No differences found for $branch, skipping..."
        git branch -D $branch 2>/dev/null || true
        continue
    fi
    
    echo "Found $DIFF_COUNT differences in $branch"
    
    # Try to merge
    echo "Attempting to merge $branch into main..."
    git merge $branch --no-ff -m "Merge $branch into main"
    
    if [ $? -eq 0 ]; then
        echo "Successfully merged $branch"
        successful_merges=$((successful_merges + 1))
        
        # Push the changes
        echo "Pushing changes to origin..."
        git push origin main
        
        if [ $? -eq 0 ]; then
            echo "Successfully pushed $branch merge"
        else
            echo "Failed to push $branch merge"
        fi
    else
        echo "Merge conflict in $branch, resolving..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $branch..."
            
            # Try to resolve conflicts automatically
            git add .
            git commit -m "Resolve merge conflicts in $branch"
            
            if [ $? -eq 0 ]; then
                echo "Successfully resolved conflicts for $branch"
                successful_merges=$((successful_merges + 1))
                
                # Push the changes
                git push origin main
            else
                echo "Failed to resolve conflicts for $branch"
                git merge --abort
                failed_merges=$((failed_merges + 1))
            fi
        else
            echo "No conflicts detected, but merge failed for $branch"
            failed_merges=$((failed_merges + 1))
        fi
    fi
    
    # Clean up local branch
    git branch -D $branch 2>/dev/null || true
    
    echo "Completed processing $branch"
    echo "---"
done

echo "Merge process completed!"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"