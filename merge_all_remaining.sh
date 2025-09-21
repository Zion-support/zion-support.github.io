#!/bin/bash

# Script to merge all remaining branches that are ahead of main
set -e

echo "Finding all branches that are ahead of main..."

# Get all branches that are ahead of main
branches=()
while IFS= read -r branch; do
    if [[ "$branch" != "origin/main" && "$branch" != "origin/HEAD" ]]; then
        if ! git merge-base --is-ancestor origin/main "$branch" 2>/dev/null; then
            branches+=("$branch")
        fi
    fi
done < <(git for-each-ref --format='%(refname:short)' refs/remotes/origin)

echo "Found ${#branches[@]} branches ahead of main"

# Process branches in batches of 5
batch_size=5
for ((i=0; i<${#branches[@]}; i+=batch_size)); do
    echo "Processing batch $((i/batch_size + 1))..."
    
    for ((j=i; j<i+batch_size && j<${#branches[@]}; j++)); do
        branch="${branches[j]}"
        echo "Processing branch: $branch"
        
        # Extract branch name for local branch
        local_branch=$(echo "$branch" | sed 's/origin\///' | sed 's/\//-/g' | sed 's/[^a-zA-Z0-9-]/-/g')
        
        # Create and checkout local branch
        git checkout -b "merge-$local_branch" "$branch" || {
            echo "Failed to checkout $branch, skipping..."
            continue
        }
        
        # Merge main into the branch
        git merge origin/main --no-ff -m "Merge main into $local_branch" || {
            echo "Merge conflict in $branch, resolving automatically..."
            # Try to resolve conflicts automatically
            git status --porcelain | grep "^UU" | while read file; do
                echo "Resolving conflict in $file"
                # Use main version for conflicts
                git checkout --theirs "$file"
                git add "$file"
            done
            git commit --no-edit || {
                echo "Failed to resolve conflicts in $branch, skipping..."
                git checkout main
                git branch -D "merge-$local_branch" 2>/dev/null || true
                continue
            }
        }
        
        # Switch back to main and merge
        git checkout main
        git merge "merge-$local_branch" --no-ff -m "Merge $local_branch into main" || {
            echo "Failed to merge $local_branch into main, skipping..."
            git branch -D "merge-$local_branch" 2>/dev/null || true
            continue
        }
        
        # Clean up
        git branch -D "merge-$local_branch" 2>/dev/null || true
        echo "Successfully merged $branch into main"
    done
    
    # Push changes after each batch
    echo "Pushing changes after batch $((i/batch_size + 1))..."
    git push origin main || {
        echo "Failed to push, pulling latest changes..."
        git pull origin main --rebase
        git push origin main
    }
done

echo "All remaining branches merge process completed!"