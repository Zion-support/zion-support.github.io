#!/bin/bash

# Smart merge script - only merge recent cursor branches (last 7 days)
# and focus on unique content changes

set -e

echo "=========================================="
echo "Smart Merge of Recent Cursor Branches"
echo "=========================================="

# Commit any pending changes first
git add .
git commit -m "chore: prepare for smart merge of cursor branches" || true

# Make sure we're on main
git checkout main
git pull origin main

echo "✓ Main branch updated"

# Get cursor branches from last 7 days
echo "Finding cursor branches from last 7 days..."
recent_branches=$(git for-each-ref --sort=-committerdate --format='%(refname:short) %(committerdate:iso8601)' refs/remotes/origin/cursor/ | \
  awk -v date="$(date -d '7 days ago' +%Y-%m-%d 2>/dev/null || date -v-7d +%Y-%m-%d)" '$2 > date {print $1}' | \
  sed 's/origin\///')

total=$(echo "$recent_branches" | wc -l)
echo "Found $total recent cursor branches"

if [ $total -eq 0 ]; then
    echo "No recent branches to merge"
    exit 0
fi

merged=0
skipped=0

# Merge recent branches
for branch in $recent_branches; do
    echo ""
    echo "Processing: $branch"
    
    # Check if branch exists
    if ! git rev-parse "origin/$branch" >/dev/null 2>&1; then
        echo "⊘ Branch not found, skipping"
        skipped=$((skipped + 1))
        continue
    fi
    
    # Try merge
    if git merge "origin/$branch" --no-edit -m "Merge $branch" 2>&1; then
        echo "✓ Merged $branch"
        merged=$((merged + 1))
    else
        # Handle conflicts
        if git status | grep -q "Unmerged\|both modified\|deleted by"; then
            echo "! Resolving conflicts for $branch..."
            
            # Keep our version for main content files
            for file in $(git diff --name-only --diff-filter=U); do
                if [[ "$file" == app/* ]] || [[ "$file" == components/* ]] || [[ "$file" == src/* ]]; then
                    git checkout --ours "$file" 2>/dev/null || git checkout --theirs "$file" 2>/dev/null || git rm "$file" 2>/dev/null || true
                else
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || git rm "$file" 2>/dev/null || true
                fi
            done
            
            git add .
            git commit --no-edit -m "Merge $branch (auto-resolved conflicts)" || true
            echo "✓ Merged $branch with conflict resolution"
            merged=$((merged + 1))
        else
            git merge --abort 2>/dev/null || true
            echo "⊘ Skipped $branch"
            skipped=$((skipped + 1))
        fi
    fi
done

echo ""
echo "=========================================="
echo "Merge Summary"
echo "=========================================="
echo "Recent branches found: $total"
echo "Successfully merged: $merged"
echo "Skipped: $skipped"
echo "=========================================="

# Test build
echo ""
echo "Testing build..."
if npm run build:no-check; then
    echo "✓ Build successful!"
    
    echo ""
    echo "Pushing to main..."
    git push origin main --force-with-lease
    echo "✓ Successfully pushed to main"
else
    echo "✗ Build failed"
    exit 1
fi

echo ""
echo "✓ Smart merge complete!"
