#!/usr/bin/env bash
# Script-only Hermes/Termux entry. Does not call an LLM (avoids HTTP 400: local is not a valid model ID).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
export ZION_EMAIL_SEND_ENABLED="${ZION_EMAIL_SEND_ENABLED:-0}"
export ZION_EMAIL_GMAIL_DRAFTS="${ZION_EMAIL_GMAIL_DRAFTS:-1}"
python3 automation/scripts/email_autopilot.py --max "${1:-30}" --hot-max "${2:-8}"
