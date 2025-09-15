#!/bin/bash

echo "Resolving final merge conflicts..."

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

# Remove all backup files and build cache files
git rm "fix_all_conflicts.sh" 2>/dev/null || true
git rm "src/components/InteractiveContentShowcase2026.tsx.backup" 2>/dev/null || true
git rm "src/components/InteractiveTechShowcase2026.tsx.backup" 2>/dev/null || true
git rm "src/components/NewContentShowcase.tsx.backup" 2>/dev/null || true
git rm "src/components/NewContentShowcase2026.tsx.backup" 2>/dev/null || true
git rm "src/components/RevolutionaryTechShowcase2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/AIInnovationHub2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/AdvancedAITransformation2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/AdvancedBiotechAI2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/AdvancedBiotechSolutions2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/AdvancedBlockchainSolutions2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/AdvancedCybersecuritySuite2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/AdvancedRobotics2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/NextGenSpaceTech2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/NextGenTechShowcase2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/QuantumConsciousness2027.tsx.backup" 2>/dev/null || true
git rm "src/pages/RevolutionaryInnovationHub2026.tsx.backup" 2>/dev/null || true
git rm "src/pages/SpaceTechInnovation2026.tsx.backup" 2>/dev/null || true

# Remove zion-os build cache files
git rm "zion-os/.next/app-build-manifest.json" 2>/dev/null || true
git rm "zion-os/.next/build-manifest.json" 2>/dev/null || true
git rm "zion-os/.next/server/app/_not-found/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/about/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/accessibility/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/admin/instances/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/admin/os-deploy/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/ai-autonomous-business-manager/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/ai-autonomous-research-assistant/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/case-studies/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/contact/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/cookies/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/docs/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/pricing/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/privacy/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/research/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/services/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/solutions/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/app/terms/page_client-reference-manifest.js" 2>/dev/null || true
git rm "zion-os/.next/server/middleware-build-manifest.js" 2>/dev/null || true

echo "All conflicts resolved!"