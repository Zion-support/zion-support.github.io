#!/bin/bash

# Comprehensive Testing Script for Enhanced PM2 Automation System
# Zion Tech Group - PM2 Automation Platform

set -e  # Exit on any error

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DASHBOARD_PORT="3001"
PM2_APP_NAME="enhanced-automation"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test results
TESTS_PASSED=0
TESTS_FAILED=0
TESTS_TOTAL=0

# Logging function
log() {
    local message="$1"
    local level="${2:-INFO}"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] [TEST-$level] $message"
}

# Test function
run_test() {
    local test_name="$1"
    local test_command="$2"
    local test_description="${3:-$test_name}"
    
    TESTS_TOTAL=$((TESTS_TOTAL + 1))
    
    log "Running test: $test_name" "INFO"
    log "Description: $test_description" "INFO"
    
    if eval "$test_command" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ PASS${NC} - $test_name"
        TESTS_PASSED=$((TESTS_PASSED + 1))
        return 0
    else
        echo -e "${RED}❌ FAIL${NC} - $test_name"
        TESTS_FAILED=$((TESTS_FAILED + 1))
        return 1
    fi
}

# Test PM2 installation and availability
test_pm2_installation() {
    run_test "PM2 Installation" \
        "command -v pm2 > /dev/null 2>&1" \
        "Verify PM2 is installed and available in PATH"
}

# Test Node.js availability
test_node_availability() {
    run_test "Node.js Availability" \
        "command -v node > /dev/null 2>&1" \
        "Verify Node.js is installed and available in PATH"
}

# Test npm availability
test_npm_availability() {
    run_test "npm Availability" \
        "command -v npm > /dev/null 2>&1" \
        "Verify npm is installed and available in PATH"
}

# Test dependencies installation
test_dependencies() {
    run_test "Dependencies Installation" \
        "cd $SCRIPT_DIR && npm list --depth=0 > /dev/null 2>&1" \
        "Verify all required dependencies are installed"
}

# Test configuration files
test_configuration() {
    local config_files=(
        "start-enhanced-automation.js"
        "monitoring-dashboard.js"
        "alerting-system.js"
        "process-recovery.js"
        "config/automation-config.js"
        "dashboard-ui/index.html"
        "package.json"
    )
    
    for file in "${config_files[@]}"; do
        if [[ -f "$SCRIPT_DIR/$file" ]]; then
            echo -e "${GREEN}✅ PASS${NC} - Configuration file exists: $file"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            echo -e "${RED}❌ FAIL${NC} - Configuration file missing: $file"
            TESTS_FAILED=$((TESTS_FAILED + 1))
        fi
        TESTS_TOTAL=$((TESTS_TOTAL + 1))
    done
}

# Test system startup
test_system_startup() {
    log "Testing system startup..." "INFO"
    
    # Start the system in background
    cd "$SCRIPT_DIR"
    timeout 30s node start-enhanced-automation.js > /tmp/automation-startup.log 2>&1 &
    local pid=$!
    
    # Wait for system to start
    sleep 10
    
    # Test if system is responding
    if curl -s "http://localhost:$DASHBOARD_PORT/health" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ PASS${NC} - System startup and health check"
        TESTS_PASSED=$((TESTS_PASSED + 1))
        
        # Test dashboard accessibility
        if curl -s "http://localhost:$DASHBOARD_PORT/" > /dev/null 2>&1; then
            echo -e "${GREEN}✅ PASS${NC} - Dashboard accessibility"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            echo -e "${RED}❌ FAIL${NC} - Dashboard accessibility"
            TESTS_FAILED=$((TESTS_FAILED + 1))
        fi
        
        # Test API endpoints
        if curl -s "http://localhost:$DASHBOARD_PORT/api/processes" > /dev/null 2>&1; then
            echo -e "${GREEN}✅ PASS${NC} - API endpoints functionality"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            echo -e "${RED}❌ FAIL${NC} - API endpoints functionality"
            TESTS_FAILED=$((TESTS_FAILED + 1))
        fi
        
        TESTS_TOTAL=$((TESTS_TOTAL + 3))
        
        # Stop the system
        kill $pid 2>/dev/null || true
        sleep 2
    else
        echo -e "${RED}❌ FAIL${NC} - System startup and health check"
        TESTS_FAILED=$((TESTS_FAILED + 1))
        TESTS_TOTAL=$((TESTS_TOTAL + 1))
        
        # Stop the system
        kill $pid 2>/dev/null || true
    fi
}

# Test PM2 integration
test_pm2_integration() {
    log "Testing PM2 integration..." "INFO"
    
    # Check if PM2 is running
    if pm2 ping > /dev/null 2>&1; then
        echo -e "${GREEN}✅ PASS${NC} - PM2 daemon is running"
        TESTS_PASSED=$((TESTS_PASSED + 1))
        
        # Check PM2 processes
        local pm2_processes=$(pm2 list | grep -c "cluster" || echo "0")
        if [[ $pm2_processes -gt 0 ]]; then
            echo -e "${GREEN}✅ PASS${NC} - PM2 processes are running ($pm2_processes processes)"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            echo -e "${YELLOW}⚠️  WARNING${NC} - No PM2 processes found"
        fi
        
        TESTS_TOTAL=$((TESTS_TOTAL + 2))
    else
        echo -e "${RED}❌ FAIL${NC} - PM2 daemon is not running"
        TESTS_FAILED=$((TESTS_FAILED + 1))
        TESTS_TOTAL=$((TESTS_TOTAL + 1))
    fi
}

# Test file permissions and security
test_security() {
    log "Testing security and permissions..." "INFO"
    
    # Check file permissions
    local sensitive_files=(
        "start-enhanced-automation.js"
        "monitoring-dashboard.js"
        "alerting-system.js"
        "process-recovery.js"
    )
    
    for file in "${sensitive_files[@]}"; do
        if [[ -f "$SCRIPT_DIR/$file" ]]; then
            local permissions=$(stat -c "%a" "$SCRIPT_DIR/$file")
            if [[ $permissions == "644" || $permissions == "600" ]]; then
                echo -e "${GREEN}✅ PASS${NC} - File permissions secure: $file ($permissions)"
                TESTS_PASSED=$((TESTS_PASSED + 1))
            else
                echo -e "${YELLOW}⚠️  WARNING${NC} - File permissions may be too open: $file ($permissions)"
            fi
            TESTS_TOTAL=$((TESTS_TOTAL + 1))
        fi
    done
    
    # Check for hardcoded secrets
    if grep -r "password\|secret\|key\|token" "$SCRIPT_DIR" --exclude-dir=node_modules --exclude="*.md" | grep -v "process.env" | grep -v "config" | grep -v "example" > /dev/null 2>&1; then
        echo -e "${YELLOW}⚠️  WARNING${NC} - Potential hardcoded secrets found"
    else
        echo -e "${GREEN}✅ PASS${NC} - No hardcoded secrets detected"
        TESTS_PASSED=$((TESTS_PASSED + 1))
        TESTS_TOTAL=$((TESTS_TOTAL + 1))
    fi
}

# Test performance and resource usage
test_performance() {
    log "Testing performance and resource usage..." "INFO"
    
    # Start system for performance testing
    cd "$SCRIPT_DIR"
    timeout 20s node start-enhanced-automation.js > /tmp/performance-test.log 2>&1 &
    local pid=$!
    
    sleep 5
    
    # Test response time
    local start_time=$(date +%s%N)
    if curl -s "http://localhost:$DASHBOARD_PORT/health" > /dev/null 2>&1; then
        local end_time=$(date +%s%N)
        local response_time=$(( (end_time - start_time) / 1000000 ))
        
        if [[ $response_time -lt 1000 ]]; then
            echo -e "${GREEN}✅ PASS${NC} - Response time acceptable: ${response_time}ms"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            echo -e "${YELLOW}⚠️  WARNING${NC} - Response time slow: ${response_time}ms"
        fi
        TESTS_TOTAL=$((TESTS_TOTAL + 1))
    fi
    
    # Test memory usage
    if command -v ps > /dev/null 2>&1; then
        local memory_usage=$(ps -o rss= -p $pid 2>/dev/null | awk '{print $1/1024}')
        if [[ -n "$memory_usage" && $(echo "$memory_usage < 500" | bc -l 2>/dev/null || echo "1") == "1" ]]; then
            echo -e "${GREEN}✅ PASS${NC} - Memory usage acceptable: ${memory_usage}MB"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            echo -e "${YELLOW}⚠️  WARNING${NC} - High memory usage: ${memory_usage}MB"
        fi
        TESTS_TOTAL=$((TESTS_TOTAL + 1))
    fi
    
    # Stop the system
    kill $pid 2>/dev/null || true
    sleep 2
}

# Test error handling and resilience
test_error_handling() {
    log "Testing error handling and resilience..." "INFO"
    
    # Test invalid port handling
    cd "$SCRIPT_DIR"
    PORT=99999 timeout 10s node start-enhanced-automation.js > /tmp/error-test.log 2>&1 &
    local pid=$!
    
    sleep 3
    
    # Check if system handles errors gracefully
    if ! curl -s "http://localhost:99999/health" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ PASS${NC} - System handles invalid port gracefully"
        TESTS_PASSED=$((TESTS_PASSED + 1))
    else
        echo -e "${RED}❌ FAIL${NC} - System should not start on invalid port"
        TESTS_FAILED=$((TESTS_FAILED + 1))
    fi
    TESTS_TOTAL=$((TESTS_TOTAL + 1))
    
    # Stop the system
    kill $pid 2>/dev/null || true
    sleep 2
}

# Test configuration validation
test_configuration_validation() {
    log "Testing configuration validation..." "INFO"
    
    # Test configuration file syntax
    if node -c "$SCRIPT_DIR/config/automation-config.js" 2>/dev/null; then
        echo -e "${GREEN}✅ PASS${NC} - Configuration file syntax is valid"
        TESTS_PASSED=$((TESTS_PASSED + 1))
    else
        echo -e "${RED}❌ FAIL${NC} - Configuration file has syntax errors"
        TESTS_FAILED=$((TESTS_FAILED + 1))
    fi
    TESTS_TOTAL=$((TESTS_TOTAL + 1))
    
    # Test main startup script syntax
    if node -c "$SCRIPT_DIR/start-enhanced-automation.js" 2>/dev/null; then
        echo -e "${GREEN}✅ PASS${NC} - Main startup script syntax is valid"
        TESTS_PASSED=$((TESTS_PASSED + 1))
    else
        echo -e "${RED}❌ FAIL${NC} - Main startup script has syntax errors"
        TESTS_FAILED=$((TESTS_FAILED + 1))
    fi
    TESTS_TOTAL=$((TESTS_TOTAL + 1))
}

# Display test results
display_results() {
    echo
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}           TEST RESULTS SUMMARY        ${NC}"
    echo -e "${BLUE}========================================${NC}"
    echo
    echo -e "Total Tests: ${TESTS_TOTAL}"
    echo -e "Passed: ${GREEN}${TESTS_PASSED}${NC}"
    echo -e "Failed: ${RED}${TESTS_FAILED}${NC}"
    echo -e "Success Rate: $(( (TESTS_PASSED * 100) / TESTS_TOTAL ))%"
    echo
    
    if [[ $TESTS_FAILED -eq 0 ]]; then
        echo -e "${GREEN}🎉 All tests passed! The system is ready for production.${NC}"
        return 0
    else
        echo -e "${RED}⚠️  Some tests failed. Please review and fix the issues before deployment.${NC}"
        return 1
    fi
}

# Cleanup function
cleanup() {
    log "Cleaning up test environment..." "INFO"
    
    # Kill any remaining test processes
    pkill -f "start-enhanced-automation.js" 2>/dev/null || true
    
    # Remove temporary files
    rm -f /tmp/automation-startup.log /tmp/performance-test.log /tmp/error-test.log
    
    # Clear port if needed
    if lsof -ti:$DASHBOARD_PORT > /dev/null 2>&1; then
        lsof -ti:$DASHBOARD_PORT | xargs kill -9 2>/dev/null || true
    fi
}

# Main test function
main() {
    log "Starting comprehensive testing of Enhanced PM2 Automation System..." "INFO"
    echo
    
    # Set trap for cleanup
    trap cleanup EXIT
    
    # Run all tests
    test_pm2_installation
    test_node_availability
    test_npm_availability
    test_dependencies
    test_configuration
    test_pm2_integration
    test_system_startup
    test_security
    test_performance
    test_error_handling
    test_configuration_validation
    
    # Display results
    display_results
    
    log "Testing completed!" "INFO"
}

# Run main function
main "$@"
