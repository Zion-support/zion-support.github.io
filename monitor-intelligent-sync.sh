#!/bin/bash

# Intelligent Sync Automation Monitoring Dashboard
# This script provides a real-time monitoring dashboard

LOG_FILE="./logs/intelligent-sync-monitor.log"

# Function to log messages
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

# Function to clear screen
clear_screen() {
    clear
    echo "🔄 Intelligent Sync Automation - Live Monitoring Dashboard"
    echo "=========================================================="
    echo "Press Ctrl+C to exit"
    echo ""
}

# Function to update dashboard
update_dashboard() {
    clear_screen
    
    # PM2 Status
    echo "📊 PM2 Process Status:"
    echo "----------------------"
    pm2 list | grep -E "(intelligent-sync|Name|Status|online|errored|stopped)" | head -10
    
    # Git Status
    echo ""
    echo "🔧 Git Repository Status:"
    echo "-------------------------"
    git status --porcelain | head -5
    
    # Recent Logs
    echo ""
    echo "📝 Recent Activity (last 5 lines):"
    echo "-----------------------------------"
    if [ -f "logs/intelligent-sync.log" ]; then
        tail -5 logs/intelligent-sync.log
    else
        echo "No log file found"
    fi
    
    # System Resources
    echo ""
    echo "💾 System Resources:"
    echo "-------------------"
    echo "Memory: $(free -h | grep Mem | awk '{print $3"/"$2}')"
    echo "Disk: $(df -h . | tail -1 | awk '{print $3"/"$2" ("$5")"}')"
    
    # Last Update
    echo ""
    echo "🕐 Last Update: $(date '+%Y-%m-%d %H:%M:%S')"
    echo "Refresh every 5 seconds..."
}

log "Starting monitoring dashboard..."

# Change to project directory
cd "$(dirname "$0")"

# Main monitoring loop
while true; do
    update_dashboard
    sleep 5
done
