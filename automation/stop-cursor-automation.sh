#!/bin/bash

# Cursor Chat Automation Stop Script
# This script stops the running Cursor automation system

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
PID_FILE="cursor-automation.pid"
LOG_FILE="cursor-automation.log"

echo -e "${BLUE}=== Cursor Chat Automation Stop Script ===${NC}"
echo "Script directory: $SCRIPT_DIR"
echo "PID file: $PID_FILE"
echo ""

# Function to log messages
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Function to log errors
log_error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

# Function to log warnings
log_warning() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}

# Check if automation is running
if [ ! -f "$PID_FILE" ]; then
    log_warning "No PID file found. Automation may not be running."
    exit 0
fi

PID=$(cat "$PID_FILE")

if ! ps -p "$PID" > /dev/null 2>&1; then
    log_warning "Process $PID not found. Removing stale PID file."
    rm -f "$PID_FILE"
    exit 0
fi

# Get process info
PROCESS_INFO=$(ps -p "$PID" -o pid,ppid,cmd --no-headers 2>/dev/null || echo "Process not found")

log "Found running automation process:"
echo "PID: $PID"
echo "Process Info: $PROCESS_INFO"
echo ""

# Ask for confirmation
read -p "Are you sure you want to stop the Cursor automation? (y/N): " -n 1 -r
echo

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    log "Operation cancelled by user"
    exit 0
fi

# Stop the process
log "Stopping automation process $PID..."

# Try graceful shutdown first
kill "$PID"

# Wait for graceful shutdown
log "Waiting for graceful shutdown..."
for i in {1..10}; do
    if ! ps -p "$PID" > /dev/null 2>&1; then
        log "Process stopped gracefully"
        break
    fi
    echo -n "."
    sleep 1
done
echo

# Force kill if still running
if ps -p "$PID" > /dev/null 2>&1; then
    log_warning "Process still running, force killing..."
    kill -9 "$PID"
    
    # Wait a bit more
    sleep 2
    
    if ps -p "$PID" > /dev/null 2>&1; then
        log_error "Failed to stop process $PID"
        exit 1
    else
        log "Process force killed successfully"
    fi
fi

# Clean up PID file
rm -f "$PID_FILE"
log "PID file removed"

# Show final status
log "Cursor Chat Automation stopped successfully"

# Show log file location if it exists
if [ -f "$LOG_FILE" ]; then
    log "Log file available at: $LOG_FILE"
    log "Use 'tail -f $LOG_FILE' to monitor logs"
fi

echo ""
log "All done!"
