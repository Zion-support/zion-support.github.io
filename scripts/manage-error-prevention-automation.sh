#!/bin/bash

# Error Prevention Automation Management Script
# This script provides comprehensive management of PM2-based error prevention automation

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
ECOSYSTEM_FILE="ecosystem-error-prevention-enhanced.cjs"
LOGS_DIR="./logs"
REPORTS_DIR="./reports"
BACKUP_DIR="./backups"

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

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p "$LOGS_DIR"
    mkdir -p "$REPORTS_DIR"
    mkdir -p "$BACKUP_DIR"
    
    print_status "Directories created successfully"
}

# Function to install required dependencies
install_dependencies() {
    print_status "Installing required dependencies..."
    
    # Install chokidar for file watching
    if ! npm list chokidar &> /dev/null; then
        npm install --save-dev chokidar
        print_status "Installed chokidar"
    fi
    
    # Install glob for file pattern matching
    if ! npm list glob &> /dev/null; then
        npm install --save-dev glob
        print_status "Installed glob"
    fi
    
    print_status "Dependencies installed successfully"
}

# Function to start all automation services
start_automation() {
    print_header "Starting Error Prevention Automation"
    
    check_pm2
    create_directories
    install_dependencies
    
    print_status "Starting PM2 ecosystem..."
    
    if pm2 list | grep -q "error-prevention"; then
        print_warning "Automation services are already running. Restarting..."
        pm2 restart ecosystem-error-prevention-enhanced.cjs
    else
        pm2 start ecosystem-error-prevention-enhanced.cjs
    fi
    
    print_status "Waiting for services to start..."
    sleep 5
    
    pm2 status
    print_status "Automation services started successfully"
}

# Function to stop all automation services
stop_automation() {
    print_header "Stopping Error Prevention Automation"
    
    check_pm2
    
    print_status "Stopping PM2 ecosystem..."
    
    if pm2 list | grep -q "error-prevention"; then
        pm2 stop ecosystem-error-prevention-enhanced.cjs
        print_status "Automation services stopped successfully"
    else
        print_warning "No automation services are currently running"
    fi
}

# Function to restart all automation services
restart_automation() {
    print_header "Restarting Error Prevention Automation"
    
    check_pm2
    
    print_status "Restarting PM2 ecosystem..."
    
    if pm2 list | grep -q "error-prevention"; then
        pm2 restart ecosystem-error-prevention-enhanced.cjs
        print_status "Automation services restarted successfully"
    else
        print_warning "No automation services are currently running. Starting them..."
        start_automation
    fi
}

# Function to show status of automation services
show_status() {
    print_header "Error Prevention Automation Status"
    
    check_pm2
    
    echo ""
    print_status "PM2 Status:"
    pm2 status
    
    echo ""
    print_status "PM2 Logs (last 20 lines):"
    pm2 logs --lines 20
    
    echo ""
    print_status "Recent Error Fix Reports:"
    if [ -f "$LOGS_DIR/error-fix-report.json" ]; then
        echo "Error Fix Report: $LOGS_DIR/error-fix-report.json"
    fi
    
    if [ -f "$LOGS_DIR/real-time-monitor-health.json" ]; then
        echo "Real-time Monitor Health: $LOGS_DIR/real-time-monitor-health.json"
    fi
}

# Function to show logs
show_logs() {
    print_header "Error Prevention Automation Logs"
    
    check_pm2
    
    local service_name="${1:-all}"
    
    if [ "$service_name" = "all" ]; then
        print_status "Showing logs for all services..."
        pm2 logs --lines 50
    else
        print_status "Showing logs for service: $service_name"
        pm2 logs "$service_name" --lines 50
    fi
}

# Function to monitor automation services
monitor_automation() {
    print_header "Monitoring Error Prevention Automation"
    
    check_pm2
    
    print_status "Starting PM2 monitoring dashboard..."
    pm2 monit
}

# Function to generate health report
generate_health_report() {
    print_header "Generating Health Report"
    
    check_pm2
    
    local timestamp=$(date +"%Y%m%d_%H%M%S")
    local report_file="$REPORTS_DIR/health_report_$timestamp.json"
    
    print_status "Generating comprehensive health report..."
    
    # Create health report
    cat > "$report_file" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "pm2_status": $(pm2 jlist),
  "system_info": {
    "node_version": "$(node --version)",
    "npm_version": "$(npm --version)",
    "pm2_version": "$(pm2 --version)",
    "disk_usage": "$(df -h . | tail -1)",
    "memory_usage": "$(free -h | grep Mem | awk '{print $3"/"$2}')"
  },
  "automation_services": [
    "error-prevention-orchestrator-enhanced",
    "real-time-error-monitor",
    "intelligent-code-quality-fixer",
    "automated-testing-validation",
    "performance-security-scanner",
    "code-style-formatting-enforcer",
    "dependency-security-manager",
    "health-check-monitoring-dashboard"
  ]
}
EOF
    
    print_status "Health report generated: $report_file"
}

# Function to backup current state
backup_state() {
    print_header "Backing Up Current State"
    
    local timestamp=$(date +"%Y%m%d_%H%M%S")
    local backup_path="$BACKUP_DIR/backup_$timestamp"
    
    print_status "Creating backup at: $backup_path"
    
    mkdir -p "$backup_path"
    
    # Backup PM2 configuration
    if [ -f "$ECOSYSTEM_FILE" ]; then
        cp "$ECOSYSTEM_FILE" "$backup_path/"
    fi
    
    # Backup logs
    if [ -d "$LOGS_DIR" ]; then
        cp -r "$LOGS_DIR" "$backup_path/"
    fi
    
    # Backup reports
    if [ -d "$REPORTS_DIR" ]; then
        cp -r "$REPORTS_DIR" "$backup_path/"
    fi
    
    # Backup package files
    if [ -f "package.json" ]; then
        cp package.json "$backup_path/"
    fi
    
    if [ -f "package-lock.json" ]; then
        cp package-lock.json "$backup_path/"
    fi
    
    print_status "Backup completed successfully"
}

# Function to restore from backup
restore_from_backup() {
    print_header "Restoring From Backup"
    
    local backup_path="$1"
    
    if [ -z "$backup_path" ]; then
        print_error "Please specify a backup path"
        echo "Usage: $0 restore <backup_path>"
        exit 1
    fi
    
    if [ ! -d "$backup_path" ]; then
        print_error "Backup directory not found: $backup_path"
        exit 1
    fi
    
    print_status "Restoring from backup: $backup_path"
    
    # Stop current services
    stop_automation
    
    # Restore files
    if [ -f "$backup_path/$ECOSYSTEM_FILE" ]; then
        cp "$backup_path/$ECOSYSTEM_FILE" ./
    fi
    
    if [ -d "$backup_path/logs" ]; then
        cp -r "$backup_path/logs" ./
    fi
    
    if [ -d "$backup_path/reports" ]; then
        cp -r "$backup_path/reports" ./
    fi
    
    if [ -f "$backup_path/package.json" ]; then
        cp "$backup_path/package.json" ./
    fi
    
    if [ -f "$backup_path/package-lock.json" ]; then
        cp "$backup_path/package-lock.json" ./
    fi
    
    print_status "Restore completed successfully"
    
    # Start services
    start_automation
}

# Function to clean up old logs and reports
cleanup() {
    print_header "Cleaning Up Old Files"
    
    print_status "Cleaning up old logs and reports..."
    
    # Remove logs older than 30 days
    find "$LOGS_DIR" -name "*.log" -mtime +30 -delete 2>/dev/null || true
    
    # Remove reports older than 30 days
    find "$REPORTS_DIR" -name "*.json" -mtime +30 -delete 2>/dev/null || true
    
    # Remove backups older than 7 days
    find "$BACKUP_DIR" -name "backup_*" -mtime +7 -delete 2>/dev/null || true
    
    print_status "Cleanup completed successfully"
}

# Function to show help
show_help() {
    print_header "Error Prevention Automation Management"
    
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo "  start           - Start all automation services"
    echo "  stop            - Stop all automation services"
    echo "  restart         - Restart all automation services"
    echo "  status          - Show status of automation services"
    echo "  logs [SERVICE]  - Show logs (all services or specific service)"
    echo "  monitor         - Open PM2 monitoring dashboard"
    echo "  health          - Generate health report"
    echo "  backup          - Create backup of current state"
    echo "  restore <PATH>  - Restore from backup"
    echo "  cleanup         - Clean up old logs and reports"
    echo "  help            - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start all services"
    echo "  $0 logs                     # Show all logs"
    echo "  $0 logs real-time-error-monitor  # Show specific service logs"
    echo "  $0 backup                   # Create backup"
    echo "  $0 restore ./backups/backup_20231201_120000  # Restore from backup"
    echo ""
    echo "Environment Variables:"
    echo "  PM2_HOME       - PM2 home directory"
    echo "  NODE_ENV       - Node environment (production/development)"
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
    monitor)
        monitor_automation
        ;;
    health)
        generate_health_report
        ;;
    backup)
        backup_state
        ;;
    restore)
        restore_from_backup "$2"
        ;;
    cleanup)
        cleanup
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