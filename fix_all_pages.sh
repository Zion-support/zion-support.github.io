#!/bin/bash

# List of problematic pages to fix
pages=(
  "app/ai-automation/page.tsx"
  "app/ai-chatbot-builder/page.tsx"
  "app/ai-email-assistant/page.tsx"
  "app/ai-invoice-generator/page.tsx"
  "app/ai-voice-assistant/page.tsx"
  "app/ai-customer-support-chatbot/page.tsx"
  "app/ai-expense-tracker/page.tsx"
  "app/system-integration/page.tsx"
  "app/ai-project-management-pro/page.tsx"
  "app/ai-ecommerce-optimizer-pro/page.tsx"
  "app/ai-email-marketing-automation/page.tsx"
  "app/ai-social-media-manager/page.tsx"
  "app/micro-saas-services/page.tsx"
  "app/micro-saas/page.tsx"
  "app/it-services/page.tsx"
  "app/ai-services/page.tsx"
)

# Function to create a basic page
create_basic_page() {
  local file_path="$1"
  local page_name=$(basename "$(dirname "$file_path")" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
  
  cat > "$file_path" << PAGE_EOF
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>$page_name - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Advanced AI and IT Solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">$page_name</h1>
          <p className="text-gray-300">This page is under development.</p>
        </div>
      </div>
    </>
  );
};

export default Page;
PAGE_EOF
}

# Fix each page
for page in "${pages[@]}"; do
  if [ -f "$page" ]; then
    echo "Fixing $page..."
    create_basic_page "$page"
  else
    echo "Creating $page..."
    mkdir -p "$(dirname "$page")"
    create_basic_page "$page"
  fi
done

echo "All pages fixed!"
