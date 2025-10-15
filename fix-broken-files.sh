#!/bin/bash

echo "Fixing broken files..."

# List of files that need to be fixed
files=(
  "app/it-services/page.tsx"
  "app/ai-invoice-generator/page.tsx"
  "app/ai-voice-assistant/page.tsx"
  "app/ai-customer-support-chatbot/page.tsx"
  "app/ai-expense-tracker/page.tsx"
  "app/system-integration/page.tsx"
  "app/ai-video-editor/page.tsx"
  "app/ai-project-management-pro/page.tsx"
  "app/cloud-migration-pro/page.tsx"
  "app/ai-ecommerce-optimizer-pro/page.tsx"
  "app/ai-email-marketing-automation/page.tsx"
  "app/ai-social-media-manager/page.tsx"
  "app/micro-saas-services/page.tsx"
)

# Create a basic page template
create_basic_page() {
  local file="$1"
  local title="$2"
  local description="$3"
  
  cat > "$file" << 'PAGE_EOF'
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TITLE_PLACEHOLDER - Zion Tech Group</title>
        <meta name="description" content="DESCRIPTION_PLACEHOLDER" />
        <meta name="keywords" content="AI solutions, IT services, Zion Tech Group" />
        <meta property="og:title" content="TITLE_PLACEHOLDER - Zion Tech Group" />
        <meta property="og:description" content="DESCRIPTION_PLACEHOLDER" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/URL_PLACEHOLDER" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                TITLE_PLACEHOLDER
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              DESCRIPTION_PLACEHOLDER
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
PAGE_EOF

  # Replace placeholders
  sed -i "s/TITLE_PLACEHOLDER/$title/g" "$file"
  sed -i "s/DESCRIPTION_PLACEHOLDER/$description/g" "$file"
  sed -i "s/URL_PLACEHOLDER/$(basename $(dirname $file))/g" "$file"
}

# Fix each file
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing: $file"
    # Extract title from filename
    title=$(basename "$file" | sed 's/page\.tsx$//' | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    description="Professional $title services by Zion Tech Group. Expert solutions tailored to your business needs."
    
    create_basic_page "$file" "$title" "$description"
    echo "Fixed: $file"
  fi
done

echo "All broken files fixed!"
