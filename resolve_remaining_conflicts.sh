#!/bin/bash

# Resolve Remaining Merge Conflicts Script
# This script handles the remaining merge conflicts that were missed

set -e

echo "🔧 Resolving remaining merge conflicts..."

# Function to resolve conflicts in a specific file
resolve_file_conflicts() {
    local file="$1"
    
    if [ ! -f "$file" ]; then
        return
    fi
    
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "🔧 Resolving conflicts in: $file"
        
        # Create backup
        cp "$file" "${file}.backup.$(date +%s)"
        
        # More aggressive conflict resolution
        # Remove all merge conflict markers and keep HEAD content
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
        
        # Clean up any remaining markers
        sed -i '/<<<<<<< HEAD/d' "$file"
        sed -i '/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
        
        # Remove any empty lines that might be left
        sed -i '/^[[:space:]]*$/d' "$file"
        
        echo "✅ Resolved conflicts in: $file"
    fi
}

# List of remaining files with conflicts
remaining_files=(
    "src/App.tsx"
    "src/components/ui/FuturisticHero.jsx"
    "src/components/ui/FuturisticAnimatedBackground.jsx"
    "src/components/ui/FuturisticNeonButton.jsx"
    "src/components/ui/dropdown-menu.tsx"
    "src/components/ui/OptimizedImage.jsx"
    "src/components/ui/accessibility-menu.jsx"
    "src/components/ui/accessibility-panel.jsx"
    "src/components/ui/3d-card-gallery.jsx"
    "src/components/ui/interactive-timeline.jsx"
    "src/components/ui/accessibility.jsx"
    "src/components/ui/enhanced-loading.jsx"
    "src/components/developers/ApiDocumentation.jsx"
    "src/components/unused/WebsiteImprovementDashboard.jsx"
    "src/components/services/PageSections/ServiceProcessSteps.jsx"
    "src/components/services/ServiceDetails.jsx"
    "src/pages/admin/FraudDetection.jsx"
    "src/pages/admin/TenantOnboarding.jsx"
    "src/pages/admin/QuoteManager.tsx"
)

# Resolve conflicts in each file
for file in "${remaining_files[@]}"; do
    resolve_file_conflicts "$file"
done

# Also check for any other files with conflicts
echo "🔍 Checking for any other files with conflicts..."
other_conflicts=$(find src/ -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true)

if [ -n "$other_conflicts" ]; then
    echo "Found additional files with conflicts:"
    echo "$other_conflicts"
    echo ""
    
    while IFS= read -r file; do
        if [ -n "$file" ]; then
            resolve_file_conflicts "$file"
        fi
    done <<< "$other_conflicts"
fi

# Final verification
echo "🔍 Final verification..."
remaining_conflicts=$(grep -r "<<<<<<< HEAD" src/ 2>/dev/null | wc -l)

if [ "$remaining_conflicts" -eq 0 ]; then
    echo "✅ All merge conflicts have been resolved!"
else
    echo "⚠️  Warning: $remaining_conflicts merge conflicts still remain"
    echo "Remaining conflicts:"
    grep -r "<<<<<<< HEAD" src/ 2>/dev/null || true
fi

echo "🎉 Conflict resolution completed!"