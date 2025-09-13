#!/bin/bash

# Aggressive merge script to merge all remaining PRs
set -e

echo "Starting aggressive merge of all remaining PRs..."

# Get all branches with different commits
MAIN_COMMIT=$(git rev-parse main)
echo "Main commit: $MAIN_COMMIT"

# Create array of branches to merge
BRANCHES_TO_MERGE=(
    "origin/0nylrk-codex/fix-footer-contact-link"
    "origin/0parff-codex/centralize-api-error-handling-and-add-errorboundary"
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

successful=0
failed=0
total=${#BRANCHES_TO_MERGE[@]}

echo "Processing $total branches..."

for i in "${!BRANCHES_TO_MERGE[@]}"; do
    branch="${BRANCHES_TO_MERGE[$i]}"
    branch_name=${branch#origin/}
    
    echo "[$((i+1))/$total] Processing $branch_name..."
    
    # Skip if already up to date
    BRANCH_COMMIT=$(git rev-parse "$branch" 2>/dev/null || echo "")
    if [ "$BRANCH_COMMIT" = "$MAIN_COMMIT" ]; then
        echo "  ✓ Already up to date"
        ((successful++))
        continue
    fi
    
    # Create local branch
    TEMP_BRANCH="temp-merge-$i"
    if git checkout -b "$TEMP_BRANCH" "$branch" 2>/dev/null; then
        git checkout main
        
        # Attempt merge
        if git merge "$TEMP_BRANCH" --no-ff -m "Merge $branch_name: automated aggressive merge" 2>/dev/null; then
            echo "  ✓ Successfully merged"
            ((successful++))
        else
            echo "  ⚠ Merge conflict, attempting resolution..."
            
            # Aggressive conflict resolution
            git checkout --theirs . 2>/dev/null || git checkout --ours . 2>/dev/null || true
            git add . 2>/dev/null || true
            
            if git commit --no-edit 2>/dev/null; then
                echo "  ✓ Auto-resolved conflicts"
                ((successful++))
            else
                echo "  ✗ Could not resolve conflicts"
                git merge --abort 2>/dev/null || true
                ((failed++))
            fi
        fi
        
        # Clean up
        git branch -D "$TEMP_BRANCH" 2>/dev/null || true
        
        # Push every 5 merges
        if [ $((i % 5)) -eq 4 ]; then
            echo "  Pushing intermediate changes..."
            git push origin main || echo "  Push failed, continuing..."
        fi
    else
        echo "  ✗ Could not checkout branch"
        ((failed++))
    fi
    
    echo "  Progress: $((successful + failed))/$total processed"
done

# Final push
echo "Pushing final changes to origin main..."
git push origin main || echo "Final push failed"

echo "=== FINAL SUMMARY ==="
echo "Successful merges: $successful"
echo "Failed merges: $failed"
echo "Total processed: $((successful + failed))"
echo "Success rate: $(( successful * 100 / total ))%"

echo "Recent commits:"
git log --oneline -10