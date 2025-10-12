import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign, Star, Users, Zap, Heart, Camera, FileText, BarChart3, Mail, Calendar, CreditCard, Target, TrendingUp, Lock, Eye, Home, Cpu, Server, Wifi, Palette, Mic, MapPin, ShoppingCart, BookOpen, Gamepad2, Music, Video, Image, Download, Upload, Settings, Bell, Search, Filter, Plus, Minus, Edit, Trash2, Save, Share, Copy, Link, Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Crop, Scissors, Eraser, Brush, Pen, Pencil, Highlighter, Type, AlignLeft, AlignCenter, AlignRight, AlignJustify, Bold, Italic, Underline, Strikethrough, Subscript, Superscript, List, ListOrdered, Quote, Code2, Terminal, Database2, HardDrive, MemoryStick, Monitor, Printer, Scanner, Keyboard, Mouse, Headphones, Speaker, Microphone, Webcam, Router, Modem, Smartphone2, Tablet, Laptop, Desktop, Watch, Tv, Radio, Camera2, Video2, Image2, File, Folder, Archive, Compress, Extract, Lock2, Unlock, Key, Shield2, AlertTriangle, AlertCircle, CheckCircle2, XCircle, Info, HelpCircle, QuestionMarkCircle, ExclamationTriangle, ExclamationCircle, PlusCircle, MinusCircle, XCircle2, CheckSquare, Square, Circle, Triangle, Hexagon, Pentagon, Octagon, Diamond, Heart2, Star2, ThumbsUp, ThumbsDown, Smile, Frown, Meh, Laugh, Angry, Sad, Surprised, Confused, Wink, Kiss, Tongue } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    // Content Generation & Writing
    {
      icon: <FileText className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with SEO optimization, brand voice matching, and multi-language support.',
      features: [
        'Blog post generation',
        'Social media content',
        'Product descriptions',
        'Email marketing copy',
        'SEO optimization',
        'Multi-language support',
        'Brand voice training',
        'Plagiarism detection'
      ],
      pricing: '$99/month',
      popular: true,
      link: '/ai-content-generator',
      category: 'Content Generation'
    },
    {
      icon: <Camera className="w-12 h-12 text-pink-500" />,
      title: 'AI Image Generator',
      description: 'Professional AI image creation with advanced editing tools, brand customization, and multiple output formats.',
      features: [
        'AI image generation',
        'Style transfer',
        'Background removal',
        'Object replacement',
        'Brand customization',
        'Batch processing',
        'High-resolution output',
        'Commercial license'
      ],
      pricing: '$79/month',
      popular: false,
      link: '/ai-image-generator',
      category: 'Content Generation'
    },
    {
      icon: <Video className="w-12 h-12 text-purple-500" />,
      title: 'AI Video Creator',
      description: 'Automated video production with AI-powered editing, voice synthesis, and multi-platform optimization.',
      features: [
        'AI video editing',
        'Voice synthesis',
        'Auto-captioning',
        'Scene generation',
        'Music composition',
        'Multi-platform export',
        'Template library',
        'Brand integration'
      ],
      pricing: '$149/month',
      popular: true,
      link: '/ai-video-creator',
      category: 'Content Generation'
    },
    {
      icon: <Mic className="w-12 h-12 text-orange-500" />,
      title: 'AI Voice Generator',
      description: 'High-quality voice synthesis with multiple languages, emotions, and real-time voice cloning capabilities.',
      features: [
        'Voice cloning',
        'Emotion control',
        'Multi-language support',
        'Real-time synthesis',
        'Voice conversion',
        'Audio enhancement',
        'Custom voice training',
        'API integration'
      ],
      pricing: '$89/month',
      popular: false,
      link: '/ai-voice-generator',
      category: 'Content Generation'
    },

    // Business Intelligence & Analytics
    {
      icon: <BarChart3 className="w-12 h-12 text-green-500" />,
      title: 'AI Business Intelligence',
      description: 'Advanced business analytics with AI-powered insights, predictive modeling, and automated reporting.',
      features: [
        'Predictive analytics',
        'Automated reporting',
        'Data visualization',
        'Trend analysis',
        'Anomaly detection',
        'Custom dashboards',
        'Real-time monitoring',
        'ROI optimization'
      ],
      pricing: '$199/month',
      popular: true,
      link: '/ai-business-intelligence',
      category: 'Analytics'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-cyan-500" />,
      title: 'AI Sales Predictor',
      description: 'Intelligent sales forecasting with market analysis, customer behavior prediction, and revenue optimization.',
      features: [
        'Sales forecasting',
        'Customer behavior analysis',
        'Market trend prediction',
        'Lead scoring',
        'Revenue optimization',
        'Risk assessment',
        'Competitive analysis',
        'Performance tracking'
      ],
      pricing: '$159/month',
      popular: false,
      link: '/ai-sales-predictor',
      category: 'Analytics'
    },
    {
      icon: <Database className="w-12 h-12 text-indigo-500" />,
      title: 'AI Data Processor',
      description: 'Intelligent data processing with automated cleaning, transformation, and analysis capabilities.',
      features: [
        'Data cleaning',
        'Automated transformation',
        'Pattern recognition',
        'Data validation',
        'Integration tools',
        'Quality scoring',
        'Real-time processing',
        'Custom algorithms'
      ],
      pricing: '$129/month',
      popular: false,
      link: '/ai-data-processor',
      category: 'Analytics'
    },

    // Customer Service & Support
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: 'AI Customer Service Suite',
      description: 'Comprehensive customer service automation with chatbots, ticket routing, and sentiment analysis.',
      features: [
        'Intelligent chatbots',
        'Ticket routing',
        'Sentiment analysis',
        'Multi-language support',
        'Knowledge base integration',
        'Escalation management',
        'Performance analytics',
        'Custom workflows'
      ],
      pricing: '$179/month',
      popular: true,
      link: '/ai-customer-service-suite',
      category: 'Customer Service'
    },
    {
      icon: <Headphones className="w-12 h-12 text-blue-500" />,
      title: 'AI Call Center',
      description: 'Advanced call center automation with voice recognition, call routing, and real-time assistance.',
      features: [
        'Voice recognition',
        'Call routing',
        'Real-time assistance',
        'Call transcription',
        'Sentiment analysis',
        'Quality monitoring',
        'Agent training',
        'Performance metrics'
      ],
      pricing: '$249/month',
      popular: false,
      link: '/ai-call-center',
      category: 'Customer Service'
    },
    {
      icon: <Mail className="w-12 h-12 text-green-500" />,
      title: 'AI Email Assistant',
      description: 'Intelligent email management with automated responses, categorization, and priority scoring.',
      features: [
        'Automated responses',
        'Email categorization',
        'Priority scoring',
        'Spam detection',
        'Template suggestions',
        'Follow-up reminders',
        'Sentiment analysis',
        'Integration tools'
      ],
      pricing: '$89/month',
      popular: false,
      link: '/ai-email-assistant',
      category: 'Customer Service'
    },

    // Marketing & Sales
    {
      icon: <Target className="w-12 h-12 text-red-500" />,
      title: 'AI Marketing Automation',
      description: 'Comprehensive marketing automation with campaign optimization, audience targeting, and performance tracking.',
      features: [
        'Campaign optimization',
        'Audience targeting',
        'A/B testing',
        'Content personalization',
        'Lead nurturing',
        'Performance tracking',
        'ROI analysis',
        'Multi-channel management'
      ],
      pricing: '$199/month',
      popular: true,
      link: '/ai-marketing-automation',
      category: 'Marketing'
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-orange-500" />,
      title: 'AI E-commerce Optimizer',
      description: 'Smart e-commerce optimization with product recommendations, pricing strategies, and conversion analysis.',
      features: [
        'Product recommendations',
        'Dynamic pricing',
        'Conversion optimization',
        'Inventory management',
        'Customer segmentation',
        'A/B testing',
        'Revenue optimization',
        'Analytics dashboard'
      ],
      pricing: '$179/month',
      popular: false,
      link: '/ai-ecommerce-optimizer',
      category: 'Marketing'
    },
    {
      icon: <Search className="w-12 h-12 text-cyan-500" />,
      title: 'AI SEO Optimizer',
      description: 'Advanced SEO optimization with keyword research, content analysis, and ranking prediction.',
      features: [
        'Keyword research',
        'Content optimization',
        'Ranking prediction',
        'Competitor analysis',
        'Technical SEO audit',
        'Link building suggestions',
        'Performance tracking',
        'Automated reporting'
      ],
      pricing: '$149/month',
      popular: false,
      link: '/ai-seo-optimizer',
      category: 'Marketing'
    },

    // Healthcare & Medical
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: 'AI Medical Assistant',
      description: 'Advanced medical AI with symptom analysis, diagnosis support, and treatment recommendations.',
      features: [
        'Symptom analysis',
        'Diagnosis support',
        'Treatment recommendations',
        'Drug interaction checking',
        'Medical image analysis',
        'Patient monitoring',
        'Clinical decision support',
        'Compliance tracking'
      ],
      pricing: '$299/month',
      popular: true,
      link: '/ai-medical-assistant',
      category: 'Healthcare'
    },
    {
      icon: <Brain className="w-12 h-12 text-indigo-500" />,
      title: 'AI Mental Health Support',
      description: 'AI-powered mental health support with mood tracking, therapy assistance, and crisis intervention.',
      features: [
        'Mood tracking',
        'Therapy assistance',
        'Crisis intervention',
        'Meditation guidance',
        'Stress management',
        'Sleep analysis',
        'Progress monitoring',
        'Professional referrals'
      ],
      pricing: '$129/month',
      popular: false,
      link: '/ai-mental-health-support',
      category: 'Healthcare'
    },
    {
      icon: <Activity className="w-12 h-12 text-green-500" />,
      title: 'AI Fitness Coach',
      description: 'Personalized fitness coaching with workout optimization, nutrition planning, and progress tracking.',
      features: [
        'Workout optimization',
        'Nutrition planning',
        'Progress tracking',
        'Injury prevention',
        'Goal setting',
        'Social features',
        'Wearable integration',
        'Performance analytics'
      ],
      pricing: '$99/month',
      popular: false,
      link: '/ai-fitness-coach',
      category: 'Healthcare'
    },

    // Education & Learning
    {
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      title: 'AI Learning Platform',
      description: 'Personalized learning platform with adaptive content, progress tracking, and skill assessment.',
      features: [
        'Adaptive learning',
        'Progress tracking',
        'Skill assessment',
        'Personalized content',
        'Gamification',
        'Certification programs',
        'Mobile learning',
        'Analytics dashboard'
      ],
      pricing: '$149/month',
      popular: true,
      link: '/ai-learning-platform',
      category: 'Education'
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: 'AI Language Tutor',
      description: 'Advanced language learning with speech recognition, conversation practice, and cultural context.',
      features: [
        'Speech recognition',
        'Conversation practice',
        'Cultural context',
        'Grammar correction',
        'Vocabulary building',
        'Pronunciation coaching',
        'Progress tracking',
        'Multi-language support'
      ],
      pricing: '$119/month',
      popular: false,
      link: '/ai-language-tutor',
      category: 'Education'
    },
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Code Assistant',
      description: 'Intelligent coding assistance with code generation, debugging, and best practice recommendations.',
      features: [
        'Code generation',
        'Debugging assistance',
        'Best practice recommendations',
        'Code review',
        'Documentation generation',
        'Testing automation',
        'Performance optimization',
        'Multi-language support'
      ],
      pricing: '$179/month',
      popular: true,
      link: '/ai-code-assistant',
      category: 'Education'
    },

    // Security & Compliance
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'AI Security Suite',
      description: 'Comprehensive security solution with threat detection, vulnerability assessment, and compliance monitoring.',
      features: [
        'Threat detection',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Incident response',
        'Risk analysis',
        'Security training',
        'Audit trails',
        'Real-time alerts'
      ],
      pricing: '$249/month',
      popular: true,
      link: '/ai-security-suite',
      category: 'Security'
    },
    {
      icon: <Lock className="w-12 h-12 text-purple-500" />,
      title: 'AI Fraud Detection',
      description: 'Advanced fraud detection with real-time monitoring, pattern recognition, and risk scoring.',
      features: [
        'Real-time monitoring',
        'Pattern recognition',
        'Risk scoring',
        'Transaction analysis',
        'Behavioral analysis',
        'Alert management',
        'False positive reduction',
        'Compliance reporting'
      ],
      pricing: '$199/month',
      popular: false,
      link: '/ai-fraud-detection',
      category: 'Security'
    },
    {
      icon: <Eye className="w-12 h-12 text-cyan-500" />,
      title: 'AI Privacy Monitor',
      description: 'Comprehensive privacy protection with data monitoring, compliance tracking, and privacy recommendations.',
      features: [
        'Data monitoring',
        'Compliance tracking',
        'Privacy recommendations',
        'GDPR compliance',
        'Data anonymization',
        'Consent management',
        'Privacy reports',
        'Risk assessment'
      ],
      pricing: '$159/month',
      popular: false,
      link: '/ai-privacy-monitor',
      category: 'Security'
    },

    // Finance & Banking
    {
      icon: <CreditCard className="w-12 h-12 text-green-500" />,
      title: 'AI Financial Advisor',
      description: 'Intelligent financial planning with investment recommendations, risk assessment, and portfolio optimization.',
      features: [
        'Investment recommendations',
        'Risk assessment',
        'Portfolio optimization',
        'Tax planning',
        'Retirement planning',
        'Market analysis',
        'Goal tracking',
        'Performance monitoring'
      ],
      pricing: '$199/month',
      popular: true,
      link: '/ai-financial-advisor',
      category: 'Finance'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-500" />,
      title: 'AI Trading Bot',
      description: 'Automated trading with AI-powered market analysis, strategy optimization, and risk management.',
      features: [
        'Market analysis',
        'Strategy optimization',
        'Risk management',
        'Portfolio rebalancing',
        'Backtesting',
        'Real-time monitoring',
        'Performance tracking',
        'Custom strategies'
      ],
      pricing: '$299/month',
      popular: false,
      link: '/ai-trading-bot',
      category: 'Finance'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-orange-500" />,
      title: 'AI Credit Analyzer',
      description: 'Advanced credit analysis with risk assessment, loan optimization, and fraud prevention.',
      features: [
        'Risk assessment',
        'Loan optimization',
        'Fraud prevention',
        'Credit scoring',
        'Default prediction',
        'Portfolio analysis',
        'Regulatory compliance',
        'Performance monitoring'
      ],
      pricing: '$179/month',
      popular: false,
      link: '/ai-credit-analyzer',
      category: 'Finance'
    },

    // Manufacturing & Industry
    {
      icon: <Cpu className="w-12 h-12 text-indigo-500" />,
      title: 'AI Manufacturing Optimizer',
      description: 'Smart manufacturing optimization with predictive maintenance, quality control, and efficiency improvement.',
      features: [
        'Predictive maintenance',
        'Quality control',
        'Efficiency optimization',
        'Supply chain management',
        'Inventory optimization',
        'Energy management',
        'Safety monitoring',
        'Performance analytics'
      ],
      pricing: '$349/month',
      popular: true,
      link: '/ai-manufacturing-optimizer',
      category: 'Manufacturing'
    },
    {
      icon: <Settings className="w-12 h-12 text-gray-500" />,
      title: 'AI Process Automation',
      description: 'Intelligent process automation with workflow optimization, task automation, and performance monitoring.',
      features: [
        'Workflow optimization',
        'Task automation',
        'Performance monitoring',
        'Error detection',
        'Resource optimization',
        'Compliance tracking',
        'Integration tools',
        'Analytics dashboard'
      ],
      pricing: '$229/month',
      popular: false,
      link: '/ai-process-automation',
      category: 'Manufacturing'
    },

    // Real Estate & Property
    {
      icon: <Home className="w-12 h-12 text-blue-500" />,
      title: 'AI Property Valuer',
      description: 'Intelligent property valuation with market analysis, price prediction, and investment recommendations.',
      features: [
        'Property valuation',
        'Market analysis',
        'Price prediction',
        'Investment recommendations',
        'Risk assessment',
        'Rental yield analysis',
        'Market trends',
        'Comparative analysis'
      ],
      pricing: '$149/month',
      popular: false,
      link: '/ai-property-valuer',
      category: 'Real Estate'
    },
    {
      icon: <MapPin className="w-12 h-12 text-green-500" />,
      title: 'AI Location Intelligence',
      description: 'Advanced location analysis with demographic insights, market trends, and site selection optimization.',
      features: [
        'Demographic analysis',
        'Market trends',
        'Site selection',
        'Traffic analysis',
        'Competition analysis',
        'Growth prediction',
        'Risk assessment',
        'Investment insights'
      ],
      pricing: '$179/month',
      popular: true,
      link: '/ai-location-intelligence',
      category: 'Real Estate'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cutting-Edge AI Technology',
      description: 'Leverage the latest AI advancements to transform your business operations and gain competitive advantages.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Scalable Solutions',
      description: 'AI services that grow with your business, from startup to enterprise scale.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Custom Integration',
      description: 'Seamless integration with your existing systems and workflows for maximum efficiency.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and continuous monitoring of your AI systems.'
    }
  ];

  const categories = ['All', 'Content Generation', 'Analytics', 'Customer Service', 'Marketing', 'Healthcare', 'Education', 'Security', 'Finance', 'Manufacturing', 'Real Estate'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'AI Models' },
    { number: '50+', label: 'AI Services' },
    { number: '99.9%', label: 'Accuracy' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services and solutions to transform your business with artificial intelligence. From content generation to predictive analytics." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, business automation, AI solutions" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From content generation to predictive analytics, we provide comprehensive AI services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/micro-saas-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Micro SAAS
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* AI Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our AI Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our AI Services?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Experience the power of artificial intelligence in your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your AI journey today and unlock the potential of artificial intelligence for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/it-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore IT Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;
