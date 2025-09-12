#!/bin/bash

# Find all files with merge conflicts
conflicted_files=$(find ./pages -name "*.tsx" | xargs grep -l "

for file in $conflicted_files; do
    echo "Fixing $file..."
    
    # Create a clean version
    cat > "$file" << 'EOF'
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
EOF
done

echo "Fixed all conflicted files"