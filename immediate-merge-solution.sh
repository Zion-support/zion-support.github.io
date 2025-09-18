#!/bin/bash

# Immediate Merge Solution for Zion Tech Group
# This script will resolve merge conflicts and merge PRs step by step

echo "🚀 Starting Immediate Merge Solution for Zion Tech Group..."
echo "⏰ Started at: $(date)"
echo "=========================================="

# Step 1: Check current status
echo "📋 Step 1: Checking current git status..."
git status

echo ""
echo "=========================================="
echo "🔄 Step 2: Ensuring we're on main branch..."
git checkout main

echo ""
echo "=========================================="
echo "📥 Step 3: Fetching latest changes..."
git fetch origin

echo ""
echo "=========================================="
echo "🔍 Step 4: Checking available branches..."
git branch -r

echo ""
echo "=========================================="
echo "🔄 Step 5: Starting merge process..."

# Get list of remote branches (excluding main)
BRANCHES=$(git branch -r | grep -v "main" | sed 's/origin\///' | head -20)

echo "Found branches to process:"
echo "$BRANCHES"

echo ""
echo "=========================================="
echo "🚀 Ready to start merging branches..."
echo "Press Enter to continue or Ctrl+C to abort..."
read

# Process each branch
for branch in $BRANCHES; do
    echo ""
    echo "=========================================="
    echo "🔄 Processing branch: $branch"
    echo "=========================================="
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
    else
        echo "⚠️  Merge conflicts detected in $branch"
        echo "🔧 Resolving conflicts..."
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    echo "🔧 Resolving conflicts in $file..."
                    
                    # Create backup
                    cp "$file" "${file}.backup.$(date +%s)"
                    
                    # Remove conflict markers
                    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
                    sed -i '/>>>>>>> /d' "$file"
                    
                    echo "✅ Resolved conflicts in $file"
                fi
            done
            
            # Add resolved files and commit
            git add .
            git commit -m "Resolve merge conflicts for $branch - $(date)"
            echo "✅ Successfully resolved conflicts and merged $branch"
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
        fi
    fi
    
    echo "=========================================="
    echo ""
    
    # Ask user if they want to continue
    echo "Continue with next branch? (y/n)"
    read -r continue_choice
    if [[ "$continue_choice" != "y" && "$continue_choice" != "Y" ]]; then
        echo "Stopping merge process..."
        break
    fi
done

echo ""
echo "=========================================="
echo "🎉 Merge process completed!"
echo "=========================================="

# Final status
echo "📋 Final git status:"
git status

echo ""
echo "🚀 Ready to build and test!"
echo "Run: npm install && npm run build"