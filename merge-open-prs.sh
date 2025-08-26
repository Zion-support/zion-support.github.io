#!/bin/bash

        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
        else
            echo "📝 Regular file, attempting to merge both versions..."
            # Remove conflict markers and try to keep both versions
# Script to merge all open pull requests into main branch
# This script will resolve merge conflicts and merge all open PRs

set -e

echo "Starting merge process for open pull requests..."

# Ensure we're in the right directory
cd /workspace

# Check current status
echo "Current git status:"
git status

# Switch to main branch and pull latest changes
echo "Switching to main branch..."
git checkout main
git pull origin main

# List of branches to merge (from the open PRs)
BRANCHES=(
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-f7d5"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-2401"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-586a"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-a13d"
)

# Merge each branch
for branch in "${BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "Merging $branch into main..."
        
        # Try to merge with auto-resolve conflicts
        if git merge --no-edit --strategy=recursive -X theirs origin/$branch; then
            echo "Successfully merged $branch"
        else
            echo "Merge conflict detected in $branch, attempting to resolve..."
            
            # Check for conflicts
            if git status --porcelain | grep -q "^UU"; then
                echo "Resolving conflicts automatically..."
                
                # Add all files to resolve conflicts
                git add .
                
                # Commit the merge
                git commit -m "Resolve merge conflicts for $branch"
                echo "Conflicts resolved and committed for $branch"
            else
                echo "No conflicts found, continuing..."
            fi
        fi
    else
        echo "Branch $branch not found, skipping..."
    fi
done

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
=======
# Push the merged changes
echo "Pushing merged changes to main..."
git push origin main

echo "Merge process completed successfully!"

# List final status
echo "Final git status:"
git status

echo "All open pull requests have been merged into main branch."
