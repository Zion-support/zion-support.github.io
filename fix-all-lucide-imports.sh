#!/bin/bash

# Find all .tsx files that have lucide-react import issues
find /workspace/app -name "*.tsx" -exec grep -l "from 'lucide-react'" {} \; | while read file; do
  echo "Fixing $file"
  
  # Remove problematic imports
  sed -i 's/, Tag//g' "$file"
  sed -i 's/Tag, //g' "$file"
  sed -i 's/, Target//g' "$file"
  sed -i 's/Target, //g' "$file"
  sed -i 's/, Cpu//g' "$file"
  sed -i 's/Cpu, //g' "$file"
  
  # Replace usage
  sed -i 's/<Tag/<Brain/g' "$file"
  sed -i 's/<\/Tag/<\/Brain/g' "$file"
  sed -i 's/<Target/<ArrowRight/g' "$file"
  sed -i 's/<\/Target/<\/ArrowRight/g' "$file"
  sed -i 's/<Cpu/<Brain/g' "$file"
  sed -i 's/<\/Cpu/<\/Brain/g' "$file"
done

echo "Fixed all lucide-react import issues"