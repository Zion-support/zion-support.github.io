#!/bin/bash

# PM2 Automation Setup Script
# Installs dependencies and configures the intelligent PM2 automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}🚀 Setting up PM2 Intelligent Automation System${NC}"
echo "=================================================="

# Check if we're in the right directory
if [[ ! -f "package.json" ]]; then
    echo -e "${RED}❌ Error: Please run this script from the project root directory${NC}"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed. Please install npm first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js and npm are available${NC}"

# Install PM2 globally if not already installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}📦 Installing PM2 globally...${NC}"
    npm install -g pm2
    echo -e "${GREEN}✅ PM2 installed successfully${NC}"
else
    echo -e "${GREEN}✅ PM2 is already installed${NC}"
fi

# Install additional dependencies
echo -e "${YELLOW}📦 Installing additional dependencies...${NC}"
npm install --save-dev chokidar

# Create necessary directories
echo -e "${YELLOW}📁 Creating necessary directories...${NC}"
mkdir -p automation/logs
mkdir -p automation/backups
mkdir -p scripts

# Make scripts executable
echo -e "${YELLOW}🔧 Making scripts executable...${NC}"
chmod +x scripts/pm2-automation-launcher.sh 2>/dev/null || true
chmod +x scripts/*.js 2>/dev/null || true

# Check if ecosystem.config.js exists
if [[ ! -f "ecosystem.config.js" ]]; then
    echo -e "${RED}❌ Error: ecosystem.config.js not found. Please ensure it exists.${NC}"
    exit 1
fi

# Test PM2 installation
echo -e "${YELLOW}🧪 Testing PM2 installation...${NC}"
pm2 --version

# Show available commands
echo -e "\n${CYAN}🎯 PM2 Automation System Setup Complete!${NC}"
echo "=================================================="
echo ""
echo -e "${GREEN}Available commands:${NC}"
echo "  npm run automation:start     - Start all automation systems"
echo "  npm run automation:stop      - Stop all automation systems"
echo "  npm run automation:status    - Show comprehensive status"
echo "  npm run automation:health    - Run health check"
echo "  npm run automation:optimize  - Run automatic optimization"
echo ""
echo -e "${GREEN}Or use the launcher script:${NC}"
echo "  bash scripts/pm2-automation-launcher.sh start"
echo "  bash scripts/pm2-automation-launcher.sh status"
echo "  bash scripts/pm2-automation-launcher.sh health"
echo ""
echo -e "${GREEN}Quick start:${NC}"
echo "  npm run automation:start"
echo ""
echo -e "${YELLOW}📚 For detailed information, see: PM2_AUTOMATION_README.md${NC}"
echo ""

# Check if user wants to start the system
read -p "Would you like to start the PM2 automation system now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${GREEN}🚀 Starting PM2 automation system...${NC}"
    npm run automation:start
else
    echo -e "${CYAN}You can start the system later with: npm run automation:start${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Setup complete! Happy coding! 🚀${NC}"