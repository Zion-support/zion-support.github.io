#!/bin/bash

# Quick merge script for remaining branches
set -e

echo "Starting quick merge process..."

# Get remaining unmerged branches
UNMERGED_BRANCHES=$(git branch -r --no-merged origin/main | grep -v "backup-main" | head -10)

echo "Found unmerged branches:"
echo "$UNMERGED_BRANCHES"

SUCCESS_COUNT=0
FAILED_BRANCHES=()

for branch in $UNMERGED_BRANCHES; do
    echo ""
    echo "Processing branch: $branch"
    
    # Extract branch name without origin/
    BRANCH_NAME=$(echo $branch | sed 's/origin\///')
    
    # Try to merge the branch
    if git merge --no-ff "$branch" -m "Merge $BRANCH_NAME into main" 2>/dev/null; then
        echo "✅ Successfully merged $BRANCH_NAME"
        ((SUCCESS_COUNT++))
    else
        echo "❌ Failed to merge $BRANCH_NAME - resolving conflicts..."
        
        # Resolve common conflicts
        if git status --porcelain | grep -q "yarn.lock"; then
            echo "Regenerating yarn.lock..."
            rm yarn.lock
            yarn install --silent
            git add yarn.lock
        fi
        
        if git status --porcelain | grep -q "package.json"; then
            echo "Using main version of package.json..."
            git checkout --ours package.json
            git add package.json
        fi
        
        if git status --porcelain | grep -q "tsconfig.json"; then
            echo "Using main version of tsconfig.json..."
            git checkout --ours tsconfig.json
            git add tsconfig.json
        fi
        
        # Handle deleted files
        if git status --porcelain | grep -q "package-lock.json"; then
            git rm package-lock.json 2>/dev/null || true
        fi
        
        # Add all resolved files
        git add .
        
        # Commit the resolved conflicts
        if git commit --no-edit -m "Merge $BRANCH_NAME: resolve conflicts"; then
            echo "✅ Successfully resolved conflicts and merged $BRANCH_NAME"
            ((SUCCESS_COUNT++))
        else
            echo "❌ Failed to commit resolved conflicts for $BRANCH_NAME"
            FAILED_BRANCHES+=("$BRANCH_NAME")
            git merge --abort
        fi
    fi
done

echo ""
echo "Quick merge process completed!"
echo "Successfully merged: $SUCCESS_COUNT branches"
echo "Failed branches: ${#FAILED_BRANCHES[@]}"

if [ ${#FAILED_BRANCHES[@]} -gt 0 ]; then
    echo "Failed branches:"
    for branch in "${FAILED_BRANCHES[@]}"; do
        echo "  - $branch"
    done
fi

echo "Process complete!"