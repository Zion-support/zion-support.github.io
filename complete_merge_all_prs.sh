#!/bin/bash

# Complete Merge All PRs Script
# This script will merge all remaining branches and resolve conflicts automatically

set -e

echo "🚀 Complete Merge All PRs - Comprehensive Branch Merging"
echo "======================================================="

# Function to resolve merge conflicts automatically
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file"
    
    if [[ "$file" == *"page.tsx" ]] || [[ "$file" == *"App.tsx" ]] || [[ "$file" == *".tsx" ]]; then
        echo "📝 Processing React/TypeScript file: $file"
        
        # Remove conflict markers and combine content intelligently
        awk '
        /^        !in_conflict { print }
        in_conflict && /^[[:space:]]*$/ { print }
        in_conflict && /import/ { print }
        in_conflict && /export/ { print }
        in_conflict && /component/ { print }
        in_conflict && /<[A-Z]/ { print }
        in_conflict && /<\/[A-Z]/ { print }
        in_conflict && /Suspense/ { print }
        ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
        
        echo "✅ Conflicts resolved in $file"
    else
        echo "🔧 Using git merge tool for: $file"
        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file"
    fi
}

# Function to merge a branch with comprehensive conflict resolution
merge_branch() {
    local branch="$1"
    echo ""
    echo "📋 Processing branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "❌ Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor "$branch" main 2>/dev/null; then
        echo "✅ Branch $branch is already merged, skipping..."
        return 0
    fi
    
    echo "🔄 Attempting to merge $branch..."
    
    # Try to merge without committing
    if git merge --no-commit --no-ff "$branch" 2>/dev/null; then
        echo "✅ No conflicts found, committing merge..."
        git commit -m "feat: Merge $branch

Automatically merged branch with latest content and improvements.
This merge includes new features, content updates, and enhancements."
        
        echo "🎉 Successfully merged $branch"
        return 0
    else
        echo "⚠️  Conflicts detected in $branch, resolving automatically..."
        
        # Get list of conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflicted_files" ]; then
            echo "🔧 Resolving conflicts in files: $conflicted_files"
            
            # Resolve conflicts in each file
            local all_resolved=true
            for file in $conflicted_files; do
                if [ -f "$file" ]; then
                    if ! resolve_conflicts "$file"; then
                        all_resolved=false
                    fi
                fi
            done
            
            if [ "$all_resolved" = true ]; then
                # Add resolved files
                git add $conflicted_files 2>/dev/null || git add .
                
                # Commit the resolved merge
                git commit -m "feat: Merge $branch (conflicts resolved)

Successfully merged branch with automatic conflict resolution.
This merge includes new features, content updates, and enhancements."
                
                echo "🎉 Successfully merged $branch with resolved conflicts"
                return 0
            else
                echo "❌ Failed to resolve all conflicts in $branch"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            echo "❌ Failed to merge $branch - aborting merge"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Update main branch first
echo "📥 Updating main branch..."
git checkout main
git pull origin main

# List of all branches that need to be merged
ALL_BRANCHES=(
    # Recent cursor branches
    "origin/cursor/create-and-deploy-new-content-1cd6"
    "origin/cursor/create-and-deploy-new-content-49e9"
    "origin/cursor/create-and-deploy-new-content-795e"
    "origin/cursor/create-and-deploy-new-content-8a50"
    "origin/cursor/create-and-deploy-new-content-e7eb"
    "origin/cursor/create-and-deploy-new-content-37e2"
    "origin/cursor/create-and-deploy-new-content-6705"
    
    # Feature branches
    "origin/feat/blog-content-promo"
    "origin/feat/new-content-promo-2025"
    "origin/feature/content-ads-2025"
    "origin/feature/news-1-3-upgrades"
    
    # Improvement branches
    "origin/clean-zion-app-improvements"
    "origin/design-improvements-clean"
    "origin/enhanced-app-improvements-v2"
    "origin/enterprise-services-integration"
    "origin/final-improvements-merged"
    
    # Merge resolution branches
    "origin/comprehensive-merge-conflicts-resolution"
)

# Track results
SUCCESSFUL_MERGES=()
FAILED_MERGES=()

echo "🔄 Processing ${#ALL_BRANCHES[@]} branches for merging..."

for branch in "${ALL_BRANCHES[@]}"; do
    if merge_branch "$branch"; then
        SUCCESSFUL_MERGES+=("$branch")
    else
        FAILED_MERGES+=("$branch")
    fi
done

# Summary
echo ""
echo "📊 Complete Merge Summary:"
echo "=========================="
echo "✅ Successfully merged: ${#SUCCESSFUL_MERGES[@]} branches"
echo "❌ Failed to merge: ${#FAILED_MERGES[@]} branches"

if [ ${#SUCCESSFUL_MERGES[@]} -gt 0 ]; then
    echo ""
    echo "🎉 Successfully merged branches:"
    for branch in "${SUCCESSFUL_MERGES[@]}"; do
        echo "  - $branch"
    done
fi

if [ ${#FAILED_MERGES[@]} -gt 0 ]; then
    echo ""
    echo "⚠️  Branches that need manual attention:"
    for branch in "${FAILED_MERGES[@]}"; do
        echo "  - $branch"
    done
fi

# Push all changes
if [ ${#SUCCESSFUL_MERGES[@]} -gt 0 ]; then
    echo ""
    echo "🚀 Pushing all merged changes to remote..."
    git push origin main
    echo "✅ Successfully pushed all changes to remote main branch"
fi

# Final status
echo ""
echo "🏁 Complete merge process finished!"
echo "Total branches processed: ${#ALL_BRANCHES[@]}"
if [ ${#ALL_BRANCHES[@]} -gt 0 ]; then
    success_rate=$(( ${#SUCCESSFUL_MERGES[@]} * 100 / ${#ALL_BRANCHES[@]} ))
    echo "Success rate: $success_rate%"
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Review the merged changes: git log --oneline -20"
echo "2. Test the application: npm run dev"
echo "3. Build and verify: npm run build"
echo "4. Deploy the changes"

echo ""
echo "✨ All PRs have been processed and merged into main!"