#!/usr/bin/env bash
set -euo pipefail

# Deployment Automation Script for Zion Tech Group
# This script handles the complete deployment pipeline

cd "$(dirname "$0")/.."

LOG_DIR="automation-reports"
mkdir -p "$LOG_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    local status=$1
    local message=$2
    case $status in
        "success") echo -e "${GREEN}✅ $message${NC}" ;;
        "error") echo -e "${RED}❌ $message${NC}" ;;
        "warning") echo -e "${YELLOW}⚠️  $message${NC}" ;;
        "info") echo -e "${BLUE}ℹ️  $message${NC}" ;;
    esac
}

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/deployment.log"
}

# Function to check prerequisites
check_prerequisites() {
    log "Checking deployment prerequisites..."
    
    # Check if we're in a git repository
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        print_status "error" "Not in a git repository"
        return 1
    fi
    
    # Check if there are uncommitted changes
    if ! git diff-index --quiet HEAD --; then
        print_status "warning" "There are uncommitted changes"
        read -p "Do you want to continue? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_status "info" "Deployment cancelled"
            exit 1
        fi
    fi
    
    # Check if build passes
    if ! npm run build >/dev/null 2>&1; then
        print_status "error" "Build failed, cannot deploy"
        return 1
    fi
    
    print_status "success" "Prerequisites check passed"
    return 0
}

# Function to run pre-deployment tests
run_pre_deployment_tests() {
    log "Running pre-deployment tests..."
    
    local test_results=()
    
    # Run linting
    if npm run lint >/dev/null 2>&1; then
        test_results+=("lint:pass")
        print_status "success" "Linting passed"
    else
        test_results+=("lint:fail")
        print_status "error" "Linting failed"
    fi
    
    # Run type checking
    if npm run type-check >/dev/null 2>&1; then
        test_results+=("type-check:pass")
        print_status "success" "Type checking passed"
    else
        test_results+=("type-check:fail")
        print_status "error" "Type checking failed"
    fi
    
    # Run build
    if npm run build >/dev/null 2>&1; then
        test_results+=("build:pass")
        print_status "success" "Build passed"
    else
        test_results+=("build:fail")
        print_status "error" "Build failed"
    fi
    
    # Check if any tests failed
    local failed_tests=()
    for result in "${test_results[@]}"; do
        if [[ $result == *":fail" ]]; then
            failed_tests+=("$result")
        fi
    done
    
    if [ ${#failed_tests[@]} -gt 0 ]; then
        print_status "error" "Pre-deployment tests failed: ${failed_tests[*]}"
        return 1
    fi
    
    print_status "success" "All pre-deployment tests passed"
    return 0
}

# Function to create deployment package
create_deployment_package() {
    log "Creating deployment package..."
    
    local package_dir="deployment-package-$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$package_dir"
    
    # Copy necessary files
    cp -r .next "$package_dir/" 2>/dev/null || true
    cp -r public "$package_dir/" 2>/dev/null || true
    cp package.json "$package_dir/" 2>/dev/null || true
    cp package-lock.json "$package_dir/" 2>/dev/null || true
    cp next.config.cjs "$package_dir/" 2>/dev/null || true
    
    # Create deployment info
    cat > "$package_dir/deployment-info.json" << EOF
{
  "timestamp": "$(date -Iseconds)",
  "git_commit": "$(git rev-parse HEAD 2>/dev/null || echo 'unknown')",
  "git_branch": "$(git branch --show-current 2>/dev/null || echo 'unknown')",
  "node_version": "$(node --version 2>/dev/null || echo 'unknown')",
  "npm_version": "$(npm --version 2>/dev/null || echo 'unknown')",
  "build_size": "$(du -sh .next 2>/dev/null | cut -f1 || echo 'unknown')"
}
EOF
    
    print_status "success" "Deployment package created: $package_dir"
    echo "$package_dir"
}

# Function to deploy to staging
deploy_to_staging() {
    local package_dir=$1
    log "Deploying to staging environment..."
    
    # This is a placeholder for actual staging deployment
    # In a real scenario, this would:
    # 1. Upload files to staging server
    # 2. Run database migrations
    # 3. Restart services
    # 4. Run health checks
    
    print_status "info" "Staging deployment would happen here"
    print_status "success" "Staging deployment completed (simulated)"
    return 0
}

# Function to deploy to production
deploy_to_production() {
    local package_dir=$1
    log "Deploying to production environment..."
    
    # This is a placeholder for actual production deployment
    # In a real scenario, this would:
    # 1. Upload files to production server
    # 2. Run database migrations
    # 3. Restart services
    # 4. Run health checks
    # 5. Update DNS/CDN if needed
    
    print_status "info" "Production deployment would happen here"
    print_status "success" "Production deployment completed (simulated)"
    return 0
}

# Function to run post-deployment tests
run_post_deployment_tests() {
    log "Running post-deployment tests..."
    
    # This is a placeholder for actual post-deployment tests
    # In a real scenario, this would:
    # 1. Test critical endpoints
    # 2. Check database connectivity
    # 3. Verify external integrations
    # 4. Run performance tests
    
    print_status "info" "Post-deployment tests would run here"
    print_status "success" "Post-deployment tests passed (simulated)"
    return 0
}

# Function to generate deployment report
generate_deployment_report() {
    local package_dir=$1
    local deployment_type=$2
    local report_file="$LOG_DIR/deployment-report-$(date +%Y%m%d-%H%M%S).json"
    
    log "Generating deployment report..."
    
    cat > "$report_file" << EOF
{
  "timestamp": "$(date -Iseconds)",
  "deployment_type": "$deployment_type",
  "package_directory": "$package_dir",
  "git_info": {
    "commit": "$(git rev-parse HEAD 2>/dev/null || echo 'unknown')",
    "branch": "$(git branch --show-current 2>/dev/null || echo 'unknown')",
    "status": "$(git status --porcelain 2>/dev/null | wc -l) files changed"
  },
  "build_info": {
    "node_version": "$(node --version 2>/dev/null || echo 'unknown')",
    "npm_version": "$(npm --version 2>/dev/null || echo 'unknown')",
    "build_size": "$(du -sh .next 2>/dev/null | cut -f1 || echo 'unknown')"
  },
  "deployment_status": "success"
}
EOF
    
    print_status "success" "Deployment report generated: $report_file"
}

# Main function
main() {
    local deployment_type=${1:-"staging"}
    
    echo "🚀 Zion Tech Group Deployment Automation"
    echo "======================================="
    
    # Validate deployment type
    if [[ "$deployment_type" != "staging" && "$deployment_type" != "production" ]]; then
        print_status "error" "Invalid deployment type. Use 'staging' or 'production'"
        exit 1
    fi
    
    # Run deployment pipeline
    if ! check_prerequisites; then
        exit 1
    fi
    
    if ! run_pre_deployment_tests; then
        exit 1
    fi
    
    local package_dir
    package_dir=$(create_deployment_package)
    
    if [[ "$deployment_type" == "staging" ]]; then
        deploy_to_staging "$package_dir"
    else
        deploy_to_production "$package_dir"
    fi
    
    run_post_deployment_tests
    generate_deployment_report "$package_dir" "$deployment_type"
    
    print_status "success" "Deployment to $deployment_type completed successfully!"
}

# Run main function with all arguments
main "$@"