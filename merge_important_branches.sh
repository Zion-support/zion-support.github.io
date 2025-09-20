#!/bin/bash

# Script to merge important branches systematically
set -e

echo "🚀 Starting systematic merge of important branches..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Create backup
BACKUP_BRANCH="backup-before-merge-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

echo "✅ Created backup branch: $BACKUP_BRANCH"

# List of important branches to merge (prioritized)
IMPORTANT_BRANCHES=(
    "origin/2025-comprehensive-services-expansion"
    "origin/comprehensive-improvements"
    "origin/comprehensive-improvements-2025"
    "origin/content-update-2025"
    "origin/content-updates-2025-09-15"
    "origin/comprehensive-services-clean"
    "origin/comprehensive-services-showcase"
    "origin/comprehensive-website-enhancement-2025"
)

# Initialize counters
MERGED_COUNT=0
FAILED_COUNT=0
CONFLICT_COUNT=0

# Function to merge a single branch
merge_branch() {
    local branch=$1
    local branch_name=$(echo "$branch" | sed 's/origin\///')
    
    echo "🔄 Attempting to merge: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Check if branch has differences
    if git diff --quiet main "$branch"; then
        echo "ℹ️  Branch $branch_name has no differences, skipping..."
        return 0
    fi
    
    # Attempt merge
    if git merge --no-ff "$branch" -m "Merge $branch_name into main"; then
        echo "✅ Successfully merged $branch_name"
        ((MERGED_COUNT++))
        return 0
    else
        echo "❌ Merge conflict in $branch_name, attempting to resolve..."
        
        # Check for merge conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts in $branch_name..."
            
            # Try to resolve conflicts automatically
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read -r file; do
                file_path=$(echo "$file" | cut -c4-)
                echo "  Resolving conflicts in: $file_path"
                
                # For package files, prefer main version
                if [[ "$file_path" == "package.json" || "$file_path" == "package-lock.json" ]]; then
                    git checkout --ours -- "$file_path"
                    git add "$file_path"
                # For other files, try to resolve automatically
                else
                    # Remove conflict markers and keep both versions where possible
                    if grep -q "<<<<<<< " "$file_path"; then
                        # Simple conflict resolution - prefer incoming changes
                        git checkout --theirs -- "$file_path" 2>/dev/null || true
                        git add "$file_path" 2>/dev/null || true
                    fi
                fi
            done
            
            # Complete the merge
            if git commit --no-edit; then
                echo "✅ Successfully resolved conflicts and merged $branch_name"
                ((MERGED_COUNT++))
                ((CONFLICT_COUNT++))
                return 0
            else
                echo "❌ Failed to resolve conflicts in $branch_name, aborting merge"
                git merge --abort
                ((FAILED_COUNT++))
                return 1
            fi
        else
            echo "❌ Failed to merge $branch_name for unknown reason"
            git merge --abort
            ((FAILED_COUNT++))
            return 1
        fi
    fi
}

# Process each important branch
for branch in "${IMPORTANT_BRANCHES[@]}"; do
    echo "---"
    merge_branch "$branch"
    echo "---"
done

# Summary
echo "📊 Merge Summary:"
echo "  ✅ Successfully merged: $MERGED_COUNT branches"
echo "  🔧 Resolved conflicts: $CONFLICT_COUNT branches"
echo "  ❌ Failed to merge: $FAILED_COUNT branches"
echo "  💾 Backup branch: $BACKUP_BRANCH"

# Push changes
echo "🚀 Pushing changes to origin/main..."
git push origin main

echo "✅ Merge process completed!"