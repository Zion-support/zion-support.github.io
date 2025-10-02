#!/bin/bash

# Function to resolve conflicts in a file by keeping our version and adding Helmet
resolve_conflict() {
    local file="$1"
    local title="$2"
    local description="$3"
    
    echo "Resolving conflicts in $file..."
    
    # Create a temporary file with our resolved version
    cat > "${file}.resolved" << EOF
import React from 'react';
import { Helmet } from 'react-helmet-async';

const $(basename "$file" .tsx): React.FC = () => {
  return (
    <>
      <Helmet>
        <title>$title</title>
        <meta name="description" content="$description" />
      </Helmet>
      
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">$title</h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is currently under development. Please check back soon for updates.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600">
              We're working hard to bring you the best content and features. Thank you for your patience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default $(basename "$file" .tsx);
EOF

    # Replace the conflicted file with our resolved version
    mv "${file}.resolved" "$file"
}

# Resolve conflicts for each page
resolve_conflict "src/pages/BlogPage.tsx" "Blog & Insights - Zion Tech Group" "Stay updated with the latest trends, insights, and best practices in AI and technology."
resolve_conflict "src/pages/CaseStudiesPage.tsx" "Case Studies - Zion Tech Group" "Explore real-world examples of how we've helped businesses achieve their goals."
resolve_conflict "src/pages/ContactPage.tsx" "Contact Us - Zion Tech Group" "Get in touch with Zion Tech Group for AI and technology solutions."
resolve_conflict "src/pages/Privacy.tsx" "Privacy Policy - Zion Tech Group" "Learn how Zion Tech Group collects, uses, and protects your personal information."
resolve_conflict "src/pages/Resources.tsx" "Resources - Zion Tech Group" "Access valuable resources, documentation, and tools to support your technology journey."
resolve_conflict "src/pages/SolutionsPage.tsx" "Solutions - Zion Tech Group" "Tailored technology solutions that scale with your organization."
resolve_conflict "src/pages/Support.tsx" "Support - Zion Tech Group" "Get the support you need for your projects and solutions."
resolve_conflict "src/pages/Team.tsx" "Our Team - Zion Tech Group" "Meet the talented professionals behind Zion Tech Group's innovative solutions."
resolve_conflict "src/pages/Terms.tsx" "Terms of Service - Zion Tech Group" "Please read these terms carefully before using our services."

echo "All conflicts resolved!"