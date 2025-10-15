#!/bin/bash

# Fix all 5G function names
files=(
  "/workspace/app/5g-implementation/page.tsx"
  "/workspace/app/5g-network-infrastructure/page.tsx"
  "/workspace/app/5g-iot-solutions/page.tsx"
  "/workspace/app/5g-edge-computing/page.tsx"
  "/workspace/app/5g-private-networks/page.tsx"
  "/workspace/app/5g-mobile-applications/page.tsx"
  "/workspace/app/5g-data-analytics/page.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing 5G function name in: $file"
    
    # Fix various patterns
    sed -i 's/function 5g \([A-Za-z]*\) \([A-Za-z]*\) \([A-Za-z]*\)Page()/function FiveG\1\2\3Page()/g' "$file"
    sed -i 's/function 5g \([A-Za-z]*\) \([A-Za-z]*\)Page()/function FiveG\1\2Page()/g' "$file"
    sed -i 's/function 5g \([A-Za-z]*\)Page()/function FiveG\1Page()/g' "$file"
    
    echo "Fixed: $file"
  fi
done

echo "All 5G function names fixed!"