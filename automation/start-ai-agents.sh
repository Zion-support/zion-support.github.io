#!/bin/bash

###############################################################################
# AI Agents Startup Script
# Starts all AI development agents using PM2
###############################################################################

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🤖 Starting AI Development Agents${NC}"
echo ""

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${RED}❌ PM2 is not installed${NC}"
    echo -e "${YELLOW}Installing PM2...${NC}"
    npm install -g pm2
fi

# Check if ecosystem file exists
if [ ! -f "ecosystem.config.cjs" ]; then
    echo -e "${RED}❌ ecosystem.config.cjs not found${NC}"
    exit 1
fi

# Start AI agents
echo -e "${YELLOW}Starting AI Development Agent...${NC}"
pm2 start ecosystem.config.cjs --only ai-development-agent

echo -e "${YELLOW}Starting AI Code Generator...${NC}"
pm2 start ecosystem.config.cjs --only ai-code-generator

echo -e "${YELLOW}Starting AI Master Orchestrator...${NC}"
pm2 start ecosystem.config.cjs --only ai-master-orchestrator

echo ""
echo -e "${GREEN}✅ AI Agents Started Successfully${NC}"
echo ""

# Show status
echo -e "${BLUE}Current Status:${NC}"
pm2 status | grep -E "ai-development-agent|ai-code-generator|ai-master-orchestrator|Process"

echo ""
echo -e "${BLUE}📊 View Logs:${NC}"
echo -e "  ${YELLOW}pm2 logs ai-development-agent${NC}"
echo -e "  ${YELLOW}pm2 logs ai-code-generator${NC}"
echo -e "  ${YELLOW}pm2 logs ai-master-orchestrator${NC}"
echo ""
echo -e "${BLUE}🛑 Stop Agents:${NC}"
echo -e "  ${YELLOW}pm2 stop ai-development-agent${NC}"
echo -e "  ${YELLOW}pm2 stop ai-code-generator${NC}"
echo -e "  ${YELLOW}pm2 stop ai-master-orchestrator${NC}"
echo ""
echo -e "${BLUE}🔄 Restart Agents:${NC}"
echo -e "  ${YELLOW}pm2 restart ai-development-agent${NC}"
echo ""
echo -e "${BLUE}📝 Reports Location:${NC}"
echo -e "  ${YELLOW}automation/logs/ai-development-report.json${NC}"
echo -e "  ${YELLOW}automation/logs/orchestrator-report.json${NC}"
echo ""

