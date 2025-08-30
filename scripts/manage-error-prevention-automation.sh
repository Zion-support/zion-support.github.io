#!/bin/bash

# Enhanced Error Prevention Automation Management Script
# This script manages PM2-based error prevention automations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ECOSYSTEM_FILE="ecosystem-enhanced-error-prevention.config.cjs"
LOG_DIR="./logs"
REPORTS_DIR="./reports"

# Ensure directories exist
mkdir -p "$LOG_DIR" "$REPORTS_DIR"

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
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
    fi
}

# Function to start all automations
start_automations() {
    print_header "Starting Error Prevention Automations"
    
    check_pm2
    
    print_status "Starting PM2 ecosystem..."
    pm2 start "$ECOSYSTEM_FILE"
    
    print_status "Saving PM2 configuration..."
    pm2 save
    
    print_status "Setting up PM2 startup script..."
    pm2 startup
    
    print_status "All automations started successfully!"
    
    # Show status
    pm2 status
}

# Function to stop all automations
stop_automations() {
    print_header "Stopping Error Prevention Automations"
    
    print_status "Stopping all PM2 processes..."
    pm2 stop "$ECOSYSTEM_FILE"
    
    print_status "All automations stopped!"
    
    # Show status
    pm2 status
}

# Function to restart all automations
restart_automations() {
    print_header "Restarting Error Prevention Automations"
    
    print_status "Restarting PM2 ecosystem..."
    pm2 restart "$ECOSYSTEM_FILE"
    
    print_status "All automations restarted successfully!"
    
    # Show status
    pm2 status
}

# Function to show status
show_status() {
    print_header "Error Prevention Automation Status"
    
    print_status "PM2 Status:"
    pm2 status
    
    echo ""
    print_status "PM2 Logs (last 20 lines):"
    pm2 logs --lines 20
}

# Function to show logs
show_logs() {
    print_header "Error Prevention Automation Logs"
    
    local service=${1:-"all"}
    
    if [ "$service" = "all" ]; then
        print_status "Showing logs for all services..."
        pm2 logs --lines 50
    else
        print_status "Showing logs for $service..."
        pm2 logs "$service" --lines 50
    fi
}

# Function to monitor automations
monitor_automations() {
    print_header "Monitoring Error Prevention Automations"
    
    print_status "Opening PM2 monitoring dashboard..."
    pm2 monit
}

# Function to check health
check_health() {
    print_header "Checking Error Prevention Automation Health"
    
    print_status "Running health check..."
    node ./scripts/automation/health-check.cjs check
    
    if [ $? -eq 0 ]; then
        print_status "Health check completed successfully!"
    else
        print_warning "Health check completed with warnings or errors. Check reports for details."
    fi
}

# Function to generate reports
generate_reports() {
    print_header "Generating Error Prevention Reports"
    
    print_status "Running comprehensive error fixer..."
    node ./scripts/automation/comprehensive-error-fixer.cjs run
    
    print_status "Running health check..."
    node ./scripts/automation/health-check.cjs check
    
    print_status "Reports generated in $REPORTS_DIR"
    
    # List generated reports
    if [ -d "$REPORTS_DIR" ]; then
        echo ""
        print_status "Generated Reports:"
        ls -la "$REPORTS_DIR"
    fi
}

# Function to clean up
cleanup() {
    print_header "Cleaning Up Error Prevention Automations"
    
    print_warning "This will stop and remove all PM2 processes. Are you sure? (y/N)"
    read -r response
    
    if [[ "$response" =~ ^[Yy]$ ]]; then
        print_status "Stopping all PM2 processes..."
        pm2 stop all
        
        print_status "Removing all PM2 processes..."
        pm2 delete all
        
        print_status "Clearing PM2 logs..."
        pm2 flush
        
        print_status "Cleanup completed!"
    else
        print_status "Cleanup cancelled."
    fi
}

# Function to update automations
update_automations() {
    print_header "Updating Error Prevention Automations"
    
    print_status "Pulling latest changes..."
    git pull origin main
    
    print_status "Installing dependencies..."
    npm install
    
    print_status "Restarting automations..."
    restart_automations
    
    print_status "Update completed!"
}

# Function to show help
show_help() {
    print_header "Error Prevention Automation Management"
    
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo "  start           Start all error prevention automations"
    echo "  stop            Stop all error prevention automations"
    echo "  restart         Restart all error prevention automations"
    echo "  status          Show status of all automations"
    echo "  logs [SERVICE]  Show logs (all services or specific service)"
    echo "  monitor         Open PM2 monitoring dashboard"
    echo "  health          Run health check"
    echo "  reports         Generate comprehensive reports"
    echo "  cleanup         Stop and remove all PM2 processes"
    echo "  update          Update automations from git and restart"
    echo "  help            Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start all automations"
    echo "  $0 logs syntax-error-fixer # Show logs for specific service"
    echo "  $0 health                   # Run health check"
    echo ""
    echo "Services:"
    echo "  enhanced-error-prevention-orchestrator"
    echo "  syntax-error-fixer"
    echo "  typescript-error-fixer"
    echo "  linting-error-fixer"
    echo "  build-error-fixer"
    echo "  dependency-error-fixer"
    echo "  error-prevention-monitor"
    echo "  scheduled-comprehensive-fixer"
    echo "  error-prevention-health-check"
}

# Function to run quick fix
quick_fix() {
    print_header "Running Quick Error Fix"
    
    print_status "Running syntax error fixer..."
    node ./scripts/automation/syntax-error-fixer.cjs run
    
    print_status "Running TypeScript error fixer..."
    node ./scripts/automation/comprehensive-error-fixer.cjs typescript
    
    print_status "Running linting fixer..."
    node ./scripts/automation/comprehensive-error-fixer.cjs linting
    
    print_status "Quick fix completed!"
}

# Function to run comprehensive fix
comprehensive_fix() {
    print_header "Running Comprehensive Error Fix"
    
    print_status "Running all error fixers..."
    node ./scripts/automation/comprehensive-error-fixer.cjs run
    
    print_status "Comprehensive fix completed!"
}

# Function to show performance metrics
show_performance() {
    print_header "Error Prevention Automation Performance"
    
    print_status "PM2 Performance Metrics:"
    pm2 show enhanced-error-prevention-orchestrator
    
    echo ""
    print_status "System Resources:"
    pm2 monit --no-daemon --lines 1
}

# Main script logic
main() {
    local command=${1:-"help"}
    
    case $command in
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
            show_logs "$2"
            ;;
        monitor)
            monitor_automations
            ;;
        health)
            check_health
            ;;
        reports)
            generate_reports
            ;;
        cleanup)
            cleanup
            ;;
        update)
            update_automations
            ;;
        quick-fix)
            quick_fix
            ;;
        comprehensive-fix)
            comprehensive_fix
            ;;
        performance)
            show_performance
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "Unknown command: $command"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"