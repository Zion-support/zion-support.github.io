import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Cpu as CpuIcon, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Sparkles, Atom, Cpu as CpuIcon2 } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 1,
      name: 'AI-Powered Business Intelligence',
      description: 'Advanced AI analytics platform that transforms raw data into actionable business insights',
      price: '$2,499/month',
      features: [
        'Real-time Data Processing',
        'Predictive Analytics',
        'Natural Language Queries',
        'Automated Report Generation',
        'Custom Dashboard Creation',
        'Multi-Data Source Integration',
        'Advanced Machine Learning Models',
        '24/7 Monitoring & Alerts'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'Analytics',
      popular: true,
      rating: 4.9,
      users: '1,200+',
      color: 'from-blue-500 to-purple-600',
      capabilities: [
        'Process 10TB+ data daily',
        '99.9% accuracy in predictions',
        'Real-time insights delivery',
        'Custom ML model training'
      ]
    },
    {
      id: 2,
      name: 'AI Content Generation Suite',
      description: 'Comprehensive AI-powered content creation platform for all marketing needs',
      price: '$899/month',
      features: [
        'Blog Post Generation',
        'Social Media Content',
        'Email Marketing Copy',
        'Video Script Writing',
        'SEO Optimization',
        'Multi-Language Support',
        'Brand Voice Training',
        'Content Calendar Management'
      ],
      icon: <FileText className="w-8 h-8" />,
      category: 'Content Creation',
      popular: true,
      rating: 4.8,
      users: '3,500+',
      color: 'from-green-500 to-teal-600',
      capabilities: [
        'Generate 1000+ articles daily',
        '40+ languages supported',
        'SEO score optimization',
        'Brand consistency maintenance'
      ]
    },
    {
      id: 3,
      name: 'AI Customer Service Automation',
      description: 'Intelligent customer service platform with advanced NLP and sentiment analysis',
      price: '$1,299/month',
      features: [
        '24/7 AI Chatbot',
        'Sentiment Analysis',
        'Multi-Language Support',
        'Human Handoff',
        'Knowledge Base Integration',
        'Ticket Routing',
        'Performance Analytics',
        'Custom Training'
      ],
      icon: <Headphones className="w-8 h-8" />,
      category: 'Customer Service',
      popular: false,
      rating: 4.7,
      users: '2,100+',
      color: 'from-orange-500 to-red-600',
      capabilities: [
        '95% query resolution rate',
        '50+ language support',
        'Real-time sentiment tracking',
        'Seamless human escalation'
      ]
    },
    {
      id: 4,
      name: 'AI-Powered Marketing Automation',
      description: 'Complete marketing automation platform with AI-driven campaign optimization',
      price: '$1,599/month',
      features: [
        'Campaign Optimization',
        'Audience Segmentation',
        'Predictive Lead Scoring',
        'Email Personalization',
        'Ad Performance Analysis',
        'ROI Optimization',
        'A/B Testing Automation',
        'Cross-Platform Integration'
      ],
      icon: <Target className="w-8 h-8" />,
      category: 'Marketing',
      popular: true,
      rating: 4.8,
      users: '2,800+',
      color: 'from-purple-500 to-pink-600',
      capabilities: [
        '300% increase in conversion rates',
        'Automated campaign optimization',
        'Real-time performance tracking',
        'Predictive customer behavior'
      ]
    },
    {
      id: 5,
      name: 'AI Document Processing',
      description: 'Intelligent document processing and data extraction with OCR and NLP',
      price: '$799/month',
      features: [
        'OCR Text Recognition',
        'Document Classification',
        'Data Extraction',
        'Form Processing',
        'Contract Analysis',
        'Compliance Checking',
        'Multi-Format Support',
        'Batch Processing'
      ],
      icon: <FileText className="w-8 h-8" />,
      category: 'Document Processing',
      popular: false,
      rating: 4.6,
      users: '1,800+',
      color: 'from-indigo-500 to-blue-600',
      capabilities: [
        '99.5% accuracy in text extraction',
        'Process 10,000+ documents/hour',
        '50+ file formats supported',
        'Automated compliance checking'
      ]
    },
    {
      id: 6,
      name: 'AI Image & Video Analysis',
      description: 'Advanced computer vision platform for image and video content analysis',
      price: '$1,199/month',
      features: [
        'Object Detection',
        'Facial Recognition',
        'Content Moderation',
        'Video Analytics',
        'Image Classification',
        'Quality Assessment',
        'Real-time Processing',
        'API Integration'
      ],
      icon: <Image className="w-8 h-8" />,
      category: 'Computer Vision',
      popular: true,
      rating: 4.9,
      users: '1,500+',
      color: 'from-emerald-500 to-green-600',
      capabilities: [
        '99.8% accuracy in object detection',
        'Real-time video processing',
        'Advanced facial recognition',
        'Content safety monitoring'
      ]
    },
    {
      id: 7,
      name: 'AI Financial Analysis',
      description: 'Comprehensive AI platform for financial data analysis and risk assessment',
      price: '$2,999/month',
      features: [
        'Risk Assessment',
        'Fraud Detection',
        'Market Analysis',
        'Credit Scoring',
        'Portfolio Optimization',
        'Regulatory Compliance',
        'Real-time Monitoring',
        'Predictive Modeling'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      category: 'Finance',
      popular: true,
      rating: 4.9,
      users: '800+',
      color: 'from-yellow-500 to-orange-600',
      capabilities: [
        '99.9% fraud detection accuracy',
        'Real-time risk assessment',
        'Regulatory compliance automation',
        'Advanced predictive modeling'
      ]
    },
    {
      id: 8,
      name: 'AI Healthcare Diagnostics',
      description: 'Advanced AI platform for medical image analysis and diagnostic assistance',
      price: '$3,999/month',
      features: [
        'Medical Image Analysis',
        'Diagnostic Assistance',
        'Drug Discovery Support',
        'Patient Risk Assessment',
        'Treatment Recommendations',
        'Clinical Trial Matching',
        'HIPAA Compliance',
        'Integration with EMR'
      ],
      icon: <Heart className="w-8 h-8" />,
      category: 'Healthcare',
      popular: false,
      rating: 4.8,
      users: '400+',
      color: 'from-red-500 to-pink-600',
      capabilities: [
        '95% diagnostic accuracy',
        'HIPAA compliant processing',
        'Real-time medical imaging',
        'Drug interaction analysis'
      ]
    },
    {
      id: 9,
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with predictive analytics and optimization',
      price: '$1,899/month',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Planning',
        'Supplier Risk Assessment',
        'Cost Optimization',
        'Quality Control',
        'Real-time Tracking',
        'Performance Analytics'
      ],
      icon: <Layers className="w-8 h-8" />,
      category: 'Supply Chain',
      popular: true,
      rating: 4.7,
      users: '1,200+',
      color: 'from-cyan-500 to-blue-600',
      capabilities: [
        '30% reduction in costs',
        '99.5% demand forecast accuracy',
        'Real-time supply tracking',
        'Automated optimization'
      ]
    },
    {
      id: 10,
      name: 'AI Voice & Speech Processing',
      description: 'Advanced speech recognition and voice processing platform with NLP',
      price: '$1,399/month',
      features: [
        'Speech Recognition',
        'Voice Synthesis',
        'Language Translation',
        'Sentiment Analysis',
        'Voice Cloning',
        'Real-time Processing',
        'Multi-Language Support',
        'API Integration'
      ],
      icon: <Headphones className="w-8 h-8" />,
      category: 'Voice Processing',
      popular: false,
      rating: 4.8,
      users: '1,600+',
      color: 'from-violet-500 to-purple-600',
      capabilities: [
        '99.2% speech recognition accuracy',
        '50+ languages supported',
        'Real-time voice processing',
        'Natural voice synthesis'
      ]
    },
    {
      id: 11,
      name: 'AI Cybersecurity Platform',
      description: 'Advanced AI-powered cybersecurity solution with threat detection and prevention',
      price: '$2,199/month',
      features: [
        'Threat Detection',
        'Anomaly Detection',
        'Behavioral Analysis',
        'Incident Response',
        'Vulnerability Assessment',
        'Compliance Monitoring',
        'Real-time Alerts',
        'Forensic Analysis'
      ],
      icon: <Shield className="w-8 h-8" />,
      category: 'Cybersecurity',
      popular: true,
      rating: 4.9,
      users: '900+',
      color: 'from-red-500 to-orange-600',
      capabilities: [
        '99.9% threat detection rate',
        'Real-time security monitoring',
        'Automated incident response',
        'Advanced behavioral analysis'
      ]
    },
    {
      id: 12,
      name: 'AI Research & Development',
      description: 'Comprehensive AI R&D platform for custom model development and training',
      price: '$4,999/month',
      features: [
        'Custom Model Development',
        'Data Preprocessing',
        'Model Training',
        'Hyperparameter Optimization',
        'Model Deployment',
        'Performance Monitoring',
        'A/B Testing',
        'Research Collaboration'
      ],
      icon: <Brain className="w-8 h-8" />,
      category: 'R&D',
      popular: false,
      rating: 4.9,
      users: '200+',
      color: 'from-gray-500 to-slate-600',
      capabilities: [
        'Custom AI model development',
        'Advanced research tools',
        'Collaborative development',
        'Enterprise-grade deployment'
      ]
    }
  ];

  const categories = [
    'All Services',
    'Analytics',
    'Content Creation',
    'Customer Service',
    'Marketing',
    'Document Processing',
    'Computer Vision',
    'Finance',
    'Healthcare',
    'Supply Chain',
    'Voice Processing',
    'Cybersecurity',
    'R&D'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Advanced Artificial Intelligence Solutions for Enterprise
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your business with our comprehensive suite of AI services. From machine learning and natural language processing 
            to computer vision and predictive analytics, we deliver cutting-edge AI solutions that drive real business value.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-bold text-white mb-3 text-lg">Advanced AI</h3>
              <p className="text-sm text-gray-300 leading-relaxed">State-of-the-art machine learning models and neural networks for complex problem solving</p>
            </div>
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-3 text-lg">Real-time Processing</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Lightning-fast AI processing with sub-second response times and 99.9% uptime</p>
            </div>
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-3 text-lg">Enterprise Security</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Bank-level security with SOC 2 compliance and end-to-end encryption</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 bg-slate-800 text-gray-300 rounded-lg hover:bg-cyan-600 hover:text-white transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiServices.map((service) => (
            <div key={service.id} className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                  {service.icon}
                </div>
                <div className="flex items-center space-x-2">
                  {service.popular && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
              </div>

              {/* Service Info */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Capabilities */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Capabilities:</h4>
                <ul className="space-y-1">
                  {service.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-xs text-gray-400">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Pricing & Users */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                  <div className="text-xs text-gray-400">per month</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-white">{service.users}</div>
                  <div className="text-xs text-gray-400">enterprise clients</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm">
                  Start Free Trial
                </button>
                <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 30-day free trial for all AI services</p>
            <p>✓ Custom AI model development</p>
            <p>✓ 24/7 AI expert support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
