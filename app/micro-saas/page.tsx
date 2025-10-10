'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  CheckCircle, 
  ArrowRight, 
  Zap,
  Star,
  TrendingUp,
  Users,
  Shield,
  Clock
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // AI & Machine Learning Tools
    {
      icon: '🤖',
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with 50+ templates, SEO optimization, and multi-language support',
      features: ['50+ Content Templates', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Training', 'Plagiarism Checker', 'Social Media Integration'],
      price: '$49/month',
      users: 'Up to 5 users',
      category: 'AI Tools',
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-generator',
      marketPrice: '$99/month',
      savings: '50%'
    },
    {
      icon: '📊',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics, custom dashboards, and automated insights',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Mobile App', 'Data Integration', 'Alert System'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'AI Tools',
      popular: true,
      link: 'https://ziontechgroup.com/ai-analytics',
      marketPrice: '$199/month',
      savings: '50%'
    },
    {
      icon: '💬',
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with no coding required',
      features: ['No-Code Builder', 'Multi-channel Support', 'Sentiment Analysis', 'Lead Qualification', 'Integration APIs', 'Analytics Dashboard'],
      price: '$79/month',
      users: 'Unlimited',
      category: 'AI Tools',
      link: 'https://ziontechgroup.com/ai-chatbot-builder',
      marketPrice: '$149/month',
      savings: '47%'
    },
    {
      icon: '🎨',
      title: 'AI Design Studio',
      description: 'Professional design tool with AI assistance for logos, graphics, and marketing materials',
      features: ['Logo Generator', 'Graphic Design', 'Brand Kit', 'Template Library', 'Export Options', 'Collaboration Tools'],
      price: '$39/month',
      users: 'Up to 10 users',
      category: 'AI Tools',
      link: 'https://ziontechgroup.com/ai-design-studio',
      marketPrice: '$79/month',
      savings: '51%'
    },
    {
      icon: '📧',
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI optimization, personalization, and advanced analytics',
      features: ['AI Optimization', 'Personalization', 'A/B Testing', 'Automation', 'Analytics', 'Template Library'],
      price: '$59/month',
      users: 'Up to 25,000 contacts',
      category: 'Marketing',
      link: 'https://ziontechgroup.com/ai-email-marketing',
      marketPrice: '$129/month',
      savings: '54%'
    },
    {
      icon: '🔍',
      title: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, and content optimization with AI insights',
      features: ['Keyword Research', 'Content Analysis', 'Rank Tracking', 'Technical SEO', 'Competitor Analysis', 'Reporting'],
      price: '$69/month',
      users: 'Up to 5 websites',
      category: 'Marketing',
      link: 'https://ziontechgroup.com/ai-seo-optimizer',
      marketPrice: '$149/month',
      savings: '54%'
    },
    {
      icon: '📱',
      title: 'AI Social Media Manager',
      description: 'Automated social media management with content creation, scheduling, and performance analytics',
      features: ['Content Creation', 'Auto-scheduling', 'Analytics', 'Hashtag Research', 'Engagement Tracking', 'Multi-platform'],
      price: '$49/month',
      users: 'Up to 10 accounts',
      category: 'Marketing',
      link: 'https://ziontechgroup.com/ai-social-media-manager',
      marketPrice: '$99/month',
      savings: '51%'
    },
    {
      icon: '👥',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead Management', 'Email Automation', 'Sales Forecasting', 'Integration APIs', 'Pipeline Management', 'Reporting'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'Business',
      popular: true,
      link: 'https://ziontechgroup.com/ai-crm',
      marketPrice: '$299/month',
      savings: '50%'
    },
    {
      icon: '💰',
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation, payment tracking, and financial reporting with AI insights',
      features: ['Auto Invoice Creation', 'Payment Tracking', 'Financial Reports', 'Tax Calculations', 'Client Portal', 'Recurring Billing'],
      price: '$29/month',
      users: 'Unlimited',
      category: 'Business',
      link: 'https://ziontechgroup.com/ai-invoice-generator',
      marketPrice: '$59/month',
      savings: '51%'
    },
    {
      icon: '📅',
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management',
      features: ['Smart Scheduling', 'Calendar Integration', 'Meeting Optimization', 'Time Tracking', 'Team Coordination', 'Analytics'],
      price: '$39/month',
      users: 'Up to 20 users',
      category: 'Productivity',
      link: 'https://ziontechgroup.com/ai-scheduler',
      marketPrice: '$79/month',
      savings: '51%'
    },
    {
      icon: '📝',
      title: 'AI Writing Assistant',
      description: 'Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates',
      features: ['50+ Templates', 'Grammar Check', 'Tone Adjustment', 'Plagiarism Detection', 'Multi-language', 'Export Options'],
      price: '$29/month',
      users: 'Up to 5 users',
      category: 'Productivity',
      link: 'https://ziontechgroup.com/ai-writing-assistant',
      marketPrice: '$59/month',
      savings: '51%'
    },
    {
      icon: '🎯',
      title: 'AI Task Manager',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking',
      features: ['AI Prioritization', 'Team Collaboration', 'Progress Tracking', 'Deadline Management', 'Integration', 'Analytics'],
      price: '$49/month',
      users: 'Up to 15 users',
      category: 'Productivity',
      link: 'https://ziontechgroup.com/ai-task-manager',
      marketPrice: '$99/month',
      savings: '51%'
    },
    {
      icon: '🔒',
      title: 'AI Security Monitor',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Reporting', '24/7 Monitoring', 'Incident Response', 'Security Reports'],
      price: '$199/month',
      users: 'Up to 200 users',
      category: 'Security',
      popular: true,
      link: 'https://ziontechgroup.com/ai-security-monitor',
      marketPrice: '$399/month',
      savings: '50%'
    },
    {
      icon: '☁️',
      title: 'AI Cloud Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource Optimization', 'Cost Tracking', 'Auto-scaling', 'Multi-cloud Support', 'Performance Monitoring', 'Cost Alerts'],
      price: '$299/month',
      users: 'Unlimited',
      category: 'Infrastructure',
      link: 'https://ziontechgroup.com/ai-cloud-manager',
      marketPrice: '$599/month',
      savings: '50%'
    },
    {
      icon: '💻',
      title: 'AI Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages',
      features: ['Code Completion', 'Debugging', 'Code Review', 'Documentation', 'Multi-language', 'IDE Integration'],
      price: '$39/month',
      users: 'Up to 10 developers',
      category: 'Development',
      link: 'https://ziontechgroup.com/ai-code-assistant',
      marketPrice: '$79/month',
      savings: '51%'
    },
    {
      icon: '🔧',
      title: 'AI API Builder',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools',
      features: ['API Creation', 'Documentation', 'Testing Tools', 'Monitoring', 'Version Control', 'Integration'],
      price: '$59/month',
      users: 'Up to 5 APIs',
      category: 'Development',
      link: 'https://ziontechgroup.com/ai-api-builder',
      marketPrice: '$119/month',
      savings: '50%'
    },
    {
      icon: '📊',
      title: 'AI Data Visualizer',
      description: 'Transform data into actionable insights with AI-powered visualization and interactive dashboards',
      features: ['Data Visualization', 'Interactive Dashboards', 'AI Insights', 'Custom Charts', 'Real-time Data', 'Export Options'],
      price: '$79/month',
      users: 'Up to 25 users',
      category: 'Analytics',
      link: 'https://ziontechgroup.com/ai-data-visualizer',
      marketPrice: '$159/month',
      savings: '50%'
    },
    {
      icon: '🎥',
      title: 'AI Video Creator',
      description: 'Create professional videos with AI assistance, automated editing, and multiple output formats',
      features: ['AI Video Creation', 'Auto-editing', 'Multiple Formats', 'Template Library', 'Voice Synthesis', 'Subtitle Generation'],
      price: '$89/month',
      users: 'Up to 3 users',
      category: 'Media',
      link: 'https://ziontechgroup.com/ai-video-creator',
      marketPrice: '$179/month',
      savings: '50%'
    },
    {
      icon: '🎵',
      title: 'AI Audio Studio',
      description: 'Professional audio editing with AI noise reduction, enhancement, and music generation',
      features: ['Noise Reduction', 'Audio Enhancement', 'Music Generation', 'Voice Cloning', 'Podcast Tools', 'Export Options'],
      price: '$49/month',
      users: 'Up to 5 users',
      category: 'Media',
      link: 'https://ziontechgroup.com/ai-audio-studio',
      marketPrice: '$99/month',
      savings: '51%'
    },
    {
      icon: '📚',
      title: 'AI Learning Platform',
      description: 'Personalized learning experience with AI tutoring, progress tracking, and adaptive content',
      features: ['AI Tutoring', 'Progress Tracking', 'Adaptive Content', 'Skill Assessment', 'Certification', 'Mobile App'],
      price: '$69/month',
      users: 'Up to 50 students',
      category: 'Education',
      link: 'https://ziontechgroup.com/ai-learning-platform',
      marketPrice: '$139/month',
      savings: '50%'
    }
  ];

  const categories = [
    'All',
    'AI Tools',
    'Marketing',
    'Business',
    'Productivity',
    'Security',
    'Infrastructure',
    'Development',
    'Analytics',
    'Media',
    'Education'
  ];

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
        <meta name="description" content="Discover our comprehensive collection of AI-powered micro SAAS solutions. 20+ innovative tools for productivity, marketing, business, and development. Start free trials today." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity tools, marketing automation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              20+ AI-powered business tools designed to streamline operations, boost productivity, and drive growth. 
              Start with free trials and scale as you grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-white font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-white font-medium">10,000+ Users</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white font-medium">50% Average Savings</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SAAS solutions..."
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
                {selectedCategory === 'All' ? 'All Micro SAAS Solutions' : `${selectedCategory} Tools`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} solution{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4">{product.icon}</div>
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
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                      <div className="text-sm text-gray-400 line-through">{product.marketPrice}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-300">Save {product.savings}</div>
                      <div className="text-sm text-gray-300">{product.users}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={product.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
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
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
