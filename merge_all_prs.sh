#!/bin/bash

# Script to merge all open PRs into main branch
# This script will handle conflicts and merge systematically

set -e

echo "🚀 Starting PR merge process..."

# Get list of open PRs
echo "📋 Fetching open PRs..."
PRS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | grep -o '"number":[0-9]*' | grep -o '[0-9]*')

if [ -z "$PRS" ]; then
    echo "❌ No open PRs found"
    exit 0
fi

echo "Found PRs: $PRS"

# Ensure we're on main branch
git checkout main
git pull origin main

# Counter for tracking
count=0
total=$(echo "$PRS" | wc -w)

for pr in $PRS; do
    count=$((count + 1))
    echo ""
    echo "🔄 Processing PR #$pr ($count/$total)"
    
    # Get PR details
    PR_DETAILS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr")
    BRANCH_NAME=$(echo "$PR_DETAILS" | grep -o '"head":{[^}]*"ref":"[^"]*"' | grep -o '"[^"]*"$' | tr -d '"')
    
    if [ -z "$BRANCH_NAME" ]; then
        echo "⚠️  Could not extract branch name for PR #$pr, skipping..."
        continue
    fi
    
    echo "📝 Branch: $BRANCH_NAME"
    
    # Fetch the branch
    echo "📥 Fetching branch $BRANCH_NAME..."
    git fetch origin "$BRANCH_NAME"
    
    # Try to merge
    echo "🔀 Attempting to merge $BRANCH_NAME into main..."
    if git merge "origin/$BRANCH_NAME" --no-ff -m "Merge PR #$pr: $BRANCH_NAME"; then
        echo "✅ Successfully merged PR #$pr"
        
        # Push the changes
        echo "📤 Pushing changes..."
        git push origin main
        
        # Close the PR via API (optional)
        echo "🔒 Closing PR #$pr..."
        curl -X PATCH \
            -H "Accept: application/vnd.github.v3+json" \
            "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr" \
            -d '{"state":"closed"}' || echo "⚠️  Could not close PR #$pr via API"
            
    else
        echo "⚠️  Merge conflict in PR #$pr, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts..."
            
            # Try to resolve conflicts automatically
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                echo "  Resolving conflict in: $file"
                
                # For now, we'll accept the incoming changes (theirs)
                # In a real scenario, you might want more sophisticated conflict resolution
                git checkout --theirs "$file" || true
                git add "$file" || true
            done
            
            # Commit the resolution
            if git commit -m "Resolve merge conflicts for PR #$pr"; then
                echo "✅ Conflicts resolved for PR #$pr"
                git push origin main
                
                # Close the PR
                curl -X PATCH \
                    -H "Accept: application/vnd.github.v3+json" \
                    "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr" \
                    -d '{"state":"closed"}' || echo "⚠️  Could not close PR #$pr via API"
            else
                echo "❌ Failed to resolve conflicts for PR #$pr"
                git merge --abort
            fi
        else
            echo "❌ Failed to merge PR #$pr for unknown reason"
            git merge --abort
        fi
    fi
    
    echo "⏳ Waiting 2 seconds before next PR..."
    sleep 2
done

echo ""
echo "🎉 PR merge process completed!"
echo "📊 Processed $count PRs"

# Final status check
echo ""
echo "📋 Final git status:"
git status

echo ""
echo "🌿 Current branches:"
git branch -a | head -10