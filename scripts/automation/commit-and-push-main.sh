#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   commit-and-push-main.sh "commit message"
# Expects staged changes already prepared.

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 \"commit message\"" >&2
  exit 2
fi

commit_message="$1"

if git diff --staged --quiet; then
  echo "No staged changes to commit."
  exit 0
fi

git commit -m "$commit_message"

if git push origin HEAD:main; then
  echo "Push to main succeeded."
  exit 0
fi

echo "::warning::Initial push failed; attempting one rebase retry."
if ! git pull --rebase origin main; then
  echo "::warning::Rebase failed after push rejection; leaving commit local to workflow run."
  exit 0
fi

if ! git push origin HEAD:main; then
  echo "::warning::Retry push still failed; remote likely advanced again."
  exit 0
fi

echo "Push retry to main succeeded."
