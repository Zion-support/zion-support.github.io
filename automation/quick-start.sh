#!/bin/bash

# Quick Start Script for Cursor Chat Automation
# This script sets up and runs the automation system

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Cursor Chat Automation - Quick Start ===${NC}"
echo ""

# Check if we're in the right directory
if [ ! -f "cursor-interface-automation.js" ]; then
    echo -e "${YELLOW}Please run this script from the automation directory${NC}"
    echo "cd automation"
    echo "./quick-start.sh"
    exit 1
fi

# Make scripts executable
echo -e "${GREEN}Making scripts executable...${NC}"
chmod +x *.sh

# Test the automation system
echo -e "${GREEN}Testing automation system...${NC}"
if node test-cursor-automation.js; then
    echo -e "${GREEN}✅ Tests passed!${NC}"
else
    echo -e "${YELLOW}⚠️  Some tests failed, but continuing...${NC}"
fi

echo ""
echo -e "${GREEN}🚀 Starting Cursor Chat Automation...${NC}"
echo ""

# Start the automation
./launch-cursor-automation.sh

echo ""
echo -e "${GREEN}✅ Automation started successfully!${NC}"
echo ""
echo -e "${BLUE}Useful commands:${NC}"
echo "  View logs: tail -f cursor-automation.log"
echo "  Stop automation: ./stop-cursor-automation.sh"
echo "  Check status: ps aux | grep cursor-automation"
echo ""
echo -e "${BLUE}The automation will now continuously send 'proceed' commands to keep Cursor chats active.${NC}"
echo -e "${BLUE}Press Ctrl+C in the automation terminal to stop.${NC}"
