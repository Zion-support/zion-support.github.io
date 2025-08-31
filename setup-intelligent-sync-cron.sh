#!/bin/bash

# Intelligent Sync Automation Cron Setup Script
# This script sets up cron jobs for the intelligent sync automation

LOG_FILE="./logs/intelligent-sync-cron-setup.log"

# Function to log messages
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Setting up cron jobs for Intelligent Sync Automation..."

# Change to project directory
cd "$(dirname "$0")"

# Get absolute path
PROJECT_PATH=$(pwd)

# Add cron job to start intelligent sync on system boot
(crontab -l 2>/dev/null; echo "@reboot cd ${PROJECT_PATH} && ./start-intelligent-sync.sh") | crontab -

# Add cron job to run health check every 10 minutes
(crontab -l 2>/dev/null; echo "*/10 * * * * cd ${PROJECT_PATH} && node intelligent-sync-automation.js health") | crontab -

# Add cron job to run backup every 4 hours
(crontab -l 2>/dev/null; echo "0 */4 * * * cd ${PROJECT_PATH} && node intelligent-sync-automation.js backup") | crontab -

# Add cron job to run full sync every 12 hours
(crontab -l 2>/dev/null; echo "0 */12 * * * cd ${PROJECT_PATH} && node intelligent-sync-automation.js sync") | crontab -

log "Cron jobs set up successfully"

# Display current cron jobs
echo ""
echo "📅 Current cron jobs:"
crontab -l | grep -E "(intelligent-sync|@reboot)"

log "Cron setup completed"
