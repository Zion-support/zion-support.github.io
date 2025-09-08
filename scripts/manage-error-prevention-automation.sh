#!/bin/bash

# Error Prevention Automation Management Script
# This script manages PM2-based error prevention automations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ECOSYSTEM_FILE="ecosystem-error-prevention-enhanced.config.cjs"
LOGS_DIR="./logs"
REPORTS_DIR="./reports"
BACKUPS_DIR="./backups"

# Ensure required directories exist
ensure_directories() {
    mkdir -p "$LOGS_DIR" "$REPORTS_DIR" "$BACKUPS_DIR"
    echo -e "${GREEN}✓ Directories ensured${NC}"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        echo -e "${RED}✗ PM2 is not installed. Installing...${NC}"
        npm install -g pm2
    fi
    echo -e "${GREEN}✓ PM2 is available${NC}"
}

# Start all error prevention automations
start_automation() {
    echo -e "${BLUE}🚀 Starting Error Prevention Automation...${NC}"
    
    ensure_directories
    check_pm2
    
    # Start the enhanced ecosystem
    pm2 start "$ECOSYSTEM_FILE" --env production
    
    # Save PM2 configuration
    pm2 save
    
    echo -e "${GREEN}✓ Error Prevention Automation started successfully${NC}"
    echo -e "${BLUE}📊 Use 'pm2 status' to view running processes${NC}"
    echo -e "${BLUE}📋 Use 'pm2 logs' to view logs${NC}"
}

# Stop all error prevention automations
stop_automation() {
    echo -e "${YELLOW}🛑 Stopping Error Prevention Automation...${NC}"
    
    # Stop all PM2 processes
    pm2 stop all
    
    # Save PM2 configuration
    pm2 save
    
    echo -e "${GREEN}✓ Error Prevention Automation stopped successfully${NC}"
}

# Restart all error prevention automations
restart_automation() {
    echo -e "${BLUE}🔄 Restarting Error Prevention Automation...${NC}"
    
    # Restart all PM2 processes
    pm2 restart all
    
    # Save PM2 configuration
    pm2 save
    
    echo -e "${GREEN}✓ Error Prevention Automation restarted successfully${NC}"
}

# Show status of all automations
show_status() {
    echo -e "${BLUE}📊 Error Prevention Automation Status:${NC}"
    echo "=================================="
    pm2 status
    echo ""
    echo -e "${BLUE}📈 Process Statistics:${NC}"
    pm2 show error-prevention-orchestrator-enhanced || echo "Orchestrator not running"
}

# Show logs for all automations
show_logs() {
    local lines=${1:-50}
    echo -e "${BLUE}📋 Error Prevention Automation Logs (last $lines lines):${NC}"
    echo "=================================="
    pm2 logs --lines "$lines"
}

# Monitor all automations in real-time
monitor_automation() {
    echo -e "${BLUE}📺 Starting real-time monitoring...${NC}"
    echo -e "${YELLOW}Press Ctrl+C to stop monitoring${NC}"
    pm2 monit
}

# Generate health report
health_check() {
    echo -e "${BLUE}🏥 Performing Health Check...${NC}"
    
    # Check PM2 processes
    echo -e "${YELLOW}PM2 Process Health:${NC}"
    pm2 ping
    
    # Check disk space
    echo -e "${YELLOW}Disk Space:${NC}"
    df -h . | head -2
    
    # Check memory usage
    echo -e "${YELLOW}Memory Usage:${NC}"
    free -h | head -2
    
    # Check log file sizes
    echo -e "${YELLOW}Log File Sizes:${NC}"
    if [ -d "$LOGS_DIR" ]; then
        du -sh "$LOGS_DIR"/* 2>/dev/null || echo "No log files found"
    fi
    
    echo -e "${GREEN}✓ Health check completed${NC}"
}

# Generate comprehensive report
generate_report() {
    echo -e "${BLUE}📊 Generating Comprehensive Report...${NC}"
    
    local timestamp=$(date +"%Y%m%d_%H%M%S")
    local report_file="$REPORTS_DIR/comprehensive_report_$timestamp.md"
    
    # Create report
    cat > "$report_file" << EOF
# Error Prevention Automation Report
Generated: $(date)

## System Status
$(pm2 status --no-daemon)

## Process Details
$(pm2 show error-prevention-orchestrator-enhanced --no-daemon || echo "Orchestrator not running")

## Recent Logs
$(pm2 logs --lines 20 --no-daemon --nostream)

## System Resources
$(df -h . | head -2)
$(free -h | head -2)

## Log Files
$(ls -la "$LOGS_DIR" 2>/dev/null || echo "No logs directory")

## Recommendations
- Monitor log files regularly
- Check PM2 status for process health
- Review error reports in $REPORTS_DIR
- Ensure backups are being created in $BACKUPS_DIR
EOF
    
    echo -e "${GREEN}✓ Report generated: $report_file${NC}"
}

# Clean up old logs and reports
cleanup() {
    echo -e "${YELLOW}🧹 Cleaning up old files...${NC}"
    
    # Clean old log files (keep last 7 days)
    find "$LOGS_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null || true
    
    # Clean old reports (keep last 30 days)
    find "$REPORTS_DIR" -name "*.json" -mtime +30 -delete 2>/dev/null || true
    
    # Clean old backups (keep last 7 days)
    find "$BACKUPS_DIR" -name "pre-fix-*" -mtime +7 -delete 2>/dev/null || true
    
    echo -e "${GREEN}✓ Cleanup completed${NC}"
}

# Install dependencies
install_deps() {
    echo -e "${BLUE}📦 Installing dependencies...${NC}"
    
    # Install npm packages
    npm install
    
    # Install PM2 globally if not present
    if ! command -v pm2 &> /dev/null; then
        npm install -g pm2
    fi
    
    # Install additional required packages
    npm install --save-dev globals
    
    echo -e "${GREEN}✓ Dependencies installed successfully${NC}"
}

# Reset all automations
reset_automation() {
    echo -e "${RED}⚠️  Resetting Error Prevention Automation...${NC}"
    echo -e "${YELLOW}This will stop all processes and clear PM2 configuration${NC}"
    
    read -p "Are you sure? (y/N): " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        # Stop and delete all PM2 processes
        pm2 delete all 2>/dev/null || true
        
        # Clear PM2 configuration
        pm2 cleardump
        
        # Remove PM2 home
        rm -rf ~/.pm2
        
        echo -e "${GREEN}✓ Error Prevention Automation reset successfully${NC}"
    else
        echo -e "${YELLOW}Reset cancelled${NC}"
    fi
}

# Show help
show_help() {
    echo -e "${BLUE}Error Prevention Automation Management Script${NC}"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     - Start all error prevention automations"
    echo "  stop      - Stop all error prevention automations"
    echo "  restart   - Restart all error prevention automations"
    echo "  status    - Show status of all automations"
    echo "  logs      - Show logs (default: 50 lines)"
    echo "  monitor   - Start real-time monitoring"
    echo "  health    - Perform health check"
    echo "  report    - Generate comprehensive report"
    echo "  cleanup   - Clean up old logs and reports"
    echo "  install   - Install dependencies"
    echo "  reset     - Reset all automations (WARNING: destructive)"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start automations"
    echo "  $0 logs 100                 # Show last 100 log lines"
    echo "  $0 status                   # Show status"
    echo "  $0 monitor                  # Start monitoring"
    echo ""
    echo "Environment Variables:"
    echo "  ECOSYSTEM_FILE              - PM2 ecosystem file (default: $ECOSYSTEM_FILE)"
    echo "  LOGS_DIR                    - Logs directory (default: $LOGS_DIR)"
    echo "  REPORTS_DIR                 - Reports directory (default: $REPORTS_DIR)"
    echo "  BACKUPS_DIR                 - Backups directory (default: $BACKUPS_DIR)"
}

# Main script logic
main() {
    local command=${1:-help}
    
    case $command in
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
        monitor)
            monitor_automation
            ;;
        health)
            health_check
            ;;
        report)
            generate_report
            ;;
        cleanup)
            cleanup
            ;;
        install)
            install_deps
            ;;
        reset)
            reset_automation
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            echo -e "${RED}✗ Unknown command: $command${NC}"
            echo "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"