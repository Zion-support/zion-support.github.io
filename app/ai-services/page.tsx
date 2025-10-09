'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, CheckCircle, Zap, Brain, Shield, Clock, Users, TrendingUp, BarChart, Globe, Smartphone, Mail, FileText, Image, Video, Music, Code, Database, Cloud, Lock, Target, PieChart, Settings, Rocket, Award, DollarSign, Calendar, MessageSquare, Search, Filter, Download, Upload, Share, Eye, Edit, Trash, Plus, Minus, Refresh, Play, Pause, Stop, Volume2, VolumeX, Wifi, WifiOff, Battery, BatteryLow, Signal, SignalHigh, SignalLow, Wifi2, WifiOff2, Battery2, BatteryLow2, Signal2, SignalHigh2, SignalLow2 } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const aiServices = [
    // AI Development Services
    {
      id: 'ai-consulting',
      name: 'AI Strategy Consulting',
      description: 'Comprehensive AI strategy development, technology assessment, and implementation roadmap for enterprise organizations.',
      category: 'consulting',
      icon: <Brain className="w-8 h-8" />,
      price: 5000,
      period: 'project',
      features: [
        'AI Readiness Assessment',
        'Technology Roadmap',
        'ROI Analysis',
        'Implementation Planning',
        'Team Training',
        'Change Management',
        'Risk Assessment',
        'Compliance Review'
      ],
      benefits: [
        'Strategic AI Alignment',
        'Risk Mitigation',
        'Cost Optimization',
        'Competitive Advantage'
      ],
      popular: true,
      rating: 4.9,
      clients: '200+',
      link: 'https://ziontechgroup.com/ai-consulting'
    },
    {
      id: 'machine-learning-development',
      name: 'Machine Learning Development',
      description: 'Custom ML model development, training, and deployment for predictive analytics, recommendation systems, and automation.',
      category: 'development',
      icon: <Code className="w-8 h-8" />,
      price: 15000,
      period: 'project',
      features: [
        'Custom Model Development',
        'Data Preprocessing',
        'Model Training & Validation',
        'API Development',
        'Cloud Deployment',
        'Performance Monitoring',
        'Model Optimization',
        'Documentation'
      ],
      benefits: [
        'Custom Solutions',
        'High Accuracy Models',
        'Scalable Architecture',
        'Production Ready'
      ],
      popular: true,
      rating: 4.8,
      clients: '150+',
      link: 'https://ziontechgroup.com/machine-learning-development'
    },
    {
      id: 'natural-language-processing',
      name: 'Natural Language Processing',
      description: 'Advanced NLP solutions including text analysis, sentiment analysis, chatbots, and language translation services.',
      category: 'development',
      icon: <MessageSquare className="w-8 h-8" />,
      price: 12000,
      period: 'project',
      features: [
        'Text Analysis & Classification',
        'Sentiment Analysis',
        'Named Entity Recognition',
        'Language Translation',
        'Chatbot Development',
        'Voice Processing',
        'Document Processing',
        'API Integration'
      ],
      benefits: [
        'Multi-language Support',
        'High Accuracy Processing',
        'Real-time Analysis',
        'Scalable Solutions'
      ],
      popular: false,
      rating: 4.7,
      clients: '100+',
      link: 'https://ziontechgroup.com/natural-language-processing'
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision Solutions',
      description: 'Advanced computer vision applications including image recognition, object detection, and video analytics.',
      category: 'development',
      icon: <Eye className="w-8 h-8" />,
      price: 18000,
      period: 'project',
      features: [
        'Image Classification',
        'Object Detection',
        'Facial Recognition',
        'Video Analytics',
        'Medical Imaging',
        'Quality Control',
        'Real-time Processing',
        'Edge Deployment'
      ],
      benefits: [
        'High Precision Detection',
        'Real-time Processing',
        'Edge Computing Ready',
        'Industry Specific Solutions'
      ],
      popular: false,
      rating: 4.8,
      clients: '80+',
      link: 'https://ziontechgroup.com/computer-vision'
    },

    // AI Automation Services
    {
      id: 'process-automation',
      name: 'AI Process Automation',
      description: 'Intelligent automation of business processes using AI to reduce manual work and improve efficiency.',
      category: 'automation',
      icon: <Settings className="w-8 h-8" />,
      price: 8000,
      period: 'project',
      features: [
        'Process Analysis',
        'Workflow Design',
        'RPA Implementation',
        'AI Integration',
        'Exception Handling',
        'Monitoring & Analytics',
        'User Training',
        'Maintenance Support'
      ],
      benefits: [
        '80% Time Savings',
        'Error Reduction',
        'Cost Optimization',
        'Scalable Automation'
      ],
      popular: true,
      rating: 4.9,
      clients: '300+',
      link: 'https://ziontechgroup.com/process-automation'
    },
    {
      id: 'intelligent-document-processing',
      name: 'Intelligent Document Processing',
      description: 'AI-powered document extraction, classification, and data processing for enterprise document management.',
      category: 'automation',
      icon: <FileText className="w-8 h-8" />,
      price: 10000,
      period: 'project',
      features: [
        'Document Classification',
        'Data Extraction',
        'OCR Enhancement',
        'Form Processing',
        'Compliance Checking',
        'Workflow Integration',
        'Quality Assurance',
        'API Development'
      ],
      benefits: [
        '95% Accuracy',
        'Automated Processing',
        'Compliance Ready',
        'Cost Reduction'
      ],
      popular: false,
      rating: 4.8,
      clients: '120+',
      link: 'https://ziontechgroup.com/intelligent-document-processing'
    },
    {
      id: 'ai-chatbot-development',
      name: 'AI Chatbot Development',
      description: 'Intelligent conversational AI chatbots with natural language understanding and multi-channel deployment.',
      category: 'automation',
      icon: <MessageSquare className="w-8 h-8" />,
      price: 6000,
      period: 'project',
      features: [
        'Natural Language Understanding',
        'Multi-channel Deployment',
        'Integration APIs',
        'Analytics Dashboard',
        'Human Handoff',
        'Custom Training',
        'Voice Support',
        '24/7 Availability'
      ],
      benefits: [
        '24/7 Customer Support',
        'Instant Responses',
        'Cost Reduction',
        'Improved Satisfaction'
      ],
      popular: true,
      rating: 4.7,
      clients: '250+',
      link: 'https://ziontechgroup.com/ai-chatbot-development'
    },

    // AI Analytics Services
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics',
      description: 'Advanced predictive modeling and forecasting solutions to help businesses make data-driven decisions.',
      category: 'analytics',
      icon: <TrendingUp className="w-8 h-8" />,
      price: 20000,
      period: 'project',
      features: [
        'Predictive Modeling',
        'Forecasting Algorithms',
        'Risk Assessment',
        'Trend Analysis',
        'Real-time Predictions',
        'Dashboard Development',
        'API Integration',
        'Model Maintenance'
      ],
      benefits: [
        'Data-Driven Decisions',
        'Risk Mitigation',
        'Revenue Optimization',
        'Competitive Advantage'
      ],
      popular: false,
      rating: 4.9,
      clients: '90+',
      link: 'https://ziontechgroup.com/predictive-analytics'
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Intelligent BI solutions with automated insights, natural language queries, and predictive analytics.',
      category: 'analytics',
      icon: <BarChart className="w-8 h-8" />,
      price: 15000,
      period: 'project',
      features: [
        'Automated Insights',
        'Natural Language Queries',
        'Predictive Analytics',
        'Real-time Dashboards',
        'Data Visualization',
        'Report Automation',
        'Mobile Access',
        'Integration Hub'
      ],
      benefits: [
        'Automated Insights',
        'Self-Service Analytics',
        'Real-time Intelligence',
        'Mobile Accessibility'
      ],
      popular: true,
      rating: 4.8,
      clients: '180+',
      link: 'https://ziontechgroup.com/ai-business-intelligence'
    },
    {
      id: 'customer-analytics',
      name: 'AI Customer Analytics',
      description: 'Advanced customer behavior analysis, segmentation, and personalization using AI and machine learning.',
      category: 'analytics',
      icon: <Users className="w-8 h-8" />,
      price: 12000,
      period: 'project',
      features: [
        'Customer Segmentation',
        'Behavior Analysis',
        'Churn Prediction',
        'Personalization Engine',
        'Lifetime Value Analysis',
        'Recommendation Systems',
        'Sentiment Analysis',
        'Real-time Insights'
      ],
      benefits: [
        'Customer Retention',
        'Personalized Experiences',
        'Revenue Growth',
        'Data-Driven Marketing'
      ],
      popular: false,
      rating: 4.7,
      clients: '140+',
      link: 'https://ziontechgroup.com/customer-analytics'
    },

    // AI Security Services
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Solutions',
      description: 'Advanced AI-powered security solutions for threat detection, fraud prevention, and automated response.',
      category: 'security',
      icon: <Shield className="w-8 h-8" />,
      price: 25000,
      period: 'project',
      features: [
        'Threat Detection',
        'Fraud Prevention',
        'Anomaly Detection',
        'Automated Response',
        'Security Analytics',
        'Compliance Monitoring',
        'Incident Response',
        'Risk Assessment'
      ],
      benefits: [
        'Proactive Security',
        'Automated Protection',
        'Reduced False Positives',
        'Compliance Assurance'
      ],
      popular: true,
      rating: 4.9,
      clients: '60+',
      link: 'https://ziontechgroup.com/ai-cybersecurity'
    },
    {
      id: 'ai-compliance',
      name: 'AI Compliance & Governance',
      description: 'Comprehensive AI governance, compliance management, and ethical AI implementation services.',
      category: 'security',
      icon: <Lock className="w-8 h-8" />,
      price: 15000,
      period: 'project',
      features: [
        'AI Governance Framework',
        'Compliance Management',
        'Ethical AI Guidelines',
        'Risk Assessment',
        'Audit Preparation',
        'Policy Development',
        'Training Programs',
        'Monitoring Systems'
      ],
      benefits: [
        'Regulatory Compliance',
        'Risk Mitigation',
        'Ethical AI Practices',
        'Audit Readiness'
      ],
      popular: false,
      rating: 4.8,
      clients: '40+',
      link: 'https://ziontechgroup.com/ai-compliance'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', count: aiServices.length },
    { id: 'consulting', name: 'Consulting', count: aiServices.filter(s => s.category === 'consulting').length },
    { id: 'development', name: 'Development', count: aiServices.filter(s => s.category === 'development').length },
    { id: 'automation', name: 'Automation', count: aiServices.filter(s => s.category === 'automation').length },
    { id: 'analytics', name: 'Analytics', count: aiServices.filter(s => s.category === 'analytics').length },
    { id: 'security', name: 'Security', count: aiServices.filter(s => s.category === 'security').length }
  ];

  const filteredServices = aiServices.filter(service => 
    activeCategory === 'all' || service.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden cyber-grid-enhanced">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text neon-text">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Advanced Artificial Intelligence Solutions
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with cutting-edge AI technologies including machine learning, natural language processing, computer vision, and intelligent automation.
          </p>
          
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
                    <span className="text-sm text-gray-400">({service.clients})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-cyan-400">${service.price.toLocaleString()}</span>
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
                    Get Quote
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

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Expert AI Team</h3>
              <p className="text-gray-300">PhD-level AI researchers and engineers with 10+ years of experience in machine learning and AI development.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300">Get your AI solutions up and running in weeks, not months, with our proven development methodology.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance with SOC 2, GDPR, and industry-specific regulations.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Average 300% ROI and 80% efficiency improvements for our enterprise AI implementations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our AI experts today for a free consultation and custom solution recommendations.
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

export default AIServicesPage;