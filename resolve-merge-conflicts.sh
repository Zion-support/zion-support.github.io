#!/bin/bash

# Script to resolve merge conflicts by choosing incoming changes
echo "Starting merge conflict resolution..."

# Function to resolve conflicts by choosing incoming changes
resolve_conflicts() {
    local branch=$1
    echo "Attempting to merge branch: $branch"
    
    # Start merge
    git merge --no-commit --no-ff "$branch" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        echo "✅ Clean merge for $branch"
        git commit -m "Merge $branch into main - clean merge"
        return 0
    else
        echo "⚠️  Merge conflicts detected for $branch"
        
        # Check if we're in a merge state
        if [ -f .git/MERGE_HEAD ]; then
            echo "Resolving conflicts by choosing incoming changes..."
            
            # For most conflicts, choose the incoming version (theirs)
            git checkout --theirs . 2>/dev/null
            
            # Add all resolved files
            git add .
            
            # Commit the merge
            git commit -m "Merge $branch into main - resolved conflicts by choosing incoming changes"
            
            if [ $? -eq 0 ]; then
                echo "✅ Successfully merged $branch"
                return 0
            else
                echo "❌ Failed to commit merge for $branch"
                git merge --abort
                return 1
            fi
        else
            echo "❌ Not in merge state for $branch"
            return 1
        fi
    fi
}

# List of branches to merge (most recent first)
branches=(
    "origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5"
    "origin/cursor/fix-website-loading-errors-and-merge-04b2"
    "origin/cursor/expand-services-advertise-and-build-project-b8d7"
    "origin/cursor/fix-website-loading-errors-and-merge-2ce8"
    "origin/cursor/expand-services-advertise-and-build-project-b51f"
    "origin/resolved-merge-conflicts-1757168365"
    "origin/cursor/fix-netlify-build-and-merge-to-main-1f63"
)

# Process each branch
for branch in "${branches[@]}"; do
    echo ""
    echo "Processing branch: $branch"
    echo "=================================="
    
    if resolve_conflicts "$branch"; then
        echo "✅ Successfully processed $branch"
    else
        echo "❌ Failed to process $branch, continuing with next branch"
    fi
    
    echo ""
done

echo "Merge conflict resolution completed!"
echo "Current status:"
git status --short