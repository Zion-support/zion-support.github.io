#!/bin/bash

# Function to create a standard page component
create_page() {
  local file_path="$1"
  local title="$2"
  local description="$3"
  local content="$4"
  
  cat > "$file_path" << EOL
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${title// /}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            ${description}
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
              <p className="text-gray-600">
                ${content}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
              <p className="text-gray-600">
                Advanced technology integration and optimization.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
              <p className="text-gray-600">
                Scalable and secure implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
EOL
}

# Fix all the corrupted files
create_page "/workspace/app/ai-mobile-app-builder/page.tsx" "AI Mobile App Builder" "Build intelligent mobile applications with AI-powered features" "Create cross-platform mobile apps with advanced AI capabilities"
create_page "/workspace/app/ai-mobile-builder/page.tsx" "AI Mobile Builder" "Build intelligent mobile applications with AI-powered features" "Create cross-platform mobile apps with advanced AI capabilities"
create_page "/workspace/app/ai-website-builder/page.tsx" "AI Website Builder" "Build intelligent websites with AI-powered features" "Create responsive websites with advanced AI capabilities"
create_page "/workspace/app/landing-page-builder/page.tsx" "Landing Page Builder" "Build high-converting landing pages with AI assistance" "Create effective landing pages that convert visitors to customers"
create_page "/workspace/app/ai-survey-builder/page.tsx" "AI Survey Builder" "Build intelligent surveys with AI-powered analytics" "Create engaging surveys with advanced AI analytics"
create_page "/workspace/app/cloud-infrastructure-management/page.tsx" "Cloud Infrastructure Management" "Manage your cloud infrastructure with AI-powered tools" "Optimize and manage your cloud infrastructure efficiently"
create_page "/workspace/app/cybersecurity-solutions/page.tsx" "Cybersecurity Solutions" "Advanced cybersecurity solutions for your business" "Protect your business with cutting-edge cybersecurity solutions"
create_page "/workspace/app/zion-ai-analytics-pro/page.tsx" "Zion AI Analytics Pro" "Advanced AI analytics platform for business intelligence" "Get insights from your data with our AI-powered analytics platform"
create_page "/workspace/app/zion-ai-crm-pro/page.tsx" "Zion AI CRM Pro" "AI-powered customer relationship management system" "Manage your customer relationships with intelligent AI tools"
create_page "/workspace/app/zion-ai-inventory-manager/page.tsx" "Zion AI Inventory Manager" "AI-powered inventory management system" "Optimize your inventory with intelligent AI management tools"

# Fix micro-saas services
create_page "/workspace/app/micro-saas-services/ai-chatbot-builder/page.tsx" "AI Chatbot Builder" "Build intelligent chatbots for your micro-SaaS" "Create custom chatbots for your micro-SaaS applications"

echo "Fixed all corrupted files successfully"
