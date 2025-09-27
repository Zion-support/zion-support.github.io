#!/bin/bash

# Script to fix divergent branches and merge properly
set -e

echo "=== Fixing Divergent Branches ==="

# Configure git to use merge strategy for pulls
git config pull.rebase false

# Pull with merge strategy
echo "Pulling with merge strategy..."
if git pull origin main --no-edit; then
    echo "Successfully pulled and merged changes"
else
    echo "Pull failed, checking for conflicts..."
    
    # Check for merge conflicts
    if git diff --name-only --diff-filter=U > /tmp/conflicts.txt 2>/dev/null; then
        if [ -s /tmp/conflicts.txt ]; then
            echo "Merge conflicts found. Resolving..."
            
            # Resolve conflicts by taking remote version
            while IFS= read -r file; do
                echo "Resolving conflict in: $file"
                git checkout --theirs "$file"
                git add "$file"
            done < /tmp/conflicts.txt
            
            git commit -m "resolve: merge conflicts resolved by taking remote version"
            echo "Conflicts resolved and committed"
        fi
    fi
fi

# Now push the merged changes
echo "Pushing merged changes..."
if git push origin main; then
    echo "Successfully pushed changes to main"
else
    echo "Failed to push changes"
fi

echo "=== Process Completed ==="
git status