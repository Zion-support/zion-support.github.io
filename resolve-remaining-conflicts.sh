#!/bin/bash

# Script to resolve remaining merge conflicts
set -e

echo "🔧 Starting comprehensive conflict resolution..."

# List of branches with conflicts
CONFLICT_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-0d7b"
    "cursor/fix-errors-and-merge-to-main-25c0"
    "cursor/fix-errors-and-merge-to-main-4506"
    "cursor/fix-errors-and-merge-to-main-4f71"
    "cursor/fix-errors-and-merge-to-main-74f1"
    "cursor/fix-errors-and-merge-to-main-aa77"
    "cursor/fix-errors-and-merge-to-main-c37a"
    "cursor/fix-errors-and-merge-to-main-ce14"
)

RESOLVED_BRANCHES=()
FAILED_BRANCHES=()

for branch in "${CONFLICT_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "  ✓ Branch exists, attempting merge with conflict resolution..."
        
        # Try to merge the branch
        if git merge origin/$branch --no-edit; then
            echo "  ✅ Successfully merged $branch"
            RESOLVED_BRANCHES+=("$branch")
        else
            echo "  🔧 Resolving conflicts for $branch..."
            
            # Get list of conflicted files
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
            
            if [ -n "$CONFLICTED_FILES" ]; then
                echo "  📝 Conflicted files: $CONFLICTED_FILES"
                
                # Resolve conflicts automatically
                for file in $CONFLICTED_FILES; do
                    echo "    🔧 Resolving conflicts in $file"
                    
                    # Use git checkout to resolve conflicts (keep our version)
                    git checkout --ours "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                done
                
                # Commit the resolved conflicts
                if git commit --no-edit; then
                    echo "  ✅ Successfully resolved conflicts for $branch"
                    RESOLVED_BRANCHES+=("$branch")
                else
                    echo "  ❌ Failed to commit resolved conflicts for $branch"
                    FAILED_BRANCHES+=("$branch")
                    git merge --abort 2>/dev/null || true
                fi
            else
                echo "  ❌ No conflicted files found for $branch"
                FAILED_BRANCHES+=("$branch")
                git merge --abort 2>/dev/null || true
            fi
        fi
    else
        echo "  ⚠️  Branch $branch does not exist, skipping..."
    fi
done

echo ""
echo "=== CONFLICT RESOLUTION SUMMARY ==="
echo "Successfully resolved and merged branches:"
for branch in "${RESOLVED_BRANCHES[@]}"; do
    echo "  ✅ $branch"
done

echo ""
echo "Failed to resolve branches:"
for branch in "${FAILED_BRANCHES[@]}"; do
    echo "  ❌ $branch"
done

echo ""
echo "Total resolved: ${#RESOLVED_BRANCHES[@]}"
echo "Total failed: ${#FAILED_BRANCHES[@]}"

# Push changes if any were resolved
if [ ${#RESOLVED_BRANCHES[@]} -gt 0 ]; then
    echo ""
    echo "Pushing resolved changes to main..."
    git push origin main
    echo "✅ Changes pushed to main branch"
fi

echo ""
echo "Conflict resolution process completed!"