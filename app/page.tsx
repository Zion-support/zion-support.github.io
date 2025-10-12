'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, BarChart, Bot, Camera, Headphones, Mail, Phone, Video, Download, Upload, Search, Filter, Layers, GitBranch, Terminal, Database2, HardDrive, Wrench, Cog, RefreshCw, Play, Pause, Stop, Volume2, Mic2, VideoIcon, Image, File, Folder, Archive, Trash2, Edit, Copy, Share, ExternalLink, Plus, Minus, X, Check, AlertTriangle, Info, HelpCircle, BookOpen, Lightbulb, Rocket, Zap as ZapIcon, Flame, Snowflake, Sun, Moon, Wind, Droplets, Thermometer, Activity, Pulse, Heart as HeartIcon, ThumbsUp, ThumbsDown, MessageSquare as MessageSquareIcon, Send, Reply, Forward, Flag, Bookmark, Tag, Hash, AtSign, Percent, DollarSign as DollarSignIcon, CreditCard, Wallet, Receipt, ShoppingBag, ShoppingCart as ShoppingCartIcon, Truck, Package as PackageIcon, Box as BoxIcon, Archive as ArchiveIcon, Folder as FolderIcon, File as FileIcon, Image as ImageIcon, Video as VideoIcon2, Music, Headphones as HeadphonesIcon, Speaker, VolumeX, Volume1, Volume2 as Volume2Icon, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Maximize, Minimize, Move, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon2, ZoomIn, ZoomOut, Search as SearchIcon, Filter as FilterIcon, Sliders, ToggleLeft, ToggleRight, ToggleLeft as ToggleLeftIcon, ToggleRight as ToggleRightIcon2, Power, PowerOff, Wifi as WifiIcon, WifiOff, Signal, SignalHigh, SignalLow, Battery, BatteryLow, BatteryMedium, BatteryHigh, BatteryFull, Plug, Unplug, Lock as LockIcon, Unlock, Key, Eye as EyeIcon, EyeOff, Shield as ShieldIcon, ShieldCheck, ShieldX, AlertCircle, AlertTriangle as AlertTriangleIcon, Info as InfoIcon, HelpCircle as HelpCircleIcon, QuestionMarkCircle, ExclamationTriangle, XCircle, CheckCircle as CheckCircleIcon, PlusCircle, MinusCircle, XCircle as XCircleIcon, CheckCircle2, XCircle2, PlusCircle2, MinusCircle2, AlertCircle as AlertCircleIcon, Info as InfoIcon2, HelpCircle as HelpCircleIcon2, QuestionMarkCircle as QuestionMarkCircleIcon, ExclamationTriangle as ExclamationTriangleIcon, XCircle as XCircleIcon2, CheckCircle as CheckCircleIcon2, PlusCircle as PlusCircleIcon, MinusCircle as MinusCircleIcon, XCircle as XCircleIcon3, CheckCircle as CheckCircleIcon3, PlusCircle as PlusCircleIcon2, MinusCircle as MinusCircleIcon2 } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern technologies',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const aiServices = [
    {
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time predictive insights and machine learning',
      price: '$299/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration', 'ML model training', 'Data visualization'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      link: 'https://ziontechgroup.com/ai-analytics-dashboard-pro'
    },
    {
      title: 'AI Content Generator Studio',
      description: 'Enterprise-grade content creation with multi-language support and brand consistency',
      price: '$199/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content scheduling', 'Plagiarism detection', 'Content analytics'],
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      link: 'https://ziontechgroup.com/ai-content-generator-studio'
    },
    {
      title: 'AI Customer Support Suite',
      description: '24/7 intelligent customer service with advanced NLP and sentiment analysis',
      price: '$399/month',
      features: ['Multi-channel support', 'Sentiment analysis', 'Escalation management', 'Performance analytics', 'Voice recognition', 'Chatbot training'],
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      link: 'https://ziontechgroup.com/ai-customer-support-suite'
    },
    {
      title: 'AI Workflow Automation Engine',
      description: 'Intelligent process automation with RPA and machine learning capabilities',
      price: '$249/month',
      features: ['Process mapping', 'Automated workflows', 'Integration APIs', 'Performance monitoring', 'RPA bots', 'Process optimization'],
      icon: Workflow,
      color: 'from-orange-500 to-red-500',
      link: 'https://ziontechgroup.com/ai-workflow-automation-engine'
    },
    {
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and response using machine learning algorithms',
      price: '$349/month',
      features: ['Threat detection', 'Anomaly detection', 'Incident response', 'Compliance monitoring', 'Security analytics', 'Automated remediation'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: 'https://ziontechgroup.com/ai-cybersecurity-monitor'
    },
    {
      title: 'AI Code Assistant Pro',
      description: 'Intelligent code generation, review, and optimization with AI-powered suggestions',
      price: '$179/month',
      features: ['Code generation', 'Code review', 'Bug detection', 'Performance optimization', 'Documentation generation', 'Test case creation'],
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      link: 'https://ziontechgroup.com/ai-code-assistant-pro'
    },
    {
      title: 'AI Document Intelligence',
      description: 'Automated document processing, extraction, and analysis using OCR and NLP',
      price: '$229/month',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Contract analysis', 'Compliance checking', 'Automated workflows'],
      icon: File,
      color: 'from-teal-500 to-cyan-500',
      link: 'https://ziontechgroup.com/ai-document-intelligence'
    },
    {
      title: 'AI Video Analytics Platform',
      description: 'Computer vision-powered video analysis for security, retail, and operations',
      price: '$399/month',
      features: ['Object detection', 'Facial recognition', 'Behavior analysis', 'Real-time alerts', 'Video search', 'Analytics dashboard'],
      icon: Video,
      color: 'from-pink-500 to-rose-500',
      link: 'https://ziontechgroup.com/ai-video-analytics-platform'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration & Infrastructure',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud expertise',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Security compliance', 'Cost optimization', '24/7 support', 'Multi-cloud strategy', 'Disaster recovery'],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      link: 'https://ziontechgroup.com/cloud-migration'
    },
    {
      title: 'Cybersecurity Audit & Implementation',
      description: 'Comprehensive security assessment, penetration testing, and implementation',
      price: 'Starting at $3,000',
      features: ['Vulnerability assessment', 'Penetration testing', 'Security policies', 'Staff training', 'Compliance auditing', 'Incident response'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: 'https://ziontechgroup.com/cybersecurity-audit'
    },
    {
      title: 'Custom Web Development',
      description: 'Modern, scalable web applications with cutting-edge technologies',
      price: 'Starting at $8,000',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support', 'Progressive Web Apps', 'API development'],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      link: 'https://ziontechgroup.com/web-development'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: 'Starting at $12,000',
      features: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Push notifications', 'Offline functionality', 'Performance optimization'],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      link: 'https://ziontechgroup.com/mobile-development'
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Automated deployment pipelines and infrastructure as code',
      price: 'Starting at $4,000',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Container orchestration', 'Monitoring setup', 'Automated testing', 'Deployment automation'],
      icon: GitBranch,
      color: 'from-indigo-500 to-purple-500',
      link: 'https://ziontechgroup.com/devops-implementation'
    },
    {
      title: 'Database Design & Optimization',
      description: 'High-performance database architecture and optimization services',
      price: 'Starting at $2,500',
      features: ['Database design', 'Performance tuning', 'Data migration', 'Backup strategies', 'Security hardening', 'Monitoring setup'],
      icon: Database,
      color: 'from-teal-500 to-cyan-500',
      link: 'https://ziontechgroup.com/database-services'
    },
    {
      title: 'API Development & Integration',
      description: 'RESTful and GraphQL APIs with comprehensive integration services',
      price: 'Starting at $3,500',
      features: ['RESTful APIs', 'GraphQL APIs', 'Third-party integrations', 'API documentation', 'Rate limiting', 'Authentication'],
      icon: Layers,
      color: 'from-orange-500 to-red-500',
      link: 'https://ziontechgroup.com/api-development'
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance',
      price: 'Starting at $2,000/month',
      features: ['Server management', 'Network setup', 'Security monitoring', 'Backup management', 'Performance monitoring', '24/7 support'],
      icon: Server,
      color: 'from-gray-500 to-slate-500',
      link: 'https://ziontechgroup.com/it-infrastructure'
    }
  ];

  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time dashboards',
      price: '$99/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Team collaboration', 'Data visualization', 'Export capabilities'],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500',
      link: 'https://ziontechgroup.com/zion-analytics-pro'
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection with automated response',
      price: '$149/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance reporting', 'Security alerts', 'Risk assessment'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: 'https://ziontechgroup.com/zion-security-shield'
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform with multi-channel publishing',
      price: '$79/month',
      features: ['AI content generation', 'Multi-platform publishing', 'Brand consistency', 'Performance tracking', 'SEO optimization', 'Content calendar'],
      icon: FileText,
      color: 'from-green-500 to-teal-500',
      link: 'https://ziontechgroup.com/zion-content-studio'
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'Smart customer relationship management with AI insights and automation',
      price: '$129/month',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automation workflows', 'Pipeline management', 'Email integration'],
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      link: 'https://ziontechgroup.com/zion-crm-intelligence'
    },
    {
      title: 'Zion Project Manager Pro',
      description: 'Advanced project management with AI-powered resource allocation and timeline optimization',
      price: '$89/month',
      features: ['Project tracking', 'Resource management', 'Timeline optimization', 'Team collaboration', 'Budget tracking', 'Risk assessment'],
      icon: Calendar,
      color: 'from-indigo-500 to-blue-500',
      link: 'https://ziontechgroup.com/zion-project-manager-pro'
    },
    {
      title: 'Zion Email Marketing Suite',
      description: 'Intelligent email marketing platform with AI-driven personalization and automation',
      price: '$59/month',
      features: ['Email automation', 'Personalization', 'A/B testing', 'Analytics dashboard', 'List management', 'Template library'],
      icon: Mail,
      color: 'from-orange-500 to-red-500',
      link: 'https://ziontechgroup.com/zion-email-marketing-suite'
    },
    {
      title: 'Zion Social Media Manager',
      description: 'AI-powered social media management with content scheduling and analytics',
      price: '$69/month',
      features: ['Multi-platform posting', 'Content scheduling', 'Engagement analytics', 'Hashtag optimization', 'Competitor analysis', 'Influencer tracking'],
      icon: Share,
      color: 'from-pink-500 to-rose-500',
      link: 'https://ziontechgroup.com/zion-social-media-manager'
    },
    {
      title: 'Zion Inventory Tracker',
      description: 'Smart inventory management with predictive analytics and automated reordering',
      price: '$79/month',
      features: ['Inventory tracking', 'Predictive analytics', 'Automated reordering', 'Supplier management', 'Cost optimization', 'Reporting dashboard'],
      icon: Package,
      color: 'from-teal-500 to-cyan-500',
      link: 'https://ziontechgroup.com/zion-inventory-tracker'
    },
    {
      title: 'Zion HR Management System',
      description: 'Comprehensive HR management with AI-powered recruitment and employee analytics',
      price: '$119/month',
      features: ['Employee database', 'Recruitment tools', 'Performance tracking', 'Payroll integration', 'Time tracking', 'Benefits management'],
      icon: Users,
      color: 'from-emerald-500 to-green-500',
      link: 'https://ziontechgroup.com/zion-hr-management-system'
    },
    {
      title: 'Zion Financial Dashboard',
      description: 'Advanced financial management with AI-powered forecasting and expense tracking',
      price: '$99/month',
      features: ['Expense tracking', 'Financial forecasting', 'Budget management', 'Invoice generation', 'Tax preparation', 'Investment tracking'],
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500',
      link: 'https://ziontechgroup.com/zion-financial-dashboard'
    },
    {
      title: 'Zion Customer Feedback Analyzer',
      description: 'AI-powered customer feedback analysis with sentiment tracking and actionable insights',
      price: '$49/month',
      features: ['Sentiment analysis', 'Feedback collection', 'Trend analysis', 'Actionable insights', 'Multi-channel support', 'Custom reports'],
      icon: MessageSquare,
      color: 'from-violet-500 to-purple-500',
      link: 'https://ziontechgroup.com/zion-customer-feedback-analyzer'
    },
    {
      title: 'Zion SEO Optimizer Pro',
      description: 'Advanced SEO optimization tool with AI-powered keyword research and content optimization',
      price: '$89/month',
      features: ['Keyword research', 'Content optimization', 'Rank tracking', 'Competitor analysis', 'Technical SEO', 'Local SEO'],
      icon: Search,
      color: 'from-amber-500 to-yellow-500',
      link: 'https://ziontechgroup.com/zion-seo-optimizer-pro'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development. Transform your business with our innovative technology services." />
        <meta name="keywords" content="AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta property="og:description" content="Leading technology company providing AI solutions, cloud infrastructure, and cybersecurity services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI and IT solutions." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid matrix-bg">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="quantum-particles absolute inset-0"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Transform Your Business with
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
                  Advanced AI & IT Solutions
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Leading technology company providing cutting-edge artificial intelligence, cloud infrastructure, 
                cybersecurity, and custom software development services to businesses worldwide.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link 
                  to="/ai-services"
                  className="futuristic-btn bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group neon-glow-cyan"
                >
                  Explore Our Solutions
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact"
                  className="futuristic-btn inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl neon-glow-purple"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="futuristic-btn inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 glassmorphism"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900 holographic">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations and drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="cyber-card bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 scan-line">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4 energy-pulse`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <Link
                        to="/contact"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 quantum-particles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                IT Infrastructure & Development
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services to build, secure, and optimize your technology infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="cyber-card bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 scan-line">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4 energy-pulse`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <Link
                        to="/contact"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                      >
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Products Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 cyber-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Micro SAAS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions designed to solve specific business challenges with minimal setup.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className="group">
                  <div className="cyber-card bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 scan-line">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg mb-4 energy-pulse`}>
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="text-2xl font-bold text-green-400 mb-4">{product.price}</div>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <Link
                        to="/contact"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                      >
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 matrix-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your project and discover how our AI and IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="futuristic-btn inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl neon-glow-purple"
                >
                  Contact Us Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="futuristic-btn inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 glassmorphism"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
