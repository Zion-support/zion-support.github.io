#!/bin/bash

# Zion Tech Group PM2 Automation Manager
# A comprehensive script for managing PM2 automation processes

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
ECOSYSTEM_FILE="ecosystem.config.js"
LOG_DIR="./logs"
PM2_LOG_DIR="~/.pm2/logs"

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
        print_error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        print_status "PM2 installed successfully!"
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

# Function to start all automation processes
start_all() {
    print_header "Starting All Zion Automation Processes"
    
    check_pm2
    check_ecosystem
    create_logs_dir
    
    print_status "Starting all processes from ecosystem file..."
    pm2 start $ECOSYSTEM_FILE
    
    print_status "All processes started! Use 'pm2 status' to check status."
    print_status "Use 'pm2 logs' to view logs."
}

# Function to stop all automation processes
stop_all() {
    print_header "Stopping All Zion Automation Processes"
    
    check_pm2
    
    print_status "Stopping all PM2 processes..."
    pm2 stop all
    
    print_status "All processes stopped!"
}

# Function to restart all automation processes
restart_all() {
    print_header "Restarting All Zion Automation Processes"
    
    check_pm2
    check_ecosystem
    
    print_status "Restarting all processes..."
    pm2 restart all
    
    print_status "All processes restarted!"
}

# Function to reload all automation processes
reload_all() {
    print_header "Reloading All Zion Automation Processes"
    
    check_pm2
    check_ecosystem
    
    print_status "Reloading all processes..."
    pm2 reload all
    
    print_status "All processes reloaded!"
}

# Function to show status of all processes
show_status() {
    print_header "Zion Automation Status"
    
    check_pm2
    
    echo -e "${CYAN}PM2 Process Status:${NC}"
    pm2 status
    
    echo -e "\n${CYAN}PM2 Process List:${NC}"
    pm2 list
    
    echo -e "\n${CYAN}PM2 Monit:${NC}"
    pm2 monit
}

# Function to show logs
show_logs() {
    print_header "Zion Automation Logs"
    
    check_pm2
    
    local process_name=${1:-"all"}
    
    if [ "$process_name" = "all" ]; then
        print_status "Showing logs for all processes..."
        pm2 logs
    else
        print_status "Showing logs for process: $process_name"
        pm2 logs $process_name
    fi
}

# Function to show specific process logs
show_process_logs() {
    local process_name=$1
    
    if [ -z "$process_name" ]; then
        print_error "Please specify a process name"
        echo "Available processes:"
        pm2 list --no-daemon | grep -E "^[0-9]+" | awk '{print $4}'
        exit 1
    fi
    
    show_logs $process_name
}

# Function to monitor processes
monitor() {
    print_header "Zion Automation Monitor"
    
    check_pm2
    
    print_status "Starting PM2 monitor..."
    pm2 monit
}

# Function to show process information
show_info() {
    local process_name=${1:-"all"}
    
    check_pm2
    
    if [ "$process_name" = "all" ]; then
        print_status "Showing information for all processes..."
        pm2 show
    else
        print_status "Showing information for process: $process_name"
        pm2 show $process_name
    fi
}

# Function to clean up PM2
cleanup() {
    print_header "Cleaning Up PM2"
    
    check_pm2
    
    print_warning "This will stop and delete all PM2 processes and clear logs!"
    read -p "Are you sure? (y/N): " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_status "Stopping all processes..."
        pm2 stop all
        
        print_status "Deleting all processes..."
        pm2 delete all
        
        print_status "Clearing PM2 logs..."
        pm2 flush
        
        print_status "Resetting PM2..."
        pm2 resurrect
        
        print_status "Cleanup completed!"
    else
        print_status "Cleanup cancelled."
    fi
}

# Function to backup PM2 configuration
backup() {
    print_header "Backing Up PM2 Configuration"
    
    check_pm2
    
    local backup_dir="./pm2-backup-$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$backup_dir"
    
    print_status "Creating backup in: $backup_dir"
    
    # Save PM2 processes
    pm2 save
    
    # Copy ecosystem file
    if [ -f "$ECOSYSTEM_FILE" ]; then
        cp "$ECOSYSTEM_FILE" "$backup_dir/"
    fi
    
    # Copy PM2 dump file
    if [ -f ~/.pm2/dump.pm2 ]; then
        cp ~/.pm2/dump.pm2 "$backup_dir/"
    fi
    
    # Copy logs
    if [ -d "$LOG_DIR" ]; then
        cp -r "$LOG_DIR" "$backup_dir/"
    fi
    
    print_status "Backup completed: $backup_dir"
}

# Function to restore PM2 configuration
restore() {
    local backup_dir=$1
    
    if [ -z "$backup_dir" ]; then
        print_error "Please specify backup directory"
        echo "Available backups:"
        ls -d ./pm2-backup-* 2>/dev/null || echo "No backups found"
        exit 1
    fi
    
    if [ ! -d "$backup_dir" ]; then
        print_error "Backup directory not found: $backup_dir"
        exit 1
    fi
    
    print_header "Restoring PM2 Configuration"
    
    check_pm2
    
    print_status "Restoring from backup: $backup_dir"
    
    # Restore ecosystem file
    if [ -f "$backup_dir/ecosystem.config.js" ]; then
        cp "$backup_dir/ecosystem.config.js" ./
        print_status "Ecosystem file restored"
    fi
    
    # Restore PM2 dump
    if [ -f "$backup_dir/dump.pm2" ]; then
        cp "$backup_dir/dump.pm2" ~/.pm2/
        pm2 resurrect
        print_status "PM2 processes restored"
    fi
    
    print_status "Restore completed!"
}

# Function to show system resources
show_resources() {
    print_header "System Resources"
    
    echo -e "${CYAN}Memory Usage:${NC}"
    free -h
    
    echo -e "\n${CYAN}Disk Usage:${NC}"
    df -h
    
    echo -e "\n${CYAN}CPU Usage:${NC}"
    top -bn1 | grep "Cpu(s)" | awk '{print $2}' | awk -F'%' '{print $1}'
    
    echo -e "\n${CYAN}Process Count:${NC}"
    ps aux | wc -l
}

# Function to show automation dashboard
show_dashboard() {
    print_header "Zion Automation Dashboard"
    
    check_pm2
    
    echo -e "${CYAN}Process Overview:${NC}"
    pm2 list --no-daemon
    
    echo -e "\n${CYAN}Resource Usage:${NC}"
    pm2 monit --no-daemon
    
    echo -e "\n${CYAN}Recent Logs:${NC}"
    pm2 logs --lines 10 --nostream
}

# Function to update automation processes
update() {
    print_header "Updating Zion Automation"
    
    check_pm2
    check_ecosystem
    
    print_status "Pulling latest changes..."
    git pull origin main
    
    print_status "Installing dependencies..."
    npm install
    
    print_status "Installing server dependencies..."
    cd server && npm install && cd ..
    
    print_status "Reloading processes..."
    pm2 reload all
    
    print_status "Update completed!"
}

# Function to show help
show_help() {
    print_header "Zion PM2 Automation Manager Help"
    
    echo -e "${CYAN}Usage:${NC}"
    echo "  $0 [COMMAND] [OPTIONS]"
    
    echo -e "\n${CYAN}Commands:${NC}"
    echo "  start           - Start all automation processes"
    echo "  stop            - Stop all automation processes"
    echo "  restart         - Restart all automation processes"
    echo "  reload          - Reload all automation processes (zero-downtime)"
    echo "  status          - Show status of all processes"
    echo "  logs            - Show logs for all processes"
    echo "  logs [PROCESS]  - Show logs for specific process"
    echo "  monitor         - Start PM2 monitor"
    echo "  info            - Show detailed process information"
    echo "  info [PROCESS]  - Show info for specific process"
    echo "  cleanup         - Clean up PM2 (stop, delete, clear logs)"
    echo "  backup          - Backup PM2 configuration"
    echo "  restore [DIR]   - Restore PM2 configuration from backup"
    echo "  resources       - Show system resource usage"
    echo "  dashboard       - Show automation dashboard"
    echo "  update          - Update automation processes"
    echo "  help            - Show this help message"
    
    echo -e "\n${CYAN}Examples:${NC}"
    echo "  $0 start                    # Start all processes"
    echo "  $0 logs zion-frontend-dev   # Show logs for frontend"
    echo "  $0 status                   # Show process status"
    echo "  $0 backup                   # Create backup"
    
    echo -e "\n${CYAN}Available Processes:${NC}"
    if command -v pm2 &> /dev/null; then
        pm2 list --no-daemon 2>/dev/null | grep -E "^[0-9]+" | awk '{print "  " $4}' || echo "  No processes running"
    else
        echo "  PM2 not installed"
    fi
}

# Main script logic
case "${1:-help}" in
    start)
        start_all
        ;;
    stop)
        stop_all
        ;;
    restart)
        restart_all
        ;;
    reload)
        reload_all
        ;;
    status)
        show_status
        ;;
    logs)
        show_logs "${2:-all}"
        ;;
    monitor)
        monitor
        ;;
    info)
        show_info "${2:-all}"
        ;;
    cleanup)
        cleanup
        ;;
    backup)
        backup
        ;;
    restore)
        restore "$2"
        ;;
    resources)
        show_resources
        ;;
    dashboard)
        show_dashboard
        ;;
    update)
        update
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo
        show_help
        exit 1
        ;;
esac