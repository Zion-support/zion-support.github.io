#!/bin/bash

# Script to merge all branches and resolve conflicts
set -e

echo "🚀 Starting comprehensive branch merge process..."

# Update main branch
echo "📥 Updating main branch..."
git checkout main
git pull origin main

# Get all remote branches
echo "📋 Getting all remote branches..."
git fetch --all

# List of branches to check for merging
BRANCHES_TO_CHECK=(
    "origin/cursor/resolve-conflicts-and-merge-to-main-9ea1"
    "origin/cursor/add-new-services-and-advertise-them-6f2d"
    "origin/cursor/fix-syntax-push-and-merge-to-main-9e90"
    "origin/cursor/fix-syntax-push-and-merge-to-main-6c6e"
    "origin/cursor/automate-test-fix-improve-and-merge-code-f0bd"
    "origin/cursor/analyze-improve-and-deploy-application-1a51"
    "origin/cursor/add-new-services-and-advertise-them-c570"
    "origin/cursor/analyze-improve-and-deploy-application-e802"
    "origin/fix-syntax-errors-20250903-232306"
    "origin/cursor/fix-syntax-push-and-merge-to-main-f812"
)

# Function to attempt merge
attempt_merge() {
    local branch=$1
    echo "🔄 Attempting to merge $branch..."
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/$branch; then
        echo "❌ Branch $branch does not exist, skipping..."
        return 0
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor $branch main; then
        echo "✅ Branch $branch is already merged into main, skipping..."
        return 0
    fi
    
    # Attempt merge
    if git merge $branch --no-commit --no-ff; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - resolved conflicts automatically"
        return 0
    else
        echo "⚠️  Merge conflict detected in $branch, attempting to resolve..."
        
        # Check for conflict markers
        if git diff --name-only --diff-filter=U | grep -q .; then
            echo "🔧 Resolving conflicts in $branch..."
            
            # List conflicted files
            echo "Conflicted files:"
            git diff --name-only --diff-filter=U
            
            # Try to resolve conflicts automatically
            git status --porcelain | grep "^UU" | cut -c4- | while read file; do
                echo "🔧 Resolving conflict in $file..."
                
                # For most conflicts, prefer the incoming changes (from the branch)
                if [[ -f "$file" ]]; then
                    # Use git checkout to prefer the branch version
                    git checkout --theirs "$file" 2>/dev/null || true
                    git add "$file"
                fi
            done
            
            # Complete the merge
            if git status --porcelain | grep -q "^UU"; then
                echo "❌ Still have unresolved conflicts in $branch, skipping..."
                git merge --abort
                return 1
            else
                echo "✅ Conflicts resolved for $branch"
                git commit -m "Merge $branch into main - conflicts resolved automatically"
                return 0
            fi
        else
            echo "❌ Failed to merge $branch for unknown reason"
            git merge --abort
            return 1
        fi
    fi
}

# Process each branch
successful_merges=0
failed_merges=0

for branch in "${BRANCHES_TO_CHECK[@]}"; do
    if attempt_merge "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    echo "---"
done

echo "📊 Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"

# Push changes to remote
if [ $successful_merges -gt 0 ]; then
    echo "📤 Pushing merged changes to remote..."
    git push origin main
    echo "✅ Changes pushed successfully!"
else
    echo "ℹ️  No new merges to push"
fi

echo "🎉 Branch merge process completed!"