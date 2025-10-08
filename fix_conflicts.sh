#!/bin/bash
# Remove merge conflict markers and keep the incoming changes

cd /workspace

# For app/App.tsx - resolve by accepting incoming (theirs)
sed -i '/^<<<<<<< HEAD$/,/^=======$/d' app/App.tsx
sed -i '/^>>>>>>> [a-f0-9]*$/d' app/App.tsx

# For other files
for file in app/components/AccessibilityEnhancer.tsx app/components/PerformanceMonitor.tsx app/setupTests.tsx app/utils/performanceOptimizer.ts tsconfig.json; do
    if [ -f "$file" ]; then
        sed -i '/^<<<<<<< HEAD$/,/^=======$/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    fi
done

echo "Merge conflicts resolved"