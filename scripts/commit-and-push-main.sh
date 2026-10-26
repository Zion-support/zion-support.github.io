#!/usr/bin/env bash
set -euo pipefail

target_branch="${1:-main}"
expected_ref="refs/heads/${target_branch}"

if [[ "${GITHUB_ACTIONS:-}" != "true" ]]; then
  echo "commit-and-push-main: refusing outside GitHub Actions"
  exit 1
fi

if [[ "${GITHUB_REF:-}" != "${expected_ref}" ]]; then
  echo "commit-and-push-main: refusing to push from GITHUB_REF=${GITHUB_REF:-unset}; expected ${expected_ref}"
  exit 1
fi

if git diff --quiet -- .github/workflows; then
  echo "commit-and-push-main: no workflow changes to commit"
  exit 0
fi

git add .github/workflows

if git diff --cached --quiet; then
  echo "commit-and-push-main: nothing staged"
  exit 0
fi

git fetch origin "${target_branch}"
remote_sha="$(git rev-parse "origin/${target_branch}")"
head_sha="$(git rev-parse HEAD)"
if [[ "${remote_sha}" != "${head_sha}" ]]; then
  echo "commit-and-push-main: remote advanced from checkout; refusing non-fast-forward automation"
  echo "checkout=${head_sha} remote=${remote_sha}"
  exit 1
fi

git commit -m "chore(ci): pin GitHub Action refs to immutable SHAs"
git push origin "HEAD:${target_branch}"
