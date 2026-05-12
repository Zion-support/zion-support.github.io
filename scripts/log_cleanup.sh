#!/usr/bin/env bash
# scripts/log_cleanup.sh – rotate and prune Hermes logs to keep disk usage low
# Keeps the most recent 7 days of logs, compresses older ones.

LOG_DIR="$HOME/.hermes/memory"
RETENTION_DAYS=7
NOW=$(date +%s)

mkdir -p "$LOG_DIR"

# Rotate: compress logs older than 1 day
find "$LOG_DIR" -type f -name "*.log" -mtime +1 -exec gzip -9 {} \; -exec echo "$(date '+%Y-%m-%d %H:%M:%S') Compressed {}" >> "$LOG_DIR/cleanup.log" \;

# Delete compressed logs older than retention period
find "$LOG_DIR" -type f -name "*.log.gz" -mtime +$RETENTION_DAYS -delete -exec echo "$(date '+%Y-%m-%d %H:%M:%S') Deleted {}" >> "$LOG_DIR/cleanup.log" \;

# Also truncate any huge uncompressed logs (over 5 MB)
find "$LOG_DIR" -type f -name "*.log" -size +5M -exec truncate -s 0 {} \; -exec echo "$(date '+%Y-%m-%d %H:%M:%S') Truncated {}" >> "$LOG_DIR/cleanup.log" \;

echo "$(date '+%Y-%m-%d %H:%M:%S') Log cleanup completed" >> "$LOG_DIR/cleanup.log"
