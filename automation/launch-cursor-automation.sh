#!/bin/bash

# Cursor Chat Automation Launcher
# This script launches the Cursor automation system with proper error handling

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Configuration
LOG_FILE="cursor-automation.log"
PID_FILE="cursor-automation.pid"
MAX_RESTARTS=5
RESTART_DELAY=10

echo -e "${BLUE}=== Cursor Chat Automation Launcher ===${NC}"
echo "Script directory: $SCRIPT_DIR"
echo "Log file: $LOG_FILE"
echo "PID file: $PID_FILE"
echo ""

# Function to log messages
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

# Function to log errors
log_error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$LOG_FILE"
}

# Function to log warnings
log_warning() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1" | tee -a "$LOG_FILE"
}

# Check if automation is already running
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        log_warning "Automation already running with PID $PID"
        echo "Use './stop-cursor-automation.sh' to stop it first"
        exit 1
    else
        log "Removing stale PID file"
        rm -f "$PID_FILE"
    fi
fi

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    log_error "Node.js is not installed or not in PATH"
    exit 1
fi

# Check if automation files exist
if [ ! -f "cursor-interface-automation.js" ]; then
    log_error "cursor-interface-automation.js not found"
    exit 1
fi

if [ ! -f "cursor-automation-config.json" ]; then
    log_warning "cursor-automation-config.json not found, using defaults"
fi

# Function to start automation
start_automation() {
    log "Starting Cursor Chat Automation..."
    
    # Start the automation in background
    nohup node cursor-interface-automation.js > "$LOG_FILE" 2>&1 &
    
    # Save PID
    echo $! > "$PID_FILE"
    
    # Wait a moment to check if it started successfully
    sleep 2
    
    if [ -f "$PID_FILE" ] && ps -p "$(cat "$PID_FILE")" > /dev/null 2>&1; then
        log "Automation started successfully with PID $(cat "$PID_FILE")"
        return 0
    else
        log_error "Failed to start automation"
        return 1
    fi
}

# Function to stop automation
stop_automation() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            log "Stopping automation with PID $PID"
            kill "$PID"
            
            # Wait for graceful shutdown
            for i in {1..10}; do
                if ! ps -p "$PID" > /dev/null 2>&1; then
                    break
                fi
                sleep 1
            done
            
            # Force kill if still running
            if ps -p "$PID" > /dev/null 2>&1; then
                log_warning "Force killing automation process"
                kill -9 "$PID"
            fi
            
            rm -f "$PID_FILE"
            log "Automation stopped"
        else
            log_warning "Process $PID not found, removing PID file"
            rm -f "$PID_FILE"
        fi
    fi
}

# Function to check automation health
check_health() {
    if [ ! -f "$PID_FILE" ]; then
        return 1
    fi
    
    PID=$(cat "$PID_FILE")
    if ! ps -p "$PID" > /dev/null 2>&1; then
        return 1
    fi
    
    # Check if log file is being updated (simple health check)
    if [ -f "$LOG_FILE" ]; then
        local last_modified=$(stat -c %Y "$LOG_FILE" 2>/dev/null || stat -f %m "$LOG_FILE" 2>/dev/null)
        local current_time=$(date +%s)
        local time_diff=$((current_time - last_modified))
        
        # If log hasn't been updated in 5 minutes, consider it unhealthy
        if [ $time_diff -gt 300 ]; then
            return 1
        fi
    fi
    
    return 0
}

# Function to restart automation
restart_automation() {
    log_warning "Restarting automation..."
    stop_automation
    sleep 2
    start_automation
}

# Main execution
main() {
    local restart_count=0
    
    # Start automation initially
    if ! start_automation; then
        log_error "Failed to start automation initially"
        exit 1
    fi
    
    log "Automation is now running. Monitoring for health..."
    log "Press Ctrl+C to stop"
    
    # Main monitoring loop
    while true; do
        sleep 30  # Check every 30 seconds
        
        if ! check_health; then
            log_warning "Automation appears unhealthy"
            
            if [ $restart_count -lt $MAX_RESTARTS ]; then
                restart_count=$((restart_count + 1))
                log "Attempting restart $restart_count/$MAX_RESTARTS"
                restart_automation
                sleep $RESTART_DELAY
            else
                log_error "Maximum restart attempts reached. Stopping automation."
                stop_automation
                exit 1
            fi
        else
            # Reset restart count on healthy state
            if [ $restart_count -gt 0 ]; then
                log "Automation is healthy again, resetting restart count"
                restart_count=0
            fi
        fi
    done
}

# Trap signals for graceful shutdown
trap 'log "Received shutdown signal, stopping automation..."; stop_automation; exit 0' SIGINT SIGTERM

# Run main function
main "$@"
