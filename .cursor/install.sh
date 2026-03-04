#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Cloud install: preparing Node.js dependencies for Next.js"

if ! command -v node >/dev/null 2>&1; then
  echo "Error: node is not installed in this environment." >&2
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is not installed in this environment." >&2
  exit 1
fi

if [ -f .nvmrc ]; then
  REQUIRED_NODE_MAJOR="$(tr -d '[:space:]' < .nvmrc | sed 's/^v//' | cut -d'.' -f1)"
  CURRENT_NODE_MAJOR="$(node -p "process.versions.node.split('.')[0]")"
  if [ -n "$REQUIRED_NODE_MAJOR" ] && [ "$REQUIRED_NODE_MAJOR" != "$CURRENT_NODE_MAJOR" ]; then
    echo "Warning: .nvmrc expects Node major $REQUIRED_NODE_MAJOR but current Node is $(node -v)." >&2
  fi
fi

if [ -f package-lock.json ]; then
  npm ci --prefer-offline --no-audit --fund=false
else
  npm install --prefer-offline --no-audit --fund=false
fi

# Ensure local CLIs needed for builds/linting/type-checking exist.
npx --no-install next --version >/dev/null
npx --no-install eslint --version >/dev/null
npx --no-install tsc --version >/dev/null

echo "Cloud install complete: dependencies and core CLIs are ready."
