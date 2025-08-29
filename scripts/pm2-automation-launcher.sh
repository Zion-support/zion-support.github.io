#!/bin/bash

# PM2 Intelligent Automation Launcher
# This script provides comprehensive management of PM2 automation processes

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
ECOSYSTEM_CONFIG="$PROJECT_ROOT/ecosystem.config.js"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
LOGS_DIR="$PROJECT_ROOT/logs"
PM2_MANAGER="$SCRIPT_DIR/pm2-intelligent-manager.js"

# Ensure required directories exist
mkdir -p "$LOGS_DIR"
mkdir -p "$AUTOMATION_DIR/logs"

# Logging function
log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case "$level" in
        "INFO")
            echo -e "${GREEN}[$timestamp] [INFO]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${CYAN}[$timestamp] [SUCCESS]${NC} $message"
            ;;
        *)
            echo -e "${BLUE}[$timestamp] [$level]${NC} $message"
            ;;
    esac
    
    # Also log to file
    echo "[$timestamp] [$level] $message" >> "$LOGS_DIR/pm2-launcher.log"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first:"
        log "INFO" "npm install -g pm2"
        exit 1
    fi
    
    local pm2_version=$(pm2 --version)
    log "SUCCESS" "PM2 detected: $pm2_version"
}

# Check if ecosystem config exists
check_ecosystem_config() {
    if [[ ! -f "$ECOSYSTEM_CONFIG" ]]; then
        log "ERROR" "Ecosystem configuration not found: $ECOSYSTEM_CONFIG"
        exit 1
    fi
    
    log "SUCCESS" "Ecosystem configuration found: $ECOSYSTEM_CONFIG"
}

# Check if Node.js manager exists
check_node_manager() {
    if [[ ! -f "$PM2_MANAGER" ]]; then
        log "ERROR" "PM2 intelligent manager not found: $PM2_MANAGER"
        exit 1
    fi
    
    log "SUCCESS" "PM2 intelligent manager found: $PM2_MANAGER"
}

# Start all automation processes
start_all() {
    log "INFO" "🚀 Starting all PM2 automation processes..."
    
    # Start with PM2 ecosystem
    if pm2 start "$ECOSYSTEM_CONFIG"; then
        log "SUCCESS" "All processes started via PM2 ecosystem"
    else
        log "ERROR" "Failed to start processes via PM2 ecosystem"
        return 1
    fi
    
    # Wait a moment for processes to stabilize
    sleep 3
    
    # Show status
    pm2 status
    
    log "SUCCESS" "🎉 All automation processes started successfully!"
}

# Stop all automation processes
stop_all() {
    log "INFO" "🛑 Stopping all PM2 automation processes..."
    
    if pm2 stop all; then
        log "SUCCESS" "All processes stopped"
    else
        log "ERROR" "Failed to stop processes"
        return 1
    fi
}

# Restart all automation processes
restart_all() {
    log "INFO" "🔄 Restarting all PM2 automation processes..."
    
    if pm2 restart all; then
        log "SUCCESS" "All processes restarted"
    else
        log "ERROR" "Failed to restart processes"
        return 1
    fi
}

# Reload all automation processes (zero-downtime)
reload_all() {
    log "INFO" "🔄 Reloading all PM2 automation processes (zero-downtime)..."
    
    if pm2 reload all; then
        log "SUCCESS" "All processes reloaded"
    else
        log "ERROR" "Failed to reload processes"
        return 1
    fi
}

# Delete all automation processes
delete_all() {
    log "INFO" "🗑️ Deleting all PM2 automation processes..."
    
    if pm2 delete all; then
        log "SUCCESS" "All processes deleted"
    else
        log "ERROR" "Failed to delete processes"
        return 1
    fi
}

# Show PM2 status
show_status() {
    log "INFO" "📊 Showing PM2 process status..."
    pm2 status
}

# Show logs for all processes
show_logs() {
    local lines="${1:-100}"
    log "INFO" "📋 Showing logs for all processes (last $lines lines)..."
    pm2 logs --lines "$lines"
}

# Show logs for specific process
show_process_logs() {
    local process_name="$1"
    local lines="${2:-100}"
    
    if [[ -z "$process_name" ]]; then
        log "ERROR" "Please specify a process name"
        log "INFO" "Usage: $0 logs <process-name> [lines]"
        exit 1
    fi
    
    log "INFO" "📋 Showing logs for $process_name (last $lines lines)..."
    pm2 logs "$process_name" --lines "$lines"
}

# Start PM2 monitoring
start_monitoring() {
    log "INFO" "👀 Starting PM2 monitoring interface..."
    pm2 monit
}

# Perform health check
health_check() {
    log "INFO" "🏥 Performing PM2 health check..."
    
    if [[ -f "$PM2_MANAGER" ]]; then
        node "$PM2_MANAGER" health
    else
        log "WARN" "PM2 manager not available, using basic health check"
        pm2 ping
        pm2 status
    fi
}

# Generate report
generate_report() {
    log "INFO" "📊 Generating PM2 automation report..."
    
    if [[ -f "$PM2_MANAGER" ]]; then
        node "$PM2_MANAGER" report
    else
        log "WARN" "PM2 manager not available, generating basic report"
        
        local report_file="$LOGS_DIR/pm2-basic-report.json"
        local timestamp=$(date -Iseconds)
        
        cat > "$report_file" << EOF
{
  "timestamp": "$timestamp",
  "pm2_status": "$(pm2 status --json 2>/dev/null || echo '{}')",
  "ecosystem_config": "$ECOSYSTEM_CONFIG",
  "automation_directory": "$AUTOMATION_DIR"
}
EOF
        
        log "SUCCESS" "Basic report generated: $report_file"
    fi
}

# Auto-fix issues
auto_fix() {
    log "INFO" "🔧 Attempting to auto-fix PM2 issues..."
    
    if [[ -f "$PM2_MANAGER" ]]; then
        node "$PM2_MANAGER" autofix
    else
        log "WARN" "PM2 manager not available, performing basic fixes"
        
        # Restart stopped processes
        pm2 restart all
        
        # Clear logs if they're too large
        pm2 flush
        
        log "SUCCESS" "Basic auto-fix completed"
    fi
}

# Clean up old logs
cleanup_logs() {
    log "INFO" "🧹 Cleaning up old logs..."
    
    if [[ -f "$PM2_MANAGER" ]]; then
        node "$PM2_MANAGER" cleanup
    else
        log "WARN" "PM2 manager not available, performing basic cleanup"
        
        # Flush PM2 logs
        pm2 flush
        
        # Remove old log files (older than 7 days)
        find "$LOGS_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null || true
        find "$AUTOMATION_DIR/logs" -name "*.log" -mtime +7 -delete 2>/dev/null || true
        
        log "SUCCESS" "Basic cleanup completed"
    fi
}

# Start intelligent orchestrator
start_orchestrator() {
    log "INFO" "🎼 Starting PM2 intelligent orchestrator..."
    
    local orchestrator_script="$AUTOMATION_DIR/pm2-intelligent-orchestrator.cjs"
    
    if [[ -f "$orchestrator_script" ]]; then
        cd "$AUTOMATION_DIR"
        node pm2-intelligent-orchestrator.cjs monitor &
        local orchestrator_pid=$!
        echo "$orchestrator_pid" > "$LOGS_DIR/orchestrator.pid"
        log "SUCCESS" "Intelligent orchestrator started with PID: $orchestrator_pid"
    else
        log "ERROR" "Intelligent orchestrator script not found: $orchestrator_script"
        return 1
    fi
}

# Stop intelligent orchestrator
stop_orchestrator() {
    log "INFO" "🛑 Stopping PM2 intelligent orchestrator..."
    
    local pid_file="$LOGS_DIR/orchestrator.pid"
    
    if [[ -f "$pid_file" ]]; then
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            rm "$pid_file"
            log "SUCCESS" "Intelligent orchestrator stopped"
        else
            log "WARN" "Intelligent orchestrator process not running"
            rm "$pid_file"
        fi
    else
        log "WARN" "No orchestrator PID file found"
    fi
}

# Show help
show_help() {
    cat << EOF

🤖 PM2 Intelligent Automation Launcher
=====================================

📱 Process Management:
  start                    - Start all PM2 automation processes
  stop                     - Stop all PM2 automation processes
  restart                  - Restart all PM2 automation processes
  reload                   - Reload all processes (zero-downtime)
  delete                   - Delete all PM2 processes

📊 Monitoring & Information:
  status                   - Show PM2 process status
  logs [lines]             - Show logs for all processes
  logs <process> [lines]   - Show logs for specific process
  monitor                  - Start PM2 monitoring interface
  health                   - Perform health check
  report                   - Generate detailed report

🎼 Intelligent Orchestration:
  start-orchestrator       - Start intelligent automation orchestrator
  stop-orchestrator        - Stop intelligent automation orchestrator

🔧 Maintenance:
  autofix                  - Automatically fix common issues
  cleanup                  - Clean up old logs

💡 Examples:
  $0 start
  $0 logs zion-app 50
  $0 health
  $0 autofix
  $0 start-orchestrator

EOF
}

# Main function
main() {
    local command="$1"
    shift
    
    # Check prerequisites
    check_pm2
    check_ecosystem_config
    check_node_manager
    
    case "$command" in
        "start")
            start_all
            ;;
        "stop")
            stop_all
            ;;
        "restart")
            restart_all
            ;;
        "reload")
            reload_all
            ;;
        "delete")
            delete_all
            ;;
        "status")
            show_status
            ;;
        "logs")
            if [[ -n "$1" && "$1" =~ ^[0-9]+$ ]]; then
                show_logs "$1"
            elif [[ -n "$1" ]]; then
                show_process_logs "$1" "$2"
            else
                show_logs
            fi
            ;;
        "monitor")
            start_monitoring
            ;;
        "health")
            health_check
            ;;
        "report")
            generate_report
            ;;
        "autofix")
            auto_fix
            ;;
        "cleanup")
            cleanup_logs
            ;;
        "start-orchestrator")
            start_orchestrator
            ;;
        "stop-orchestrator")
            stop_orchestrator
            ;;
        "help"|"--help"|"-h"|"")
            show_help
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Trap signals for graceful shutdown
trap 'log "INFO" "Received interrupt signal, shutting down..."; exit 0' INT TERM

# Run main function with all arguments
main "$@"