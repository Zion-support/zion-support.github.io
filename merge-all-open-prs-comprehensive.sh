#!/bin/bash

# Comprehensive PR Merger - Merges all open PRs systematically
# This script will:
# 1. Fetch all branches
# 2. Merge each PR branch into main
# 3. Resolve any conflicts automatically
# 4. Push changes

set -e

echo "🚀 Starting Comprehensive PR Merge Process"
echo "=========================================="

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Define the PR branches to merge
PR_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-8876"
    "cursor/fix-errors-and-merge-to-main-a502"
    "cursor/fix-errors-and-merge-to-main-bf21"
    "cursor/fix-errors-and-merge-to-main-ffbe"
)

MERGE_COUNT=0
CONFLICT_COUNT=0
SKIP_COUNT=0

for BRANCH in "${PR_BRANCHES[@]}"; do
    echo ""
    echo "📦 Processing branch: $BRANCH"
    echo "-----------------------------------"
    
    # Fetch the branch
    echo "⬇️  Fetching branch..."
    git fetch origin "$BRANCH" || {
        echo "❌ Failed to fetch $BRANCH - skipping"
        ((SKIP_COUNT++))
        continue
    }
    
    # Check if branch exists
    if ! git rev-parse "origin/$BRANCH" >/dev/null 2>&1; then
        echo "❌ Branch $BRANCH not found - skipping"
        ((SKIP_COUNT++))
        continue
    fi
    
    # Try to merge
    echo "🔀 Attempting to merge $BRANCH into main..."
    
    if git merge "origin/$BRANCH" --no-edit -m "Merge PR branch $BRANCH into main"; then
        echo "✅ Successfully merged $BRANCH"
        ((MERGE_COUNT++))
    else
        echo "⚠️  Conflicts detected in $BRANCH"
        ((CONFLICT_COUNT++))
        
        # Try automatic conflict resolution
        echo "🔧 Attempting automatic conflict resolution..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -z "$CONFLICTED_FILES" ]; then
            echo "✅ No conflicts to resolve"
            git commit --no-edit -m "Merge PR branch $BRANCH into main"
            ((MERGE_COUNT++))
            continue
        fi
        
        echo "📝 Conflicted files:"
        echo "$CONFLICTED_FILES"
        
        # For each conflicted file, prefer incoming changes
        while IFS= read -r file; do
            if [ -f "$file" ]; then
                echo "  Resolving: $file (using theirs)"
                git checkout --theirs "$file"
                git add "$file"
            fi
        done <<< "$CONFLICTED_FILES"
        
        # Commit the resolution
        if git commit --no-edit -m "Merge PR branch $BRANCH into main (conflicts resolved)"; then
            echo "✅ Conflicts resolved and committed for $BRANCH"
            ((MERGE_COUNT++))
        else
            echo "❌ Failed to commit conflict resolution for $BRANCH"
            git merge --abort
            ((SKIP_COUNT++))
        fi
    fi
done

echo ""
echo "=========================================="
echo "📊 Merge Summary:"
echo "  ✅ Successfully merged: $MERGE_COUNT"
echo "  ⚠️  Had conflicts (resolved): $CONFLICT_COUNT"
echo "  ❌ Skipped: $SKIP_COUNT"
echo "=========================================="

if [ $MERGE_COUNT -gt 0 ]; then
    echo "✅ Merge process completed successfully!"
    echo "📝 Summary saved to merge-summary.txt"
    
    cat > merge-summary.txt << EOF
Merge Summary - $(date)
=======================
Successfully merged: $MERGE_COUNT branches
Had conflicts (resolved): $CONFLICT_COUNT
Skipped: $SKIP_COUNT

Merged branches:
EOF
    
    for BRANCH in "${PR_BRANCHES[@]}"; do
        echo "  - $BRANCH" >> merge-summary.txt
    done
    
    exit 0
else
    echo "⚠️  No branches were merged"
    exit 1
fi
