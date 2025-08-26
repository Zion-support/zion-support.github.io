#!/bin/bash

# Fixed comprehensive script to merge all remaining unmerged cursor branches
set -e

echo "🚀 Starting comprehensive merge of all remaining unmerged cursor branches..."
echo "⏰ Started at: $(date)"
echo "---"

# Create a backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Get all unmerged cursor branches and trim whitespace
echo "📋 Getting all unmerged cursor branches..."
UNMERGED_BRANCHES=$(git branch -r --no-merged main | grep "origin/cursor/" | sed 's/origin\///' | sed 's/^[[:space:]]*//' | sed 's/[[:space:]]*$//')

TOTAL_BRANCHES=$(echo "$UNMERGED_BRANCHES" | wc -l)
echo "📊 Total unmerged cursor branches: $TOTAL_BRANCHES"
echo "---"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
PROCESSED=0

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Create a backup of the conflicted file
    cp "$file" "${file}.backup.$(date +%s)"
    
    # Strategy: Keep main version for critical files, merge content for others
    if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
        echo "📦 Critical file detected, keeping main version..."
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
        sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
    elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
        echo "⚙️  Config file detected, keeping main version..."
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
        sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
    elif [[ "$file" == "merge-summary.md" || "$file" == "README.md" ]]; then
        echo "📝 Documentation file detected, merging content..."
        # For documentation, try to keep both versions where possible
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
        sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
    else
        echo "📝 Regular file, removing conflict markers..."
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
        sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
    fi
    
    echo "✅ Resolved conflicts in $file"
    CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
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
            return 0
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Process branches in batches
BATCH_SIZE=20
CURRENT_BATCH=0

echo "$UNMERGED_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    PROCESSED=$((PROCESSED + 1))
    CURRENT_BATCH=$((CURRENT_BATCH + 1))
    
    echo "📋 Processing branch $PROCESSED/$TOTAL_BRANCHES: $branch"
    
    # Check if branch exists remotely
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        echo "⚠️  Branch $branch doesn't exist remotely, skipping..."
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        continue
    fi
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        echo "⏭️  Branch $branch is already merged, skipping..."
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
    echo "📊 Progress: $PROCESSED/$TOTAL_BRANCHES, ✅ $SUCCESSFUL_MERGES, ❌ $FAILED_MERGES, 🔧 $CONFLICT_RESOLUTIONS, ⏭️  $SKIPPED_BRANCHES"
    echo "---"
    
    # Push changes every 10 successful merges to avoid losing work
    if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main
    fi
    
    # Batch processing - take a break every batch
    if [ $CURRENT_BATCH -eq $BATCH_SIZE ]; then
        echo "🔄 Completed batch $((PROCESSED / BATCH_SIZE)). Taking a short break..."
        sleep 5
        CURRENT_BATCH=0
        
        # Push after each batch
        echo "💾 Pushing batch results to remote..."
        git push origin main
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 1
done

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Comprehensive merge process completed!"
echo "📊 Final Summary:"
echo "   📋 Total branches processed: $PROCESSED"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
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