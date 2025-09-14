#!/bin/bash

echo "Starting to merge remaining open PRs..."

# Get all open PR numbers
PR_NUMBERS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | grep -o '"number": [0-9]*' | grep -o '[0-9]*' | sort -n)

echo "Found PRs: $PR_NUMBERS"

for pr_number in $PR_NUMBERS; do
    echo "Processing PR #$pr_number..."
    
    # Get PR details
    PR_DETAILS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    HEAD_REF=$(echo "$PR_DETAILS" | grep -o '"ref":"[^"]*"' | head -1 | cut -d'"' -f4)
    
    if [ -z "$HEAD_REF" ]; then
        echo "Could not get head ref for PR #$pr_number, skipping..."
        continue
    fi
    
    echo "PR #$pr_number head ref: $HEAD_REF"
    
    # Fetch the branch
    if ! git fetch origin "$HEAD_REF"; then
        echo "Failed to fetch branch $HEAD_REF, skipping PR #$pr_number"
        continue
    fi
    
    # Checkout the branch
    if ! git checkout -b "pr-$pr_number" "origin/$HEAD_REF" 2>/dev/null; then
        if ! git checkout "pr-$pr_number" 2>/dev/null; then
            echo "Failed to checkout branch $HEAD_REF, skipping PR #$pr_number"
            continue
        fi
    fi
    
    # Merge with main
    if ! git merge main --no-edit; then
        echo "Merge conflict in PR #$pr_number, resolving..."
        # Resolve conflicts by keeping main branch content
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        git commit -m "Resolve merge conflicts - keep main branch content" 2>/dev/null || true
    fi
    
    # Switch back to main and merge
    if ! git checkout main; then
        echo "Failed to checkout main, skipping PR #$pr_number"
        continue
    fi
    
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
    
    # Small delay
    sleep 1
done

echo "Finished merging all PRs"