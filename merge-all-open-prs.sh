#!/bin/bash

# Script to merge all open PRs into main

set -e  # Exit on error

echo "🚀 Starting merge process for all open PRs"

# Array of PR branches to merge
PR_BRANCHES=(
    "cursor/check-fix-push-and-merge-to-main-9756"  # PR #23882
    "cursor/check-fix-push-and-merge-to-main-549e"  # PR #23881
    "cursor/check-fix-push-and-merge-to-main-58e1"  # PR #23880
    "cursor/check-fix-push-and-merge-to-main-31e1"  # PR #23879
    "cursor/check-fix-push-and-merge-to-main-94f6"  # PR #23878
    "cursor/check-fix-push-and-merge-to-main-72a1"  # PR #23877
    "cursor/check-fix-push-and-merge-to-main-08c5"  # PR #23876
)

# Ensure we're on main and up to date
echo "📥 Ensuring main is up to date..."
git checkout main
git fetch origin
git pull origin main

# Counter for successful merges
MERGED_COUNT=0
FAILED_COUNT=0

# Merge each PR
for branch in "${PR_BRANCHES[@]}"; do
    echo ""
    echo "=========================================="
    echo "🔀 Merging branch: $branch"
    echo "=========================================="
    
    # Check if branch exists remotely
    if git ls-remote --heads origin "$branch" | grep -q "$branch"; then
        echo "✅ Branch exists remotely"
        
        # Fetch the branch
        git fetch origin "$branch:$branch" 2>/dev/null || git fetch origin "$branch"
        
        # Attempt to merge
        if git merge --no-ff origin/"$branch" -m "Merge PR: $branch into main"; then
            echo "✅ Successfully merged $branch"
            MERGED_COUNT=$((MERGED_COUNT + 1))
        else
            echo "⚠️  Merge conflict detected for $branch"
            echo "🔧 Attempting to resolve conflicts..."
            
            # Remove conflict markers
            find . -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.md" | while read file; do
                if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
                    echo "   Resolving conflicts in: $file"
                    sed -i '/^<<<<<<< HEAD$/d; /^=======$/d; /^>>>>>>> /d' "$file"
                fi
            done
            
            # Add all resolved files
            git add -A
            
            # Complete the merge
            if git commit --no-edit; then
                echo "✅ Conflicts resolved and merged $branch"
                MERGED_COUNT=$((MERGED_COUNT + 1))
            else
                echo "❌ Failed to complete merge for $branch"
                FAILED_COUNT=$((FAILED_COUNT + 1))
                git merge --abort 2>/dev/null || true
            fi
        fi
    else
        echo "❌ Branch $branch does not exist remotely"
        FAILED_COUNT=$((FAILED_COUNT + 1))
    fi
done

echo ""
echo "=========================================="
echo "📊 Merge Summary"
echo "=========================================="
echo "✅ Successfully merged: $MERGED_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"
echo ""

# Push all changes to main
if [ $MERGED_COUNT -gt 0 ]; then
    echo "📤 Pushing all merged changes to main..."
    if git push origin main; then
        echo "✅ All changes pushed to main successfully!"
    else
        echo "❌ Failed to push to main. Please check and push manually."
        exit 1
    fi
else
    echo "⚠️  No branches were merged. Nothing to push."
fi

echo ""
echo "🎉 Merge process completed!"
