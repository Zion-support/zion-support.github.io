#!/bin/bash

# PM2 Intelligent Automation Startup Script
# This script initializes the complete PM2 automation ecosystem

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
ECOSYSTEM_FILE="ecosystem.config.js"
LOG_DIR="./automation/logs"
PM2_LOG_DIR="./automation/logs/pm2"
SCRIPT_DIR="./scripts"
AUTOMATION_DIR="./automation"

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

# Function to check if PM2 is installed
check_pm2() {
    if ! command_exists pm2; then
        print_error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        if [ $? -eq 0 ]; then
            print_success "PM2 installed successfully"
        else
            print_error "Failed to install PM2"
            exit 1
        fi
    else
        print_success "PM2 is already installed"
    fi
}

# Function to check Node.js and npm
check_dependencies() {
    print_status "Checking dependencies..."
    
    if ! command_exists node; then
        print_error "Node.js is not installed"
        exit 1
    fi
    
    if ! command_exists npm; then
        print_error "npm is not installed"
        exit 1
    fi
    
    print_success "Node.js version: $(node --version)"
    print_success "npm version: $(npm --version)"
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$PM2_LOG_DIR"
    mkdir -p "$SCRIPT_DIR"
    
    print_success "Directories created"
}

# Function to install project dependencies
install_dependencies() {
    print_status "Installing project dependencies..."
    
    # Install root dependencies
    if [ -f "package.json" ]; then
        print_status "Installing root dependencies..."
        npm install
    fi
    
    # Install server dependencies
    if [ -d "server" ] && [ -f "server/package.json" ]; then
        print_status "Installing server dependencies..."
        cd server && npm install && cd ..
    fi
    
    print_success "Dependencies installed"
}

# Function to check ecosystem file
check_ecosystem_file() {
    if [ ! -f "$ECOSYSTEM_FILE" ]; then
        print_error "Ecosystem file not found: $ECOSYSTEM_FILE"
        exit 1
    fi
    
    print_success "Ecosystem file found: $ECOSYSTEM_FILE"
}

# Function to start PM2 ecosystem
start_pm2_ecosystem() {
    print_status "Starting PM2 ecosystem..."
    
    # Kill any existing PM2 processes
    pm2 kill 2>/dev/null || true
    
    # Start the ecosystem
    pm2 start "$ECOSYSTEM_FILE"
    
    if [ $? -eq 0 ]; then
        print_success "PM2 ecosystem started successfully"
    else
        print_error "Failed to start PM2 ecosystem"
        exit 1
    fi
}

# Function to start intelligent manager
start_intelligent_manager() {
    print_status "Starting PM2 Intelligent Manager..."
    
    if [ -f "$SCRIPT_DIR/pm2-intelligent-manager.js" ]; then
        node "$SCRIPT_DIR/pm2-intelligent-manager.js" start &
        INTELLIGENT_MANAGER_PID=$!
        echo $INTELLIGENT_MANAGER_PID > "$PM2_LOG_DIR/intelligent-manager.pid"
        print_success "PM2 Intelligent Manager started (PID: $INTELLIGENT_MANAGER_PID)"
    else
        print_warning "PM2 Intelligent Manager script not found, skipping..."
    fi
}

# Function to start enhanced automation factory
start_automation_factory() {
    print_status "Starting PM2 Enhanced Automation Factory..."
    
    if [ -f "$AUTOMATION_DIR/pm2-enhanced-automation-factory.cjs" ]; then
        node "$AUTOMATION_DIR/pm2-enhanced-automation-factory.cjs" &
        AUTOMATION_FACTORY_PID=$!
        echo $AUTOMATION_FACTORY_PID > "$PM2_LOG_DIR/automation-factory.pid"
        print_success "PM2 Enhanced Automation Factory started (PID: $AUTOMATION_FACTORY_PID)"
    else
        print_warning "PM2 Enhanced Automation Factory script not found, skipping..."
    fi
}

# Function to wait for ecosystem stability
wait_for_stability() {
    print_status "Waiting for ecosystem stability..."
    
    local max_attempts=30
    local attempt=1
    
    while [ $attempt -le $max_attempts ]; do
        local online_count=$(pm2 jlist | jq -r '.[] | select(.pm2_env.status == "online") | .name' | wc -l)
        local total_count=$(pm2 jlist | jq -r '.[] | .name' | wc -l)
        
        if [ "$online_count" -eq "$total_count" ] && [ "$total_count" -gt 0 ]; then
            print_success "Ecosystem is stable (${online_count}/${total_count} processes online)"
            return 0
        fi
        
        print_status "Attempt $attempt/$max_attempts: ${online_count}/${total_count} processes online"
        sleep 2
        attempt=$((attempt + 1))
    done
    
    print_warning "Ecosystem stability timeout reached"
    return 1
}

# Function to show status
show_status() {
    print_header "PM2 Ecosystem Status"
    
    echo ""
    pm2 status
    
    echo ""
    print_status "PM2 logs directory: $PM2_LOG_DIR"
    print_status "Ecosystem file: $ECOSYSTEM_FILE"
    
    if [ -f "$PM2_LOG_DIR/intelligent-manager.pid" ]; then
        local pid=$(cat "$PM2_LOG_DIR/intelligent-manager.pid")
        print_status "Intelligent Manager PID: $pid"
    fi
    
    if [ -f "$PM2_LOG_DIR/automation-factory.pid" ]; then
        local pid=$(cat "$PM2_LOG_DIR/automation-factory.pid")
        print_status "Automation Factory PID: $pid"
    fi
}

# Function to setup monitoring
setup_monitoring() {
    print_status "Setting up monitoring..."
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    print_success "Monitoring setup completed"
}

# Function to generate startup report
generate_startup_report() {
    print_status "Generating startup report..."
    
    local report_file="$PM2_LOG_DIR/startup-report-$(date +%Y%m%d-%H%M%S).json"
    
    cat > "$report_file" << EOF
{
  "startup_timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "ecosystem_file": "$ECOSYSTEM_FILE",
  "pm2_version": "$(pm2 --version)",
  "node_version": "$(node --version)",
  "npm_version": "$(npm --version)",
  "processes": $(pm2 jlist),
  "status": "started"
}
EOF
    
    print_success "Startup report generated: $report_file"
}

# Function to cleanup on exit
cleanup() {
    print_status "Cleaning up..."
    
    # Kill background processes
    if [ -f "$PM2_LOG_DIR/intelligent-manager.pid" ]; then
        local pid=$(cat "$PM2_LOG_DIR/intelligent-manager.pid")
        kill $pid 2>/dev/null || true
        rm -f "$PM2_LOG_DIR/intelligent-manager.pid"
    fi
    
    if [ -f "$PM2_LOG_DIR/automation-factory.pid" ]; then
        local pid=$(cat "$PM2_LOG_DIR/automation-factory.pid")
        kill $pid 2>/dev/null || true
        rm -f "$PM2_LOG_DIR/automation-factory.pid"
    fi
    
    print_success "Cleanup completed"
}

# Set trap for cleanup
trap cleanup EXIT

# Main execution
main() {
    print_header "PM2 Intelligent Automation Startup"
    
    # Check dependencies
    check_dependencies
    check_pm2
    
    # Create directories
    create_directories
    
    # Install dependencies
    install_dependencies
    
    # Check ecosystem file
    check_ecosystem_file
    
    # Start PM2 ecosystem
    start_pm2_ecosystem
    
    # Wait for stability
    wait_for_stability
    
    # Start additional services
    start_intelligent_manager
    start_automation_factory
    
    # Setup monitoring
    setup_monitoring
    
    # Generate report
    generate_startup_report
    
    # Show final status
    show_status
    
    print_header "Startup Complete!"
    print_success "PM2 ecosystem is running successfully"
    print_status "Use 'pm2 status' to check process status"
    print_status "Use 'pm2 logs' to view logs"
    print_status "Use 'pm2 monit' to monitor processes"
    print_status "Use './scripts/pm2-intelligent-manager.js' for advanced management"
}

# Check if jq is available for JSON parsing
if ! command_exists jq; then
    print_warning "jq is not installed. Installing jq..."
    if command_exists apt-get; then
        sudo apt-get update && sudo apt-get install -y jq
    elif command_exists yum; then
        sudo yum install -y jq
    elif command_exists brew; then
        brew install jq
    else
        print_warning "Could not install jq automatically. Please install it manually."
    fi
fi

# Run main function
main "$@"