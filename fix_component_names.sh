#!/bin/bash

echo "Fixing component names..."

# Fix all the files with space issues
files=(
  "src/ai-automation/page.tsx"
  "src/ai-content-generation/page.tsx"
  "src/ai-customer-support-bot/page.tsx"
  "src/ai-email-marketing/page.tsx"
  "src/ai-fashion-design/page.tsx"
  "src/ai-financial-analyzer/page.tsx"
  "src/ai-fitness-coach/page.tsx"
  "src/ai-mobile-app-development/page.tsx"
  "src/ai-music-composition/page.tsx"
  "src/ai-seo-optimizer/page.tsx"
  "src/ai-social-media-manager/page.tsx"
  "src/ai-video-generation/page.tsx"
  "src/ai-voice-cloning/page.tsx"
  "src/autonomous-systems/page.tsx"
  "src/blockchain-web3/page.tsx"
  "src/cloud-services/page.tsx"
  "src/computer-vision/page.tsx"
  "src/database-services/page.tsx"
  "src/iot-edge-computing/page.tsx"
  "src/it-infrastructure/page.tsx"
  "src/it-support/page.tsx"
  "src/machine-learning/page.tsx"
  "src/micro-saas/page.tsx"
  "src/network-infrastructure/page.tsx"
  "src/quantum-ai/page.tsx"
  "src/quantum-computing/page.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing: $file"
    # Get the directory name and convert to proper component name
    dir_name=$(basename "$(dirname "$file")")
    component_name=$(echo "$dir_name" | sed 's/-\([a-z]\)/\U\1/g' | sed 's/^\([a-z]\)/\U\1/')
    
    cat > "$file" << PAGE
import React from 'react';

const ${component_name}Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">${component_name}</h1>
        <p className="text-gray-600">This page is under construction. Please check back later.</p>
      </div>
    </div>
  );
};

export default ${component_name}Page;
PAGE
  fi
done

echo "Component name fixing completed!"
