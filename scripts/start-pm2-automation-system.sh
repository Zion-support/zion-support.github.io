#!/bin/bash

# PM2 Intelligent Automation System Startup Script
# This script initializes the complete PM2 automation ecosystem

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
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
AUTOMATION_DIR="$WORKSPACE_DIR/automation"
LOGS_DIR="$AUTOMATION_DIR/logs"
BACKUPS_DIR="$AUTOMATION_DIR/backups"

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
    echo -e "${CYAN}================================${NC}"
    echo -e "${CYAN}$1${NC}"
    echo -e "${CYAN}================================${NC}"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check system requirements
check_requirements() {
    print_header "Checking System Requirements"
    
    # Check Node.js
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    NODE_VERSION=$(node --version)
    print_status "Node.js version: $NODE_VERSION"
    
    # Check npm
    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    NPM_VERSION=$(npm --version)
    print_status "npm version: $NPM_VERSION"
    
    # Check PM2
    if ! command_exists pm2; then
        print_warning "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
    fi
    
    PM2_VERSION=$(pm2 --version)
    print_status "PM2 version: $PM2_VERSION"
    
    # Check if we're in the right directory
    if [[ ! -f "$WORKSPACE_DIR/package.json" ]]; then
        print_error "package.json not found. Please run this script from the project root."
        exit 1
    fi
    
    print_status "All requirements satisfied ✓"
}

# Function to create necessary directories
create_directories() {
    print_header "Creating Directory Structure"
    
    local dirs=(
        "$LOGS_DIR"
        "$BACKUPS_DIR"
        "$BACKUPS_DIR/deployments"
        "$BACKUPS_DIR/pm2-backups"
        "$BACKUPS_DIR/automation-backups"
    )
    
    for dir in "${dirs[@]}"; do
        if [[ ! -d "$dir" ]]; then
            mkdir -p "$dir"
            print_status "Created directory: $dir"
        else
            print_status "Directory exists: $dir"
        fi
    done
}

# Function to install dependencies
install_dependencies() {
    print_header "Installing Dependencies"
    
    cd "$WORKSPACE_DIR"
    
    # Install root dependencies
    print_status "Installing root dependencies..."
    npm install
    
    # Install server dependencies
    if [[ -d "$WORKSPACE_DIR/server" ]]; then
        print_status "Installing server dependencies..."
        cd "$WORKSPACE_DIR/server"
        npm install
        cd "$WORKSPACE_DIR"
    fi
    
    # Install automation dependencies
    if [[ -d "$AUTOMATION_DIR" ]]; then
        print_status "Installing automation dependencies..."
        cd "$AUTOMATION_DIR"
        npm install
        cd "$WORKSPACE_DIR"
    fi
    
    print_status "Dependencies installed successfully ✓"
}

# Function to make scripts executable
make_scripts_executable() {
    print_header "Making Scripts Executable"
    
    local scripts=(
        "$SCRIPT_DIR/pm2-intelligent-manager.js"
        "$SCRIPT_DIR/pm2-smart-deployer.js"
        "$AUTOMATION_DIR/pm2-enhanced-orchestrator.cjs"
        "$AUTOMATION_DIR/intelligent-orchestrator.cjs"
        "$AUTOMATION_DIR/automation-dashboard.cjs"
        "$AUTOMATION_DIR/launch-all-automation.cjs"
    )
    
    for script in "${scripts[@]}"; do
        if [[ -f "$script" ]]; then
            chmod +x "$script"
            print_status "Made executable: $script"
        fi
    done
}

# Function to initialize PM2 ecosystem
initialize_pm2_ecosystem() {
    print_header "Initializing PM2 Ecosystem"
    
    cd "$WORKSPACE_DIR"
    
    # Check if ecosystem config exists
    if [[ ! -f "ecosystem.config.js" ]]; then
        print_error "ecosystem.config.js not found. Please create it first."
        exit 1
    fi
    
    # Stop any existing PM2 processes
    print_status "Stopping existing PM2 processes..."
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    # Start the ecosystem
    print_status "Starting PM2 ecosystem..."
    pm2 start ecosystem.config.js
    
    # Save PM2 configuration
    print_status "Saving PM2 configuration..."
    pm2 save
    
    # Setup PM2 startup script
    print_status "Setting up PM2 startup script..."
    pm2 startup 2>/dev/null || true
    
    print_status "PM2 ecosystem initialized successfully ✓"
}

# Function to start automation systems
start_automation_systems() {
    print_header "Starting Automation Systems"
    
    cd "$AUTOMATION_DIR"
    
    # Start the enhanced orchestrator
    print_status "Starting PM2 Enhanced Orchestrator..."
    node pm2-enhanced-orchestrator.cjs start &
    ORCHESTRATOR_PID=$!
    
    # Wait a moment for orchestrator to start
    sleep 5
    
    # Start the intelligent manager
    print_status "Starting PM2 Intelligent Manager..."
    cd "$SCRIPT_DIR"
    node pm2-intelligent-manager.js start &
    MANAGER_PID=$!
    
    # Wait for systems to stabilize
    print_status "Waiting for systems to stabilize..."
    sleep 10
    
    # Check system status
    print_status "Checking system status..."
    pm2 status
    
    print_status "Automation systems started successfully ✓"
}

# Function to run health checks
run_health_checks() {
    print_header "Running Health Checks"
    
    cd "$SCRIPT_DIR"
    
    # Check PM2 ecosystem health
    print_status "Checking PM2 ecosystem health..."
    node pm2-intelligent-manager.js health
    
    # Check automation systems health
    print_status "Checking automation systems health..."
    cd "$AUTOMATION_DIR"
    node pm2-enhanced-orchestrator.cjs health
    
    print_status "Health checks completed ✓"
}

# Function to generate initial report
generate_initial_report() {
    print_header "Generating Initial Report"
    
    cd "$SCRIPT_DIR"
    
    print_status "Generating system report..."
    node pm2-intelligent-manager.js report
    
    cd "$AUTOMATION_DIR"
    print_status "Generating automation report..."
    node pm2-enhanced-orchestrator.cjs report
    
    print_status "Initial reports generated ✓"
}

# Function to show system information
show_system_info() {
    print_header "System Information"
    
    echo -e "${BLUE}Workspace Directory:${NC} $WORKSPACE_DIR"
    echo -e "${BLUE}Scripts Directory:${NC} $SCRIPT_DIR"
    echo -e "${BLUE}Automation Directory:${NC} $AUTOMATION_DIR"
    echo -e "${BLUE}Logs Directory:${NC} $LOGS_DIR"
    echo -e "${BLUE}Backups Directory:${NC} $BACKUPS_DIR"
    echo ""
    echo -e "${BLUE}Available Commands:${NC}"
    echo -e "  ${CYAN}pm2 status${NC}                    - Show PM2 process status"
    echo -e "  ${CYAN}pm2 logs${NC}                      - Show PM2 logs"
    echo -e "  ${CYAN}pm2 monit${NC}                     - Show PM2 monitoring dashboard"
    echo -e "  ${CYAN}node scripts/pm2-intelligent-manager.js help${NC} - Show manager help"
    echo -e "  ${CYAN}node automation/pm2-enhanced-orchestrator.cjs help${NC} - Show orchestrator help"
    echo -e "  ${CYAN}node scripts/pm2-smart-deployer.js help${NC} - Show deployer help"
    echo ""
    echo -e "${BLUE}Management Commands:${NC}"
    echo -e "  ${CYAN}node scripts/pm2-intelligent-manager.js monitor${NC} - Start continuous monitoring"
    echo -e "  ${CYAN}node automation/pm2-enhanced-orchestrator.cjs start${NC} - Start continuous orchestration"
    echo -e "  ${CYAN}node scripts/pm2-smart-deployer.js deploy production${NC} - Deploy to production"
}

# Function to cleanup on exit
cleanup() {
    print_warning "Shutting down PM2 automation system..."
    
    # Stop automation processes
    if [[ -n "$ORCHESTRATOR_PID" ]]; then
        kill $ORCHESTRATOR_PID 2>/dev/null || true
    fi
    
    if [[ -n "$MANAGER_PID" ]]; then
        kill $MANAGER_PID 2>/dev/null || true
    fi
    
    # Stop PM2 processes
    pm2 stop all 2>/dev/null || true
    
    print_status "Cleanup completed"
}

# Set trap for cleanup
trap cleanup EXIT INT TERM

# Main execution
main() {
    print_header "PM2 Intelligent Automation System"
    print_status "Starting initialization..."
    
    # Check requirements
    check_requirements
    
    # Create directories
    create_directories
    
    # Install dependencies
    install_dependencies
    
    # Make scripts executable
    make_scripts_executable
    
    # Initialize PM2 ecosystem
    initialize_pm2_ecosystem
    
    # Start automation systems
    start_automation_systems
    
    # Run health checks
    run_health_checks
    
    # Generate initial report
    generate_initial_report
    
    # Show system information
    show_system_info
    
    print_header "Initialization Complete!"
    print_status "Your PM2 automation system is now running!"
    print_status "Use 'pm2 status' to check process status"
    print_status "Use 'pm2 monit' to open monitoring dashboard"
    print_status "Press Ctrl+C to stop the system"
    
    # Keep the script running to maintain the automation system
    while true; do
        sleep 30
        # Periodic health check
        if [[ $((SECONDS % 300)) -eq 0 ]]; then
            print_status "Running periodic health check..."
            cd "$SCRIPT_DIR"
            node pm2-intelligent-manager.js health >/dev/null 2>&1 || true
        fi
    done
}

# Check if script is being sourced or run directly
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
else
    print_status "Script sourced, use main() function to start the system"
fi