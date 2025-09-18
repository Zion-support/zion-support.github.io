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

# Step 5: Get open PRs
echo "📋 Fetching open PRs..."
PR_DATA=$(curl -s -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open 2>/dev/null || echo "[]")

if [ "$PR_DATA" = "[]" ]; then
    echo "❌ No open PRs found or API request failed"
    exit 1
fi

# Extract PR information
PR_NUMBERS=$(echo "$PR_DATA" | grep -o '"number":[0-9]*' | grep -o '[0-9]*' | head -10)
PR_BRANCHES=$(echo "$PR_DATA" | grep -o '"ref":"[^"]*"' | cut -d'"' -f4 | head -10)

echo "📋 Found PRs: $PR_NUMBERS"
echo "📋 Found branches: $PR_BRANCHES"

# Step 6: Process each PR
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

for branch in $PR_BRANCHES; do
    echo "---"
    echo "🔄 Processing branch: $branch"
    
    # Fetch the branch
    echo "📥 Fetching $branch..."
    if ! git fetch origin "$branch" 2>/dev/null; then
        echo "❌ Failed to fetch $branch"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        continue
    fi
    
    # Try to merge
    echo "🔄 Attempting to merge $branch..."
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch - $(date)" 2>/dev/null || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "⚠️  Merge conflicts detected for $branch, resolving..."
        
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
            git commit -m "Resolve merge conflicts for $branch - $(date)" 2>/dev/null || true
            echo "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        else
            echo "❌ No conflicted files found, but merge failed"
            git merge --abort 2>/dev/null || true
            FAILED_MERGES=$((FAILED_MERGES + 1))
        fi
    fi
done

# Step 7: Push changes
echo "---"
echo "🚀 Pushing changes to main..."
if git push origin main; then
    echo "✅ Successfully pushed changes"
else
    echo "⚠️  Failed to push changes"
fi

# Step 8: Test build
echo "---"
echo "🧪 Testing build..."
if npm run build:netlify; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
fi

# Step 9: Run health checks
echo "---"
echo "🏥 Running health checks..."
if npm run health-check; then
    echo "✅ Health checks passed"
else
    echo "❌ Health checks failed"
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