#!/bin/bash

# Fix 5G pages with proper component names
pages=(
  "5g-data-analytics:FiveGDataAnalytics"
  "5g-edge-computing:FiveGEdgeComputing"
  "5g-implementation:FiveGImplementation"
  "5g-iot-solutions:FiveGIotSolutions"
  "5g-mobile-applications:FiveGMobileApplications"
  "5g-network-infrastructure:FiveGNetworkInfrastructure"
  "5g-smart-city-solutions:FiveGSmartCitySolutions"
  "5g-solutions:FiveGSolutions"
)

for page_info in "${pages[@]}"; do
  page_dir=$(echo $page_info | cut -d: -f1)
  component_name=$(echo $page_info | cut -d: -f2)
  
  if [ -f "/workspace/app/$page_dir/page.tsx" ]; then
    echo "Fixing $page_dir -> $component_name"
    sed -i "s/const ${page_dir}Page = () => {/const ${component_name}Page = () => {/g" "/workspace/app/$page_dir/page.tsx"
    sed -i "s/export default ${page_dir}Page;/export default ${component_name}Page;/g" "/workspace/app/$page_dir/page.tsx"
  fi
done

echo "All 5G pages fixed!"
