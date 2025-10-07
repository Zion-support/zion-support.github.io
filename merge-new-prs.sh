#!/bin/bash

# Merge New PRs Script
echo "🚀 Merging New Open PRs"
echo "======================"

# Define the PR branches
PR_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-2656"
    "cursor/fix-errors-and-merge-to-main-02ec"
    "cursor/fix-errors-and-merge-to-main-03cf"
)

MERGE_COUNT=0
CONFLICT_COUNT=0

for BRANCH in "${PR_BRANCHES[@]}"; do
    echo ""
    echo "📦 Processing: $BRANCH"
    echo "-----------------------------------"
    
    # Fetch the branch
    git fetch origin "$BRANCH" || {
        echo "❌ Failed to fetch $BRANCH"
        continue
    }
    
    # Attempt merge
    if git merge "origin/$BRANCH" --no-edit -m "Merge PR branch $BRANCH into main"; then
        echo "✅ Successfully merged $BRANCH"
        ((MERGE_COUNT++))
    else
        echo "⚠️  Conflicts detected, resolving..."
        ((CONFLICT_COUNT++))
        
        # Get conflicted files
        CONFLICTED=$(git diff --name-only --diff-filter=U)
        
        if [ -z "$CONFLICTED" ]; then
            git commit --no-edit -m "Merge PR branch $BRANCH into main"
            ((MERGE_COUNT++))
        else
            echo "📝 Conflicted files:"
            echo "$CONFLICTED"
            
            # Resolve conflicts by accepting theirs
            while IFS= read -r file; do
                if [ -f "$file" ]; then
                    echo "  Resolving: $file"
                    git checkout --theirs "$file"
                    git add "$file"
                fi
            done <<< "$CONFLICTED"
            
            if git commit --no-edit -m "Merge PR branch $BRANCH into main (conflicts resolved)"; then
                echo "✅ Conflicts resolved for $BRANCH"
                ((MERGE_COUNT++))
            else
                echo "❌ Failed to resolve conflicts"
                git merge --abort
            fi
        fi
    fi
done

echo ""
echo "=========================================="
echo "📊 Summary: $MERGE_COUNT merged, $CONFLICT_COUNT had conflicts"
echo "=========================================="
