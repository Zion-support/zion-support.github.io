#!/bin/bash

# Comprehensive merge conflict resolution script
set -e

echo "Starting comprehensive merge conflict resolution..."

# Function to resolve conflicts by accepting the main branch version (keeping current structure)
resolve_conflicts_main() {
    local branch=$1
    echo "Resolving conflicts for branch: $branch"
    
    # Start merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "No conflicts in $branch, merging directly..."
        git commit -m "Merge branch '$branch' into main - no conflicts"
        return 0
    fi
    
    # If there are conflicts, resolve them by accepting main branch version
    echo "Resolving conflicts in $branch by accepting main branch version..."
    
    # Get list of conflicted files
    local conflicted_files=$(git diff --name-only --diff-filter=U)
    
    for file in $conflicted_files; do
        echo "Resolving conflict in: $file"
        
        # For modify/delete conflicts, delete the file (accept main branch deletion)
        if git status --porcelain | grep -q "^DU $file"; then
            echo "  - Removing deleted file: $file"
            git rm "$file"
        else
            # For content conflicts, accept main branch version
            echo "  - Accepting main branch version: $file"
            git checkout --ours "$file"
            git add "$file"
        fi
    done
    
    # Commit the resolved merge
    git commit -m "Merge branch '$branch' into main - conflicts resolved by accepting main branch version"
    echo "Successfully merged $branch"
}

# Function to resolve conflicts by accepting the feature branch version
resolve_conflicts_feature() {
    local branch=$1
    echo "Resolving conflicts for branch: $branch"
    
    # Start merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "No conflicts in $branch, merging directly..."
        git commit -m "Merge branch '$branch' into main - no conflicts"
        return 0
    fi
    
    # If there are conflicts, resolve them by accepting feature branch version
    echo "Resolving conflicts in $branch by accepting feature branch version..."
    
    # Get list of conflicted files
    local conflicted_files=$(git diff --name-only --diff-filter=U)
    
    for file in $conflicted_files; do
        echo "Resolving conflict in: $file"
        
        # For modify/delete conflicts, keep the file (accept feature branch modification)
        if git status --porcelain | grep -q "^UD $file"; then
            echo "  - Keeping modified file: $file"
            git add "$file"
        else
            # For content conflicts, accept feature branch version
            echo "  - Accepting feature branch version: $file"
            git checkout --theirs "$file"
            git add "$file"
        fi
    done
    
    # Commit the resolved merge
    git commit -m "Merge branch '$branch' into main - conflicts resolved by accepting feature branch version"
    echo "Successfully merged $branch"
}

# Get list of branches to merge
echo "Fetching all branches..."
git fetch --all

# Get recent cursor branches that might have changes
branches=(
    "cursor/fix-errors-and-merge-to-main-ff79"
    "cursor/fix-errors-and-merge-to-main-ff7f"
    "cursor/fix-errors-and-merge-to-main-ff82"
    "cursor/fix-errors-and-merge-to-main-ff87"
    "cursor/fix-errors-and-merge-to-main-ff88"
    "cursor/fix-errors-and-merge-to-main-ff8e"
    "cursor/fix-errors-and-merge-to-main-ff9f"
    "cursor/fix-errors-and-merge-to-main-ffaa"
    "cursor/fix-errors-and-merge-to-main-ffab"
    "cursor/fix-errors-and-merge-to-main-ffb2"
    "cursor/fix-errors-and-merge-to-main-ffba"
    "cursor/fix-errors-and-merge-to-main-ffbd"
    "cursor/fix-errors-and-merge-to-main-ffcb"
    "cursor/fix-errors-and-merge-to-main-ffd1"
    "cursor/fix-errors-and-merge-to-main-ffd5"
    "cursor/fix-errors-and-merge-to-main-ffe5"
    "cursor/fix-errors-and-merge-to-main-ffee"
    "cursor/fix-errors-and-merge-to-main-fff0"
    "cursor/fix-errors-and-merge-to-main-fff4"
    "cursor/fix-errors-and-merge-to-main-final"
)

echo "Found branches to process:"
printf '%s\n' "${branches[@]}"

# Process each branch
for branch in "${branches[@]}"; do
    echo ""
    echo "Processing branch: $branch"
    
    # Check if branch has commits not in main
    new_commits=$(git log --oneline "origin/$branch" ^origin/main | wc -l)
    
    if [ "$new_commits" -eq 0 ]; then
        echo "Branch $branch has no new commits, skipping..."
        continue
    fi
    
    echo "Branch $branch has $new_commits new commits"
    
    # Try to merge with conflict resolution
    if resolve_conflicts_main "$branch"; then
        echo "Successfully merged $branch"
    else
        echo "Failed to merge $branch, skipping..."
        # Reset to clean state
        git reset --hard HEAD
    fi
done

echo ""
echo "Merge conflict resolution completed!"
echo "Current status:"
git status

echo ""
echo "Pushing changes to remote..."
git push origin main

echo "All done!"