#!/bin/bash

# Zion Tech Group - PM2 Automation Setup Script
# This script sets up the complete PM2 automation system with intelligent automation processes

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

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

print_header() {
    echo -e "${PURPLE}================================${NC}"
    echo -e "${PURPLE}$1${NC}"
    echo -e "${PURPLE}================================${NC}"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if running as root
check_root() {
    if [[ $EUID -eq 0 ]]; then
        print_error "This script should not be run as root"
        exit 1
    fi
}

# Function to check system requirements
check_requirements() {
    print_header "Checking System Requirements"
    
    # Check Node.js
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js first."
        print_status "Visit: https://nodejs.org/"
        exit 1
    fi
    
    # Check npm
    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    # Check Node.js version
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 16 ]; then
        print_error "Node.js version 16 or higher is required. Current version: $(node --version)"
        exit 1
    fi
    
    print_success "System requirements met"
    print_status "Node.js version: $(node --version)"
    print_status "npm version: $(npm --version)"
}

# Function to install PM2
install_pm2() {
    print_header "Installing PM2 Process Manager"
    
    if command_exists pm2; then
        print_status "PM2 is already installed"
        PM2_VERSION=$(pm2 --version)
        print_status "PM2 version: $PM2_VERSION"
    else
        print_status "Installing PM2 globally..."
        npm install -g pm2
        
        if command_exists pm2; then
            print_success "PM2 installed successfully"
            PM2_VERSION=$(pm2 --version)
            print_status "PM2 version: $PM2_VERSION"
        else
            print_error "Failed to install PM2"
            exit 1
        fi
    fi
}

# Function to create necessary directories
create_directories() {
    print_header "Creating Directory Structure"
    
    # Create logs directory
    if [ ! -d "logs" ]; then
        mkdir -p logs
        print_success "Created logs directory"
    else
        print_status "logs directory already exists"
    fi
    
    # Create automation logs directory
    if [ ! -d "automation/logs" ]; then
        mkdir -p automation/logs
        print_success "Created automation/logs directory"
    else
        print_status "automation/logs directory already exists"
    fi
    
    # Create scripts logs directory
    if [ ! -d "scripts/logs" ]; then
        mkdir -p scripts/logs
        print_success "Created scripts/logs directory"
    else
        print_status "scripts/logs directory already exists"
    fi
}

# Function to check automation scripts
check_automation_scripts() {
    print_header "Checking Automation Scripts"
    
    REQUIRED_SCRIPTS=(
        "automation/intelligent-orchestrator.cjs"
        "automation/ai-code-quality-monitor.cjs"
        "automation/smart-lint-monitor.cjs"
        "automation/ai-security-scanner.cjs"
        "automation/automation-dashboard.cjs"
        "ecosystem.config.cjs"
    )
    
    MISSING_SCRIPTS=()
    
    for script in "${REQUIRED_SCRIPTS[@]}"; do
        if [ ! -f "$script" ]; then
            MISSING_SCRIPTS+=("$script")
        fi
    done
    
    if [ ${#MISSING_SCRIPTS[@]} -eq 0 ]; then
        print_success "All required automation scripts are present"
    else
        print_warning "Missing automation scripts:"
        for script in "${MISSING_SCRIPTS[@]}"; do
            print_warning "  - $script"
        done
        print_error "Please ensure all automation scripts are present before continuing"
        exit 1
    fi
}

# Function to validate ecosystem configuration
validate_ecosystem_config() {
    print_header "Validating PM2 Ecosystem Configuration"
    
    if [ ! -f "ecosystem.config.cjs" ]; then
        print_error "ecosystem.config.cjs not found"
        exit 1
    fi
    
    # Basic validation of the ecosystem config
    if node -e "
        try {
            const config = require('./ecosystem.config.cjs');
            if (!config.apps || !Array.isArray(config.apps)) {
                console.error('Invalid ecosystem config: missing or invalid apps array');
                process.exit(1);
            }
            console.log('Ecosystem config validation passed');
            console.log('Found', config.apps.length, 'automation processes');
        } catch (error) {
            console.error('Error validating ecosystem config:', error.message);
            process.exit(1);
        }
    "; then
        print_success "Ecosystem configuration validation passed"
    else
        print_error "Ecosystem configuration validation failed"
        exit 1
    fi
}

# Function to start PM2 automation processes
start_automation() {
    print_header "Starting PM2 Automation Processes"
    
    # Check if PM2 is running
    if pm2 ping >/dev/null 2>&1; then
        print_status "PM2 daemon is running"
    else
        print_status "Starting PM2 daemon..."
        pm2 start
    fi
    
    # Start automation processes
    print_status "Starting automation processes..."
    pm2 start ecosystem.config.cjs --only automation
    
    if [ $? -eq 0 ]; then
        print_success "Automation processes started successfully"
    else
        print_error "Failed to start automation processes"
        exit 1
    fi
    
    # Save PM2 configuration
    print_status "Saving PM2 configuration..."
    pm2 save
    
    # Set up PM2 startup script
    print_status "Setting up PM2 startup script..."
    pm2 startup
    
    print_success "PM2 automation system is now running"
}

# Function to display status
display_status() {
    print_header "Automation System Status"
    
    echo ""
    print_status "PM2 Status:"
    pm2 status
    
    echo ""
    print_status "PM2 Logs (last 10 lines):"
    pm2 logs --lines 10
    
    echo ""
    print_status "System Information:"
    print_status "  - Total processes: $(pm2 list | wc -l)"
    print_status "  - Online processes: $(pm2 list | grep "online" | wc -l)"
    print_status "  - Dashboard URL: http://localhost:3001"
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  setup     - Complete setup of PM2 automation system"
    echo "  start     - Start automation processes only"
    echo "  stop      - Stop automation processes"
    echo "  restart   - Restart automation processes"
    echo "  status    - Show automation system status"
    echo "  logs      - Show automation logs"
    echo "  dashboard - Start automation dashboard"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 setup     # Complete setup"
    echo "  $0 start     # Start processes"
    echo "  $0 status    # Show status"
}

# Function to start automation dashboard
start_dashboard() {
    print_header "Starting Automation Dashboard"
    
    if [ -f "automation/automation-dashboard.cjs" ]; then
        print_status "Starting automation dashboard..."
        node automation/automation-dashboard.cjs start &
        DASHBOARD_PID=$!
        
        print_success "Automation dashboard started with PID: $DASHBOARD_PID"
        print_status "Dashboard available at: http://localhost:3001"
        print_status "Press Ctrl+C to stop the dashboard"
        
        # Wait for dashboard
        wait $DASHBOARD_PID
    else
        print_error "Automation dashboard script not found"
        exit 1
    fi
}

# Function to stop automation processes
stop_automation() {
    print_header "Stopping PM2 Automation Processes"
    
    print_status "Stopping automation processes..."
    pm2 stop ecosystem.config.cjs --only automation
    
    if [ $? -eq 0 ]; then
        print_success "Automation processes stopped successfully"
    else
        print_warning "Some processes may not have stopped properly"
    fi
}

# Function to restart automation processes
restart_automation() {
    print_header "Restarting PM2 Automation Processes"
    
    print_status "Restarting automation processes..."
    pm2 restart ecosystem.config.cjs --only automation
    
    if [ $? -eq 0 ]; then
        print_success "Automation processes restarted successfully"
    else
        print_error "Failed to restart automation processes"
        exit 1
    fi
}

# Function to show logs
show_logs() {
    print_header "Automation System Logs"
    
    echo ""
    print_status "Recent PM2 logs:"
    pm2 logs --lines 50
    
    echo ""
    print_status "Individual process logs available with:"
    print_status "  pm2 logs <process-name>"
}

# Main execution
main() {
    case "${1:-setup}" in
        "setup")
            print_header "Zion Tech Group - PM2 Automation Setup"
            check_root
            check_requirements
            install_pm2
            create_directories
            check_automation_scripts
            validate_ecosystem_config
            start_automation
            display_status
            print_success "Setup completed successfully!"
            print_status "Your automation system is now running"
            print_status "Access the dashboard at: http://localhost:3001"
            ;;
        "start")
            start_automation
            ;;
        "stop")
            stop_automation
            ;;
        "restart")
            restart_automation
            ;;
        "status")
            display_status
            ;;
        "logs")
            show_logs
            ;;
        "dashboard")
            start_dashboard
            ;;
        "help"|"-h"|"--help")
            show_usage
            ;;
        *)
            print_error "Unknown option: $1"
            show_usage
            exit 1
            ;;
    esac
}

# Trap Ctrl+C
trap 'echo ""; print_warning "Setup interrupted by user"; exit 1' INT

# Run main function
main "$@"