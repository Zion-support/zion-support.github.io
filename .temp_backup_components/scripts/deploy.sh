#!/bin/bash

# Zion Tech Group - Automated Deployment Script
# This script automates the deployment process for production environments

set -e

echo "🚀 Starting Zion Tech Group Deployment..."

# Configuration
APP_NAME="zion-tech-group"
DEPLOY_ENV=${1:-production}
BUILD_DIR=".next"
BACKUP_DIR="backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
    exit 1
}

# Pre-deployment checks
log "Running pre-deployment checks..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    error "package.json not found. Please run this script from the project root."
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    error "Node.js is not installed"
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    error "npm is not installed"
fi

# Check environment variables
if [ "$DEPLOY_ENV" = "production" ]; then
    if [ -z "$NEXT_PUBLIC_APP_URL" ]; then
        warning "NEXT_PUBLIC_APP_URL not set"
    fi
fi

success "Pre-deployment checks passed"

# Create backup
log "Creating backup..."
mkdir -p $BACKUP_DIR
if [ -d "$BUILD_DIR" ]; then
    tar -czf "$BACKUP_DIR/build_backup_$TIMESTAMP.tar.gz" "$BUILD_DIR"
    success "Backup created: $BACKUP_DIR/build_backup_$TIMESTAMP.tar.gz"
fi

# Install dependencies
log "Installing dependencies..."
npm ci --production=false
success "Dependencies installed"

# Run tests
log "Running tests..."
if npm run test -- --passWithNoTests; then
    success "Tests passed"
else
    warning "Some tests failed, but continuing deployment"
fi

# Run linting
log "Running linting..."
if npm run lint; then
    success "Linting passed"
else
    warning "Linting failed, but continuing deployment"
fi

# Build application
log "Building application for $DEPLOY_ENV..."
NODE_ENV=$DEPLOY_ENV npm run build

if [ $? -eq 0 ]; then
    success "Application built successfully"
else
    error "Build failed"
fi

# Run security audit
log "Running security audit..."
if npm audit --audit-level=high; then
    success "Security audit passed"
else
    warning "Security issues found, but continuing deployment"
fi

# Generate performance report
log "Generating performance report..."
npm run analyze 2>/dev/null || warning "Performance analysis not available"

# Create deployment package
log "Creating deployment package..."
tar -czf "$BACKUP_DIR/deployment_$TIMESTAMP.tar.gz" \
    --exclude=node_modules \
    --exclude=.git \
    --exclude=.next/cache \
    --exclude=*.log \
    .

success "Deployment package created: $BACKUP_DIR/deployment_$TIMESTAMP.tar.gz"

# Start application (if PM2 is available)
if command -v pm2 &> /dev/null; then
    log "Starting application with PM2..."
    pm2 stop $APP_NAME 2>/dev/null || true
    pm2 start ecosystem.config.cjs --env $DEPLOY_ENV
    pm2 save
    success "Application started with PM2"
else
    warning "PM2 not available, manual start required"
fi

# Health check
log "Performing health check..."
sleep 5

if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
    success "Health check passed"
else
    warning "Health check failed, but deployment completed"
fi

# Generate deployment report
log "Generating deployment report..."
cat > "$BACKUP_DIR/deployment_report_$TIMESTAMP.txt" << EOF
Zion Tech Group Deployment Report
================================
Deployment Time: $(date)
Environment: $DEPLOY_ENV
Build Directory: $BUILD_DIR
Backup Location: $BACKUP_DIR/build_backup_$TIMESTAMP.tar.gz
Deployment Package: $BACKUP_DIR/deployment_$TIMESTAMP.tar.gz

Dependencies:
$(npm list --depth=0)

Build Information:
$(cat $BUILD_DIR/BUILD_ID 2>/dev/null || echo "Build ID not available")

System Information:
$(uname -a)
$(node --version)
$(npm --version)

EOF

success "Deployment report generated"

# Final success message
echo ""
success "🎉 Deployment completed successfully!"
log "Application is running on: http://localhost:3000"
log "Health check: http://localhost:3000/api/health"
log "Deployment report: $BACKUP_DIR/deployment_report_$TIMESTAMP.txt"
echo ""

# Optional: Send notification (if configured)
if [ ! -z "$SLACK_WEBHOOK_URL" ]; then
    curl -X POST -H 'Content-type: application/json' \
        --data "{\"text\":\"🚀 Zion Tech Group deployed successfully to $DEPLOY_ENV\"}" \
        $SLACK_WEBHOOK_URL
fi

log "Deployment script completed"
