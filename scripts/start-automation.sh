#!/bin/bash

# Zion Tech Group - Automation Startup Script
# This script manages the PM2 automation ecosystem

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ECOSYSTEM_FILE="ecosystem.config.cjs"
PROJECT_NAME="zion-automation"

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
    echo -e "${BLUE}  Zion Automation System${NC}"
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

# Function to start all automations
start_automation() {
    print_status "Starting Zion Automation System..."
    
    # Start the ecosystem
    pm2 start $ECOSYSTEM_FILE --only automation
    
    # Start specific error fixers first
    pm2 start $ECOSYSTEM_FILE --only comprehensive-error-fixer
    pm2 start $ECOSYSTEM_FILE --only typescript-error-fixer
    pm2 start $ECOSYSTEM_FILE --only general-error-fixer
    
    print_status "Automation system started successfully!"
    pm2 status
}

# Function to stop all automations
stop_automation() {
    print_status "Stopping Zion Automation System..."
    
    # Stop all automation processes
    pm2 stop $ECOSYSTEM_FILE --only automation
    pm2 stop comprehensive-error-fixer typescript-error-fixer general-error-fixer 2>/dev/null || true
    
    print_status "Automation system stopped successfully!"
}

# Function to restart all automations
restart_automation() {
    print_status "Restarting Zion Automation System..."
    
    stop_automation
    sleep 2
    start_automation
}

# Function to show status
show_status() {
    print_status "Zion Automation System Status:"
    echo ""
    pm2 status
    echo ""
    
    # Show specific automation status
    print_status "Error Fixer Status:"
    pm2 status comprehensive-error-fixer typescript-error-fixer general-error-fixer 2>/dev/null || echo "Error fixers not running"
}

# Function to show logs
show_logs() {
    local lines=${1:-50}
    print_status "Showing last $lines lines of automation logs..."
    
    echo ""
    echo "=== Comprehensive Error Fixer Logs ==="
    pm2 logs comprehensive-error-fixer --lines $lines 2>/dev/null || echo "No logs available"
    
    echo ""
    echo "=== TypeScript Error Fixer Logs ==="
    pm2 logs typescript-error-fixer --lines $lines 2>/dev/null || echo "No logs available"
    
    echo ""
    echo "=== General Error Fixer Logs ==="
    pm2 logs general-error-fixer --lines $lines 2>/dev/null || echo "No logs available"
}

# Function to show monitoring
show_monitoring() {
    print_status "Opening PM2 monitoring interface..."
    pm2 monit
}

# Function to show health status
show_health() {
    print_status "Checking automation system health..."
    
    # Check if PM2 is running
    if ! pgrep -f "pm2" > /dev/null; then
        print_error "PM2 is not running"
        return 1
    fi
    
    # Check automation processes
    local running_count=$(pm2 list | grep -c "online" || echo "0")
    local total_count=$(pm2 list | grep -c "automation\|error-fixer" || echo "0")
    
    echo ""
    echo "System Health:"
    echo "- PM2 Status: Running"
    echo "- Running Processes: $running_count"
    echo "- Total Automation Processes: $total_count"
    
    if [ "$running_count" -gt 0 ]; then
        print_status "System is healthy!"
        return 0
    else
        print_warning "No automation processes are running"
        return 1
    fi
}

# Function to generate reports
generate_reports() {
    print_status "Generating automation reports..."
    
    # Create reports directory if it doesn't exist
    mkdir -p reports
    
    # Generate status report
    pm2 status > reports/pm2-status-report.txt 2>&1 || true
    
    # Generate process list
    pm2 list > reports/pm2-process-list.txt 2>&1 || true
    
    # Generate logs summary
    pm2 logs --lines 100 > reports/pm2-logs-summary.txt 2>&1 || true
    
    print_status "Reports generated in reports/ directory"
}

# Function to run a single error fix cycle
run_error_fix_cycle() {
    print_status "Running manual error fix cycle..."
    
    # Run the comprehensive error fixer
    node scripts/automation/comprehensive-error-fixer.cjs
    
    print_status "Error fix cycle completed!"
}

# Function to show help
show_help() {
    print_header
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     - Start all automation processes"
    echo "  stop      - Stop all automation processes"
    echo "  restart   - Restart all automation processes"
    echo "  status    - Show current status"
    echo "  logs      - Show recent logs (default: 50 lines)"
    echo "  monit     - Open PM2 monitoring interface"
    echo "  health    - Check system health"
    echo "  reports   - Generate status reports"
    echo "  fix       - Run a manual error fix cycle"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start all automations"
    echo "  $0 logs 100                 # Show last 100 lines of logs"
    echo "  $0 fix                      # Run manual error fix cycle"
    echo ""
}

# Main script logic
main() {
    # Check prerequisites
    check_pm2
    check_ecosystem
    
    # Parse command line arguments
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
            show_logs "$2"
            ;;
        monit)
            show_monitoring
            ;;
        health)
            show_health
            ;;
        reports)
            generate_reports
            ;;
        fix)
            run_error_fix_cycle
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "Unknown command: $1"
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"
