#!/bin/bash

# Enhanced PM2 Automation System Management Script
# This script provides easy management of the PM2 automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ECOSYSTEM_FILE="ecosystem.config.cjs"
LOGS_DIR="logs"

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
    echo -e "${BLUE}    echo -e "${BLUE}  PM2 Automation Management${NC}"
    echo -e "${BLUE}}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing now..."
        npm install -g pm2
        print_status "PM2 installed successfully!"
    else
        print_status "PM2 is already installed"
    fi
}

# Function to check if ecosystem file exists
check_ecosystem() {
    if [ ! -f "$ECOSYSTEM_FILE" ]; then
        print_error "Ecosystem configuration file not found: $ECOSYSTEM_FILE"
        exit 1
    fi
}

# Function to start the automation system
start_automation() {
    print_status "Starting PM2 automation system..."
    check_pm2
    check_ecosystem
    
    pm2 start "$ECOSYSTEM_FILE"
    pm2 save
    
    print_status "Automation system started successfully!"
    print_status "Use 'pm2 status' to view process status"
    print_status "Use 'pm2 logs' to view logs"
}

# Function to stop the automation system
stop_automation() {
    print_status "Stopping PM2 automation system..."
    pm2 stop all
    print_status "Automation system stopped"
}

# Function to restart the automation system
restart_automation() {
    print_status "Restarting PM2 automation system..."
    pm2 restart all
    print_status "Automation system restarted"
}

# Function to show status
show_status() {
    print_status "PM2 Process Status:"
    pm2 status
}

# Function to show logs
show_logs() {
    print_status "Showing recent logs (last 50 lines):"
    pm2 logs --lines 50
}

# Function to monitor processes
monitor_processes() {
    print_status "Starting PM2 monitoring dashboard..."
    pm2 monit
}

# Function to show reports
show_reports() {
    if [ -d "$LOGS_DIR" ]; then
        print_status "Available Reports:"
        echo ""
        
        # Find all JSON report files
        find "$LOGS_DIR" -name "*.json" -type f | while read -r file; do
            filename=$(basename "$file")
            size=$(du -h "$file" | cut -f1)
            modified=$(stat -c %y "$file" | cut -d' ' -f1,2)
            echo -e "  ${BLUE}$filename${NC}"
            echo -e "    Size: $size | Modified: $modified"
            echo ""
        done
        
        print_status "Use 'cat logs/[filename]' to view specific reports"
    else
        print_warning "Logs directory not found. No reports available yet."
    fi
}

# Function to clean logs
clean_logs() {
    print_warning "This will remove all log files. Are you sure? (y/N)"
    read -r response
    if [[ "$response" =~ ^[Yy]$ ]]; then
        print_status "Cleaning log files..."
        pm2 flush
        if [ -d "$LOGS_DIR" ]; then
            rm -rf "$LOGS_DIR"/*
            print_status "Log files cleaned"
        fi
    else
        print_status "Log cleanup cancelled"
    fi
}

# Function to setup auto-start
setup_autostart() {
    print_status "Setting up PM2 auto-start..."
    pm2 startup
    print_status "Auto-start configured. PM2 will start automatically on system reboot."
}

# Function to remove auto-start
remove_autostart() {
    print_status "Removing PM2 auto-start..."
    pm2 unstartup
    print_status "Auto-start removed"
}

# Function to show help
show_help() {
    print_header
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start           Start the automation system"
    echo "  stop            Stop the automation system"
    echo "  restart         Restart the automation system"
    echo "  status          Show process status"
    echo "  logs            Show recent logs"
    echo "  monitor         Open PM2 monitoring dashboard"
    echo "  reports         Show available reports"
    echo "  clean-logs      Clean all log files"
    echo "  setup-startup   Configure auto-start on boot"
    echo "  remove-startup  Remove auto-start configuration"
    echo "  help            Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start        # Start the system"
    echo "  $0 status       # Check status"
    echo "  $0 logs         # View logs"
    echo ""
}

# Function to check system health
check_health() {
    print_status "Checking system health..."
    
    # Check PM2 status
    if pm2 ping > /dev/null 2>&1; then
        print_status "PM2 daemon is running"
    else
        print_error "PM2 daemon is not running"
        return 1
    fi
    
    # Check process count
    process_count=$(pm2 jlist | jq length 2>/dev/null || echo "0")
    if [ "$process_count" -gt 0 ]; then
        print_status "Found $process_count PM2 processes"
    else
        print_warning "No PM2 processes found"
    fi
    
    # Check logs directory
    if [ -d "$LOGS_DIR" ]; then
        log_count=$(find "$LOGS_DIR" -name "*.json" | wc -l)
        print_status "Found $log_count report files"
    else
        print_warning "Logs directory not found"
    fi
}

# Main script logic
main() {
    case "${1:-help}" in
        start)
            start_automation
            ;;
        stop)
            stop_automation
            ;;
        restart)
            restart_automation
            ;;
        status)
            show_status
            ;;
        logs)
            show_logs
            ;;
        monitor)
            monitor_processes
            ;;
        reports)
            show_reports
            ;;
        clean-logs)
            clean_logs
            ;;
        setup-startup)
            setup_autostart
            ;;
        remove-startup)
            remove_autostart
            ;;
        health)
            check_health
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "Unknown command: $1"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

# Check if running as root (not recommended for PM2)
if [ "$EUID" -eq 0 ]; then
    print_warning "Running as root is not recommended for PM2"
    print_warning "Consider running as a regular user"
fi

# Run main function with all arguments
main "$@"