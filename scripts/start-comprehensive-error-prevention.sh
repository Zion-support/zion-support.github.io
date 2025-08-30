#!/bin/bash

# Comprehensive Error Prevention Automation Startup Script
# This script manages the PM2 automation system for automatic error prevention and fixing

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ECOSYSTEM_FILE="ecosystem-comprehensive-error-prevention.config.cjs"
LOG_DIR="./logs"
REPORTS_DIR="./reports"
BACKUP_DIR="./backup"

# Ensure required directories exist
ensure_directories() {
    echo -e "${BLUE}Ensuring required directories exist...${NC}"
    mkdir -p "$LOG_DIR" "$REPORTS_DIR" "$BACKUP_DIR"
    echo -e "${GREEN}Directories created successfully${NC}"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        echo -e "${RED}PM2 is not installed. Installing PM2...${NC}"
        npm install -g pm2
        echo -e "${GREEN}PM2 installed successfully${NC}"
    else
        echo -e "${GREEN}PM2 is already installed${NC}"
    fi
}

# Start the comprehensive error prevention system
start_system() {
    echo -e "${BLUE}Starting Comprehensive Error Prevention System...${NC}"
    
    # Ensure directories exist
    ensure_directories
    
    # Check PM2 installation
    check_pm2
    
    # Start all automation processes
    echo -e "${BLUE}Starting automation processes...${NC}"
    pm2 start "$ECOSYSTEM_FILE"
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    echo -e "${GREEN}Comprehensive Error Prevention System started successfully!${NC}"
    echo -e "${BLUE}Use 'pm2 status' to view running processes${NC}"
    echo -e "${BLUE}Use 'pm2 logs' to view logs${NC}"
    echo -e "${BLUE}Use 'pm2 monit' to monitor processes${NC}"
}

# Stop the comprehensive error prevention system
stop_system() {
    echo -e "${YELLOW}Stopping Comprehensive Error Prevention System...${NC}"
    
    # Stop all automation processes
    pm2 stop "$ECOSYSTEM_FILE"
    
    # Delete PM2 configuration
    pm2 delete "$ECOSYSTEM_FILE"
    
    echo -e "${GREEN}Comprehensive Error Prevention System stopped successfully!${NC}"
}

# Restart the comprehensive error prevention system
restart_system() {
    echo -e "${YELLOW}Restarting Comprehensive Error Prevention System...${NC}"
    
    # Stop the system
    stop_system
    
    # Wait a moment
    sleep 2
    
    # Start the system
    start_system
    
    echo -e "${GREEN}Comprehensive Error Prevention System restarted successfully!${NC}"
}

# Show status of all automation processes
show_status() {
    echo -e "${BLUE}Comprehensive Error Prevention System Status:${NC}"
    echo -e "${BLUE}=============================================${NC}"
    
    # Show PM2 status
    pm2 status
    
    # Show recent logs
    echo -e "\n${BLUE}Recent Logs:${NC}"
    pm2 logs --lines 10
}

# Show logs for all processes
show_logs() {
    echo -e "${BLUE}Showing logs for all automation processes...${NC}"
    pm2 logs --lines 50
}

# Monitor all processes in real-time
monitor_system() {
    echo -e "${BLUE}Opening PM2 monitoring dashboard...${NC}"
    pm2 monit
}

# Generate health report
generate_health_report() {
    echo -e "${BLUE}Generating comprehensive health report...${NC}"
    
    # Create reports directory if it doesn't exist
    mkdir -p "$REPORTS_DIR"
    
    # Generate timestamp
    TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
    REPORT_FILE="$REPORTS_DIR/comprehensive-health-report-$TIMESTAMP.json"
    
    # Collect system information
    {
        echo "{"
        echo "  \"timestamp\": \"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\","
        echo "  \"system\": {"
        echo "    \"node_version\": \"$(node --version)\","
        echo "    \"npm_version\": \"$(npm --version)\","
        echo "    \"pm2_version\": \"$(pm2 --version)\","
        echo "    \"platform\": \"$(uname -s)\","
        echo "    \"architecture\": \"$(uname -m)\""
        echo "  },"
        echo "  \"pm2_status\": $(pm2 jlist | jq -r '.'),"
        echo "  \"disk_usage\": {"
        echo "    \"total\": \"$(df -h . | awk 'NR==2 {print $2}')\","
        echo "    \"used\": \"$(df -h . | awk 'NR==2 {print $3}')\","
        echo "    \"available\": \"$(df -h . | awk 'NR==2 {print $4}')\""
        echo "  },"
        echo "  \"memory_usage\": {"
        echo "    \"total\": \"$(free -h | awk 'NR==2 {print $2}')\","
        echo "    \"used\": \"$(free -h | awk 'NR==2 {print $3}')\","
        echo "    \"available\": \"$(free -h | awk 'NR==2 {print $7}')\""
        echo "  }"
        echo "}"
    } > "$REPORT_FILE"
    
    echo -e "${GREEN}Health report generated: $REPORT_FILE${NC}"
}

# Show help information
show_help() {
    echo -e "${BLUE}Comprehensive Error Prevention Automation Management Script${NC}"
    echo -e "${BLUE}================================================================${NC}"
    echo ""
    echo -e "${GREEN}Usage: $0 [COMMAND]${NC}"
    echo ""
    echo -e "${YELLOW}Commands:${NC}"
    echo -e "  start     - Start the comprehensive error prevention system"
    echo -e "  stop      - Stop the comprehensive error prevention system"
    echo -e "  restart   - Restart the comprehensive error prevention system"
    echo -e "  status    - Show status of all automation processes"
    echo -e "  logs      - Show logs for all processes"
    echo -e "  monitor   - Open PM2 monitoring dashboard"
    echo -e "  health    - Generate comprehensive health report"
    echo -e "  help      - Show this help information"
    echo ""
    echo -e "${BLUE}Examples:${NC}"
    echo -e "  $0 start      # Start the system"
    echo -e "  $0 status     # Check system status"
    echo -e "  $0 logs       # View system logs"
    echo -e "  $0 monitor    # Open monitoring dashboard"
    echo ""
    echo -e "${YELLOW}Note:${NC} This script requires PM2 to be installed globally"
    echo -e "${YELLOW}Install with:${NC} npm install -g pm2"
}

# Main script logic
main() {
    case "${1:-help}" in
        start)
            start_system
            ;;
        stop)
            stop_system
            ;;
        restart)
            restart_system
            ;;
        status)
            show_status
            ;;
        logs)
            show_logs
            ;;
        monitor)
            monitor_system
            ;;
        health)
            generate_health_report
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            echo -e "${RED}Unknown command: $1${NC}"
            echo -e "${YELLOW}Use '$0 help' for usage information${NC}"
            exit 1
            ;;
    esac
}

# Run the main function with all arguments
main "$@"