'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code,
  DollarSign,
  Clock,
  Globe,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  Settings,
  Lock,
  TrendingUp,
  Target,
  Lightbulb,
  Database,
  Cpu,
  Mail,
  Calendar,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  ExternalLink,
  Play,
  Pause,
  RefreshCw,
  Save,
  Share2,
  Copy,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Bell,
  User,
  Users2,
  Building,
  Home,
  Phone,
  Mail as MailIcon,
  MapPin,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Globe as GlobeIcon,
  Smartphone as SmartphoneIcon,
  Laptop,
  Monitor,
  Tablet,
  Watch,
  Headphones,
  Camera,
  Mic,
  Video,
  Image,
  Music,
  Film,
  Book,
  BookOpen,
  File,
  Folder,
  FolderOpen,
  Archive,
  Trash,
  Recycle,
  RotateCcw,
  RotateCw,
  Move,
  Copy as CopyIcon,
  Scissors,
  PenTool,
  Brush,
  Palette,
  Layers,
  Grid,
  Layout,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link as LinkIcon,
  Unlink,
  List,
  ListOrdered,
  Quote,
  Code2,
  Terminal,
  Command,
  Keyboard,
  Mouse,
  Touchpad,
  Wifi,
  Bluetooth,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  Volume2,
  VolumeX,
  Volume1,
  Mute,
  Unmute,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  FastForward,
  Rewind,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Repeat as RepeatIcon,
  Shuffle as ShuffleIcon,
  FastForward as FastForwardIcon,
  Rewind as RewindIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Volume1 as Volume1Icon,
  Mute as MuteIcon,
  Unmute as UnmuteIcon,
  PlayCircle as PlayCircleIcon,
  PauseCircle as PauseCircleIcon,
  StopCircle as StopCircleIcon,
  SkipBack as SkipBackIcon2,
  SkipForward as SkipForwardIcon2,
  Repeat as RepeatIcon2,
  Shuffle as ShuffleIcon2,
  FastForward as FastForwardIcon2,
  Rewind as RewindIcon2
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'communication', name: 'Communication', icon: MessageSquare },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'hr', name: 'HR & Operations', icon: Users }
  ];

  const microSaasServices = [
    // AI Solutions
    {
      id: 'zion-ai-chat',
      name: 'Zion AI Chat Pro',
      category: 'ai',
      description: 'Advanced AI chatbot with natural language processing, multi-language support, and custom training capabilities.',
      features: [
        'Natural Language Processing',
        'Multi-language Support',
        'Custom AI Training',
        'API Integration',
        'Analytics Dashboard',
        '24/7 Support'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['Up to 1,000 conversations', 'Basic AI models', 'Email support'] },
        professional: { price: 79, period: 'month', features: ['Up to 10,000 conversations', 'Advanced AI models', 'Priority support', 'Custom branding'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited conversations', 'Custom AI training', 'Dedicated support', 'White-label solution'] }
      },
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      link: '/zion-chat-ai'
    },
    {
      id: 'zion-content-generator',
      name: 'Zion Content Studio',
      category: 'ai',
      description: 'AI-powered content generation for blogs, social media, emails, and marketing materials with brand consistency.',
      features: [
        'AI Content Generation',
        'Brand Voice Training',
        'SEO Optimization',
        'Multi-format Support',
        'Content Calendar',
        'Performance Analytics'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['Up to 100 articles', 'Basic templates', 'Standard support'] },
        professional: { price: 99, period: 'month', features: ['Up to 500 articles', 'Custom templates', 'Priority support', 'Team collaboration'] },
        enterprise: { price: 249, period: 'month', features: ['Unlimited content', 'Custom AI training', 'Dedicated support', 'API access'] }
      },
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      link: '/zion-content-studio'
    },
    {
      id: 'zion-email-assistant',
      name: 'Zion Email AI Assistant',
      category: 'ai',
      description: 'Intelligent email management with smart replies, scheduling, and automated follow-ups.',
      features: [
        'Smart Email Replies',
        'Auto-scheduling',
        'Follow-up Automation',
        'Email Analytics',
        'Template Library',
        'Calendar Integration'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['Up to 500 emails', 'Basic templates', 'Email support'] },
        professional: { price: 49, period: 'month', features: ['Up to 2,000 emails', 'Advanced templates', 'Priority support', 'Team features'] },
        enterprise: { price: 129, period: 'month', features: ['Unlimited emails', 'Custom templates', 'Dedicated support', 'Advanced analytics'] }
      },
      icon: Mail,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      link: '/zion-ai-email-assistant'
    },

    // Productivity Solutions
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      category: 'productivity',
      description: 'Comprehensive project management with AI-powered insights, resource optimization, and team collaboration.',
      features: [
        'AI Project Insights',
        'Resource Optimization',
        'Team Collaboration',
        'Time Tracking',
        'Risk Assessment',
        'Progress Analytics'
      ],
      pricing: {
        starter: { price: 25, period: 'month', features: ['Up to 5 projects', 'Basic features', 'Email support'] },
        professional: { price: 65, period: 'month', features: ['Up to 25 projects', 'Advanced features', 'Priority support', 'Team management'] },
        enterprise: { price: 159, period: 'month', features: ['Unlimited projects', 'Custom features', 'Dedicated support', 'Advanced analytics'] }
      },
      icon: Target,
      color: 'from-orange-500 to-red-500',
      popular: true,
      link: '/zion-project-master'
    },
    {
      id: 'zion-workflow-automation',
      name: 'Zion Workflow Automation',
      category: 'productivity',
      description: 'Automate repetitive tasks and workflows with visual drag-and-drop automation builder.',
      features: [
        'Visual Workflow Builder',
        '500+ Integrations',
        'Conditional Logic',
        'Error Handling',
        'Performance Monitoring',
        'Custom Triggers'
      ],
      pricing: {
        starter: { price: 35, period: 'month', features: ['Up to 10 workflows', 'Basic integrations', 'Email support'] },
        professional: { price: 85, period: 'month', features: ['Up to 50 workflows', 'Advanced integrations', 'Priority support', 'Team features'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited workflows', 'Custom integrations', 'Dedicated support', 'Advanced monitoring'] }
      },
      icon: Settings,
      color: 'from-indigo-500 to-purple-500',
      popular: false,
      link: '/zion-workflow-automation'
    },

    // Analytics Solutions
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      category: 'analytics',
      description: 'Advanced business intelligence with real-time dashboards, predictive analytics, and custom reporting.',
      features: [
        'Real-time Dashboards',
        'Predictive Analytics',
        'Custom Reports',
        'Data Visualization',
        'Automated Insights',
        'API Integration'
      ],
      pricing: {
        starter: { price: 45, period: 'month', features: ['Up to 5 dashboards', 'Basic reports', 'Email support'] },
        professional: { price: 95, period: 'month', features: ['Up to 25 dashboards', 'Advanced reports', 'Priority support', 'Team collaboration'] },
        enterprise: { price: 229, period: 'month', features: ['Unlimited dashboards', 'Custom reports', 'Dedicated support', 'Advanced analytics'] }
      },
      icon: BarChart3,
      color: 'from-cyan-500 to-blue-500',
      popular: true,
      link: '/zion-analytics-pro'
    },
    {
      id: 'zion-customer-insights',
      name: 'Zion Customer Insights',
      category: 'analytics',
      description: 'Deep customer behavior analysis with sentiment tracking, churn prediction, and personalized recommendations.',
      features: [
        'Behavior Analysis',
        'Sentiment Tracking',
        'Churn Prediction',
        'Personalized Recommendations',
        'Customer Journey Mapping',
        'ROI Tracking'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['Up to 1,000 customers', 'Basic insights', 'Email support'] },
        professional: { price: 89, period: 'month', features: ['Up to 10,000 customers', 'Advanced insights', 'Priority support', 'Team features'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited customers', 'Custom insights', 'Dedicated support', 'Advanced analytics'] }
      },
      icon: Users,
      color: 'from-pink-500 to-rose-500',
      popular: false,
      link: '/zion-customer-insights'
    },

    // Communication Solutions
    {
      id: 'zion-meeting-assistant',
      name: 'Zion Meeting AI Assistant',
      category: 'communication',
      description: 'AI-powered meeting assistant with transcription, action items, and intelligent summaries.',
      features: [
        'Real-time Transcription',
        'Action Item Extraction',
        'Meeting Summaries',
        'Calendar Integration',
        'Follow-up Automation',
        'Multi-language Support'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['Up to 10 hours', 'Basic transcription', 'Email support'] },
        professional: { price: 69, period: 'month', features: ['Up to 50 hours', 'Advanced features', 'Priority support', 'Team features'] },
        enterprise: { price: 159, period: 'month', features: ['Unlimited hours', 'Custom features', 'Dedicated support', 'Advanced analytics'] }
      },
      icon: Video,
      color: 'from-teal-500 to-green-500',
      popular: false,
      link: '/zion-ai-meeting-assistant'
    },

    // Security Solutions
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      category: 'security',
      description: 'Comprehensive security monitoring with threat detection, compliance management, and incident response.',
      features: [
        'Threat Detection',
        'Compliance Management',
        'Incident Response',
        'Security Audits',
        'Real-time Monitoring',
        'Automated Alerts'
      ],
      pricing: {
        starter: { price: 49, period: 'month', features: ['Basic monitoring', 'Email alerts', 'Email support'] },
        professional: { price: 119, period: 'month', features: ['Advanced monitoring', 'Priority alerts', 'Priority support', 'Team management'] },
        enterprise: { price: 279, period: 'month', features: ['Enterprise monitoring', 'Custom alerts', 'Dedicated support', 'Advanced compliance'] }
      },
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      popular: true,
      link: '/zion-security-shield'
    },

    // Development Solutions
    {
      id: 'zion-code-reviewer',
      name: 'Zion AI Code Reviewer',
      category: 'development',
      description: 'AI-powered code review with automated testing, security scanning, and performance optimization suggestions.',
      features: [
        'Automated Code Review',
        'Security Scanning',
        'Performance Analysis',
        'Best Practice Suggestions',
        'Integration Support',
        'Team Collaboration'
      ],
      pricing: {
        starter: { price: 35, period: 'month', features: ['Up to 1,000 lines', 'Basic review', 'Email support'] },
        professional: { price: 85, period: 'month', features: ['Up to 10,000 lines', 'Advanced review', 'Priority support', 'Team features'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited lines', 'Custom review', 'Dedicated support', 'Advanced analytics'] }
      },
      icon: Code,
      color: 'from-violet-500 to-purple-500',
      popular: false,
      link: '/zion-ai-code-reviewer'
    },

    // Marketing Solutions
    {
      id: 'zion-seo-optimizer',
      name: 'Zion SEO Optimizer',
      category: 'marketing',
      description: 'AI-powered SEO optimization with keyword research, content analysis, and ranking tracking.',
      features: [
        'Keyword Research',
        'Content Analysis',
        'Ranking Tracking',
        'Competitor Analysis',
        'Technical SEO Audit',
        'Performance Reports'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['Up to 5 websites', 'Basic features', 'Email support'] },
        professional: { price: 69, period: 'month', features: ['Up to 25 websites', 'Advanced features', 'Priority support', 'Team features'] },
        enterprise: { price: 159, period: 'month', features: ['Unlimited websites', 'Custom features', 'Dedicated support', 'Advanced analytics'] }
      },
      icon: Search,
      color: 'from-yellow-500 to-orange-500',
      popular: false,
      link: '/zion-ai-seo-optimizer'
    },

    // Finance Solutions
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      category: 'finance',
      description: 'Smart invoicing with automated generation, payment tracking, and financial analytics.',
      features: [
        'Automated Invoicing',
        'Payment Tracking',
        'Financial Analytics',
        'Tax Calculations',
        'Multi-currency Support',
        'Client Portal'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['Up to 50 invoices', 'Basic features', 'Email support'] },
        professional: { price: 49, period: 'month', features: ['Up to 500 invoices', 'Advanced features', 'Priority support', 'Team features'] },
        enterprise: { price: 119, period: 'month', features: ['Unlimited invoices', 'Custom features', 'Dedicated support', 'Advanced analytics'] }
      },
      icon: FileText,
      color: 'from-emerald-500 to-green-500',
      popular: false,
      link: '/zion-invoice-genius'
    },

    // HR Solutions
    {
      id: 'zion-recruitment-pro',
      name: 'Zion AI Recruitment Pro',
      category: 'hr',
      description: 'AI-powered recruitment with candidate screening, interview scheduling, and talent analytics.',
      features: [
        'Candidate Screening',
        'Interview Scheduling',
        'Talent Analytics',
        'Job Posting Optimization',
        'Resume Parsing',
        'Team Collaboration'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['Up to 100 candidates', 'Basic features', 'Email support'] },
        professional: { price: 89, period: 'month', features: ['Up to 1,000 candidates', 'Advanced features', 'Priority support', 'Team features'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited candidates', 'Custom features', 'Dedicated support', 'Advanced analytics'] }
      },
      icon: Users2,
      color: 'from-sky-500 to-blue-500',
      popular: false,
      link: '/zion-ai-recruitment-pro'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including AI tools, productivity apps, analytics platforms, and business automation tools with competitive pricing." />
        <meta name="keywords" content="micro saas, AI tools, productivity apps, business software, analytics, automation, pricing" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive micro SAAS solutions including AI tools, productivity apps, analytics platforms, and business automation tools with competitive pricing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion Tech Group Micro SAAS Solutions",
            "description": "Comprehensive micro SAAS solutions including AI tools, productivity apps, analytics platforms, and business automation tools",
            "url": "https://ziontechgroup.com/micro-saas",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "19",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "19",
                "priceCurrency": "USD",
                "billingIncrement": "P1M"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Micro SAAS Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Powerful, affordable micro SAAS tools designed to streamline your business operations and boost productivity
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View All Pricing
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">$19+</div>
                  <div className="text-gray-400 text-sm">Starting Price</div>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400 text-sm">Micro SAAS Tools</div>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">10K+</div>
                  <div className="text-gray-400 text-sm">Active Users</div>
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">99%</div>
                  <div className="text-gray-400 text-sm">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-gray-700/50'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div 
                  key={service.id}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105 relative ${
                    service.popular ? 'ring-2 ring-cyan-400/50' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-gray-500">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">
                      From ${service.pricing.starter.price}
                      <span className="text-sm text-gray-400 font-normal">/{service.pricing.starter.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.pricing.starter.features[0]}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 border border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg font-medium text-sm hover:bg-cyan-500/10 transition-all duration-300 text-center"
                    >
                      Start Trial
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include 14-day free trial and no setup fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-white mb-2">$19</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5 micro SAAS tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    14-day free trial
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/50 rounded-xl p-8 relative ring-2 ring-cyan-400/50">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-white mb-2">$79</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 25 micro SAAS tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Team collaboration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    14-day free trial
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-2">$199</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited micro SAAS tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    White-label solution
                  </li>
                </ul>
                <button className="w-full border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Start your free trial today and experience the power of our micro SAAS solutions. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/about"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;