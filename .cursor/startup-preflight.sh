#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Cloud startup preflight: verifying npm install state and toolchain"

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is not installed in this environment." >&2
  exit 1
fi

if [ ! -f package.json ]; then
  echo "Error: package.json not found in $ROOT_DIR." >&2
  exit 1
fi

needs_install=false

if [ ! -d node_modules ]; then
  needs_install=true
elif [ -f package-lock.json ] && [ ! -f node_modules/.package-lock.json ]; then
  needs_install=true
elif [ -f package-lock.json ] && ! cmp -s package-lock.json node_modules/.package-lock.json; then
  needs_install=true
fi

if [ "$needs_install" = true ]; then
  echo "Dependencies are missing or stale. Reinstalling..."
  if [ -f package-lock.json ]; then
    npm ci --prefer-offline --no-audit --fund=false
  else
    npm install --prefer-offline --no-audit --fund=false
  fi
else
  echo "Dependency state looks current."
fi

if ! npx --no-install tsc --version >/dev/null 2>&1; then
  echo "TypeScript compiler not available from local dependencies. Reinstalling once..."
  if [ -f package-lock.json ]; then
    npm ci --prefer-offline --no-audit --fund=false
  else
    npm install --prefer-offline --no-audit --fund=false
  fi
fi

npx --no-install tsc --version
npx --no-install next --version >/dev/null
npx --no-install eslint --version >/dev/null

echo "Preflight passed: npm dependencies and TypeScript are ready."
