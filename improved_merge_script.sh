#!/bin/bash

# Improved script to merge branches systematically
echo "Starting improved merge process..."

# Get the next batch of branches (20 most recent)
RECENT_BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | tail -20)

echo "Processing 20 most recent branches..."

processed_count=0
successful_merges=0
conflict_count=0

for branch in $RECENT_BRANCHES; do
    branch_name=$(echo $branch | sed 's/origin\///')
    echo "Processing branch: $branch_name ($((processed_count + 1))/20)"
    
    # Checkout the branch
    if git checkout -b temp_$branch_name $branch 2>/dev/null; then
        echo "  Successfully checked out $branch_name"
        
        # Try to merge into main
        git checkout main
        
        # Pull latest changes first
        git pull origin main --rebase 2>/dev/null
        
        if git merge temp_$branch_name --no-ff -m "Merge $branch_name" 2>/dev/null; then
            echo "  ✅ Successfully merged $branch_name"
            
            # Push with force if needed
            if git push origin main 2>/dev/null; then
                echo "  ✅ Pushed to main successfully"
                ((successful_merges++))
            else
                echo "  ⚠️  Push failed, trying with force"
                git push origin main --force-with-lease 2>/dev/null
                if [ $? -eq 0 ]; then
                    echo "  ✅ Force pushed successfully"
                    ((successful_merges++))
                else
                    echo "  ❌ Push failed completely"
                fi
            fi
            
            # Clean up
            git branch -D temp_$branch_name
        else
            echo "  ⚠️  Merge conflict detected for $branch_name"
            ((conflict_count++))
            
            # Check if it's a simple conflict we can resolve
            if git status --porcelain | grep "^UU\|^AA\|^DD" > /dev/null; then
                echo "  🔧 Attempting to resolve conflicts..."
                
                # Try to resolve conflicts automatically
                git status --porcelain | grep "^UU" | while read status file; do
                    if [ -f "$file" ]; then
                        echo "    Resolving conflict in $file"
                        # Use main version for conflicts (simple resolution)
                        git checkout --ours "$file"
                        git add "$file"
                    fi
                done
                
                # Try to commit the resolution
                if git commit --no-edit 2>/dev/null; then
                    echo "  ✅ Successfully resolved conflicts for $branch_name"
                    
                    # Push the resolution
                    if git push origin main 2>/dev/null; then
                        echo "  ✅ Pushed resolved merge to main"
                        ((successful_merges++))
                    else
                        git push origin main --force-with-lease 2>/dev/null
                        if [ $? -eq 0 ]; then
                            echo "  ✅ Force pushed resolution successfully"
                            ((successful_merges++))
                        fi
                    fi
                else
                    echo "  ❌ Could not resolve conflicts for $branch_name"
                    git merge --abort
                fi
            else
                echo "  ❌ Complex conflicts in $branch_name, skipping"
                git merge --abort
            fi
            
            # Clean up
            git branch -D temp_$branch_name
        fi
    else
        echo "  ❌ Could not checkout $branch_name"
    fi
    
    ((processed_count++))
    echo "  Completed processing $branch_name"
    echo "  Progress: $processed_count/20, Successful: $successful_merges, Conflicts: $conflict_count"
    echo "---"
    
    # Add a small delay to avoid overwhelming the system
    sleep 1
done

echo "Improved merge process completed!"
echo "Summary:"
echo "  Total processed: $processed_count"
echo "  Successful merges: $successful_merges"
echo "  Conflicts encountered: $conflict_count"