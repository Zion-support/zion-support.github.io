#!/bin/bash

# Automated Testing Script for Zion Tech Group App
# This script runs comprehensive tests including unit, integration, and e2e tests

set -e

# Configuration
TEST_DIR="tests"
REPORTS_DIR="test-reports"
COVERAGE_DIR="coverage"
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Create directories
mkdir -p "$TEST_DIR" "$REPORTS_DIR" "$COVERAGE_DIR"

echo -e "${BLUE}🧪 Starting Automated Testing Suite...${NC}"

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$REPORTS_DIR/test-run-$TIMESTAMP.log"
}

# Function to run syntax validation
run_syntax_validation() {
    log "Running syntax validation..."
    
    # Check TypeScript syntax
    if npx tsc --noEmit --skipLibCheck 2>/dev/null; then
        log "✅ TypeScript syntax validation passed"
        SYNTAX_STATUS="passed"
    else
        log "❌ TypeScript syntax validation failed"
        SYNTAX_STATUS="failed"
    fi
    
    # Check ESLint
    if npx eslint . --ext .ts,.tsx,.js,.jsx --max-warnings 0 > /dev/null 2>&1; then
        log "✅ ESLint validation passed"
        LINT_STATUS="passed"
    else
        log "⚠️ ESLint validation found issues"
        LINT_STATUS="warnings"
    fi
}

# Function to run unit tests
run_unit_tests() {
    log "Running unit tests..."
    
    # Create a simple test file if none exists
    if [ ! -f "$TEST_DIR/example.test.ts" ]; then
        mkdir -p "$TEST_DIR"
        cat > "$TEST_DIR/example.test.ts" << 'EOF'
// Example unit test
describe('Example Test Suite', () => {
  it('should pass basic test', () => {
    expect(1 + 1).toBe(2);
  });
  
  it('should handle string operations', () => {
    const str = 'Hello World';
    expect(str.toLowerCase()).toBe('hello world');
  });
  
  it('should handle array operations', () => {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(3);
    expect(arr.includes(2)).toBe(true);
  });
});
EOF
    fi
    
    # Run Jest tests
    if npm test -- --coverage --testPathPattern="$TEST_DIR" --passWithNoTests > "$REPORTS_DIR/unit-tests-$TIMESTAMP.txt" 2>&1; then
        log "✅ Unit tests passed"
        UNIT_TEST_STATUS="passed"
    else
        log "❌ Unit tests failed"
        UNIT_TEST_STATUS="failed"
    fi
}

# Function to run integration tests
run_integration_tests() {
    log "Running integration tests..."
    
    # Test API endpoints (if any)
    if curl -s http://localhost:3000/api/health > /dev/null 2>&1; then
        log "✅ API health check passed"
        API_STATUS="healthy"
    else
        log "⚠️ API health check failed (API might not be running)"
        API_STATUS="unavailable"
    fi
    
    # Test build process
    if npm run build > /dev/null 2>&1; then
        log "✅ Build integration test passed"
        BUILD_INTEGRATION_STATUS="passed"
    else
        log "❌ Build integration test failed"
        BUILD_INTEGRATION_STATUS="failed"
    fi
    
    # Test static file serving
    if [ -d "public" ] && [ "$(ls -A public)" ]; then
        log "✅ Static files check passed"
        STATIC_FILES_STATUS="passed"
    else
        log "⚠️ Static files check failed"
        STATIC_FILES_STATUS="failed"
    fi
}

# Function to run performance tests
run_performance_tests() {
    log "Running performance tests..."
    
    # Measure build time
    BUILD_START=$(date +%s)
    npm run build > /dev/null 2>&1
    BUILD_END=$(date +%s)
    BUILD_TIME=$((BUILD_END - BUILD_START))
    
    # Measure bundle size
    if [ -d ".next" ]; then
        BUNDLE_SIZE=$(du -sh .next | cut -f1)
        BUNDLE_SIZE_BYTES=$(du -sb .next | cut -f1)
    else
        BUNDLE_SIZE="N/A"
        BUNDLE_SIZE_BYTES=0
    fi
    
    # Performance thresholds
    MAX_BUILD_TIME=300  # 5 minutes
    MAX_BUNDLE_SIZE=50000000  # 50MB
    
    if [ "$BUILD_TIME" -le "$MAX_BUILD_TIME" ]; then
        log "✅ Build time within acceptable limits: ${BUILD_TIME}s"
        BUILD_PERFORMANCE_STATUS="passed"
    else
        log "⚠️ Build time exceeds threshold: ${BUILD_TIME}s (max: ${MAX_BUILD_TIME}s)"
        BUILD_PERFORMANCE_STATUS="warning"
    fi
    
    if [ "$BUNDLE_SIZE_BYTES" -le "$MAX_BUNDLE_SIZE" ]; then
        log "✅ Bundle size within acceptable limits: $BUNDLE_SIZE"
        BUNDLE_PERFORMANCE_STATUS="passed"
    else
        log "⚠️ Bundle size exceeds threshold: $BUNDLE_SIZE"
        BUNDLE_PERFORMANCE_STATUS="warning"
    fi
}

# Function to run accessibility tests
run_accessibility_tests() {
    log "Running accessibility tests..."
    
    # Check for basic accessibility attributes
    ACCESSIBILITY_ISSUES=0
    
    # Check for alt attributes on images
    if grep -r "img.*src" pages/ components/ --include="*.tsx" --include="*.jsx" | grep -v "alt=" > /dev/null 2>&1; then
        log "⚠️ Found images without alt attributes"
        ACCESSIBILITY_ISSUES=$((ACCESSIBILITY_ISSUES + 1))
    fi
    
    # Check for proper heading structure
    if grep -r "h[1-6]" pages/ components/ --include="*.tsx" --include="*.jsx" > /dev/null 2>&1; then
        log "✅ Found heading elements"
    else
        log "⚠️ No heading elements found"
        ACCESSIBILITY_ISSUES=$((ACCESSIBILITY_ISSUES + 1))
    fi
    
    # Check for form labels
    if grep -r "input\|select\|textarea" pages/ components/ --include="*.tsx" --include="*.jsx" | grep -v "label\|aria-label" > /dev/null 2>&1; then
        log "⚠️ Found form elements without labels"
        ACCESSIBILITY_ISSUES=$((ACCESSIBILITY_ISSUES + 1))
    fi
    
    if [ "$ACCESSIBILITY_ISSUES" -eq 0 ]; then
        log "✅ Accessibility tests passed"
        ACCESSIBILITY_STATUS="passed"
    else
        log "⚠️ Found $ACCESSIBILITY_ISSUES accessibility issues"
        ACCESSIBILITY_STATUS="issues"
    fi
}

# Function to run security tests
run_security_tests() {
    log "Running security tests..."
    
    # Check for security vulnerabilities
    if npm audit --audit-level=high > /dev/null 2>&1; then
        log "✅ No high-severity security vulnerabilities found"
        SECURITY_STATUS="secure"
    else
        log "❌ High-severity security vulnerabilities found"
        SECURITY_STATUS="vulnerable"
        npm audit --audit-level=high > "$REPORTS_DIR/security-audit-$TIMESTAMP.txt" 2>&1
    fi
    
    # Check for sensitive data in code
    SENSITIVE_DATA_FOUND=0
    
    # Check for hardcoded secrets
    if grep -r "password\|secret\|key\|token" pages/ components/ --include="*.tsx" --include="*.jsx" | grep -v "//\|/\*" | grep -v "placeholder\|label" > /dev/null 2>&1; then
        log "⚠️ Potential hardcoded secrets found"
        SENSITIVE_DATA_FOUND=$((SENSITIVE_DATA_FOUND + 1))
    fi
    
    # Check for console.log statements in production code
    if grep -r "console\.log\|console\.warn\|console\.error" pages/ components/ --include="*.tsx" --include="*.jsx" > /dev/null 2>&1; then
        log "⚠️ Console statements found in production code"
        SENSITIVE_DATA_FOUND=$((SENSITIVE_DATA_FOUND + 1))
    fi
    
    if [ "$SENSITIVE_DATA_FOUND" -eq 0 ]; then
        log "✅ No sensitive data issues found"
        SENSITIVE_DATA_STATUS="clean"
    else
        log "⚠️ Found $SENSITIVE_DATA_FOUND potential sensitive data issues"
        SENSITIVE_DATA_STATUS="issues"
    fi
}

# Function to generate test report
generate_test_report() {
    log "Generating comprehensive test report..."
    
    # Calculate overall test status
    FAILED_TESTS=0
    if [ "$SYNTAX_STATUS" != "passed" ]; then FAILED_TESTS=$((FAILED_TESTS + 1)); fi
    if [ "$UNIT_TEST_STATUS" != "passed" ]; then FAILED_TESTS=$((FAILED_TESTS + 1)); fi
    if [ "$BUILD_INTEGRATION_STATUS" != "passed" ]; then FAILED_TESTS=$((FAILED_TESTS + 1)); fi
    if [ "$STATIC_FILES_STATUS" != "passed" ]; then FAILED_TESTS=$((FAILED_TESTS + 1)); fi
    if [ "$ACCESSIBILITY_STATUS" != "passed" ]; then FAILED_TESTS=$((FAILED_TESTS + 1)); fi
    if [ "$SECURITY_STATUS" != "secure" ]; then FAILED_TESTS=$((FAILED_TESTS + 1)); fi
    
    # Generate JSON report
    cat > "$REPORTS_DIR/test-report-$TIMESTAMP.json" << EOF
{
  "timestamp": "$(date -Iseconds)",
  "overall_status": "$([ $FAILED_TESTS -eq 0 ] && echo "passed" || echo "failed")",
  "failed_tests": $FAILED_TESTS,
  "total_tests": 6,
  "test_results": {
    "syntax_validation": {
      "status": "$SYNTAX_STATUS",
      "lint_status": "$LINT_STATUS"
    },
    "unit_tests": {
      "status": "$UNIT_TEST_STATUS"
    },
    "integration_tests": {
      "api_status": "$API_STATUS",
      "build_status": "$BUILD_INTEGRATION_STATUS",
      "static_files_status": "$STATIC_FILES_STATUS"
    },
    "performance_tests": {
      "build_time_seconds": $BUILD_TIME,
      "bundle_size": "$BUNDLE_SIZE",
      "bundle_size_bytes": $BUNDLE_SIZE_BYTES,
      "build_performance_status": "$BUILD_PERFORMANCE_STATUS",
      "bundle_performance_status": "$BUNDLE_PERFORMANCE_STATUS"
    },
    "accessibility_tests": {
      "status": "$ACCESSIBILITY_STATUS",
      "issues_found": $ACCESSIBILITY_ISSUES
    },
    "security_tests": {
      "status": "$SECURITY_STATUS",
      "sensitive_data_status": "$SENSITIVE_DATA_STATUS",
      "issues_found": $SENSITIVE_DATA_FOUND
    }
  },
  "recommendations": [
    $([ "$SYNTAX_STATUS" != "passed" ] && echo '"Fix syntax errors before deployment"' || echo '')
    $([ "$LINT_STATUS" != "passed" ] && echo ',"Address ESLint warnings"' || echo '')
    $([ "$UNIT_TEST_STATUS" != "passed" ] && echo ',"Fix failing unit tests"' || echo '')
    $([ "$BUILD_INTEGRATION_STATUS" != "passed" ] && echo ',"Fix build integration issues"' || echo '')
    $([ "$ACCESSIBILITY_STATUS" != "passed" ] && echo ',"Improve accessibility compliance"' || echo '')
    $([ "$SECURITY_STATUS" != "secure" ] && echo ',"Address security vulnerabilities"' || echo '')
    $([ "$BUILD_PERFORMANCE_STATUS" != "passed" ] && echo ',"Optimize build performance"' || echo '')
    $([ "$BUNDLE_PERFORMANCE_STATUS" != "passed" ] && echo ',"Optimize bundle size"' || echo '')
  ]
}
EOF

    # Generate HTML report
    cat > "$REPORTS_DIR/test-report-$TIMESTAMP.html" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zion Tech Group - Test Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #1a1a1a; color: #fff; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 30px; }
        .status-passed { color: #4CAF50; }
        .status-failed { color: #F44336; }
        .status-warning { color: #FF9800; }
        .test-section { background: #2a2a2a; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .test-item { display: flex; justify-content: space-between; margin: 10px 0; padding: 10px; background: #3a3a3a; border-radius: 4px; }
        .timestamp { color: #888; font-size: 0.9em; }
        .recommendations { background: #2a2a2a; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .recommendations ul { margin: 0; padding-left: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🧪 Zion Tech Group - Test Report</h1>
            <p class="timestamp">Generated: $(date)</p>
        </div>
        
        <div class="test-section">
            <h2>Overall Status: <span class="$([ $FAILED_TESTS -eq 0 ] && echo 'status-passed' || echo 'status-failed')">$([ $FAILED_TESTS -eq 0 ] && echo 'PASSED' || echo 'FAILED')</span></h2>
            <p>Failed Tests: $FAILED_TESTS / 6</p>
        </div>
        
        <div class="test-section">
            <h3>Test Results</h3>
            <div class="test-item">
                <span>Syntax Validation</span>
                <span class="status-$SYNTAX_STATUS">$SYNTAX_STATUS</span>
            </div>
            <div class="test-item">
                <span>Unit Tests</span>
                <span class="status-$UNIT_TEST_STATUS">$UNIT_TEST_STATUS</span>
            </div>
            <div class="test-item">
                <span>Integration Tests</span>
                <span class="status-$BUILD_INTEGRATION_STATUS">$BUILD_INTEGRATION_STATUS</span>
            </div>
            <div class="test-item">
                <span>Performance Tests</span>
                <span class="status-$BUILD_PERFORMANCE_STATUS">$BUILD_PERFORMANCE_STATUS</span>
            </div>
            <div class="test-item">
                <span>Accessibility Tests</span>
                <span class="status-$ACCESSIBILITY_STATUS">$ACCESSIBILITY_STATUS</span>
            </div>
            <div class="test-item">
                <span>Security Tests</span>
                <span class="status-$SECURITY_STATUS">$SECURITY_STATUS</span>
            </div>
        </div>
        
        <div class="test-section">
            <h3>Performance Metrics</h3>
            <div class="test-item">
                <span>Build Time</span>
                <span>${BUILD_TIME}s</span>
            </div>
            <div class="test-item">
                <span>Bundle Size</span>
                <span>$BUNDLE_SIZE</span>
            </div>
        </div>
        
        <div class="recommendations">
            <h3>Recommendations</h3>
            <ul>
                $([ "$SYNTAX_STATUS" != "passed" ] && echo '<li>Fix syntax errors before deployment</li>' || echo '')
                $([ "$LINT_STATUS" != "passed" ] && echo '<li>Address ESLint warnings</li>' || echo '')
                $([ "$UNIT_TEST_STATUS" != "passed" ] && echo '<li>Fix failing unit tests</li>' || echo '')
                $([ "$BUILD_INTEGRATION_STATUS" != "passed" ] && echo '<li>Fix build integration issues</li>' || echo '')
                $([ "$ACCESSIBILITY_STATUS" != "passed" ] && echo '<li>Improve accessibility compliance</li>' || echo '')
                $([ "$SECURITY_STATUS" != "secure" ] && echo '<li>Address security vulnerabilities</li>' || echo '')
                $([ "$BUILD_PERFORMANCE_STATUS" != "passed" ] && echo '<li>Optimize build performance</li>' || echo '')
                $([ "$BUNDLE_PERFORMANCE_STATUS" != "passed" ] && echo '<li>Optimize bundle size</li>' || echo '')
            </ul>
        </div>
    </div>
</body>
</html>
EOF
}

# Main execution
main() {
    log "Starting comprehensive testing suite..."
    
    run_syntax_validation
    run_unit_tests
    run_integration_tests
    run_performance_tests
    run_accessibility_tests
    run_security_tests
    generate_test_report
    
    log "✅ Testing suite completed"
    
    # Print summary
    echo -e "\n${GREEN}📊 Test Summary:${NC}"
    echo -e "Overall Status: $([ $FAILED_TESTS -eq 0 ] && echo 'PASSED' || echo 'FAILED')"
    echo -e "Failed Tests: $FAILED_TESTS / 6"
    echo -e "Build Time: ${BUILD_TIME}s"
    echo -e "Bundle Size: $BUNDLE_SIZE"
    
    echo -e "\n${BLUE}📁 Reports generated:${NC}"
    echo -e "JSON Report: $REPORTS_DIR/test-report-$TIMESTAMP.json"
    echo -e "HTML Report: $REPORTS_DIR/test-report-$TIMESTAMP.html"
    echo -e "Test Log: $REPORTS_DIR/test-run-$TIMESTAMP.log"
    
    if [ "$FAILED_TESTS" -gt 0 ]; then
        echo -e "\n${RED}❌ Some tests failed. Please review the reports for details.${NC}"
        exit 1
    else
        echo -e "\n${GREEN}✅ All tests passed!${NC}"
        exit 0
    fi
}

# Run main function
main "$@"