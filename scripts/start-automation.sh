#!/bin/bash

# PM2 Automation System Startup Script
# This script manages the PM2 automation processes for the Zion Tech Group project

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project directory
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

echo -e "${BLUE}🚀 PM2 Automation System Manager${NC}"
echo -e "${BLUE}================================${NC}"
echo ""

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        echo -e "${RED}❌ PM2 is not installed. Installing PM2...${NC}"
        npm install -g pm2
        echo -e "${GREEN}✅ PM2 installed successfully${NC}"
    else
        echo -e "${GREEN}✅ PM2 is already installed${NC}"
    fi
}

# Function to start automation processes
start_automation() {
    echo -e "${BLUE}🔄 Starting automation processes...${NC}"
    
    # Check if processes are already running
    if pm2 list | grep -q "console-error-fixer"; then
        echo -e "${YELLOW}⚠️  Automation processes are already running${NC}"
        pm2 status
        return
    fi
    
    # Start automation processes
    pm2 start ecosystem.config.cjs --only automation
    
    echo -e "${GREEN}✅ Automation processes started successfully${NC}"
    echo ""
    pm2 status
}

# Function to stop automation processes
stop_automation() {
    echo -e "${BLUE}🛑 Stopping automation processes...${NC}"
    
    # Stop all automation processes
    pm2 stop ecosystem.config.cjs --only automation 2>/dev/null || true
    
    echo -e "${GREEN}✅ Automation processes stopped${NC}"
}

# Function to restart automation processes
restart_automation() {
    echo -e "${BLUE}🔄 Restarting automation processes...${NC}"
    
    # Restart automation processes
    pm2 restart ecosystem.config.cjs --only automation
    
    echo -e "${GREEN}✅ Automation processes restarted${NC}"
    echo ""
    pm2 status
}

# Function to delete automation processes
delete_automation() {
    echo -e "${BLUE}🗑️  Deleting automation processes...${NC}"
    
    # Delete all automation processes
    pm2 delete ecosystem.config.cjs --only automation 2>/dev/null || true
    
    echo -e "${GREEN}✅ Automation processes deleted${NC}"
}

# Function to show automation status
show_status() {
    echo -e "${BLUE}📊 Automation Status:${NC}"
    echo ""
    
    if pm2 list | grep -q "console-error-fixer"; then
        pm2 status
    else
        echo -e "${YELLOW}⚠️  No automation processes are running${NC}"
        echo "Use './scripts/start-automation.sh start' to start automation"
    fi
}

# Function to show automation logs
show_logs() {
    echo -e "${BLUE}📝 Recent Automation Logs:${NC}"
    echo ""
    
    if pm2 list | grep -q "console-error-fixer"; then
        pm2 logs --lines 20 --nostream
    else
        echo -e "${YELLOW}⚠️  No automation processes are running${NC}"
    fi
}

# Function to open PM2 monitoring
open_monit() {
    echo -e "${BLUE}📊 Opening PM2 Monitoring Interface...${NC}"
    echo "Press Ctrl+C to exit monitoring"
    echo ""
    
    pm2 monit
}

# Function to check automation health
check_health() {
    echo -e "${BLUE}🔍 Checking Automation Health...${NC}"
    echo ""
    
    if command -v node &> /dev/null; then
        node scripts/automation-manager.js check
    else
        echo -e "${RED}❌ Node.js is not available${NC}"
    fi
}

# Function to generate reports
generate_reports() {
    echo -e "${BLUE}📊 Generating Automation Reports...${NC}"
    echo ""
    
    if command -v node &> /dev/null; then
        echo "Generating health report..."
        node scripts/automation-manager.js status > automation-status-report.txt 2>&1 || true
        
        echo "Generating performance report..."
        pm2 jlist > automation-performance-report.json 2>&1 || true
        
        echo -e "${GREEN}✅ Reports generated:${NC}"
        echo "  - automation-status-report.txt"
        echo "  - automation-performance-report.json"
    else
        echo -e "${RED}❌ Node.js is not available${NC}"
    fi
}

# Function to show help
show_help() {
    echo -e "${BLUE}📖 Available Commands:${NC}"
    echo ""
    echo "  start     - Start automation processes"
    echo "  stop      - Stop automation processes"
    echo "  restart   - Restart automation processes"
    echo "  delete    - Delete automation processes"
    echo "  status    - Show automation status"
    echo "  logs      - Show recent logs"
    echo "  monit     - Open PM2 monitoring interface"
    echo "  health    - Check automation health"
    echo "  reports   - Generate automation reports"
    echo "  help      - Show this help message"
    echo ""
    echo -e "${BLUE}📋 Examples:${NC}"
    echo "  ./scripts/start-automation.sh start"
    echo "  ./scripts/start-automation.sh status"
    echo "  ./scripts/start-automation.sh logs"
    echo ""
}

# Main script logic
case "${1:-help}" in
    "start")
        check_pm2
        start_automation
        ;;
    "stop")
        stop_automation
        ;;
    "restart")
        check_pm2
        restart_automation
        ;;
    "delete")
        delete_automation
        ;;
    "status")
        show_status
        ;;
    "logs")
        show_logs
        ;;
    "monit")
        check_pm2
        open_monit
        ;;
    "health")
        check_health
        ;;
    "reports")
        generate_reports
        ;;
    "help"|*)
        show_help
        ;;
esac

echo ""
echo -e "${BLUE}💡 Tip: Use 'pm2 save' to save current process list${NC}"
echo -e "${BLUE}💡 Tip: Use 'pm2 startup' to configure PM2 to start on boot${NC}"
