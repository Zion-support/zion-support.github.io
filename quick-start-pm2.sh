#!/bin/bash

# Quick Start Script for PM2 Automation System
# This script automatically sets up and starts the entire automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}🚀 Zion Website PM2 Automation System - Quick Start${NC}"
echo -e "${BLUE}====================================================${NC}"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ This script must be run from the project root directory${NC}"
    echo -e "${YELLOW}Please navigate to the directory containing package.json and try again${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Project directory verified${NC}"
echo ""

# Check Node.js installation
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed${NC}"
    echo -e "${YELLOW}Please install Node.js 18+ and try again${NC}"
    exit 1
fi

NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}❌ Node.js version 18+ is required (current: $(node --version))${NC}"
    echo -e "${YELLOW}Please upgrade Node.js and try again${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js $(node --version) detected${NC}"
echo ""

# Check npm installation
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed${NC}"
    echo -e "${YELLOW}Please install npm and try again${NC}"
    exit 1
fi

echo -e "${GREEN}✅ npm $(npm --version) detected${NC}"
echo ""

# Install PM2 if not present
if ! command -v pm2 &> /dev/null; then
    echo -e "${BLUE}📦 Installing PM2 globally...${NC}"
    npm install -g pm2
    echo -e "${GREEN}✅ PM2 installed successfully${NC}"
else
    echo -e "${GREEN}✅ PM2 already installed${NC}"
fi

echo ""

# Check if ecosystem file exists
if [ ! -f "ecosystem.config.js" ]; then
    echo -e "${RED}❌ PM2 ecosystem file not found${NC}"
    echo -e "${YELLOW}Please ensure ecosystem.config.js exists in the project root${NC}"
    exit 1
fi

echo -e "${GREEN}✅ PM2 ecosystem file found${NC}"
echo ""

# Setup log directories
echo -e "${BLUE}📁 Setting up log directories...${NC}"
mkdir -p automation/logs
mkdir -p ~/.pm2/logs
echo -e "${GREEN}✅ Log directories created${NC}"
echo ""

# Install project dependencies
echo -e "${BLUE}📦 Installing project dependencies...${NC}"
npm install
if [ -d "server" ]; then
    echo -e "${BLUE}📦 Installing server dependencies...${NC}"
    cd server && npm install && cd ..
fi
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Start all automation processes
echo -e "${BLUE}🚀 Starting all automation processes...${NC}"
pm2 start ecosystem.config.js

echo ""
echo -e "${GREEN}🎉 PM2 Automation System Started Successfully!${NC}"
echo ""

# Show status
echo -e "${CYAN}📊 Current Status:${NC}"
pm2 status

echo ""
echo -e "${CYAN}📋 Useful Commands:${NC}"
echo -e "  ${GREEN}pm2 status${NC}          - View all processes"
echo -e "  ${GREEN}pm2 logs${NC}            - View all logs"
echo -e "  ${GREEN}pm2 monit${NC}           - Monitor in real-time"
echo -e "  ${GREEN}./pm2-manager.sh help${NC} - Show all available commands"
echo ""

echo -e "${CYAN}🔍 Process Names:${NC}"
echo -e "  ${BLUE}zion-website${NC}         - Main website (port 3000)"
echo -e "  ${BLUE}zion-backend${NC}         - Backend server (port 5000)"
echo -e "  ${BLUE}ai-code-analyzer${NC}     - AI-powered code analysis"
echo -e "  ${BLUE}dependency-monitor${NC}   - Dependency health monitoring"
echo -e "  ${BLUE}build-optimizer${NC}      - Build optimization"
echo -e "  ${BLUE}code-review-assistant${NC} - Automated code review"
echo -e "  ${BLUE}metrics-collector${NC}    - Performance metrics"
echo ""

echo -e "${CYAN}📊 Monitoring:${NC}"
echo -e "  ${YELLOW}• All processes are automatically monitored${NC}"
echo -e "  ${YELLOW}• Auto-restart on failure${NC}"
echo -e "  ${YELLOW}• Memory and performance monitoring${NC}"
echo -e "  ${YELLOW}• Continuous code quality analysis${NC}"
echo -e "  ${YELLOW}• Security vulnerability scanning${NC}"
echo ""

echo -e "${CYAN}🚀 Next Steps:${NC}"
echo -e "  1. ${GREEN}Open your browser to http://localhost:3000${NC}"
echo -e "  2. ${GREEN}Check the automation logs: pm2 logs${NC}"
echo -e "  3. ${GREEN}Monitor performance: pm2 monit${NC}"
echo -e "  4. ${GREEN}Generate reports: ./pm2-manager.sh report${NC}"
echo ""

echo -e "${GREEN}🎯 Your development environment is now supercharged with intelligent automation!${NC}"
echo ""

# Check if processes are running
sleep 3
echo -e "${BLUE}🔍 Verifying all processes are running...${NC}"
if pm2 list | grep -q "online"; then
    echo -e "${GREEN}✅ All processes are running successfully${NC}"
else
    echo -e "${YELLOW}⚠️ Some processes may not be running. Check 'pm2 status' for details${NC}"
fi

echo ""
echo -e "${CYAN}📚 For more information, see: PM2_AUTOMATION_README.md${NC}"
echo -e "${CYAN}🆘 For help: ./pm2-manager.sh help${NC}"
echo ""
echo -e "${GREEN}🚀 Happy coding with your new PM2 automation system!${NC}"