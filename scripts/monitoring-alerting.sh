#!/usr/bin/env bash
set -euo pipefail

# Monitoring and Alerting Script for Zion Tech Group
# This script monitors system health and sends alerts when issues are detected

cd "$(dirname "$0")/.."

LOG_DIR="automation-reports"
mkdir -p "$LOG_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ALERT_THRESHOLDS=(
    "disk_usage:90"
    "memory_usage:85"
    "cpu_usage:80"
    "build_time:300"
    "test_failure_rate:10"
)

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
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/monitoring.log"
}

# Function to get system metrics
get_system_metrics() {
    local metrics=()
    
    # Disk usage
    local disk_usage=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
    metrics+=("disk_usage:$disk_usage")
    
    # Memory usage
    local mem_usage=$(free | awk 'NR==2{printf "%.0f", $3*100/$2}')
    metrics+=("memory_usage:$mem_usage")
    
    # CPU usage (simplified)
    local cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | awk -F'%' '{print $1}')
    metrics+=("cpu_usage:$cpu_usage")
    
    # Build time (if .next exists)
    if [ -d ".next" ]; then
        local build_time=$(find .next -type f -name "*.js" -exec stat -c %Y {} \; | sort -n | tail -1)
        local current_time=$(date +%s)
        local build_age=$((current_time - build_time))
        metrics+=("build_age:$build_age")
    fi
    
    echo "${metrics[@]}"
}

# Function to check thresholds
check_thresholds() {
    local metrics=("$@")
    local alerts=()
    
    for threshold in "${ALERT_THRESHOLDS[@]}"; do
        local metric_name=$(echo "$threshold" | cut -d':' -f1)
        local threshold_value=$(echo "$threshold" | cut -d':' -f2)
        
        for metric in "${metrics[@]}"; do
            local name=$(echo "$metric" | cut -d':' -f1)
            local value=$(echo "$metric" | cut -d':' -f2)
            
            if [[ "$name" == "$metric_name" ]]; then
                if [ "$value" -gt "$threshold_value" ]; then
                    alerts+=("$metric_name:$value:$threshold_value")
                fi
            fi
        done
    done
    
    echo "${alerts[@]}"
}

# Function to send alert
send_alert() {
    local alert_type=$1
    local message=$2
    local severity=${3:-"warning"}
    
    log "ALERT [$severity]: $message"
    
    # In a real scenario, this would:
    # 1. Send email notifications
    # 2. Send Slack/Discord messages
    # 3. Create tickets in issue tracking system
    # 4. Send SMS for critical alerts
    
    case $severity in
        "critical")
            print_status "error" "CRITICAL ALERT: $message"
            ;;
        "warning")
            print_status "warning" "WARNING: $message"
            ;;
        "info")
            print_status "info" "INFO: $message"
            ;;
    esac
}

# Function to check application health
check_application_health() {
    log "Checking application health..."
    
    local health_issues=()
    
    # Check if build exists
    if [ ! -d ".next" ]; then
        health_issues+=("build_missing")
    fi
    
    # Check if package.json exists
    if [ ! -f "package.json" ]; then
        health_issues+=("package_json_missing")
    fi
    
    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        health_issues+=("node_modules_missing")
    fi
    
    # Check if build is recent (less than 24 hours old)
    if [ -d ".next" ]; then
        local build_time=$(find .next -type f -name "*.js" -exec stat -c %Y {} \; | sort -n | tail -1)
        local current_time=$(date +%s)
        local build_age=$((current_time - build_time))
        local max_age=86400 # 24 hours
        
        if [ "$build_age" -gt "$max_age" ]; then
            health_issues+=("build_stale")
        fi
    fi
    
    # Report health issues
    if [ ${#health_issues[@]} -gt 0 ]; then
        for issue in "${health_issues[@]}"; do
            case $issue in
                "build_missing")
                    send_alert "application" "Build directory (.next) is missing" "critical"
                    ;;
                "package_json_missing")
                    send_alert "application" "package.json is missing" "critical"
                    ;;
                "node_modules_missing")
                    send_alert "application" "node_modules directory is missing" "warning"
                    ;;
                "build_stale")
                    send_alert "application" "Build is older than 24 hours" "warning"
                    ;;
            esac
        done
        return 1
    else
        print_status "success" "Application health check passed"
        return 0
    fi
}

# Function to check build performance
check_build_performance() {
    log "Checking build performance..."
    
    if [ ! -d ".next" ]; then
        print_status "warning" "No build found, skipping performance check"
        return 0
    fi
    
    # Measure build size
    local build_size=$(du -sh .next 2>/dev/null | cut -f1)
    print_status "info" "Build size: $build_size"
    
    # Check for large files
    local large_files=$(find .next -type f -size +1M 2>/dev/null | wc -l)
    if [ "$large_files" -gt 0 ]; then
        send_alert "performance" "Found $large_files large files (>1MB) in build" "warning"
    fi
    
    # Check for duplicate files
    local duplicate_files=$(find .next -type f -name "*.js" | xargs md5sum | sort | uniq -d | wc -l)
    if [ "$duplicate_files" -gt 0 ]; then
        send_alert "performance" "Found $duplicate_files duplicate files in build" "warning"
    fi
    
    print_status "success" "Build performance check completed"
}

# Function to check security
check_security() {
    log "Checking security..."
    
    # Run npm audit
    if command -v npm >/dev/null 2>&1; then
        local audit_output
        if audit_output=$(npm audit --audit-level=moderate 2>&1); then
            print_status "success" "Security audit passed"
        else
            local vulnerabilities=$(echo "$audit_output" | grep -c "vulnerabilities" || echo "0")
            if [ "$vulnerabilities" -gt 0 ]; then
                send_alert "security" "Found $vulnerabilities security vulnerabilities" "critical"
            fi
        fi
    else
        print_status "warning" "npm not available for security audit"
    fi
    
    # Check for sensitive files
    local sensitive_files=(
        ".env"
        ".env.local"
        ".env.production"
        "config.json"
        "secrets.json"
    )
    
    for file in "${sensitive_files[@]}"; do
        if [ -f "$file" ]; then
            send_alert "security" "Sensitive file found: $file" "warning"
        fi
    done
    
    print_status "success" "Security check completed"
}

# Function to generate monitoring report
generate_monitoring_report() {
    local report_file="$LOG_DIR/monitoring-report-$(date +%Y%m%d-%H%M%S).json"
    
    log "Generating monitoring report..."
    
    local metrics
    metrics=($(get_system_metrics))
    
    local alerts
    alerts=($(check_thresholds "${metrics[@]}"))
    
    cat > "$report_file" << EOF
{
  "timestamp": "$(date -Iseconds)",
  "system_metrics": {
$(for metric in "${metrics[@]}"; do
    name=$(echo "$metric" | cut -d':' -f1)
    value=$(echo "$metric" | cut -d':' -f2)
    echo "    \"$name\": $value,"
done | sed '$ s/,$//')
  },
  "alerts": [
$(for alert in "${alerts[@]}"; do
    echo "    \"$alert\","
done | sed '$ s/,$//')
  ],
  "application_health": "$(check_application_health >/dev/null 2>&1 && echo 'healthy' || echo 'unhealthy')",
  "build_size": "$(du -sh .next 2>/dev/null | cut -f1 || echo 'unknown')",
  "node_version": "$(node --version 2>/dev/null || echo 'unknown')",
  "npm_version": "$(npm --version 2>/dev/null || echo 'unknown')"
}
EOF
    
    print_status "success" "Monitoring report generated: $report_file"
}

# Main function
main() {
    local command=${1:-"all"}
    
    echo "📊 Zion Tech Group Monitoring and Alerting"
    echo ""
    
    case $command in
        "metrics")
            log "Collecting system metrics..."
            get_system_metrics
            ;;
        "health")
            check_application_health
            ;;
        "performance")
            check_build_performance
            ;;
        "security")
            check_security
            ;;
        "alerts")
            log "Checking for alerts..."
            local metrics
            metrics=($(get_system_metrics))
            local alerts
            alerts=($(check_thresholds "${metrics[@]}"))
            if [ ${#alerts[@]} -gt 0 ]; then
                for alert in "${alerts[@]}"; do
                    local metric_name=$(echo "$alert" | cut -d':' -f1)
                    local value=$(echo "$alert" | cut -d':' -f2)
                    local threshold=$(echo "$alert" | cut -d':' -f3)
                    send_alert "threshold" "$metric_name is $value% (threshold: $threshold%)" "warning"
                done
            else
                print_status "success" "No alerts triggered"
            fi
            ;;
        "all")
            check_application_health
            check_build_performance
            check_security
            
            local metrics
            metrics=($(get_system_metrics))
            local alerts
            alerts=($(check_thresholds "${metrics[@]}"))
            
            if [ ${#alerts[@]} -gt 0 ]; then
                for alert in "${alerts[@]}"; do
                    local metric_name=$(echo "$alert" | cut -d':' -f1)
                    local value=$(echo "$alert" | cut -d':' -f2)
                    local threshold=$(echo "$alert" | cut -d':' -f3)
                    send_alert "threshold" "$metric_name is $value% (threshold: $threshold%)" "warning"
                done
            fi
            
            generate_monitoring_report
            ;;
        *)
            echo "Usage: $0 {metrics|health|performance|security|alerts|all}"
            echo ""
            echo "Commands:"
            echo "  metrics     - Collect system metrics"
            echo "  health      - Check application health"
            echo "  performance - Check build performance"
            echo "  security    - Run security checks"
            echo "  alerts      - Check for threshold alerts"
            echo "  all         - Run all monitoring checks (default)"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"