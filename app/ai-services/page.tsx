import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Cpu as CpuIcon, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Sparkles, Atom, Cpu as CpuIcon2 } from 'lucide-react';

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
      color: 'from-purple-500 to-indigo-600',
      capabilities: [
        'Custom model development',
        'Advanced research tools',
        'Collaborative workspace',
        'Publication support'
      ]
    }
  ];
      title: 'AI-Powered Accessibility Assistant',
      description: 'Intelligent accessibility support with adaptive interfaces and assistive technology.',
      icon: '♿',
      price: 'Starting at $1,800/month',
      features: ['Adaptive interfaces', 'Voice control', 'Visual assistance', 'Mobility support', 'Communication aids'],
      benefits: ['Improve accessibility', 'Enhance independence', 'Support inclusion'],
      marketPrice: '$3,000-7,000/month',
      category: 'Accessibility AI',
      technologies: ['Accessibility APIs', 'Assistive Technology', 'Custom Accessibility Models', 'Mobile Apps', 'IoT Integration']
    },
    {
      title: 'AI-Powered Environmental Monitoring',
      description: 'Intelligent environmental monitoring with pollution detection and sustainability recommendations.',
      icon: '🌱',
      price: 'Starting at $2,000/month',
      features: ['Pollution monitoring', 'Sustainability analysis', 'Environmental alerts', 'Carbon tracking', 'Green recommendations'],
      benefits: ['Monitor environmental impact', 'Improve sustainability', 'Reduce carbon footprint'],
      marketPrice: '$3,500-8,000/month',
      category: 'Environmental AI',
      technologies: ['Environmental Sensors', 'Pollution Detection', 'Custom Environmental Models', 'IoT Integration', 'Analytics']
    },
    {
      title: 'AI-Powered Wildlife Conservation',
      description: 'Intelligent wildlife monitoring and conservation with species identification and behavior analysis.',
      icon: '🦁',
      price: 'Starting at $3,500/month',
      features: ['Species identification', 'Behavior analysis', 'Population monitoring', 'Threat detection', 'Conservation planning'],
      benefits: ['Protect wildlife', 'Monitor populations', 'Prevent poaching'],
      marketPrice: '$6,000-15,000/month',
      category: 'Conservation AI',
      technologies: ['Computer Vision', 'Wildlife Detection', 'Custom Conservation Models', 'Satellite Data', 'IoT Sensors']
    },
    {
      title: 'AI-Powered Disaster Response',
      description: 'Intelligent disaster prediction and response coordination with real-time monitoring.',
      icon: '🚨',
      price: 'Starting at $5,000/month',
      features: ['Disaster prediction', 'Response coordination', 'Resource optimization', 'Evacuation planning', 'Damage assessment'],
      benefits: ['Save lives', 'Reduce damage', 'Improve response time'],
      marketPrice: '$8,000-20,000/month',
      category: 'Emergency AI',
      technologies: ['Disaster Prediction', 'Response Coordination', 'Custom Emergency Models', 'Satellite Data', 'IoT Sensors']
    },
    {
      title: 'AI-Powered Urban Planning',
      description: 'Intelligent urban planning with traffic optimization and infrastructure analysis.',
      icon: '🏙️',
      price: 'Starting at $4,500/month',
      features: ['Traffic optimization', 'Infrastructure analysis', 'Population modeling', 'Resource planning', 'Sustainability analysis'],
      benefits: ['Improve city efficiency', 'Reduce traffic congestion', 'Optimize resource use'],
      marketPrice: '$7,500-18,000/month',
      category: 'Urban AI',
      technologies: ['Traffic Analysis', 'Infrastructure Modeling', 'Custom Urban Models', 'Satellite Data', 'IoT Integration']
    },
    {
      title: 'AI-Powered Agriculture Optimization',
      description: 'Intelligent agricultural optimization with crop monitoring and yield prediction.',
      icon: '🌾',
      price: 'Starting at $3,000/month',
      features: ['Crop monitoring', 'Yield prediction', 'Pest detection', 'Irrigation optimization', 'Soil analysis'],
      benefits: ['Increase crop yields', 'Reduce resource use', 'Improve sustainability'],
      marketPrice: '$5,000-12,000/month',
      category: 'Agriculture AI',
      technologies: ['Satellite Imagery', 'IoT Sensors', 'Custom Agriculture Models', 'Drone Data', 'Weather APIs']
    },
    {
      title: 'AI-Powered Water Management',
      description: 'Intelligent water resource management with quality monitoring and distribution optimization.',
      icon: '💧',
      price: 'Starting at $2,800/month',
      features: ['Water quality monitoring', 'Distribution optimization', 'Leak detection', 'Usage analysis', 'Treatment optimization'],
      benefits: ['Improve water quality', 'Reduce waste', 'Optimize distribution'],
      marketPrice: '$4,500-11,000/month',
      category: 'Water AI',
      technologies: ['Water Quality Sensors', 'Distribution Networks', 'Custom Water Models', 'IoT Integration', 'Analytics']
    },
    {
      title: 'AI-Powered Waste Management',
      description: 'Intelligent waste management with collection optimization and recycling analysis.',
      icon: '♻️',
      price: 'Starting at $2,200/month',
      features: ['Collection optimization', 'Recycling analysis', 'Waste sorting', 'Route planning', 'Sustainability tracking'],
      benefits: ['Reduce waste', 'Improve recycling', 'Optimize collection'],
      marketPrice: '$3,500-8,000/month',
      category: 'Waste AI',
      technologies: ['Waste Sensors', 'Route Optimization', 'Custom Waste Models', 'IoT Integration', 'Analytics']
    },
    {
      title: 'AI-Powered Energy Grid Management',
      description: 'Intelligent energy grid optimization with demand prediction and renewable integration.',
      icon: '⚡',
      price: 'Starting at $4,000/month',
      features: ['Demand prediction', 'Grid optimization', 'Renewable integration', 'Load balancing', 'Outage prevention'],
      benefits: ['Improve grid efficiency', 'Integrate renewables', 'Prevent outages'],
      marketPrice: '$6,500-16,000/month',
      category: 'Energy AI',
      technologies: ['Grid Data', 'Demand Forecasting', 'Custom Energy Models', 'IoT Sensors', 'Renewable APIs']
    },
    {
      title: 'AI-Powered Smart City Management',
      description: 'Comprehensive smart city management with integrated AI services and citizen engagement.',
      icon: '🏛️',
      price: 'Starting at $8,000/month',
      features: ['Integrated services', 'Citizen engagement', 'Resource optimization', 'Service delivery', 'Data analytics'],
      benefits: ['Improve city services', 'Enhance citizen experience', 'Optimize resources'],
      marketPrice: '$15,000-40,000/month',
      category: 'Smart City AI',
      technologies: ['City Data Integration', 'Citizen Services', 'Custom City Models', 'IoT Networks', 'Analytics Platforms'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      name: 'AI Workflow Automation',
      description: 'Intelligent business process automation with self-optimizing workflows',
      price: '$1,899/month',
      features: [
        'Visual Workflow Builder',
        'Smart Process Optimization',
        'Error Detection & Correction',
        'Cost Reduction Analysis',
        'Scalable Architecture',
        'Integration Management',
        'Performance Monitoring',
        'Custom Rule Engine'
      ],
      icon: Zap,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
>>>>>>> cursor/fix-errors-and-merge-to-main-e12a
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
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive suite of AI-powered services. 
              From analytics to automation, we provide cutting-edge solutions tailored to your needs.
            </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e12a
          </div>
        </div>

<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
=======
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service) => (
            <div key={service.id} className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e12a
              )}
              
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.bgColor} mb-6`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
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
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {service.price}
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-a74d
=======
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
                      <span className="ml-1 text-sm font-medium">4.8</span>
                    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e12a
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
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Trial:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.trial}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Expected ROI:</span>
                          <span className="text-sm font-medium text-green-400">{service.roi}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <a
                          href={service.link}
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                        >
                          Learn More
                        </a>
                        <a
                          href="/contact"
                          className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                        >
                          Start Free Trial
                        </a>
                      </div>
                    </div>
                  ))}
<<<<<<< HEAD
                </div>
            )}
=======
                </ul>
<<<<<<< HEAD
              </div>
>>>>>>> 0cc94a9107be4e149f624d711393a8900b821eec

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
=======
                
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 group-hover:shadow-lg">
                    Get Started
                  </button>
                  <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    Learn More
                  </button>
                </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e12a
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
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
=======
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI services to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Schedule Demo
            </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-e12a
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
