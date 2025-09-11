#!/bin/bash

# List of pages to create
pages=(
  "Partners"
  "Help"
  "PrivacyPolicy"
  "TermsOfService"
  "Pricing"
  "Blog"
  "News"
  "Careers"
  "Login"
  "Marketplace"
  "Documentation"
  "Training"
  "Webinars"
  "Research"
  "Sitemap"
  "FAQ"
  "Privacy"
  "Terms"
  "Cookies"
  "DataProtection"
  "Accessibility"
  "SystemStatus"
  "Search"
  "Categories"
)

# Create each page
for page in "${pages[@]}"; do
  cat > "/workspace/src/pages/${page}.tsx" << PAGE_EOF
import React from 'react'

const ${page}: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">${page}</h1>
        <p className="text-xl text-gray-600">This is the ${page} page.</p>
      </div>
    </div>
  )
}

export default ${page}
PAGE_EOF
done

echo "Created ${#pages[@]} page components"
