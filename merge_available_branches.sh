#!/bin/bash

echo "🚀 Starting merge of available branches..."

# Get list of available cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | head -50)

MERGED_COUNT=0
FAILED_COUNT=0

for branch in $CURSOR_BRANCHES; do
    echo "🔄 Attempting to merge: $branch"
    
    # Extract branch name without origin/
    BRANCH_NAME=${branch#origin/}
    
    # Try to merge the branch
    if git merge "$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged: $BRANCH_NAME"
        ((MERGED_COUNT++))
    else
        echo "⚠️  Merge conflict or failed for: $BRANCH_NAME"
        # Try to resolve conflicts automatically
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Attempting to resolve conflicts for: $BRANCH_NAME"
            CONFLICTED_FILES=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)
            
            for file in $CONFLICTED_FILES; do
                # Remove build artifacts and generated files
                if [[ "$file" == *"tsconfig.tsbuildinfo"* ]] || [[ "$file" == *".next/"* ]] || [[ "$file" == *"dist/"* ]] || [[ "$file" == *"node_modules/"* ]]; then
                    git rm "$file" 2>/dev/null || rm -f "$file"
                else
                    # Try to auto-resolve by taking the main branch version
                    git checkout --ours "$file" 2>/dev/null || true
                fi
            done
            
            if git add . && git commit --no-edit 2>/dev/null; then
                echo "✅ Resolved conflicts for: $BRANCH_NAME"
                ((MERGED_COUNT++))
            else
                echo "❌ Failed to resolve conflicts for: $BRANCH_NAME"
                git merge --abort 2>/dev/null
                ((FAILED_COUNT++))
            fi
        else
            git merge --abort 2>/dev/null
            ((FAILED_COUNT++))
        fi
    fi
done

echo "📊 Merge Summary:"
echo "   ✅ Successfully merged: $MERGED_COUNT branches"
echo "   ❌ Failed to merge: $FAILED_COUNT branches"

# Push changes
echo "⬆️ Pushing changes to origin/main..."
git push origin main

echo "🎉 Branch merge process completed!"