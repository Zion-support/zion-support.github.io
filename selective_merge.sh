#!/bin/bash

# Selective branch merge script
# This script will merge specific branches that are likely to be important

set -e

echo "Starting selective branch merge process..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Create a backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

echo "Created backup branch: $BACKUP_BRANCH"

# Define priority branches to merge (most recent and important ones)
PRIORITY_BRANCHES=(
    "cursor/fix-netlify-build-and-merge-to-main-ad84"
    "comprehensive-improvements"
    "content-update-2025"
    "comprehensive-merge-all-prs"
    "comprehensive-improvements-final"
    "content-updates-2025-09-16"
    "comprehensive-services-showcase"
    "content-enhancement-2025"
    "comprehensive-website-enhancement-2025"
    "comprehensive-ai-2026-content-integration"
)

# Initialize counters
MERGED_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0

# Function to merge a single branch
merge_branch() {
    local branch=$1
    
    echo "Attempting to merge branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-ff -m "Merge branch $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged: $branch"
        ((MERGED_COUNT++))
        return 0
    else
        echo "⚠️  Conflicts detected in: $branch"
        
        # Auto-resolve conflicts using git's strategy
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts automatically..."
            
            # List conflicted files
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                echo "Resolving conflict in: $file"
                # Use git checkout to resolve conflicts (take our version)
                git checkout --ours "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            done
            
            # Try to commit the merge
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Successfully resolved conflicts and merged: $branch"
                ((MERGED_COUNT++))
                ((CONFLICT_COUNT++))
                return 0
            else
                echo "❌ Failed to commit after conflict resolution: $branch"
                git merge --abort 2>/dev/null || true
            fi
        else
            echo "❌ Merge failed for: $branch (not conflicts, other error)"
            git merge --abort 2>/dev/null || true
        fi
        
        ((ERROR_COUNT++))
        return 1
    fi
}

# Process priority branches
for branch in "${PRIORITY_BRANCHES[@]}"; do
    echo ""
    echo "Processing branch: $branch"
    
    if merge_branch "$branch"; then
        echo "Branch $branch merged successfully"
        # Push after each successful merge
        git push origin main || echo "Warning: Failed to push after merging $branch"
    else
        echo "Branch $branch failed to merge"
    fi
    
    echo "---"
done

# Print summary
echo ""
echo "=== MERGE SUMMARY ==="
echo "Priority branches processed: ${#PRIORITY_BRANCHES[@]}"
echo "Successfully merged: $MERGED_COUNT"
echo "Conflicts resolved: $CONFLICT_COUNT"
echo "Failed to merge: $ERROR_COUNT"
echo "Backup branch created: $BACKUP_BRANCH"

echo "Selective merge process completed!"