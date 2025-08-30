#!/bin/bash

# Error Fixing Automation Startup Script
# This script starts all error fixing automations using PM2

set -e

echo "🚀 Starting Error Fixing Automation System..."

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
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Please install PM2 first:"
        echo "npm install -g pm2"
        exit 1
    fi
    print_success "PM2 is available"
}

# Check if we're in the right directory
check_directory() {
    if [ ! -f "ecosystem.config.cjs" ]; then
        print_error "ecosystem.config.cjs not found. Please run this script from the project root directory."
        exit 1
    fi
    print_success "Project directory confirmed"
}

# Start error fixing automations
start_error_fixing() {
    print_status "Starting error fixing automations..."
    
    # Start the comprehensive error fixer
    print_status "Starting comprehensive error fixer..."
    pm2 start ecosystem.config.cjs --only comprehensive-error-fixer
    
    # Start the TypeScript error fixer
    print_status "Starting TypeScript error fixer..."
    pm2 start ecosystem.config.cjs --only typescript-error-fixer
    
    # Start the JSX error fixer
    print_status "Starting JSX/React error fixer..."
    pm2 start ecosystem.config.cjs --only jsx-error-fixer
    
    # Start the error monitor
    print_status "Starting error monitor..."
    pm2 start ecosystem.config.cjs --only error-monitor
    
    print_success "All error fixing automations started successfully!"
}

# Show status of all automations
show_status() {
    print_status "Current PM2 status:"
    pm2 status
    
    print_status "Error fixing automation logs (last 20 lines):"
    echo "----------------------------------------"
    pm2 logs --lines 20
}

# Show specific automation logs
show_logs() {
    local automation_name=$1
    if [ -z "$automation_name" ]; then
        print_error "Please specify an automation name"
        echo "Usage: $0 logs <automation-name>"
        echo "Available automations:"
        echo "  - comprehensive-error-fixer"
        echo "  - typescript-error-fixer"
        echo "  - jsx-error-fixer"
        echo "  - error-monitor"
        exit 1
    fi
    
    print_status "Showing logs for $automation_name:"
    pm2 logs $automation_name --lines 50
}

# Stop all error fixing automations
stop_automations() {
    print_status "Stopping all error fixing automations..."
    
    pm2 stop comprehensive-error-fixer 2>/dev/null || true
    pm2 stop typescript-error-fixer 2>/dev/null || true
    pm2 stop jsx-error-fixer 2>/dev/null || true
    pm2 stop error-monitor 2>/dev/null || true
    
    print_success "All error fixing automations stopped"
}

# Restart all error fixing automations
restart_automations() {
    print_status "Restarting all error fixing automations..."
    
    stop_automations
    sleep 2
    start_error_fixing
    
    print_success "All error fixing automations restarted"
}

# Show help
show_help() {
    echo "Error Fixing Automation Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start all error fixing automations"
    echo "  stop      Stop all error fixing automations"
    echo "  restart   Restart all error fixing automations"
    echo "  status    Show status of all automations"
    echo "  logs      Show logs for a specific automation"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start all automations"
    echo "  $0 logs error-monitor       # Show error monitor logs"
    echo "  $0 status                   # Show current status"
}

# Main script logic
main() {
    local command=${1:-start}
    
    case $command in
        "start")
            check_pm2
            check_directory
            start_error_fixing
            show_status
            ;;
        "stop")
            check_pm2
            stop_automations
            ;;
        "restart")
            check_pm2
            check_directory
            restart_automations
            show_status
            ;;
        "status")
            check_pm2
            show_status
            ;;
        "logs")
            check_pm2
            show_logs $2
            ;;
        "help"|"--help"|"-h")
            show_help
            ;;
        *)
            print_error "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"