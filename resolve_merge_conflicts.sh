#!/bin/bash

# Script to resolve merge conflicts and merge feature branches
set -e

echo "Starting merge conflict resolution process..."

# Function to resolve conflicts in a file
resolve_conflict() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    
    if [[ -f "$file" ]]; then
        # For content conflicts, we'll accept the incoming version (feature branch)
        if grep -q "<<<<<<< HEAD" "$file"; then
            echo "  - Content conflict detected, accepting incoming changes"
            # Use git checkout to accept the incoming version
            git checkout --theirs "$file"
        fi
    fi
}

# Function to handle modify/delete conflicts
handle_modify_delete() {
    local file="$1"
    echo "Handling modify/delete conflict for: $file"
    
    # For modify/delete conflicts, we'll keep the file (accept the modification)
    if [[ -f "$file" ]]; then
        echo "  - Keeping modified file: $file"
        git add "$file"
    fi
}

# List of feature branches to merge
FEATURE_BRANCHES=(
    "origin/feature/2025-services-expansion-v2"
    "origin/feature/add-2028-innovative-services"
    "origin/feature/advanced-internal-linking"
    "origin/feature/agents-factory"
    "origin/feature/apply-improvements"
)

# Merge each feature branch
for branch in "${FEATURE_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "Merging $branch..."
        
        # Attempt merge
        if git merge "$branch" --no-commit --no-ff; then
            echo "  - Merge successful, committing..."
            git commit -m "Merge $branch into main"
        else
            echo "  - Merge conflicts detected, resolving..."
            
            # Get list of conflicted files
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
            MODIFY_DELETE_FILES=$(git status --porcelain | grep "^DU\|^UD" | cut -c4-)
            
            # Resolve content conflicts
            for file in $CONFLICTED_FILES; do
                resolve_conflict "$file"
            done
            
            # Handle modify/delete conflicts
            for file in $MODIFY_DELETE_FILES; do
                handle_modify_delete "$file"
            done
            
            # Add all resolved files
            git add .
            
            # Commit the merge
            git commit -m "Merge $branch into main - resolved conflicts"
            
            echo "  - Conflicts resolved and committed"
        fi
    else
        echo "  - Branch $branch does not exist, skipping..."
    fi
done

echo "Merge conflict resolution completed!"