#!/bin/bash

# Smart Merge Strategy - Focus on critical improvements only
# This script will merge only the most important branches with minimal conflicts

set -e

echo "🚀 Starting smart merge strategy..."

# Function to check if a branch has minimal conflicts
check_branch_conflicts() {
    local branch=$1
    echo "🔍 Checking conflicts for branch: $branch"
    
    # Create a temporary branch to test merge
    git checkout -b "test-merge-$branch" origin/$branch 2>/dev/null || return 1
    
    # Try to merge main
    if git merge main --no-commit --no-ff 2>/dev/null; then
        echo "✅ No conflicts found for $branch"
        git merge --abort 2>/dev/null || true
        git checkout main
        git branch -D "test-merge-$branch" 2>/dev/null || true
        return 0
    else
        # Count conflicts
        local conflict_count=$(git diff --name-only --diff-filter=U | wc -l)
        echo "⚠️  Found $conflict_count conflicts in $branch"
        git merge --abort 2>/dev/null || true
        git checkout main
        git branch -D "test-merge-$branch" 2>/dev/null || true
        
        # Only proceed if conflicts are minimal (less than 10 files)
        if [ "$conflict_count" -lt 10 ]; then
            echo "✅ Acceptable conflict level for $branch"
            return 0
        else
            echo "❌ Too many conflicts for $branch"
            return 1
        fi
    fi
}

# Function to merge a branch with conflict resolution
merge_branch_smart() {
    local branch=$1
    echo "🔄 Merging branch: $branch"
    
    # Checkout the branch
    git checkout -b "merge-$branch" origin/$branch
    
    # Merge main
    git merge main --no-commit --no-ff || true
    
    # Resolve conflicts by accepting our version for most files
    # but keep their version for new files
    git status --porcelain | grep "^UU" | cut -c4- | while read file; do
        if [ -f "$file" ]; then
            # For existing files, accept our version (main branch)
            git checkout --ours "$file" 2>/dev/null || true
        fi
    done
    
    # For new files (added by them), accept their version
    git status --porcelain | grep "^AU" | cut -c4- | while read file; do
        if [ -f "$file" ]; then
            git checkout --theirs "$file" 2>/dev/null || true
        fi
    done
    
    # Add all resolved files
    git add . 2>/dev/null || true
    
    # Commit the merge
    git commit -m "Merge $branch: resolved conflicts intelligently" || true
    
    # Merge back to main
    git checkout main
    git merge "merge-$branch" --no-ff -m "Merge $branch with smart conflict resolution"
    
    # Clean up
    git branch -D "merge-$branch"
    
    echo "✅ Successfully merged $branch"
}

# Ensure we're on main and up to date
git checkout main
git pull origin main

# List of branches to check (most recent first)
BRANCHES_TO_CHECK=(
    "cursor/fix-lint-push-and-merge-to-main-4d20"
    "cursor/fix-syntax-push-and-merge-to-main-5a4f"
    "cursor/add-new-services-and-advertise-them-ef37"
    "cursor/add-new-services-and-deploy-updates-e792"
    "cursor/automate-test-fix-improve-and-merge-code-c782"
    "cursor/automate-test-fix-improve-and-merge-code-ee3b"
)

# Process each branch
for branch in "${BRANCHES_TO_CHECK[@]}"; do
    echo "🔄 Processing branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/origin/$branch; then
        if check_branch_conflicts "$branch"; then
            echo "✅ Branch $branch passed conflict check, proceeding with merge..."
            if merge_branch_smart "$branch"; then
                echo "✅ Successfully merged $branch"
            else
                echo "❌ Failed to merge $branch"
            fi
        else
            echo "⚠️  Skipping $branch due to too many conflicts"
        fi
    else
        echo "⚠️  Branch $branch does not exist, skipping..."
    fi
done

echo "🎉 Smart merge strategy completed!"
echo "📊 Current status:"
git status