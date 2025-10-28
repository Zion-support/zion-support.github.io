const fs = require('fs');
const path = require('path');

// List of all remaining files to fix
const filesToFix = [
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx',
  'app/5g-data-analytics/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx'
];

// Template for clean page files
const cleanPageTemplate = (title, description, serviceName) => `import { ErrorBoundary } from '../components/ErrorBoundary';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Zap, Shield, Users, Target, BarChart3, Brain } from 'lucide-react';

export const metadata = {
  title: '${title} - Zion Tech Group',
  description: '${description}',
  type: 'website',
};

export default function ${serviceName}() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Comprehensive ${title.toLowerCase()} solution</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Feature 1</h3>
                <p className="text-gray-300">
                  Description of feature 1 for ${title.toLowerCase()}.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Feature 2</h3>
                <p className="text-gray-300">
                  Description of feature 2 for ${title.toLowerCase()}.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Feature 3</h3>
                <p className="text-gray-300">
                  Description of feature 3 for ${title.toLowerCase()}.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300">Transform your business with our ${title.toLowerCase()} solution</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Benefit 1</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Benefit 2</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Benefit 3</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Get Started Today</h4>
                <p className="text-gray-300 mb-6">
                  Ready to get started? Contact us to learn more about our ${title.toLowerCase()} solutions.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}`;

// File configurations
const fileConfigs = {
  'app/zion-ai-api-tester/page.tsx': {
    title: 'Zion AI API Tester',
    description: 'Professional Zion AI API Tester services by Zion Tech Group',
    serviceName: 'ZionAiApiTester'
  },
  'app/zion-ai-database-optimizer/page.tsx': {
    title: 'Zion AI Database Optimizer',
    description: 'Professional Zion AI Database Optimizer services by Zion Tech Group',
    serviceName: 'ZionAiDatabaseOptimizer'
  },
  'app/5g-data-analytics/page.tsx': {
    title: '5G Data Analytics',
    description: 'Professional 5G Data Analytics services by Zion Tech Group',
    serviceName: 'FiveGDataAnalytics'
  },
  'app/5g-edge-computing/page.tsx': {
    title: '5G Edge Computing',
    description: 'Professional 5G Edge Computing services by Zion Tech Group',
    serviceName: 'FiveGEdgeComputing'
  },
  'app/5g-implementation/page.tsx': {
    title: '5G Implementation',
    description: 'Professional 5G Implementation services by Zion Tech Group',
    serviceName: 'FiveGImplementation'
  }
};

// Fix each file
filesToFix.forEach(filePath => {
  try {
    const config = fileConfigs[filePath];
    if (config) {
      const content = cleanPageTemplate(config.title, config.description, config.serviceName);
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All remaining files fixed!');
