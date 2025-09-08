#!/bin/bash

# 🚀 Zion App - Intelligent Automation Startup Script
# This script starts all PM2 automations and provides monitoring

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
ECOSYSTEM_FILE="ecosystem.config.cjs"
DASHBOARD_SCRIPT="./scripts/automation/smart-automation-dashboard.cjs"
LOG_DIR="./automation-logs"
REPORT_DIR="./automation-reports"

echo -e "${CYAN}🚀 Starting Zion App Intelligent Automation System${NC}"
echo -e "${CYAN}