#!/bin/bash

# Auto-merge Pull Requests Script
# This script systematically merges branches while handling conflicts

set -e

echo "🚀 Starting automated PR merge process..."

# Ensure we're on main
git checkout main
git pull origin main

# Get list of branches to merge (cursor/create-and-deploy-new-content branches)
branches=$(git branch -r | grep "origin/cursor/create-and-deploy-new-content" | grep -v "HEAD" | head -50)

merged_count=0
conflict_count=0
skipped_count=0

for branch in $branches; do
    branch_name=${branch#origin/}
    echo ""
    echo "    echo "Processing: $branch_name"
    echo "    
    # Check if branch has unique commits
    unique_commits=$(git log $branch ^main --oneline | wc -l)
    
    if [ "$unique_commits" -eq 0 ]; then
        echo "✓ Branch already merged or no unique commits - skipping"
        ((skipped_count++))
        continue
    fi
    
    echo "Found $unique_commits unique commits in branch"
    
    # Try to merge
    if git merge $branch --no-edit; then
        echo "✅ Successfully merged $branch_name"
        ((merged_count++))
        
        # Push after every 5 successful merges
        if [ $((merged_count % 5)) -eq 0 ]; then
            echo "📤 Pushing to remote..."
            git push origin main || echo "⚠️  Push failed, continuing..."
        fi
    else
        echo "⚠️  Merge conflict detected in $branch_name"
        ((conflict_count++))
        
        # Check if conflict is only in promotional banner files
        conflict_files=$(git diff --name-only --diff-filter=U)
        
        if echo "$conflict_files" | grep -q "^App.tsx\|^app/page.tsx\|^app/layout.tsx"; then
            echo "   Conflict in promotional files - resolving automatically"
            
            # For App.tsx conflicts, prefer ours (current main) version
            if echo "$conflict_files" | grep -q "^App.tsx"; then
                git checkout --ours App.tsx
                git add App.tsx
            fi
            
            # For app/page.tsx conflicts, prefer ours
            if echo "$conflict_files" | grep -q "^app/page.tsx"; then
                git checkout --ours app/page.tsx
                git add app/page.tsx
            fi
            
            # For app/layout.tsx conflicts, prefer ours
            if echo "$conflict_files" | grep -q "^app/layout.tsx"; then
                git checkout --ours app/layout.tsx
                git add app/layout.tsx
            fi
            
            # Add any other files that were merged successfully
            other_files=$(git diff --cached --name-only)
            if [ -n "$other_files" ]; then
                git add $other_files
            fi
            
            # Complete the merge
            if git commit --no-edit; then
                echo "✅ Conflict resolved and merged $branch_name"
                ((merged_count++))
                ((conflict_count--))
            else
                echo "❌ Could not complete merge"
                git merge --abort
            fi
        else
            echo "   Conflict in non-promotional files - aborting merge"
            git merge --abort
            echo "   Please manually review: $branch_name"
        fi
    fi
done

# Final push
echo ""
echo "echo "📤 Pushing final changes to remote..."
echo "git push origin main || echo "⚠️  Final push failed"

# Summary
echo ""
echo "echo "✨ Merge Process Complete!"
echo "echo "✅ Successfully merged: $merged_count branches"
echo "⏭️  Skipped (already merged): $skipped_count branches"
echo "⚠️  Conflicts remaining: $conflict_count branches"
echo ""
echo "Next steps:"
echo "1. Review any remaining conflicts manually"
echo "2. Run this script again to process more branches"
echo "3. Check git log to verify merges"
