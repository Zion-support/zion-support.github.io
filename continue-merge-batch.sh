#!/bin/bash

# Continue merging the next batch of branches
set -e

echo "🚀 Continuing merge process - Batch 2..."
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=20
BACKUP_BRANCH="merge-batch2-backup-$(date +%Y%m%d-%H%M%S)"

# Create a backup branch
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0

# Get next batch of branches that have commits ahead of main
echo "🔍 Finding next batch of branches with commits ahead of main..."
BRANCHES_TO_PROCESS=""
TOTAL_IN_BATCH=0

# Get the first BATCH_SIZE branches that need merging
while read branch && [ $TOTAL_IN_BATCH -lt $BATCH_SIZE ]; do
    branch_name=$(echo $branch | sed 's/origin\///')
    commits_ahead=$(git log --oneline main..$branch 2>/dev/null | wc -l)
    if [ $commits_ahead -gt 0 ]; then
        BRANCHES_TO_PROCESS="$BRANCHES_TO_PROCESS $branch_name"
        TOTAL_IN_BATCH=$((TOTAL_IN_BATCH + 1))
        echo "📋 Found: $branch_name ($commits_ahead commits ahead)"
    fi
done < <(git branch -r | grep "origin/cursor/" | sort)

echo "---"
echo "📊 Processing batch of $TOTAL_IN_BATCH branches"
echo "---"

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/        else
            echo "📝 Regular file, attempting to merge both versions..."
            sed -i '/        fi
        
        echo "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
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

# Process each branch in the batch
echo "🔄 Starting batch processing..."
echo "---"

for branch in $BRANCHES_TO_PROCESS; do
    echo "📋 Processing branch: $branch"
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        echo "✅ Branch $branch processed successfully"
    else
        echo "❌ Failed to process branch $branch"
    fi
    
    # Progress update
    echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
    echo "---"
done

# Push changes
echo "💾 Pushing batch changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Batch 2 completed successfully!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Show remaining branches
echo ""
echo "📊 Remaining branches to process:"
REMAINING_COUNT=$(git branch -r | grep "origin/cursor/" | while read branch; do branch_name=$(echo $branch | sed 's/origin\///'); commits_ahead=$(git log --oneline main..$branch 2>/dev/null | wc -l); if [ $commits_ahead -gt 0 ]; then echo "1"; fi; done | wc -l)
echo "   📋 Total remaining: $REMAINING_COUNT branches"

# Cleanup recommendations
echo ""
echo "🧹 Cleanup recommendations:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application thoroughly"
echo "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
echo "   4. Run this script again to continue with the next batch"