#!/bin/bash

echo "🔧 Fixing all import issues..."

# Fix lucide-react imports
find /workspace -name "*.tsx" -exec sed -i 's/TargetIcon/Target/g' {} \;
find /workspace -name "*.tsx" -exec sed -i 's/Building2Icon/Building/g' {} \;
find /workspace -name "*.tsx" -exec sed -i 's/BrainChipIcon/BrainIcon/g' {} \;

# Fix heroicons imports
find /workspace -name "*.tsx" -exec sed -i 's/SparklesIconChipIcon/SparklesIcon/g' {} \;

echo "✅ Import issues fixed!"