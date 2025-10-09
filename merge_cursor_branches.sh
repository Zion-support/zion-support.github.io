#!/bin/bash

echo "Starting merge process for cursor branches..."

# List of cursor branches to merge
branches=(
    "origin/cursor/analyze-improve-and-deploy-application-fd10"
    "origin/cursor/analyze-improve-and-deploy-application-fd66"
    "origin/cursor/analyze-improve-and-deploy-application-fe44"
)

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo "Attempting to merge $branch..."
    
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch"
        echo "Resolving conflicts automatically..."
        
        # Check for conflicted files
        conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | wc -l)
        if [ "$conflicted_files" -gt 0 ]; then
            echo "Found $conflicted_files conflicted files"
            
            # Try to resolve conflicts by accepting incoming changes for most files
            # but keep our version for critical files
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read line; do
                file=$(echo $line | cut -c4-)
                echo "Resolving conflict in: $file"
                
                # For critical files, keep our version
                if [[ "$file" == "app/components/Navigation.tsx" ]] || 
                   [[ "$file" == "app/components/Footer.tsx" ]] ||
                   [[ "$file" == "app/page.tsx" ]] ||
                   [[ "$file" == "app/layout.tsx" ]]; then
                    git checkout --ours "$file"
                else
                    # For other files, accept incoming changes
                    git checkout --theirs "$file"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts in $branch - integrated improvements"
            echo "✅ Resolved conflicts and merged $branch"
        else
            echo "No conflicts found, proceeding with merge"
            git add .
            git commit -m "Merge $branch - integrated improvements"
        fi
        return 0
    fi
}

# Merge each branch
for branch in "${branches[@]}"; do
    merge_branch "$branch"
    echo "---"
done

echo "Merge process completed!"
git log --oneline -5
