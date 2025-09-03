#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "[1/4] Installing node deps (yarn)"
corepack enable >/dev/null 2>&1 || true
yarn install --frozen-lockfile --check-files --non-interactive || yarn install --non-interactive

echo "[2/4] Installing python deps"
pip3 install --user --break-system-packages -r requirements.txt >/dev/null 2>&1 || true
pip3 install --user --break-system-packages Flask Flask-SQLAlchemy Flask-WTF email_validator >/dev/null 2>&1 || true

echo "[3/4] Running automations"
bash start-complete-automation.sh || true
bash scripts/start-all-automations.sh || true

echo "[4/4] Running tests"
PYTHONPATH="$(pwd)/zion_academy" python3 -m unittest discover -s zion_academy/tests -p 'test_*.py' -v | tee python-test-results.log

echo "Done. Logs: automation_run.log, python-test-results.log"

