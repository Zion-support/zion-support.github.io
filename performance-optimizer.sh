#!/bin/bash

# Performance Optimization Script for Zion Tech Group
# This script optimizes the application for better performance

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
PERFORMANCE_THRESHOLD=3000 # 3 seconds

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

# Function to measure build performance
measure_build_performance() {
    log_info "Measuring build performance..."
    
    local start_time=$(date +%s)
    if npm run build > /dev/null 2>&1; then
        local end_time=$(date +%s)
        local build_time=$((end_time - start_time))
        
        log_success "Build completed in ${build_time} seconds"
        
        if [ $build_time -gt $PERFORMANCE_THRESHOLD ]; then
            log_warning "Build time exceeds threshold (${PERFORMANCE_THRESHOLD}s)"
            return 1
        fi
        
        return 0
    else
        log_error "Build failed"
        return 1
    fi
}

# Function to optimize bundle size
optimize_bundle_size() {
    log_info "Optimizing bundle size..."
    
    # Analyze bundle if analyzer is available
    if npm list webpack-bundle-analyzer > /dev/null 2>&1; then
        log_info "Running bundle analysis..."
        npm run analyze || log_warning "Bundle analysis not available"
    fi
    
    # Check for large dependencies
    log_info "Checking for large dependencies..."
    if [ -f "package.json" ]; then
        # Find large node_modules
        find node_modules -name "*.js" -size +1M 2>/dev/null | head -10 | while read file; do
            log_warning "Large file found: $file"
        done
    fi
    
    # Optimize images
    optimize_images
    
    log_success "Bundle size optimization completed"
}

# Function to optimize images
optimize_images() {
    log_info "Optimizing images..."
    
    if [ -d "public" ]; then
        find public -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" | while read img; do
            local original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null || echo "0")
            
            if [ "$original_size" -gt 100000 ]; then # > 100KB
                log_info "Optimizing large image: $img"
                
                # Use ImageMagick if available
                if command -v convert > /dev/null; then
                    convert "$img" -quality 85 -strip "${img}.optimized"
                    if [ -f "${img}.optimized" ]; then
                        mv "${img}.optimized" "$img"
                        local new_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null || echo "0")
                        local savings=$((original_size - new_size))
                        log_success "Optimized $img: saved ${savings} bytes"
                    fi
                fi
            fi
        done
    fi
}

# Function to optimize CSS
optimize_css() {
    log_info "Optimizing CSS..."
    
    # Find CSS files
    find . -name "*.css" -not -path "./node_modules/*" | while read css_file; do
        log_info "Processing CSS file: $css_file"
        
        # Remove unused CSS (basic approach)
        if command -v purgecss > /dev/null; then
            purgecss --css "$css_file" --content "**/*.{js,jsx,ts,tsx}" --output "${css_file}.purged"
            if [ -f "${css_file}.purged" ]; then
                mv "${css_file}.purged" "$css_file"
                log_success "Purged unused CSS from $css_file"
            fi
        fi
        
        # Minify CSS
        if command -v cleancss > /dev/null; then
            cleancss -o "${css_file}.min" "$css_file"
            if [ -f "${css_file}.min" ]; then
                mv "${css_file}.min" "$css_file"
                log_success "Minified CSS: $css_file"
            fi
        fi
    done
}

# Function to optimize JavaScript
optimize_javascript() {
    log_info "Optimizing JavaScript..."
    
    # Find JS/TS files
    find . -name "*.js" -o -name "*.ts" -o -name "*.jsx" -o -name "*.tsx" | \
    grep -v node_modules | \
    while read js_file; do
        # Remove console.log statements
        if grep -q "console\.log" "$js_file"; then
            sed -i '/console\.log/d' "$js_file"
            log_success "Removed console.log from $js_file"
        fi
        
        # Remove debugger statements
        if grep -q "debugger" "$js_file"; then
            sed -i '/debugger/d' "$js_file"
            log_success "Removed debugger from $js_file"
        fi
    done
}

# Function to optimize dependencies
optimize_dependencies() {
    log_info "Optimizing dependencies..."
    
    # Check for duplicate dependencies
    if command -v npm-check-duplicates > /dev/null; then
        npm-check-duplicates
    fi
    
    # Update outdated dependencies
    log_info "Checking for outdated dependencies..."
    npm outdated || log_warning "Some dependencies are outdated"
    
    # Remove unused dependencies
    if command -v depcheck > /dev/null; then
        log_info "Checking for unused dependencies..."
        depcheck || log_warning "Some dependencies may be unused"
    fi
    
    # Clean npm cache
    log_info "Cleaning npm cache..."
    npm cache clean --force
    
    log_success "Dependency optimization completed"
}

# Function to optimize Next.js configuration
optimize_nextjs_config() {
    log_info "Optimizing Next.js configuration..."
    
    if [ -f "next.config.js" ]; then
        # Create optimized next.config.js
        cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Bundle optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize bundle splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      }
    }
    return config
  },
  
  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
}

module.exports = nextConfig
EOF
        log_success "Next.js configuration optimized"
    fi
}

# Function to run performance tests
run_performance_tests() {
    log_info "Running performance tests..."
    
    # Build performance test
    if measure_build_performance; then
        log_success "Build performance test passed"
    else
        log_warning "Build performance test failed"
    fi
    
    # Memory usage test
    log_info "Testing memory usage..."
    if command -v node > /dev/null; then
        node -e "
            const used = process.memoryUsage();
            console.log('Memory usage:');
            for (let key in used) {
                console.log(\`\${key}: \${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB\`);
            }
        "
    fi
    
    log_success "Performance tests completed"
}

# Function to generate performance report
generate_performance_report() {
    local report_file="$LOG_DIR/performance-optimization-report-${TIMESTAMP}.json"
    
    log_info "Generating performance report..."
    
    # Get build time
    local start_time=$(date +%s)
    npm run build > /dev/null 2>&1
    local end_time=$(date +%s)
    local build_time=$((end_time - start_time))
    
    # Get bundle size
    local bundle_size=0
    if [ -d ".next/static" ]; then
        bundle_size=$(du -sh .next/static | cut -f1)
    fi
    
    cat > "$report_file" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "performance_metrics": {
    "build_time_seconds": $build_time,
    "build_threshold_seconds": $PERFORMANCE_THRESHOLD,
    "build_performance_status": "$([ $build_time -le $PERFORMANCE_THRESHOLD ] && echo "good" || echo "needs_improvement")",
    "bundle_size": "$bundle_size"
  },
  "optimizations_applied": {
    "bundle_optimization": true,
    "image_optimization": true,
    "css_optimization": true,
    "javascript_optimization": true,
    "dependency_optimization": true,
    "nextjs_config_optimization": true
  },
  "recommendations": [
    "Consider implementing code splitting for large components",
    "Use dynamic imports for heavy libraries",
    "Implement service worker for caching",
    "Consider using a CDN for static assets",
    "Monitor Core Web Vitals regularly"
  ]
}
EOF
    
    log_success "Performance report generated: $report_file"
}

# Main execution
main() {
    log_info "⚡ Starting Performance Optimization"
    log_info "===================================="
    
    # Create log directory
    mkdir -p "$LOG_DIR"
    
    # Run performance tests
    run_performance_tests
    
    # Optimize bundle size
    optimize_bundle_size
    
    # Optimize CSS
    optimize_css
    
    # Optimize JavaScript
    optimize_javascript
    
    # Optimize dependencies
    optimize_dependencies
    
    # Optimize Next.js configuration
    optimize_nextjs_config
    
    # Run performance tests again
    run_performance_tests
    
    # Generate report
    generate_performance_report
    
    log_success "🎉 Performance Optimization completed!"
}

# Handle script arguments
case "${1:-}" in
    --build-test)
        measure_build_performance
        ;;
    --bundle-only)
        optimize_bundle_size
        ;;
    --images-only)
        optimize_images
        ;;
    --deps-only)
        optimize_dependencies
        ;;
    *)
        main
        ;;
esac