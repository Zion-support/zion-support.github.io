#!/bin/bash

# Zion.app PM2 Automation Management Script
# Provides easy commands to manage browser error monitoring and health checks

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ECOSYSTEM_FILE="$SCRIPT_DIR/ecosystem.config.js"
REPORTS_DIR="$PROJECT_ROOT/reports"

# Ensure PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        echo -e "${RED}❌ PM2 is not installed. Installing now...${NC}"
        npm install -g pm2
    fi
}

# Ensure dependencies are installed
install_deps() {
    echo -e "${BLUE}📦 Installing automation dependencies...${NC}"
    cd "$SCRIPT_DIR"
    npm install
    echo -e "${GREEN}✅ Dependencies installed${NC}"
}

# Start all services
start() {
    echo -e "${BLUE}🚀 Starting Zion.app automation services...${NC}"
    check_pm2
    install_deps
    
    # Ensure reports directory exists
    mkdir -p "$REPORTS_DIR"
    
    # Start services
    cd "$SCRIPT_DIR"
    pm2 start ecosystem.config.js
    
    echo -e "${GREEN}✅ All services started${NC}"
    pm2 status
}

# Stop all services
stop() {
    echo -e "${YELLOW}🛑 Stopping Zion.app automation services...${NC}"
    pm2 stop ecosystem.config.js
    echo -e "${GREEN}✅ All services stopped${NC}"
}

# Restart all services
restart() {
    echo -e "${BLUE}🔄 Restarting Zion.app automation services...${NC}"
    pm2 restart ecosystem.config.js
    echo -e "${GREEN}✅ All services restarted${NC}"
}

# Reload all services
reload() {
    echo -e "${BLUE}🔄 Reloading Zion.app automation services...${NC}"
    pm2 reload ecosystem.config.js
    echo -e "${GREEN}✅ All services reloaded${NC}"
}

# Delete all services
delete() {
    echo -e "${RED}🗑️  Deleting Zion.app automation services...${NC}"
    pm2 delete ecosystem.config.js
    echo -e "${GREEN}✅ All services deleted${NC}"
}

# Show status
status() {
    echo -e "${BLUE}📊 Zion.app Automation Status${NC}"
    pm2 status
}

# Show logs
logs() {
    local service="${1:-all}"
    echo -e "${BLUE}📋 Showing logs for: $service${NC}"
    
    if [ "$service" = "all" ]; then
        pm2 logs
    else
        pm2 logs "$service"
    fi
}

# Monitor processes
monitor() {
    echo -e "${BLUE}📊 Opening PM2 monitor...${NC}"
    pm2 monit
}

# Health check
health() {
    echo -e "${BLUE}🔍 Running health check...${NC}"
    cd "$SCRIPT_DIR"
    bash health-check.sh
}

# Browser monitor only
browser_monitor() {
    echo -e "${BLUE}🌐 Starting browser error monitor only...${NC}"
    check_pm2
    install_deps
    
    cd "$SCRIPT_DIR"
    pm2 start browser-error-monitor.js --name "zion-browser-monitor-standalone"
    
    echo -e "${GREEN}✅ Browser monitor started${NC}"
    pm2 status
}

# Integrated monitor only
integrated_monitor() {
    echo -e "${BLUE}🔗 Starting integrated monitor only...${NC}"
    check_pm2
    install_deps
    
    cd "$SCRIPT_DIR"
    pm2 start integrated-monitor.js --name "zion-integrated-monitor-standalone"
    
    echo -e "${GREEN}✅ Integrated monitor started${NC}"
    pm2 status
}

# Cleanup
cleanup() {
    echo -e "${RED}🧹 Cleaning up automation files...${NC}"
    
    # Stop and delete PM2 processes
    pm2 delete all 2>/dev/null || true
    
    # Remove PM2 home directory
    rm -rf "$SCRIPT_DIR/.pm2" 2>/dev/null || true
    
    # Clean up log files
    rm -f "$REPORTS_DIR"/*.log 2>/dev/null || true
    rm -f "$REPORTS_DIR"/*.json 2>/dev/null || true
    
    echo -e "${GREEN}✅ Cleanup completed${NC}"
}

# Setup (first time)
setup() {
    echo -e "${BLUE}⚙️  Setting up Zion.app automation for the first time...${NC}"
    
    # Check if PM2 is installed
    check_pm2
    
    # Install dependencies
    install_deps
    
    # Create necessary directories
    mkdir -p "$REPORTS_DIR"
    mkdir -p "$SCRIPT_DIR/.pm2"
    
    # Start services
    start
    
    echo -e "${GREEN}✅ Setup completed successfully!${NC}"
    echo -e "${BLUE}📚 Available commands:${NC}"
    echo -e "  ${GREEN}./manage.sh start${NC}     - Start all services"
    echo -e "  ${GREEN}./manage.sh stop${NC}      - Stop all services"
    echo -e "  ${GREEN}./manage.sh restart${NC}   - Restart all services"
    echo -e "  ${GREEN}./manage.sh status${NC}    - Show service status"
    echo -e "  ${GREEN}./manage.sh logs${NC}      - Show logs"
    echo -e "  ${GREEN}./manage.sh monitor${NC}   - Open PM2 monitor"
    echo -e "  ${GREEN}./manage.sh health${NC}    - Run health check"
}

# Show help
help() {
    echo -e "${BLUE}🚀 Zion.app PM2 Automation Management${NC}"
    echo ""
    echo -e "${YELLOW}Usage:${NC} ./manage.sh [command]"
    echo ""
    echo -e "${GREEN}Commands:${NC}"
    echo -e "  ${GREEN}setup${NC}           - First-time setup and installation"
    echo -e "  ${GREEN}start${NC}           - Start all automation services"
    echo -e "  ${GREEN}stop${NC}            - Stop all automation services"
    echo -e "  ${GREEN}restart${NC}         - Restart all automation services"
    echo -e "  ${GREEN}reload${NC}          - Reload all automation services"
    echo -e "  ${GREEN}delete${NC}          - Delete all automation services"
    echo -e "  ${GREEN}status${NC}          - Show service status"
    echo -e "  ${GREEN}logs [service]${NC}  - Show logs (all or specific service)"
    echo -e "  ${GREEN}monitor${NC}         - Open PM2 monitor interface"
    echo -e "  ${GREEN}health${NC}          - Run health check"
    echo -e "  ${GREEN}browser-monitor${NC} - Start browser monitor only"
echo -e "  ${GREEN}integrated-monitor${NC} - Start integrated monitor only"
    echo -e "  ${GREEN}cleanup${NC}         - Clean up all automation files"
    echo -e "  ${GREEN}help${NC}            - Show this help message"
    echo ""
    echo -e "${BLUE}Services:${NC}"
    echo -e "  • Browser Error Monitor - Monitors and auto-fixes console errors"
    echo -e "  • Health Check - Monitors system health and automation status"
    echo ""
    echo -e "${YELLOW}Examples:${NC}"
    echo -e "  ./manage.sh setup           # First-time setup"
    echo -e "  ./manage.sh start           # Start all services"
    echo -e "  ./manage.sh logs            # Show all logs"
    echo -e "  ./manage.sh logs zion-browser-error-monitor  # Show browser monitor logs"
echo -e "  ./manage.sh integrated-monitor               # Start integrated monitor"
}

# Main command handler
case "${1:-help}" in
    "setup")
        setup
        ;;
    "start")
        start
        ;;
    "stop")
        stop
        ;;
    "restart")
        restart
        ;;
    "reload")
        reload
        ;;
    "delete")
        delete
        ;;
    "status")
        status
        ;;
    "logs")
        logs "$2"
        ;;
    "monitor")
        monitor
        ;;
    "health")
        health
        ;;
    "browser-monitor")
        browser_monitor
        ;;
    "integrated-monitor")
        integrated_monitor
        ;;
    "cleanup")
        cleanup
        ;;
    "help"|*)
        help
        ;;
esac
