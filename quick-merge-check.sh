#!/bin/bash

echo "🚀 Quick Merge Status Check and Completion"
echo "=========================================="

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not in a git repository"
    exit 1
fi

echo "✅ Git repository detected"

# Get current branch
current_branch=$(git branch --show-current)
echo "📍 Current branch: $current_branch"

# Switch to main if not already there
if [ "$current_branch" != "main" ]; then
    echo "🔄 Switching to main branch..."
    git checkout main
fi

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Check for merge conflicts
echo "📋 Checking for merge conflicts..."
conflict_status=$(git status --porcelain | grep -E '^(UU|AA|DD)')

if [ -n "$conflict_status" ]; then
    echo "⚠️  Merge conflicts detected:"
    echo "$conflict_status"
    echo "🔧 Resolving conflicts automatically..."
    
    # Get conflicted files
    conflict_files=$(git diff --name-only --diff-filter=U)
    
    for file in $conflict_files; do
        echo "  - Resolving conflicts in: $file"
        
        # Strategy: Keep our changes for most files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            git checkout --theirs "$file"
        else
            git checkout --ours "$file"
        fi
        
        git add "$file"
    done
    
    # Commit resolved conflicts
    git commit -m "Resolve merge conflicts automatically"
    echo "✅ Conflicts resolved and committed"
else
    echo "✅ No merge conflicts found"
fi

# Check for uncommitted changes
echo "📋 Checking for uncommitted changes..."
uncommitted=$(git status --porcelain)

if [ -n "$uncommitted" ]; then
    echo "⚠️  Uncommitted changes found:"
    echo "$uncommitted"
    echo "🔧 Committing changes..."
    git add .
    git commit -m "Auto-commit remaining changes"
    echo "✅ Changes committed"
else
    echo "✅ No uncommitted changes"
fi

# Get remote branches
echo "📋 Getting remote branches..."
remote_branches=$(git branch -r | grep -v "origin/main" | grep -v "origin/HEAD" | sed 's/origin\///' | head -10)

if [ -z "$remote_branches" ]; then
    echo "✅ No remote branches to process"
else
    echo "Found branches to process:"
    echo "$remote_branches"
    
    merged_count=0
    failed_count=0
    
    # Process each branch
    for branch in $remote_branches; do
        echo ""
        echo "🔄 Processing branch: $branch"
        
        # Try to merge
        if git merge "origin/$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
            echo "✅ Successfully merged $branch"
            merged_count=$((merged_count + 1))
            
            # Push to main
            if git push origin main 2>/dev/null; then
                echo "✅ Successfully pushed to main"
            else
                echo "⚠️  Could not push to main"
            fi
        else
            echo "⚠️  Merge conflicts for $branch, resolving..."
            
            # Get conflicted files
            conflict_files=$(git diff --name-only --diff-filter=U)
            
            if [ -n "$conflict_files" ]; then
                for file in $conflict_files; do
                    echo "  - Resolving conflicts in: $file"
                    
                    if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
                        git checkout --theirs "$file"
                    else
                        git checkout --ours "$file"
                    fi
                    
                    git add "$file"
                done
                
                # Commit resolved conflicts
                if git commit -m "Resolve merge conflicts for $branch"; then
                    echo "✅ Successfully resolved conflicts for $branch"
                    merged_count=$((merged_count + 1))
                    
                    # Push to main
                    if git push origin main 2>/dev/null; then
                        echo "✅ Successfully pushed resolved merge to main"
                    else
                        echo "⚠️  Could not push resolved merge to main"
                    fi
                else
                    echo "❌ Failed to resolve conflicts for $branch"
                    git merge --abort
                    failed_count=$((failed_count + 1))
                fi
            else
                echo "❌ No conflict files found for $branch"
                git merge --abort
                failed_count=$((failed_count + 1))
            fi
        fi
    done
    
    echo ""
    echo "🎉 Branch processing completed!"
    echo "✅ Successfully merged: $merged_count branches"
    echo "❌ Failed to merge: $failed_count branches"
fi

# Final status
echo ""
echo "📊 Final status:"
git status --short

echo ""
echo "🎉 Process completed successfully!"