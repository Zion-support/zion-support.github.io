#!/bin/bash

# Comprehensive script to resolve merge conflicts and merge all open PRs into main
# Optimized for handling thousands of unmerged branches
=======
# Optimized for handling thousands of unmerged branches
set -e

echo "🚀 Starting comprehensive merge conflict resolution for all open PRs..."
echo "📊 Total unmerged branches to process: $(git branch -r --no-merged main | wc -l)"
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
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0
=======
TOTAL_PROCESSED=0

# Get all unmerged branches, prioritizing cursor branches
CURSOR_BRANCHES=$(git branch -r --no-merged main | grep "origin/cursor/" | sed 's/origin\///' | sort)
OTHER_BRANCHES=$(git branch -r --no-merged main | grep -v "origin/cursor/" | sed 's/origin\///' | sort)

# Combine branches with cursor branches first
ALL_BRANCHES="$CURSOR_BRANCHES $OTHER_BRANCHES"

echo "📋 Processing cursor branches first, then other branches"
echo "🔍 Found $(echo "$CURSOR_BRANCHES" | wc -l) cursor branches"
echo "🔍 Found $(echo "$OTHER_BRANCHES" | wc -l) other branches"
echo "---"

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
    if [ "$commit_count" -gt 200 ]; then
=======
    if [ "$commit_count" -gt 200 ]; then
        echo "⚠️  Skipping $branch - too many commits ($commit_count)"
        return 1
    fi
    
    return 0
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Try different merge strategies
    local merge_success=false
    
    # Strategy 1: Try regular merge
    echo "  📋 Trying regular merge..."
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch (regular merge)"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        merge_success=true
    else
        echo "⚠️  Regular merge failed, trying alternative strategies..."
        
        # Strategy 2: Try with recursive strategy
        git merge --abort
        echo "  📋 Trying recursive merge strategy..."
        if git merge --no-commit --no-ff "origin/$branch" --strategy=recursive -X theirs 2>/dev/null; then
            echo "✅ Successfully merged $branch (recursive strategy)"
            git commit -m "Merge $branch into main using recursive strategy - $(date)"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            merge_success=true
        else
            # Strategy 3: Try with ours strategy
            git merge --abort
            echo "  📋 Trying ours strategy..."
            if git merge --no-commit --no-ff "origin/$branch" --strategy=recursive -X ours 2>/dev/null; then
                echo "✅ Successfully merged $branch (ours strategy)"
                git commit -m "Merge $branch into main using ours strategy - $(date)"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                merge_success=true
            else
                # Strategy 4: Manual conflict resolution
                echo "⚠️  All automatic strategies failed, attempting manual conflict resolution..."
                
                # Get list of conflicted files
                local conflicted_files=$(git diff --name-only --diff-filter=U)
                
                if [ -n "$conflicted_files" ]; then
                    echo "📋 Conflicted files: $conflicted_files"
                    
                    # Resolve conflicts in each file
                    for file in $conflicted_files; do
                        if [ -f "$file" ]; then
                            resolve_conflicts "$file" "$branch"
                        fi
                    done
                    
                    # Add resolved files
                    git add .
                    
                    # Commit the merge
                    git commit -m "Resolve merge conflicts for $branch - $(date)"
                    
                    echo "✅ Successfully resolved conflicts and merged $branch"
                    SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                    merge_success=true
                else
                    echo "❌ No conflicted files found, but merge failed. Aborting..."
                    git merge --abort
                    FAILED_MERGES=$((FAILED_MERGES + 1))
                    return 1
                fi
            fi
        fi
    fi
    
    if [ "$merge_success" = true ]; then
        echo "✅ Branch $branch merged successfully"
        return 0
    else
        return 1
    fi
}

=======
# Main processing loop with progress tracking
echo "🔄 Starting branch processing..."
echo "---"

# Process branches in batches to avoid overwhelming the system
BATCH_SIZE=50
CURRENT_BATCH=0

for branch in $ALL_BRANCHES; do
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    CURRENT_BATCH=$((CURRENT_BATCH + 1))
    
    echo "📋 Processing branch: $branch (${TOTAL_PROCESSED}/$(echo "$ALL_BRANCHES" | wc -l))"
    
    # Check if branch can be merged
    if ! can_merge_branch "$branch"; then
        echo "⏭️  Skipping $branch (already merged, doesn't exist, or too complex)"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        continue
    fi
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        echo "✅ Branch $branch processed successfully"
    else
        echo "❌ Failed to process branch $branch"
    fi
    
    # Progress update
    echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
=======
    echo "📈 Success rate: $((SUCCESSFUL_MERGES * 100 / TOTAL_PROCESSED))%"
    echo "---"
    
    # Push changes periodically to avoid losing work
    if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main
    fi
    
=======
    # Batch processing - take a break every batch
    if [ $CURRENT_BATCH -eq $BATCH_SIZE ]; then
        echo "🔄 Completed batch $((TOTAL_PROCESSED / BATCH_SIZE)). Taking a short break..."
        sleep 5
        CURRENT_BATCH=0
        
        # Force push every few batches to ensure remote is updated
        if [ $((TOTAL_PROCESSED % (BATCH_SIZE * 5))) -eq 0 ]; then
            echo "💾 Force pushing to remote..."
            git push origin main --force-with-lease
        fi
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 0.5
done

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Comprehensive merge conflict resolution completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   📈 Total processed: $TOTAL_PROCESSED"
=======
echo "   📈 Total processed: $TOTAL_PROCESSED"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
echo "🧹 Cleanup recommendations:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application thoroughly"
echo "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
echo "   4. Consider cleaning up old feature branches"
echo "   5. Run tests to ensure everything works: npm test"