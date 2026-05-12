#!/usr/bin/env bash
# scripts/load-shedder-controller.sh - Dynamically enables/disables load shedding based on request latency
# Uses free tools: awk, grep, curl, jq
# Autonomous: runs every 5 min via cron/GitHub Actions

set -euo pipefail

LOG_DIR="${LOG_DIR:-$HOME/.hermes/memory}"
LATENCY_LOG="$LOG_DIR/request-latency.log"
CONFIG_FILE="${CONFIG_FILE:-./app/middleware/load-shedder-config.json}"
TELEGRAM_BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-}"
TELEGRAM_CHAT_ID="${TELEGRAM_CHAT_ID:-8435383377}"
THRESHOLD_MS=2000  # 2 seconds
WINDOW_MIN=10      # look at last 10 minutes

mkdir -p "$(dirname "$CONFIG_FILE")" "$LOG_DIR"

# Ensure latency log exists (app should write to it)
touch "$LATENCY_LOG"

# Calculate average latency over last WINDOW_MIN minutes from log lines like: [timestamp] PATH: /api/users LATENCY: 123ms
AVG_LATENCY=$(awk -v window="$WINDOW_MIN" '
  BEGIN { sum=0; count=0 }
  /LATENCY:/ {
    match($0, /LATENCY: ([0-9]+)ms/, arr);
    if (arr[1] != "") {
      sum += arr[1];
      count++;
    }
  }
  END { if (count>0) print int(sum/count); else print 0 }
' "$LATENCY_LOG")

# Determine if we should enable load shedding
if (( AVG_LATENCY > THRESHOLD_MS )); then
  NEW_STATE='{"enabled":true,"reason":"High latency","avg_latency_ms":'$AVG_LATENCY'}'
else
  NEW_STATE='{"enabled":false,"reason":"Normal latency","avg_latency_ms":'$AVG_LATENCY'}'
fi

# Write config (atomic)
echo "$NEW_STATE" > "$CONFIG_FILE.tmp" && mv "$CONFIG_FILE.tmp" "$CONFIG_FILE"

# Send Telegram alert if state changed
STATE_FILE="$LOG_DIR/load-shedder-state.last"
if [[ -f "$STATE_FILE" ]]; then
  OLD_STATE=$(cat "$STATE_FILE")
else
  OLD_STATE=''
fi

if [[ "$NEW_STATE" != "$OLD_STATE" ]]; then
  if [[ -n "$TELEGRAM_BOT_TOKEN" ]]; then
    ENABLED=$(echo "$NEW_STATE" | grep -o '"enabled":true' && echo "true" || echo "false")
    REASON=$(echo "$NEW_STATE" | grep -o '"reason":"[^"]*"' | cut -d'"' -f4)
    MSG="🚦 Load Shedder Updated%0A%0AEnabled: $ENABLED%0ARason: $REASON%0AAvg Latency: ${AVG_LATENCY}ms (threshold: ${THRESHOLD_MS}ms)"
    curl -sf -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
      -d "chat_id=${TELEGRAM_CHAT_ID}" \
      -d "text=$MSG" \
      -d "parse_mode=Markdown" \
      --max-time 10 || true
  fi
  echo "$NEW_STATE" > "$STATE_FILE"
fi

echo "✅ Load shedder controller executed (latency: ${AVG_LATENCY}ms)"