#!/bin/bash

# Find all page.tsx files with merge conflicts and replace them with simple templates
find /workspace/app -name "page.tsx" -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
    echo "Fixing merge conflicts in: $file"
    
    # Extract the service name from the path
    service_name=$(basename $(dirname $file))
    
    # Determine service type based on path
    if [[ $file == *"/ai-"* ]]; then
        service_type="ai-services"
        title="AI ${service_name//-/ }"
        description="Advanced AI solution for ${service_name//-/ }"
    elif [[ $file == *"/zion-"* ]]; then
        service_type="micro-saas"
        title="Zion ${service_name//-/ }"
        description="Micro SAAS solution: ${service_name//-/ }"
    elif [[ $file == *"/"* ]]; then
        service_type="it-services"
        title="${service_name//-/ }"
        description="IT service for ${service_name//-/ }"
    else
        service_type="services"
        title="${service_name//-/ }"
        description="Service for ${service_name//-/ }"
    fi
    
    # Create a simple service page
    cat > "$file" << EOL
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ${service_name^}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Link 
              to="/${service_type}"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to ${service_type}
            </Link>
            
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Brain className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              ${description}
            </p>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                We're working hard to bring you detailed information about this service. 
                In the meantime, please contact us for more information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/${service_type}"
                  className="border border-purple-500 text-purple-300 font-semibold py-3 px-8 rounded-lg hover:bg-purple-500/20 transition-all duration-300 text-center"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${service_name^}Page;
EOL
done

echo "Merge conflicts fixed!"
