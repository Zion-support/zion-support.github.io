#!/bin/bash

# Find all .tsx files and fix duplicate imports
find /workspace/app -name "*.tsx" -exec grep -l "from 'lucide-react'" {} \; | while read file; do
  echo "Fixing duplicates in $file"
  
  # Remove duplicate imports by keeping only unique values
  sed -i 's/import { \([^}]*\) } from '\''lucide-react'\'';/import { \1 } from '\''lucide-react'\'';/g' "$file"
  
  # Fix specific duplicate patterns
  sed -i 's/, ArrowRight, ArrowRight/, ArrowRight/g' "$file"
  sed -i 's/ArrowRight, ArrowRight, /ArrowRight, /g' "$file"
  sed -i 's/, Brain, Brain/, Brain/g' "$file"
  sed -i 's/Brain, Brain, /Brain, /g' "$file"
  sed -i 's/, Target, Target/, Target/g' "$file"
  sed -i 's/Target, Target, /Target, /g' "$file"
  sed -i 's/, Cpu, Cpu/, Cpu/g' "$file"
  sed -i 's/Cpu, Cpu, /Cpu, /g' "$file"
  sed -i 's/, Tag, Tag/, Tag/g' "$file"
  sed -i 's/Tag, Tag, /Tag, /g' "$file"
done

echo "Fixed all duplicate imports"