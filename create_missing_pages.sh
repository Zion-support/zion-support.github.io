#!/bin/bash

# Create missing page files
pages=(
  "Team"
  "Press"
  "CaseStudies"
  "Webinars"
  "WhitePapers"
  "ServicesOverview"
  "PricingGuide"
  "Help"
  "Partners"
  "ComprehensivePricingGuide2027"
  "ComprehensivePricingGuide2030"
  "ComprehensivePricingGuide2025"
  "ComprehensivePricingGuide2026"
  "RevolutionaryServices2030"
  "RevolutionaryServicesShowcase2030"
  "InnovativeServicesShowcase2025"
  "ComprehensiveServicesShowcase2025"
  "ComprehensiveServicesShowcase2026"
  "NewServicesShowcase2025"
  "ServicesComparisonMatrix2025"
  "Community"
  "Documentation"
  "Training"
  "Support"
  "Accessibility"
  "Security"
  "Compliance"
  "OnsiteSupport"
  "Careers"
  "Marketplace"
  "SearchPage"
  "FAQ"
  "Cookies"
  "About"
  "Blog"
)

for page in "${pages[@]}"; do
  cat > "/workspace/src/pages/${page}.tsx" << EOF
import React from 'react';
import { SEO } from '@/components/SEO';

export default function ${page}() {
  return (
    <>
      <SEO 
        title="${page} - Zion Tech Group" 
        description="${page} page for Zion Tech Group" 
        keywords="${page}, zion tech group"
      />
      <div className="min-h-screen bg-zion-blue pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              ${page}
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Welcome to our ${page} page
            </p>
            <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-zion-slate-dark mb-4">
                ${page} Content
              </h2>
              <p className="text-zion-slate-light">
                This is the ${page} page content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
EOF
done

echo "Created ${#pages[@]} missing page files"