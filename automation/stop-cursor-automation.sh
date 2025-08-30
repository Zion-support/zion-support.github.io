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

# Check if PID file exists
if [ ! -f "$PID_FILE" ]; then
    log_warning "PID file not found. Automation may not be running."
    exit 0
fi

# Read PID from file
PID=$(cat "$PID_FILE")

# Check if process is running
if ! ps -p "$PID" > /dev/null 2>&1; then
    log_warning "Process $PID is not running. Removing stale PID file."
    rm -f "$PID_FILE"
    exit 0
fi

log "Stopping Cursor Chat Automation (PID: $PID)..."

# Try graceful shutdown first
kill "$PID" 2>/dev/null || true

# Wait for graceful shutdown
sleep 3

# Check if process is still running
if ps -p "$PID" > /dev/null 2>&1; then
    log_warning "Process did not stop gracefully. Force killing..."
    kill -9 "$PID" 2>/dev/null || true
    sleep 1
fi

# Final check
if ps -p "$PID" > /dev/null 2>&1; then
    log_error "Failed to stop process $PID"
    exit 1
else
    log "Successfully stopped Cursor Chat Automation"
    
    # Remove PID file
    rm -f "$PID_FILE"
    
    # Show final status
    echo ""
    echo "Status: Stopped"
    echo "PID file: Removed"
    echo "Log file: $LOG_FILE"
    echo ""
    echo "To start again: ./launch-cursor-automation.sh"
fi
