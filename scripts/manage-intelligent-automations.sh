#!/bin/bash

# Intelligent PM2 Automation Management Script
# This script provides easy management of all PM2 automation processes

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
ECOSYSTEM_FILE="ecosystem.config.cjs"
ORCHESTRATOR_SCRIPT="./scripts/automation/intelligent-automation-orchestrator.cjs"
LOG_DIR="./logs"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Please install it first:"
        echo "npm install -g pm2"
        exit 1
    fi
}

# Function to check if ecosystem file exists
check_ecosystem() {
    if [ ! -f "$ECOSYSTEM_FILE" ]; then
        print_error "Ecosystem file not found: $ECOSYSTEM_FILE"
        exit 1
    fi
}

# Function to create logs directory
create_logs_dir() {
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        print_status "Created logs directory: $LOG_DIR"
    fi
}

# Function to start all automations
start_all() {
    print_header "Starting All Intelligent PM2 Automations"
    
    check_pm2
    check_ecosystem
    create_logs_dir
    
    print_status "Starting PM2 ecosystem..."
    pm2 start "$ECOSYSTEM_FILE"
    
    print_status "Starting Intelligent Orchestrator..."
    pm2 start "$ORCHESTRATOR_SCRIPT" --name "intelligent-orchestrator"
    
    print_status "All automations started successfully!"
    pm2 list
}

# Function to stop all automations
stop_all() {
    print_header "Stopping All Intelligent PM2 Automations"
    
    check_pm2
    
    print_status "Stopping all PM2 processes..."
    pm2 stop all
    pm2 delete all
    
    print_status "All automations stopped successfully!"
}

# Function to restart all automations
restart_all() {
    print_header "Restarting All Intelligent PM2 Automations"
    
    check_pm2
    check_ecosystem
    
    print_status "Restarting PM2 ecosystem..."
    pm2 restart all
    
    print_status "All automations restarted successfully!"
    pm2 list
}

# Function to show status of all automations
status() {
    print_header "Intelligent PM2 Automation Status"
    
    check_pm2
    
    echo -e "\n${CYAN}PM2 Process List:${NC}"
    pm2 list
    
    echo -e "\n${CYAN}PM2 Logs (last 50 lines):${NC}"
    pm2 logs --lines 50
    
    echo -e "\n${CYAN}Recent Reports:${NC}"
    ls -la *.json 2>/dev/null | grep -E "(report|analysis)" | head -10 || echo "No reports found"
}

# Function to show detailed status
detailed_status() {
    print_header "Detailed Automation Status"
    
    check_pm2
    
    echo -e "\n${CYAN}PM2 Process Details:${NC}"
    pm2 jlist | jq -r '.[] | "\(.name): \(.pm2_env.status) - \(.pm2_env.pm_uptime)ms uptime"' 2>/dev/null || pm2 list
    
    echo -e "\n${CYAN}Memory Usage:${NC}"
    pm2 monit --no-daemon &
    sleep 3
    pkill -f "pm2 monit" || true
    
    echo -e "\n${CYAN}Recent Logs:${NC}"
    pm2 logs --lines 100 --nostream
}

# Function to monitor automations in real-time
monitor() {
    print_header "Real-time Automation Monitoring"
    
    check_pm2
    
    print_status "Starting real-time monitoring (Press Ctrl+C to stop)..."
    pm2 monit
}

# Function to show logs
logs() {
    local lines=${1:-100}
    
    print_header "Automation Logs (Last $lines lines)"
    
    check_pm2
    
    pm2 logs --lines "$lines"
}

# Function to show specific automation logs
logs_specific() {
    local name=$1
    local lines=${2:-100}
    
    if [ -z "$name" ]; then
        print_error "Please specify automation name"
        echo "Usage: $0 logs-specific <automation-name> [lines]"
        exit 1
    fi
    
    print_header "Logs for $name (Last $lines lines)"
    
    check_pm2
    
    pm2 logs "$name" --lines "$lines"
}

# Function to restart specific automation
restart_specific() {
    local name=$1
    
    if [ -z "$name" ]; then
        print_error "Please specify automation name"
        echo "Usage: $0 restart <automation-name>"
        exit 1
    fi
    
    print_header "Restarting $name"
    
    check_pm2
    
    pm2 restart "$name"
    print_status "$name restarted successfully!"
}

# Function to stop specific automation
stop_specific() {
    local name=$1
    
    if [ -z "$name" ]; then
        print_error "Please specify automation name"
        echo "Usage: $0 stop <automation-name>"
        exit 1
    fi
    
    print_header "Stopping $name"
    
    check_pm2
    
    pm2 stop "$name"
    print_status "$name stopped successfully!"
}

# Function to start specific automation
start_specific() {
    local name=$1
    
    if [ -z "$name" ]; then
        print_error "Please specify automation name"
        echo "Usage: $0 start <automation-name>"
        exit 1
    fi
    
    print_header "Starting $name"
    
    check_pm2
    check_ecosystem
    
    pm2 start "$ECOSYSTEM_FILE" --only "$name"
    print_status "$name started successfully!"
}

# Function to show automation reports
reports() {
    print_header "Automation Reports"
    
    echo -e "\n${CYAN}Available Reports:${NC}"
    
    # Find all report files
    local reports=($(find . -maxdepth 1 -name "*.json" -type f | grep -E "(report|analysis)" | sort))
    
    if [ ${#reports[@]} -eq 0 ]; then
        echo "No reports found"
        return
    fi
    
    for report in "${reports[@]}"; do
        local filename=$(basename "$report")
        local size=$(du -h "$report" | cut -f1)
        local modified=$(stat -c %y "$report" | cut -d' ' -f1,2)
        
        echo -e "${GREEN}$filename${NC} - Size: $size - Modified: $modified"
    done
    
    echo -e "\n${CYAN}Report Directories:${NC}"
    local report_dirs=($(find . -maxdepth 2 -type d -name "*report*" | sort))
    
    for dir in "${report_dirs[@]}"; do
        if [ "$dir" != "." ] && [ "$dir" != "./.." ]; then
            local count=$(find "$dir" -name "*.json" | wc -l)
            echo -e "${BLUE}$dir${NC} - $count files"
        fi
    done
}

# Function to show automation health
health() {
    print_header "Automation Health Check"
    
    check_pm2
    
    echo -e "\n${CYAN}Process Health:${NC}"
    pm2 jlist | jq -r '.[] | "\(.name): \(.pm2_env.status) - Restarts: \(.pm2_env.restart_time) - Memory: \(.monit.memory)MB"' 2>/dev/null || pm2 list
    
    echo -e "\n${CYAN}Health Scores:${NC}"
    if [ -f "intelligent-orchestration-report.json" ]; then
        jq -r '.systemStatus[] | "\(.name): \(.healthScore)/100 - \(.status)"' intelligent-orchestration-report.json 2>/dev/null || echo "Could not parse health report"
    else
        echo "No health report available"
    fi
    
    echo -e "\n${CYAN}Recent Errors:${NC}"
    pm2 logs --lines 200 --nostream | grep -i "error\|failed\|exception" | tail -10 || echo "No recent errors found"
}

# Function to clean up old reports
cleanup() {
    print_header "Cleaning Up Old Reports"
    
    local days=${1:-7}
    
    print_status "Removing reports older than $days days..."
    
    # Find and remove old report files
    find . -maxdepth 1 -name "*.json" -type f -mtime +$days -delete 2>/dev/null || true
    
    # Find and remove old report directories
    find . -maxdepth 2 -type d -name "*report*" -exec find {} -name "*.json" -type f -mtime +$days -delete \; 2>/dev/null || true
    
    print_status "Cleanup completed!"
}

# Function to show help
show_help() {
    print_header "Intelligent PM2 Automation Management"
    
    echo "Usage: $0 <command> [options]"
    echo ""
    echo "Commands:"
    echo "  start              Start all automations"
    echo "  stop               Stop all automations"
    echo "  restart            Restart all automations"
    echo "  status             Show status of all automations"
    echo "  detailed-status    Show detailed status information"
    echo "  monitor            Monitor automations in real-time"
    echo "  logs [lines]       Show logs (default: 100 lines)"
    echo "  logs-specific <name> [lines]  Show logs for specific automation"
    echo "  restart <name>     Restart specific automation"
    echo "  stop <name>        Stop specific automation"
    echo "  start <name>       Start specific automation"
    echo "  reports            Show available automation reports"
    echo "  health             Show automation health status"
    echo "  cleanup [days]     Clean up old reports (default: 7 days)"
    echo "  help               Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 logs 200"
    echo "  $0 restart console-error-fixer"
    echo "  $0 cleanup 14"
}

# Main script logic
main() {
    local command=$1
    local arg1=$2
    local arg2=$3
    
    case $command in
        "start")
            if [ -n "$arg1" ]; then
                start_specific "$arg1"
            else
                start_all
            fi
            ;;
        "stop")
            if [ -n "$arg1" ]; then
                stop_specific "$arg1"
            else
                stop_all
            fi
            ;;
        "restart")
            if [ -n "$arg1" ]; then
                restart_specific "$arg1"
            else
                restart_all
            fi
            ;;
        "status")
            status
            ;;
        "detailed-status")
            detailed_status
            ;;
        "monitor")
            monitor
            ;;
        "logs")
            logs "$arg1"
            ;;
        "logs-specific")
            logs_specific "$arg1" "$arg2"
            ;;
        "restart")
            restart_specific "$arg1"
            ;;
        "stop")
            stop_specific "$arg1"
            ;;
        "start")
            start_specific "$arg1"
            ;;
        "reports")
            reports
            ;;
        "health")
            health
            ;;
        "cleanup")
            cleanup "$arg1"
            ;;
        "help"|"-h"|"--help"|"")
            show_help
            ;;
        *)
            print_error "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"