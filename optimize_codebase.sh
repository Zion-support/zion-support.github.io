#!/bin/bash

echo "Starting comprehensive codebase optimization..."

# Function to analyze and report file statistics
analyze_codebase() {
    echo "=== CODEBASE ANALYSIS ==="
    echo "Total files: $(find src -type f | wc -l)"
    echo "TypeScript files: $(find src -name "*.ts" | wc -l)"
    echo "TSX files: $(find src -name "*.tsx" | wc -l)"
    echo "JavaScript files: $(find src -name "*.js" | wc -l)"
    echo "JSX files: $(find src -name "*.jsx" | wc -l)"
    echo "CSS files: $(find src -name "*.css" | wc -l)"
    echo ""
    echo "=== LARGEST DIRECTORIES ==="
    du -sh src/* | sort -hr | head -10
    echo ""
}

# Function to find potentially duplicate files
find_duplicates() {
    echo "=== SEARCHING FOR POTENTIAL DUPLICATES ==="
    
    # Find files with similar names
    find src -name "*.tsx" -o -name "*.jsx" | grep -E "(backup|copy|duplicate|old|temp)" | head -10
    
    # Find files with very similar content (basic check)
    echo "Files with identical line counts (potential duplicates):"
    find src -name "*.tsx" -o -name "*.jsx" | xargs wc -l | sort -n | uniq -f1 -d | head -10
    echo ""
}

# Function to clean up build artifacts and temporary files
cleanup_build_artifacts() {
    echo "=== CLEANING BUILD ARTIFACTS ==="
    
    # Remove common build artifacts
    rm -rf dist/
    rm -rf build/
    rm -rf .next/
    rm -rf node_modules/.cache/
    rm -rf .vite/
    rm -rf .turbo/
    
    # Remove temporary files
    find . -name "*.tmp" -delete
    find . -name "*.temp" -delete
    find . -name "*.log" -delete
    find . -name ".DS_Store" -delete
    
    echo "Build artifacts cleaned."
    echo ""
}

# Function to optimize images (placeholder - would need actual image optimization tools)
optimize_images() {
    echo "=== IMAGE OPTIMIZATION ==="
    
    # Count images
    image_count=$(find src -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" -o -name "*.svg" | wc -l)
    echo "Found $image_count image files"
    
    # Find large images (> 1MB)
    large_images=$(find src -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" | xargs ls -lh | awk '$5 ~ /M/ && $5+0 > 1' | wc -l)
    echo "Found $large_images images larger than 1MB"
    
    echo "Note: Actual image optimization would require tools like imagemin or sharp"
    echo ""
}

# Function to analyze bundle dependencies
analyze_dependencies() {
    echo "=== DEPENDENCY ANALYSIS ==="
    
    if [ -f "package.json" ]; then
        echo "Total dependencies: $(grep -c '"' package.json | tail -1)"
        echo "Production dependencies: $(grep -c '"dependencies"' package.json)"
        echo "Development dependencies: $(grep -c '"devDependencies"' package.json)"
    fi
    
    echo ""
}

# Function to create optimization report
create_report() {
    echo "=== OPTIMIZATION REPORT ==="
    
    report_file="optimization_report_$(date +%Y%m%d_%H%M%S).txt"
    
    {
        echo "Zion Tech Group - Codebase Optimization Report"
        echo "Generated: $(date)"
        echo "=============================================="
        echo ""
        
        echo "File Statistics:"
        find src -type f | wc -l | xargs echo "Total files:"
        find src -name "*.tsx" | wc -l | xargs echo "TSX files:"
        find src -name "*.jsx" | wc -l | xargs echo "JSX files:"
        find src -name "*.ts" | wc -l | xargs echo "TS files:"
        find src -name "*.js" | wc -l | xargs echo "JS files:"
        echo ""
        
        echo "Directory Sizes:"
        du -sh src/* | sort -hr
        echo ""
        
        echo "Largest Files:"
        find src -type f -exec ls -lh {} + | sort -k5 -hr | head -10
        echo ""
        
    } > "$report_file"
    
    echo "Optimization report saved to: $report_file"
    echo ""
}

# Main execution
main() {
    echo "Zion Tech Group - Codebase Optimization"
    echo "======================================="
    echo ""
    
    analyze_codebase
    find_duplicates
    cleanup_build_artifacts
    optimize_images
    analyze_dependencies
    create_report
    
    echo "=== OPTIMIZATION COMPLETE ==="
    echo "Next steps:"
    echo "1. Review the optimization report"
    echo "2. Remove duplicate files identified"
    echo "3. Optimize large images"
    echo "4. Consider code splitting for large components"
    echo "5. Implement tree shaking for unused code"
    echo ""
}

# Run the optimization
main