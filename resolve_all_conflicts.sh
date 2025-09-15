#!/bin/bash

echo "Resolving all merge conflicts..."

# Function to resolve conflicts by choosing the appropriate version
resolve_conflict() {
    local file="$1"
    local strategy="$2"  # "ours", "theirs", or "manual"
    
    if [ ! -f "$file" ]; then
        echo "File $file does not exist, skipping..."
        return
    fi
    
    echo "Resolving conflict in $file using strategy: $strategy"
    
    case $strategy in
        "ours")
            git checkout --ours "$file"
            git add "$file"
            ;;
        "theirs")
            git checkout --theirs "$file"
            git add "$file"
            ;;
        "manual")
            # For manual resolution, we'll use a combination of strategies
            if [[ "$file" == "App.tsx" ]]; then
                # Keep the main App.tsx structure
                git checkout --ours "$file"
                git add "$file"
            elif [[ "$file" == "package-lock.json" ]]; then
                # Regenerate package-lock.json
                rm "$file"
                npm install
                git add "$file"
            elif [[ "$file" == "dist/sw.js" ]]; then
                # Keep the service worker
                git checkout --ours "$file"
                git add "$file"
            else
                # For most other files, keep the newer version
                git checkout --theirs "$file"
                git add "$file"
            fi
            ;;
    esac
}

# Resolve core application files
resolve_conflict "App.tsx" "manual"
resolve_conflict "dist/sw.js" "ours"
resolve_conflict "package-lock.json" "manual"

# Resolve component conflicts
resolve_conflict "src/components/InteractiveTechShowcase.tsx" "theirs"
resolve_conflict "src/components/InteractiveTechShowcase2027.tsx" "theirs"
resolve_conflict "src/components/NewContentShowcase.tsx" "theirs"
resolve_conflict "src/components/RevolutionaryContentShowcase2026.tsx" "theirs"
resolve_conflict "src/components/RevolutionaryContentShowcase2027.tsx" "theirs"
resolve_conflict "src/components/RevolutionaryPromoBanner.tsx" "theirs"
resolve_conflict "src/components/RevolutionaryTechShowcase2026.tsx" "theirs"
resolve_conflict "src/components/SEOHead.tsx" "theirs"

# Resolve page conflicts
resolve_conflict "src/pages/AIInnovationHub2025.tsx" "theirs"
resolve_conflict "src/pages/AIInnovationHub2026.tsx" "theirs"
resolve_conflict "src/pages/AIInnovationPlaybook2025.tsx" "theirs"
resolve_conflict "src/pages/AIRevolution2025.tsx" "theirs"
resolve_conflict "src/pages/AITransformationGuide2025.tsx" "theirs"
resolve_conflict "src/pages/AdvancedAITransformation2026.tsx" "theirs"
resolve_conflict "src/pages/AdvancedAnalytics2025.tsx" "theirs"
resolve_conflict "src/pages/AdvancedBiotechSolutions2026.tsx" "theirs"
resolve_conflict "src/pages/AdvancedBlockchainSolutions2026.tsx" "theirs"
resolve_conflict "src/pages/AdvancedQuantumComputing2026.tsx" "theirs"
resolve_conflict "src/pages/AdvancedRobotics2026.tsx" "theirs"
resolve_conflict "src/pages/AdvancedTechSolutions2025.tsx" "theirs"
resolve_conflict "src/pages/BlogPost2025.tsx" "theirs"
resolve_conflict "src/pages/ComprehensiveServices2025.tsx" "theirs"
resolve_conflict "src/pages/ComprehensiveTechInsights2026.tsx" "theirs"
resolve_conflict "src/pages/CybersecurityFortress2025.tsx" "theirs"
resolve_conflict "src/pages/DigitalTransformation2025.tsx" "theirs"
resolve_conflict "src/pages/EdgeAIandIoT2025.tsx" "theirs"
resolve_conflict "src/pages/FutureTechTrends2025.tsx" "theirs"
resolve_conflict "src/pages/FutureTechTrends2026.tsx" "theirs"
resolve_conflict "src/pages/InnovationLanding2025.tsx" "theirs"
resolve_conflict "src/pages/InnovativeServicesShowcase2025.tsx" "theirs"
resolve_conflict "src/pages/NewAIUseCases2025.tsx" "theirs"
resolve_conflict "src/pages/NextGenAIRevolution2026.tsx" "theirs"
resolve_conflict "src/pages/NextGenSpaceTech2026.tsx" "theirs"
resolve_conflict "src/pages/NextGenTechShowcase2026.tsx" "theirs"
resolve_conflict "src/pages/QuantumAIRevolution2026.tsx" "theirs"
resolve_conflict "src/pages/QuantumComputingBreakthrough.tsx" "theirs"
resolve_conflict "src/pages/QuantumComputingSolutions2025.tsx" "theirs"
resolve_conflict "src/pages/QuantumConsciousness2027.tsx" "theirs"
resolve_conflict "src/pages/QuantumConsciousnessRevolution2027.tsx" "theirs"
resolve_conflict "src/pages/QuantumNeuralFusion2026.tsx" "theirs"
resolve_conflict "src/pages/RevolutionaryInnovationHub2026.tsx" "theirs"
resolve_conflict "src/pages/TechnologyInsights2025.tsx" "theirs"
resolve_conflict "src/pages/UltimateTechRevolution2026.tsx" "theirs"
resolve_conflict "src/pages/UltimateTechRevolution2027.tsx" "theirs"

# Resolve utility conflicts
resolve_conflict "src/utils/cartUtils.ts" "theirs"
resolve_conflict "src/utils/fetchWithRetry.ts" "theirs"
resolve_conflict "src/utils/notifications.ts" "theirs"
resolve_conflict "src/utils/productionLogger.ts" "theirs"
resolve_conflict "src/utils/safeStorage.ts" "theirs"

# Resolve hooks conflicts
resolve_conflict "src/hooks/useWebhooks.ts" "theirs"

# Resolve zion-website conflicts
resolve_conflict "zion-website/src/app/page.tsx" "theirs"
resolve_conflict "zion-website/src/components/Footer.tsx" "theirs"
resolve_conflict "zion-website/src/components/Navigation.tsx" "theirs"

# Remove deleted files
git rm "fix_all_conflicts.sh" 2>/dev/null || true
git rm "src/components/InteractiveContentShowcase2026.tsx.backup" 2>/dev/null || true
git rm "src/components/InteractiveTechShowcase2026.tsx.backup" 2>/dev/null || true
git rm "src/components/NewContentShowcase.tsx.backup" 2>/dev/null || true
git rm "src/components/NewContentShowcase2026.tsx.backup" 2>/dev/null || true
git rm "src/components/RevolutionaryTechShowcase2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/AdvancedAITransformation2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/AdvancedBiotechAI2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/AdvancedBiotechSolutions2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/AdvancedBlockchainSolutions2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/AdvancedCybersecuritySuite2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/AdvancedRobotics2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/NextGenSpaceTech2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/NextGenTechShowcase2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/SpaceTechInnovation2026.tsx.backup" 2>/dev/null || true

echo "All conflicts resolved!"