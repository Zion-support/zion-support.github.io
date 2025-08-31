#!/bin/bash

# Intelligent Sync Automation Restart Script
# This script restarts the intelligent sync automation system

LOG_FILE="./logs/intelligent-sync-restart.log"

# Function to log messages
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Restarting Intelligent Sync Automation System..."

# Change to project directory
cd "$(dirname "$0")"

# Restart intelligent sync processes
log "Restarting intelligent sync processes..."
pm2 restart intelligent-sync-automation intelligent-sync-monitor intelligent-sync-backup

# Save PM2 configuration
pm2 save
log "PM2 configuration saved"

log "Intelligent Sync Automation System restarted successfully"
