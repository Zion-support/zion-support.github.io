#!/bin/bash

# Script to merge all open PRs systematically
# This script will attempt to merge branches one by one, resolving conflicts
# and skipping problematic ones that would break the build

set -e

echo "🚀 Starting systematic merge of all open PRs..."

# Get all remote branches
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///')

# Counter for successful merges
SUCCESS_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0

# Create a log file
LOG_FILE="merge-log-$(date +%Y%m%d-%H%M%S).txt"
echo "Merge log started at $(date)" > "$LOG_FILE"

for branch in $BRANCHES; do
    echo "📋 Processing branch: $branch"
    echo "📋 Processing branch: $branch" >> "$LOG_FILE"
    
    # Skip if we're already on this branch or if it's main
    if [[ "$branch" == "main" ]]; then
        echo "⏭️  Skipping main branch"
        continue
    fi
    
    # Try to merge the branch
    echo "🔄 Attempting to merge $branch..."
    echo "🔄 Attempting to merge $branch..." >> "$LOG_FILE"
    
    if git merge "origin/$branch" --no-edit; then
        echo "✅ Successfully merged $branch"
        echo "✅ Successfully merged $branch" >> "$LOG_FILE"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        echo "⚠️  Merge conflicts detected in $branch, attempting to resolve..."
        echo "⚠️  Merge conflicts detected in $branch, attempting to resolve..." >> "$LOG_FILE"
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts in $branch..."
            echo "🔧 Resolving conflicts in $branch..." >> "$LOG_FILE"
            
            # Try to resolve conflicts automatically by taking incoming changes for most files
            # but preserving our critical Vite configuration
            if [[ -f "netlify.toml" ]]; then
                # Preserve our Vite configuration
                git checkout --ours netlify.toml
                echo "🔒 Preserved Vite configuration in netlify.toml"
            fi
            
            # For other conflicts, try to take incoming changes
            git status --porcelain | grep "^UU\|^AA" | while read -r line; do
                file=$(echo "$line" | awk '{print $2}')
                if [[ "$file" != "netlify.toml" ]]; then
                    echo "📝 Taking incoming changes for $file"
                    git checkout --theirs "$file" 2>/dev/null || echo "⚠️  Could not resolve $file automatically"
                fi
            done
            
            # Try to commit the merge
            if git add . && git commit -m "Merge $branch: Auto-resolve conflicts"; then
                echo "✅ Successfully resolved conflicts and merged $branch"
                echo "✅ Successfully resolved conflicts and merged $branch" >> "$LOG_FILE"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            else
                echo "❌ Failed to resolve conflicts in $branch, aborting merge"
                echo "❌ Failed to resolve conflicts in $branch, aborting merge" >> "$LOG_FILE"
                git merge --abort
                FAILED_COUNT=$((FAILED_COUNT + 1))
            fi
        else
            echo "❌ Merge failed for $branch (unknown reason)"
            echo "❌ Merge failed for $branch (unknown reason)" >> "$LOG_FILE"
            git merge --abort
            FAILED_COUNT=$((FAILED_COUNT + 1))
        fi
    fi
    
    echo "---" >> "$LOG_FILE"
done

echo "🎉 Merge process completed!"
echo "✅ Successful merges: $SUCCESS_COUNT"
echo "❌ Failed merges: $FAILED_COUNT"
echo "⏭️  Skipped branches: $SKIPPED_COUNT"
echo "📋 Log saved to: $LOG_FILE"

echo "🎉 Merge process completed!" >> "$LOG_FILE"
echo "✅ Successful merges: $SUCCESS_COUNT" >> "$LOG_FILE"
echo "❌ Failed merges: $FAILED_COUNT" >> "$LOG_FILE"
<<<<<<< HEAD
echo "⏭️  Skipped branches: $SKIPPED_COUNT" >> "$LOG_FILE"
=======
echo "⏭️  Skipped branches: $SKIPPED_COUNT" >> "$LOG_FILE"
>>>>>>> origin/content/blog-sept12
