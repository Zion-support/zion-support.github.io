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

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    log_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if automation script exists
if [ ! -f "cursor-chat-automation.js" ]; then
    log_error "Automation script not found: cursor-chat-automation.js"
    exit 1
fi

# Check if already running
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        log_warning "Automation is already running with PID $PID"
        echo "To stop it, run: ./stop-cursor-automation.sh"
        exit 1
    else
        log_warning "Stale PID file found, removing..."
        rm -f "$PID_FILE"
    fi
fi

# Function to start automation
start_automation() {
    log "Starting Cursor Chat Automation..."
    
    # Start the automation in background
    nohup node cursor-chat-automation.js > "$LOG_FILE" 2>&1 &
    AUTOMATION_PID=$!
    
    # Save PID to file
    echo "$AUTOMATION_PID" > "$PID_FILE"
    
    # Wait a moment to check if it started successfully
    sleep 2
    
    if ps -p "$AUTOMATION_PID" > /dev/null 2>&1; then
        log "Automation started successfully with PID $AUTOMATION_PID"
        echo "Log file: $LOG_FILE"
        echo "PID file: $PID_FILE"
        echo "To stop: ./stop-cursor-automation.sh"
        echo "To view logs: tail -f $LOG_FILE"
    else
        log_error "Failed to start automation"
        rm -f "$PID_FILE"
        exit 1
    fi
}

# Function to restart automation
restart_automation() {
    local restart_count=$1
    
    if [ "$restart_count" -ge "$MAX_RESTARTS" ]; then
        log_error "Maximum restart attempts ($MAX_RESTARTS) reached. Giving up."
        exit 1
    fi
    
    log_warning "Restarting automation (attempt $((restart_count + 1))/$MAX_RESTARTS)..."
    
    # Stop if running
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            kill "$PID" 2>/dev/null || true
            sleep 2
        fi
        rm -f "$PID_FILE"
    fi
    
    # Wait before restart
    sleep "$RESTART_DELAY"
    
    # Start again
    start_automation
}

# Main execution
log "Launching Cursor Chat Automation System..."

# Start automation
start_automation

# Monitor and restart if needed
restart_count=0
while true; do
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ! ps -p "$PID" > /dev/null 2>&1; then
            log_warning "Automation process $PID is no longer running"
            restart_automation "$restart_count"
            restart_count=$((restart_count + 1))
        fi
    else
        log_warning "PID file not found, restarting automation"
        restart_automation "$restart_count"
        restart_count=$((restart_count + 1))
    fi
    
    # Check every 30 seconds
    sleep 30
done
