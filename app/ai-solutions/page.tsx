'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ChartBarIcon,
  GlobeAltIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  BrainIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      id: 1,
      title: 'Machine Learning Platform',
      description: 'End-to-end machine learning platform with automated model training, deployment, and monitoring capabilities.',
      price: '$4,999/month',
      features: [
        'Automated model training and selection',
        'Real-time model deployment',
        'A/B testing for models',
        'Model performance monitoring',
        'Data preprocessing automation',
        'Feature engineering tools',
        'Model versioning and management',
        'Integration with cloud platforms',
        'Custom algorithm development',
        '24/7 technical support'
      ],
      category: 'Machine Learning',
      icon: BrainIcon,
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
      trialDays: 14,
      setupFee: '$2,999',
      useCases: ['Predictive Analytics', 'Recommendation Systems', 'Fraud Detection', 'Demand Forecasting']
    },
    {
      id: 2,
      title: 'Natural Language Processing Suite',
      description: 'Advanced NLP platform with sentiment analysis, language translation, text summarization, and chatbot capabilities.',
      price: '$3,499/month',
      features: [
        'Sentiment analysis and emotion detection',
        'Multi-language translation (100+ languages)',
        'Text summarization and extraction',
        'Named entity recognition',
        'Intent classification',
        'Conversational AI development',
        'Language model fine-tuning',
        'API integration and SDKs',
        'Custom model training',
        'Dedicated AI specialist'
      ],
      category: 'NLP',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-cyan-500 to-blue-500',
      popular: true,
      trialDays: 21,
      setupFee: '$1,999',
      useCases: ['Customer Support Automation', 'Content Moderation', 'Language Translation', 'Document Analysis']
    },
    {
      id: 3,
      title: 'Computer Vision Solutions',
      description: 'Comprehensive computer vision platform with image recognition, object detection, and video analytics capabilities.',
      price: '$3,999/month',
      features: [
        'Image classification and recognition',
        'Object detection and tracking',
        'Facial recognition and analysis',
        'Video analytics and processing',
        'OCR and document scanning',
        'Medical image analysis',
        'Quality control automation',
        'Real-time video processing',
        'Custom model development',
        'Edge deployment support'
      ],
      category: 'Computer Vision',
      icon: EyeIcon,
      gradient: 'from-green-500 to-emerald-500',
      popular: false,
      trialDays: 14,
      setupFee: '$2,499',
      useCases: ['Quality Control', 'Security Monitoring', 'Medical Imaging', 'Autonomous Vehicles']
    },
    {
      id: 4,
      title: 'AI-Powered Analytics Platform',
      description: 'Intelligent analytics platform with predictive insights, anomaly detection, and automated reporting capabilities.',
      price: '$2,999/month',
      features: [
        'Predictive analytics and forecasting',
        'Anomaly detection and alerting',
        'Automated report generation',
        'Real-time data processing',
        'Interactive dashboards',
        'Custom visualization tools',
        'Data integration (100+ sources)',
        'Advanced statistical modeling',
        'Business intelligence automation',
        'Executive summary generation'
      ],
      category: 'Analytics',
      icon: ChartBarIcon,
      gradient: 'from-yellow-500 to-orange-500',
      popular: true,
      trialDays: 7,
      setupFee: '$1,499',
      useCases: ['Business Intelligence', 'Risk Management', 'Performance Optimization', 'Market Analysis']
    },
    {
      id: 5,
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with code generation, debugging, optimization, and documentation capabilities.',
      price: '$1,999/month',
      features: [
        'Intelligent code generation',
        'Automated debugging and testing',
        'Code optimization suggestions',
        'Documentation generation',
        'Multi-language support (50+ languages)',
        'Code review automation',
        'Refactoring assistance',
        'Security vulnerability detection',
        'Performance optimization',
        'Team collaboration tools'
      ],
      category: 'Development',
      icon: CodeBracketIcon,
      gradient: 'from-pink-500 to-rose-500',
      popular: false,
      trialDays: 30,
      setupFee: '$999',
      useCases: ['Software Development', 'Code Review', 'Technical Documentation', 'Legacy Code Modernization']
    },
    {
      id: 6,
      title: 'AI Automation Suite',
      description: 'Comprehensive automation platform with intelligent process automation, workflow optimization, and decision-making capabilities.',
      price: '$4,499/month',
      features: [
        'Intelligent process automation',
        'Workflow optimization',
        'Decision-making automation',
        'Document processing automation',
        'Email and communication automation',
        'Data entry automation',
        'Customer service automation',
        'Financial process automation',
        'Compliance monitoring',
        'Custom automation development'
      ],
      category: 'Automation',
      icon: CogIcon,
      gradient: 'from-indigo-500 to-purple-500',
      popular: true,
      trialDays: 14,
      setupFee: '$2,999',
      useCases: ['Process Optimization', 'Customer Service', 'Financial Operations', 'Compliance Management']
    }
  ];

  const categories = [
    'All',
    'Machine Learning',
    'NLP',
    'Computer Vision',
    'Analytics',
    'Development',
    'Automation'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'AI Models Deployed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our cutting-edge AI solutions. From machine learning to computer vision, we provide comprehensive AI services that drive innovation and growth." />
        <meta name="keywords" content="AI solutions, machine learning, natural language processing, computer vision, artificial intelligence, AI consulting" />
        <meta property="og:title" content="AI Solutions - Zion Tech Group" />
        <meta property="og:description" content="Cutting-edge AI solutions for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <CpuChipIcon className="w-20 h-20 mx-auto text-purple-400 mb-4 animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text neon-text">
                AI Solutions
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <BoltIcon className="w-8 h-8 text-yellow-400 animate-bounce" />
                <span className="text-2xl font-semibold text-cyan-400">Intelligence</span>
                <FireIcon className="w-8 h-8 text-red-400 animate-pulse" />
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our cutting-edge AI solutions. From machine learning to computer vision, 
              we provide comprehensive AI services that drive innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/demo"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View AI Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-green-400">{service.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Setup fee: {service.setupFee} • {service.trialDays}-day free trial
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 5 && (
                        <li className="text-sm text-purple-400">
                          +{service.features.length - 5} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Link 
                      to="/contact" 
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center transform hover:scale-105"
                    >
                      Start Free Trial
                    </Link>
                    <Link 
                      to={`/demo?service=${service.id}`} 
                      className="border border-slate-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 hover:text-white transition-all duration-300 text-center"
                    >
                      View Demo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our AI Solutions */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Our AI solutions are designed with enterprise-grade security, scalability, and performance in mind. 
                We combine cutting-edge technology with deep industry expertise to deliver results that matter.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                  <p className="text-gray-300">Bank-level security with end-to-end encryption and compliance with industry standards.</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <RocketLaunchIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Scalable Architecture</h3>
                  <p className="text-gray-300">Cloud-native solutions that scale with your business needs and growth.</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <UserGroupIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
                  <p className="text-gray-300">Dedicated AI specialists and 24/7 support to ensure your success.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can help you achieve your business goals. 
              Our team of experts is ready to guide you through your AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Start Your AI Journey
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Ready to Get Started?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <PhoneIcon className="w-6 h-6 text-purple-400" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <GlobeAltIcon className="w-6 h-6 text-purple-400" />
                  <span>ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;