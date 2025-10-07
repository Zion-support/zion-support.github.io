#!/bin/bash

# Script to merge open PRs and resolve conflicts
set -e

echo "🚀 Starting PR merge process..."

# Function to merge a branch safely
merge_branch() {
    local branch_name=$1
    echo "📋 Processing branch: $branch_name"
    
    # Fetch the branch
    git fetch origin $branch_name:$branch_name 2>/dev/null || {
        echo "  ⚠️ Branch $branch_name not found on remote, skipping"
        return 1
    }
    
    # Checkout the branch
    git checkout $branch_name 2>/dev/null || {
        echo "  ⚠️ Failed to checkout $branch_name, skipping"
        return 1
    }
    
    # Check for conflicts and resolve them
    find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | while read file; do
        if grep -q "" "$file" 2>/dev/null; then
            echo "  🔧 Resolving conflicts in $file"
            # Auto-resolve conflicts
            sed -i '/^/,/^        fi
    done
    
    # Test build
    if timeout 30 npm run build > /dev/null 2>&1; then
        echo "  ✅ Build successful"
        
        # Commit any fixes
        git add . 2>/dev/null || true
        git commit -m "Auto-resolve conflicts and fix build" 2>/dev/null || true
        
        # Switch to main
        git checkout main
        
        # Merge the branch
        if git merge $branch_name --no-edit 2>/dev/null; then
            echo "  ✅ Successfully merged $branch_name"
            return 0
        else
            echo "  ❌ Merge failed for $branch_name"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    else
        echo "  ❌ Build failed for $branch_name, skipping"
        git checkout main
        return 1
    fi
}

# Get list of branches to merge
CURSOR_BRANCHES=$(git branch -r | grep -E "cursor/fix-errors-and-merge-to-main" | head -10)

echo "Found $(echo "$CURSOR_BRANCHES" | wc -l) branches to process"

SUCCESS_COUNT=0
FAILED_COUNT=0
FAILED_BRANCHES=()

for branch in $CURSOR_BRANCHES; do
    BRANCH_NAME=$(echo $branch | sed 's/origin\///')
    
    if merge_branch $BRANCH_NAME; then
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
        # Push changes every 3 successful merges
        if [ $((SUCCESS_COUNT % 3)) -eq 0 ]; then
            echo "  📤 Pushing changes to remote..."
            git push origin main || echo "  ⚠️ Push failed, continuing..."
        fi
    else
        FAILED_COUNT=$((FAILED_COUNT + 1))
        FAILED_BRANCHES+=("$BRANCH_NAME")
    fi
    
    echo ""
done

# Final push
echo "📤 Pushing final changes..."
git push origin main || echo "⚠️ Final push failed"

echo ""
echo "📊 Merge Summary:"
echo "  ✅ Successfully merged: $SUCCESS_COUNT branches"
echo "  ❌ Failed to merge: $FAILED_COUNT branches"

if [ ${#FAILED_BRANCHES[@]} -gt 0 ]; then
    echo "  Failed branches:"
    for branch in "${FAILED_BRANCHES[@]}"; do
        echo "    - $branch"
    done
fi

echo ""
echo "🎉 PR merge process completed!"