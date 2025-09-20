#!/bin/bash

# Script to systematically merge branches and resolve conflicts
set -e

set -e

# Function to resolve conflicts automatically
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in $file"
    
    # For most files, we'll take the incoming changes (theirs) to get the latest content
    if [[ -f "$file" ]]; then
        # Check if file has merge conflicts
    if git merge "origin/$branch" --no-commit; then
        echo "  - Merge successful without conflicts"
        git commit -m "Merge $branch into main"
        echo "  - Successfully merged $branch"
        return 0
    else
        echo "  - Merge has conflicts, resolving..."
        
        # Get list of conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        
        if [[ -n "$conflicted_files" ]]; then
            echo "  - Resolving conflicts in $(echo "$conflicted_files" | wc -l) files..."
            
            # Resolve conflicts for each file
            while IFS= read -r file; do
                if [[ -n "$file" ]]; then
                    resolve_conflicts "$file"
                fi
            done <<< "$conflicted_files"
            
            # Check if all conflicts are resolved
            if git diff --check; then
                git commit -m "Merge $branch into main (resolved conflicts)"
                echo "  - Successfully merged $branch with resolved conflicts"
                return 0
            else
                echo "  - Failed to resolve all conflicts in $branch"
                git merge --abort
                return 1
            fi
        else
            echo "  - No conflicted files found, committing..."
            git commit -m "Merge $branch into main"
            return 0
        fi
    fi
}

# List of branches to merge (in order of priority)
branches=(
    "content-update-2025-09-16"
    "chore/add-latest-content-2025-09-16"
    "chore/add-new-content-and-promos-2025-09-16"
    "automation/bundle-report"
    "automation/changelog"
)

# Merge each branch
for branch in "${branches[@]}"; do
    echo ""
    echo "=== Processing branch: $branch ==="
    
    if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        merge_branch "$branch"
    else
        echo "  - Branch $branch not found, skipping..."
    fi
done

echo ""
echo "=== Merge process completed ==="
echo "Checking build status..."

# Test the build
if npm run build:netlify; then
    echo "✅ Build successful after merges"
else
    echo "❌ Build failed after merges"
    exit 1
fi

echo "All branches merged successfully!"
