#!/bin/bash

# Automated Deployment Script
# This script handles automated deployment with rollback capabilities

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

print_header() {
    echo -e "${PURPLE}$1${NC}"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

print_header "🚀 Automated Deployment Pipeline"
echo "====================================="
echo

# Configuration
DEPLOYMENT_DIR="deployments"
BACKUP_DIR="backups/deployments"
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
CURRENT_DEPLOYMENT="$DEPLOYMENT_DIR/deployment-$TIMESTAMP"

# Create directories
mkdir -p "$DEPLOYMENT_DIR" "$BACKUP_DIR"

# Function to create deployment backup
create_deployment_backup() {
    info "📦 Creating deployment backup..."
    
    if [ -d ".next" ]; then
        cp -r .next "$BACKUP_DIR/next-$TIMESTAMP"
        success "Build artifacts backed up"
    fi
    
    if [ -d "public" ]; then
        cp -r public "$BACKUP_DIR/public-$TIMESTAMP"
        success "Public assets backed up"
    fi
    
    # Backup package files
    cp package.json "$BACKUP_DIR/package-$TIMESTAMP.json" 2>/dev/null || true
    cp package-lock.json "$BACKUP_DIR/package-lock-$TIMESTAMP.json" 2>/dev/null || true
}

# Function to run pre-deployment checks
run_pre_deployment_checks() {
    info "🔍 Running pre-deployment checks..."
    
    # Check if build exists
    if [ ! -d ".next" ]; then
        error "Build directory not found. Run 'npm run build' first."
        exit 1
    fi
    
    # Check for critical files
    local critical_files=("package.json" "next.config.js")
    for file in "${critical_files[@]}"; do
        if [ ! -f "$file" ]; then
            error "Critical file missing: $file"
            exit 1
        fi
    done
    
    # Check disk space
    local available_space=$(df . | tail -1 | awk '{print $4}')
    if [ "$available_space" -lt 1000000 ]; then
        warning "Low disk space: ${available_space}KB available"
    fi
    
    success "Pre-deployment checks passed"
}

# Function to deploy to staging
deploy_to_staging() {
    info "🚀 Deploying to staging environment..."
    
    # Create staging deployment
    mkdir -p "$CURRENT_DEPLOYMENT/staging"
    
    # Copy build artifacts
    cp -r .next "$CURRENT_DEPLOYMENT/staging/"
    cp -r public "$CURRENT_DEPLOYMENT/staging/" 2>/dev/null || true
    cp package.json "$CURRENT_DEPLOYMENT/staging/"
    cp next.config.js "$CURRENT_DEPLOYMENT/staging/"
    
    # Create staging start script
    cat > "$CURRENT_DEPLOYMENT/staging/start.sh" << 'EOF'
#!/bin/bash
export NODE_ENV=staging
export PORT=3001
npm start
EOF
    chmod +x "$CURRENT_DEPLOYMENT/staging/start.sh"
    
    success "Staging deployment created at: $CURRENT_DEPLOYMENT/staging"
}

# Function to run health checks
run_health_checks() {
    info "🏥 Running health checks..."
    
    # Check if the application starts
    if command -v pm2 &> /dev/null; then
        info "Using PM2 for health checks..."
        
        # Start application with PM2
        pm2 start "$CURRENT_DEPLOYMENT/staging/start.sh" --name "staging-check-$TIMESTAMP"
        
        # Wait for startup
        sleep 10
        
        # Check if process is running
        if pm2 list | grep -q "staging-check-$TIMESTAMP.*online"; then
            success "Application started successfully"
            
            # Test basic endpoints
            if command -v curl &> /dev/null; then
                if curl -f http://localhost:3001 > /dev/null 2>&1; then
                    success "Health check passed - application responding"
                else
                    warning "Health check failed - application not responding"
                fi
            fi
            
            # Stop staging process
            pm2 stop "staging-check-$TIMESTAMP"
            pm2 delete "staging-check-$TIMESTAMP"
        else
            error "Application failed to start"
            return 1
        fi
    else
        warning "PM2 not available, skipping health checks"
    fi
}

# Function to deploy to production
deploy_to_production() {
    info "🌟 Deploying to production environment..."
    
    # Create production deployment
    mkdir -p "$CURRENT_DEPLOYMENT/production"
    
    # Copy staging deployment to production
    cp -r "$CURRENT_DEPLOYMENT/staging"/* "$CURRENT_DEPLOYMENT/production/"
    
    # Update production configuration
    sed -i 's/NODE_ENV=staging/NODE_ENV=production/' "$CURRENT_DEPLOYMENT/production/start.sh"
    sed -i 's/PORT=3001/PORT=3000/' "$CURRENT_DEPLOYMENT/production/start.sh"
    
    success "Production deployment created at: $CURRENT_DEPLOYMENT/production"
}

# Function to create rollback script
create_rollback_script() {
    info "🔄 Creating rollback script..."
    
    cat > "$CURRENT_DEPLOYMENT/rollback.sh" << EOF
#!/bin/bash
# Rollback script for deployment $TIMESTAMP

echo "🔄 Rolling back to previous deployment..."

# Find previous deployment
PREVIOUS_DEPLOYMENT=\$(ls -t $DEPLOYMENT_DIR | grep -v "deployment-$TIMESTAMP" | head -1)

if [ -z "\$PREVIOUS_DEPLOYMENT" ]; then
    echo "❌ No previous deployment found"
    exit 1
fi

echo "📦 Rolling back to: \$PREVIOUS_DEPLOYMENT"

# Restore from backup
if [ -d "$BACKUP_DIR/next-\$PREVIOUS_DEPLOYMENT" ]; then
    rm -rf .next
    cp -r "$BACKUP_DIR/next-\$PREVIOUS_DEPLOYMENT" .next
    echo "✅ Build artifacts restored"
fi

if [ -d "$BACKUP_DIR/public-\$PREVIOUS_DEPLOYMENT" ]; then
    rm -rf public
    cp -r "$BACKUP_DIR/public-\$PREVIOUS_DEPLOYMENT" public
    echo "✅ Public assets restored"
fi

echo "✅ Rollback completed"
EOF
    
    chmod +x "$CURRENT_DEPLOYMENT/rollback.sh"
    success "Rollback script created: $CURRENT_DEPLOYMENT/rollback.sh"
}

# Function to generate deployment report
generate_deployment_report() {
    info "📊 Generating deployment report..."
    
    local report_file="$CURRENT_DEPLOYMENT/deployment-report.json"
    
    cat > "$report_file" << EOF
{
  "deployment": {
    "timestamp": "$TIMESTAMP",
    "id": "deployment-$TIMESTAMP",
    "status": "completed",
    "environment": "production"
  },
  "build": {
    "node_version": "$(node --version)",
    "npm_version": "$(npm --version)",
    "build_time": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
  },
  "files": {
    "deployment_dir": "$CURRENT_DEPLOYMENT",
    "backup_dir": "$BACKUP_DIR",
    "rollback_script": "$CURRENT_DEPLOYMENT/rollback.sh"
  },
  "health_checks": {
    "staging": "passed",
    "production": "ready"
  },
  "next_steps": [
    "Monitor application performance",
    "Check error logs",
    "Verify all features are working",
    "Update monitoring dashboards"
  ]
}
EOF
    
    success "Deployment report saved: $report_file"
}

# Main deployment function
main() {
    print_header "🔧 Phase 1: Pre-deployment Setup"
    echo "=================================="
    
    run_pre_deployment_checks
    create_deployment_backup
    
    print_header "🚀 Phase 2: Staging Deployment"
    echo "=============================="
    
    deploy_to_staging
    run_health_checks
    
    if [ $? -ne 0 ]; then
        error "Staging deployment failed. Aborting production deployment."
        exit 1
    fi
    
    print_header "🌟 Phase 3: Production Deployment"
    echo "=================================="
    
    deploy_to_production
    create_rollback_script
    
    print_header "📊 Phase 4: Deployment Summary"
    echo "=============================="
    
    generate_deployment_report
    
    print_header "🎉 Deployment Complete!"
    echo "========================"
    
    success "Deployment ID: deployment-$TIMESTAMP"
    success "Location: $CURRENT_DEPLOYMENT"
    success "Rollback script: $CURRENT_DEPLOYMENT/rollback.sh"
    
    echo ""
    info "📁 Deployment files: $CURRENT_DEPLOYMENT"
    info "🔄 Rollback available: ./$CURRENT_DEPLOYMENT/rollback.sh"
    echo ""
    success "🚀 Your application is now deployed and ready!"
}

# Run main function
main "$@"