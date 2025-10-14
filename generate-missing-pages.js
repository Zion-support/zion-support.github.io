const fs = require('fs');
const path = require('path');

// Define all the missing pages with their details
const missingPages = [
  // AI Services
  { route: '/ai-cybersecurity-suite-pro', title: 'AI Cybersecurity Suite Pro', category: 'AI Services', description: 'Advanced threat protection with AI-powered detection and automated response for comprehensive security.', icon: 'Shield', color: 'from-red-500 to-pink-500' },
  { route: '/ai-content-generation-pro', title: 'AI Content Generation Pro', category: 'AI Services', description: 'Automated content creation with AI-powered writing, editing, and optimization for all your content needs.', icon: 'FileText', color: 'from-green-500 to-emerald-500' },
  { route: '/ai-customer-support-chatbot', title: 'AI Customer Support Chatbot', category: 'AI Services', description: 'Intelligent customer service with AI-powered chatbots that provide 24/7 support and personalized assistance.', icon: 'MessageSquare', color: 'from-purple-500 to-pink-500' },
  { route: '/ai-code-assistant-pro', title: 'AI Code Assistant Pro', category: 'AI Services', description: 'AI-powered development tools with intelligent code completion, debugging, and automated testing capabilities.', icon: 'Settings', color: 'from-orange-500 to-red-500' },
  { route: '/ai-business-intelligence-pro', title: 'AI Business Intelligence Pro', category: 'AI Services', description: 'Advanced data analytics and business intelligence with AI-powered insights and strategic recommendations.', icon: 'TrendingUp', color: 'from-indigo-500 to-purple-500' },
  { route: '/ai-automation-platform', title: 'AI Automation Platform', category: 'AI Services', description: 'Comprehensive workflow automation with AI-powered process optimization and intelligent task management.', icon: 'Zap', color: 'from-yellow-500 to-orange-500' },
  { route: '/ai-data-analytics-pro', title: 'AI Data Analytics Pro', category: 'AI Services', description: 'Advanced data analysis with AI-powered insights, pattern recognition, and predictive modeling capabilities.', icon: 'BarChart3', color: 'from-teal-500 to-cyan-500' },
  { route: '/ai-marketing-automation', title: 'AI Marketing Automation', category: 'AI Services', description: 'Smart marketing campaigns with AI-powered targeting, personalization, and performance optimization.', icon: 'TrendingUp', color: 'from-pink-500 to-rose-500' },
  { route: '/ai-hr-recruitment-pro', title: 'AI HR & Recruitment Pro', category: 'AI Services', description: 'Intelligent talent management with AI-powered recruitment, employee analytics, and HR automation.', icon: 'Users', color: 'from-blue-600 to-indigo-600' },
  { route: '/ai-financial-analysis', title: 'AI Financial Analysis', category: 'AI Services', description: 'Advanced financial forecasting and analysis with AI-powered insights and risk assessment capabilities.', icon: 'DollarSign', color: 'from-green-600 to-emerald-600' },
  { route: '/ai-supply-chain-optimizer', title: 'AI Supply Chain Optimizer', category: 'AI Services', description: 'Intelligent supply chain management with AI-powered optimization and predictive analytics.', icon: 'Globe', color: 'from-cyan-500 to-blue-500' },
  { route: '/ai-voice-assistant-pro', title: 'AI Voice Assistant Pro', category: 'AI Services', description: 'Voice-activated AI assistant with natural language processing and intelligent task automation.', icon: 'MessageSquare', color: 'from-blue-500 to-cyan-500' },
  { route: '/ai-image-recognition-pro', title: 'AI Image Recognition Pro', category: 'AI Services', description: 'Advanced computer vision solutions with AI-powered image analysis and recognition capabilities.', icon: 'Settings', color: 'from-purple-500 to-pink-500' },
  { route: '/ai-predictive-maintenance', title: 'AI Predictive Maintenance', category: 'AI Services', description: 'Predictive analytics for equipment maintenance with AI-powered failure prediction and optimization.', icon: 'Clock', color: 'from-orange-500 to-red-500' },
  { route: '/ai-sentiment-analysis-pro', title: 'AI Sentiment Analysis Pro', category: 'AI Services', description: 'Customer sentiment tracking with AI-powered analysis of feedback, reviews, and social media.', icon: 'TrendingUp', color: 'from-green-500 to-emerald-500' },
  { route: '/ai-recommendation-engine', title: 'AI Recommendation Engine', category: 'AI Services', description: 'Personalized recommendations with AI-powered algorithms for products, content, and services.', icon: 'Star', color: 'from-purple-500 to-pink-500' },
  { route: '/ai-fraud-detection-pro', title: 'AI Fraud Detection Pro', category: 'AI Services', description: 'Advanced fraud prevention with AI-powered detection and real-time monitoring capabilities.', icon: 'Shield', color: 'from-red-500 to-pink-500' },
  { route: '/ai-language-translation', title: 'AI Language Translation', category: 'AI Services', description: 'Real-time translation services with AI-powered language processing and cultural adaptation.', icon: 'Globe', color: 'from-blue-500 to-cyan-500' },
  { route: '/ai-chatbot-enterprise', title: 'AI Chatbot Enterprise', category: 'AI Services', description: 'Enterprise-grade chatbot solutions with AI-powered conversation management and integration.', icon: 'MessageSquare', color: 'from-purple-500 to-pink-500' },
  { route: '/ai-data-mining-pro', title: 'AI Data Mining Pro', category: 'AI Services', description: 'Data extraction and analysis with AI-powered pattern recognition and insight generation.', icon: 'BarChart3', color: 'from-teal-500 to-cyan-500' },
  { route: '/ai-video-analysis', title: 'AI Video Analysis', category: 'AI Services', description: 'Video content analysis with AI-powered object detection, scene recognition, and content insights.', icon: 'Settings', color: 'from-orange-500 to-red-500' },
  { route: '/ai-time-series-forecasting', title: 'AI Time Series Forecasting', category: 'AI Services', description: 'Time-based predictions with AI-powered forecasting for trends, demand, and future outcomes.', icon: 'TrendingUp', color: 'from-green-500 to-emerald-500' },
  { route: '/ai-nlp-text-analysis', title: 'AI NLP Text Analysis', category: 'AI Services', description: 'Natural language processing with AI-powered text analysis, sentiment, and content understanding.', icon: 'FileText', color: 'from-blue-500 to-cyan-500' },

  // IT Services
  { route: '/cloud-infrastructure', title: 'Cloud Infrastructure', category: 'IT Services', description: 'Scalable cloud solutions with enterprise-grade infrastructure and 24/7 monitoring support.', icon: 'Cloud', color: 'from-blue-500 to-cyan-500' },
  { route: '/blockchain-development', title: 'Blockchain Development', category: 'IT Services', description: 'Blockchain technology solutions with smart contracts, DApps, and decentralized applications.', icon: 'Settings', color: 'from-purple-500 to-pink-500' },
  { route: '/iot-solutions', title: 'IoT Solutions', category: 'IT Services', description: 'Internet of Things solutions with connected devices, sensors, and intelligent data processing.', icon: 'Globe', color: 'from-green-500 to-emerald-500' },
  { route: '/ar-vr-development', title: 'AR/VR Development', category: 'IT Services', description: 'Immersive experiences with augmented and virtual reality applications and platforms.', icon: 'Settings', color: 'from-orange-500 to-red-500' },
  { route: '/devops-solutions', title: 'DevOps Solutions', category: 'IT Services', description: 'Development operations with CI/CD pipelines, automation, and deployment optimization.', icon: 'Settings', color: 'from-blue-500 to-cyan-500' },
  { route: '/mobile-development', title: 'Mobile Development', category: 'IT Services', description: 'Mobile applications for iOS and Android with native and cross-platform development.', icon: 'Settings', color: 'from-purple-500 to-pink-500' },
  { route: '/web-development', title: 'Web Development', category: 'IT Services', description: 'Web applications with modern frameworks, responsive design, and performance optimization.', icon: 'Settings', color: 'from-green-500 to-emerald-500' },
  { route: '/it-support', title: 'IT Support', category: 'IT Services', description: 'Technical support services with 24/7 assistance and comprehensive IT maintenance.', icon: 'HelpCircle', color: 'from-blue-500 to-cyan-500' },
  { route: '/network-infrastructure', title: 'Network Infrastructure', category: 'IT Services', description: 'Network solutions with design, implementation, and management of enterprise networks.', icon: 'Globe', color: 'from-orange-500 to-red-500' },
  { route: '/it-consulting', title: 'IT Consulting', category: 'IT Services', description: 'Technology consulting with strategic planning and digital transformation guidance.', icon: 'Users', color: 'from-purple-500 to-pink-500' },
  { route: '/cybersecurity-audit', title: 'Cybersecurity Audit', category: 'IT Services', description: 'Security assessments with comprehensive audits and vulnerability testing services.', icon: 'Shield', color: 'from-red-500 to-pink-500' },
  { route: '/data-center-services', title: 'Data Center Services', category: 'IT Services', description: 'Data center solutions with colocation, cloud services, and infrastructure management.', icon: 'Settings', color: 'from-blue-500 to-cyan-500' },
  { route: '/asset-management', title: 'Asset Management', category: 'IT Services', description: 'IT asset tracking with inventory management and lifecycle optimization services.', icon: 'BarChart3', color: 'from-green-500 to-emerald-500' },

  // Micro SAAS
  { route: '/zion-security-shield', title: 'Zion Security Shield', category: 'Micro SAAS', description: 'Advanced cybersecurity protection with AI-powered threat detection and automated response.', icon: 'Shield', color: 'from-red-500 to-pink-500' },
  { route: '/zion-cloud-vault', title: 'Zion Cloud Vault', category: 'Micro SAAS', description: 'Secure cloud storage solution with end-to-end encryption and unlimited scalability.', icon: 'Cloud', color: 'from-green-500 to-emerald-500' },
  { route: '/zion-ai-inventory-manager', title: 'Zion AI Inventory Manager', category: 'Micro SAAS', description: 'Smart inventory tracking with AI-powered optimization and automated reorder management.', icon: 'BarChart3', color: 'from-purple-500 to-pink-500' },
  { route: '/zion-hr-assistant-pro', title: 'Zion HR Assistant Pro', category: 'Micro SAAS', description: 'Human resources automation with AI-powered recruitment and employee management.', icon: 'Users', color: 'from-orange-500 to-red-500' },
  { route: '/zion-ai-accounting-suite', title: 'Zion AI Accounting Suite', category: 'Micro SAAS', description: 'Automated accounting with AI-powered bookkeeping and financial reporting.', icon: 'DollarSign', color: 'from-indigo-500 to-purple-500' },
  { route: '/zion-ecommerce-optimizer', title: 'Zion E-commerce Optimizer', category: 'Micro SAAS', description: 'E-commerce optimization with AI-powered conversion rate improvement and analytics.', icon: 'TrendingUp', color: 'from-yellow-500 to-orange-500' },
  { route: '/zion-ai-customer-insights', title: 'Zion AI Customer Insights', category: 'Micro SAAS', description: 'Customer analytics with AI-powered insights and behavior analysis.', icon: 'Users', color: 'from-teal-500 to-cyan-500' },
  { route: '/zion-ai-lead-scoring', title: 'Zion AI Lead Scoring', category: 'Micro SAAS', description: 'Lead qualification with AI-powered scoring and conversion prediction.', icon: 'Star', color: 'from-pink-500 to-rose-500' },
  { route: '/zion-ai-document-processor', title: 'Zion AI Document Processor', category: 'Micro SAAS', description: 'Document automation with AI-powered processing and data extraction.', icon: 'FileText', color: 'from-blue-600 to-indigo-600' },
  { route: '/zion-ai-social-listener', title: 'Zion AI Social Listener', category: 'Micro SAAS', description: 'Social media monitoring with AI-powered sentiment analysis and engagement tracking.', icon: 'Globe', color: 'from-green-600 to-emerald-600' },
  { route: '/zion-ai-email-optimizer', title: 'Zion AI Email Optimizer', category: 'Micro SAAS', description: 'Email marketing optimization with AI-powered personalization and performance tracking.', icon: 'Mail', color: 'from-cyan-500 to-blue-500' },
  { route: '/zion-ai-meeting-assistant', title: 'Zion AI Meeting Assistant', category: 'Micro SAAS', description: 'Meeting automation with AI-powered scheduling, transcription, and follow-up.', icon: 'Calendar', color: 'from-purple-500 to-pink-500' },
  { route: '/zion-ai-expense-tracker', title: 'Zion AI Expense Tracker', category: 'Micro SAAS', description: 'Expense management with AI-powered categorization and automated reporting.', icon: 'DollarSign', color: 'from-orange-500 to-red-500' },
  { route: '/zion-ai-survey-builder', title: 'Zion AI Survey Builder', category: 'Micro SAAS', description: 'Survey creation tool with AI-powered question generation and response analysis.', icon: 'Settings', color: 'from-indigo-500 to-purple-500' },
  { route: '/zion-ai-chatbot-builder', title: 'Zion AI Chatbot Builder', category: 'Micro SAAS', description: 'No-code chatbot creation with AI-powered conversation design and training.', icon: 'MessageSquare', color: 'from-green-500 to-emerald-500' },
  { route: '/zion-ai-workflow-automation', title: 'Zion AI Workflow Automation', category: 'Micro SAAS', description: 'Process automation with AI-powered workflow optimization and task management.', icon: 'Zap', color: 'from-yellow-500 to-orange-500' },
  { route: '/zion-ai-seo-optimizer', title: 'Zion AI SEO Optimizer', category: 'Micro SAAS', description: 'SEO optimization tool with AI-powered content analysis and ranking improvement.', icon: 'TrendingUp', color: 'from-teal-500 to-cyan-500' },
  { route: '/zion-ai-data-warehouse', title: 'Zion AI Data Warehouse', category: 'Micro SAAS', description: 'Data storage solution with AI-powered organization and intelligent querying.', icon: 'Cloud', color: 'from-pink-500 to-rose-500' },
  { route: '/zion-ai-mobile-app-builder', title: 'Zion AI Mobile App Builder', category: 'Micro SAAS', description: 'Mobile app creation with AI-powered design and development automation.', icon: 'Settings', color: 'from-blue-600 to-indigo-600' },
  { route: '/zion-ai-api-manager', title: 'Zion AI API Manager', category: 'Micro SAAS', description: 'API management platform with AI-powered monitoring and optimization.', icon: 'Settings', color: 'from-green-600 to-emerald-600' },
  { route: '/zion-ai-backup-manager', title: 'Zion AI Backup Manager', category: 'Micro SAAS', description: 'Automated backup solution with AI-powered scheduling and recovery optimization.', icon: 'Cloud', color: 'from-cyan-500 to-blue-500' },
  { route: '/zion-ai-testing-automation', title: 'Zion AI Testing Automation', category: 'Micro SAAS', description: 'Automated testing with AI-powered test generation and execution optimization.', icon: 'CheckCircle', color: 'from-purple-500 to-pink-500' },

  // Additional Pages
  { route: '/news', title: 'News', category: 'Company', description: 'Latest news and updates from Zion Tech Group.', icon: 'Settings', color: 'from-blue-500 to-cyan-500' },
  { route: '/press', title: 'Press', category: 'Company', description: 'Press releases and media coverage of Zion Tech Group.', icon: 'Settings', color: 'from-purple-500 to-pink-500' },
  { route: '/partners', title: 'Partners', category: 'Company', description: 'Our strategic partners and technology alliances.', icon: 'Users', color: 'from-green-500 to-emerald-500' },
  { route: '/demo', title: 'Demo', category: 'Resources', description: 'Interactive demos of our AI and IT solutions.', icon: 'Settings', color: 'from-orange-500 to-red-500' },
  { route: '/support', title: 'Support', category: 'Resources', description: 'Technical support and customer service for all our solutions.', icon: 'HelpCircle', color: 'from-blue-500 to-cyan-500' },
  { route: '/consultation', title: 'Consultation', category: 'Resources', description: 'Free consultation to help you choose the right solutions for your business.', icon: 'Users', color: 'from-purple-500 to-pink-500' },
  { route: '/docs', title: 'Documentation', category: 'Resources', description: 'Comprehensive documentation and guides for all our solutions.', icon: 'FileText', color: 'from-green-500 to-emerald-500' },
  { route: '/api', title: 'API Reference', category: 'Resources', description: 'API documentation and integration guides for developers.', icon: 'Settings', color: 'from-orange-500 to-red-500' },
  { route: '/tutorials', title: 'Tutorials', category: 'Resources', description: 'Step-by-step tutorials and learning resources.', icon: 'Settings', color: 'from-blue-500 to-cyan-500' },
  { route: '/webinars', title: 'Webinars', category: 'Resources', description: 'Educational webinars and training sessions.', icon: 'Settings', color: 'from-purple-500 to-pink-500' },
  { route: '/whitepapers', title: 'White Papers', category: 'Resources', description: 'In-depth research and analysis on technology trends.', icon: 'FileText', color: 'from-green-500 to-emerald-500' },
  { route: '/sitemap', title: 'Sitemap', category: 'Resources', description: 'Complete sitemap of all our pages and services.', icon: 'Settings', color: 'from-orange-500 to-red-500' },
  { route: '/accessibility', title: 'Accessibility', category: 'Resources', description: 'Our commitment to web accessibility and inclusive design.', icon: 'Settings', color: 'from-blue-500 to-cyan-500' },
  { route: '/security', title: 'Security', category: 'Resources', description: 'Security policies and practices to protect your data.', icon: 'Shield', color: 'from-red-500 to-pink-500' }
];

// Template for generating pages
const generatePageTemplate = (page) => {
  const iconImport = `import { ${page.icon}, ArrowRight, CheckCircle, Star, Users, TrendingUp, Clock, Shield } from 'lucide-react';`;
  
  return `import React from 'react';
import { Link } from 'react-router-dom';
${iconImport}
import EnhancedSEO from '../../components/EnhancedSEO';
import FuturisticBackground from '../../components/FuturisticBackground';
import ResponsiveContainer from '../../components/ResponsiveContainer';

const ${page.title.replace(/\s+/g, '')}Page = () => {
  const features = [
    'Advanced ${page.title.toLowerCase()} capabilities',
    'AI-powered automation and optimization',
    'Real-time monitoring and analytics',
    'Scalable and secure infrastructure',
    '24/7 support and maintenance',
    'Easy integration with existing systems',
    'Customizable configuration options',
    'Comprehensive reporting and insights',
    'Mobile-responsive design',
    'Enterprise-grade security'
  ];

  const benefits = [
    {
      title: 'Enhanced Efficiency',
      description: 'Streamline your operations with our advanced ${page.title.toLowerCase()} solution.',
      icon: <${page.icon} className="w-6 h-6" />
    },
    {
      title: 'Cost Savings',
      description: 'Reduce operational costs with automated processes and optimized workflows.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Better Performance',
      description: 'Improve your business performance with data-driven insights and analytics.',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Reliable Support',
      description: 'Get 24/7 support and maintenance from our expert team.',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="${page.title} - Zion Tech Group | ${page.description}"
        description="${page.description}"
        keywords="${page.title.toLowerCase()}, ${page.category.toLowerCase()}, AI solutions, technology services, Zion Tech Group"
        canonical="https://ziontechgroup.com${page.route}"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${page.color.replace('from-', '').replace(' to-', '/20 to-')}/20 border ${page.color.replace('from-', '').replace(' to-', '/30 to-')}/30 mb-6">
            <${page.icon} className="w-4 h-4 ${page.color.replace('from-', 'text-').replace(' to-', '-400')} mr-2" />
            <span className="${page.color.replace('from-', 'text-').replace(' to-', '-400')} text-sm font-medium">${page.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r ${page.color.replace('from-', 'from-').replace(' to-', ' via-')}-400 to-cyan-400">
              ${page.title}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            ${page.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r ${page.color} text-white px-8 py-4 rounded-lg font-semibold hover:from-${page.color.split(' ')[0].replace('from-', '')}-600 hover:to-${page.color.split(' ')[2].replace('to-', '')}-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-${page.color.split(' ')[0].replace('from-', '')}-500/25 hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="#demo"
              className="border ${page.color.replace('from-', 'border-').replace(' to-', '-400')} ${page.color.replace('from-', 'text-').replace(' to-', '-400')} px-8 py-4 rounded-lg font-semibold hover:bg-${page.color.split(' ')[0].replace('from-', '')}-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to succeed with our ${page.title.toLowerCase()} solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              {features.slice(0, 5).map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 ${page.color.replace('from-', 'text-').replace(' to-', '-400')} flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {features.slice(5).map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 ${page.color.replace('from-', 'text-').replace(' to-', '-400')} flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-${page.color.split(' ')[0].replace('from-', '')}-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose ${page.title}?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our ${page.title.toLowerCase()} solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r ${page.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-${page.color.split(' ')[0].replace('from-', '')}-900/30 to-${page.color.split(' ')[2].replace('to-', '')}-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Contact us today to learn more about our ${page.title.toLowerCase()} solution and how it can benefit your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r ${page.color} text-white px-8 py-4 rounded-lg font-semibold hover:from-${page.color.split(' ')[0].replace('from-', '')}-600 hover:to-${page.color.split(' ')[2].replace('to-', '')}-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-${page.color.split(' ')[0].replace('from-', '')}-500/25 hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border ${page.color.replace('from-', 'border-').replace(' to-', '-400')} ${page.color.replace('from-', 'text-').replace(' to-', '-400')} px-8 py-4 rounded-lg font-semibold hover:bg-${page.color.split(' ')[0].replace('from-', '')}-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Pricing
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ${page.title.replace(/\s+/g, '')}Page;`;
};

// Create directories and generate pages
missingPages.forEach(page => {
  const routePath = page.route.replace('/', '');
  const pageDir = path.join(__dirname, 'app', routePath);
  const pageFile = path.join(pageDir, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Generate page content
  const pageContent = generatePageTemplate(page);
  
  // Write page file
  fs.writeFileSync(pageFile, pageContent);
  
  console.log(`Generated page: ${page.route}`);
});

console.log(`\nGenerated ${missingPages.length} missing pages successfully!`);