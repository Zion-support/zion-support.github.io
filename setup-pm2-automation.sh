#!/bin/bash

# PM2 Automation Setup Script for Zion Tech Group
# This script sets up the complete PM2 automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}🚀 Setting up PM2 Intelligent Automation System for Zion Tech Group${NC}"
echo "=================================================================="

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

echo -e "${GREEN}✅ Node.js and npm are installed${NC}"

# Install PM2 globally
echo -e "${BLUE}📦 Installing PM2 globally...${NC}"
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
    echo -e "${GREEN}✅ PM2 installed successfully${NC}"
else
    echo -e "${GREEN}✅ PM2 is already installed${NC}"
fi

# Install project dependencies
echo -e "${BLUE}📦 Installing project dependencies...${NC}"
npm run install:all

# Install additional dependencies for automation
echo -e "${BLUE}📦 Installing automation dependencies...${NC}"
npm install --save-dev chokidar

# Create necessary directories
echo -e "${BLUE}📁 Creating necessary directories...${NC}"
mkdir -p logs
mkdir -p deployments
mkdir -p backups
mkdir -p reports

# Make scripts executable
echo -e "${BLUE}🔧 Making scripts executable...${NC}"
chmod +x scripts/pm2-automation-launcher.sh

# Verify PM2 installation
echo -e "${BLUE}🔍 Verifying PM2 installation...${NC}"
pm2 --version

# Show PM2 status
echo -e "${BLUE}📊 Current PM2 status:${NC}"
pm2 status

echo ""
echo -e "${GREEN}🎉 PM2 Automation System Setup Complete!${NC}"
echo ""
echo -e "${CYAN}🚀 Next Steps:${NC}"
echo "1. Start development environment:"
echo "   ${GREEN}./scripts/pm2-automation-launcher.sh dev:start${NC}"
echo ""
echo "2. Start PM2 ecosystem:"
echo "   ${GREEN}./scripts/pm2-automation-launcher.sh start development${NC}"
echo ""
echo "3. View available commands:"
echo "   ${GREEN}./scripts/pm2-automation-launcher.sh help${NC}"
echo ""
echo "4. Check system status:"
echo "   ${GREEN}./scripts/pm2-automation-launcher.sh status${NC}"
echo ""
echo -e "${YELLOW}📚 For detailed documentation, see: PM2_AUTOMATION_README.md${NC}"
echo ""
echo -e "${GREEN}✨ Welcome to intelligent development automation!${NC}"