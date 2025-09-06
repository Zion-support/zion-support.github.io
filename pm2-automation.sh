#!/bin/bash

# PM2 Automation Script for Error Fixing
# This script manages PM2 processes for automated error fixing

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Create logs directory if it doesn't exist
mkdir -p logs

# Function to print colored output
print_status() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Function to start all automation processes
start_automation() {
    print_status "Starting PM2 automation processes..."
    
    # Start all processes
    pm2 start ecosystem.config.js
    
    if [ $? -eq 0 ]; then
        print_success "All automation processes started successfully!"
        print_status "Dashboard available at: http://localhost:3001"
    else
        print_error "Failed to start some automation processes"
        exit 1
    fi
}

# Function to stop all automation processes
stop_automation() {
    print_status "Stopping PM2 automation processes..."
    
    pm2 stop ecosystem.config.js
    
    if [ $? -eq 0 ]; then
        print_success "All automation processes stopped successfully!"
    else
        print_error "Failed to stop some automation processes"
        exit 1
    fi
}

# Function to restart all automation processes
restart_automation() {
    print_status "Restarting PM2 automation processes..."
    
    pm2 restart ecosystem.config.js
    
    if [ $? -eq 0 ]; then
        print_success "All automation processes restarted successfully!"
    else
        print_error "Failed to restart some automation processes"
        exit 1
    fi
}

# Function to show status of automation processes
show_status() {
    print_status "PM2 automation processes status:"
    pm2 status
}

# Function to show logs
show_logs() {
    local app_name=${1:-""}
    
    if [ -z "$app_name" ]; then
        print_status "Showing logs for all processes:"
        pm2 logs
    else
        print_status "Showing logs for $app_name:"
        pm2 logs "$app_name"
    fi
}

# Function to run a quick fix
quick_fix() {
    print_status "Running quick error fix..."
    
    # Run the lint error fixer
    node automation/lint-error-fixer.cjs all
    
    if [ $? -eq 0 ]; then
        print_success "Quick fix completed successfully!"
    else
        print_error "Quick fix failed"
        exit 1
    fi
}

# Function to run type check
type_check() {
    print_status "Running TypeScript type check..."
    
    npm run type-check
    
    if [ $? -eq 0 ]; then
        print_success "TypeScript type check passed!"
    else
        print_error "TypeScript type check failed"
        exit 1
    fi
}

# Function to run lint check
lint_check() {
    print_status "Running ESLint check..."
    
    npm run lint
    
    if [ $? -eq 0 ]; then
        print_success "ESLint check passed!"
    else
        print_error "ESLint check failed"
        exit 1
    fi
}

# Function to show help
show_help() {
    echo "PM2 Automation Script for Error Fixing"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start       Start all automation processes"
    echo "  stop        Stop all automation processes"
    echo "  restart     Restart all automation processes"
    echo "  status      Show status of all processes"
    echo "  logs        Show logs for all processes"
    echo "  logs [app]  Show logs for specific app"
    echo "  quick-fix   Run a quick error fix"
    echo "  type-check  Run TypeScript type check"
    echo "  lint-check  Run ESLint check"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 logs error-fixer"
    echo "  $0 quick-fix"
}

# Main script logic
case "$1" in
    start)
        start_automation
        ;;
    stop)
        stop_automation
        ;;
    restart)
        restart_automation
        ;;
    status)
        show_status
        ;;
    logs)
        show_logs "$2"
        ;;
    quick-fix)
        quick_fix
        ;;
    type-check)
        type_check
        ;;
    lint-check)
        lint_check
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac