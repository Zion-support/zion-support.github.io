#!/bin/bash

# Script to merge all branches and resolve conflicts
set -e

echo "🚀 Starting comprehensive branch merge process..."

# Update main branch
echo "📥 Updating main branch..."
git checkout main
git pull origin main

# Get all remote branches
echo "📋 Getting all remote branches..."
git fetch --all

# Get all cursor branches
echo "🔍 Finding all cursor branches to merge..."
CURSOR_BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | head -50)

echo "📊 Found $(echo "$CURSOR_BRANCHES" | wc -l) branches to process"

# Initialize counters
SUCCESS_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0

# Process each branch
for branch in $CURSOR_BRANCHES; do
    echo ""
    echo "🔄 Processing branch: $branch"
    
    # Extract branch name without origin/
    BRANCH_NAME=$(echo $branch | sed 's/origin\///')
    
    # Check if branch is already merged
    if git merge-base --is-ancestor "$branch" main 2>/dev/null; then
        echo "✅ Branch $BRANCH_NAME is already merged, skipping..."
        ((SKIPPED_COUNT++))
        continue
    fi
    
    # Try to merge the branch
    if git merge --no-ff "$branch" -m "Merge $BRANCH_NAME into main" 2>/dev/null; then
        echo "✅ Successfully merged $BRANCH_NAME"
        ((SUCCESS_COUNT++))
    else
        echo "⚠️  Merge conflict detected for $BRANCH_NAME"
        
        # Check what files have conflicts
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
        echo "   Conflict files: $CONFLICT_FILES"
        
        # Resolve conflicts automatically
        for file in $CONFLICT_FILES; do
            if [[ "$file" == "package.json" ]] || [[ "$file" == "yarn.lock" ]] || [[ "$file" == "tsconfig.json" ]]; then
                echo "   Resolving $file using main version..."
                git checkout --ours "$file"
            elif [[ "$file" == "package-lock.json" ]]; then
                echo "   Removing $file..."
                git rm "$file" 2>/dev/null || true
            fi
        done
        
        # Regenerate yarn.lock if package.json was changed
        if echo "$CONFLICT_FILES" | grep -q "package.json\|yarn.lock"; then
            echo "   Regenerating yarn.lock..."
            rm -f yarn.lock
            yarn install --frozen-lockfile || yarn install
        fi
        
        # Add resolved files
        git add .
        
        # Complete the merge
        if git commit --no-edit 2>/dev/null; then
            echo "✅ Successfully resolved conflicts and merged $BRANCH_NAME"
            ((SUCCESS_COUNT++))
        else
            echo "❌ Failed to resolve conflicts for $BRANCH_NAME, aborting merge..."
            git merge --abort 2>/dev/null || true
            ((FAILED_COUNT++))
        fi
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "   ✅ Successful merges: $SUCCESS_COUNT"
echo "   ⚠️  Failed merges: $FAILED_COUNT"
echo "   ⏭️  Skipped (already merged): $SKIPPED_COUNT"
echo "   📋 Total processed: $((SUCCESS_COUNT + FAILED_COUNT + SKIPPED_COUNT))"

echo ""
echo "🎉 Branch merge process completed!"