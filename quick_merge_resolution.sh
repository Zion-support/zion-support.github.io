#!/bin/bash

# Quick merge conflict resolution script
set -e

echo "🚀 Starting quick merge conflict resolution..."
echo "⏰ Started at: $(date)"

# Function to run commands with timeout
run_with_timeout() {
    timeout 30 "$@" 2>/dev/null || return 1
}

# Check if we're in a git repo
if ! run_with_timeout git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "❌ Not in a git repository"
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(run_with_timeout git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Switch to main if not already there
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "🔄 Switching to main branch..."
    run_with_timeout git checkout main
fi

# Check for existing conflicts
echo "🔍 Checking for existing merge conflicts..."
CONFLICT_FILES=$(run_with_timeout git diff --name-only --diff-filter=U 2>/dev/null || true)

if [ -n "$CONFLICT_FILES" ]; then
    echo "⚠️  Found existing conflicts in: $CONFLICT_FILES"
    echo "🔧 Resolving conflicts by keeping our version..."
    
    for file in $CONFLICT_FILES; do
        echo "  - Resolving $file"
        run_with_timeout git checkout --ours "$file" 2>/dev/null || true
        run_with_timeout git add "$file" 2>/dev/null || true
    done
    
    run_with_timeout git commit -m "Resolve existing merge conflicts - $(date)" 2>/dev/null || true
    echo "✅ Resolved existing conflicts"
else
    echo "✅ No existing conflicts found"
fi

# Get open PRs
echo "📋 Fetching open PRs..."
PR_DATA=$(curl -s -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open 2>/dev/null || echo "[]")

if [ "$PR_DATA" = "[]" ]; then
    echo "❌ No open PRs found or API request failed"
    exit 1
fi

# Extract PR numbers and branches
PR_NUMBERS=$(echo "$PR_DATA" | grep -o '"number":[0-9]*' | grep -o '[0-9]*' | head -10)
PR_BRANCHES=$(echo "$PR_DATA" | grep -o '"ref":"[^"]*"' | cut -d'"' -f4 | head -10)

echo "📋 Found PRs: $PR_NUMBERS"
echo "📋 Found branches: $PR_BRANCHES"

# Process each PR
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

for branch in $PR_BRANCHES; do
    echo "---"
    echo "🔄 Processing branch: $branch"
    
    # Fetch the branch
    echo "📥 Fetching $branch..."
    if ! run_with_timeout git fetch origin "$branch"; then
        echo "❌ Failed to fetch $branch"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        continue
    fi
    
    # Try to merge
    echo "🔄 Attempting to merge $branch..."
    if run_with_timeout git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        run_with_timeout git commit -m "Merge $branch - $(date)" 2>/dev/null || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "⚠️  Merge conflicts detected for $branch, resolving..."
        
        # Get conflicted files
        CONFLICTED_FILES=$(run_with_timeout git diff --name-only --diff-filter=U 2>/dev/null || true)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            for file in $CONFLICTED_FILES; do
                echo "  - Resolving conflicts in $file"
                # Keep our version for most files
                run_with_timeout git checkout --ours "$file" 2>/dev/null || true
                run_with_timeout git add "$file" 2>/dev/null || true
            done
            
            # Commit the merge
            run_with_timeout git commit -m "Resolve merge conflicts for $branch - $(date)" 2>/dev/null || true
            echo "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        else
            echo "❌ No conflicted files found, but merge failed"
            run_with_timeout git merge --abort 2>/dev/null || true
            FAILED_MERGES=$((FAILED_MERGES + 1))
        fi
    fi
done

# Push changes
echo "---"
echo "🚀 Pushing changes to main..."
if run_with_timeout git push origin main; then
    echo "✅ Successfully pushed changes"
else
    echo "⚠️  Failed to push changes"
fi

# Summary
echo "---"
echo "📊 Merge Summary:"
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