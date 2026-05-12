#!/usr/bin/env bash
# Wrapper for uptime monitor — sources env then runs monitor
set -euo pipefail

# Source Hermes environment (contains TELEGRAM_BOT_TOKEN, etc.)
if [[ -f /root/.openclaw/workspace/coordination/.env ]]; then
  set -a
  source /root/.openclaw/workspace/coordination/.env
  set +a
fi

exec /root/.openclaw/workspace/scripts/uptime-monitor.sh
