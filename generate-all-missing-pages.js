import fs from 'fs';
import path from 'path';

// Service data from the analysis
const missingAiServices = [
  "/ai-financial-services",
  "/ai-voice-solutions", 
  "/ai-hr-solutions",
  "/ai-video-analysis",
  "/ai-speech-synthesis",
  "/ai-sentiment-analysis",
  "/ai-chatbot-enterprise",
  "/ai-content-moderation",
  "/ai-predictive-modeling",
  "/ai-document-intelligence",
  "/ai-conversation-analytics",
  "/ai-supply-chain-ai",
  "/ai-healthcare-diagnostics",
  "/ai-financial-forecasting",
  "/ai-iot-analytics",
  "/ai-conversational-ai",
  "/ai-automated-testing",
  "/ai-knowledge-management",
  "/ai-customer-churn",
  "/ai-automated-reporting",
  "/ai-content-generation-pro"
];

const missingItServices = [
  "/api-development",
  "/cybersecurity-solutions",
  "/data-analytics-bi",
  "/custom-software",
  "/it-security-services",
  "/it-project-management",
  "/cloud-native-development",
  "/ai-integration-services",
  "/blockchain-development",
  "/iot-development",
  "/e-commerce-development",
  "/api-development-advanced",
  "/data-engineering",
  "/cybersecurity-advanced",
  "/cloud-migration-advanced",
  "/devops-advanced",
  "/machine-learning-ops",
  "/enterprise-integration",
  "/disaster-recovery-advanced",
  "/compliance-automation",
  "/cloud-cost-optimization",
  "/security-automation",
  "/data-visualization",
  "/workflow-automation",
  "/cloud-native-security"
];

const missingMicroSaasServices = [
  "/zion-analytics-pro",
  "/zion-chat-ai",
  "/zion-security-shield",
  "/zion-cloud-vault",
  "/zion-content-studio",
  "/zion-crm-intelligence",
  "/zion-data-sync",
  "/zion-lead-magnet",
  "/zion-project-master",
  "/zion-email-automation",
  "/zion-inventory-smart",
  "/zion-invoice-genius",
  "/zion-workflow-automation",
  "/zion-performance-monitor",
  "/zion-compliance-manager",
  "/zion-social-scheduler",
  "/zion-ai-video-editor",
  "/zion-ai-translator-pro",
  "/zion-ai-code-reviewer",
  "/zion-customer-insights",
  "/zion-ai-email-assistant",
  "/zion-ai-meeting-assistant",
  "/zion-ai-seo-optimizer",
  "/zion-ai-data-cleaner",
  "/zion-ai-contract-analyzer",
  "/zion-ai-survey-builder",
  "/zion-ai-accounting-assistant",
  "/zion-ai-recruitment-pro",
  "/zion-ai-content-moderation",
  "/zion-ai-predictive-maintenance",
  "/zion-ai-energy-manager",
  "/zion-ai-supply-chain-optimizer",
  "/zion-ai-fraud-detector",
  "/zion-ai-customer-service-pro",
  "/zion-ai-marketing-automation",
  "/zion-ai-document-ai"
];

const missingEmergingTech = [
  "/iot-integration"
];

// Template for AI service pages
const aiServiceTemplate = (servicePath, serviceTitle, description, features, useCases) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Eye, Mic, MessageCircle, DollarSign, Heart, FileText, Workflow, Cpu, Lock } from 'lucide-react';

const ${servicePath.split('/').pop().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page: React.FC = () => {
  const features = ${JSON.stringify(features, null, 4)};
  
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];
  
  const useCases = ${JSON.stringify(useCases, null, 4)};

  return (
    <React.Fragment>
      <Helmet>
        <title>${serviceTitle} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${serviceTitle.toLowerCase()}, artificial intelligence, AI solutions, intelligent automation, business intelligence" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ${serviceTitle}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how ${serviceTitle} can transform your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default ${servicePath.split('/').pop().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page;`;

// Template for IT service pages
const itServiceTemplate = (servicePath, serviceTitle, description, features, useCases) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Cloud, Code, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Eye, Mic, MessageCircle, DollarSign, Heart, FileText, Workflow, Cpu, Lock, Wifi, Monitor, Package } from 'lucide-react';

const ${servicePath.split('/').pop().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page: React.FC = () => {
  const features = ${JSON.stringify(features, null, 4)};
  
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve system reliability and performance',
    'Scale infrastructure without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];
  
  const useCases = ${JSON.stringify(useCases, null, 4)};

  return (
    <React.Fragment>
      <Helmet>
        <title>${serviceTitle} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${serviceTitle.toLowerCase()}, IT services, technology solutions, cloud computing, software development" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ${serviceTitle}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced technology solutions that drive results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how ${serviceTitle} can transform your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default ${servicePath.split('/').pop().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page;`;

// Service configurations with generic data
const serviceConfigs = {
  // AI Services
  '/ai-hr-solutions': {
    title: 'AI HR Solutions',
    description: 'Revolutionary AI-powered human resources solutions for modern businesses.',
    features: [
      { icon: 'Users', title: 'AI-Powered Recruitment', description: 'Advanced AI algorithms for candidate screening and matching.', benefits: ['Resume analysis', 'Skill matching', 'Bias reduction', 'Faster hiring'] },
      { icon: 'Brain', title: 'Employee Analytics', description: 'Comprehensive analytics for employee performance and engagement.', benefits: ['Performance tracking', 'Engagement metrics', 'Predictive insights', 'Retention analysis'] },
      { icon: 'Target', title: 'Talent Management', description: 'AI-driven talent acquisition and management strategies.', benefits: ['Skill gap analysis', 'Career pathing', 'Succession planning', 'Training recommendations'] }
    ],
    useCases: [
      { title: 'Recruitment', description: 'Streamline hiring with AI-powered candidate screening', icon: '👥' },
      { title: 'Performance Management', description: 'AI-driven performance analytics and insights', icon: '📊' },
      { title: 'Employee Engagement', description: 'Improve engagement with predictive analytics', icon: '💼' },
      { title: 'Talent Development', description: 'Personalized learning and development paths', icon: '🎓' }
    ]
  },
  '/ai-video-analysis': {
    title: 'AI Video Analysis',
    description: 'Advanced AI-powered video analysis and processing solutions.',
    features: [
      { icon: 'Eye', title: 'Computer Vision', description: 'Advanced computer vision algorithms for video analysis.', benefits: ['Object detection', 'Motion tracking', 'Scene recognition', 'Real-time processing'] },
      { icon: 'Brain', title: 'Content Analysis', description: 'AI-powered content analysis and understanding.', benefits: ['Content categorization', 'Sentiment analysis', 'Quality assessment', 'Automated tagging'] },
      { icon: 'Zap', title: 'Real-time Processing', description: 'Process video content in real-time for immediate insights.', benefits: ['Live analysis', 'Low latency', 'High accuracy', 'Scalable processing'] }
    ],
    useCases: [
      { title: 'Security Monitoring', description: 'AI-powered security and surveillance systems', icon: '🔒' },
      { title: 'Content Moderation', description: 'Automated content moderation and filtering', icon: '🛡️' },
      { title: 'Sports Analytics', description: 'Performance analysis for sports and fitness', icon: '⚽' },
      { title: 'Retail Analytics', description: 'Customer behavior analysis in retail environments', icon: '🛒' }
    ]
  },
  '/ai-speech-synthesis': {
    title: 'AI Speech Synthesis',
    description: 'Natural-sounding AI speech synthesis and text-to-speech solutions.',
    features: [
      { icon: 'Mic', title: 'Natural Voice', description: 'Generate natural-sounding speech from text.', benefits: ['Multiple voices', 'Emotion control', 'Language support', 'High quality'] },
      { icon: 'Brain', title: 'AI-Powered', description: 'Advanced AI algorithms for realistic speech generation.', benefits: ['Neural networks', 'Context awareness', 'Pronunciation accuracy', 'Intonation control'] },
      { icon: 'Zap', title: 'Real-time Generation', description: 'Generate speech in real-time for interactive applications.', benefits: ['Low latency', 'Streaming support', 'Custom voices', 'API integration'] }
    ],
    useCases: [
      { title: 'Accessibility', description: 'Voice interfaces for improved accessibility', icon: '♿' },
      { title: 'Content Creation', description: 'AI-generated voice content for media', icon: '🎬' },
      { title: 'Customer Service', description: 'Automated voice responses and support', icon: '📞' },
      { title: 'Education', description: 'Interactive learning with AI voices', icon: '📚' }
    ]
  }
};

// Function to create a service page
function createServicePage(servicePath, config, template) {
  const dirPath = path.join('/workspace/app', servicePath);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Generate the page content
  const content = template(
    servicePath,
    config.title,
    config.description,
    config.features,
    config.useCases
  );
  
  // Write the file
  fs.writeFileSync(filePath, content);
  console.log(`✅ Created: ${servicePath}/page.tsx`);
}

// Function to create a generic service page
function createGenericServicePage(servicePath, isAi = true) {
  const serviceName = servicePath.split('/').pop();
  const serviceTitle = serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const config = {
    title: serviceTitle,
    description: `Advanced ${isAi ? 'AI-powered' : 'technology'} solutions for modern businesses.`,
    features: [
      { icon: isAi ? 'Brain' : 'Code', title: `${isAi ? 'AI-Powered' : 'Advanced'} Intelligence`, description: `Advanced ${isAi ? 'AI algorithms' : 'technology solutions'} that provide intelligent insights and recommendations.`, benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'] },
      { icon: 'BarChart', title: 'Analytics & Reporting', description: 'Comprehensive analytics and reporting capabilities.', benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'] },
      { icon: 'Zap', title: 'Performance Optimization', description: 'Optimize performance with advanced technology solutions.', benefits: ['High performance', 'Scalable solutions', 'Efficient processing', 'Resource optimization'] },
      { icon: 'Shield', title: 'Security & Compliance', description: 'Enterprise-grade security and compliance features.', benefits: ['Data protection', 'Access controls', 'Audit trails', 'Compliance support'] }
    ],
    useCases: [
      { title: 'Business Intelligence', description: `Transform your business with ${isAi ? 'AI-powered' : 'advanced'} insights`, icon: '📊' },
      { title: 'Process Automation', description: `Automate processes with ${isAi ? 'intelligent' : 'advanced'} technology`, icon: '⚙️' },
      { title: 'Data Analysis', description: 'Advanced data analysis and visualization', icon: '📈' },
      { title: 'System Integration', description: 'Seamless integration with existing systems', icon: '🔗' }
    ]
  };
  
  const template = isAi ? aiServiceTemplate : itServiceTemplate;
  createServicePage(servicePath, config, template);
}

// Main function to create all missing pages
function createAllMissingPages() {
  console.log('🚀 Creating all missing service pages...\n');
  
  let created = 0;
  
  // Create AI service pages
  console.log('🤖 Creating AI service pages...');
  missingAiServices.forEach(servicePath => {
    if (serviceConfigs[servicePath]) {
      createServicePage(servicePath, serviceConfigs[servicePath], aiServiceTemplate);
    } else {
      createGenericServicePage(servicePath, true);
    }
    created++;
  });
  
  // Create IT service pages
  console.log('\n💻 Creating IT service pages...');
  missingItServices.forEach(servicePath => {
    createGenericServicePage(servicePath, false);
    created++;
  });
  
  // Create Micro SAAS service pages
  console.log('\n🔧 Creating Micro SAAS service pages...');
  missingMicroSaasServices.forEach(servicePath => {
    createGenericServicePage(servicePath, true);
    created++;
  });
  
  // Create Emerging Tech service pages
  console.log('\n⚡ Creating Emerging Tech service pages...');
  missingEmergingTech.forEach(servicePath => {
    createGenericServicePage(servicePath, true);
    created++;
  });
  
  console.log(`\n✅ Created ${created} missing service pages successfully!`);
}

// Run the script
createAllMissingPages();