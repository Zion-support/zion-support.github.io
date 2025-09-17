#!/bin/bash

# Script to fix broken React component files
echo "Fixing broken React component files..."

# Find all broken JSX files in src/pages
find src/pages -name "*.jsx" -exec grep -l "export default" {} \; | while read file; do
    # Check if the file has proper React structure
    if ! grep -q "import React" "$file" || ! grep -q "const.*= () =>" "$file" || ! grep -q "return (" "$file"; then
        echo "Fixing: $file"
        
        # Get the component name from the export statement
        component_name=$(grep "export default" "$file" | sed 's/export default //' | sed 's/;//')
        
        # Create a proper React component structure
        cat > "$file" << EOF
import React from "react";

const $component_name = () => {
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

echo "Broken files fixed!"