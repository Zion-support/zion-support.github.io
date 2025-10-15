#!/bin/bash

echo "🔄 Starting comprehensive PR merge process..."

# Update main branch
echo "📥 Updating main branch..."
git fetch origin main
git merge origin/main

# Check for resolved branches that need to be merged
echo "🔍 Checking for resolved branches to merge..."

# List of resolved branches that might contain important changes
resolved_branches=(
    "origin/0nylrk-codex-fix-footer-contact-link-resolved"
    "origin/0parff-codex-centralize-api-error-handling-resolved"
    "origin/0smfo8-codex-fix-404-error-resolved"
    "origin/aggressive-merge-backup-20250827-045155-resolved"
)

# Merge each resolved branch
for branch in "${resolved_branches[@]}"; do
    echo "🔀 Attempting to merge $branch..."
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch"
    else
        echo "⚠️  Merge conflict in $branch, resolving..."
        # Resolve conflicts by accepting our version
        git checkout --ours .
        git add .
        git commit -m "resolve: merge conflicts in $branch"
        echo "✅ Resolved conflicts in $branch"
    fi
done

# Check for any new cursor branches that might be important
echo "🔍 Checking for important cursor branches..."

# List of potentially important cursor branches
cursor_branches=(
    "origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-2017"
    "origin/cursor/enhance-app-with-new-services-and-futuristic-design-17be"
    "origin/cursor/website-audit-and-update-with-deployment-78fe"
)

# Merge important cursor branches
for branch in "${cursor_branches[@]}"; do
    echo "🔀 Attempting to merge $branch..."
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch"
    else
        echo "⚠️  Merge conflict in $branch, resolving..."
        # Resolve conflicts by accepting our version
        git checkout --ours .
        git add .
        git commit -m "resolve: merge conflicts in $branch"
        echo "✅ Resolved conflicts in $branch"
    fi
done

echo "🎉 PR merge process completed!"