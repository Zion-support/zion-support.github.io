#!/bin/bash

# Enhanced PM2 Automation System Installation Script
# This script sets up the complete enhanced automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Enhanced PM2 Automation System Installation${NC}"
echo -e "${BLUE}echo ""

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        echo -e "${YELLOW}📦 PM2 is not installed. Installing PM2...${NC}"
        npm install -g pm2
        echo -e "${GREEN}✅ PM2 installed successfully${NC}"
    else
        echo -e "${GREEN}✅ PM2 is already installed${NC}"
    fi
}

# Function to create necessary directories
create_directories() {
    echo -e "${BLUE}📁 Creating necessary directories...${NC}"
    
    # Create logs directory
    if [ ! -d "logs" ]; then
        mkdir -p logs
        echo -e "${GREEN}✅ Created logs directory${NC}"
    else
        echo -e "${GREEN}✅ Logs directory already exists${NC}"
    fi
    
    # Create automation directory
    if [ ! -d "scripts/automation" ]; then
        mkdir -p scripts/automation
        echo -e "${GREEN}✅ Created automation directory${NC}"
    else
        echo -e "${GREEN}✅ Automation directory already exists${NC}"
    fi
}

# Function to verify ecosystem configuration
verify_ecosystem_config() {
    echo -e "${BLUE}🔍 Verifying ecosystem configuration...${NC}"
    
    if [ -f "ecosystem.config.cjs" ]; then
        echo -e "${GREEN}✅ Ecosystem configuration file found${NC}"
        
        # Count the number of processes defined
        process_count=$(grep -c "name:" ecosystem.config.cjs)
        echo -e "${BLUE}📊 Found ${process_count} automation processes${NC}"
    else
        echo -e "${RED}❌ Ecosystem configuration file not found${NC}"
        echo -e "${YELLOW}⚠️  Please ensure ecosystem.config.cjs exists${NC}"
        exit 1
    fi
}

# Function to verify automation scripts
verify_automation_scripts() {
    echo -e "${BLUE}🔍 Verifying automation scripts...${NC}"
    
    local scripts=(
        "scripts/automation/smart-code-analyzer.cjs"
        "scripts/automation/ai-performance-optimizer.cjs"
        "scripts/automation/intelligent-test-runner.cjs"
        "scripts/automation/smart-dependency-manager.cjs"
        "scripts/automation/code-quality-enforcer.cjs"
        "scripts/automation/console-error-fixer.cjs"
    )
    
    local missing_scripts=()
    
    for script in "${scripts[@]}"; do
        if [ -f "$script" ]; then
            echo -e "${GREEN}✅ Found: $script${NC}"
        else
            echo -e "${RED}❌ Missing: $script${NC}"
            missing_scripts+=("$script")
        fi
    done
    
    if [ ${#missing_scripts[@]} -gt 0 ]; then
        echo -e "${YELLOW}⚠️  Some automation scripts are missing${NC}"
        echo -e "${YELLOW}⚠️  The system may not function completely${NC}"
    fi
}

# Function to test PM2 functionality
test_pm2() {
    echo -e "${BLUE}🧪 Testing PM2 functionality...${NC}"
    
    # Test PM2 version
    pm2_version=$(pm2 --version)
    echo -e "${GREEN}✅ PM2 version: $pm2_version${NC}"
    
    # Test PM2 list
    pm2 list
    echo -e "${GREEN}✅ PM2 list command working${NC}"
}

# Function to start automation system
start_automation() {
    echo -e "${BLUE}🚀 Starting enhanced automation system...${NC}"
    
    # Start the automation processes
    pm2 start ecosystem.config.cjs --only automation
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Enhanced automation system started successfully${NC}"
        echo ""
        echo -e "${BLUE}📊 Current PM2 Status:${NC}"
        pm2 status
    else
        echo -e "${RED}❌ Failed to start automation system${NC}"
        exit 1
    fi
}

# Function to save PM2 configuration
save_pm2_config() {
    echo -e "${BLUE}💾 Saving PM2 configuration...${NC}"
    
    pm2 save
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ PM2 configuration saved${NC}"
    else
        echo -e "${YELLOW}⚠️  Failed to save PM2 configuration${NC}"
    fi
}

# Function to setup PM2 startup
setup_pm2_startup() {
    echo -e "${BLUE}🔧 Setting up PM2 startup...${NC}"
    
    echo -e "${YELLOW}⚠️  This will configure PM2 to start automatically on boot${NC}"
    echo -e "${YELLOW}⚠️  You may need to run this with sudo on some systems${NC}"
    
    read -p "Do you want to setup PM2 startup? (y/N): " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        pm2 startup
        echo -e "${GREEN}✅ PM2 startup configured${NC}"
    else
        echo -e "${YELLOW}⚠️  PM2 startup not configured${NC}"
        echo -e "${YELLOW}⚠️  You can run 'pm2 startup' manually later${NC}"
    fi
}

# Function to display next steps
display_next_steps() {
    echo ""
    echo -e "${BLUE}🎯 Next Steps:${NC}"
    echo -e "${BLUE}    echo ""
    echo -e "${GREEN}1. Monitor your automation system:${NC}"
    echo -e "   pm2 status"
    echo -e "   pm2 monit"
    echo ""
    echo -e "${GREEN}2. View automation logs:${NC}"
    echo -e "   pm2 logs"
    echo -e "   pm2 logs <process-name>"
    echo ""
    echo -e "${GREEN}3. Manage automation processes:${NC}"
    echo -e "   pm2 restart <process-name>"
    echo -e "   pm2 stop <process-name>"
    echo -e "   pm2 delete <process-name>"
    echo ""
    echo -e "${GREEN}4. Generate reports:${NC}"
    echo -e "   Check the logs/ directory for automation reports"
    echo ""
    echo -e "${GREEN}5. Use npm scripts (if configured):${NC}"
    echo -e "   npm run automation:status"
    echo -e "   npm run automation:health"
    echo -e "   npm run automation:reports"
    echo ""
    echo -e "${BLUE}📚 Documentation:${NC}"
    echo -e "   Read ENHANCED_PM2_AUTOMATION_README.md for detailed information"
    echo ""
    echo -e "${BLUE}🆘 Troubleshooting:${NC}"
    echo -e "   pm2 logs --err"
    echo -e "   pm2 restart all"
    echo -e "   pm2 delete all && pm2 start ecosystem.config.cjs --only automation"
}

# Main installation flow
main() {
    echo -e "${BLUE}🔍 Checking system requirements...${NC}"
    
    # Check if we're in the right directory
    if [ ! -f "package.json" ]; then
        echo -e "${RED}❌ package.json not found${NC}"
        echo -e "${YELLOW}⚠️  Please run this script from your project root directory${NC}"
        exit 1
    fi
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js is not installed${NC}"
        echo -e "${YELLOW}⚠️  Please install Node.js first${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Node.js found: $(node --version)${NC}"
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        echo -e "${RED}❌ npm is not installed${NC}"
        echo -e "${YELLOW}⚠️  Please install npm first${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ npm found: $(npm --version)${NC}"
    
    echo ""
    
    # Install PM2
    check_pm2
    
    echo ""
    
    # Create directories
    create_directories
    
    echo ""
    
    # Verify ecosystem configuration
    verify_ecosystem_config
    
    echo ""
    
    # Verify automation scripts
    verify_automation_scripts
    
    echo ""
    
    # Test PM2
    test_pm2
    
    echo ""
    
    # Start automation system
    start_automation
    
    echo ""
    
    # Save PM2 configuration
    save_pm2_config
    
    echo ""
    
    # Setup PM2 startup
    setup_pm2_startup
    
    echo ""
    
    # Display next steps
    display_next_steps
    
    echo ""
    echo -e "${GREEN}🎉 Enhanced PM2 Automation System installation completed!${NC}"
    echo -e "${GREEN}🚀 Your development workflow is now powered by intelligent automation!${NC}"
}

# Run main function
main "$@"