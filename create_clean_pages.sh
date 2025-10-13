#!/bin/bash

echo "Creating clean, minimal versions of all pages..."

# List of pages that need to be recreated
pages=(
  "app/pages/CaseStudiesPage.tsx"
  "app/pages/CareersPage.tsx"
  "app/pages/ITServicesPage.tsx"
  "app/pages/AIServicesPage.tsx"
  "app/pages/DigitalTransformationPage.tsx"
  "app/it-solutions/page.tsx"
  "app/ai-solutions/page.tsx"
  "app/ai-services/page.tsx"
  "app/contact/page.tsx"
  "app/demo/page.tsx"
  "app/support/page.tsx"
  "app/services/page.tsx"
  "app/blog/page.tsx"
  "app/5g-solutions/page.tsx"
  "app/micro-saas-solutions/page.tsx"
  "app/ai-automation-platform/page.tsx"
)

# Create a basic page template
create_basic_page() {
  local file_path="$1"
  local page_name="$2"
  local title="$3"
  local description="$4"
  
  cat > "$file_path" << EOF
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${page_name}: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                ${title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                ${description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're working on bringing you amazing content for this page. Check back soon!
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ${page_name};
EOF
}

# Create all the pages
create_basic_page "app/pages/CaseStudiesPage.tsx" "CaseStudiesPage" "Case Studies" "Explore our successful projects and client success stories"
create_basic_page "app/pages/CareersPage.tsx" "CareersPage" "Careers" "Join our team and help shape the future of technology"
create_basic_page "app/pages/ITServicesPage.tsx" "ITServicesPage" "IT Services" "Comprehensive IT solutions for modern businesses"
create_basic_page "app/pages/AIServicesPage.tsx" "AIServicesPage" "AI Services" "Advanced artificial intelligence solutions for your business"
create_basic_page "app/pages/DigitalTransformationPage.tsx" "DigitalTransformationPage" "Digital Transformation" "Transform your business with cutting-edge digital solutions"
create_basic_page "app/it-solutions/page.tsx" "ITSolutionsPage" "IT Solutions" "Comprehensive IT solutions and services"
create_basic_page "app/ai-solutions/page.tsx" "AISolutionsPage" "AI Solutions" "Advanced AI solutions and services"
create_basic_page "app/ai-services/page.tsx" "AIServicesPage" "AI Services" "Professional AI services and consulting"
create_basic_page "app/contact/page.tsx" "ContactPage" "Contact Us" "Get in touch with our team for your technology needs"
create_basic_page "app/demo/page.tsx" "DemoPage" "Demo" "See our solutions in action with a live demonstration"
create_basic_page "app/support/page.tsx" "SupportPage" "Support" "Get help and support for your technology solutions"
create_basic_page "app/services/page.tsx" "ServicesPage" "Services" "Comprehensive technology services for your business"
create_basic_page "app/blog/page.tsx" "BlogPage" "Blog" "Latest insights and updates from our technology experts"
create_basic_page "app/5g-solutions/page.tsx" "FiveGSolutionsPage" "5G Solutions" "Next-generation 5G technology solutions"
create_basic_page "app/micro-saas-solutions/page.tsx" "MicroSaaSSolutionsPage" "Micro SaaS Solutions" "Custom micro SaaS solutions for your business"
create_basic_page "app/ai-automation-platform/page.tsx" "AIAutomationPlatformPage" "AI Automation Platform" "Advanced AI automation solutions and platforms"

echo "All pages created successfully!"