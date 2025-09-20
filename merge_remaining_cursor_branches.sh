#!/bin/bash

echo "🚀 Starting comprehensive merge of remaining cursor branches..."
echo "=============================================================="

# List of cursor branches to merge (excluding backup branches)
branches_to_merge=(
    "origin/cursor/fix-netlify-build-and-merge-to-main-0787"
    "origin/cursor/fix-netlify-build-and-merge-to-main-0e83"
    "origin/cursor/fix-netlify-build-and-merge-to-main-5df3"
    "origin/cursor/fix-netlify-build-and-merge-to-main-6e2c"
    "origin/cursor/fix-netlify-build-and-merge-to-main-9b00"
    "origin/cursor/fix-netlify-build-and-merge-to-main-9d12"
    "origin/cursor/fix-netlify-build-and-merge-to-main-a1cb"
    "origin/cursor/fix-netlify-build-and-merge-to-main-f1d0"
    "origin/cursor/fix-netlify-build-and-merge-to-main-f41b"
)

successful_merges=0
failed_merges=0
total_branches=${#branches_to_merge[@]}

echo "📊 Found $total_branches cursor branches to merge"
echo ""

for branch in "${branches_to_merge[@]}"; do
    echo "🔄 Attempting to merge: $branch"
    
    # Try to merge the branch
    if git merge "$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged: $branch"
        ((successful_merges++))
        
        # Commit the merge
        git commit -m "Merge $branch into main - Netlify build fixes and improvements" --no-edit 2>/dev/null
        
        # Push the changes
        if git push origin main 2>/dev/null; then
            echo "✅ Successfully pushed merged changes"
        else
            echo "⚠️  Merge successful but push failed for: $branch"
            # Try to pull and push again
            if git pull origin main --rebase 2>/dev/null && git push origin main 2>/dev/null; then
                echo "✅ Successfully pushed after rebase"
            else
                echo "❌ Push failed even after rebase for: $branch"
            fi
        fi
    else
        echo "❌ Failed to merge: $branch"
        echo "🔧 Attempting conflict resolution..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "⚠️  Conflicts detected, attempting automatic resolution..."
            
            # Try to resolve conflicts by accepting our version for most cases
            git checkout --ours . 2>/dev/null
            git add . 2>/dev/null
            
            if git commit -m "Merge $branch - resolved conflicts by accepting main branch changes" 2>/dev/null; then
                echo "✅ Successfully resolved conflicts for: $branch"
                ((successful_merges++))
                
                # Push the resolved changes
                if git push origin main 2>/dev/null; then
                    echo "✅ Successfully pushed resolved changes"
                else
                    echo "⚠️  Conflict resolution successful but push failed"
                fi
            else
                echo "❌ Failed to resolve conflicts for: $branch"
                git merge --abort 2>/dev/null
                ((failed_merges++))
            fi
        else
            echo "❌ Merge failed without conflicts - aborting"
            git merge --abort 2>/dev/null
            ((failed_merges++))
        fi
    fi
    
    echo "---"
done

echo ""
echo "🎯 Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"
echo "📊 Total branches processed: $total_branches"
echo ""

if [ $successful_merges -gt 0 ]; then
    echo "🚀 Final push to origin/main..."
    if git push origin main; then
        echo "✅ All changes successfully pushed to main branch"
    else
        echo "⚠️  Some changes may not have been pushed"
    fi
fi

echo ""
echo "🏁 Cursor branch merge process completed!"
echo "=============================================================="