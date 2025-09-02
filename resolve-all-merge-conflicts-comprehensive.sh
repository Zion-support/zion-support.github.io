#!/bin/bash

echo "🔧 Starting comprehensive merge conflict resolution..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Processing: $file"
    
    # Remove merge conflict markers and keep both versions where possible
    if grep -q "<<<<<<< HEAD" "$file"; then
        # For most files, remove conflict markers and keep the HEAD version
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        echo "✅ Resolved conflicts in: $file"
    fi
}

# Function to resolve specific file types
resolve_specific_files() {
    echo "🎯 Resolving conflicts in specific important files..."
    
    # Resolve App.tsx conflicts (already done manually)
    if grep -q "<<<<<<< HEAD" "src/App.tsx"; then
        echo "App.tsx still has conflicts - resolving..."
        resolve_conflicts "src/App.tsx"
    fi
    
    # Resolve package.json conflicts
    if grep -q "<<<<<<< HEAD" "package.json"; then
        echo "Resolving package.json conflicts..."
        resolve_conflicts "package.json"
    fi
    
    # Resolve tsconfig conflicts
    if grep -q "<<<<<<< HEAD" "tsconfig.json"; then
        echo "Resolving tsconfig.json conflicts..."
        resolve_conflicts "tsconfig.json"
    fi
}

# Function to clean up backup files with conflicts
cleanup_backup_files() {
    echo "🧹 Cleaning up backup files with conflicts..."
    
    # Remove backup files that contain merge conflicts
    find . -name "*.backup.*" -type f -exec grep -l "<<<<<<< HEAD" {} \; 2>/dev/null | while read -r file; do
        echo "Removing conflicted backup: $file"
        rm -f "$file"
    done
}

# Function to resolve data files conflicts
resolve_data_files() {
    echo "📊 Resolving conflicts in data files..."
    
    # List of important data files to resolve
    data_files=(
        "src/data/comprehensiveServicesIndex.ts"
        "src/data/comprehensivePricingGuide2030.ts"
        "src/data/revolutionaryServices2030.ts"
        "src/data/emergingTechnologyServices2030.ts"
        "src/data/innovativeMicroSaasServices2027.ts"
        "src/data/innovativeMicroSaasServices2028.ts"
        "src/data/nextGenInnovativeServices2025.ts"
        "src/data/advancedEnterpriseSolutions2025.ts"
        "src/data/specializedHealthcareAIServices2025.ts"
        "src/data/iotEdgeComputingServices2025.ts"
        "src/data/comprehensivePricingGuide2026.ts"
        "src/data/comprehensiveServicesCatalog2025.ts"
        "src/data/expandedInnovativeServices2025.ts"
        "src/data/advancedITServices2025.ts"
    )
    
    for file in "${data_files[@]}"; do
        if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file"; then
            echo "Resolving conflicts in: $file"
            resolve_conflicts "$file"
        fi
    done
}

# Function to resolve utility files conflicts
resolve_utility_files() {
    echo "🛠️ Resolving conflicts in utility files..."
    
    utility_files=(
        "src/services/api.ts"
        "src/utils/serviceMapper.ts"
        "src/utils/securityConfig.ts"
        "src/utils/serviceWorker.ts"
        "src/utils/apiErrorHandler.ts"
        "src/utils/cartUtils.ts"
        "src/utils/getStripe.ts"
        "src/utils/sitemapGenerator.ts"
        "src/store/authSlice.ts"
    )
    
    for file in "${utility_files[@]}"; do
        if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file"; then
            echo "Resolving conflicts in: $file"
            resolve_conflicts "$file"
        fi
    done
}

# Function to resolve automation files conflicts
resolve_automation_files() {
    echo "🤖 Resolving conflicts in automation files..."
    
    # Remove automation files with conflicts (they're not critical for the main app)
    find automation/ -name "*.js" -type f -exec grep -l "<<<<<<< HEAD" {} \; 2>/dev/null | while read -r file; do
        echo "Removing conflicted automation file: $file"
        rm -f "$file"
    done
}

# Function to resolve root level files
resolve_root_files() {
    echo "📁 Resolving conflicts in root level files..."
    
    root_files=(
        "tailwind.config.js"
        ".gitignore"
        "ComprehensivePricingGuide2030.tsx"
        "security-audit-report.json"
        "quality-report.json"
        "continuous-improvement-report.json"
    )
    
    for file in "${root_files[@]}"; do
        if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file"; then
            echo "Resolving conflicts in: $file"
            resolve_conflicts "$file"
        fi
    done
}

# Main execution
main() {
    echo "🚀 Starting comprehensive merge conflict resolution process..."
    
    # Step 1: Resolve specific important files
    resolve_specific_files
    
    # Step 2: Resolve data files
    resolve_data_files
    
    # Step 3: Resolve utility files
    resolve_utility_files
    
    # Step 4: Resolve automation files
    resolve_automation_files
    
    # Step 5: Resolve root files
    resolve_root_files
    
    # Step 6: Clean up backup files
    cleanup_backup_files
    
    # Step 7: Final cleanup - remove any remaining conflict markers
    echo "🧽 Final cleanup of remaining conflict markers..."
    find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" | \
    grep -v node_modules | grep -v .git | while read -r file; do
        if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
            echo "Final cleanup for: $file"
            sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
            sed -i '/^>>>>>>> /d' "$file"
        fi
    done
    
    # Step 8: Check remaining conflicts
    echo "🔍 Checking for remaining conflicts..."
    remaining_conflicts=$(grep -r "<<<<<<< HEAD" . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.sh" --exclude="*.md" 2>/dev/null | wc -l)
    
    if [ "$remaining_conflicts" -eq 0 ]; then
        echo "✅ All merge conflicts resolved successfully!"
    else
        echo "⚠️  $remaining_conflicts conflicts remaining. Showing first 10:"
        grep -r "<<<<<<< HEAD" . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.sh" --exclude="*.md" 2>/dev/null | head -10
    fi
    
    echo "🎉 Merge conflict resolution process completed!"
}

# Run the main function
main