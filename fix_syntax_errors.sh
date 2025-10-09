#!/bin/bash

# Fix syntax errors in TSX files by removing extra closing braces after benefits arrays

files=(
  "/workspace/app/cloud-migration/page.tsx"
  "/workspace/app/ai-email-marketing/page.tsx"
  "/workspace/app/ai-customer-support/page.tsx"
  "/workspace/app/ai-analytics/page.tsx"
  "/workspace/app/ai-automation/page.tsx"
  "/workspace/app/ai-customer-support-bot/page.tsx"
  "/workspace/app/ai-project-manager/page.tsx"
  "/workspace/app/ai-social-media-manager/page.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing $file..."
    # Replace "benefits: [...]]}" with "benefits: [...]]"
    sed -i 's/benefits: \[\([^]]*\)\]\}/\benefits: [\1]/g' "$file"
  fi
done

echo "Syntax errors fixed!"