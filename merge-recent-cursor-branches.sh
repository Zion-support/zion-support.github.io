#!/bin/bash

# Merge recent cursor branches (last 200 by date)
set -e

echo "🚀 Starting merge of recent cursor branches..."
echo "⏰ Started at: $(date)"

# Create backup
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Ensure we're on main and it's up to date
echo "🔄 Ensuring main branch is up to date..."
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0
CONFLICT_RESOLUTIONS=0

# Get recent cursor branches (last 200 by commit date)
echo "📊 Getting recent cursor branches..."
RECENT_BRANCHES=$(git for-each-ref --sort=-committerdate refs/remotes/origin/cursor/ --format='%(refname:short)' | head -200)
TOTAL_BRANCHES=$(echo "$RECENT_BRANCHES" | wc -l)

echo "📊 Processing $TOTAL_BRANCHES recent branches..."

# Function to resolve conflicts
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    if [ ! -f "$file" ]; then
        return
    fi
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Different strategies for different file types
    case "$file" in
        "package.json"|"package-lock.json")
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "next.config.js"|"tsconfig.json"|"tailwind.config.js")
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "app/layout.tsx"|"app/page.tsx")
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        *)
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
    esac
}

# Process each branch
CURRENT=0
for branch in $RECENT_BRANCHES; do
    CURRENT=$((CURRENT + 1))
    echo "📋 [$CURRENT/$TOTAL_BRANCHES] Processing branch: $branch"
    
    # Skip if already merged
    if git branch --merged main | grep -q "$branch"; then
        echo "⏭️  Already merged, skipping"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        continue
    fi
    
    # Fetch the branch
    git fetch origin "$branch" 2>/dev/null || {
        echo "❌ Failed to fetch $branch"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        continue
    }
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit -m "Merge $branch into main - $(date)"
        echo "✅ Successfully merged $branch"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "🔧 Resolving conflicts in: $CONFLICTED_FILES"
            
            # Resolve conflicts
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
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
    
    # Push progress every 50 branches
    if [ $((CURRENT % 50)) -eq 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main 2>/dev/null || echo "⚠️  Push failed, continuing..."
        echo "📊 Progress: $CURRENT/$TOTAL_BRANCHES processed"
    fi
done

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Recent cursor branches merge completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   📈 Total processed: $CURRENT"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Show recent commits
echo ""
echo "📝 Recent commits:"
git log --oneline -20

echo ""
echo "🎯 Recent cursor branches have been processed successfully!"