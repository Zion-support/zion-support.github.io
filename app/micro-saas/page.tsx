'use client';
import React, { useState, useEffect, Suspense, lazy, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, 
  Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, 
  Settings, Calendar, CheckSquare, FileText, Search, Bot, Palette, 
  Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, 
  Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, 
  Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, 
  Clock3, Compass, PieChart, TrendingDown, Activity, Phone, Mail, MapPin,
  CheckCircle, Award, DollarSign, Clock, Globe as World, User, Users as People,
  MessageSquare, Eye, Zap as Lightning, Target as Crosshair, Shield as Security,
  Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon,
  Mail as MailIcon, MapPin as Location, DollarSign as Dollar, Clock as Time,
  Grid, Share2
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, color: 'text-cyan-400' },
    { id: 'ai', name: 'AI-Powered', icon: Brain, color: 'text-purple-400' },
    { id: 'business', name: 'Business Tools', icon: Briefcase, color: 'text-blue-400' },
    { id: 'marketing', name: 'Marketing', icon: Target, color: 'text-pink-400' },
    { id: 'productivity', name: 'Productivity', icon: Zap, color: 'text-green-400' },
    { id: 'analytics', name: 'Analytics', icon: BarChart, color: 'text-orange-400' },
    { id: 'communication', name: 'Communication', icon: MessageSquare, color: 'text-indigo-400' },
    { id: 'development', name: 'Development', icon: Code, color: 'text-yellow-400' }
  ];

  const microSAASServices = [
    // AI-Powered Services
    {
      id: 'ai-content-writer',
      name: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation for blogs, articles, social media, and marketing copy with 50+ templates and multi-language support.',
      icon: FileText,
      category: 'ai',
      price: 29,
      period: 'month',
      features: ['50+ Content Templates', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training', 'Plagiarism Checker', 'Content Calendar'],
      popular: true,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, lead generation, and sales automation with no coding required.',
      icon: Bot,
      category: 'ai',
      price: 49,
      period: 'month',
      features: ['No-Code Builder', 'Multi-channel Support', 'Analytics Dashboard', 'Custom Integrations', 'Voice & Text Support', 'A/B Testing'],
      popular: false,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Generator',
      description: 'Generate high-quality images, logos, and graphics using advanced AI with commercial licensing included.',
      icon: Camera,
      category: 'ai',
      price: 39,
      period: 'month',
      features: ['High-Resolution Images', 'Commercial License', 'Style Transfer', 'Background Removal', 'Logo Generation', 'Batch Processing'],
      popular: true,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      id: 'ai-voice-cloner',
      name: 'AI Voice Cloner',
      description: 'Create realistic voice clones for podcasts, videos, and presentations with natural speech synthesis.',
      icon: Music,
      category: 'ai',
      price: 79,
      period: 'month',
      features: ['Voice Cloning', 'Multiple Languages', 'Emotion Control', 'Audio Editing', 'API Access', 'Commercial Use'],
      popular: false,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      id: 'ai-video-generator',
      name: 'AI Video Generator',
      description: 'Create professional videos from text, images, or scripts with AI-powered editing and effects.',
      icon: Video,
      category: 'ai',
      price: 99,
      period: 'month',
      features: ['Text-to-Video', 'Auto-Editing', 'Stock Footage', 'Voice Synthesis', 'Multiple Formats', 'HD Export'],
      popular: true,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },

    // Business Tools
    {
      id: 'ai-crm',
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights, lead scoring, and automated follow-ups.',
      icon: Users,
      category: 'business',
      price: 59,
      period: 'month',
      features: ['Lead Scoring', 'Auto Follow-ups', 'Sales Forecasting', 'Email Integration', 'Mobile App', 'Custom Fields'],
      popular: true,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'ai-invoice-generator',
      name: 'Smart Invoice Generator',
      description: 'Automated invoice creation with AI-powered data extraction, payment tracking, and tax calculations.',
      icon: FileText,
      category: 'business',
      price: 19,
      period: 'month',
      features: ['Auto Data Extraction', 'Payment Tracking', 'Tax Calculations', 'Multi-currency', 'Recurring Invoices', 'PDF Export'],
      popular: false,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Intelligent expense management with receipt scanning, categorization, and budget insights.',
      icon: Calculator,
      category: 'business',
      price: 25,
      period: 'month',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Alerts', 'Tax Preparation', 'Team Collaboration', 'Export Options'],
      popular: false,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Smart project management with AI-powered task prioritization, resource allocation, and deadline predictions.',
      icon: CheckSquare,
      category: 'business',
      price: 45,
      period: 'month',
      features: ['Task Prioritization', 'Resource Allocation', 'Deadline Predictions', 'Team Collaboration', 'Progress Tracking', 'Risk Analysis'],
      popular: true,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'ai-hr-assistant',
      name: 'AI HR Assistant',
      description: 'Automated HR processes including resume screening, interview scheduling, and employee onboarding.',
      icon: Users,
      category: 'business',
      price: 69,
      period: 'month',
      features: ['Resume Screening', 'Interview Scheduling', 'Employee Onboarding', 'Performance Tracking', 'Compliance Management', 'Analytics'],
      popular: false,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },

    // Marketing Tools
    {
      id: 'ai-email-marketer',
      name: 'AI Email Marketer',
      description: 'Intelligent email marketing with AI-powered subject lines, content optimization, and send time optimization.',
      icon: Mail,
      category: 'marketing',
      price: 35,
      period: 'month',
      features: ['Subject Line AI', 'Content Optimization', 'Send Time Optimization', 'A/B Testing', 'Segmentation', 'Analytics'],
      popular: true,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media posting, content creation, and engagement tracking across all platforms.',
      icon: Share2,
      category: 'marketing',
      price: 49,
      period: 'month',
      features: ['Auto Posting', 'Content Creation', 'Engagement Tracking', 'Hashtag Optimization', 'Analytics Dashboard', 'Multi-platform'],
      popular: true,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Advanced SEO analysis and optimization with AI-powered keyword research and content suggestions.',
      icon: Search,
      category: 'marketing',
      price: 39,
      period: 'month',
      features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking', 'Reports'],
      popular: false,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      id: 'ai-ad-optimizer',
      name: 'AI Ad Optimizer',
      description: 'Automated ad campaign optimization for Google, Facebook, and LinkedIn with AI-powered bidding strategies.',
      icon: Target,
      category: 'marketing',
      price: 79,
      period: 'month',
      features: ['Multi-platform Ads', 'AI Bidding', 'Ad Creation', 'Performance Tracking', 'Budget Optimization', 'ROI Analysis'],
      popular: true,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },

    // Productivity Tools
    {
      id: 'ai-scheduler',
      name: 'AI Smart Scheduler',
      description: 'Intelligent scheduling assistant that finds optimal meeting times and manages calendar conflicts.',
      icon: Calendar,
      category: 'productivity',
      price: 29,
      period: 'month',
      features: ['Smart Scheduling', 'Conflict Resolution', 'Time Zone Handling', 'Meeting Optimization', 'Calendar Sync', 'Reminders'],
      popular: false,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      id: 'ai-time-tracker',
      name: 'AI Time Tracker',
      description: 'Automatic time tracking with AI-powered activity recognition and productivity insights.',
      icon: Clock,
      category: 'productivity',
      price: 19,
      period: 'month',
      features: ['Auto Time Tracking', 'Activity Recognition', 'Productivity Insights', 'Team Reports', 'Integration', 'Mobile App'],
      popular: false,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      id: 'ai-note-taker',
      name: 'AI Note Taker',
      description: 'Intelligent note-taking with voice-to-text, automatic summarization, and smart organization.',
      icon: BookOpen,
      category: 'productivity',
      price: 25,
      period: 'month',
      features: ['Voice-to-Text', 'Auto Summarization', 'Smart Organization', 'Search & Tag', 'Sync Across Devices', 'Export Options'],
      popular: true,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      id: 'ai-task-manager',
      name: 'AI Task Manager',
      description: 'Smart task management with AI-powered prioritization, deadline predictions, and workflow optimization.',
      icon: CheckSquare,
      category: 'productivity',
      price: 35,
      period: 'month',
      features: ['Smart Prioritization', 'Deadline Predictions', 'Workflow Optimization', 'Team Collaboration', 'Progress Tracking', 'Integrations'],
      popular: true,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },

    // Analytics Tools
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive business analytics with AI-powered insights, predictions, and automated reporting.',
      icon: BarChart,
      category: 'analytics',
      price: 69,
      period: 'month',
      features: ['Real-time Analytics', 'AI Insights', 'Predictive Analytics', 'Custom Dashboards', 'Automated Reports', 'Data Visualization'],
      popular: true,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      id: 'ai-data-visualizer',
      name: 'AI Data Visualizer',
      description: 'Transform complex data into beautiful, interactive visualizations with AI-powered chart recommendations.',
      icon: PieChart,
      category: 'analytics',
      price: 45,
      period: 'month',
      features: ['Auto Chart Selection', 'Interactive Visualizations', 'Data Import', 'Custom Themes', 'Export Options', 'Collaboration'],
      popular: false,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics',
      description: 'Advanced predictive modeling for sales forecasting, customer behavior, and business trends.',
      icon: TrendingUp,
      category: 'analytics',
      price: 89,
      period: 'month',
      features: ['Sales Forecasting', 'Customer Behavior', 'Trend Analysis', 'Risk Assessment', 'Custom Models', 'API Access'],
      popular: true,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },

    // Communication Tools
    {
      id: 'ai-translator',
      name: 'AI Translator Pro',
      description: 'Real-time translation for 100+ languages with context-aware accuracy and voice translation.',
      icon: Globe,
      category: 'communication',
      price: 39,
      period: 'month',
      features: ['100+ Languages', 'Voice Translation', 'Context Awareness', 'Document Translation', 'API Access', 'Offline Mode'],
      popular: false,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },
    {
      id: 'ai-meeting-assistant',
      name: 'AI Meeting Assistant',
      description: 'Intelligent meeting transcription, summarization, and action item extraction with real-time insights.',
      icon: MessageSquare,
      category: 'communication',
      price: 59,
      period: 'month',
      features: ['Live Transcription', 'Auto Summarization', 'Action Items', 'Speaker Identification', 'Integration', 'Search & Archive'],
      popular: true,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },
    {
      id: 'ai-email-assistant',
      name: 'AI Email Assistant',
      description: 'Smart email management with auto-responses, priority sorting, and intelligent suggestions.',
      icon: Mail,
      category: 'communication',
      price: 29,
      period: 'month',
      features: ['Auto Responses', 'Priority Sorting', 'Smart Suggestions', 'Email Templates', 'Scheduling', 'Integration'],
      popular: false,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },

    // Development Tools
    {
      id: 'ai-code-generator',
      name: 'AI Code Generator',
      description: 'Generate code in multiple languages from natural language descriptions with intelligent suggestions.',
      icon: Code,
      category: 'development',
      price: 79,
      period: 'month',
      features: ['Multi-language Support', 'Natural Language Input', 'Code Suggestions', 'Bug Detection', 'Documentation', 'API Access'],
      popular: true,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      id: 'ai-api-builder',
      name: 'AI API Builder',
      description: 'Create and deploy APIs without coding using AI-powered interface design and automatic documentation.',
      icon: Settings,
      category: 'development',
      price: 99,
      period: 'month',
      features: ['No-Code API Creation', 'Auto Documentation', 'Testing Tools', 'Deployment', 'Monitoring', 'Scalability'],
      popular: true,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      id: 'ai-database-manager',
      name: 'AI Database Manager',
      description: 'Intelligent database management with automated optimization, query suggestions, and performance monitoring.',
      icon: Database,
      category: 'development',
      price: 69,
      period: 'month',
      features: ['Query Optimization', 'Performance Monitoring', 'Auto Indexing', 'Backup Management', 'Security Scanning', 'Analytics'],
      popular: false,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'micro_saas_phone',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network particle-system">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-flicker-enhanced cyber-text-enhanced">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow-enhanced">
            Powerful AI-driven tools for modern businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Choose from 30+ ready-to-use applications designed to streamline your workflow, 
            boost productivity, and drive growth. All tools include AI-powered features and 
            are ready to deploy in minutes.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
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

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
                }`}
              >
                <category.icon className={`w-5 h-5 ${selectedCategory === category.id ? 'text-white' : category.color}`} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card-enhanced holographic-card quantum-field p-6 hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg ${service.bgColor} ${service.borderColor} border flex items-center justify-center`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    ${service.price}
                    <span className="text-lg text-gray-400">/{service.period}</span>
                  </div>
                  <div className="text-sm text-gray-400">per month</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <a
                    href={`/contact?service=${service.id}`}
                    className="cyber-button w-full text-center inline-block"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-gray-300 text-lg">Choose the perfect plan for your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">
                $99<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 Micro SAAS tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard integrations
                </li>
              </ul>
              <a href="/contact?plan=starter" className="cyber-button w-full text-center">
                Choose Starter
              </a>
            </div>

            <div className="cyber-card hologram-card p-8 text-center ring-2 ring-cyan-400/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">
                $199<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 15 Micro SAAS tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Analytics dashboard
                </li>
              </ul>
              <a href="/contact?plan=professional" className="cyber-button w-full text-center">
                Choose Professional
              </a>
            </div>

            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">
                $399<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited Micro SAAS tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Premium AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label options
                </li>
              </ul>
              <a href="/contact?plan=enterprise" className="cyber-button w-full text-center">
                Choose Enterprise
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us today to discuss your specific needs and get a customized solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button"
              >
                📞 Call (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="cyber-button">
                ✉️ Email Us
              </a>
              <a href="/contact" className="cyber-button">
                💬 Contact Form
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSAASPage;