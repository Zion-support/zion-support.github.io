#!/bin/bash
# Autonomous Self-Healing Monitoring System
# Monitors app health and auto-recovers from failures

set -e

LOG_DIR="$HOME/.hermes/memory"
HEALTH_URL="http://localhost:3000/api/health"
TELEGRAM_TOKEN="${TELEGRAM_BOT_TOKEN:-your-token-here}"
TELEGRAM_CHAT_ID="${TELEGRAM_CHAT_ID:-your-chat-id}"

mkdir -p "$LOG_DIR"

echo "[$(date)] Self-healing monitor started" >> "$LOG_DIR/self-healing.log"

# Check health endpoint
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$HEALTH_URL" || echo "000")

if [ "$RESPONSE" -eq "200" ]; then
    echo "[$(date)] Health check passed (HTTP $RESPONSE)" >> "$LOG_DIR/self-healing.log"
    echo "✅ App is healthy"
else
    echo "[$(date)] Health check failed (HTTP $RESPONSE)" >> "$LOG_DIR/self-healing.log"
    
    # Auto-recovery attempt
    echo "[$(date)] Attempting auto-recovery..." >> "$LOG_DIR/self-healing.log"
    
    # Try to restart next.js dev server if running
    if pgrep -f "next" > /dev/null 2>&1; then
        echo "[$(date)] Restarting next.js..." >> "$LOG_DIR/self-healing.log"
        pkill -f "next" || true
        sleep 2
        echo "[$(date)] Restart command issued" >> "$LOG_DIR/self-healing.log"
    fi
    
    # Send Telegram alert
    if [ -n "$TELEGRAM_TOKEN" ] && [ -n "$TELEGRAM_CHAT_ID" ]; then
        curl -X POST "https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage" \
            -d "chat_id=${TELEGRAM_CHAT_ID}" \
            -d "text=⚠️ Self-Healing Alert: App health check failed (HTTP ${RESPONSE}). Auto-recovery attempted." \
            -d "parse_mode=Markdown" 2>> "$LOG_DIR/self-healing.log" || true
    fi
    
    echo "❌ App health check failed - auto-recovery attempted"
fi
