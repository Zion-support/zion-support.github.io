#!/bin/bash

# Quick PR resolution script
echo "Starting quick PR resolution..."

# Basic git operations with timeouts
timeout 10 git checkout main || echo "Already on main"
timeout 30 git pull origin main || echo "Pull failed, continuing"

# Get the first few PR numbers
PR_NUMBERS="13778 13779 13780 13781 13782"

for pr in $PR_NUMBERS; do
    echo "Processing PR #$pr..."
    
    # Try to fetch and merge with timeout
    timeout 60 git fetch origin pull/$pr/head:pr-$pr 2>/dev/null && \
    timeout 60 git merge pr-$pr --no-ff -m "Merge PR #$pr" 2>/dev/null && \
    echo "Merged PR #$pr" && \
    git branch -D pr-$pr 2>/dev/null || \
    echo "Failed to merge PR #$pr"
done

echo "Quick resolution completed"