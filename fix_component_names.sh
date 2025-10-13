#!/bin/bash

# Fix component names in all generated pages
missing_pages=(
  "zion-ai-email-analyzer"
  "zion-smart-inventory-optimizer"
  "zion-ai-customer-sentiment-tracker"
  "zion-smart-expense-categorizer"
  "zion-ai-social-media-manager"
  "zion-ai-performance-optimizer"
  "zion-ai-customer-churn-predictor"
  "zion-ai-financial-forecaster"
  "zion-ai-content-moderator"
  "zion-ai-task-scheduler"
  "zion-ai-customer-support-pro"
)

for page in "${missing_pages[@]}"; do
  echo "Fixing component name for: $page"
  
  # Convert kebab-case to PascalCase
  component_name=$(echo "$page" | sed 's/-\([a-z]\)/\U\1/g' | sed 's/^\([a-z]\)/\U\1/')
  
  # Fix the component name in the file
  sed -i "s/const PAGE_NAME = () => {/const $component_name = () => {/g" "/workspace/app/$page/page.tsx"
  sed -i "s/export default PAGE_NAME;/export default $component_name;/g" "/workspace/app/$page/page.tsx"
  
  echo "Fixed: $page -> $component_name"
done

echo "All component names fixed!"
