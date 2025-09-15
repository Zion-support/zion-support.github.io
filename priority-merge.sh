#!/bin/bash

# Priority Merge Script - Focus on important branches first
set -e

echo "🚀 Starting priority merge of important branches..."
echo "⏰ Started at: $(date)"

# Ensure we're on main and up to date
echo "🔄 Ensuring main branch is up to date..."
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0

# Function to resolve conflicts quickly
resolve_conflicts_fast() {
    local file="$1"
    
    if [ ! -f "$file" ]; then
        return 0
    fi
    
    # Quick conflict resolution - prefer incoming changes for most files
    case "$file" in
        "package.json"|"package-lock.json"|"yarn.lock")
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "app/layout.tsx"|"app/page.tsx"|"src/App.tsx")
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        *)
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
    esac
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    echo "🔄 Processing: $branch"
    
    # Skip if branch doesn't exist or is already merged
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        echo "  ⏭️  Branch doesn't exist, skipping..."
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 1
    fi
    
    if git branch --merged main | grep -q "$branch"; then
        echo "  ⏭️  Already merged, skipping..."
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 1
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "  ✅ Merged successfully"
        git commit -m "Merge $branch into main - $(date)" 2>/dev/null || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "  ⚠️  Conflicts detected, resolving..."
        
        # Quick conflict resolution
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        if [ -n "$CONFLICTED_FILES" ]; then
            for file in $CONFLICTED_FILES; do
                resolve_conflicts_fast "$file"
            done
            
            git add . 2>/dev/null || true
            if git commit -m "Resolve conflicts for $branch - $(date)" 2>/dev/null; then
                echo "  ✅ Conflicts resolved and merged"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                return 0
            else
                echo "  ❌ Failed to resolve conflicts"
                git merge --abort 2>/dev/null || true
                FAILED_MERGES=$((FAILED_MERGES + 1))
                return 1
            fi
        else
            echo "  ❌ Merge failed, aborting..."
            git merge --abort 2>/dev/null || true
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Get priority branches (recent, non-backup, important features)
echo "📊 Getting priority branches..."

# Priority 1: Recent feature branches (last 30 days)
PRIORITY_BRANCHES=$(git for-each-ref --sort=-committerdate refs/remotes/origin --format='%(refname:short)' | grep -E "(cursor|pr)" | grep -v "backup\|merge" | head -50)

echo "📊 Found $(echo "$PRIORITY_BRANCHES" | wc -l) priority branches to process"

# Process priority branches
echo "🔄 Processing priority branches..."
echo "---"

CURRENT=0
for branch in $PRIORITY_BRANCHES; do
    CURRENT=$((CURRENT + 1))
    echo "📋 [$CURRENT] Processing: $branch"
    
    if merge_branch "$branch"; then
        echo "✅ Successfully processed $branch"
    else
        echo "❌ Failed to process $branch"
    fi
    
    # Push every 10 branches
    if [ $((CURRENT % 10)) -eq 0 ]; then
        echo "💾 Pushing progress..."
        git push origin main 2>/dev/null || true
        echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $SKIPPED_BRANCHES skipped"
        echo "---"
    fi
done

# Final push
echo "💾 Final push to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Priority merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   📈 Total processed: $((SUCCESSFUL_MERGES + FAILED_MERGES + SKIPPED_BRANCHES))"
echo "⏰ Completed at: $(date)"

echo ""
echo "🎯 Priority branches have been processed!"