#!/bin/bash

# 🚀 Zion App - Intelligent Automation Startup Script
# This script starts all PM2 automations and provides monitoring

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
ECOSYSTEM_FILE="ecosystem.config.cjs"
DASHBOARD_SCRIPT="./scripts/automation/smart-automation-dashboard.cjs"
LOG_DIR="./automation-logs"
REPORT_DIR="./automation-reports"

echo -e "${CYAN}🚀 Starting Zion App Intelligent Automation System${NC}"
echo -e "${CYAN}================================================${NC}"
echo ""

# Function to print colored output
print_status() {
    local status=$1
    local message=$2
    case $status in
        "info") echo -e "${BLUE}ℹ️  $message${NC}" ;;
        "success") echo -e "${GREEN}✅ $message${NC}" ;;
        "warning") echo -e "${YELLOW}⚠️  $message${NC}" ;;
        "error") echo -e "${RED}❌ $message${NC}" ;;
        "header") echo -e "${PURPLE}🎯 $message${NC}" ;;
    esac
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_status "error" "PM2 is not installed. Please install it first:"
        echo "   npm install -g pm2"
        exit 1
    fi
    print_status "success" "PM2 is installed and available"
}

# Function to create necessary directories
create_directories() {
    print_status "info" "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$REPORT_DIR"
    mkdir -p "./ai-analysis-reports"
    mkdir -p "./dependency-monitor-reports"
    mkdir -p "./build-optimizer-reports"
    mkdir -p "./automation-dashboard-reports"
    
    print_status "success" "Directories created successfully"
}

# Function to check ecosystem file
check_ecosystem() {
    if [ ! -f "$ECOSYSTEM_FILE" ]; then
        print_status "error" "Ecosystem file not found: $ECOSYSTEM_FILE"
        exit 1
    fi
    print_status "success" "Ecosystem configuration file found"
}

# Function to start PM2 ecosystem
start_ecosystem() {
    print_status "info" "Starting PM2 ecosystem..."
    
    # Kill any existing PM2 processes
    pm2 kill 2>/dev/null || true
    
    # Start the ecosystem
    pm2 start "$ECOSYSTEM_FILE"
    
    if [ $? -eq 0 ]; then
        print_status "success" "PM2 ecosystem started successfully"
    else
        print_status "error" "Failed to start PM2 ecosystem"
        exit 1
    fi
}

# Function to start the dashboard
start_dashboard() {
    print_status "info" "Starting Smart Automation Dashboard..."
    
    if [ -f "$DASHBOARD_SCRIPT" ]; then
        # Start dashboard in background
        node "$DASHBOARD_SCRIPT" > "$LOG_DIR/dashboard.log" 2>&1 &
        DASHBOARD_PID=$!
        echo $DASHBOARD_PID > "$LOG_DIR/dashboard.pid"
        print_status "success" "Dashboard started with PID: $DASHBOARD_PID"
    else
        print_status "warning" "Dashboard script not found, skipping..."
    fi
}

# Function to show status
show_status() {
    echo ""
    print_status "header" "Automation System Status"
    echo "----------------------------------------"
    
    # Show PM2 status
    echo -e "${BLUE}📊 PM2 Processes:${NC}"
    pm2 list
    
    echo ""
    
    # Show dashboard status if running
    if [ -f "$LOG_DIR/dashboard.pid" ]; then
        DASHBOARD_PID=$(cat "$LOG_DIR/dashboard.pid")
        if ps -p $DASHBOARD_PID > /dev/null; then
            print_status "success" "Dashboard is running (PID: $DASHBOARD_PID)"
        else
            print_status "warning" "Dashboard process not found"
        fi
    fi
    
    echo ""
    print_status "info" "Logs are available in: $LOG_DIR"
    print_status "info" "Reports are available in: $REPORT_DIR"
}

# Function to show automation schedule
show_schedule() {
    echo ""
    print_status "header" "Automation Schedule"
    echo "----------------------------------------"
    
    echo -e "${CYAN}🤖 AI-Powered Code Quality Analyzer${NC}"
    echo "   Runs every 4 hours"
    echo "   Monitors: Code smells, complexity, performance patterns"
    echo ""
    
    echo -e "${CYAN}🔍 Smart Dependency Health Monitor${NC}"
    echo "   Runs every 6 hours"
    echo "   Monitors: Vulnerabilities, outdated packages, deprecations"
    echo ""
    
    echo -e "${CYAN}🚀 Intelligent Build Optimizer${NC}"
    echo "   Runs every 2 hours"
    echo "   Monitors: Build performance, bundle size, optimizations"
    echo ""
    
    echo -e "${CYAN}🔧 Console Error Fixer${NC}"
    echo "   Runs every 15 minutes (HIGHEST PRIORITY)"
    echo "   Monitors: Console statements, error patterns"
    echo ""
    
    echo -e "${CYAN}🔗 Enhanced Link Checker${NC}"
    echo "   Runs every 30 minutes"
    echo "   Monitors: Link integrity, broken links"
    echo ""
    
    echo -e "${CYAN}📊 Smart Automation Dashboard${NC}"
    echo "   Updates every 5 minutes"
    echo "   Monitors: System health, automation status, recommendations"
    echo ""
}

# Function to show useful commands
show_commands() {
    echo ""
    print_status "header" "Useful Commands"
    echo "----------------------------------------"
    
    echo -e "${YELLOW}PM2 Commands:${NC}"
    echo "   pm2 list                    - Show all processes"
    echo "   pm2 logs                    - Show all logs"
    echo "   pm2 logs [process-name]    - Show specific process logs"
    echo "   pm2 restart [process-name] - Restart specific process"
    echo "   pm2 stop [process-name]    - Stop specific process"
    echo "   pm2 delete all             - Stop and delete all processes"
    echo ""
    
    echo -e "${YELLOW}Monitoring Commands:${NC}"
    echo "   tail -f $LOG_DIR/dashboard.log    - Monitor dashboard logs"
    echo "   pm2 monit                   - PM2 monitoring interface"
    echo "   pm2 plus                    - PM2 web interface"
    echo ""
    
    echo -e "${YELLOW}Report Commands:${NC}"
    echo "   ls -la ./ai-analysis-reports/     - View AI analysis reports"
    echo "   ls -la ./dependency-monitor-reports/ - View dependency reports"
    echo "   ls -la ./build-optimizer-reports/ - View build optimization reports"
    echo "   ls -la ./automation-dashboard-reports/ - View dashboard reports"
}

# Function to check system requirements
check_system_requirements() {
    print_status "info" "Checking system requirements..."
    
    # Check Node.js version
    if command -v node &> /dev/null; then
        NODE_VERSION=$(node --version)
        print_status "success" "Node.js version: $NODE_VERSION"
    else
        print_status "error" "Node.js is not installed"
        exit 1
    fi
    
    # Check npm version
    if command -v npm &> /dev/null; then
        NPM_VERSION=$(npm --version)
        print_status "success" "npm version: $NPM_VERSION"
    else
        print_status "error" "npm is not installed"
        exit 1
    fi
    
    # Check available memory
    if command -v free &> /dev/null; then
        MEMORY_KB=$(free | grep Mem | awk '{print $2}')
        MEMORY_GB=$((MEMORY_KB / 1024 / 1024))
        if [ $MEMORY_GB -lt 2 ]; then
            print_status "warning" "Low memory available: ${MEMORY_GB}GB (recommended: 2GB+)"
        else
            print_status "success" "Available memory: ${MEMORY_GB}GB"
        fi
    fi
    
    # Check available disk space
    if command -v df &> /dev/null; then
        DISK_AVAILABLE=$(df . | tail -1 | awk '{print $4}')
        DISK_GB=$((DISK_AVAILABLE / 1024 / 1024))
        if [ $DISK_GB -lt 1 ]; then
            print_status "warning" "Low disk space available: ${DISK_GB}GB (recommended: 1GB+)"
        else
            print_status "success" "Available disk space: ${DISK_GB}GB"
        fi
    fi
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 Zion App Intelligent Automation System${NC}"
    echo -e "${PURPLE}============================================${NC}"
    echo ""
    
    # Check system requirements
    check_system_requirements
    
    # Check PM2 installation
    check_pm2
    
    # Check ecosystem file
    check_ecosystem
    
    # Create directories
    create_directories
    
    # Start ecosystem
    start_ecosystem
    
    # Start dashboard
    start_dashboard
    
    # Wait a moment for processes to start
    sleep 3
    
    # Show status
    show_status
    
    # Show schedule
    show_schedule
    
    # Show useful commands
    show_commands
    
    echo ""
    print_status "success" "🎉 Intelligent Automation System is now running!"
    echo ""
    print_status "info" "The system will automatically:"
    echo "   • Monitor code quality and suggest improvements"
    echo "   • Track dependency health and security"
    echo "   • Optimize build performance"
    echo "   • Provide real-time insights via the dashboard"
    echo ""
    print_status "info" "Check the logs and reports for detailed information"
    echo ""
}

# Handle script arguments
case "${1:-}" in
    "status")
        show_status
        ;;
    "schedule")
        show_schedule
        ;;
    "commands")
        show_commands
        ;;
    "restart")
        print_status "info" "Restarting automation system..."
        pm2 restart all
        print_status "success" "All automations restarted"
        ;;
    "stop")
        print_status "info" "Stopping automation system..."
        pm2 stop all
        if [ -f "$LOG_DIR/dashboard.pid" ]; then
            DASHBOARD_PID=$(cat "$LOG_DIR/dashboard.pid")
            kill $DASHBOARD_PID 2>/dev/null || true
            rm -f "$LOG_DIR/dashboard.pid"
        fi
        print_status "success" "All automations stopped"
        ;;
    "logs")
        print_status "info" "Showing recent logs..."
        pm2 logs --lines 50
        ;;
    "help"|"-h"|"--help")
        echo "Usage: $0 [command]"
        echo ""
        echo "Commands:"
        echo "  (no args)  Start the automation system"
        echo "  status     Show current status"
        echo "  schedule   Show automation schedule"
        echo "  commands   Show useful commands"
        echo "  restart    Restart all automations"
        echo "  stop       Stop all automations"
        echo "  logs       Show recent logs"
        echo "  help       Show this help message"
        ;;
    *)
        main
        ;;
esac