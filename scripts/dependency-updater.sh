#!/usr/bin/env bash
# scripts/dependency-updater.sh - Checks for outdated dependencies and opens a PR

set -euo pipefail

# Configuration
REPO_DIR="$(git rev-parse --show-toplevel)"
BRANCH_NAME="auto-update/dependencies-$(date +%Y%m%d-%H%M%S)"
COMMIT_MSG="chore: update dependencies"
PR_TITLE="chore: update dependencies"
PR_BODY="This PR updates the project's dependencies to their latest versions.
- Updated $(npm-check-updates -u 2>&1 | grep -c '^ ' || echo 0) dependencies.
- Run \`npm install\` to install the updates.
- CI will run tests to ensure everything works.

⚠️  If this PR breaks something, please review the changes carefully."

# Ensure we're in the repo root
cd "$REPO_DIR"

# Check if ncu is installed; install if not
if ! command -v ncu &> /dev/null; then
  echo "Installing npm-check-updates..."
  npm install -g npm-check-updates
fi

# Check for outdated dependencies
echo "Checking for outdated dependencies..."
if ncu --json-upgrade &> /dev/null; then
  echo "Found outdated dependencies. Updating..."
  ncu -u
  git add package.json package-lock.json

  # Check if there are changes
  if git diff --cached --quiet; then
    echo "No changes to commit."
    exit 0
  fi

  git commit -m "$COMMIT_MSG"

  # Push to a new branch and create PR
  git push origin HEAD:"$BRANCH_NAME" 2>/dev/null || git push -u origin "$BRANCH_NAME"
  echo "Created branch $BRANCH_NAME"

  # Create PR using GitHub CLI
  gh pr create --title "$PR_TITLE" --body "$PR_BODY" --base main --head "$BRANCH_NAME"
  echo "Created PR: $PR_TITLE"
else
  echo "All dependencies are up to date."
fi