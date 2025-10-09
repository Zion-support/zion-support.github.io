'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, CheckCircle, Zap, Brain, Shield, Clock, Users, TrendingUp, BarChart, Globe, Smartphone, Mail, FileText, Image, Video, Music, Code, Database, Cloud, Lock, Target, PieChart, Settings, Rocket, Award, DollarSign, Calendar, MessageSquare, Search, Filter, Download, Upload, Share, Eye, Edit, Trash, Plus, Minus, Refresh, Play, Pause, Stop, Volume2, VolumeX, Wifi, WifiOff, Battery, BatteryLow, Signal, SignalHigh, SignalLow, Wifi2, WifiOff2, Battery2, BatteryLow2, Signal2, SignalHigh2, SignalLow2 } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSAASServices = [
    // AI-Powered Tools
    {
      id: 'ai-content-writer',
      name: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, and marketing copy in 50+ languages.',
      category: 'ai-tools',
      icon: <FileText className="w-8 h-8" />,
      price: 29,
      period: 'month',
      features: [
        '50+ Languages Support',
        'SEO Optimized Content',
        'Brand Voice Training',
        'Plagiarism Detection',
        'Content Templates',
        'Bulk Generation',
        'API Access',
        'Team Collaboration'
      ],
      benefits: [
        '10x Faster Content Creation',
        '95% Time Savings',
        'Professional Quality Output',
        'Multi-language Support'
      ],
      popular: true,
      rating: 4.9,
      users: '50K+',
      link: 'https://ziontechgroup.com/ai-content-writer'
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Generator Studio',
      description: 'Professional AI image generation tool with advanced editing capabilities, style transfer, and commercial licensing.',
      category: 'ai-tools',
      icon: <Image className="w-8 h-8" />,
      price: 49,
      period: 'month',
      features: [
        'High-Resolution Images',
        'Style Transfer',
        'Background Removal',
        'Object Replacement',
        'Commercial License',
        'Batch Processing',
        'API Integration',
        'Custom Models'
      ],
      benefits: [
        'Unlimited Generations',
        'Commercial Use Rights',
        'Professional Quality',
        'No Watermarks'
      ],
      popular: true,
      rating: 4.8,
      users: '25K+',
      link: 'https://ziontechgroup.com/ai-image-generator'
    },
    {
      id: 'ai-video-editor',
      name: 'AI Video Editor Pro',
      description: 'Intelligent video editing platform with automatic scene detection, voice synthesis, and smart transitions.',
      category: 'ai-tools',
      icon: <Video className="w-8 h-8" />,
      price: 79,
      period: 'month',
      features: [
        'Auto Scene Detection',
        'Voice Synthesis',
        'Smart Transitions',
        'Background Music AI',
        'Subtitle Generation',
        'Color Correction',
        '4K Export',
        'Cloud Storage'
      ],
      benefits: [
        'Professional Video Quality',
        'Automated Editing',
        'Time-Saving Features',
        'No Learning Curve'
      ],
      popular: false,
      rating: 4.7,
      users: '15K+',
      link: 'https://ziontechgroup.com/ai-video-editor'
    },
    {
      id: 'ai-music-composer',
      name: 'AI Music Composer',
      description: 'Create original music tracks, jingles, and sound effects using advanced AI algorithms and neural networks.',
      category: 'ai-tools',
      icon: <Music className="w-8 h-8" />,
      price: 39,
      period: 'month',
      features: [
        'Original Compositions',
        'Multiple Genres',
        'Custom Instruments',
        'Lyrics Generation',
        'Mixing & Mastering',
        'Royalty-Free License',
        'MIDI Export',
        'Collaboration Tools'
      ],
      benefits: [
        'Unlimited Compositions',
        'Professional Quality',
        'No Copyright Issues',
        'Easy Customization'
      ],
      popular: false,
      rating: 4.6,
      users: '8K+',
      link: 'https://ziontechgroup.com/ai-music-composer'
    },

    // Business Automation Tools
    {
      id: 'email-marketing-ai',
      name: 'Email Marketing AI',
      description: 'Intelligent email marketing platform with AI-powered subject line optimization, send time prediction, and personalization.',
      category: 'business',
      icon: <Mail className="w-8 h-8" />,
      price: 99,
      period: 'month',
      features: [
        'AI Subject Line Optimization',
        'Send Time Prediction',
        'Dynamic Content',
        'A/B Testing AI',
        'List Segmentation',
        'Automation Workflows',
        'Analytics Dashboard',
        'Integrations'
      ],
      benefits: [
        '40% Higher Open Rates',
        'Automated Optimization',
        'Personalized Content',
        'Advanced Analytics'
      ],
      popular: true,
      rating: 4.8,
      users: '30K+',
      link: 'https://ziontechgroup.com/email-marketing-ai'
    },
    {
      id: 'social-media-scheduler',
      name: 'Social Media AI Scheduler',
      description: 'Smart social media management with AI-powered content suggestions, optimal posting times, and engagement optimization.',
      category: 'business',
      icon: <Share className="w-8 h-8" />,
      price: 59,
      period: 'month',
      features: [
        'Multi-Platform Posting',
        'AI Content Suggestions',
        'Optimal Timing AI',
        'Hashtag Optimization',
        'Engagement Analytics',
        'Content Calendar',
        'Team Collaboration',
        'Brand Monitoring'
      ],
      benefits: [
        '3x More Engagement',
        'Automated Posting',
        'Content Optimization',
        'Time Savings'
      ],
      popular: true,
      rating: 4.7,
      users: '40K+',
      link: 'https://ziontechgroup.com/social-media-scheduler'
    },
    {
      id: 'crm-ai-assistant',
      name: 'CRM AI Assistant',
      description: 'Intelligent CRM with AI-powered lead scoring, automated follow-ups, and predictive analytics for sales teams.',
      category: 'business',
      icon: <Users className="w-8 h-8" />,
      price: 149,
      period: 'month',
      features: [
        'AI Lead Scoring',
        'Automated Follow-ups',
        'Predictive Analytics',
        'Sales Forecasting',
        'Pipeline Management',
        'Email Integration',
        'Mobile App',
        'Custom Workflows'
      ],
      benefits: [
        '50% More Conversions',
        'Automated Lead Management',
        'Predictive Insights',
        'Sales Optimization'
      ],
      popular: false,
      rating: 4.9,
      users: '20K+',
      link: 'https://ziontechgroup.com/crm-ai-assistant'
    },
    {
      id: 'inventory-optimizer',
      name: 'AI Inventory Optimizer',
      description: 'Smart inventory management with demand forecasting, automated reordering, and waste reduction algorithms.',
      category: 'business',
      icon: <BarChart className="w-8 h-8" />,
      price: 199,
      period: 'month',
      features: [
        'Demand Forecasting',
        'Automated Reordering',
        'Waste Reduction',
        'Cost Optimization',
        'Multi-location Support',
        'Real-time Analytics',
        'Supplier Integration',
        'Mobile Dashboard'
      ],
      benefits: [
        '30% Cost Reduction',
        'Zero Stockouts',
        'Automated Management',
        'Real-time Insights'
      ],
      popular: false,
      rating: 4.8,
      users: '12K+',
      link: 'https://ziontechgroup.com/inventory-optimizer'
    },

    // Development Tools
    {
      id: 'code-generator-ai',
      name: 'AI Code Generator',
      description: 'Advanced code generation tool that creates production-ready code from natural language descriptions.',
      category: 'development',
      icon: <Code className="w-8 h-8" />,
      price: 79,
      period: 'month',
      features: [
        'Natural Language to Code',
        'Multiple Languages',
        'Code Review AI',
        'Bug Detection',
        'Documentation Generation',
        'Test Case Creation',
        'API Integration',
        'Version Control'
      ],
      benefits: [
        '10x Faster Development',
        'Error-Free Code',
        'Auto Documentation',
        'Multiple Languages'
      ],
      popular: true,
      rating: 4.9,
      users: '35K+',
      link: 'https://ziontechgroup.com/code-generator-ai'
    },
    {
      id: 'api-documentation-generator',
      name: 'API Documentation AI',
      description: 'Automatically generate comprehensive API documentation with interactive examples and testing capabilities.',
      category: 'development',
      icon: <FileText className="w-8 h-8" />,
      price: 49,
      period: 'month',
      features: [
        'Auto Documentation',
        'Interactive Examples',
        'Testing Interface',
        'Multiple Formats',
        'Version Management',
        'Team Collaboration',
        'Custom Styling',
        'Analytics'
      ],
      benefits: [
        '100% Automated',
        'Interactive Testing',
        'Professional Quality',
        'Time Savings'
      ],
      popular: false,
      rating: 4.7,
      users: '18K+',
      link: 'https://ziontechgroup.com/api-documentation-ai'
    },
    {
      id: 'database-optimizer',
      name: 'AI Database Optimizer',
      description: 'Intelligent database performance optimization with query analysis, index recommendations, and automated tuning.',
      category: 'development',
      icon: <Database className="w-8 h-8" />,
      price: 199,
      period: 'month',
      features: [
        'Query Optimization',
        'Index Recommendations',
        'Performance Monitoring',
        'Automated Tuning',
        'Security Analysis',
        'Backup Optimization',
        'Multi-Database Support',
        'Real-time Alerts'
      ],
      benefits: [
        '50% Performance Boost',
        'Automated Optimization',
        'Proactive Monitoring',
        'Cost Reduction'
      ],
      popular: false,
      rating: 4.8,
      users: '10K+',
      link: 'https://ziontechgroup.com/database-optimizer'
    },

    // Analytics & Insights
    {
      id: 'website-analytics-ai',
      name: 'Website Analytics AI',
      description: 'Advanced website analytics with AI-powered insights, user behavior prediction, and conversion optimization.',
      category: 'analytics',
      icon: <BarChart className="w-8 h-8" />,
      price: 89,
      period: 'month',
      features: [
        'AI-Powered Insights',
        'User Behavior Analysis',
        'Conversion Optimization',
        'Heatmap Generation',
        'A/B Testing AI',
        'Real-time Monitoring',
        'Custom Dashboards',
        'Alert System'
      ],
      benefits: [
        'Actionable Insights',
        'Conversion Optimization',
        'User Experience Improvement',
        'Data-Driven Decisions'
      ],
      popular: true,
      rating: 4.8,
      users: '45K+',
      link: 'https://ziontechgroup.com/website-analytics-ai'
    },
    {
      id: 'competitor-analysis-ai',
      name: 'Competitor Analysis AI',
      description: 'Intelligent competitor monitoring with automated tracking, price analysis, and market intelligence.',
      category: 'analytics',
      icon: <Search className="w-8 h-8" />,
      price: 129,
      period: 'month',
      features: [
        'Automated Monitoring',
        'Price Tracking',
        'Content Analysis',
        'Market Intelligence',
        'Alert System',
        'Competitive Reports',
        'Trend Analysis',
        'Custom Dashboards'
      ],
      benefits: [
        'Market Intelligence',
        'Competitive Advantage',
        'Automated Monitoring',
        'Strategic Insights'
      ],
      popular: false,
      rating: 4.7,
      users: '15K+',
      link: 'https://ziontechgroup.com/competitor-analysis-ai'
    },
    {
      id: 'customer-insights-ai',
      name: 'Customer Insights AI',
      description: 'Deep customer analytics with sentiment analysis, churn prediction, and personalized recommendations.',
      category: 'analytics',
      icon: <PieChart className="w-8 h-8" />,
      price: 159,
      period: 'month',
      features: [
        'Sentiment Analysis',
        'Churn Prediction',
        'Customer Segmentation',
        'Personalization Engine',
        'Lifetime Value Prediction',
        'Behavioral Analysis',
        'Recommendation Engine',
        'Real-time Insights'
      ],
      benefits: [
        'Customer Retention',
        'Personalized Experiences',
        'Predictive Analytics',
        'Revenue Optimization'
      ],
      popular: false,
      rating: 4.9,
      users: '22K+',
      link: 'https://ziontechgroup.com/customer-insights-ai'
    },

    // Security & Compliance
    {
      id: 'security-scanner-ai',
      name: 'AI Security Scanner',
      description: 'Comprehensive security scanning with vulnerability detection, threat analysis, and automated remediation.',
      category: 'security',
      icon: <Shield className="w-8 h-8" />,
      price: 299,
      period: 'month',
      features: [
        'Vulnerability Scanning',
        'Threat Detection',
        'Automated Remediation',
        'Compliance Monitoring',
        'Penetration Testing',
        'Security Reports',
        'Real-time Alerts',
        'Team Collaboration'
      ],
      benefits: [
        'Proactive Security',
        'Automated Protection',
        'Compliance Assurance',
        'Risk Reduction'
      ],
      popular: true,
      rating: 4.9,
      users: '8K+',
      link: 'https://ziontechgroup.com/security-scanner-ai'
    },
    {
      id: 'gdpr-compliance-ai',
      name: 'GDPR Compliance AI',
      description: 'Automated GDPR compliance management with data mapping, consent tracking, and privacy impact assessments.',
      category: 'security',
      icon: <Lock className="w-8 h-8" />,
      price: 199,
      period: 'month',
      features: [
        'Data Mapping',
        'Consent Management',
        'Privacy Impact Assessment',
        'Breach Detection',
        'Compliance Reporting',
        'Data Subject Rights',
        'Audit Trails',
        'Legal Updates'
      ],
      benefits: [
        'Automated Compliance',
        'Risk Mitigation',
        'Legal Protection',
        'Audit Readiness'
      ],
      popular: false,
      rating: 4.8,
      users: '5K+',
      link: 'https://ziontechgroup.com/gdpr-compliance-ai'
    },

    // Productivity Tools
    {
      id: 'meeting-transcriber-ai',
      name: 'AI Meeting Transcriber',
      description: 'Intelligent meeting transcription with speaker identification, action item extraction, and smart summaries.',
      category: 'productivity',
      icon: <MessageSquare className="w-8 h-8" />,
      price: 39,
      period: 'month',
      features: [
        'Real-time Transcription',
        'Speaker Identification',
        'Action Item Extraction',
        'Smart Summaries',
        'Multi-language Support',
        'Cloud Storage',
        'Team Sharing',
        'Search & Filter'
      ],
      benefits: [
        '100% Accurate Transcription',
        'Automated Summaries',
        'Action Item Tracking',
        'Time Savings'
      ],
      popular: true,
      rating: 4.8,
      users: '60K+',
      link: 'https://ziontechgroup.com/meeting-transcriber-ai'
    },
    {
      id: 'task-automation-ai',
      name: 'AI Task Automator',
      description: 'Intelligent task automation with workflow creation, smart scheduling, and productivity optimization.',
      category: 'productivity',
      icon: <Settings className="w-8 h-8" />,
      price: 69,
      period: 'month',
      features: [
        'Workflow Automation',
        'Smart Scheduling',
        'Task Prioritization',
        'Team Collaboration',
        'Progress Tracking',
        'Integration Hub',
        'Custom Rules',
        'Analytics Dashboard'
      ],
      benefits: [
        '80% Time Savings',
        'Automated Workflows',
        'Smart Prioritization',
        'Team Efficiency'
      ],
      popular: false,
      rating: 4.7,
      users: '25K+',
      link: 'https://ziontechgroup.com/task-automation-ai'
    },
    {
      id: 'expense-tracker-ai',
      name: 'AI Expense Tracker',
      description: 'Smart expense management with receipt scanning, categorization, and automated reporting for businesses.',
      category: 'productivity',
      icon: <DollarSign className="w-8 h-8" />,
      price: 49,
      period: 'month',
      features: [
        'Receipt Scanning',
        'Auto Categorization',
        'Expense Reports',
        'Tax Preparation',
        'Multi-currency Support',
        'Team Management',
        'Mobile App',
        'Integration Hub'
      ],
      benefits: [
        'Automated Tracking',
        'Tax Compliance',
        'Time Savings',
        'Accurate Reporting'
      ],
      popular: false,
      rating: 4.6,
      users: '18K+',
      link: 'https://ziontechgroup.com/expense-tracker-ai'
    },

    // E-commerce Tools
    {
      id: 'product-optimizer-ai',
      name: 'AI Product Optimizer',
      description: 'E-commerce product optimization with AI-powered pricing, SEO, and conversion rate optimization.',
      category: 'ecommerce',
      icon: <Target className="w-8 h-8" />,
      price: 149,
      period: 'month',
      features: [
        'Dynamic Pricing AI',
        'SEO Optimization',
        'Conversion Optimization',
        'Inventory Management',
        'Customer Insights',
        'A/B Testing',
        'Multi-platform Support',
        'Analytics Dashboard'
      ],
      benefits: [
        '30% Higher Conversions',
        'Optimized Pricing',
        'Better SEO Rankings',
        'Increased Revenue'
      ],
      popular: true,
      rating: 4.8,
      users: '20K+',
      link: 'https://ziontechgroup.com/product-optimizer-ai'
    },
    {
      id: 'customer-service-ai',
      name: 'AI Customer Service',
      description: 'Intelligent customer service automation with chatbots, ticket routing, and sentiment analysis.',
      category: 'ecommerce',
      icon: <MessageSquare className="w-8 h-8" />,
      price: 99,
      period: 'month',
      features: [
        'AI Chatbots',
        'Ticket Routing',
        'Sentiment Analysis',
        'Multi-language Support',
        'Knowledge Base',
        'Live Chat Integration',
        'Performance Analytics',
        'Custom Training'
      ],
      benefits: [
        '24/7 Support',
        'Instant Responses',
        'Cost Reduction',
        'Customer Satisfaction'
      ],
      popular: true,
      rating: 4.7,
      users: '35K+',
      link: 'https://ziontechgroup.com/customer-service-ai'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSAASServices.length },
    { id: 'ai-tools', name: 'AI Tools', count: microSAASServices.filter(s => s.category === 'ai-tools').length },
    { id: 'business', name: 'Business', count: microSAASServices.filter(s => s.category === 'business').length },
    { id: 'development', name: 'Development', count: microSAASServices.filter(s => s.category === 'development').length },
    { id: 'analytics', name: 'Analytics', count: microSAASServices.filter(s => s.category === 'analytics').length },
    { id: 'security', name: 'Security', count: microSAASServices.filter(s => s.category === 'security').length },
    { id: 'productivity', name: 'Productivity', count: microSAASServices.filter(s => s.category === 'productivity').length },
    { id: 'ecommerce', name: 'E-commerce', count: microSAASServices.filter(s => s.category === 'ecommerce').length }
  ];

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Powerful AI-driven tools for modern businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Choose from 20+ innovative micro SAAS applications designed to automate, optimize, and scale your business operations with cutting-edge AI technology.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search micro SAAS tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-gray-800/50 border border-cyan-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`quantum-card p-6 rounded-lg hover:shadow-2xl transition-all duration-300 ${
                service.popular ? 'ring-2 ring-cyan-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-cyan-400">{service.icon}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                    <span className="text-sm text-gray-400">({service.users})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-cyan-400">${service.price}</span>
                  <span className="text-gray-400">/{service.period}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-cyan-300">
                        <Zap className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-center"
                  >
                    Try Now
                  </a>
                  <button className="px-4 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our micro SAAS solutions today and experience the power of AI-driven automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;