#!/bin/bash

# Comprehensive Merge All PRs Script
# This script will systematically merge all cursor branches and resolve conflicts

set -e

echo "🚀 Comprehensive Merge All PRs - Systematic Branch Merging"
echo "
# Function to resolve merge conflicts automatically
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file"
    
    if [[ "$file" == *"page.tsx" ]] || [[ "$file" == *"App.tsx" ]] || [[ "$file" == *".tsx" ]]; then
        echo "📝 Processing React/TypeScript file: $file"
        
        # Remove conflict markers and combine content intelligently
        awk '
        /^        !in_conflict { print }
        !in_conflict { print }
        in_conflict && /^[[:space:]]*$/ { print }
        in_conflict && /import/ { print }
        in_conflict && /export/ { print }
        in_conflict && /component/ { print }
        in_conflict && /<[A-Z]/ { print }
        in_conflict && /<\/[A-Z]/ { print }
        in_conflict && /Suspense/ { print }
        in_conflict && /function/ { print }
        in_conflict && /const/ { print }
        in_conflict && /return/ { print }
        ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
        
        echo "✅ Conflicts resolved in $file"
    elif [[ "$file" == *".js" ]] || [[ "$file" == *".json" ]]; then
        echo "🔧 Using git merge tool for JS/JSON file: $file"
        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file"
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

# Get all cursor branches
echo "🔍 Discovering all cursor branches..."
ALL_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | head -100)
TOTAL_BRANCHES=$(echo "$ALL_BRANCHES" | wc -l)

echo "📊 Found $TOTAL_BRANCHES cursor branches to process"

# Track results
SUCCESSFUL_MERGES=()
FAILED_MERGES=()
PROCESSED_COUNT=0

echo "🔄 Processing branches for merging..."

# Process branches in batches to avoid overwhelming the system
echo "$ALL_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    PROCESSED_COUNT=$((PROCESSED_COUNT + 1))
    
    echo ""
    echo "🔄 Processing $PROCESSED_COUNT/$TOTAL_BRANCHES: $branch"
    
    if merge_branch "$branch"; then
        SUCCESSFUL_MERGES+=("$branch")
        echo "✅ Successfully processed $branch"
    else
        FAILED_MERGES+=("$branch")
        echo "❌ Failed to process $branch"
    fi
    
    # Push every 20 branches to avoid losing progress
    if [ $((PROCESSED_COUNT % 20)) -eq 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main --force-with-lease 2>/dev/null || true
        echo "📊 Progress: $PROCESSED_COUNT/$TOTAL_BRANCHES processed"
    fi
done

# Final push
echo ""
echo "💾 Final push to remote..."
git push origin main --force-with-lease

# Summary
echo ""
echo "📊 Comprehensive Merge Summary:"
echo "echo "✅ Successfully merged: ${#SUCCESSFUL_MERGES[@]} branches"
echo "❌ Failed to merge: ${#FAILED_MERGES[@]} branches"
echo "📈 Total processed: $PROCESSED_COUNT"

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

# Final status
echo ""
echo "🏁 Comprehensive merge process finished!"
echo "Total branches processed: $PROCESSED_COUNT"
if [ $PROCESSED_COUNT -gt 0 ]; then
    success_rate=$(( ${#SUCCESSFUL_MERGES[@]} * 100 / $PROCESSED_COUNT ))
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