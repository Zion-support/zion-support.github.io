#!/bin/bash

echo "Fixing React import statements across the codebase..."

# Fix react.ts imports
find src -name "*.tsx" -type f -exec sed -i '' 's/from '\''react\.ts'\''/from '\''react'\''/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/from '\''framer-motion\.ts'\''/from '\''framer-motion'\''/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/from '\''react-router-dom\.ts'\''/from '\''react-router-dom'\''/g' {} \;

# Fix any other .ts imports
find src -name "*.tsx" -type f -exec sed -i '' 's/from '\''\([^'\'']*\)\.ts'\''/from '\''\1'\''/g' {} \;

echo "React import fixes completed!"
