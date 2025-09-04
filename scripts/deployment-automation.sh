#!/bin/bash

# Deployment Automation Script for Zion Tech Group App
# This script handles automated deployment to staging and production environments

set -e

# Configuration
DEPLOYMENT_DIR="deployments"
STAGING_DIR="$DEPLOYMENT_DIR/staging"
PRODUCTION_DIR="$DEPLOYMENT_DIR/production"
BACKUP_DIR="$DEPLOYMENT_DIR/backups"
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Create directories
mkdir -p "$STAGING_DIR" "$PRODUCTION_DIR" "$BACKUP_DIR"

echo -e "${BLUE}🚀 Starting Deployment Automation...${NC}"

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$DEPLOYMENT_DIR/deployment-$TIMESTAMP.log"
}

# Function to validate prerequisites
validate_prerequisites() {
    log "Validating deployment prerequisites..."
    
    # Check if we're in a git repository
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        log "❌ Not in a git repository"
        exit 1
    fi
    
    # Check if there are uncommitted changes
    if ! git diff-index --quiet HEAD --; then
        log "⚠️ Uncommitted changes detected. Committing them..."
        git add .
        git commit -m "Auto-commit before deployment $TIMESTAMP"
    fi
    
    # Check if build works
    if ! npm run build > /dev/null 2>&1; then
        log "❌ Build failed. Cannot deploy."
        exit 1
    fi
    
    log "✅ Prerequisites validated"
}

# Function to create deployment package
create_deployment_package() {
    local env=$1
    local target_dir=$2
    
    log "Creating deployment package for $env..."
    
    # Create environment-specific directory
    mkdir -p "$target_dir"
    
    # Copy necessary files
    cp -r .next "$target_dir/" 2>/dev/null || true
    cp -r public "$target_dir/" 2>/dev/null || true
    cp package.json "$target_dir/"
    cp package-lock.json "$target_dir/"
    cp next.config.js "$target_dir/" 2>/dev/null || true
    cp tsconfig.json "$target_dir/" 2>/dev/null || true
    
    # Create environment-specific configuration
    if [ "$env" = "staging" ]; then
        cat > "$target_dir/.env.local" << EOF
NODE_ENV=staging
NEXT_PUBLIC_APP_URL=https://staging.ziontechgroup.com
NEXT_PUBLIC_API_URL=https://api-staging.ziontechgroup.com
EOF
    else
        cat > "$target_dir/.env.local" << EOF
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://ziontechgroup.com
NEXT_PUBLIC_API_URL=https://api.ziontechgroup.com
EOF
    fi
    
    # Create deployment script
    cat > "$target_dir/deploy.sh" << 'EOF'
#!/bin/bash
set -e

echo "Starting deployment..."

# Install dependencies
npm ci --production

# Start the application
if [ "$NODE_ENV" = "production" ]; then
    npm start
else
    npm run dev
fi
EOF
    
    chmod +x "$target_dir/deploy.sh"
    
    # Create health check script
    cat > "$target_dir/health-check.sh" << 'EOF'
#!/bin/bash
set -e

echo "Performing health check..."

# Check if the application is running
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Application is healthy"
    exit 0
else
    echo "❌ Application health check failed"
    exit 1
fi
EOF
    
    chmod +x "$target_dir/health-check.sh"
    
    # Create rollback script
    cat > "$target_dir/rollback.sh" << 'EOF'
#!/bin/bash
set -e

echo "Rolling back deployment..."

# Stop current application
pkill -f "next" || true

# Restore from backup if available
if [ -d "../backup" ]; then
    echo "Restoring from backup..."
    rm -rf .next public
    cp -r ../backup/* .
    ./deploy.sh
else
    echo "No backup available for rollback"
    exit 1
fi
EOF
    
    chmod +x "$target_dir/rollback.sh"
    
    log "✅ Deployment package created for $env"
}

# Function to deploy to staging
deploy_staging() {
    log "Deploying to staging environment..."
    
    # Create staging deployment
    create_deployment_package "staging" "$STAGING_DIR"
    
    # Create staging-specific configuration
    cat > "$STAGING_DIR/next.config.js" << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NODE_ENV: 'staging',
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Staging-specific optimizations
  images: {
    domains: ['staging.ziontechgroup.com'],
  },
  // Enable source maps for debugging
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
EOF
    
    # Create staging deployment report
    cat > "$STAGING_DIR/deployment-report.json" << EOF
{
  "environment": "staging",
  "timestamp": "$(date -Iseconds)",
  "version": "$(git rev-parse --short HEAD)",
  "branch": "$(git branch --show-current)",
  "status": "deployed",
  "files": {
    "next_build": $([ -d ".next" ] && echo "true" || echo "false"),
    "public_files": $([ -d "public" ] && echo "true" || echo "false"),
    "package_json": $([ -f "package.json" ] && echo "true" || echo "false")
  },
  "health_check_url": "http://localhost:3000",
  "deployment_script": "./deploy.sh",
  "rollback_script": "./rollback.sh"
}
EOF
    
    log "✅ Staging deployment completed"
}

# Function to deploy to production
deploy_production() {
    log "Deploying to production environment..."
    
    # Create backup of current production
    if [ -d "$PRODUCTION_DIR" ]; then
        log "Creating backup of current production deployment..."
        cp -r "$PRODUCTION_DIR" "$BACKUP_DIR/production-backup-$TIMESTAMP"
    fi
    
    # Create production deployment
    create_deployment_package "production" "$PRODUCTION_DIR"
    
    # Create production-specific configuration
    cat > "$PRODUCTION_DIR/next.config.js" << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NODE_ENV: 'production',
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Production-specific optimizations
  images: {
    domains: ['ziontechgroup.com', 'www.ziontechgroup.com'],
  },
  // Disable source maps for production
  productionBrowserSourceMaps: false,
  // Enable compression
  compress: true,
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
EOF
    
    # Create production deployment report
    cat > "$PRODUCTION_DIR/deployment-report.json" << EOF
{
  "environment": "production",
  "timestamp": "$(date -Iseconds)",
  "version": "$(git rev-parse --short HEAD)",
  "branch": "$(git branch --show-current)",
  "status": "deployed",
  "backup_created": "production-backup-$TIMESTAMP",
  "files": {
    "next_build": $([ -d ".next" ] && echo "true" || echo "false"),
    "public_files": $([ -d "public" ] && echo "true" || echo "false"),
    "package_json": $([ -f "package.json" ] && echo "true" || echo "false")
  },
  "health_check_url": "http://localhost:3000",
  "deployment_script": "./deploy.sh",
  "rollback_script": "./rollback.sh"
}
EOF
    
    log "✅ Production deployment completed"
}

# Function to run post-deployment tests
run_post_deployment_tests() {
    local env=$1
    local target_dir=$2
    
    log "Running post-deployment tests for $env..."
    
    # Test 1: Check if deployment package is complete
    if [ -f "$target_dir/package.json" ] && [ -d "$target_dir/.next" ]; then
        log "✅ Deployment package is complete"
    else
        log "❌ Deployment package is incomplete"
        return 1
    fi
    
    # Test 2: Check if scripts are executable
    if [ -x "$target_dir/deploy.sh" ] && [ -x "$target_dir/health-check.sh" ]; then
        log "✅ Deployment scripts are executable"
    else
        log "❌ Deployment scripts are not executable"
        return 1
    fi
    
    # Test 3: Validate configuration files
    if [ -f "$target_dir/.env.local" ] && [ -f "$target_dir/next.config.js" ]; then
        log "✅ Configuration files are present"
    else
        log "❌ Configuration files are missing"
        return 1
    fi
    
    log "✅ Post-deployment tests passed for $env"
}

# Function to create deployment summary
create_deployment_summary() {
    log "Creating deployment summary..."
    
    cat > "$DEPLOYMENT_DIR/deployment-summary-$TIMESTAMP.md" << EOF
# Deployment Summary

**Date:** $(date)
**Version:** $(git rev-parse --short HEAD)
**Branch:** $(git branch --show-current)

## Environments Deployed

### Staging
- **Status:** Deployed
- **Location:** $STAGING_DIR
- **Health Check:** http://localhost:3000
- **Configuration:** Staging-optimized

### Production
- **Status:** Deployed
- **Location:** $PRODUCTION_DIR
- **Health Check:** http://localhost:3000
- **Configuration:** Production-optimized
- **Backup:** production-backup-$TIMESTAMP

## Deployment Artifacts

- **Staging Package:** $STAGING_DIR
- **Production Package:** $PRODUCTION_DIR
- **Backups:** $BACKUP_DIR
- **Logs:** $DEPLOYMENT_DIR/deployment-$TIMESTAMP.log

## Next Steps

1. **Start Staging Environment:**
   \`\`\`bash
   cd $STAGING_DIR
   ./deploy.sh
   \`\`\`

2. **Start Production Environment:**
   \`\`\`bash
   cd $PRODUCTION_DIR
   ./deploy.sh
   \`\`\`

3. **Health Check:**
   \`\`\`bash
   ./health-check.sh
   \`\`\`

4. **Rollback (if needed):**
   \`\`\`bash
   ./rollback.sh
   \`\`\`

## Configuration Details

### Staging
- Node Environment: staging
- App URL: https://staging.ziontechgroup.com
- API URL: https://api-staging.ziontechgroup.com
- Source Maps: Enabled
- Compression: Disabled

### Production
- Node Environment: production
- App URL: https://ziontechgroup.com
- API URL: https://api.ziontechgroup.com
- Source Maps: Disabled
- Compression: Enabled
- Security Headers: Enabled

## Monitoring

- Monitor application health using the health check scripts
- Check logs for any deployment issues
- Verify all environments are accessible
- Test critical user flows

## Rollback Plan

If issues are detected:
1. Stop the problematic environment
2. Run the rollback script in the environment directory
3. Verify the rollback was successful
4. Investigate and fix issues before re-deploying
EOF
    
    log "✅ Deployment summary created"
}

# Function to cleanup old deployments
cleanup_old_deployments() {
    log "Cleaning up old deployments..."
    
    # Keep only last 10 backups
    find "$BACKUP_DIR" -name "production-backup-*" -type d | sort | head -n -10 | xargs rm -rf 2>/dev/null || true
    
    # Keep only last 30 days of logs
    find "$DEPLOYMENT_DIR" -name "deployment-*.log" -mtime +30 -delete 2>/dev/null || true
    
    log "✅ Cleanup completed"
}

# Main execution
main() {
    local environment=${1:-"all"}
    
    log "Starting deployment automation for environment: $environment"
    
    validate_prerequisites
    
    case $environment in
        "staging")
            deploy_staging
            run_post_deployment_tests "staging" "$STAGING_DIR"
            ;;
        "production")
            deploy_production
            run_post_deployment_tests "production" "$PRODUCTION_DIR"
            ;;
        "all")
            deploy_staging
            run_post_deployment_tests "staging" "$STAGING_DIR"
            deploy_production
            run_post_deployment_tests "production" "$PRODUCTION_DIR"
            ;;
        *)
            log "❌ Invalid environment: $environment. Use 'staging', 'production', or 'all'"
            exit 1
            ;;
    esac
    
    create_deployment_summary
    cleanup_old_deployments
    
    log "✅ Deployment automation completed successfully"
    
    # Print summary
    echo -e "\n${GREEN}🚀 Deployment Summary:${NC}"
    echo -e "Environment: $environment"
    echo -e "Version: $(git rev-parse --short HEAD)"
    echo -e "Timestamp: $TIMESTAMP"
    
    echo -e "\n${BLUE}📁 Deployment artifacts:${NC}"
    echo -e "Staging: $STAGING_DIR"
    echo -e "Production: $PRODUCTION_DIR"
    echo -e "Backups: $BACKUP_DIR"
    echo -e "Summary: $DEPLOYMENT_DIR/deployment-summary-$TIMESTAMP.md"
    echo -e "Log: $DEPLOYMENT_DIR/deployment-$TIMESTAMP.log"
    
    echo -e "\n${YELLOW}📋 Next steps:${NC}"
    echo -e "1. Start staging: cd $STAGING_DIR && ./deploy.sh"
    echo -e "2. Start production: cd $PRODUCTION_DIR && ./deploy.sh"
    echo -e "3. Health check: ./health-check.sh"
    echo -e "4. Monitor: Check logs and application health"
}

# Run main function
main "$@"