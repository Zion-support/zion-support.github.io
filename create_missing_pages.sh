#!/bin/bash

# List of missing pages to create
pages=(
  "inventory-management-system"
  "financial-reporting-tool"
  "employee-time-tracker"
  "social-media-scheduler"
  "email-marketing-platform"
  "website-analytics-tool"
  "task-automation-workflow"
  "ai-powered-email-analyzer"
  "smart-inventory-optimizer"
  "ai-customer-sentiment-tracker"
  "smart-expense-categorizer"
  "ai-chatbot-builder"
  "ai-code-assistant"
  "ai-design-studio"
  "ai-business-intelligence"
  "ai-automation"
  "ai-computer-vision"
  "ai-conversational-ai"
  "ai-crm"
  "ai-customer-insights"
  "ai-data-visualization"
  "ai-devops-automation"
  "ai-document-intelligence"
  "cloud-consulting"
  "data-center-solutions"
  "disaster-recovery"
  "it-support"
  "managed-services"
  "security-audit"
  "technology-consulting"
  "web-development"
  "system-integration"
  "network-security"
  "it-consulting"
  "cloud-migration"
  "micro-saas-services"
  "ai-analytics"
  "ai-content-generation"
  "ai-customer-support"
  "ai-cybersecurity"
  "ai-data-analytics"
  "ai-document-processing"
  "ai-marketing-automation"
  "ai-predictive-analytics"
  "ai-voice-assistant"
  "ai-workflow-automation"
  "5g-solutions"
  "5g-network-infrastructure"
  "5g-edge-computing"
  "5g-iot-solutions"
  "5g-smart-city-solutions"
  "5g-private-networks"
  "5g-mobile-applications"
  "5g-data-analytics"
  "5g-implementation"
)

# Create directories and basic page files
for page in "${pages[@]}"; do
  echo "Creating $page..."
  mkdir -p "/workspace/app/$page"
  
  # Extract the main name for the title
  title=$(echo "$page" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
  
  cat > "/workspace/app/$page/page.tsx" << PAGE_EOF
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ${title// /}Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="$title - Zion Tech Group"
        description="Professional $title services and solutions for modern businesses."
        keywords="$page, services, solutions, technology"
        canonical="https://ziontechgroup.com/$page"
      />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              $title
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Professional $title services and solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ${title// /}Page;
PAGE_EOF
done

echo "All pages created successfully!"
