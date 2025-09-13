#!/bin/bash

# Complete merge script for all cursor branches
set -e

echo "🚀 Starting complete merge of all cursor branches..."
echo "⏰ Started at: $(date)"

# Create backup
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Get all cursor branches
ALL_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort)
TOTAL_BRANCHES=$(echo "$ALL_BRANCHES" | wc -l)

echo "📊 Total cursor branches to process: $TOTAL_BRANCHES"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0
CONFLICT_RESOLUTIONS=0

# Process each branch
CURRENT=0
echo "$ALL_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    CURRENT=$((CURRENT + 1))
    echo "📋 [$CURRENT/$TOTAL_BRANCHES] Processing: $branch"
    
    # Skip if branch doesn't exist remotely
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        echo "⏭️  Branch doesn't exist remotely, skipping"
        continue
    fi
    
    # Fetch the branch
    git fetch origin "$branch" 2>/dev/null || {
        echo "❌ Failed to fetch $branch"
        continue
    }
    
    # Check if already merged
    if git branch --merged main | grep -q "$branch"; then
        echo "⏭️  Already merged, skipping"
        continue
    fi
    
    # Attempt to merge
    if git merge "origin/$branch" --no-commit --no-ff 2>/dev/null; then
        git commit -m "Merge $branch into main - $(date)"
        echo "✅ Successfully merged $branch"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "⚠️  Merge conflicts detected, resolving..."
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "🔧 Resolving conflicts in: $CONFLICTED_FILES"
            
            # Resolve conflicts by taking the incoming changes for most files
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    # Remove conflict markers and keep both versions where possible
                    if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
                        # For package files, prefer main branch
                        git checkout --ours "$file" 2>/dev/null || true
                    else
                        # For other files, prefer incoming changes
                        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                    fi
                fi
            done
            
            git add .
            
            if git commit -m "Merge $branch with conflicts resolved - $(date)" 2>/dev/null; then
                echo "✅ Resolved conflicts and merged $branch"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
            else
                echo "❌ Failed to resolve conflicts for $branch"
                git merge --abort 2>/dev/null || true
                FAILED_MERGES=$((FAILED_MERGES + 1))
            fi
        else
            echo "❌ No conflicted files found, aborting merge"
            git merge --abort 2>/dev/null || true
            FAILED_MERGES=$((FAILED_MERGES + 1))
        fi
    fi
    
    # Push progress every 100 branches
    if [ $((CURRENT % 100)) -eq 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main 2>/dev/null || echo "⚠️  Push failed, continuing..."
        echo "📊 Progress: $CURRENT/$TOTAL_BRANCHES processed"
        echo "   ✅ Successful: $SUCCESSFUL_MERGES"
        echo "   ❌ Failed: $FAILED_MERGES"
        echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
    fi
done

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

echo ""
echo "🎉 Complete merge process finished!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   📈 Total processed: $CURRENT"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Show recent commits
echo ""
echo "📝 Recent commits:"
git log --oneline -10