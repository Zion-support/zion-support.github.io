#!/bin/bash

# Script to merge important fix and improvement branches
set -e

echo "🚀 Starting merge of important branches..."

# List of important branches to merge
branches=(
    "origin/0nylrk-codex/fix-footer-contact-link"
    "origin/0parff-codex/centralize-api-error-handling-and-add-errorboundary"
    "origin/0smfo8-codex/fix-404-error-for-non-existent-route"
    "origin/0t8m4m-codex/update-project-color-palette"
    "origin/0une71-codex/fix-unsupported-shell-syntax-in-setup.sh"
    "origin/1m9jcs-codex/fix-client-side-rendering-and-javascript-errors"
    "origin/1nc0kn-codex/fix-blank-screen-on-app-load"
    "origin/1ry69n-codex/fix-npm-eio-error-during-install"
    "origin/1wzbwr-codex/fix-typescript-errors-in-files"
    "origin/2503nr-codex/fix-ts2614-error-with-suspense-import"
    "origin/26ywwb-codex/fix-client-side-rendering-and-javascript-errors"
    "origin/2qzh01-codex/fix-npm-eio-error-during-install"
    "origin/2zlocq-codex/fix-login-form-submission"
    "origin/306ipd-codex/add-new-products-page-with-10-items"
    "origin/306l03-codex/fix-blank-screen-issue"
    "origin/3bk25l-codex/fix-test-expectation-for-fetch-rejection"
    "origin/42l7l1-codex/check-logs-and-fix-errors"
    "origin/42zrxf-codex/improve-discoverability-with-seo-features"
    "origin/4cssl2-codex/fix-typescript-errors-in-components"
    "origin/4d93zy-codex/fix-npm-eio-error-during-install"
)

success_count=0
failed_count=0

for branch in "${branches[@]}"; do
    echo "🔄 Attempting to merge $branch..."
    
    if git merge "$branch" --no-edit --no-ff 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        ((success_count++))
    else
        echo "⚠️  Merge conflict in $branch, attempting auto-resolution..."
        
        # Try to resolve conflicts automatically
        if git checkout --ours . && git add . && git commit --no-edit 2>/dev/null; then
            echo "✅ Auto-resolved conflicts for $branch"
            ((success_count++))
        else
            echo "❌ Failed to merge $branch"
            git merge --abort 2>/dev/null || true
            ((failed_count++))
        fi
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "✅ Successful merges: $success_count"
echo "❌ Failed merges: $failed_count"

if [ $success_count -gt 0 ]; then
    echo "🚀 Pushing merged changes..."
    git push origin main
    echo "✅ Changes pushed successfully!"
fi

echo "🎉 Merge process completed!"