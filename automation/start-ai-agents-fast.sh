#!/bin/bash

###############################################################################
# AI Agents Fast Startup Script
# Starts all AI development agents in FAST CONTINUOUS MODE
###############################################################################

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
NC='\033[0m' # No Color

echo -e "${MAGENTA}⚡ Starting AI Development Agents in FAST CONTINUOUS MODE${NC}"
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

# Set fast mode environment variables
export FAST_MODE=true
export CONTINUOUS_MODE=true
export AUTO_COMMIT=true
export AUTO_PUSH=true
export MAX_CHANGES_PER_RUN=20
export MAX_CONCURRENT_TASKS=10
export ANALYSIS_INTERVAL=120000
export ORCHESTRATION_INTERVAL=120000

echo -e "${BLUE}📊 ULTRA-FAST Mode Configuration:${NC}"
echo -e "  ${YELLOW}Analysis Interval:${NC} 2 minutes (120s)"
echo -e "  ${YELLOW}Max Changes/Run:${NC} 20"
echo -e "  ${YELLOW}Max Concurrent Tasks:${NC} 10"
echo -e "  ${YELLOW}Auto Commit:${NC} Enabled"
echo -e "  ${YELLOW}Auto Push:${NC} Enabled"
echo ""
echo -e "${MAGENTA}⚡⚡⚡ ULTRA-FAST CONTINUOUS MODE - Runs every 2 minutes!${NC}"

# Start AI agents
echo -e "${YELLOW}🚀 Starting AI Development Agent (Continuous Fast Mode)...${NC}"
pm2 start ecosystem.config.cjs --only ai-development-agent --update-env

echo -e "${YELLOW}🚀 Starting AI Master Orchestrator (Continuous Fast Mode)...${NC}"
pm2 start ecosystem.config.cjs --only ai-master-orchestrator --update-env

echo -e "${YELLOW}🚀 Starting AI Code Generator (Every 2 hours)...${NC}"
pm2 start ecosystem.config.cjs --only ai-code-generator --update-env

echo ""
echo -e "${GREEN}✅ AI Agents Started in FAST CONTINUOUS MODE${NC}"
echo ""

# Show status
echo -e "${BLUE}Current Status:${NC}"
pm2 status | grep -E "ai-development-agent|ai-code-generator|ai-master-orchestrator|Process"

echo ""
echo -e "${BLUE}⚡ ULTRA-FAST Mode Features:${NC}"
echo -e "  ${GREEN}✓${NC} Continuous execution (no scheduled restarts)"
echo -e "  ${GREEN}✓${NC} 2-minute analysis intervals (ULTRA-FAST)"
echo -e "  ${GREEN}✓${NC} Up to 20 changes per run"
echo -e "  ${GREEN}✓${NC} 10 concurrent tasks"
echo -e "  ${GREEN}✓${NC} Automatic commits and pushes"
echo -e "  ${GREEN}✓${NC} Runs AUTONOMOUSLY indefinitely"
echo ""
echo -e "${MAGENTA}⚡⚡⚡ Agents are now running AUTONOMOUSLY, CONTINUOUSLY, and at MAXIMUM SPEED!${NC}"

echo -e "${BLUE}📊 View Logs:${NC}"
echo -e "  ${YELLOW}pm2 logs ai-development-agent${NC}"
echo -e "  ${YELLOW}pm2 logs ai-code-generator${NC}"
echo -e "  ${YELLOW}pm2 logs ai-master-orchestrator${NC}"
echo ""
echo -e "${BLUE}📈 Monitor Performance:${NC}"
echo -e "  ${YELLOW}pm2 monit${NC}"
echo ""
echo -e "${BLUE}🛑 Stop Agents:${NC}"
echo -e "  ${YELLOW}pm2 stop ai-development-agent${NC}"
echo -e "  ${YELLOW}pm2 stop ai-code-generator${NC}"
echo -e "  ${YELLOW}pm2 stop ai-master-orchestrator${NC}"
echo -e "  ${YELLOW}pm2 stop all${NC}"
echo ""
echo -e "${BLUE}🔄 Restart Agents:${NC}"
echo -e "  ${YELLOW}pm2 restart ai-development-agent${NC}"
echo ""
echo -e "${BLUE}📝 Reports Location:${NC}"
echo -e "  ${YELLOW}automation/logs/ai-development-report.json${NC}"
echo -e "  ${YELLOW}automation/logs/orchestrator-report.json${NC}"
echo ""
echo -e "${MAGENTA}⚡ Agents are now running AUTONOMOUSLY and CONTINUOUSLY at MAXIMUM SPEED!${NC}"
echo ""

