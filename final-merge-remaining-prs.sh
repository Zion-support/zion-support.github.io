#!/bin/bash

# Final script to merge remaining PRs
set -e

echo "🚀 Starting final merge of remaining PRs..."
echo "⏰ Started at: $(date)"

# Ensure we're on main and it's up to date
echo "🔄 Ensuring main branch is up to date..."
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0

# Function to merge a single branch efficiently
merge_branch_final() {
    local branch="$1"
    
    echo "🔄 Processing branch: $branch"
    
    # Skip if branch doesn't exist remotely
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        echo "⏭️  Branch $branch doesn't exist remotely, skipping..."
        return 0
    fi
    
    # Skip if already merged
    if git branch --merged main | grep -q "$branch"; then
        echo "⏭️  Branch $branch already merged, skipping..."
        return 0
    fi
    
    # Fetch the branch
    git fetch origin "$branch" 2>/dev/null || {
        echo "❌ Failed to fetch $branch"
        return 1
    }
    
    # Try fast-forward merge first
    if git merge --ff-only "origin/$branch" 2>/dev/null; then
        echo "✅ Fast-forward merged $branch"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    fi
    
    # Try merge with auto-resolve conflicts
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "⚠️  Conflicts detected in $branch, auto-resolving..."
        
        # Auto-resolve common conflicts
        git checkout --ours package.json 2>/dev/null || true
        git checkout --ours package-lock.json 2>/dev/null || true
        git checkout --ours yarn.lock 2>/dev/null || true
        git checkout --ours pnpm-lock.yaml 2>/dev/null || true
        git checkout --ours next.config.js 2>/dev/null || true
        git checkout --ours tsconfig.json 2>/dev/null || true
        git checkout --ours tailwind.config.js 2>/dev/null || true
        git checkout --ours netlify.toml 2>/dev/null || true
        
        # For component files, prefer incoming changes
        find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read -r file; do
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
        done
        
        # Add all resolved files
        git add . 2>/dev/null || true
        
        # Commit the merge
        if git commit -m "Auto-resolve conflicts for $branch - $(date)" 2>/dev/null; then
            echo "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
            return 0
        else
            echo "❌ Failed to commit resolved conflicts for $branch"
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Get remaining cursor branches
echo "📊 Getting remaining cursor branches..."
REMAINING_BRANCHES=$(git branch -r | grep "cursor/" | sed 's/origin\///' | sort)

echo "📊 Processing remaining branches..."

# Process branches in batches
BATCH_SIZE=20
CURRENT=0
TOTAL=$(echo "$REMAINING_BRANCHES" | wc -l)

echo "📊 Total branches to process: $TOTAL"

for branch in $REMAINING_BRANCHES; do
    CURRENT=$((CURRENT + 1))
    echo "📋 [$CURRENT/$TOTAL] Processing: $branch"
    
    if merge_branch_final "$branch"; then
        echo "✅ Successfully processed $branch"
    else
        echo "❌ Failed to process $branch"
    fi
    
    # Progress update every 20 branches
    if [ $((CURRENT % 20)) -eq 0 ]; then
        echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
        
        # Push progress periodically
        echo "💾 Pushing progress..."
        git push origin main || echo "⚠️  Push failed, continuing..."
    fi
done

# Final push
echo "💾 Final push to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Final merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "⏰ Completed at: $(date)"

# Show recent commits
echo ""
echo "📝 Recent commits:"
git log --oneline -10

echo ""
echo "🎯 Final PR merge completed!"