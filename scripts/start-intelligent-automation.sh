#!/bin/bash

# Zion Tech Group - Intelligent PM2 Automation Startup Script
# Deploys and manages all intelligent automation processes

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
ECOSYSTEM_FILE="$PROJECT_ROOT/ecosystem.config.cjs"

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

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
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
check_ecosystem_file() {
    if [ ! -f "$ECOSYSTEM_FILE" ]; then
        print_error "Ecosystem configuration file not found: $ECOSYSTEM_FILE"
        exit 1
    fi
}

# Function to check if automation scripts exist
check_automation_scripts() {
    local scripts=(
        "scripts/automation/intelligent-predictive-monitor.cjs"
        "scripts/automation/ai-code-optimizer.cjs"
        "scripts/automation/smart-dependency-manager.cjs"
        "scripts/automation/intelligent-automation-orchestrator.cjs"
    )
    
    for script in "${scripts[@]}"; do
        if [ ! -f "$PROJECT_ROOT/$script" ]; then
            print_warning "Automation script not found: $script"
        else
            print_status "Found automation script: $script"
        fi
    done
}

# Function to start all intelligent automations
start_intelligent_automation() {
    print_header "Starting Intelligent PM2 Automation System"
    
    check_pm2
    check_ecosystem_file
    check_automation_scripts
    
    print_status "Deploying all automation processes..."
    
    # Kill existing PM2 processes
    print_status "Stopping existing PM2 processes..."
    pm2 kill 2>/dev/null || true
    
    # Start all processes from ecosystem file
    print_status "Starting all processes from ecosystem configuration..."
    pm2 start "$ECOSYSTEM_FILE"
    
    # Save PM2 configuration
    print_status "Saving PM2 configuration..."
    pm2 save
    
    # Setup PM2 startup script
    print_status "Setting up PM2 startup script..."
    pm2 startup
    
    print_success "Intelligent automation system started successfully!"
    
    # Show status
    show_status
}

# Function to stop all automations
stop_automation() {
    print_header "Stopping Intelligent PM2 Automation System"
    
    print_status "Stopping all PM2 processes..."
    pm2 stop all
    
    print_success "All automation processes stopped!"
}

# Function to restart all automations
restart_automation() {
    print_header "Restarting Intelligent PM2 Automation System"
    
    print_status "Restarting all PM2 processes..."
    pm2 restart all
    
    print_success "All automation processes restarted!"
}

# Function to show status
show_status() {
    print_header "Intelligent Automation System Status"
    
    echo -e "${CYAN}PM2 Process List:${NC}"
    pm2 list
    
    echo -e "\n${CYAN}PM2 Logs (last 20 lines):${NC}"
    pm2 logs --lines 20
}

# Function to show detailed status
show_detailed_status() {
    print_header "Detailed Intelligent Automation Status"
    
    echo -e "${CYAN}Process Details:${NC}"
    pm2 show
    
    echo -e "\n${CYAN}Memory Usage:${NC}"
    pm2 monit
    
    echo -e "\n${CYAN}Recent Logs:${NC}"
    pm2 logs --lines 50
}

# Function to monitor processes
monitor_processes() {
    print_header "Monitoring Intelligent Automation Processes"
    
    echo -e "${CYAN}Real-time monitoring (Press Ctrl+C to exit):${NC}"
    pm2 monit
}

# Function to view logs
view_logs() {
    local process_name="$1"
    
    if [ -z "$process_name" ]; then
        print_header "Viewing All Automation Logs"
        pm2 logs
    else
        print_header "Viewing Logs for: $process_name"
        pm2 logs "$process_name"
    fi
}

# Function to restart specific process
restart_process() {
    local process_name="$1"
    
    if [ -z "$process_name" ]; then
        print_error "Please specify a process name"
        echo "Usage: $0 restart-process <process-name>"
        exit 1
    fi
    
    print_header "Restarting Process: $process_name"
    
    print_status "Restarting $process_name..."
    pm2 restart "$process_name"
    
    print_success "Process $process_name restarted!"
}

# Function to start specific process
start_process() {
    local process_name="$1"
    
    if [ -z "$process_name" ]; then
        print_error "Please specify a process name"
        echo "Usage: $0 start-process <process-name>"
        exit 1
    fi
    
    print_header "Starting Process: $process_name"
    
    print_status "Starting $process_name..."
    pm2 start "$process_name"
    
    print_success "Process $process_name started!"
}

# Function to stop specific process
stop_process() {
    local process_name="$1"
    
    if [ -z "$process_name" ]; then
        print_error "Please specify a process name"
        echo "Usage: $0 stop-process <process-name>"
        exit 1
    fi
    
    print_header "Stopping Process: $process_name"
    
    print_status "Stopping $process_name..."
    pm2 stop "$process_name"
    
    print_success "Process $process_name stopped!"
}

# Function to show help
show_help() {
    print_header "Intelligent PM2 Automation Management"
    
    echo -e "${CYAN}Available Commands:${NC}"
    echo -e "  ${GREEN}start${NC}                    - Start all intelligent automation processes"
    echo -e "  ${GREEN}stop${NC}                     - Stop all automation processes"
    echo -e "  ${GREEN}restart${NC}                  - Restart all automation processes"
    echo -e "  ${GREEN}status${NC}                   - Show basic status"
    echo -e "  ${GREEN}detailed-status${NC}          - Show detailed status and logs"
    echo -e "  ${GREEN}monitor${NC}                  - Monitor processes in real-time"
    echo -e "  ${GREEN}logs${NC} [process-name]      - View logs (all or specific process)"
    echo -e "  ${GREEN}start-process${NC} <name>     - Start specific process"
    echo -e "  ${GREEN}stop-process${NC} <name>      - Stop specific process"
    echo -e "  ${GREEN}restart-process${NC} <name>   - Restart specific process"
    echo -e "  ${GREEN}help${NC}                     - Show this help message"
    
    echo -e "\n${CYAN}Available Processes:${NC}"
    echo -e "  ${PURPLE}intelligent-predictive-monitor${NC} - ML-based failure prediction"
    echo -e "  ${PURPLE}ai-code-optimizer${NC}              - AI-powered code optimization"
    echo -e "  ${PURPLE}smart-dependency-manager${NC}       - Intelligent dependency management"
    echo -e "  ${PURPLE}console-error-fixer${NC}            - Continuous error fixing"
    echo -e "  ${PURPLE}security-audit${NC}                 - Security vulnerability scanning"
    echo -e "  ${PURPLE}performance-monitor${NC}            - Performance monitoring"
    echo -e "  ${PURPLE}quality-checks${NC}                 - Code quality validation"
    echo -e "  ${PURPLE}link-checker${NC}                  - Broken link detection"
    echo -e "  ${PURPLE}continuous-improvement${NC}         - Continuous code improvement"
    echo -e "  ${PURPLE}daily-build-test${NC}              - Automated build and testing"
    echo -e "  ${PURPLE}dependency-updates${NC}            - Dependency updates"
    echo -e "  ${PURPLE}link-integrity${NC}                 - Link integrity checking"
    echo -e "  ${PURPLE}front-maximizer${NC}               - Frontend optimization"
    echo -e "  ${PURPLE}sitemap-runner${NC}                - Sitemap generation"
    
    echo -e "\n${CYAN}Examples:${NC}"
    echo -e "  ${YELLOW}$0 start${NC}                    # Start all automations"
    echo -e "  ${YELLOW}$0 logs ai-code-optimizer${NC}    # View AI optimizer logs"
    echo -e "  ${YELLOW}$0 restart-process security-audit${NC} # Restart security audit"
    echo -e "  ${YELLOW}$0 monitor${NC}                   # Monitor all processes"
}

# Function to check system requirements
check_system_requirements() {
    print_header "Checking System Requirements"
    
    # Check Node.js version
    if command -v node &> /dev/null; then
        local node_version=$(node --version)
        print_status "Node.js version: $node_version"
    else
        print_error "Node.js is not installed"
        exit 1
    fi
    
    # Check npm version
    if command -v npm &> /dev/null; then
        local npm_version=$(npm --version)
        print_status "npm version: $npm_version"
    else
        print_error "npm is not installed"
        exit 1
    fi
    
    # Check PM2 version
    if command -v pm2 &> /dev/null; then
        local pm2_version=$(pm2 --version)
        print_status "PM2 version: $pm2_version"
    else
        print_warning "PM2 is not installed. Installing..."
        npm install -g pm2
    fi
    
    # Check available memory
    local available_memory=$(free -m | awk 'NR==2{printf "%.0f", $7/1024}')
    print_status "Available memory: ${available_memory}GB"
    
    if [ "$available_memory" -lt 2 ]; then
        print_warning "Low memory available. Consider increasing system memory."
    fi
    
    # Check disk space
    local available_disk=$(df -h . | awk 'NR==2{print $4}')
    print_status "Available disk space: $available_disk"
    
    print_success "System requirements check completed!"
}

# Main script logic
case "${1:-help}" in
    "start")
        start_intelligent_automation
        ;;
    "stop")
        stop_automation
        ;;
    "restart")
        restart_automation
        ;;
    "status")
        show_status
        ;;
    "detailed-status")
        show_detailed_status
        ;;
    "monitor")
        monitor_processes
        ;;
    "logs")
        view_logs "$2"
        ;;
    "start-process")
        start_process "$2"
        ;;
    "stop-process")
        stop_process "$2"
        ;;
    "restart-process")
        restart_process "$2"
        ;;
    "check")
        check_system_requirements
        ;;
    "help"|*)
        show_help
        ;;
esac