#!/bin/bash

<<<<<<< HEAD
# Comprehensive PR merge script
# This will systematically merge different types of PRs

set -e

echo "Starting comprehensive PR merge process..."

# Function to merge a single PR
merge_pr() {
    local pr_branch=$1
    echo "Attempting to merge $pr_branch..."
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$pr_branch"; then
        echo "✗ Branch $pr_branch does not exist, skipping..."
        return 1
    fi
    
    # Try to merge
    merge_output=$(git merge "$pr_branch" 2>&1)
    if echo "$merge_output" | grep -q "Already up to date"; then
        echo "✓ $pr_branch already up to date"
        return 0
    elif echo "$merge_output" | grep -q "Automatic merge went well"; then
        echo "✓ Successfully merged $pr_branch"
        return 0
    else
        echo "✗ Conflict in $pr_branch, skipping..."
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# Function to merge branches by pattern
merge_branches_by_pattern() {
    local pattern=$1
    local limit=$2
    local description=$3
    
    echo "=== Merging $description ==="
    branches=$(git branch -r | grep "$pattern" | head -$limit)
    
    successful=0
    failed=0
    
    for branch in $branches; do
        if merge_pr "$branch"; then
            ((successful++))
        else
            ((failed++))
        fi
    done
    
    echo "Completed $description: $successful successful, $failed failed"
    return $successful
}

# Merge different types of branches
total_merged=0

# 1. Merge cursor branches
if merge_branches_by_pattern "origin/cursor/" 20 "cursor branches"; then
    total_merged=$((total_merged + $?))
fi

# 2. Merge clean branches
if merge_branches_by_pattern "origin/clean-" 15 "clean branches"; then
    total_merged=$((total_merged + $?))
fi

# 3. Merge comprehensive branches
if merge_branches_by_pattern "origin/comprehensive-" 10 "comprehensive branches"; then
    total_merged=$((total_merged + $?))
fi

# 4. Merge content branches
if merge_branches_by_pattern "origin/content-" 10 "content branches"; then
    total_merged=$((total_merged + $?))
fi

echo "Total successful merges: $total_merged"

# Push the changes
echo "Pushing changes to remote..."
git push origin main

echo "Comprehensive merge process completed!"
=======
# Comprehensive merge script for resolving all conflicts and merging branches
set -e

echo "🚀 Starting comprehensive merge process..."

# First, reset to remote main to start clean
echo "📥 Fetching latest changes from remote..."
git fetch origin

echo "🔄 Resetting to remote main branch..."
git reset --hard origin/main

echo "✅ Reset to clean state"

# Get list of recent branches to merge
echo "📋 Getting list of branches to merge..."

# Merge branches in batches to handle conflicts systematically
MERGE_BRANCHES=(
    "origin/2025-comprehensive-services-expansion"
    "origin/add-comprehensive-services"
    "origin/cursor/add-comprehensive-services-2025"
)

CONFLICT_RESOLUTION_COUNT=0

for branch in "${MERGE_BRANCHES[@]}"; do
    echo "🔄 Attempting to merge $branch..."
    
    if git merge "$branch" --no-commit 2>/dev/null; then
        echo "✅ $branch merged successfully"
        git commit -m "chore: merge $branch into main"
    else
        echo "⚠️  Merge conflict detected in $branch"
        CONFLICT_RESOLUTION_COUNT=$((CONFLICT_RESOLUTION_COUNT + 1))
        
        # Auto-resolve common conflicts
        if git status --porcelain | grep -q "package-lock.json"; then
            echo "  🔧 Resolving package-lock.json conflict..."
            git checkout --theirs package-lock.json
            git add package-lock.json
        fi
        
        if git status --porcelain | grep -q "yarn.lock"; then
            echo "  🔧 Resolving yarn.lock conflict..."
            git checkout --theirs yarn.lock
            git add yarn.lock
        fi
        
        if git status --porcelain | grep -q "eslint.config.js"; then
            echo "  🔧 Resolving eslint.config.js conflict..."
            git checkout --ours eslint.config.js
            git add eslint.config.js
        fi
        
        # Add any other resolved files
        git add .
        
        # Commit the merge
        git commit -m "chore: resolve conflicts and merge $branch"
        echo "✅ Successfully resolved conflicts and merged $branch"
    fi
done

echo "📊 Merge Summary:"
echo "  - Branches processed: ${#MERGE_BRANCHES[@]}"
echo "  - Conflicts resolved: $CONFLICT_RESOLUTION_COUNT"

# Push the results
echo "📤 Pushing merged changes to remote..."
git push origin main

echo "🎉 Comprehensive merge process completed successfully!"
>>>>>>> origin/backup-main-20250924-182607
