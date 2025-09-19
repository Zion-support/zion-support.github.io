#!/bin/bash

echo "Cleaning up missing imports and routes..."

# List of missing components to remove
missing_components=(
  "RevolutionaryCaseStudies2029"
  "UltimateTechInnovation2028"
  "RevolutionaryTechTrends2028"
  "AIBusinessRevolution2028"
  "RevolutionaryTechShowcase2028"
  "NextGenTechRevolution2028"
  "UltimateAIConsciousness2030"
  "QuantumRealityEngine2032"
  "UltimateTechBreakthrough2029"
  "RevolutionaryTechShowcase2029"
  "NextGenInnovationHub2029"
)

# Remove import statements
for component in "${missing_components[@]}"; do
  echo "Removing import for $component"
  sed -i "/import.*$component.*from/d" App.tsx
done

# Remove route statements
for component in "${missing_components[@]}"; do
  echo "Removing route for $component"
  sed -i "/<Route.*$component.*element/d" App.tsx
done

echo "Cleanup complete!"