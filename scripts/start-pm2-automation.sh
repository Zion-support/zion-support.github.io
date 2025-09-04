#!/bin/bash

# PM2 Automation Startup Script
# This script starts the complete PM2 automation ecosystem for error prevention and monitoring

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
ECOSYSTEM_FILE="$PROJECT_ROOT/ecosystem.config.cjs"
LOG_DIR="$PROJECT_ROOT/automation/logs"

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

# Check if ecosystem file exists
check_ecosystem() {
    if [ ! -f "$ECOSYSTEM_FILE" ]; then
        error "Ecosystem file not found: $ECOSYSTEM_FILE"
        exit 1
    else
        success "Ecosystem file found: $ECOSYSTEM_FILE"
    fi
}

# Create necessary directories
setup_directories() {
    log "Setting up directories..."
    
    # Create log directory
    mkdir -p "$LOG_DIR"
    success "Log directory created: $LOG_DIR"
    
    # Create automation directory if it doesn't exist
    mkdir -p "$PROJECT_ROOT/automation"
    success "Automation directory ready"
}

# Install dependencies
install_dependencies() {
    log "Installing dependencies..."
    
    if [ -f "$PROJECT_ROOT/package.json" ]; then
        npm install
        success "Dependencies installed"
    else
        warning "No package.json found, skipping dependency installation"
    fi
}

# Stop existing PM2 processes
stop_existing() {
    log "Stopping existing PM2 processes..."
    
    # Stop all processes for this ecosystem
    pm2 stop ecosystem.config.cjs 2>/dev/null || true
    pm2 delete ecosystem.config.cjs 2>/dev/null || true
    
    success "Existing processes stopped"
}

# Start PM2 processes
start_processes() {
    log "Starting PM2 processes..."
    
    # Start the ecosystem
    pm2 start "$ECOSYSTEM_FILE" --update-env
    
    success "PM2 processes started"
}

# Setup PM2 log rotation
setup_log_rotation() {
    log "Setting up PM2 log rotation..."
    
    # Install logrotate module if not already installed
    pm2 install pm2-logrotate 2>/dev/null || true
    
    # Configure log rotation
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:workerInterval 60
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
    
    success "Log rotation configured"
}

# Show PM2 status
show_status() {
    log "PM2 Status:"
    pm2 status
    
    log "PM2 Logs (last 20 lines):"
    pm2 logs --lines 20
}

# Setup monitoring
setup_monitoring() {
    log "Setting up monitoring..."
    
    # Save PM2 configuration
    pm2 save
    
    # Generate startup script
    pm2 startup 2>/dev/null || true
    
    success "Monitoring setup completed"
}

# Main execution
main() {
    log "Starting PM2 Automation System..."
    log "Project Root: $PROJECT_ROOT"
    
    # Pre-flight checks
    check_pm2
    check_ecosystem
    setup_directories
    install_dependencies
    
    # Stop existing processes
    stop_existing
    
    # Start new processes
    start_processes
    
    # Setup additional features
    setup_log_rotation
    setup_monitoring
    
    # Show status
    show_status
    
    success "PM2 Automation System started successfully!"
    
    info "Available commands:"
    info "  pm2 status          - Show process status"
    info "  pm2 logs            - Show logs"
    info "  pm2 restart all     - Restart all processes"
    info "  pm2 stop all        - Stop all processes"
    info "  pm2 delete all      - Delete all processes"
    
    info "Log files are located in: $LOG_DIR"
}

# Handle script arguments
case "${1:-start}" in
    "start")
        main
        ;;
    "stop")
        log "Stopping PM2 processes..."
        pm2 stop ecosystem.config.cjs 2>/dev/null || true
        pm2 delete ecosystem.config.cjs 2>/dev/null || true
        success "PM2 processes stopped"
        ;;
    "restart")
        log "Restarting PM2 processes..."
        pm2 restart ecosystem.config.cjs 2>/dev/null || pm2 start ecosystem.config.cjs --update-env
        success "PM2 processes restarted"
        ;;
    "status")
        show_status
        ;;
    "logs")
        pm2 logs --lines 100
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs}"
        echo "  start   - Start PM2 automation system (default)"
        echo "  stop    - Stop PM2 processes"
        echo "  restart - Restart PM2 processes"
        echo "  status  - Show PM2 status"
        echo "  logs    - Show PM2 logs"
        exit 1
        ;;
esac