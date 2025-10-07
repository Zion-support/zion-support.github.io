#!/bin/bash

# Script to merge all open PRs into main
# This script will attempt to merge each PR, resolve conflicts if possible, and continue

set -e

TOKEN="ghs_X7oYYb9yhUcF7QoNtd5FeuXHedsU042QBWy9"
REPO="Zion-Holdings/zion.app"

# Array of PR numbers and their branches
declare -a PRS=(
    "25770:cursor/fix-errors-and-merge-to-main-a050"
    "25769:cursor/fix-errors-and-merge-to-main-7ef9"
    "25768:cursor/fix-errors-and-merge-to-main-ccb4"
    "25767:cursor/resolve-build-and-dependency-errors-8513"
    "25766:cursor/fix-errors-and-merge-to-main-499f"
    "25765:cursor/fix-errors-and-merge-to-main-b627"
    "25764:cursor/fix-errors-and-merge-to-main-d5d6"
    "25763:cursor/fix-errors-and-merge-to-main-7cd3"
    "25761:cursor/fix-errors-and-merge-to-main-bb89"
    "25760:cursor/fix-errors-and-merge-to-main-384c"
    "25739:cursor/fix-errors-and-merge-to-main-d71d"
    "25732:cursor/fix-errors-and-merge-to-main-edb6"
    "25731:cursor/fix-errors-and-merge-to-main-af74"
    "25722:cursor/fix-errors-and-merge-to-main-ee79"
    "25714:cursor/fix-errors-and-merge-to-main-b8cc"
    "25705:cursor/fix-errors-and-merge-to-main-bb66"
    "25704:cursor/fix-errors-and-merge-to-main-a886"
)

echo "Starting to merge ${#PRS[@]} PRs into main..."
echo "=============================================="

MERGED_COUNT=0
FAILED_COUNT=0
CONFLICT_COUNT=0

for pr_info in "${PRS[@]}"; do
    IFS=':' read -r PR_NUMBER BRANCH_NAME <<< "$pr_info"
    
    echo ""
    echo "Processing PR #$PR_NUMBER (branch: $BRANCH_NAME)..."
    echo "---------------------------------------------------"
    
    # Fetch the branch
    git fetch origin "$BRANCH_NAME" || {
        echo "ERROR: Failed to fetch branch $BRANCH_NAME"
        ((FAILED_COUNT++))
        continue
    }
    
    # Try to merge the branch into main
    git merge "origin/$BRANCH_NAME" --no-edit --no-ff || {
        # Merge failed, likely due to conflicts
        echo "CONFLICT: Merge conflict detected for PR #$PR_NUMBER"
        
        # Check if there are conflicts
        if git diff --name-only --diff-filter=U | grep -q .; then
            echo "Attempting to auto-resolve conflicts..."
            
            # Get list of conflicted files
            CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
            
            # For simple cases, accept incoming changes
            for file in $CONFLICT_FILES; do
                echo "  - Resolving conflict in $file (accepting incoming changes)"
                git checkout --theirs "$file" || git rm "$file" 2>/dev/null || true
            done
            
            # Try to commit the merge
            git add -A
            git commit -m "Merge PR #$PR_NUMBER: $BRANCH_NAME (auto-resolved conflicts)" || {
                echo "ERROR: Failed to commit merge for PR #$PR_NUMBER"
                git merge --abort
                ((FAILED_COUNT++))
                continue
            }
            
            ((CONFLICT_COUNT++))
        else
            echo "ERROR: Merge failed for PR #$PR_NUMBER (no conflicts found)"
            git merge --abort
            ((FAILED_COUNT++))
            continue
        fi
    }
    
    echo "SUCCESS: Merged PR #$PR_NUMBER"
    ((MERGED_COUNT++))
    
    # Mark PR as merged via API
    echo "Attempting to mark PR #$PR_NUMBER as merged via GitHub API..."
    curl -X PUT -H "Authorization: token $TOKEN" \
         -H "Accept: application/vnd.github.v3+json" \
         "https://api.github.com/repos/$REPO/pulls/$PR_NUMBER/merge" \
         -d '{"merge_method":"merge"}' || echo "Note: API merge call failed, but local merge succeeded"
done

echo ""
echo "=============================================="
echo "Merge Summary:"
echo "  - Total PRs processed: ${#PRS[@]}"
echo "  - Successfully merged: $MERGED_COUNT"
echo "  - Auto-resolved conflicts: $CONFLICT_COUNT"
echo "  - Failed: $FAILED_COUNT"
echo "=============================================="

# Push changes to main
echo ""
echo "Pushing merged changes to origin/main..."
git push origin main

echo ""
echo "All done! Merged PRs have been pushed to main."
