#!/bin/bash

# Enhanced merge script for handling complex conflicts
set -e

echo "🚀 Starting enhanced merge process..."
echo "⏰ Started at: $(date)"
echo "---"

# Create a backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Enhanced conflict resolution strategy
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Critical file detected, keeping main version and merging dependencies..."
            # For package files, keep main version but merge dependencies
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" || "$file" == "tailwind.config.ts" || "$file" == "vite.config.ts" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "README.md" || "$file" == "LICENSE" ]]; then
            echo "📚 Documentation file, keeping both versions where possible..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == *".tsx" || "$file" == *".ts" || "$file" == *".js" || "$file" == *".jsx" ]]; then
            echo "📱 Code file detected, keeping incoming version..."
            # For code files, prefer the incoming version (feature branch)
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        echo "✅ Resolved conflicts in $file"
        return 0
    fi
    return 1
}

# Function to merge a single branch with enhanced error handling
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "❌ Branch $branch does not exist on remote, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for $branch - $(date)"
            
            echo "✅ Successfully resolved conflicts and merged $branch"
            return 0
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            return 1
        fi
    fi
}

# Get the list of open PRs and extract branch information
echo "📋 Fetching open PRs from GitHub..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > prs.json

# Extract PR information and process each one
echo "🔄 Processing open PRs..."
grep '"ref":' prs.json | sed 's/.*"ref": "\([^"]*\)".*/\1/' | grep -v "^main$" | while read -r branch_name; do
    if [ -n "$branch_name" ]; then
        echo ""
        echo "=========================================="
        echo "🔄 Processing branch: $branch_name"
        echo "=========================================="
        
        if merge_branch "$branch_name"; then
            echo "✅ Branch $branch_name processed successfully"
        else
            echo "❌ Branch $branch_name processing failed"
        fi
        
        echo "=========================================="
        echo ""
        
        # Push changes every 3 successful merges to avoid losing work
        if [ $((SUCCESSFUL_MERGES % 3)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
            echo "💾 Pushing progress to remote..."
            git push origin main
        fi
        
        # Small delay to avoid overwhelming the system
        sleep 2
    fi
done

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Enhanced merge process completed!"
echo "🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Cleanup
rm -f prs.json