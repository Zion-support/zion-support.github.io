#!/bin/bash

# Smart PR merger that handles conflicts by accepting main branch changes
# This script processes PRs one by one and resolves conflicts automatically

echo "Starting smart PR merging process..."
echo "This script will merge PRs and resolve conflicts by accepting main branch changes"
echo ""

# Use the existing pr_numbers.txt file
# (pr_numbers.txt should already exist with PR numbers)

TOTAL_PRS=$(wc -l < pr_numbers.txt)
PROCESSED_COUNT=0
SUCCESS_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0

echo "Total PRs to process: $TOTAL_PRS"
echo ""

while IFS= read -r pr_number; do
    PROCESSED_COUNT=$((PROCESSED_COUNT + 1))
    echo "[$PROCESSED_COUNT/$TOTAL_PRS] Processing PR #$pr_number..."
    
    # Fetch the PR
    if git fetch origin pull/$pr_number/head:pr-$pr_number 2>/dev/null; then
        echo "✓ Fetched PR #$pr_number"
        
        # Checkout the PR branch
        if git checkout pr-$pr_number 2>/dev/null; then
            echo "✓ Checked out PR #$pr_number"
            
            # Try to merge with main
            if git merge main --no-edit 2>/dev/null; then
                echo "✓ Merged PR #$pr_number with main (no conflicts)"
                
                # Go back to main
                git checkout main 2>/dev/null
                
                # Merge the PR into main
                if git merge pr-$pr_number --no-edit 2>/dev/null; then
                    echo "✓ Merged PR #$pr_number into main"
                    
                    # Push to origin
                    if git push origin main 2>/dev/null; then
                        echo "✓ Pushed PR #$pr_number to origin/main"
                        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
                    else
                        echo "✗ Failed to push PR #$pr_number"
                        FAILED_COUNT=$((FAILED_COUNT + 1))
                    fi
                else
                    echo "✗ Failed to merge PR #$pr_number into main"
                    FAILED_COUNT=$((FAILED_COUNT + 1))
                fi
            else
                echo "⚠ Merge conflicts detected in PR #$pr_number"
                echo "  Resolving conflicts by accepting main branch changes..."
                
                # Resolve conflicts by accepting main branch changes
                git checkout --theirs . 2>/dev/null
                git add . 2>/dev/null
                
                if git commit -m "Resolve merge conflicts by accepting main branch changes" 2>/dev/null; then
                    echo "✓ Resolved conflicts for PR #$pr_number"
                    
                    # Go back to main
                    git checkout main 2>/dev/null
                    
                    # Merge the PR into main
                    if git merge pr-$pr_number --no-edit 2>/dev/null; then
                        echo "✓ Merged PR #$pr_number into main (after conflict resolution)"
                        
                        # Push to origin
                        if git push origin main 2>/dev/null; then
                            echo "✓ Pushed PR #$pr_number to origin/main"
                            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
                        else
                            echo "✗ Failed to push PR #$pr_number"
                            FAILED_COUNT=$((FAILED_COUNT + 1))
                        fi
                    else
                        echo "✗ Failed to merge PR #$pr_number into main after conflict resolution"
                        FAILED_COUNT=$((FAILED_COUNT + 1))
                    fi
                else
                    echo "✗ Failed to resolve conflicts for PR #$pr_number"
                    git checkout main 2>/dev/null
                    FAILED_COUNT=$((FAILED_COUNT + 1))
                fi
            fi
            
            # Clean up the local PR branch
            git branch -D pr-$pr_number 2>/dev/null
        else
            echo "✗ Failed to checkout PR #$pr_number"
            FAILED_COUNT=$((FAILED_COUNT + 1))
        fi
    else
        echo "✗ Failed to fetch PR #$pr_number (may already be merged or deleted)"
        SKIPPED_COUNT=$((SKIPPED_COUNT + 1))
    fi
    
    echo "---"
    
    # Brief pause to avoid overwhelming the system
    sleep 1
    
done < pr_numbers.txt

echo ""
echo "Smart PR merging completed!"
echo "Total processed: $PROCESSED_COUNT"
echo "Successfully merged: $SUCCESS_COUNT"
echo "Failed: $FAILED_COUNT"
echo "Skipped (already merged/deleted): $SKIPPED_COUNT"
echo ""

# Clean up
rm -f pr_numbers.txt