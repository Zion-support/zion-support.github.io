#!/bin/bash

# 🚀 Intelligent PM2 Automation System - Quick Start Script
# This script sets up and starts all intelligent PM2 automation processes

set -e

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

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command_exists pm2; then
        print_error "PM2 is not installed. Please install it first:"
        echo "npm install -g pm2"
        exit 1
    fi
    print_success "PM2 is installed"
}

# Function to check if Node.js is installed
check_node() {
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install it first."
        exit 1
    fi
    
    NODE_VERSION=$(node --version)
    print_success "Node.js $NODE_VERSION is installed"
}

# Function to check if npm is available
check_npm() {
    if ! command_exists npm; then
        print_error "npm is not installed. Please install it first."
        exit 1
    fi
    
    NPM_VERSION=$(npm --version)
    print_success "npm $NPM_VERSION is available"
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p logs/pm2
    mkdir -p reports
    
    print_success "Directories created"
}

# Function to install dependencies
install_dependencies() {
    print_status "Installing project dependencies..."
    
    if [ -f "package-lock.json" ]; then
        npm ci
    else
        npm install
    fi
    
    print_success "Dependencies installed"
}

# Function to stop existing PM2 processes
stop_existing_processes() {
    print_status "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "intelligent"; then
        pm2 stop ecosystem.config.js || true
        pm2 delete ecosystem.config.js || true
        print_success "Existing processes stopped"
    else
        print_status "No existing processes found"
    fi
}

# Function to start PM2 processes
start_pm2_processes() {
    print_status "Starting intelligent PM2 automation processes..."
    
    pm2 start ecosystem.config.js
    
    if [ $? -eq 0 ]; then
        print_success "PM2 processes started successfully"
    else
        print_error "Failed to start PM2 processes"
        exit 1
    fi
}

# Function to check PM2 status
check_pm2_status() {
    print_status "Checking PM2 process status..."
    
    sleep 2
    
    echo ""
    echo "📊 PM2 Process Status:"
    echo "======================"
    pm2 status
    
    echo ""
    echo "📋 Process Details:"
    echo "=================="
    pm2 jlist | jq -r '.[] | "\(.name): \(.pm2_env.status) - Memory: \(.monit.memory/1024/1024 | round)MB, CPU: \(.monit.cpu)%"' 2>/dev/null || pm2 list
}

# Function to show automation commands
show_automation_commands() {
    echo ""
    echo "🚀 Available Automation Commands:"
    echo "================================="
    echo "npm run test:smart          - Run smart test runner"
    echo "npm run security:scan       - Run security scanner"
    echo "npm run bundle:optimize     - Run bundle optimizer"
    echo "npm run git:workflow        - Run git workflow automator"
    echo "npm run automation:full     - Run all automations"
    echo ""
    echo "📊 Monitoring Commands:"
    echo "======================="
    echo "npm run pm2:status          - Check PM2 status"
    echo "npm run pm2:monit           - Open PM2 monitoring"
    echo "npm run pm2:logs            - View all logs"
    echo "npm run pm2:restart         - Restart all processes"
    echo "npm run automation:stop     - Stop all automations"
}

# Function to show automation schedule
show_automation_schedule() {
    echo ""
    echo "⏰ Automation Schedule:"
    echo "======================"
    echo "Smart Test Runner     - Every 2 hours"
    echo "Git Workflow          - Every 3 hours"
    echo "Code Quality          - Every 12 hours"
    echo "Performance Monitor   - Every 8 hours"
    echo "Lint Fixer            - Every 6 hours"
    echo "Auto Commit           - Every 4 hours"
    echo "Dependency Monitor    - Weekly (Sunday)"
    echo "Security Scanner      - Daily (midnight)"
    echo "Bundle Optimizer      - Daily (6 AM)"
}

# Function to show next steps
show_next_steps() {
    echo ""
    echo "🎯 Next Steps:"
    echo "=============="
    echo "1. Monitor the automation processes: npm run pm2:monit"
    echo "2. Check logs for any issues: npm run pm2:logs"
    echo "3. Run individual automations to test: npm run test:smart"
    echo "4. Review generated reports in logs/pm2/ directory"
    echo "5. Customize automation schedules in ecosystem.config.js"
    echo ""
    echo "📚 Documentation:"
    echo "================="
    echo "Read PM2-AUTOMATION-README.md for detailed information"
    echo "Visit https://pm2.keymetrics.io/ for PM2 documentation"
}

# Main execution
main() {
    echo ""
    echo "🚀 Intelligent PM2 Automation System - Quick Start"
    echo "=================================================="
    echo ""
    
    # Check prerequisites
    print_status "Checking prerequisites..."
    check_node
    check_npm
    check_pm2
    
    # Create directories
    create_directories
    
    # Install dependencies
    install_dependencies
    
    # Stop existing processes
    stop_existing_processes
    
    # Start PM2 processes
    start_pm2_processes
    
    # Check status
    check_pm2_status
    
    # Show information
    show_automation_commands
    show_automation_schedule
    show_next_steps
    
    echo ""
    print_success "🎉 Intelligent PM2 Automation System is now running!"
    echo ""
    echo "💡 Tip: Use 'npm run pm2:monit' to monitor all processes in real-time"
    echo ""
}

# Run main function
main "$@"