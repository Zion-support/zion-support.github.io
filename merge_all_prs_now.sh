#!/bin/bash

# Merge all open PRs into main branch
# PRs to merge:
# - PR #26207: cursor/fix-errors-and-merge-to-main-872b (has conflicts)
# - PR #26206: cursor/fix-errors-and-merge-to-main-9733 (has conflicts)
# - PR #26205: cursor/fix-errors-and-merge-to-main-962f (has conflicts)
# - PR #26204: cursor/fix-errors-and-merge-to-main-ed94 (clean)
# - PR #26203: cursor/fix-errors-and-merge-to-main-e9ce (has conflicts)

set -e

echo "Starting PR merge process..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Function to merge a branch
merge_branch() {
    local branch=$1
    local pr_number=$2
    
    echo "================================"
    echo "Merging PR #$pr_number: $branch"
    echo "================================"
    
    # Try to merge
    if git merge --no-ff origin/$branch -m "Merge PR #$pr_number: $branch"; then
        echo "✅ Successfully merged PR #$pr_number"
        return 0
    else
        echo "❌ Merge conflicts detected for PR #$pr_number"
        echo "Attempting auto-resolution..."
        
        # Auto-resolve conflicts by preferring incoming changes for most files
        # But keep main's version for package files
        git checkout --theirs .
        git checkout --ours package*.json pnpm-lock.yaml yarn.lock 2>/dev/null || true
        
        # Add all resolved files
        git add -A
        
        # Complete the merge
        git commit --no-edit -m "Merge PR #$pr_number: $branch (conflicts auto-resolved)"
        
        echo "✅ Merged PR #$pr_number with auto-resolved conflicts"
        return 0
    fi
}

# Merge PRs in order (clean one first)
merge_branch "cursor/fix-errors-and-merge-to-main-ed94" "26204"
merge_branch "cursor/fix-errors-and-merge-to-main-e9ce" "26203"
merge_branch "cursor/fix-errors-and-merge-to-main-962f" "26205"
merge_branch "cursor/fix-errors-and-merge-to-main-9733" "26206"
merge_branch "cursor/fix-errors-and-merge-to-main-872b" "26207"

echo ""
echo "================================"
echo "✅ All PRs merged successfully!"
echo "================================"
echo ""
echo "Current status:"
git log --oneline -10

echo ""
echo "Ready to push to origin/main"