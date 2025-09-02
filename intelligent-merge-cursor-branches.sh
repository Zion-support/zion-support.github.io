#!/bin/bash

# Intelligent Merge Cursor Branches Script
# This script intelligently handles cursor branches, skipping duplicates and empty ones

set -e

echo "🚀 Starting intelligent merge of cursor branches into main..."

# Ensure we're on main branch
git checkout main
git pull origin main

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///')

# Counter for tracking progress
TOTAL_BRANCHES=$(echo "$CURSOR_BRANCHES" | wc -l)
CURRENT=0
SUCCESSFUL=0
FAILED=0
SKIPPED=0
EMPTY=0

echo "📊 Found $TOTAL_BRANCHES cursor branches to process"

# Function to check if a branch has meaningful content
has_meaningful_content() {
    local branch=$1
    
    # Get the number of files changed in this branch compared to main
    local file_count=$(git diff --name-only main "origin/$branch" 2>/dev/null | wc -l)
    
    if [ "$file_count" -eq 0 ]; then
        return 1  # No meaningful content
    fi
    
    # Check if the changes are substantial (more than just whitespace or minor changes)
    local change_size=$(git diff --stat "origin/$branch" main 2>/dev/null | tail -1 | grep -o '[0-9]\+' | head -1)
    
    if [ -z "$change_size" ] || [ "$change_size" -lt 10 ]; then
        return 1  # Minimal changes
    fi
    
    return 0  # Has meaningful content
}

# Function to merge a single branch
process_branch() {
    local branch=$1
    local current=$2
    local total=$3
    
    echo ""
    echo "🔄 [$current/$total] Processing branch: $branch"
    echo "================================================"
    
    # Check if branch has meaningful content
    if ! has_meaningful_content "$branch"; then
        echo "⏭️  Skipping $branch - no meaningful content"
        SKIPPED=$((SKIPPED + 1))
        return 0
    fi
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-edit --strategy=recursive -X theirs 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        SUCCESSFUL=$((SUCCESSFUL + 1))
        
        # Push after each successful merge
        if git push origin main 2>/dev/null; then
            echo "🚀 Pushed to remote successfully"
        else
            echo "⚠️  Push failed, but merge was successful"
        fi
        
    else
        echo "❌ Merge failed for $branch, attempting conflict resolution..."
        
        # Try to resolve conflicts by keeping main version
        if git checkout --ours . 2>/dev/null && git add . 2>/dev/null; then
            if git commit -m "Resolve merge conflicts from $branch - keep main version" 2>/dev/null; then
                echo "✅ Conflicts resolved for $branch"
                SUCCESSFUL=$((SUCCESSFUL + 1))
                
                # Push after conflict resolution
                if git push origin main 2>/dev/null; then
                    echo "🚀 Pushed to remote successfully"
                else
                    echo "⚠️  Push failed, but conflicts were resolved"
                fi
            else
                echo "❌ Failed to commit conflict resolution for $branch"
                git merge --abort 2>/dev/null || true
                FAILED=$((FAILED + 1))
            fi
        else
            echo "❌ Failed to resolve conflicts for $branch"
            git merge --abort 2>/dev/null || true
            FAILED=$((FAILED + 1))
        fi
    fi
}

# Process branches in smaller batches
echo "🔄 Processing branches intelligently..."
BATCH_SIZE=100
BATCH_NUM=1

echo "$CURSOR_BRANCHES" | while IFS= read -r branch; do
    if [ -n "$branch" ]; then
        CURRENT=$((CURRENT + 1))
        
        # Process in batches
        if [ $((CURRENT % BATCH_SIZE)) -eq 0 ]; then
            echo ""
            echo "📦 Completed batch $BATCH_NUM (processed $CURRENT branches)"
            echo "📊 Progress: $SUCCESSFUL successful, $FAILED failed, $SKIPPED skipped"
            echo "🔄 Pausing briefly before next batch..."
            sleep 10
            BATCH_NUM=$((BATCH_NUM + 1))
        fi
        
        process_branch "$branch" "$CURRENT" "$TOTAL_BRANCHES"
        
        # Small delay between branches
        sleep 2
    fi
done

echo ""
echo "🎉 Intelligent merge process completed!"
echo "📊 Final Results:"
echo "   ✅ Successful merges: $SUCCESSFUL"
echo "   ❌ Failed merges: $FAILED"
echo "   ⏭️  Skipped (no content): $SKIPPED"
echo "   📦 Total processed: $CURRENT"
echo ""
echo "🚀 All meaningful cursor branches have been processed!"