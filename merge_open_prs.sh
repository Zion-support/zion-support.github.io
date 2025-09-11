#!/bin/bash

# Script to find and merge all open PRs
set -e

echo "🔍 Finding open PRs..."

# Get open PRs using GitHub API
OPEN_PRS=$(curl -s -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | \
  grep -o '"number":[0-9]*' | grep -o '[0-9]*')

if [ -z "$OPEN_PRS" ]; then
    echo "✅ No open PRs found"
    exit 0
fi

echo "📋 Found open PRs: $OPEN_PRS"

# Process each PR
for pr_number in $OPEN_PRS; do
    echo "🔄 Processing PR #$pr_number..."
    
    # Get PR details
    PR_DATA=$(curl -s -H "Accept: application/vnd.github.v3+json" \
      "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    
    # Extract branch names
    HEAD_REF=$(echo "$PR_DATA" | grep -o '"head".*"ref":"[^"]*"' | grep -o '"[^"]*"$' | tr -d '"')
    BASE_REF=$(echo "$PR_DATA" | grep -o '"base".*"ref":"[^"]*"' | grep -o '"[^"]*"$' | tr -d '"')
    TITLE=$(echo "$PR_DATA" | grep -o '"title":"[^"]*"' | cut -d'"' -f4)
    
    echo "  📝 Title: $TITLE"
    echo "  🌿 Head: $HEAD_REF"
    echo "  🎯 Base: $BASE_REF"
    
    # Skip if already merged or not targeting main
    if [ "$BASE_REF" != "main" ]; then
        echo "  ⏭️  Skipping - not targeting main branch"
        continue
    fi
    
    # Fetch the PR branch
    echo "  📥 Fetching branch $HEAD_REF..."
    git fetch origin "$HEAD_REF" || {
        echo "  ❌ Failed to fetch branch $HEAD_REF"
        continue
    }
    
    # Try to merge
    echo "  🔀 Attempting to merge $HEAD_REF into main..."
    if git merge "origin/$HEAD_REF" --no-ff -m "Merge PR #$pr_number: $TITLE"; then
        echo "  ✅ Successfully merged PR #$pr_number"
    else
        echo "  ⚠️  Merge conflict in PR #$pr_number - resolving automatically..."
        
        # Auto-resolve conflicts by preferring main branch
        git status --porcelain | grep "^UU" | cut -c4- | while read file; do
            echo "    🔧 Resolving conflict in $file"
            git checkout --ours "$file" || true
            git add "$file" || true
        done
        
        # Complete the merge
        if git commit --no-edit; then
            echo "  ✅ Successfully resolved conflicts and merged PR #$pr_number"
        else
            echo "  ❌ Failed to resolve conflicts for PR #$pr_number"
            git merge --abort || true
        fi
    fi
done

echo "🎉 Finished processing all open PRs"
git push origin main
echo "📤 Pushed merged changes to main"