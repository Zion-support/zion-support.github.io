#!/bin/bash

# Comprehensive GitHub PR Merger
# Fetches all open PRs from GitHub and merges them

set +e  # Don't exit on error

echo "🚀 Starting Comprehensive GitHub PR Merge Process"
echo "==================================================="

# GitHub API setup
REPO="Zion-Holdings/zion.app"
API_URL="https://api.github.com/repos/$REPO/pulls"
GITHUB_TOKEN="${GITHUB_TOKEN:-}"

# Ensure we're on main and up to date
echo "📍 Ensuring we're on main branch..."
git checkout main
git pull origin main --no-edit

# Fetch all open PRs from GitHub
echo "📥 Fetching open PRs from GitHub..."

if [ -n "$GITHUB_TOKEN" ]; then
    PR_DATA=$(curl -s -H "Authorization: token $GITHUB_TOKEN" "$API_URL?state=open&per_page=100")
else
    PR_DATA=$(curl -s "$API_URL?state=open&per_page=100")
fi

# Extract PR branch names
PR_BRANCHES=$(echo "$PR_DATA" | grep '"ref":' | grep -v '"base":' | sed 's/.*"ref": "\([^"]*\)".*/\1/' | sort -u)

if [ -z "$PR_BRANCHES" ]; then
    echo "❌ No open PRs found or failed to fetch PRs"
    echo "Using fallback: checking for cursor/fix-errors-* branches"
    # Fetch all remote branches
    git fetch --all
    PR_BRANCHES=$(git branch -r | grep 'cursor/fix-errors' | sed 's|origin/||' | sort -u)
fi

echo "Found PR branches:"
echo "$PR_BRANCHES"
echo ""

MERGE_COUNT=0
CONFLICT_COUNT=0
SKIP_COUNT=0
FAILED_BRANCHES=()

for BRANCH in $PR_BRANCHES; do
    BRANCH=$(echo "$BRANCH" | tr -d ' ')
    
    if [ -z "$BRANCH" ]; then
        continue
    fi
    
    echo ""
    echo "📦 Processing branch: $BRANCH"
    echo "-----------------------------------"
    
    # Fetch the branch
    echo "⬇️  Fetching branch..."
    if ! git fetch origin "$BRANCH" 2>/dev/null; then
        echo "❌ Failed to fetch $BRANCH - skipping"
        ((SKIP_COUNT++))
        FAILED_BRANCHES+=("$BRANCH (fetch failed)")
        continue
    fi
    
    # Check if branch exists
    if ! git rev-parse "origin/$BRANCH" >/dev/null 2>&1; then
        echo "❌ Branch $BRANCH not found - skipping"
        ((SKIP_COUNT++))
        FAILED_BRANCHES+=("$BRANCH (not found)")
        continue
    fi
    
    # Try to merge
    echo "🔀 Attempting to merge $BRANCH into main..."
    
    if git merge "origin/$BRANCH" --no-edit -m "Merge PR branch $BRANCH into main" 2>/dev/null; then
        echo "✅ Successfully merged $BRANCH"
        ((MERGE_COUNT++))
    else
        echo "⚠️  Conflicts detected in $BRANCH"
        ((CONFLICT_COUNT++))
        
        # Try automatic conflict resolution
        echo "🔧 Attempting automatic conflict resolution..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null)
        
        if [ -z "$CONFLICTED_FILES" ]; then
            if git commit --no-edit -m "Merge PR branch $BRANCH into main" 2>/dev/null; then
                echo "✅ Merge completed for $BRANCH"
                ((MERGE_COUNT++))
            else
                echo "❌ Failed to complete merge for $BRANCH"
                git merge --abort 2>/dev/null
                ((SKIP_COUNT++))
                FAILED_BRANCHES+=("$BRANCH (commit failed)")
            fi
            continue
        fi
        
        echo "📝 Conflicted files:"
        echo "$CONFLICTED_FILES"
        
        # For each conflicted file, prefer incoming changes (theirs)
        while IFS= read -r file; do
            if [ -f "$file" ]; then
                echo "  Resolving: $file (using theirs)"
                git checkout --theirs "$file" 2>/dev/null
                git add "$file" 2>/dev/null
            fi
        done <<< "$CONFLICTED_FILES"
        
        # Commit the resolution
        if git commit --no-edit -m "Merge PR branch $BRANCH into main (conflicts resolved)" 2>/dev/null; then
            echo "✅ Conflicts resolved and committed for $BRANCH"
            ((MERGE_COUNT++))
        else
            echo "❌ Failed to commit conflict resolution for $BRANCH"
            git merge --abort 2>/dev/null
            ((SKIP_COUNT++))
            FAILED_BRANCHES+=("$BRANCH (conflict resolution failed)")
        fi
    fi
done

echo ""
echo "==================================================="
echo "📊 Merge Summary:"
echo "✅ Successfully merged: $MERGE_COUNT branches"
echo "⚠️  Conflicts handled: $CONFLICT_COUNT branches"
echo "❌ Skipped: $SKIP_COUNT branches"
echo ""

if [ ${#FAILED_BRANCHES[@]} -gt 0 ]; then
    echo "Failed branches:"
    for fb in "${FAILED_BRANCHES[@]}"; do
        echo "  - $fb"
    done
    echo ""
fi

# Push all changes to main
if [ $MERGE_COUNT -gt 0 ]; then
    echo "📤 Pushing all merged changes to main..."
    if git push origin main; then
        echo "✅ Successfully pushed all changes to main"
    else
        echo "⚠️  Failed to push changes. You may need to resolve this manually."
        echo "Run: git push origin main"
    fi
else
    echo "ℹ️  No changes to push"
fi

echo ""
echo "✨ PR merge process completed!"
