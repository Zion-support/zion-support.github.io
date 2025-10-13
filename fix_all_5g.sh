#!/bin/bash

# List of 5G pages to fix
pages=(
  "5g-data-analytics:FiveGDataAnalytics"
  "5g-edge-computing:FiveGEdgeComputing"
  "5g-iot-solutions:FiveGIotSolutions"
  "5g-mobile-applications:FiveGMobileApplications"
  "5g-smart-city-solutions:FiveGSmartCitySolutions"
)

for page_info in "${pages[@]}"; do
  page_dir=$(echo $page_info | cut -d: -f1)
  component_name=$(echo $page_info | cut -d: -f2)
  
  if [ -f "/workspace/app/$page_dir/page.tsx" ]; then
    echo "Recreating $page_dir with proper component name $component_name"
    
    cat > "/workspace/app/$page_dir/page.tsx" << PAGE_EOF
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ${component_name}Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="$page_dir - Zion Tech Group"
        description="Professional $page_dir services and solutions for modern businesses."
        keywords="$page_dir, services, solutions, technology"
        canonical="https://ziontechgroup.com/$page_dir"
      />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              $page_dir
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Professional $page_dir services and solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ${component_name}Page;
PAGE_EOF
  fi
done

echo "All 5G pages recreated with proper component names!"
