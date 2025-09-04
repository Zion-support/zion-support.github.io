#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "[1/4] Installing node deps (npm, no scripts)"
npm install --no-audit --no-fund --omit=optional --ignore-scripts >/dev/null

echo "[2/4] Running automations"
npm run automation:master || true

echo "[3/4] Running type-check and lint"
npm run type-check || true
npm run lint || npm run lint:fix || true

echo "[4/4] Running tests"
npm test || true

echo "Done. Logs in logs/ directory if generated."

