#!/bin/bash

# Zion Tech Group PM2 Automation Quick Start Script
# This script will set up and start the entire automation ecosystem

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}  Zion PM2 Automation Setup${NC}"
    echo -e "${BLUE}================================${NC}"
}

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
    echo -e "${CYAN}[SUCCESS]${NC} $1"
}

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    print_warning "Running as root. This is not recommended for development."
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

print_header

# Step 1: Check system requirements
print_status "Step 1: Checking system requirements..."

# Check Node.js
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ is required. Current version: $(node --version)"
    exit 1
fi

print_success "Node.js $(node --version) ✓"

# Check npm
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed."
    exit 1
fi

print_success "npm $(npm --version) ✓"

# Check Git
if ! command -v git &> /dev/null; then
    print_warning "Git is not installed. Some features may not work properly."
else
    print_success "Git $(git --version) ✓"
fi

# Step 2: Install PM2 globally
print_status "Step 2: Installing PM2..."

if ! command -v pm2 &> /dev/null; then
    print_status "Installing PM2 globally..."
    npm install -g pm2
    
    if [ $? -eq 0 ]; then
        print_success "PM2 installed successfully!"
    else
        print_error "Failed to install PM2. Please install manually: npm install -g pm2"
        exit 1
    fi
else
    print_success "PM2 already installed ✓"
fi

# Step 3: Install project dependencies
print_status "Step 3: Installing project dependencies..."

if [ ! -d "node_modules" ]; then
    print_status "Installing frontend dependencies..."
    npm install
    
    if [ $? -ne 0 ]; then
        print_error "Failed to install frontend dependencies"
        exit 1
    fi
else
    print_success "Frontend dependencies already installed ✓"
fi

if [ -d "server" ] && [ ! -d "server/node_modules" ]; then
    print_status "Installing backend dependencies..."
    cd server && npm install && cd ..
    
    if [ $? -ne 0 ]; then
        print_error "Failed to install backend dependencies"
        exit 1
    fi
else
    print_success "Backend dependencies already installed ✓"
fi

# Step 4: Create necessary directories
print_status "Step 4: Setting up directory structure..."

mkdir -p logs
mkdir -p automation/logs
mkdir -p automation/backups

print_success "Directory structure created ✓"

# Step 5: Make scripts executable
print_status "Step 5: Setting up scripts..."

if [ -f "scripts/pm2-manager.sh" ]; then
    chmod +x scripts/pm2-manager.sh
    print_success "PM2 manager script made executable ✓"
fi

chmod +x quick-start-automation.sh
print_success "Quick start script made executable ✓"

# Step 6: Verify ecosystem configuration
print_status "Step 6: Verifying configuration..."

if [ ! -f "ecosystem.config.js" ]; then
    print_error "ecosystem.config.js not found. Please ensure it exists."
    exit 1
fi

print_success "Configuration verified ✓"

# Step 7: Start automation system
print_status "Step 7: Starting automation system..."

# Start all processes
pm2 start ecosystem.config.js

if [ $? -eq 0 ]; then
    print_success "Automation system started successfully! ✓"
else
    print_error "Failed to start automation system"
    exit 1
fi

# Step 8: Show status
print_status "Step 8: System status..."

echo
echo -e "${CYAN}PM2 Process Status:${NC}"
pm2 status

echo
echo -e "${CYAN}Available Commands:${NC}"
echo "  npm run automation:status    - Check system status"
echo "  npm run automation:logs      - View logs"
echo "  npm run automation:monitor   - Start monitoring"
echo "  npm run automation:stop      - Stop automation"
echo "  npm run automation:restart   - Restart automation"

echo
echo -e "${CYAN}Quick Commands:${NC}"
echo "  pm2 status                   - Show PM2 status"
echo "  pm2 logs                     - View all logs"
echo "  pm2 monit                    - Start PM2 monitor"
echo "  pm2 restart all              - Restart all processes"

echo
echo -e "${CYAN}Development Commands:${NC}"
echo "  npm run dev:full             - Start dev + automation"
echo "  npm run dev:monitor          - Dev with monitoring"
echo "  npm run quality:check        - Run quality checks"
echo "  npm run ai:analyze           - AI code analysis"

# Step 9: Health check
print_status "Step 9: Performing health check..."

sleep 5

HEALTH_CHECK_RESULT=$(pm2 status --no-daemon 2>/dev/null | grep -c "online" || echo "0")

if [ "$HEALTH_CHECK_RESULT" -gt 0 ]; then
    print_success "Health check passed! $HEALTH_CHECK_RESULT processes are online ✓"
else
    print_warning "Health check shows some processes may not be running properly"
    print_status "Check logs with: pm2 logs"
fi

# Step 10: Final instructions
echo
print_header
echo -e "${GREEN}🎉 Zion PM2 Automation System is now running!${NC}"
echo
echo -e "${CYAN}Next Steps:${NC}"
echo "1. Open a new terminal and run: npm run automation:monitor"
echo "2. Access the automation dashboard at: http://localhost:3001"
echo "3. Start development with: npm run dev:full"
echo "4. Run quality checks with: npm run quality:check"
echo
echo -e "${CYAN}Documentation:${NC}"
echo "📖 Read PM2_AUTOMATION_README.md for detailed information"
echo "🔧 Use 'npm run automation:help' for command help"
echo "📊 Monitor with 'npm run automation:status'"
echo
echo -e "${CYAN}Support:${NC}"
echo "🐛 Check logs: npm run automation:logs"
echo "🔄 Restart: npm run automation:restart"
echo "🛑 Stop: npm run automation:stop"
echo
echo -e "${YELLOW}Happy Automating! 🚀${NC}"

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save

print_success "Setup complete! Your automation system is ready to use."