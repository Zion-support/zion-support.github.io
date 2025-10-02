#!/bin/bash
set -e

echo "=== Starting Git Operations ==="

# Check current status
echo "Current git status:"
git status --short

# Check if we're in a rebase
if [ -f ".git/rebase-merge/head-name" ]; then
    echo "In rebase state, completing rebase..."
    git add jest.config.cjs
    git rebase --continue
    echo "Rebase completed"
else
    echo "Not in rebase state"
fi

# Push main branch
echo "Pushing main branch..."
git push origin main

# Check for open PRs using GitHub CLI if available
if command -v gh &> /dev/null; then
    echo "Checking for open PRs..."
    gh pr list --state open --repo Zion-Holdings/zion.app
else
    echo "GitHub CLI not available, checking via API..."
    curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open" | jq -r '.[].title' 2>/dev/null || echo "Could not fetch PRs"
fi

echo "=== Git Operations Complete ==="