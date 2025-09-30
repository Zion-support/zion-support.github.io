#!/bin/bash

# Zion Scheduled Error Capture Script
# This script runs via cron to capture errors at regular intervals

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_FILE="$PROJECT_ROOT/reports/scheduled-capture.log"
ERROR_LOG="$PROJECT_ROOT/reports/scheduled-capture-errors.log"
PID_FILE="$PROJECT_ROOT/reports/scheduled-capture.pid"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    local message="$1"
    local level="${2:-info}"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    local log_entry="[$timestamp] [$level] $message"
    
    echo -e "${log_entry}"
    echo "${log_entry}" >> "$LOG_FILE"
}

# Error logging function
log_error() {
    local message="$1"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] [ERROR] $message" >> "$ERROR_LOG"
    log "$message" "error"
}

# Check if already running
if [ -f "$PID_FILE" ]; then
    pid=$(cat "$PID_FILE")
    if ps -p "$pid" > /dev/null 2>&1; then
        log "Scheduled capture already running with PID $pid" "warn"
        exit 0
    else
        log "Removing stale PID file" "warn"
        rm -f "$PID_FILE"
    fi
fi

# Create PID file
echo $$ > "$PID_FILE"

# Function to cleanup on exit
cleanup() {
    log "Cleaning up scheduled capture..."
    rm -f "$PID_FILE"
    exit 0
}

# Set trap for cleanup
trap cleanup EXIT INT TERM

# Main execution
main() {
    log "🚀 Starting scheduled error capture..."
    
    # Change to automation directory
    cd "$SCRIPT_DIR"
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log_error "Node.js not found. Please install Node.js first."
        exit 1
    fi
    
    # Check if automation dependencies are installed
    if [ ! -f "package.json" ]; then
        log_error "Package.json not found in automation directory"
        exit 1
    fi
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        log "📦 Installing dependencies..."
        npm install --silent
    fi
    
    # Run error capture
    log "🔍 Running scheduled error capture..."
    if node console-error-capture.js --headless; then
        log "✅ Scheduled error capture completed successfully"
        
        # Check for new reports
        if [ -d "$PROJECT_ROOT/reports" ]; then
            latest_report=$(find "$PROJECT_ROOT/reports" -name "console-errors-*.json" -type f -printf '%T@ %p\n' | sort -n | tail -1 | cut -d' ' -f2-)
            if [ -n "$latest_report" ]; then
                log "📊 Latest report: $(basename "$latest_report")"
                
                # Check if there are errors
                error_count=$(jq '.errors | length' "$latest_report" 2>/dev/null || echo "0")
                if [ "$error_count" -gt 0 ]; then
                    log "🚨 Found $error_count errors in latest capture"
                    
                    # Generate summary for notification
                    summary_file="$PROJECT_ROOT/reports/scheduled-summary-$(date +%Y%m%d-%H%M%S).md"
                    {
                        echo "# Scheduled Error Capture Summary"
                        echo ""
                        echo "**Date**: $(date)"
                        echo "**Total Errors**: $error_count"
                        echo "**Report**: $(basename "$latest_report")"
                        echo ""
                        echo "## Quick Actions"
                        echo "1. Review the full report: $latest_report"
                        echo "2. Check console-errors.json for detailed error data"
                        echo "3. Use cursor-chat-errors.md for Cursor chat analysis"
                        echo ""
                        echo "## Next Steps"
                        echo "- Analyze error patterns"
                        echo "- Implement fixes"
                        echo "- Monitor for improvements"
                    } > "$summary_file"
                    
                    log "📝 Summary generated: $(basename "$summary_file")"
                else
                    log "🎉 No errors found in latest capture"
                fi
            fi
        fi
    else
        log_error "Scheduled error capture failed"
        exit 1
    fi
    
    log "✅ Scheduled error capture completed"
}

# Run main function
main "$@"
