#!/bin/bash

echo "=== Final Git Completion ==="

# Try to complete any pending operations
if [ -d ".git/rebase-merge" ]; then
    echo "Completing rebase..."
    git add . 2>/dev/null || true
    git rebase --continue 2>/dev/null || echo "Rebase may already be complete"
fi

# Push main
echo "Pushing main branch..."
git push origin main 2>/dev/null || echo "Push may have failed or already complete"

# Check current branch
echo "Current branch:"
git branch --show-current

echo "=== Completion Attempted ==="