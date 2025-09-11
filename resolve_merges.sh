#!/bin/bash

echo "Starting merge conflict resolution..."

# Abort any ongoing merge
git merge --abort 2>/dev/null || true

# Reset to clean state
git reset --hard HEAD

# Pull latest changes
git pull origin main

# Find branches with commits ahead of main
echo "Finding branches to merge..."
git fetch origin

# Get branches that have commits ahead of main
for branch in $(git branch -r | grep -v "origin/main" | head -10); do
    branch_name=$(echo $branch | sed 's/origin\///')
    echo "Checking branch: $branch_name"
    
    # Check if branch has commits ahead of main
    commits_ahead=$(git rev-list --count origin/main..$branch 2>/dev/null || echo "0")
    
    if [ "$commits_ahead" -gt 0 ]; then
        echo "Branch $branch_name has $commits_ahead commits ahead of main"
        
        # Try to merge
        if git merge $branch --no-edit; then
            echo "Successfully merged $branch_name"
        else
            echo "Merge conflict in $branch_name, resolving..."
            
            # Resolve conflicts by keeping HEAD version
            git checkout --ours .
            git add .
            git commit -m "Resolve conflicts from $branch_name"
            
            echo "Conflicts resolved for $branch_name"
        fi
    fi
done

# Push all changes
git push origin main

echo "Merge resolution completed!"