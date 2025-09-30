#!/bin/bash

# Intelligent PM2 Automations Startup Script
# This script starts all the new intelligent automation systems

set -e

echo "🚀 Starting Intelligent PM2 Automations..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
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

# Check if PM2 is available
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed or not in PATH"
        print_status "Installing PM2 locally..."
        npm install pm2
        export PATH="$PATH:./node_modules/.bin"
    fi
}

# Check if we're in the right directory
check_directory() {
    if [ ! -f "ecosystem.config.cjs" ]; then
        print_error "ecosystem.config.cjs not found. Please run this script from the project root."
        exit 1
    fi
}

# Create logs directory
create_logs_directory() {
    print_status "Creating logs directory..."
    mkdir -p logs
    print_success "Logs directory created"
}

# Stop existing PM2 processes
stop_existing_processes() {
    print_status "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "zion-app"; then
        pm2 stop ecosystem.config.cjs || true
        pm2 delete ecosystem.config.cjs || true
        print_success "Existing processes stopped"
    else
        print_status "No existing processes found"
    fi
}

# Start all automations
start_automations() {
    print_status "Starting intelligent automations..."
    
    # Start the ecosystem
    pm2 start ecosystem.config.cjs
    
    if [ $? -eq 0 ]; then
        print_success "All automations started successfully"
    else
        print_error "Failed to start automations"
        exit 1
    fi
}

# Wait for processes to stabilize
wait_for_stabilization() {
    print_status "Waiting for processes to stabilize..."
    sleep 10
    
    # Check process status
    pm2 list
}

# Show automation status
show_status() {
    print_status "Automation Status:"
    echo ""
    
    # Check each automation
    local automations=(
        "ai-build-monitor"
        "smart-code-monitor"
        "dependency-intelligence"
        "performance-engine"
        "security-intelligence"
        "workflow-optimizer"
        "ai-test-orchestrator"
        "ml-health-dashboard"
        "error-predictor"
        "code-review-bot"
    )
    
    for automation in "${automations[@]}"; do
        if pm2 list | grep -q "$automation"; then
            local status=$(pm2 list | grep "$automation" | awk '{print $10}')
            if [ "$status" = "online" ]; then
                print_success "$automation: $status"
            else
                print_warning "$automation: $status"
            fi
        else
            print_error "$automation: not found"
        fi
    done
}

# Show dashboard URLs
show_dashboards() {
    echo ""
    print_status "Dashboard URLs:"
    echo "  ML Health Dashboard: http://localhost:3001"
    echo "  PM2 Monitor: pm2 monit"
    echo "  PM2 Logs: pm2 logs"
}

# Main execution
main() {
    print_status "Starting Intelligent PM2 Automations..."
    echo ""
    
    # Pre-flight checks
    check_directory
    check_pm2
    create_logs_directory
    
    # Stop existing processes
    stop_existing_processes
    
    # Start automations
    start_automations
    
    # Wait for stabilization
    wait_for_stabilization
    
    # Show status
    show_status
    
    # Show dashboard URLs
    show_dashboards
    
    echo ""
    print_success "Intelligent PM2 Automations are now running!"
    echo ""
    print_status "Useful commands:"
    echo "  pm2 list                    - Show all processes"
    echo "  pm2 monit                   - Monitor processes"
    echo "  pm2 logs                    - View logs"
    echo "  pm2 restart <name>          - Restart specific process"
    echo "  pm2 stop ecosystem.config.cjs - Stop all automations"
    echo ""
}

# Run main function
main "$@"