#!/bin/bash

# Merge Additional PRs Script
set -e

echo "🚀 Merging additional PRs into main..."

# Switch to main and pull latest
git checkout main
git pull origin main

# List of additional PRs to merge (most recent and relevant)
ADDITIONAL_PR_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-1149"
    "origin/cursor/create-and-deploy-new-content-c18b"
    "origin/cursor/create-and-deploy-new-content-0073"
    "origin/cursor/create-and-deploy-new-content-00b9"
    "origin/cursor/create-and-deploy-new-content-02ce"
)

# Function to merge with conflict resolution
merge_with_resolution() {
    local branch=$1
    echo "📦 Merging $branch..."
    
    if git merge "$branch" --no-ff -m "Merge $branch - Add new content and features"; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Resolving conflicts for $branch..."
        
        # Auto-resolve conflicts by taking our version (main branch)
        git status --porcelain | grep "^UU" | cut -c4- | while read file; do
            echo "🔧 Resolving $file conflicts..."
            git checkout --ours "$file"
            git add "$file"
        done
        
        if git commit --no-edit; then
            echo "✅ Resolved conflicts and merged $branch"
            return 0
        else
            echo "❌ Failed to resolve conflicts for $branch"
            git merge --abort
            return 1
        fi
    fi
}

# Merge each PR
successful=0
failed=0

for branch in "${ADDITIONAL_PR_BRANCHES[@]}"; do
    if merge_with_resolution "$branch"; then
        ((successful++))
    else
        ((failed++))
    fi
done

echo ""
echo "📊 Additional Merge Summary:"
echo "✅ Successful: $successful"
echo "❌ Failed: $failed"

# Push all changes
echo "🚀 Pushing merged changes..."
git push origin main

echo "🎉 Additional PR merge completed!"