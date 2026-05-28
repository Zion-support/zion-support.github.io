#!/bin/bash
# Email Responder Cron v4 - runs every 5 minutes
# Intelligent processing with AI analysis, multi-language, task extraction

LOG_FILE="/Users/miami2/zion.app/automation/logs/email-responder-v4-cron.log"
STATE_FILE="/Users/miami2/zion.app/automation/logs/email-responder-state-v4.json"
ENHANCER_LOG="/Users/miami2/zion.app/automation/logs/email-responder-enhancer.log"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

cd /Users/miami2/zion.app || exit 1

log "═══════════════════════════════════════════════════════════"
log "EMAIL RESPONDER v4.0 CRON - Starting"
log "═══════════════════════════════════════════════════════════"

# Run the intelligent email responder
node automation/email-responder-v4.cjs 2>&1 | tee -a "$LOG_FILE"
RESPONDER_EXIT=$?

log "Responder exit code: $RESPONDER_EXIT"

# Run enhancer every 6 cycles (~30 min) to learn and improve
CYCLE_COUNT=$(cat "$STATE_FILE" 2>/dev/null | grep -o '"processedCount":[0-9]*' | grep -o '[0-9]*' || echo "0")
if [ $((CYCLE_COUNT % 6)) -eq 0 ] && [ $CYCLE_COUNT -gt 0 ]; then
    log "Running enhancer (cycle $CYCLE_COUNT)..."
    node automation/email-responder-enhancer.cjs 2>&1 | tee -a "$ENHANCER_LOG"
fi

log "═══════════════════════════════════════════════════════════"
log "CRON Complete - $(date '+%Y-%m-%d %H:%M:%S')"
log "═══════════════════════════════════════════════════════════"