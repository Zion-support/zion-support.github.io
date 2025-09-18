#!/bin/bash

# Script to merge all open Netlify build fix PRs
set -e

echo "Starting systematic merge of all open PRs..."

# List of branches to merge
branches=(
    "origin/cursor/fix-netlify-build-and-merge-to-main-3efb"
    "origin/cursor/fix-netlify-build-and-merge-to-main-6572"
    "origin/cursor/fix-netlify-build-and-merge-to-main-66b4"
    "origin/cursor/fix-netlify-build-and-merge-to-main-677f"
    "origin/cursor/fix-netlify-build-and-merge-to-main-7ae3"
    "origin/cursor/fix-netlify-build-and-merge-to-main-9c6d"
    "origin/cursor/fix-netlify-build-and-merge-to-main-b942"
    "origin/cursor/fix-netlify-build-and-merge-to-main-d7cf"
    "origin/cursor/fix-netlify-build-and-merge-to-main-e2c4"
    "origin/fix/netlify-build-trigger"
)

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch=$1
    echo "Processing branch: $branch"
    
    # Check if branch has any differences
    if git diff main..$branch --quiet; then
        echo "  No differences found, skipping..."
        return 0
    fi
    
    echo "  Attempting merge..."
    if git merge $branch --no-commit --no-ff; then
        echo "  Merge successful, checking if there are changes to commit..."
        if ! git diff --cached --quiet; then
            git commit -m "Merge $branch - Netlify build fixes"
            echo "  Changes committed"
        else
            echo "  No changes to commit, aborting merge"
            if [ -f .git/MERGE_HEAD ]; then
                git merge --abort
            fi
        fi
        return 0
    else
        echo "  Merge conflicts detected, resolving..."
        
        # Check which files have conflicts
        conflict_files=$(git diff --name-only --diff-filter=U)
        
        for file in $conflict_files; do
            echo "  Resolving conflict in: $file"
            
            # For netlify.toml, take the version from the branch being merged
            if [[ "$file" == "netlify.toml" ]]; then
                git checkout $branch -- "$file"
                echo "  Resolved netlify.toml conflict by taking version from $branch"
            else
                # For other files, try to resolve automatically
                git checkout --theirs -- "$file" || git checkout --ours -- "$file"
                echo "  Resolved $file conflict automatically"
            fi
        done
        
        # Add resolved files and commit
        git add .
        git commit -m "Resolve merge conflicts from $branch - Netlify build fixes"
        echo "  Conflicts resolved and committed"
        return 0
    fi
}

# Merge each branch
for branch in "${branches[@]}"; do
    merge_branch "$branch"
done

echo "All PRs merged successfully!"
echo "Testing final build..."

# Test the build
npm run build:netlify

echo "Build test passed!"
echo "Ready to push to main branch"