#!/bin/bash

# Zion Tech Group - PM2 Startup Script
# This script starts all PM2 processes using the ecosystem configuration

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

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
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

# Function to check if ecosystem config exists
check_ecosystem() {
    if [ ! -f "ecosystem.config.js" ]; then
        print_error "ecosystem.config.js not found in current directory"
        print_status "Please run this script from the project root directory"
        exit 1
    fi
}

# Function to create logs directory
create_logs_dir() {
    if [ ! -d "logs" ]; then
        print_status "Creating logs directory..."
        mkdir -p logs
        print_success "Logs directory created"
    fi
}

# Function to start PM2 processes
start_pm2() {
    print_status "Starting PM2 processes..."
    
    # Start all processes from ecosystem config
    pm2 start ecosystem.config.js
    
    if [ $? -eq 0 ]; then
        print_success "All PM2 processes started successfully"
    else
        print_error "Failed to start PM2 processes"
        exit 1
    fi
}

# Function to show PM2 status
show_status() {
    print_status "Current PM2 status:"
    pm2 status
}

# Function to show PM2 logs
show_logs() {
    print_status "Recent PM2 logs:"
    pm2 logs --lines 20
}

# Function to setup PM2 startup script
setup_startup() {
    print_status "Setting up PM2 startup script..."
    pm2 startup
    pm2 save
    
    if [ $? -eq 0 ]; then
        print_success "PM2 startup script configured"
        print_status "PM2 will automatically start on system reboot"
    else
        print_warning "Failed to setup PM2 startup script"
    fi
}

# Function to show help
show_help() {
    echo "Zion Tech Group - PM2 Startup Script"
    echo ""
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -h, --help     Show this help message"
    echo "  -s, --status   Show PM2 status after startup"
    echo "  -l, --logs     Show recent logs after startup"
    echo "  -u, --startup  Setup PM2 startup script"
    echo "  -a, --all      Show status, logs, and setup startup"
    echo ""
    echo "Examples:"
    echo "  $0              # Start PM2 processes"
    echo "  $0 -s          # Start and show status"
    echo "  $0 -a          # Start, show status, logs, and setup startup"
}

# Main execution
main() {
    local show_status_flag=false
    local show_logs_flag=false
    local setup_startup_flag=false
    
    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            -h|--help)
                show_help
                exit 0
                ;;
            -s|--status)
                show_status_flag=true
                shift
                ;;
            -l|--logs)
                show_logs_flag=true
                shift
                ;;
            -u|--startup)
                setup_startup_flag=true
                shift
                ;;
            -a|--all)
                show_status_flag=true
                show_logs_flag=true
                setup_startup_flag=true
                shift
                ;;
            *)
                print_error "Unknown option: $1"
                show_help
                exit 1
                ;;
        esac
    done
    
    print_status "Starting Zion Tech Group PM2 services..."
    
    # Check prerequisites
    check_pm2
    check_ecosystem
    create_logs_dir
    
    # Start PM2 processes
    start_pm2
    
    # Wait a moment for processes to fully start
    sleep 3
    
    # Show status if requested
    if [ "$show_status_flag" = true ]; then
        show_status
    fi
    
    # Show logs if requested
    if [ "$show_logs_flag" = true ]; then
        show_logs
    fi
    
    # Setup startup script if requested
    if [ "$setup_startup_flag" = true ]; then
        setup_startup
    fi
    
    print_success "PM2 startup completed successfully!"
    print_status "Use 'pm2 status' to check process status"
    print_status "Use 'pm2 logs' to view real-time logs"
    print_status "Use 'pm2 monit' to open PM2 monitoring dashboard"
}

# Run main function with all arguments
main "$@"