#!/bin/bash

# Zion Automation Test Script
# Tests all PM2 automation processes

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_FILE="$PROJECT_ROOT/reports/automation-test.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    local message="$1"
    local level="${2:-INFO}"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] [TEST-$level] $message" | tee -a "$LOG_FILE"
}

# Test PM2 status
test_pm2_status() {
    log "Testing PM2 status..."
    
    if command -v pm2 > /dev/null 2>&1; then
        log "PM2 is available" "INFO"
        
        # Get PM2 list
        local pm2_list=$(pm2 list 2>/dev/null)
        if [ $? -eq 0 ]; then
            log "PM2 list command successful" "INFO"
            
            # Count online processes
            local online_count=$(echo "$pm2_list" | grep -c "online")
            local total_count=$(echo "$pm2_list" | grep -c "cluster")
            
            log "PM2 Processes: $online_count/$total_count online" "INFO"
            
            if [ "$online_count" -gt 0 ]; then
                return 0
            else
                log "No PM2 processes are online" "ERROR"
                return 1
            fi
        else
            log "PM2 list command failed" "ERROR"
            return 1
        fi
    else
        log "PM2 is not available" "ERROR"
        return 1
    fi
}

# Test automation processes
test_automation_processes() {
    log "Testing automation processes..."
    
    local processes=(
        "build-automation"
        "build-health-monitor"
        "code-quality-monitor"
        "dependency-monitor"
        "file-integrity-monitor"
        "project-health-monitor"
        "typescript-syntax-fixer"
        "dependency-manager"
        "project-health-dashboard"
    )
    
    local success_count=0
    local total_count=${#processes[@]}
    
    for process in "${processes[@]}"; do
        if pm2 describe "$process" > /dev/null 2>&1; then
            local status=$(pm2 jlist | jq -r ".[] | select(.name == \"$process\") | .pm2_env.status" 2>/dev/null)
            if [ "$status" = "online" ]; then
                log "✓ $process: ONLINE" "INFO"
                ((success_count++))
            else
                log "✗ $process: $status" "WARN"
            fi
        else
            log "✗ $process: NOT FOUND" "ERROR"
        fi
    done
    
    log "Automation Processes: $success_count/$total_count online" "INFO"
    
    if [ "$success_count" -eq "$total_count" ]; then
        return 0
    else
        return 1
    fi
}

# Test automation scripts
test_automation_scripts() {
    log "Testing automation scripts..."
    
    local scripts=(
        "automation/health-check.sh"
        "automation/automation-controller.sh"
        "scripts/automation/project-health-monitor.cjs"
        "scripts/automation/typescript-syntax-fixer.cjs"
        "scripts/automation/dependency-manager.cjs"
        "scripts/automation/project-health-dashboard.cjs"
    )
    
    local success_count=0
    local total_count=${#scripts[@]}
    
    for script in "${scripts[@]}"; do
        if [ -f "$PROJECT_ROOT/$script" ]; then
            if [ -r "$PROJECT_ROOT/$script" ]; then
                log "✓ $script: EXISTS and READABLE" "INFO"
                ((success_count++))
            else
                log "✗ $script: EXISTS but NOT READABLE" "ERROR"
            fi
        else
            log "✗ $script: NOT FOUND" "ERROR"
        fi
    done
    
    log "Automation Scripts: $success_count/$total_count accessible" "INFO"
    
    if [ "$success_count" -eq "$total_count" ]; then
        return 0
    else
        return 1
    fi
}

# Test log files
test_log_files() {
    log "Testing log files..."
    
    local log_dir="$PROJECT_ROOT/automation/logs"
    local reports_dir="$PROJECT_ROOT/reports"
    
    local success_count=0
    local total_count=0
    
    # Check automation logs
    if [ -d "$log_dir" ]; then
        local log_files=($(find "$log_dir" -name "*.log" -type f 2>/dev/null))
        total_count=$((total_count + ${#log_files[@]}))
        
        for log_file in "${log_files[@]}"; do
            if [ -r "$log_file" ]; then
                local size=$(stat -f%z "$log_file" 2>/dev/null || stat -c%s "$log_file" 2>/dev/null || echo 0)
                if [ "$size" -gt 0 ]; then
                    log "✓ $(basename "$log_file"): $size bytes" "INFO"
                    ((success_count++))
                else
                    log "⚠ $(basename "$log_file"): empty" "WARN"
                fi
            else
                log "✗ $(basename "$log_file"): not readable" "ERROR"
            fi
        done
    fi
    
    # Check reports
    if [ -d "$reports_dir" ]; then
        local report_files=($(find "$reports_dir" -name "*.json" -type f 2>/dev/null))
        total_count=$((total_count + ${#report_files[@]}))
        
        for report_file in "${report_files[@]}"; do
            if [ -r "$report_file" ]; then
                local size=$(stat -f%z "$report_file" 2>/dev/null || stat -c%s "$report_file" 2>/dev/null || echo 0)
                if [ "$size" -gt 0 ]; then
                    log "✓ $(basename "$report_file"): $size bytes" "INFO"
                    ((success_count++))
                else
                    log "⚠ $(basename "$report_file"): empty" "WARN"
                fi
            else
                log "✗ $(basename "$report_file"): not readable" "ERROR"
            fi
        done
    fi
    
    log "Log Files: $success_count/$total_count accessible" "INFO"
    
    if [ "$total_count" -gt 0 ]; then
        return 0
    else
        return 1
    fi
}

# Test dependencies
test_dependencies() {
    log "Testing dependencies..."
    
    local dependencies=(
        "node"
        "npm"
        "pm2"
        "node-cron"
    )
    
    local success_count=0
    local total_count=${#dependencies[@]}
    
    for dep in "${dependencies[@]}"; do
        if command -v "$dep" > /dev/null 2>&1; then
            local version=$("$dep" --version 2>/dev/null | head -1)
            log "✓ $dep: $version" "INFO"
            ((success_count++))
        else
            log "✗ $dep: NOT FOUND" "ERROR"
        fi
    done
    
    log "Dependencies: $success_count/$total_count available" "INFO"
    
    if [ "$success_count" -eq "$total_count" ]; then
        return 0
    else
        return 1
    fi
}

# Generate test report
generate_test_report() {
    local timestamp=$(date -Iseconds)
    local overall_status="healthy"
    
    # Determine overall status
    if [ $1 -eq 0 ] && [ $2 -eq 0 ] && [ $3 -eq 0 ] && [ $4 -eq 0 ] && [ $5 -eq 0 ]; then
        overall_status="healthy"
    else
        overall_status="unhealthy"
    fi
    
    cat > "$PROJECT_ROOT/reports/automation-test.json" << EOF
{
  "timestamp": "$timestamp",
  "overall_status": "$overall_status",
  "test_results": {
    "pm2_status": $1,
    "automation_processes": $2,
    "automation_scripts": $3,
    "log_files": $4,
    "dependencies": $5
  },
  "summary": {
    "total_tests": 5,
    "passed_tests": $(($5 - $1 - $2 - $3 - $4)),
    "failed_tests": $(($1 + $2 + $3 + $4 + $5))
  }
}
EOF

    log "Test report generated: $PROJECT_ROOT/reports/automation-test.json" "INFO"
    
    # Display summary
    echo ""
    echo -e "${BLUE}🧪 Automation Test Summary${NC}"
    if [ "$overall_status" = "healthy" ]; then
        echo -e "  Overall Status: ${GREEN}${overall_status^^}${NC}"
    else
        echo -e "  Overall Status: ${RED}${overall_status^^}${NC}"
    fi
    echo -e "  Total Tests: 5"
    echo -e "  Passed: ${GREEN}$(($5 - $1 - $2 - $3 - $4))${NC}"
    echo -e "  Failed: ${RED}$(($1 + $2 + $3 + $4 + $5))${NC}"
    echo ""
}

# Main function
main() {
    log "🧪 Starting automation tests..." "INFO"
    
    # Ensure reports directory exists
    mkdir -p "$PROJECT_ROOT/reports"
    
    # Run all tests
    local pm2_result=0
    local processes_result=0
    local scripts_result=0
    local logs_result=0
    local deps_result=0
    
    test_pm2_status || pm2_result=1
    test_automation_processes || processes_result=1
    test_automation_scripts || scripts_result=1
    test_log_files || logs_result=1
    test_dependencies || deps_result=1
    
    # Generate report
    generate_test_report $pm2_result $processes_result $scripts_result $logs_result $deps_result
    
    # Exit with appropriate code
    if [ "$overall_status" = "healthy" ]; then
        log "✅ All automation tests passed" "INFO"
        exit 0
    else
        log "❌ Some automation tests failed" "WARN"
        exit 1
    fi
}

# Run main function
main "$@"
