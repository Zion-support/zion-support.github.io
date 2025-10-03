#!/bin/bash

# Comprehensive script to merge all cursor branches into main
echo "🚀 Starting comprehensive cursor branch merge process..."

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/fix-errors-and-merge-to-main" | head -30)

echo "Found $(echo "$CURSOR_BRANCHES" | wc -l) cursor branches to process"

# Ensure we're on main and it's up to date
git checkout main
git pull origin main --no-rebase

successful_merges=0
failed_merges=0
conflict_resolutions=0

# Process branches in batches
echo "$CURSOR_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    branch_name=$(echo "$branch" | sed 's/origin\///')
    echo ""
    echo "🔄 Processing branch: $branch_name"
    
    # Create a temporary branch to work with
    temp_branch="temp-merge-$branch_name"
    
    # Checkout the cursor branch
    if git checkout -b "$temp_branch" "$branch" 2>/dev/null; then
        echo "   ✅ Checked out branch $branch_name"
        
        # Try to merge with main
        if git merge main --no-edit 2>/dev/null; then
            echo "   ✅ Successfully merged with main"
            
            # Switch back to main and merge
            git checkout main
            if git merge "$temp_branch" --no-edit 2>/dev/null; then
                echo "   ✅ Successfully merged into main"
                ((successful_merges++))
            else
                echo "   ❌ Failed to merge into main"
                ((failed_merges++))
            fi
        else
            echo "   🔧 Merge conflicts detected, attempting to resolve..."
            
            # Check if there are any conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "   🔧 Resolving conflicts automatically..."
                
                # Try to resolve conflicts by taking main's version for common files
                git checkout --theirs . 2>/dev/null || git checkout --ours . 2>/dev/null
                git add . 2>/dev/null
                
                # Commit the resolution
                if git commit --no-edit 2>/dev/null; then
                    echo "   ✅ Conflicts resolved"
                    ((conflict_resolutions++))
                    
                    # Switch back to main and merge
                    git checkout main
                    if git merge "$temp_branch" --no-edit 2>/dev/null; then
                        echo "   ✅ Successfully merged resolved branch into main"
                        ((successful_merges++))
                    else
                        echo "   ❌ Failed to merge resolved branch into main"
                        ((failed_merges++))
                    fi
                else
                    echo "   ❌ Failed to commit conflict resolution"
                    git merge --abort 2>/dev/null
                    ((failed_merges++))
                fi
            else
                echo "   ❌ No conflicts detected but merge failed"
                git merge --abort 2>/dev/null
                ((failed_merges++))
            fi
        fi
        
        # Clean up temporary branch
        git checkout main
        git branch -D "$temp_branch" 2>/dev/null || true
        
    else
        echo "   ❌ Failed to checkout branch $branch_name"
        ((failed_merges++))
    fi
    
    # Push every 10 merges to avoid overwhelming the remote
    if [ $((successful_merges % 10)) -eq 0 ] && [ $successful_merges -gt 0 ]; then
        echo "   📤 Pushing changes..."
        git push origin main 2>/dev/null
        sleep 1
    fi
done

# Final push
echo ""
echo "📤 Final push to origin..."
git push origin main

echo ""
echo "📊 Merge Summary:"
echo "   ✅ Successful merges: $successful_merges"
echo "   ❌ Failed merges: $failed_merges"
echo "   🔧 Conflicts resolved: $conflict_resolutions"
echo "   📈 Total processed: $(echo "$CURSOR_BRANCHES" | wc -l)"

if [ $successful_merges -gt 0 ]; then
    echo ""
    echo "🎉 Successfully merged $successful_merges branches!"
fi

if [ $failed_merges -gt 0 ]; then
    echo ""
    echo "⚠️  $failed_merges branches could not be merged automatically."
fi

echo ""
echo "🏁 Comprehensive merge process completed!"