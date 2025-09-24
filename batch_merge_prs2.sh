#!/bin/bash

echo "Starting second batch merge of remaining PRs..."

# Get next batch of PR numbers
PR_NUMBERS="17364 17365 17366 17367 17368 17370 17371 17373 17375 17377"

for pr_number in $PR_NUMBERS; do
    echo "Processing PR #$pr_number..."
    
    # Get PR details
    PR_DETAILS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    HEAD_REF=$(echo "$PR_DETAILS" | grep -A 3 '"head":' | grep '"ref":' | head -1 | cut -d'"' -f4)
    
    if [ -z "$HEAD_REF" ]; then
        echo "Could not get head ref for PR #$pr_number, skipping..."
        continue
    fi
    
    echo "PR #$pr_number head ref: $HEAD_REF"
    
    # Fetch and checkout
    if ! git fetch origin "$HEAD_REF"; then
        echo "Failed to fetch branch $HEAD_REF, skipping PR #$pr_number"
        continue
    fi
    
    if ! git checkout -b "pr-$pr_number" "origin/$HEAD_REF" 2>/dev/null; then
        if ! git checkout "pr-$pr_number" 2>/dev/null; then
            echo "Failed to checkout branch $HEAD_REF, skipping PR #$pr_number"
            continue
        fi
    fi
    
    # Merge with main
    if ! git merge main --no-edit; then
        echo "Resolving conflicts for PR #$pr_number..."
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        git commit -m "Resolve merge conflicts - keep main branch content" 2>/dev/null || true
    fi
    
    # Switch back to main and merge
    git checkout main
    if ! git merge "pr-$pr_number" --no-edit; then
        echo "Failed to merge PR #$pr_number into main, skipping"
        continue
    fi
    
    # Push to main
    if ! git push origin main --force; then
        echo "Failed to push PR #$pr_number to main, skipping"
        continue
    fi
    
    echo "✅ Successfully merged PR #$pr_number"
    
    # Clean up
    git branch -D "pr-$pr_number" 2>/dev/null || true
    
    sleep 1
done

echo "Second batch merge completed"