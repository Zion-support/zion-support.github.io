'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, Cpu, Eye, MessageSquare, BarChart, Zap, Shield, Globe, 
  ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, Clock,
  TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone,
  Settings, FileText, Search, Bot, Palette, Camera, Music, Video,
  Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane,
  Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase,
  Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar,
  Clock3, Compass, PieChart, TrendingDown, Activity, Target, Sparkles,
  Headphones, Monitor, Laptop, Printer, HardDrive, Wifi, Server,
  Network, Router, Key, AlertTriangle, Info, HelpCircle, ExternalLink,
  ChevronRight, ChevronDown, Plus, Minus, X, Menu, Maximize, Minimize,
  RotateCcw, RotateCw, Move, Copy, Edit, Trash2, Save, Share, Link,
  Unlink, Unlock, Volume2, VolumeX, Mic, MicOff, VideoOff, CameraOff,
  Image, ImageOff, File, Folder, FolderOpen, Archive, Inbox, Outbox,
  Send, MailOpen, Reply, Forward, Flag, Bookmark, Tag, Tags, Hash,
  AtSign, DollarSign, Percent, Timer, Layers, Workflow, Download,
  Upload, RefreshCw, Play, Pause, Square, Circle, Triangle, Hexagon,
  Octagon, Diamond, ThumbsUp, ThumbsDown, AlertCircle, ExclamationTriangle,
  ExclamationCircle, QuestionMarkCircle, Lightbulb, Bulb, Sun, Moon,
  CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Flame, Snowflake,
  Thunder, Rainbow, Sunrise, Sunset, Compass as CompassIcon, Map,
  Navigation as NavIcon, Route, Store, Warehouse, Hospital, School,
  University, Church, Mosque, Synagogue, Temple, Bank, Wallet, Coins,
  Banknote, Receipt, LineChart, ArrowUp, ArrowDown, ArrowLeft, ArrowUpRight,
  ArrowDownRight, ArrowUpLeft, ArrowDownLeft, ArrowUpDown, ArrowLeftRight,
  ArrowRightLeft, ChevronUp, ChevronLeft, DoubleChevronUp, DoubleChevronDown,
  DoubleChevronLeft, DoubleChevronRight, ChevronsUp, ChevronsDown, ChevronsLeft,
  ChevronsRight, MoveUp, MoveDown, MoveLeft, MoveRight, RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon, Grid3X3, ShoppingBag, ShoppingBasket, Cart,
  Basket, Bag, Package, Box, Container, Truck, Bus, Bike, Scooter,
  Motorcycle, Van, Taxi, Ambulance, FireTruck, PoliceCar
} from 'lucide-react';

export default function AIServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const aiServices = useMemo(() => [
    // AI Marketing & Sales
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation Platform',
      description: 'Revolutionary AI-powered marketing automation that increases conversion rates by 300% and reduces costs by 50%.',
      category: 'marketing',
      price: { starting: 2999, period: 'month' },
      rating: 4.9,
      reviews: 1847,
      features: [
        'Predictive customer behavior analysis',
        'Automated campaign optimization',
        'Real-time personalization engine',
        'Cross-channel campaign management',
        'Advanced ROI tracking and analytics',
        'AI-powered content generation',
        'Lead scoring and qualification',
        'Email sequence optimization'
      ],
      icon: Target,
      popular: true,
      color: 'from-pink-500 to-purple-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      textColor: 'text-pink-400',
      stats: { conversion: '+300%', savings: '50%', clients: '500+' },
      demo: 'https://demo.ziontechgroup.com/ai-marketing',
      docs: 'https://docs.ziontechgroup.com/ai-marketing',
      benefits: [
        '300% increase in conversion rates',
        '50% reduction in marketing costs',
        'Real-time campaign optimization',
        'Predictive customer insights'
      ]
    },
    {
      id: 'ai-sales-optimization',
      name: 'AI Sales Optimization Suite',
      description: 'Intelligent sales automation that boosts revenue by 250% through predictive analytics and smart lead management.',
      category: 'sales',
      price: { starting: 2499, period: 'month' },
      rating: 4.8,
      reviews: 1234,
      features: [
        'Predictive lead scoring',
        'Automated follow-up sequences',
        'Sales forecasting with 95% accuracy',
        'Dynamic pricing optimization',
        'Customer lifetime value prediction',
        'Sales performance analytics',
        'Automated proposal generation',
        'CRM integration and sync'
      ],
      icon: TrendingUp,
      popular: true,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400',
      stats: { revenue: '+250%', accuracy: '95%', deals: '1000+' },
      demo: 'https://demo.ziontechgroup.com/ai-sales',
      docs: 'https://docs.ziontechgroup.com/ai-sales',
      benefits: [
        '250% increase in sales revenue',
        '95% accurate sales forecasting',
        'Automated lead qualification',
        'Smart pricing optimization'
      ]
    },
    // AI Analytics & Intelligence
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence Platform',
      description: 'Advanced AI-powered analytics platform that transforms raw data into actionable business insights with 99.9% accuracy.',
      category: 'analytics',
      price: { starting: 3999, period: 'month' },
      rating: 4.9,
      reviews: 2156,
      features: [
        'Real-time data processing and analysis',
        'Predictive modeling and forecasting',
        'Custom dashboard creation',
        'Automated report generation',
        'Natural language query interface',
        'Anomaly detection and alerts',
        'Multi-source data integration',
        'Advanced visualization tools'
      ],
      icon: BarChart,
      popular: true,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      stats: { accuracy: '99.9%', insights: '10M+', users: '2000+' },
      demo: 'https://demo.ziontechgroup.com/ai-analytics',
      docs: 'https://docs.ziontechgroup.com/ai-analytics',
      benefits: [
        '99.9% data accuracy guarantee',
        'Real-time business insights',
        'Predictive analytics capabilities',
        'Automated decision support'
      ]
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics Engine',
      description: 'Cutting-edge predictive analytics that forecasts business trends with 98% accuracy and identifies opportunities before competitors.',
      category: 'analytics',
      price: { starting: 3499, period: 'month' },
      rating: 4.7,
      reviews: 987,
      features: [
        'Market trend prediction',
        'Customer behavior forecasting',
        'Demand planning optimization',
        'Risk assessment and mitigation',
        'Competitive analysis automation',
        'Scenario modeling and simulation',
        'Real-time alert system',
        'Integration with existing systems'
      ],
      icon: Activity,
      popular: false,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      stats: { accuracy: '98%', predictions: '1M+', savings: '40%' },
      demo: 'https://demo.ziontechgroup.com/ai-predictive',
      docs: 'https://docs.ziontechgroup.com/ai-predictive',
      benefits: [
        '98% prediction accuracy',
        'Early opportunity identification',
        'Risk mitigation strategies',
        'Competitive advantage insights'
      ]
    },
    // AI Content & Creative
    {
      id: 'ai-content-studio',
      name: 'AI Content Studio Pro',
      description: 'Revolutionary AI content creation platform that generates high-quality content 10x faster than traditional methods.',
      category: 'content',
      price: { starting: 1999, period: 'month' },
      rating: 4.8,
      reviews: 3456,
      features: [
        'Multi-format content generation',
        'SEO-optimized content creation',
        'Brand voice consistency training',
        'Content calendar automation',
        'Performance analytics and optimization',
        'Multi-language content support',
        'Visual content generation',
        'Content plagiarism detection'
      ],
      icon: FileText,
      popular: true,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-400',
      stats: { speed: '10x', quality: '95%', content: '1M+' },
      demo: 'https://demo.ziontechgroup.com/ai-content',
      docs: 'https://docs.ziontechgroup.com/ai-content',
      benefits: [
        '10x faster content creation',
        '95% content quality score',
        'SEO optimization built-in',
        'Multi-language support'
      ]
    },
    {
      id: 'ai-video-generation',
      name: 'AI Video Generation Suite',
      description: 'Professional AI video creation platform that produces studio-quality videos in minutes, not days.',
      category: 'content',
      price: { starting: 2999, period: 'month' },
      rating: 4.9,
      reviews: 1876,
      features: [
        'Text-to-video generation',
        'Voice synthesis and dubbing',
        'Automatic scene transitions',
        'Background music generation',
        'Multi-resolution output',
        'Brand template customization',
        'Real-time collaboration tools',
        'Analytics and performance tracking'
      ],
      icon: Video,
      popular: true,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-400',
      stats: { speed: '90%', quality: '4K', videos: '50K+' },
      demo: 'https://demo.ziontechgroup.com/ai-video',
      docs: 'https://docs.ziontechgroup.com/ai-video',
      benefits: [
        '90% time reduction in video production',
        'Studio-quality 4K output',
        'Automated voice synthesis',
        'Professional templates included'
      ]
    },
    // AI Customer Experience
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Platform',
      description: 'Intelligent customer support system that resolves 80% of queries automatically while maintaining 99% customer satisfaction.',
      category: 'customer',
      price: { starting: 1499, period: 'month' },
      rating: 4.8,
      reviews: 2789,
      features: [
        '24/7 multilingual chatbot support',
        'Sentiment analysis and mood detection',
        'Automated ticket routing and prioritization',
        'Knowledge base integration',
        'Live agent handoff capabilities',
        'Customer satisfaction tracking',
        'Performance analytics dashboard',
        'Custom workflow automation'
      ],
      icon: MessageSquare,
      popular: true,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      textColor: 'text-cyan-400',
      stats: { resolution: '80%', satisfaction: '99%', languages: '50+' },
      demo: 'https://demo.ziontechgroup.com/ai-support',
      docs: 'https://docs.ziontechgroup.com/ai-support',
      benefits: [
        '80% automated query resolution',
        '99% customer satisfaction rate',
        '50+ language support',
        '24/7 availability'
      ]
    },
    {
      id: 'ai-personalization-engine',
      name: 'AI Personalization Engine',
      description: 'Advanced personalization platform that increases engagement by 400% through real-time user behavior analysis.',
      category: 'customer',
      price: { starting: 2299, period: 'month' },
      rating: 4.7,
      reviews: 1456,
      features: [
        'Real-time user behavior analysis',
        'Dynamic content personalization',
        'Product recommendation engine',
        'A/B testing automation',
        'Cross-platform experience sync',
        'Privacy-compliant data handling',
        'Machine learning model training',
        'Performance optimization tools'
      ],
      icon: Users,
      popular: false,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      textColor: 'text-indigo-400',
      stats: { engagement: '+400%', conversion: '+150%', users: '1M+' },
      demo: 'https://demo.ziontechgroup.com/ai-personalization',
      docs: 'https://docs.ziontechgroup.com/ai-personalization',
      benefits: [
        '400% increase in user engagement',
        '150% boost in conversion rates',
        'Real-time personalization',
        'Privacy-compliant data handling'
      ]
    },
    // AI Automation & Workflow
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation Suite',
      description: 'Intelligent workflow automation that reduces manual tasks by 90% and increases operational efficiency by 300%.',
      category: 'automation',
      price: { starting: 2799, period: 'month' },
      rating: 4.9,
      reviews: 1987,
      features: [
        'Visual workflow designer',
        'AI-powered task optimization',
        'Integration with 500+ applications',
        'Smart document processing',
        'Automated decision making',
        'Exception handling and alerts',
        'Performance monitoring dashboard',
        'Custom automation templates'
      ],
      icon: Workflow,
      popular: true,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      textColor: 'text-emerald-400',
      stats: { efficiency: '+300%', tasks: '90%', integrations: '500+' },
      demo: 'https://demo.ziontechgroup.com/ai-workflow',
      docs: 'https://docs.ziontechgroup.com/ai-workflow',
      benefits: [
        '300% increase in operational efficiency',
        '90% reduction in manual tasks',
        '500+ application integrations',
        'Smart exception handling'
      ]
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processing Platform',
      description: 'Intelligent document processing that extracts, analyzes, and processes documents with 99.5% accuracy.',
      category: 'automation',
      price: { starting: 1899, period: 'month' },
      rating: 4.6,
      reviews: 1234,
      features: [
        'OCR and text extraction',
        'Document classification and routing',
        'Data validation and verification',
        'Automated form filling',
        'Contract analysis and review',
        'Compliance checking',
        'Multi-format support',
        'Batch processing capabilities'
      ],
      icon: FileText,
      popular: false,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      textColor: 'text-teal-400',
      stats: { accuracy: '99.5%', documents: '1M+', formats: '50+' },
      demo: 'https://demo.ziontechgroup.com/ai-documents',
      docs: 'https://docs.ziontechgroup.com/ai-documents',
      benefits: [
        '99.5% extraction accuracy',
        '50+ document format support',
        'Automated compliance checking',
        'Batch processing capabilities'
      ]
    },
    // AI Security & Compliance
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Platform',
      description: 'Advanced AI-powered security platform that detects and prevents 99.9% of cyber threats in real-time.',
      category: 'security',
      price: { starting: 3999, period: 'month' },
      rating: 4.9,
      reviews: 1654,
      features: [
        'Real-time threat detection',
        'Behavioral anomaly analysis',
        'Automated incident response',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Security awareness training',
        'Penetration testing automation',
        '24/7 security monitoring'
      ],
      icon: Shield,
      popular: true,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-400',
      stats: { detection: '99.9%', response: '<1min', threats: '1M+' },
      demo: 'https://demo.ziontechgroup.com/ai-security',
      docs: 'https://docs.ziontechgroup.com/ai-security',
      benefits: [
        '99.9% threat detection rate',
        'Sub-1-minute response time',
        'Automated incident response',
        '24/7 security monitoring'
      ]
    },
    {
      id: 'ai-compliance-manager',
      name: 'AI Compliance Management System',
      description: 'Intelligent compliance platform that ensures 100% regulatory adherence across all business operations.',
      category: 'security',
      price: { starting: 2499, period: 'month' },
      rating: 4.7,
      reviews: 987,
      features: [
        'Automated compliance monitoring',
        'Regulatory change detection',
        'Risk assessment and scoring',
        'Audit trail generation',
        'Policy management automation',
        'Training and certification tracking',
        'Reporting and documentation',
        'Multi-jurisdiction support'
      ],
      icon: Lock,
      popular: false,
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      textColor: 'text-amber-400',
      stats: { compliance: '100%', regulations: '200+', audits: '500+' },
      demo: 'https://demo.ziontechgroup.com/ai-compliance',
      docs: 'https://docs.ziontechgroup.com/ai-compliance',
      benefits: [
        '100% compliance assurance',
        '200+ regulation coverage',
        'Automated audit preparation',
        'Real-time risk monitoring'
      ]
    },
    // AI Industry-Specific Solutions
    {
      id: 'ai-healthcare-solutions',
      name: 'AI Healthcare Intelligence Platform',
      description: 'Specialized AI platform for healthcare that improves patient outcomes by 40% and reduces diagnostic time by 60%.',
      category: 'healthcare',
      price: { starting: 4999, period: 'month' },
      rating: 4.9,
      reviews: 876,
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Patient risk stratification',
        'Treatment recommendation engine',
        'Drug interaction checking',
        'Clinical trial matching',
        'HIPAA-compliant data handling',
        'Integration with EHR systems'
      ],
      icon: Stethoscope,
      popular: true,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400',
      stats: { outcomes: '+40%', time: '-60%', patients: '100K+' },
      demo: 'https://demo.ziontechgroup.com/ai-healthcare',
      docs: 'https://docs.ziontechgroup.com/ai-healthcare',
      benefits: [
        '40% improvement in patient outcomes',
        '60% reduction in diagnostic time',
        'HIPAA-compliant security',
        'EHR system integration'
      ]
    },
    {
      id: 'ai-financial-advisor',
      name: 'AI Financial Advisory Platform',
      description: 'Intelligent financial platform that provides personalized investment advice and portfolio optimization.',
      category: 'finance',
      price: { starting: 3299, period: 'month' },
      rating: 4.8,
      reviews: 1456,
      features: [
        'Portfolio optimization algorithms',
        'Risk assessment and management',
        'Market trend analysis',
        'Automated rebalancing',
        'Tax optimization strategies',
        'Retirement planning tools',
        'Real-time market monitoring',
        'Regulatory compliance tracking'
      ],
      icon: DollarSign,
      popular: true,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      textColor: 'text-yellow-400',
      stats: { returns: '+25%', risk: '-30%', clients: '10K+' },
      demo: 'https://demo.ziontechgroup.com/ai-finance',
      docs: 'https://docs.ziontechgroup.com/ai-finance',
      benefits: [
        '25% higher portfolio returns',
        '30% reduction in risk exposure',
        'Automated portfolio rebalancing',
        'Real-time market analysis'
      ]
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Brain, count: aiServices.length },
    { id: 'marketing', name: 'Marketing & Sales', icon: Target, count: aiServices.filter(s => s.category === 'marketing').length },
    { id: 'analytics', name: 'Analytics & Intelligence', icon: BarChart, count: aiServices.filter(s => s.category === 'analytics').length },
    { id: 'content', name: 'Content & Creative', icon: FileText, count: aiServices.filter(s => s.category === 'content').length },
    { id: 'customer', name: 'Customer Experience', icon: Users, count: aiServices.filter(s => s.category === 'customer').length },
    { id: 'automation', name: 'Automation & Workflow', icon: Workflow, count: aiServices.filter(s => s.category === 'automation').length },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: aiServices.filter(s => s.category === 'security').length },
    { id: 'healthcare', name: 'Healthcare', icon: Stethoscope, count: aiServices.filter(s => s.category === 'healthcare').length },
    { id: 'finance', name: 'Finance', icon: DollarSign, count: aiServices.filter(s => s.category === 'finance').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = aiServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered = filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price.starting - b.price.starting);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price.starting - a.price.starting);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [aiServices, selectedCategory, searchTerm, sortBy]);

  const formatPrice = (price: typeof aiServices[0]['price']) => {
    return `$${price.starting.toLocaleString()}/${price.period === 'month' ? 'mo' : 'yr'}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including marketing automation, analytics, content creation, customer support, and more. Achieve 300% ROI with cutting-edge AI technology." />
        <meta name="keywords" content="ai services, artificial intelligence, marketing automation, business intelligence, content generation, customer support, workflow automation, cybersecurity, healthcare ai, financial ai" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI <span className="holographic-text">Services</span>
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow">
            Transform Your Business with Cutting-Edge AI Solutions
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive suite of AI services designed to automate, optimize, and revolutionize your business operations. 
            From marketing automation to cybersecurity, we deliver measurable results that drive growth and efficiency.
          </p>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-400 text-slate-900'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name} ({category.count})
                  </button>
                );
              })}
            </div>

            {/* Sort Options */}
            <div className="flex justify-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${service.borderColor} ${
                    service.popular ? 'ring-2 ring-cyan-400/50' : ''
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${service.textColor}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                        {service.popular && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{formatPrice(service.price)}</div>
                      <div className="text-sm text-gray-400">starting</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(service.stats).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-cyan-400">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-400">
                        {service.rating} ({service.reviews.toLocaleString()} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <a
                      href={service.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                    >
                      <Play className="w-4 h-4 inline mr-2" />
                      Demo
                    </a>
                    <a
                      href={service.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-all text-center"
                    >
                      <FileText className="w-4 h-4 inline mr-2" />
                      Docs
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI experts help you implement the perfect solution for your business needs. 
            Contact us today for a free consultation and discover how AI can revolutionize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
