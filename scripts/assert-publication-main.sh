#!/usr/bin/env bash
set -euo pipefail
if [[ ! "$CANDIDATE_SHA" =~ ^[0-9a-f]{40}$ ]]; then
  echo "::error::Invalid publication candidate SHA."
  exit 1
fi
remote="$(timeout 30s git ls-remote --exit-code https://github.com/Zion-support/zion-support.github.io.git refs/heads/main)"
if [[ "$remote" != "$CANDIDATE_SHA"$'\trefs/heads/main' ]]; then
  echo "::error::Publication candidate is no longer main. Start a fresh run."
  exit 1
fi
if [[ "$(git rev-parse HEAD)" != "$CANDIDATE_SHA" ]]; then
  echo "::error::Checked out revision differs from publication candidate."
  exit 1
fi
