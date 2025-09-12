#!/bin/bash

# Merge branches that have different commits than main
set -e

echo "Starting merge of branches with different commits..."

# Get branches with different commits
DIFFERENT_BRANCHES=(
    "origin/0smfo8-codex/fix-404-error-for-non-existent-route"
    "origin/0t8m4m-codex/update-project-color-palette"
    "origin/0une71-codex/fix-unsupported-shell-syntax-in-setup.sh"
    "origin/14gqd5-codex/implement-checkout-flow-with-auth-redirect"
    "origin/1dcwqi-codex/implement-global-pricing-with-currency-selection"
    "origin/1fjs4s-codex/implement-instant-messaging-for-negotiations"
    "origin/1m9jcs-codex/fix-client-side-rendering-and-javascript-errors"
    "origin/1nc0kn-codex/fix-blank-screen-on-app-load"
    "origin/1nq1ky-codex/render-talent-profiles-with-error-states"
    "origin/1ry69n-codex/fix-npm-eio-error-during-install"
    "origin/1sqc9r-codex/implement-light/dark-theme-with-persistence"
    "origin/1tg4fy-codex/support-metric--imperial-units"
    "origin/1wzbwr-codex/fix-typescript-errors-in-files"
    "origin/2025-comprehensive-services-expansion"
    "origin/22xuo1-codex/implement-wishlist-functionality"
    "origin/24727i-codex/implement-stripe-checkout-flow"
    "origin/2503nr-codex/fix-ts2614-error-with-suspense-import"
    "origin/26ywwb-codex/fix-client-side-rendering-and-javascript-errors"
)

successful_merges=0
failed_merges=0

for branch in "${DIFFERENT_BRANCHES[@]}"; do
    branch_name=${branch#origin/}
    echo "Processing $branch_name..."
    
    # Create local branch
    if git checkout -b "merge-$branch_name" "$branch" 2>/dev/null; then
        git checkout main
        
        # Attempt merge
        if git merge "merge-$branch_name" --no-ff -m "Merge $branch_name: automated merge" 2>/dev/null; then
            echo "✓ Successfully merged $branch_name"
            ((successful_merges++))
        else
            echo "⚠ Merge conflict in $branch_name, attempting resolution..."
            
            # Try to resolve conflicts
            git checkout --theirs . 2>/dev/null || true
            git add . 2>/dev/null || true
            
            if git commit --no-edit 2>/dev/null; then
                echo "✓ Auto-resolved conflicts for $branch_name"
                ((successful_merges++))
            else
                echo "✗ Failed to resolve conflicts for $branch_name"
                git merge --abort 2>/dev/null || true
                ((failed_merges++))
            fi
        fi
        
        # Clean up
        git branch -D "merge-$branch_name" 2>/dev/null || true
    else
        echo "✗ Failed to checkout $branch_name"
        ((failed_merges++))
    fi
    
    echo "Progress: $((successful_merges + failed_merges))/${#DIFFERENT_BRANCHES[@]} branches processed"
    echo "---"
done

echo "Merge Summary:"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"
echo "Total processed: $((successful_merges + failed_merges))"

# Push final result
echo "Pushing to origin main..."
git push origin main || echo "Push failed, but local merges completed"

echo "Final status:"
git log --oneline -5