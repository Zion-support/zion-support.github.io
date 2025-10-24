#!/bin/bash

echo "Fixing corrupted files..."

# List of files that need to be fixed
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
  "src/cybersecurity/page.tsx"
  "src/database-services/page.tsx"
  "src/devops/page.tsx"
  "src/iot-edge-computing/page.tsx"
  "src/it-infrastructure/page.tsx"
  "src/it-support/page.tsx"
  "src/machine-learning/page.tsx"
  "src/micro-saas/page.tsx"
  "src/network-infrastructure/page.tsx"
  "src/nlp/page.tsx"
  "src/not-found.tsx"
  "src/page-optimized.tsx"
  "src/quantum-ai/page.tsx"
  "src/quantum-computing/page.tsx"
  "src/setupTests.tsx"
  "src/components/ContentNewsletterSignup.tsx"
  "src/components/DataCleanupManager.tsx"
  "src/components/PWAInstaller.tsx"
  "src/components/PerformanceDashboard.tsx"
  "src/components/SEO.tsx"
)

# Create basic page template
create_page() {
  local file="$1"
  local name=$(basename "$(dirname "$file")")
  name=$(echo "$name" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
  
  cat > "$file" << PAGE
import React from 'react';

const ${name}Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">${name}</h1>
        <p className="text-gray-600">This page is under construction. Please check back later.</p>
      </div>
    </div>
  );
};

export default ${name}Page;
PAGE
}

# Create basic component template
create_component() {
  local file="$1"
  local name=$(basename "$file" .tsx)
  name=$(echo "$name" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
  
  cat > "$file" << COMPONENT
import React from 'react';

const ${name} = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">${name}</h2>
      <p className="text-gray-600">This component is under construction.</p>
    </div>
  );
};

export default ${name};
COMPONENT
}

# Fix all files
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing: $file"
    if [[ "$file" == *"components"* ]]; then
      create_component "$file"
    else
      create_page "$file"
    fi
  fi
done

echo "File fixing completed!"
