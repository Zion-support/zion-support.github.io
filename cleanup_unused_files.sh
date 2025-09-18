#!/bin/bash

echo "Starting cleanup of duplicate and unused files..."

# Function to remove duplicate files
remove_duplicates() {
    echo "Removing duplicate files..."
    
    # Remove backup files
    find src -name "*.backup" -type f -delete
    find src -name "*.disabled" -type f -delete
    find src -name "*_backup.*" -type f -delete
    find src -name "*_conflicted.*" -type f -delete
    
    # Remove temporary files
    find src -name "*.tmp" -type f -delete
    find src -name "*.temp" -type f -delete
    
    # Remove duplicate App files (keep only the main ones)
    find src -name "App*.tsx" -not -name "App.tsx" -not -name "AppOptimizedLazy.tsx" -type f -delete
    find src -name "App*.jsx" -not -name "App.jsx" -type f -delete
    
    # Remove duplicate main files
    find src -name "main*.tsx" -not -name "main.tsx" -type f -delete
    find src -name "main*.jsx" -not -name "main.jsx" -type f -delete
    
    # Remove duplicate Header/Footer files
    find src -name "Header*.tsx" -not -name "Header.tsx" -type f -delete
    find src -name "Header*.jsx" -not -name "Header.jsx" -type f -delete
    find src -name "Footer*.tsx" -not -name "Footer.tsx" -type f -delete
    find src -name "Footer*.jsx" -not -name "Footer.jsx" -type f -delete
    
    # Remove duplicate ScrollToTop files
    find src -name "ScrollToTop*.tsx" -not -name "ScrollToTop.tsx" -type f -delete
    find src -name "ScrollToTop*.jsx" -not -name "ScrollToTop.jsx" -type f -delete
    
    echo "Duplicate files removed."
}

# Function to remove unused directories
remove_unused_dirs() {
    echo "Removing unused directories..."
    
    # Remove disabled components directory
    if [ -d "src/components.disabled" ]; then
        rm -rf src/components.disabled
        echo "Removed src/components.disabled"
    fi
    
    # Remove test directories that might not be needed
    if [ -d "src/test" ]; then
        rm -rf src/test
        echo "Removed src/test"
    fi
    
    # Remove stub directories
    if [ -d "src/stubs" ]; then
        rm -rf src/stubs
        echo "Removed src/stubs"
    fi
    
    echo "Unused directories removed."
}

# Function to optimize bundle size
optimize_bundle() {
    echo "Optimizing bundle size..."
    
    # Create a more efficient import structure
    cat > src/components/index.ts << 'EOF'
// Centralized component exports for better tree shaking
export { default as EnhancedHeroSection } from './EnhancedHeroSection';
export { default as FeaturedContentSection } from './FeaturedContentSection';
export { default as DynamicContentCarousel } from './DynamicContentCarousel';
export { default as InteractiveTechShowcase } from './InteractiveTechShowcase';
export { default as PerformanceOptimizer } from './PerformanceOptimizer';
export { default as RevolutionaryContentBanner2026 } from './RevolutionaryContentBanner2026';
export { default as RevolutionaryContentBanner2027 } from './RevolutionaryContentBanner2027';
export { default as UltimateContentShowcase2027 } from './UltimateContentShowcase2027';
EOF

    # Create a more efficient pages index
    cat > src/pages/index.ts << 'EOF'
// Centralized page exports for better tree shaking
export { default as NewShowcase2025 } from './NewShowcase2025';
export { default as AIEnterpriseCopilot2025 } from './AIEnterpriseCopilot2025';
export { default as NeuralInterfaceFuture } from './NeuralInterfaceFuture';
export { default as AdvancedTechSolutions2026 } from './AdvancedTechSolutions2026';
export { default as InnovationShowcase2026 } from './InnovationShowcase2026';
export { default as AdvancedAITransformation2025 } from './AdvancedAITransformation2025';
export { default as QuantumComputingRevolution2025 } from './QuantumComputingRevolution2025';
export { default as NeuralInterfaceRevolution2025 } from './NeuralInterfaceRevolution2025';
export { default as NextGenTechShowcase2025 } from './NextGenTechShowcase2025';
export { default as AdvancedQuantumComputing2026 } from './AdvancedQuantumComputing2026';
export { default as NeuralInterfaceRevolution2026 } from './NeuralInterfaceRevolution2026';
export { default as AdvancedAISystems2026 } from './AdvancedAISystems2026';
export { default as SyntheticIntelligence2026 } from './SyntheticIntelligence2026';
export { default as QuantumNeuralFusion2026 } from './QuantumNeuralFusion2026';
export { default as NextGenAIRevolution2026 } from './NextGenAIRevolution2026';
export { default as QuantumComputingRevolution2026 } from './QuantumComputingRevolution2026';
export { default as RevolutionaryTechBlog2026 } from './RevolutionaryTechBlog2026';
export { default as ComprehensiveTechInsights2026 } from './ComprehensiveTechInsights2026';
export { default as AdvancedAnalyticsDashboard2026 } from './AdvancedAnalyticsDashboard2026';
export { default as BiotechRevolution2026 } from './BiotechRevolution2026';
export { default as SpaceTechInnovation2026 } from './SpaceTechInnovation2026';
export { default as AIInnovationHub2026 } from './AIInnovationHub2026';
export { default as UltimateTechShowcase2026 } from './UltimateTechShowcase2026';
export { default as UltimateTechRevolution2027 } from './UltimateTechRevolution2027';
export { default as TranscendentAI2027 } from './TranscendentAI2027';
export { default as QuantumConsciousnessRevolution2027 } from './QuantumConsciousnessRevolution2027';
export { default as SyntheticBiologyRevolution2027 } from './SyntheticBiologyRevolution2027';
export { default as SpaceTimeComputing2027 } from './SpaceTimeComputing2027';
EOF

    echo "Bundle optimization completed."
}

# Run all cleanup functions
remove_duplicates
remove_unused_dirs
optimize_bundle

echo "Cleanup completed successfully!"
echo "Remaining files:"
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | wc -l