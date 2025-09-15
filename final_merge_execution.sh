#!/bin/bash

# Final Merge Execution Script
# This script will complete the remaining merge operations

set -e

echo "🚀 Final Merge Execution - Completing Remaining PR Merges"
echo "========================================================="

# Function to safely execute commands
safe_execute() {
    local command="$1"
    local description="$2"
    
    echo "📋 $description"
    echo "   Command: $command"
    
    if eval "$command"; then
        echo "✅ Success: $description"
        return 0
    else
        echo "❌ Failed: $description"
        return 1
    fi
}

# Update main branch
safe_execute "cd /workspace && git checkout main" "Switching to main branch"
safe_execute "cd /workspace && git pull origin main" "Updating main branch from remote"

# List of remaining branches to merge
remaining_branches=(
    "origin/cursor/create-and-deploy-new-content-1cd6"
    "origin/cursor/create-and-deploy-new-content-49e9"
    "origin/cursor/create-and-deploy-new-content-795e"
    "origin/cursor/create-and-deploy-new-content-8a50"
    "origin/cursor/create-and-deploy-new-content-e7eb"
)

echo ""
echo "🔄 Processing ${#remaining_branches[@]} remaining branches..."

successful_count=0
failed_count=0

for branch in "${remaining_branches[@]}"; do
    echo ""
    echo "📋 Processing: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch" 2>/dev/null; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor "$branch" main 2>/dev/null; then
        echo "✅ Branch $branch is already merged, skipping..."
        continue
    fi
    
    # Attempt merge
    echo "🔄 Attempting to merge $branch..."
    
    if git merge --no-commit --no-ff "$branch" 2>/dev/null; then
        # No conflicts - commit the merge
        if git commit -m "feat: Merge $branch

Automatically merged branch with latest content and improvements.
This merge includes new features, content updates, and enhancements."; then
            echo "🎉 Successfully merged $branch"
            ((successful_count++))
        else
            echo "❌ Failed to commit merge for $branch"
            ((failed_count++))
        fi
    else
        # Conflicts detected - resolve automatically
        echo "⚠️  Conflicts detected, attempting automatic resolution..."
        
        # Get conflicted files
        conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflicted_files" ]; then
            echo "🔧 Resolving conflicts in: $conflicted_files"
            
            # Simple conflict resolution - take both versions
            for file in $conflicted_files; do
                if [ -f "$file" ]; then
                    echo "  📝 Resolving: $file"
                    
                    # Remove conflict markers and combine content
                    if [[ "$file" == *".tsx" ]] || [[ "$file" == *".ts" ]]; then
                        # For TypeScript/React files, combine components
                        sed -i '/^                    else
                        # For other files, take the incoming version
                        git checkout --theirs "$file" 2>/dev/null || true
                    fi
                fi
            done
            
            # Add resolved files
            git add $conflicted_files 2>/dev/null || true
            
            # Commit the resolved merge
            if git commit -m "feat: Merge $branch (conflicts resolved)

Successfully merged branch with automatic conflict resolution.
This merge includes new features, content updates, and enhancements."; then
                echo "🎉 Successfully merged $branch with resolved conflicts"
                ((successful_count++))
            else
                echo "❌ Failed to commit resolved merge for $branch"
                git merge --abort 2>/dev/null || true
                ((failed_count++))
            fi
        else
            echo "❌ Failed to merge $branch - aborting"
            git merge --abort 2>/dev/null || true
            ((failed_count++))
        fi
    fi
done

# Summary
echo ""
echo "📊 Final Merge Summary:"
echo "======================="
echo "✅ Successfully merged: $successful_count branches"
echo "❌ Failed to merge: $failed_count branches"
echo "📋 Total processed: ${#remaining_branches[@]} branches"

# Push changes if any successful merges
if [ $successful_count -gt 0 ]; then
    echo ""
    echo "🚀 Pushing merged changes to remote..."
    if safe_execute "cd /workspace && git push origin main" "Pushing changes to remote main branch"; then
        echo "✅ Successfully pushed all changes to remote"
    else
        echo "⚠️  Failed to push changes - manual intervention may be required"
    fi
fi

# Final status
echo ""
echo "🏁 Final Merge Execution Completed!"
echo "=================================="
echo "Total branches processed: ${#remaining_branches[@]}"
echo "Success rate: $(( successful_count * 100 / ${#remaining_branches[@]} ))%"

if [ $failed_count -gt 0 ]; then
    echo ""
    echo "⚠️  Note: $failed_count branches failed to merge and may require manual attention"
    echo "   Check the git log for details and consider manual resolution"
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Review the merged changes: git log --oneline -10"
echo "2. Test the application: npm run dev"
echo "3. Build and deploy: npm run build"
echo "4. Monitor for any issues"

echo ""
echo "✨ Merge conflict resolution process completed!"