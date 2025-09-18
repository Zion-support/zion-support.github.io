#!/bin/bash

<<<<<<< HEAD
echo "Resolving merge conflicts..."

# Accept our changes for the main App.tsx file
git checkout --ours App.tsx

# Accept our changes for the new content pages we created
git checkout --ours src/pages/UltimateTechBreakthrough2026.tsx
git checkout --ours src/pages/RevolutionaryTechBreakthrough2026.tsx
git checkout --ours src/pages/NextGenTechRevolution2026.tsx
git checkout --ours src/pages/RevolutionaryTechBlog2026.tsx

# Accept our changes for the components we created
git checkout --ours src/components/RevolutionaryContentBanner.tsx
git checkout --ours src/components/InteractiveTechShowcase2026.tsx

# For other files, accept the incoming changes (from remote)
git checkout --theirs dist/index.html
git checkout --theirs package-lock.json
git checkout --theirs resolve_all_conflicts.sh

# For other component conflicts, accept incoming changes
git checkout --theirs src/components/AbsoluteTechShowcase2031.tsx
git checkout --theirs src/components/DynamicContentCarousel.jsx
git checkout --theirs src/components/DynamicContentCarousel.tsx
git checkout --theirs src/components/EnhancedContentShowcase.tsx.backup
git checkout --theirs src/components/InteractiveTechShowcase.tsx
git checkout --theirs src/components/InteractiveTechShowcase2025.tsx
git checkout --theirs src/components/InteractiveTechShowcase2027.tsx
git checkout --theirs src/components/RevolutionaryContentBanner2033.tsx
git checkout --theirs src/components/RevolutionaryContentCarousel.tsx
git checkout --theirs src/components/RevolutionaryContentCarousel2027.tsx
git checkout --theirs src/components/RevolutionaryContentShowcase2025.tsx
git checkout --theirs src/components/RevolutionaryContentShowcase2026.tsx
git checkout --theirs src/components/UltimateContentShowcase2026.tsx

# For other page conflicts, accept incoming changes
git checkout --theirs src/pages/ConsciousnessComputingRevolution2034.tsx
git checkout --theirs src/pages/FutureTechVision2026.tsx
git checkout --theirs src/pages/InterdimensionalTechRevolution2026.tsx
git checkout --theirs src/pages/InterdimensionalTechRevolution2030.tsx
git checkout --theirs src/pages/NeuralInterfaceRevolution2025.tsx
git checkout --theirs src/pages/QuantumComputingRevolution2025.tsx
git checkout --theirs src/pages/QuantumRealityEngine2026.tsx
git checkout --theirs src/pages/QuantumRealityEngine2027.tsx
git checkout --theirs src/pages/RevolutionaryTech2026.tsx
git checkout --theirs src/pages/RevolutionaryTech2027.tsx
git checkout --theirs src/pages/RevolutionaryTechBreakthrough2025.tsx
git checkout --theirs src/pages/RevolutionaryTechInsights2026.tsx
git checkout --theirs src/pages/SyntheticBiologyRevolution2027.tsx
git checkout --theirs src/pages/TranscendentAI2026.tsx
git checkout --theirs src/pages/TransdimensionalAI2026.tsx
git checkout --theirs src/pages/UltimateAIConsciousness2026.tsx
git checkout --theirs src/pages/UltimateTechShowcase2026.tsx

# For zion-website conflicts, accept incoming changes
git checkout --theirs zion-website/src/app/page.tsx
git checkout --theirs zion-website/src/data/updates.ts

echo "All conflicts resolved!"
=======
# Script to resolve merge conflicts by choosing HEAD version
# This will remove all merge conflict markers and keep only the HEAD version

echo "Resolving merge conflicts..."

# Find all files with merge conflicts (excluding node_modules)
find . -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" | \
grep -v node_modules | \
while read file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "Resolving conflicts in: $file"
        
        # Create a temporary file
        temp_file=$(mktemp)
        
        # Process the file to resolve conflicts
        awk '
        /^<<<<<<< HEAD/ { in_head = 1; next }
        /^=======/ { in_head = 0; in_other = 1; next }
        /^>>>>>>>/ { in_other = 0; next }
        in_head { print; next }
        !in_other { print }
        ' "$file" > "$temp_file"
        
        # Replace the original file
        mv "$temp_file" "$file"
    fi
done

echo "Merge conflicts resolved!"
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
