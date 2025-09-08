#!/bin/bash

# PM2 Automation Cron Script
# This script runs PM2 automation tasks on schedule

WORKSPACE="/workspace"
LOG_FILE="$WORKSPACE/pm2-cron.log"
SCRIPT_PATH="$WORKSPACE/scripts/pm2-automation.js"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Change to workspace directory
cd "$WORKSPACE" || {
    log "ERROR: Failed to change to workspace directory"
    exit 1
}

# Check if PM2 is running
if ! command -v pm2 &> /dev/null; then
    log "ERROR: PM2 is not installed or not in PATH"
    exit 1
fi

# Check if automation script exists
if [ ! -f "$SCRIPT_PATH" ]; then
    log "ERROR: PM2 automation script not found at $SCRIPT_PATH"
    exit 1
fi

# Function to run automation task
run_task() {
    local task=$1
    log "Starting PM2 automation task: $task"
    
    if node "$SCRIPT_PATH" "$task"; then
        log "✅ Task $task completed successfully"
    else
        log "❌ Task $task failed"
        return 1
    fi
}

# Main execution
log "=== PM2 Automation Cron Started ==="

# Run dependency updates (every Monday at 2 AM)
if [ "$(date '+%u')" = "1" ]; then
    run_task "deps"
fi

# Run security checks (every Monday at 2 AM)
if [ "$(date '+%u')" = "1" ]; then
    run_task "security"
fi

# Run CI checks (daily at 6 AM)
if [ "$(date '+%H')" = "06" ]; then
    run_task "ci"
fi

# Run deployment checks (daily at 8 AM)
if [ "$(date '+%H')" = "08" ]; then
    run_task "deploy"
fi

log "=== PM2 Automation Cron Completed ==="