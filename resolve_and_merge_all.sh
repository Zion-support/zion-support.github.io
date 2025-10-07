#!/bin/bash

# Comprehensive script to resolve merge conflicts and merge all unmerged branches
set -e

echo "🚀 Starting comprehensive merge resolution process..."
echo "⏰ Started at: $(date)"
echo ""

# Function to log with timestamp
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1"
}

# Function to resolve conflicts in a file
resolve_file_conflicts() {
    local file="$1"
    local branch="$2"
    
    log "🔧 Resolving conflicts in $file for branch $branch"
    
    if [ ! -f "$file" ]; then
        log "⚠️  File $file does not exist, skipping..."
        return 0
    fi
    
    # Check if file has merge conflicts
    if grep -q "" "$file"; then
        log "⚠️  Found conflicts in $file"
        
        # Create backup
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Resolve conflicts based on file type
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "pnpm-lock.yaml" ]]; then
            log "📦 Package file - keeping main version"
            git checkout --ours "$file"
        elif [[ "$file" == "tsconfig.json" || "$file" == "next.config.js" || "$file" == "tailwind.config.js" || "$file" == "vite.config.ts" ]]; then
            log "⚙️  Config file - keeping main version"
            git checkout --ours "$file"
        elif [[ "$file" == "README.md" || "$file" == "LICENSE" || "$file" == "CHANGELOG.md" ]]; then
            log "📚 Documentation - keeping main version"
            git checkout --ours "$file"
        elif [[ "$file" == *".svg" ]]; then
            log "🎨 SVG file - keeping branch version"
            git checkout --theirs "$file"
        elif [[ "$file" == *".tsx" || "$file" == *".ts" ]]; then
            log "📱 TypeScript file - keeping branch version"
            git checkout --theirs "$file"
        elif [[ "$file" == *".md" ]]; then
            log "📝 Markdown file - keeping branch version"
            git checkout --theirs "$file"
        else
            log "📄 Other file - keeping branch version"
            git checkout --theirs "$file"
        fi
        
        git add "$file"
        log "✅ Resolved conflicts in $file"
    else
        log "✅ No conflicts in $file"
    fi
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    log "🔄 Attempting to merge $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        log "❌ Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "$branch" 2>/dev/null; then
        log "✅ Successfully merged $branch (no conflicts)"
        git commit -m "Merge $branch into main - $(date)"
        return 0
    else
        log "⚠️  Merge conflicts detected in $branch"
        
        # Get conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflicted_files" ]; then
            log "📋 Conflicted files: $conflicted_files"
            
            # Resolve each conflicted file
            for file in $conflicted_files; do
                resolve_file_conflicts "$file" "$branch"
            done
            
            # Commit the resolved merge
            if git commit -m "Merge $branch into main (resolved conflicts) - $(date)"; then
                log "✅ Successfully resolved conflicts and merged $branch"
                return 0
            else
                log "❌ Failed to commit resolved merge for $branch"
                git merge --abort
                return 1
            fi
        else
            log "❌ No conflicted files found but merge failed"
            git merge --abort
            return 1
        fi
    fi
}

# Main execution
log "📋 Ensuring we're on main branch..."
git checkout main
git pull origin main

log "📋 Fetching all remote branches..."
git fetch --all

# Get unmerged cursor branches
log "📋 Finding unmerged cursor branches..."
unmerged_branches=$(git branch -r --no-merged main | grep 'cursor/' | head -10)

if [ -z "$unmerged_branches" ]; then
    log "✅ No unmerged cursor branches found!"
    exit 0
fi

log "📋 Found unmerged branches:"
echo "$unmerged_branches"

# Counters
successful_merges=0
failed_merges=0

# Process each branch
for branch in $unmerged_branches; do
    echo ""
    echo ""
    log "🔄 Processing branch: $branch"
    echo ""
    
    if merge_branch "$branch"; then
        successful_merges=$((successful_merges + 1))
        log "✅ Branch $branch processed successfully"
    else
        failed_merges=$((failed_merges + 1))
        log "❌ Branch $branch processing failed"
    fi
    
    echo ""
    
    # Push every 3 successful merges
    if [ $((successful_merges % 3)) -eq 0 ] && [ $successful_merges -gt 0 ]; then
        log "💾 Pushing progress to remote..."
        git push origin main
    fi
    
    # Small delay
    sleep 1
done

# Final push
log "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Merge resolution process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $successful_merges"
echo "   ❌ Failed merges: $failed_merges"
echo "⏰ Completed at: $(date)"
echo ""

# Verify final state
log "🔍 Verifying final state..."
remaining_unmerged=$(git branch -r --no-merged main | grep 'cursor/' | wc -l)
log "📊 Remaining unmerged cursor branches: $remaining_unmerged"

if [ "$remaining_unmerged" -eq 0 ]; then
    log "🎉 All cursor branches successfully merged!"
else
    log "⚠️  Some branches remain unmerged. Check manually."
fi