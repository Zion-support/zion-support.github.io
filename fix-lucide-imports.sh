#!/bin/bash

# Find all .tsx files that import Target or Cpu from lucide-react
find /workspace/app -name "*.tsx" -exec grep -l "Target\|Cpu" {} \; | while read file; do
  echo "Fixing $file"
  
  # Remove Target and Cpu from imports
  sed -i 's/, Target//g' "$file"
  sed -i 's/Target, //g' "$file"
  sed -i 's/, Cpu//g' "$file"
  sed -i 's/Cpu, //g' "$file"
  
  # Replace Target usage with ArrowRight
  sed -i 's/<Target/<ArrowRight/g' "$file"
  sed -i 's/<\/Target/<\/ArrowRight/g' "$file"
  
  # Replace Cpu usage with Brain
  sed -i 's/<Cpu/<Brain/g' "$file"
  sed -i 's/<\/Cpu/<\/Brain/g' "$file"
done

echo "Fixed all lucide-react import issues"