'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, 
  BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, 
  Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, 
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, 
  Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, 
  Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, 
  Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, 
  Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, 
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Monitor, Headphones, Mic, 
  Image, FileImage, Layers, GitBranch, Terminal, Wifi, HardDrive, Cpu as Processor,
  WifiOff, RefreshCw, Download, Upload, Share2, Copy, Edit, Trash2, Plus, Minus,
  Maximize, Minimize, RotateCcw, RotateCw, Move, Grip, Filter, SortAsc, SortDesc,
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight, X, Check, AlertCircle, Info,
  ExternalLink, Link, Lock as LockIcon, Unlock, Eye as EyeIcon, EyeOff, Bell,
  BellOff, Volume2, VolumeX, Play, Pause, Stop, SkipForward, SkipBack, Repeat,
  Shuffle, Heart as HeartIcon, ThumbsUp, ThumbsDown, MessageCircle, Send,
  Paperclip, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Meh as MehIcon
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and more.',
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
      benefits: [
        'Save 80% time on content creation',
        'Increase engagement by 300%',
        'Professional quality content',
        '24/7 content generation'
      ],
      marketPrice: '$49-99/month',
      rating: 4.9,
      reviews: 1247,
      link: 'https://ziontechgroup.com/ai-content-generator',
      demo: 'https://ziontechgroup.com/demo/ai-content-generator'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      category: 'seo',
      icon: Search,
      price: '$39/month',
      originalPrice: '$69/month',
      description: 'Comprehensive SEO analysis and optimization with AI-powered recommendations.',
      features: [
        'Real-time SEO analysis',
        'Keyword research & tracking',
        'Content optimization',
        'Technical SEO audit',
        'Competitor analysis',
        'Ranking monitoring',
        'Backlink analysis',
        'Local SEO optimization'
      ],
      benefits: [
        'Improve rankings by 200%',
        'Increase organic traffic by 150%',
        'Automated optimization',
        'Competitive advantage'
      ],
      marketPrice: '$69-149/month',
      rating: 4.8,
      reviews: 892,
      link: 'https://ziontechgroup.com/ai-seo-optimizer',
      demo: 'https://ziontechgroup.com/demo/ai-seo-optimizer'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      category: 'analytics',
      icon: BarChart3,
      price: '$49/month',
      originalPrice: '$89/month',
      description: 'Advanced business intelligence with AI-powered insights and predictions.',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Custom dashboards',
        'Automated reporting',
        'Predictive analytics',
        'Data integration',
        'Mobile app access',
        'Team collaboration'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends early',
        'Increase efficiency by 40%',
        'Reduce manual reporting'
      ],
      marketPrice: '$89-199/month',
      rating: 4.9,
      reviews: 1563,
      link: 'https://ziontechgroup.com/ai-analytics-dashboard',
      demo: 'https://ziontechgroup.com/demo/ai-analytics-dashboard'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      category: 'automation',
      icon: Bot,
      price: '$19/month',
      originalPrice: '$39/month',
      description: 'No-code AI chatbot creation with advanced natural language processing.',
      features: [
        'Drag-and-drop builder',
        'Multi-language support',
        'Voice integration',
        'CRM integration',
        'Analytics & insights',
        'Custom branding',
        'API access',
        '24/7 support'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 customer service',
        'Easy setup in minutes',
        'Scalable solution'
      ],
      marketPrice: '$39-79/month',
      rating: 4.7,
      reviews: 743,
      link: 'https://ziontechgroup.com/ai-chatbot-builder',
      demo: 'https://ziontechgroup.com/demo/ai-chatbot-builder'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      category: 'marketing',
      icon: Mail,
      price: '$24/month',
      originalPrice: '$49/month',
      description: 'Intelligent email marketing with AI-powered personalization and automation.',
      features: [
        'AI-powered personalization',
        'Automated campaigns',
        'A/B testing',
        'Advanced segmentation',
        'Email templates',
        'Deliverability optimization',
        'Analytics & reporting',
        'Integration APIs'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Automated personalization',
        'Professional templates'
      ],
      marketPrice: '$49-99/month',
      rating: 4.8,
      reviews: 1024,
      link: 'https://ziontechgroup.com/ai-email-marketing',
      demo: 'https://ziontechgroup.com/demo/ai-email-marketing'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      category: 'social',
      icon: Share2,
      price: '$34/month',
      originalPrice: '$59/month',
      description: 'Automated social media management with AI content creation and scheduling.',
      features: [
        'Multi-platform posting',
        'AI content generation',
        'Optimal timing analysis',
        'Hashtag optimization',
        'Engagement tracking',
        'Competitor analysis',
        'Content calendar',
        'Team collaboration'
      ],
      benefits: [
        'Save 70% time on social media',
        'Increase engagement by 200%',
        'Consistent brand presence',
        'Data-driven strategies'
      ],
      marketPrice: '$59-129/month',
      rating: 4.6,
      reviews: 891,
      link: 'https://ziontechgroup.com/ai-social-media-manager',
      demo: 'https://ziontechgroup.com/demo/ai-social-media-manager'
    },
    {
      id: 'ai-crm-system',
      name: 'AI-Powered CRM',
      category: 'crm',
      icon: Users,
      price: '$39/month',
      originalPrice: '$79/month',
      description: 'Intelligent customer relationship management with AI insights and automation.',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Sales forecasting',
        'Pipeline management',
        'Contact management',
        'Email integration',
        'Mobile app',
        'Custom fields'
      ],
      benefits: [
        'Increase sales by 35%',
        'Improve lead conversion by 50%',
        'Automated workflows',
        'Better customer insights'
      ],
      marketPrice: '$79-199/month',
      rating: 4.9,
      reviews: 1156,
      link: 'https://ziontechgroup.com/ai-crm-system',
      demo: 'https://ziontechgroup.com/demo/ai-crm-system'
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      category: 'finance',
      icon: CreditCard,
      price: '$14/month',
      originalPrice: '$29/month',
      description: 'Automated invoice generation with AI-powered templates and payment tracking.',
      features: [
        'AI-generated templates',
        'Automated invoicing',
        'Payment tracking',
        'Tax calculations',
        'Multi-currency support',
        'Client portal',
        'Recurring invoices',
        'Mobile app'
      ],
      benefits: [
        'Save 90% time on invoicing',
        'Reduce payment delays by 40%',
        'Professional invoices',
        'Automated reminders'
      ],
      marketPrice: '$29-59/month',
      rating: 4.7,
      reviews: 634,
      link: 'https://ziontechgroup.com/ai-invoice-generator',
      demo: 'https://ziontechgroup.com/demo/ai-invoice-generator'
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      category: 'productivity',
      icon: Calendar,
      price: '$29/month',
      originalPrice: '$49/month',
      description: 'Intelligent project management with AI-powered scheduling and resource optimization.',
      features: [
        'AI task scheduling',
        'Resource optimization',
        'Risk assessment',
        'Progress tracking',
        'Team collaboration',
        'Time tracking',
        'Gantt charts',
        'Mobile access'
      ],
      benefits: [
        'Complete projects 25% faster',
        'Reduce project risks by 60%',
        'Better resource utilization',
        'Improved team productivity'
      ],
      marketPrice: '$49-99/month',
      rating: 4.8,
      reviews: 978,
      link: 'https://ziontechgroup.com/ai-project-manager',
      demo: 'https://ziontechgroup.com/demo/ai-project-manager'
    },
    {
      id: 'ai-design-assistant',
      name: 'AI Design Assistant',
      category: 'design',
      icon: Palette,
      price: '$24/month',
      originalPrice: '$49/month',
      description: 'AI-powered design tool for creating logos, graphics, and marketing materials.',
      features: [
        'AI logo generation',
        'Template library',
        'Brand kit creation',
        'Color palette generator',
        'Font pairing suggestions',
        'Export in multiple formats',
        'Collaboration tools',
        'Version control'
      ],
      benefits: [
        'Create designs in minutes',
        'Professional quality output',
        'Consistent brand identity',
        'No design skills required'
      ],
      marketPrice: '$49-99/month',
      rating: 4.6,
      reviews: 756,
      link: 'https://ziontechgroup.com/ai-design-assistant',
      demo: 'https://ziontechgroup.com/demo/ai-design-assistant'
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant',
      category: 'development',
      icon: Code,
      price: '$39/month',
      originalPrice: '$79/month',
      description: 'AI-powered coding assistant with code generation, review, and optimization.',
      features: [
        'Code generation',
        'Bug detection',
        'Code review',
        'Documentation generation',
        'Multi-language support',
        'IDE integration',
        'Version control',
        'Team collaboration'
      ],
      benefits: [
        'Code 50% faster',
        'Reduce bugs by 70%',
        'Improve code quality',
        'Learn best practices'
      ],
      marketPrice: '$79-199/month',
      rating: 4.9,
      reviews: 1342,
      link: 'https://ziontechgroup.com/ai-code-assistant',
      demo: 'https://ziontechgroup.com/demo/ai-code-assistant'
    },
    {
      id: 'ai-data-analyzer',
      name: 'AI Data Analyzer',
      category: 'analytics',
      icon: BarChart,
      price: '$44/month',
      originalPrice: '$89/month',
      description: 'Advanced data analysis with AI-powered insights and automated reporting.',
      features: [
        'Data visualization',
        'Statistical analysis',
        'Predictive modeling',
        'Automated insights',
        'Custom reports',
        'Data integration',
        'Real-time processing',
        'Export capabilities'
      ],
      benefits: [
        'Uncover hidden patterns',
        'Make data-driven decisions',
        'Save 80% analysis time',
        'Advanced statistical models'
      ],
      marketPrice: '$89-199/month',
      rating: 4.8,
      reviews: 1087,
      link: 'https://ziontechgroup.com/ai-data-analyzer',
      demo: 'https://ziontechgroup.com/demo/ai-data-analyzer'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      category: 'support',
      icon: Headphones,
      price: '$19/month',
      originalPrice: '$39/month',
      description: 'Intelligent customer support system with AI-powered ticket routing and responses.',
      features: [
        'AI ticket routing',
        'Automated responses',
        'Knowledge base',
        'Multi-channel support',
        'Sentiment analysis',
        'Performance metrics',
        'Integration APIs',
        'Custom workflows'
      ],
      benefits: [
        'Reduce response time by 80%',
        'Improve customer satisfaction',
        '24/7 support availability',
        'Scalable solution'
      ],
      marketPrice: '$39-79/month',
      rating: 4.7,
      reviews: 923,
      link: 'https://ziontechgroup.com/ai-customer-support',
      demo: 'https://ziontechgroup.com/demo/ai-customer-support'
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      category: 'inventory',
      icon: Package,
      price: '$34/month',
      originalPrice: '$69/month',
      description: 'Smart inventory management with AI-powered demand forecasting and optimization.',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Stock optimization',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Analytics dashboard',
        'Mobile app'
      ],
      benefits: [
        'Reduce stockouts by 60%',
        'Optimize inventory levels',
        'Save 50% on storage costs',
        'Automated procurement'
      ],
      marketPrice: '$69-149/month',
      rating: 4.8,
      reviews: 678,
      link: 'https://ziontechgroup.com/ai-inventory-manager',
      demo: 'https://ziontechgroup.com/demo/ai-inventory-manager'
    },
    {
      id: 'ai-hr-assistant',
      name: 'AI HR Assistant',
      category: 'hr',
      icon: Briefcase,
      price: '$29/month',
      originalPrice: '$59/month',
      description: 'Intelligent HR management with AI-powered recruitment and employee analytics.',
      features: [
        'Resume screening',
        'Candidate matching',
        'Employee analytics',
        'Performance tracking',
        'Leave management',
        'Payroll integration',
        'Compliance monitoring',
        'Mobile access'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality',
        'Better employee insights',
        'Streamlined HR processes'
      ],
      marketPrice: '$59-129/month',
      rating: 4.6,
      reviews: 567,
      link: 'https://ziontechgroup.com/ai-hr-assistant',
      demo: 'https://ziontechgroup.com/demo/ai-hr-assistant'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      category: 'finance',
      icon: Calculator,
      price: '$14/month',
      originalPrice: '$29/month',
      description: 'Smart expense tracking with AI-powered categorization and receipt processing.',
      features: [
        'Receipt scanning',
        'AI categorization',
        'Expense reports',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support',
        'Team management',
        'Mobile app'
      ],
      benefits: [
        'Save 90% time on expense tracking',
        'Accurate categorization',
        'Automated reporting',
        'Tax-ready reports'
      ],
      marketPrice: '$29-59/month',
      rating: 4.7,
      reviews: 445,
      link: 'https://ziontechgroup.com/ai-expense-tracker',
      demo: 'https://ziontechgroup.com/demo/ai-expense-tracker'
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      category: 'automation',
      icon: Mic,
      price: '$24/month',
      originalPrice: '$49/month',
      description: 'Custom voice assistant for business operations and customer interactions.',
      features: [
        'Voice commands',
        'Natural language processing',
        'Multi-language support',
        'Custom integrations',
        'Analytics tracking',
        'Voice training',
        'API access',
        'Mobile app'
      ],
      benefits: [
        'Hands-free operations',
        'Improved accessibility',
        'Faster task completion',
        'Modern user experience'
      ],
      marketPrice: '$49-99/month',
      rating: 4.5,
      reviews: 334,
      link: 'https://ziontechgroup.com/ai-voice-assistant',
      demo: 'https://ziontechgroup.com/demo/ai-voice-assistant'
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processor',
      category: 'productivity',
      icon: FileImage,
      price: '$29/month',
      originalPrice: '$59/month',
      description: 'Intelligent document processing with OCR, data extraction, and workflow automation.',
      features: [
        'OCR processing',
        'Data extraction',
        'Document classification',
        'Workflow automation',
        'Batch processing',
        'API integration',
        'Security compliance',
        'Custom templates'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce manual data entry',
        'Improve accuracy by 95%',
        'Automated workflows'
      ],
      marketPrice: '$59-129/month',
      rating: 4.8,
      reviews: 789,
      link: 'https://ziontechgroup.com/ai-document-processor',
      demo: 'https://ziontechgroup.com/demo/ai-document-processor'
    },
    {
      id: 'ai-landing-page-builder',
      name: 'AI Landing Page Builder',
      category: 'marketing',
      icon: Globe,
      price: '$19/month',
      originalPrice: '$39/month',
      description: 'AI-powered landing page creation with optimization and A/B testing.',
      features: [
        'AI-generated pages',
        'A/B testing',
        'Conversion optimization',
        'Mobile responsive',
        'SEO optimization',
        'Analytics integration',
        'Custom domains',
        'Team collaboration'
      ],
      benefits: [
        'Create pages in minutes',
        'Increase conversions by 200%',
        'No coding required',
        'Professional designs'
      ],
      marketPrice: '$39-79/month',
      rating: 4.7,
      reviews: 623,
      link: 'https://ziontechgroup.com/ai-landing-page-builder',
      demo: 'https://ziontechgroup.com/demo/ai-landing-page-builder'
    },
    {
      id: 'ai-api-builder',
      name: 'AI API Builder',
      category: 'development',
      icon: GitBranch,
      price: '$39/month',
      originalPrice: '$79/month',
      description: 'No-code API development with AI-powered code generation and testing.',
      features: [
        'Visual API builder',
        'AI code generation',
        'Automated testing',
        'Documentation generation',
        'Rate limiting',
        'Authentication',
        'Monitoring & analytics',
        'Deployment automation'
      ],
      benefits: [
        'Build APIs 5x faster',
        'No coding experience needed',
        'Enterprise-grade security',
        'Automated testing'
      ],
      marketPrice: '$79-199/month',
      rating: 4.9,
      reviews: 456,
      link: 'https://ziontechgroup.com/ai-api-builder',
      demo: 'https://ziontechgroup.com/demo/ai-api-builder'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, count: microSAASServices.length },
    { id: 'content', name: 'Content & SEO', icon: FileText, count: microSAASServices.filter(s => s.category === 'content' || s.category === 'seo').length },
    { id: 'analytics', name: 'Analytics & Data', icon: BarChart, count: microSAASServices.filter(s => s.category === 'analytics').length },
    { id: 'marketing', name: 'Marketing', icon: Target, count: microSAASServices.filter(s => s.category === 'marketing' || s.category === 'social').length },
    { id: 'automation', name: 'Automation', icon: Zap, count: microSAASServices.filter(s => s.category === 'automation').length },
    { id: 'productivity', name: 'Productivity', icon: Calendar, count: microSAASServices.filter(s => s.category === 'productivity').length },
    { id: 'development', name: 'Development', icon: Code, count: microSAASServices.filter(s => s.category === 'development').length },
    { id: 'finance', name: 'Finance', icon: CreditCard, count: microSAASServices.filter(s => s.category === 'finance').length },
    { id: 'crm', name: 'CRM & Sales', icon: Users, count: microSAASServices.filter(s => s.category === 'crm').length },
    { id: 'support', name: 'Support', icon: Headphones, count: microSAASServices.filter(s => s.category === 'support').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  const totalSavings = microSAASServices.reduce((total, service) => {
    const original = parseInt(service.originalPrice.replace('$', '').replace('/month', ''));
    const current = parseInt(service.price.replace('$', '').replace('/month', ''));
    return total + (original - current);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="50+ AI-powered micro SAAS solutions starting at $14/month. Save up to 50% with our comprehensive suite of business automation tools." />
        <meta name="keywords" content="micro saas, ai tools, business automation, saas solutions, productivity tools, ai software" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-3d">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            50+ AI-powered micro SAAS tools designed to automate and optimize your business operations. 
            Starting at just $14/month with up to 50% savings.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">AI Tools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-green-400 mb-2">$14</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
              <div className="text-gray-300">Average Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card holographic-border">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-cyan-400'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
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
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 cyber-card hover:bg-white/10 transition-all duration-300 group">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    </div>
                    <div className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      Save {Math.round((1 - parseInt(service.price.replace('$', '').replace('/month', '')) / parseInt(service.originalPrice.replace('$', '').replace('/month', ''))) * 100)}%
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Market price: {service.marketPrice}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                  >
                    Get Started
                  </a>
                  <a
                    href={service.demo}
                    className="bg-transparent border border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-500/10 transition-all"
                  >
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our micro SAAS solutions today and save up to ${totalSavings}/month compared to market prices.
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
    </div>
  );
};

export default MicroSAASPage;