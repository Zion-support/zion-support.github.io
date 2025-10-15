#!/bin/bash

# Array of directories and their corresponding component names
declare -A pages=(
    ["ai-translator-pro"]="AITranslatorPro"
    ["ai-data-scientist-pro"]="AIDataScientistPro"
    ["ai-cybersecurity-pro"]="AICybersecurityPro"
    ["ai-hr-assistant-pro"]="AIHRAssistantPro"
    ["ai-voice-assistant-pro"]="AIVoiceAssistantPro"
    ["ai-image-generator-pro"]="AIImageGeneratorPro"
    ["ai-chatbot-builder-pro"]="AIChatbotBuilderPro"
    ["ai-seo-optimizer-pro"]="AISEOOptimizerPro"
    ["ai-email-analyzer-pro"]="AIEmailAnalyzerPro"
    ["ai-project-manager-pro"]="AIProjectManagerPro"
    ["quantum-computing-solutions"]="QuantumComputingSolutions"
    ["edge-computing-solutions"]="EdgeComputingSolutions"
    ["augmented-reality-solutions"]="AugmentedRealitySolutions"
    ["virtual-reality-solutions"]="VirtualRealitySolutions"
    ["robotic-process-automation"]="RoboticProcessAutomation"
    ["ai-consulting"]="AIConsulting"
)

# Create pages for each directory
for dir in "${!pages[@]}"; do
    component_name="${pages[$dir]}"
    title=$(echo "$dir" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    
    cat > "/workspace/app/$dir/page.tsx" << EOL
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${component_name}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="Advanced ${title} solutions by Zion Tech Group. Contact us for more information." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold">
                ${title}
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Advanced ${title} solutions by Zion Tech Group. Contact us for more information.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  📞 Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ✉️ Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ${component_name}Page;
EOL
done

echo "All pages created successfully!"
