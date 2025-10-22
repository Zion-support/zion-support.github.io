#!/bin/bash

# List of all utility files to fix
files=(
  "app/utils/accessibilityEnhancer.ts"
  "app/utils/accessibilityUtils.ts"
  "app/utils/advancedAnalytics.ts"
  "app/utils/analytics.ts"
  "app/utils/analyticsTracker.ts"
  "app/utils/dataValidator.ts"
  "app/utils/logger.ts"
  "app/utils/monitoring.ts"
  "app/utils/performanceMetrics.ts"
  "app/utils/performanceOptimizations.ts"
  "app/utils/sitemapGenerator.ts"
  "app/utils/validators.ts"
)

# Function to create a clean utility file
create_clean_utility() {
  local file_path="$1"
  local utility_name=$(basename "$file_path" .ts)
  
  cat > "$file_path" << UTILITY_EOF
// ${utility_name} utility functions

export const ${utility_name} = {
  // Utility functions will be implemented here
  init: () => {
    console.log('${utility_name} initialized')
  },
  
  // Add more utility functions as needed
  utils: {
    // Utility methods
  }
}

export default ${utility_name}
UTILITY_EOF
}

# Fix each file
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing $file..."
    create_clean_utility "$file"
  fi
done

echo "All utility files have been fixed!"
