#!/bin/bash

# Enhanced PM2 Automation Setup Script
# Zion Tech Group - Intelligent Development Automation

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Script configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
LOGS_DIR="$PROJECT_ROOT/logs"
ECOSYSTEM_CONFIG="$PROJECT_ROOT/ecosystem.config.cjs"

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

print_success() {
    echo -e "${CYAN}[SUCCESS]${NC} $1"
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

# Function to check if PM2 is installed
check_pm2() {
    if command_exists pm2; then
        PM2_VERSION=$(pm2 --version)
        print_success "PM2 is already installed (v$PM2_VERSION)"
        return 0
    else
        print_warning "PM2 is not installed"
        return 1
    fi
}

# Function to install PM2
install_pm2() {
    print_status "Installing PM2 globally..."
    
    if command_exists npm; then
        npm install -g pm2
        print_success "PM2 installed successfully"
    elif command_exists yarn; then
        yarn global add pm2
        print_success "PM2 installed successfully"
    else
        print_error "Neither npm nor yarn is available. Please install Node.js first."
        exit 1
    fi
    
    # Verify installation
    if check_pm2; then
        print_success "PM2 installation verified"
    else
        print_error "PM2 installation failed"
        exit 1
    fi
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p "$LOGS_DIR"
    mkdir -p "$AUTOMATION_DIR/logs"
    mkdir -p "$SCRIPT_DIR/logs"
    
    print_success "Directories created successfully"
}

# Function to check ecosystem configuration
check_ecosystem_config() {
    if [[ -f "$ECOSYSTEM_CONFIG" ]]; then
        print_success "Ecosystem configuration found"
        return 0
    else
        print_error "Ecosystem configuration not found at $ECOSYSTEM_CONFIG"
        return 1
    fi
}

# Function to validate automation scripts
validate_automation_scripts() {
    print_status "Validating automation scripts..."
    
    local missing_scripts=()
    local required_scripts=(
        "enhanced-code-quality-monitor.cjs"
        "smart-lint-automation.cjs"
        "performance-intelligence.cjs"
        "security-intelligence.cjs"
        "seo-intelligence.cjs"
        "test-intelligence.cjs"
        "dependency-intelligence.cjs"
        "build-intelligence.cjs"
        "content-intelligence.cjs"
        "analytics-intelligence.cjs"
        "health-intelligence.cjs"
    )
    
    for script in "${required_scripts[@]}"; do
        if [[ ! -f "$AUTOMATION_DIR/$script" ]]; then
            missing_scripts+=("$script")
        fi
    done
    
    if [[ ${#missing_scripts[@]} -eq 0 ]]; then
        print_success "All required automation scripts are present"
        return 0
    else
        print_warning "Missing automation scripts:"
        for script in "${missing_scripts[@]}"; do
            echo "  - $script"
        done
        return 1
    fi
}

# Function to setup PM2 startup
setup_pm2_startup() {
    print_status "Setting up PM2 startup configuration..."
    
    if pm2 startup >/dev/null 2>&1; then
        print_success "PM2 startup configured"
    else
        print_warning "Could not configure PM2 startup (may require sudo)"
    fi
}

# Function to start automation system
start_automation() {
    print_status "Starting automation system..."
    
    if pm2 start "$ECOSYSTEM_CONFIG" --only automation; then
        print_success "Automation system started successfully"
        
        # Save PM2 configuration
        pm2 save
        print_success "PM2 configuration saved"
        
        # Show status
        print_status "Current automation status:"
        pm2 status
    else
        print_error "Failed to start automation system"
        return 1
    fi
}

# Function to test automation system
test_automation() {
    print_status "Testing automation system..."
    
    # Wait for processes to start
    sleep 5
    
    # Check if processes are running
    local running_processes=$(pm2 jlist | jq -r '.[] | select(.pm2_env.status == "online") | .name' | grep -E "(intelligence|automation)" | wc -l)
    
    if [[ $running_processes -gt 0 ]]; then
        print_success "Automation system is running ($running_processes processes online)"
        return 0
    else
        print_error "No automation processes are running"
        return 1
    fi
}

# Function to show automation status
show_status() {
    print_header "Automation System Status"
    
    if check_pm2; then
        echo ""
        pm2 status
        echo ""
        
        # Show process details
        print_status "Process Details:"
        pm2 jlist | jq -r '.[] | select(.pm2_env.status == "online") | "\(.name): \(.pm2_env.status) (Memory: \(.monit.memory)MB, CPU: \(.monit.cpu)%)"'
    else
        print_error "PM2 is not available"
    fi
}

# Function to show logs
show_logs() {
    local process_name="${1:-}"
    
    if [[ -n "$process_name" ]]; then
        print_status "Showing logs for $process_name:"
        pm2 logs "$process_name" --lines 50
    else
        print_status "Showing all automation logs:"
        pm2 logs --lines 50
    fi
}

# Function to restart automation
restart_automation() {
    print_status "Restarting automation system..."
    
    if pm2 restart "$ECOSYSTEM_CONFIG" --only automation; then
        print_success "Automation system restarted successfully"
        pm2 save
    else
        print_error "Failed to restart automation system"
        return 1
    fi
}

# Function to stop automation
stop_automation() {
    print_status "Stopping automation system..."
    
    if pm2 stop "$ECOSYSTEM_CONFIG" --only automation; then
        print_success "Automation system stopped successfully"
    else
        print_error "Failed to stop automation system"
        return 1
    fi
}

# Function to cleanup automation
cleanup_automation() {
    print_status "Cleaning up automation system..."
    
    if pm2 delete "$ECOSYSTEM_CONFIG" --only automation 2>/dev/null; then
        print_success "Automation processes deleted"
    fi
    
    pm2 save
    print_success "Cleanup completed"
}

# Function to show help
show_help() {
    cat << EOF
Enhanced PM2 Automation Setup Script

Usage: $0 [COMMAND]

Commands:
  setup           - Complete setup of the automation system
  install         - Install PM2 only
  start           - Start the automation system
  stop            - Stop the automation system
  restart         - Restart the automation system
  status          - Show automation system status
  logs [PROCESS]  - Show logs (optional: specific process)
  test            - Test the automation system
  cleanup         - Clean up automation processes
  help            - Show this help message

Examples:
  $0 setup        # Complete setup
  $0 start        # Start automation
  $0 status       # Show status
  $0 logs         # Show all logs
  $0 logs dev-intelligence-core  # Show specific process logs

EOF
}

# Function to perform complete setup
perform_setup() {
    print_header "Enhanced PM2 Automation Setup"
    
    # Check prerequisites
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    if ! command_exists npm && ! command_exists yarn; then
        print_error "Neither npm nor yarn is available. Please install Node.js first."
        exit 1
    fi
    
    # Install PM2 if needed
    if ! check_pm2; then
        install_pm2
    fi
    
    # Create directories
    create_directories
    
    # Check ecosystem configuration
    if ! check_ecosystem_config; then
        print_error "Please ensure ecosystem.config.cjs exists before running setup"
        exit 1
    fi
    
    # Validate automation scripts
    if ! validate_automation_scripts; then
        print_warning "Some automation scripts are missing. Setup may not work correctly."
    fi
    
    # Setup PM2 startup
    setup_pm2_startup
    
    # Start automation system
    if start_automation; then
        # Test the system
        if test_automation; then
            print_header "Setup Complete!"
            print_success "Enhanced PM2 automation system is now running"
            echo ""
            print_status "Next steps:"
            echo "  1. Monitor system: $0 status"
            echo "  2. View logs: $0 logs"
            echo "  3. Open monitoring: pm2 monit"
            echo "  4. Check health: node scripts/enhanced-automation-manager.js health"
        else
            print_error "Automation system test failed"
            exit 1
        fi
    else
        print_error "Setup failed"
        exit 1
    fi
}

# Main script logic
case "${1:-setup}" in
    "setup")
        perform_setup
        ;;
    "install")
        install_pm2
        ;;
    "start")
        if check_ecosystem_config; then
            start_automation
        else
            print_error "Ecosystem configuration not found"
            exit 1
        fi
        ;;
    "stop")
        stop_automation
        ;;
    "restart")
        if check_ecosystem_config; then
            restart_automation
        else
            print_error "Ecosystem configuration not found"
            exit 1
        fi
        ;;
    "status")
        show_status
        ;;
    "logs")
        show_logs "$2"
        ;;
    "test")
        test_automation
        ;;
    "cleanup")
        cleanup_automation
        ;;
    "help"|"-h"|"--help")
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac