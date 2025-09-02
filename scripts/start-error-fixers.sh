#!/bin/bash

# Error Fixer Automation Startup Script
# This script starts all error-fixing automations using PM2

set -e

echo "🔧 Starting Error Fixer Automations..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Check if ecosystem config exists
if [ ! -f "ecosystem.config.cjs" ]; then
    echo "❌ ecosystem.config.cjs not found. Please run this script from the project root."
    exit 1
fi

# Function to start specific error fixers
start_error_fixers() {
    echo "🚀 Starting error fixer automations..."
    
    # Start all error fixers
    pm2 start ecosystem.config.cjs --only error-fixers
    
    echo "✅ Error fixer automations started successfully!"
    echo ""
    echo "📊 PM2 Status:"
    pm2 status
    echo ""
    echo "📋 Available commands:"
    echo "  pm2 logs --lines 50                    # View recent logs"
    echo "  pm2 monit                              # Monitor processes"
    echo "  pm2 restart ecosystem.config.cjs       # Restart all automations"
    echo "  pm2 stop ecosystem.config.cjs          # Stop all automations"
    echo "  pm2 delete ecosystem.config.cjs        # Remove all automations"
}

# Function to start only error fixers
start_only_error_fixers() {
    echo "🚀 Starting only error fixer automations..."
    
    # Start specific error fixers
    pm2 start ecosystem.config.cjs --only console-error-fixer,comprehensive-error-fixer,typescript-error-fixer,jsx-error-fixer,master-error-fixer
    
    echo "✅ Error fixer automations started successfully!"
    echo ""
    echo "📊 PM2 Status:"
    pm2 status
}

# Function to check status
check_status() {
    echo "📊 PM2 Status:"
    pm2 status
    
    echo ""
    echo "📋 Error Fixer Status:"
    pm2 list | grep -E "(console-error-fixer|comprehensive-error-fixer|typescript-error-fixer|jsx-error-fixer|master-error-fixer)" || echo "No error fixers running"
}

# Function to view logs
view_logs() {
    local service=${1:-"all"}
    
    if [ "$service" = "all" ]; then
        echo "📋 Viewing logs for all error fixers..."
        pm2 logs --lines 50
    else
        echo "📋 Viewing logs for $service..."
        pm2 logs $service --lines 50
    fi
}

# Function to restart error fixers
restart_error_fixers() {
    echo "🔄 Restarting error fixer automations..."
    pm2 restart ecosystem.config.cjs --only error-fixers
    echo "✅ Error fixer automations restarted!"
}

# Function to stop error fixers
stop_error_fixers() {
    echo "🛑 Stopping error fixer automations..."
    pm2 stop ecosystem.config.cjs --only error-fixers
    echo "✅ Error fixer automations stopped!"
}

# Function to remove error fixers
remove_error_fixers() {
    echo "🗑️  Removing error fixer automations..."
    pm2 delete ecosystem.config.cjs --only error-fixers
    echo "✅ Error fixer automations removed!"
}

# Function to show help
show_help() {
    echo "🔧 Error Fixer Automation Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start           Start all error fixer automations"
    echo "  start-only      Start only error fixer automations (not other PM2 services)"
    echo "  status          Check status of error fixer automations"
    echo "  logs [SERVICE]  View logs (default: all, or specify service name)"
    echo "  restart         Restart error fixer automations"
    echo "  stop            Stop error fixer automations"
    echo "  remove          Remove error fixer automations from PM2"
    echo "  help            Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start all error fixers"
    echo "  $0 logs console-error-fixer # View logs for console error fixer"
    echo "  $0 status                   # Check status"
    echo ""
    echo "Available Services:"
    echo "  - console-error-fixer"
    echo "  - comprehensive-error-fixer"
    echo "  - typescript-error-fixer"
    echo "  - jsx-error-fixer"
    echo "  - master-error-fixer"
}

# Main script logic
case "${1:-start}" in
    "start")
        start_error_fixers
        ;;
    "start-only")
        start_only_error_fixers
        ;;
    "status")
        check_status
        ;;
    "logs")
        view_logs "$2"
        ;;
    "restart")
        restart_error_fixers
        ;;
    "stop")
        stop_error_fixers
        ;;
    "remove")
        remove_error_fixers
        ;;
    "help"|"-h"|"--help")
        show_help
        ;;
    *)
        echo "❌ Unknown command: $1"
        echo "Use '$0 help' for usage information"
        exit 1
        ;;
esac