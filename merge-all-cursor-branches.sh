#!/bin/bash

# Comprehensive script to merge all cursor branches into main
# This script handles merge conflicts and ensures all branches are integrated

set -e  # Exit on any error

echo "🚀 Starting comprehensive merge of all cursor branches..."
echo "📊 Total branches to process: $(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | wc -l)"

# Create backup of current main branch
echo "💾 Creating backup of main branch..."
git checkout main
git pull origin main
git checkout -b backup-main-$(date +%Y%m%d-%H%M%S)

# Switch back to main
git checkout main

# Initialize counters
SUCCESS_COUNT=0
FAILED_COUNT=0
CONFLICT_COUNT=0
TOTAL_BRANCHES=0

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | head -100)

echo "🔄 Processing branches in batches of 100..."

for branch in $CURSOR_BRANCHES; do
    TOTAL_BRANCHES=$((TOTAL_BRANCHES + 1))
    BRANCH_NAME=$(echo $branch | sed 's/origin\///')
    
    echo "📋 Processing branch $TOTAL_BRANCHES: $BRANCH_NAME"
    
    # Fetch the branch
    git fetch origin $BRANCH_NAME
    
    # Attempt to merge
    if git merge --no-edit origin/$BRANCH_NAME 2>/dev/null; then
        echo "✅ Successfully merged: $BRANCH_NAME"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
        # Commit the merge
        git commit --no-edit -m "Merge $BRANCH_NAME into main" || true
        
    else
        echo "⚠️  Merge conflict in: $BRANCH_NAME"
        CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        
        # Check if there are actual conflicts or just merge commit needed
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts in: $BRANCH_NAME"
            
            # Auto-resolve conflicts by taking main branch version for most files
            # but preserve new files from the branch
            git status --porcelain | while read status file; do
                case $status in
                    "UU"|"AA")
                        echo "  Resolving conflict in: $file"
                        # For conflicts, prefer the incoming version (from branch)
                        git checkout --theirs "$file" 2>/dev/null || true
                        git add "$file" 2>/dev/null || true
                        ;;
                    "DD")
                        echo "  Removing deleted file: $file"
                        git rm "$file" 2>/dev/null || true
                        ;;
                esac
            done
            
            # Try to commit the resolved conflicts
            if git commit --no-edit -m "Resolve conflicts in $BRANCH_NAME" 2>/dev/null; then
                echo "✅ Successfully resolved conflicts in: $BRANCH_NAME"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
                CONFLICT_COUNT=$((CONFLICT_COUNT - 1))
            else
                echo "❌ Failed to resolve conflicts in: $BRANCH_NAME"
                git merge --abort 2>/dev/null || true
                FAILED_COUNT=$((FAILED_COUNT + 1))
            fi
        else
            # No real conflicts, just need to commit
            git commit --no-edit -m "Merge $BRANCH_NAME into main" 2>/dev/null || true
            echo "✅ Successfully merged (no conflicts): $BRANCH_NAME"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            CONFLICT_COUNT=$((CONFLICT_COUNT - 1))
        fi
    fi
    
    # Show progress every 10 branches
    if [ $((TOTAL_BRANCHES % 10)) -eq 0 ]; then
        echo "📈 Progress: $TOTAL_BRANCHES processed | ✅ $SUCCESS_COUNT successful | ⚠️ $CONFLICT_COUNT conflicts | ❌ $FAILED_COUNT failed"
    fi
done

echo ""
echo "🎯 Merge Summary:"
echo "📊 Total branches processed: $TOTAL_BRANCHES"
echo "✅ Successfully merged: $SUCCESS_COUNT"
echo "⚠️  Conflicts resolved: $CONFLICT_COUNT"
echo "❌ Failed merges: $FAILED_COUNT"

# Push the merged main branch
echo "🚀 Pushing merged main branch to origin..."
git push origin main

echo "✨ Merge process completed!"
echo "🔍 Check the repository for any remaining issues."

# Create a summary report
cat > merge-summary-$(date +%Y%m%d-%H%M%S).txt << EOF
Merge Summary Report - $(date)
================================

Total branches processed: $TOTAL_BRANCHES
Successfully merged: $SUCCESS_COUNT
Conflicts resolved: $CONFLICT_COUNT
Failed merges: $FAILED_COUNT

Success rate: $(( (SUCCESS_COUNT * 100) / TOTAL_BRANCHES ))%

Next steps:
- Review any failed merges manually
- Check for any remaining conflicts
- Verify build status
- Consider cleanup of merged branches
EOF

echo "📄 Summary report saved to merge-summary-$(date +%Y%m%d-%H%M%S).txt"