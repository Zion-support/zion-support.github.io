'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, Star, ArrowRight, Search, Filter, Brain, Cloud, Shield, Code, BarChart, Users, Smartphone, Mail, Target, Globe, Database, Settings, Lock, TrendingUp, Calendar, FileText, Cpu, Sparkles } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasProducts = [
    // AI Services
    {
      icon: '🤖',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics. 95% customer satisfaction rate.',
      features: ['AI Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Email Integration', 'Sales Forecasting', 'Custom Dashboards'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'AI Services',
      popular: true,
      trial: '30-day free trial',
      benefits: ['95% customer satisfaction', '300% lead conversion increase', '50% time savings']
    },
    {
      icon: '📊',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights, custom dashboards, and automated reporting. 100+ data sources supported.',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Mobile App', 'API Integration', 'Automated Alerts'],
      price: '$199/month',
      users: 'Unlimited users',
      category: 'AI Services',
      popular: true,
      trial: '7-day free trial',
      benefits: ['200% faster insights', '100+ data sources', 'Real-time updates']
    },
    {
      icon: '✍️',
      title: 'AI Content Studio',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media automation. 10,000+ templates available.',
      features: ['AI Writing', 'Image Generation', 'Video Editing', 'Social Media Automation', 'SEO Optimization', 'Multi-language Support'],
      price: '$299/month',
      users: 'Unlimited users',
      category: 'AI Services',
      popular: true,
      trial: '14-day free trial',
      benefits: ['10,000+ templates', '25+ languages', '500% content output increase']
    },
    {
      icon: '🤖',
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with no coding required. 99.9% uptime guarantee.',
      features: ['No-Code Builder', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard', 'Custom Training', 'Voice Support'],
      price: '$99/month',
      users: 'Unlimited conversations',
      category: 'AI Services',
      trial: '7-day free trial',
      benefits: ['99.9% uptime', '90% query resolution', '24/7 availability']
    },
    {
      icon: '📧',
      title: 'AI Email Marketing',
      description: 'Automated email campaigns with AI optimization, personalization, and advanced analytics for maximum ROI. 300% average increase in open rates.',
      features: ['AI Optimization', 'Personalization', 'A/B Testing', 'Advanced Analytics', 'Automation Workflows', 'Template Library'],
      price: '$179/month',
      users: 'Up to 50,000 emails',
      category: 'AI Services',
      trial: '14-day free trial',
      benefits: ['300% open rate increase', '250% click rate boost', 'Automated optimization']
    },
    {
      icon: '📱',
      title: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment. 500+ pre-built components.',
      features: ['Drag & Drop Builder', 'Native Performance', 'AI Code Generation', 'Instant Deployment', 'App Store Publishing', 'Push Notifications'],
      price: '$399/month',
      users: 'Unlimited apps',
      category: 'AI Services',
      trial: '30-day free trial',
      benefits: ['500+ components', '90% faster development', 'Native performance']
    },
    {
      icon: '🔍',
      title: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights. 200% average traffic increase.',
      features: ['Keyword Research', 'Content Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO', 'Local SEO'],
      price: '$129/month',
      users: 'Unlimited keywords',
      category: 'AI Services',
      trial: '7-day free trial',
      benefits: ['200% traffic increase', '95% accuracy', 'Automated optimization']
    },
    {
      icon: '💰',
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation, payment tracking, and financial reporting with AI-powered insights. 50% faster payment processing.',
      features: ['Auto Invoice Generation', 'Payment Tracking', 'Financial Reports', 'Tax Calculations', 'Client Portal', 'Multi-currency Support'],
      price: '$79/month',
      users: 'Unlimited invoices',
      category: 'AI Services',
      trial: '14-day free trial',
      benefits: ['50% faster payments', '95% accuracy', 'Automated reminders']
    },
    
    // Productivity Tools
    {
      icon: '📝',
      title: 'AI Writing Assistant',
      description: 'Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates and 25+ languages.',
      features: ['50+ Templates', '25+ Languages', 'Grammar Check', 'Tone Adjustment', 'Plagiarism Check', 'Content Ideas'],
      price: '$29/month',
      users: 'Unlimited words',
      category: 'Productivity',
      trial: '7-day free trial',
      benefits: ['50+ templates', '25+ languages', '95% accuracy']
    },
    {
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Real-time business analytics with AI insights, automated reports, and predictive forecasting. 200+ integrations.',
      features: ['Real-time Analytics', 'Predictive Forecasting', 'Automated Reports', 'Custom Dashboards', 'Data Visualization', 'API Integration'],
      price: '$49/month',
      users: 'Unlimited reports',
      category: 'Productivity',
      trial: '14-day free trial',
      benefits: ['200+ integrations', 'Real-time updates', 'Predictive insights']
    },
    {
      icon: '📅',
      title: 'AI Scheduler',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management. 90% time savings.',
      features: ['Smart Scheduling', 'Calendar Sync', 'Meeting Optimization', 'Time Tracking', 'Team Coordination', 'Automated Reminders'],
      price: '$19/month',
      users: 'Unlimited meetings',
      category: 'Productivity',
      trial: '7-day free trial',
      benefits: ['90% time savings', 'Smart optimization', 'Team coordination']
    },
    {
      icon: '💰',
      title: 'Expense Tracker',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights. 95% accuracy rate.',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Tracking', 'Tax Preparation', 'Multi-currency', 'Reporting'],
      price: '$15/month',
      users: 'Unlimited receipts',
      category: 'Productivity',
      trial: '14-day free trial',
      benefits: ['95% accuracy', 'Automated categorization', 'Tax ready']
    },
    {
      icon: '🎯',
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking. 300% productivity boost.',
      features: ['AI Prioritization', 'Team Collaboration', 'Progress Tracking', 'Time Estimation', 'Project Templates', 'Integration APIs'],
      price: '$39/month',
      users: 'Unlimited tasks',
      category: 'Productivity',
      trial: '7-day free trial',
      benefits: ['300% productivity boost', 'AI prioritization', 'Team collaboration']
    },
    {
      icon: '📈',
      title: 'CRM Lite',
      description: 'Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation. 400% lead conversion increase.',
      features: ['Lead Scoring', 'Contact Management', 'Sales Pipeline', 'Email Integration', 'Reporting', 'Mobile App'],
      price: '$59/month',
      users: 'Up to 50 contacts',
      category: 'Productivity',
      trial: '14-day free trial',
      benefits: ['400% conversion increase', 'AI lead scoring', 'Mobile access']
    },
    {
      icon: '📧',
      title: 'Email Optimizer',
      description: 'AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing. 250% open rate increase.',
      features: ['Subject Line AI', 'Send Time Optimization', 'A/B Testing', 'Performance Analytics', 'Template Library', 'Spam Check'],
      price: '$25/month',
      users: 'Unlimited emails',
      category: 'Productivity',
      trial: '7-day free trial',
      benefits: ['250% open rate increase', 'AI optimization', 'A/B testing']
    },
    {
      icon: '🔍',
      title: 'Social Media Manager',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics. 500% engagement increase.',
      features: ['Content Creation', 'Auto Scheduling', 'Performance Analytics', 'Hashtag Research', 'Multi-platform', 'Engagement Tracking'],
      price: '$45/month',
      users: 'All platforms',
      category: 'Productivity',
      trial: '14-day free trial',
      benefits: ['500% engagement increase', 'All platforms', 'AI content creation']
    },

    // Developer Tools
    {
      icon: '💻',
      title: 'Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages.',
      features: ['Code Completion', 'Debugging Help', 'Code Review', 'Documentation', 'Multi-language', 'IDE Integration'],
      price: '$39/month',
      users: 'Unlimited usage',
      category: 'Developer Tools',
      trial: '7-day free trial',
      benefits: ['50% faster coding', 'Multi-language support', 'Smart debugging']
    },
    {
      icon: '🔧',
      title: 'API Builder',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools.',
      features: ['Visual API Builder', 'Auto Documentation', 'Testing Tools', 'Rate Limiting', 'Authentication', 'Monitoring'],
      price: '$59/month',
      users: 'Unlimited APIs',
      category: 'Developer Tools',
      trial: '14-day free trial',
      benefits: ['90% faster API development', 'Auto documentation', 'Built-in testing']
    },
    {
      icon: '🐛',
      title: 'Bug Tracker Pro',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.',
      features: ['AI Detection', 'Priority Scoring', 'Resolution Suggestions', 'Team Collaboration', 'Integration APIs', 'Reporting'],
      price: '$25/month',
      users: 'Unlimited issues',
      category: 'Developer Tools',
      trial: '7-day free trial',
      benefits: ['95% detection accuracy', 'AI prioritization', 'Team collaboration']
    },
    {
      icon: '📚',
      title: 'Doc Generator',
      description: 'Automatically generate technical documentation, API docs, and user guides from code.',
      features: ['Auto Generation', 'Multiple Formats', 'Version Control', 'Collaboration', 'Templates', 'Export Options'],
      price: '$19/month',
      users: 'Unlimited docs',
      category: 'Developer Tools',
      trial: '14-day free trial',
      benefits: ['80% time savings', 'Auto generation', 'Multiple formats']
    }
  ];

  const categories = ['All', 'AI Services', 'Productivity', 'Developer Tools'];
  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration'
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive collection of AI-powered micro SAAS solutions. 50+ ready-to-use applications for modern businesses with real-world pricing and features." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity tools, developer tools, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              50+ AI-powered business tools designed to transform your workflow. Start with free trials and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#products" className="cyber-button">
                Explore All Tools
              </a>
              <a href="/contact" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4" id="products">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SAAS tools..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Micro SAAS Tools' : `${selectedCategory} Tools`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} tool{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300 group relative">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {product.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{product.price}</div>
                    <div className="text-sm text-gray-300 mb-1">{product.users}</div>
                    <div className="text-xs text-cyan-400 font-medium">{product.trial}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 cyber-button text-center py-3">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit}</h3>
                  <p className="text-gray-300 text-sm">
                    Get started immediately with our micro SAAS solutions designed for modern businesses.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="quantum-card p-12">
              <h2 className="text-4xl font-bold text-white mb-4 holographic-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SAAS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </a>
                <a
                  href="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View All Plans
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
