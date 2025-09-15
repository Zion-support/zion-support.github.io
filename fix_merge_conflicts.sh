#!/bin/bash

# List of files with merge conflicts
files=(
  "/workspace/src/components/NewContentShowcase2026.tsx"
  "/workspace/src/components/InteractiveTechShowcase2026.tsx"
  "/workspace/src/pages/AdvancedCybersecuritySuite2026.tsx"
  "/workspace/src/pages/SpaceTechInnovation2026.tsx"
  "/workspace/src/pages/AdvancedBiotechAI2026.tsx"
  "/workspace/src/pages/AdvancedQuantumComputing2026.tsx"
  "/workspace/src/pages/AdvancedRobotics2026.tsx"
)

for file in "${files[@]}"; do
  echo "Fixing merge conflicts in $file"
  
  # Remove merge conflict markers and keep the first version (HEAD)
  sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
  sed -i '/^>>>>>>> /d' "$file"
  
  # Remove any remaining ======= lines
  sed -i '/^=======$/d' "$file"
done

echo "Merge conflicts fixed!"