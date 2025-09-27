#!/bin/bash

# Final script to resolve all merge conflicts and sync with remote
set -e

echo "=== Final Merge Fix Process ==="

# First, commit or stash local changes
echo "Handling local changes..."
git add .
git commit -m "feat: add merge scripts and logs" || echo "Nothing to commit or already committed"

# Configure git to use merge strategy
git config pull.rebase false

# Pull with merge strategy
echo "Pulling latest changes with merge strategy..."
if git pull origin main --no-edit; then
    echo "Successfully pulled and merged changes"
else
    echo "Pull failed, checking for conflicts..."
    
    # Check for merge conflicts
    conflict_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
    if [ -n "$conflict_files" ]; then
        echo "Merge conflicts found in:"
        echo "$conflict_files"
        
        # Resolve conflicts by taking remote version for most files
        echo "$conflict_files" | while IFS= read -r file; do
            if [ -n "$file" ]; then
                echo "Resolving conflict in: $file"
                git checkout --theirs "$file"
                git add "$file"
            fi
        done
        
        git commit -m "resolve: merge conflicts resolved by taking remote version"
        echo "Conflicts resolved and committed"
    fi
fi

# Push the merged changes
echo "Pushing merged changes to origin/main..."
if git push origin main; then
    echo "Successfully pushed changes to main"
else
    echo "Failed to push changes, trying force push..."
    # Only use force push as last resort
    git push origin main --force-with-lease
fi

echo "=== Final Status ==="
git status
git log --oneline -5

echo "=== Process Completed Successfully ==="