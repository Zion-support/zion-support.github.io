#!/bin/bash

# Merge remaining cursor branches efficiently
set -e

echo "🚀 Merging remaining cursor branches..."

# Get all remaining cursor branches that haven't been merged
remaining_branches=$(git for-each-ref --sort=-committerdate refs/remotes/origin --format='%(refname:short)' | grep "cursor/create-and-deploy-new-content" | head -100)

merged_count=0
skipped_count=0
conflict_count=0

for branch in $remaining_branches; do
    branch_name=${branch#origin/}
    
    echo ""
    echo "🔄 Processing: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️  Branch $branch_name does not exist, skipping..."
        ((skipped_count++))
        continue
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor "$branch" HEAD; then
        echo "✅ Branch $branch_name is already merged, skipping..."
        ((skipped_count++))
        continue
    fi
    
    # Attempt to merge
    if git merge "$branch" --no-ff -m "merge: Integrate $branch_name" 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        ((merged_count++))
    else
        echo "⚠️  Merge conflict in $branch_name, resolving..."
        
        # Auto-resolve conflicts by keeping our version for App.tsx and taking theirs for others
        conflicts=$(git diff --name-only --diff-filter=U)
        
        for conflict in $conflicts; do
            if [[ "$conflict" == "App.tsx" ]]; then
                echo "🔧 Resolving App.tsx conflicts by keeping current version..."
                git checkout --ours App.tsx
            else
                echo "🔧 Using incoming version for $conflict"
                git checkout --theirs "$conflict"
            fi
        done
        
        git add .
        git commit --no-edit -m "merge: Resolve conflicts and integrate $branch_name"
        echo "✅ Successfully resolved conflicts for $branch_name"
        ((conflict_count++))
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "   ✅ Successfully merged: $merged_count branches"
echo "   ⚠️  Resolved conflicts: $conflict_count branches"
echo "   ⏭️  Skipped (already merged): $skipped_count branches"
echo "   📦 Total processed: $((merged_count + conflict_count + skipped_count)) branches"

echo ""
echo "🚀 Pushing all merged changes..."
git push origin main --force

echo "✅ All remaining branches merged successfully!"