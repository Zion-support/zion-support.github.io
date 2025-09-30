#!/bin/bash

echo "Fixing all incorrect import statements across the codebase..."

# Fix all .ts imports in .tsx files
find src -name "*.tsx" -type f -exec sed -i '' 's/from '\''\([^'\'']*\)\.ts'\''/from '\''\1'\''/g' {} \;

# Fix specific common imports that might have been missed
find src -name "*.tsx" -type f -exec sed -i '' 's/from '\''react\.ts'\''/from '\''react'\''/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/from '\''framer-motion\.ts'\''/from '\''framer-motion'\''/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/from '\''react-router-dom\.ts'\''/from '\''react-router-dom'\''/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/from '\''lucide-react\.ts'\''/from '\''lucide-react'\''/g' {} \;

echo "All import fixes completed!"
