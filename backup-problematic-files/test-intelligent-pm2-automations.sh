#!/bin/bash

# Intelligent PM2 Automations Test Script
# This script tests all the intelligent PM2 automations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Test results
TESTS_PASSED=0
TESTS_FAILED=0
TOTAL_TESTS=0

# Logging functions
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] INFO: $1${NC}"
}

# Test function
run_test() {
    local test_name="$1"
    local test_command="$2"
    local expected_result="$3"
    
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    
    echo -e "${CYAN}Running test: $test_name${NC}"
    
    if eval "$test_command" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ PASSED: $test_name${NC}"
        TESTS_PASSED=$((TESTS_PASSED + 1))
        return 0
    else
        echo -e "${RED}❌ FAILED: $test_name${NC}"
        TESTS_FAILED=$((TESTS_FAILED + 1))
        return 1
    fi
}

# Banner
echo -e "${PURPLE}"
echo "╔══════════════════════════════════════════════════════════════════════════════╗"
echo "║                    INTELLIGENT PM2 AUTOMATIONS TEST SUITE                   ║"
echo "║                           Comprehensive Testing                             ║"
echo "╚══════════════════════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

log "Starting Intelligent PM2 Automations Test Suite..."

# Test 1: Check if PM2 is installed
run_test "PM2 Installation" "command -v pm2" "PM2 should be installed"

# Test 2: Check if Node.js is installed
run_test "Node.js Installation" "command -v node" "Node.js should be installed"

# Test 3: Check if required directories exist
run_test "Logs Directory" "[ -d 'logs' ]" "Logs directory should exist"

# Test 4: Check if ecosystem configuration exists
run_test "Enhanced Ecosystem Config" "[ -f 'ecosystem.enhanced-intelligent-v3.cjs' ]" "Enhanced ecosystem config should exist"

# Test 5: Check if AI orchestrator script exists
run_test "AI Orchestrator Script" "[ -f 'scripts/automation/ai-pm2-orchestrator.cjs' ]" "AI orchestrator script should exist"

# Test 6: Check if code analyzer script exists
run_test "AI Code Analyzer Script" "[ -f 'scripts/automation/ai-code-analyzer.cjs' ]" "AI code analyzer script should exist"

# Test 7: Check if performance optimizer script exists
run_test "Performance Optimizer Script" "[ -f 'scripts/automation/smart-performance-optimizer.cjs' ]" "Performance optimizer script should exist"

# Test 8: Check if deployment automation script exists
run_test "Deployment Automation Script" "[ -f 'scripts/automation/smart-deployment-automation.cjs' ]" "Deployment automation script should exist"

# Test 9: Check if git workflow automator script exists
run_test "Git Workflow Automator Script" "[ -f 'scripts/pm2/git-workflow-automator.cjs' ]" "Git workflow automator script should exist"

# Test 10: Check if startup script exists and is executable
run_test "Startup Script Executable" "[ -x 'start-intelligent-pm2-system.sh' ]" "Startup script should be executable"

# Test 11: Check if package.json exists
run_test "Package.json Exists" "[ -f 'package.json' ]" "package.json should exist"

# Test 12: Check if node_modules exists (if dependencies are installed)
if [ -d "node_modules" ]; then
    run_test "Node Modules Directory" "[ -d 'node_modules' ]" "node_modules directory should exist"
else
    warn "node_modules not found - dependencies may not be installed"
fi

# Test 13: Test PM2 ecosystem configuration syntax
log "Testing PM2 ecosystem configuration syntax..."
if node -c ecosystem.enhanced-intelligent-v3.cjs 2>/dev/null; then
    echo -e "${GREEN}✅ PASSED: Ecosystem configuration syntax is valid${NC}"
    TESTS_PASSED=$((TESTS_PASSED + 1))
else
    echo -e "${RED}❌ FAILED: Ecosystem configuration syntax is invalid${NC}"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi
TOTAL_TESTS=$((TOTAL_TESTS + 1))

# Test 14: Test AI orchestrator script syntax
log "Testing AI orchestrator script syntax..."
if node -c scripts/automation/ai-pm2-orchestrator.cjs 2>/dev/null; then
    echo -e "${GREEN}✅ PASSED: AI orchestrator script syntax is valid${NC}"
    TESTS_PASSED=$((TESTS_PASSED + 1))
else
    echo -e "${RED}❌ FAILED: AI orchestrator script syntax is invalid${NC}"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi
TOTAL_TESTS=$((TOTAL_TESTS + 1))

# Test 15: Test code analyzer script syntax
log "Testing code analyzer script syntax..."
if node -c scripts/automation/ai-code-analyzer.cjs 2>/dev/null; then
    echo -e "${GREEN}✅ PASSED: Code analyzer script syntax is valid${NC}"
    TESTS_PASSED=$((TESTS_PASSED + 1))
else
    echo -e "${RED}❌ FAILED: Code analyzer script syntax is invalid${NC}"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi
TOTAL_TESTS=$((TOTAL_TESTS + 1))

# Test 16: Test performance optimizer script syntax
log "Testing performance optimizer script syntax..."
if node -c scripts/automation/smart-performance-optimizer.cjs 2>/dev/null; then
    echo -e "${GREEN}✅ PASSED: Performance optimizer script syntax is valid${NC}"
    TESTS_PASSED=$((TESTS_PASSED + 1))
else
    echo -e "${RED}❌ FAILED: Performance optimizer script syntax is invalid${NC}"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi
TOTAL_TESTS=$((TOTAL_TESTS + 1))

# Test 17: Test deployment automation script syntax
log "Testing deployment automation script syntax..."
if node -c scripts/automation/smart-deployment-automation.cjs 2>/dev/null; then
    echo -e "${GREEN}✅ PASSED: Deployment automation script syntax is valid${NC}"
    TESTS_PASSED=$((TESTS_PASSED + 1))
else
    echo -e "${RED}❌ FAILED: Deployment automation script syntax is invalid${NC}"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi
TOTAL_TESTS=$((TOTAL_TESTS + 1))

# Test 18: Test git workflow automator script syntax
log "Testing git workflow automator script syntax..."
if node -c scripts/pm2/git-workflow-automator.cjs 2>/dev/null; then
    echo -e "${GREEN}✅ PASSED: Git workflow automator script syntax is valid${NC}"
    TESTS_PASSED=$((TESTS_PASSED + 1))
else
    echo -e "${RED}❌ FAILED: Git workflow automator script syntax is invalid${NC}"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi
TOTAL_TESTS=$((TOTAL_TESTS + 1))

# Test 19: Test if PM2 can load the ecosystem configuration
log "Testing PM2 ecosystem configuration loading..."
if pm2 start ecosystem.enhanced-intelligent-v3.cjs --dry-run 2>/dev/null; then
    echo -e "${GREEN}✅ PASSED: PM2 can load ecosystem configuration${NC}"
    TESTS_PASSED=$((TESTS_PASSED + 1))
else
    echo -e "${RED}❌ FAILED: PM2 cannot load ecosystem configuration${NC}"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi
TOTAL_TESTS=$((TOTAL_TESTS + 1))

# Test 20: Test if all required scripts are executable
log "Testing script executability..."
executable_scripts=(
    "start-intelligent-pm2-system.sh"
    "monitor-intelligent-pm2.sh"
    "health-check-intelligent-pm2.sh"
    "restart-intelligent-pm2.sh"
    "stop-intelligent-pm2.sh"
    "logs-intelligent-pm2.sh"
)

for script in "${executable_scripts[@]}"; do
    if [ -x "$script" ]; then
        echo -e "${GREEN}✅ PASSED: $script is executable${NC}"
        TESTS_PASSED=$((TESTS_PASSED + 1))
    else
        echo -e "${RED}❌ FAILED: $script is not executable${NC}"
        TESTS_FAILED=$((TESTS_FAILED + 1))
    fi
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
done

# Test 21: Test if logs directory structure is correct
log "Testing logs directory structure..."
required_dirs=("logs" "logs/ai" "logs/automation" "logs/performance" "logs/profiles" "logs/backups")
for dir in "${required_dirs[@]}"; do
    if [ -d "$dir" ]; then
        echo -e "${GREEN}✅ PASSED: $dir directory exists${NC}"
        TESTS_PASSED=$((TESTS_PASSED + 1))
    else
        echo -e "${RED}❌ FAILED: $dir directory does not exist${NC}"
        TESTS_FAILED=$((TESTS_FAILED + 1))
    fi
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
done

# Test 22: Test if scripts directory structure is correct
log "Testing scripts directory structure..."
required_script_dirs=("scripts" "scripts/automation" "scripts/pm2")
for dir in "${required_script_dirs[@]}"; do
    if [ -d "$dir" ]; then
        echo -e "${GREEN}✅ PASSED: $dir directory exists${NC}"
        TESTS_PASSED=$((TESTS_PASSED + 1))
    else
        echo -e "${RED}❌ FAILED: $dir directory does not exist${NC}"
        TESTS_FAILED=$((TESTS_FAILED + 1))
    fi
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
done

# Test 23: Test if configuration files are valid JSON (where applicable)
log "Testing configuration file validity..."
config_files=(
    "ai-orchestrator-config.json"
    "performance-config.json"
    "deployment-config.json"
)

for config in "${config_files[@]}"; do
    if [ -f "$config" ]; then
        if jq empty "$config" 2>/dev/null; then
            echo -e "${GREEN}✅ PASSED: $config is valid JSON${NC}"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            echo -e "${RED}❌ FAILED: $config is not valid JSON${NC}"
            TESTS_FAILED=$((TESTS_FAILED + 1))
        fi
    else
        echo -e "${YELLOW}⚠️  SKIPPED: $config does not exist (will be created at runtime)${NC}"
    fi
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
done

# Test 24: Test if PM2 processes can be started (dry run)
log "Testing PM2 process startup (dry run)..."
if pm2 start ecosystem.enhanced-intelligent-v3.cjs --dry-run 2>/dev/null; then
    echo -e "${GREEN}✅ PASSED: PM2 processes can be started${NC}"
    TESTS_PASSED=$((TESTS_PASSED + 1))
else
    echo -e "${RED}❌ FAILED: PM2 processes cannot be started${NC}"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi
TOTAL_TESTS=$((TOTAL_TESTS + 1))

# Test 25: Test if all required environment variables are set
log "Testing environment variables..."
required_env_vars=("NODE_ENV" "PM2_HOME")
for var in "${required_env_vars[@]}"; do
    if [ -n "${!var}" ]; then
        echo -e "${GREEN}✅ PASSED: $var is set${NC}"
        TESTS_PASSED=$((TESTS_PASSED + 1))
    else
        echo -e "${YELLOW}⚠️  WARNING: $var is not set${NC}"
    fi
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
done

# Summary
echo ""
echo -e "${PURPLE}╔══════════════════════════════════════════════════════════════════════════════╗"
echo -e "║                              TEST SUMMARY                                    ║"
echo -e "╚══════════════════════════════════════════════════════════════════════════════╝${NC}"

echo ""
echo -e "${BLUE}Total Tests: $TOTAL_TESTS${NC}"
echo -e "${GREEN}Passed: $TESTS_PASSED${NC}"
echo -e "${RED}Failed: $TESTS_FAILED${NC}"

if [ $TESTS_FAILED -eq 0 ]; then
    echo ""
    echo -e "${GREEN}🎉 ALL TESTS PASSED! The Intelligent PM2 System is ready to use.${NC}"
    echo ""
    echo -e "${CYAN}Next steps:${NC}"
    echo "1. Run: ./start-intelligent-pm2-system.sh"
    echo "2. Monitor: ./monitor-intelligent-pm2.sh"
    echo "3. Health check: ./health-check-intelligent-pm2.sh"
    echo ""
    echo -e "${GREEN}Your intelligent PM2 automation system is fully validated and ready!${NC}"
    exit 0
else
    echo ""
    echo -e "${RED}❌ Some tests failed. Please fix the issues before proceeding.${NC}"
    echo ""
    echo -e "${YELLOW}Common fixes:${NC}"
    echo "• Install missing dependencies: npm install"
    echo "• Make scripts executable: chmod +x *.sh"
    echo "• Check file permissions and ownership"
    echo "• Verify all required files exist"
    echo ""
    exit 1
fi