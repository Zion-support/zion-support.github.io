#!/bin/bash

# Merge conflicts resolver script
# This script will automatically resolve merge conflicts by preferring the main branch version

echo "Starting merge conflicts resolution..."

# Function to resolve conflicts by taking main branch version
resolve_conflicts() {
    local branch_name="$1"
    echo "Attempting to merge branch: $branch_name"
    
    # Try to merge the branch
    if git merge --no-ff "$branch_name" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch_name, resolving automatically..."
        
        # Get list of conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$conflicted_files" ]; then
            echo "Conflicted files: $conflicted_files"
            
            # For each conflicted file, resolve by taking main branch version
            for file in $conflicted_files; do
                echo "Resolving conflicts in $file..."
                
                # Check if file exists in main branch
                if git show HEAD:"$file" >/dev/null 2>&1; then
                    # Take main branch version
                    git checkout --ours "$file"
                    git add "$file"
                    echo "✅ Resolved $file by taking main branch version"
                else
                    # File doesn't exist in main, take the incoming version
                    git checkout --theirs "$file"
                    git add "$file"
                    echo "✅ Resolved $file by taking incoming version"
                fi
            done
            
            # Complete the merge
            git commit --no-edit
            echo "✅ Successfully resolved conflicts and merged $branch_name"
            return 0
        else
            echo "❌ No conflicted files found, aborting merge"
            git merge --abort
            return 1
        fi
    fi
}

# List of branches to merge (most recent and important ones)
branches=(
    "origin/working-build-fixed"
    "origin/working-build-fixes"
    "origin/chore/netlify-build-fix"
    "origin/chore/netlify-pnpm"
    "origin/fix/netlify-build-pnpm"
    "origin/fix/netlify-node-22-16-0"
)

# Merge each branch
for branch in "${branches[@]}"; do
    if git show-ref --verify --quiet "refs/remotes/$branch"; then
        resolve_conflicts "$branch"
    else
        echo "⚠️  Branch $branch not found, skipping..."
    fi
done

echo "Merge conflicts resolution completed!"