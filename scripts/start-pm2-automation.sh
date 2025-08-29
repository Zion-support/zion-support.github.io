#!/bin/bash

# PM2 Automation System Startup Script
# This script sets up and starts the complete PM2 automation ecosystem

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
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
LOGS_DIR="$AUTOMATION_DIR/logs"
PM2_MANAGER="$SCRIPT_DIR/pm2-intelligent-manager.js"
PM2_ORCHESTRATOR="$AUTOMATION_DIR/pm2-enhanced-orchestrator.cjs"
PM2_DEPLOYER="$SCRIPT_DIR/pm2-smart-deployer.js"
ECOSYSTEM_CONFIG="$PROJECT_ROOT/ecosystem.config.js"

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

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check Node.js version
check_node_version() {
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js version 18+ is required. Current version: $(node --version)"
        exit 1
    fi
    
    print_status "Node.js version: $(node --version)"
}

# Function to check and install PM2
check_and_install_pm2() {
    if ! command_exists pm2; then
        print_warning "PM2 is not installed. Installing globally..."
        npm install -g pm2
        
        if ! command_exists pm2; then
            print_error "Failed to install PM2. Please install manually: npm install -g pm2"
            exit 1
        fi
    fi
    
    print_status "PM2 version: $(pm2 --version)"
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p "$LOGS_DIR"
    mkdir -p "$AUTOMATION_DIR/backups"
    
    print_status "Directories created successfully"
}

# Function to check ecosystem configuration
check_ecosystem_config() {
    if [ ! -f "$ECOSYSTEM_CONFIG" ]; then
        print_error "ecosystem.config.js not found at $ECOSYSTEM_CONFIG"
        exit 1
    fi
    
    print_status "Ecosystem configuration found"
}

# Function to install dependencies
install_dependencies() {
    print_status "Installing project dependencies..."
    
    cd "$PROJECT_ROOT"
    
    # Install root dependencies
    if [ -f "package.json" ]; then
        print_status "Installing root dependencies..."
        npm install
    fi
    
    # Install server dependencies
    if [ -d "server" ] && [ -f "server/package.json" ]; then
        print_status "Installing server dependencies..."
        cd server
        npm install
        cd "$PROJECT_ROOT"
    fi
    
    print_status "Dependencies installed successfully"
}

# Function to setup PM2 environment
setup_pm2_environment() {
    print_status "Setting up PM2 environment..."
    
    # Generate PM2 startup script
    pm2 startup
    
    # Save current PM2 configuration
    pm2 save
    
    print_status "PM2 environment setup completed"
}

# Function to start PM2 applications
start_pm2_apps() {
    print_status "Starting PM2 applications..."
    
    cd "$PROJECT_ROOT"
    
    # Start all applications using ecosystem config
    pm2 start ecosystem.config.js
    
    # Wait for apps to start
    sleep 5
    
    # Save PM2 configuration
    pm2 save
    
    print_status "PM2 applications started successfully"
}

# Function to start enhanced orchestrator
start_enhanced_orchestrator() {
    print_status "Starting enhanced orchestrator..."
    
    if [ -f "$PM2_ORCHESTRATOR" ]; then
        cd "$AUTOMATION_DIR"
        node pm2-enhanced-orchestrator.cjs start &
        ORCHESTRATOR_PID=$!
        echo $ORCHESTRATOR_PID > "$LOGS_DIR/orchestrator.pid"
        print_status "Enhanced orchestrator started (PID: $ORCHESTRATOR_PID)"
    else
        print_warning "Enhanced orchestrator not found, skipping..."
    fi
}

# Function to perform health checks
perform_health_checks() {
    print_status "Performing health checks..."
    
    # Wait a bit for apps to fully start
    sleep 10
    
    # Check PM2 status
    if pm2 status | grep -q "online"; then
        print_status "PM2 applications are running"
    else
        print_warning "Some PM2 applications may not be running properly"
    fi
    
    # Check if orchestrator is running
    if [ -f "$LOGS_DIR/orchestrator.pid" ]; then
        ORCHESTRATOR_PID=$(cat "$LOGS_DIR/orchestrator.pid")
        if ps -p $ORCHESTRATOR_PID > /dev/null; then
            print_status "Enhanced orchestrator is running (PID: $ORCHESTRATOR_PID)"
        else
            print_warning "Enhanced orchestrator is not running"
        fi
    fi
}

# Function to show status
show_status() {
    print_header "PM2 Automation System Status"
    
    echo -e "${CYAN}PM2 Applications:${NC}"
    pm2 status
    
    echo -e "\n${CYAN}Enhanced Orchestrator:${NC}"
    if [ -f "$LOGS_DIR/orchestrator.pid" ]; then
        ORCHESTRATOR_PID=$(cat "$LOGS_DIR/orchestrator.pid")
        if ps -p $ORCHESTRATOR_PID > /dev/null; then
            echo -e "${GREEN}✅ Running (PID: $ORCHESTRATOR_PID)${NC}"
        else
            echo -e "${RED}❌ Not running${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️ PID file not found${NC}"
    fi
    
    echo -e "\n${CYAN}Log Files:${NC}"
    if [ -d "$LOGS_DIR" ]; then
        ls -la "$LOGS_DIR" | grep -E "\.(log|json)$" | head -10
    fi
    
    echo -e "\n${CYAN}Available Commands:${NC}"
    echo -e "  ${GREEN}pm2 status${NC} - Show PM2 status"
    echo -e "  ${GREEN}pm2 monit${NC} - Open PM2 monitoring"
    echo -e "  ${GREEN}pm2 logs${NC} - Show PM2 logs"
    echo -e "  ${GREEN}node $PM2_MANAGER status${NC} - Show intelligent manager status"
    echo -e "  ${GREEN}node $PM2_ORCHESTRATOR status${NC} - Show orchestrator status"
    echo -e "  ${GREEN}node $PM2_DEPLOYER status${NC} - Show deployment status"
}

# Function to stop all services
stop_all_services() {
    print_header "Stopping All Services"
    
    # Stop enhanced orchestrator
    if [ -f "$LOGS_DIR/orchestrator.pid" ]; then
        ORCHESTRATOR_PID=$(cat "$LOGS_DIR/orchestrator.pid")
        if ps -p $ORCHESTRATOR_PID > /dev/null; then
            print_status "Stopping enhanced orchestrator (PID: $ORCHESTRATOR_PID)..."
            kill $ORCHESTRATOR_PID
            rm -f "$LOGS_DIR/orchestrator.pid"
        fi
    fi
    
    # Stop all PM2 applications
    print_status "Stopping all PM2 applications..."
    pm2 stop all
    pm2 delete all
    
    print_status "All services stopped"
}

# Function to restart services
restart_services() {
    print_header "Restarting Services"
    
    stop_all_services
    sleep 2
    start_pm2_apps
    start_enhanced_orchestrator
    perform_health_checks
}

# Function to show help
show_help() {
    print_header "PM2 Automation System Help"
    
    echo -e "Usage: $0 [COMMAND]"
    echo -e ""
    echo -e "Commands:"
    echo -e "  ${GREEN}start${NC}     - Start the complete PM2 automation system"
    echo -e "  ${GREEN}stop${NC}      - Stop all services"
    echo -e "  ${GREEN}restart${NC}   - Restart all services"
    echo -e "  ${GREEN}status${NC}    - Show system status"
    echo -e "  ${GREEN}setup${NC}     - Setup PM2 environment only"
    echo -e "  ${GREEN}help${NC}      - Show this help message"
    echo -e ""
    echo -e "Examples:"
    echo -e "  $0 start          # Start the complete system"
    echo -e "  $0 status         # Show current status"
    echo -e "  $0 restart        # Restart all services"
    echo -e ""
    echo -e "After starting, you can use:"
    echo -e "  ${GREEN}pm2 monit${NC} - Monitor PM2 applications"
    echo -e "  ${GREEN}pm2 logs${NC}  - View PM2 logs"
    echo -e "  ${GREEN}pm2 status${NC} - Check PM2 status"
}

# Main execution
main() {
    local command="${1:-start}"
    
    case $command in
        start)
            print_header "Starting PM2 Automation System"
            
            check_node_version
            check_and_install_pm2
            create_directories
            check_ecosystem_config
            install_dependencies
            setup_pm2_environment
            start_pm2_apps
            start_enhanced_orchestrator
            perform_health_checks
            
            print_header "PM2 Automation System Started Successfully!"
            echo -e "${GREEN}✅ All services are running${NC}"
            echo -e ""
            echo -e "Useful commands:"
            echo -e "  ${GREEN}pm2 monit${NC} - Monitor applications"
            echo -e "  ${GREEN}pm2 status${NC} - Check status"
            echo -e "  ${GREEN}$0 status${NC} - Show system status"
            echo -e "  ${GREEN}$0 stop${NC}  - Stop all services"
            ;;
            
        stop)
            stop_all_services
            ;;
            
        restart)
            restart_services
            ;;
            
        status)
            show_status
            ;;
            
        setup)
            print_header "Setting up PM2 Environment"
            check_node_version
            check_and_install_pm2
            create_directories
            check_ecosystem_config
            setup_pm2_environment
            print_status "PM2 environment setup completed"
            ;;
            
        help|--help|-h)
            show_help
            ;;
            
        *)
            print_error "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Trap to handle script interruption
trap 'print_warning "Script interrupted. Use '$0 stop' to stop all services."; exit 1' INT TERM

# Execute main function
main "$@"