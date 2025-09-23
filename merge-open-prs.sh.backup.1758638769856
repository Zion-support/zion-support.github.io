#!/bin/bash

<<<<<<< HEAD
# Script to merge only the open PRs from GitHub
set -e

echo "🚀 Starting merge of open PRs only..."
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
            # For package files, we'll need special handling
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
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
=======
# Script to merge open pull requests into main branch
# This script will systematically go through remote branches and merge them

set -e

echo "Starting to merge open pull requests into main branch..."
echo "=================================================="

# Get all remote branches (excluding main and backup branches)
REMOTE_BRANCHES=$(git branch -r | grep -v "origin/main" | grep -v "backup" | sed 's/origin\///')

# Counter for tracking progress
TOTAL_BRANCHES=$(echo "$REMOTE_BRANCHES" | wc -l)
CURRENT=0
SUCCESSFUL=0
FAILED=0
CONFLICTS=0

echo "Found $TOTAL_BRANCHES branches to process"
echo ""

# Function to merge a single branch
merge_branch() {
    local branch_name=$1
    local current=$2
    local total=$3
    
    echo "[$current/$total] Processing branch: $branch_name"
    
    # Checkout the remote branch
    if ! git checkout -b "temp-merge-$branch_name" "origin/$branch_name" 2>/dev/null; then
        echo "  ❌ Failed to checkout branch $branch_name"
        return 1
    fi
    
    # Try to merge with main
    if git merge main --no-edit --no-ff 2>/dev/null; then
        echo "  ✅ Successfully merged $branch_name"
        
        # Switch back to main and merge the temp branch
        git checkout main
        if git merge "temp-merge-$branch_name" --no-edit --no-ff 2>/dev/null; then
            echo "  ✅ Successfully merged into main"
            
            # Clean up temp branch
            git branch -D "temp-merge-$branch_name"
            
            # Push to origin/main
            if git push origin main 2>/dev/null; then
                echo "  ✅ Pushed to origin/main"
                return 0
            else
                echo "  ⚠️  Merged but failed to push to origin/main"
                return 1
            fi
        else
            echo "  ❌ Failed to merge temp branch into main"
            git merge --abort 2>/dev/null || true
            git checkout main
            git branch -D "temp-merge-$branch_name" 2>/dev/null || true
            return 1
        fi
    else
        echo "  ⚠️  Merge conflict detected, attempting to resolve..."
        
        # Check if there are actual conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "  🔧 Resolving merge conflicts..."
            
            # Try to resolve conflicts by taking the incoming changes
            git checkout --theirs . 2>/dev/null || true
            git add . 2>/dev/null || true
            
            if git commit -m "Resolve merge conflicts for $branch_name" 2>/dev/null; then
                echo "  ✅ Conflicts resolved automatically"
                
                # Switch back to main and merge
                git checkout main
                if git merge "temp-merge-$branch_name" --no-edit --no-ff 2>/dev/null; then
                    echo "  ✅ Successfully merged resolved conflicts into main"
                    
                    # Clean up and push
                    git branch -D "temp-merge-$branch_name"
                    if git push origin main 2>/dev/null; then
                        echo "  ✅ Pushed resolved merge to origin/main"
                        return 0
                    else
                        echo "  ⚠️  Merged but failed to push to origin/main"
                        return 1
                    fi
                else
                    echo "  ❌ Failed to merge resolved conflicts into main"
                    git merge --abort 2>/dev/null || true
                    git checkout main
                    git branch -D "temp-merge-$branch_name" 2>/dev/null || true
                    return 1
                fi
            else
                echo "  ❌ Failed to commit resolved conflicts"
                git checkout main
                git branch -D "temp-merge-$branch_name" 2>/dev/null || true
                return 1
            fi
        else
            echo "  ❌ Merge failed for unknown reason"
            git merge --abort 2>/dev/null || true
            git checkout main
            git branch -D "temp-merge-$branch_name" 2>/dev/null || true
>>>>>>> origin/auto/autonomy-17186719616
            return 1
        fi
    fi
}

<<<<<<< HEAD
# Get the list of open PRs and extract branch information
echo "📋 Fetching open PRs from GitHub..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > prs.json

# Extract PR information and process each one
echo "🔄 Processing open PRs..."
awk '
/"number":/ {
    number = $2
    gsub(/,/, "", number)
    pr_number = number
}
/"head":/ {
    in_head = 1
}
/"ref":/ && in_head {
    ref = substr($0, index($0, ":") + 3)
    gsub(/,$/, "", ref)
    gsub(/"/, "", ref)
    if (ref != "ref" && ref != "href" && ref != "archive_url" && ref != "git_refs_url") {
        printf "%s|%s\n", pr_number, ref
        in_head = 0
    }
}
' prs.json | while IFS='|' read -r pr_number branch_name; do
    if [ -n "$pr_number" ] && [ -n "$branch_name" ]; then
        echo ""
        echo "=========================================="
        echo "🔄 Processing PR #$pr_number from branch: $branch_name"
        echo "=========================================="
        
        if merge_branch "$branch_name"; then
            echo "✅ PR #$pr_number processed successfully"
        else
            echo "❌ PR #$pr_number processing failed"
        fi
        
        echo "=========================================="
        echo ""
        
        # Push changes every 5 successful merges to avoid losing work
        if [ $((SUCCESSFUL_MERGES % 5)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
            echo "💾 Pushing progress to remote..."
            git push origin main
        fi
    fi
done

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Open PR merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
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
=======
# Process each branch
while IFS= read -r branch; do
    if [ -n "$branch" ]; then
        CURRENT=$((CURRENT + 1))
        
        if merge_branch "$branch" "$CURRENT" "$TOTAL_BRANCHES"; then
            SUCCESSFUL=$((SUCCESSFUL + 1))
        else
            FAILED=$((FAILED + 1))
        fi
        
        echo ""
    fi
done <<< "$REMOTE_BRANCHES"

echo "=================================================="
echo "Merge process completed!"
echo "Total branches processed: $TOTAL_BRANCHES"
echo "Successful merges: $SUCCESSFUL"
echo "Failed merges: $FAILED"
echo "=================================================="

# Clean up any remaining temp branches
echo "Cleaning up temporary branches..."
git branch | grep "temp-merge-" | xargs -r git branch -D

echo "Cleanup completed!"
>>>>>>> origin/auto/autonomy-17186719616
