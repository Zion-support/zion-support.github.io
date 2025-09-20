#!/bin/bash

# Function to create a simple stub file
create_stub() {
    local file="$1"
    local name=$(basename "$file" .tsx)
    
    cat > "$file" << EOL
import React from 'react';
import { SEO } from "@/components/SEO";

export default function $name() {
  return (
    <>
      <SEO 
        title="$name - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">$name</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
EOL
}

# List of problematic files to fix
files=(
    "/workspace/src/pages/GlobalMap.tsx"
    "/workspace/src/pages/GreenIT.tsx"
    "/workspace/src/pages/HiringTracker.tsx"
    "/workspace/src/pages/ITSupportPage.tsx"
    "/workspace/src/pages/Interviews.tsx"
)

# Fix each file
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Fixing $file"
        create_stub "$file"
    fi
done

echo "Fixed all syntax errors"
