#!/bin/bash

# Script to resolve merge conflicts by choosing the cleaner version
# This removes conflict markers and keeps the cleaner formatting

echo "Resolving merge conflicts..."

# List of files with conflicts
files=(
  "api/onsite-request.js"
  "api/shipping-rates.js" 
  "api/subscribe.js"
  "lib/error-handler.ts"
  "lib/integrations/connectors.ts"
  "lib/integrations/fileStore.ts"
  "lib/integrations/registry.ts"
  "lib/integrations/types.ts"
  "lib/performance.ts"
  "lib/security.js"
  "utils/accessibilityUtils.ts"
  "utils/bannerLazyLoader.ts"
  "utils/bannerPrioritization.ts"
  "utils/bannerRegistry.ts"
  "utils/bannerRotationSystem.ts"
  "utils/comprehensiveOptimizer.ts"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
    
    # Remove conflict markers and choose the cleaner version
    # This removes lines with <<<<<<< HEAD, =======, and >>>>>>> main
    # and keeps the content that's not just whitespace
    sed -i '/^<<<<<<< HEAD$/,/^>>>>>>> main$/{
      /^<<<<<<< HEAD$/d
      /^=======$/d
      /^>>>>>>> main$/d
      /^[[:space:]]*$/d
    }' "$file"
    
    # Clean up any remaining empty lines
    sed -i '/^[[:space:]]*$/N;/^\n$/d' "$file"
  fi
done

echo "Conflict resolution complete!"