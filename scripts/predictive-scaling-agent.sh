#!/usr/bin/env bash
# scripts/predictive-scaling-agent.sh - Predictively scales resources based on metrics
# Uses only free tools: awk, bc, curl, jq

set -euo pipefail

METRICS_FILE="${METRICS_FILE:-$HOME/.hermes/metrics/performance.json}"
LOG_FILE="${LOG_FILE:-$HOME/.hermes/memory/predictive-scaling.log}"
STATE_FILE="${STATE_FILE:-$HOME/.hermes/state/scaling-state}"
TELEGRAM_BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-}"
TELEGRAM_CHAT_ID="${TELEGRAM_CHAT_ID:-8435383377}"

mkdir -p "$(dirname "$METRICS_FILE")" "$(dirname "$STATE_FILE")"

log() { echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] $1" | tee -a "$LOG_FILE"; }

# Predictive algorithm: if CPU > 80% for 3 consecutive checks, predict need for more resources
predict_scaling_need() {
  local cpu_avg
  cpu_avg=$(awk -v last="$1" 'BEGIN {print (last + cpu) / 2}' cpu="$(grep -oP '"cpu_percent":\s*\K[0-9.]+' "$METRICS_FILE" 2>/dev/null || echo 0)")
  echo "$cpu_avg"
}

# Read current metrics
if [[ -f "$METRICS_FILE" ]]; then
  cpu=$(grep -oP '"cpu_percent":\s*\K[0-9.]+' "$METRICS_FILE" 2>/dev/null || echo 0)
  mem=$(grep -oP '"memory_percent":\s*\K[0-9.]+' "$METRICS_FILE" 2>/dev/null || echo 0)
else
  cpu=0; mem=0
fi

# Get previous state
prev_state=$(cat "$STATE_FILE" 2>/dev/null || echo '{"count":0}')
high_cpu_count=$(echo "$prev_state" | jq -r '.high_cpu_count // 0')

# Increment if high CPU, reset if normal
if (( $(echo "$cpu > 80" | bc -l) )); then
  high_cpu_count=$((high_cpu_count + 1))
else
  high_cpu_count=0
fi

# Predict and act
predicted_cpu=$(predict_scaling_need "$cpu")
if (( $(echo "$predicted_cpu > 85 && $high_cpu_count >= 3" | bc -l) )); then
  log "🚨 Predictive alert: Scaling predicted needed (CPU: $cpu%, Predicted: $predicted_cpu%)"
  # In a real system, this would trigger resource scaling
  # For now, we alert and log
  echo '{"status":"scaling_predicted","cpu":'"$cpu"',"predicted_cpu":'"$predicted_cpu"'}' > "$STATE_FILE"
  
  if [[ -n "$TELEGRAM_BOT_TOKEN" ]]; then
    curl -sf -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
      -d "chat_id=${TELEGRAM_CHAT_ID}" \
      -d "text=🔮 Predictive Scaling Alert%0A%0AExpected resource exhaustion predicted.%0ACPU: ${cpu}% -> Predicted: ${predicted_cpu}%" \
      --max-time 10 || true
  fi
else
  echo '{"high_cpu_count":'"$high_cpu_count"',"last_cpu":'"$cpu"'}' > "$STATE_FILE"
  log "OK: No scaling needed (CPU: $cpu%, predicted: $predicted_cpu%)"
fi

echo "✅ Predictive scaling check complete"