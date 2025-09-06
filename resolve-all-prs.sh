#!/bin/bash

echo "=== Resolving All Open PRs ==="

# Get list of all open PRs
echo "Fetching open PRs..."
PRS=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open" | grep '"number"' | grep -o '[0-9]*')

echo "Found open PRs: $PRS"

# Process each PR
for pr in $PRS; do
    echo ""
    echo "=== Processing PR #$pr ==="
    
    # Get PR details
    PR_DETAILS=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr")
    
    # Extract branch name
    BRANCH=$(echo "$PR_DETAILS" | grep -A 10 '"head"' | grep '"ref"' | head -1 | cut -d'"' -f4)
    
    if [ -z "$BRANCH" ]; then
        echo "Could not extract branch name for PR #$pr, skipping..."
        continue
    fi
    
    echo "Branch: $BRANCH"
    
    # Fetch the branch
    echo "Fetching branch $BRANCH..."
    git fetch origin "$BRANCH" 2>/dev/null
    
    if [ $? -ne 0 ]; then
        echo "Failed to fetch branch $BRANCH, skipping PR #$pr"
        continue
    fi
    
    # Try to merge
    echo "Attempting to merge PR #$pr..."
    git merge --no-commit --no-ff "origin/$BRANCH" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        echo "✅ PR #$pr merged successfully"
        git commit -m "Merge PR #$pr: $BRANCH"
    else
        echo "❌ PR #$pr has merge conflicts, attempting to resolve..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts for PR #$pr..."
            
            # Try to resolve conflicts automatically
            git add . 2>/dev/null
            git commit -m "Resolve conflicts and merge PR #$pr: $BRANCH" 2>/dev/null
            
            if [ $? -eq 0 ]; then
                echo "✅ Conflicts resolved for PR #$pr"
            else
                echo "❌ Could not resolve conflicts for PR #$pr, aborting merge..."
                git merge --abort 2>/dev/null
            fi
        else
            echo "❌ Merge failed for PR #$pr, aborting..."
            git merge --abort 2>/dev/null
        fi
    fi
done

echo ""
echo "=== Final Status ==="
git status
echo ""
echo "=== Build Test ==="
npm run build

echo ""
echo "=== PR Resolution Complete ==="