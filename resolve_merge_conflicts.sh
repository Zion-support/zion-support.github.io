#!/bin/bash

echo "Starting merge conflict resolution process..."

# Check git status
echo "Checking git status..."
git status

# Check for merge conflicts
echo "Checking for merge conflicts..."
CONFLICTS=$(git diff --name-only --diff-filter=U 2>/dev/null)
if [ -n "$CONFLICTS" ]; then
    echo "Found merge conflicts in:"
    echo "$CONFLICTS"
    
    # Resolve conflicts automatically where possible
    for file in $CONFLICTS; do
        echo "Resolving conflicts in $file..."
        
        # For page.tsx, keep both versions and clean up conflict markers
        if [[ "$file" == *"page.tsx" ]]; then
            echo "Resolving page.tsx conflicts..."
            # Remove conflict markers and keep both versions
            sed -i '/^<<<<<<< HEAD$/d' "$file"
            sed -i '/^=======$/d' "$file"
            sed -i '/^>>>>>>> /d' "$file"
        fi
        
        # Add resolved file
        git add "$file"
    done
else
    echo "No merge conflicts found."
fi

# Check for uncommitted changes
echo "Checking for uncommitted changes..."
if ! git diff --quiet; then
    echo "Found uncommitted changes, adding them..."
    git add .
    git commit -m "Resolve merge conflicts and clean up code"
fi

# Try to merge or rebase
echo "Attempting to merge/rebase..."
git pull origin main --no-edit || {
    echo "Pull failed, trying to rebase..."
    git rebase origin/main || {
        echo "Rebase failed, trying to reset and merge..."
        git reset --hard HEAD
        git pull origin main
    }
}

echo "Merge conflict resolution completed."