#!/bin/bash

# 🚀 Quick Start Script for Intelligent PM2 Automation System
# This script sets up the complete intelligent automation system

set -e

echo "🚀 Starting Intelligent PM2 Automation System Setup..."
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

print_status "Project root directory confirmed."

# Check Node.js version
NODE_VERSION=$(node --version 2>/dev/null | cut -d'v' -f2 | cut -d'.' -f1)
if [ -z "$NODE_VERSION" ] || [ "$NODE_VERSION" -lt 14 ]; then
    print_error "Node.js 14 or higher is required. Current version: $(node --version 2>/dev/null || echo 'Not installed')"
    exit 1
fi

print_success "Node.js version: $(node --version)"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_warning "PM2 not found. Installing globally..."
    npm install -g pm2
    if [ $? -eq 0 ]; then
        print_success "PM2 installed successfully"
    else
        print_error "Failed to install PM2. Please install manually: npm install -g pm2"
        exit 1
    fi
else
    print_success "PM2 already installed: $(pm2 --version)"
fi

# Create necessary directories
print_status "Creating log directories..."
mkdir -p logs/pm2
print_success "Log directories created"

# Check if ecosystem.config.js exists
if [ ! -f "ecosystem.config.js" ]; then
    print_error "ecosystem.config.js not found. Please ensure the intelligent automation configuration is in place."
    exit 1
fi

print_success "Configuration file found"

# Check if all automation scripts exist
print_status "Verifying automation scripts..."
SCRIPT_DIR="scripts/pm2"
REQUIRED_SCRIPTS=(
    "intelligent-lint-fixer.js"
    "ai-code-quality-monitor.js"
    "intelligent-test-runner.js"
    "smart-build-optimizer.js"
    "smart-auto-commit.js"
    "intelligent-dependency-monitor.js"
    "predictive-performance-monitor.js"
    "code-review-assistant.js"
    "adaptive-scheduler.js"
    "predictive-health-monitor.js"
)

MISSING_SCRIPTS=()
for script in "${REQUIRED_SCRIPTS[@]}"; do
    if [ ! -f "$SCRIPT_DIR/$script" ]; then
        MISSING_SCRIPTS+=("$script")
    fi
done

if [ ${#MISSING_SCRIPTS[@]} -gt 0 ]; then
    print_error "Missing automation scripts:"
    for script in "${MISSING_SCRIPTS[@]}"; do
        echo "  - $script"
    done
    exit 1
fi

print_success "All automation scripts verified"

# Install dependencies if needed
print_status "Checking dependencies..."
if [ ! -d "node_modules" ]; then
    print_warning "Dependencies not installed. Installing..."
    npm install
    if [ $? -eq 0 ]; then
        print_success "Dependencies installed"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
else
    print_success "Dependencies already installed"
fi

# Stop any existing PM2 processes
print_status "Stopping any existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true
print_success "Existing processes cleared"

# Start the intelligent automation system
print_status "Starting intelligent automation system..."
pm2 start ecosystem.config.js

if [ $? -eq 0 ]; then
    print_success "Intelligent automation system started successfully!"
else
    print_error "Failed to start automation system"
    exit 1
fi

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save

# Show running processes
echo ""
echo "📊 Intelligent Automation Processes:"
echo "=================================="
pm2 list

echo ""
print_success "🎉 Intelligent PM2 Automation System is now running!"
echo ""
echo "📋 Available Commands:"
echo "  pm2 list                    - View all processes"
echo "  pm2 logs [process-name]     - View logs for specific process"
echo "  pm2 monit                   - Monitor all processes"
echo "  pm2 stop all                - Stop all processes"
echo "  pm2 restart all             - Restart all processes"
echo "  pm2 delete all              - Remove all processes"
echo ""
echo "📁 Logs and Reports:"
echo "  logs/pm2/                   - All automation logs and reports"
echo ""
echo "🔧 Manual Execution:"
echo "  npm run automation:stop     - Stop automation system"
echo "  npm run automation:restart  - Restart automation system"
echo ""
echo "📚 Documentation:"
echo "  INTELLIGENT_PM2_AUTOMATION_SYSTEM.md - Complete system documentation"
echo ""
print_status "The system will automatically run every hour to 24 hours depending on the process."
print_status "Check the logs directory for detailed reports and insights."
echo ""
print_success "Setup complete! 🚀"