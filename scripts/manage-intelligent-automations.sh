#!/bin/bash

# Intelligent PM2 Automation Management Script
# Provides easy management of all intelligent automations

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
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRIPTS_DIR="$PROJECT_ROOT/scripts/automation"
LOGS_DIR="$PROJECT_ROOT/logs"
REPORTS_DIR="$PROJECT_ROOT"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Please install it first:"
        echo "npm install -g pm2"
        exit 1
    fi
}

# Function to check if required directories exist
check_directories() {
    if [ ! -d "$SCRIPTS_DIR" ]; then
        print_error "Automation scripts directory not found: $SCRIPTS_DIR"
        exit 1
    fi
    
    if [ ! -d "$LOGS_DIR" ]; then
        print_warning "Logs directory not found, creating: $LOGS_DIR"
        mkdir -p "$LOGS_DIR"
    fi
}

# Function to start all intelligent automations
start_all() {
    print_header "Starting All Intelligent Automations"
    
    check_pm2
    check_directories
    
    print_status "Starting AI Code Quality Automation..."
    pm2 start "$SCRIPTS_DIR/ai-code-quality-automation.cjs" --name "ai-code-quality" --log "$LOGS_DIR/ai-code-quality.log"
    
    print_status "Starting Intelligent Performance Automation..."
    pm2 start "$SCRIPTS_DIR/intelligent-performance-automation.cjs" --name "intelligent-performance" --log "$LOGS_DIR/intelligent-performance.log"
    
    print_status "Starting Smart Dependency Automation..."
    pm2 start "$SCRIPTS_DIR/smart-dependency-automation.cjs" --name "smart-dependency" --log "$LOGS_DIR/smart-dependency.log"
    
    print_status "Starting Master Automation Controller..."
    pm2 start "$SCRIPTS_DIR/master-automation-controller.cjs" --name "master-controller" --log "$LOGS_DIR/master-controller.log"
    
    print_status "All intelligent automations started successfully!"
    pm2 list
}

# Function to stop all intelligent automations
stop_all() {
    print_header "Stopping All Intelligent Automations"
    
    check_pm2
    
    print_status "Stopping all intelligent automations..."
    pm2 stop ai-code-quality intelligent-performance smart-dependency master-controller 2>/dev/null || true
    
    print_status "All intelligent automations stopped!"
    pm2 list
}

# Function to restart all intelligent automations
restart_all() {
    print_header "Restarting All Intelligent Automations"
    
    check_pm2
    
    print_status "Restarting all intelligent automations..."
    pm2 restart ai-code-quality intelligent-performance smart-dependency master-controller 2>/dev/null || true
    
    print_status "All intelligent automations restarted!"
    pm2 list
}

# Function to show status of all automations
show_status() {
    print_header "Intelligent Automation Status"
    
    check_pm2
    
    echo -e "${CYAN}PM2 Process List:${NC}"
    pm2 list
    
    echo -e "\n${CYAN}Detailed Status:${NC}"
    pm2 show ai-code-quality 2>/dev/null || echo "ai-code-quality: Not running"
    pm2 show intelligent-performance 2>/dev/null || echo "intelligent-performance: Not running"
    pm2 show smart-dependency 2>/dev/null || echo "smart-dependency: Not running"
    pm2 show master-controller 2>/dev/null || echo "master-controller: Not running"
}

# Function to show logs
show_logs() {
    local automation=${1:-"all"}
    
    print_header "Showing Logs for: $automation"
    
    check_pm2
    
    case $automation in
        "ai-code-quality"|"ai")
            pm2 logs ai-code-quality --lines 50
            ;;
        "intelligent-performance"|"performance"|"perf")
            pm2 logs intelligent-performance --lines 50
            ;;
        "smart-dependency"|"dependency"|"dep")
            pm2 logs smart-dependency --lines 50
            ;;
        "master-controller"|"master"|"controller")
            pm2 logs master-controller --lines 50
            ;;
        "all")
            pm2 logs --lines 30
            ;;
        *)
            print_error "Unknown automation: $automation"
            echo "Available options: ai-code-quality, intelligent-performance, smart-dependency, master-controller, all"
            exit 1
            ;;
    esac
}

# Function to monitor automations in real-time
monitor() {
    print_header "Real-time Automation Monitoring"
    
    check_pm2
    
    print_status "Opening PM2 monitoring interface..."
    pm2 monit
}

# Function to show reports
show_reports() {
    print_header "Intelligent Automation Reports"
    
    echo -e "${CYAN}Available Reports:${NC}"
    
    # AI Code Quality Reports
    if [ -d "$REPORTS_DIR/ai-quality-reports" ]; then
        echo -e "\n${GREEN}AI Code Quality Reports:${NC}"
        ls -la "$REPORTS_DIR/ai-quality-reports/" | head -10
    fi
    
    # Performance Reports
    if [ -d "$REPORTS_DIR/performance-reports" ]; then
        echo -e "\n${GREEN}Performance Reports:${NC}"
        ls -la "$REPORTS_DIR/performance-reports/" | head -10
    fi
    
    # Dependency Reports
    if [ -d "$REPORTS_DIR/dependency-reports" ]; then
        echo -e "\n${GREEN}Dependency Reports:${NC}"
        ls -la "$REPORTS_DIR/dependency-reports/" | head -10
    fi
    
    # Master Controller Reports
    if [ -d "$REPORTS_DIR/master-automation-reports" ]; then
        echo -e "\n${GREEN}Master Controller Reports:${NC}"
        ls -la "$REPORTS_DIR/master-automation-reports/" | head -10
    fi
}

# Function to clean up old reports and logs
cleanup() {
    print_header "Cleaning Up Old Reports and Logs"
    
    print_warning "This will remove old reports and logs. Are you sure? (y/N)"
    read -r response
    
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        print_status "Cleaning up old reports..."
        
        # Remove reports older than 30 days
        find "$REPORTS_DIR" -name "*.json" -type f -mtime +30 -delete 2>/dev/null || true
        
        # Remove logs older than 7 days
        find "$LOGS_DIR" -name "*.log" -type f -mtime +7 -delete 2>/dev/null || true
        
        print_status "Cleanup completed!"
    else
        print_status "Cleanup cancelled."
    fi
}

# Function to show dashboard
show_dashboard() {
    print_header "Intelligent Automation Dashboard"
    
    print_status "Dashboard is available at: http://localhost:3001"
    echo -e "${CYAN}Available endpoints:${NC}"
    echo "  GET  /api/status      - System status"
    echo "  GET  /api/health      - Health check"
    echo "  GET  /api/automations - Automation details"
    echo "  POST /api/start       - Start automation(s)"
    echo "  POST /api/stop        - Stop automation(s)"
    echo "  POST /api/restart     - Restart automation(s)"
    
    echo -e "\n${CYAN}Testing dashboard connectivity...${NC}"
    if curl -s http://localhost:3001/api/status > /dev/null 2>&1; then
        print_status "Dashboard is running!"
        echo -e "${GREEN}Status:${NC}"
        curl -s http://localhost:3001/api/status | jq '.' 2>/dev/null || curl -s http://localhost:3001/api/status
    else
        print_warning "Dashboard is not running. Start it with: ./scripts/manage-intelligent-automations.sh start"
    fi
}

# Function to install dependencies
install_deps() {
    print_header "Installing Dependencies"
    
    print_status "Installing required npm packages..."
    
    cd "$PROJECT_ROOT"
    
    # Install glob package if not present
    if ! npm list glob >/dev/null 2>&1; then
        print_status "Installing glob package..."
        npm install glob
    fi
    
    # Install chokidar package if not present
    if ! npm list chokidar >/dev/null 2>&1; then
        print_status "Installing chokidar package..."
        npm install chokidar
    fi
    
    print_status "Dependencies installed successfully!"
}

# Function to show help
show_help() {
    print_header "Intelligent PM2 Automation Management"
    
    echo -e "${CYAN}Usage:${NC}"
    echo "  $0 [COMMAND] [OPTIONS]"
    
    echo -e "\n${CYAN}Commands:${NC}"
    echo "  start       - Start all intelligent automations"
    echo "  stop        - Stop all intelligent automations"
    echo "  restart     - Restart all intelligent automations"
    echo "  status      - Show status of all automations"
    echo "  logs        - Show logs (use: logs [automation])"
    echo "  monitor     - Open real-time monitoring"
    echo "  reports     - Show available reports"
    echo "  dashboard   - Show dashboard information"
    echo "  cleanup     - Clean up old reports and logs"
    echo "  install     - Install required dependencies"
    echo "  help        - Show this help message"
    
    echo -e "\n${CYAN}Examples:${NC}"
    echo "  $0 start                    # Start all automations"
    echo "  $0 logs ai-code-quality     # Show AI quality logs"
    echo "  $0 logs all                 # Show all logs"
    echo "  $0 status                   # Show status"
    echo "  $0 dashboard                # Show dashboard info"
    
    echo -e "\n${CYAN}Available Automations:${NC}"
    echo "  ai-code-quality         - AI-powered code quality analysis"
    echo "  intelligent-performance - Performance optimization"
    echo "  smart-dependency        - Dependency management"
    echo "  master-controller       - Central automation controller"
}

# Main script logic
main() {
    local command=${1:-"help"}
    
    case $command in
        "start")
            start_all
            ;;
        "stop")
            stop_all
            ;;
        "restart")
            restart_all
            ;;
        "status")
            show_status
            ;;
        "logs")
            show_logs "$2"
            ;;
        "monitor")
            monitor
            ;;
        "reports")
            show_reports
            ;;
        "dashboard")
            show_dashboard
            ;;
        "cleanup")
            cleanup
            ;;
        "install")
            install_deps
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