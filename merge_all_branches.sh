#!/bin/bash

# Script to merge all unmerged branches into main
set -e

echo "Starting comprehensive branch merge process..."

# Get all unmerged branches
UNMERGED_BRANCHES=$(git branch -r --no-merged origin/main | grep -v "backup-main" | head -20)

echo "Found unmerged branches:"
echo "$UNMERGED_BRANCHES"

# Create a backup branch
git checkout -b backup-before-merge-$(date +%Y%m%d-%H%M%S)

# Switch back to main
git checkout main

# Counter for successful merges
SUCCESS_COUNT=0
FAILED_BRANCHES=()

for branch in $UNMERGED_BRANCHES; do
    echo ""
    echo "Processing branch: $branch"
    
    # Extract branch name without origin/
    BRANCH_NAME=$(echo $branch | sed 's/origin\///')
    
    # Try to merge the branch
    if git merge --no-ff "$branch" -m "Merge $BRANCH_NAME into main"; then
        echo "✅ Successfully merged $BRANCH_NAME"
        ((SUCCESS_COUNT++))
    else
        echo "❌ Failed to merge $BRANCH_NAME - resolving conflicts..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $BRANCH_NAME..."
            
            # For yarn.lock conflicts, regenerate the file
            if git status --porcelain | grep -q "yarn.lock"; then
                echo "Regenerating yarn.lock..."
                rm yarn.lock
                yarn install
                git add yarn.lock
            fi
            
            # For package.json conflicts, use the main version
            if git status --porcelain | grep -q "package.json"; then
                echo "Using main version of package.json..."
                git checkout --ours package.json
                git add package.json
            fi
            
            # For tsconfig.json conflicts, use the main version
            if git status --porcelain | grep -q "tsconfig.json"; then
                echo "Using main version of tsconfig.json..."
                git checkout --ours tsconfig.json
                git add tsconfig.json
            fi
            
            # Commit the resolved conflicts
            if git commit --no-edit; then
                echo "✅ Successfully resolved conflicts and merged $BRANCH_NAME"
                ((SUCCESS_COUNT++))
            else
                echo "❌ Failed to commit resolved conflicts for $BRANCH_NAME"
                FAILED_BRANCHES+=("$BRANCH_NAME")
                git merge --abort
            fi
        else
            echo "❌ No conflicts detected but merge failed for $BRANCH_NAME"
            FAILED_BRANCHES+=("$BRANCH_NAME")
            git merge --abort
        fi
    fi
done

echo ""
echo "Merge process completed!"
echo "Successfully merged: $SUCCESS_COUNT branches"
echo "Failed branches: ${#FAILED_BRANCHES[@]}"

if [ ${#FAILED_BRANCHES[@]} -gt 0 ]; then
    echo "Failed branches:"
    for branch in "${FAILED_BRANCHES[@]}"; do
        echo "  - $branch"
    done
fi

# Push the updated main branch
echo "Pushing updated main branch..."
git push origin main

echo "Process complete!"