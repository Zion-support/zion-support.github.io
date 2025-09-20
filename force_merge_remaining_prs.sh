#!/bin/bash

# Force merge remaining PRs with aggressive conflict resolution
echo "🚀 Starting aggressive PR merge process..."

# Get more PRs
echo "📋 Fetching more open PRs..."
PR_NUMBERS=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=50" | grep '"number"' | sed 's/.*"number": \([0-9]*\).*/\1/' | head -30)

echo "Found PRs: $PR_NUMBERS"

# Counter for merged PRs
MERGED_COUNT=0
FAILED_COUNT=0

# Process each PR
for pr_number in $PR_NUMBERS; do
    echo ""
    echo "🔄 Processing PR #$pr_number..."
    
    # Get PR details
    PR_DETAILS=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    
    # Extract head ref
    HEAD_REF=$(echo "$PR_DETAILS" | grep '"head"' -A 5 | grep '"ref"' | sed 's/.*"ref": "\([^"]*\)".*/\1/')
    
    if [ -z "$HEAD_REF" ]; then
        echo "❌ Could not get head ref for PR #$pr_number"
        FAILED_COUNT=$((FAILED_COUNT + 1))
        continue
    fi
    
    echo "📝 PR #$pr_number head ref: $HEAD_REF"
    
    # Check if branch exists
    if ! git ls-remote --heads origin "$HEAD_REF" > /dev/null 2>&1; then
        echo "⚠️  Branch $HEAD_REF doesn't exist, skipping PR #$pr_number"
        FAILED_COUNT=$((FAILED_COUNT + 1))
        continue
    fi
    
    # Fetch the branch
    echo "📥 Fetching branch $HEAD_REF..."
    git fetch origin "$HEAD_REF"
    
    # Try to merge with aggressive conflict resolution
    echo "🔄 Attempting to merge $HEAD_REF with aggressive conflict resolution..."
    
    # Use merge strategy to prefer main branch for conflicts
    if git merge "origin/$HEAD_REF" --no-edit -X ours 2>/dev/null; then
        echo "✅ Successfully merged PR #$pr_number ($HEAD_REF)"
        MERGED_COUNT=$((MERGED_COUNT + 1))
    else
        echo "⚠️  Merge conflicts in PR #$pr_number, attempting aggressive resolution..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Aggressively resolving conflicts for PR #$pr_number..."
            
            # Get all conflicted files
            CONFLICTED_FILES=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)
            
            for file in $CONFLICTED_FILES; do
                echo "🔧 Resolving conflict in: $file"
                
                # For all files, prefer main branch (ours)
                git checkout --ours "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            done
            
            # Commit the merge
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Aggressively resolved conflicts and merged PR #$pr_number"
                MERGED_COUNT=$((MERGED_COUNT + 1))
            else
                echo "❌ Failed to resolve conflicts for PR #$pr_number, aborting merge"
                git merge --abort 2>/dev/null || true
                FAILED_COUNT=$((FAILED_COUNT + 1))
            fi
        else
            echo "❌ Failed to merge PR #$pr_number"
            git merge --abort 2>/dev/null || true
            FAILED_COUNT=$((FAILED_COUNT + 1))
        fi
    fi
    
    # Push changes every 5 merges
    if [ $((MERGED_COUNT % 5)) -eq 0 ] && [ $MERGED_COUNT -gt 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main
    fi
done

# Final push
echo ""
echo "💾 Pushing final changes to origin/main..."
git push origin main

# Summary
echo ""
echo "🎉 Aggressive PR merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successfully merged: $MERGED_COUNT PRs"
echo "   ❌ Failed to merge: $FAILED_COUNT PRs"