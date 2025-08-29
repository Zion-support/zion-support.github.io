#!/bin/bash

# 🚀 Intelligent PM2 Automation Quick Start Script
# This script provides easy access to the new AI-powered PM2 automations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Project directory
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

echo -e "${PURPLE}🚀 Intelligent PM2 Automation System${NC}"
echo -e "${PURPLE}=====================================${NC}"
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

# Function to show help
show_help() {
    echo -e "${CYAN}🔧 Available Commands:${NC}"
    echo ""
    echo -e "${BLUE}🚀 Quick Start:${NC}"
    echo "  start-all          - Start all intelligent automations"
    echo "  start-quality      - Start AI Code Quality automation"
    echo "  start-performance  - Start Intelligent Performance automation"
    echo "  start-workflow     - Start Smart Development Workflow automation"
    echo ""
    echo -e "${BLUE}📊 Management:${NC}"
    echo "  status             - Show status of all automations"
    echo "  logs               - Show logs for all automations"
    echo "  monit              - Open PM2 monitoring interface"
    echo "  stop-all           - Stop all intelligent automations"
    echo "  restart-all        - Restart all intelligent automations"
    echo ""
    echo -e "${BLUE}🔍 Analysis:${NC}"
    echo "  quality-report     - Generate code quality report"
    echo "  performance-report - Generate performance report"
    echo "  workflow-report    - Generate workflow report"
    echo ""
    echo -e "${BLUE}🧪 Development:${NC}"
    echo "  dev-smart          - Start dev server with all automations"
    echo "  dev-quality        - Start dev server with quality automation"
    echo "  dev-performance    - Start dev server with performance automation"
    echo ""
    echo -e "${BLUE}❓ Help:${NC}"
    echo "  help               - Show this help message"
    echo ""
    echo -e "${YELLOW}💡 Tip: Use 'npm run ai:all' to start all intelligent automations${NC}"
}

# Function to start all intelligent automations
start_all() {
    echo -e "${BLUE}🚀 Starting all intelligent automations...${NC}"
    
    check_pm2
    
    # Start all automations
    npm run ai:all
    
    echo -e "${GREEN}✅ All intelligent automations started successfully${NC}"
    echo ""
    npm run automation:status
}

# Function to start specific automation
start_automation() {
    local automation_name=$1
    local display_name=$2
    
    echo -e "${BLUE}🚀 Starting ${display_name}...${NC}"
    
    check_pm2
    
    case $automation_name in
        "quality")
            npm run ai:quality
            ;;
        "performance")
            npm run ai:performance
            ;;
        "workflow")
            npm run ai:workflow
            ;;
        *)
            echo -e "${RED}❌ Unknown automation: ${automation_name}${NC}"
            return 1
            ;;
    esac
    
    echo -e "${GREEN}✅ ${display_name} started successfully${NC}"
}

# Function to show status
show_status() {
    echo -e "${BLUE}📊 Automation Status:${NC}"
    echo ""
    npm run automation:status
}

# Function to show logs
show_logs() {
    echo -e "${BLUE}📝 Recent Automation Logs:${NC}"
    echo ""
    npm run automation:logs
}

# Function to open monitoring
open_monitoring() {
    echo -e "${BLUE}📊 Opening PM2 monitoring interface...${NC}"
    echo -e "${YELLOW}Press Ctrl+C to exit monitoring${NC}"
    echo ""
    npm run automation:monit
}

# Function to stop all automations
stop_all() {
    echo -e "${BLUE}🛑 Stopping all intelligent automations...${NC}"
    
    pm2 stop ai-code-quality intelligent-performance smart-dev-workflow 2>/dev/null || true
    
    echo -e "${GREEN}✅ All intelligent automations stopped${NC}"
}

# Function to restart all automations
restart_all() {
    echo -e "${BLUE}🔄 Restarting all intelligent automations...${NC}"
    
    pm2 restart ai-code-quality intelligent-performance smart-dev-workflow
    
    echo -e "${GREEN}✅ All intelligent automations restarted${NC}"
    echo ""
    npm run automation:status
}

# Function to generate reports
generate_report() {
    local report_type=$1
    local display_name=$2
    
    echo -e "${BLUE}📊 Generating ${display_name}...${NC}"
    
    case $report_type in
        "quality")
            npm run quality:analyze
            ;;
        "performance")
            npm run performance:monitor
            ;;
        "workflow")
            npm run workflow:manage
            ;;
        *)
            echo -e "${RED}❌ Unknown report type: ${report_type}${NC}"
            return 1
            ;;
    esac
    
    echo -e "${GREEN}✅ ${display_name} generated successfully${NC}"
}

# Function to start development with automations
start_dev_with_automation() {
    local automation_type=$1
    local display_name=$2
    
    echo -e "${BLUE}🚀 Starting development with ${display_name}...${NC}"
    echo -e "${YELLOW}This will start both the dev server and automation${NC}"
    echo ""
    
    case $automation_type in
        "smart")
            npm run dev:smart
            ;;
        "quality")
            npm run dev:quality
            ;;
        "performance")
            npm run dev:performance
            ;;
        *)
            echo -e "${RED}❌ Unknown dev mode: ${automation_type}${NC}"
            return 1
            ;;
    esac
}

# Function to check if automations are running
check_automations_running() {
    if pm2 list | grep -q "ai-code-quality\|intelligent-performance\|smart-dev-workflow"; then
        return 0
    else
        return 1
    fi
}

# Function to show automation health
show_health() {
    echo -e "${BLUE}🏥 Automation Health Check:${NC}"
    echo ""
    
    if check_automations_running; then
        echo -e "${GREEN}✅ Intelligent automations are running${NC}"
        echo ""
        npm run automation:health
    else
        echo -e "${YELLOW}⚠️  No intelligent automations are currently running${NC}"
        echo -e "${BLUE}💡 Use 'start-all' to start them${NC}"
    fi
}

# Main script logic
case "${1:-help}" in
    "start-all")
        start_all
        ;;
    "start-quality")
        start_automation "quality" "AI Code Quality Automation"
        ;;
    "start-performance")
        start_automation "performance" "Intelligent Performance Automation"
        ;;
    "start-workflow")
        start_automation "workflow" "Smart Development Workflow Automation"
        ;;
    "status")
        show_status
        ;;
    "logs")
        show_logs
        ;;
    "monit")
        open_monitoring
        ;;
    "stop-all")
        stop_all
        ;;
    "restart-all")
        restart_all
        ;;
    "quality-report")
        generate_report "quality" "Code Quality Report"
        ;;
    "performance-report")
        generate_report "performance" "Performance Report"
        ;;
    "workflow-report")
        generate_report "workflow" "Workflow Report"
        ;;
    "dev-smart")
        start_dev_with_automation "smart" "All Intelligent Automations"
        ;;
    "dev-quality")
        start_dev_with_automation "quality" "Code Quality Automation"
        ;;
    "dev-performance")
        start_dev_with_automation "performance" "Performance Automation"
        ;;
    "health")
        show_health
        ;;
    "help"|*)
        show_help
        ;;
esac

echo ""
echo -e "${CYAN}💡 For more information, see: INTELLIGENT_PM2_AUTOMATION_README.md${NC}"