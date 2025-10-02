#!/bin/bash

# Smart script to merge the most recent branches systematically
echo "Starting smart merge process..."

# Get the 10 most recent branches
RECENT_BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | tail -10)

echo "Processing 10 most recent branches..."

for branch in $RECENT_BRANCHES; do
    branch_name=$(echo $branch | sed 's/origin\///')
    echo "Processing branch: $branch_name"
    
    # Checkout the branch
    if git checkout -b temp_$branch_name $branch 2>/dev/null; then
        echo "  Successfully checked out $branch_name"
        
        # Try to merge into main
        git checkout main
        if git merge temp_$branch_name --no-ff -m "Merge $branch_name" 2>/dev/null; then
            echo "  ✅ Successfully merged $branch_name"
            git push origin main
            echo "  ✅ Pushed to main"
            
            # Clean up
            git branch -D temp_$branch_name
        else
            echo "  ⚠️  Merge conflict detected for $branch_name"
            
            # Check if it's a simple conflict we can resolve
            git status --porcelain | grep "^UU\|^AA\|^DD" > /dev/null
            if [ $? -eq 0 ]; then
                echo "  🔧 Attempting to resolve conflicts..."
                
                # Try to resolve common conflicts automatically
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
                    git push origin main
                    echo "  ✅ Pushed resolved merge to main"
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
    
    echo "  Completed processing $branch_name"
    echo "---"
done

echo "Smart merge process completed!"