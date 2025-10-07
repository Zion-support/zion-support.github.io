#!/bin/bash

# Enhanced Error Prevention Automation Management Script
# This script provides comprehensive management of the error prevention automation system

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
ECOSYSTEM_CONFIG="ecosystem-error-prevention-automation.config.cjs"
REPORTS_DIR="reports"
LOG_DIR="logs"

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
    echo -e "${BLUE}    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
    fi
}

# Function to check if required directories exist
setup_directories() {
    mkdir -p "$REPORTS_DIR"
    mkdir -p "$LOG_DIR"
    print_status "Directories setup completed"
}

# Function to start the error prevention automation system
start_automation() {
    print_header "Starting Error Prevention Automation System"
    
    check_pm2
    setup_directories
    
    print_status "Starting PM2 processes from $ECOSYSTEM_CONFIG..."
    
    if pm2 start "$ECOSYSTEM_CONFIG"; then
        print_status "Error prevention automation system started successfully"
        pm2 save
        print_status "PM2 configuration saved"
    else
        print_error "Failed to start error prevention automation system"
        exit 1
    fi
    
    print_status "Starting continuous monitoring..."
    pm2 start ecosystem.config.cjs --only pm2-monitor
    
    print_status "System is now running and monitoring for errors automatically"
}

# Function to stop the error prevention automation system
stop_automation() {
    print_header "Stopping Error Prevention Automation System"
    
    print_status "Stopping all PM2 processes..."
    pm2 stop all
    pm2 delete all
    
    print_status "Error prevention automation system stopped"
}

# Function to restart the error prevention automation system
restart_automation() {
    print_header "Restarting Error Prevention Automation System"
    
    stop_automation
    sleep 2
    start_automation
}

# Function to show status of all automation processes
show_status() {
    print_header "Error Prevention Automation System Status"
    
    echo -e "${CYAN}PM2 Process Status:${NC}"
    pm2 status
    
    echo -e "\n${CYAN}PM2 Logs (last 20 lines):${NC}"
    pm2 logs --lines 20 --nostream
    
    echo -e "\n${CYAN}Recent Reports:${NC}"
    if [ -d "$REPORTS_DIR" ]; then
        ls -la "$REPORTS_DIR"/*.json 2>/dev/null | head -10 || echo "No reports found"
    fi
}

# Function to show logs for specific process
show_logs() {
    local process_name=${1:-"all"}
    
    print_header "Showing Logs for: $process_name"
    
    if [ "$process_name" = "all" ]; then
        pm2 logs --lines 50 --nostream
    else
        pm2 logs "$process_name" --lines 50 --nostream
    fi
}

# Function to run a single error prevention cycle
run_single_cycle() {
    print_header "Running Single Error Prevention Cycle"
    
    print_status "Running enhanced error prevention automation..."
    node scripts/automation/enhanced-error-prevention-automation.cjs
    
    print_status "Running intelligent error prevention orchestrator..."
    node scripts/automation/intelligent-error-prevention-orchestrator.cjs
    
    print_status "Single cycle completed"
}

# Function to analyze project health
analyze_health() {
    print_header "Analyzing Project Health"
    
    print_status "Running project health analysis..."
    node scripts/automation/intelligent-error-prevention-orchestrator.cjs --analyze
    
    print_status "Health analysis completed"
}

# Function to generate intelligence report
generate_report() {
    print_header "Generating Intelligence Report"
    
    print_status "Generating intelligence report..."
    node scripts/automation/intelligent-error-prevention-orchestrator.cjs --report
    
    print_status "Intelligence report generated"
}

# Function to monitor system in real-time
monitor_system() {
    print_header "Real-time System Monitoring"
    
    print_status "Starting PM2 monit (press Ctrl+C to exit)..."
    pm2 monit
}

# Function to check for errors and run fixes
check_and_fix() {
    print_header "Checking for Errors and Running Fixes"
    
    print_status "Running comprehensive error check..."
    
    # Check TypeScript errors
    print_status "Checking TypeScript errors..."
    if npm run type-check > /dev/null 2>&1; then
        print_status "✅ No TypeScript errors found"
    else
        print_warning "⚠️ TypeScript errors detected. Running fixes..."
        node scripts/automation/enhanced-error-prevention-automation.cjs
    fi
    
    # Check ESLint errors
    print_status "Checking ESLint errors..."
    if npx eslint . --format=compact > /dev/null 2>&1; then
        print_status "✅ No ESLint errors found"
    else
        print_warning "⚠️ ESLint errors detected. Running fixes..."
        node scripts/automation/enhanced-error-prevention-automation.cjs
    fi
    
    # Try to build
    print_status "Checking build status..."
    if npm run build > /dev/null 2>&1; then
        print_status "✅ Build successful"
    else
        print_warning "⚠️ Build failed. Running fixes..."
        node scripts/automation/enhanced-error-prevention-automation.cjs
    fi
    
    print_status "Error check and fix cycle completed"
}

# Function to show help
show_help() {
    print_header "Error Prevention Automation Management Script"
    
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo "  start           Start the error prevention automation system"
    echo "  stop            Stop the error prevention automation system"
    echo "  restart         Restart the error prevention automation system"
    echo "  status          Show status of all automation processes"
    echo "  logs [PROCESS]  Show logs for specific process or all processes"
    echo "  run-cycle       Run a single error prevention cycle"
    echo "  analyze         Analyze project health"
    echo "  report          Generate intelligence report"
    echo "  monitor         Monitor system in real-time"
    echo "  check-fix       Check for errors and run fixes"
    echo "  help            Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start the automation system"
    echo "  $0 logs enhanced-error-prevention-automation  # Show logs for specific process"
    echo "  $0 check-fix                # Check for errors and run fixes"
    echo ""
    echo "The system will automatically:"
    echo "  - Monitor for TypeScript, ESLint, and build errors"
    echo "  - Fix common errors automatically"
    echo "  - Generate reports and health analysis"
    echo "  - Run continuous improvement processes"
}

# Function to cleanup old logs and reports
cleanup() {
    print_header "Cleaning Up Old Logs and Reports"
    
    # Clean up old PM2 logs (keep last 7 days)
    print_status "Cleaning up old PM2 logs..."
    pm2 flush
    
    # Clean up old reports (keep last 30 days)
    if [ -d "$REPORTS_DIR" ]; then
        print_status "Cleaning up old reports..."
        find "$REPORTS_DIR" -name "*.json" -mtime +30 -delete 2>/dev/null || true
    fi
    
    print_status "Cleanup completed"
}

# Function to backup current configuration
backup_config() {
    print_header "Backing Up Current Configuration"
    
    local backup_dir="backups/$(date +%Y%m%d_%H%M%S)"
    mkdir -p "$backup_dir"
    
    print_status "Backing up ecosystem config..."
    cp "$ECOSYSTEM_CONFIG" "$backup_dir/"
    
    print_status "Backing up PM2 configuration..."
    pm2 save "$backup_dir/pm2-config.json"
    
    print_status "Backup completed in $backup_dir"
}

# Function to restore from backup
restore_config() {
    local backup_dir=${1:-""}
    
    if [ -z "$backup_dir" ]; then
        print_error "Please specify backup directory"
        echo "Usage: $0 restore <backup_directory>"
        exit 1
    fi
    
    if [ ! -d "$backup_dir" ]; then
        print_error "Backup directory $backup_dir does not exist"
        exit 1
    fi
    
    print_header "Restoring from Backup: $backup_dir"
    
    print_status "Restoring ecosystem config..."
    cp "$backup_dir/ecosystem-error-prevention-automation.config.cjs" ./
    
    print_status "Restoring PM2 configuration..."
    pm2 resurrect "$backup_dir/pm2-config.json"
    
    print_status "Restore completed"
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
            show_logs "$2"
            ;;
        run-cycle)
            run_single_cycle
            ;;
        analyze)
            analyze_health
            ;;
        report)
            generate_report
            ;;
        monitor)
            monitor_system
            ;;
        check-fix)
            check_and_fix
            ;;
        cleanup)
            cleanup
            ;;
        backup)
            backup_config
            ;;
        restore)
            restore_config "$2"
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