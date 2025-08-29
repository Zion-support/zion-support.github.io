#!/bin/bash

# 🚀 Enhanced PM2 Automation System - Quick Start Script
# Zion Tech Group

set -e

echo "🚀 Starting Enhanced PM2 Automation System..."
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}🎉 $1${NC}"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
        print_success "PM2 installed successfully!"
    else
        print_status "PM2 is already installed"
    fi
}

# Check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    print_status "Node.js is installed"
}

# Check if npm is available
check_npm() {
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    print_status "npm is available"
}

# Install dependencies
install_dependencies() {
    print_info "Installing project dependencies..."
    if npm install; then
        print_success "Dependencies installed successfully!"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
}

# Start the enhanced automation system
start_automation() {
    print_info "Starting Enhanced PM2 Automation System..."
    
    # Check if PM2 processes are already running
    if pm2 list | grep -q "online"; then
        print_warning "PM2 processes are already running. Stopping them first..."
        pm2 stop all
        pm2 delete all
    fi
    
    # Start the enhanced automation system
    if npm run automation:enhanced:start; then
        print_success "Enhanced automation system started successfully!"
    else
        print_error "Failed to start automation system"
        exit 1
    fi
}

# Show status
show_status() {
    print_info "Checking automation system status..."
    npm run automation:enhanced:status
}

# Show available commands
show_commands() {
    echo ""
    echo "🚀 Enhanced PM2 Automation System - Available Commands"
    echo "======================================================"
    echo ""
    echo "📊 Management Commands:"
    echo "  npm run automation:enhanced:start    - Start all automations"
    echo "  npm run automation:enhanced:stop     - Stop all automations"
    echo "  npm run automation:enhanced:restart  - Restart all automations"
    echo "  npm run automation:enhanced:status   - Check status"
    echo "  npm run automation:enhanced:logs     - View logs"
    echo "  npm run automation:enhanced:monit    - Open monitoring interface"
    echo ""
    echo "🤖 AI-Powered Automations:"
    echo "  npm run ai:code-review               - AI code review"
    echo "  npm run ai:performance               - Performance optimization"
    echo "  npm run ai:dependencies              - Smart dependency management"
    echo "  npm run ai:security                  - Security intelligence"
    echo "  npm run ai:quality                   - Code quality intelligence"
    echo "  npm run ai:testing                   - Testing intelligence"
    echo "  npm run ai:seo                       - SEO & analytics intelligence"
    echo "  npm run ai:dev-assistant             - Real-time development assistant"
    echo "  npm run ai:build                     - Intelligent build orchestration"
    echo "  npm run ai:health                    - Code health monitoring"
    echo ""
    echo "🛠️  Development Commands:"
    echo "  npm run dev:assistant                - Start development assistant"
    echo "  npm run dev:review                   - Run code review"
    echo "  npm run dev:optimize                 - Optimize performance"
    echo "  npm run dev:dependencies             - Manage dependencies"
    echo "  npm run dev:security                 - Check security"
    echo "  npm run dev:quality                  - Assess code quality"
    echo "  npm run dev:testing                  - Run testing intelligence"
    echo "  npm run dev:seo                      - Optimize SEO"
    echo "  npm run dev:build                    - Orchestrate builds"
    echo "  npm run dev:health                   - Monitor code health"
    echo ""
    echo "📊 Monitoring & Reporting:"
    echo "  npm run automation:dashboard         - Enhanced monitoring dashboard"
    echo "  npm run automation:factory           - Automation factory"
    echo "  npm run automation:orchestrator      - Intelligent orchestrator"
    echo ""
}

# Main execution
main() {
    echo "🚀 Enhanced PM2 Automation System - Quick Start"
    echo "=============================================="
    echo ""
    
    # Check prerequisites
    print_info "Checking prerequisites..."
    check_node
    check_npm
    check_pm2
    
    # Install dependencies
    install_dependencies
    
    # Start automation system
    start_automation
    
    # Show status
    show_status
    
    # Show available commands
    show_commands
    
    echo ""
    print_success "Enhanced PM2 Automation System is now running!"
    echo ""
    echo "🎯 Next steps:"
    echo "  1. Open monitoring interface: npm run automation:enhanced:monit"
    echo "  2. Start development assistant: npm run dev:assistant"
    echo "  3. View enhanced dashboard: npm run automation:dashboard"
    echo ""
    echo "📚 For more information, see: ENHANCED_PM2_AUTOMATION_README.md"
    echo ""
}

# Run main function
main "$@"