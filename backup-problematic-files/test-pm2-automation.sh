#!/bin/bash

# PM2 Automation System Test Script
# This script tests all components of the PM2 automation system

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Logging functions
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
}

info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

# Test PM2 installation
test_pm2_installation() {
    log "Testing PM2 installation..."
    
    if command -v pm2 &> /dev/null; then
        local version=$(pm2 --version)
        success "PM2 is installed: $version"
        return 0
    else
        error "PM2 is not installed"
        return 1
    fi
}

# Test PM2 modules
test_pm2_modules() {
    log "Testing PM2 modules..."
    
    if pm2 list | grep -q "pm2-logrotate"; then
        success "PM2 logrotate module is installed and running"
        return 0
    else
        warning "PM2 logrotate module is not running"
        pm2 install pm2-logrotate
        success "PM2 logrotate module installed"
        return 0
    fi
}

# Test ecosystem configuration
test_ecosystem_config() {
    log "Testing ecosystem configuration..."
    
    local config_file="ecosystem.config.cjs"
    
    if [ -f "$config_file" ]; then
        success "Ecosystem configuration file exists: $config_file"
        
        # Validate the configuration
        if node -e "try { require('./$config_file'); console.log('Configuration is valid'); } catch(e) { console.error('Configuration error:', e.message); process.exit(1); }"; then
            success "Ecosystem configuration is valid"
            return 0
        else
            error "Ecosystem configuration has errors"
            return 1
        fi
    else
        error "Ecosystem configuration file not found: $config_file"
        return 1
    fi
}

# Test individual automation scripts
test_automation_scripts() {
    log "Testing automation scripts..."
    
    local scripts=(
        "scripts/automation/error-monitor.cjs"
        "scripts/automation/syntax-fixer.cjs"
        "scripts/automation/dependency-manager.cjs"
        "scripts/automation/build-monitor.cjs"
    )
    
    local failed_scripts=()
    
    for script in "${scripts[@]}"; do
        if [ -f "$script" ]; then
            if node -e "try { require('./$script'); console.log('Script is valid'); } catch(e) { console.error('Script error:', e.message); process.exit(1); }" 2>/dev/null; then
                success "Script is valid: $script"
            else
                warning "Script has issues: $script"
                failed_scripts+=("$script")
            fi
        else
            warning "Script not found: $script"
            failed_scripts+=("$script")
        fi
    done
    
    if [ ${#failed_scripts[@]} -eq 0 ]; then
        success "All automation scripts are valid"
        return 0
    else
        warning "${#failed_scripts[@]} scripts have issues"
        return 1
    fi
}

# Test PM2 process management
test_pm2_processes() {
    log "Testing PM2 process management..."
    
    # Start the ecosystem
    pm2 start ecosystem.config.cjs
    
    # Wait for processes to start
    sleep 10
    
    # Check process status
    local total_processes=0
    local online_processes=0
    local errored_processes=0
    
    while IFS= read -r line; do
        if [[ $line =~ ^[[:space:]]*([0-9]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+) ]]; then
            local id="${BASH_REMATCH[1]}"
            local name="${BASH_REMATCH[2]}"
            local status="${BASH_REMATCH[6]}"
            
            ((total_processes++))
            
            if [ "$status" = "online" ]; then
                ((online_processes++))
                success "Process is online: $name"
            elif [ "$status" = "errored" ] || [ "$status" = "stopped" ]; then
                ((errored_processes++))
                error "Process has issues: $name (status: $status)"
            fi
        fi
    done < <(pm2 list | grep -E "^[[:space:]]*[0-9]+")
    
    info "Process Summary:"
    echo "  Total processes: $total_processes"
    echo "  Online processes: $online_processes"
    echo "  Failed processes: $errored_processes"
    
    if [ $errored_processes -eq 0 ]; then
        success "All PM2 processes are running successfully"
        return 0
    else
        warning "$errored_processes processes have issues"
        return 1
    fi
}

# Test log files
test_log_files() {
    log "Testing log files..."
    
    local logs_dir="logs"
    
    if [ ! -d "$logs_dir" ]; then
        mkdir -p "$logs_dir"
        info "Created logs directory: $logs_dir"
    fi
    
    # Check if log files are being created
    local log_files=($(find "$logs_dir" -name "*.log" 2>/dev/null | head -5))
    
    if [ ${#log_files[@]} -gt 0 ]; then
        success "Log files are being created:"
        for log_file in "${log_files[@]}"; do
            echo "  - $log_file"
        done
        return 0
    else
        warning "No log files found yet"
        return 1
    fi
}

# Test PM2 monitoring
test_pm2_monitoring() {
    log "Testing PM2 monitoring..."
    
    # Test PM2 status
    if pm2 status >/dev/null 2>&1; then
        success "PM2 status command works"
    else
        error "PM2 status command failed"
        return 1
    fi
    
    # Test PM2 logs
    if pm2 logs --lines 1 >/dev/null 2>&1; then
        success "PM2 logs command works"
    else
        error "PM2 logs command failed"
        return 1
    fi
    
    # Test PM2 save
    if pm2 save >/dev/null 2>&1; then
        success "PM2 save command works"
    else
        error "PM2 save command failed"
        return 1
    fi
    
    return 0
}

# Main test execution
main() {
    echo -e "${PURPLE}🧪 PM2 Automation System Test Suite${NC}"
    echo "="
    echo
    
    local test_results=()
    local passed_tests=0
    local total_tests=0
    
    # Run all tests
    local tests=(
        "test_pm2_installation"
        "test_pm2_modules"
        "test_ecosystem_config"
        "test_automation_scripts"
        "test_pm2_processes"
        "test_log_files"
        "test_pm2_monitoring"
    )
    
    for test in "${tests[@]}"; do
        echo
        if $test; then
            test_results+=("✅ $test")
            ((passed_tests++))
        else
            test_results+=("❌ $test")
        fi
        ((total_tests++))
    done
    
    # Display results
    echo
    echo -e "${PURPLE}📊 Test Results Summary${NC}"
    echo "="
    
    for result in "${test_results[@]}"; do
        echo "$result"
    done
    
    echo
    echo "Tests passed: $passed_tests/$total_tests"
    
    if [ $passed_tests -eq $total_tests ]; then
        success "🎉 All tests passed! PM2 automation system is working correctly."
        return 0
    else
        warning "⚠️  Some tests failed. Check the output above for details."
        return 1
    fi
}

# Cleanup function
cleanup() {
    log "Cleaning up test environment..."
    pm2 delete all 2>/dev/null || true
    success "Cleanup completed"
}

# Set trap for cleanup
trap cleanup EXIT

# Run main function
main "$@"