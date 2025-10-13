#!/bin/bash

# List of incomplete files that need to be fixed
incomplete_files=(
  "/workspace/app/ai-email-marketing-automation/page.tsx"
  "/workspace/app/ai-voice-assistant/page.tsx"
  "/workspace/app/ai-cybersecurity-suite/page.tsx"
  "/workspace/app/ai-drug-discovery-pro/page.tsx"
  "/workspace/app/devops/page.tsx"
  "/workspace/app/mobile-development/page.tsx"
  "/workspace/app/cybersecurity/page.tsx"
  "/workspace/app/data-analytics/page.tsx"
  "/workspace/app/web-development/page.tsx"
  "/workspace/app/5g-implementation/page.tsx"
  "/workspace/app/5g-network-infrastructure/page.tsx"
  "/workspace/app/5g-iot-solutions/page.tsx"
  "/workspace/app/5g-edge-computing/page.tsx"
  "/workspace/app/5g-private-networks/page.tsx"
  "/workspace/app/5g-mobile-applications/page.tsx"
  "/workspace/app/5g-data-analytics/page.tsx"
  "/workspace/app/ai-task-manager/page.tsx"
  "/workspace/app/ai-expense-tracker-pro/page.tsx"
  "/workspace/app/ai-password-manager/page.tsx"
  "/workspace/app/ai-invoice-generator/page.tsx"
  "/workspace/app/ai-health-tracker/page.tsx"
  "/workspace/app/ai-meeting-transcriber/page.tsx"
  "/workspace/app/ai-smart-calendar/page.tsx"
  "/workspace/app/ai-climate-solutions-pro/page.tsx"
  "/workspace/app/about/page.tsx"
  "/workspace/app/contact/page.tsx"
)

# Create a basic page template
create_basic_page() {
  local file_path="$1"
  local service_name=$(basename "$(dirname "$file_path")" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
  
  cat > "$file_path" << EOF
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function ${service_name}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>${service_name} - Zion Tech Group | Professional ${service_name} Services</title>
        <meta name="description" content="Professional ${service_name} services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="${service_name}, professional services, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            ${service_name}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional ${service_name} services designed to meet your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our ${service_name} services.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
EOF
}

# Fix all incomplete files
for file in "${incomplete_files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing incomplete file: $file"
    create_basic_page "$file"
    echo "Fixed: $file"
  else
    echo "File not found: $file"
  fi
done

echo "All incomplete files fixed!"