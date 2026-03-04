#!/bin/bash

###############################################################################
# AI Agents Startup Script
# Starts available AI agents using PM2
###############################################################################

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🤖 Starting AI Agents${NC}"
echo ""

if ! command -v pm2 &> /dev/null; then
    echo -e "${RED}❌ PM2 is not installed${NC}"
    echo -e "${YELLOW}Installing PM2...${NC}"
    npm install -g pm2
fi

if [ ! -f "ecosystem.config.cjs" ]; then
    echo -e "${RED}❌ ecosystem.config.cjs not found${NC}"
    exit 1
fi

echo -e "${YELLOW}Starting AI Continuous Improvement Agent...${NC}"
pm2 start ecosystem.config.cjs --only ai-continuous-improvement

echo -e "${YELLOW}Starting AI Build Fixer...${NC}"
pm2 start ecosystem.config.cjs --only ai-build-fixer

echo -e "${YELLOW}Starting AI App Improvement Specialist...${NC}"
pm2 start ecosystem.config.cjs --only ai-app-improvement-specialist

echo ""
echo -e "${GREEN}✅ AI Agents Started Successfully${NC}"
echo ""

echo -e "${BLUE}Current Status:${NC}"
pm2 status | grep -E "ai-continuous-improvement|ai-build-fixer|ai-app-improvement|Process"

echo ""
echo -e "${BLUE}📊 View Logs:${NC}"
echo -e "  ${YELLOW}pm2 logs${NC}"
echo ""
echo -e "${BLUE}🛑 Stop Agents:${NC}"
echo -e "  ${YELLOW}pm2 stop all${NC}"
echo ""
