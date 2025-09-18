#!/bin/bash

# Script to merge remaining unmerged branches
set -e

echo "Starting merge of remaining branches..."

# List of branches to merge (excluding backups and already merged)
BRANCHES=(
    "origin/chore/netlify-build-bump-20250918"
    "origin/chore/netlify-build-fix"
    "origin/chore/netlify-build-trigger"
    "origin/chore/netlify-deploy-bump-2025-09-18-2145"
    "origin/chore/netlify-next-plugin"
    "origin/chore/netlify-nextjs-plugin"
    "origin/chore/netlify-trigger"
    "origin/clean/build-without-artifacts"
    "origin/cursor/fix-netlify-build-and-merge-to-main-1b24"
    "origin/cursor/fix-netlify-build-and-merge-to-main-7fae"
    "origin/cursor/fix-netlify-build-and-merge-to-main-8cbf"
    "origin/cursor/fix-netlify-build-and-merge-to-main-8e4b"
    "origin/cursor/fix-netlify-build-and-merge-to-main-9c77"
)

# Function to resolve netlify.toml conflicts
resolve_netlify_conflicts() {
    local file="netlify.toml"
    if [[ -f "$file" ]]; then
        echo "Resolving conflicts in $file..."
        # Remove conflict markers and keep the latest timestamp
        sed -i '/^<<<<<<< HEAD$/,/^>>>>>>> /d' "$file"
        # Update timestamp to current time
        current_time=$(date -u +%Y-%m-%dT%H:%M:%SZ)
        sed -i "s/# Updated: bump timestamp to trigger Netlify deploy at.*/# Updated: bump timestamp to trigger Netlify deploy at $current_time/" "$file"
        sed -i "s/# No-op: trigger Netlify rebuild at.*/# No-op: trigger Netlify rebuild at $current_time/" "$file"
    fi
}

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo "Attempting to merge: $branch"
    
    if git merge --no-commit --no-ff "$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch without conflicts"
        git commit -m "Merge $branch: automated merge without conflicts"
        return 0
    else
        echo "⚠️  Merge conflict detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
        echo "Conflicted files: $CONFLICT_FILES"
        
        # Resolve conflicts
        for file in $CONFLICT_FILES; do
            echo "Resolving conflicts in $file"
            if [[ "$file" == "netlify.toml" ]]; then
                resolve_netlify_conflicts
            else
                # For other files, take the version from the branch being merged
                git checkout --theirs "$file"
            fi
        done
        
        # Add resolved files
        git add $CONFLICT_FILES
        
        # Commit the merge
        git commit -m "Merge $branch: resolved conflicts automatically"
        echo "✅ Successfully merged $branch with conflict resolution"
        return 0
    fi
}

# Process each branch
for branch in "${BRANCHES[@]}"; do
    echo "Processing: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor "$branch" HEAD 2>/dev/null; then
        echo "✅ Branch $branch is already merged, skipping..."
        continue
    fi
    
    merge_branch "$branch"
    echo "---"
done

echo "✅ Merge process completed!"
echo "Current status:"
git status --short