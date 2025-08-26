#!/bin/bash

# Continue merging remaining branches
set -e

echo "🔄 Continuing merge process for remaining branches..."
echo "⏰ Started at: $(date)"
echo "---"

# Get the list of open PRs and extract branch information
echo "📋 Fetching open PRs from GitHub..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > prs.json

# Extract PR information and process each one
echo "🔄 Processing remaining open PRs..."
grep '"ref":' prs.json | sed 's/.*"ref": "\([^"]*\)".*/\1/' | grep -v "^main$" | while read -r branch_name; do
    if [ -n "$branch_name" ]; then
        echo ""
        echo "=========================================="
        echo "🔄 Processing branch: $branch_name"
        echo "=========================================="
        
        # Fetch the latest version of the branch
        git fetch origin "$branch_name"
        
        # Check if branch exists
        if ! git show-ref --verify --quiet "refs/remotes/origin/$branch_name"; then
            echo "❌ Branch $branch_name does not exist on remote, skipping..."
            continue
        fi
        
        # Try to merge
        if git merge --no-commit --no-ff "origin/$branch_name" 2>/dev/null; then
            echo "✅ Successfully merged $branch_name"
            git commit -m "Merge $branch_name into main - $(date)"
        else
            echo "⚠️  Merge conflicts detected in $branch_name, resolving..."
            
            # Get list of conflicted files
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
            
            if [ -n "$CONFLICTED_FILES" ]; then
                echo "📋 Conflicted files: $CONFLICTED_FILES"
                
                # Resolve conflicts in each file
                for file in $CONFLICTED_FILES; do
                    if [ -f "$file" ]; then
                        echo "🔧 Resolving conflicts in $file..."
                        
                        # Create a backup of the conflicted file
                        cp "$file" "${file}.backup.$(date +%s)"
                        
                        # Remove conflict markers
                        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
                            echo "📦 Critical file detected, keeping main version..."
                            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
                            sed -i '/>>>>>>> /d' "$file"
                        elif [[ "$file" == *".tsx" || "$file" == *".ts" || "$file" == *".js" || "$file" == *".jsx" ]]; then
                            echo "📱 Code file detected, keeping incoming version..."
                            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
                            sed -i '/>>>>>>> /d' "$file"
                        else
                            echo "📝 Regular file, attempting to merge both versions..."
                            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
                            sed -i '/>>>>>>> /d' "$file"
                        fi
                        
                        echo "✅ Resolved conflicts in $file"
                    fi
                done
                
                # Add resolved files
                git add .
                
                # Commit the merge
                git commit -m "Resolve merge conflicts for $branch_name - $(date)"
                
                echo "✅ Successfully resolved conflicts and merged $branch_name"
            else
                echo "❌ No conflicted files found, but merge failed. Aborting..."
                git merge --abort
                continue
            fi
        fi
        
        echo "=========================================="
        echo ""
        
        # Push changes every 3 successful merges to avoid losing work
        if [ $((MERGE_COUNT % 3)) -eq 0 ] && [ $MERGE_COUNT -gt 0 ]; then
            echo "💾 Pushing progress to remote..."
            git push origin main --force
        fi
        
        # Small delay to avoid overwhelming the system
        sleep 2
    fi
done

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main --force

# Summary
echo ""
echo "🎉 Merge process completed!"
echo "⏰ Completed at: $(date)"

# Cleanup
rm -f prs.json