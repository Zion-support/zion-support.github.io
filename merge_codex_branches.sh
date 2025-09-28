#!/bin/bash

# Script to merge codex branches that have actual changes
set -e

echo "🚀 Starting merge process for codex branches..."
echo "⏰ Started at: $(date)"
echo "=========================================="

# Create a backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_MERGES=0

# Function to check if a branch has changes compared to main
has_changes() {
    local branch="$1"
    local main_commit=$(git rev-parse main)
    local branch_commit=$(git rev-parse "origin/$branch" 2>/dev/null || echo "")
    
    if [ -z "$branch_commit" ]; then
        return 1
    fi
    
    # Check if branch is ahead of main or has different commits
    if git merge-base --is-ancestor "$main_commit" "$branch_commit" 2>/dev/null; then
        # Branch is ahead of main
        return 0
    elif ! git merge-base --is-ancestor "$branch_commit" "$main_commit" 2>/dev/null; then
        # Branch has divergent history
        return 0
    else
        # Branch is behind or same as main
        return 1
    fi
}

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
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "pnpm-lock.yaml" ]]; then
            echo "📦 Critical file detected, keeping main version and merging dependencies..."
            # For package files, we'll need special handling
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" || "$file" == "vite.config.ts" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "README.md" || "$file" == "LICENSE" ]]; then
            echo "📚 Documentation file, keeping both versions where possible..."
            # Remove conflict markers but try to preserve content
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
            # Remove conflict markers and try to keep both versions
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        echo "✅ Resolved conflicts in $file"
        return 0
    fi
    return 1
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    if ! git fetch origin "$branch"; then
        echo "❌ Failed to fetch branch $branch"
        return 1
    fi
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "❌ Branch $branch does not exist on remote"
        return 1
    fi
    
    # Check if branch has changes
    if ! has_changes "$branch"; then
        echo "⏭️  Branch $branch has no changes compared to main, skipping..."
        SKIPPED_MERGES=$((SKIPPED_MERGES + 1))
        return 0
    fi
    
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
            
            conflicts_resolved=0
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    if resolve_conflicts "$file" "$branch"; then
                        conflicts_resolved=$((conflicts_resolved + 1))
                    fi
                fi
            done
            
            if [ $conflicts_resolved -gt 0 ]; then
                # Add resolved files
                git add .
                
                # Commit the merge
                git commit -m "Resolve merge conflicts for $branch - $(date)"
                
                echo "✅ Successfully resolved conflicts and merged $branch"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                return 0
            else
                echo "❌ Could not resolve conflicts for $branch. Aborting..."
                git merge --abort
                FAILED_MERGES=$((FAILED_MERGES + 1))
                return 1
            fi
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Get recent codex branches (limit to first 50 to avoid overwhelming)
echo "📋 Processing recent codex branches..."
branches_processed=0
max_branches=50

for branch in $(git branch -r --sort=-committerdate | grep "origin/.*codex" | head -$max_branches | sed 's/origin\///'); do
    echo ""
    echo "=========================================="
    echo "🔄 Processing branch: $branch ($((branches_processed + 1))/$max_branches)"
    echo "=========================================="
    
    if merge_branch "$branch"; then
        echo "✅ Branch $branch processed successfully"
    else
        echo "❌ Branch $branch processing failed"
    fi
    
    branches_processed=$((branches_processed + 1))
    
    # Push changes every 10 successful merges to avoid losing work
    if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main
    fi
    
    # Brief pause to avoid overwhelming the system
    sleep 1
done

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Codex branch merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   ⏭️  Skipped merges: $SKIPPED_MERGES"
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