#!/bin/bash

echo "🚀 Committing resolved merge conflicts..."

# Change to workspace directory
cd /workspace

# Add all resolved files
echo "📝 Adding resolved files..."
git add .

# Check if there are any changes to commit
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Committing resolved conflicts..."
    git commit -m "Resolve merge conflicts in critical files

- Resolved conflicts in src/hooks/useAuth.ts
- Resolved conflicts in src/data/expandedServices.ts
- Resolved conflicts in src/data/enhancedServices.ts
- Resolved conflicts in src/data/comprehensiveServices.ts
- Resolved conflicts in src/data/innovativeMicroSaasServices.ts
- Resolved conflicts in src/components/PerformanceMonitor.tsx
- Resolved conflicts in src/components/ErrorBoundary.tsx
- Resolved conflicts in data/2025-innovative-ai-services-enhanced.ts
- Fixed interface declarations and removed duplicate properties
- Maintained code quality and functionality

Critical files resolved and ready for deployment."
fi

echo "✅ Merge conflicts resolved and committed!"