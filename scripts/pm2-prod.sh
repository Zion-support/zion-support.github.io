#!/bin/bash

# Zion Tech Group - PM2 Production Deployment Manager
# Intelligent production deployment automation

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
BUILD_DIR="./dist"
SERVER_BUILD_DIR="./server/dist"
NODE_ENV="production"

echo -e "${BLUE}🚀 Zion Tech Group - PM2 Production Deployment${NC}"
echo "=================================================="

# Function to check if running as root
check_root() {
    if [ "$EUID" -eq 0 ]; then
        echo -e "${RED}❌ Please don't run this script as root${NC}"
        exit 1
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

# Function to setup environment
setup_environment() {
    echo -e "${BLUE}⚙️  Setting up production environment...${NC}"
    
    # Create logs directory
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
    fi
    
    # Set NODE_ENV
    export NODE_ENV=$NODE_ENV
    
    # Create production .env if it doesn't exist
    if [ ! -f ".env.production" ]; then
        echo "Creating production .env file..."
        cat > .env.production << EOF
# Zion Tech Group - Production Environment
NODE_ENV=production
PORT=3000
REACT_APP_API_URL=https://your-domain.com/api
REACT_APP_ENVIRONMENT=production

# Backend Configuration
BACKEND_PORT=5000
BACKEND_NODE_ENV=production

# Security
NODE_TLS_REJECT_UNAUTHORIZED=1

# Performance
NODE_OPTIONS="--max-old-space-size=4096"
EOF
        echo -e "${GREEN}✅ Production .env file created${NC}"
    fi
    
    echo -e "${GREEN}✅ Environment setup complete${NC}"
}

# Function to run tests
run_tests() {
    echo -e "${BLUE}🧪 Running tests...${NC}"
    
    # Type checking
    echo "Running TypeScript type checking..."
    if npm run type-check:all; then
        echo -e "${GREEN}✅ Type checking passed${NC}"
    else
        echo -e "${RED}❌ Type checking failed${NC}"
        exit 1
    fi
    
    # Linting
    echo "Running linting..."
    if npm run lint:all; then
        echo -e "${GREEN}✅ Linting passed${NC}"
    else
        echo -e "${RED}❌ Linting failed${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ All tests passed${NC}"
}

# Function to build application
build_application() {
    echo -e "${BLUE}🔨 Building application...${NC}"
    
    # Clean previous builds
    echo "Cleaning previous builds..."
    rm -rf "$BUILD_DIR" "$SERVER_BUILD_DIR"
    
    # Install dependencies
    echo "Installing dependencies..."
    npm run install:all
    
    # Build frontend
    echo "Building frontend..."
    if npm run build; then
        echo -e "${GREEN}✅ Frontend build successful${NC}"
    else
        echo -e "${RED}❌ Frontend build failed${NC}"
        exit 1
    fi
    
    # Build backend
    echo "Building backend..."
    if npm run build:backend; then
        echo -e "${GREEN}✅ Backend build successful${NC}"
    else
        echo -e "${RED}❌ Backend build failed${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Application build complete${NC}"
}

# Function to stop existing processes
stop_existing() {
    echo -e "${BLUE}🛑 Stopping existing PM2 processes...${NC}"
    
    # Stop all Zion processes
    pm2 stop zion-frontend-prod zion-backend-prod 2>/dev/null || true
    pm2 delete zion-frontend-prod zion-backend-prod 2>/dev/null || true
    
    echo -e "${GREEN}✅ Existing processes stopped${NC}"
}

# Function to start production environment
start_production() {
    echo -e "${BLUE}🚀 Starting production environment...${NC}"
    
    # Start backend first
    echo "Starting production backend..."
    pm2 start ecosystem.config.js --only zion-backend-prod
    
    # Wait for backend to be ready
    echo "Waiting for backend to be ready..."
    sleep 10
    
    # Check if backend is responding
    if curl -f http://localhost:5000/api/health > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Backend is responding${NC}"
    else
        echo -e "${RED}❌ Backend is not responding${NC}"
        pm2 logs zion-backend-prod
        exit 1
    fi
    
    # Start frontend
    echo "Starting production frontend..."
    pm2 start ecosystem.config.js --only zion-frontend-prod
    
    echo -e "${GREEN}✅ Production environment started${NC}"
}

# Function to setup PM2 startup script
setup_startup() {
    echo -e "${BLUE}🔧 Setting up PM2 startup script...${NC}"
    
    # Save PM2 configuration
    pm2 save
    
    # Generate startup script
    pm2 startup
    
    echo -e "${GREEN}✅ PM2 startup script configured${NC}"
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

# Function to health check
health_check() {
    echo -e "${BLUE}🏥 Running health checks...${NC}"
    
    # Check backend health
    if curl -f http://localhost:5000/api/health > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Backend health check passed${NC}"
    else
        echo -e "${RED}❌ Backend health check failed${NC}"
        return 1
    fi
    
    # Check frontend (if serving static files)
    if curl -f http://localhost:3000 > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Frontend health check passed${NC}"
    else
        echo -e "${YELLOW}⚠️  Frontend health check failed (may be normal for SPA)${NC}"
    fi
    
    echo -e "${GREEN}✅ Health checks complete${NC}"
}

# Function to show deployment info
show_deployment_info() {
    echo -e "\n${GREEN}🎉 Production deployment complete!${NC}"
    echo "=========================================="
    echo -e "${BLUE}Frontend: http://localhost:3000${NC}"
    echo -e "${BLUE}Backend API: http://localhost:5000/api${NC}"
    echo -e "${BLUE}Health Check: http://localhost:5000/api/health${NC}"
    
    echo -e "\n${YELLOW}Useful commands:${NC}"
    echo -e "  pm2 logs                    - View all logs"
    echo -e "  pm2 logs zion-frontend-prod - View frontend logs"
    echo -e "  pm2 logs zion-backend-prod  - View backend logs"
    echo -e "  pm2 restart all             - Restart all processes"
    echo -e "  pm2 stop all                - Stop all processes"
    echo -e "  pm2 delete all              - Remove all processes"
    echo -e "  pm2 monit                   - Monitor processes"
    echo -e "  pm2 save                    - Save current PM2 configuration"
    
    echo -e "\n${BLUE}Log files location:${NC}"
    echo -e "  Frontend: $LOG_DIR/frontend-prod-combined.log"
    echo -e "  Backend: $LOG_DIR/backend-prod-combined.log"
}

# Main execution
main() {
    echo -e "${BLUE}🔧 Starting production deployment...${NC}"
    
    # Pre-flight checks
    check_root
    check_dependencies
    setup_environment
    
    # Run tests
    run_tests
    
    # Build application
    build_application
    
    # Stop existing processes
    stop_existing
    
    # Start production environment
    start_production
    
    # Setup PM2 startup
    setup_startup
    
    # Health check
    health_check
    
    # Show status
    show_status
    
    # Show deployment info
    show_deployment_info
}

# Run main function
main "$@"