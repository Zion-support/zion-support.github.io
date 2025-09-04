#!/bin/bash

# 🚨 Error Automation Management Script
# This script provides easy management of the error automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${PURPLE}ℹ️  $1${NC}"
}

# Function to show usage
show_usage() {
    echo "🚨 Error Automation Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start           - Start all error automation processes"
    echo "  stop            - Stop all error automation processes"
    echo "  restart         - Restart all error automation processes"
    echo "  status          - Show status of all processes"
    echo "  logs            - Show recent logs"
    echo "  logs [process]  - Show logs for specific process"
    echo "  fix             - Run comprehensive error fixer once"
    echo "  monitor         - Start TypeScript error monitor"
    echo "  clean           - Start ESLint error cleaner"
    echo "  build           - Check for build errors"
    echo "  report          - Generate error report"
    echo "  help            - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 logs typescript-error-monitor"
    echo "  $0 fix"
    echo ""
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Please install PM2 first:"
        echo "  npm install -g pm2"
        exit 1
    fi
}

# Function to start all processes
start_automation() {
    print_status "Starting Error Automation System..."
    check_pm2
    
    # Create directories
    mkdir -p automation/logs
    mkdir -p error-reports
    
    # Start the ecosystem
    pm2 start ecosystem-error-automation.config.cjs --update-env
    
    print_success "Error Automation System started!"
    print_info "Use '$0 status' to check status"
    print_info "Use '$0 logs' to view logs"
}

# Function to stop all processes
stop_automation() {
    print_status "Stopping Error Automation System..."
    check_pm2
    
    pm2 stop ecosystem-error-automation.config.cjs
    print_success "Error Automation System stopped!"
}

# Function to restart all processes
restart_automation() {
    print_status "Restarting Error Automation System..."
    check_pm2
    
    pm2 restart ecosystem-error-automation.config.cjs
    print_success "Error Automation System restarted!"
}

# Function to show status
show_status() {
    print_status "Error Automation System Status:"
    check_pm2
    
    pm2 status
}

# Function to show logs
show_logs() {
    check_pm2
    
    if [ -n "$1" ]; then
        print_status "Showing logs for $1:"
        pm2 logs "$1" --lines 50
    else
        print_status "Showing recent logs for all processes:"
        pm2 logs --lines 20
    fi
}

# Function to run comprehensive error fixer
run_error_fixer() {
    print_status "Running Comprehensive Error Fixer..."
    
    if [ ! -f "scripts/automation/comprehensive-error-fixer.cjs" ]; then
        print_error "Comprehensive error fixer not found!"
        exit 1
    fi
    
    node scripts/automation/comprehensive-error-fixer.cjs
    print_success "Error fixer completed!"
}

# Function to start TypeScript monitor
start_typescript_monitor() {
    print_status "Starting TypeScript Error Monitor..."
    
    if [ ! -f "scripts/automation/typescript-error-monitor.cjs" ]; then
        print_error "TypeScript error monitor not found!"
        exit 1
    fi
    
    node scripts/automation/typescript-error-monitor.cjs
}

# Function to start ESLint cleaner
start_eslint_cleaner() {
    print_status "Starting ESLint Error Cleaner..."
    
    if [ ! -f "scripts/automation/eslint-error-cleaner.cjs" ]; then
        print_error "ESLint error cleaner not found!"
        exit 1
    fi
    
    node scripts/automation/eslint-error-cleaner.cjs
}

# Function to check build errors
check_build_errors() {
    print_status "Checking for build errors..."
    
    if npm run build 2>&1; then
        print_success "Build successful - no errors found!"
    else
        print_warning "Build errors detected!"
        print_info "Check the build output above for details"
    fi
}

# Function to generate error report
generate_report() {
    print_status "Generating Error Report..."
    
    # Check for recent error reports
    if [ -d "error-reports" ]; then
        latest_report=$(ls -t error-reports/*.json 2>/dev/null | head -1)
        if [ -n "$latest_report" ]; then
            print_info "Latest error report: $latest_report"
            echo ""
            cat "$latest_report" | jq '.' 2>/dev/null || cat "$latest_report"
        else
            print_warning "No error reports found"
        fi
    else
        print_warning "Error reports directory not found"
    fi
    
    # Show PM2 status
    echo ""
    print_info "Current PM2 Status:"
    pm2 status
}

# Main script logic
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
    fix)
        run_error_fixer
        ;;
    monitor)
        start_typescript_monitor
        ;;
    clean)
        start_eslint_cleaner
        ;;
    build)
        check_build_errors
        ;;
    report)
        generate_report
        ;;
    help|--help|-h)
        show_usage
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_usage
        exit 1
        ;;
esac