#!/bin/bash

# 🚀 Enhanced PM2 Automation System - Quick Start Script
# Zion Tech Group

set -e

echo "🚀 Starting Enhanced PM2 Automation System..."
echo "================================================"

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

# Check if PM2 is installed
check_pm2() {
    print_status "Checking PM2 installation..."
    if ! command -v pm2 &> /dev/null; then
        print_warning "PM2 not found. Installing PM2 globally..."
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

# Check if Node.js is installed
check_node() {
    print_status "Checking Node.js installation..."
    if ! command -v node &> /dev/null; then
        print_error "Node.js not found. Please install Node.js first."
        exit 1
    fi
    
    NODE_VERSION=$(node --version)
    print_success "Node.js version: $NODE_VERSION"
}

# Check if npm is available
check_npm() {
    print_status "Checking npm availability..."
    if ! command -v npm &> /dev/null; then
        print_error "npm not found. Please install npm first."
        exit 1
    fi
    
    NPM_VERSION=$(npm --version)
    print_success "npm version: $NPM_VERSION"
}

# Install project dependencies
install_dependencies() {
    print_status "Installing project dependencies..."
    if [ -f "package.json" ]; then
        npm install
        if [ $? -eq 0 ]; then
            print_success "Dependencies installed successfully"
        else
            print_error "Failed to install dependencies"
            exit 1
        fi
    else
        print_warning "package.json not found, skipping dependency installation"
    fi
}

# Create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    DIRS=(
        "error-recovery-reports"
        "adaptive-scheduler-reports"
        "ai-code-analysis-reports"
        "cross-process-coordinator-reports"
        "shared-data"
    )
    
    for dir in "${DIRS[@]}"; do
        if [ ! -d "$dir" ]; then
            mkdir -p "$dir"
            print_success "Created directory: $dir"
        else
            print_status "Directory already exists: $dir"
        fi
    done
}

# Start the enhanced automation system
start_automation() {
    print_status "Starting Enhanced PM2 Automation System..."
    
    # Check if ecosystem config exists
    if [ ! -f "ecosystem.config.cjs" ]; then
        print_error "ecosystem.config.cjs not found!"
        exit 1
    fi
    
    # Start all processes
    pm2 start ecosystem.config.cjs
    
    if [ $? -eq 0 ]; then
        print_success "Enhanced automation system started successfully!"
    else
        print_error "Failed to start automation system"
        exit 1
    fi
}

# Show status
show_status() {
    print_status "Showing system status..."
    echo ""
    pm2 status
    echo ""
}

# Show monitoring options
show_monitoring() {
    echo ""
    print_status "Monitoring Options:"
    echo "========================"
    echo "1. Real-time monitoring: pm2 monit"
    echo "2. View logs: pm2 logs"
    echo "3. View specific process: pm2 logs <process-name>"
    echo "4. Restart all: pm2 restart all"
    echo "5. Stop all: pm2 stop all"
    echo ""
}

# Show quick commands
show_quick_commands() {
    echo ""
    print_status "Quick Commands:"
    echo "==================="
    echo "• Start all: pm2 start ecosystem.config.cjs"
    echo "• Stop all: pm2 stop all"
    echo "• Restart all: pm2 restart all"
    echo "• Status: pm2 status"
    echo "• Monitor: pm2 monit"
    echo "• Logs: pm2 logs"
    echo ""
}

# Show new intelligent processes
show_intelligent_processes() {
    echo ""
    print_status "New Intelligent Automations:"
    echo "================================="
    echo "🧠 intelligent-error-recovery (10 min) - Self-healing with learning"
    echo "⏰ adaptive-scheduler (30 min) - Dynamic interval adjustment"
    echo "🤖 ai-code-analyzer (2 hours) - AI-powered code analysis"
    echo "🤝 cross-process-coordinator (15 min) - Intelligent coordination"
    echo ""
}

# Main execution
main() {
    echo "🚀 Enhanced PM2 Automation System - Quick Start"
    echo "================================================"
    echo ""
    
    # Run checks and setup
    check_node
    check_npm
    check_pm2
    install_dependencies
    create_directories
    
    # Start the system
    start_automation
    
    # Show status and information
    show_status
    show_intelligent_processes
    show_monitoring
    show_quick_commands
    
    echo ""
    print_success "🎉 Enhanced PM2 Automation System is now running!"
    echo ""
    print_status "Next steps:"
    echo "1. Monitor the system: pm2 monit"
    echo "2. Check logs: pm2 logs"
    echo "3. View reports in the generated directories"
    echo "4. Read ENHANCED_PM2_AUTOMATION_README.md for detailed information"
    echo ""
    print_status "For help, run: pm2 --help"
    echo ""
}

# Run main function
main "$@"