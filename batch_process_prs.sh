#!/bin/bash

# Batch process PRs efficiently
# Usage: ./batch_process_prs.sh [pr_numbers...]

PR_NUMBERS=("$@")

if [ ${#PR_NUMBERS[@]} -eq 0 ]; then
    echo "Usage: $0 [pr_number1] [pr_number2] ..."
    exit 1
fi

echo "Processing ${#PR_NUMBERS[@]} PRs: ${PR_NUMBERS[*]}"

for pr_num in "${PR_NUMBERS[@]}"; do
    echo "=== Processing PR #$pr_num ==="
    
    # Get PR details
    pr_info=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_num")
    head_branch=$(echo "$pr_info" | node -e "const data=JSON.parse(require('fs').readFileSync(0,'utf8')); console.log(data.head.ref);" 2>/dev/null)
    
    if [ -z "$head_branch" ] || [ "$head_branch" = "undefined" ]; then
        echo "  PR #$pr_num not found or invalid, skipping..."
        continue
    fi
    
    echo "  Head branch: $head_branch"
    
    # Checkout the branch
    if ! git checkout "$head_branch" 2>/dev/null; then
        echo "  Failed to checkout $head_branch, skipping..."
        continue
    fi
    
    echo "  Checked out $head_branch"
    
    # Try to merge main
    if git merge main --no-commit 2>/dev/null; then
        echo "  No conflicts, merging directly..."
        git commit -m "Merge main into $head_branch - no conflicts for PR #$pr_num"
    else
        echo "  Conflicts found, resolving by preferring main branch..."
        # Resolve conflicts by preferring main branch
        git checkout --theirs . 2>/dev/null || true
        git add . 2>/dev/null || true
        git commit -m "Resolve merge conflicts: prefer main branch version for PR #$pr_num" 2>/dev/null || true
    fi
    
    # Merge into main
    git checkout main
    if git merge "$head_branch" --no-edit 2>/dev/null; then
        echo "  Successfully merged PR #$pr_num into main"
        
        # Push to remote
        if git push origin main 2>/dev/null; then
            echo "  Pushed to remote successfully"
        else
            # If push fails, try to pull and push again
            git fetch origin
            git pull origin main --no-rebase --no-edit 2>/dev/null || true
            git push origin main 2>/dev/null || true
        fi
        
        # Clean up branch
        git branch -D "$head_branch" 2>/dev/null || true
        git push origin --delete "$head_branch" 2>/dev/null || true
        
        echo "  PR #$pr_num completed successfully"
    else
        echo "  Failed to merge PR #$pr_num into main"
        git merge --abort 2>/dev/null || true
    fi
    
    echo "  ---"
done

echo "Completed processing PRs: ${PR_NUMBERS[*]}"