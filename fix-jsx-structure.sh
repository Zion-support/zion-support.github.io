#!/bin/bash

# List of pages to fix
pages=(
  "/workspace/app/analytics-tools/page.tsx"
  "/workspace/app/blockchain-web3/page.tsx"
  "/workspace/app/blockchain/page.tsx"
  "/workspace/app/case-studies/page.tsx"
  "/workspace/app/cybersecurity/page.tsx"
  "/workspace/app/iot-edge/page.tsx"
  "/workspace/app/iot-edge-computing/page.tsx"
  "/workspace/app/it-infrastructure/page.tsx"
  "/workspace/app/robotics/page.tsx"
  "/workspace/app/sitemap-page.tsx"
  "/workspace/app/micro-saas/page.tsx"
)

for page in "${pages[@]}"; do
  if [ -f "$page" ]; then
    echo "Fixing JSX structure in $page..."
    
    # Fix the return statement structure
    sed -i 's/return (/return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">/' "$page"
    sed -i 's/      <Navigation \/>/      <Navigation \/>/' "$page"
    sed -i 's/      <main className="container mx-auto px-4 py-16 pt-24">/      <main className="container mx-auto px-4 py-16 pt-24">/' "$page"
    
    # Fix SEOOptimizer structure
    sed -i 's/      <SEOOptimizer/      <SEOOptimizer/' "$page"
    sed -i 's/        title="/        title="/' "$page"
    sed -i 's/        description="/        description="/' "$page"
    sed -i 's/        keywords={\[/        keywords={[/' "$page"
    sed -i 's/      \/>/      \/>/' "$page"
    
    # Add proper closing tags
    sed -i 's/    <\/div>/      <\/main>\n      <Footer \/>\n    <\/div>/' "$page"
    
    echo "Fixed $page"
  fi
done

echo "All JSX structures fixed!"