#!/bin/bash

# Quick merge script for remaining branches
set -e

echo "🚀 Starting quick merge process..."
echo "⏰ Started at: $(date)"

# Get recent cursor branches (last 50)
echo "📋 Getting recent cursor branches..."
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/cursor/ | head -50 > /tmp/recent_cursor_branches.txt

TOTAL_BRANCHES=$(wc -l < /tmp/recent_cursor_branches.txt)
echo "📊 Processing $TOTAL_BRANCHES recent branches..."

SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts by keeping main version for config files
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    case "$file" in
                        "package.json"|"package-lock.json"|"yarn.lock"|"netlify.toml"|"next.config.js"|"tsconfig.json")
                            echo "⚙️  Config file detected, keeping main version..."
                            git checkout --ours "$file" 2>/dev/null || true
                            ;;
                        *)
                            echo "📄 Generic file detected, using incoming changes..."
                            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                            ;;
                    esac
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            if git commit -m "Resolve merge conflicts for $branch - $(date)"; then
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
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Process branches
while IFS= read -r branch; do
    echo "📋 Processing: $branch"
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        echo "⏭️  Skipping $branch (doesn't exist)"
        continue
    fi
    
    # Skip if already merged
    if git branch --merged main | grep -q "$branch"; then
        echo "⏭️  Skipping $branch (already merged)"
        continue
    fi
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        echo "✅ Branch $branch processed successfully"
    else
        echo "❌ Failed to process branch $branch"
    fi
    
    echo "---"
    
    # Push every 5 successful merges
    if [ $((SUCCESSFUL_MERGES % 5)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main
    fi
    
done < /tmp/recent_cursor_branches.txt

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

# Cleanup
rm -f /tmp/recent_cursor_branches.txt

# Summary
echo ""
echo "🎉 Quick merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "⏰ Completed at: $(date)"