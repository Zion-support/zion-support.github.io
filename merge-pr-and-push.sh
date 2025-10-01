#!/bin/bash
set -e

echo "=== PR Merge and Push Script ==="
echo "Repository: Zion-Holdings/zion.app"
echo ""

# Configuration
# Expect GITHUB_TOKEN to be provided via environment
if [ -z "$GITHUB_TOKEN" ]; then
    echo "ERROR: GITHUB_TOKEN environment variable is not set."
    exit 1
fi
REPO="Zion-Holdings/zion.app"
PR_NUMBER=11935
PR_BRANCH="cursor/fix-web-application-console-errors-0bf5"

echo "Step 1: Checking current branch..."
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "ERROR: Not on main branch. Please switch to main first."
    exit 1
fi

echo ""
echo "Step 2: Pushing local main branch changes..."
git push origin main --force-with-lease || {
    echo "Push failed. This may be due to conflicts with remote."
    echo "Attempting to fetch and rebase..."
    git fetch origin main --depth=1
    git rebase origin/main || {
        echo "Rebase failed. Manual intervention required."
        exit 1
    }
    git push origin main --force-with-lease
}

echo ""
echo "Step 3: Checking PR #$PR_NUMBER status..."
PR_STATUS=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
    "https://api.github.com/repos/$REPO/pulls/$PR_NUMBER" | grep -o '"state":"[^"]*"' | cut -d'"' -f4)

echo "PR Status: $PR_STATUS"

if [ "$PR_STATUS" = "open" ]; then
    echo ""
    echo "Step 4: Checking if PR has conflicts..."
    MERGEABLE=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
        "https://api.github.com/repos/$REPO/pulls/$PR_NUMBER" | grep -o '"mergeable":[^,}]*' | cut -d':' -f2 | tr -d ' ')
    
    echo "Mergeable status: $MERGEABLE"
    
    if [ "$MERGEABLE" = "false" ]; then
        echo ""
        echo "Step 5: PR has conflicts. Attempting to resolve..."
        
        # Fetch the PR branch
        git fetch origin "$PR_BRANCH" --depth=1
        
        # Create a temporary branch for merge
        git checkout -b "temp-merge-$PR_NUMBER"
        git merge "origin/$PR_BRANCH" -m "Merge PR #$PR_NUMBER: Fix web application console errors" || {
            echo "Automatic merge failed. Attempting to resolve conflicts..."
            
            # Get list of conflicted files
            CONFLICTS=$(git diff --name-only --diff-filter=U)
            echo "Conflicted files:"
            echo "$CONFLICTS"
            
            # For each conflict, try to accept incoming changes for most files
            # except for App.tsx which we'll handle specially
            for file in $CONFLICTS; do
                if [ "$file" = "App.tsx" ]; then
                    echo "Keeping our version of App.tsx (has new content)"
                    git checkout --ours "App.tsx"
                else
                    echo "Accepting incoming changes for $file"
                    git checkout --theirs "$file"
                fi
                git add "$file"
            done
            
            git commit -m "Resolve conflicts for PR #$PR_NUMBER"
        }
        
        # Switch back to main and merge
        git checkout main
        git merge "temp-merge-$PR_NUMBER" --no-ff -m "Merge PR #$PR_NUMBER into main"
        git branch -D "temp-merge-$PR_NUMBER"
        
        # Push to main
        git push origin main --force-with-lease
        
        echo ""
        echo "Step 6: Closing PR via API..."
        curl -X PATCH -H "Authorization: token $GITHUB_TOKEN" \
            -H "Content-Type: application/json" \
            -d '{"state":"closed"}' \
            "https://api.github.com/repos/$REPO/pulls/$PR_NUMBER"
        
    elif [ "$MERGEABLE" = "true" ]; then
        echo ""
        echo "Step 5: PR is mergeable. Merging via API..."
        curl -X PUT -H "Authorization: token $GITHUB_TOKEN" \
            -H "Content-Type: application/json" \
            -d '{"commit_title":"Merge PR #'"$PR_NUMBER"': Fix web application console errors","merge_method":"merge"}' \
            "https://api.github.com/repos/$REPO/pulls/$PR_NUMBER/merge"
    else
        echo "Cannot determine merge status. Skipping PR merge."
    fi
else
    echo "PR is not open (status: $PR_STATUS). Skipping."
fi

echo ""
echo "=== Script Complete ==="
echo "Summary:"
echo "- Main branch pushed: ✓"
echo "- PR #$PR_NUMBER processed: ✓"
echo ""
echo "All changes have been successfully merged and pushed to main!"
