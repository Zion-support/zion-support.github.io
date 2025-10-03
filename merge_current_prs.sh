#!/bin/bash

# Script to merge the current open PRs
echo "🚀 Starting to merge open PRs..."

# List of PR branches from the open PRs
PR_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-027d"
    "cursor/fix-errors-and-merge-to-main-4b9e"
    "cursor/fix-errors-and-merge-to-main-6e50"
    "cursor/fix-errors-and-merge-to-main-a7dc"
    "cursor/fix-errors-and-merge-to-main-f28e"
    "cursor/fix-errors-and-merge-to-main-551d"
)

echo "📋 Found ${#PR_BRANCHES[@]} PR branches to merge"

# Ensure we're on main branch
git checkout main
git pull origin main

successful_merges=0
failed_merges=0

for branch in "${PR_BRANCHES[@]}"; do
    echo ""
    echo "🔄 Processing branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "   ⚠️  Branch $branch not found, skipping..."
        ((failed_merges++))
        continue
    fi
    
    # Create a temporary branch to work with
    temp_branch="temp-merge-$branch"
    
    # Checkout the PR branch
    if git checkout -b "$temp_branch" "origin/$branch"; then
        echo "   ✅ Checked out branch $branch"
        
        # Try to merge with main
        if git merge origin/main --no-edit; then
            echo "   ✅ Successfully merged with main"
            
            # Push the merged branch back
            if git push origin "$temp_branch:$branch"; then
                echo "   ✅ Pushed merged branch to origin"
                
                # Switch back to main and merge
                git checkout main
                if git merge "$temp_branch" --no-edit; then
                    echo "   ✅ Successfully merged into main"
                    
                    # Push main
                    if git push origin main; then
                        echo "   ✅ Pushed main to origin"
                        ((successful_merges++))
                    else
                        echo "   ❌ Failed to push main"
                        ((failed_merges++))
                    fi
                else
                    echo "   ❌ Failed to merge into main"
                    ((failed_merges++))
                fi
            else
                echo "   ❌ Failed to push merged branch"
                ((failed_merges++))
            fi
        else
            echo "   ⚠️  Merge conflicts detected, attempting to resolve..."
            
            # Check if there are any conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "   🔧 Resolving conflicts automatically..."
                
                # Try to resolve conflicts by taking main's version for common files
                git checkout --theirs . || true
                git add .
                
                # Commit the resolution
                if git commit --no-edit; then
                    echo "   ✅ Conflicts resolved"
                    
                    # Push the resolved branch
                    if git push origin "$temp_branch:$branch"; then
                        echo "   ✅ Pushed resolved branch"
                        
                        # Switch back to main and merge
                        git checkout main
                        if git merge "$temp_branch" --no-edit; then
                            echo "   ✅ Successfully merged resolved branch into main"
                            
                            # Push main
                            if git push origin main; then
                                echo "   ✅ Pushed main to origin"
                                ((successful_merges++))
                            else
                                echo "   ❌ Failed to push main"
                                ((failed_merges++))
                            fi
                        else
                            echo "   ❌ Failed to merge resolved branch into main"
                            ((failed_merges++))
                        fi
                    else
                        echo "   ❌ Failed to push resolved branch"
                        ((failed_merges++))
                    fi
                else
                    echo "   ❌ Failed to commit conflict resolution"
                    ((failed_merges++))
                fi
            else
                echo "   ❌ No conflicts detected but merge failed"
                ((failed_merges++))
            fi
        fi
        
        # Clean up temporary branch
        git checkout main
        git branch -D "$temp_branch" 2>/dev/null || true
        
    else
        echo "   ❌ Failed to checkout branch $branch"
        ((failed_merges++))
    fi
    
    echo "   ⏳ Waiting 2 seconds before next merge..."
    sleep 2
done

echo ""
echo "📊 Merge Summary:"
echo "   ✅ Successful: $successful_merges"
echo "   ❌ Failed: $failed_merges"
echo "   📈 Total: ${#PR_BRANCHES[@]}"

if [ $successful_merges -gt 0 ]; then
    echo ""
    echo "🎉 Successfully merged $successful_merges PRs!"
fi

if [ $failed_merges -gt 0 ]; then
    echo ""
    echo "⚠️  $failed_merges PRs could not be merged automatically."
fi

echo ""
echo "🏁 Merge process completed!"