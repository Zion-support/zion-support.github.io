const fs = require('fs');
const path = require('path');

// List of corrupted files that need to be recreated
const corruptedFiles = [
  'app/ai-document-scanner/page.tsx',
  'app/ai-drug-discovery-pro/page.tsx',
  'app/ai-ecommerce-optimizer/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-edge-computing/page.tsx',
  'app/ai-education/page.tsx',
  'app/ai-email-assistant/page.tsx',
  'app/ai-email-marketing/page.tsx',
  'app/ai-email-marketing-automation/page.tsx',
  'app/ai-energy/page.tsx',
  'app/ai-energy-grid-management-pro/page.tsx',
  'app/ai-enterprise-solutions/page.tsx',
  'app/ai-expense-tracker/page.tsx',
  'app/ai-fashion-design/page.tsx',
  'app/ai-financial-advisor/page.tsx',
  'app/ai-financial-analyzer/page.tsx',
  'app/ai-financial-crime-detection-pro/page.tsx',
  'app/ai-financial-forecasting/page.tsx',
  'app/ai-financial-services/page.tsx',
  'app/ai-fintech/page.tsx'
];

// Template for AI service pages
const createAiServicePage = (serviceName, serviceTitle, serviceDescription, features) => {
  return `'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart, TrendingUp, PieChart, ArrowRight, CheckCircle, Zap, Shield, Target } from 'lucide-react';

const ${serviceName}Page: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: '${features[0].title}',
      description: '${features[0].description}',
      benefits: ['${features[0].benefits.join("', '")}']
    },
    {
      icon: TrendingUp,
      title: '${features[1].title}',
      description: '${features[1].description}',
      benefits: ['${features[1].benefits.join("', '")}']
    },
    {
      icon: PieChart,
      title: '${features[2].title}',
      description: '${features[2].description}',
      benefits: ['${features[2].benefits.join("', '")}']
    },
    {
      icon: Target,
      title: '${features[3].title}',
      description: '${features[3].description}',
      benefits: ['${features[3].benefits.join("', '")}']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              ${serviceTitle}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${serviceDescription}
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
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>
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
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions.
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
      </main>

      <Footer />
    </div>
  );
};

export default ${serviceName}Page;`;
};

// Service configurations
const serviceConfigs = {
  'ai-document-scanner': {
    name: 'AiDocumentScanner',
    title: 'AI Document Scanner',
    description: 'Scan, process, and analyze documents with advanced AI-powered technology.',
    features: [
      {
        title: 'Smart Scanning',
        description: 'Advanced OCR technology for accurate document scanning and text extraction.',
        benefits: ['High accuracy OCR', 'Multi-format support', 'Batch processing', 'Quality enhancement']
      },
      {
        title: 'AI Analysis',
        description: 'Intelligent document analysis with pattern recognition and data extraction.',
        benefits: ['Content analysis', 'Data extraction', 'Pattern recognition', 'Smart categorization']
      },
      {
        title: 'Real-time Processing',
        description: 'Process documents in real-time with instant results and feedback.',
        benefits: ['Instant processing', 'Live updates', 'Real-time feedback', 'Quick results']
      },
      {
        title: 'Secure Storage',
        description: 'Secure document storage with encryption and access controls.',
        benefits: ['End-to-end encryption', 'Access controls', 'Secure storage', 'Data protection']
      }
    ]
  },
  'ai-drug-discovery-pro': {
    name: 'AiDrugDiscoveryPro',
    title: 'AI Drug Discovery Pro',
    description: 'Accelerate drug discovery with cutting-edge AI algorithms and molecular analysis.',
    features: [
      {
        title: 'Molecular Analysis',
        description: 'Advanced AI algorithms for molecular structure analysis and drug design.',
        benefits: ['Structure analysis', 'Drug design', 'Molecular modeling', 'Chemical insights']
      },
      {
        title: 'Predictive Modeling',
        description: 'Predict drug efficacy and safety using machine learning models.',
        benefits: ['Efficacy prediction', 'Safety analysis', 'Toxicity assessment', 'Clinical outcomes']
      },
      {
        title: 'Compound Screening',
        description: 'Intelligent compound screening and optimization for drug development.',
        benefits: ['High-throughput screening', 'Compound optimization', 'Lead identification', 'Drug candidates']
      },
      {
        title: 'Clinical Trials',
        description: 'Streamline clinical trial design and patient recruitment processes.',
        benefits: ['Trial design', 'Patient matching', 'Protocol optimization', 'Outcome prediction']
      }
    ]
  },
  'ai-ecommerce-optimizer': {
    name: 'AiEcommerceOptimizer',
    title: 'AI E-commerce Optimizer',
    description: 'Optimize your e-commerce business with AI-powered insights and automation.',
    features: [
      {
        title: 'Sales Optimization',
        description: 'AI-driven strategies to maximize sales and revenue growth.',
        benefits: ['Revenue optimization', 'Sales forecasting', 'Price optimization', 'Conversion tracking']
      },
      {
        title: 'Customer Analytics',
        description: 'Deep insights into customer behavior and preferences.',
        benefits: ['Behavior analysis', 'Preference tracking', 'Segmentation', 'Personalization']
      },
      {
        title: 'Inventory Management',
        description: 'Intelligent inventory management with demand forecasting.',
        benefits: ['Demand forecasting', 'Stock optimization', 'Supply chain', 'Inventory tracking']
      },
      {
        title: 'Marketing Automation',
        description: 'Automated marketing campaigns with AI-powered targeting.',
        benefits: ['Campaign automation', 'Targeted marketing', 'A/B testing', 'ROI optimization']
      }
    ]
  }
};

// Function to create a generic AI service page
const createGenericAiServicePage = (servicePath) => {
  const serviceName = servicePath.split('/').pop().replace(/-/g, '');
  const serviceTitle = serviceName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  
  return `'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart, TrendingUp, PieChart, ArrowRight, CheckCircle, Zap, Shield, Target } from 'lucide-react';

const ${serviceName}Page: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your business performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights.',
      benefits: ['Interactive charts', 'Custom reports', 'Data export', 'Visual storytelling']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              ${serviceTitle}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced AI-powered solutions.
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
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>
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
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions.
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
      </main>

      <Footer />
    </div>
  );
};

export default ${serviceName}Page;`;
};

// Fix corrupted files
corruptedFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  const dir = path.dirname(fullPath);
  
  // Ensure directory exists
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Check if file exists and is corrupted
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes('const features = [') && content.includes('benefits: [')) {
      console.log(`Skipping ${filePath} - appears to be corrupted`);
      
      // Get service name from path
      const serviceName = filePath.split('/').pop().replace('.tsx', '');
      
      // Use specific config if available, otherwise use generic
      let pageContent;
      if (serviceConfigs[serviceName]) {
        const config = serviceConfigs[serviceName];
        pageContent = createAiServicePage(config.name, config.title, config.description, config.features);
      } else {
        pageContent = createGenericAiServicePage(filePath);
      }
      
      fs.writeFileSync(fullPath, pageContent);
      console.log(`Fixed ${filePath}`);
    }
  } else {
    console.log(`File ${filePath} does not exist, skipping`);
  }
});

console.log('Corrupted files fixed successfully!');