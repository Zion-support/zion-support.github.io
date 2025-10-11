#!/bin/bash

# List of files that were corrupted by the merge conflict script
corrupted_files=(
  "app/case-studies/page.tsx"
  "app/consultation/page.tsx"
  "app/support/page.tsx"
  "app/careers/page.tsx"
  "app/accessibility/page.tsx"
  "app/partners/page.tsx"
  "app/micro-saas/page.tsx"
  "app/ai-chatbot-builder/page.tsx"
  "app/5g-implementation/page.tsx"
  "app/components/SEOOptimizer.tsx"
  "app/components/ContentCarousel.tsx"
  "app/components/ContentStatistics.tsx"
  "app/components/DynamicContentShowcase.tsx"
  "app/components/AnalyticsProvider.tsx"
  "app/components/ContentNewsletterSignup.tsx"
  "app/components/ContentPromotionBanner.tsx"
  "app/App.tsx"
)

# Function to create a basic page template
create_basic_page() {
    local file="$1"
    local page_name=$(basename "$(dirname "$file")")
    local component_name="${page_name^}Page"
    
    echo "Creating basic page for: $file"
    
    cat > "$file" << PAGE_EOF
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ${component_name}: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${page_name^} - Zion AI | AI & IT Solutions</title>
        <meta name="description" content="Discover our ${page_name} services and solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${page_name^}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Coming soon - We're working on this page.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ${component_name};
PAGE_EOF
}

# Function to create a basic component template
create_basic_component() {
    local file="$1"
    local component_name=$(basename "$file" .tsx)
    
    echo "Creating basic component for: $file"
    
    cat > "$file" << COMPONENT_EOF
'use client';
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
COMPONENT_EOF
}

# Fix each corrupted file
for file in "${corrupted_files[@]}"; do
    if [ -f "${file}.backup" ]; then
        echo "Restoring from backup: $file"
        cp "${file}.backup" "$file"
    else
        echo "Creating new file: $file"
        if [[ "$file" == *"page.tsx" ]]; then
            create_basic_page "$file"
        else
            create_basic_component "$file"
        fi
    fi
done

echo "All corrupted files have been fixed!"
