#!/bin/bash

# Simple merge script
cd /workspace

echo "=== Starting Simple Merge Process ==="

# Check current status
echo "Current git status:"
git status --short

# Check for merge conflicts
echo "Checking for merge conflicts..."
if git diff --name-only --diff-filter=U | grep -q .; then
    echo "Found merge conflicts. Resolving..."
    git diff --name-only --diff-filter=U | while read file; do
        echo "Resolving conflict in $file"
        git checkout --ours "$file"
        git add "$file"
    done
    git commit -m "Resolve merge conflicts automatically"
fi

# Check for open PRs via GitHub API
echo "Checking for open PRs..."
curl -s -H "Accept: application/vnd.github.v3+json" \
     "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open" \
     | jq -r '.[] | "\(.number):\(.head.ref)"' > /tmp/open_prs.txt

if [ -s /tmp/open_prs.txt ]; then
    echo "Found open PRs:"
    cat /tmp/open_prs.txt
    
    # Process each PR
    while IFS=':' read -r pr_number branch_name; do
        echo "Processing PR #$pr_number from branch $branch_name"
        
        # Fetch and merge
        git fetch origin "$branch_name"
        if git merge "origin/$branch_name" --no-commit; then
            git commit -m "Merge PR #$pr_number from $branch_name"
            echo "Successfully merged PR #$pr_number"
        else
            echo "Merge conflict in PR #$pr_number. Resolving..."
            git diff --name-only --diff-filter=U | while read file; do
                git checkout --ours "$file"
                git add "$file"
            done
            git commit -m "Resolve conflicts and merge PR #$pr_number"
        fi
    done < /tmp/open_prs.txt
else
    echo "No open PRs found"
fi

# Push changes
echo "Pushing changes..."
git push origin main

echo "=== Merge Process Complete ==="