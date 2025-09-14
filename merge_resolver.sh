#!/bin/bash

echo "Starting merge conflict resolution..."

# Change to workspace directory
cd /workspace

# Check if we're in a merge state
if [ -f .git/MERGE_HEAD ]; then
    echo "In merge state, resolving conflicts..."
    
    # Find files with conflicts
    CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
    
    if [ -n "$CONFLICT_FILES" ]; then
        echo "Found conflict files: $CONFLICT_FILES"
        
        # Resolve conflicts by removing conflict markers
        for file in $CONFLICT_FILES; do
            echo "Resolving conflicts in $file..."
            sed -i '/^<<<<<<< HEAD$/d' "$file"
            sed -i '/^=======$/d' "$file"
            sed -i '/^>>>>>>> /d' "$file"
            git add "$file"
        done
        
        # Complete the merge
        git commit -m "Resolve merge conflicts"
    fi
else
    echo "Not in merge state, checking for other issues..."
    
    # Check for uncommitted changes
    if ! git diff --quiet; then
        echo "Found uncommitted changes, adding them..."
        git add .
        git commit -m "Auto-commit changes"
    fi
    
    # Try to pull latest changes
    git pull origin main --no-edit
fi

echo "Merge conflict resolution completed."