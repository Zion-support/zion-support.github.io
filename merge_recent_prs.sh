#!/bin/bash

# Smart PR Merge Script - Focus on recent branches first
set -e

echo "🚀 Starting smart PR merge process..."
echo "📊 Total cursor branches: $(git branch -r | grep "origin/cursor/" | wc -l)"
echo "⏰ Started at: $(date)"
echo "---"

# Create backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH" || true
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create backup
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Strategy based on file type
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Package file - keeping main version and merging dependencies..."
            # Keep main version for package files
            git checkout --ours "$file"
        elif [[ "$file" == "*.config.js" || "$file" == "*.config.ts" || "$file" == "tsconfig.json" ]]; then
            echo "⚙️  Config file - keeping main version..."
            git checkout --ours "$file"
        elif [[ "$file" == "README.md" || "$file" == "LICENSE" ]]; then
            echo "📚 Documentation - keeping both versions..."
            # Remove conflict markers but keep content
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file - attempting smart merge..."
            # Try to keep both versions where possible
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        echo "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

# Function to check if branch can be merged
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
    
    # Skip if branch is the same as main
    if git merge-base --is-ancestor "origin/$branch" main; then
        return 1
    fi
    
    return 0
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version
    git fetch origin "$branch" || {
        echo "❌ Failed to fetch $branch"
        return 1
    }
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)" || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                fi
            done
            
            # Add resolved files
            git add . || true
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for $branch - $(date)" || {
                echo "❌ Failed to commit merge for $branch"
                git merge --abort
                return 1
            }
            
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

# Get recent branches (last 100 by commit date)
echo "📋 Getting recent branches to process..."
RECENT_BRANCHES=$(git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/cursor/ | head -100)

echo "🔄 Processing recent branches..."
echo "---"

for branch in $RECENT_BRANCHES; do
    # Remove origin/ prefix
    branch_name=${branch#origin/}
    
    echo "📋 Processing branch: $branch_name"
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    
    # Check if branch can be merged
    if ! can_merge_branch "$branch_name"; then
        echo "⏭️  Skipping $branch_name (already merged or doesn't exist)"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        continue
    fi
    
    # Try to merge the branch
    if merge_branch "$branch_name"; then
        echo "✅ Branch $branch_name processed successfully"
    else
        echo "❌ Failed to process branch $branch_name"
    fi
    
    # Progress update every 10 branches
    if [ $((TOTAL_PROCESSED % 10)) -eq 0 ]; then
        echo "📊 Progress: $TOTAL_PROCESSED processed, $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
        echo "---"
        
        # Push changes periodically
        if [ $SUCCESSFUL_MERGES -gt 0 ] && [ $((SUCCESSFUL_MERGES % 20)) -eq 0 ]; then
            echo "💾 Pushing progress to remote..."
            git push origin main || true
        fi
    fi
    
    # Safety limit - don't process more than 50 branches in one run
    if [ $TOTAL_PROCESSED -ge 50 ]; then
        echo "⚠️  Reached safety limit of 50 branches. Stopping here."
        break
    fi
done

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main || true

# Summary
echo ""
echo "🎉 Smart PR merge process completed!"
echo "📊 Summary:"
echo "   📋 Total processed: $TOTAL_PROCESSED"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
echo "🧹 Next steps:"
echo "   1. Review merged changes: git log --oneline -20"
echo "   2. Test the application: npm run build"
echo "   3. Run additional batches if needed"
echo "   4. Delete backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"

echo "✅ Script completed successfully!"