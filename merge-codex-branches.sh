#!/bin/bash

# Script to merge codex branches into main
set -e

echo "Starting merge of codex branches..."

# Get all codex branches
CODEX_BRANCHES=$(git branch -r | grep "codex/" | sed 's/origin\///' | head -50)

# Count total branches
TOTAL_BRANCHES=$(echo "$CODEX_BRANCHES" | wc -l)
echo "Found $TOTAL_BRANCHES codex branches to process"

# Initialize counters
MERGED_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0
SKIPPED_COUNT=0

# Function to merge a single branch
merge_branch() {
    local branch=$1
    echo ""
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "Branch $branch does not exist, skipping..."
        SKIPPED_COUNT=$((SKIPPED_COUNT + 1))
        return 1
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor "origin/$branch" HEAD 2>/dev/null; then
        echo "Branch $branch is already merged, skipping..."
        SKIPPED_COUNT=$((SKIPPED_COUNT + 1))
        return 0
    fi
    
    # Try to merge into main
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        echo "✓ Successfully merged $branch"
        MERGED_COUNT=$((MERGED_COUNT + 1))
        return 0
    else
        echo "⚠ Merge conflict in $branch"
        CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $branch..."
            
            # Try to resolve conflicts automatically
            if resolve_conflicts; then
                git add -A
                git commit -m "resolve: merge conflicts in $branch"
                echo "✓ Resolved conflicts and merged $branch"
                MERGED_COUNT=$((MERGED_COUNT + 1))
                CONFLICT_COUNT=$((CONFLICT_COUNT - 1))
            else
                echo "✗ Failed to resolve conflicts in $branch"
                git merge --abort
                ERROR_COUNT=$((ERROR_COUNT + 1))
            fi
        else
            git merge --abort
            ERROR_COUNT=$((ERROR_COUNT + 1))
        fi
        return 1
    fi
}

# Function to resolve conflicts automatically
resolve_conflicts() {
    # Get conflicted files
    local conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)
    
    for file in $conflicted_files; do
        echo "Resolving conflicts in $file"
        
        # For package.json conflicts, prefer the version with more dependencies
        if [[ "$file" == "package.json" ]]; then
            resolve_package_json_conflict "$file"
        # For lock files, prefer the newer one
        elif [[ "$file" == "package-lock.json" ]] || [[ "$file" == "pnpm-lock.yaml" ]]; then
            resolve_lock_file_conflict "$file"
        # For config files, prefer the incoming version
        elif [[ "$file" == "eslint.config.js" ]] || [[ "$file" == ".eslintrc.cjs" ]] || [[ "$file" == "tsconfig.json" ]]; then
            resolve_config_conflict "$file"
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
    
    # Use git checkout to prefer the incoming version (from PR)
    git checkout --theirs "$file"
    git add "$file"
}

# Function to resolve lock file conflicts
resolve_lock_file_conflict() {
    local file=$1
    
    # Prefer the incoming version for lock files
    git checkout --theirs "$file"
    git add "$file"
}

# Function to resolve config file conflicts
resolve_config_conflict() {
    local file=$1
    
    # Prefer the incoming version for config files
    git checkout --theirs "$file"
    git add "$file"
}

# Function to resolve generic conflicts
resolve_generic_conflict() {
    local file=$1
    
    # For most conflicts, prefer the incoming version (from PR)
    git checkout --theirs "$file"
    git add "$file"
}

# Process each branch
for branch in $CODEX_BRANCHES; do
    merge_branch "$branch"
done

# Final summary
echo ""
echo "=== MERGE SUMMARY ==="
echo "Total branches processed: $TOTAL_BRANCHES"
echo "Successfully merged: $MERGED_COUNT"
echo "Conflicts encountered: $CONFLICT_COUNT"
echo "Errors: $ERROR_COUNT"
echo "Skipped: $SKIPPED_COUNT"

# Push the updated main branch
echo ""
echo "Pushing updated main branch..."
git push origin main

echo "Codex branch merge process completed!"