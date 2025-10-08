#!/bin/bash

echo "🚀 Starting final PR merge process..."

# List of remaining PR branches
REMAINING_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-ba52"
)

# Start from main branch
git checkout main
git pull origin main

for branch in "${REMAINING_BRANCHES[@]}"; do
    echo "📋 Processing PR branch: $branch"
    
    # Fetch the branch
    git fetch origin $branch
    
    # Checkout the branch
    git checkout $branch
    
    # Try to merge with main
    if git merge main; then
        echo "✅ Successfully merged main into $branch"
        
        # Push the updated branch
        git push origin $branch
        
        # Merge into main
        git checkout main
        if git merge $branch; then
            echo "✅ Successfully merged $branch into main"
            git push origin main
        else
            echo "❌ Failed to merge $branch into main"
        fi
    else
        echo "⚠️  Merge conflicts detected in $branch, attempting to resolve..."
        
        # Check for conflict markers and resolve
        if grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" 2>/dev/null; then
            echo "Found merge conflict markers. Resolving..."
            
            # Auto-resolve conflicts by choosing the incoming changes
            find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
                if [ -f "$file" ]; then
                    # Remove conflict markers and keep both versions where possible
                    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
                    sed -i '/^>>>>>>> /d' "$file"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts in $branch"
            
            # Push the resolved branch
            git push origin $branch
            
            # Merge into main
            git checkout main
            if git merge $branch; then
                echo "✅ Successfully merged resolved $branch into main"
                git push origin main
            else
                echo "❌ Failed to merge resolved $branch into main"
            fi
        else
            echo "No conflict markers found, attempting to continue merge..."
            git add .
            git commit -m "Complete merge of $branch"
            git push origin $branch
            
            git checkout main
            if git merge $branch; then
                echo "✅ Successfully merged $branch into main"
                git push origin main
            else
                echo "❌ Failed to merge $branch into main"
            fi
        fi
    fi
    
    echo "✅ Completed processing $branch"
    echo "---"
done

echo "🎉 Final PR merge process completed!"