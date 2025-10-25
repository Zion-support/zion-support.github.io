#!/bin/bash

echo "Starting final cleanup..."

# Remove all remaining problematic files
echo "Removing all problematic files..."
rm -rf app/components/*.tsx
rm -rf app/config
rm -rf app/hooks
rm -rf app/pages
rm -rf app/utils
rm -rf app/constants
rm -rf app/globals.css

# Keep only essential files
echo "Keeping only essential files..."
mkdir -p app/components

# Create minimal globals.css
cat > app/globals.css << 'CSS_EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}
CSS_EOF

echo "Final cleanup completed!"
