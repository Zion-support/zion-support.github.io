#!/usr/bin/env bash
# scripts/error-pattern-detector.sh - Analyzes logs for recurring error patterns
# Uses free tools: grep, awk, sort, uniq, curl
# Autonomous: runs via cron, alerts on new patterns

set -euo pipefail

LOG_DIR="${LOG_DIR:-$HOME/.hermes/memory}"
PATTERNS_FILE="$LOG_DIR/error-patterns-known.txt"
NEW_PATTERNS_FILE="$LOG_DIR/error-patterns-new.txt"
TELEGRAM_BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-}"
TELEGRAM_CHAT_ID="${TELEGRAM_CHAT_ID:-8435383377}"

mkdir -p "$LOG_DIR"

# Find all error lines, extract patterns (first 50 chars after ERROR), count occurrences
extract_patterns() {
  find "$LOG_DIR" -name "*.log" -exec grep -i "error\|exception\|fail" {} \; 2>/dev/null | \
    sed 's/.*\(ERROR\|Exception\|Fail\).*/\1/' | \
    cut -c1-60 | \
    sort | uniq -c | sort -rn
}

# Get current patterns
CURRENT_PATTERNS=$(extract_patterns)

# Load known patterns
if [[ -f "$PATTERNS_FILE" ]]; then
  KNOWN_PATTERNS=$(cat "$PATTERNS_FILE")
else
  KNOWN_PATTERNS=""
fi

# Find new patterns (appearing >= 3 times, not in known list)
NEW_PATTERNS=$(echo "$CURRENT_PATTERNS" | awk '$1 >= 3 && $0 !~ KNOWN_PATTERNS' | head -10)

if [[ -n "$NEW_PATTERNS" ]]; then
  echo "🚨 New error patterns detected:" > "$NEW_PATTERNS_FILE"
  echo "$NEW_PATTERNS" >> "$NEW_PATTERNS_FILE"
  
  # Send Telegram alert
  if [[ -n "$TELEGRAM_BOT_TOKEN" ]]; then
    MESSAGE=$(cat "$NEW_PATTERNS_FILE" | sed 's/\n/\\n/g' | head -c 4000)
    curl -sf -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
      -d "chat_id=${TELEGRAM_CHAT_ID}" \
      -d "text=🚨 New Error Patterns Detected:\\n\\n$MESSAGE" \
      -d "parse_mode=Markdown" \
      --max-time 10 || true
  fi
  
  # Add new patterns to known list
  echo "$NEW_PATTERNS" >> "$PATTERNS_FILE"
fi

echo "✅ Error pattern analysis complete"