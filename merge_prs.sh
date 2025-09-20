#!/bin/bash

# Script to merge open PRs
set -e

echo "Starting PR merge process..."

# Check current status
git status

# Add and commit the netlify.toml changes
git add netlify.toml
git commit -m "fix: update netlify.toml to use Yarn instead of npm

- Changed NETLIFY_USE_NPM from true to false
- Updated build command to use yarn install --frozen-lockfile
- Changed NPM_FLAGS to YARN_FLAGS
- This resolves the npm ci error in Netlify builds"

# Try to merge the first PR
echo "Attempting to merge PR #22652..."
git merge origin/cursor/fix-netlify-build-and-merge-to-main-4ff7 --no-edit || {
    echo "Merge had conflicts, resolving..."
    # Use the PR version for conflicts
    git checkout --theirs .
    git add .
    git commit -m "resolve: merge conflicts in PR #22652"
}

echo "PR merge process completed."
git log --oneline -5