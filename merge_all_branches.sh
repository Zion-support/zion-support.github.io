#!/bin/bash

# Script to merge all unmerged branches into main and resolve conflicts
set -e

echo "Starting merge process for all unmerged branches..."

# Get list of unmerged branches
UNMERGED_BRANCHES=$(git branch -r --no-merged main | grep -v HEAD | head -20)

echo "Found unmerged branches:"
echo "$UNMERGED_BRANCHES"

# Function to resolve conflicts
resolve_conflicts() {
    local branch=$1
    echo "Attempting to merge branch: $branch"
    
    # Try to merge
    if git merge "$branch" --no-commit; then
        echo "✅ Successfully merged $branch (no conflicts)"
        git commit -m "Merge $branch into main"
        return 0
    else
        echo "⚠️  Merge conflict detected in $branch"
        
        # Check for conflict files
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
        echo "Conflicted files: $CONFLICT_FILES"
        
        # Resolve conflicts automatically where possible
        for file in $CONFLICT_FILES; do
            echo "Resolving conflicts in $file"
            
            # For JavaScript files, try to resolve by taking the newer version
            if [[ "$file" == *.js ]]; then
                echo "Resolving JS conflict in $file"
                # Use git checkout to take the version from the branch being merged
                git checkout --theirs "$file"
                git add "$file"
            # For JSON files, try to merge
            elif [[ "$file" == *.json ]]; then
                echo "Resolving JSON conflict in $file"
                git checkout --theirs "$file"
                git add "$file"
            # For other files, try to resolve
            else
                echo "Resolving conflict in $file"
                git checkout --theirs "$file"
                git add "$file"
            fi
        done
        
        # Commit the resolved conflicts
        if git commit -m "Resolve merge conflicts from $branch"; then
            echo "✅ Successfully resolved conflicts and merged $branch"
            return 0
        else
            echo "❌ Failed to resolve conflicts for $branch"
            git merge --abort
            return 1
        fi
    fi
}

# Process each branch
for branch in $UNMERGED_BRANCHES; do
    echo "Processing branch: $branch"
    if resolve_conflicts "$branch"; then
        echo "✅ Successfully processed $branch"
    else
        echo "❌ Failed to process $branch"
    fi
    echo "---"
done

echo "Merge process completed!"
echo "Current status:"
git status