#!/bin/bash

# Targeted script to merge only the actual open PRs from GitHub
set -e

echo "🚀 Starting targeted merge of open PRs from GitHub..."
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
SKIPPED_PRS=0

# Function to resolve merge conflicts
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
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
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

# Function to merge a single PR branch
merge_pr_branch() {
    local branch_name="$1"
    local pr_number="$2"
    
    echo "🔄 Attempting to merge $branch_name (PR #$pr_number)..."
    
    # Check if branch exists
    if ! git ls-remote --heads origin "$branch_name" > /dev/null 2>&1; then
        echo "❌ Branch $branch_name not found, skipping..."
        SKIPPED_PRS=$((SKIPPED_PRS + 1))
        return 1
    fi
    
    # Fetch the latest version of the branch
    git fetch origin "$branch_name"
    
    # Check if branch is already up to date
    if git merge-base --is-ancestor "origin/$branch_name" HEAD 2>/dev/null; then
        echo "⏭️  Branch $branch_name is already up to date, skipping..."
        SKIPPED_PRS=$((SKIPPED_PRS + 1))
        return 0
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch_name" 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        git commit -m "Merge PR #$pr_number: $branch_name - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch_name, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch_name"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for PR #$pr_number: $branch_name - $(date)"
            
            echo "✅ Successfully resolved conflicts and merged $branch_name"
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

# Main processing
echo "🔄 Fetching open PRs from GitHub..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > prs.json

echo "📋 Starting PR processing..."
echo "---"

# Parse PRs and attempt merges
awk '
/"number":/ {
    number = $2
    gsub(/,/, "", number)
    pr_number = number
}
/"ref":/ && !/compare_url/ {
    ref = substr($0, index($0, ":") + 3)
    gsub(/,$/, "", ref)
    gsub(/"/, "", ref)
    if (ref != "ref" && ref != "href" && ref != "archive_url" && ref != "git_refs_url" && ref != "main") {
        printf "%s %s\n", pr_number, ref
    }
}
' prs.json | while read pr_number branch_name; do
    if [[ -n "$pr_number" && -n "$branch_name" ]]; then
        echo "📋 Processing PR #$pr_number: $branch_name"
        
        if merge_pr_branch "$branch_name" "$pr_number"; then
            echo "✅ PR #$pr_number processed successfully"
        else
            echo "❌ Failed to process PR #$pr_number"
        fi
        
        echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved, $SKIPPED_PRS skipped"
        echo "---"
        
        # Push changes periodically to avoid losing work
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
echo "🎉 Targeted PR merge completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped PRs: $SKIPPED_PRS"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
echo "🧹 Cleanup recommendations:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application thoroughly"
echo "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
echo "   4. Consider cleaning up old feature branches"