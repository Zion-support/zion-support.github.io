#!/bin/bash

# Batch Merge PRs Script - Process branches in smaller batches
set -e

echo "🚀 Starting batch merge process for open PRs..."
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=100
MAX_BATCHES=10
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0

# Create backup
BACKUP_BRANCH="batch-backup-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Function to resolve conflicts
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in $file"
    
    case "$file" in
        "package.json"|"package-lock.json"|"yarn.lock"|"pnpm-lock.yaml")
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "netlify.toml"|"next.config.js"|"tsconfig.json"|"tailwind.config.js"|"vite.config.ts")
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "src/App.tsx"|"src/App.css"|"src/main.tsx"|"src/index.css")
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "README.md"|"*.md")
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        *)
            git checkout --ours "$file" 2>/dev/null || true
            ;;
    esac
    
    git add "$file" 2>/dev/null || true
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    echo "🔄 Processing: $branch"
    
    # Skip if branch doesn't exist or is already merged
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        echo "⏭️ Branch $branch doesn't exist"
        ((SKIPPED_BRANCHES++))
        return 1
    fi
    
    if git branch --merged main | grep -q "$branch" 2>/dev/null; then
        echo "⏭️ Branch $branch already merged"
        ((SKIPPED_BRANCHES++))
        return 1
    fi
    
    # Fetch and merge
    if ! git fetch origin "$branch" 2>/dev/null; then
        echo "⚠️ Could not fetch $branch"
        ((SKIPPED_BRANCHES++))
        return 1
    fi
    
    if git merge --no-edit "origin/$branch" 2>/dev/null; then
        echo "✅ Merged $branch"
        ((SUCCESSFUL_MERGES++))
        return 0
    else
        echo "⚠️ Conflicts in $branch - resolving..."
        
        # Resolve conflicts
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
        if [ -n "$CONFLICTED_FILES" ]; then
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file"
                fi
            done
            
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Resolved conflicts and merged $branch"
                ((SUCCESSFUL_MERGES++))
                return 0
            fi
        fi
        
        echo "❌ Failed to merge $branch"
        git merge --abort 2>/dev/null || true
        ((FAILED_MERGES++))
        return 1
    fi
}

# Get branches to process
echo "📋 Fetching branches..."
git fetch --all

# Get cursor branches (limit to first 1000 for this batch)
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sed 's/^[[:space:]]*//' | head -1000)
CODEX_BRANCHES=$(git branch -r | grep "origin/codex/" | sed 's/origin\///' | sed 's/^[[:space:]]*//' | head -500)

ALL_BRANCHES=$(echo -e "$CURSOR_BRANCHES\n$CODEX_BRANCHES" | sort -u | head -1000)
TOTAL_BRANCHES=$(echo "$ALL_BRANCHES" | wc -l)

echo "📊 Processing $TOTAL_BRANCHES branches in batches of $BATCH_SIZE"
echo "---"

# Process branches
PROCESSED=0
for branch in $ALL_BRANCHES; do
    if [ -n "$branch" ]; then
        if merge_branch "$branch"; then
            echo "✅ Success"
        else
            echo "❌ Failed"
        fi
        
        ((PROCESSED++))
        
        # Progress update every batch
        if [ $((PROCESSED % BATCH_SIZE)) -eq 0 ]; then
            echo "📊 Progress: $PROCESSED/$TOTAL_BRANCHES"
            echo "✅ Successful: $SUCCESSFUL_MERGES"
            echo "❌ Failed: $FAILED_MERGES"
            echo "⚠️ Skipped: $SKIPPED_BRANCHES"
            echo "---"
            
            # Push progress
            git push origin main
        fi
    fi
done

# Final push
echo "💾 Final push..."
git push origin main

# Summary
echo ""
echo "🎉 Batch merge completed!"
echo "✅ Successful: $SUCCESSFUL_MERGES"
echo "❌ Failed: $FAILED_MERGES"
echo "⚠️ Skipped: $SKIPPED_BRANCHES"
echo "📋 Total: $PROCESSED"
echo "🔒 Backup: $BACKUP_BRANCH"
echo "⏰ Finished: $(date)"

# Test build
echo "🧪 Testing build..."
if npm run build; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed - manual intervention needed"
fi