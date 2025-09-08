#!/bin/bash

# Zion Tech Group - Intelligent PM2 Ecosystem Startup Script
# This script sets up and starts the complete intelligent automation ecosystem

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
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ECOSYSTEM_CONFIG="$PROJECT_ROOT/ecosystem.config.js"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
LOGS_DIR="$PROJECT_ROOT/automation/logs"
SCRIPTS_DIR="$PROJECT_ROOT/scripts"

# Logging function
log() {
    local level=$1
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        "INFO")
            echo -e "${GREEN}[${timestamp}] [INFO]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[${timestamp}] [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[${timestamp}] [ERROR]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${CYAN}[${timestamp}] [SUCCESS]${NC} $message"
            ;;
        "HEADER")
            echo -e "${PURPLE}[${timestamp}] [HEADER]${NC} $message"
            ;;
    esac
    
    # Also log to file
    echo "[${timestamp}] [${level}] $message" >> "$LOGS_DIR/ecosystem-startup.log"
}

# Check if running as root
check_root() {
    if [[ $EUID -eq 0 ]]; then
        log "ERROR" "This script should not be run as root"
        exit 1
    fi
}

# Check system requirements
check_requirements() {
    log "INFO" "Checking system requirements..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        log "ERROR" "npm is not installed. Please install npm first."
        exit 1
    fi
    
    # Check Node.js version
    local node_version=$(node --version | cut -d'v' -f2)
    local major_version=$(echo $node_version | cut -d'.' -f1)
    
    if [ "$major_version" -lt 16 ]; then
        log "ERROR" "Node.js version 16 or higher is required. Current version: $node_version"
        exit 1
    fi
    
    log "SUCCESS" "System requirements met - Node.js $node_version, npm $(npm --version)"
}

# Create necessary directories
create_directories() {
    log "INFO" "Creating necessary directories..."
    
    mkdir -p "$LOGS_DIR"
    mkdir -p "$AUTOMATION_DIR/backups"
    mkdir -p "$AUTOMATION_DIR/config"
    
    log "SUCCESS" "Directories created successfully"
}

# Install dependencies
install_dependencies() {
    log "INFO" "Installing project dependencies..."
    
    cd "$PROJECT_ROOT"
    
    # Install main dependencies
    if npm install; then
        log "SUCCESS" "Main dependencies installed"
    else
        log "ERROR" "Failed to install main dependencies"
        exit 1
    fi
    
    # Install server dependencies
    if [ -d "$PROJECT_ROOT/server" ]; then
        cd "$PROJECT_ROOT/server"
        if npm install; then
            log "SUCCESS" "Server dependencies installed"
        else
            log "ERROR" "Failed to install server dependencies"
            exit 1
        fi
        cd "$PROJECT_ROOT"
    fi
    
    # Install global PM2 if not present
    if ! command -v pm2 &> /dev/null; then
        log "INFO" "Installing PM2 globally..."
        if npm install -g pm2; then
            log "SUCCESS" "PM2 installed globally"
        else
            log "ERROR" "Failed to install PM2"
            exit 1
        fi
    else
        log "SUCCESS" "PM2 is already installed"
    fi
}

# Setup PM2 ecosystem
setup_pm2_ecosystem() {
    log "INFO" "Setting up PM2 ecosystem..."
    
    if [ ! -f "$ECOSYSTEM_CONFIG" ]; then
        log "ERROR" "Ecosystem config not found: $ECOSYSTEM_CONFIG"
        exit 1
    fi
    
    # Stop any existing PM2 processes
    if pm2 list | grep -q "online"; then
        log "INFO" "Stopping existing PM2 processes..."
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
    fi
    
    # Start the ecosystem
    log "INFO" "Starting PM2 ecosystem..."
    if pm2 start "$ECOSYSTEM_CONFIG"; then
        log "SUCCESS" "PM2 ecosystem started successfully"
    else
        log "ERROR" "Failed to start PM2 ecosystem"
        exit 1
    fi
    
    # Save the ecosystem
    if pm2 save; then
        log "SUCCESS" "PM2 ecosystem saved"
    else
        log "WARN" "Failed to save PM2 ecosystem"
    fi
    
    # Setup startup script
    log "INFO" "Setting up PM2 startup script..."
    if pm2 startup; then
        log "SUCCESS" "PM2 startup script configured"
    else
        log "WARN" "Failed to setup PM2 startup script"
    fi
}

# Setup development workflow automation
setup_dev_workflow() {
    log "INFO" "Setting up development workflow automation..."
    
    cd "$SCRIPTS_DIR"
    
    # Make scripts executable
    chmod +x *.js *.sh
    
    # Setup development workflow
    if node dev-workflow-automation.js setup; then
        log "SUCCESS" "Development workflow automation configured"
    else
        log "WARN" "Failed to configure development workflow automation"
    fi
}

# Start intelligent monitoring
start_intelligent_monitoring() {
    log "INFO" "Starting intelligent monitoring systems..."
    
    # Start PM2 intelligent manager in background
    cd "$SCRIPTS_DIR"
    nohup node pm2-intelligent-manager.js monitor > "$LOGS_DIR/pm2-manager.log" 2>&1 &
    local pm2_manager_pid=$!
    echo $pm2_manager_pid > "$LOGS_DIR/pm2-manager.pid"
    
    # Start performance intelligence in background
    nohup node performance-intelligence.js monitor > "$LOGS_DIR/performance-intelligence.log" 2>&1 &
    local perf_pid=$!
    echo $perf_pid > "$LOGS_DIR/performance-intelligence.pid"
    
    log "SUCCESS" "Intelligent monitoring started (PM2 Manager PID: $pm2_manager_pid, Performance PID: $perf_pid)"
}

# Verify ecosystem status
verify_ecosystem() {
    log "INFO" "Verifying ecosystem status..."
    
    # Wait a moment for processes to start
    sleep 5
    
    # Check PM2 status
    if pm2 list | grep -q "online"; then
        local online_count=$(pm2 list | grep "online" | wc -l)
        log "SUCCESS" "PM2 ecosystem verified - $online_count processes online"
        
        # Show status
        echo ""
        pm2 list
        echo ""
    else
        log "ERROR" "PM2 ecosystem verification failed - no processes online"
        exit 1
    fi
}

# Display startup information
display_startup_info() {
    log "HEADER" "🎉 Zion Tech Group Intelligent PM2 Ecosystem Started Successfully!"
    echo ""
    echo -e "${CYAN}📊 Ecosystem Status:${NC}"
    pm2 list
    echo ""
    echo -e "${CYAN}🔧 Management Commands:${NC}"
    echo "  PM2 Status:        pm2 list"
    echo "  PM2 Monitor:       pm2 monit"
    echo "  PM2 Logs:          pm2 logs"
    echo "  Restart All:       pm2 restart all"
    echo "  Stop All:          pm2 stop all"
    echo ""
    echo -e "${CYAN}🤖 Intelligent Automation:${NC}"
    echo "  Performance Analysis:  node scripts/performance-intelligence.js analyze"
    echo "  Development Tasks:     node scripts/dev-workflow-automation.js tasks"
    echo "  PM2 Manager:           node scripts/pm2-intelligent-manager.js status"
    echo ""
    echo -e "${CYAN}📁 Log Files:${NC}"
    echo "  PM2 Manager:        $LOGS_DIR/pm2-manager.log"
    echo "  Performance:        $LOGS_DIR/performance-intelligence.log"
    echo "  Development:        $LOGS_DIR/dev-workflow.log"
    echo "  Ecosystem Startup:  $LOGS_DIR/ecosystem-startup.log"
    echo ""
    echo -e "${CYAN}🌐 Access Points:${NC}"
    echo "  Frontend:          http://localhost:3000"
    echo "  Backend:           http://localhost:5000"
    echo "  Automation Dashboard: http://localhost:8080"
    echo ""
    echo -e "${GREEN}✅ All systems are now running and monitored!${NC}"
}

# Main execution
main() {
    log "HEADER" "🚀 Starting Zion Tech Group Intelligent PM2 Ecosystem"
    log "INFO" "Project Root: $PROJECT_ROOT"
    
    # Check requirements
    check_root
    check_requirements
    
    # Setup environment
    create_directories
    install_dependencies
    
    # Setup and start PM2
    setup_pm2_ecosystem
    
    # Setup development workflow
    setup_dev_workflow
    
    # Start intelligent monitoring
    start_intelligent_monitoring
    
    # Verify everything is working
    verify_ecosystem
    
    # Display startup information
    display_startup_info
    
    log "SUCCESS" "Ecosystem startup completed successfully!"
}

# Error handling
trap 'log "ERROR" "Script failed at line $LINENO"; exit 1' ERR

# Run main function
main "$@"