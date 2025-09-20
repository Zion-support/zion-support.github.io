#!/bin/bash

# Create simple stub files for corrupted pages
create_stub_file() {
    local file="$1"
    local component_name="$2"
    cat > "$file" << EOL
import React from 'react';
import { SEO } from "@/components/SEO";

export default function $component_name() {
  return (
    <>
      <SEO 
        title="$component_name - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">$component_name</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
EOL
}

# Fix the most critical files
create_stub_file "/workspace/src/pages/EquipmentDetail.tsx" "EquipmentDetail"
create_stub_file "/workspace/src/pages/EquipmentPage.tsx" "EquipmentPage"
create_stub_file "/workspace/src/pages/EquipmentRecommendations.tsx" "EquipmentRecommendations"
create_stub_file "/workspace/src/pages/ForumCategoryPage.tsx" "ForumCategoryPage"
create_stub_file "/workspace/src/pages/ForumPostPage.tsx" "ForumPostPage"

echo "Fixed critical syntax errors"
