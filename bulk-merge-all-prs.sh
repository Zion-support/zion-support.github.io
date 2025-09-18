#!/bin/bash

# Bulk merge script for all remaining PRs
set -e

echo "🚀 Starting bulk merge of all remaining PRs..."
echo "=============================================="

# Change to workspace directory
cd /workspace

# Ensure we're on main and up to date
echo "📋 Ensuring main branch is up to date..."
git checkout main
git pull origin main

# Get all branches that need to be merged (excluding main and backup branches)
echo "🔍 Finding all branches to merge..."
ALL_BRANCHES=$(git branch -r | grep -v "origin/main" | grep -v "backup" | grep -v "aggressive-merge" | sed 's/origin\///g' | head -50)

echo "📊 Found branches to process:"
echo "$ALL_BRANCHES"

# Counter for tracking progress
PROCESSED=0
SUCCESS=0
FAILED=0

# Process each branch
for branch in $ALL_BRANCHES; do
    PROCESSED=$((PROCESSED + 1))
    echo ""
    echo "🔄 [$PROCESSED] Processing branch: $branch"
    
    # Skip if it's main or empty
    if [ "$branch" = "main" ] || [ -z "$branch" ]; then
        echo "⏭️  Skipping $branch"
        continue
    fi
    
    # Try to checkout the branch
    if git checkout "$branch" 2>/dev/null; then
        echo "📥 Successfully checked out $branch"
        
        # Try to merge main into the branch
        if git merge main --no-edit 2>/dev/null; then
            echo "✅ Successfully merged main into $branch"
            
            # Push the updated branch
            if git push origin "$branch" 2>/dev/null; then
                echo "💾 Successfully pushed $branch"
                
                # Switch back to main
                git checkout main
                
                # Try to merge the branch into main
                if git merge "$branch" --no-edit 2>/dev/null; then
                    echo "🔀 Successfully merged $branch into main"
                    
                    # Push main
                    if git push origin main 2>/dev/null; then
                        echo "💾 Successfully pushed main"
                        SUCCESS=$((SUCCESS + 1))
                        echo "🎉 Successfully processed $branch"
                        
                        # Try to delete the remote branch to clean up
                        git push origin --delete "$branch" 2>/dev/null || true
                        
                    else
                        echo "❌ Failed to push main"
                        FAILED=$((FAILED + 1))
                    fi
                else
                    echo "❌ Failed to merge $branch into main"
                    git merge --abort 2>/dev/null || true
                    FAILED=$((FAILED + 1))
                fi
            else
                echo "❌ Failed to push $branch"
                FAILED=$((FAILED + 1))
            fi
        else
            echo "⚠️  Merge conflicts in $branch, skipping for now..."
            git merge --abort 2>/dev/null || true
            git checkout main
            FAILED=$((FAILED + 1))
        fi
    else
        echo "❌ Could not checkout $branch, skipping..."
        FAILED=$((FAILED + 1))
    fi
    
    # Show progress every 10 branches
    if [ $((PROCESSED % 10)) -eq 0 ]; then
        echo ""
        echo "📊 Progress Update:"
        echo "  Processed: $PROCESSED"
        echo "  Success: $SUCCESS"
        echo "  Failed: $FAILED"
        echo "  Success Rate: $(( (SUCCESS * 100) / PROCESSED ))%"
        echo ""
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 1
done

echo ""
echo "🎉 Bulk merge completed!"
echo "========================"
echo "📊 Final Results:"
echo "  Total Processed: $PROCESSED"
echo "  Successful: $SUCCESS"
echo "  Failed: $FAILED"
echo "  Success Rate: $(( (SUCCESS * 100) / PROCESSED ))%"

echo ""
echo "📋 Current git status:"
git status --short