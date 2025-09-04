#!/usr/bin/env bash
set -euo pipefail

# Automation Orchestrator for Zion Tech Group
# This script coordinates all automation tasks and provides a unified interface

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
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/orchestrator.log"
}

# Function to run a script safely
run_script() {
    local script_name=$1
    local script_path=$2
    local description=$3
    
    log "Running $description..."
    if [ -f "$script_path" ]; then
        if bash "$script_path" >> "$LOG_DIR/orchestrator.log" 2>&1; then
            print_status "success" "$description completed successfully"
            return 0
        else
            print_status "error" "$description failed"
            return 1
        fi
    else
        print_status "warning" "$script_path not found, skipping $description"
        return 1
    fi
}

# Function to check system health
check_system_health() {
    log "Checking system health..."
    
    # Check disk space
    local disk_usage=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
    if [ "$disk_usage" -lt 90 ]; then
        print_status "success" "Disk space OK ($disk_usage% used)"
    else
        print_status "warning" "Disk space low ($disk_usage% used)"
    fi
    
    # Check memory
    local mem_usage=$(free | awk 'NR==2{printf "%.0f", $3*100/$2}')
    if [ "$mem_usage" -lt 90 ]; then
        print_status "success" "Memory usage OK ($mem_usage% used)"
    else
        print_status "warning" "Memory usage high ($mem_usage% used)"
    fi
    
    # Check if Node.js is available
    if command -v node >/dev/null 2>&1; then
        print_status "success" "Node.js available: $(node --version)"
    else
        print_status "error" "Node.js not found"
        return 1
    fi
    
    # Check if npm is available
    if command -v npm >/dev/null 2>&1; then
        print_status "success" "npm available: $(npm --version)"
    else
        print_status "error" "npm not found"
        return 1
    fi
}

# Function to run all automations
run_all_automations() {
    log "Starting comprehensive automation pipeline..."
    
    local failed_scripts=()
    local successful_scripts=()
    
    # List of scripts to run
    declare -A scripts=(
        ["comprehensive-build-test.sh"]="Comprehensive Build and Test"
        ["health-check.sh"]="Health Check"
        ["automation-suite.sh"]="Automation Suite"
    )
    
    for script in "${!scripts[@]}"; do
        if run_script "$script" "scripts/$script" "${scripts[$script]}"; then
            successful_scripts+=("$script")
        else
            failed_scripts+=("$script")
        fi
    done
    
    # Summary
    log "Automation pipeline completed"
    print_status "info" "Successful scripts: ${#successful_scripts[@]}"
    print_status "info" "Failed scripts: ${#failed_scripts[@]}"
    
    if [ ${#failed_scripts[@]} -gt 0 ]; then
        print_status "warning" "Failed scripts: ${failed_scripts[*]}"
    fi
    
    return ${#failed_scripts[@]}
}

# Function to generate automation report
generate_report() {
    local report_file="$LOG_DIR/automation-report-$(date +%Y%m%d-%H%M%S).json"
    
    log "Generating automation report..."
    
    cat > "$report_file" << EOF
{
  "timestamp": "$(date -Iseconds)",
  "system_info": {
    "node_version": "$(node --version 2>/dev/null || echo 'not available')",
    "npm_version": "$(npm --version 2>/dev/null || echo 'not available')",
    "disk_usage": "$(df / | awk 'NR==2 {print $5}' | sed 's/%//')%",
    "memory_usage": "$(free | awk 'NR==2{printf "%.0f", $3*100/$2}')%"
  },
  "automation_status": {
    "build_status": "$(npm run build >/dev/null 2>&1 && echo 'success' || echo 'failed')",
    "lint_status": "$(npm run lint >/dev/null 2>&1 && echo 'success' || echo 'failed')",
    "type_check_status": "$(npm run type-check >/dev/null 2>&1 && echo 'success' || echo 'failed')"
  },
  "log_files": [
    "$(ls -1 $LOG_DIR/*.log 2>/dev/null | tr '\n' ',' | sed 's/,$//' || echo 'none')"
  ]
}
EOF
    
    print_status "success" "Report generated: $report_file"
}

# Main function
main() {
    local command=${1:-"all"}
    
    echo "🤖 Zion Tech Group Automation Orchestrator"
    echo "=========================================="
    
    case $command in
        "health")
            check_system_health
            ;;
        "build")
            run_script "comprehensive-build-test.sh" "scripts/comprehensive-build-test.sh" "Build and Test"
            ;;
        "all")
            check_system_health
            run_all_automations
            generate_report
            ;;
        "report")
            generate_report
            ;;
        *)
            echo "Usage: $0 {health|build|all|report}"
            echo ""
            echo "Commands:"
            echo "  health  - Check system health"
            echo "  build   - Run build and test pipeline"
            echo "  all     - Run all automations (default)"
            echo "  report  - Generate automation report"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"