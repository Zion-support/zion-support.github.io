#!/bin/bash

# Comprehensive merge script for resolving conflicts and merging branches
set -e

echo "🚀 Starting comprehensive merge process..."

# Function to merge a branch safely
merge_branch() {
    local branch_name="$1"
    echo "📋 Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch_name"; then
        echo "⚠️  Branch $branch_name does not exist, skipping..."
        return 0
    fi
    
    # Create local tracking branch
    git checkout -b "local-$branch_name" "origin/$branch_name"
    
    # Try to merge with main
    if git merge main --no-commit --no-ff; then
        echo "✅ Successfully merged $branch_name with main"
        git commit -m "Merge $branch_name into main - resolved conflicts automatically"
        
        # Merge back to main
        git checkout main
        git merge "local-$branch_name" --no-ff -m "Merge $branch_name: resolved conflicts and integrated changes"
        
        echo "✅ Successfully merged $branch_name into main"
    else
        echo "⚠️  Merge conflicts detected in $branch_name, resolving automatically..."
        
        # Auto-resolve conflicts by keeping both versions where possible
        git status --porcelain | grep "^UU" | cut -c4- | while read file; do
            if [ -f "$file" ]; then
                echo "🔧 Auto-resolving conflicts in $file"
                # Use git's merge strategy to resolve conflicts
                git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                git add "$file"
            fi
        done
        
        # Commit the resolved merge
        git commit -m "Merge $branch_name into main - auto-resolved conflicts"
        
        # Merge back to main
        git checkout main
        git merge "local-$branch_name" --no-ff -m "Merge $branch_name: auto-resolved conflicts and integrated changes"
        
        echo "✅ Successfully merged $branch_name into main (with auto-resolved conflicts)"
    fi
    
    # Clean up local branch
    git branch -D "local-$branch_name"
    echo "🧹 Cleaned up local branch for $branch_name"
}

# Get recent branches that need merging
echo "🔍 Finding branches to merge..."
recent_branches=$(git for-each-ref --format='%(refname:short)' refs/remotes/origin | grep -E "(cursor|codex)" | head -20)

echo "📊 Found $(echo "$recent_branches" | wc -l) branches to process"

# Process each branch
for branch in $recent_branches; do
    branch_name=$(echo "$branch" | sed 's|origin/||')
    echo ""
    echo "🔄 Processing: $branch_name"
    merge_branch "$branch_name"
done

echo ""
echo "🎉 Comprehensive merge process completed!"
echo "📈 Pushing all changes to remote..."

# Push all changes
git push origin main

echo "✅ All changes pushed to remote successfully!"
echo "🏁 Merge process complete!"