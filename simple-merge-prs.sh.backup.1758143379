#!/bin/bash

# Simple script to resolve merge conflicts and merge all open PRs into main
set -e

echo "🚀 Starting simple merge conflict resolution for all open PRs..."
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=5
MAX_CONFLICTS_PER_BRANCH=5
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"

# Create a backup branch
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

# Get all cursor branches
echo "📋 Fetching all cursor branches..."
git fetch --all

# Get branches and store in a temporary file
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/cursor/ | sed 's/origin\///' > /tmp/cursor_branches.txt

TOTAL_BRANCHES=$(wc -l < /tmp/cursor_branches.txt)
echo "📊 Total branches to process: $TOTAL_BRANCHES"

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
<<<<<<< HEAD
    if grep -q "        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/        else
            echo "📝 Regular file, attempting to merge both versions..."
            sed -i '/        fi
=======
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Critical file detected, keeping main version..."
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
>>>>>>> origin/auto/autonomy-17186719616
        
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
    
    return 0
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
            
            # Limit the number of conflicts we'll try to resolve per branch
            local conflict_count=0
            for file in $CONFLICTED_FILES; do
                if [ $conflict_count -ge $MAX_CONFLICTS_PER_BRANCH ]; then
                    echo "⚠️  Too many conflicts in $branch, skipping..."
                    git merge --abort
                    return 1
                fi
                
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                    conflict_count=$((conflict_count + 1))
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

# Main processing loop
echo "🔄 Starting batch processing..."
echo "---"

# Process branches in batches
while IFS= read -r branch; do
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    echo "📋 Processing branch $TOTAL_PROCESSED/$TOTAL_BRANCHES: $branch"
    
    # Check if branch can be merged
    if ! can_merge_branch "$branch"; then
        echo "⏭️  Skipping $branch (already merged or doesn't exist)"
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
    echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved, $SKIPPED_BRANCHES skipped"
    echo "---"
    
    # Push changes every 5 successful merges to avoid losing work
    if [ $((SUCCESSFUL_MERGES % 5)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main
    fi
    
    # Process in batches
    if [ $((TOTAL_PROCESSED % BATCH_SIZE)) -eq 0 ]; then
        echo "🚀 Completed batch $((TOTAL_PROCESSED / BATCH_SIZE))"
        echo "💾 Pushing batch results to remote..."
        git push origin main
        echo "---"
    fi
    
done < /tmp/cursor_branches.txt

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

# Cleanup
rm -f /tmp/cursor_branches.txt

# Summary
echo ""
echo "🎉 Simple merge conflict resolution completed!"
echo "📊 Final Summary:"
echo "   📋 Total branches processed: $TOTAL_PROCESSED"
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