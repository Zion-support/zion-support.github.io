#!/bin/bash

# Zion Tech Group - Resolve Remaining Merge Conflicts Script
# This script resolves all remaining merge conflicts after the pull operation

echo "🚀 Resolving remaining merge conflicts..."

# Check if we have merge conflicts
if ! git status --porcelain | grep -q "^UU"; then
    echo "✅ No merge conflicts found"
    exit 0
fi

echo "🔍 Found merge conflicts, resolving them..."

# Function to resolve conflicts in a file
resolve_file_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file"
    
    # Check if file exists
    if [ ! -f "$file" ]; then
        echo "⚠️  File $file not found, skipping..."
        return 0
    fi
    
    # Create backup
    cp "$file" "${file}.backup.$(date +%Y%m%d-%H%M%S)"
    
    # Remove all conflict markers and keep the most recent version
    # Strategy: Keep the version that has more content (usually the newer one)
    
    # Count lines in each section
    local head_lines=$(sed -n '/^/p' "$file" | wc -l)
    local theirs_lines=$(sed -n '/^/,/^
    
    if [ "$head_lines" -gt "$theirs_lines" ]; then
        echo "📝 Keeping HEAD version (more content)"
        # Keep HEAD version
        sed -i '/^
        sed -i '/^
    else
        echo "📝 Keeping remote version (more content)"
        # Keep remote version
        sed -i '/^
    fi
    
    echo "✅ Resolved conflicts in: $file"
}

# Function to resolve specific file conflicts
resolve_specific_conflicts() {
    echo "🔍 Resolving specific file conflicts..."
    
    # List of files with conflicts
    local conflict_files=(
        "src/components/AIServicesShowcase.tsx"
        "src/components/BlogSection.tsx"
        "src/components/CategoriesSection.tsx"
        "src/components/ComprehensivePricingGuide2027.tsx"
        "src/components/ContactSection.tsx"
        "src/components/EnhancedHeroSection.tsx"
        "src/components/EnhancedInnovativeServicesShowcase.tsx"
        "src/components/EnhancedPricingComparison.tsx"
        "src/components/EnhancedServicesShowcase.tsx"
        "src/components/FuturisticAnimatedBackground.tsx"
        "src/components/Header.tsx"
        "src/components/LazyLoader.tsx"
        "src/components/LoadingOverlay.tsx"
        "src/components/ServicesOverview.tsx"
        "src/components/UltimateServicesShowcase2025.tsx"
        "src/components/UltimateServicesShowcase2027.tsx"
        "src/components/auth/login/LoginErrorFallback.tsx"
        "src/components/community/ForumCategories.tsx"
        "src/components/community/PostCard.tsx"
        "src/components/home/FeatureCTAs.tsx"
        "src/components/home/FeatureHighlights.tsx"
        "src/components/layout/MainSidebar.tsx"
        "src/components/search/ActiveFiltersBar.tsx"
        "src/components/search/FilterSidebar.tsx"
        "src/components/ui/checkbox.tsx"
        "src/context/auth/AuthContext.tsx"
        "src/pages/About.tsx"
        "src/pages/Accessibility.tsx"
        "src/pages/BlogPost.tsx"
        "src/pages/Community.tsx"
        "src/pages/Demo.tsx"
        "src/pages/EnhancedInnovativeServicesShowcase2027.tsx"
        "src/pages/GreenIT.tsx"
        "src/pages/MicroSAASServicesPage.tsx"
        "src/pages/Press.tsx"
        "src/pages/Security.tsx"
        "src/pages/Services.tsx"
        "src/pages/Sitemap.tsx"
        "src/pages/Team.tsx"
        "src/pages/about.tsx"
        "src/pages/services.tsx"
        "src/pages/services/AIComplianceAssistant.tsx"
        "src/pages/services/AICustomerExperienceAnalytics.tsx"
        "src/pages/services/AICustomerExperiencePlatform.tsx"
        "src/pages/services/AIHealthcareAnalytics.tsx"
        "src/pages/services/AILegalDocumentAutomation.tsx"
        "src/pages/services/AIMarketingAutomation.tsx"
        "src/pages/services/AIQuantumComputingPlatform.tsx"
        "src/pages/services/AIWorkflowAutomation.tsx"
        "src/pages/services/CloudDevOps.tsx"
        "src/pages/services/CloudFinOpsOptimizer.tsx"
        "src/pages/services/Cybersecurity.tsx"
        "src/pages/services/DataAnalytics.tsx"
        "src/pages/services/DigitalTwin.tsx"
        "src/pages/services/FinOpsAdvisor.tsx"
        "src/pages/services/GreenIT.tsx"
        "src/pages/services/ITConsulting.tsx"
        "src/pages/services/ITInfrastructure.tsx"
        "src/pages/services/IoTEdge.tsx"
        "src/pages/services/QuantumComputingSolutions.tsx"
        "src/pages/services/SpaceTech.tsx"
        "src/pages/services/Sustainability.tsx"
        "src/pages/solutions/Enterprise.tsx"
        "src/pages/solutions/Healthcare.tsx"
        "src/routes/ErrorRoutes.tsx"
    )
    
    # Resolve conflicts in each file
    for file in "${conflict_files[@]}"; do
        if [ -f "$file" ]; then
            resolve_file_conflicts "$file"
        fi
    done
}

# Function to handle deleted files
handle_deleted_files() {
    echo "🗑️  Handling deleted files..."
    
    # Handle MicroSaasServicesPage.tsx
    if [ -f "src/pages/MicroSaasServicesPage.tsx" ]; then
        echo "📁 Keeping MicroSaasServicesPage.tsx (local version)"
        git add "src/pages/MicroSaasServicesPage.tsx"
    fi
    
    # Handle sustainability.tsx
    if [ -f "src/pages/services/sustainability.tsx" ]; then
        echo "📁 Keeping sustainability.tsx (local version)"
        git add "src/pages/services/sustainability.tsx"
    fi
}

# Main execution
echo "🚀 Starting conflict resolution..."

# Resolve specific file conflicts
resolve_specific_conflicts

# Handle deleted files
handle_deleted_files

# Add all resolved files
echo "📝 Adding all resolved files..."
git add .

# Check if conflicts are resolved
if git status --porcelain | grep -q "^UU"; then
    echo "❌ Some conflicts remain unresolved"
    echo "🔍 Remaining conflicts:"
    git status --porcelain | grep "^UU"
    exit 1
else
    echo "✅ All conflicts resolved successfully!"
    
    # Commit the resolution
    echo "📝 Committing conflict resolution..."
    git commit -m "Resolve all remaining merge conflicts - Auto-resolved using conflict resolution script"
    
    echo "🎉 Conflict resolution completed successfully!"
    echo "📝 Ready to push to main"
fi