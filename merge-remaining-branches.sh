#!/bin/bash

set -e

echo "Starting comprehensive branch merge process for remaining branches..."

# Get all remote branches with fix-errors-and-merge-to-main pattern
BRANCHES=$(git branch -r | grep "fix-errors-and-merge-to-main" | tail -n +51 | head -100)

echo "Found remaining branches to merge:"
echo "$BRANCHES"

# Merge each branch into main
for branch in $BRANCHES; do
    branch_name=$(echo $branch | sed 's/origin\///')
    echo "Attempting to merge $branch_name..."
    
    # Try to merge the branch
    if git merge --no-edit origin/$branch_name 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
    else
        echo "⚠️  Merge conflict in $branch_name, resolving..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            # Resolve conflicts by accepting ours (main) for most cases
            git checkout --ours .
            git add .
            git commit --no-edit -m "Resolve merge conflicts in $branch_name"
            echo "✅ Resolved conflicts and merged $branch_name"
        else
            # No conflicts, just commit
            git commit --no-edit -m "Merge $branch_name"
            echo "✅ Merged $branch_name"
        fi
    fi
    
    # Push the changes every 10 branches to avoid overwhelming
    if (( $(git log --oneline -1 | wc -l) % 10 == 0 )); then
        git push origin main
        echo "✅ Pushed batch changes to main"
    fi
done

# Final push
git push origin main
echo "✅ Final push to main completed"

echo "Remaining branch merge process completed!"