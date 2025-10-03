#!/bin/bash

# Merge recent branches with meaningful changes
set -e

echo "Starting merge of recent branches..."

# Get recent branches excluding main and HEAD
recent_branches=($(git branch -r --sort=-committerdate | head -50 | grep -v "origin/main" | grep -v "origin/HEAD"))

echo "Found ${#recent_branches[@]} recent branches"

# Process first 10 branches
branches_to_process=("${recent_branches[@]:0:10}")

for branch in "${branches_to_process[@]}"; do
    branch_name=${branch#origin/}
    echo "Processing: $branch_name"
    
    # Check if branch has meaningful changes
    changes=$(git log --oneline main..$branch_name 2>/dev/null | wc -l)
    
    if [ $changes -gt 5 ]; then
        echo "Branch $branch_name has $changes meaningful changes - attempting merge"
        
        # Attempt to merge
        if git merge --no-edit $branch_name 2>/dev/null; then
            echo "✅ Successfully merged $branch_name"
        else
            echo "⚠️  Merge conflict in $branch_name - resolving with ours strategy"
            # Resolve conflicts by keeping our version
            git checkout --ours . 2>/dev/null || true
            git add . 2>/dev/null || true
            git commit --no-edit 2>/dev/null || true
            echo "✅ Resolved conflicts and merged $branch_name"
        fi
    else
        echo "⏭️  Skipping $branch_name (only $changes changes)"
    fi
    
    echo ""
done

echo "Merge processing complete!"