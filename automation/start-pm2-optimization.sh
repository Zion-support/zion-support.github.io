#!/bin/bash

###############################################################################
# Start Smart Dependency Manager Agent
#
# This script starts the AI Smart Dependency Manager via PM2.
###############################################################################

set -e

echo "🚀 Starting AI Smart Dependency Manager Agent..."
echo ""

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}⚠️  PM2 is not installed${NC}"
    echo "Install PM2 globally: npm install -g pm2"
    exit 1
fi

cd "$(dirname "$0")/.."

echo -e "${BLUE}📊 Current PM2 Status:${NC}"
pm2 status || true
echo ""

if pm2 list | grep -q "ai-smart-dependency-manager"; then
    echo -e "${YELLOW}⚠️  AI Smart Dependency Manager is already running${NC}"
    echo ""
    echo "Options:"
    echo "  1. Restart: pm2 restart ai-smart-dependency-manager"
    echo "  2. Stop:    pm2 stop ai-smart-dependency-manager"
    echo "  3. Logs:    pm2 logs ai-smart-dependency-manager"
    exit 0
fi

echo -e "${BLUE}🔧 Starting AI Smart Dependency Manager...${NC}"
pm2 start ecosystem.config.cjs --only ai-smart-dependency-manager

echo ""
echo -e "${GREEN}✅ AI Smart Dependency Manager started successfully!${NC}"
echo ""

echo -e "${BLUE}📊 Agent Status:${NC}"
pm2 status ai-smart-dependency-manager

echo ""
echo -e "${BLUE}📝 Quick Commands:${NC}"
echo "  View logs:     pm2 logs ai-smart-dependency-manager"
echo "  Stop agent:    pm2 stop ai-smart-dependency-manager"
echo "  Restart agent: pm2 restart ai-smart-dependency-manager"
echo ""
