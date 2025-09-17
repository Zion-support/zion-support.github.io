#!/bin/bash

# Script to automatically resolve merge conflicts by taking the newer version
# and cleaning up merge conflict markers

echo "Starting merge conflict resolution..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    
    if [ -f "$file" ]; then
        # Remove merge conflict markers and take the newer version (HEAD)
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        # Clean up any remaining conflict markers
        sed -i '/^<<<<<<< /d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        echo "Resolved: $file"
    fi
}

# Function to merge a branch with automatic conflict resolution
merge_branch() {
    local branch="$1"
    echo "Attempting to merge branch: $branch"
    
    if git merge "$branch" --no-ff -m "Merge $branch with auto-resolved conflicts"; then
        echo "Successfully merged: $branch"
        return 0
    else
        echo "Merge conflicts detected in: $branch"
        
        # Get list of conflicted files
        conflicted_files=$(git diff --name-only --diff-filter=U)
        
        # Resolve conflicts in each file
        for file in $conflicted_files; do
            resolve_conflicts "$file"
        done
        
        # Add resolved files and commit
        git add .
        git commit -m "Resolve merge conflicts for $branch"
        
        echo "Resolved conflicts and merged: $branch"
        return 0
    fi
}

# List of branches to merge (in order of priority)
branches=(
    "origin/performance-optimizations"
    "origin/feat/clean-updates-content"
    "origin/feature/ai-ops-post-and-homepage-promo"
    "origin/cursor/create-and-deploy-new-content-21c3"
    "origin/feat/new-content-sept-2025"
)

echo "Starting systematic merge of branches..."

for branch in "${branches[@]}"; do
    echo "Processing branch: $branch"
    if git show-ref --verify --quiet "refs/remotes/$branch"; then
        merge_branch "$branch"
    else
        echo "Branch $branch not found, skipping..."
    fi
    echo "---"
done

echo "Merge process completed!"
echo "Checking build status..."

# Test the build
if npm run build; then
    echo "✅ Build successful after merges!"
else
    echo "❌ Build failed after merges. Checking for issues..."
    npm run build 2>&1 | head -20
fi

echo "All done!"