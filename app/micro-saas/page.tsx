'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Brain, Code, Database, Smartphone, Globe, Lock, FileText, Mail, Calendar, Target, Cpu, Settings, Monitor, Wifi, Smartphone as Phone, CreditCard, PieChart, Search, Filter, Download, Upload, Eye, AlertTriangle, CheckSquare, Clock, DollarSign, Award, Rocket, Sparkles } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice?: string;
  users: string;
  popular: boolean;
  category: string;
  link: string;
  marketPrice: string;
  savings?: string;
}

const MicroSaasPage: React.FC = () => {
  const products = [
    {
      id: '1',
      icon: BarChart3,
      title: 'ZionAnalytics Pro',
      description: 'Advanced business intelligence and real-time analytics platform with AI-powered insights',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom dashboard builder with drag-and-drop interface',
        'Multi-source data integration (APIs, databases, files)',
        'Automated report generation and email scheduling',
        'Advanced filtering and segmentation tools',
        'Mobile app for iOS and Android',
        'White-label solution available',
        '24/7 technical support',
        'SOC 2 Type II compliant'
      ],
      price: '$49/month',
      originalPrice: '$99/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics',
      link: 'https://ziontechgroup.com/analytics-pro',
      marketPrice: '$150-300/month',
      savings: '67% off market rate'
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'ZionChat AI',
      description: 'Enterprise-grade AI customer support platform with multilingual capabilities',
      features: [
        'Advanced AI chatbot with 95% accuracy rate',
        'Live chat integration with human handoff',
        'Multi-language support (50+ languages)',
        'Sentiment analysis and emotion detection',
        'Ticket management and escalation system',
        'Knowledge base integration',
        'Voice and video chat support',
        'CRM integration (Salesforce, HubSpot, etc.)',
        'Custom AI model training',
        'Advanced analytics and reporting'
      ],
      price: '$79/month',
      originalPrice: '$149/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Communication',
      link: 'https://ziontechgroup.com/chat-ai',
      marketPrice: '$200-500/month',
      savings: '60% off market rate'
    },
    {
      id: '3',
      icon: Shield,
<<<<<<< HEAD
      title: 'ZionSecure Monitor',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform',
      features: [
        'Real-time threat detection and response',
        'Automated vulnerability scanning',
        'Compliance reporting (GDPR, HIPAA, SOX)',
        'Incident response automation',
        'Security dashboard with 360° view',
        'Penetration testing tools',
        'Dark web monitoring',
        'Employee security training modules',
        'Integration with SIEM systems',
        '24/7 security operations center'
      ],
      price: '$129/month',
      originalPrice: '$199/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Security',
      link: 'https://ziontechgroup.com/secure-monitor',
      marketPrice: '$300-800/month',
      savings: '57% off market rate'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'ZionCloud Backup',
      description: 'Enterprise cloud backup and disaster recovery solution with global CDN',
      features: [
        'Automated daily backups with versioning',
        'Cross-platform sync (Windows, Mac, Linux)',
        'Global CDN with 99.99% uptime',
        'End-to-end encryption (AES-256)',
        'Disaster recovery in under 4 hours',
        'Compliance with GDPR and HIPAA',
        'Unlimited storage capacity',
        'Mobile app for iOS and Android',
        'API for custom integrations',
        '24/7 technical support'
      ],
      price: '$39/month',
      originalPrice: '$79/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Storage',
      link: 'https://ziontechgroup.com/cloud-backup',
      marketPrice: '$100-200/month',
      savings: '61% off market rate'
    },
    {
      id: '5',
      icon: Monitor,
      title: 'ZionPerformance Pro',
      description: 'Advanced application performance monitoring and optimization platform',
      features: [
        'Real-time performance monitoring',
        'Error tracking and alerting',
        'Uptime monitoring (99.9% SLA)',
        'Performance insights and recommendations',
        'Custom alert rules and notifications',
        'Integration with 100+ tools',
        'Mobile performance monitoring',
        'Database performance analysis',
        'Load testing and capacity planning',
        'Detailed performance reports'
      ],
      price: '$89/month',
      originalPrice: '$149/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Monitoring',
      link: 'https://ziontechgroup.com/performance-pro',
      marketPrice: '$200-400/month',
      savings: '55% off market rate'
    },
    {
      id: '6',
      icon: Brain,
      title: 'ZionAI Assistant',
      description: 'Intelligent business automation and AI-powered workflow optimization',
      features: [
        'Workflow automation with visual builder',
        'AI-powered insights and recommendations',
        'Smart task scheduling and prioritization',
        'Integration with 500+ business tools',
        'Custom AI model training and deployment',
        'Natural language processing',
        'Document analysis and extraction',
        'Predictive analytics and forecasting',
        'Voice commands and control',
        'Custom API development'
      ],
      price: '$149/month',
      originalPrice: '$249/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'AI',
      link: 'https://ziontechgroup.com/ai-assistant',
      marketPrice: '$400-1000/month',
      savings: '63% off market rate'
    },
    {
      id: '7',
      icon: Code,
      title: 'ZionCode Generator',
      description: 'AI-powered code generation and development acceleration platform',
      features: [
        'AI code generation for 20+ programming languages',
        'Code review and optimization suggestions',
        'Automated testing and debugging',
        'Documentation generation',
        'Code refactoring and modernization',
        'Security vulnerability detection',
        'Performance optimization recommendations',
        'Integration with popular IDEs',
        'Team collaboration features',
        'Custom code templates and snippets'
      ],
      price: '$99/month',
      originalPrice: '$179/month',
      users: 'Up to 20 developers',
      popular: false,
      category: 'Development',
      link: 'https://ziontechgroup.com/code-generator',
      marketPrice: '$300-600/month',
      savings: '67% off market rate'
    },
    {
      id: '8',
      icon: Database,
      title: 'ZionData Manager',
      description: 'Advanced data management and ETL platform with AI-powered insights',
      features: [
        'Automated data extraction and transformation',
        'Data quality monitoring and cleansing',
        'Real-time data processing and streaming',
        'Data visualization and reporting',
        'Machine learning model deployment',
        'Data governance and compliance tools',
        'API for data access and integration',
        'Cloud and on-premise deployment',
        'Advanced security and encryption',
        'Scalable to petabyte scale'
      ],
      price: '$199/month',
      originalPrice: '$349/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Data',
      link: 'https://ziontechgroup.com/data-manager',
      marketPrice: '$500-1500/month',
      savings: '60% off market rate'
    },
    {
      id: '9',
      icon: Smartphone,
      title: 'ZionMobile Builder',
      description: 'No-code mobile app development platform with AI assistance',
      features: [
        'Drag-and-drop app builder',
        'AI-powered design suggestions',
        'Native iOS and Android apps',
        'Real-time preview and testing',
        'App store deployment assistance',
        'Push notifications and analytics',
        'Backend integration and APIs',
        'User authentication and security',
        'Custom branding and theming',
        'App maintenance and updates'
      ],
      price: '$79/month',
      originalPrice: '$129/month',
      users: 'Up to 15 developers',
      popular: false,
      category: 'Mobile',
      link: 'https://ziontechgroup.com/mobile-builder',
      marketPrice: '$200-500/month',
      savings: '61% off market rate'
    },
    {
      id: '10',
      icon: Globe,
      title: 'ZionWeb Optimizer',
      description: 'Comprehensive website optimization and SEO platform',
      features: [
        'Automated website speed optimization',
        'SEO analysis and recommendations',
        'Core Web Vitals monitoring',
        'Content optimization suggestions',
        'Image compression and optimization',
        'CDN integration and management',
        'Security scanning and hardening',
        'Uptime monitoring and alerting',
        'Performance analytics and reporting',
        'A/B testing and conversion optimization'
      ],
      price: '$59/month',
      originalPrice: '$99/month',
      users: 'Up to 25 websites',
      popular: false,
      category: 'Web',
      link: 'https://ziontechgroup.com/web-optimizer',
      marketPrice: '$150-300/month',
      savings: '61% off market rate'
    },
    {
      id: '11',
      icon: CreditCard,
      title: 'ZionPay Gateway',
      description: 'Advanced payment processing and financial management platform',
      features: [
        'Multi-currency payment processing',
        'Cryptocurrency payment support',
        'Fraud detection and prevention',
        'PCI DSS compliance',
        'Recurring billing and subscriptions',
        'Financial reporting and analytics',
        'Tax calculation and reporting',
        'Integration with 100+ payment methods',
        'White-label payment solutions',
        '24/7 fraud monitoring'
      ],
      price: '$89/month',
      originalPrice: '$149/month',
      users: 'Unlimited transactions',
      popular: false,
      category: 'Finance',
      link: 'https://ziontechgroup.com/pay-gateway',
      marketPrice: '$200-500/month',
      savings: '55% off market rate'
    },
    {
      id: '12',
      icon: PieChart,
      title: 'ZionBI Dashboard',
      description: 'Business intelligence and data visualization platform',
      features: [
        'Interactive dashboards and reports',
        'Real-time data visualization',
        'Custom KPI tracking and alerts',
        'Data source integration (50+ connectors)',
        'Advanced analytics and forecasting',
        'Collaborative reporting and sharing',
        'Mobile-responsive dashboards',
        'White-label and custom branding',
        'API for custom integrations',
        'Advanced security and access control'
      ],
      price: '$119/month',
      originalPrice: '$199/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Business Intelligence',
      link: 'https://ziontechgroup.com/bi-dashboard',
      marketPrice: '$300-800/month',
      savings: '60% off market rate'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Development', 'Data', 'Mobile', 'Web', 'Finance', 'Business Intelligence'];

=======
      title: 'Security Monitoring Suite',
      description: 'Advanced cybersecurity monitoring with threat detection and automated response.',
      features: ['24/7 threat monitoring', 'Automated incident response', 'Compliance tracking', 'Security analytics'],
      price: '$49/month',
      users: 'Up to 25 users'
    },
    {
      icon: BarChart,
      title: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization'],
      price: '$39/month',
      users: 'Up to 15 users'
    },
    {
      icon: Star,
      title: 'Customer Insights AI',
      description: 'Advanced customer analytics and behavior prediction using machine learning.',
      features: ['Customer segmentation', 'Behavior prediction', 'Churn analysis', 'Personalization engine'],
      price: '$59/month',
      users: 'Up to 50 users'
    },
    {
      icon: Clock,
      title: 'Time Tracking Intelligence',
      description: 'Smart time tracking with productivity insights and automated reporting.',
      features: ['Automatic time tracking', 'Productivity analytics', 'Team performance', 'Billing automation'],
      price: '$19/month',
      users: 'Up to 20 users'
    },
    {
      icon: Users,
      title: 'HR Management Suite',
      description: 'Complete human resources management with AI-powered recruitment and analytics.',
      features: ['Recruitment automation', 'Employee analytics', 'Performance tracking', 'Compliance management'],
      price: '$79/month',
      users: 'Up to 100 users'
    }
  ];

>>>>>>> cursor/analyze-improve-and-deploy-application-3150
  const benefits = [
    'Quick setup and deployment (under 5 minutes)',
    'Scalable pricing plans with no hidden fees',
    '24/7 customer support and technical assistance',
    'Regular feature updates and improvements',
    'Enterprise-grade security and compliance',
    'Easy integration with existing systems',
    'White-label solutions available',
    'Free trial and money-back guarantee',
    'Comprehensive documentation and training',
    'Dedicated account management'
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: '50K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-400" />, value: '99.9%', label: 'Uptime SLA' },
    { icon: <Shield className="w-8 h-8 text-purple-400" />, value: '100%', label: 'Secure & Compliant' },
    { icon: <Zap className="w-8 h-8 text-orange-400" />, value: '2min', label: 'Setup Time' },
    { icon: <Award className="w-8 h-8 text-yellow-400" />, value: '4.9/5', label: 'Customer Rating' },
    { icon: <Rocket className="w-8 h-8 text-pink-400" />, value: '10x', label: 'Faster Deployment' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS solutions designed to solve specific business problems with AI-powered tools and rapid deployment." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, SaaS solutions, productivity tools" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="futuristic-bg"></div>
        <div className="grid-overlay"></div>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="neon-text">Micro SaaS</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use business tools that solve specific problems. Quick setup, affordable pricing, powerful features.
              <br />
              <span className="text-cyan-400 font-semibold">Save up to 67% compared to market rates!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="neon-button bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="inline-block mr-2 w-5 h-5" />
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center glass-card p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'glass-card text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                {selectedCategory === 'All' ? 'All Products' : `${selectedCategory} Products`}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${product.popular ? 'ring-2 ring-blue-500' : ''}`}>
                    {product.popular && (
                      <div className="flex items-center justify-center mb-4">
                        <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 5).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 5 && (
                        <li className="text-gray-500 text-sm">
                          +{product.features.length - 5} more features
                        </li>
                      )}
                    </ul>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through ml-2">{product.originalPrice}</span>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Market: {product.marketPrice}</div>
                          {product.savings && (
                            <div className="text-sm text-green-600 font-medium">{product.savings}</div>
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mb-4">{product.users}</div>
                      <div className="flex gap-2">
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        >
                          Try Now
                        </a>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
=======
        <title>Micro SaaS Solutions | Zion Tech Group - 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {microSaasTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tool.title}</h3>
                  <p className="text-gray-300 mb-6">{tool.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/10 pt-4 mb-4">
                    <div className="text-2xl font-bold text-white mb-1">{tool.price}</div>
                    <div className="text-sm text-gray-400">{tool.users}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium bg-cyan-500/10 hover:bg-cyan-500/20 py-2 px-4 rounded-lg"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View All Plans
                </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center glass-card p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
=======
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get the benefits of enterprise-grade solutions without the complexity or cost.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
                  </div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center glass-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our ready-made solutions or let us build a custom micro SaaS tool for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Browse Solutions
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Custom Development
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
=======
      </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
    </>
  );
};

export default MicroSaasPage;