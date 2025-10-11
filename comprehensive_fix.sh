#!/bin/bash
# Comprehensive fix script for all remaining issues

echo "=== Comprehensive Fix Script ==="

# 1. Add LoadingSpinner import to App.tsx
echo "1. Adding LoadingSpinner import..."
sed -i "/import InteractiveAIROICalculator/a import LoadingSpinner from './components/LoadingSpinner';" app/App.tsx

# 2. Fix duplicate variable in setupTests.tsx
echo "2. Fixing duplicate originalConsoleError..."
python3 << 'EOF'
with open('app/setupTests.tsx', 'r') as f:
    lines = f.readlines()

# Find duplicate originalConsoleError declarations
seen_console_error = False
new_lines = []
for line in lines:
    if 'const originalConsoleError = console.error;' in line:
        if not seen_console_error:
            new_lines.append(line)
            seen_console_error = True
        else:
            # Skip duplicate
            continue
    else:
        new_lines.append(line)

with open('app/setupTests.tsx', 'w') as f:
    f.writelines(new_lines)

print("✓ Removed duplicate originalConsoleError")
EOF

# 3. Create vite-env.d.ts for import.meta.env types
echo "3. Creating vite-env.d.ts..."
cat > vite-env.d.ts << 'EOF'
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
EOF

# 4. Fix page-optimized.tsx import
echo "4. Fixing page-optimized.tsx..."
if [ -f "app/page-optimized.tsx" ]; then
  sed -i "s|'./components/NewestContent2025Banner'|'./components/NewestContent2025Banner.tsx.disabled'|g" app/page-optimized.tsx || true
fi

# 5. Stage all changes
echo "5. Staging changes..."
git add -A

echo "=== Fix Complete ==="
echo "Modified files:"
git status --short

echo ""
echo "Next steps:"
echo "1. Run: npm run build"
echo "2. Run: npm run type-check"
echo "3. Commit: git commit -m 'fix: resolve all merge conflicts and errors'"
echo "4. The remote environment will handle pushing automatically"