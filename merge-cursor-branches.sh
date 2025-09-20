#!/bin/bash

# Script to merge all cursor branches into main
set -e

echo "🚀 Starting comprehensive merge of all cursor branches..."
echo "⏰ Started at: $(date)"

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Create backup
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
ALREADY_MERGED=0
TOTAL_PROCESSED=0

# Get all cursor branches
echo "📊 Getting all cursor branches..."
CURSOR_BRANCHES=$(git ls-remote --heads origin | grep "cursor/" | sed 's/.*refs\/heads\///' | head -100)
TOTAL_BRANCHES=$(echo "$CURSOR_BRANCHES" | wc -l)

echo "📊 Total cursor branches to process: $TOTAL_BRANCHES"

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    
    echo ""
    echo "📋 [$TOTAL_PROCESSED/$TOTAL_BRANCHES] Processing branch: $branch"
    
    # Fetch the branch
    git fetch origin "$branch"
    
    # Check if already merged
    if git merge-base --is-ancestor "origin/$branch" main 2>/dev/null; then
        echo "✅ Branch $branch is already merged"
        ALREADY_MERGED=$((ALREADY_MERGED + 1))
        return 0
    fi
    
    echo "🔄 Attempting to merge $branch..."
    
    # Try to merge
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "⚠️  Merge conflict detected in $branch"
        
        # Check for conflicts
        if git diff --name-only --diff-filter=U | grep -q .; then
            echo "🔧 Resolving conflicts..."
            
            # Resolve conflicts automatically
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
            for file in $CONFLICTED_FILES; do
                echo "🔧 Resolving conflicts in $file..."
                
                # Smart conflict resolution based on file type
                if [[ "$file" == "package.json" ]] || [[ "$file" == "package-lock.json" ]]; then
                    git checkout --ours "$file"
                elif [[ "$file" == src/components/* ]] || [[ "$file" == src/pages/* ]]; then
                    git checkout --theirs "$file"
                elif [[ "$file" == *.md ]] || [[ "$file" == *.txt ]]; then
                    git checkout --ours "$file"
                else
                    git checkout --ours "$file"
                fi
                git add "$file"
            done
            
            # Commit the merge
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Successfully resolved conflicts and merged $branch"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                return 0
            else
                echo "❌ Failed to resolve conflicts for $branch"
                git merge --abort 2>/dev/null || true
                FAILED_MERGES=$((FAILED_MERGES + 1))
                return 1
            fi
        else
            echo "❌ Failed to merge $branch"
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Process all cursor branches
echo "$CURSOR_BRANCHES" | while IFS= read -r branch; do
    if [ -n "$branch" ]; then
        merge_branch "$branch"
        
        # Push progress every 10 merges
        if [ $((TOTAL_PROCESSED % 10)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
            echo "💾 Pushing progress to remote..."
            git push origin main 2>/dev/null || echo "⚠️  Push failed, continuing..."
            echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $ALREADY_MERGED already merged"
        fi
    fi
done

echo ""
echo "🎉 Cursor branch merge process completed!"
echo "📊 Final Results:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   ⏭️  Already merged: $ALREADY_MERGED"
echo "   📋 Total processed: $TOTAL_PROCESSED"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Final push
echo "💾 Final push to remote..."
if git push origin main; then
    echo "✅ Successfully pushed all changes"
else
    echo "⚠️  Final push failed, but merges were successful locally"
fi