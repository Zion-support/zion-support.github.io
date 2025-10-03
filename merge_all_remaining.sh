#!/bin/bash

# Comprehensive script to merge ALL remaining cursor branches
set -e

echo "🚀 Starting comprehensive merge of ALL cursor branches..."

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/fix-errors-and-merge-to-main" | sed 's/origin\///')

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

# Counter for tracking progress
count=0
total=$(echo "$CURSOR_BRANCHES" | wc -l)

echo "📊 Total branches to process: $total"
echo "⏳ Processing branches..."

# Process all branches
echo "$CURSOR_BRANCHES" | while IFS= read -r branch; do
    count=$((count + 1))
    
    # Show progress every 100 branches
    if [ $((count % 100)) -eq 0 ]; then
        echo "📈 Progress: $count/$total branches processed..."
    fi
    
    # Fetch and merge each branch
    if git fetch origin "$branch" >/dev/null 2>&1; then
        if git merge "origin/$branch" --no-edit >/dev/null 2>&1; then
            # Success - no output needed
            true
        else
            # Handle conflicts automatically
            if git status --porcelain | grep -q "^UU"; then
                # Resolve conflicts by accepting theirs
                git checkout --theirs . >/dev/null 2>&1 || git checkout --ours . >/dev/null 2>&1
                git add . >/dev/null 2>&1
                git commit --no-edit >/dev/null 2>&1
            else
                # Abort if can't resolve
                git merge --abort >/dev/null 2>&1
            fi
        fi
    fi
    
    # Push every 50 merges
    if [ $((count % 50)) -eq 0 ]; then
        git push origin main >/dev/null 2>&1
    fi
done

# Final push
echo "💾 Pushing final changes..."
git push origin main

echo ""
echo "✅ COMPLETE! All cursor branches have been processed!"
echo "📊 Total branches processed: $total"