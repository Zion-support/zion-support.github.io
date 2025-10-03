#!/bin/bash

echo "Fixing TypeScript syntax errors..."

# Fix import statements
find src -name "*.tsx" -type f -exec sed -i "s/from 'react-router-dom''/from 'react-router-dom'/g" {} \;
find src -name "*.tsx" -type f -exec sed -i "s/from 'react-helmet-async''/from 'react-helmet-async'/g" {} \;

# Fix React.FC declarations
find src -name "*.tsx" -type f -exec sed -i "s/React\.FC  = () => {/React.FC = () => {/g" {} \;

# Fix malformed quotes and string literals
find src -name "*.tsx" -type f -exec sed -i 's/",\"/\",/g' {} \;
find src -name "*.tsx" -type f -exec sed -i 's/""/"/g' {} \;

# Fix missing commas in object properties
find src -name "*.tsx" -type f -exec sed -i 's/description: "\([^"]*\)"$/description: "\1",/g' {} \;
find src -name "*.tsx" -type f -exec sed -i 's/icon: "\([^"]*\)"$/icon: "\1",/g' {} \;
find src -name "*.tsx" -type f -exec sed -i 's/features: \[\([^]]*\)\]$/features: [\1],/g' {} \;

# Fix JSX syntax issues
find src -name "*.tsx" -type f -exec sed -i 's/target: "_blank"/target="_blank"/g' {} \;
find src -name "*.tsx" -type f -exec sed -i 's/className = "\([^"]*\)">/className="\1">/g' {} \;

echo "Syntax fixes completed!"