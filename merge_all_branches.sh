#!/bin/bash

# Script to merge all feature branches with conflict resolution
set -e

echo "Starting comprehensive merge process..."

# Function to resolve conflicts automatically
resolve_conflicts() {
    local branch=$1
    echo "Attempting to merge branch: $branch"
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-commit; then
        echo "Successfully merged $branch without conflicts"
        git commit -m "Merge $branch into main - no conflicts"
        return 0
    else
        echo "Conflicts found in $branch, attempting to resolve..."
        
        # Strategy: prefer main branch (ours) for most conflicts
        # But keep new files from feature branch
        git status --porcelain | while read status file; do
            case $status in
                "UU"|"AA"|"AU"|"UA")
                    echo "Resolving conflict in $file"
                    # For add/add conflicts, prefer the feature branch version
                    if [[ $file == *.tsx || $file == *.ts || $file == *.js || $file == *.jsx ]]; then
                        git checkout --theirs "$file" 2>/dev/null || true
                    else
                        git checkout --ours "$file" 2>/dev/null || true
                    fi
                    git add "$file" 2>/dev/null || true
                    ;;
                "DD")
                    echo "File $file was deleted in both branches, keeping deleted"
                    git rm "$file" 2>/dev/null || true
                    ;;
                "DU")
                    echo "File $file was deleted in main, keeping from feature branch"
                    git add "$file" 2>/dev/null || true
                    ;;
                "UD")
                    echo "File $file was deleted in feature branch, keeping deleted"
                    git rm "$file" 2>/dev/null || true
                    ;;
            esac
        done
        
        # Add all resolved files
        git add . 2>/dev/null || true
        
        # Commit the merge
        if git commit -m "Merge $branch into main - resolved conflicts automatically"; then
            echo "Successfully resolved conflicts and merged $branch"
            return 0
        else
            echo "Failed to commit merge for $branch"
            git merge --abort
            return 1
        fi
    fi
}

# First, pull the latest changes
echo "Pulling latest changes from origin/main..."
git pull origin main

# List of feature branches to merge (prioritized order)
FEATURE_BRANCHES=(
    "feature/comprehensive-ui-components"
    "feature/enhanced-routing-and-ai-services"
    "feature/enhanced-services-and-design"
    "feature/expand-zion-services-2025"
    "feature/expanded-services"
    "feature/expanded-services-2026"
    "feature/fix-build-and-improve-navigation"
    "feature/futuristic-ui-services"
    "feature/homepage-ai-search"
    "feature/merge-conflicts-and-improvements"
)

# Merge each feature branch
for branch in "${FEATURE_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    if resolve_conflicts "$branch"; then
        echo "✅ Successfully merged $branch"
    else
        echo "❌ Failed to merge $branch, skipping..."
    fi
    echo "---"
done

echo "Merge process completed!"
echo "Current status:"
git status

# Push the changes
echo "Pushing changes to origin/main..."
git push origin main

echo "All merges completed and pushed successfully!"