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
if [ ! -f "cursor-chat-automation.js" ]; then
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
if node cursor-chat-automation.js --test; then
    echo -e "${GREEN}✅ Tests passed${NC}"
else
    echo -e "${YELLOW}⚠️  Tests failed, but continuing...${NC}"
fi

# Start the automation
echo -e "${GREEN}Starting Cursor Chat Automation...${NC}"
./launch-cursor-automation.sh

echo ""
echo -e "${BLUE}=== Quick Start Complete ===${NC}"
echo "The automation system is now running in the background."
echo ""
echo "Useful commands:"
echo "  View logs: tail -f cursor-automation.log"
echo "  Stop automation: ./stop-cursor-automation.sh"
echo "  Restart: ./launch-cursor-automation.sh"
echo "  Check status: ps aux | grep cursor-chat-automation"
echo ""
echo "The system will automatically send 'proceed' commands to keep your Cursor chats active!"
