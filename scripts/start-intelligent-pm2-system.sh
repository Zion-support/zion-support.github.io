#!/bin/bash

# Intelligent PM2 System Startup Script
# This script starts the complete intelligent PM2 automation ecosystem

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Project configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
INTELLIGENT_ECOSYSTEM="$PROJECT_ROOT/ecosystem.intelligent.cjs"
LOGS_DIR="$PROJECT_ROOT/logs"
SCRIPTS_DIR="$PROJECT_ROOT/scripts"

# Logging functions
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        error "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
        success "PM2 installed successfully"
    else
        info "PM2 is already installed"
    fi
}

# Check if we're in the project directory
check_project_directory() {
    if [[ ! -f "$PROJECT_ROOT/package.json" ]]; then
        error "package.json not found. Please run this script from the project root."
        exit 1
    fi
    
    if [[ ! -f "$INTELLIGENT_ECOSYSTEM" ]]; then
        error "Intelligent ecosystem config not found: $INTELLIGENT_ECOSYSTEM"
        exit 1
    fi
    
    success "Project directory validated"
}

# Create necessary directories
create_directories() {
    log "Creating necessary directories..."
    
    mkdir -p "$LOGS_DIR"
    mkdir -p "$PROJECT_ROOT/automation-reports"
    mkdir -p "$PROJECT_ROOT/security-reports"
    mkdir -p "$PROJECT_ROOT/quality-reports"
    mkdir -p "$PROJECT_ROOT/backups"
    mkdir -p "$PROJECT_ROOT/performance-reports"
    
    success "Directories created successfully"
}

# Install dependencies
install_dependencies() {
    log "Installing dependencies..."
    
    if [[ -f "$PROJECT_ROOT/package-lock.json" ]]; then
        npm ci
    else
        npm install
    fi
    
    success "Dependencies installed successfully"
}

# Setup PM2 log rotation
setup_log_rotation() {
    log "Setting up PM2 log rotation..."
    
    pm2 install pm2-logrotate || true
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:workerInterval 60
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
    
    success "PM2 log rotation configured"
}

# Stop existing PM2 processes
stop_existing_processes() {
    log "Stopping existing PM2 processes..."
    
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    success "Existing processes stopped"
}

# Start intelligent PM2 ecosystem
start_intelligent_ecosystem() {
    log "Starting intelligent PM2 ecosystem..."
    
    # Start the intelligent ecosystem
    pm2 start "$INTELLIGENT_ECOSYSTEM" --update-env
    
    # Wait a moment for processes to start
    sleep 5
    
    # Check status
    pm2 status
    
    success "Intelligent PM2 ecosystem started"
}

# Setup monitoring
setup_monitoring() {
    log "Setting up monitoring..."
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup || true
    
    success "Monitoring setup completed"
}

# Display system information
display_system_info() {
    log "System Information:"
    
    echo -e "${CYAN}Project Root:${NC} $PROJECT_ROOT"
    echo -e "${CYAN}Ecosystem Config:${NC} $INTELLIGENT_ECOSYSTEM"
    echo -e "${CYAN}Logs Directory:${NC} $LOGS_DIR"
    echo -e "${CYAN}Node Version:${NC} $(node --version)"
    echo -e "${CYAN}NPM Version:${NC} $(npm --version)"
    echo -e "${CYAN}PM2 Version:${NC} $(pm2 --version)"
    echo -e "${CYAN}System:${NC} $(uname -a)"
}

# Display running processes
display_processes() {
    log "Running Processes:"
    
    pm2 status
    
    echo -e "\n${CYAN}Process Details:${NC}"
    pm2 list
}

# Display useful commands
display_commands() {
    log "Useful Commands:"
    
    echo -e "${CYAN}View logs:${NC} pm2 logs"
    echo -e "${CYAN}Restart all:${NC} pm2 restart all"
    echo -e "${CYAN}Stop all:${NC} pm2 stop all"
    echo -e "${CYAN}Delete all:${NC} pm2 delete all"
    echo -e "${CYAN}Monitor:${NC} pm2 monit"
    echo -e "${CYAN}Save config:${NC} pm2 save"
    echo -e "${CYAN}Reload config:${NC} pm2 reload all"
}

# Health check
health_check() {
    log "Performing health check..."
    
    # Check if all processes are online
    local offline_processes=$(pm2 jlist | jq -r '.[] | select(.pm2_env.status != "online") | .name' 2>/dev/null || echo "")
    
    if [[ -n "$offline_processes" ]]; then
        warning "Some processes are offline: $offline_processes"
        return 1
    else
        success "All processes are online"
        return 0
    fi
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 Starting Intelligent PM2 System${NC}"
    echo -e "${PURPLE}====================================${NC}"
    
    # Pre-flight checks
    check_pm2
    check_project_directory
    
    # Setup
    create_directories
    install_dependencies
    setup_log_rotation
    
    # Stop existing processes
    stop_existing_processes
    
    # Start intelligent ecosystem
    start_intelligent_ecosystem
    
    # Setup monitoring
    setup_monitoring
    
    # Display information
    echo -e "\n${PURPLE}📊 System Status${NC}"
    echo -e "${PURPLE}================${NC}"
    
    display_system_info
    echo ""
    display_processes
    echo ""
    display_commands
    
    # Health check
    echo -e "\n${PURPLE}🏥 Health Check${NC}"
    echo -e "${PURPLE}================${NC}"
    
    if health_check; then
        success "Intelligent PM2 System started successfully!"
        echo -e "\n${GREEN}🎉 Your intelligent automation system is now running!${NC}"
        echo -e "${GREEN}   All processes are monitored and will auto-recover from failures.${NC}"
        echo -e "${GREEN}   Check the logs directory for detailed monitoring information.${NC}"
    else
        warning "Some processes may not be running correctly. Check the logs for details."
    fi
    
    echo -e "\n${CYAN}📝 Next Steps:${NC}"
    echo -e "${CYAN}1. Monitor the system: pm2 monit${NC}"
    echo -e "${CYAN}2. Check logs: pm2 logs${NC}"
    echo -e "${CYAN}3. View automation reports in the logs/ directory${NC}"
    echo -e "${CYAN}4. Configure additional settings in ecosystem.intelligent.cjs${NC}"
}

# Handle script arguments
case "${1:-}" in
    "stop")
        log "Stopping intelligent PM2 system..."
        pm2 stop all
        pm2 delete all
        success "Intelligent PM2 system stopped"
        ;;
    "restart")
        log "Restarting intelligent PM2 system..."
        pm2 restart all
        success "Intelligent PM2 system restarted"
        ;;
    "status")
        log "Intelligent PM2 system status:"
        pm2 status
        ;;
    "logs")
        pm2 logs --lines 100
        ;;
    "monitor")
        pm2 monit
        ;;
    "health")
        health_check
        ;;
    *)
        main
        ;;
esac