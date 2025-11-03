#!/bin/bash

###############################################################################
# Start PM2 Optimization Agent
#
# This script starts the AI PM2 Optimization Agent via PM2.
# The agent continuously monitors and optimizes the PM2 ecosystem.
###############################################################################

set -e

echo "🚀 Starting AI PM2 Optimization Agent..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}⚠️  PM2 is not installed${NC}"
    echo "Install PM2 globally: npm install -g pm2"
    exit 1
fi

# Navigate to project root
cd "$(dirname "$0")/.."

echo -e "${BLUE}📊 Current PM2 Status:${NC}"
pm2 status || true
echo ""

# Check if agent is already running
if pm2 list | grep -q "ai-pm2-optimization"; then
    echo -e "${YELLOW}⚠️  AI PM2 Optimization Agent is already running${NC}"
    echo ""
    echo "Options:"
    echo "  1. Restart: pm2 restart ai-pm2-optimization"
    echo "  2. Stop:    pm2 stop ai-pm2-optimization"
    echo "  3. Logs:    pm2 logs ai-pm2-optimization"
    exit 0
fi

# Start the agent
echo -e "${BLUE}🔧 Starting AI PM2 Optimization Agent...${NC}"
pm2 start ecosystem.config.cjs --only ai-pm2-optimization

echo ""
echo -e "${GREEN}✅ AI PM2 Optimization Agent started successfully!${NC}"
echo ""

# Show status
echo -e "${BLUE}📊 Agent Status:${NC}"
pm2 status ai-pm2-optimization

echo ""
echo -e "${BLUE}📝 Quick Commands:${NC}"
echo "  View logs:     pm2 logs ai-pm2-optimization"
echo "  Stop agent:    pm2 stop ai-pm2-optimization"
echo "  Restart agent: pm2 restart ai-pm2-optimization"
echo "  View report:   cat automation/logs/pm2-optimization-report.json"
echo "  View metrics:  npm run pm2:metrics"
echo ""

echo -e "${BLUE}🎯 What This Agent Does:${NC}"
echo "  • Monitors PM2 process performance (every 2 hours)"
echo "  • Analyzes memory usage, CPU, restarts, errors"
echo "  • Optimizes memory limits and restart strategies"
echo "  • Identifies and creates new useful automations"
echo "  • Generates comprehensive optimization reports"
echo "  • Self-optimizing infrastructure"
echo ""

echo -e "${GREEN}🎉 The PM2 ecosystem is now self-optimizing!${NC}"

