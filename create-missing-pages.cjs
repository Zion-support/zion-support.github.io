const fs = require('fs');
const path = require('path');

// List of missing pages that need to be created
const missingPages = [
  'zion-ai-email-analyzer',
  'zion-ai-video-generator',
  'zion-ai-invoice-generator',
  'zion-ai-customer-insights',
  'zion-smart-inventory-optimizer',
  'zion-ai-customer-sentiment-tracker',
  'zion-smart-expense-categorizer',
  'zion-ai-voice-assistant-pro',
  'zion-ai-code-reviewer',
  'zion-ai-social-media-manager',
  'zion-ai-contract-analyzer',
  'zion-ai-performance-optimizer',
  'zion-ai-customer-churn-predictor',
  'zion-ai-supply-chain-optimizer',
  'zion-ai-financial-forecaster',
  'zion-ai-content-moderator',
  'zion-ai-translator-pro',
  'zion-ai-data-cleaner',
  'zion-ai-task-scheduler',
  'zion-ai-customer-support-pro',
  'zion-content-studio',
  'ai-services',
  'micro-saas',
  '5g-solutions',
  'tutorials',
  'demo',
  'support',
  'about',
  'contact',
  'services',
  'blog',
  'privacy',
  'terms'
];

// Template for page components
const pageTemplate = (pageName, title, description) => `import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Brain, Shield, Zap, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ${pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="${title} | Zion Tech Group"
        description="${description}"
        keywords="${pageName.replace(/-/g, ', ')}, AI solutions, technology, business automation"
        canonical="https://ziontechgroup.com/${pageName}"
      />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-cyan-400 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <span>/</span>
            <span className="text-cyan-400">${title}</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                ${title}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              ${description}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                We're working hard to bring you this amazing ${title.toLowerCase()} solution. 
                This page will be available soon with detailed information about our services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Notified
                  <Brain className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  to="/"
                  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ${pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Page;
`;

// Create directories and files
missingPages.forEach(pageName => {
  const pageDir = path.join(__dirname, 'app', pageName);
  const pageFile = path.join(pageDir, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Generate title and description
  const title = pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const description = `Discover our ${title.toLowerCase()} solutions designed to transform your business with cutting-edge technology and AI-powered automation.`;
  
  // Create page file
  if (!fs.existsSync(pageFile)) {
    fs.writeFileSync(pageFile, pageTemplate(pageName, title, description));
    console.log(`Created: ${pageFile}`);
  } else {
    console.log(`Already exists: ${pageFile}`);
  }
});

console.log('All missing pages created successfully!');