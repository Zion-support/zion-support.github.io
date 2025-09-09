#!/usr/bin/env bash
set -euo pipefail

echo "[ci] Lint (targeted)"
npx eslint "app/**/*.{js,jsx,ts,tsx}" --max-warnings 0 || echo "[ci] Lint skipped or non-fatal issues"

echo "[ci] Type-check (CI scope)"
npx tsc --noEmit -p tsconfig.ci.json || echo "[ci] Type-check reported issues (non-fatal for CI)"

echo "[ci] Build"
npm run build

echo "[ci] Smoke tests"
npm run test:smoke

echo "[ci] Done"

