#!/bin/bash

# Intelligent PM2 Automation Startup Script
# This script starts all the new intelligent automations with proper sequencing

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
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
LOGS_DIR="$PROJECT_ROOT/logs"
ECOSYSTEM_CONFIG="$PROJECT_ROOT/ecosystem.config.cjs"
MASTER_CONTROLLER="$PROJECT_ROOT/scripts/automation/master-automation-controller.cjs"

# Ensure logs directory exists
mkdir -p "$LOGS_DIR"

# Logging function
log() {
    local level=$1
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
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
    
    # Also write to log file
    echo "[$timestamp] [$level] $message" >> "$LOGS_DIR/intelligent-automations-startup.log"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        if [ $? -eq 0 ]; then
            log "SUCCESS" "PM2 installed successfully"
        else
            log "ERROR" "Failed to install PM2"
            exit 1
        fi
    else
        log "INFO" "PM2 is already installed"
    fi
}

# Check if required files exist
check_files() {
    local missing_files=()
    
    if [ ! -f "$ECOSYSTEM_CONFIG" ]; then
        missing_files+=("ecosystem.config.cjs")
    fi
    
    if [ ! -f "$MASTER_CONTROLLER" ]; then
        missing_files+=("master-automation-controller.cjs")
    fi
    
    if [ ${#missing_files[@]} -gt 0 ]; then
        log "ERROR" "Missing required files: ${missing_files[*]}"
        exit 1
    fi
    
    log "SUCCESS" "All required files found"
}

# Start core automations first
start_core_automations() {
    log "INFO" "Starting core automations..."
    
    # Start project health monitor first (critical dependency)
    log "INFO" "Starting project-health-monitor..."
    pm2 start "$ECOSYSTEM_CONFIG" --only project-health-monitor
    sleep 5
    
    # Start dependency monitor
    log "INFO" "Starting dependency-monitor..."
    pm2 start "$ECOSYSTEM_CONFIG" --only dependency-monitor
    sleep 3
    
    # Start build health monitor
    log "INFO" "Starting build-health-monitor..."
    pm2 start "$ECOSYSTEM_CONFIG" --only build-health-monitor
    sleep 3
    
    log "SUCCESS" "Core automations started"
}

# Start intelligent automations
start_intelligent_automations() {
    log "INFO" "Starting intelligent automations..."
    
    # Start AI code review automation
    log "INFO" "Starting AI code review automation..."
    pm2 start "$ECOSYSTEM_CONFIG" --only ai-code-review
    sleep 3
    
    # Start intelligent performance optimizer
    log "INFO" "Starting intelligent performance optimizer..."
    pm2 start "$ECOSYSTEM_CONFIG" --only intelligent-performance-optimizer
    sleep 3
    
    # Start smart dependency intelligence
    log "INFO" "Starting smart dependency intelligence..."
    pm2 start "$ECOSYSTEM_CONFIG" --only smart-dependency-intelligence
    sleep 3
    
    # Start enhanced security automation
    log "INFO" "Starting enhanced security automation..."
    pm2 start "$ECOSYSTEM_CONFIG" --only enhanced-security-automation
    sleep 3
    
    # Start enhanced testing automation
    log "INFO" "Starting enhanced testing automation..."
    pm2 start "$ECOSYSTEM_CONFIG" --only enhanced-testing-automation
    sleep 3
    
    # Start enhanced CI/CD automation
    log "INFO" "Starting enhanced CI/CD automation..."
    pm2 start "$ECOSYSTEM_CONFIG" --only enhanced-ci-cd-automation
    sleep 3
    
    log "SUCCESS" "Intelligent automations started"
}

# Start remaining automations
start_remaining_automations() {
    log "INFO" "Starting remaining automations..."
    
    # Start typescript syntax fixer
    log "INFO" "Starting typescript syntax fixer..."
    pm2 start "$ECOSYSTEM_CONFIG" --only typescript-syntax-fixer
    sleep 2
    
    # Start dependency manager
    log "INFO" "Starting dependency manager..."
    pm2 start "$ECOSYSTEM_CONFIG" --only dependency-manager
    sleep 2
    
    # Start project health dashboard
    log "INFO" "Starting project health dashboard..."
    pm2 start "$ECOSYSTEM_CONFIG" --only project-health-dashboard
    sleep 2
    
    # Start legacy automations
    log "INFO" "Starting legacy automations..."
    pm2 start "$ECOSYSTEM_CONFIG" --only code-quality-monitor
    pm2 start "$ECOSYSTEM_CONFIG" --only build-automation
    pm2 start "$ECOSYSTEM_CONFIG" --only file-integrity-monitor
    
    log "SUCCESS" "Remaining automations started"
}

# Start master automation controller
start_master_controller() {
    log "INFO" "Starting master automation controller..."
    
    # Start the master controller
    pm2 start "$MASTER_CONTROLLER" --name "master-automation-controller" \
        --max-memory-restart 1G \
        --cron-restart "*/10 * * * *" \
        --log "$LOGS_DIR/master-controller.log" \
        --error "$LOGS_DIR/master-controller-error.log" \
        --out "$LOGS_DIR/master-controller-out.log"
    
    if [ $? -eq 0 ]; then
        log "SUCCESS" "Master automation controller started"
    else
        log "ERROR" "Failed to start master automation controller"
        return 1
    fi
}

# Verify all automations are running
verify_automations() {
    log "INFO" "Verifying all automations are running..."
    
    local expected_automations=(
        "project-health-monitor"
        "dependency-monitor"
        "build-health-monitor"
        "ai-code-review"
        "intelligent-performance-optimizer"
        "smart-dependency-intelligence"
        "enhanced-security-automation"
        "enhanced-testing-automation"
        "enhanced-ci-cd-automation"
        "typescript-syntax-fixer"
        "dependency-manager"
        "project-health-dashboard"
        "code-quality-monitor"
        "build-automation"
        "file-integrity-monitor"
        "master-automation-controller"
    )
    
    local running_count=0
    local total_count=${#expected_automations[@]}
    
    for automation in "${expected_automations[@]}"; do
        if pm2 describe "$automation" &> /dev/null; then
            local status=$(pm2 describe "$automation" | grep "status" | awk '{print $4}')
            if [ "$status" = "online" ]; then
                log "SUCCESS" "$automation is running (online)"
                ((running_count++))
            else
                log "WARN" "$automation is not online (status: $status)"
            fi
        else
            log "WARN" "$automation is not found in PM2"
        fi
    done
    
    log "INFO" "Automation status: $running_count/$total_count running"
    
    if [ $running_count -eq $total_count ]; then
        log "SUCCESS" "All automations are running successfully!"
        return 0
    else
        log "WARN" "Some automations are not running properly"
        return 1
    fi
}

# Show automation status
show_status() {
    log "INFO" "Current PM2 status:"
    pm2 status
    
    log "INFO" "Automation logs directory: $LOGS_DIR"
    log "INFO" "Use 'pm2 logs' to view all automation logs"
    log "INFO" "Use 'pm2 monit' to monitor automations in real-time"
}

# Main startup sequence
main() {
    log "INFO" "🚀 Starting Intelligent PM2 Automation System..."
    log "INFO" "Project root: $PROJECT_ROOT"
    
    # Check prerequisites
    check_pm2
    check_files
    
    # Stop any existing PM2 processes
    log "INFO" "Stopping any existing PM2 processes..."
    pm2 delete all 2>/dev/null || true
    sleep 2
    
    # Start automations in sequence
    start_core_automations
    start_intelligent_automations
    start_remaining_automations
    start_master_controller
    
    # Wait for all processes to stabilize
    log "INFO" "Waiting for automations to stabilize..."
    sleep 10
    
    # Verify all automations are running
    verify_automations
    
    # Show final status
    show_status
    
    log "SUCCESS" "🎉 Intelligent PM2 Automation System started successfully!"
    log "INFO" "System will automatically monitor and optimize itself"
    log "INFO" "Check logs in $LOGS_DIR for detailed information"
}

# Handle script arguments
case "${1:-start}" in
    "start")
        main
        ;;
    "stop")
        log "INFO" "Stopping all PM2 automations..."
        pm2 delete all
        log "SUCCESS" "All automations stopped"
        ;;
    "restart")
        log "INFO" "Restarting all PM2 automations..."
        pm2 restart all
        log "SUCCESS" "All automations restarted"
        ;;
    "status")
        show_status
        ;;
    "logs")
        log "INFO" "Showing PM2 logs..."
        pm2 logs
        ;;
    "monit")
        log "INFO" "Starting PM2 monitoring..."
        pm2 monit
        ;;
    "verify")
        verify_automations
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs|monit|verify}"
        echo "  start   - Start all intelligent automations"
        echo "  stop    - Stop all automations"
        echo "  restart - Restart all automations"
        echo "  status  - Show automation status"
        echo "  logs    - Show PM2 logs"
        echo "  monit   - Start PM2 monitoring"
        echo "  verify  - Verify all automations are running"
        exit 1
        ;;
esac