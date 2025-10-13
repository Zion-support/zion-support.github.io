#!/bin/bash

# List of pages to create
pages=(
  "ContactPage"
  "ServicesPage"
  "BlogPage"
  "TutorialsPage"
  "DemoPage"
  "SupportPage"
  "PrivacyPage"
  "TermsPage"
  "PricingPage"
  "SolutionsPage"
  "AIServicesPage"
  "ITServicesPage"
  "CloudInfrastructurePage"
  "DigitalTransformationPage"
  "CaseStudiesPage"
  "CareersPage"
  "CybersecurityPage"
  "CloudSolutionsPage"
  "MicroSaaSPage"
  "FiveGSolutionsPage"
  "TeamPage"
  "DocumentationPage"
)

# Create each page
for page in "${pages[@]}"; do
  cat > "app/pages/${page}.tsx" << PAGE_EOF
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${page}: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${page} - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group ${page} page" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${page}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </>
  );
};

export default ${page};
PAGE_EOF
done

echo "All pages created successfully!"
