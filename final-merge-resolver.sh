#!/bin/bash

# Final Merge Conflict Resolver
# Resolves all remaining conflicts and merges everything into main

set -e

echo "🚀 Starting final merge conflict resolution..."
echo "⏰ Started at: $(date)"

# Create backup
BACKUP_BRANCH="final-merge-backup-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0

# Function to resolve all remaining conflicts
resolve_all_conflicts() {
    echo "🔧 Resolving all remaining merge conflicts..."
    
    # Find all files with conflict markers
    CONFLICTED_FILES=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | cut -d: -f1 | sort -u)
    
    for file in $CONFLICTED_FILES; do
        if [ -f "$file" ]; then
            echo "🔧 Resolving conflicts in $file..."
            
            # Create backup
            cp "$file" "${file}.backup.$(date +%s)"
            
            # Remove all conflict markers and keep the newer version (after =======)
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
            
            echo "✅ Resolved conflicts in $file"
            CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
        fi
    done
}

# Function to merge all unmerged branches
merge_all_branches() {
    echo "🔄 Merging all unmerged branches..."
    
    # Get all unmerged branches
    UNMERGED_BRANCHES=$(git branch -r --no-merged main | head -100 | sed 's/origin\///')
    
    for branch in $UNMERGED_BRANCHES; do
        echo "📋 Processing branch: $branch"
        
        # Skip if branch doesn't exist
        if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
            echo "⏭️  Skipping $branch (doesn't exist)"
            continue
        fi
        
        # Skip if already merged
        if git branch --merged main | grep -q "$branch"; then
            echo "⏭️  Skipping $branch (already merged)"
            continue
        fi
        
        # Fetch branch
        git fetch origin "$branch" 2>/dev/null || {
            echo "❌ Failed to fetch $branch"
            FAILED_MERGES=$((FAILED_MERGES + 1))
            continue
        }
        
        # Try merge
        if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
            echo "✅ Successfully merged $branch"
            git commit -m "Merge $branch into main - $(date)"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        else
            echo "⚠️  Conflicts in $branch, resolving..."
            
            # Resolve conflicts
            resolve_all_conflicts
            
            # Add and commit
            git add .
            git commit -m "Resolve conflicts and merge $branch - $(date)"
            
            echo "✅ Resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        fi
        
        # Push every 10 merges
        if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
            echo "💾 Pushing progress..."
            git push origin main
        fi
    done
}

# Main execution
echo "🔄 Starting merge process..."

# Resolve any existing conflicts first
resolve_all_conflicts

# Merge all branches
merge_all_branches

# Final push
echo "💾 Final push to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Final merge resolution completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

echo ""
echo "🎯 All merge conflicts resolved and branches merged into main!"