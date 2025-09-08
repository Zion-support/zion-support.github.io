#!/bin/bash

# Intelligent Automation Launcher Script
# This script manages all the new intelligent PM2 automation services

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
AUTOMATION_DIR="scripts/automation"
REPORTS_DIR="automation-reports"

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
    echo -e "${BLUE} $1${NC}"
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

# Function to start all intelligent automations
start_all_automations() {
    print_header "Starting All Intelligent Automations"
    
    print_status "Starting PM2 ecosystem..."
    pm2 start ecosystem.config.cjs
    
    print_status "Waiting for services to stabilize..."
    sleep 10
    
    print_status "Checking service status..."
    pm2 list
    
    print_status "All intelligent automations started successfully!"
}

# Function to start specific automation
start_automation() {
    local service_name=$1
    
    if [ -z "$service_name" ]; then
        print_error "Please specify a service name"
        echo "Usage: $0 start <service-name>"
        echo "Available services:"
        pm2 list | grep -E "(ai-code-review|intelligent-performance-optimizer|smart-dependency-manager|intelligent-automation-dashboard)"
        exit 1
    fi
    
    print_status "Starting $service_name..."
    pm2 start ecosystem.config.cjs --only $service_name
    
    print_status "Service $service_name started successfully!"
}

# Function to stop all automations
stop_all_automations() {
    print_header "Stopping All Intelligent Automations"
    
    print_status "Stopping PM2 ecosystem..."
    pm2 stop ecosystem.config.cjs
    
    print_status "All intelligent automations stopped successfully!"
}

# Function to restart all automations
restart_all_automations() {
    print_header "Restarting All Intelligent Automations"
    
    print_status "Restarting PM2 ecosystem..."
    pm2 restart ecosystem.config.cjs
    
    print_status "All intelligent automations restarted successfully!"
}

# Function to show status
show_status() {
    print_header "Intelligent Automation Status"
    
    print_status "PM2 Process List:"
    pm2 list
    
    echo ""
    print_status "PM2 Logs (last 50 lines):"
    pm2 logs --lines 50
}

# Function to show logs for specific service
show_logs() {
    local service_name=$1
    
    if [ -z "$service_name" ]; then
        print_error "Please specify a service name"
        echo "Usage: $0 logs <service-name>"
        exit 1
    fi
    
    print_status "Showing logs for $service_name..."
    pm2 logs $service_name --lines 100
}

# Function to monitor automations in real-time
monitor_automations() {
    print_header "Real-time Automation Monitoring"
    
    print_status "Starting real-time monitoring (Press Ctrl+C to stop)..."
    pm2 monit
}

# Function to generate status report
generate_report() {
    print_header "Generating Automation Status Report"
    
    # Create reports directory if it doesn't exist
    mkdir -p $REPORTS_DIR
    
    # Generate timestamp
    timestamp=$(date +"%Y%m%d_%H%M%S")
    
    # Generate PM2 status report
    pm2 jlist > "$REPORTS_DIR/pm2_status_$timestamp.json"
    
    # Generate process list
    pm2 list > "$REPORTS_DIR/pm2_processes_$timestamp.txt"
    
    # Generate summary report
    cat > "$REPORTS_DIR/summary_$timestamp.txt" << EOF
Intelligent Automation Status Report
Generated: $(date)
=====================================

PM2 Status:
$(pm2 list)

Service Count: $(pm2 list | grep -c "online\|stopped\|errored")

EOF
    
    print_status "Report generated: $REPORTS_DIR/"
    print_status "Files created:"
    ls -la "$REPORTS_DIR/" | grep "$timestamp"
}

# Function to clean up old reports
cleanup_reports() {
    print_header "Cleaning Up Old Reports"
    
    if [ -d "$REPORTS_DIR" ]; then
        print_status "Removing reports older than 7 days..."
        find "$REPORTS_DIR" -name "*.json" -mtime +7 -delete
        find "$REPORTS_DIR" -name "*.txt" -mtime +7 -delete
        print_status "Cleanup completed!"
    else
        print_warning "Reports directory not found: $REPORTS_DIR"
    fi
}

# Function to show help
show_help() {
    print_header "Intelligent Automation Launcher Help"
    
    echo "Usage: $0 <command> [options]"
    echo ""
    echo "Commands:"
    echo "  start-all          Start all intelligent automations"
    echo "  start <service>    Start specific automation service"
    echo "  stop-all           Stop all intelligent automations"
    echo "  restart-all        Restart all intelligent automations"
    echo "  status             Show current status"
    echo "  logs <service>     Show logs for specific service"
    echo "  monitor            Monitor automations in real-time"
    echo "  report             Generate status report"
    echo "  cleanup            Clean up old reports"
    echo "  help               Show this help message"
    echo ""
    echo "Available Services:"
    echo "  - ai-code-review"
    echo "  - intelligent-performance-optimizer"
    echo "  - smart-dependency-manager"
    echo "  - intelligent-automation-dashboard"
    echo ""
    echo "Examples:"
    echo "  $0 start-all"
    echo "  $0 start ai-code-review"
    echo "  $0 logs intelligent-performance-optimizer"
    echo "  $0 monitor"
}

# Function to validate service name
validate_service() {
    local service_name=$1
    local valid_services=("ai-code-review" "intelligent-performance-optimizer" "smart-dependency-manager" "intelligent-automation-dashboard")
    
    for service in "${valid_services[@]}"; do
        if [ "$service" = "$service_name" ]; then
            return 0
        fi
    done
    
    return 1
}

# Main script logic
main() {
    # Check prerequisites
    check_pm2
    check_ecosystem
    
    # Parse command line arguments
    case "${1:-help}" in
        "start-all")
            start_all_automations
            ;;
        "start")
            if validate_service "$2"; then
                start_automation "$2"
            else
                print_error "Invalid service name: $2"
                echo "Valid services: ai-code-review, intelligent-performance-optimizer, smart-dependency-manager, intelligent-automation-dashboard"
                exit 1
            fi
            ;;
        "stop-all")
            stop_all_automations
            ;;
        "restart-all")
            restart_all_automations
            ;;
        "status")
            show_status
            ;;
        "logs")
            if validate_service "$2"; then
                show_logs "$2"
            else
                print_error "Invalid service name: $2"
                exit 1
            fi
            ;;
        "monitor")
            monitor_automations
            ;;
        "report")
            generate_report
            ;;
        "cleanup")
            cleanup_reports
            ;;
        "help"|"--help"|"-h")
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