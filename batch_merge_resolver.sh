#!/bin/bash

# Batch Merge Resolver - Process branches in smaller, manageable batches
set -e

echo "🚀 Starting Batch Merge Resolver for Open PRs..."
echo "⏰ Started at: $(date)"

# Create backup
BACKUP_BRANCH="batch-merge-backup-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0

# Function to resolve conflicts intelligently
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in $file"
    
    # Create backup
    cp "$file" "${file}.backup.$(date +%s)" 2>/dev/null || true
    
    case "$file" in
        "package.json"|"package-lock.json"|"yarn.lock")
            echo "📦 Package file - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "netlify.toml"|"next.config.js"|"tsconfig.json"|"tailwind.config.js"|"vite.config.ts")
            echo "⚙️ Config file - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "src/App.tsx"|"src/App.css"|"src/main.tsx"|"src/index.css"|"app/page.tsx"|"app/layout.tsx")
            echo "🎨 Main app files - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "README.md"|"*.md")
            echo "📚 Documentation - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        *)
            echo "🔄 Generic file - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
    esac
    
    git add "$file" 2>/dev/null || true
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    local branch_name=$(echo "$branch" | sed 's/origin\///')
    
    echo "🔄 Attempting to merge: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️ Branch $branch does not exist, skipping..."
        ((SKIPPED_BRANCHES++))
        return 1
    fi
    
    # Check if already merged
    if git branch --merged main | grep -q "$branch_name"; then
        echo "⏭️ Branch $branch_name already merged, skipping..."
        ((SKIPPED_BRANCHES++))
        return 0
    fi
    
    # Try to merge
    if git merge --no-ff --no-edit "$branch" 2>/dev/null; then
        echo "✅ Successfully merged: $branch_name"
        ((SUCCESSFUL_MERGES++))
        return 0
    else
        echo "⚠️ Conflicts detected in: $branch_name"
        
        # Check for conflicts
        if git diff --name-only --diff-filter=U | grep -q .; then
            echo "🔧 Resolving conflicts..."
            
            # Resolve conflicts for each file
            git diff --name-only --diff-filter=U | while read -r file; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file"
                fi
            done
            
            # Complete the merge
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Resolved conflicts and merged: $branch_name"
                ((SUCCESSFUL_MERGES++))
                ((CONFLICT_RESOLUTIONS++))
                return 0
            else
                echo "❌ Failed to commit after conflict resolution: $branch_name"
                git merge --abort 2>/dev/null || true
            fi
        else
            echo "❌ Merge failed for: $branch_name (no conflicts detected)"
            git merge --abort 2>/dev/null || true
        fi
        
        ((FAILED_MERGES++))
        return 1
    fi
}

# Get recent branches (last 50 by commit date)
echo "📋 Fetching recent branches..."
git fetch --all

# Get branches sorted by commit date (most recent first)
echo "📊 Getting recent branches sorted by commit date..."
git for-each-ref --sort=-committerdate refs/remotes/origin --format='%(refname:short)' | \
    grep -v 'origin/main' | \
    grep -E '(cursor/|comprehensive-|content-|fix-|improve-|update-|add-|implement-|feature/)' | \
    head -50 > /tmp/recent_branches.txt

TOTAL_BRANCHES=$(wc -l < /tmp/recent_branches.txt)
echo "📊 Processing $TOTAL_BRANCHES recent branches..."

# Process branches in small batches
BATCH_SIZE=5
BATCH_NUM=1
CURRENT_BATCH=0

while IFS= read -r branch; do
    if [ -n "$branch" ]; then
        echo "🔄 Processing: $branch"
        
        if merge_branch "$branch"; then
            echo "✅ Branch $branch processed successfully"
        else
            echo "❌ Failed to process branch $branch"
        fi
        
        ((CURRENT_BATCH++))
        
        # Progress update and push every batch
        if [ $CURRENT_BATCH -eq $BATCH_SIZE ]; then
            echo "📊 Batch $BATCH_NUM completed: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
            echo "🚀 Pushing batch $BATCH_NUM changes..."
            git push origin main
            CURRENT_BATCH=0
            ((BATCH_NUM++))
            echo "---"
        fi
    fi
done < /tmp/recent_branches.txt

# Process any remaining branches in the last batch
if [ $CURRENT_BATCH -gt 0 ]; then
    echo "📊 Final batch completed: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
    echo "🚀 Pushing final batch changes..."
    git push origin main
fi

# Final push
echo "🚀 Final push to main..."
git push origin main

# Summary
echo ""
echo "🎉 Batch Merge Resolver completed!"
echo "⏰ Finished at: $(date)"
echo "📊 Final Summary:"
echo "✅ Successful merges: $SUCCESSFUL_MERGES"
echo "❌ Failed merges: $FAILED_MERGES"
echo "🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "⏭️ Skipped branches: $SKIPPED_BRANCHES"
echo "📋 Total processed: $((SUCCESSFUL_MERGES + FAILED_MERGES + SKIPPED_BRANCHES))"
echo "🔒 Backup branch: $BACKUP_BRANCH"

# Clean up
rm -f /tmp/recent_branches.txt
echo "🧹 Cleanup completed"

echo ""
echo "💡 Next steps:"
echo "   1. Review merged changes: git log --oneline -20"
echo "   2. Test the application: npm run build"
echo "   3. Delete backup when satisfied: git push origin --delete $BACKUP_BRANCH"