#!/bin/bash

# Comprehensive script to merge all open PRs and resolve conflicts
set -e

echo "🚀 Starting comprehensive merge of all open PRs..."
echo "⏰ Started at: $(date)"
echo ""

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
SKIPPED_MERGES=0

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Critical file detected, keeping main version and merging dependencies..."
            # For package files, we'll need special handling
            sed -i '//,//d' "$file"
            sed -i '/        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '//,//d' "$file"
            sed -i '/        elif [[ "$file" == "README.md" || "$file" == "LICENSE" ]]; then
            echo "📚 Documentation file, keeping both versions where possible..."
            # Remove conflict markers but try to preserve content
            sed -i '//,//d' "$file"
            sed -i '/        else
            echo "📝 Regular file, attempting to merge both versions..."
            # Remove conflict markers and try to keep both versions
            sed -i '//,//d' "$file"
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
    if ! git fetch origin "$branch"; then
        echo "❌ Failed to fetch branch $branch"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        return 1
    fi
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "❌ Branch $branch does not exist on remote"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        return 1
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

# Extract PR information from current_prs.json
echo "📋 Processing PRs from current_prs.json..."

# Extract PR numbers and branch names
grep -A 20 '"number"' /workspace/current_prs.json | \
grep -E '("number": [0-9]+|"ref": "[^"]+")' | \
awk '
/"number":/ {
    number = $2
    gsub(/,/, "", number)
    pr_number = number
}
/"ref":/ {
    ref = substr($0, index($0, ":") + 3)
    gsub(/,$/, "", ref)
    gsub(/"/, "", ref)
    if (ref != "ref" && ref != "href" && ref != "archive_url" && ref != "git_refs_url") {
        printf "%s|%s\n", pr_number, ref
    }
}' | while IFS='|' read -r pr_number branch_name; do
    if [ -n "$pr_number" ] && [ -n "$branch_name" ]; then
        echo ""
        echo ""
        echo "🔄 Processing PR #$pr_number from branch: $branch_name"
        echo ""
        
        if merge_branch "$branch_name"; then
            echo "✅ PR #$pr_number processed successfully"
        else
            echo "❌ PR #$pr_number processing failed"
        fi
        
        echo ""
        echo ""
        
        # Push changes every 10 successful merges to avoid losing work
        if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
            echo "💾 Pushing progress to remote..."
            git push origin main
        fi
        
        # Brief pause to avoid overwhelming the system
        sleep 2
    fi
done

# Also process any remaining branches that might not be in the JSON
echo "📋 Processing additional branches from remote..."

# Get all remote branches that start with cursor/ and are not main
for branch in $(git branch -r | grep "origin/cursor/" | grep -v "origin/main" | sed 's/origin\///'); do
    echo ""
    echo ""
    echo "🔄 Processing additional branch: $branch"
    echo ""
    
    if merge_branch "$branch"; then
        echo "✅ Branch $branch processed successfully"
    else
        echo "❌ Branch $branch processing failed"
    fi
    
    echo ""
    echo ""
    
    # Push changes every 10 successful merges
    if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main
    fi
    
    # Brief pause
    sleep 2
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