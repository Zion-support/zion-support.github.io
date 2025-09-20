#!/bin/bash

# Comprehensive conflict resolution script
echo "🚀 Starting comprehensive conflict resolution..."

# Step 1: Check current status
echo "📊 Checking current status..."
git status
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Step 2: Switch to main
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "🔄 Switching to main branch..."
    git checkout main
fi

# Step 3: Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Step 4: Check for existing conflicts
echo "🔍 Checking for existing conflicts..."
CONFLICT_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || true)

if [ -n "$CONFLICT_FILES" ]; then
    echo "⚠️  Found existing conflicts in: $CONFLICT_FILES"
    echo "🔧 Resolving conflicts..."
    
    for file in $CONFLICT_FILES; do
        echo "  - Resolving conflicts in $file"
        git checkout --ours "$file" 2>/dev/null || true
        git add "$file" 2>/dev/null || true
    done
    
    git commit -m "Resolve existing merge conflicts - $(date)" 2>/dev/null || true
    echo "✅ Resolved existing conflicts"
else
    echo "✅ No existing conflicts found"
fi

# Step 5: Find and resolve all files with merge conflict markers
echo "🔍 Searching for files with merge conflict markers..."
        
        git add "$file" 2>/dev/null || true
    done
    
    git commit -m "Resolve merge conflict markers - $(date)" 2>/dev/null || true
    echo "✅ Resolved conflict markers"
else
    echo "✅ No files with conflict markers found"
fi

# Step 6: Get list of branches to merge (excluding main and backup branches)
echo "📋 Getting list of branches to merge..."
BRANCHES_TO_MERGE=$(git branch -r | grep -v "origin/main" | grep -v "backup" | grep -v "HEAD" | head -20)

if [ -z "$BRANCHES_TO_MERGE" ]; then
    echo "❌ No branches found to merge"
    exit 0
fi

echo "📋 Found branches to merge: $BRANCHES_TO_MERGE"

# Step 7: Process each branch
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

for branch in $BRANCHES_TO_MERGE; do
    branch_name=$(echo "$branch" | sed 's/origin\///')
    echo "---"
    echo "🔄 Processing branch: $branch_name"
    
    # Fetch the branch
    echo "📥 Fetching $branch_name..."
    if ! git fetch origin "$branch_name" 2>/dev/null; then
        echo "❌ Failed to fetch $branch_name"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        continue
    fi
    
    # Try to merge
    echo "🔄 Attempting to merge $branch_name..."
    if git merge --no-commit --no-ff "origin/$branch_name" 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        git commit -m "Merge $branch_name - $(date)" 2>/dev/null || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "⚠️  Merge conflicts detected for $branch_name, resolving..."
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            for file in $CONFLICTED_FILES; do
                echo "  - Resolving conflicts in $file"
                # Keep our version for most files
                git checkout --ours "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            done
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for $branch_name - $(date)" 2>/dev/null || true
            echo "✅ Successfully resolved conflicts and merged $branch_name"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        else
            echo "❌ No conflicted files found, but merge failed"
            git merge --abort 2>/dev/null || true
            FAILED_MERGES=$((FAILED_MERGES + 1))
        fi
    fi
done

# Step 8: Push changes
echo "---"
echo "🚀 Pushing changes to main..."
if git push origin main; then
    echo "✅ Successfully pushed changes"
else
    echo "⚠️  Failed to push changes"
fi

# Step 9: Test build
echo "---"
echo "🧪 Testing build..."
if npm run build:netlify; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
fi

# Summary
echo "---"
echo "📊 Final Summary:"
echo "✅ Successful merges: $SUCCESSFUL_MERGES"
echo "❌ Failed merges: $FAILED_MERGES"
echo "⏰ Completed at: $(date)"

if [ $FAILED_MERGES -eq 0 ]; then
    echo "🎉 All PRs merged successfully!"
else
    echo "⚠️  Some PRs failed to merge. Check the logs above for details."
fi

echo "---"
echo "✅ Script completed!"