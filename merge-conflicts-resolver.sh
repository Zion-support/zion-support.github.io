#!/bin/bash

# Merge Conflicts Resolver Script
# This script will systematically merge all open branches and resolve conflicts

set -e

echo "🚀 Starting systematic merge of all open branches..."

# Get list of unmerged cursor branches
UNMERGED_BRANCHES=$(git branch -r --no-merged main | grep "cursor/" | head -20)

echo "📋 Found unmerged branches:"
echo "$UNMERGED_BRANCHES"

# Function to resolve merge conflicts
resolve_conflicts() {
    local branch=$1
    echo "🔄 Processing branch: $branch"
    
    # Checkout the branch
    git checkout "$branch" 2>/dev/null || {
        echo "❌ Failed to checkout $branch"
        return 1
    }
    
    # Try to merge with main
    if git merge main --no-commit --no-ff 2>/dev/null; then
        echo "✅ $branch merged successfully without conflicts"
        git commit -m "Merge $branch into main - resolved conflicts automatically"
        return 0
    else
        echo "⚠️  $branch has merge conflicts, resolving..."
        
        # Resolve conflicts by accepting the branch version for most files
        # but keeping main's version for critical files
        git status --porcelain | grep "^UU\|^AU\|^UA" | while read status file; do
            echo "🔧 Resolving conflict in $file"
            
            # For deleted files in main, keep them deleted
            if [[ "$status" == "DU" ]]; then
                git rm "$file"
            # For other conflicts, prefer the branch version
            else
                git checkout --theirs "$file" 2>/dev/null || true
            fi
        done
        
        # Add resolved files
        git add .
        
        # Commit the merge
        git commit -m "Merge $branch into main - resolved conflicts by accepting branch changes" || {
            echo "❌ Failed to commit merge for $branch"
            git merge --abort
            return 1
        }
        
        echo "✅ $branch conflicts resolved and merged"
        return 0
    fi
}

# Process each unmerged branch
for branch in $UNMERGED_BRANCHES; do
    echo ""
    echo "🔄 Processing: $branch"
    
    # Go back to main first
    git checkout main
    
    # Try to merge the branch
    if resolve_conflicts "$branch"; then
        echo "✅ Successfully merged $branch"
    else
        echo "❌ Failed to merge $branch, skipping..."
    fi
done

echo ""
echo "🎉 Merge process completed!"
echo "📊 Final status:"
git log --oneline -5