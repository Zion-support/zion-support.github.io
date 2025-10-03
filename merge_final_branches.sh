#!/bin/bash

# Final comprehensive merge script for all cursor branches
set -e

echo "🚀 Starting final comprehensive merge process for all cursor branches..."

# Get all cursor branches
ALL_CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/fix-errors-and-merge-to-main" | sed 's/origin\///')

echo "Found cursor branches to merge:"
echo "$ALL_CURSOR_BRANCHES" | head -5
echo "... and $(echo "$ALL_CURSOR_BRANCHES" | wc -l) more branches"

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

# Counter for tracking progress
count=0
total=$(echo "$ALL_CURSOR_BRANCHES" | wc -l)
successful_merges=0
failed_merges=0

echo "Total branches to merge: $total"

# Merge branches in smaller batches to avoid overwhelming the system
batch_size=25
batch_count=0

echo "$ALL_CURSOR_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    count=$((count + 1))
    batch_count=$((batch_count + 1))
    
    # Start new batch every batch_size branches
    if [ $batch_count -eq 1 ]; then
        echo ""
        echo "=== Starting batch $((count / batch_size + 1)) ==="
    fi
    
    echo "Processing branch $count/$total: $branch"
    
    # Fetch the branch
    if ! git fetch origin "$branch" 2>/dev/null; then
        echo "⚠️  Could not fetch $branch, skipping..."
        failed_merges=$((failed_merges + 1))
        continue
    fi
    
    # Try to merge
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        successful_merges=$((successful_merges + 1))
    else
        echo "⚠️  Merge conflict in $branch, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU"; then
            echo "Resolving conflicts in $branch..."
            
            # Try to resolve conflicts automatically
            git status --porcelain | grep "^UU" | while read status file; do
                echo "Resolving conflict in: $file"
                
                # For most conflicts, accept the incoming changes
                if [[ "$file" == *".tsx" ]] || [[ "$file" == *".ts" ]] || [[ "$file" == *".js" ]] || [[ "$file" == *".json" ]] || [[ "$file" == *".md" ]]; then
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
                successful_merges=$((successful_merges + 1))
            else
                echo "❌ Failed to complete merge for $branch"
                git merge --abort 2>/dev/null || true
                failed_merges=$((failed_merges + 1))
                continue
            fi
        else
            echo "❌ Failed to merge $branch"
            git merge --abort 2>/dev/null || true
            failed_merges=$((failed_merges + 1))
            continue
        fi
    fi
    
    # Push the updated main branch every 5 merges to avoid conflicts
    if [ $((count % 5)) -eq 0 ]; then
        if git push origin main 2>/dev/null; then
            echo "Pushed updated main branch (checkpoint at $count)"
        else
            echo "⚠️  Push failed, pulling latest changes..."
            git pull origin main 2>/dev/null || true
            git push origin main 2>/dev/null || true
        fi
    fi
    
    # End of batch
    if [ $batch_count -eq $batch_size ]; then
        echo "=== Completed batch $((count / batch_size)) ==="
        batch_count=0
        
        # Push and pull to sync
        git push origin main 2>/dev/null || true
        git pull origin main 2>/dev/null || true
        sleep 1  # Brief pause between batches
    fi
done

# Final push
git push origin main 2>/dev/null || true

echo ""
echo "🎉 Final comprehensive merge process completed!"
echo "📊 Summary:"
echo "   Total branches processed: $total"
echo "   Successful merges: $successful_merges"
echo "   Failed merges: $failed_merges"
echo "   Success rate: $((successful_merges * 100 / total))%"