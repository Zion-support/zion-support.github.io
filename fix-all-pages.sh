#!/bin/bash

echo "Creating clean page files..."

# Create a basic page template
create_basic_page() {
    local file_path="$1"
    local page_name="$2"
    local title="$3"
    local description="$4"
    
    cat > "$file_path" << EOF
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react';

const ${page_name}: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              ${description}
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto w-fit"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ${page_name};
EOF
}

# List of pages to create
pages=(
    "ai-chatbot-builder:AIChatbotBuilder:AI-Powered Chatbot Solutions:Build intelligent chatbots with natural language processing and machine learning capabilities."
    "ai-email-assistant:AIEmailAssistant:AI Email Assistant:Automate and optimize your email communications with our AI-powered assistant."
    "ai-voice-assistant:AIVoiceAssistant:AI Voice Assistant:Create voice-enabled applications with advanced speech recognition and synthesis."
    "ai-automation:AIAutomation:AI Automation:Streamline your business processes with intelligent automation solutions."
    "mobile-development:MobileDevelopment:Mobile Development:Native and cross-platform mobile applications for iOS and Android."
    "web-development:WebDevelopment:Web Development:Modern web applications built with cutting-edge technologies."
    "micro-saas-services:MicroSaasServices:Micro SAAS Services:Our suite of micro software-as-a-service products for business automation."
)

# Create all pages
for page_info in "${pages[@]}"; do
    IFS=':' read -r file_name component_name title description <<< "$page_info"
    file_path="/workspace/app/${file_name}/page.tsx"
    
    echo "Creating: $file_path"
    create_basic_page "$file_path" "$component_name" "$title" "$description"
done

echo "All pages created successfully!"