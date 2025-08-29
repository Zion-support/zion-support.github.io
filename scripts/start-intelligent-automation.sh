#!/bin/bash

# Enhanced Intelligent Automation Startup Script
# Manages all PM2 automation processes with intelligent sequencing

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT=$(pwd)
LOG_DIR="$PROJECT_ROOT/logs"
ECOSYSTEM_FILE="$PROJECT_ROOT/ecosystem.config.cjs"
PM2_LOG_FILE="$PROJECT_ROOT/logs/pm2-startup.log"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level=$1
    local message=$2
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        "INFO")
            echo -e "${GREEN}[INFO]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[ERROR]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${CYAN}[SUCCESS]${NC} $message"
            ;;
        *)
            echo -e "${BLUE}[$level]${NC} $message"
            ;;
    esac
    
    echo "[$timestamp] [$level] $message" >> "$PM2_LOG_FILE"
}

# Function to check if PM2 is installed
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

# Function to check system resources
check_system_resources() {
    log "INFO" "Checking system resources..."
    
    # Check available memory
    local available_mem=$(free -m | awk 'NR==2{printf "%.0f", $7*100/$2}')
    if [ $available_mem -lt 20 ]; then
        log "WARN" "Low memory available: ${available_mem}% - some automations may be limited"
    else
        log "INFO" "Memory available: ${available_mem}%"
    fi
    
    # Check disk space
    local disk_usage=$(df -h . | awk 'NR==2{print $5}' | sed 's/%//')
    if [ $disk_usage -gt 90 ]; then
        log "WARN" "Low disk space: ${disk_usage}% - consider cleanup"
    else
        log "INFO" "Disk space available: $((100 - disk_usage))%"
    fi
    
    # Check CPU load
    local cpu_load=$(uptime | awk -F'load average:' '{print $2}' | awk '{print $1}' | sed 's/,//')
    log "INFO" "Current CPU load: $cpu_load"
}

# Function to stop existing automations
stop_existing_automations() {
    log "INFO" "Stopping existing automation processes..."
    
    # Stop all PM2 processes
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    log "SUCCESS" "Existing automations stopped"
}

# Function to start core automations first
start_core_automations() {
    log "INFO" "Starting core automation processes..."
    
    local core_processes=(
        "project-health-monitor"
        "typescript-syntax-fixer"
        "dependency-manager"
    )
    
    for process in "${core_processes[@]}"; do
        log "INFO" "Starting $process..."
        pm2 start ecosystem.config.cjs --only "$process" 2>/dev/null || {
            log "WARN" "Failed to start $process - continuing with others"
        }
        sleep 2
    done
    
    log "SUCCESS" "Core automations started"
}

# Function to start intelligent automations
start_intelligent_automations() {
    log "INFO" "Starting intelligent automation processes..."
    
    local intelligent_processes=(
        "ai-code-review"
        "intelligent-build-optimizer"
        "smart-testing-automation"
    )
    
    for process in "${intelligent_processes[@]}"; do
        log "INFO" "Starting $process..."
        pm2 start ecosystem.config.cjs --only "$process" 2>/dev/null || {
            log "WARN" "Failed to start $process - continuing with others"
        }
        sleep 3
    done
    
    log "SUCCESS" "Intelligent automations started"
}

# Function to start master controller
start_master_controller() {
    log "INFO" "Starting master automation controller..."
    
    pm2 start ecosystem.config.cjs --only "master-automation-controller" 2>/dev/null || {
        log "ERROR" "Failed to start master automation controller"
        return 1
    }
    
    log "SUCCESS" "Master automation controller started"
}

# Function to start monitoring automations
start_monitoring_automations() {
    log "INFO" "Starting monitoring automation processes..."
    
    local monitoring_processes=(
        "build-health-monitor"
        "code-quality-monitor"
        "dependency-monitor"
        "build-automation"
        "file-integrity-monitor"
    )
    
    for process in "${monitoring_processes[@]}"; do
        log "INFO" "Starting $process..."
        pm2 start ecosystem.config.cjs --only "$process" 2>/dev/null || {
            log "WARN" "Failed to start $process - continuing with others"
        }
        sleep 2
    done
    
    log "SUCCESS" "Monitoring automations started"
}

# Function to verify all processes are running
verify_processes() {
    log "INFO" "Verifying all automation processes..."
    
    local expected_processes=(
        "project-health-monitor"
        "typescript-syntax-fixer"
        "dependency-manager"
        "ai-code-review"
        "intelligent-build-optimizer"
        "smart-testing-automation"
        "master-automation-controller"
        "build-health-monitor"
        "code-quality-monitor"
        "dependency-monitor"
        "build-automation"
        "file-integrity-monitor"
    )
    
    local running_count=0
    local total_count=${#expected_processes[@]}
    
    for process in "${expected_processes[@]}"; do
        if pm2 list | grep -q "$process"; then
            local status=$(pm2 list | grep "$process" | awk '{print $10}')
            if [ "$status" = "online" ]; then
                log "SUCCESS" "$process is running (online)"
                ((running_count++))
            else
                log "WARN" "$process is not online (status: $status)"
            fi
        else
            log "WARN" "$process is not found in PM2"
        fi
    done
    
    log "INFO" "Process verification complete: $running_count/$total_count processes running"
    
    if [ $running_count -eq $total_count ]; then
        log "SUCCESS" "All automation processes are running successfully!"
        return 0
    else
        log "WARN" "Some processes may not be running correctly"
        return 1
    fi
}

# Function to display automation dashboard
show_automation_dashboard() {
    log "INFO" "Displaying automation dashboard..."
    
    echo ""
    echo -e "${PURPLE}╔══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${PURPLE}║                    INTELLIGENT AUTOMATION DASHBOARD           ║${NC}"
    echo -e "${PURPLE}╚══════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    
    # Show PM2 status
    pm2 status
    
    echo ""
    echo -e "${CYAN}Automation Process Categories:${NC}"
    echo -e "${BLUE}• Core Automations:${NC} Project health, TypeScript fixes, Dependencies"
    echo -e "${BLUE}• Intelligent Automations:${NC} AI code review, Build optimization, Smart testing"
    echo -e "${BLUE}• Master Controller:${NC} Centralized orchestration and monitoring"
    echo -e "${BLUE}• Monitoring Automations:${NC} Build health, Code quality, File integrity"
    
    echo ""
    echo -e "${CYAN}Useful Commands:${NC}"
    echo -e "  pm2 logs <process-name>     - View specific process logs"
    echo -e "  pm2 restart <process-name>  - Restart specific process"
    echo -e "  pm2 monit                   - Open PM2 monitoring interface"
    echo -e "  pm2 logs --lines 50         - View recent logs from all processes"
    
    echo ""
    echo -e "${CYAN}Log Files:${NC}"
    echo -e "  Main startup log: $PM2_LOG_FILE"
    echo -e "  Process logs: $LOG_DIR/*.log"
    echo -e "  Health reports: $LOG_DIR/health-check-*.json"
    echo -e "  Optimization reports: $LOG_DIR/optimization-*.json"
}

# Function to perform health check
perform_health_check() {
    log "INFO" "Performing initial health check..."
    
    # Wait for processes to stabilize
    sleep 10
    
    # Check for any errored processes
    local errored_processes=$(pm2 list | grep "errored" | wc -l)
    if [ $errored_processes -gt 0 ]; then
        log "WARN" "Found $errored_processes errored processes"
        pm2 list | grep "errored"
    else
        log "SUCCESS" "No errored processes found"
    fi
    
    # Check memory usage
    local total_memory=$(pm2 list | grep -v "pm2-logrotate" | awk '{sum+=$11} END {print sum}')
    if [ ! -z "$total_memory" ] && [ $total_memory -gt 0 ]; then
        log "INFO" "Total memory usage: ${total_memory}MB"
    fi
}

# Function to start automation with proper sequencing
start_automation_with_sequencing() {
    log "INFO" "Starting intelligent automation system with proper sequencing..."
    
    # Phase 1: Core automations
    start_core_automations
    
    # Wait for core processes to stabilize
    log "INFO" "Waiting for core processes to stabilize..."
    sleep 10
    
    # Phase 2: Intelligent automations
    start_intelligent_automations
    
    # Wait for intelligent processes to initialize
    log "INFO" "Waiting for intelligent processes to initialize..."
    sleep 15
    
    # Phase 3: Master controller
    start_master_controller
    
    # Wait for master controller to start
    log "INFO" "Waiting for master controller to start..."
    sleep 10
    
    # Phase 4: Monitoring automations
    start_monitoring_automations
    
    # Final wait for all processes
    log "INFO" "Waiting for all processes to stabilize..."
    sleep 20
}

# Main execution function
main() {
    log "INFO" "🚀 Starting Enhanced Intelligent Automation System"
    log "INFO" "Project root: $PROJECT_ROOT"
    log "INFO" "Log directory: $LOG_DIR"
    
    # Check prerequisites
    check_pm2
    check_system_resources
    
    # Stop existing automations
    stop_existing_automations
    
    # Start automation system with proper sequencing
    start_automation_with_sequencing
    
    # Verify all processes
    verify_processes
    
    # Perform health check
    perform_health_check
    
    # Show dashboard
    show_automation_dashboard
    
    log "SUCCESS" "🎉 Intelligent Automation System started successfully!"
    log "INFO" "System is now running with enhanced automation capabilities"
    
    # Save startup summary
    local startup_summary="$LOG_DIR/startup-summary-$(date +%Y%m%d-%H%M%S).txt"
    {
        echo "Intelligent Automation Startup Summary"
        echo "====================================="
        echo "Timestamp: $(date)"
        echo "Project: $PROJECT_ROOT"
        echo "PM2 Version: $(pm2 --version)"
        echo ""
        echo "Processes Started:"
        pm2 list | grep -v "pm2-logrotate"
        echo ""
        echo "Log Files:"
        ls -la "$LOG_DIR"/*.log 2>/dev/null || echo "No log files found"
        echo ""
        echo "Next Steps:"
        echo "1. Monitor process health with: pm2 monit"
        echo "2. Check logs with: pm2 logs"
        echo "3. View automation dashboard with: node scripts/automation-dashboard.js"
    } > "$startup_summary"
    
    log "INFO" "Startup summary saved to: $startup_summary"
}

# Error handling
trap 'log "ERROR" "Script interrupted by user"; exit 1' INT
trap 'log "ERROR" "Script failed with error code $?" EXIT

# Check if script is run from project root
if [ ! -f "$ECOSYSTEM_FILE" ]; then
    log "ERROR" "ecosystem.config.cjs not found. Please run this script from the project root directory."
    exit 1
fi

# Run main function
main "$@"