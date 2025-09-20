#!/bin/bash

# Batch merge PRs script - process branches in batches
set -e

echo "🚀 Starting batch PR merge process..."
echo "⏰ Started at: $(date)"

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
TOTAL_PROCESSED=0
BATCH_SIZE=50

# Get all available branches
echo "📊 Getting all available branches..."
ALL_BRANCHES=$(git branch -r | grep -E "(cursor|codex)" | sed 's/origin\///' | head -200)  # Limit to 200 for efficiency
TOTAL_BRANCHES=$(echo "$ALL_BRANCHES" | wc -l)

echo "📊 Total branches to process: $TOTAL_BRANCHES"

# Process branches in batches
echo "$ALL_BRANCHES" | while IFS= read -r branch; do
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    
    echo ""
    echo "📋 [$TOTAL_PROCESSED/$TOTAL_BRANCHES] Processing branch: $branch"
    
    # Skip if branch name is empty
    if [ -z "$branch" ]; then
        continue
    fi
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        continue
    fi
    
    echo "🔄 Attempting to merge $branch..."
    
    # Attempt merge with conflict resolution
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "⚠️  Merge conflict detected in $branch"
        
        # Check for conflicts
        if git diff --name-only --diff-filter=U | grep -q .; then
            echo "🔧 Resolving conflicts..."
            
            # Resolve conflicts automatically
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
            for file in $CONFLICTED_FILES; do
                echo "🔧 Resolving conflicts in $file..."
                
                # Smart conflict resolution based on file type
                if [[ "$file" == "package.json" ]] || [[ "$file" == "package-lock.json" ]]; then
                    git checkout --ours "$file"
                elif [[ "$file" == src/components/* ]] || [[ "$file" == src/pages/* ]]; then
                    git checkout --theirs "$file"
                elif [[ "$file" == *.md ]] || [[ "$file" == *.txt ]]; then
                    git checkout --ours "$file"
                else
                    git checkout --ours "$file"
                fi
                git add "$file"
            done
            
            # Commit the merge
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Successfully resolved conflicts and merged $branch"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            else
                echo "❌ Failed to resolve conflicts for $branch"
                git merge --abort 2>/dev/null || true
                FAILED_MERGES=$((FAILED_MERGES + 1))
            fi
        else
            echo "❌ Failed to merge $branch"
            FAILED_MERGES=$((FAILED_MERGES + 1))
        fi
    fi
    
    # Push progress every 50 merges
    if [ $((TOTAL_PROCESSED % 50)) -eq 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main 2>/dev/null || echo "⚠️  Push failed, continuing..."
        echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed"
    fi
done

echo ""
echo "🎉 Batch merge process completed!"
echo "📊 Final Results:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   📋 Total processed: $TOTAL_PROCESSED"
echo "⏰ Completed at: $(date)"

# Final push
echo "💾 Final push to remote..."
if git push origin main; then
    echo "✅ Successfully pushed all changes"
else
    echo "⚠️  Final push failed, but merges were successful locally"
fi