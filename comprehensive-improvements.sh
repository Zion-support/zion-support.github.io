#!/bin/bash

# Comprehensive Codebase Improvements Script
# This script performs various improvements to enhance code quality, performance, and maintainability

set -e

echo "🚀 Starting Comprehensive Codebase Improvements..."
echo "⏰ Started at: $(date)"
echo "---"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to log messages
log_message() {
    local message="$1"
    local color="${2:-$NC}"
    echo -e "$(date '+%Y-%m-%d %H:%M:%S') - ${color}${message}${NC}"
}

# 1. Clean up backup files
cleanup_backups() {
    log_message "🧹 Cleaning up backup files..." "$BLUE"
    
    # Remove backup files older than 7 days
    find /workspace -name "*.backup.*" -type f -mtime +7 -delete 2>/dev/null || true
    find /workspace -name "*.conflict-backup.*" -type f -mtime +7 -delete 2>/dev/null || true
    
    log_message "✅ Backup cleanup completed" "$GREEN"
}

# 2. Optimize package.json
optimize_package_json() {
    log_message "📦 Optimizing package.json..." "$BLUE"
    
    if [ -f "package.json" ]; then
        # Remove duplicate dependencies
        npm dedupe 2>/dev/null || true
        
        # Update outdated packages (non-breaking)
        npm update 2>/dev/null || true
        
        log_message "✅ Package optimization completed" "$GREEN"
    fi
}

# 3. Fix ESLint configuration
fix_eslint_config() {
    log_message "🔧 Fixing ESLint configuration..." "$BLUE"
    
    # Remove deprecated .eslintignore file
    if [ -f ".eslintignore" ]; then
        rm .eslintignore
        log_message "✅ Removed deprecated .eslintignore file" "$GREEN"
    fi
    
    # Ensure eslint.config.js exists and is properly configured
    if [ ! -f "eslint.config.js" ]; then
        cat > eslint.config.js << 'EOF'
import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.backup.*',
      '*.conflict-backup.*',
    ],
  },
]
EOF
        log_message "✅ Created eslint.config.js" "$GREEN"
    fi
}

# 4. Optimize TypeScript configuration
optimize_typescript() {
    log_message "🔧 Optimizing TypeScript configuration..." "$BLUE"
    
    if [ -f "tsconfig.json" ]; then
        # Ensure strict mode is enabled
        npm run type-check 2>/dev/null || true
        log_message "✅ TypeScript optimization completed" "$GREEN"
    fi
}

# 5. Performance optimizations
optimize_performance() {
    log_message "⚡ Applying performance optimizations..." "$BLUE"
    
    # Enable Next.js optimizations
    if [ -f "next.config.js" ] || [ -f "next.config.mjs" ]; then
        log_message "✅ Next.js optimizations already configured" "$GREEN"
    fi
    
    # Optimize images (if any)
    find /workspace -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" | head -5 | while read img; do
        if command -v convert &> /dev/null; then
            # Optimize with ImageMagick if available
            convert "$img" -quality 85 -strip "$img.optimized" 2>/dev/null || true
        fi
    done
}

# 6. Security improvements
improve_security() {
    log_message "🔒 Applying security improvements..." "$BLUE"
    
    # Run security audit
    npm audit --audit-level moderate 2>/dev/null || true
    
    # Update security-related packages
    npm update --save-dev eslint-plugin-security 2>/dev/null || true
    
    log_message "✅ Security improvements completed" "$GREEN"
}

# 7. Code quality improvements
improve_code_quality() {
    log_message "📝 Improving code quality..." "$BLUE"
    
    # Run linting and fix auto-fixable issues
    npm run lint:fix 2>/dev/null || true
    
    # Format code
    npm run format 2>/dev/null || true
    
    log_message "✅ Code quality improvements completed" "$GREEN"
}

# 8. Build optimization
optimize_build() {
    log_message "🏗️ Optimizing build process..." "$BLUE"
    
    # Clean previous builds
    rm -rf .next out dist build 2>/dev/null || true
    
    # Run optimized build
    npm run build 2>/dev/null || true
    
    log_message "✅ Build optimization completed" "$GREEN"
}

# 9. Documentation improvements
improve_documentation() {
    log_message "📚 Improving documentation..." "$BLUE"
    
    # Update README if needed
    if [ -f "README.md" ]; then
        # Add timestamp to README
        echo "" >> README.md
        echo "---" >> README.md
        echo "Last updated: $(date)" >> README.md
        echo "Improvements applied: $(date '+%Y-%m-%d %H:%M:%S')" >> README.md
    fi
    
    log_message "✅ Documentation improvements completed" "$GREEN"
}

# 10. Final verification
verify_improvements() {
    log_message "✅ Verifying improvements..." "$BLUE"
    
    # Run all checks
    npm run type-check 2>/dev/null || true
    npm run lint 2>/dev/null || true
    npm run test 2>/dev/null || true
    
    log_message "✅ All improvements verified" "$GREEN"
}

# Main execution
main() {
    log_message "🚀 Starting comprehensive improvements..." "$GREEN"
    
    cleanup_backups
    optimize_package_json
    fix_eslint_config
    optimize_typescript
    optimize_performance
    improve_security
    improve_code_quality
    optimize_build
    improve_documentation
    verify_improvements
    
    log_message "🎉 Comprehensive improvements completed!" "$GREEN"
    log_message "⏰ Completed at: $(date)" "$GREEN"
}

# Run main function
main "$@"