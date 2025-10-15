import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import NeonButton from '../components/NeonButton';

const MicroSAASSolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasServices = [
    {
      id: 'ai-email-optimizer',
      title: 'AI Email Optimizer Pro',
      description: 'AI-powered email marketing optimization that increases open rates by 40% and click-through rates by 25%',
      features: ['Smart subject line generation', 'Optimal send time prediction', 'A/B testing automation', 'Performance analytics'],
      pricing: '$49/month',
      category: 'Marketing',
      icon: '📧'
    },
    {
      id: 'smart-inventory-manager',
      title: 'Smart Inventory Manager',
      description: 'Intelligent inventory management with demand forecasting and automated reordering',
      features: ['Demand forecasting', 'Automated reordering', 'Multi-location tracking', 'Cost optimization'],
      pricing: '$79/month',
      category: 'Operations',
      icon: '📦'
    },
    {
      id: 'customer-feedback-analyzer',
      title: 'Customer Feedback Analyzer',
      description: 'AI-powered sentiment analysis of customer feedback across all channels',
      features: ['Multi-channel monitoring', 'Sentiment analysis', 'Trend identification', 'Actionable insights'],
      pricing: '$39/month',
      category: 'Analytics',
      icon: '💬'
    },
    {
      id: 'expense-tracker-pro',
      title: 'Expense Tracker Pro',
      description: 'Automated expense tracking with receipt scanning and categorization',
      features: ['Receipt scanning', 'Auto-categorization', 'Tax preparation', 'Team management'],
      pricing: '$29/month',
      category: 'Finance',
      icon: '💰'
    },
    {
      id: 'social-media-scheduler',
      title: 'Social Media Scheduler',
      description: 'AI-powered social media scheduling with optimal timing and content suggestions',
      features: ['Multi-platform posting', 'Optimal timing', 'Content suggestions', 'Analytics dashboard'],
      pricing: '$59/month',
      category: 'Marketing',
      icon: '📱'
    },
    {
      id: 'project-time-tracker',
      title: 'Project Time Tracker',
      description: 'Advanced time tracking with productivity insights and team collaboration',
      features: ['Automatic time tracking', 'Productivity insights', 'Team collaboration', 'Client billing'],
      pricing: '$19/month',
      category: 'Productivity',
      icon: '⏱️'
    },
    {
      id: 'lead-scoring-engine',
      title: 'Lead Scoring Engine',
      description: 'AI-powered lead scoring that identifies high-value prospects automatically',
      features: ['Behavioral analysis', 'Lead scoring', 'CRM integration', 'Conversion tracking'],
      pricing: '$99/month',
      category: 'Sales',
      icon: '🎯'
    },
    {
      id: 'document-workflow-automator',
      title: 'Document Workflow Automator',
      description: 'Automate document processing, approval workflows, and digital signatures',
      features: ['Workflow automation', 'Digital signatures', 'Approval chains', 'Document storage'],
      pricing: '$69/month',
      category: 'Productivity',
      icon: '📄'
    },
    {
      id: 'website-performance-monitor',
      title: 'Website Performance Monitor',
      description: 'Real-time website monitoring with performance optimization recommendations',
      features: ['Real-time monitoring', 'Performance alerts', 'Optimization tips', 'Uptime tracking'],
      pricing: '$39/month',
      category: 'Analytics',
      icon: '🌐'
    },
    {
      id: 'customer-support-chatbot',
      title: 'Customer Support Chatbot',
      description: 'AI-powered chatbot that handles 80% of customer inquiries automatically',
      features: ['Natural language processing', 'Multi-language support', 'Human handoff', 'Analytics'],
      pricing: '$89/month',
      category: 'Support',
      icon: '🤖'
    },
    {
      id: 'data-backup-manager',
      title: 'Data Backup Manager',
      description: 'Automated cloud backup solution with version control and disaster recovery',
      features: ['Automated backups', 'Version control', 'Disaster recovery', 'Cross-platform sync'],
      pricing: '$49/month',
      category: 'Security',
      icon: '💾'
    },
    {
      id: 'team-productivity-dashboard',
      title: 'Team Productivity Dashboard',
      description: 'Comprehensive team productivity tracking with insights and goal management',
      features: ['Productivity metrics', 'Goal tracking', 'Team insights', 'Performance reports'],
      pricing: '$79/month',
      category: 'Productivity',
      icon: '📊'
    },
    // New Real Micro SAAS Services
    {
      id: 'ai-code-reviewer',
      title: 'AI Code Reviewer Pro',
      description: 'Automated code review with security analysis, performance optimization, and best practices enforcement',
      features: ['Security vulnerability detection', 'Performance optimization', 'Code quality metrics', 'Automated PR comments'],
      pricing: '$149/month',
      category: 'Development',
      icon: '🔍'
    },
    {
      id: 'smart-contract-auditor',
      title: 'Smart Contract Auditor',
      description: 'AI-powered smart contract security analysis and vulnerability detection for blockchain projects',
      features: ['Vulnerability scanning', 'Gas optimization', 'Security best practices', 'Audit reports'],
      pricing: '$299/month',
      category: 'Blockchain',
      icon: '⛓️'
    },
    {
      id: 'ai-translator-pro',
      title: 'AI Translator Pro',
      description: 'Real-time translation service with context awareness and industry-specific terminology',
      features: ['100+ languages', 'Context-aware translation', 'Industry terminology', 'API integration'],
      pricing: '$89/month',
      category: 'Communication',
      icon: '🌐'
    },
    {
      id: 'voice-cloning-studio',
      title: 'Voice Cloning Studio',
      description: 'AI-powered voice cloning and text-to-speech with natural intonation and emotion',
      features: ['Voice cloning', 'Emotion control', 'Multiple languages', 'API access'],
      pricing: '$199/month',
      category: 'AI',
      icon: '🎤'
    },
    {
      id: 'ai-video-editor',
      title: 'AI Video Editor',
      description: 'Automated video editing with AI-powered scene detection, transitions, and effects',
      features: ['Auto-editing', 'Scene detection', 'Smart transitions', 'Export optimization'],
      pricing: '$129/month',
      category: 'Media',
      icon: '🎬'
    },
    {
      id: 'blockchain-analytics',
      title: 'Blockchain Analytics Pro',
      description: 'Comprehensive blockchain data analysis and transaction monitoring for DeFi and crypto projects',
      features: ['Transaction tracking', 'DeFi analytics', 'Risk assessment', 'Real-time alerts'],
      pricing: '$249/month',
      category: 'Blockchain',
      icon: '📈'
    },
    {
      id: 'ai-legal-assistant',
      title: 'AI Legal Assistant',
      description: 'AI-powered legal document analysis, contract review, and compliance monitoring',
      features: ['Contract analysis', 'Compliance checking', 'Legal research', 'Document generation'],
      pricing: '$399/month',
      category: 'Legal',
      icon: '⚖️'
    },
    {
      id: 'smart-hr-recruiter',
      title: 'Smart HR Recruiter',
      description: 'AI-powered recruitment platform with candidate matching and interview scheduling',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Analytics dashboard'],
      pricing: '$179/month',
      category: 'HR',
      icon: '👥'
    },
    {
      id: 'ai-medical-diagnosis',
      title: 'AI Medical Diagnosis Assistant',
      description: 'AI-powered medical image analysis and diagnostic support for healthcare professionals',
      features: ['Image analysis', 'Diagnostic support', 'Medical records integration', 'HIPAA compliant'],
      pricing: '$599/month',
      category: 'Healthcare',
      icon: '🏥'
    },
    {
      id: 'quantum-crypto-generator',
      title: 'Quantum Crypto Generator',
      description: 'Quantum-resistant cryptography generator for future-proof security implementations',
      features: ['Quantum-resistant algorithms', 'Key generation', 'Security testing', 'Compliance tools'],
      pricing: '$349/month',
      category: 'Security',
      icon: '🔐'
    },
    {
      id: 'ai-weather-predictor',
      title: 'AI Weather Predictor Pro',
      description: 'Advanced weather forecasting with machine learning for agriculture and logistics',
      features: ['Hyperlocal forecasts', 'Agricultural insights', 'Logistics optimization', 'API integration'],
      pricing: '$99/month',
      category: 'Analytics',
      icon: '🌤️'
    },
    {
      id: 'smart-energy-optimizer',
      title: 'Smart Energy Optimizer',
      description: 'AI-powered energy consumption optimization for buildings and industrial facilities',
      features: ['Energy monitoring', 'Optimization algorithms', 'Cost reduction', 'Sustainability metrics'],
      pricing: '$199/month',
      category: 'Sustainability',
      icon: '⚡'
    }
  ];

  const categories = ['All', 'Marketing', 'Operations', 'Analytics', 'Finance', 'Productivity', 'Sales', 'Support', 'Security', 'Development', 'Blockchain', 'Communication', 'AI', 'Media', 'Legal', 'HR', 'Healthcare', 'Sustainability'];

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive collection of specialized micro SaaS solutions for modern businesses. AI-powered tools for marketing, operations, analytics, and productivity." />
        <meta name="keywords" content="micro saas, business tools, ai solutions, productivity software, marketing automation, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>
      
      <FuturisticBackground className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Specialized software solutions designed to solve specific business challenges. 
              Each tool is purpose-built, easy to use, and delivers immediate value to your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredServices.map((service) => (
              <FuturisticCard key={service.id} glowColor="cyan" className="h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{service.icon}</div>
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/30">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-3 h-3 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {service.pricing}
                  </div>
                  <NeonButton to="/contact" size="sm" variant="primary">
                    Get Started
                  </NeonButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
          
          {/* Benefits Section */}
          <FuturisticCard glowColor="purple" className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center mb-8">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast Setup</h3>
                <p className="text-gray-300">Get up and running in minutes, not months. Our solutions are designed for immediate deployment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cost-Effective</h3>
                <p className="text-gray-300">Pay only for what you need. Our micro SaaS solutions offer exceptional value with transparent pricing.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">Each solution is backed by real-world testing and delivers measurable business impact.</p>
              </div>
            </div>
          </FuturisticCard>
          
          {/* CTA Section */}
          <FuturisticCard glowColor="blue" className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our micro SaaS solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <NeonButton to="/contact" variant="primary" size="lg">
                Contact Sales
              </NeonButton>
              <NeonButton to="/pricing" variant="secondary" size="lg">
                View Pricing
              </NeonButton>
            </div>
            <div className="text-sm text-gray-400 space-y-2">
              <p>📞 <strong className="text-cyan-300">Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong className="text-cyan-300">Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong className="text-cyan-300">Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </FuturisticCard>
        </div>
      </FuturisticBackground>
    </>
  );
};

export default MicroSAASSolutionsPage;
