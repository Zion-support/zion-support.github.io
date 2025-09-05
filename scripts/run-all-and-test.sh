#!/usr/bin/env bash
set -euo pipefail

echo "[orchestrate] Running safe automations"
npm run -s automation:safe || true

echo "[orchestrate] Running automation master"
npm run -s automation:master || true

echo "[orchestrate] Attempting build"
if command -v vite >/dev/null 2>&1; then
  npm run -s build || true
else
  echo "vite not found; attempting to install dev dependencies"
  npm install --no-audit --no-fund || true
  npm run -s build || true
fi

echo "[orchestrate] Running smoke tests"
npm run -s test:smoke || true

echo "[orchestrate] Completed. See logs above."

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

