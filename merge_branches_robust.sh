#!/bin/bash

# Robust script to merge all branches into main
set -e

echo "Starting robust branch merge process..."

# Get all remote branches (limit to first 50 to avoid overwhelming)
branches=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | head -50)

echo "Found branches to process:"
echo "$branches"

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo "Processing branch: $branch"
    
    # Always pull latest main first
    git checkout main
    git pull --rebase origin main
    
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
    if git merge --no-ff $branch -m "Merge branch $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
    else
        echo "❌ Merge conflict in $branch, resolving..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $branch..."
            
            # Auto-resolve simple conflicts by taking main version
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                echo "Resolving conflict in $file (taking main version)"
                git checkout --ours "$file"
                git add "$file"
            done
            
            # Commit the resolution
            git commit -m "Resolve merge conflicts in $branch (auto-resolved)"
            echo "✅ Resolved conflicts in $branch"
        else
            echo "No conflicts found, continuing..."
            git merge --continue
        fi
    fi
    
    # Push the merge
    echo "Pushing merged main to origin..."
    if git push origin main; then
        echo "✅ Pushed merged main to origin"
    else
        echo "⚠️  Push failed, pulling latest and retrying..."
        git pull --rebase origin main
        git push origin main
        echo "✅ Pushed after rebase"
    fi
    
    echo "Completed processing $branch"
    echo "---"
}

# Process each branch
for branch in $branches; do
    merge_branch "$branch"
done

echo "All branches processed!"