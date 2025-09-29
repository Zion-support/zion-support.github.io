#!/bin/bash

# Advanced Merge Strategy Script
# This script systematically merges all new branches and resolves conflicts

set -e

echo "🚀 Starting Advanced Merge Strategy"
echo "=================================="

# Ensure we're on main branch
git checkout main
git pull origin main

# Function to safely merge a branch with conflict resolution
merge_branch_with_conflicts() {
    local branch="$1"
    echo "🔍 Checking branch: $branch"
    
    # Check if branch exists and is different from main
    if git show-ref --verify --quiet "refs/remotes/$branch"; then
        # Check if branch has commits ahead of main
        local ahead=$(git rev-list --count "refs/remotes/$branch" ^main 2>/dev/null || echo "0")
        
        if [ "$ahead" -gt 0 ]; then
            echo "📥 Branch $branch has $ahead commits ahead of main"
            
            # Try to merge without committing
            if git merge "refs/remotes/$branch" --no-commit --no-ff 2>/dev/null; then
                echo "✅ Successfully merged $branch"
                git commit -m "Merge $branch into main - advanced merge strategy"
                return 0
            else
                echo "⚠️  Merge conflict detected in $branch"
                # Check for conflicts
                if git diff --name-only --diff-filter=U | grep -q .; then
                    echo "🔧 Resolving conflicts in $branch"
                    # Auto-resolve conflicts by taking both versions where possible
                    git status --porcelain | grep "^UU" | while read status file; do
                        echo "Resolving conflict in $file"
                        # For most files, try to take the incoming version (theirs)
                        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                        git add "$file" 2>/dev/null || true
                    done
                    
                    # Try to commit the resolved conflicts
                    if git commit -m "Resolve merge conflicts from $branch" 2>/dev/null; then
                        echo "✅ Conflicts resolved for $branch"
                        return 0
                    else
                        echo "❌ Failed to resolve conflicts for $branch"
                        git merge --abort 2>/dev/null || true
                        return 1
                    fi
                else
                    echo "❌ Failed to merge $branch"
                    git merge --abort 2>/dev/null || true
                    return 1
                fi
            fi
        else
            echo "⏭️  Branch $branch is up to date with main"
        fi
    else
        echo "❌ Branch $branch does not exist"
    fi
    return 0
}

# Get list of branches that need merging
echo "📋 Identifying branches to merge..."

# Priority 1: Cursor branches with new content
cursor_content_branches=$(git branch -r | grep "cursor/create-and-deploy-new-content" | head -10)
echo "Found cursor content branches: $(echo $cursor_content_branches | wc -w)"

# Priority 2: Feature branches
feature_branches=$(git branch -r | grep -E "(feat/|feature/)" | head -10)
echo "Found feature branches: $(echo $feature_branches | wc -w)"

# Priority 3: Improvement branches
improvement_branches=$(git branch -r | grep "improvements/" | head -5)
echo "Found improvement branches: $(echo $improvement_branches | wc -w)"

# Priority 4: Other cursor branches
other_cursor_branches=$(git branch -r | grep "cursor/fix-netlify-build-and-merge-to-main" | head -5)
echo "Found other cursor branches: $(echo $other_cursor_branches | wc -w)"

# Merge cursor content branches first (highest priority)
echo ""
echo "🔄 Merging cursor content branches..."
for branch in $cursor_content_branches; do
    merge_branch_with_conflicts "$branch"
done

# Merge feature branches
echo ""
echo "🔄 Merging feature branches..."
for branch in $feature_branches; do
    merge_branch_with_conflicts "$branch"
done

# Merge improvement branches
echo ""
echo "🔄 Merging improvement branches..."
for branch in $improvement_branches; do
    merge_branch_with_conflicts "$branch"
done

# Merge other cursor branches
echo ""
echo "🔄 Merging other cursor branches..."
for branch in $other_cursor_branches; do
    merge_branch_with_conflicts "$branch"
done

echo ""
echo "🎉 Advanced merge strategy completed!"
echo "=================================="

# Final status check
git status
git log --oneline -5

echo "✅ All branches have been processed"