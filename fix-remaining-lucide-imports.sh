#!/bin/bash

# Find all .tsx files that have lucide-react import issues
find /workspace/app -name "*.tsx" -exec grep -l "from 'lucide-react'" {} \; | while read file; do
  echo "Fixing $file"
  
  # Remove problematic imports
  sed -i 's/, Atom//g' "$file"
  sed -i 's/Atom, //g' "$file"
  sed -i 's/, Tag//g' "$file"
  sed -i 's/Tag, //g' "$file"
  sed -i 's/, Target//g' "$file"
  sed -i 's/Target, //g' "$file"
  sed -i 's/, Cpu//g' "$file"
  sed -i 's/Cpu, //g' "$file"
  
  # Add missing imports if needed
  if grep -q "ArrowRight" "$file" && ! grep -q "ArrowRight" "$file" | grep -q "import"; then
    sed -i 's/import { \([^}]*\) } from '\''lucide-react'\'';/import { \1, ArrowRight } from '\''lucide-react'\'';/g' "$file"
  fi
  
  if grep -q "Brain" "$file" && ! grep -q "Brain" "$file" | grep -q "import"; then
    sed -i 's/import { \([^}]*\) } from '\''lucide-react'\'';/import { \1, Brain } from '\''lucide-react'\'';/g' "$file"
  fi
  
  # Replace usage
  sed -i 's/<Atom/<Brain/g' "$file"
  sed -i 's/<\/Atom/<\/Brain/g' "$file"
  sed -i 's/<Tag/<Brain/g' "$file"
  sed -i 's/<\/Tag/<\/Brain/g' "$file"
  sed -i 's/<Target/<ArrowRight/g' "$file"
  sed -i 's/<\/Target/<\/ArrowRight/g' "$file"
  sed -i 's/<Cpu/<Brain/g' "$file"
  sed -i 's/<\/Cpu/<\/Brain/g' "$file"
done

echo "Fixed all remaining lucide-react import issues"