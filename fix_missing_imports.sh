#!/bin/bash

<<<<<<< HEAD
# Script to fix missing imports in App.tsx
echo "Fixing missing imports..."

# Read App.tsx and find all import statements
grep "import.*from" App.tsx | while read line; do
    # Extract the import path
    import_path=$(echo "$line" | sed -n "s/.*from '\([^']*\)'.*/\1/p")
    
    if [[ -n "$import_path" ]]; then
        # Remove the leading './' if present
        clean_path=${import_path#./}
        
        # Check if the file exists
        if [[ ! -f "$clean_path" ]]; then
            echo "Missing file: $clean_path"
            
            # Try to find the file in different locations
            found_file=$(find . -name "$(basename "$clean_path")" -type f 2>/dev/null | head -1)
            
            if [[ -n "$found_file" ]]; then
                echo "Found alternative: $found_file"
                # Update the import in App.tsx
                sed -i "s|from '$import_path'|from '$found_file'|g" App.tsx
                echo "Updated import for $(basename "$clean_path")"
            else
                echo "No alternative found for $(basename "$clean_path")"
                # Comment out the import and usage
                component_name=$(basename "$clean_path" | sed 's/\.[^.]*$//')
                sed -i "s|^import $component_name|// import $component_name|g" App.tsx
                sed -i "s|<$component_name />|{/* <$component_name /> */}|g" App.tsx
                echo "Commented out $component_name"
            fi
        fi
    fi
done

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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d
