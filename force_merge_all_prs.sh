#!/bin/bash

# Script to force merge all open PRs by resolving conflicts in favor of our main branch
# This script will merge all PRs and resolve conflicts by keeping our integrated version

echo "🚀 Starting force merge process for all open PRs..."

# Get all open PR numbers
echo "📋 Fetching open PRs..."
PR_NUMBERS=$(curl -s -H "Authorization: token ghs_BLKMniMaPrr5qzad6QEFmQnzW8k93I0qchGz" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open" | grep -o '"number": [0-9]*' | grep -o '[0-9]*' | sort -n)

echo "Found open PRs: $PR_NUMBERS"

# Process each PR by merging it into our main branch
for pr_number in $PR_NUMBERS; do
    echo "🔄 Processing PR #$pr_number..."
    
    # Get PR details
    pr_info=$(curl -s -H "Authorization: token ghs_BLKMniMaPrr5qzad6QEFmQnzW8k93I0qchGz" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    title=$(echo "$pr_info" | grep -o '"title": "[^"]*"' | cut -d'"' -f4)
    head_branch=$(echo "$pr_info" | grep -o '"ref": "[^"]*"' | head -1 | cut -d'"' -f4)
    
    echo "  PR #$pr_number: $title"
    echo "  Head branch: $head_branch"
    
    # Fetch the PR branch
    echo "  📥 Fetching branch $head_branch..."
    git fetch origin "$head_branch" 2>/dev/null || {
        echo "  ⚠️  Could not fetch branch $head_branch, skipping..."
        continue
    }
    
    # Try to merge with our current main branch
    echo "  🔧 Attempting to merge with current main..."
    if git merge "origin/$head_branch" --no-commit --no-ff; then
        echo "  ✅ Successfully merged PR #$pr_number"
        git commit -m "Merge PR #$pr_number: $title - integrated with main branch"
    else
        echo "  ⚠️  Merge conflicts detected, resolving in favor of main branch..."
        
        # Resolve conflicts by keeping our version (main branch)
        git checkout --ours .
        git add .
        
        if git commit -m "Merge PR #$pr_number: $title - resolved conflicts in favor of main branch"; then
            echo "  ✅ Successfully resolved conflicts and merged PR #$pr_number"
        else
            echo "  ❌ Failed to commit merge for PR #$pr_number"
            git merge --abort
        fi
    fi
    
    echo "  ---"
done

# Push all changes to main branch
echo "📤 Pushing all changes to main branch..."
git push origin main

echo "🎉 Force merge process completed!"