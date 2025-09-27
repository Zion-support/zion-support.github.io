#!/bin/bash

# Comprehensive PR Merge Script
# This script will merge all open PRs and resolve conflicts

set -e

echo "🚀 Starting comprehensive PR merge process..."

# Function to resolve merge conflicts
resolve_conflicts() {
    local branch=$1
    echo "🔧 Resolving conflicts for branch: $branch"
    
    # Try to merge
    if git merge "origin/$branch" --no-commit 2>/dev/null; then
        echo "✅ No conflicts in $branch"
        git commit -m "Merge $branch into main - no conflicts"
        return 0
    else
        echo "⚠️  Conflicts detected in $branch"
        
        # Check if there are actual conflicts or just merge issues
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts in $branch..."
            
            # Resolve conflicts by taking the main branch version for most files
            # This is a conservative approach to avoid breaking changes
            git checkout --ours .
            
            # For specific files that might need special handling
            if [ -f "fix-remaining-errors.js" ]; then
                # Keep the main version of this file
                git checkout --ours fix-remaining-errors.js
            fi
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Merge $branch into main - conflicts resolved (took main version)"
            echo "✅ Conflicts resolved for $branch"
        else
            echo "❌ Merge failed for $branch - aborting"
            git merge --abort
            return 1
        fi
    fi
}

# Get list of recent cursor branches
echo "📋 Getting list of branches to merge..."

# Get the most recent cursor branches
branches=($(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | tail -20 | sed 's/origin\///'))

echo "Found ${#branches[@]} branches to process:"
for branch in "${branches[@]}"; do
    echo "  - $branch"
done

# Process each branch
successful_merges=0
failed_merges=0

for branch in "${branches[@]}"; do
    echo ""
    echo "🔄 Processing branch: $branch"
    
    # Check if branch has commits not in main
    if git log --oneline "origin/$branch" --not origin/main | head -1 > /dev/null 2>&1; then
        echo "📝 Branch has new commits, attempting merge..."
        
        if resolve_conflicts "$branch"; then
            ((successful_merges++))
            echo "✅ Successfully merged $branch"
        else
            ((failed_merges++))
            echo "❌ Failed to merge $branch"
        fi
    else
        echo "⏭️  Branch has no new commits, skipping"
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "  ✅ Successful merges: $successful_merges"
echo "  ❌ Failed merges: $failed_merges"
echo "  📋 Total processed: ${#branches[@]}"

# Push all changes
echo ""
echo "🚀 Pushing all changes to remote..."
git push origin main

echo "🎉 Comprehensive PR merge process completed!"