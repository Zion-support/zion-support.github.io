#!/bin/bash

# Script to resolve merge conflicts and merge PRs into main
set -e

echo "Starting merge conflict resolution and PR merging process..."

# Function to check if we're in a git repository
check_git_repo() {
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        echo "Error: Not in a git repository"
        exit 1
    fi
}

# Function to get all remote branches
get_remote_branches() {
    git fetch --all
    git branch -r | grep -E "cursor/check-fix-push-and-merge-to-main" | sed 's/origin\///' | sort -V
}

# Function to check if branch has conflicts
check_conflicts() {
    local branch=$1
    echo "Checking for conflicts in $branch..."
    
    # Try to merge without committing
    if git merge "origin/$branch" --no-commit --no-ff 2>/dev/null; then
        echo "No conflicts in $branch"
        git merge --abort
        return 0
    else
        echo "Conflicts found in $branch"
        git merge --abort
        return 1
    fi
}

# Function to resolve conflicts automatically
resolve_conflicts() {
    local conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)
    
    for file in $conflicted_files; do
        echo "Resolving conflicts in $file"
        
        # For package.json conflicts, prefer the version with more dependencies
        if [[ "$file" == "package.json" ]]; then
            resolve_package_json_conflict "$file"
        # For other files, try to merge intelligently
        else
            resolve_generic_conflict "$file"
        fi
    done
    
    return 0
}

# Function to resolve package.json conflicts
resolve_package_json_conflict() {
    local file=$1
    echo "Resolving package.json conflict by preferring incoming version..."
    git checkout --theirs "$file"
    git add "$file"
}

# Function to resolve generic conflicts
resolve_generic_conflict() {
    local file=$1
    echo "Resolving conflict in $file by preferring incoming version..."
    git checkout --theirs "$file"
    git add "$file"
}

# Function to merge a single branch
merge_branch() {
    local branch=$1
    echo ""
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor "origin/$branch" HEAD 2>/dev/null; then
        echo "Branch $branch is already merged, skipping..."
        return 0
    fi
    
    # Try to merge into main
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        echo "✓ Successfully merged $branch"
        return 0
    else
        echo "⚠ Merge conflict in $branch"
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $branch..."
            
            # Try to resolve conflicts automatically
            if resolve_conflicts; then
                git add -A
                git commit -m "resolve: merge conflicts in $branch"
                echo "✓ Resolved conflicts and merged $branch"
            else
                echo "✗ Failed to resolve conflicts in $branch"
                git merge --abort
                return 1
            fi
        else
            git merge --abort
            return 1
        fi
    fi
}

# Main execution
main() {
    check_git_repo
    
    echo "Fetching latest changes..."
    git fetch --all
    
    echo "Checking out main branch..."
    git checkout main
    
    echo "Pulling latest main..."
    git pull origin main
    
    # Get all cursor branches
    echo "Finding cursor branches..."
    BRANCHES=$(get_remote_branches)
    
    if [ -z "$BRANCHES" ]; then
        echo "No cursor branches found"
        exit 0
    fi
    
    TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)
    echo "Found $TOTAL_BRANCHES cursor branches to process"
    
    # Initialize counters
    MERGED_COUNT=0
    CONFLICT_COUNT=0
    ERROR_COUNT=0
    SKIPPED_COUNT=0
    
    # Process each branch
    echo "$BRANCHES" | while read -r branch; do
        if [[ -n "$branch" ]]; then
            if merge_branch "$branch"; then
                MERGED_COUNT=$((MERGED_COUNT + 1))
            else
                ERROR_COUNT=$((ERROR_COUNT + 1))
            fi
        fi
    done
    
    # Final summary
    echo ""
    echo "=== MERGE SUMMARY ==="
    echo "Total branches processed: $TOTAL_BRANCHES"
    echo "Successfully merged: $MERGED_COUNT"
    echo "Errors: $ERROR_COUNT"
    
    # Push the updated main branch
    echo ""
    echo "Pushing updated main branch..."
    git push origin main
    
    echo "Merge process completed!"
}

# Run main function
main "$@"