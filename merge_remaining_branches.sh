#!/bin/bash

# Script to merge remaining unmerged branches
set -e

echo "Starting merge of remaining branches..."

# List of branches to merge (excluding backups and already merged)
BRANCHES=(
    "origin/chore/netlify-build-bump-20250918"
    "origin/chore/netlify-build-fix"
    "origin/chore/netlify-build-trigger"
    "origin/chore/netlify-deploy-bump-2025-09-18-2145"
    "origin/chore/netlify-next-plugin"
    "origin/chore/netlify-nextjs-plugin"
    "origin/chore/netlify-trigger"
    "origin/clean/build-without-artifacts"
    "origin/cursor/fix-netlify-build-and-merge-to-main-1b24"
    "origin/cursor/fix-netlify-build-and-merge-to-main-7fae"
    "origin/cursor/fix-netlify-build-and-merge-to-main-8cbf"
    "origin/cursor/fix-netlify-build-and-merge-to-main-8e4b"
    "origin/cursor/fix-netlify-build-and-merge-to-main-9c77"
)

# Function to resolve netlify.toml conflicts
resolve_netlify_conflicts() {
    local file="netlify.toml"
    if [[ -f "$file" ]]; then
        echo "Resolving conflicts in $file..."
        # Remove conflict markers and keep the latest timestamp
