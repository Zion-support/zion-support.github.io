#!/bin/bash

# Script to resolve conflicts and merge remaining PRs
PRS=(24647 24646 24645 24643 24642 24641)

echo "Starting PR resolution process..."

for pr in "${PRS[@]}"; do
    echo "Processing PR #$pr..."
    
    # Switch to main and fetch PR
    git checkout main
    git fetch origin pull/$pr/head:pr-$pr
    
    # Checkout PR branch and merge with main
    git checkout pr-$pr
    git merge main
    
    # Check if merge was successful
    if [ $? -eq 0 ]; then
        echo "✅ PR #$pr merged successfully"
        git push origin pr-$pr
        echo "✅ PR #$pr pushed to remote"
    else
        echo "❌ Merge conflict in PR #$pr"
        git status
        # You might want to handle conflicts here or skip
        continue
    fi
done

echo "All PRs processed!"