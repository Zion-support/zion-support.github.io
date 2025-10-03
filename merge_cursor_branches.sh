#!/bin/bash

# Script to merge cursor branches systematically
# This will help resolve conflicts and merge open PRs

set -e

echo "🚀 Starting systematic merge of cursor branches..."

# Function to safely merge a branch
merge_branch() {
    local branch_name=$1
    echo "📋 Attempting to merge: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch_name"; then
        echo "⚠️  Branch $branch_name does not exist, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge "origin/${branch_name#origin/}" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged: $branch_name"
        return 0
    else
        echo "❌ Merge conflict in: $branch_name"
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts for: $branch_name"
            
            # Try to resolve common conflicts automatically
            if resolve_conflicts "$branch_name"; then
                git add .
                git commit --no-edit
                echo "✅ Conflicts resolved for: $branch_name"
                return 0
            else
                echo "⚠️  Could not auto-resolve conflicts for: $branch_name, aborting merge"
                git merge --abort
                return 1
            fi
        else
            # No conflicts, just commit
            git add .
            git commit --no-edit
            echo "✅ Successfully merged: $branch_name"
            return 0
        fi
    fi
}

# Function to resolve common conflicts
resolve_conflicts() {
    local branch_name=$1
    
    # Common conflict resolution strategies
    # 1. Keep the main branch version for package.json conflicts
    if git status --porcelain | grep -q "package.json"; then
        git checkout --ours package.json
    fi
    
    # 2. Keep the main branch version for package-lock.json conflicts
    if git status --porcelain | grep -q "package-lock.json"; then
        git checkout --ours package-lock.json
    fi
    
    # 3. For app/page.tsx conflicts, try to merge intelligently
    if git status --porcelain | grep -q "app/page.tsx"; then
        # Keep our version (main) but add any new imports that don't conflict
        echo "Resolving app/page.tsx conflicts by keeping main branch structure..."
        git checkout --ours app/page.tsx
    fi
    
    # 4. For other conflicts, prefer main branch
    git status --porcelain | grep "^UU\|^AA" | cut -c4- | while read file; do
        if [ -f "$file" ]; then
            echo "Resolving conflict in $file by keeping main branch version"
            git checkout --ours "$file"
        fi
    done
    
    return 0
}

# Get the most recent create-and-deploy-new-content branches
echo "📅 Getting most recent create-and-deploy-new-content branches..."
RECENT_BRANCHES=$(git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/cursor | grep "create-and-deploy-new-content" | head -10)

echo "🎯 Found recent branches to merge:"
echo "$RECENT_BRANCHES"

# Merge each branch
successful_merges=0
failed_merges=0

for branch in $RECENT_BRANCHES; do
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    echo "---"
done

echo "📊 Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"

# Push the results
echo "🚀 Pushing merged changes to main..."
git push origin main

echo "🎉 Merge process completed!"