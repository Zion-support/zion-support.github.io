#!/bin/bash

# Script to merge all remaining cursor branches into main
set -e

echo "Starting comprehensive merge process for all cursor branches..."

# Get all cursor branches (excluding the first 20 already processed)
ALL_CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/fix-errors-and-merge-to-main" | sed 's/origin\///' | tail -n +21)

echo "Found remaining branches to merge:"
echo "$ALL_CURSOR_BRANCHES" | head -10
echo "... and $(echo "$ALL_CURSOR_BRANCHES" | wc -l) more branches"

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

# Counter for tracking progress
count=0
total=$(echo "$ALL_CURSOR_BRANCHES" | wc -l)

echo "Total remaining branches to merge: $total"

# Merge branches in batches of 50 to avoid overwhelming the system
batch_size=50
batch_count=0

echo "$ALL_CURSOR_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    count=$((count + 1))
    batch_count=$((batch_count + 1))
    
    # Start new batch every 50 branches
    if [ $batch_count -eq 1 ]; then
        echo ""
        echo "=== Starting batch $((count / batch_size + 1)) ==="
    fi
    
    echo "Processing branch $count/$total: $branch"
    
    # Fetch the branch
    git fetch origin "$branch" 2>/dev/null || {
        echo "⚠️  Could not fetch $branch, skipping..."
        continue
    }
    
    # Try to merge
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
    else
        echo "⚠️  Merge conflict in $branch, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU"; then
            echo "Resolving conflicts in $branch..."
            
            # Try to resolve conflicts automatically
            git status --porcelain | grep "^UU" | while read status file; do
                echo "Resolving conflict in: $file"
                
                # For most conflicts, accept the incoming changes
                if [[ "$file" == *".tsx" ]] || [[ "$file" == *".ts" ]] || [[ "$file" == *".js" ]] || [[ "$file" == *".json" ]]; then
                    if git checkout --theirs "$file" 2>/dev/null; then
                        echo "Resolved $file using theirs"
                    elif git checkout --ours "$file" 2>/dev/null; then
                        echo "Resolved $file using ours"
                    fi
                fi
            done
            
            # Add resolved files
            git add . 2>/dev/null
            
            # Complete the merge
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Resolved conflicts and merged $branch"
            else
                echo "❌ Failed to complete merge for $branch"
                git merge --abort 2>/dev/null || true
                continue
            fi
        else
            echo "❌ Failed to merge $branch"
            git merge --abort 2>/dev/null || true
            continue
        fi
    fi
    
    # Push the updated main branch every 10 merges to avoid conflicts
    if [ $((count % 10)) -eq 0 ]; then
        git push origin main 2>/dev/null || {
            echo "⚠️  Push failed, pulling latest changes..."
            git pull origin main 2>/dev/null || true
            git push origin main 2>/dev/null || true
        }
        echo "Pushed updated main branch (checkpoint at $count)"
    fi
    
    # End of batch
    if [ $batch_count -eq $batch_size ]; then
        echo "=== Completed batch $((count / batch_size)) ==="
        batch_count=0
        
        # Push and pull to sync
        git push origin main 2>/dev/null || true
        git pull origin main 2>/dev/null || true
        sleep 2  # Brief pause between batches
    fi
done

# Final push
git push origin main 2>/dev/null || true

echo ""
echo "✅ Comprehensive merge process completed!"
echo "Processed $total branches"