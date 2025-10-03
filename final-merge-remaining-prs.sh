#!/bin/bash
set -e

echo "=========================================="
echo "Final PR Merge - Remaining 18 Branches"
echo "=========================================="

# Ensure on main and up to date
git checkout main
git pull origin main

# Get the 18 unmerged branches
BRANCHES=$(git branch -r --no-merged main | grep -E "origin/(cursor|codex)" | sed 's/origin\///' | tr -d ' ')

echo "Found $(echo "$BRANCHES" | wc -l) branches to merge"
echo ""

MERGED=0
CONFLICTS=0
FAILED=0

for branch in $BRANCHES; do
    echo "Processing: $branch"
    
    # Fetch the branch
    if ! git fetch origin "$branch:$branch" 2>/dev/null; then
        echo "  ✗ Failed to fetch"
        FAILED=$((FAILED + 1))
        continue
    fi
    
    # Try to merge
    if git merge "$branch" --no-edit -m "Merge $branch into main" 2>&1; then
        echo "  ✓ Merged successfully"
        MERGED=$((MERGED + 1))
        git branch -d "$branch" 2>/dev/null || true
    else
        # Handle conflicts
        if git status | grep -q "Unmerged paths\|both modified"; then
            echo "  ⚠ Resolving conflicts..."
            
            # Auto-resolve conflicts (accept theirs/incoming)
            git status --short | grep "^UU\|^AA\|^DD\|^DU\|^UD" | awk '{print $2}' | while read file; do
                if [ -f "$file" ]; then
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                else
                    git rm "$file" 2>/dev/null || git add "$file" 2>/dev/null || true
                fi
            done
            
            # Complete merge
            if git commit --no-edit -m "Merge $branch (auto-resolved)" 2>/dev/null; then
                echo "  ✓ Conflicts resolved and merged"
                CONFLICTS=$((CONFLICTS + 1))
                git branch -d "$branch" 2>/dev/null || true
            else
                git merge --abort 2>/dev/null
                echo "  ✗ Could not resolve conflicts"
                FAILED=$((FAILED + 1))
            fi
        else
            git merge --abort 2>/dev/null
            echo "  ✗ Merge failed"
            FAILED=$((FAILED + 1))
        fi
    fi
    
    echo ""
done

# Push changes
echo "Pushing changes to remote..."
git push origin main && echo "✓ Pushed successfully" || echo "✗ Push failed"

# Summary
echo ""
echo "=========================================="
echo "FINAL MERGE SUMMARY"
echo "=========================================="
echo "Successfully merged: $MERGED"
echo "Conflicts resolved: $CONFLICTS"
echo "Failed: $FAILED"
echo "Total success: $((MERGED + CONFLICTS))"
echo "=========================================="
