#!/bin/bash
# Script to merge only the open PRs from GitHub
set -e
echo "🚀 Starting merge of open PRs only..."
echo "⏰ Started at: $(date)"
echo "---"
# Create a backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main
# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    # Check if file has merge conflicts
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
        else
            echo "📝 Regular file, attempting to merge both versions..."
            # Remove conflict markers and try to keep both versions
        echo "🔄 Processing PR #$pr_number from branch: $branch_name"
        echo "=========================================="
        if merge_branch "$branch_name"; then
            echo "✅ PR #$pr_number processed successfully"
        else
            echo "❌ PR #$pr_number processing failed"
        fi
        echo "=========================================="
        echo ""
        # Push changes every 5 successful merges to avoid losing work
        if [ $((SUCCESSFUL_MERGES % 5)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
            echo "💾 Pushing progress to remote..."
            git push origin main
        fi
    fi
done
# Final push
echo "💾 Pushing final changes to remote..."
git push origin main
# Summary
echo ""
echo "🎉 Open PR merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"
# Cleanup recommendations
echo ""
echo "🧹 Cleanup recommendations:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application thoroughly"
echo "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
echo "   4. Consider cleaning up old feature branches"
echo "   5. Run tests to ensure everything works correctly"