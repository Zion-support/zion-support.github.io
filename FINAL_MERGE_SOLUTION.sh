#!/bin/bash

# FINAL COMPREHENSIVE MERGE SOLUTION
# Resolves all merge conflicts and merges all unmerged branches into main

set -e

echo "🚀 FINAL MERGE SOLUTION - COMPREHENSIVE BRANCH MERGING"
echo "=================================================="
echo "⏰ Started at: $(date)"
echo ""

# Function to log with timestamp
log() {
    echo "$(date '+%H:%M:%S') - $1"
}

# Function to resolve conflicts automatically
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    log "🔧 Resolving conflicts in $file"
    
    # Strategy: Keep branch version for new content, main version for core files
    if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "pnpm-lock.yaml" ]]; then
        log "📦 Package file - keeping main version"
        git checkout --ours "$file"
    elif [[ "$file" == "tsconfig.json" || "$file" == "next.config.js" || "$file" == "tailwind.config.js" || "$file" == "vite.config.ts" ]]; then
        log "⚙️  Config file - keeping main version"
        git checkout --ours "$file"
    elif [[ "$file" == "README.md" || "$file" == "LICENSE" || "$file" == "CHANGELOG.md" ]]; then
        log "📚 Documentation - keeping main version"
        git checkout --ours "$file"
    elif [[ "$file" == *".svg" ]]; then
        log "🎨 SVG file - keeping branch version"
        git checkout --theirs "$file"
    elif [[ "$file" == *".tsx" || "$file" == *".ts" ]]; then
        log "📱 TypeScript file - keeping branch version"
        git checkout --theirs "$file"
    elif [[ "$file" == *".md" ]]; then
        log "📝 Markdown file - keeping branch version"
        git checkout --theirs "$file"
    else
        log "📄 Other file - keeping branch version"
        git checkout --theirs "$file"
    fi
    
    git add "$file"
    log "✅ Resolved conflicts in $file"
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    log "🔄 Merging branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        log "❌ Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "$branch" 2>/dev/null; then
        log "✅ Successfully merged $branch (no conflicts)"
        git commit -m "Merge $branch into main - $(date)"
        return 0
    else
        log "⚠️  Merge conflicts detected in $branch"
        
        # Get conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflicted_files" ]; then
            log "📋 Conflicted files: $conflicted_files"
            
            # Resolve each conflicted file
            for file in $conflicted_files; do
                resolve_conflicts "$file" "$branch"
            done
            
            # Commit the resolved merge
            if git commit -m "Merge $branch into main (resolved conflicts) - $(date)"; then
                log "✅ Successfully resolved conflicts and merged $branch"
                return 0
            else
                log "❌ Failed to commit resolved merge for $branch"
                git merge --abort
                return 1
            fi
        else
            log "❌ No conflicted files found but merge failed"
            git merge --abort
            return 1
        fi
    fi
}

# Main execution
log "📋 Ensuring we're on main branch..."
git checkout main
git pull origin main

log "📋 Fetching all remote branches..."
git fetch --all

# Get all unmerged cursor branches
log "📋 Finding all unmerged cursor branches..."
unmerged_branches=$(git branch -r --no-merged main | grep 'cursor/' | head -20)

if [ -z "$unmerged_branches" ]; then
    log "✅ No unmerged cursor branches found!"
    echo ""
    echo "🎉 ALL MERGES COMPLETED SUCCESSFULLY!"
    echo "=================================================="
    exit 0
fi

log "📋 Found unmerged branches:"
echo "$unmerged_branches"
echo ""

# Counters
successful_merges=0
failed_merges=0
total_branches=$(echo "$unmerged_branches" | wc -l)

log "📊 Total branches to process: $total_branches"
echo ""

# Process each branch
branch_count=0
for branch in $unmerged_branches; do
    branch_count=$((branch_count + 1))
    echo "=========================================="
    log "🔄 Processing branch $branch_count/$total_branches: $branch"
    echo "=========================================="
    
    if merge_branch "$branch"; then
        successful_merges=$((successful_merges + 1))
        log "✅ Branch $branch processed successfully"
    else
        failed_merges=$((failed_merges + 1))
        log "❌ Branch $branch processing failed"
    fi
    
    echo "=========================================="
    echo ""
    
    # Push every 5 successful merges
    if [ $((successful_merges % 5)) -eq 0 ] && [ $successful_merges -gt 0 ]; then
        log "💾 Pushing progress to remote..."
        git push origin main
        log "✅ Progress pushed successfully"
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 1
done

# Final push
log "💾 Pushing final changes to remote..."
if git push origin main; then
    log "✅ Final push successful"
else
    log "❌ Final push failed"
fi

# Summary
echo ""
echo "🎉 FINAL MERGE SOLUTION COMPLETED!"
echo "=================================================="
echo "📊 Final Summary:"
echo "   📋 Total branches processed: $total_branches"
echo "   ✅ Successful merges: $successful_merges"
echo "   ❌ Failed merges: $failed_merges"
echo "   📈 Success rate: $(( (successful_merges * 100) / total_branches ))%"
echo ""
echo "⏰ Completed at: $(date)"
echo "=================================================="

# Verify final state
log "🔍 Verifying final state..."
remaining_unmerged=$(git branch -r --no-merged main | grep 'cursor/' | wc -l)
log "📊 Remaining unmerged cursor branches: $remaining_unmerged"

if [ "$remaining_unmerged" -eq 0 ]; then
    echo ""
    echo "🎉🎉🎉 ALL CURSOR BRANCHES SUCCESSFULLY MERGED! 🎉🎉🎉"
    echo "=================================================="
    echo "✅ Repository is now clean and up to date"
    echo "✅ All merge conflicts resolved"
    echo "✅ All branches merged into main"
    echo "✅ Changes pushed to remote"
    echo "=================================================="
else
    echo ""
    echo "⚠️  Some branches remain unmerged:"
    git branch -r --no-merged main | grep 'cursor/' | head -5
    echo ""
    echo "💡 Consider running this script again or checking manually"
fi

echo ""
echo "🚀 Ready for next steps:"
echo "   1. Run tests to ensure everything works"
echo "   2. Deploy the updated application"
echo "   3. Clean up old branches if needed"
echo ""
echo "✨ MERGE SOLUTION COMPLETE! ✨"