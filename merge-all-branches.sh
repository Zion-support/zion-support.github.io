#!/bin/bash

# Comprehensive merge script for all open PRs and branches
set -e

echo "🚀 Starting comprehensive merge of all branches..."

# List of recent branches to merge (most recent first)
BRANCHES=(
    "origin/cursor/fix-syntax-push-and-merge-to-main-9e90"
    "origin/cursor/fix-syntax-push-and-merge-to-main-6c6e"
    "origin/cursor/automate-test-fix-improve-and-merge-code-f0bd"
    "origin/cursor/analyze-improve-and-deploy-application-1a51"
    "origin/cursor/add-new-services-and-advertise-them-c570"
    "origin/cursor/analyze-improve-and-deploy-application-e802"
    "origin/fix-syntax-errors-20250903-232306"
    "origin/cursor/fix-syntax-push-and-merge-to-main-f812"
    "origin/cursor/automate-test-fix-improve-and-merge-code-a7a7"
    "origin/cursor/fix-syntax-push-and-merge-to-main-fe2a"
    "origin/cursor/fix-syntax-push-and-merge-to-main-8154"
    "origin/cursor/analyze-improve-and-deploy-application-d144"
    "origin/cursor/enhance-pm2-automations-for-development-and-deployment-21ae"
    "origin/cursor/fix-syntax-push-and-merge-to-main-cfa2"
    "origin/cursor/migrate-ci-to-pm2-and-clean-up-github-actions-56bd"
    "origin/cursor/fix-syntax-push-and-merge-to-main-4c0e"
    "origin/cursor/fix-lint-push-and-merge-to-main-df85"
    "origin/cursor/fix-syntax-push-and-merge-to-main-67f3"
)

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch=$1
    echo "📦 Merging branch: $branch"
    
    # Try to merge the branch
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Merge conflict in $branch, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts in $branch..."
            
            # Auto-resolve common conflicts
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                echo "  Resolving conflict in: $file"
                
                # For package.json conflicts, prefer the newer version
                if [[ "$file" == *"package.json"* ]]; then
                    git checkout --theirs "$file"
                # For dist files, prefer the newer version
                elif [[ "$file" == *"dist/"* ]]; then
                    git checkout --theirs "$file"
                # For config files, prefer the newer version
                elif [[ "$file" == *".config."* ]] || [[ "$file" == *"netlify.toml"* ]]; then
                    git checkout --theirs "$file"
                # For other files, prefer the newer version
                else
                    git checkout --theirs "$file"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Merge $branch - resolved conflicts automatically"
            echo "✅ Resolved conflicts and merged $branch"
        else
            echo "❌ Failed to merge $branch"
            return 1
        fi
    fi
}

# Merge all branches
for branch in "${BRANCHES[@]}"; do
    if git show-ref --verify --quiet "refs/remotes/$branch"; then
        merge_branch "$branch"
    else
        echo "⚠️  Branch $branch not found, skipping..."
    fi
done

echo "🎉 Comprehensive merge completed!"
echo "📊 Summary of merged branches:"
git log --oneline -10

# Test the build
echo "🔨 Testing build after merge..."
if npm run build; then
    echo "✅ Build successful after merge!"
else
    echo "❌ Build failed after merge"
    exit 1
fi