#!/bin/bash

# Intelligent PM2 Automation System Startup Script
# This script provides easy management of the intelligent PM2 automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ECOSYSTEM_FILE="ecosystem-intelligent.config.cjs"
OLD_ECOSYSTEM_FILE="ecosystem.config.cjs"
LOGS_DIR="logs"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

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
        print_error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        print_success "PM2 installed successfully"
    else
        print_success "PM2 is already installed"
    fi
}

# Function to check if ecosystem file exists
check_ecosystem_file() {
    if [ ! -f "$PROJECT_ROOT/$ECOSYSTEM_FILE" ]; then
        print_error "Ecosystem file $ECOSYSTEM_FILE not found!"
        print_error "Please ensure you have the intelligent PM2 configuration file."
        exit 1
    fi
}

# Function to create logs directory
create_logs_directory() {
    if [ ! -d "$PROJECT_ROOT/$LOGS_DIR" ]; then
        print_status "Creating logs directory..."
        mkdir -p "$PROJECT_ROOT/$LOGS_DIR"
        print_success "Logs directory created"
    fi
}

# Function to stop old PM2 processes
stop_old_processes() {
    print_status "Stopping old PM2 processes..."
    
    # Check if there are any running processes
    if pm2 list | grep -q "online\|launching\|stopped"; then
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
        print_success "Old PM2 processes stopped and removed"
    else
        print_status "No old PM2 processes found"
    fi
}

# Function to start intelligent PM2 system
start_intelligent_system() {
    print_status "Starting Intelligent PM2 Automation System..."
    
    cd "$PROJECT_ROOT"
    
    # Start the intelligent system
    pm2 start "$ECOSYSTEM_FILE"
    
    if [ $? -eq 0 ]; then
        print_success "Intelligent PM2 system started successfully"
    else
        print_error "Failed to start Intelligent PM2 system"
        exit 1
    fi
}

# Function to save PM2 configuration
save_pm2_config() {
    print_status "Saving PM2 configuration..."
    pm2 save
    
    if [ $? -eq 0 ]; then
        print_success "PM2 configuration saved"
    else
        print_warning "Failed to save PM2 configuration"
    fi
}

# Function to setup PM2 startup
setup_pm2_startup() {
    print_status "Setting up PM2 startup configuration..."
    
    # Check if startup is already configured
    if ! pm2 startup | grep -q "already inited"; then
        pm2 startup
        print_success "PM2 startup configured"
    else
        print_status "PM2 startup already configured"
    fi
}

# Function to display system status
show_status() {
    print_status "Intelligent PM2 System Status:"
    echo ""
    pm2 list
    echo ""
    
    # Show process details
    print_status "Process Details:"
    pm2 show intelligent-health-monitor 2>/dev/null || print_warning "Health monitor not running"
    echo ""
}

# Function to show logs
show_logs() {
    local process_name=${1:-"all"}
    
    if [ "$process_name" = "all" ]; then
        print_status "Showing logs for all processes (last 50 lines):"
        pm2 logs --lines 50
    else
        print_status "Showing logs for $process_name (last 50 lines):"
        pm2 logs "$process_name" --lines 50
    fi
}

# Function to restart system
restart_system() {
    print_status "Restarting Intelligent PM2 System..."
    
    cd "$PROJECT_ROOT"
    
    # Stop all processes
    pm2 stop all 2>/dev/null || true
    
    # Start the system again
    pm2 start "$ECOSYSTEM_FILE"
    
    if [ $? -eq 0 ]; then
        print_success "System restarted successfully"
    else
        print_error "Failed to restart system"
        exit 1
    fi
}

# Function to stop system
stop_system() {
    print_status "Stopping Intelligent PM2 System..."
    
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    print_success "System stopped successfully"
}

# Function to monitor system
monitor_system() {
    print_status "Starting PM2 monitor..."
    pm2 monit
}

# Function to clean logs
clean_logs() {
    print_status "Cleaning old log files..."
    
    if [ -d "$PROJECT_ROOT/$LOGS_DIR" ]; then
        # Remove log files older than 7 days
        find "$PROJECT_ROOT/$LOGS_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null || true
        print_success "Old log files cleaned"
    else
        print_warning "Logs directory not found"
    fi
}

# Function to show help
show_help() {
    echo "Intelligent PM2 Automation System Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start       Start the intelligent PM2 automation system"
    echo "  stop        Stop all PM2 processes"
    echo "  restart     Restart the intelligent PM2 system"
    echo "  status      Show system status"
    echo "  logs        Show logs (all processes)"
    echo "  logs <name> Show logs for specific process"
    echo "  monitor     Start PM2 monitor"
    echo "  clean       Clean old log files"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start the system"
    echo "  $0 logs intelligent-health-monitor  # Show health monitor logs"
    echo "  $0 status                   # Show system status"
    echo ""
}

# Function to migrate from old system
migrate_from_old() {
    print_status "Migrating from old PM2 system to Intelligent PM2 system..."
    
    # Check if old ecosystem file exists
    if [ -f "$PROJECT_ROOT/$OLD_ECOSYSTEM_FILE" ]; then
        print_warning "Old ecosystem file found: $OLD_ECOSYSTEM_FILE"
        print_status "Backing up old configuration..."
        cp "$PROJECT_ROOT/$OLD_ECOSYSTEM_FILE" "$PROJECT_ROOT/${OLD_ECOSYSTEM_FILE}.backup.$(date +%s)"
        
        print_status "Stopping old system..."
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
        
        print_status "Starting intelligent system..."
        start_intelligent_system
        
        print_success "Migration completed successfully"
        print_warning "Old configuration backed up. You can remove it after verifying the new system works."
    else
        print_status "No old ecosystem file found, starting fresh..."
        start_intelligent_system
    fi
}

# Main script logic
main() {
    local command=${1:-"start"}
    
    print_status "Intelligent PM2 Automation System Management Script"
    print_status "Project Root: $PROJECT_ROOT"
    echo ""
    
    case "$command" in
        "start")
            check_pm2
            check_ecosystem_file
            create_logs_directory
            stop_old_processes
            start_intelligent_system
            save_pm2_config
            setup_pm2_startup
            show_status
            print_success "Intelligent PM2 system is now running!"
            print_status "Use '$0 status' to check status, '$0 logs' to view logs"
            ;;
        "stop")
            stop_system
            ;;
        "restart")
            restart_system
            save_pm2_config
            show_status
            ;;
        "status")
            show_status
            ;;
        "logs")
            local process_name=${2:-"all"}
            show_logs "$process_name"
            ;;
        "monitor")
            monitor_system
            ;;
        "clean")
            clean_logs
            ;;
        "migrate")
            migrate_from_old
            ;;
        "help"|"-h"|"--help")
            show_help
            ;;
        *)
            print_error "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Check if script is run from project root
if [ ! -f "package.json" ] && [ ! -f "ecosystem-intelligent.config.cjs" ]; then
    print_error "This script must be run from the project root directory"
    print_error "Please navigate to the project root and run: ./scripts/start-intelligent-pm2.sh"
    exit 1
fi

# Run main function with all arguments
main "$@"