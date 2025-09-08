#!/bin/bash

# Enhanced Automation Startup Script for Zion Project
# This script manages PM2 automation processes for continuous error fixing and code quality

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project configuration
PROJECT_NAME="zion-project"
ECOSYSTEM_FILE="ecosystem.config.cjs"
REPORTS_DIR="reports"

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
        print_success "PM2 installed successfully"
    fi
}

# Function to check if ecosystem file exists
check_ecosystem() {
    if [ ! -f "$ECOSYSTEM_FILE" ]; then
        print_error "Ecosystem file $ECOSYSTEM_FILE not found!"
        exit 1
    fi
}

# Function to start all automations
start_automations() {
    print_status "Starting all automation processes..."
    
    # Start the automation orchestrator first
    pm2 start ecosystem.config.cjs --only automation-orchestrator
    
    # Start other automation processes
    pm2 start ecosystem.config.cjs --only enhanced-error-fixer,code-quality-automation,link-checker,continuous-improvement,daily-build-test,security-audit,dependency-updates,performance-monitor,quality-checks,link-integrity,front-maximizer,sitemap-runner
    
    print_success "All automation processes started successfully"
    
    # Show status
    pm2 status
}

# Function to stop all automations
stop_automations() {
    print_status "Stopping all automation processes..."
    
    # Stop all PM2 processes for this project
    pm2 stop ecosystem.config.cjs
    
    print_success "All automation processes stopped"
}

# Function to restart all automations
restart_automations() {
    print_status "Restarting all automation processes..."
    
    pm2 restart ecosystem.config.cjs
    
    print_success "All automation processes restarted"
}

# Function to show automation status
show_status() {
    print_status "Automation Status:"
    pm2 status
    
    print_status "Recent logs:"
    pm2 logs --lines 20
}

# Function to show automation logs
show_logs() {
    print_status "Showing automation logs (last 50 lines):"
    pm2 logs --lines 50
}

# Function to monitor automations
monitor_automations() {
    print_status "Opening PM2 monitoring dashboard..."
    pm2 monit
}

# Function to run health check
health_check() {
    print_status "Running automation health check..."
    
    # Check PM2 status
    if pm2 status | grep -q "online"; then
        print_success "PM2 processes are running"
    else
        print_warning "Some PM2 processes may not be running"
    fi
    
    # Check reports directory
    if [ -d "$REPORTS_DIR" ]; then
        print_success "Reports directory exists"
        echo "Recent reports:"
        ls -la "$REPORTS_DIR"/*.json 2>/dev/null | head -5 || echo "No reports found"
    else
        print_warning "Reports directory not found"
    fi
    
    # Check ecosystem file
    if [ -f "$ECOSYSTEM_FILE" ]; then
        print_success "Ecosystem configuration file exists"
    else
        print_error "Ecosystem configuration file not found"
    fi
}

# Function to generate reports
generate_reports() {
    print_status "Generating automation reports..."
    
    # Create reports directory if it doesn't exist
    mkdir -p "$REPORTS_DIR"
    
    # Generate status report
    pm2 status --format json > "$REPORTS_DIR/pm2-status-$(date +%Y%m%d-%H%M%S).json"
    
    # Generate process list
    pm2 list --format json > "$REPORTS_DIR/pm2-list-$(date +%Y%m%d-%H%M%S).json"
    
    print_success "Reports generated in $REPORTS_DIR"
}

# Function to clean up old reports
cleanup_reports() {
    print_status "Cleaning up old reports (keeping last 10)..."
    
    if [ -d "$REPORTS_DIR" ]; then
        # Keep only the last 10 report files
        cd "$REPORTS_DIR"
        ls -t *.json | tail -n +11 | xargs -r rm
        cd - > /dev/null
        print_success "Old reports cleaned up"
    else
        print_warning "Reports directory not found"
    fi
}

# Function to show help
show_help() {
    echo "Enhanced Automation Management Script for Zion Project"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start all automation processes"
    echo "  stop      Stop all automation processes"
    echo "  restart   Restart all automation processes"
    echo "  status    Show automation status and recent logs"
    echo "  logs      Show automation logs"
    echo "  monit     Open PM2 monitoring dashboard"
    echo "  health    Run health check on automations"
    echo "  reports   Generate automation reports"
    echo "  cleanup   Clean up old reports"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start     # Start all automations"
    echo "  $0 status    # Check automation status"
    echo "  $0 logs      # View automation logs"
}

# Main script logic
main() {
    # Check if PM2 is installed
    check_pm2
    
    # Check if ecosystem file exists
    check_ecosystem
    
    case "${1:-help}" in
        start)
            start_automations
            ;;
        stop)
            stop_automations
            ;;
        restart)
            restart_automations
            ;;
        status)
            show_status
            ;;
        logs)
            show_logs
            ;;
        monit)
            monitor_automations
            ;;
        health)
            health_check
            ;;
        reports)
            generate_reports
            ;;
        cleanup)
            cleanup_reports
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
