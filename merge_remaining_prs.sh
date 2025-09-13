#!/bin/bash

# Script to merge remaining open PRs efficiently
set -e

echo "🚀 Starting automated PR merge process..."

# Array of PR branches to merge
PR_BRANCHES=(
    "cursor/create-and-deploy-new-content-1d24"
    "cursor/create-and-deploy-new-content-864e"
    "cursor/create-and-deploy-new-content-8ae7"
    "cursor/create-and-deploy-new-content-9bdb"
    "cursor/create-and-deploy-new-content-a05a"
    "cursor/create-and-deploy-new-content-bd88"
    "cursor/create-and-deploy-new-content-c00a"
    "cursor/create-and-deploy-new-content-f5c7"
)

# Function to merge a PR branch
merge_pr() {
    local branch=$1
    echo "📋 Merging PR: $branch"
    
    # Checkout the PR branch
    if git checkout -b "temp-$branch" "origin/$branch" 2>/dev/null; then
        git checkout main
        
        # Attempt to merge
        if git merge "temp-$branch" --no-edit 2>/dev/null; then
            echo "✅ Successfully merged $branch"
            git branch -d "temp-$branch"
            return 0
        else
            echo "⚠️  Merge conflict in $branch, resolving automatically..."
            
            # Auto-resolve common conflicts
            git status --porcelain | grep "^UU" | cut -c4- | while read file; do
                if [[ -f "$file" ]]; then
                    echo "🔧 Auto-resolving conflict in $file"
                    # Use git checkout --theirs for most conflicts (prefer incoming changes)
                    git checkout --theirs "$file"
                    git add "$file"
                fi
            done
            
            # Commit the merge
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Successfully merged $branch with auto-resolution"
                git branch -d "temp-$branch"
                return 0
            else
                echo "❌ Failed to merge $branch"
                git merge --abort 2>/dev/null || true
                git branch -d "temp-$branch"
                return 1
            fi
        fi
    else
        echo "⚠️  Branch $branch not found or already merged"
        return 1
    fi
}

# Merge all PR branches
successful_merges=0
failed_merges=0

for branch in "${PR_BRANCHES[@]}"; do
    if merge_pr "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    echo "---"
done

echo "📊 Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"
echo "📋 Total processed: $((successful_merges + failed_merges))"

if [ $successful_merges -gt 0 ]; then
    echo "🚀 Pushing merged changes to main..."
    git push origin main
    echo "✅ All changes pushed successfully!"
fi

echo "🎉 PR merge process completed!"