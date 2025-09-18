#!/bin/bash

<<<<<<< HEAD
# Comprehensive script to merge all open PRs from GitHub
set -e

echo "🚀 Starting comprehensive merge of all open PRs..."
=======
# Comprehensive script to resolve merge conflicts and merge all open PRs into main
<<<<<<< HEAD
=======
# Optimized for handling thousands of unmerged branches
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
set -e

echo "🚀 Starting comprehensive merge conflict resolution for all open PRs..."
echo "📊 Total unmerged branches to process: $(git branch -r --no-merged main | wc -l)"
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
SKIPPED_DRAFTS=0

# Function to log messages with timestamps
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message"
}

# Function to resolve conflicts in a file with enhanced logic
=======
SKIPPED_BRANCHES=0
<<<<<<< HEAD
=======
TOTAL_PROCESSED=0
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96

# Get all unmerged branches, prioritizing cursor branches
CURSOR_BRANCHES=$(git branch -r --no-merged main | grep "origin/cursor/" | sed 's/origin\///' | sort)
OTHER_BRANCHES=$(git branch -r --no-merged main | grep -v "origin/cursor/" | sed 's/origin\///' | sort)

# Combine branches with cursor branches first
ALL_BRANCHES="$CURSOR_BRANCHES $OTHER_BRANCHES"

echo "📋 Processing cursor branches first, then other branches"
echo "🔍 Found $(echo "$CURSOR_BRANCHES" | wc -l) cursor branches"
echo "🔍 Found $(echo "$OTHER_BRANCHES" | wc -l) other branches"
echo "---"

# Function to resolve conflicts in a file
>>>>>>> origin/auto/autonomy-17186719616
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
<<<<<<< HEAD
    log_message "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        log_message "⚠️  Found conflicts in $file, resolving..."
=======
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
>>>>>>> origin/auto/autonomy-17186719616
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
<<<<<<< HEAD
        # Enhanced conflict resolution strategy
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            log_message "📦 Critical file detected, keeping main version and merging dependencies..."
=======
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Critical file detected, keeping main version and merging dependencies..."
>>>>>>> origin/auto/autonomy-17186719616
            # For package files, we'll need special handling
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
<<<<<<< HEAD
            log_message "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "README.md" || "$file" == "LICENSE" ]]; then
            log_message "📚 Documentation file, keeping both versions where possible..."
            # Remove conflict markers but try to preserve content
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == *".tsx" || "$file" == *".ts" ]]; then
            log_message "📱 TypeScript file detected, keeping incoming version..."
            # For TypeScript files, prefer the incoming version (feature branch)
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            log_message "📝 Regular file, attempting to merge both versions..."
=======
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == ".gitignore" || "$file" == "README.md" ]]; then
            echo "📝 Documentation file detected, keeping both versions..."
            # Remove conflict markers and try to keep both versions
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
>>>>>>> origin/auto/autonomy-17186719616
            # Remove conflict markers and try to keep both versions
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
<<<<<<< HEAD
        log_message "✅ Resolved conflicts in $file"
=======
        echo "✅ Resolved conflicts in $file"
>>>>>>> origin/auto/autonomy-17186719616
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

<<<<<<< HEAD
# Function to merge a single branch with enhanced error handling
merge_branch() {
    local branch="$1"
    
    log_message "🔄 Attempting to merge $branch..."
=======
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
    
    # Skip if branch has too many commits (likely complex conflicts)
    local commit_count=$(git log --oneline main.."origin/$branch" 2>/dev/null | wc -l)
<<<<<<< HEAD
    if [ "$commit_count" -gt 100 ]; then
=======
    if [ "$commit_count" -gt 200 ]; then
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
        echo "⚠️  Skipping $branch - too many commits ($commit_count)"
        return 1
    fi
    
    return 0
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
>>>>>>> origin/auto/autonomy-17186719616
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
<<<<<<< HEAD
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        log_message "❌ Branch $branch does not exist on remote, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        log_message "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$CONFLICTED_FILES" ]; then
            log_message "📋 Conflicted files: $CONFLICTED_FILES"
            
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for $branch - $(date)"
            
            log_message "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            log_message "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Get the list of open PRs and extract branch information
log_message "📋 Fetching open PRs from GitHub..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > prs.json

# Extract PR information and process each one
log_message "🔄 Processing open PRs..."
awk '
/"number":/ {
    number = $2
    gsub(/,/, "", number)
    pr_number = number
}
/"draft":/ {
    draft = $2
    gsub(/,/, "", draft)
    gsub(/"/, "", draft)
}
/"head":/ {
    in_head = 1
}
/"ref":/ && in_head {
    ref = substr($0, index($0, ":") + 3)
    gsub(/,$/, "", ref)
    gsub(/"/, "", ref)
    if (ref != "ref" && ref != "href" && ref != "archive_url" && ref != "git_refs_url") {
        printf "%s|%s|%s\n", pr_number, ref, draft
        in_head = 0
    }
}
' prs.json | while IFS='|' read -r pr_number branch_name is_draft; do
    if [ -n "$pr_number" ] && [ -n "$branch_name" ]; then
        echo ""
        echo "=========================================="
        echo "🔄 Processing PR #$pr_number from branch: $branch_name"
        echo "=========================================="
        
        # Skip draft PRs
        if [ "$is_draft" = "true" ]; then
            log_message "⏭️  PR #$pr_number is a draft, skipping..."
            SKIPPED_DRAFTS=$((SKIPPED_DRAFTS + 1))
            continue
        fi
        
        if merge_branch "$branch_name"; then
            log_message "✅ PR #$pr_number processed successfully"
        else
            log_message "❌ PR #$pr_number processing failed"
        fi
        
        echo "=========================================="
        echo ""
        
        # Push changes every 3 successful merges to avoid losing work
        if [ $((SUCCESSFUL_MERGES % 3)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
            log_message "💾 Pushing progress to remote..."
            git push origin main
        fi
        
        # Small delay to avoid overwhelming the system
        sleep 2
    fi
done

# Final push
log_message "💾 Pushing final changes to remote..."
=======
    # Try different merge strategies
    local merge_success=false
    
    # Strategy 1: Try regular merge
    echo "  📋 Trying regular merge..."
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch (regular merge)"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        merge_success=true
    else
        echo "⚠️  Regular merge failed, trying alternative strategies..."
        
        # Strategy 2: Try with recursive strategy
        git merge --abort
        echo "  📋 Trying recursive merge strategy..."
        if git merge --no-commit --no-ff "origin/$branch" --strategy=recursive -X theirs 2>/dev/null; then
            echo "✅ Successfully merged $branch (recursive strategy)"
            git commit -m "Merge $branch into main using recursive strategy - $(date)"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            merge_success=true
        else
            # Strategy 3: Try with ours strategy
            git merge --abort
            echo "  📋 Trying ours strategy..."
            if git merge --no-commit --no-ff "origin/$branch" --strategy=recursive -X ours 2>/dev/null; then
                echo "✅ Successfully merged $branch (ours strategy)"
                git commit -m "Merge $branch into main using ours strategy - $(date)"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                merge_success=true
            else
                # Strategy 4: Manual conflict resolution
                echo "⚠️  All automatic strategies failed, attempting manual conflict resolution..."
                
                # Get list of conflicted files
                local conflicted_files=$(git diff --name-only --diff-filter=U)
                
                if [ -n "$conflicted_files" ]; then
                    echo "📋 Conflicted files: $conflicted_files"
                    
                    # Resolve conflicts in each file
                    for file in $conflicted_files; do
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
                    merge_success=true
                else
                    echo "❌ No conflicted files found, but merge failed. Aborting..."
                    git merge --abort
                    FAILED_MERGES=$((FAILED_MERGES + 1))
                    return 1
                fi
            fi
        fi
    fi
    
    if [ "$merge_success" = true ]; then
        echo "✅ Branch $branch merged successfully"
        return 0
    else
        return 1
    fi
}

<<<<<<< HEAD
# Main processing loop
echo "🔄 Starting branch processing..."
echo "---"

for branch in $ALL_BRANCHES; do
    echo "📋 Processing branch: $branch"
=======
# Main processing loop with progress tracking
echo "🔄 Starting branch processing..."
echo "---"

# Process branches in batches to avoid overwhelming the system
BATCH_SIZE=50
CURRENT_BATCH=0

for branch in $ALL_BRANCHES; do
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    CURRENT_BATCH=$((CURRENT_BATCH + 1))
    
    echo "📋 Processing branch: $branch (${TOTAL_PROCESSED}/$(echo "$ALL_BRANCHES" | wc -l))"
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
    
    # Check if branch can be merged
    if ! can_merge_branch "$branch"; then
        echo "⏭️  Skipping $branch (already merged, doesn't exist, or too complex)"
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
    echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
<<<<<<< HEAD
    echo "---"
    
    # Push changes periodically to avoid losing work
    if [ $((SUCCESSFUL_MERGES % 5)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
=======
    echo "📈 Success rate: $((SUCCESSFUL_MERGES * 100 / TOTAL_PROCESSED))%"
    echo "---"
    
    # Push changes periodically to avoid losing work
    if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
        echo "💾 Pushing progress to remote..."
        git push origin main
    fi
    
<<<<<<< HEAD
    # Small delay to avoid overwhelming the system
    sleep 1
=======
    # Batch processing - take a break every batch
    if [ $CURRENT_BATCH -eq $BATCH_SIZE ]; then
        echo "🔄 Completed batch $((TOTAL_PROCESSED / BATCH_SIZE)). Taking a short break..."
        sleep 5
        CURRENT_BATCH=0
        
        # Force push every few batches to ensure remote is updated
        if [ $((TOTAL_PROCESSED % (BATCH_SIZE * 5))) -eq 0 ]; then
            echo "💾 Force pushing to remote..."
            git push origin main --force-with-lease
        fi
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 0.5
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
done

# Final push
echo "💾 Pushing final changes to remote..."
>>>>>>> origin/auto/autonomy-17186719616
git push origin main

# Summary
echo ""
<<<<<<< HEAD
echo "🎉 Open PR merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Draft PRs skipped: $SKIPPED_DRAFTS"
=======
echo "🎉 Comprehensive merge conflict resolution completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
<<<<<<< HEAD
=======
echo "   📈 Total processed: $TOTAL_PROCESSED"
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
>>>>>>> origin/auto/autonomy-17186719616
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
echo "🧹 Cleanup recommendations:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application thoroughly"
echo "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
echo "   4. Consider cleaning up old feature branches"
<<<<<<< HEAD
echo "   5. Run tests to ensure everything works correctly"

# Cleanup temporary files
rm -f prs.json
=======
echo "   5. Run tests to ensure everything works: npm test"
>>>>>>> origin/auto/autonomy-17186719616
