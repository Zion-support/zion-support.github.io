'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { 
  CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, 
  Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, 
  DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, 
  FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, 
  CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, 
  GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, 
  Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, 
  PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, 
  Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, 
  ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location,
  ExternalLink, Play, Download, Upload, RefreshCw, Settings2, Monitor, Laptop,
  Tablet, Headphones, Mic, MicOff, Volume2, VolumeX, Wifi, WifiOff, Battery,
  BatteryCharging, Power, PowerOff, Wrench2, Tool, Hammer2, Screwdriver,
  Cog, Sliders, ToggleLeft, ToggleRight, Switch, RotateCcw, RotateCw,
  Maximize, Minimize, Move, Copy, Trash2, Edit, Save, Plus, Minus, X,
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight, MoreHorizontal,
  MoreVertical, Filter, SortAsc, SortDesc, Search as SearchIcon,
  Bell, BellOff, Eye as EyeIcon, EyeOff, Lock as LockIcon, Unlock,
  Key, Fingerprint, Shield as ShieldIcon, AlertTriangle, Info,
  HelpCircle, QuestionMarkCircle, CheckCircle2, XCircle, AlertCircle,
  PlusCircle, MinusCircle, XCircle as XCircleIcon, CheckCircle as CheckCircleIcon
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      category: 'content',
      icon: FileText,
      price: '$29/month',
      originalPrice: '$49/month',
      description: 'AI-powered content creation for blogs, social media, and marketing materials',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing templates',
        'SEO-optimized content',
        'Multi-language support',
        'Brand voice customization',
        'Content calendar',
        'Plagiarism checker'
      ],
      benefits: [
        'Save 10+ hours per week',
        'Increase content output by 300%',
        'Improve SEO rankings',
        'Consistent brand voice'
      ],
      rating: 4.9,
      reviews: 1247,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-content-generator',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-content-generator'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      category: 'marketing',
      icon: Target,
      price: '$39/month',
      originalPrice: '$69/month',
      description: 'Advanced SEO analysis and optimization with AI-powered recommendations',
      features: [
        'Keyword research & analysis',
        'On-page SEO optimization',
        'Technical SEO audit',
        'Competitor analysis',
        'Content optimization',
        'Link building suggestions',
        'Ranking tracking',
        'Performance reports'
      ],
      benefits: [
        'Improve search rankings by 200%',
        'Increase organic traffic by 150%',
        'Save 15+ hours per week',
        'Automated optimization'
      ],
      rating: 4.8,
      reviews: 892,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-seo-optimizer',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-seo-optimizer'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      category: 'automation',
      icon: Bot,
      price: '$49/month',
      originalPrice: '$89/month',
      description: 'No-code AI chatbot creation for customer support and lead generation',
      features: [
        'Drag-and-drop builder',
        'Multi-channel deployment',
        'Natural language processing',
        'Lead qualification',
        'Integration APIs',
        'Analytics dashboard',
        'Custom training',
        '24/7 availability'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Increase lead conversion by 40%',
        '24/7 customer support',
        'Easy setup in minutes'
      ],
      rating: 4.7,
      reviews: 1563,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-chatbot-builder',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-chatbot-builder'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      category: 'analytics',
      icon: BarChart3,
      price: '$59/month',
      originalPrice: '$99/month',
      description: 'Business intelligence and analytics with AI-powered insights and predictions',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reports',
        'Data integration',
        'Trend analysis',
        'Alert system',
        'Export capabilities'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends early',
        'Save 20+ hours per week',
        'Increase revenue by 25%'
      ],
      rating: 4.9,
      reviews: 734,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-analytics-dashboard',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-analytics-dashboard'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      category: 'marketing',
      icon: Mail,
      price: '$39/month',
      originalPrice: '$69/month',
      description: 'Intelligent email marketing automation with AI-powered personalization',
      features: [
        'AI-powered subject lines',
        'Personalized content',
        'Send time optimization',
        'A/B testing automation',
        'List segmentation',
        'Drip campaigns',
        'Performance analytics',
        'Spam score optimization'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates by 30%',
        'Automated campaign optimization'
      ],
      rating: 4.6,
      reviews: 1023,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-email-marketing',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-email-marketing'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      category: 'marketing',
      icon: Globe,
      price: '$29/month',
      originalPrice: '$49/month',
      description: 'Automated social media management with AI content creation and scheduling',
      features: [
        'Multi-platform posting',
        'AI content generation',
        'Optimal timing',
        'Hashtag optimization',
        'Engagement tracking',
        'Competitor analysis',
        'Influencer identification',
        'Crisis management'
      ],
      benefits: [
        'Save 15+ hours per week',
        'Increase engagement by 80%',
        'Grow followers by 200%',
        'Consistent posting schedule'
      ],
      rating: 4.5,
      reviews: 876,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-social-media-manager',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-social-media-manager'
    },
    {
      id: 'ai-crm-assistant',
      name: 'AI CRM Assistant',
      category: 'sales',
      icon: Users,
      price: '$49/month',
      originalPrice: '$89/month',
      description: 'Intelligent CRM with AI-powered lead scoring and sales automation',
      features: [
        'Lead scoring automation',
        'Sales pipeline management',
        'Email sequence automation',
        'Meeting scheduling',
        'Follow-up reminders',
        'Performance analytics',
        'Integration capabilities',
        'Mobile app'
      ],
      benefits: [
        'Increase sales by 35%',
        'Reduce manual work by 70%',
        'Improve lead quality',
        'Better customer relationships'
      ],
      rating: 4.8,
      reviews: 1456,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-crm-assistant',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-crm-assistant'
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processor',
      category: 'productivity',
      icon: FileText,
      price: '$39/month',
      originalPrice: '$69/month',
      description: 'Intelligent document processing with OCR, data extraction, and automation',
      features: [
        'OCR text recognition',
        'Data extraction',
        'Document classification',
        'Workflow automation',
        'Template creation',
        'Batch processing',
        'API integration',
        'Security compliance'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce errors by 95%',
        'Save 25+ hours per week',
        'Improve data accuracy'
      ],
      rating: 4.7,
      reviews: 623,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-document-processor',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-document-processor'
    },
    {
      id: 'ai-design-studio',
      name: 'AI Design Studio',
      category: 'design',
      icon: Palette,
      price: '$49/month',
      originalPrice: '$89/month',
      description: 'AI-powered design tools for graphics, logos, and marketing materials',
      features: [
        'Logo generation',
        'Banner creation',
        'Social media graphics',
        'Brand kit management',
        'Template library',
        'Color palette generator',
        'Font pairing suggestions',
        'Export in multiple formats'
      ],
      benefits: [
        'Create professional designs instantly',
        'Save 20+ hours per week',
        'Consistent brand identity',
        'No design skills required'
      ],
      rating: 4.6,
      reviews: 987,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-design-studio',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-design-studio'
    },
    {
      id: 'ai-video-creator',
      name: 'AI Video Creator',
      category: 'content',
      icon: Video,
      price: '$59/month',
      originalPrice: '$99/month',
      description: 'Automated video creation with AI-powered editing and optimization',
      features: [
        'Script generation',
        'Voice synthesis',
        'Auto-editing',
        'Template library',
        'Multi-format export',
        'Subtitle generation',
        'Thumbnail creation',
        'Social media optimization'
      ],
      benefits: [
        'Create videos in minutes',
        'Reduce production costs by 80%',
        'Increase engagement by 150%',
        'Professional quality output'
      ],
      rating: 4.8,
      reviews: 756,
      isPopular: true,
      isNew: true,
      demoUrl: 'https://demo.ziontechgroup.com/ai-video-creator',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-video-creator'
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant',
      category: 'development',
      icon: Code,
      price: '$39/month',
      originalPrice: '$69/month',
      description: 'AI-powered coding assistant with code generation, review, and optimization',
      features: [
        'Code generation',
        'Bug detection',
        'Code review',
        'Documentation generation',
        'Test case creation',
        'Performance optimization',
        'Security scanning',
        'Multi-language support'
      ],
      benefits: [
        'Code 3x faster',
        'Reduce bugs by 60%',
        'Improve code quality',
        'Learn best practices'
      ],
      rating: 4.9,
      reviews: 1834,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-code-assistant',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-code-assistant'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      category: 'finance',
      icon: Calculator,
      price: '$19/month',
      originalPrice: '$39/month',
      description: 'Smart expense tracking with AI categorization and financial insights',
      features: [
        'Receipt scanning',
        'Auto-categorization',
        'Expense reports',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support',
        'Team collaboration',
        'Integration with accounting software'
      ],
      benefits: [
        'Save 10+ hours per month',
        'Improve expense accuracy',
        'Better financial visibility',
        'Simplified tax filing'
      ],
      rating: 4.5,
      reviews: 445,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-expense-tracker',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-expense-tracker'
    },
    {
      id: 'ai-task-manager',
      name: 'AI Task Manager Pro',
      category: 'productivity',
      icon: CheckCircle,
      price: '$29/month',
      originalPrice: '$49/month',
      description: 'Intelligent task management with AI prioritization and automation',
      features: [
        'AI task prioritization',
        'Smart scheduling',
        'Progress tracking',
        'Team collaboration',
        'Time tracking',
        'Deadline alerts',
        'Workload balancing',
        'Performance analytics'
      ],
      benefits: [
        'Increase productivity by 40%',
        'Reduce missed deadlines by 80%',
        'Better work-life balance',
        'Improved team coordination'
      ],
      rating: 4.7,
      reviews: 1234,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-task-manager',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-task-manager'
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights',
      category: 'analytics',
      icon: Eye,
      price: '$49/month',
      originalPrice: '$89/month',
      description: 'Deep customer analytics with AI-powered insights and recommendations',
      features: [
        'Customer segmentation',
        'Behavior analysis',
        'Churn prediction',
        'Lifetime value calculation',
        'Personalization recommendations',
        'Sentiment analysis',
        'Trend identification',
        'Actionable insights'
      ],
      benefits: [
        'Increase customer retention by 30%',
        'Boost lifetime value by 50%',
        'Improve customer satisfaction',
        'Data-driven decisions'
      ],
      rating: 4.8,
      reviews: 567,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-customer-insights',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-customer-insights'
    },
    {
      id: 'ai-security-monitor',
      name: 'AI Security Monitor',
      category: 'security',
      icon: Shield,
      price: '$79/month',
      originalPrice: '$149/month',
      description: 'AI-powered security monitoring and threat detection for businesses',
      features: [
        'Real-time threat detection',
        'Anomaly detection',
        'Automated response',
        'Compliance monitoring',
        'Incident reporting',
        'Security recommendations',
        'Multi-platform support',
        '24/7 monitoring'
      ],
      benefits: [
        'Prevent security breaches',
        'Reduce security costs by 50%',
        'Comply with regulations',
        'Peace of mind'
      ],
      rating: 4.9,
      reviews: 892,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-security-monitor',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-security-monitor'
    },
    {
      id: 'ai-music-composer',
      name: 'AI Music Composer',
      category: 'creative',
      icon: Music,
      price: '$39/month',
      originalPrice: '$69/month',
      description: 'AI-powered music composition and production for content creators',
      features: [
        'Genre-based composition',
        'Mood-based generation',
        'Instrument selection',
        'Tempo adjustment',
        'Royalty-free music',
        'Custom length',
        'Export in multiple formats',
        'Commercial license'
      ],
      benefits: [
        'Create original music instantly',
        'Save thousands on licensing',
        'Perfect for content creators',
        'Professional quality'
      ],
      rating: 4.6,
      reviews: 234,
      isPopular: false,
      isNew: true,
      demoUrl: 'https://demo.ziontechgroup.com/ai-music-composer',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-music-composer'
    },
    {
      id: 'ai-voice-cloner',
      name: 'AI Voice Cloner',
      category: 'content',
      icon: Mic,
      price: '$59/month',
      originalPrice: '$99/month',
      description: 'High-quality voice cloning and text-to-speech for various applications',
      features: [
        'Voice cloning from samples',
        'Text-to-speech generation',
        'Multiple voice options',
        'Emotion control',
        'Language support',
        'Audio editing',
        'Batch processing',
        'API integration'
      ],
      benefits: [
        'Create custom voiceovers',
        'Reduce voice talent costs',
        'Scale content production',
        'Consistent brand voice'
      ],
      rating: 4.7,
      reviews: 456,
      isPopular: false,
      isNew: true,
      demoUrl: 'https://demo.ziontechgroup.com/ai-voice-cloner',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-voice-cloner'
    },
    {
      id: 'ai-3d-generator',
      name: 'AI 3D Generator',
      category: 'design',
      icon: Cube,
      price: '$79/month',
      originalPrice: '$149/month',
      description: 'AI-powered 3D model generation and rendering for various industries',
      features: [
        '3D model generation',
        'Texture creation',
        'Lighting optimization',
        'Animation support',
        'Multiple export formats',
        'VR/AR compatibility',
        'Batch processing',
        'Cloud rendering'
      ],
      benefits: [
        'Create 3D content without skills',
        'Reduce production time by 90%',
        'Perfect for e-commerce',
        'Professional quality output'
      ],
      rating: 4.8,
      reviews: 123,
      isPopular: false,
      isNew: true,
      demoUrl: 'https://demo.ziontechgroup.com/ai-3d-generator',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-3d-generator'
    },
    {
      id: 'ai-fitness-coach',
      name: 'AI Fitness Coach',
      category: 'health',
      icon: Heart,
      price: '$29/month',
      originalPrice: '$49/month',
      description: 'Personalized AI fitness coaching with workout plans and nutrition advice',
      features: [
        'Personalized workout plans',
        'Nutrition tracking',
        'Progress monitoring',
        'Form analysis',
        'Goal setting',
        'Motivational coaching',
        'Community features',
        'Wearable integration'
      ],
      benefits: [
        'Achieve fitness goals faster',
        'Personalized guidance',
        'Track progress effectively',
        'Stay motivated'
      ],
      rating: 4.6,
      reviews: 789,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-fitness-coach',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-fitness-coach'
    },
    {
      id: 'ai-language-tutor',
      name: 'AI Language Tutor',
      category: 'education',
      icon: GraduationCap,
      price: '$39/month',
      originalPrice: '$69/month',
      description: 'AI-powered language learning with personalized lessons and practice',
      features: [
        'Personalized curriculum',
        'Speech recognition',
        'Conversation practice',
        'Grammar correction',
        'Vocabulary building',
        'Progress tracking',
        'Multiple languages',
        'Mobile app'
      ],
      benefits: [
        'Learn languages 3x faster',
        'Personalized approach',
        'Practice anytime, anywhere',
        'Native speaker quality'
      ],
      rating: 4.7,
      reviews: 1456,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-language-tutor',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-language-tutor'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3, count: microSAASServices.length },
    { id: 'content', name: 'Content Creation', icon: FileText, count: microSAASServices.filter(s => s.category === 'content').length },
    { id: 'marketing', name: 'Marketing', icon: Target, count: microSAASServices.filter(s => s.category === 'marketing').length },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, count: microSAASServices.filter(s => s.category === 'analytics').length },
    { id: 'automation', name: 'Automation', icon: Bot, count: microSAASServices.filter(s => s.category === 'automation').length },
    { id: 'sales', name: 'Sales', icon: Users, count: microSAASServices.filter(s => s.category === 'sales').length },
    { id: 'productivity', name: 'Productivity', icon: CheckCircle, count: microSAASServices.filter(s => s.category === 'productivity').length },
    { id: 'design', name: 'Design', icon: Palette, count: microSAASServices.filter(s => s.category === 'design').length },
    { id: 'development', name: 'Development', icon: Code, count: microSAASServices.filter(s => s.category === 'development').length },
    { id: 'finance', name: 'Finance', icon: Calculator, count: microSAASServices.filter(s => s.category === 'finance').length },
    { id: 'security', name: 'Security', icon: Shield, count: microSAASServices.filter(s => s.category === 'security').length },
    { id: 'creative', name: 'Creative', icon: Music, count: microSAASServices.filter(s => s.category === 'creative').length },
    { id: 'health', name: 'Health', icon: Heart, count: microSAASServices.filter(s => s.category === 'health').length },
    { id: 'education', name: 'Education', icon: GraduationCap, count: microSAASServices.filter(s => s.category === 'education').length }
  ];

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularServices = microSAASServices.filter(service => service.isPopular);
  const newServices = microSAASServices.filter(service => service.isNew);

  return (
    <>
      <SEOOptimizer
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Discover 50+ AI-powered micro SAAS solutions designed to automate and optimize your business processes. From content creation to analytics, we have the tools you need."
        keywords={['micro saas', 'ai tools', 'business automation', 'productivity tools', 'ai software']}
        canonicalUrl="https://ziontechgroup.com/micro-saas"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
                50+ AI-Powered Tools for Modern Businesses
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
                From content creation to analytics, we have the tools you need to automate, optimize, and scale.
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative mb-6">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SAAS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Popular Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Most Popular Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {popularServices.map((service) => (
                <div key={service.id} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">({service.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                      {service.isNew && <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-400 font-medium">Save {Math.round((1 - parseFloat(service.price.replace('$', '')) / parseFloat(service.originalPrice.replace('$', ''))) * 100}%</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center"
                    >
                      <Play className="w-4 h-4 inline mr-2" />
                      Demo
                    </a>
                    <a
                      href={service.signupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all text-center"
                    >
                      <ExternalLink className="w-4 h-4 inline mr-2" />
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              All Micro SAAS Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                            ))}
                          </div>
                          <span className="text-xs text-gray-400">({service.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {service.isPopular && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>}
                      {service.isNew && <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xl font-bold text-purple-400">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-400 font-medium">Save {Math.round((1 - parseFloat(service.price.replace('$', '')) / parseFloat(service.originalPrice.replace('$', ''))) * 100}%</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center"
                    >
                      <Play className="w-3 h-3 inline mr-1" />
                      Demo
                    </a>
                    <a
                      href={service.signupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-all text-center"
                    >
                      <ExternalLink className="w-3 h-3 inline mr-1" />
                      Start
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to automate and optimize their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MicroSAASPage;