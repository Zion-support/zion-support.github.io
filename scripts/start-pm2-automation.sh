#!/bin/bash

# PM2 Intelligent Automation Startup Script
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
LOG_DIR="$PROJECT_ROOT/logs/pm2"
ECOSYSTEM_CONFIG="$PROJECT_ROOT/ecosystem.config.js"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
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
check_system_requirements() {
    print_header "Checking System Requirements"
    
    # Check Node.js
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js version 18+ is required. Current version: $(node --version)"
        exit 1
    fi
    
    print_success "Node.js version: $(node --version)"
    
    # Check npm
    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    print_success "npm version: $(npm --version)"
    
    # Check available memory
    TOTAL_MEM=$(free -m | awk 'NR==2{printf "%.0f", $2}')
    if [ "$TOTAL_MEM" -lt 2048 ]; then
        print_warning "System has less than 2GB RAM. Performance may be limited."
    else
        print_success "Available memory: ${TOTAL_MEM}MB"
    fi
    
    # Check available disk space
    DISK_SPACE=$(df -BG . | awk 'NR==2{print $4}' | sed 's/G//')
    if [ "$DISK_SPACE" -lt 5 ]; then
        print_warning "Less than 5GB disk space available. Consider freeing up space."
    else
        print_success "Available disk space: ${DISK_SPACE}GB"
    fi
}

# Function to install PM2
install_pm2() {
    print_header "Installing PM2"
    
    if command_exists pm2; then
        print_status "PM2 is already installed. Updating to latest version..."
        npm install -g pm2@latest
    else
        print_status "Installing PM2 globally..."
        npm install -g pm2@latest
    fi
    
    if command_exists pm2; then
        print_success "PM2 installed successfully. Version: $(pm2 --version)"
    else
        print_error "Failed to install PM2"
        exit 1
    fi
}

# Function to setup directories and permissions
setup_directories() {
    print_header "Setting up Directories and Permissions"
    
    # Create log directories
    mkdir -p "$LOG_DIR"
    mkdir -p "$PROJECT_ROOT/logs/pm2-orchestrator"
    mkdir -p "$PROJECT_ROOT/automation/logs"
    
    print_success "Log directories created"
    
    # Make scripts executable
    chmod +x "$SCRIPT_DIR/pm2-intelligent-manager.js"
    chmod +x "$PROJECT_ROOT/automation/pm2-enhanced-orchestrator.cjs"
    chmod +x "$PROJECT_ROOT/automation/launch-all-automation.cjs"
    
    print_success "Scripts made executable"
    
    # Set proper permissions
    chmod 755 "$LOG_DIR"
    chmod 755 "$PROJECT_ROOT/automation"
    
    print_success "Permissions set correctly"
}

# Function to install project dependencies
install_dependencies() {
    print_header "Installing Project Dependencies"
    
    cd "$PROJECT_ROOT"
    
    print_status "Installing root dependencies..."
    npm install
    
    if [ -d "server" ]; then
        print_status "Installing server dependencies..."
        cd server
        npm install
        cd ..
    fi
    
    print_success "All dependencies installed"
}

# Function to validate ecosystem configuration
validate_ecosystem_config() {
    print_header "Validating Ecosystem Configuration"
    
    if [ ! -f "$ECOSYSTEM_CONFIG" ]; then
        print_error "Ecosystem configuration file not found: $ECOSYSTEM_CONFIG"
        exit 1
    fi
    
    # Basic syntax check
    if node -c "$ECOSYSTEM_CONFIG" 2>/dev/null; then
        print_success "Ecosystem configuration syntax is valid"
    else
        print_error "Ecosystem configuration has syntax errors"
        exit 1
    fi
    
    # Check if all automation scripts exist
    cd "$PROJECT_ROOT"
    for script in automation/*.cjs; do
        if [ -f "$script" ]; then
            print_success "Found automation script: $(basename "$script")"
        fi
    done
}

# Function to start PM2 ecosystem
start_pm2_ecosystem() {
    print_header "Starting PM2 Ecosystem"
    
    cd "$PROJECT_ROOT"
    
    # Stop any existing PM2 processes
    print_status "Stopping existing PM2 processes..."
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    # Start the ecosystem
    print_status "Starting PM2 ecosystem..."
    if pm2 start ecosystem.config.js; then
        print_success "PM2 ecosystem started successfully"
    else
        print_error "Failed to start PM2 ecosystem"
        exit 1
    fi
    
    # Save PM2 configuration
    print_status "Saving PM2 configuration..."
    pm2 save
    
    # Setup PM2 startup script
    print_status "Setting up PM2 startup script..."
    pm2 startup
    print_warning "Please run the command shown above as root to enable PM2 startup"
    
    print_success "PM2 ecosystem setup completed"
}

# Function to start intelligent monitoring
start_intelligent_monitoring() {
    print_header "Starting Intelligent Monitoring"
    
    cd "$PROJECT_ROOT"
    
    # Start the enhanced orchestrator
    print_status "Starting PM2 enhanced orchestrator..."
    node automation/pm2-enhanced-orchestrator.cjs start
    
    # Start the intelligent manager
    print_status "Starting intelligent PM2 manager..."
    node scripts/pm2-intelligent-manager.js start
    
    print_success "Intelligent monitoring started"
}

# Function to show status
show_status() {
    print_header "PM2 Status"
    
    cd "$PROJECT_ROOT"
    
    echo ""
    pm2 status
    
    echo ""
    print_status "Recent logs (last 10 lines):"
    pm2 logs --lines 10
}

# Function to create management aliases
create_aliases() {
    print_header "Creating Management Aliases"
    
    # Create a .bashrc entry for easy PM2 management
    ALIAS_FILE="$HOME/.bashrc"
    ALIASES=(
        "alias pm2-start='cd $PROJECT_ROOT && pm2 start ecosystem.config.js'"
        "alias pm2-stop='cd $PROJECT_ROOT && pm2 stop all'"
        "alias pm2-restart='cd $PROJECT_ROOT && pm2 restart all'"
        "alias pm2-status='cd $PROJECT_ROOT && pm2 status'"
        "alias pm2-logs='cd $PROJECT_ROOT && pm2 logs'"
        "alias pm2-monitor='cd $PROJECT_ROOT && pm2 monit'"
        "alias pm2-intelligent='cd $PROJECT_ROOT && node scripts/pm2-intelligent-manager.js'"
        "alias pm2-orchestrator='cd $PROJECT_ROOT && node automation/pm2-enhanced-orchestrator.cjs'"
    )
    
    for alias in "${ALIASES[@]}"; do
        if ! grep -q "$alias" "$ALIAS_FILE" 2>/dev/null; then
            echo "$alias" >> "$ALIAS_FILE"
            print_success "Added alias: $alias"
        else
            print_status "Alias already exists: $alias"
        fi
    done
    
    print_warning "Please run 'source ~/.bashrc' or restart your terminal to use the aliases"
}

# Function to generate startup report
generate_startup_report() {
    print_header "Generating Startup Report"
    
    REPORT_FILE="$LOG_DIR/startup-report-$(date +%Y%m%d-%H%M%S).txt"
    
    {
        echo "PM2 Automation Startup Report"
        echo "Generated: $(date)"
        echo "=================================="
        echo ""
        echo "System Information:"
        echo "  Node.js: $(node --version)"
        echo "  npm: $(npm --version)"
        echo "  PM2: $(pm2 --version)"
        echo "  OS: $(uname -a)"
        echo "  Memory: $(free -h | awk 'NR==2{print $2}')"
        echo "  Disk: $(df -h . | awk 'NR==2{print $4}') available"
        echo ""
        echo "PM2 Processes:"
        pm2 jlist | jq -r '.[] | "  \(.name): \(.pm2_env.status)"' 2>/dev/null || echo "  Unable to get PM2 status"
        echo ""
        echo "Log Files:"
        echo "  PM2 Logs: $LOG_DIR"
        echo "  Orchestrator Logs: $PROJECT_ROOT/logs/pm2-orchestrator"
        echo "  Automation Logs: $PROJECT_ROOT/automation/logs"
        echo ""
        echo "Management Commands:"
        echo "  pm2-start      - Start all automation systems"
        echo "  pm2-stop       - Stop all automation systems"
        echo "  pm2-restart    - Restart all automation systems"
        echo "  pm2-status     - Show PM2 status"
        echo "  pm2-logs       - Show all logs"
        echo "  pm2-monitor    - Open PM2 monitoring dashboard"
        echo "  pm2-intelligent - Run intelligent PM2 manager"
        echo "  pm2-orchestrator - Run enhanced orchestrator"
    } > "$REPORT_FILE"
    
    print_success "Startup report generated: $REPORT_FILE"
}

# Main execution
main() {
    print_header "PM2 Intelligent Automation Setup"
    
    # Check if running as root
    if [ "$EUID" -eq 0 ]; then
        print_warning "Running as root. This is not recommended for security reasons."
        read -p "Continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
    
    # Execute setup steps
    check_system_requirements
    install_pm2
    setup_directories
    install_dependencies
    validate_ecosystem_config
    start_pm2_ecosystem
    start_intelligent_monitoring
    create_aliases
    generate_startup_report
    
    print_header "Setup Complete!"
    print_success "PM2 automation ecosystem is now running"
    print_status "Use 'pm2 status' to check system status"
    print_status "Use 'pm2 monit' to open monitoring dashboard"
    print_status "Use 'pm2 logs' to view all logs"
    print_status "Use 'pm2-intelligent health' to generate health reports"
    
    echo ""
    print_status "Quick start commands:"
    echo "  pm2 status                    # Check status"
    echo "  pm2 monit                     # Open monitoring"
    echo "  pm2 logs                      # View logs"
    echo "  pm2-intelligent health        # Health report"
    echo "  pm2-orchestrator status       # Orchestrator status"
    
    echo ""
    print_warning "Remember to run 'source ~/.bashrc' to use the new aliases"
    print_warning "PM2 will automatically restart processes if they crash"
    print_warning "Check logs in $LOG_DIR for detailed information"
}

# Handle command line arguments
case "${1:-}" in
    "status")
        show_status
        ;;
    "restart")
        cd "$PROJECT_ROOT"
        pm2 restart all
        print_success "All processes restarted"
        ;;
    "stop")
        cd "$PROJECT_ROOT"
        pm2 stop all
        print_success "All processes stopped"
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
        echo ""
        echo "Commands:"
        echo "  (no args)  - Full setup and start"
        echo "  status     - Show PM2 status"
        echo "  restart    - Restart all processes"
        echo "  stop       - Stop all processes"
        echo "  logs       - Show all logs"
        echo "  monitor    - Open monitoring dashboard"
        echo "  help       - Show this help"
        ;;
    *)
        main
        ;;
esac