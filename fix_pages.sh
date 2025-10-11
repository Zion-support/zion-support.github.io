#!/bin/bash

# Fix all remaining pages with proper variable names
declare -A pages=(
  ["ai-customer-support"]="AiCustomerSupportPage"
  ["ai-data-analytics"]="AiDataAnalyticsPage"
  ["ai-workflow-automation"]="AiWorkflowAutomationPage"
  ["ai-content-generator"]="AiContentGeneratorPage"
  ["cloud-infrastructure"]="CloudInfrastructurePage"
  ["cybersecurity-solutions"]="CybersecuritySolutionsPage"
  ["web-development"]="WebDevelopmentPage"
  ["mobile-development"]="MobileDevelopmentPage"
  ["cloud-migration"]="CloudMigrationPage"
)

for page in "${!pages[@]}"; do
  component_name="${pages[$page]}"
  cat > app/$page/page.tsx << EOL
'use client';
import React from 'react';

const $component_name: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">${page^}</h1>
        <p className="text-gray-300 text-lg">
          Content coming soon.
        </p>
      </div>
    </div>
  );
};

export default $component_name;
EOL
done
