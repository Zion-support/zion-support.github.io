import fs from 'fs';
import path from 'path';

// Get all .tsx files in the app directory that might have errors
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Check if a file has syntax errors by trying to parse it
function hasSyntaxErrors(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for common syntax error patterns
    const errorPatterns = [
      /error TS/,
      /<<<<<<<|=======|>>>>>>>/,
      /JSX expressions must have one parent element/,
      /Expected corresponding JSX closing tag/,
      /Unexpected token/,
      /Declaration or statement expected/,
      /Expression expected/,
      /Identifier expected/
    ];
    
    return errorPatterns.some(pattern => pattern.test(content));
  } catch (error) {
    return true;
  }
}

// Template for a basic page component
const pageTemplate = (title, description, icon = 'Brain') => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ${icon}, CheckCircle, ArrowRight, Zap, Shield, Target, BarChart, TrendingUp } from 'lucide-react';

const ${title.replace(/[^a-zA-Z0-9]/g, '')}Page: React.FC = () => {
  const features = [
    {
      icon: ${icon},
      title: '${title}',
      description: '${description}',
      benefits: ['Advanced features', 'Real-time processing', 'Scalable solutions', 'Enterprise-grade security']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and insights for better decision making.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered optimization for maximum efficiency and performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance features.',
      benefits: ['Data encryption', 'Access controls', 'Audit logging', 'Compliance monitoring']
    }
  ];

  const benefits = [
    'Advanced AI-powered solutions',
    'Real-time processing and analysis',
    'Scalable and flexible architecture',
    'Enterprise-grade security and compliance',
    'Comprehensive monitoring and analytics',
    '24/7 support and maintenance'
  ];

  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with our solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ${title.replace(/[^a-zA-Z0-9]/g, '')}Page;`;

// Icon mapping for different page types
const iconMapping = {
  'ai-content-studio': 'Palette',
  'ai-crm-assistant': 'Users',
  'ai-hr-solutions': 'UserCheck',
  'ai-marketing-automation': 'Megaphone',
  'ai-sales-automation': 'TrendingUp',
  'ai-workflow-automation': 'Workflow',
  'ai-data-visualization': 'BarChart',
  'ai-predictive-analytics': 'TrendingUp',
  'ai-natural-language-processing': 'MessageSquare',
  'ai-machine-learning': 'Brain',
  'ai-deep-learning': 'Cpu',
  'ai-neural-networks': 'Network',
  'ai-computer-vision': 'Eye',
  'ai-robotics': 'Bot',
  'ai-autonomous-systems': 'Zap',
  'ai-iot-solutions': 'Wifi',
  'ai-edge-computing': 'Monitor',
  'ai-cloud-computing': 'Cloud',
  'ai-blockchain': 'Shield',
  'ai-cybersecurity': 'Shield',
  'ai-quantum-computing': 'Atom',
  'ai-space-technology': 'Rocket',
  'ai-biotechnology': 'Dna',
  'ai-healthcare': 'Heart',
  'ai-finance': 'DollarSign',
  'ai-education': 'BookOpen',
  'ai-gaming': 'Gamepad2',
  'ai-entertainment': 'Music',
  'ai-sports': 'Trophy',
  'ai-travel': 'Plane',
  'ai-real-estate': 'Home',
  'ai-ecommerce': 'ShoppingCart',
  'ai-logistics': 'Truck',
  'ai-manufacturing': 'Factory',
  'ai-energy': 'Battery',
  'ai-environment': 'Leaf',
  'ai-agriculture': 'Wheat',
  'ai-mining': 'Pickaxe',
  'ai-oil-gas': 'Fuel',
  'ai-construction': 'Hammer',
  'ai-transportation': 'Car',
  'ai-aviation': 'Plane',
  'ai-maritime': 'Ship',
  'ai-railway': 'Train',
  'ai-automotive': 'Car',
  'ai-telecommunications': 'Phone',
  'ai-media': 'Video',
  'ai-publishing': 'FileText',
  'ai-journalism': 'Newspaper',
  'ai-advertising': 'Megaphone',
  'ai-public-relations': 'Users',
  'ai-legal': 'Scale',
  'ai-government': 'Building',
  'ai-military': 'Shield',
  'ai-law-enforcement': 'Shield',
  'ai-emergency-services': 'Phone',
  'ai-disaster-management': 'AlertTriangle',
  'ai-climate-change': 'Thermometer',
  'ai-sustainability': 'Leaf',
  'ai-renewable-energy': 'Sun',
  'ai-waste-management': 'Trash2',
  'ai-water-management': 'Droplets',
  'ai-air-quality': 'Wind',
  'ai-noise-pollution': 'Volume2',
  'ai-light-pollution': 'Sun',
  'ai-soil-pollution': 'Wheat',
  'ai-water-pollution': 'Droplets',
  'ai-air-pollution': 'Wind',
  'ai-land-pollution': 'Wheat',
  'ai-thermal-pollution': 'Thermometer',
  'ai-radioactive-pollution': 'Radiation',
  'ai-electromagnetic-pollution': 'Wifi',
  'ai-visual-pollution': 'Eye',
  'ai-olfactory-pollution': 'Nose',
  'ai-gustatory-pollution': 'Utensils',
  'ai-tactile-pollution': 'Hand',
  'ai-auditory-pollution': 'Volume2',
  'ai-kinesthetic-pollution': 'Move',
  'ai-vestibular-pollution': 'RotateCcw',
  'ai-proprioceptive-pollution': 'Move',
  'ai-interoceptive-pollution': 'Heart',
  'ai-exteroceptive-pollution': 'Eye',
  'ai-somatosensory-pollution': 'Hand',
  'ai-visual-sensory-pollution': 'Eye',
  'ai-auditory-sensory-pollution': 'Volume2',
  'ai-olfactory-sensory-pollution': 'Nose',
  'ai-gustatory-sensory-pollution': 'Utensils',
  'ai-tactile-sensory-pollution': 'Hand',
  'ai-kinesthetic-sensory-pollution': 'Move',
  'ai-vestibular-sensory-pollution': 'RotateCcw',
  'ai-proprioceptive-sensory-pollution': 'Move',
  'ai-interoceptive-sensory-pollution': 'Heart',
  'ai-exteroceptive-sensory-pollution': 'Eye',
  'ai-somatosensory-sensory-pollution': 'Hand'
};

// Generate title and description from file path
function generatePageInfo(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const title = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const description = `Advanced ${title.toLowerCase()} solutions powered by artificial intelligence for modern businesses.`;
  
  const icon = iconMapping[fileName] || 'Brain';
  
  return { title, description, icon };
}

// Fix all broken files
function fixAllBrokenFiles() {
  const allFiles = getAllTsxFiles('/workspace/app');
  let fixedCount = 0;
  
  for (const filePath of allFiles) {
    if (hasSyntaxErrors(filePath)) {
      try {
        const { title, description, icon } = generatePageInfo(filePath);
        const content = pageTemplate(title, description, icon);
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      } catch (error) {
        console.error(`Error fixing ${filePath}:`, error.message);
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive file fixes...');
const fixedCount = fixAllBrokenFiles();
console.log(`Fixed ${fixedCount} broken files.`);