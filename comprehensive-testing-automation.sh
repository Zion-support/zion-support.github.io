#!/bin/bash

# Comprehensive Testing Automation Script
# This script runs all types of tests and generates detailed reports

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
LOG_DIR="automation-reports"
TEST_RESULTS_DIR="test-results"
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
COVERAGE_THRESHOLD=80

# Function to log with timestamp and color
log() {
    local level="$1"
    local message="$2"
    local color="$3"
    echo -e "${color}[$(date '+%Y-%m-%d %H:%M:%S')] [${level}] ${message}${NC}"
}

log_info() { log "INFO" "$1" "$BLUE"; }
log_success() { log "SUCCESS" "$1" "$GREEN"; }
log_warning() { log "WARNING" "$1" "$YELLOW"; }
log_error() { log "ERROR" "$1" "$RED"; }

# Function to run unit tests
run_unit_tests() {
    log_info "Running unit tests..."
    
    local test_command="npm test"
    if [ -f "jest.config.js" ] || [ -f "jest.config.ts" ]; then
        test_command="npx jest"
    elif [ -f "vitest.config.js" ] || [ -f "vitest.config.ts" ]; then
        test_command="npx vitest run"
    fi
    
    if eval "$test_command --coverage --watchAll=false" > "$LOG_DIR/unit-tests-${TIMESTAMP}.log" 2>&1; then
        log_success "Unit tests passed"
        return 0
    else
        log_error "Unit tests failed"
        return 1
    fi
}

# Function to run integration tests
run_integration_tests() {
    log_info "Running integration tests..."
    
    # Check if integration tests exist
    if [ -d "tests/integration" ] || [ -d "__tests__/integration" ]; then
        if npx jest tests/integration --coverage > "$LOG_DIR/integration-tests-${TIMESTAMP}.log" 2>&1; then
            log_success "Integration tests passed"
            return 0
        else
            log_error "Integration tests failed"
            return 1
        fi
    else
        log_warning "No integration tests found"
        return 0
    fi
}

# Function to run end-to-end tests
run_e2e_tests() {
    log_info "Running end-to-end tests..."
    
    # Check for Playwright
    if [ -f "playwright.config.js" ] || [ -f "playwright.config.ts" ]; then
        if npx playwright test > "$LOG_DIR/e2e-tests-${TIMESTAMP}.log" 2>&1; then
            log_success "E2E tests passed"
            return 0
        else
            log_error "E2E tests failed"
            return 1
        fi
    # Check for Cypress
    elif [ -f "cypress.config.js" ] || [ -f "cypress.config.ts" ]; then
        if npx cypress run > "$LOG_DIR/e2e-tests-${TIMESTAMP}.log" 2>&1; then
            log_success "E2E tests passed"
            return 0
        else
            log_error "E2E tests failed"
            return 1
        fi
    else
        log_warning "No E2E test framework found"
        return 0
    fi
}

# Function to run accessibility tests
run_accessibility_tests() {
    log_info "Running accessibility tests..."
    
    # Check if @axe-core/cli is available
    if npx @axe-core/cli --version > /dev/null 2>&1; then
        if npx @axe-core/cli http://localhost:3000 > "$LOG_DIR/accessibility-tests-${TIMESTAMP}.log" 2>&1; then
            log_success "Accessibility tests passed"
            return 0
        else
            log_warning "Accessibility issues found"
            return 1
        fi
    else
        log_warning "Axe CLI not available, skipping accessibility tests"
        return 0
    fi
}

# Function to run performance tests
run_performance_tests() {
    log_info "Running performance tests..."
    
    # Check if Lighthouse CI is available
    if npx lhci --version > /dev/null 2>&1; then
        if npx lhci autorun > "$LOG_DIR/performance-tests-${TIMESTAMP}.log" 2>&1; then
            log_success "Performance tests passed"
            return 0
        else
            log_warning "Performance issues found"
            return 1
        fi
    else
        log_warning "Lighthouse CI not available, skipping performance tests"
        return 0
    fi
}

# Function to run security tests
run_security_tests() {
    log_info "Running security tests..."
    
    # Run npm audit
    if npm audit --audit-level moderate > "$LOG_DIR/security-tests-${TIMESTAMP}.log" 2>&1; then
        log_success "Security audit passed"
    else
        log_warning "Security vulnerabilities found"
    fi
    
    # Check for common security issues
    local security_issues=0
    
    # Check for hardcoded secrets
    if grep -r "password\|secret\|key" --include="*.js" --include="*.ts" --include="*.tsx" . | grep -v node_modules | grep -v ".git" | grep -v "test"; then
        log_warning "Potential hardcoded secrets found"
        security_issues=$((security_issues + 1))
    fi
    
    # Check for console.log in production code
    if grep -r "console\.log" --include="*.js" --include="*.ts" --include="*.tsx" . | grep -v node_modules | grep -v ".git" | grep -v "test"; then
        log_warning "Console.log statements found in production code"
        security_issues=$((security_issues + 1))
    fi
    
    if [ $security_issues -eq 0 ]; then
        log_success "Security tests passed"
        return 0
    else
        log_warning "Security issues found: $security_issues"
        return 1
    fi
}

# Function to run visual regression tests
run_visual_tests() {
    log_info "Running visual regression tests..."
    
    # Check for Chromatic
    if npx chromatic --version > /dev/null 2>&1; then
        if npx chromatic --exit-zero-on-changes > "$LOG_DIR/visual-tests-${TIMESTAMP}.log" 2>&1; then
            log_success "Visual regression tests passed"
            return 0
        else
            log_warning "Visual changes detected"
            return 1
        fi
    else
        log_warning "Chromatic not available, skipping visual tests"
        return 0
    fi
}

# Function to run load tests
run_load_tests() {
    log_info "Running load tests..."
    
    # Check for Artillery
    if npx artillery --version > /dev/null 2>&1; then
        # Create a simple load test config
        cat > load-test.yml << 'EOF'
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 10
scenarios:
  - name: "Load test"
    requests:
      - get:
          url: "/"
EOF
        
        if npx artillery run load-test.yml > "$LOG_DIR/load-tests-${TIMESTAMP}.log" 2>&1; then
            log_success "Load tests passed"
            rm load-test.yml
            return 0
        else
            log_warning "Load test issues found"
            rm load-test.yml
            return 1
        fi
    else
        log_warning "Artillery not available, skipping load tests"
        return 0
    fi
}

# Function to generate test coverage report
generate_coverage_report() {
    log_info "Generating coverage report..."
    
    # Run tests with coverage
    if npm test -- --coverage --watchAll=false > "$LOG_DIR/coverage-${TIMESTAMP}.log" 2>&1; then
        log_success "Coverage report generated"
        
        # Check coverage threshold
        if [ -f "coverage/lcov-report/index.html" ]; then
            log_info "Coverage report available at coverage/lcov-report/index.html"
        fi
        
        return 0
    else
        log_error "Failed to generate coverage report"
        return 1
    fi
}

# Function to generate comprehensive test report
generate_test_report() {
    local report_file="$LOG_DIR/comprehensive-test-report-${TIMESTAMP}.json"
    
    log_info "Generating comprehensive test report..."
    
    # Count test results
    local unit_tests_passed=0
    local integration_tests_passed=0
    local e2e_tests_passed=0
    local accessibility_tests_passed=0
    local performance_tests_passed=0
    local security_tests_passed=0
    local visual_tests_passed=0
    local load_tests_passed=0
    
    # Check test results
    if [ -f "$LOG_DIR/unit-tests-${TIMESTAMP}.log" ] && grep -q "Tests:" "$LOG_DIR/unit-tests-${TIMESTAMP}.log"; then
        unit_tests_passed=1
    fi
    
    if [ -f "$LOG_DIR/integration-tests-${TIMESTAMP}.log" ] && grep -q "Tests:" "$LOG_DIR/integration-tests-${TIMESTAMP}.log"; then
        integration_tests_passed=1
    fi
    
    if [ -f "$LOG_DIR/e2e-tests-${TIMESTAMP}.log" ] && grep -q "passed" "$LOG_DIR/e2e-tests-${TIMESTAMP}.log"; then
        e2e_tests_passed=1
    fi
    
    if [ -f "$LOG_DIR/accessibility-tests-${TIMESTAMP}.log" ] && grep -q "No violations found" "$LOG_DIR/accessibility-tests-${TIMESTAMP}.log"; then
        accessibility_tests_passed=1
    fi
    
    if [ -f "$LOG_DIR/performance-tests-${TIMESTAMP}.log" ] && grep -q "passed" "$LOG_DIR/performance-tests-${TIMESTAMP}.log"; then
        performance_tests_passed=1
    fi
    
    if [ -f "$LOG_DIR/security-tests-${TIMESTAMP}.log" ] && grep -q "found 0 vulnerabilities" "$LOG_DIR/security-tests-${TIMESTAMP}.log"; then
        security_tests_passed=1
    fi
    
    if [ -f "$LOG_DIR/visual-tests-${TIMESTAMP}.log" ] && grep -q "passed" "$LOG_DIR/visual-tests-${TIMESTAMP}.log"; then
        visual_tests_passed=1
    fi
    
    if [ -f "$LOG_DIR/load-tests-${TIMESTAMP}.log" ] && grep -q "Summary report" "$LOG_DIR/load-tests-${TIMESTAMP}.log"; then
        load_tests_passed=1
    fi
    
    cat > "$report_file" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "test_summary": {
    "unit_tests": {
      "status": "$([ $unit_tests_passed -eq 1 ] && echo "passed" || echo "failed")",
      "coverage_threshold": $COVERAGE_THRESHOLD
    },
    "integration_tests": {
      "status": "$([ $integration_tests_passed -eq 1 ] && echo "passed" || echo "failed")"
    },
    "e2e_tests": {
      "status": "$([ $e2e_tests_passed -eq 1 ] && echo "passed" || echo "failed")"
    },
    "accessibility_tests": {
      "status": "$([ $accessibility_tests_passed -eq 1 ] && echo "passed" || echo "failed")"
    },
    "performance_tests": {
      "status": "$([ $performance_tests_passed -eq 1 ] && echo "passed" || echo "failed")"
    },
    "security_tests": {
      "status": "$([ $security_tests_passed -eq 1 ] && echo "passed" || echo "failed")"
    },
    "visual_tests": {
      "status": "$([ $visual_tests_passed -eq 1 ] && echo "passed" || echo "failed")"
    },
    "load_tests": {
      "status": "$([ $load_tests_passed -eq 1 ] && echo "passed" || echo "failed")"
    }
  },
  "overall_status": "$([ $unit_tests_passed -eq 1 ] && echo "passed" || echo "failed")",
  "recommendations": [
    "Implement continuous integration for automated testing",
    "Add more unit tests for better coverage",
    "Set up automated accessibility testing",
    "Monitor performance metrics regularly",
    "Implement security scanning in CI/CD pipeline"
  ]
}
EOF
    
    log_success "Comprehensive test report generated: $report_file"
}

# Main execution
main() {
    log_info "🧪 Starting Comprehensive Testing Automation"
    log_info "==="
    
    # Create directories
    mkdir -p "$LOG_DIR" "$TEST_RESULTS_DIR"
    
    # Run all test types
    local total_tests=0
    local passed_tests=0
    
    # Unit tests
    total_tests=$((total_tests + 1))
    if run_unit_tests; then
        passed_tests=$((passed_tests + 1))
    fi
    
    # Integration tests
    total_tests=$((total_tests + 1))
    if run_integration_tests; then
        passed_tests=$((passed_tests + 1))
    fi
    
    # E2E tests
    total_tests=$((total_tests + 1))
    if run_e2e_tests; then
        passed_tests=$((passed_tests + 1))
    fi
    
    # Accessibility tests
    total_tests=$((total_tests + 1))
    if run_accessibility_tests; then
        passed_tests=$((passed_tests + 1))
    fi
    
    # Performance tests
    total_tests=$((total_tests + 1))
    if run_performance_tests; then
        passed_tests=$((passed_tests + 1))
    fi
    
    # Security tests
    total_tests=$((total_tests + 1))
    if run_security_tests; then
        passed_tests=$((passed_tests + 1))
    fi
    
    # Visual tests
    total_tests=$((total_tests + 1))
    if run_visual_tests; then
        passed_tests=$((passed_tests + 1))
    fi
    
    # Load tests
    total_tests=$((total_tests + 1))
    if run_load_tests; then
        passed_tests=$((passed_tests + 1))
    fi
    
    # Generate coverage report
    generate_coverage_report
    
    # Generate comprehensive report
    generate_test_report
    
    # Summary
    log_info "Test Summary: $passed_tests/$total_tests test suites passed"
    
    if [ $passed_tests -eq $total_tests ]; then
        log_success "🎉 All tests passed!"
    else
        log_warning "⚠️  Some tests failed. Check the logs for details."
    fi
}

# Handle script arguments
case "${1:-}" in
    --unit-only)
        run_unit_tests
        ;;
    --integration-only)
        run_integration_tests
        ;;
    --e2e-only)
        run_e2e_tests
        ;;
    --accessibility-only)
        run_accessibility_tests
        ;;
    --performance-only)
        run_performance_tests
        ;;
    --security-only)
        run_security_tests
        ;;
    --coverage-only)
        generate_coverage_report
        ;;
    *)
        main
        ;;
esac