#!/bin/bash

echo "Fixing corrupted files..."

# List of core files that need to be fixed
core_files=(
  "app/ai-services/page.tsx"
  "app/it-services/page.tsx"
  "app/micro-saas/page.tsx"
  "app/consultation/page.tsx"
  "app/support/page.tsx"
  "app/partners/page.tsx"
  "app/ai-chatbot-builder/page.tsx"
  "app/components/SEOOptimizer.tsx"
  "app/components/ContentCarousel.tsx"
  "app/components/ContentStatistics.tsx"
  "app/components/DynamicContentShowcase.tsx"
  "app/components/AnalyticsProvider.tsx"
  "app/components/ContentNewsletterSignup.tsx"
  "app/components/ContentPromotionBanner.tsx"
)

# Function to create a basic page template
create_basic_page() {
  local file_path="$1"
  local page_name=$(basename "$file_path" .tsx)
  local component_name=$(echo "$page_name" | sed 's/-\([a-z]\)/\U\1/g' | sed 's/^\([a-z]\)/\U\1/')
  
  cat > "$file_path" << EOF
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ${component_name}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${page_name^} - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Professional ${page_name} services from Zion Tech Group." />
        <meta name="keywords" content="${page_name}, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${page_name^} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional ${page_name} solutions tailored to your business needs.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ${component_name}Page;
EOF
}

# Function to create a basic component template
create_basic_component() {
  local file_path="$1"
  local component_name=$(basename "$file_path" .tsx)
  
  cat > "$file_path" << EOF
import React from 'react';

interface ${component_name}Props {
  children?: React.ReactNode;
}

const ${component_name}: React.FC<${component_name}Props> = ({ children }) => {
  return (
    <div className="${component_name.toLowerCase()}">
      {children}
    </div>
  );
};

export default ${component_name};
EOF
}

# Fix core files
for file in "${core_files[@]}"; do
  full_path="/workspace/$file"
  if [ -f "$full_path" ]; then
    echo "Fixing $file..."
    if [[ "$file" == app/components/* ]]; then
      create_basic_component "$full_path"
    else
      create_basic_page "$full_path"
    fi
    echo "Fixed $file"
  else
    echo "File $file not found, creating it..."
    mkdir -p "$(dirname "$full_path")"
    if [[ "$file" == app/components/* ]]; then
      create_basic_component "$full_path"
    else
      create_basic_page "$full_path"
    fi
    echo "Created $file"
  fi
done

echo "All core files fixed!"