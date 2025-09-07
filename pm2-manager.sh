#!/bin/bash

# PM2 Manager for Zion Website Automation
# This script provides easy management of all PM2 automation processes

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
ECOSYSTEM_FILE="ecosystem.config.js"
LOG_DIR="automation/logs"
PM2_LOG_DIR="$HOME/.pm2/logs"

# Ensure PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        echo -e "${RED}❌ PM2 is not installed. Installing PM2...${NC}"
        npm install -g pm2
        echo -e "${GREEN}✅ PM2 installed successfully${NC}"
    fi
}

# Ensure log directories exist
setup_logs() {
    echo -e "${BLUE}📁 Setting up log directories...${NC}"
    mkdir -p "$LOG_DIR"
    mkdir -p "$PM2_LOG_DIR"
    echo -e "${GREEN}✅ Log directories ready${NC}"
}

# Start all automation processes
start_all() {
    echo -e "${GREEN}🚀 Starting all automation processes...${NC}"
    
    if [ ! -f "$ECOSYSTEM_FILE" ]; then
        echo -e "${RED}❌ Ecosystem file not found: $ECOSYSTEM_FILE${NC}"
        exit 1
    fi
    
    # Start all processes
    pm2 start ecosystem.config.js
    
    echo -e "${GREEN}✅ All automation processes started${NC}"
    echo -e "${CYAN}📊 Use 'pm2 status' to view status${NC}"
    echo -e "${CYAN}📊 Use 'pm2 logs' to view logs${NC}"
}

# Stop all automation processes
stop_all() {
    echo -e "${YELLOW}🛑 Stopping all automation processes...${NC}"
    pm2 stop all
    echo -e "${GREEN}✅ All processes stopped${NC}"
}

# Restart all automation processes
restart_all() {
    echo -e "${BLUE}🔄 Restarting all automation processes...${NC}"
    pm2 restart all
    echo -e "${GREEN}✅ All processes restarted${NC}"
}

# Reload all automation processes
reload_all() {
    echo -e "${BLUE}🔄 Reloading all automation processes...${NC}"
    pm2 reload all
    echo -e "${GREEN}✅ All processes reloaded${NC}"
}

# Delete all automation processes
delete_all() {
    echo -e "${RED}🗑️ Deleting all automation processes...${NC}"
    pm2 delete all
    echo -e "${GREEN}✅ All processes deleted${NC}"
}

# Show status of all processes
show_status() {
    echo -e "${CYAN}📊 PM2 Process Status:${NC}"
    pm2 status
}

# Show logs for all processes
show_logs() {
    echo -e "${CYAN}📋 PM2 Logs:${NC}"
    pm2 logs --lines 50
}

# Show logs for a specific process
show_process_logs() {
    local process_name="$1"
    if [ -z "$process_name" ]; then
        echo -e "${RED}❌ Please specify a process name${NC}"
        echo -e "${YELLOW}Usage: $0 logs <process-name>${NC}"
        exit 1
    fi
    
    echo -e "${CYAN}📋 Logs for $process_name:${NC}"
    pm2 logs "$process_name" --lines 50
}

# Monitor processes in real-time
monitor() {
    echo -e "${CYAN}👀 Starting PM2 monitoring...${NC}"
    pm2 monit
}

# Generate a comprehensive report
generate_report() {
    echo -e "${BLUE}📊 Generating automation report...${NC}"
    
    local report_file="$LOG_DIR/pm2-automation-report-$(date +%Y%m%d-%H%M%S).txt"
    
    {
        echo "=== PM2 Automation Report ==="
        echo "Generated: $(date)"
        echo "    echo ""
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo -e "  ${GREEN}start${NC}           - Start all automation processes"
    echo -e "  ${GREEN}stop${NC}            - Stop all automation processes"
    echo -e "  ${GREEN}restart${NC}         - Restart all automation processes"
    echo -e "  ${GREEN}reload${NC}          - Reload all automation processes (zero-downtime)"
    echo -e "  ${GREEN}delete${NC}          - Delete all automation processes"
    echo -e "  ${GREEN}status${NC}          - Show status of all processes"
    echo -e "  ${GREEN}logs${NC}            - Show logs for all processes"
    echo -e "  ${GREEN}logs <name>${NC}     - Show logs for specific process"
    echo -e "  ${GREEN}monitor${NC}         - Monitor processes in real-time"
    echo -e "  ${GREEN}report${NC}          - Generate comprehensive automation report"
    echo -e "  ${GREEN}setup${NC}           - Setup log directories and check PM2 installation"
    echo -e "  ${GREEN}help${NC}            - Show this help message"
    echo ""
    echo "Examples:"
    echo -e "  ${YELLOW}$0 start${NC}           # Start all automations"
    echo -e "  ${YELLOW}$0 logs ai-code-analyzer${NC}  # Show logs for AI analyzer"
    echo -e "  ${YELLOW}$0 monitor${NC}         # Monitor all processes"
    echo ""
    echo "Process Names:"
    echo -e "  ${BLUE}zion-website${NC}         - Main website"
    echo -e "  ${BLUE}zion-backend${NC}         - Backend server"
    echo -e "  ${BLUE}intelligent-orchestrator${NC} - Automation orchestrator"
    echo -e "  ${BLUE}ai-code-analyzer${NC}     - AI-powered code analysis"
    echo -e "  ${BLUE}dependency-monitor${NC}   - Dependency health monitoring"
    echo -e "  ${BLUE}build-optimizer${NC}      - Build optimization"
    echo -e "  ${BLUE}code-review-assistant${NC} - Automated code review"
    echo -e "  ${BLUE}metrics-collector${NC}    - Performance metrics"
    echo ""
}

# Setup function
setup() {
    echo -e "${BLUE}🔧 Setting up PM2 Manager...${NC}"
    check_pm2
    setup_logs
    echo -e "${GREEN}✅ Setup completed successfully${NC}"
}

# Main script logic
main() {
    local command="$1"
    local option="$2"
    
    case "$command" in
        "start")
            start_all
            ;;
        "stop")
            stop_all
            ;;
        "restart")
            restart_all
            ;;
        "reload")
            reload_all
            ;;
        "delete")
            delete_all
            ;;
        "status")
            show_status
            ;;
        "logs")
            show_process_logs "$option"
            ;;
        "monitor")
            monitor
            ;;
        "report")
            generate_report
            ;;
        "setup")
            setup
            ;;
        "help"|"--help"|"-h"|"")
            show_help
            ;;
        *)
            echo -e "${RED}❌ Unknown command: $command${NC}"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ This script must be run from the project root directory${NC}"
    exit 1
fi

# Run main function with all arguments
main "$@"