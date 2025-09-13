#!/bin/bash

# Script to merge all branches into main
# This will attempt to merge branches and resolve conflicts automatically

set -e

echo "🚀 Starting bulk merge process..."

# Get all remote branches that are not main
branches=$(git branch -r | grep -v "origin/main" | grep -v "origin/HEAD" | sed 's/origin\///' | head -50)

echo "📋 Found $(echo "$branches" | wc -l) branches to process"

# Track successful merges
successful_merges=()
failed_merges=()

# Function to attempt merge
attempt_merge() {
    local branch=$1
    echo "🔄 Attempting to merge: $branch"
    
    # Checkout the branch
    if git checkout "origin/$branch" 2>/dev/null; then
        # Try to merge into main
        if git checkout main 2>/dev/null; then
            # Check if merge would be fast-forward or create conflicts
            if git merge --no-ff --no-commit "origin/$branch" 2>/dev/null; then
                # If merge succeeds, commit it
                git commit -m "Merge branch '$branch' into main" 2>/dev/null || true
                echo "✅ Successfully merged: $branch"
                successful_merges+=("$branch")
                return 0
            else
                echo "⚠️  Merge conflict in: $branch"
                git merge --abort 2>/dev/null || true
                failed_merges+=("$branch")
                return 1
            fi
        fi
    fi
    
    echo "❌ Failed to merge: $branch"
    failed_merges+=("$branch")
    return 1
}

# Process each branch
for branch in $branches; do
    attempt_merge "$branch" || true
done

echo ""
echo "📊 Merge Summary:"
echo "✅ Successfully merged: ${#successful_merges[@]} branches"
echo "❌ Failed to merge: ${#failed_merges[@]} branches"

if [ ${#successful_merges[@]} -gt 0 ]; then
    echo ""
    echo "✅ Successfully merged branches:"
    for branch in "${successful_merges[@]}"; do
        echo "  - $branch"
    done
fi

if [ ${#failed_merges[@]} -gt 0 ]; then
    echo ""
    echo "❌ Failed to merge branches:"
    for branch in "${failed_merges[@]}"; do
        echo "  - $branch"
    done
fi

# Push changes if there were successful merges
if [ ${#successful_merges[@]} -gt 0 ]; then
    echo ""
    echo "🚀 Pushing changes to origin/main..."
    git push origin main
    echo "✅ Changes pushed successfully!"
fi

echo ""
echo "🎉 Bulk merge process completed!"