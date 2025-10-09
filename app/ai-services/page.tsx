'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Search as SearchIcon, FileText as FileTextIcon, Grid, Megaphone, Package } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const aiServices = [
    // Core AI Services
    {
      id: 'ai-consulting',
      name: 'AI Strategy Consulting',
      category: 'consulting',
      description: 'Comprehensive AI strategy development, technology assessment, and implementation roadmap for enterprise transformation.',
      features: [
        'AI readiness assessment',
        'Technology stack evaluation',
        'ROI analysis and projections',
        'Implementation roadmap',
        'Change management strategy',
        'Ongoing support and guidance'
      ],
      pricing: { hourly: 300, project: 50000, retainer: 10000 },
      popular: true,
      icon: '🧠',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      stats: { projects: '200+', rating: 4.9, clients: '150+' },
      demo: 'https://demo.ziontechgroup.com/ai-consulting',
      docs: 'https://docs.ziontechgroup.com/ai-consulting',
      benefits: [
        'Reduce implementation time by 60%',
        'Increase AI adoption success rate by 85%',
        'Average ROI of 300% within 12 months',
        'Comprehensive risk mitigation'
      ]
    },
    {
      id: 'machine-learning-platform',
      name: 'Machine Learning Platform',
      category: 'platform',
      description: 'End-to-end ML platform with automated model training, deployment, and monitoring for enterprise-scale AI applications.',
      features: [
        'Automated model training',
        'MLOps pipeline automation',
        'Model versioning and management',
        'Real-time model monitoring',
        'A/B testing framework',
        'Scalable deployment infrastructure'
      ],
      pricing: { monthly: 2500, yearly: 25000, setup: 15000 },
      popular: true,
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      stats: { models: '1000+', accuracy: '95%', uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ml-platform',
      docs: 'https://docs.ziontechgroup.com/ml-platform',
      benefits: [
        '50% faster model development',
        '99.9% model reliability',
        'Automated scaling and optimization',
        'Enterprise-grade security'
      ]
    },
    {
      id: 'natural-language-processing',
      name: 'Natural Language Processing',
      category: 'nlp',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
      features: [
        'Text classification and analysis',
        'Sentiment analysis',
        'Language translation',
        'Named entity recognition',
        'Text summarization',
        'Conversational AI development'
      ],
      pricing: { monthly: 1200, yearly: 12000, setup: 8000 },
      popular: true,
      icon: '💬',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400',
      stats: { languages: '50+', accuracy: '98%', processing: '1M+ docs/day' },
      demo: 'https://demo.ziontechgroup.com/nlp',
      docs: 'https://docs.ziontechgroup.com/nlp',
      benefits: [
        'Multi-language support',
        'Real-time processing',
        'High accuracy rates',
        'Scalable architecture'
      ]
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision Solutions',
      category: 'vision',
      description: 'Advanced computer vision capabilities for image recognition, object detection, facial recognition, and visual analytics.',
      features: [
        'Image classification',
        'Object detection and tracking',
        'Facial recognition',
        'OCR and document analysis',
        'Video analytics',
        'Custom model training'
      ],
      pricing: { monthly: 1800, yearly: 18000, setup: 12000 },
      popular: true,
      icon: '👁️',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      textColor: 'text-pink-400',
      stats: { accuracy: '97%', processing: '10K+ images/min', models: '50+' },
      demo: 'https://demo.ziontechgroup.com/computer-vision',
      docs: 'https://docs.ziontechgroup.com/computer-vision',
      benefits: [
        'High accuracy recognition',
        'Real-time processing',
        'Custom model development',
        'Integration with existing systems'
      ]
    },
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics',
      category: 'analytics',
      description: 'Advanced predictive modeling and forecasting solutions for business intelligence and decision making.',
      features: [
        'Time series forecasting',
        'Predictive modeling',
        'Risk assessment',
        'Demand forecasting',
        'Customer behavior prediction',
        'Anomaly detection'
      ],
      pricing: { monthly: 2000, yearly: 20000, setup: 15000 },
      popular: true,
      icon: '📊',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-400',
      stats: { accuracy: '92%', predictions: '1M+', models: '200+' },
      demo: 'https://demo.ziontechgroup.com/predictive-analytics',
      docs: 'https://docs.ziontechgroup.com/predictive-analytics',
      benefits: [
        'Accurate forecasting',
        'Real-time predictions',
        'Custom model development',
        'Business intelligence integration'
      ]
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      category: 'automation',
      description: 'Intelligent automation solutions for business processes, workflow optimization, and decision-making automation.',
      features: [
        'Process mining and analysis',
        'Workflow automation',
        'Decision automation',
        'Exception handling',
        'Process optimization',
        'Integration with existing systems'
      ],
      pricing: { monthly: 1500, yearly: 15000, setup: 10000 },
      popular: true,
      icon: '⚙️',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      textColor: 'text-cyan-400',
      stats: { processes: '500+', efficiency: '85%', savings: '$2M+' },
      demo: 'https://demo.ziontechgroup.com/ai-automation',
      docs: 'https://docs.ziontechgroup.com/ai-automation',
      benefits: [
        '85% process efficiency improvement',
        'Automated decision making',
        'Exception handling',
        'ROI within 6 months'
      ]
    },
    {
      id: 'ai-chatbots',
      name: 'AI Chatbot Development',
      category: 'chatbots',
      description: 'Intelligent chatbot solutions with natural language understanding, multi-channel deployment, and human handoff.',
      features: [
        'Natural language understanding',
        'Multi-channel deployment',
        'Human handoff capabilities',
        'Sentiment analysis',
        'Integration with CRM systems',
        'Analytics and reporting'
      ],
      pricing: { monthly: 800, yearly: 8000, setup: 5000 },
      popular: false,
      icon: '💬',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      textColor: 'text-indigo-400',
      stats: { languages: '30+', channels: '10+', accuracy: '95%' },
      demo: 'https://demo.ziontechgroup.com/ai-chatbots',
      docs: 'https://docs.ziontechgroup.com/ai-chatbots',
      benefits: [
        '24/7 customer support',
        'Multi-language support',
        'Seamless human handoff',
        'Reduced support costs by 60%'
      ]
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics',
      category: 'analytics',
      description: 'Advanced data analytics with AI-powered insights, automated reporting, and predictive modeling.',
      features: [
        'Automated data processing',
        'AI-powered insights',
        'Predictive modeling',
        'Real-time dashboards',
        'Custom reporting',
        'Data visualization'
      ],
      pricing: { monthly: 1600, yearly: 16000, setup: 12000 },
      popular: false,
      icon: '📈',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      textColor: 'text-teal-400',
      stats: { datasets: '1000+', insights: '10K+', accuracy: '94%' },
      demo: 'https://demo.ziontechgroup.com/ai-data-analytics',
      docs: 'https://docs.ziontechgroup.com/ai-data-analytics',
      benefits: [
        'Automated insights generation',
        'Real-time analytics',
        'Predictive capabilities',
        'Custom visualization'
      ]
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Solutions',
      category: 'security',
      description: 'AI-powered cybersecurity solutions for threat detection, anomaly analysis, and automated response.',
      features: [
        'Threat detection and analysis',
        'Anomaly detection',
        'Automated response',
        'Behavioral analysis',
        'Incident management',
        'Compliance monitoring'
      ],
      pricing: { monthly: 3000, yearly: 30000, setup: 20000 },
      popular: false,
      icon: '🛡️',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-400',
      stats: { threats: '1M+', accuracy: '99.5%', response: '<1min' },
      demo: 'https://demo.ziontechgroup.com/ai-cybersecurity',
      docs: 'https://docs.ziontechgroup.com/ai-cybersecurity',
      benefits: [
        'Real-time threat detection',
        'Automated response',
        '99.5% accuracy rate',
        'Compliance assurance'
      ]
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      category: 'healthcare',
      description: 'Specialized AI solutions for healthcare including medical imaging, drug discovery, and patient care optimization.',
      features: [
        'Medical image analysis',
        'Drug discovery assistance',
        'Patient care optimization',
        'Diagnostic support',
        'Treatment recommendations',
        'Clinical trial optimization'
      ],
      pricing: { monthly: 4000, yearly: 40000, setup: 30000 },
      popular: false,
      icon: '🏥',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400',
      stats: { accuracy: '96%', patients: '100K+', compliance: '100%' },
      demo: 'https://demo.ziontechgroup.com/ai-healthcare',
      docs: 'https://docs.ziontechgroup.com/ai-healthcare',
      benefits: [
        'Improved diagnostic accuracy',
        'Faster drug discovery',
        'Enhanced patient care',
        'HIPAA compliance'
      ]
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech Solutions',
      category: 'fintech',
      description: 'AI-powered financial services including fraud detection, algorithmic trading, and risk assessment.',
      features: [
        'Fraud detection and prevention',
        'Algorithmic trading',
        'Risk assessment',
        'Credit scoring',
        'Regulatory compliance',
        'Financial forecasting'
      ],
      pricing: { monthly: 2500, yearly: 25000, setup: 20000 },
      popular: false,
      icon: '💰',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      textColor: 'text-yellow-400',
      stats: { accuracy: '99.8%', transactions: '10M+', savings: '$50M+' },
      demo: 'https://demo.ziontechgroup.com/ai-fintech',
      docs: 'https://docs.ziontechgroup.com/ai-fintech',
      benefits: [
        'Advanced fraud detection',
        'Automated trading',
        'Risk mitigation',
        'Regulatory compliance'
      ]
    },
    {
      id: 'ai-robotics',
      name: 'AI Robotics Platform',
      category: 'robotics',
      description: 'Intelligent robotics solutions for industrial automation, autonomous systems, and human-robot collaboration.',
      features: [
        'Autonomous navigation',
        'Object recognition',
        'Human-robot collaboration',
        'Predictive maintenance',
        'Quality control',
        'Safety monitoring'
      ],
      pricing: { monthly: 5000, yearly: 50000, setup: 40000 },
      popular: false,
      icon: '🤖',
      color: 'from-slate-500 to-gray-500',
      bgColor: 'bg-slate-500/10',
      borderColor: 'border-slate-500/30',
      textColor: 'text-slate-400',
      stats: { robots: '100+', efficiency: '90%', safety: '100%' },
      demo: 'https://demo.ziontechgroup.com/ai-robotics',
      docs: 'https://docs.ziontechgroup.com/ai-robotics',
      benefits: [
        'Increased automation efficiency',
        'Enhanced safety protocols',
        'Predictive maintenance',
        'Human-robot collaboration'
      ]
    },
    {
      id: 'ai-edge-computing',
      name: 'AI Edge Computing',
      category: 'edge',
      description: 'AI solutions optimized for edge computing environments with low latency and high performance.',
      features: [
        'Edge-optimized models',
        'Low latency processing',
        'Offline capabilities',
        'Real-time inference',
        'Resource optimization',
        'Distributed processing'
      ],
      pricing: { monthly: 1800, yearly: 18000, setup: 15000 },
      popular: false,
      icon: '⚡',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      textColor: 'text-violet-400',
      stats: { latency: '<10ms', devices: '10K+', efficiency: '95%' },
      demo: 'https://demo.ziontechgroup.com/ai-edge-computing',
      docs: 'https://docs.ziontechgroup.com/ai-edge-computing',
      benefits: [
        'Ultra-low latency',
        'Offline processing',
        'Scalable deployment',
        'Resource optimization'
      ]
    },
    {
      id: 'ai-research-development',
      name: 'AI Research & Development',
      category: 'research',
      description: 'Custom AI research and development services for cutting-edge solutions and innovation.',
      features: [
        'Custom algorithm development',
        'Research and experimentation',
        'Proof of concept development',
        'Technology evaluation',
        'Innovation consulting',
        'Patent support'
      ],
      pricing: { hourly: 500, project: 100000, retainer: 25000 },
      popular: false,
      icon: '🔬',
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      textColor: 'text-amber-400',
      stats: { patents: '50+', innovations: '100+', clients: '50+' },
      demo: 'https://demo.ziontechgroup.com/ai-research',
      docs: 'https://docs.ziontechgroup.com/ai-research',
      benefits: [
        'Cutting-edge innovation',
        'Custom solutions',
        'Patent support',
        'Competitive advantage'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, count: aiServices.length },
    { id: 'consulting', name: 'AI Consulting', icon: Brain, count: aiServices.filter(s => s.category === 'consulting').length },
    { id: 'platform', name: 'AI Platforms', icon: Cloud, count: aiServices.filter(s => s.category === 'platform').length },
    { id: 'nlp', name: 'Natural Language Processing', icon: MessageSquare, count: aiServices.filter(s => s.category === 'nlp').length },
    { id: 'vision', name: 'Computer Vision', icon: Eye, count: aiServices.filter(s => s.category === 'vision').length },
    { id: 'analytics', name: 'Analytics', icon: BarChart, count: aiServices.filter(s => s.category === 'analytics').length },
    { id: 'automation', name: 'Automation', icon: Zap, count: aiServices.filter(s => s.category === 'automation').length },
    { id: 'chatbots', name: 'Chatbots', icon: Bot, count: aiServices.filter(s => s.category === 'chatbots').length },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: aiServices.filter(s => s.category === 'security').length },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, count: aiServices.filter(s => s.category === 'healthcare').length },
    { id: 'fintech', name: 'Fintech', icon: DollarSign, count: aiServices.filter(s => s.category === 'fintech').length },
    { id: 'robotics', name: 'Robotics', icon: Settings, count: aiServices.filter(s => s.category === 'robotics').length },
    { id: 'edge', name: 'Edge Computing', icon: Cpu, count: aiServices.filter(s => s.category === 'edge').length },
    { id: 'research', name: 'Research & Development', icon: BookOpen, count: aiServices.filter(s => s.category === 'research').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = aiServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered = filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.pricing.monthly - b.pricing.monthly);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.pricing.monthly - a.pricing.monthly);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.stats.rating - a.stats.rating);
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const totalValue = aiServices.reduce((total, service) => {
    return total + service.pricing.yearly;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics. Transform your business with cutting-edge AI solutions." />
        <meta name="keywords" content="ai services, machine learning, nlp, computer vision, predictive analytics, ai consulting, artificial intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Transform Your Business with Advanced AI Solutions
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive AI services including machine learning, natural language processing, computer vision, 
            and predictive analytics. Our expert team delivers enterprise-grade AI solutions that drive real business value.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🧠</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">15+ AI Services</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Comprehensive suite of AI solutions</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">💰</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">$500K+ Value</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Total value of AI solutions portfolio</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">99.9% Uptime</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Enterprise-grade reliability</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="cyber-card hologram-card p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${service.borderColor} ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center text-2xl`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${service.pricing.monthly.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.projects || service.stats.models || service.stats.languages || service.stats.accuracy}</div>
                    <div className="text-xs text-gray-400">
                      {service.stats.projects ? 'Projects' : 
                       service.stats.models ? 'Models' : 
                       service.stats.languages ? 'Languages' : 
                       service.stats.accuracy ? 'Accuracy' : 'Clients'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.rating}</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.uptime || service.stats.clients || service.stats.efficiency}</div>
                    <div className="text-xs text-gray-400">
                      {service.stats.uptime ? 'Uptime' : 
                       service.stats.clients ? 'Clients' : 
                       service.stats.efficiency ? 'Efficiency' : 'Uptime'}
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                {service.benefits && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-sm text-cyan-400">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pricing */}
                <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Monthly</span>
                    <span className="text-lg font-bold text-white">${service.pricing.monthly.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Yearly</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-white">${service.pricing.yearly.toLocaleString()}</span>
                      <span className="text-xs text-green-400 ml-2">
                        Save ${(service.pricing.monthly * 12) - service.pricing.yearly}
                      </span>
                    </div>
                  </div>
                  {service.pricing.setup > 0 && (
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-400">Setup</span>
                      <span className="text-sm text-white">${service.pricing.setup.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <a
                    href={service.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                  >
                    <Play className="w-4 h-4 inline mr-2" />
                    Demo
                  </a>
                  <a
                    href={service.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-all text-center"
                  >
                    <FileText className="w-4 h-4 inline mr-2" />
                    Docs
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business with AI?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our AI services today and experience the power of artificial intelligence in your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AIServicesPage;