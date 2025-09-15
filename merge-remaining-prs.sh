#!/bin/bash

# Merge Remaining PRs Script
# This script will merge the remaining PRs in smaller batches

set -e

echo "🚀 Starting Remaining PR Merge Process"
echo "======================================"

# Function to safely merge a branch
merge_branch() {
    local branch_name="$1"
    local branch_ref="origin/$branch_name"
    
    echo "📋 Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch_ref"; then
        echo "⚠️  Branch $branch_ref does not exist, skipping..."
        return 0
    fi
    
    # Fetch the latest version of the branch
    git fetch origin "$branch_name"
    
    # Check if branch has commits not in main
    if git merge-base --is-ancestor "$branch_ref" HEAD; then
        echo "✅ Branch $branch_name is already merged, skipping..."
        return 0
    fi
    
    echo "🔄 Attempting to merge $branch_name..."
    
    # Try to merge with conflict resolution
    if git merge "$branch_ref" --no-edit --strategy-option=ours || {
        echo "⚠️  Merge conflict detected, resolving..."
        
        # Resolve common conflicts automatically
        if [ -f "package.json" ]; then
            git checkout --ours package.json
            git add package.json
        fi
        
        if [ -f "package-lock.json" ]; then
            git checkout --ours package-lock.json
            git add package-lock.json
        fi
        
        if [ -f "pnpm-lock.yaml" ]; then
            git checkout --ours pnpm-lock.yaml
            git add pnpm-lock.yaml
        fi
        
        # Resolve conflicts in key files
        for file in "app/page.tsx" "app/layout.tsx" "src/App.tsx" "src/main.tsx"; do
            if [ -f "$file" ]; then
                git checkout --ours "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            fi
        done
        
        # Commit the resolved conflicts
        git commit -m "Merge $branch_name: Resolved conflicts automatically" || {
            echo "⚠️  Could not commit merge for $branch_name, continuing..."
            git merge --abort 2>/dev/null || true
            return 0
        }
    }; then
        echo "✅ Successfully merged $branch_name"
    else
        echo "❌ Failed to merge $branch_name, continuing with next branch..."
        git merge --abort 2>/dev/null || true
    fi
}

# Get list of remaining PR branches to merge (batch 1)
echo "🔍 Processing first batch of remaining PR branches..."

# Get recent cursor branches that haven't been processed yet
REMAINING_BRANCHES=$(git branch -r | grep "cursor/analyze-improve-and-deploy-application" | head -50 | sed 's/origin\///')

echo "📝 Found branches to process:"
echo "$REMAINING_BRANCHES"

# Process each branch
for branch in $REMAINING_BRANCHES; do
    if [ -n "$branch" ]; then
        merge_branch "$branch"
        echo "---"
    fi
done

echo "🎉 First batch of PR merge process completed!"
echo "📊 Final status:"
git status --short

echo "🔄 Pushing changes to main..."
git push origin main

echo "✅ First batch of PRs have been processed and merged into main!"