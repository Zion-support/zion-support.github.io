#!/bin/bash

echo "Import fixing completed!"
=======
# Script to find and fix missing imports in App.tsx
echo "Finding and fixing missing imports..."

# Extract all imports from App.tsx that reference src/pages
grep "import.*from './src/pages/" App.tsx | sed "s/.*import \([^ ]*\) from '\.\/src\/pages\/\([^']*\)'.*/\1 \2/" | while read component_name file_path; do
    # Remove .jsx or .tsx extension from file_path
    clean_path=$(echo "$file_path" | sed 's/\.\(jsx\|tsx\)$//')
    
    # Check if the file exists
    if [ ! -f "src/pages/${file_path}" ] && [ ! -f "src/pages/${clean_path}.jsx" ] && [ ! -f "src/pages/${clean_path}.tsx" ]; then
        echo "Missing component: $component_name -> src/pages/${file_path}"
        
        # Determine file extension
        if [[ "$file_path" == *.tsx ]]; then
            ext="tsx"
        else
            ext="jsx"
        fi
        
        # Create the missing component
        cat > "src/pages/${file_path}" << EOF
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
        echo "Created: src/pages/${file_path}"
    fi
done

echo "Missing imports fixed!"
