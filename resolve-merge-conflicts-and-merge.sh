#!/bin/bash

# Resolve merge conflicts and merge PRs into main
set -e

echo "=== Starting Merge Conflict Resolution and PR Merge Process ==="

# Check git status
echo "Current git status:"
git status --porcelain

# Check current branch
echo "Current branch:"
git branch --show-current

# Fetch latest changes
echo "Fetching latest changes from origin..."
git fetch origin

# Update main branch
echo "Updating main branch..."
git checkout main
git pull origin main

# List recent branches that might need merging
echo "Recent branches to check for merging:"
git branch -r --sort=-committerdate | head -10

# Check for merge conflicts in recent branches
RECENT_BRANCHES=(
    "origin/cursor/check-fix-push-and-merge-to-main-c42f"
    "origin/cursor/check-fix-push-and-merge-to-main-155b"
    "origin/cursor/check-fix-push-and-merge-to-main-11d2"
    "origin/cursor/check-fix-push-and-merge-to-main-696d"
    "origin/cursor/check-fix-push-and-merge-to-main-5d27"
)

echo "Checking for conflicts with recent branches..."

for branch in "${RECENT_BRANCHES[@]}"; do
    echo "=== Checking $branch ==="
    
    # Check if branch exists
    if git show-ref --verify --quiet "refs/remotes/$branch"; then
        # Check for conflicts
        CONFLICTS=$(git merge-tree $(git merge-base main "$branch") main "$branch" 2>/dev/null | grep -c "changed in both" || echo "0")
        
        if [ "$CONFLICTS" -gt 0 ]; then
            echo "Found $CONFLICTS conflicts in $branch"
            
            # Create local branch for merging
            LOCAL_BRANCH="merge-$(basename "$branch")"
            echo "Creating local branch $LOCAL_BRANCH"
            git checkout -b "$LOCAL_BRANCH" "$branch"
            
            # Try to merge main into the branch
            echo "Attempting to merge main into $LOCAL_BRANCH"
            if git merge main --no-edit; then
                echo "Successfully merged main into $LOCAL_BRANCH"
                
                # Switch back to main and merge
                git checkout main
                if git merge "$LOCAL_BRANCH" --no-edit; then
                    echo "Successfully merged $LOCAL_BRANCH into main"
                    echo "Pushing updated main to origin..."
                    git push origin main
                else
                    echo "Failed to merge $LOCAL_BRANCH into main"
                fi
                
                # Clean up local branch
                git branch -D "$LOCAL_BRANCH"
            else
                echo "Merge conflict in $LOCAL_BRANCH, resolving..."
                
                # Check for conflict files
                CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
                if [ -n "$CONFLICT_FILES" ]; then
                    echo "Conflict files: $CONFLICT_FILES"
                    
                    # Resolve conflicts automatically where possible
                    for file in $CONFLICT_FILES; do
                        echo "Resolving conflicts in $file"
                        
                        # For package files, use main version
                        if [[ "$file" == *"package"* ]] || [[ "$file" == *"yarn.lock"* ]] || [[ "$file" == *"package-lock.json"* ]]; then
                            echo "Using main version for $file"
                            git checkout --theirs "$file"
                            git add "$file"
                        fi
                        
                        # For markdown files, try to merge content
                        if [[ "$file" == *".md" ]]; then
                            echo "Merging markdown content for $file"
                            # Use a simple merge strategy for markdown
                            git checkout --ours "$file"
                            git add "$file"
                        fi
                    done
                    
                    # Complete the merge
                    if git commit --no-edit; then
                        echo "Successfully resolved conflicts in $LOCAL_BRANCH"
                        
                        # Switch back to main and merge
                        git checkout main
                        if git merge "$LOCAL_BRANCH" --no-edit; then
                            echo "Successfully merged $LOCAL_BRANCH into main"
                            echo "Pushing updated main to origin..."
                            git push origin main
                        else
                            echo "Failed to merge $LOCAL_BRANCH into main"
                        fi
                    else
                        echo "Failed to resolve conflicts in $LOCAL_BRANCH"
                        git merge --abort
                    fi
                fi
                
                # Clean up local branch
                git branch -D "$LOCAL_BRANCH" 2>/dev/null || true
            fi
        else
            echo "No conflicts found in $branch"
            
            # Try direct merge if no conflicts
            echo "Attempting direct merge of $branch into main"
            if git merge "$branch" --no-edit; then
                echo "Successfully merged $branch into main"
                echo "Pushing updated main to origin..."
                git push origin main
            else
                echo "Failed to merge $branch into main"
                git merge --abort
            fi
        fi
    else
        echo "Branch $branch does not exist"
    fi
done

# Final status check
echo "=== Final Status ==="
git status --porcelain
echo "Current branch:"
git branch --show-current

echo "=== Merge Conflict Resolution Complete ==="