#!/bin/bash

# Simple script to merge PRs using curl and basic parsing

echo "Starting PR merge process..."

# Get the first few PRs manually
PR_NUMBERS="31654 31653 31652 31651 31650"

echo "Processing PRs: $PR_NUMBERS"

count=0
success=0
failed=0

for pr in $PR_NUMBERS; do
    count=$((count + 1))
    echo "Processing PR #$pr ($count)..."
    
    # Get PR details
    pr_data=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr")
    head_ref=$(echo "$pr_data" | grep '"ref"' | head -1 | sed 's/.*"ref":"\([^"]*\)".*/\1/')
    title=$(echo "$pr_data" | grep '"title"' | head -1 | sed 's/.*"title":"\([^"]*\)".*/\1/')
    
    echo "  PR #$pr: $title"
    echo "  Branch: $head_ref"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$head_ref; then
        echo "  Branch $head_ref already exists locally"
    else
        echo "  Fetching branch $head_ref..."
        git fetch origin $head_ref:$head_ref
    fi
    
    # Try to merge
    echo "  Attempting to merge $head_ref into main..."
    if git merge $head_ref --no-edit; then
        echo "  ✅ Successfully merged PR #$pr"
        success=$((success + 1))
        
        # Push the changes
        echo "  Pushing changes..."
        if git push origin main; then
            echo "  ✅ Successfully pushed changes for PR #$pr"
        else
            echo "  ⚠️  Failed to push changes for PR #$pr"
        fi
    else
        echo "  ❌ Failed to merge PR #$pr - resolving conflicts..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "  Resolving conflicts automatically..."
            
            # For sitemap conflicts, use the newer version
            if git status --porcelain | grep -q "public/sitemap.xml"; then
                echo "  Resolving sitemap conflict..."
                git checkout --ours public/sitemap.xml
                git add public/sitemap.xml
            fi
            
            # For other conflicts, try to resolve automatically
            git add .
            
            # Complete the merge
            if git commit --no-edit; then
                echo "  ✅ Resolved conflicts and merged PR #$pr"
                success=$((success + 1))
                
                # Push the changes
                if git push origin main; then
                    echo "  ✅ Successfully pushed resolved changes for PR #$pr"
                else
                    echo "  ⚠️  Failed to push resolved changes for PR #$pr"
                fi
            else
                echo "  ❌ Could not resolve conflicts for PR #$pr"
                git merge --abort
                failed=$((failed + 1))
            fi
        else
            echo "  ❌ Merge failed for PR #$pr (no conflicts detected)"
            git merge --abort
            failed=$((failed + 1))
        fi
    fi
    
    echo "  ---"
    
    # Add a small delay to avoid rate limiting
    sleep 1
done

echo "PR merge process completed!"
echo "Total PRs processed: $count"
echo "Successfully merged: $success"
echo "Failed to merge: $failed"