#!/bin/bash

# Find all files with framer-motion imports
files=$(find /workspace/src -name "*.jsx" -o -name "*.tsx" | xargs grep -l "framer-motion" 2>/dev/null)

for file in $files; do
  echo "Processing $file..."
  
  # Remove framer-motion import lines
  sed -i '/import.*framer-motion/d' "$file"
  
  # Replace motion. with div
  sed -i 's/motion\./div/g' "$file"
  
  # Replace AnimatePresence with div
  sed -i 's/AnimatePresence/div/g' "$file"
  
  # Remove motion props
  sed -i '/initial=/d' "$file"
  sed -i '/animate=/d' "$file"
  sed -i '/exit=/d' "$file"
  sed -i '/transition=/d' "$file"
  sed -i '/whileHover=/d' "$file"
  sed -i '/whileTap=/d' "$file"
  sed -i '/layout/d' "$file"
  sed -i '/variants=/d' "$file"
  sed -i '/mode="wait"/d' "$file"
  
  echo "Fixed $file"
done

echo "All framer-motion references removed!"