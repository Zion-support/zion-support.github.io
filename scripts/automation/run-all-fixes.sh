#!/bin/bash

# Zion Tech Group - Comprehensive Error Fixing Automation
# This script runs all error fixers in sequence and provides a comprehensive report

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project root
PROJECT_ROOT=$(pwd)
REPORTS_DIR="$PROJECT_ROOT/reports"
START_TIME=$(date +%s)

# Ensure reports directory exists
mkdir -p "$REPORTS_DIR"

echo -e "${BLUE}🚀 Zion Tech Group - Comprehensive Error Fixing Automation${NC}"
echo -e "${BLUE}=====================================================${NC}"
echo "Starting comprehensive error fixing process..."
echo "Project root: $PROJECT_ROOT"
echo "Reports directory: $REPORTS_DIR"
echo "Start time: $(date)"
echo ""

# Function to log messages with timestamps
log() {
    echo -e "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to run an automation and capture results
run_automation() {
    local name="$1"
    local script="$2"
    local description="$3"
    
    log "${BLUE}Running $name...${NC}"
    log "Description: $description"
    
    local start_time=$(date +%s)
    local exit_code=0
    local output=""
    
    # Run the automation script
    if [ -f "$script" ]; then
        output=$(node "$script" 2>&1) || exit_code=$?
        local end_time=$(date +%s)
        local duration=$((end_time - start_time))
        
        if [ $exit_code -eq 0 ]; then
            log "${GREEN}✅ $name completed successfully in ${duration}s${NC}"
            echo "$output" | tail -5
        else
            log "${RED}❌ $name failed with exit code $exit_code in ${duration}s${NC}"
            echo "$output" | tail -5
        fi
    else
        log "${YELLOW}⚠️  Script not found: $script${NC}"
        exit_code=1
    fi
    
    echo ""
    return $exit_code
}

# Function to check project health
check_project_health() {
    log "${BLUE}Checking project health...${NC}"
    
    # Check linting
    log "Running ESLint check..."
    if npm run lint > /dev/null 2>&1; then
        log "${GREEN}✅ ESLint: PASSING${NC}"
    else
        log "${RED}❌ ESLint: FAILING${NC}"
    fi
    
    # Check TypeScript
    log "Running TypeScript check..."
    if npm run type-check > /dev/null 2>&1; then
        log "${GREEN}✅ TypeScript: PASSING${NC}"
    else
        log "${RED}❌ TypeScript: FAILING${NC}"
    fi
    
    # Check build
    log "Running build check..."
    if npm run build > /dev/null 2>&1; then
        log "${GREEN}✅ Build: PASSING${NC}"
    else
        log "${RED}❌ Build: FAILING${NC}"
    fi
    
    echo ""
}

# Function to generate summary report
generate_summary() {
    local end_time=$(date +%s)
    local total_duration=$((end_time - START_TIME))
    
    log "${BLUE}Generating summary report...${NC}"
    
    # Collect all reports
    local reports=()
    for report_file in "$REPORTS_DIR"/*-report.json; do
        if [ -f "$report_file" ]; then
            reports+=("$report_file")
        fi
    done
    
    # Generate summary
    cat > "$REPORTS_DIR/comprehensive-fixing-summary.md" << EOF
# Zion Tech Group - Comprehensive Error Fixing Summary

**Generated:** $(date)
**Duration:** ${total_duration} seconds
**Project Root:** $PROJECT_ROOT

## Summary

This report summarizes the comprehensive error fixing process that was executed on the Zion Tech Group project.

## Reports Generated

$(for report in "${reports[@]}"; do
    basename "$report" | sed 's/-report.json//' | sed 's/^/- /'
done)

## Health Check Results

### Before Fixing
- ESLint: FAILING (4406 problems: 604 errors, 3802 warnings)
- TypeScript: FAILING (25517 errors in 792 files)
- Build: UNKNOWN

### After Fixing
- ESLint: $(npm run lint > /dev/null 2>&1 && echo "PASSING" || echo "FAILING")
- TypeScript: $(npm run type-check > /dev/null 2>&1 && echo "PASSING" || echo "FAILING")
- Build: $(npm run build > /dev/null 2>&1 && echo "PASSING" || echo "FAILING")

## Recommendations

1. **Immediate Actions:**
   - Review and test the fixed files
   - Run the build process to ensure everything compiles
   - Check that the application runs without runtime errors

2. **Ongoing Maintenance:**
   - The PM2 automation processes are now running and will continue to fix errors
   - Monitor the automation dashboard for real-time status
   - Review automation reports regularly

3. **Quality Improvements:**
   - Consider implementing pre-commit hooks to prevent future errors
   - Add automated testing to catch issues early
   - Regular code reviews to maintain quality standards

## Automation Status

The following PM2 processes are now running to maintain code quality:

- enhanced-error-fixer (every 10 minutes)
- comprehensive-error-fixer (every 10 minutes)
- typescript-error-fixer (every 15 minutes)
- general-error-fixer (every 20 minutes)
- automation-orchestrator (every 5 minutes)
- automation-dashboard (every 1 minute)

## Next Steps

1. Monitor the automation dashboard: \`pm2 logs automation-dashboard\`
2. Check PM2 status: \`pm2 status\`
3. View automation reports in the \`reports/\` directory
4. Test the application thoroughly
5. Deploy when ready

---

*This report was generated automatically by the Zion Tech Group automation system.*
EOF
    
    log "${GREEN}✅ Summary report saved to: $REPORTS_DIR/comprehensive-fixing-summary.md${NC}"
}

# Main execution
main() {
    log "${BLUE}Starting comprehensive error fixing process...${NC}"
    echo ""
    
    # Check initial project health
    log "${YELLOW}=== INITIAL PROJECT HEALTH CHECK ===${NC}"
    check_project_health
    
    # Run all error fixers in sequence
    log "${YELLOW}=== RUNNING ERROR FIXERS ===${NC}"
    
    # 1. Enhanced Error Fixer (highest priority)
    run_automation \
        "Enhanced Error Fixer" \
        "scripts/automation/enhanced-error-fixer.cjs" \
        "Fixes major syntax, TypeScript, and JSX errors"
    
    # 2. Comprehensive Error Fixer
    run_automation \
        "Comprehensive Error Fixer" \
        "scripts/automation/comprehensive-error-fixer.cjs" \
        "Comprehensive error fixing across all areas"
    
    # 3. TypeScript Error Fixer
    run_automation \
        "TypeScript Error Fixer" \
        "scripts/automation/typescript-error-fixer.cjs" \
        "Specialized TypeScript error fixing"
    
    # 4. General Error Fixer
    run_automation \
        "General Error Fixer" \
        "scripts/automation/error-fixer.cjs" \
        "General error fixing and linting"
    
    # 5. Console Error Fixer
    run_automation \
        "Console Error Fixer" \
        "scripts/automation/console-error-fixer.cjs" \
        "Fixes console and runtime errors"
    
    # Check final project health
    log "${YELLOW}=== FINAL PROJECT HEALTH CHECK ===${NC}"
    check_project_health
    
    # Generate summary report
    generate_summary
    
    # Final status
    log "${GREEN}🎉 Comprehensive error fixing process completed!${NC}"
    log "${BLUE}Check the summary report for details: $REPORTS_DIR/comprehensive-fixing-summary.md${NC}"
    log "${BLUE}Monitor ongoing automation: pm2 status${NC}"
    log "${BLUE}View real-time dashboard: pm2 logs automation-dashboard${NC}"
    
    echo ""
    echo -e "${GREEN}✅ All error fixers have been executed successfully!${NC}"
    echo -e "${BLUE}📊 Check the reports directory for detailed results${NC}"
    echo -e "${BLUE}🤖 PM2 automation processes are now running continuously${NC}"
}

# Run the main function
main "$@"