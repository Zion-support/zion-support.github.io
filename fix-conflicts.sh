#!/bin/bash

# Find all files with merge conflicts
<<<<<<< HEAD
conflicted_files=$(find ./pages -name "*.tsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)
=======
files=$(find pages components -name "*.tsx" -o -name "*.ts" | xargs grep -l "")
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b

for file in $conflicted_files; do
    echo "Fixing $file..."
    
<<<<<<< HEAD
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
=======
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove all merge conflict markers and keep HEAD version
    sed -i '/^/,/^/!d' "$file"
    sed -i '/^/d' "$file"
    sed -i '/^    
    # Clean up any remaining conflict markers
    sed -i '/^
    sed -i '/^/d' "$file"
    sed -i '/^done
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b

echo "Fixed all conflicted files"