#!/bin/bash

# Batch merge script for open PRs
set -e

echo "Starting batch merge of open PRs..."

# Get all branches with different commits than main
MAIN_COMMIT=$(git rev-parse main)
echo "Main commit: $MAIN_COMMIT"

# Find branches that are different from main
DIFFERENT_BRANCHES=()
while IFS= read -r branch; do
    if [[ "$branch" =~ ^origin/ ]]; then
        BRANCH_COMMIT=$(git rev-parse "$branch" 2>/dev/null || echo "")
        if [ "$BRANCH_COMMIT" != "" ] && [ "$BRANCH_COMMIT" != "$MAIN_COMMIT" ]; then
            DIFFERENT_BRANCHES+=("$branch")
        fi
    fi
done < <(git branch -r | grep -v -E "(main|HEAD)" | head -50)

echo "Found ${#DIFFERENT_BRANCHES[@]} branches with different commits"

# Merge branches in batches
BATCH_SIZE=10
successful=0
failed=0

for i in "${!DIFFERENT_BRANCHES[@]}"; do
    branch="${DIFFERENT_BRANCHES[$i]}"
    branch_name=${branch#origin/}
    
    echo "[$((i+1))/${#DIFFERENT_BRANCHES[@]}] Processing $branch_name..."
    
    # Create and merge branch
    if git checkout -b "temp-merge-$i" "$branch" 2>/dev/null; then
        git checkout main
        
        if git merge "temp-merge-$i" --no-ff -m "Merge $branch_name: automated batch merge" 2>/dev/null; then
            echo "✓ Merged $branch_name"
            ((successful++))
        else
            echo "⚠ Conflict in $branch_name, attempting auto-resolution..."
            
            # Try to resolve conflicts automatically
            git checkout --theirs . 2>/dev/null || git checkout --ours . 2>/dev/null || true
            git add . 2>/dev/null || true
            
            if git commit --no-edit 2>/dev/null; then
                echo "✓ Auto-resolved $branch_name"
                ((successful++))
            else
                echo "✗ Could not resolve $branch_name"
                git merge --abort 2>/dev/null || true
                ((failed++))
            fi
        fi
        
        git branch -D "temp-merge-$i" 2>/dev/null || true
        
        # Push every 10 merges
        if [ $((i % BATCH_SIZE)) -eq 0 ] && [ $i -gt 0 ]; then
            echo "Pushing batch $((i/BATCH_SIZE))..."
            git push origin main || echo "Push failed, continuing..."
        fi
    else
        echo "✗ Could not checkout $branch_name"
        ((failed++))
    fi
done

# Final push
echo "Final push to origin main..."
git push origin main || echo "Final push failed"

echo "=== MERGE SUMMARY ==="
echo "Successful merges: $successful"
echo "Failed merges: $failed"
echo "Total processed: $((successful + failed))"

# Show recent commits
echo "Recent commits:"
git log --oneline -10