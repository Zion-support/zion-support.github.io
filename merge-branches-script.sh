#!/bin/bash

# Script to merge multiple branches into main systematically
set -e

echo "Starting systematic branch merge process..."

# Get list of branches to merge
BRANCHES=(
    "origin/0parff-codex/centralize-api-error-handling-and-add-errorboundary"
    "origin/0t8m4m-codex/update-project-color-palette"
    "origin/14gqd5-codex/implement-checkout-flow-with-auth-redirect"
    "origin/1dcwqi-codex/implement-global-pricing-with-currency-selection"
    "origin/1fjs4s-codex/implement-instant-messaging-for-negotiations"
    "origin/1nq1ky-codex/render-talent-profiles-with-error-states"
    "origin/1wzbwr-codex/fix-typescript-errors-in-files"
    "origin/2enrzx-codex/implement-feature-flags-and-a/b-testing"
    "origin/2qzh01-codex/fix-npm-eio-error-during-install"
    "origin/2zlocq-codex/fix-login-form-submission"
    "origin/306l03-codex/fix-blank-screen-issue"
    "origin/3bk25l-codex/fix-test-expectation-for-fetch-rejection"
    "origin/42l7l1-codex/check-logs-and-fix-errors"
    "origin/42zrxf-codex/improve-discoverability-with-seo-features"
    "origin/4cssl2-codex/fix-typescript-errors-in-components"
    "origin/4d93zy-codex/fix-npm-eio-error-during-install"
    "origin/b029y5-codex/fix-errors-and-improve-project"
    "origin/b71j7n-codex/fix-unsupported-shell-syntax-in-setup.sh"
    "origin/b8kb4j-codex/fix-404-on-equipment-detail-pages"
    "origin/b9lv6g-codex/fix-toggle-icon-layout-issue"
)

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Counter for successful merges
SUCCESS_COUNT=0
FAILED_BRANCHES=()

echo "Processing ${#BRANCHES[@]} branches..."

for branch in "${BRANCHES[@]}"; do
    echo ""
    echo "Processing branch: $branch"
    
    # Extract branch name without origin/
    local_branch=$(echo "$branch" | sed 's/origin\///')
    
    # Fetch the branch
    git fetch origin "$local_branch" || {
        echo "Failed to fetch $branch"
        FAILED_BRANCHES+=("$branch")
        continue
    }
    
    # Checkout the branch
    git checkout "$local_branch" || {
        echo "Failed to checkout $branch"
        FAILED_BRANCHES+=("$branch")
        continue
    }
    
    # Try to merge main into the branch
    if git merge main --no-commit --no-ff; then
        echo "Merge successful for $branch"
        git commit -m "Merge main into $local_branch" || true
        git push origin "$local_branch" || true
        
        # Now merge into main
        git checkout main
        if git merge "$local_branch" --no-ff -m "Merge $local_branch into main"; then
            echo "Successfully merged $branch into main"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        else
            echo "Failed to merge $branch into main"
            git merge --abort || true
            FAILED_BRANCHES+=("$branch")
        fi
    else
        echo "Merge conflicts in $branch - resolving automatically"
        git merge --abort || true
        
        # Try to resolve conflicts automatically
        git checkout main
        if git merge "$local_branch" --no-ff -m "Merge $local_branch into main" -X theirs; then
            echo "Successfully merged $branch into main (using theirs strategy)"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        else
            echo "Failed to merge $branch even with conflict resolution"
            git merge --abort || true
            FAILED_BRANCHES+=("$branch")
        fi
    fi
done

# Push main
git push origin main

echo ""
echo "Merge process completed!"
echo "Successfully merged: $SUCCESS_COUNT branches"
echo "Failed branches: ${#FAILED_BRANCHES[@]}"

if [ ${#FAILED_BRANCHES[@]} -gt 0 ]; then
    echo "Failed branches:"
    for branch in "${FAILED_BRANCHES[@]}"; do
        echo "  - $branch"
    done
fi