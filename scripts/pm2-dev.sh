#!/bin/bash

# Zion Tech Group - PM2 Development Environment Manager
# Intelligent development workflow automation

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
LOG_DIR="./logs"
PM2_CONFIG="ecosystem.config.js"
FRONTEND_PORT=3000
BACKEND_PORT=5000

echo -e "${BLUE}🚀 Zion Tech Group - PM2 Development Environment${NC}"
echo "=================================================="

# Function to check if port is available
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null ; then
        echo -e "${RED}❌ Port $port is already in use${NC}"
        return 1
    fi
    return 0
}

# Function to create logs directory
setup_logs() {
    if [ ! -d "$LOG_DIR" ]; then
        echo -e "${YELLOW}📁 Creating logs directory...${NC}"
        mkdir -p "$LOG_DIR"
    fi
}

# Function to check dependencies
check_dependencies() {
    echo -e "${BLUE}🔍 Checking dependencies...${NC}"
    
    if ! command -v pm2 &> /dev/null; then
        echo -e "${RED}❌ PM2 is not installed. Installing...${NC}"
        npm install -g pm2
    fi
    
    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js is not installed${NC}"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        echo -e "${RED}❌ npm is not installed${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Dependencies check passed${NC}"
}

# Function to install project dependencies
install_dependencies() {
    echo -e "${BLUE}📦 Installing project dependencies...${NC}"
    
    # Install root dependencies
    if [ -f "package.json" ]; then
        echo "Installing root dependencies..."
        npm install
    fi
    
    # Install server dependencies
    if [ -d "server" ] && [ -f "server/package.json" ]; then
        echo "Installing server dependencies..."
        cd server && npm install && cd ..
    fi
    
    echo -e "${GREEN}✅ Dependencies installed${NC}"
}

# Function to stop existing processes
stop_existing() {
    echo -e "${BLUE}🛑 Stopping existing PM2 processes...${NC}"
    
    # Stop all Zion processes
    pm2 stop zion-frontend-dev zion-backend-dev zion-ts-watcher zion-lint-watcher 2>/dev/null || true
    pm2 delete zion-frontend-dev zion-backend-dev zion-ts-watcher zion-lint-watcher 2>/dev/null || true
    
    echo -e "${GREEN}✅ Existing processes stopped${NC}"
}

# Function to start development environment
start_dev_environment() {
    echo -e "${BLUE}🚀 Starting development environment...${NC}"
    
    # Check ports
    if ! check_port $FRONTEND_PORT; then
        echo -e "${YELLOW}⚠️  Frontend port $FRONTEND_PORT is busy, trying alternative...${NC}"
        FRONTEND_PORT=3001
    fi
    
    if ! check_port $BACKEND_PORT; then
        echo -e "${YELLOW}⚠️  Backend port $BACKEND_PORT is busy, trying alternative...${NC}"
        BACKEND_PORT=5001
    fi
    
    # Start TypeScript watcher
    echo -e "${YELLOW}🔍 Starting TypeScript watcher...${NC}"
    pm2 start ecosystem.config.js --only zion-ts-watcher
    
    # Start linting watcher
    echo -e "${YELLOW}🔍 Starting linting watcher...${NC}"
    pm2 start ecosystem.config.js --only zion-lint-watcher
    
    # Start backend
    echo -e "${YELLOW}🔧 Starting backend server...${NC}"
    pm2 start ecosystem.config.js --only zion-backend-dev
    
    # Wait for backend to be ready
    echo -e "${YELLOW}⏳ Waiting for backend to be ready...${NC}"
    sleep 5
    
    # Start frontend
    echo -e "${YELLOW}🎨 Starting frontend server...${NC}"
    pm2 start ecosystem.config.js --only zion-frontend-dev
    
    echo -e "${GREEN}✅ Development environment started${NC}"
}

# Function to show status
show_status() {
    echo -e "\n${BLUE}📊 PM2 Status:${NC}"
    echo "=================="
    pm2 list
    
    echo -e "\n${BLUE}📈 Process Monitoring:${NC}"
    echo "========================"
    pm2 monit
}

# Function to setup environment variables
setup_env() {
    echo -e "${BLUE}⚙️  Setting up environment variables...${NC}"
    
    # Create .env file if it doesn't exist
    if [ ! -f ".env" ]; then
        echo "Creating .env file..."
        cat > .env << EOF
# Zion Tech Group - Development Environment
NODE_ENV=development
PORT=3000
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENVIRONMENT=development

# Backend Configuration
BACKEND_PORT=5000
BACKEND_NODE_ENV=development

# Database Configuration (if needed)
# DATABASE_URL=your_database_url_here

# API Keys (if needed)
# API_KEY=your_api_key_here
EOF
        echo -e "${GREEN}✅ .env file created${NC}"
    else
        echo -e "${YELLOW}⚠️  .env file already exists${NC}"
    fi
}

# Main execution
main() {
    echo -e "${BLUE}🔧 Setting up development environment...${NC}"
    
    # Setup
    setup_logs
    check_dependencies
    setup_env
    
    # Ask user if they want to install dependencies
    read -p "Do you want to install/update project dependencies? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        install_dependencies
    fi
    
    # Stop existing processes
    stop_existing
    
    # Start development environment
    start_dev_environment
    
    # Show status
    show_status
    
    echo -e "\n${GREEN}🎉 Development environment is ready!${NC}"
    echo -e "${BLUE}Frontend: http://localhost:$FRONTEND_PORT${NC}"
    echo -e "${BLUE}Backend: http://localhost:$BACKEND_PORT${NC}"
    echo -e "\n${YELLOW}Useful commands:${NC}"
    echo -e "  pm2 logs                    - View all logs"
    echo -e "  pm2 logs zion-frontend-dev  - View frontend logs"
    echo -e "  pm2 logs zion-backend-dev   - View backend logs"
    echo -e "  pm2 restart all             - Restart all processes"
    echo -e "  pm2 stop all                - Stop all processes"
    echo -e "  pm2 delete all              - Remove all processes"
}

# Run main function
main "$@"