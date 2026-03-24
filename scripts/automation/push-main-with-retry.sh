#!/usr/bin/env bash
# Push current HEAD to main with one pull --rebase retry (no commit).
# Use when the workflow already committed and/or rebased locally.
set -euo pipefail

if git push origin HEAD:main; then
  echo "Push to main succeeded."
  exit 0
fi

echo "::warning::Initial push failed; attempting one rebase retry."
if ! git pull --rebase origin main; then
  echo "::warning::Rebase failed after push rejection."
  exit 0
fi

if ! git push origin HEAD:main; then
  echo "::warning::Retry push still failed; remote likely advanced again."
  exit 0
fi

echo "Push retry to main succeeded."
