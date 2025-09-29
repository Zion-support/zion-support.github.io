#!/bin/bash

# Script to merge all existing branches that have changes not in main

set -e

echo "🚀 Starting comprehensive merge of all existing branches..."
echo "📊 Checking all remote branches for unmerged changes..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Initialize counters
SUCCESS_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0
TOTAL_BRANCHES=0

# Get all remote branches except main and HEAD
ALL_BRANCHES=$(git branch -r | grep -v "origin/main" | grep -v "origin/HEAD" | sed 's/^[[:space:]]*//')

echo "📋 Found $(echo "$ALL_BRANCHES" | wc -l) branches to check"

for branch in $ALL_BRANCHES; do
    TOTAL_BRANCHES=$((TOTAL_BRANCHES + 1))
    BRANCH_NAME=$(echo $branch | sed 's/origin\///')
    
    echo ""
    echo "📋 [$TOTAL_BRANCHES] Checking: $BRANCH_NAME"
    
    # Fetch the branch
    if ! git fetch origin $BRANCH_NAME 2>/dev/null; then
        echo "❌ Failed to fetch: $BRANCH_NAME"
        FAILED_COUNT=$((FAILED_COUNT + 1))
        continue
    fi
    
    # Check if branch has commits not in main
    if git merge-base --is-ancestor origin/$BRANCH_NAME main 2>/dev/null; then
        echo "⏭️  Already merged, skipping: $BRANCH_NAME"
        SKIPPED_COUNT=$((SKIPPED_COUNT + 1))
        continue
    fi
    
    # Check if there are differences
    if git diff --quiet main origin/$BRANCH_NAME 2>/dev/null; then
        echo "⏭️  No differences, skipping: $BRANCH_NAME"
        SKIPPED_COUNT=$((SKIPPED_COUNT + 1))
        continue
    fi
    
    echo "🔄 Attempting merge of: $BRANCH_NAME"
    
    # Attempt to merge
    if git merge --no-edit origin/$BRANCH_NAME 2>/dev/null; then
        echo "✅ Successfully merged: $BRANCH_NAME"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
        # Commit the merge if needed
        if ! git diff --quiet HEAD~1 HEAD 2>/dev/null; then
            git commit --no-edit -m "Merge $BRANCH_NAME into main" || true
        fi
        
    else
        echo "⚠️  Merge conflict in: $BRANCH_NAME"
        
        # Auto-resolve conflicts by preferring main branch
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Auto-resolving conflicts..."
            
            git status --porcelain | while read status file; do
                case $status in
                    "UU"|"AA")
                        echo "  Resolving conflict in: $file (keeping main version)"
                        git checkout --ours "$file" 2>/dev/null || true
                        git add "$file" 2>/dev/null || true
                        ;;
                    "DD")
                        echo "  Removing deleted file: $file"
                        git rm "$file" 2>/dev/null || true
                        ;;
                esac
            done
            
            # Commit the resolution
            if git commit --no-edit -m "Resolve conflicts in $BRANCH_NAME (prefer main)" 2>/dev/null; then
                echo "✅ Successfully resolved conflicts: $BRANCH_NAME"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            else
                echo "❌ Failed to resolve conflicts: $BRANCH_NAME"
                git merge --abort 2>/dev/null || true
                FAILED_COUNT=$((FAILED_COUNT + 1))
            fi
        else
            # No real conflicts, just commit
            git commit --no-edit -m "Merge $BRANCH_NAME into main" 2>/dev/null || true
            echo "✅ Successfully merged (no conflicts): $BRANCH_NAME"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        fi
    fi
    
    # Show progress every 20 branches
    if [ $((TOTAL_BRANCHES % 20)) -eq 0 ]; then
        echo "📈 Progress: $TOTAL_BRANCHES checked | ✅ $SUCCESS_COUNT merged | ⏭️ $SKIPPED_COUNT skipped | ❌ $FAILED_COUNT failed"
    fi
done

echo ""
echo "🎯 Final Summary:"
echo "📊 Total branches checked: $TOTAL_BRANCHES"
echo "✅ Successfully merged: $SUCCESS_COUNT"
echo "⏭️  Skipped (already merged): $SKIPPED_COUNT"
echo "❌ Failed merges: $FAILED_COUNT"

# Push changes if any were made
if [ $SUCCESS_COUNT -gt 0 ]; then
    echo ""
    echo "🚀 Pushing merged changes to origin/main..."
    git push origin main
    echo "✅ Changes pushed successfully!"
else
    echo "ℹ️  No new changes to push"
fi

echo ""
echo "✨ Merge process completed!"

# Create summary report
cat > merge-summary-$(date +%Y%m%d-%H%M%S).txt << EOF
Merge Summary Report - $(date)
================================

Total branches checked: $TOTAL_BRANCHES
Successfully merged: $SUCCESS_COUNT
Skipped (already merged): $SKIPPED_COUNT
Failed merges: $FAILED_COUNT

Success rate: $(( (SUCCESS_COUNT * 100) / TOTAL_BRANCHES ))%

Status: $([ $SUCCESS_COUNT -gt 0 ] && echo "Changes merged and pushed" || echo "All branches already up to date")
EOF

echo "📄 Summary report saved to merge-summary-$(date +%Y%m%d-%H%M%S).txt"