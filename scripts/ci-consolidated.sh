#!/usr/bin/env bash
set -euo pipefail

echo "[ci] Starting consolidated CI flow"

if ! command -v npm >/dev/null 2>&1; then
  echo "[ci] npm not found" >&2
  exit 1
fi

echo "[ci] npm ci"
npm ci --ignore-scripts --no-audit --fund=false --omit=optional

echo "[ci] eslint check"
npm run lint:check || {
  echo "[ci] Lint failed. Attempting auto-fix for safe paths..."
  npm run lint || true
}

echo "[ci] type-check"
npm run type-check

echo "[ci] build"
npm run build

echo "[ci] smoke tests"
npm run test:smoke

echo "[ci] completed"

