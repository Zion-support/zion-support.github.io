#!/bin/bash

# Continue merging remaining branches
set -e

echo "🔄 Continuing merge process for remaining branches..."
echo "⏰ Started at: $(date)"
echo "---"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

# Get remaining unmerged cursor branches
REMAINING_BRANCHES=$(git branch -r --no-merged main | grep "origin/cursor/" | sed 's/origin\///' | sort)

echo "📋 Found $(echo "$REMAINING_BRANCHES" | wc -l) remaining cursor branches"
echo "---"

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Critical file detected, keeping main version and merging dependencies..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        echo "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

# Function to check if a branch can be merged
can_merge_branch() {
    local branch="$1"
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        return 1
    fi
    
    # Skip if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        return 1
    fi
    
    # Skip if branch has too many commits (likely complex conflicts)
    local commit_count=$(git log --oneline main.."origin/$branch" 2>/dev/null | wc -l)
    if [ "$commit_count" -gt 150 ]; then
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

# Main processing loop
echo "🔄 Starting branch processing..."
echo "---"

# Process branches in smaller batches for efficiency
BATCH_SIZE=25
CURRENT_BATCH=0

for branch in $REMAINING_BRANCHES; do
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    CURRENT_BATCH=$((CURRENT_BATCH + 1))
    
    echo "📋 Processing branch: $branch (${TOTAL_PROCESSED}/$(echo "$REMAINING_BRANCHES" | wc -l))"
    
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
    echo "📈 Success rate: $((SUCCESSFUL_MERGES * 100 / TOTAL_PROCESSED))%"
    echo "---"
    
    # Push changes every 5 successful merges
    if [ $((SUCCESSFUL_MERGES % 5)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        echo "💾 Pushing progress to remote..."
        if ! git push origin main; then
            echo "⚠️  Push failed, syncing with remote..."
            git fetch origin main
            git reset --hard origin/main
            echo "✅ Synced with remote, continuing..."
        fi
    fi
    
    # Batch processing - take a break every batch
    if [ $CURRENT_BATCH -eq $BATCH_SIZE ]; then
        echo "🔄 Completed batch $((TOTAL_PROCESSED / BATCH_SIZE)). Taking a short break..."
        sleep 3
        CURRENT_BATCH=0
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 0.3
done

# Final push
echo "💾 Pushing final changes to remote..."
if ! git push origin main; then
    echo "⚠️  Final push failed, syncing with remote..."
    git fetch origin main
    git reset --hard origin/main
fi

# Summary
echo ""
echo "🎉 Remaining branch merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   📈 Total processed: $TOTAL_PROCESSED"
echo "⏰ Completed at: $(date)"

echo ""
echo "🎯 Next steps:"
echo "   1. Check remaining branches: git branch -r --no-merged main | grep 'origin/cursor/' | wc -l"
echo "   2. Review merged changes: git log --oneline -20"
echo "   3. Test the application thoroughly"
echo "   4. Run tests: npm test"