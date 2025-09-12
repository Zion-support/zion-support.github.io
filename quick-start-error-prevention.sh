#!/bin/bash

# Quick Start Error Prevention Automation
# This script automatically sets up and starts error prevention automations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Quick Start Error Prevention Automation${NC}"
echo "=============================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}✗ Error: package.json not found. Please run this script from the project root.${NC}"
    exit 1
fi

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}📦 Installing PM2 globally...${NC}"
    npm install -g pm2
    echo -e "${GREEN}✓ PM2 installed successfully${NC}"
else
    echo -e "${GREEN}✓ PM2 is already installed${NC}"
fi

# Install project dependencies
echo -e "${YELLOW}📦 Installing project dependencies...${NC}"
npm install

# Install additional required packages
echo -e "${YELLOW}📦 Installing additional required packages...${NC}"
npm install --save-dev globals

# Create required directories
echo -e "${YELLOW}📁 Creating required directories...${NC}"
mkdir -p logs reports backups

# Make management script executable
chmod +x scripts/manage-error-prevention-automation.sh

# Start the error prevention automations
echo -e "${YELLOW}🚀 Starting Error Prevention Automation...${NC}"
./scripts/manage-error-prevention-automation.sh start

echo ""
echo -e "${GREEN}🎉 Error Prevention Automation is now running!${NC}"
echo ""
echo -e "${BLUE}📊 Useful Commands:${NC}"
echo "  ./scripts/manage-error-prevention-automation.sh status    - Check status"
echo "  ./scripts/manage-error-prevention-automation.sh logs      - View logs"
echo "  ./scripts/manage-error-prevention-automation.sh monitor   - Real-time monitoring"
echo "  ./scripts/manage-error-prevention-automation.sh health    - Health check"
echo "  ./scripts/manage-error-prevention-automation.sh stop      - Stop automations"
echo ""
echo -e "${BLUE}📁 Generated Files:${NC}"
echo "  Logs: ./logs/"
echo "  Reports: ./reports/"
echo "  Backups: ./backups/"
echo ""
echo -e "${GREEN}✅ Setup complete! Your project is now protected by automated error prevention.${NC}"