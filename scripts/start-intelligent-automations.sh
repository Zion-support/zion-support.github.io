#!/bin/bash

# 🚀 Intelligent PM2 Automations Quick Start Script
# Zion Tech Group - Enhanced Development Workflow

set -e

echo "🚀 Starting Intelligent PM2 Automations..."
echo "=========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
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

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_error "PM2 is not installed. Please install it first:"
    echo "npm install -g pm2"
    exit 1
fi

# Check if node-cron is installed
if ! npm list node-cron &> /dev/null; then
    print_warning "node-cron not found. Installing..."
    npm install node-cron
fi

# Create necessary directories
print_info "Creating necessary directories..."
mkdir -p logs
mkdir -p reports
mkdir -p automation/backups

# Check if ecosystem.config.cjs exists
if [ ! -f "ecosystem.config.cjs" ]; then
    print_error "ecosystem.config.cjs not found. Please ensure you're in the project root directory."
    exit 1
fi

# Stop any existing PM2 processes
print_info "Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start all automations
print_info "Starting Intelligent PM2 Automations..."
pm2 start ecosystem.config.cjs

# Wait a moment for processes to start
sleep 3

# Check status
print_info "Checking automation status..."
pm2 status

# Show memory usage
print_info "Memory usage overview:"
pm2 show | grep -E "(memory|cpu)" | head -10

# Show log file locations
print_info "Log file locations:"
echo "📁 Logs directory: ./logs/"
echo "📊 Reports directory: ./reports/"
echo ""

# Show useful commands
print_info "Useful PM2 Commands:"
echo "🔍 Monitor all automations: pm2 monit"
echo "📋 View status: pm2 status"
echo "📝 View logs: pm2 logs"
echo "🔄 Restart all: pm2 restart all"
echo "⏹️  Stop all: pm2 stop all"
echo "🗑️  Delete all: pm2 delete all"
echo ""

# Show specific automation commands
print_info "Individual Automation Commands:"
echo "🤖 AI Code Reviewer: pm2 logs ai-code-reviewer"
echo "🔍 Smart Dependency Analyzer: pm2 logs smart-dependency-analyzer"
echo "⚡ Performance Optimizer: pm2 logs intelligent-performance-optimizer"
echo "🧪 Test Generator: pm2 logs smart-test-generator"
echo ""

# Show automation schedules
print_info "Automation Schedules:"
echo "🤖 AI Code Reviewer: Every 5 minutes + Deep review every 2 hours + Weekly review"
echo "🔍 Smart Dependency Analyzer: Every 30 minutes + Deep analysis every 4 hours + Weekly analysis"
echo "⚡ Performance Optimizer: Every 20 minutes + Deep analysis every 3 hours + Weekly analysis"
echo "🧪 Test Generator: Every 25 minutes + Deep analysis every 4 hours + Weekly analysis"
echo ""

# Show what each automation does
print_info "What Each Automation Does:"
echo "🤖 AI Code Reviewer:"
echo "   - Analyzes code for complexity, anti-patterns, performance issues"
echo "   - Detects security vulnerabilities and accessibility issues"
echo "   - Auto-fixes common problems like missing dependency arrays"
echo ""

echo "🔍 Smart Dependency Analyzer:"
echo "   - Detects dependency conflicts and duplicates"
echo "   - Identifies unused and outdated packages"
echo "   - Scans for security vulnerabilities"
echo "   - Auto-fixes dependency issues"
echo ""

echo "⚡ Intelligent Performance Optimizer:"
echo "   - Monitors bundle size and performance"
echo "   - Detects performance bottlenecks in code"
echo "   - Identifies memory leaks and inefficient patterns"
echo "   - Auto-optimizes performance issues"
echo ""

echo "🧪 Smart Test Generator:"
echo "   - Analyzes test coverage and identifies gaps"
echo "   - Detects testable functions and components"
echo "   - Auto-generates test templates"
echo "   - Monitors test quality and trends"
echo ""

# Check if automations are running
print_info "Verifying automations are running..."
sleep 2

# Count running processes
RUNNING_COUNT=$(pm2 list | grep -c "online" || echo "0")
TOTAL_COUNT=$(pm2 list | grep -c "app" || echo "0")

if [ "$RUNNING_COUNT" -eq "$TOTAL_COUNT" ] && [ "$TOTAL_COUNT" -gt 0 ]; then
    print_status "All $RUNNING_COUNT automations are running successfully!"
else
    print_warning "Some automations may not be running. Check with 'pm2 status'"
fi

# Show next steps
print_info "Next Steps:"
echo "1. 🎯 Open PM2 monitoring: pm2 monit"
echo "2. 📊 Check generated reports in ./reports/ directory"
echo "3. 📝 Review logs in ./logs/ directory"
echo "4. 🔧 Customize automations in ./automation/ directory"
echo "5. 📚 Read INTELLIGENT_PM2_AUTOMATIONS_README.md for detailed information"
echo ""

# Show automation benefits
print_info "Expected Benefits:"
echo "🎯 Automated code review and quality checks"
echo "⚡ Continuous performance monitoring and optimization"
echo "🔒 Automatic security vulnerability detection"
echo "🧪 Automated test generation and coverage analysis"
echo "📦 Smart dependency management and conflict resolution"
echo "📊 Comprehensive reporting and trend analysis"
echo ""

print_status "Intelligent PM2 Automations started successfully!"
echo "🚀 Your development workflow is now enhanced with AI-powered automation!"
echo ""
echo "💡 Pro tip: Run 'pm2 monit' to see all automations in action!"
echo ""

# Optional: Open PM2 monitoring
read -p "Would you like to open PM2 monitoring now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_info "Opening PM2 monitoring..."
    pm2 monit
fi