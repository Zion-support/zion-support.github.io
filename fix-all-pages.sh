#!/bin/bash

# List of pages that need to be fixed
pages=(
  "ai-content-management"
  "database-services"
  "gdpr"
  "press"
  "devops-solutions"
  "iot-edge-computing"
  "smart-city-infrastructure"
  "ai-cybersecurity-suite"
  "robotics"
  "system-integration"
  "enterprise"
  "task-manager-pro"
  "cookie-policy"
  "smart-analytics"
  "gdpr-compliance"
  "enterprise-security"
  "ai-email-marketing-automation"
  "training"
  "services-advertising"
  "team"
  "ai-crm-assistant"
  "ai-social-media-manager"
  "micro-saas-services"
  "data-center"
)

# Create a template for all pages
create_page() {
  local page_name=$1
  local title=$2
  local description=$3
  
  cat > "/workspace/app/$page_name/page.tsx" << PAGE_EOF
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Zap } from 'lucide-react'

export default function ${page_name^}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>$title - Zion Tech Group</title>
        <meta name="description" content="$description" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm font-medium text-white">$title</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            $title Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            $description
          </p>
        </div>

        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Get Started
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}
PAGE_EOF
}

# Create all pages
for page in "${pages[@]}"; do
  echo "Creating page: $page"
  create_page "$page" "${page^}" "Professional $page services by Zion Tech Group. Transform your business with our expert solutions."
done

echo "All pages created successfully!"
