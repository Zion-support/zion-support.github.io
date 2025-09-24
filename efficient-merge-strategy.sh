#!/bin/bash

# Efficient merge strategy for cursor branches
set -e

echo "🚀 Starting efficient merge strategy for cursor branches..."
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
TOTAL_BRANCHES=0

# Get all cursor branches
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort)
TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)

echo "📊 Total cursor branches: $TOTAL_BRANCHES"

# Process branches in batches of 50
BATCH_SIZE=50
CURRENT_BATCH=0
CURRENT=0

echo "$BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    CURRENT=$((CURRENT + 1))
    
    # Start new batch
    if [ $((CURRENT % BATCH_SIZE)) -eq 1 ]; then
        CURRENT_BATCH=$((CURRENT_BATCH + 1))
        echo "🔄 Processing batch $CURRENT_BATCH (branches $CURRENT-$((CURRENT + BATCH_SIZE - 1)))"
    fi
    
    echo "📋 [$CURRENT/$TOTAL_BRANCHES] Processing branch: $branch"
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        echo "⏭️  Branch doesn't exist remotely, skipping"
        continue
    fi
    
    # Skip if already merged
    if git branch --merged main | grep -q "$branch"; then
        echo "⏭️  Already merged, skipping"
        continue
    fi
    
    # Fetch the branch
    git fetch origin "$branch" 2>/dev/null || {
        echo "❌ Failed to fetch $branch"
        continue
    }
    
    # Try to merge with strategy
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
            
            # Resolve conflicts by taking the incoming changes for most files
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
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
    
    # Push progress every 100 branches
    if [ $((CURRENT % 100)) -eq 0 ]; then
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
echo "🎉 Efficient merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   📈 Total processed: $CURRENT"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Show recent commits
echo ""
echo "📝 Recent commits:"
git log --oneline -20

echo ""
echo "🎯 All cursor branches have been processed efficiently!"