#!/bin/bash

# PM2 Sync Automation System Startup Script
# Comprehensive automation that solves all issues and keeps changes synced with repository

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOG_DIR="$PROJECT_ROOT/logs"
PM2_CONFIG="$PROJECT_ROOT/ecosystem.config.cjs"
PM2_APP_NAME="pm2-sync-automation"
PM2_MONITOR_NAME="pm2-sync-monitor"

# Functions
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✓${NC} $1"
}

warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

error() {
    echo -e "${RED}✗${NC} $1"
}

check_dependencies() {
    log "Checking dependencies..."
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    # Check if npm is installed
    if ! command -v npm &> /dev/null; then
        error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        warning "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
    fi
    
    # Check if git is installed
    if ! command -v git &> /dev/null; then
        error "Git is not installed. Please install Git first."
        exit 1
    fi
    
    success "All dependencies are satisfied"
}

setup_environment() {
    log "Setting up environment..."
    
    # Create log directory
    mkdir -p "$LOG_DIR"
    
    # Create logs directory if it doesn't exist
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        success "Created log directory: $LOG_DIR"
    fi
    
    # Check if .env file exists
    if [ ! -f "$PROJECT_ROOT/.env" ]; then
        warning "No .env file found. Creating default .env file..."
        cat > "$PROJECT_ROOT/.env" << EOF
# PM2 Sync Automation Environment Variables
NODE_ENV=production
AUTOMATION_INTERVAL=30000
BUILD_INTERVAL=300000
TEST_INTERVAL=600000
SECURITY_INTERVAL=1800000
MONITOR_INTERVAL=60000
EOF
        success "Created default .env file"
    fi
    
    # Install project dependencies
    if [ ! -d "$PROJECT_ROOT/node_modules" ]; then
        log "Installing project dependencies..."
        cd "$PROJECT_ROOT"
        npm install
        success "Project dependencies installed"
    fi
    
    success "Environment setup completed"
}

check_git_repository() {
    log "Checking Git repository status..."
    
    cd "$PROJECT_ROOT"
    
    # Check if this is a git repository
    if [ ! -d ".git" ]; then
        warning "Not a Git repository. Initializing..."
        git init
        git remote add origin https://github.com/Zion-Holdings/zion.app.git
        success "Git repository initialized"
    fi
    
    # Check remote connection
    if ! git remote get-url origin &> /dev/null; then
        warning "No remote origin found. Adding..."
        git remote add origin https://github.com/Zion-Holdings/zion.app.git
        success "Remote origin added"
    fi
    
    # Fetch latest changes
    log "Fetching latest changes from remote..."
    git fetch origin || warning "Failed to fetch from remote (this is normal for new repositories)"
    
    success "Git repository status checked"
}

start_pm2_system() {
    log "Starting PM2 Sync Automation System..."
    
    cd "$PROJECT_ROOT"
    
    # Stop any existing PM2 processes
    if pm2 list | grep -q "$PM2_APP_NAME\|$PM2_MONITOR_NAME"; then
        log "Stopping existing PM2 processes..."
        pm2 stop "$PM2_APP_NAME" "$PM2_MONITOR_NAME" 2>/dev/null || true
        pm2 delete "$PM2_APP_NAME" "$PM2_MONITOR_NAME" 2>/dev/null || true
    fi
    
    # Start the PM2 system using ecosystem config
    log "Starting PM2 processes from ecosystem config..."
    pm2 start ecosystem.config.cjs
    
    # Wait for processes to start
    sleep 5
    
    # Check if processes are running
    if pm2 list | grep -q "$PM2_APP_NAME.*online"; then
        success "PM2 Sync Automation started successfully"
    else
        error "Failed to start PM2 Sync Automation"
        pm2 logs "$PM2_APP_NAME" --lines 10
        exit 1
    fi
    
    if pm2 list | grep -q "$PM2_MONITOR_NAME.*online"; then
        success "PM2 Sync Monitor started successfully"
    else
        error "Failed to start PM2 Sync Monitor"
        pm2 logs "$PM2_MONITOR_NAME" --lines 10
        exit 1
    fi
    
    success "PM2 Sync Automation System started successfully"
}

setup_pm2_logrotate() {
    log "Setting up PM2 log rotation..."
    
    # Install pm2-logrotate if not already installed
    if ! pm2 list | grep -q "pm2-logrotate"; then
        pm2 install pm2-logrotate
        success "PM2 logrotate installed"
    fi
    
    # Configure log rotation
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 7
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:date_format YYYY-MM-DD_HH-mm-ss
    
    success "PM2 log rotation configured"
}

show_status() {
    log "PM2 Sync Automation System Status:"
    echo
    
    # Show PM2 process list
    pm2 list
    
    echo
    
    # Show system information
    log "System Information:"
    echo "  Project Root: $PROJECT_ROOT"
    echo "  Log Directory: $LOG_DIR"
    echo "  PM2 Config: $PM2_CONFIG"
    echo "  Node Version: $(node --version)"
    echo "  NPM Version: $(npm --version)"
    echo "  PM2 Version: $(pm2 --version)"
    
    echo
    
    # Show health check endpoints
    log "Health Check Endpoints:"
    echo "  Monitor Health: http://localhost:3001/health"
    echo "  Monitor Metrics: http://localhost:3001/metrics"
    
    echo
    
    # Show useful commands
    log "Useful Commands:"
    echo "  View logs: pm2 logs"
    echo "  Monitor processes: pm2 monit"
    echo "  Restart system: pm2 restart all"
    echo "  Stop system: pm2 stop all"
    echo "  Delete system: pm2 delete all"
}

setup_automation() {
    log "Setting up automation scripts..."
    
    # Make automation scripts executable
    chmod +x "$PROJECT_ROOT/scripts/automation/pm2-sync-automation.cjs"
    chmod +x "$PROJECT_ROOT/scripts/automation/pm2-sync-monitor.cjs"
    
    # Create automation shortcuts
    cat > "$PROJECT_ROOT/scripts/pm2-sync-start.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
pm2 start ecosystem.config.cjs
EOF
    
    cat > "$PROJECT_ROOT/scripts/pm2-sync-stop.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
pm2 stop all
pm2 delete all
EOF
    
    cat > "$PROJECT_ROOT/scripts/pm2-sync-restart.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
pm2 restart all
EOF
    
    cat > "$PROJECT_ROOT/scripts/pm2-sync-logs.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
pm2 logs
EOF
    
    # Make shortcuts executable
    chmod +x "$PROJECT_ROOT/scripts/pm2-sync-start.sh"
    chmod +x "$PROJECT_ROOT/scripts/pm2-sync-stop.sh"
    chmod +x "$PROJECT_ROOT/scripts/pm2-sync-restart.sh"
    chmod +x "$PROJECT_ROOT/scripts/pm2-sync-logs.sh"
    
    success "Automation scripts setup completed"
}

main() {
    echo -e "${BLUE}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                PM2 Sync Automation System                   ║"
    echo "║           Comprehensive Repository Sync Solution             ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    
    log "Starting PM2 Sync Automation System setup..."
    
    # Check dependencies
    check_dependencies
    
    # Setup environment
    setup_environment
    
    # Check git repository
    check_git_repository
    
    # Setup PM2 log rotation
    setup_pm2_logrotate
    
    # Start PM2 system
    start_pm2_system
    
    # Setup automation
    setup_automation
    
    # Show status
    show_status
    
    echo
    success "PM2 Sync Automation System is now running!"
    echo
    log "The system will automatically:"
    echo "  • Watch for file changes and sync them to the repository"
    echo "  • Monitor system health and resolve issues automatically"
    echo "  • Run builds, tests, and security scans"
    echo "  • Keep everything synchronized and up-to-date"
    echo
    log "Use 'pm2 monit' to monitor the system in real-time"
    log "Use 'pm2 logs' to view system logs"
    echo
}

# Handle script arguments
case "${1:-}" in
    "stop")
        log "Stopping PM2 Sync Automation System..."
        cd "$PROJECT_ROOT"
        pm2 stop all
        pm2 delete all
        success "PM2 Sync Automation System stopped"
        ;;
    "restart")
        log "Restarting PM2 Sync Automation System..."
        cd "$PROJECT_ROOT"
        pm2 restart all
        success "PM2 Sync Automation System restarted"
        ;;
    "status")
        cd "$PROJECT_ROOT"
        show_status
        ;;
    "logs")
        cd "$PROJECT_ROOT"
        pm2 logs
        ;;
    "monitor")
        cd "$PROJECT_ROOT"
        pm2 monit
        ;;
    "help"|"-h"|"--help")
        echo "Usage: $0 [command]"
        echo
        echo "Commands:"
        echo "  start   - Start the PM2 Sync Automation System (default)"
        echo "  stop    - Stop the PM2 Sync Automation System"
        echo "  restart - Restart the PM2 Sync Automation System"
        echo "  status  - Show system status"
        echo "  logs    - Show system logs"
        echo "  monitor - Open PM2 monitoring interface"
        echo "  help    - Show this help message"
        echo
        echo "Examples:"
        echo "  $0              # Start the system"
        echo "  $0 stop         # Stop the system"
        echo "  $0 status       # Show status"
        echo "  $0 logs         # Show logs"
        ;;
    *)
        main
        ;;
esac
