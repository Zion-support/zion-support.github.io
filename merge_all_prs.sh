#!/bin/bash
set -e

echo "=== Starting PR Merge Process ==="

# Function to check if GitHub CLI is available
check_gh_cli() {
    if ! command -v gh &> /dev/null; then
        echo "GitHub CLI not found. Installing..."
        return 1
    fi
    return 0
}

# Get list of open PRs
echo "Fetching open PRs..."
gh pr list --state open --json number,headRefName,title > /tmp/open_prs.json || true

# Display open PRs
echo "Open PRs:"
cat /tmp/open_prs.json

# Checkout main branch
echo "Checking out main branch..."
git checkout main

# Pull latest changes
echo "Pulling latest changes..."
git pull origin main

# Get all branches to merge
branches_to_merge=(
    "cursor/create-and-deploy-new-content-43b1"
)

# Try to add any other cursor branches
git fetch --all
git branch -r | grep "origin/cursor/" | sed 's|origin/||' | while read branch; do
    if [[ ! " ${branches_to_merge[@]} " =~ " ${branch} " ]]; then
        branches_to_merge+=("$branch")
    fi
done

# Merge each branch
for branch in "${branches_to_merge[@]}"; do
    echo "=== Merging branch: $branch ==="
    
    # Try to merge
    if git merge "origin/$branch" --no-edit; then
        echo "✓ Successfully merged $branch"
    else
        echo "! Merge conflict detected in $branch"
        echo "Resolving conflicts automatically..."
        
        # Accept incoming changes for all conflicts
        git status --porcelain | grep '^UU' | cut -d' ' -f2 | while read file; do
            echo "Resolving conflict in: $file"
            git checkout --theirs "$file"
            git add "$file"
        done
        
        # Accept incoming changes for deleted files
        git status --porcelain | grep '^UD' | cut -d' ' -f2 | while read file; do
            echo "Accepting deletion of: $file"
            git rm "$file"
        done
        
        # Accept incoming changes for added files
        git status --porcelain | grep '^AU' | cut -d' ' -f2 | while read file; do
            echo "Accepting addition of: $file"
            git add "$file"
        done
        
        # Commit the merge
        git commit -m "Merge branch '$branch' - resolved conflicts automatically"
        echo "✓ Conflicts resolved and committed for $branch"
    fi
done

# Push all changes
echo "=== Pushing to main branch ==="
git push origin main

echo "=== PR Merge Process Complete ==="
