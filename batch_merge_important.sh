#!/bin/bash
cd /workspace

echo "=== Batch Merging Important Branches ==="

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch=$1
    local description=$2
    
    echo "Attempting to merge $branch: $description"
    
    if git merge "$branch" --no-ff -m "Merge $branch: $description" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Merge conflict in $branch, resolving..."
        
        # Resolve conflicts by preferring main for build artifacts and feature branch for source files
        git checkout --ours .eslintrc.js 2>/dev/null
        git checkout --ours package.json 2>/dev/null
        git checkout --ours package-lock.json 2>/dev/null
        git checkout --ours zion-os/.next/ 2>/dev/null
        git checkout --ours zion-website/.next/ 2>/dev/null
        
        # For source files, prefer the feature branch
        git checkout --theirs zion-os/src/ 2>/dev/null
        git checkout --theirs zion-website/src/ 2>/dev/null
        git checkout --theirs app/ 2>/dev/null
        git checkout --theirs content/ 2>/dev/null
        git checkout --theirs data/ 2>/dev/null
        git checkout --theirs App.tsx 2>/dev/null
        
        # Add all resolved files
        git add .
        
        # Commit the merge
        if git commit -m "Merge $branch: $description (resolved conflicts)" 2>/dev/null; then
            echo "✅ Successfully resolved and merged $branch"
            return 0
        else
            echo "❌ Failed to commit merge for $branch"
            git merge --abort 2>/dev/null
            return 1
        fi
    fi
}

# Merge important content branches
echo "1. Merging content branches..."
for branch in origin/content/autonomous-enterprise-it-2025 origin/content/sept-2025-new-pages origin/content/sept15-new-updates; do
    if git show-ref --verify --quiet "refs/remotes/$branch"; then
        merge_branch "$branch" "add content updates and new pages"
    fi
done

# Merge recent cursor branches (limit to most recent 10)
echo "2. Merging recent cursor branches..."
git branch -r --no-merged origin/main | grep "cursor/create-and-deploy-new-content" | head -10 | while read branch; do
    merge_branch "$branch" "add new content and features"
done

# Merge dependabot branches for security updates
echo "3. Merging dependabot branches..."
for branch in origin/dependabot/npm_and_yarn/jest-environment-jsdom-30.0.5 origin/dependabot/npm_and_yarn/jsdom-26.1.0 origin/dependabot/npm_and_yarn/lucide-react-0.539.0; do
    if git show-ref --verify --quiet "refs/remotes/$branch"; then
        merge_branch "$branch" "update dependencies for security"
    fi
done

echo "=== Batch merge completed ==="
echo "Remaining unmerged branches:"
git branch -r --no-merged origin/main | wc -l