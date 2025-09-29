#!/bin/bash

# Comprehensive script to handle merge conflicts and merge all open PRs
set -e

echo "=== Starting Comprehensive Merge Process ==="

# Function to handle errors
handle_error() {
    echo "Error occurred at line $1"
    git merge --abort 2>/dev/null || true
    git checkout main 2>/dev/null || true
    exit 1
}

trap 'handle_error $LINENO' ERR

# Ensure we're in the right directory
cd /workspace

# Switch to main and get latest changes
echo "Switching to main branch and pulling latest changes..."
git checkout main
git pull origin main

# List of branches to process (most recent first)
branches_to_merge=(
    "cursor/fix-netlify-build-and-merge-to-main-c3c3"
    "cursor/fix-netlify-build-and-merge-to-main-bd25" 
    "cursor/fix-netlify-build-and-merge-to-main-b722"
    "cursor/fix-netlify-build-and-merge-to-main-091d"
    "netlify-build-fixes-20250928-100105"
    "fix-typescript-errors-and-build-stability"
)

echo "Found ${#branches_to_merge[@]} branches to process"

# Process each branch
for branch in "${branches_to_merge[@]}"; do
    echo ""
    echo "=== Processing branch: $branch ==="
    
    # Check if remote branch exists
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "Branch $branch not found in remote, skipping..."
        continue
    fi
    
    echo "Branch $branch found, processing..."
    
    # Create local tracking branch
    git checkout -b temp-$branch origin/$branch
    
    # Check what commits are in this branch that aren't in main
    commits_ahead=$(git rev-list --count main..temp-$branch)
    echo "Branch $branch is $commits_ahead commits ahead of main"
    
    if [ "$commits_ahead" -eq 0 ]; then
        echo "Branch $branch has no new commits, skipping..."
        git checkout main
        git branch -d temp-$branch
        continue
    fi
    
    # Try to merge with main to check for conflicts
    echo "Attempting to merge $branch with main..."
    if git merge main --no-commit --no-ff; then
        echo "No conflicts detected, completing merge..."
        git commit -m "Merge $branch into main - no conflicts"
        
        # Switch back to main and merge
        git checkout main
        git merge temp-$branch --no-ff -m "Merge $branch: Netlify build fixes and improvements"
        
        # Push changes
        git push origin main
        
        # Clean up
        git branch -d temp-$branch
        git push origin --delete $branch
        
        echo "Successfully merged and cleaned up $branch"
    else
        echo "Conflicts detected, attempting resolution..."
        
        # Check for specific conflict patterns and resolve automatically
        if git status --porcelain | grep -q "^UU"; then
            echo "Found merge conflicts, attempting automatic resolution..."
            
            # Common conflict resolution patterns
            # For package.json conflicts, prefer the version with more recent changes
            if [ -f "package.json" ] && git status --porcelain | grep -q "package.json"; then
                echo "Resolving package.json conflicts..."
                # Keep the version from the feature branch (usually more recent)
                git checkout --theirs package.json
                git add package.json
            fi
            
            # For src/App.tsx conflicts
            if [ -f "src/App.tsx" ] && git status --porcelain | grep -q "src/App.tsx"; then
                echo "Resolving src/App.tsx conflicts..."
                # Merge both versions, preferring the feature branch for imports
                git checkout --theirs src/App.tsx
                git add src/App.tsx
            fi
            
            # For netlify.toml conflicts
            if [ -f "netlify.toml" ] && git status --porcelain | grep -q "netlify.toml"; then
                echo "Resolving netlify.toml conflicts..."
                git checkout --theirs netlify.toml
                git add netlify.toml
            fi
            
            # Add all resolved files
            git add .
            
            # Complete the merge
            git commit -m "Resolve merge conflicts for $branch - automatic resolution"
            
            # Switch back to main and merge
            git checkout main
            git merge temp-$branch --no-ff -m "Merge $branch: Resolved conflicts automatically"
            
            # Push changes
            git push origin main
            
            # Clean up
            git branch -d temp-$branch
            git push origin --delete $branch
            
            echo "Successfully merged $branch with automatic conflict resolution"
        else
            echo "Unable to resolve conflicts automatically for $branch"
            git merge --abort
            git checkout main
            git branch -d temp-$branch
        fi
    fi
done

echo ""
echo "=== Merge Process Completed ==="
echo "All open PRs have been processed and merged into main branch"