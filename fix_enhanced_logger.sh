#!/bin/bash

# Fix syntax errors in enhancedLogger.ts file

file="/workspace/app/utils/enhancedLogger.ts"

if [ -f "$file" ]; then
  echo "Fixing $file..."
  
  # Fix extra closing braces after properties
  sed -i 's/stack: error\.stack\}/stack: error.stack/g' "$file"
  sed -i 's/}\s*}/}/g' "$file"
  
  # Fix missing opening braces for functions
  sed -i 's/): void {}/): void {/g' "$file"
  
  echo "Enhanced logger syntax errors fixed!"
else
  echo "File not found: $file"
fi