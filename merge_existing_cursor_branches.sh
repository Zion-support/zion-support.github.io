#!/bin/bash

# Script to merge existing cursor branches into main
set -e

echo "🚀 Starting merge process for existing cursor branches..."

# Ensure we're on main and it's up to date
echo "📥 Ensuring main is up to date..."
git checkout main
git fetch origin
git pull origin main

# Get existing cursor branches that we can actually merge
echo "🔍 Finding existing cursor branches to merge..."
EXISTING_BRANCHES=$(git branch -r | grep "origin/cursor" | head -50 | sed 's/origin\///')

echo "Found branches to merge:"
echo "$EXISTING_BRANCHES" | head -10
echo "... and $(echo "$EXISTING_BRANCHES" | wc -l) total branches"

# Counter for tracking progress
count=0
total=$(echo "$EXISTING_BRANCHES" | wc -l)
success_count=0
failed_count=0

echo "Total branches to merge: $total"

# Merge branches
echo "$EXISTING_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    count=$((count + 1))
    
    echo ""
    echo "=========================================="
    echo "🔀 Processing branch $count/$total: $branch"
    echo "=========================================="
    
    # Check if branch exists locally or remotely
    if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "✅ Branch exists: $branch"
        
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
        echo "❌ Branch does not exist: $branch"
        failed_count=$((failed_count + 1))
        continue
    fi
    
    # Push the updated main branch every 5 merges
    if [ $((count % 5)) -eq 0 ]; then
        echo "📤 Pushing checkpoint at $count..."
        if git push origin main 2>/dev/null; then
            echo "✅ Pushed updated main branch (checkpoint at $count)"
        else
            echo "⚠️  Push failed, pulling latest changes..."
            git pull origin main 2>/dev/null || true
            git push origin main 2>/dev/null || true
        fi
    fi
    
    # Brief pause every 3 branches to avoid overwhelming the system
    if [ $((count % 3)) -eq 0 ]; then
        sleep 1
    fi
done

# Final push
echo ""
echo "📤 Final push to main..."
git push origin main 2>/dev/null || true

echo ""
echo "=========================================="
echo "📊 Merge Summary"
echo "=========================================="
echo "✅ Successfully merged: $success_count branches"
echo "❌ Failed to merge: $failed_count branches"
echo "📊 Total processed: $total branches"
echo ""
echo "🎉 Merge process completed!"