#!/bin/bash

# Merge all cursor/fix-errors-and-merge-to-main branches into main
# This script handles merge conflicts and batch merges

set -e

echo "🚀 Starting comprehensive merge of all cursor branches..."

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sed 's/origin\///' | head -50)

# Counter for tracking
MERGED_COUNT=0
CONFLICT_COUNT=0
SKIPPED_COUNT=0

echo "📊 Found $(echo "$CURSOR_BRANCHES" | wc -l) branches to process"

for branch in $CURSOR_BRANCHES; do
    echo "🔄 Processing branch: $branch"
    
    # Checkout the branch locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        git checkout $branch
        git pull origin $branch
    else
        git checkout -b $branch origin/$branch
    fi
    
    # Switch back to main
    git checkout main
    
    # Try to merge
    if git merge --no-ff $branch -m "Merge $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        MERGED_COUNT=$((MERGED_COUNT + 1))
        
        # Push to origin
        git push origin main
    else
        echo "⚠️  Merge conflict in $branch, resolving..."
        CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        
        # Try to resolve conflicts automatically
        if git status --porcelain | grep -q "^UU"; then
            echo "🔧 Attempting to resolve conflicts in $branch"
            
            # For conflicted files, prefer main branch version for common files
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
            
            for file in $CONFLICTED_FILES; do
                echo "  Resolving conflict in: $file"
                
                # For most files, take the version from main
                if [[ "$file" == *".tsx" ]] || [[ "$file" == *".ts" ]] || [[ "$file" == *".js" ]] || [[ "$file" == *".json" ]]; then
                    git checkout --ours "$file"
                else
                    git checkout --theirs "$file"
                fi
            done
            
            # Add resolved files and commit
            git add .
            if git commit --no-edit; then
                echo "✅ Resolved conflicts and merged $branch"
                MERGED_COUNT=$((MERGED_COUNT + 1))
                git push origin main
            else
                echo "❌ Failed to resolve conflicts in $branch"
                git merge --abort
                SKIPPED_COUNT=$((SKIPPED_COUNT + 1))
            fi
        else
            echo "❌ Unresolvable conflicts in $branch, skipping"
            git merge --abort
            SKIPPED_COUNT=$((SKIPPED_COUNT + 1))
        fi
    fi
    
    # Clean up local branch
    git branch -D $branch 2>/dev/null || true
    
    echo "📈 Progress: $MERGED_COUNT merged, $CONFLICT_COUNT conflicts, $SKIPPED_COUNT skipped"
    echo "---"
done

echo "🎉 Merge complete!"
echo "📊 Final stats:"
echo "   ✅ Merged: $MERGED_COUNT"
echo "   ⚠️  Conflicts: $CONFLICT_COUNT" 
echo "   ❌ Skipped: $SKIPPED_COUNT"
echo "   📝 Total processed: $((MERGED_COUNT + CONFLICT_COUNT + SKIPPED_COUNT))"