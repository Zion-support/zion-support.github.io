#!/usr/bin/env bash
# scripts/anomaly-detector.sh - Statistical anomaly detection for logs
# Uses only free tools: awk, bc, curl
# Autonomous: runs via cron, alerts on anomalies

set -euo pipefail

LOG_DIR="${LOG_DIR:-$HOME/.hermes/memory}"
METRICS_LOG="$LOG_DIR/performance.log"
ANOMALY_LOG="$LOG_DIR/anomaly-alerts.log"
STATE_DIR="${STATE_DIR:-$HOME/.hermes/state}"
WINDOW_SIZE=10
THRESHOLD_STD=2.0
TELEGRAM_BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-}"
TELEGRAM_CHAT_ID="${TELEGRAM_CHAT_ID:-8435383377}"

mkdir -p "$STATE_DIR" "$(dirname "$ANOMALY_LOG")"

# Extract numeric values (e.g., latency, CPU)
extract_values() {
  grep -oE '[0-9]+\.?[0-9]*' "$METRICS_LOG" 2>/dev/null | tail -"$WINDOW_SIZE"
}

# Calculate mean
calc_mean() {
  local sum=0 count=0
  while read -r val; do
    sum=$(echo "$sum + $val" | bc -l)
    count=$((count + 1))
  done
  if (( count > 0 )); then
    echo "scale=4; $sum / $count" | bc -l
  else
    echo 0
  fi
}

# Calculate standard deviation
calc_stddev() {
  local mean=$1
  local sum_sq=0 count=0
  while read -r val; do
    local diff=$(echo "$val - $mean" | bc -l)
    local sq=$(echo "$diff * $diff" | bc -l)
    sum_sq=$(echo "$sum_sq + $sq" | bc -l)
    count=$((count + 1))
  done
  if (( count > 1 )); then
    echo "scale=4; sqrt($sum_sq / ($count - 1))" | bc -l
  else
    echo 0
  fi
}

# Main logic
VALUES=$(extract_values)
if [[ -z "$VALUES" ]]; then
  echo "✅ No data to analyze"
  exit 0
fi

MEAN=$(calc_mean <<< "$VALUES")
STDDEV=$(calc_stddev "$MEAN" <<< "$VALUES")
UPPER_THRESHOLD=$(echo "$MEAN + ($THRESHOLD_STD * $STDDEV)" | bc -l)
LOWER_THRESHOLD=$(echo "$MEAN - ($THRESHOLD_STD * $STDDEV)" | bc -l)

# Check last value
LAST_VAL=$(echo "$VALUES" | tail -1)
IS_ANOMALY=$(echo "$LAST_VAL > $UPPER_THRESHOLD || $LAST_VAL < $LOWER_THRESHOLD" | bc -l)

if [[ "$IS_ANOMALY" -eq 1 ]]; then
  ALERT="🚨 Anomaly detected! Value: $LAST_VAL (Mean: $MEAN, StdDev: $STDDEV)"
  echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] $ALERT" >> "$ANOMALY_LOG"
  
  if [[ -n "$TELEGRAM_BOT_TOKEN" ]]; then
    curl -sf -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
      -d "chat_id=${TELEGRAM_CHAT_ID}" \
      -d "text=$ALERT" \
      --max-time 10 || true
  fi
else
  echo "✅ Anomaly check passed (value: $LAST_VAL within bounds)"
fi