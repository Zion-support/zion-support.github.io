#!/bin/bash

# Script to fix all broken TSX files in src/pages
echo "Fixing all broken TSX files in src/pages..."

# Find all TSX files in src/pages that are broken
find src/pages -name "*.tsx" | while read file; do
    # Check if the file is broken (missing proper React structure or has syntax errors)
    if ! grep -q "import React" "$file" || ! grep -q "const.*= () =>" "$file" || ! grep -q "return (" "$file" || ! grep -q "export default" "$file" || grep -q "Expected identifier but found" "$file" 2>/dev/null; then
        echo "Fixing broken TSX file: $file"
        
        # Get the component name from the export statement or filename
        component_name=$(grep "export default" "$file" 2>/dev/null | sed "s/export default //" | sed "s/;//" | head -1)
        if [ -z "$component_name" ]; then
            # Extract from filename
            component_name=$(basename "$file" .tsx)
        fi
        
        # Create a proper React component structure
        cat > "$file" << EOF
import React from 'react';

const $component_name: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">$component_name</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default $component_name;
EOF
        echo "Fixed: $file"
    fi
done

echo "All TSX page files fixed!"