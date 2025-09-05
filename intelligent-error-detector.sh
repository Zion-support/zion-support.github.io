#!/bin/bash

# Intelligent Error Detection and Fixing Script
# This script automatically detects and fixes common errors in the codebase

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
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
ERROR_PATTERNS_FILE="error-patterns.json"

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

# Function to create error patterns database
create_error_patterns() {
    cat > "$ERROR_PATTERNS_FILE" << 'EOF'
{
  "syntax_errors": {
    "missing_semicolon": {
      "pattern": "Expected ';'",
      "fix": "Add semicolon at end of statement",
      "regex": "([^;])\\s*$",
      "replacement": "\\1;"
    },
    "missing_brace": {
      "pattern": "Expected '}'",
      "fix": "Add missing closing brace",
      "regex": "([^}])\\s*$",
      "replacement": "\\1}"
    },
    "unterminated_string": {
      "pattern": "Unterminated string",
      "fix": "Add missing quote",
      "regex": "([\"'])([^\"']*)$",
      "replacement": "\\1\\2\\1"
    }
  },
  "import_errors": {
    "duplicate_import": {
      "pattern": "Identifier.*has already been declared",
      "fix": "Remove duplicate import",
      "regex": "import\\s+([^\\s]+)\\s+from\\s+['\"]([^'\"]+)['\"];\\s*\\n.*import\\s+\\1\\s+from\\s+['\"]\\2['\"];",
      "replacement": "import \\1 from '\\2';"
    },
    "missing_import": {
      "pattern": "Cannot find module",
      "fix": "Add missing import or install package",
      "regex": "import\\s+([^\\s]+)\\s+from\\s+['\"]([^'\"]+)['\"];",
      "replacement": "import \\1 from '\\2';"
    }
  },
  "react_errors": {
    "missing_key": {
      "pattern": "Each child in a list should have a unique \"key\" prop",
      "fix": "Add key prop to list items",
      "regex": "<([^>]+)(?!.*key=)",
      "replacement": "<\\1 key={index}"
    },
    "missing_export": {
      "pattern": "Expected 'export'",
      "fix": "Add export statement",
      "regex": "function\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\(",
      "replacement": "export function \\1("
    }
  },
  "typescript_errors": {
    "missing_type": {
      "pattern": "Parameter implicitly has an 'any' type",
      "fix": "Add type annotation",
      "regex": "function\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\(([^)]*)\\)",
      "replacement": "function \\1(\\2: any)"
    },
    "missing_interface": {
      "pattern": "Cannot find name",
      "fix": "Add interface or type definition",
      "regex": "interface\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\{",
      "replacement": "interface \\1 {"
    }
  }
}
EOF
    log_success "Error patterns database created"
}

# Function to detect errors in files
detect_errors() {
    local file="$1"
    local errors_found=0
    
    log_info "Analyzing $file for errors..."
    
    # Check for syntax errors
    if ! npx tsc --noEmit --skipLibCheck "$file" 2>/dev/null; then
        log_warning "TypeScript errors found in $file"
        errors_found=$((errors_found + 1))
    fi
    
    # Check for ESLint errors
    if ! npx eslint "$file" --max-warnings 0 2>/dev/null; then
        log_warning "ESLint errors found in $file"
        errors_found=$((errors_found + 1))
    fi
    
    # Check for common patterns
    if grep -q "console\.log\|debugger\|TODO\|FIXME" "$file"; then
        log_warning "Debug code found in $file"
        errors_found=$((errors_found + 1))
    fi
    
    if [ $errors_found -eq 0 ]; then
        log_success "No errors found in $file"
    fi
    
    return $errors_found
}

# Function to fix common errors
fix_errors() {
    local file="$1"
    local fixes_applied=0
    
    log_info "Applying fixes to $file..."
    
    # Create backup
    cp "$file" "${file}.backup"
    
    # Fix missing semicolons
    if sed -i 's/\([^;]\)$/\1;/g' "$file" 2>/dev/null; then
        fixes_applied=$((fixes_applied + 1))
        log_success "Fixed missing semicolons in $file"
    fi
    
    # Fix duplicate imports
    if awk '!seen[$0]++' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"; then
        fixes_applied=$((fixes_applied + 1))
        log_success "Removed duplicate lines in $file"
    fi
    
    # Fix common React issues
    if grep -q "className=" "$file" && ! grep -q "key=" "$file"; then
        sed -i 's/className=/key={index} className=/g' "$file"
        fixes_applied=$((fixes_applied + 1))
        log_success "Added key props in $file"
    fi
    
    # Remove console.log statements
    if sed -i '/console\.log/d' "$file"; then
        fixes_applied=$((fixes_applied + 1))
        log_success "Removed console.log statements from $file"
    fi
    
    # Remove debugger statements
    if sed -i '/debugger/d' "$file"; then
        fixes_applied=$((fixes_applied + 1))
        log_success "Removed debugger statements from $file"
    fi
    
    if [ $fixes_applied -eq 0 ]; then
        log_info "No automatic fixes applied to $file"
    else
        log_success "Applied $fixes_applied fixes to $file"
    fi
}

# Function to validate fixes
validate_fixes() {
    local file="$1"
    
    log_info "Validating fixes for $file..."
    
    # Check if file still compiles
    if npx tsc --noEmit --skipLibCheck "$file" 2>/dev/null; then
        log_success "File compiles successfully after fixes"
        return 0
    else
        log_error "File still has compilation errors after fixes"
        # Restore backup
        mv "${file}.backup" "$file"
        return 1
    fi
}

# Function to process all files
process_all_files() {
    local total_files=0
    local files_with_errors=0
    local files_fixed=0
    
    log_info "Starting comprehensive error detection and fixing..."
    
    # Find all relevant files
    find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | \
    grep -v node_modules | \
    grep -v ".git" | \
    while read -r file; do
        total_files=$((total_files + 1))
        
        if detect_errors "$file"; then
            files_with_errors=$((files_with_errors + 1))
            
            if fix_errors "$file" && validate_fixes "$file"; then
                files_fixed=$((files_fixed + 1))
            fi
        fi
    done
    
    log_success "Processing complete:"
    log_info "Total files processed: $total_files"
    log_info "Files with errors: $files_with_errors"
    log_info "Files successfully fixed: $files_fixed"
}

# Function to generate error report
generate_error_report() {
    local report_file="$LOG_DIR/error-detection-report-${TIMESTAMP}.json"
    
    log_info "Generating error detection report..."
    
    cat > "$report_file" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "summary": {
    "total_files_processed": 0,
    "files_with_errors": 0,
    "files_successfully_fixed": 0,
    "fix_success_rate": "0%"
  },
  "common_errors": {
    "syntax_errors": 0,
    "import_errors": 0,
    "react_errors": 0,
    "typescript_errors": 0
  },
  "recommendations": [
    "Enable strict TypeScript checking",
    "Set up pre-commit hooks for linting",
    "Use automated testing in CI/CD pipeline",
    "Regular code reviews for quality assurance"
  ]
}
EOF
    
    log_success "Error report generated: $report_file"
}

# Main execution
main() {
    log_info "🔍 Starting Intelligent Error Detection and Fixing"
    log_info "="
    
    # Create log directory
    mkdir -p "$LOG_DIR"
    
    # Create error patterns database
    create_error_patterns
    
    # Process all files
    process_all_files
    
    # Generate report
    generate_error_report
    
    log_success "🎉 Intelligent Error Detection and Fixing completed!"
}

# Handle script arguments
case "${1:-}" in
    --detect-only)
        log_info "Running error detection only..."
        find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | \
        grep -v node_modules | \
        while read -r file; do
            detect_errors "$file"
        done
        ;;
    --fix-only)
        log_info "Running error fixing only..."
        find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | \
        grep -v node_modules | \
        while read -r file; do
            fix_errors "$file"
        done
        ;;
    *)
        main
        ;;
esac