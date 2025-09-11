#!/bin/bash

# Script to merge all branches into main
set -e

echo "Starting branch merge process..."

# Get all remote branches
branches=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | head -20)

echo "Found branches to process:"
echo "$branches"

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo "Processing branch: $branch"
    
    # Check if branch exists locally
    if ! git show-ref --verify --quiet refs/heads/$branch; then
        echo "Creating local branch $branch from origin/$branch"
        git checkout -b $branch origin/$branch
    else
        echo "Switching to existing branch $branch"
        git checkout $branch
        git pull origin $branch
    fi
    
    # Switch back to main
    git checkout main
    
    # Try to merge
    echo "Attempting to merge $branch into main..."
    if git merge --no-ff $branch -m "Merge branch $branch into main"; then
        echo "✅ Successfully merged $branch"
        # Push the merge
        git push origin main
        echo "✅ Pushed merged main to origin"
    else
        echo "❌ Merge conflict in $branch, resolving..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $branch..."
            
            # Auto-resolve simple conflicts
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                echo "Resolving conflict in $file"
                # Use main version for most conflicts
                git checkout --ours "$file"
                git add "$file"
            done
            
            # Commit the resolution
            git commit -m "Resolve merge conflicts in $branch"
            echo "✅ Resolved conflicts in $branch"
            
            # Push the resolved merge
            git push origin main
            echo "✅ Pushed resolved merge to origin"
        else
            echo "No conflicts found, continuing..."
            git merge --continue
            git push origin main
        fi
    fi
    
    echo "Completed processing $branch"
    echo "---"
}

# Process each branch
for branch in $branches; do
    merge_branch "$branch"
done

echo "All branches processed!"