#!/bin/bash

# 🚀 Enhanced PM2 Automation System - Quick Start Script
# Zion Tech Group

set -e

echo "🚀 Starting Enhanced PM2 Automation System..."
echo "
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
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}🎉 $1${NC}"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
        print_success "PM2 installed successfully!"
    else
        print_status "PM2 is already installed"
    fi
}

# Check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    print_status "Node.js is installed"
}

# Check if npm is available
check_npm() {
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    print_status "npm is available"
}

# Install dependencies
install_dependencies() {
    print_info "Installing project dependencies..."
    if npm install; then
        print_success "Dependencies installed successfully!"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
}

# Start the enhanced automation system
start_automation() {
    print_info "Starting Enhanced PM2 Automation System..."
    
    # Check if PM2 processes are already running
    if pm2 list | grep -q "online"; then
        print_warning "PM2 processes are already running. Stopping them first..."
        pm2 stop all
        pm2 delete all
    fi
    
    # Start the enhanced automation system
    if npm run automation:enhanced:start; then
        print_success "Enhanced automation system started successfully!"
    else
        print_error "Failed to start automation system"
        exit 1
    fi
}

# Show status
show_status() {
    print_info "Checking automation system status..."
    npm run automation:enhanced:status
}

# Show available commands
show_commands() {
    echo ""
    echo "🚀 Enhanced PM2 Automation System - Available Commands"
    echo "    echo ""
}

# Main execution
main() {
    echo "🚀 Enhanced PM2 Automation System - Quick Start"
    echo "    echo ""
}

# Run main function
main "$@"