#!/bin/bash

echo "Fixing all broken page files..."

# Find all page.tsx files that might be broken
page_files=$(find /workspace/app -name "page.tsx" -type f)

for file in $page_files; do
    echo "Checking: $file"
    
    # Check if file ends properly
    if [ -f "$file" ]; then
        # Get the last few lines to check if it's complete
        last_lines=$(tail -5 "$file")
        
        # Check if file ends with export statement or closing brace
        if ! echo "$last_lines" | grep -q "export default\|^};$"; then
            echo "  File appears incomplete, fixing..."
            
            # Get the component name from the file path
            component_name=$(basename $(dirname "$file") | sed 's/-/ /g' | sed 's/\b\w/\U&/g' | sed 's/ //g')
            
            # Add basic completion if file is too short
            if [ $(wc -l < "$file") -lt 20 ]; then
                cat >> "$file" << EOF

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="${component_name} - Zion Tech Group"
        description="Advanced ${component_name} solutions for modern businesses."
        canonical="https://ziontechgroup.com/$(basename $(dirname "$file"))"
      />
      
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              ${component_name}
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced ${component_name} solutions designed to transform your business.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ${component_name}Page;
EOF
            else
                # Just add the missing closing parts
                echo "  };" >> "$file"
                echo "" >> "$file"
                echo "export default ${component_name}Page;" >> "$file"
            fi
        fi
    fi
done

echo "Page files fix completed!"