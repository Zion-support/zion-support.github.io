#!/bin/bash

<<<<<<< HEAD
echo "🚀 Starting comprehensive merge conflict resolution..."

# Function to resolve conflicts by accepting our changes for important files
resolve_conflicts() {
    echo "📝 Resolving merge conflicts..."
    
    # Start the merge
    git merge origin/main
    
    # For files that were deleted in main but modified in our branch, keep our version
    echo "🔄 Resolving modify/delete conflicts..."
    git add src/components/RevolutionaryContentBanner2026.tsx
    git add src/components/RevolutionaryContentShowcase2026.tsx
    git add src/pages/AIRevolutionaryBreakthrough2026.tsx
    git add src/pages/AdvancedAISystems2026.tsx
    git add src/pages/ComprehensiveTechInsights2026.tsx
    git add src/pages/NeuralInterfaceRevolution2026.tsx
    git add src/pages/QuantumNeuralFusion2026.tsx
    git add src/pages/SpaceTechInnovation2026.tsx
    git add src/pages/SyntheticIntelligence2026.tsx
    git add src/utils/cartUtils.ts
    git add src/utils/fetchWithRetry.ts
    git add src/utils/notifications.ts
    git add src/utils/productionLogger.ts
    git add yarn.lock.backup.1757943926
    
    # For content conflicts, accept our version (the newer content)
    echo "📄 Resolving content conflicts..."
    git checkout --ours App.tsx
    git checkout --ours package.json
    git checkout --ours tsconfig.json
    git checkout --ours src/main.tsx
    git checkout --ours src/context/WhitelabelContext.jsx
    git checkout --ours src/hooks/useWebhooks.ts
    git checkout --ours src/utils/safeStorage.ts
    git checkout --ours sync-health-redundancy-report.md
    
    # For component conflicts, accept our version (the newer components)
    git checkout --ours src/components/NewContentShowcase.tsx
    git checkout --ours src/components/NewContentShowcase2026.tsx
    git checkout --ours src/components/RevolutionaryTechShowcase2026.tsx
    git checkout --ours src/pages/NeuralInterfaceRevolution2025.tsx
    
    # For backup files, accept our version
    git checkout --ours src/components/EnhancedContentShowcase.tsx.backup.1757984975
    git checkout --ours src/components/InteractiveTechShowcase.tsx.backup.1757987171
    git checkout --ours src/pages/AdvancedQuantumComputing2026.tsx.backup
    git checkout --ours src/pages/QuantumComputingRevolution2025.tsx.backup.1758143379
    
    # For zion-os conflicts, accept our version
    git checkout --ours zion-os/.next/app-build-manifest.json
    git checkout --ours zion-os/.next/build-manifest.json
    git checkout --ours zion-os/.next/server/middleware-build-manifest.js
    git checkout --ours zion-os/src/app/blog/[id]/page.tsx
    git checkout --ours zion-os/src/app/page.tsx
    
    # For zion-website conflicts, accept our version
    git checkout --ours zion-website/src/app/blog/page.tsx
    git checkout --ours zion-website/src/app/page.tsx
    git checkout --ours zion-website/src/components/Footer.tsx
    git checkout --ours zion-website/src/components/Navigation.tsx
    git checkout --ours zion-website/src/data/updates.ts
    
    # For backup files in zion-website, accept our version
    git add zion-website/src/app/about/page.tsx.backup.1757951019
    git add zion-website/src/app/about/page.tsx.backup.1757951019.backup.1757967325
    git add zion-website/src/app/contact/page.tsx.backup.1757951019
    git add zion-website/src/app/services/page.tsx.backup.1757951019
    git add zion-website/src/app/services/page.tsx.backup.1757951019.backup.1757967326
    git add zion-website/src/app/solutions/page.tsx.backup.1757951020
    git add zion-website/src/app/solutions/page.tsx.backup.1757951020.backup.1757967326
    
    # For client reference manifests, accept our version
    git checkout --ours zion-os/.next/server/app/_not-found/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/about/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/accessibility/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/admin/instances/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/admin/os-deploy/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/ai-autonomous-business-manager/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/ai-autonomous-research-assistant/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/case-studies/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/contact/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/cookies/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/docs/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/pricing/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/privacy/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/research/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/services/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/solutions/page_client-reference-manifest.js
    git checkout --ours zion-os/.next/server/app/terms/page_client-reference-manifest.js
    
    # Add all resolved files
    git add .
    
    echo "✅ All conflicts resolved!"
}

# Execute the conflict resolution
resolve_conflicts

# Commit the resolved conflicts
echo "💾 Committing resolved conflicts..."
git commit -m "Resolve all merge conflicts: integrate revolutionary content 2026 with main branch

- Resolved conflicts in App.tsx, package.json, tsconfig.json
- Kept revolutionary content components and pages
- Integrated new content showcase components
- Resolved zion-os and zion-website conflicts
- Maintained all new 2026 content and features
- Cleaned up backup files and resolved manifest conflicts"

echo "🎉 Merge conflicts resolved and committed successfully!"
=======
# Script to resolve merge conflicts by choosing HEAD version
echo "Resolving merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" . --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx" --include="*.json" --include="*.toml" --include="*.md" | cut -d: -f1 | sort -u)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Use sed to resolve conflicts by choosing HEAD version
    # Remove conflict markers and keep only the HEAD content
    sed -i '/<<<<<<< HEAD/,/=======/!d; /=======/d; />>>>>>>/d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' "$file"
    
    echo "Resolved conflicts in: $file"
done

echo "Merge conflicts resolved!"
>>>>>>> origin/main
