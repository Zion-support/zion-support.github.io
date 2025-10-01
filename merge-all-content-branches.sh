#!/bin/bash

# Comprehensive PR Merge Script
# Merges all cursor/create-and-deploy-new-content branches

set -e

echo "🚀 Starting comprehensive PR merge process..."
echo "================================================"

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Get all cursor branches
branches=$(git branch -r | grep "origin/cursor/create-and-deploy-new-content" | grep -v "HEAD" | sort)

total_branches=$(echo "$branches" | wc -l)
merged_count=0
skipped_count=0
conflict_count=0
current=0

echo "Found $total_branches branches to process"
echo "================================================"
echo ""

for branch in $branches; do
    ((current++))
    branch_name=${branch#origin/}
    
    # Progress indicator
    if [ $((current % 50)) -eq 0 ]; then
        echo ""
        echo "Progress: $current/$total_branches branches processed"
        echo "Merged: $merged_count | Skipped: $skipped_count | Conflicts: $conflict_count"
        echo ""
    fi
    
    # Check if branch has unique commits
    unique_commits=$(git log $branch ^main --oneline 2>/dev/null | wc -l)
    
    if [ "$unique_commits" -eq 0 ]; then
        ((skipped_count++))
        continue
    fi
    
    # Try to merge
    if git merge $branch --no-edit -m "chore: merge $branch_name" >/dev/null 2>&1; then
        ((merged_count++))
        
        # Push every 25 successful merges
        if [ $((merged_count % 25)) -eq 0 ]; then
            echo "📤 Pushing batch to remote..."
            git push origin main || echo "⚠️  Push failed, continuing..."
        fi
    else
        ((conflict_count++))
        
        # Auto-resolve common conflicts
        conflict_files=$(git diff --name-only --diff-filter=U)
        
        # Check if conflicts are in promotional files
        if echo "$conflict_files" | grep -qE "^(App\.tsx|app/page\.tsx|app/layout\.tsx|src/App\.tsx|src/pages/Home\.tsx)$"; then
            # Resolve by keeping theirs (the new content)
            for file in $conflict_files; do
                if [ -f "$file" ]; then
                    git checkout --theirs "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                fi
            done
            
            # Try to complete the merge
            if git commit --no-edit >/dev/null 2>&1; then
                ((merged_count++))
                ((conflict_count--))
            else
                git merge --abort >/dev/null 2>&1 || true
            fi
        else
            # Abort merges with non-promotional conflicts
            git merge --abort >/dev/null 2>&1 || true
        fi
    fi
done

# Final push
echo ""
echo "================================================"
echo "📤 Pushing final changes to remote..."
echo "================================================"
git push origin main || echo "⚠️  Final push failed"

# Summary
echo ""
echo "================================================"
echo "✨ Merge Process Complete!"
echo "================================================"
echo "✅ Successfully merged: $merged_count branches"
echo "⏭️  Skipped (already merged): $skipped_count branches"
echo "⚠️  Conflicts remaining: $conflict_count branches"
echo ""
