#!/bin/bash

# List of pages to fix
pages=(
  "/workspace/app/cybersecurity/page.tsx"
  "/workspace/app/iot-edge-computing/page.tsx"
  "/workspace/app/ai-services/page.tsx"
  "/workspace/app/blockchain-web3/page.tsx"
  "/workspace/app/analytics-tools/page.tsx"
  "/workspace/app/blockchain/page.tsx"
  "/workspace/app/iot-edge/page.tsx"
  "/workspace/app/case-studies/page.tsx"
  "/workspace/app/robotics/page.tsx"
  "/workspace/app/it-infrastructure/page.tsx"
  "/workspace/app/sitemap-page.tsx"
  "/workspace/app/micro-saas/page.tsx"
)

for page in "${pages[@]}"; do
  if [ -f "$page" ]; then
    echo "Fixing $page..."
    
    # Replace react-helmet-async imports
    sed -i 's/import React from '\''react'\'';/'\''use client'\'';\nimport React from '\''react'\'';\nimport Navigation from '\''..\/components\/Navigation'\'';\nimport Footer from '\''..\/components\/Footer'\'';\nimport SEOOptimizer from '\''..\/components\/SEOOptimizer'\'';/' "$page"
    sed -i '/import { Helmet } from '\''react-helmet-async'\'';/d' "$page"
    
    # Replace Helmet usage with SEOOptimizer
    sed -i 's/<Helmet>/<SEOOptimizer/' "$page"
    sed -i 's/<\/Helmet>/\/>/' "$page"
    sed -i 's/<title>/title="/' "$page"
    sed -i 's/<\/title>/"/' "$page"
    sed -i 's/<meta name="description" content="/description="/' "$page"
    sed -i 's/<\/meta>/\/>/' "$page"
    sed -i 's/<meta name="keywords" content="/keywords={[/' "$page"
    sed -i 's/] \/>/]}\n        canonicalUrl="https:\/\/ziontechgroup.com\/'"$(basename $(dirname $page))"'"\n      \/>/' "$page"
    
    # Add Navigation and Footer
    sed -i '/return (/a\      <Navigation />\n      <main className="container mx-auto px-4 py-16 pt-24">' "$page"
    sed -i '/<\/main>/a\      <Footer />' "$page"
    
    echo "Fixed $page"
  fi
done

echo "All pages fixed!"