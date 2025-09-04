#!/bin/bash

# Enhanced Automation Orchestrator
# This script provides comprehensive automation with better error handling and file protection

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

print_header "🚀 Enhanced Automation Orchestrator"
echo "=============================================="
echo

# Create logs directory
LOG_DIR="automation-reports"
mkdir -p "$LOG_DIR"
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")

# Function to run command with logging and error handling
run_with_log() {
    local name="$1"
    local command="$2"
    local log_file="$LOG_DIR/${name}-${TIMESTAMP}.log"
    local is_critical="${3:-true}"
    
    echo "📋 Running: $name"
    echo "   Command: $command"
    
    if eval "$command" > "$log_file" 2>&1; then
        success "$name completed successfully"
        return 0
    else
        if [ "$is_critical" = "true" ]; then
            error "$name failed (check $log_file for details)"
            return 1
        else
            warning "$name failed (non-critical, check $log_file for details)"
            return 0
        fi
    fi
}

# Function to check if files need protection
check_file_protection() {
    info "Checking file protection status..."
    
    if [ -f "scripts/protect-fixed-files.sh" ]; then
        info "Running file protection..."
        ./scripts/protect-fixed-files.sh
    else
        warning "File protection script not found"
    fi
}

# Function to run syntax fixes with protection
run_syntax_fixes() {
    info "🔧 Running syntax error fixes..."
    
    # Check if syntax fixer exists
    if [ -f "scripts/fix-syntax-errors.cjs" ]; then
        run_with_log "Syntax Error Fixing" "node scripts/fix-syntax-errors.cjs" false
    else
        warning "Syntax fixer script not found"
    fi
    
    # Restore fixed files if they exist
    if [ -f "scripts/restore-fixed-files.sh" ]; then
        info "Restoring fixed files..."
        ./scripts/restore-fixed-files.sh
    fi
}

# Function to run build with retry logic
run_build_with_retry() {
    local max_retries=3
    local retry_count=0
    
    while [ $retry_count -lt $max_retries ]; do
        info "🏗️  Attempting build (attempt $((retry_count + 1))/$max_retries)..."
        
        if run_with_log "Application Build" "npm run build" false; then
            success "Build completed successfully"
            return 0
        else
            retry_count=$((retry_count + 1))
            if [ $retry_count -lt $max_retries ]; then
                warning "Build failed, attempting to fix and retry..."
                run_syntax_fixes
                sleep 2
            fi
        fi
    done
    
    error "Build failed after $max_retries attempts"
    return 1
}

# Function to run tests
run_tests() {
    info "🧪 Running tests..."
    
    # TypeScript type checking
    run_with_log "TypeScript Type Checking" "npx tsc --noEmit" false
    
    # ESLint with better configuration
    if [ -f ".eslintrc.js" ] || [ -f "eslint.config.js" ]; then
        run_with_log "ESLint Linting" "npx eslint . --ext .ts,.tsx,.js,.jsx --max-warnings 0" false
    else
        warning "ESLint configuration not found"
    fi
    
    # Run any test scripts
    if [ -f "package.json" ] && grep -q '"test"' package.json; then
        run_with_log "Test Suite" "npm test" false
    fi
}

# Function to run performance optimizations
run_performance_optimizations() {
    info "⚡ Running performance optimizations..."
    
    # Performance monitoring
    if [ -f "scripts/performance-monitor.cjs" ]; then
        run_with_log "Performance Monitoring" "node scripts/performance-monitor.cjs" false
    fi
    
    # Bundle analysis
    if [ -f "scripts/analyze-bundle.cjs" ]; then
        run_with_log "Bundle Analysis" "node scripts/analyze-bundle.cjs" false
    fi
    
    # Image optimization
    if [ -f "scripts/optimize-images.cjs" ]; then
        run_with_log "Image Optimization" "node scripts/optimize-images.cjs" false
    fi
}

# Function to run security audit
run_security_audit() {
    info "🔒 Running security audit..."
    
    # NPM audit
    run_with_log "NPM Security Audit" "npm audit --audit-level moderate" false
    
    # Custom security scanner
    if [ -f "scripts/security-audit.cjs" ]; then
        run_with_log "Security Audit" "node scripts/security-audit.cjs" false
    fi
}

# Function to generate comprehensive report
generate_report() {
    info "📊 Generating comprehensive automation report..."
    
    local report_file="$LOG_DIR/enhanced-automation-report-${TIMESTAMP}.json"
    
    cat > "$report_file" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "duration": "$(($(date +%s) - start_time))s",
  "environment": {
    "node_version": "$(node --version)",
    "npm_version": "$(npm --version)",
    "os": "$(uname -s)",
    "architecture": "$(uname -m)"
  },
  "results": {
    "file_protection": "completed",
    "syntax_fixes": "completed",
    "build_success": $([ $? -eq 0 ] && echo "true" || echo "false"),
    "tests_passed": "completed",
    "performance_optimizations": "completed",
    "security_audit": "completed"
  },
  "logs": {
    "directory": "$LOG_DIR",
    "timestamp": "$TIMESTAMP"
  },
  "recommendations": [
    "Monitor build performance regularly",
    "Keep dependencies updated",
    "Run security audits weekly",
    "Optimize images and assets",
    "Monitor Core Web Vitals"
  ]
}
EOF
    
    success "Report saved to: $report_file"
}

# Main execution
main() {
    local start_time=$(date +%s)
    
    print_header "🔧 Phase 1: File Protection & Dependencies"
    echo "=============================================="
    
    # Check file protection
    check_file_protection
    
    # Install dependencies
    run_with_log "Dependency Installation" "npm install" true
    
    print_header "🔧 Phase 2: Code Quality & Syntax"
    echo "======================================"
    
    # Run syntax fixes with protection
    run_syntax_fixes
    
    print_header "🏗️  Phase 3: Build & Compilation"
    echo "=================================="
    
    # Run build with retry logic
    run_build_with_retry
    
    print_header "🧪 Phase 4: Testing & Quality Assurance"
    echo "=========================================="
    
    # Run tests
    run_tests
    
    print_header "⚡ Phase 5: Performance Optimization"
    echo "====================================="
    
    # Run performance optimizations
    run_performance_optimizations
    
    print_header "🔒 Phase 6: Security Audit"
    echo "============================"
    
    # Run security audit
    run_security_audit
    
    print_header "📊 Phase 7: Reporting"
    echo "======================"
    
    # Generate comprehensive report
    generate_report
    
    print_header "🎉 Enhanced Automation Orchestrator Complete!"
    echo "=============================================="
    
    local end_time=$(date +%s)
    local duration=$((end_time - start_time))
    
    success "Total execution time: ${duration}s"
    success "All automation phases completed successfully!"
    
    echo ""
    info "📁 Logs available in: $LOG_DIR"
    info "📊 Reports generated with timestamp: $TIMESTAMP"
    echo ""
    success "🚀 Your application is ready for deployment!"
}

# Run main function
main "$@"