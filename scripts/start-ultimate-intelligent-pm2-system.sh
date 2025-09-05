#!/bin/bash

# Ultimate Intelligent PM2 System Startup Script
# Advanced automation system with AI-powered features

set -e

echo "🚀 Starting Ultimate Intelligent PM2 System..."
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
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_header() {
    echo -e "${BLUE}$1${NC}"
}

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_error "PM2 is not installed. Installing PM2..."
    npm install -g pm2@latest
    print_success "PM2 installed successfully"
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p logs
mkdir -p logs/pm2
mkdir -p automation-reports
mkdir -p security-reports
mkdir -p quality-reports
mkdir -p performance-reports
mkdir -p deployment-reports
print_success "Directories created"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
    print_success "Dependencies installed"
fi

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true
print_success "Existing processes stopped"

# Wait a moment for processes to fully stop
sleep 2

# Start the Ultimate Intelligent PM2 System
print_header "🤖 Starting Ultimate Intelligent PM2 System..."

# Start with the main ecosystem
print_status "Starting main ecosystem..."
pm2 start ecosystem.ultimate-intelligent-v4.cjs --env production

# Wait for processes to initialize
print_status "Waiting for processes to initialize..."
sleep 10

# Check system status
print_status "Checking system status..."
pm2 status

# Display system information
print_header "📊 System Information"
echo "PM2 Version: $(pm2 --version)"
echo "Node Version: $(node --version)"
echo "NPM Version: $(npm --version)"
echo "System: $(uname -a)"
echo "Memory: $(free -h | grep Mem | awk '{print $2}')"
echo "Disk: $(df -h / | tail -1 | awk '{print $4}') available"

# Display running processes
print_header "🔄 Running Processes"
pm2 list

# Display logs
print_header "📝 Recent Logs"
pm2 logs --lines 20

# Generate initial system report
print_status "Generating initial system report..."
node scripts/automation/generate-system-report.cjs

# Display dashboard information
print_header "🎛️  Dashboard Access"
echo "Health Dashboard: http://localhost:3001"
echo "PM2 Web Dashboard: pm2 web"
echo "Logs Directory: ./logs"
echo "Reports Directory: ./automation-reports"

# Display AI features
print_header "🧠 AI Features Enabled"
echo "✅ AI Code Quality Analysis"
echo "✅ AI Security Intelligence"
echo "✅ AI Performance Prediction"
echo "✅ Intelligent Test Orchestration"
echo "✅ Intelligent Deployment Strategy"
echo "✅ Predictive Analytics Engine"
echo "✅ Intelligent Auto-Scaling"
echo "✅ Advanced Security Scanning"
echo "✅ Intelligent Git Workflow"
echo "✅ Advanced Performance Optimization"
echo "✅ Intelligent Backup System"
echo "✅ Real-time Health Dashboard"
echo "✅ Intelligent Code Quality Management"
echo "✅ Advanced Testing Automation"
echo "✅ Intelligent Deployment Orchestrator"
echo "✅ Resource Monitor & Optimizer"
echo "✅ AI-Powered Error Prevention"
echo "✅ Continuous Intelligence Monitor"

# Display monitoring commands
print_header "🔍 Monitoring Commands"
echo "View all logs: pm2 logs"
echo "View specific process: pm2 logs <process-name>"
echo "Monitor in real-time: pm2 monit"
echo "Restart all: pm2 restart all"
echo "Stop all: pm2 stop all"
echo "Delete all: pm2 delete all"
echo "Save current state: pm2 save"
echo "Resurrect saved state: pm2 resurrect"

# Display automation schedules
print_header "⏰ Automation Schedules"
echo "Code Quality Analysis: Every 2 hours"
echo "Security Intelligence: Every hour"
echo "Performance Prediction: Every 30 minutes"
echo "Test Orchestration: Every 4 hours"
echo "Deployment Strategy: Every 6 hours"
echo "Predictive Analytics: Every 5 minutes"
echo "Auto-Scaling: Every 2 minutes"
echo "Security Scanning: Every 2 hours"
echo "Git Workflow: Every 10 minutes"
echo "Performance Optimization: Every 3 hours"
echo "Backup System: Daily at 2 AM"
echo "Health Dashboard: Every minute"
echo "Code Quality Management: Every 15 minutes"
echo "Testing Automation: Every 20 minutes"
echo "Deployment Orchestrator: Every 30 minutes"
echo "Resource Monitor: Every 3 minutes"
echo "Error Prevention: Every 5 minutes"
echo "Continuous Monitor: Every minute"

# Display success message
print_header "🎉 Ultimate Intelligent PM2 System Started Successfully!"
echo ""
echo "The system is now running with advanced AI-powered automation features."
echo "All processes are monitored and will automatically restart if they fail."
echo "The system will continuously analyze, optimize, and improve your application."
echo ""
echo "For more information, check the logs in the ./logs directory."
echo "For system reports, check the ./automation-reports directory."
echo ""
echo "Happy coding! 🚀"

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save

print_success "Ultimate Intelligent PM2 System is now running!"