import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, BarChart3, Brain, Mail, Calendar, FileText, Image, Video, Music, Code, Database, Cloud, Smartphone, Globe, Lock, Target, PieChart, Settings, Bell, Search, Filter, Download, Upload, Share, Edit, Trash2, Plus, Minus, Refresh, Play, Pause, Stop, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Copy, Cut, Paste, Save, Folder, FolderOpen, File, FileImage, FileVideo, FileAudio, FileCode, FileText as FileTextIcon, FileSpreadsheet, FilePdf, FileArchive, FileCheck, FileX, FilePlus, FileMinus, FileEdit, FileSearch, FileDownload, FileUpload, FileShare, FileLock, FileUnlock, FileHeart, FileStar, FileClock, FileAlert, FileInfo, FileQuestion, FileWarning, FileBan, FileCheckCircle, FileXCircle, FileAlertCircle, FileInfoCircle, FileQuestionCircle, FileWarningCircle, FileBanCircle, Palette } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    // AI-Powered Tools
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      icon: <Brain className="w-8 h-8" />,
      category: 'ai-tools',
      price: 29,
      period: 'month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'Multi-language support',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      popular: true,
      rating: 4.9,
      users: 12500,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Creator',
      description: 'Create stunning images, logos, and graphics using AI-powered image generation.',
      icon: <Image className="w-8 h-8" />,
      category: 'ai-tools',
      price: 19,
      period: 'month',
      features: [
        '1000+ images per month',
        'HD quality output',
        'Multiple art styles',
        'Background removal',
        'Image upscaling',
        'Batch processing',
        'Commercial license',
        'API access'
      ],
      popular: false,
      rating: 4.8,
      users: 8900,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-video-editor',
      name: 'AI Video Editor',
      description: 'Automatically edit videos with AI-powered tools for professional results.',
      icon: <Video className="w-8 h-8" />,
      category: 'ai-tools',
      price: 39,
      period: 'month',
      features: [
        'Auto video editing',
        'Smart transitions',
        'Background music sync',
        'Text overlay generation',
        'Color correction',
        'Video stabilization',
        'Export in 4K',
        'Cloud storage'
      ],
      popular: false,
      rating: 4.7,
      users: 5600,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'ai-voice-generator',
      name: 'AI Voice Generator',
      description: 'Convert text to natural-sounding speech with 200+ voices in 50+ languages.',
      icon: <Volume2 className="w-8 h-8" />,
      category: 'ai-tools',
      price: 24,
      period: 'month',
      features: [
        '200+ voice options',
        '50+ languages',
        'Emotion control',
        'Speed adjustment',
        'Commercial license',
        'API integration',
        'Batch processing',
        'High-quality audio'
      ],
      popular: false,
      rating: 4.6,
      users: 4200,
      color: 'from-green-500 to-teal-500'
    },

    // Business Tools
    {
      id: 'email-marketing-pro',
      name: 'Email Marketing Pro',
      description: 'Advanced email marketing platform with AI-powered personalization and automation.',
      icon: <Mail className="w-8 h-8" />,
      category: 'business-tools',
      price: 49,
      period: 'month',
      features: [
        'Unlimited emails',
        'AI subject line optimization',
        'Advanced segmentation',
        'A/B testing',
        'Automation workflows',
        'Analytics & reporting',
        'Template library',
        'Integrations'
      ],
      popular: true,
      rating: 4.8,
      users: 18500,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'social-media-scheduler',
      name: 'Social Media Scheduler',
      description: 'Schedule and manage all your social media posts across multiple platforms.',
      icon: <Share className="w-8 h-8" />,
      category: 'business-tools',
      price: 34,
      period: 'month',
      features: [
        'All major platforms',
        'Bulk scheduling',
        'Content calendar',
        'Hashtag suggestions',
        'Performance analytics',
        'Team collaboration',
        'Content library',
        'Auto-posting'
      ],
      popular: false,
      rating: 4.7,
      users: 11200,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'crm-simple',
      name: 'Simple CRM',
      description: 'Lightweight CRM system for small businesses with essential features.',
      icon: <Users className="w-8 h-8" />,
      category: 'business-tools',
      price: 39,
      period: 'month',
      features: [
        'Contact management',
        'Lead tracking',
        'Sales pipeline',
        'Task management',
        'Email integration',
        'Basic reporting',
        'Mobile app',
        'Team collaboration'
      ],
      popular: false,
      rating: 4.5,
      users: 7800,
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'invoicing-pro',
      name: 'Invoicing Pro',
      description: 'Professional invoicing and payment processing for freelancers and small businesses.',
      icon: <FileText className="w-8 h-8" />,
      category: 'business-tools',
      price: 19,
      period: 'month',
      features: [
        'Unlimited invoices',
        'Payment processing',
        'Recurring billing',
        'Tax calculations',
        'Client portal',
        'Expense tracking',
        'Multi-currency',
        'Mobile app'
      ],
      popular: false,
      rating: 4.6,
      users: 9500,
      color: 'from-amber-500 to-yellow-500'
    },

    // Analytics & Data
    {
      id: 'website-analytics',
      name: 'Website Analytics Pro',
      description: 'Advanced website analytics with real-time insights and AI-powered recommendations.',
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'analytics',
      price: 29,
      period: 'month',
      features: [
        'Real-time tracking',
        'AI insights',
        'Custom dashboards',
        'Goal tracking',
        'E-commerce analytics',
        'Heatmaps',
        'Session recordings',
        'API access'
      ],
      popular: true,
      rating: 4.9,
      users: 15200,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'seo-optimizer',
      name: 'SEO Optimizer',
      description: 'AI-powered SEO tool to improve your website ranking and visibility.',
      icon: <Search className="w-8 h-8" />,
      category: 'analytics',
      price: 44,
      period: 'month',
      features: [
        'Keyword research',
        'Site audit',
        'Competitor analysis',
        'Content optimization',
        'Link building',
        'Rank tracking',
        'Technical SEO',
        'Reporting'
      ],
      popular: false,
      rating: 4.7,
      users: 8800,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'conversion-tracker',
      name: 'Conversion Tracker',
      description: 'Track and optimize conversion rates across your marketing channels.',
      icon: <Target className="w-8 h-8" />,
      category: 'analytics',
      price: 34,
      period: 'month',
      features: [
        'Multi-channel tracking',
        'Funnel analysis',
        'A/B testing',
        'Attribution modeling',
        'ROI calculation',
        'Real-time alerts',
        'Custom reports',
        'Integrations'
      ],
      popular: false,
      rating: 4.6,
      users: 6200,
      color: 'from-violet-500 to-purple-500'
    },

    // Productivity Tools
    {
      id: 'task-manager-pro',
      name: 'Task Manager Pro',
      description: 'Advanced task management with AI-powered prioritization and team collaboration.',
      icon: <CheckCircle className="w-8 h-8" />,
      category: 'productivity',
      price: 24,
      period: 'month',
      features: [
        'AI task prioritization',
        'Team collaboration',
        'Time tracking',
        'Project templates',
        'Gantt charts',
        'Mobile apps',
        'Integrations',
        'Reporting'
      ],
      popular: false,
      rating: 4.8,
      users: 13400,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'note-taking-ai',
      name: 'AI Note Taker',
      description: 'Intelligent note-taking app with AI-powered organization and search.',
      icon: <FileTextIcon className="w-8 h-8" />,
      category: 'productivity',
      price: 14,
      period: 'month',
      features: [
        'Voice-to-text',
        'AI summarization',
        'Smart tagging',
        'Cross-device sync',
        'Search functionality',
        'Export options',
        'Collaboration',
        'Templates'
      ],
      popular: false,
      rating: 4.5,
      users: 6800,
      color: 'from-lime-500 to-green-500'
    },
    {
      id: 'calendar-scheduler',
      name: 'Smart Calendar',
      description: 'AI-powered calendar with smart scheduling and meeting optimization.',
      icon: <Calendar className="w-8 h-8" />,
      category: 'productivity',
      price: 19,
      period: 'month',
      features: [
        'Smart scheduling',
        'Meeting optimization',
        'Time zone handling',
        'Integration sync',
        'Team scheduling',
        'Mobile apps',
        'Reminders',
        'Analytics'
      ],
      popular: false,
      rating: 4.6,
      users: 9200,
      color: 'from-sky-500 to-blue-500'
    },

    // Development Tools
    {
      id: 'code-generator',
      name: 'AI Code Generator',
      description: 'Generate code snippets, functions, and complete applications using AI.',
      icon: <Code className="w-8 h-8" />,
      category: 'development',
      price: 39,
      period: 'month',
      features: [
        'Multi-language support',
        'Code completion',
        'Bug fixing',
        'Documentation generation',
        'Code review',
        'Testing assistance',
        'API integration',
        'Version control'
      ],
      popular: true,
      rating: 4.8,
      users: 16800,
      color: 'from-gray-500 to-slate-500'
    },
    {
      id: 'api-tester',
      name: 'API Tester Pro',
      description: 'Comprehensive API testing and monitoring platform for developers.',
      icon: <Database className="w-8 h-8" />,
      category: 'development',
      price: 29,
      period: 'month',
      features: [
        'API testing suite',
        'Performance monitoring',
        'Automated testing',
        'Documentation generation',
        'Team collaboration',
        'CI/CD integration',
        'Alert system',
        'Analytics'
      ],
      popular: false,
      rating: 4.7,
      users: 7400,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'deployment-automation',
      name: 'Deployment Automation',
      description: 'Automate your deployment pipeline with AI-powered optimization.',
      icon: <Cloud className="w-8 h-8" />,
      category: 'development',
      price: 49,
      period: 'month',
      features: [
        'Automated deployments',
        'Environment management',
        'Rollback capabilities',
        'Performance monitoring',
        'Security scanning',
        'Team notifications',
        'Integration support',
        'Analytics'
      ],
      popular: false,
      rating: 4.6,
      users: 5100,
      color: 'from-blue-500 to-cyan-500'
    },

    // Security Tools
    {
      id: 'password-manager',
      name: 'Secure Password Manager',
      description: 'Enterprise-grade password management with AI-powered security features.',
      icon: <Lock className="w-8 h-8" />,
      category: 'security',
      price: 19,
      period: 'month',
      features: [
        'Unlimited passwords',
        'AI security analysis',
        'Breach monitoring',
        'Secure sharing',
        'Multi-device sync',
        '2FA integration',
        'Family plans',
        'Business features'
      ],
      popular: false,
      rating: 4.9,
      users: 25600,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'vulnerability-scanner',
      name: 'Vulnerability Scanner',
      description: 'Automated security scanning for websites and applications.',
      icon: <Shield className="w-8 h-8" />,
      category: 'security',
      price: 44,
      period: 'month',
      features: [
        'Automated scanning',
        'Vulnerability detection',
        'Security reports',
        'Compliance checking',
        'Penetration testing',
        'Real-time monitoring',
        'Team alerts',
        'API access'
      ],
      popular: false,
      rating: 4.7,
      users: 3800,
      color: 'from-emerald-500 to-teal-500'
    },

    // Design Tools
    {
      id: 'logo-maker',
      name: 'AI Logo Maker',
      description: 'Create professional logos in minutes using AI-powered design tools.',
      icon: <Image className="w-8 h-8" />,
      category: 'design',
      price: 24,
      period: 'month',
      features: [
        'AI logo generation',
        'Unlimited downloads',
        'High-resolution files',
        'Brand guidelines',
        'Multiple formats',
        'Commercial license',
        'Template library',
        'Custom fonts'
      ],
      popular: false,
      rating: 4.6,
      users: 11200,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'color-palette-generator',
      name: 'Color Palette Generator',
      description: 'Generate beautiful color palettes for your designs using AI.',
      icon: <Palette className="w-8 h-8" />,
      category: 'design',
      price: 14,
      period: 'month',
      features: [
        'AI color generation',
        'Palette analysis',
        'Accessibility checking',
        'Export options',
        'Brand integration',
        'Trend analysis',
        'Team sharing',
        'API access'
      ],
      popular: false,
      rating: 4.5,
      users: 5600,
      color: 'from-rose-500 to-pink-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', count: microSAASServices.length },
    { id: 'ai-tools', name: 'AI Tools', count: microSAASServices.filter(s => s.category === 'ai-tools').length },
    { id: 'business-tools', name: 'Business Tools', count: microSAASServices.filter(s => s.category === 'business-tools').length },
    { id: 'analytics', name: 'Analytics', count: microSAASServices.filter(s => s.category === 'analytics').length },
    { id: 'productivity', name: 'Productivity', count: microSAASServices.filter(s => s.category === 'productivity').length },
    { id: 'development', name: 'Development', count: microSAASServices.filter(s => s.category === 'development').length },
    { id: 'security', name: 'Security', count: microSAASServices.filter(s => s.category === 'security').length },
    { id: 'design', name: 'Design', count: microSAASServices.filter(s => s.category === 'design').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Powerful AI-driven tools for modern businesses
            </p>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Choose from our comprehensive collection of micro SAAS tools designed to streamline your workflow, 
              boost productivity, and drive growth. All tools include 24/7 support and regular updates.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="cyber-card text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-300">Tools Available</div>
              </div>
              <div className="cyber-card text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">150K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="cyber-card text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="cyber-card text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card hologram-card relative group transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'ring-2 ring-cyan-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-cyan-400">
                      ${service.price}
                    </span>
                    <span className="text-gray-400">/{service.period}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {service.users.toLocaleString()}+ users
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full border border-cyan-500 text-cyan-400 py-3 px-6 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our Micro SAAS Tools?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our tools are designed with modern businesses in mind, offering powerful features at affordable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Instant Setup</h3>
              <p className="text-gray-300">Get started in minutes with our intuitive setup process and comprehensive documentation.</p>
            </div>

            <div className="cyber-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with encryption, compliance, and regular security audits.</p>
            </div>

            <div className="cyber-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support from our expert team to help you succeed.</p>
            </div>

            <div className="cyber-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Regular Updates</h3>
              <p className="text-gray-300">Continuous improvements and new features added regularly based on user feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Flexible Pricing Options
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features and 24/7 support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="cyber-card text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$14<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 3 tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <button className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="cyber-card text-center ring-2 ring-cyan-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$39<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10 tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API access
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Team collaboration
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="cyber-card text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 phone support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated account manager
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SLA guarantee
                </li>
              </ul>
              <button className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our micro SAAS tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Get Free Consultation
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free 14-day trial for all tools</p>
            <p>✓ No setup fees or hidden costs</p>
            <p>✓ Cancel anytime with 30-day money-back guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;