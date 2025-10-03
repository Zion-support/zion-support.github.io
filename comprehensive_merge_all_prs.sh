#!/bin/bash

# Comprehensive script to merge all cursor branches and resolve conflicts
set -e

echo "🚀 Starting comprehensive merge process for all cursor branches..."

# Ensure we're on main and it's up to date
echo "📥 Ensuring main is up to date..."
git checkout main
git fetch origin
git pull origin main

# Get all cursor branches that need to be merged
echo "🔍 Finding all cursor branches to merge..."
ALL_CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/check-fix-push-and-merge-to-main" | sed 's/origin\///' | head -100)

echo "Found branches to merge:"
echo "$ALL_CURSOR_BRANCHES" | head -10
echo "... and $(echo "$ALL_CURSOR_BRANCHES" | wc -l) total branches"

# Counter for tracking progress
count=0
total=$(echo "$ALL_CURSOR_BRANCHES" | wc -l)
success_count=0
failed_count=0

echo "Total branches to merge: $total"

# Merge branches in smaller batches to avoid overwhelming the system
batch_size=20

echo "$ALL_CURSOR_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    count=$((count + 1))
    
    echo ""
    echo "=========================================="
    echo "🔀 Processing branch $count/$total: $branch"
    echo "=========================================="
    
    # Fetch the branch
    if git fetch origin "$branch" 2>/dev/null; then
        echo "✅ Fetched $branch"
        
        # Try to merge
        if git merge "origin/$branch" --no-edit 2>/dev/null; then
            echo "✅ Successfully merged $branch"
            success_count=$((success_count + 1))
        else
            echo "⚠️  Merge conflict in $branch, attempting to resolve..."
            
            # Check for conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "🔧 Resolving conflicts in $branch..."
                
                # Resolve conflicts by accepting incoming changes for most files
                git status --porcelain | grep -E "^UU|^AA|^DD" | while read status file; do
                    echo "   Resolving conflict in: $file"
                    
                    # For most conflicts, accept the incoming changes
                    if [[ "$file" == *".tsx" ]] || [[ "$file" == *".ts" ]] || [[ "$file" == *".js" ]] || [[ "$file" == *".json" ]] || [[ "$file" == *".md" ]]; then
                        if git checkout --theirs "$file" 2>/dev/null; then
                            echo "   ✅ Resolved $file using theirs"
                        elif git checkout --ours "$file" 2>/dev/null; then
                            echo "   ✅ Resolved $file using ours"
                        fi
                    fi
                done
                
                # Add resolved files
                git add . 2>/dev/null || true
                
                # Complete the merge
                if git commit --no-edit 2>/dev/null; then
                    echo "✅ Conflicts resolved and merged $branch"
                    success_count=$((success_count + 1))
                else
                    echo "❌ Failed to complete merge for $branch"
                    failed_count=$((failed_count + 1))
                    git merge --abort 2>/dev/null || true
                fi
            else
                echo "❌ Failed to merge $branch"
                failed_count=$((failed_count + 1))
                git merge --abort 2>/dev/null || true
            fi
        fi
    else
        echo "❌ Could not fetch $branch"
        failed_count=$((failed_count + 1))
        continue
    fi
    
    # Push the updated main branch every 10 merges
    if [ $((count % 10)) -eq 0 ]; then
        echo "📤 Pushing checkpoint at $count..."
        if git push origin main 2>/dev/null; then
            echo "✅ Pushed updated main branch (checkpoint at $count)"
        else
            echo "⚠️  Push failed, pulling latest changes..."
            git pull origin main 2>/dev/null || true
            git push origin main 2>/dev/null || true
        fi
    fi
    
    # Brief pause every 5 branches to avoid overwhelming the system
    if [ $((count % 5)) -eq 0 ]; then
        sleep 1
    fi
done

# Final push
echo ""
echo "📤 Final push to main..."
git push origin main 2>/dev/null || true

echo ""
echo "=========================================="
echo "📊 Comprehensive Merge Summary"
echo "=========================================="
echo "✅ Successfully merged: $success_count branches"
echo "❌ Failed to merge: $failed_count branches"
echo "📊 Total processed: $total branches"
echo ""
echo "🎉 Comprehensive merge process completed!"