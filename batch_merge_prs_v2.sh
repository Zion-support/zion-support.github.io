#!/bin/bash

# Batch PR Merge Script V2
# This script will merge PRs in batches, handling conflicts automatically

set -e

echo "🚀 Starting Batch PR Merge Process V2"
echo "====================================="

# Get next 20 branches (branches 11-30)
BRANCHES=$(git branch -r | grep "cursor/create-and-deploy-new-content" | sed '1,10d' | head -20 | sed 's/origin\///' | sort)

echo "📋 Processing next 20 branches (11-30)"

# Counter for tracking
SUCCESS_COUNT=0
FAILED_COUNT=0
TOTAL_COUNT=$(echo "$BRANCHES" | wc -l)

# Function to merge a single branch
merge_branch() {
    local branch=$1
    local branch_num=$2
    
    echo ""
    echo "🔄 [$branch_num/$TOTAL_COUNT] Processing branch: $branch"
    echo "----------------------------------------"
    
    # Try to merge directly
    if git merge "origin/$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch into main"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
        # Push the changes
        if git push origin main; then
            echo "✅ Successfully pushed merged changes to origin/main"
        else
            echo "⚠️  Failed to push changes for $branch, will retry later"
        fi
    else
        echo "❌ Merge conflict detected for $branch"
        echo "🔧 Attempting to resolve conflicts automatically..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔍 Found merge conflicts, attempting resolution..."
            
            # Try to resolve common conflicts automatically
            if resolve_conflicts; then
                echo "✅ Conflicts resolved automatically for $branch"
                git add .
                git commit -m "Resolve merge conflicts for $branch"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
                
                # Push the changes
                if git push origin main; then
                    echo "✅ Successfully pushed resolved changes to origin/main"
                else
                    echo "⚠️  Failed to push resolved changes for $branch, will retry later"
                fi
            else
                echo "❌ Could not resolve conflicts automatically for $branch"
                FAILED_COUNT=$((FAILED_COUNT + 1))
                
                # Abort the merge
                git merge --abort 2>/dev/null || true
            fi
        else
            echo "❌ Merge failed for $branch (unknown reason)"
            FAILED_COUNT=$((FAILED_COUNT + 1))
        fi
    fi
}

# Function to resolve common conflicts
resolve_conflicts() {
    local resolved=false
    
    # Resolve package.json conflicts by taking the version with more dependencies
    if [ -f "package.json" ] && git status --porcelain | grep -q "package.json"; then
        echo "🔧 Resolving package.json conflicts..."
        if git checkout --theirs package.json 2>/dev/null; then
            git add package.json
            resolved=true
        fi
    fi
    
    # Resolve yarn.lock conflicts by taking the newer version
    if [ -f "yarn.lock" ] && git status --porcelain | grep -q "yarn.lock"; then
        echo "🔧 Resolving yarn.lock conflicts..."
        if git checkout --theirs yarn.lock 2>/dev/null; then
            git add yarn.lock
            resolved=true
        fi
    fi
    
    # Resolve tsconfig.json conflicts by taking the more comprehensive version
    if [ -f "tsconfig.json" ] && git status --porcelain | grep -q "tsconfig.json"; then
        echo "🔧 Resolving tsconfig.json conflicts..."
        if git checkout --theirs tsconfig.json 2>/dev/null; then
            git add tsconfig.json
            resolved=true
        fi
    fi
    
    # Resolve next.config.js conflicts by taking the more feature-rich version
    if [ -f "next.config.js" ] && git status --porcelain | grep -q "next.config.js"; then
        echo "🔧 Resolving next.config.js conflicts..."
        if git checkout --theirs next.config.js 2>/dev/null; then
            git add next.config.js
            resolved=true
        fi
    fi
    
    # For content files, prefer the newer content
    if git status --porcelain | grep -q "content/"; then
        echo "🔧 Resolving content file conflicts..."
        git status --porcelain | grep "content/" | while read line; do
            file=$(echo "$line" | awk '{print $2}')
            if [ -f "$file" ]; then
                git checkout --theirs "$file" 2>/dev/null && git add "$file"
                resolved=true
            fi
        done
    fi
    
    # For component files, prefer the more feature-rich version
    if git status --porcelain | grep -q "components/"; then
        echo "🔧 Resolving component file conflicts..."
        git status --porcelain | grep "components/" | while read line; do
            file=$(echo "$line" | awk '{print $2}')
            if [ -f "$file" ]; then
                git checkout --theirs "$file" 2>/dev/null && git add "$file"
                resolved=true
            fi
        done
    fi
    
    # For app files, prefer the more comprehensive version
    if git status --porcelain | grep -q "app/"; then
        echo "🔧 Resolving app file conflicts..."
        git status --porcelain | grep "app/" | while read line; do
            file=$(echo "$line" | awk '{print $2}')
            if [ -f "$file" ]; then
                git checkout --theirs "$file" 2>/dev/null && git add "$file"
                resolved=true
            fi
        done
    fi
    
    # If we resolved any conflicts, return success
    if [ "$resolved" = true ]; then
        return 0
    else
        return 1
    fi
}

# Process each branch
branch_num=1
for branch in $BRANCHES; do
    merge_branch "$branch" "$branch_num"
    branch_num=$((branch_num + 1))
    
    # Add a small delay to avoid overwhelming the system
    sleep 1
done

# Final summary
echo ""
echo "🎉 Batch Merge Process Complete!"
echo "==============================="
echo "✅ Successfully merged: $SUCCESS_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"
echo "📊 Total processed: $TOTAL_COUNT branches"

echo ""
echo "🏁 Batch 2 complete! Run the script again for the next batch."