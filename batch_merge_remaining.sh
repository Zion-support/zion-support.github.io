#!/bin/bash

# Batch merge remaining branches in small batches
set -e

echo "🚀 Starting batch merge of remaining branches..."

# Ensure we're on main
git checkout main

# Get cursor branches in batches of 10
BATCH_SIZE=10
OFFSET=0

while true; do
    echo "📋 Processing batch starting at offset $OFFSET..."
    
    # Get next batch of branches
    git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/cursor/ | \
        sed -n "$((OFFSET + 1)),$((OFFSET + BATCH_SIZE))p" > /tmp/batch_branches.txt
    
    BATCH_COUNT=$(wc -l < /tmp/batch_branches.txt)
    
    if [ $BATCH_COUNT -eq 0 ]; then
        echo "✅ No more branches to process"
        break
    fi
    
    echo "📊 Processing $BATCH_COUNT branches in this batch..."
    
    BATCH_SUCCESS=0
    BATCH_FAILED=0
    
    # Process each branch in the batch
    while IFS= read -r branch; do
        if [ -z "$branch" ]; then
            continue
        fi
        
        echo "🔄 Processing: $branch"
        
        # Check if branch exists and not already merged
        if git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
            if ! git branch --merged main | grep -q "$branch"; then
                echo "✅ Attempting to merge $branch..."
                
                # Try to merge
                if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
                    echo "✅ Successfully merged $branch"
                    git commit -m "Merge $branch into main - batch $((OFFSET / BATCH_SIZE + 1))"
                    BATCH_SUCCESS=$((BATCH_SUCCESS + 1))
                else
                    echo "⚠️  Merge conflicts in $branch, auto-resolving..."
                    
                    # Auto-resolve conflicts
                    CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
                    
                    if [ -n "$CONFLICTED_FILES" ]; then
                        for file in $CONFLICTED_FILES; do
                            if [ -f "$file" ]; then
                                # Keep main version for critical files, theirs for others
                                if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "netlify.toml" ]]; then
                                    git checkout --ours "$file" 2>/dev/null || true
                                else
                                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                                fi
                                git add "$file" 2>/dev/null || true
                            fi
                        done
                        
                        # Try to commit
                        if git commit -m "Resolve merge conflicts for $branch - batch $((OFFSET / BATCH_SIZE + 1))" 2>/dev/null; then
                            echo "✅ Successfully resolved conflicts and merged $branch"
                            BATCH_SUCCESS=$((BATCH_SUCCESS + 1))
                        else
                            echo "❌ Failed to resolve conflicts for $branch"
                            git merge --abort 2>/dev/null || true
                            BATCH_FAILED=$((BATCH_FAILED + 1))
                        fi
                    else
                        echo "❌ No conflicted files found, aborting merge..."
                        git merge --abort 2>/dev/null || true
                        BATCH_FAILED=$((BATCH_FAILED + 1))
                    fi
                fi
            else
                echo "⏭️  Branch $branch already merged, skipping..."
            fi
        else
            echo "❌ Branch $branch doesn't exist, skipping..."
        fi
        
        echo "---"
    done < /tmp/batch_branches.txt
    
    echo "📊 Batch $((OFFSET / BATCH_SIZE + 1)) completed:"
    echo "   ✅ Successful: $BATCH_SUCCESS"
    echo "   ❌ Failed: $BATCH_FAILED"
    
    # Push after each batch
    if [ $BATCH_SUCCESS -gt 0 ]; then
        echo "💾 Pushing batch changes..."
        git push origin main
    fi
    
    # Move to next batch
    OFFSET=$((OFFSET + BATCH_SIZE))
    
    # Small delay between batches
    sleep 2
done

# Final cleanup
rm -f /tmp/batch_branches.txt

echo "🎉 Batch merge completed!"