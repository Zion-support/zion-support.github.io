#!/bin/bash
set -euo pipefail

echo "Starting build process..."

is_cmd() { command -v "$1" >/dev/null 2>&1; }

run_build() {
  if [ -f pnpm-lock.yaml ] && is_cmd pnpm; then
    echo "Using pnpm"
    pnpm install --frozen-lockfile || pnpm install
    pnpm run build
  elif [ -f yarn.lock ] && is_cmd yarn; then
    echo "Using yarn"
    if [ "${NETLIFY:-}" = "true" ]; then
      yarn install --frozen-lockfile --network-timeout 60000
    else
      yarn install --network-timeout 100000
    fi
    yarn build || yarn run build
  elif [ -f package-lock.json ] && is_cmd npm; then
    echo "Using npm (lockfile)"
    npm ci || npm install
    npm run build
  elif [ -f package.json ] && is_cmd npm; then
    echo "Using npm"
    npm install
    npm run build
  else
    echo "No recognized package manager or lockfile found." >&2
    exit 1
  fi
}

run_build

echo "Build completed successfully!"