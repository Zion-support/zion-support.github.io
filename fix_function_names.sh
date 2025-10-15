#!/bin/bash

# Fix function names in all page files
files=(
  "/workspace/app/5g-iot-solutions/page.tsx"
  "/workspace/app/mobile-development/page.tsx"
  "/workspace/app/ai-climate-solutions-pro/page.tsx"
  "/workspace/app/5g-network-infrastructure/page.tsx"
  "/workspace/app/5g-implementation/page.tsx"
  "/workspace/app/5g-private-networks/page.tsx"
  "/workspace/app/5g-data-analytics/page.tsx"
  "/workspace/app/ai-drug-discovery-pro/page.tsx"
  "/workspace/app/ai-expense-tracker-pro/page.tsx"
  "/workspace/app/5g-edge-computing/page.tsx"
  "/workspace/app/5g-mobile-applications/page.tsx"
  "/workspace/app/web-development/page.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing function name in: $file"
    
    # Fix various patterns
    sed -i 's/function \([A-Za-z]*\) \([A-Za-z]*\) \([A-Za-z]*\) \([A-Za-z]*\)Page()/function \1\2\3\4Page()/g' "$file"
    sed -i 's/function \([A-Za-z]*\) \([A-Za-z]*\) \([A-Za-z]*\)Page()/function \1\2\3Page()/g' "$file"
    sed -i 's/function \([A-Za-z]*\) \([A-Za-z]*\)Page()/function \1\2Page()/g' "$file"
    
    echo "Fixed: $file"
  fi
done

echo "All function names fixed!"