#!/bin/bash

# Script to merge remaining PRs by number
set -e

echo "🚀 Starting PR merge process by number..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# List of PR numbers to merge (from the API response)
PR_NUMBERS=(16299 16298 16291)

count=0
total=${#PR_NUMBERS[@]}

for pr_number in "${PR_NUMBERS[@]}"; do
    count=$((count + 1))
    
    echo ""
    echo "🔄 Processing PR #$pr_number ($count/$total)"
    
    # Get PR details
    PR_DETAILS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    BRANCH_NAME=$(echo "$PR_DETAILS" | grep -o '"head":{[^}]*"ref":"[^"]*"' | grep -o '"[^"]*"$' | tr -d '"')
    
    if [ -z "$BRANCH_NAME" ]; then
        echo "⚠️  Could not extract branch name for PR #$pr_number, skipping..."
        continue
    fi
    
    echo "📝 Branch: $BRANCH_NAME"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$BRANCH_NAME"; then
        echo "⚠️  Branch origin/$BRANCH_NAME does not exist, skipping..."
        continue
    fi
    
    # Try to merge
    echo "🔀 Attempting to merge origin/$BRANCH_NAME..."
    if git merge "origin/$BRANCH_NAME" --no-ff -m "Merge PR #$pr_number: $BRANCH_NAME"; then
        echo "✅ Successfully merged PR #$pr_number"
        
        # Push the changes
        echo "📤 Pushing changes..."
        git push origin main
        
        # Close the PR via API
        echo "🔒 Closing PR #$pr_number..."
        curl -X PATCH \
            -H "Accept: application/vnd.github.v3+json" \
            "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number" \
            -d '{"state":"closed"}' || echo "⚠️  Could not close PR #$pr_number via API"
            
    else
        echo "⚠️  Merge conflict in PR #$pr_number, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts automatically..."
            
            # List conflicted files
            conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)
            
            for file in $conflicted_files; do
                echo "  Resolving conflict in: $file"
                
                # Accept the current version (ours) for most conflicts
                git checkout --ours "$file" || true
                git add "$file" || true
            done
            
            # Commit the resolution
            if git commit -m "Resolve merge conflicts for PR #$pr_number"; then
                echo "✅ Conflicts resolved for PR #$pr_number"
                git push origin main
                
                # Close the PR
                curl -X PATCH \
                    -H "Accept: application/vnd.github.v3+json" \
                    "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number" \
                    -d '{"state":"closed"}' || echo "⚠️  Could not close PR #$pr_number via API"
            else
                echo "❌ Failed to resolve conflicts for PR #$pr_number"
                git merge --abort
            fi
        else
            echo "❌ Failed to merge PR #$pr_number for unknown reason"
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
echo "🌿 Recent commits:"
git log --oneline -5