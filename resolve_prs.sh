#!/bin/bash

# Script to resolve and merge all open PRs
echo "🔍 Checking for open PRs..."

# Get list of open PRs
PRS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | grep -o '"number":[0-9]*' | grep -o '[0-9]*')

if [ -z "$PRS" ]; then
    echo "✅ No open PRs found"
    exit 0
fi

echo "📋 Found open PRs: $PRS"

# Process each PR
for pr in $PRS; do
    echo "🔄 Processing PR #$pr..."
    
    # Get PR details
    PR_DETAILS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr")
    HEAD_REF=$(echo "$PR_DETAILS" | grep -o '"head":[^}]*"ref":"[^"]*"' | grep -o '"[^"]*"$' | tr -d '"')
    BASE_REF=$(echo "$PR_DETAILS" | grep -o '"base":[^}]*"ref":"[^"]*"' | grep -o '"[^"]*"$' | tr -d '"')
    
    echo "   Branch: $HEAD_REF -> $BASE_REF"
    
    # Check if PR has conflicts
    MERGEABLE=$(echo "$PR_DETAILS" | grep -o '"mergeable":[^,]*' | grep -o '[^:]*$')
    
    if [ "$MERGEABLE" = "true" ]; then
        echo "   ✅ PR #$pr is mergeable, attempting merge..."
        
        # Merge the PR
        MERGE_RESPONSE=$(curl -s -X PUT \
            -H "Accept: application/vnd.github.v3+json" \
            -H "Authorization: token $GITHUB_TOKEN" \
            "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr/merge" \
            -d '{"commit_title":"Merge PR #'$pr'","commit_message":"Automated merge of PR #'$pr'","merge_method":"merge"}')
        
        MERGED=$(echo "$MERGE_RESPONSE" | grep -o '"merged":[^,]*' | grep -o '[^:]*$')
        
        if [ "$MERGED" = "true" ]; then
            echo "   ✅ Successfully merged PR #$pr"
        else
            echo "   ❌ Failed to merge PR #$pr"
            echo "   Response: $MERGE_RESPONSE"
        fi
    else
        echo "   ⚠️  PR #$pr has conflicts, attempting to resolve..."
        
        # Try to checkout the branch and resolve conflicts
        git fetch origin "$HEAD_REF"
        git checkout -b "pr-$pr" "origin/$HEAD_REF"
        
        # Try to merge with main
        git checkout main
        git pull origin main
        
        # Attempt merge
        if git merge "pr-$pr" --no-ff -m "Merge PR #$pr"; then
            echo "   ✅ Successfully resolved conflicts for PR #$pr"
            git push origin main
        else
            echo "   ❌ Could not resolve conflicts for PR #$pr"
            git merge --abort
        fi
        
        # Clean up
        git branch -D "pr-$pr"
    fi
    
    echo "   ---"
done

echo "🎉 Finished processing all PRs"