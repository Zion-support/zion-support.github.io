#!/usr/bin/env bash
# self-healing-cron-monitor.sh — Monitors scheduled tasks and restarts stalled ones
# Run every 5 minutes via cron
#
# Checks:
#   1. PM2 processes listed in expected_processes.txt are running
#   2. Cron jobs in /var/spool/cron are executing (via last-run timestamps)
#   3. GitHub Actions scheduled workflows ran in the last 24h
#
# If any check fails, it restarts the task and sends a Telegram alert.

LOG="$HOME/.hermes/memory/cron-healer.log"
PROC_LIST="$HOME/.hermes/expected_processes.txt"
TELEGRAM_BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-}"
TELEGRAM_CHAT_ID="${TELEGRAM_CHAT_ID:-}"
GITHUB_TOKEN="${GITHUB_TOKEN:-}"
GITHUB_REPO="${GITHUB_REPO:-Zion-support/zion.app}"
MAX_STALL_MINUTES=30

log() { echo "$(date '+%Y-%m-%d %H:%M:%S') $*" >> "$LOG"; }

send_alert() {
  local msg="$1"
  log "ALERT: $msg"
  if [[ -n "$TELEGRAM_BOT_TOKEN" && -n "$TELEGRAM_CHAT_ID" ]]; then
    curl -sf -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
      -d "chat_id=${TELEGRAM_CHAT_ID}" \
      -d "text=🔧 SELF-HEAL: $msg" > /dev/null 2>&1 || true
  fi
}

# --- Check 1: PM2 processes ---
check_pm2_processes() {
  if [[ ! -f "$PROC_LIST" ]]; then
    log "No expected_processes.txt found — skipping PM2 check"
    return 0
  fi
  while IFS= read -r proc_name || [[ -n "$proc_name" ]]; do
    [[ -z "$proc_name" || "$proc_name" == \#* ]] && continue
    if ! pm2 describe "$proc_name" &>/dev/null; then
      log "PM2 process '$proc_name' not found — restarting"
      send_alert "PM2 process '$proc_name' was down. Restarting..."
      pm2 start "$proc_name" --no-daemon 2>/dev/null || pm2 resurrect 2>/dev/null || true
    else
      log "PM2 process '$proc_name' OK"
    fi
  done < "$PROC_LIST"
}

# --- Check 2: System cron jobs ---
check_system_crons() {
  local cron_files
  cron_files=$(ls /var/spool/cron/crontabs/ 2>/dev/null || ls /var/spool/cron/ 2>/dev/null || echo "")
  for user in $cron_files; do
    local cron_file="/var/spool/cron/crontabs/$user"
    [[ ! -f "$cron_file" ]] && cron_file="/var/spool/cron/$user"
    [[ ! -f "$cron_file" ]] && continue
    while IFS= read -r line || [[ -n "$line" ]]; do
      [[ -z "$line" || "$line" == \#* ]] && continue
      # Extract the command part (after the time fields)
      local cmd
      cmd=$(echo "$line" | awk '{for(i=6;i<=NF;i++) printf "%s ", $i; print ""}')
      # Check if this command ran recently via last-run or process list
      if ! pgrep -f "$cmd" > /dev/null 2>&1; then
        log "Cron command may be stalled: $cmd — flagging"
        send_alert "Cron job may have stalled: $cmd"
      fi
    done < "$cron_file"
  done
}

# --- Check 3: GitHub Actions scheduled workflows ---
check_github_scheduled_workflows() {
  [[ -z "$GITHUB_TOKEN" ]] && { log "No GITHUB_TOKEN — skipping GH Actions check"; return 0; }

  local runs
  runs=$(curl -sf -H "Authorization: token $GITHUB_TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    "https://api.github.com/repos/$GITHUB_REPO/actions/runs?per_page=50" 2>/dev/null) || { log "Failed to fetch GH Actions"; return 0; }

  local count
  count=$(echo "$runs" | jq -r '.workflow_runs | length' 2>/dev/null || echo 0)
  [[ "$count" -eq 0 ]] && { log "No workflow runs found"; return 0; }

  local stale_count=0
  for i in $(seq 0 $((count - 1))); do
    local name state updated_at event_name
    name=$(echo "$runs" | jq -r ".workflow_runs[$i].name")
    state=$(echo "$runs" | jq -r ".workflow_runs[$i].conclusion")
    updated_at=$(echo "$runs" | jq -r ".workflow_runs[$i].updated_at")
    event_name=$(echo "$runs" | jq -r ".workflow_runs[$i].event")

    # Only check scheduled workflows
    [[ "$event_name" != "schedule" ]] && continue

    local updated_epoch
    updated_epoch=$(date -j -f "%Y-%m-%dT%H:%M:%SZ" "$updated_at" +%s 2>/dev/null || echo 0)
    local now_epoch
    now_epoch=$(date +%s)
    local age_minutes=$(( (now_epoch - updated_epoch) / 60 ))

    if [[ "$state" != "success" && $age_minutes -gt $MAX_STALL_MINUTES ]]; then
      log "Scheduled workflow '$name' stalled (last updated $age_minutes min ago, state=$state)"
      send_alert "Scheduled workflow '$name' stalled (${age_minutes}m ago, state=$state)"
      stale_count=$((stale_count + 1))
    else
      log "Scheduled workflow '$name' OK (${age_minutes}m ago, state=$state)"
    fi
  done
  log "Checked $count workflow runs, $stale_count stale"
}

# --- Main ---
log "=== Cron Health Check Started ==="
check_pm2_processes
check_system_crons
check_github_scheduled_workflows
log "=== Cron Health Check Complete ==="