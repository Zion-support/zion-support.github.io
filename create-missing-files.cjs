const fs = require('fs');
const path = require('path');

// List of missing files that need to be created
const missingFiles = [
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-contract-analyzer/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-customer-churn-predictor/page.tsx',
  'app/zion-ai-supply-chain-optimizer/page.tsx',
  'app/zion-ai-financial-forecaster/page.tsx',
  'app/zion-ai-content-moderator/page.tsx',
  'app/zion-ai-translator-pro/page.tsx',
  'app/zion-ai-data-cleaner/page.tsx',
  'app/zion-ai-task-scheduler/page.tsx',
  'app/zion-ai-customer-support-pro/page.tsx',
  'app/zion-ai-code-reviewer/page.tsx',
  'app/ai-email-automation/page.tsx',
  'app/ai-fraud-detection/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-predictive-analytics/page.tsx',
  'app/ai-project-management/page.tsx',
  'app/ai-recommendation-engine/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/web-development/page.tsx',
  'app/mobile-development/page.tsx',
  'app/database-management/page.tsx',
  'app/custom-software/page.tsx',
  'app/network-infrastructure/page.tsx',
  'app/contact/page.tsx',
  'app/services/page.tsx',
  'app/blog/page.tsx',
  'app/privacy/page.tsx',
  'app/terms/page.tsx',
  'app/ai-services/page.tsx',
  'app/tutorials/page.tsx',
  'app/demo/page.tsx',
  'app/support/page.tsx'
];

// Template for a basic page
const pageTemplate = (title, description, keywords, canonical) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  Zap, 
  Sparkles,
  TrendingUp,
  BarChart3,
  Shield,
  Globe
} from 'lucide-react';

const ${title.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
        <link rel="canonical" href="https://ziontechgroup.com/${canonical}" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 Technology Solutions Provider</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  ${title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                ${description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
                >
                  Watch Demo
                  <Clock className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Contact us today to learn more about our ${title.replace(/-/g, ' ')} solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ${title.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())}Page;`;

// Create missing files
missingFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  const dir = path.dirname(fullPath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create file if it doesn't exist
  if (!fs.existsSync(fullPath)) {
    const fileName = path.basename(filePath, '.tsx');
    const title = fileName;
    const description = `Professional ${title.replace(/-/g, ' ')} services by Zion Tech Group. Expert solutions for your business needs.`;
    const keywords = `${title.replace(/-/g, ' ')}, technology solutions, business services, professional consulting`;
    const canonical = title;
    
    fs.writeFileSync(fullPath, pageTemplate(title, description, keywords, canonical));
    console.log(`Created: ${filePath}`);
  } else {
    console.log(`Exists: ${filePath}`);
  }
});

console.log('Done creating missing files!');