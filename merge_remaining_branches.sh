#!/bin/bash

# Script to merge all remaining unmerged branches
set -e

echo "🚀 Starting to merge remaining unmerged branches..."

# Get list of unmerged branches
unmerged_branches=$(git branch -r | grep "cursor/create-and-deploy-new-content" | while read branch; do
  if ! git merge-base --is-ancestor $branch main; then
    echo $branch
  fi
done)

echo "Found unmerged branches:"
echo "$unmerged_branches"

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch_name=$1
    echo "📋 Processing branch: $branch_name"
    
    # Try to merge
    if git merge $branch_name --no-ff -m "Merge $branch_name"; then
        echo "  ✅ Successfully merged $branch_name"
        return 0
    else
        echo "  ⚠️  Merge conflict detected in $branch_name"
        
        # Check which files have conflicts
        conflict_files=$(git diff --name-only --diff-filter=U)
        echo "  📝 Conflicted files: $conflict_files"
        
        # Try to resolve conflicts automatically
        for file in $conflict_files; do
            echo "    🔨 Resolving conflicts in $file"
            
            # Check if it's a merge conflict
            if grep -q "                else
                    # For other files, try to keep both changes
                    sed -i '/^                fi
                
                # Add the resolved file
                git add "$file"
            fi
        done
        
        # Try to complete the merge
        if git commit --no-edit; then
            echo "  ✅ Successfully resolved conflicts and merged $branch_name"
            return 0
        else
            echo "  ❌ Failed to resolve conflicts in $branch_name"
            git merge --abort
            return 1
        fi
    fi
}

# Process each unmerged branch
echo "$unmerged_branches" | while read branch; do
    if [ -n "$branch" ]; then
        echo ""
        merge_branch "$branch"
    fi
done

echo ""
echo "🎉 All remaining branches processed!"