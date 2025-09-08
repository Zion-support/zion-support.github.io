#!/bin/bash
set -e

echo "=== Starting PR merge process ==="

# Ensure we're on main and synced
git checkout main
git pull origin main

# Fetch all PR refs
git fetch origin "+refs/pull/*/head:refs/remotes/origin/pr/*"

# Get the latest 20 PR numbers (adjust as needed)
PRS=$(git for-each-ref --format='%(refname:short)' refs/remotes/origin/pr | awk -F/ '{print $3}' | sort -n | tail -n 20)

echo "Found PRs to merge: $PRS"

# Process each PR
for PR in $PRS; do
    echo "=== Processing PR #$PR ==="
    
    # Create merge branch
    git checkout -B "merge-pr-$PR" main
    
    # Try to merge with conflict resolution
    if git merge -m "Merge PR #$PR" -X theirs "origin/pr/$PR" 2>/dev/null; then
        echo "PR #$PR merged cleanly"
    else
        echo "Conflicts in PR #$PR, attempting auto-resolution..."
        
        # Auto-resolve common conflicts
        git checkout --ours -- package-lock.json 2>/dev/null || true
        git checkout --ours -- yarn.lock 2>/dev/null || true
        git checkout --theirs -- dist/** 2>/dev/null || true
        git checkout --theirs -- build/** 2>/dev/null || true
        
        git add -A
        
        if git commit -m "Auto-resolve conflicts for PR #$PR" 2>/dev/null; then
            echo "Auto-resolved conflicts for PR #$PR"
        else
            echo "Could not auto-resolve PR #$PR, skipping..."
            git checkout main
            git branch -D "merge-pr-$PR" 2>/dev/null || true
            continue
        fi
    fi
    
    # Merge into main
    git checkout main
    git merge --no-ff -m "Merge PR #$PR" "merge-pr-$PR"
    
    # Push to origin
    git push origin main
    
    # Clean up
    git branch -D "merge-pr-$PR"
    
    echo "Successfully merged and pushed PR #$PR"
done

echo "=== PR merge process completed ==="