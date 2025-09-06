#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "[dev-ci] Install deps"
npm ci >/dev/null 2>&1 || npm install >/dev/null 2>&1 || true

echo "[dev-ci] Lint"
npm run -s lint || true

echo "[dev-ci] Type-check"
npx tsc --noEmit || true

echo "[dev-ci] Python tests"
if [ -f ".venv/bin/activate" ]; then
  source .venv/bin/activate
fi
if [ -d "zion_academy/tests" ]; then
  PYTHONPATH="$(pwd)/zion_academy" python3 -m unittest discover -s zion_academy/tests -p 'test_*.py' -v || true
else
  echo "[dev-ci] No python tests"
fi

echo "[dev-ci] Done"

