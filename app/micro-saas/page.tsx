'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, 
  BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, 
  DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, 
  FileText, Calendar, PieChart, Activity, ExternalLink, ChevronRight, Crown, Rocket, 
  Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, 
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, 
  Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot,
  Headphones, Monitor, Laptop, Printer, HardDrive, Wifi, Server, Network, Router, Key,
  EyeOff, AlertTriangle, Info, HelpCircle, ChevronDown, Plus, Minus, X, Menu, Maximize,
  Minimize, RotateCcw, RotateCw, Move, Copy, Edit, Trash2, Save, Share, Link, Unlink,
  Unlock, Volume2, VolumeX, Mic, MicOff, VideoOff, CameraOff, Image, ImageOff, File,
  Folder, FolderOpen, Archive, Inbox, Outbox, Send, Mail as MailIcon, MailOpen, Reply,
  Forward, Flag, Bookmark, Tag, Tags, Hash, AtSign, Percent, Timer, Layers, Workflow,
  Upload, RefreshCw, Pause, Square, Circle, Triangle, Hexagon, Octagon, Diamond,
  ThumbsUp, ThumbsDown, AlertCircle, ExclamationTriangle, ExclamationCircle,
  QuestionMarkCircle, Lightbulb, Bulb, Sun, Moon, CloudRain, CloudSnow, CloudLightning,
  Wind, Droplets, Flame, Snowflake, Thunder, Rainbow, Sunrise, Sunset, Compass as CompassIcon,
  Map, Navigation as NavIcon, Route, Store, Warehouse, Hospital, School, University,
  Church, Mosque, Synagogue, Temple, Bank, Wallet, Coins, Banknote, Receipt, LineChart,
  ArrowUp, ArrowDown, ArrowLeft, ArrowUpRight, ArrowDownRight, ArrowUpLeft, ArrowDownLeft,
  ArrowUpDown, ArrowLeftRight, ArrowRightLeft, ChevronUp, ChevronLeft, DoubleChevronUp,
  DoubleChevronDown, DoubleChevronLeft, DoubleChevronRight, ChevronsUp, ChevronsDown,
  ChevronsLeft, ChevronsRight, MoveUp, MoveDown, MoveLeft, MoveRight, RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon, Grid3X3, ShoppingBag, ShoppingBasket, Cart, Basket, Bag,
  Package, Box, Container, Truck, Bus, Bike, Scooter, Motorcycle, Van, Taxi, Ambulance,
  FireTruck, PoliceCar
} from 'lucide-react';

export default function MicroSaasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const microSaasServices = useMemo(() => [
    // AI-Powered Productivity Tools
    {
      id: 'ai-project-manager-pro',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management platform that automates task prioritization, resource allocation, and timeline optimization with AI-powered insights.',
      category: 'productivity',
      price: { starting: 29, period: 'month' },
      rating: 4.8,
      reviews: 1847,
      features: [
        'AI-powered task prioritization and scheduling',
        'Resource allocation optimization algorithms',
        'Risk assessment and mitigation strategies',
        'Real-time progress tracking and analytics',
        'Team collaboration and communication tools',
        'Automated reporting and insights',
        'Integration with 50+ popular tools',
        'Mobile app for on-the-go management'
      ],
      icon: Target,
      popular: true,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      stats: { efficiency: '+40%', projects: '10K+', users: '5K+' },
      demo: 'https://demo.ziontechgroup.com/ai-project-manager',
      docs: 'https://docs.ziontechgroup.com/ai-project-manager',
      benefits: [
        '40% increase in project efficiency',
        'Automated task prioritization',
        'Real-time collaboration tools',
        'Advanced analytics and insights'
      ]
    },
    {
      id: 'ai-content-studio',
      name: 'AI Content Studio',
      description: 'Revolutionary content creation platform that generates high-quality, SEO-optimized content 10x faster than traditional methods.',
      category: 'content',
      price: { starting: 19, period: 'month' },
      rating: 4.9,
      reviews: 3456,
      features: [
        'Multi-format content generation (blogs, social, ads)',
        'SEO optimization and keyword research',
        'Brand voice consistency training',
        'Content calendar automation',
        'Performance analytics and optimization',
        'Multi-language content support',
        'Visual content generation',
        'Plagiarism detection and originality scoring'
      ],
      icon: FileText,
      popular: true,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      stats: { speed: '10x', quality: '95%', content: '1M+' },
      demo: 'https://demo.ziontechgroup.com/ai-content-studio',
      docs: 'https://docs.ziontechgroup.com/ai-content-studio',
      benefits: [
        '10x faster content creation',
        '95% content quality score',
        'Built-in SEO optimization',
        'Multi-language support'
      ]
    },
    {
      id: 'ai-scheduler-pro',
      name: 'AI Smart Scheduler Pro',
      description: 'Intelligent scheduling platform that optimizes meetings, manages time zones, and eliminates scheduling conflicts automatically.',
      category: 'productivity',
      price: { starting: 12, period: 'month' },
      rating: 4.7,
      reviews: 2156,
      features: [
        'Smart meeting scheduling and optimization',
        'Automatic conflict resolution',
        'Time zone management and conversion',
        'Calendar integration (Google, Outlook, Apple)',
        'Availability optimization algorithms',
        'Meeting analytics and insights',
        'Recurring meeting management',
        'Mobile app with push notifications'
      ],
      icon: Calendar,
      popular: true,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400',
      stats: { time: '60%', meetings: '50K+', users: '3K+' },
      demo: 'https://demo.ziontechgroup.com/ai-scheduler',
      docs: 'https://docs.ziontechgroup.com/ai-scheduler',
      benefits: [
        '60% reduction in scheduling time',
        'Automatic conflict resolution',
        'Multi-timezone support',
        'Advanced meeting analytics'
      ]
    },
    // AI Analytics & Business Intelligence
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence platform with AI-powered insights, predictive analytics, and automated reporting.',
      category: 'analytics',
      price: { starting: 39, period: 'month' },
      rating: 4.8,
      reviews: 1234,
      features: [
        'Automated data visualization and dashboards',
        'Predictive analytics and forecasting',
        'Custom report generation',
        'Real-time monitoring and alerts',
        'Natural language query interface',
        'Data integration from 100+ sources',
        'Machine learning model deployment',
        'White-label reporting capabilities'
      ],
      icon: BarChart,
      popular: true,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-400',
      stats: { insights: '10M+', accuracy: '98%', reports: '50K+' },
      demo: 'https://demo.ziontechgroup.com/ai-analytics',
      docs: 'https://docs.ziontechgroup.com/ai-analytics',
      benefits: [
        'Real-time business insights',
        '98% prediction accuracy',
        'Automated report generation',
        '100+ data source integrations'
      ]
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights Platform',
      description: 'Comprehensive customer analytics platform that provides deep insights into customer behavior, preferences, and lifetime value.',
      category: 'analytics',
      price: { starting: 49, period: 'month' },
      rating: 4.6,
      reviews: 987,
      features: [
        'Customer behavior analysis and segmentation',
        'Predictive customer lifetime value modeling',
        'Churn prediction and prevention',
        'Personalization recommendation engine',
        'Customer journey mapping and optimization',
        'Sentiment analysis and feedback processing',
        'A/B testing and experimentation platform',
        'Integration with CRM and marketing tools'
      ],
      icon: Users,
      popular: false,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      textColor: 'text-indigo-400',
      stats: { retention: '+25%', revenue: '+30%', customers: '100K+' },
      demo: 'https://demo.ziontechgroup.com/ai-customer-insights',
      docs: 'https://docs.ziontechgroup.com/ai-customer-insights',
      benefits: [
        '25% increase in customer retention',
        '30% boost in customer revenue',
        'Advanced segmentation capabilities',
        'Predictive churn prevention'
      ]
    },
    // AI Customer Service & Support
    {
      id: 'ai-customer-support-pro',
      name: 'AI Customer Support Pro',
      description: 'Advanced customer support automation platform with natural language processing, sentiment analysis, and intelligent routing.',
      category: 'customer',
      price: { starting: 25, period: 'month' },
      rating: 4.7,
      reviews: 2789,
      features: [
        '24/7 multilingual chatbot support',
        'Sentiment analysis and mood detection',
        'Intelligent ticket routing and prioritization',
        'Knowledge base integration and management',
        'Live agent handoff capabilities',
        'Customer satisfaction tracking and analytics',
        'Integration with popular helpdesk systems',
        'Custom workflow automation'
      ],
      icon: MessageSquare,
      popular: true,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      textColor: 'text-cyan-400',
      stats: { resolution: '80%', satisfaction: '95%', languages: '50+' },
      demo: 'https://demo.ziontechgroup.com/ai-customer-support',
      docs: 'https://docs.ziontechgroup.com/ai-customer-support',
      benefits: [
        '80% automated query resolution',
        '95% customer satisfaction rate',
        '50+ language support',
        '24/7 availability'
      ]
    },
    {
      id: 'ai-feedback-analyzer',
      name: 'AI Feedback Analyzer',
      description: 'Intelligent feedback analysis platform that processes customer reviews, surveys, and social media mentions to extract actionable insights.',
      category: 'customer',
      price: { starting: 35, period: 'month' },
      rating: 4.5,
      reviews: 1456,
      features: [
        'Multi-source feedback collection and processing',
        'Sentiment analysis and emotion detection',
        'Topic modeling and trend identification',
        'Competitive analysis and benchmarking',
        'Automated insight generation and reporting',
        'Integration with review platforms and social media',
        'Custom dashboard and visualization tools',
        'Alert system for critical feedback'
      ],
      icon: Heart,
      popular: false,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      textColor: 'text-pink-400',
      stats: { feedback: '1M+', accuracy: '92%', insights: '10K+' },
      demo: 'https://demo.ziontechgroup.com/ai-feedback-analyzer',
      docs: 'https://docs.ziontechgroup.com/ai-feedback-analyzer',
      benefits: [
        '92% sentiment analysis accuracy',
        'Real-time feedback processing',
        'Competitive benchmarking',
        'Automated insight generation'
      ]
    },
    // AI Finance & Accounting
    {
      id: 'ai-expense-tracker-pro',
      name: 'AI Expense Tracker Pro',
      description: 'Smart expense management platform with AI-powered categorization, receipt scanning, and automated financial reporting.',
      category: 'finance',
      price: { starting: 15, period: 'month' },
      rating: 4.6,
      reviews: 1876,
      features: [
        'AI-powered expense categorization and tagging',
        'Receipt scanning and OCR technology',
        'Budget planning and spending alerts',
        'Tax preparation and compliance assistance',
        'Financial reporting and analytics',
        'Multi-currency support and conversion',
        'Integration with accounting software',
        'Mobile app with receipt capture'
      ],
      icon: DollarSign,
      popular: true,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      textColor: 'text-emerald-400',
      stats: { accuracy: '95%', time: '70%', receipts: '100K+' },
      demo: 'https://demo.ziontechgroup.com/ai-expense-tracker',
      docs: 'https://docs.ziontechgroup.com/ai-expense-tracker',
      benefits: [
        '95% categorization accuracy',
        '70% time savings on expense management',
        'Automated receipt processing',
        'Tax compliance assistance'
      ]
    },
    {
      id: 'ai-invoice-generator-pro',
      name: 'AI Invoice Generator Pro',
      description: 'Intelligent invoice creation and management platform with automated generation, payment tracking, and client management.',
      category: 'finance',
      price: { starting: 22, period: 'month' },
      rating: 4.7,
      reviews: 1234,
      features: [
        'Automated invoice generation and customization',
        'Payment tracking and reminder automation',
        'Client management and communication tools',
        'Tax calculation and compliance features',
        'Multi-currency and multi-language support',
        'Integration with payment gateways',
        'Financial reporting and analytics',
        'Mobile app for invoice management'
      ],
      icon: FileText,
      popular: true,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      textColor: 'text-yellow-400',
      stats: { time: '80%', payments: '90%', invoices: '25K+' },
      demo: 'https://demo.ziontechgroup.com/ai-invoice-generator',
      docs: 'https://docs.ziontechgroup.com/ai-invoice-generator',
      benefits: [
        '80% reduction in invoice creation time',
        '90% faster payment processing',
        'Automated payment reminders',
        'Multi-currency support'
      ]
    },
    // AI Marketing & Sales
    {
      id: 'ai-email-marketer',
      name: 'AI Email Marketer Pro',
      description: 'Advanced email marketing platform with AI-powered personalization, A/B testing, and automated campaign optimization.',
      category: 'marketing',
      price: { starting: 45, period: 'month' },
      rating: 4.8,
      reviews: 2156,
      features: [
        'AI-powered email personalization and segmentation',
        'Automated A/B testing and optimization',
        'Advanced email templates and design tools',
        'Behavioral trigger automation',
        'Deliverability optimization and monitoring',
        'Advanced analytics and performance tracking',
        'Integration with CRM and e-commerce platforms',
        'Compliance with email marketing regulations'
      ],
      icon: Mail,
      popular: true,
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      textColor: 'text-violet-400',
      stats: { open: '+40%', click: '+60%', revenue: '+35%' },
      demo: 'https://demo.ziontechgroup.com/ai-email-marketer',
      docs: 'https://docs.ziontechgroup.com/ai-email-marketer',
      benefits: [
        '40% increase in email open rates',
        '60% boost in click-through rates',
        '35% increase in email revenue',
        'Advanced personalization capabilities'
      ]
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Comprehensive social media management platform with AI-powered content creation, scheduling, and performance optimization.',
      category: 'marketing',
      price: { starting: 35, period: 'month' },
      rating: 4.6,
      reviews: 1876,
      features: [
        'AI-powered content creation and curation',
        'Multi-platform posting and scheduling',
        'Hashtag research and optimization',
        'Engagement tracking and analytics',
        'Competitor analysis and benchmarking',
        'Influencer identification and outreach',
        'Social listening and sentiment analysis',
        'ROI tracking and performance reporting'
      ],
      icon: Share,
      popular: false,
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/30',
      textColor: 'text-rose-400',
      stats: { engagement: '+50%', reach: '+75%', followers: '+200%' },
      demo: 'https://demo.ziontechgroup.com/ai-social-media',
      docs: 'https://docs.ziontechgroup.com/ai-social-media',
      benefits: [
        '50% increase in engagement rates',
        '75% boost in social media reach',
        '200% growth in followers',
        'Automated content optimization'
      ]
    },
    // AI HR & Recruitment
    {
      id: 'ai-recruitment-assistant',
      name: 'AI Recruitment Assistant Pro',
      description: 'Intelligent recruitment platform that automates candidate screening, interview scheduling, and talent acquisition processes.',
      category: 'hr',
      price: { starting: 55, period: 'month' },
      rating: 4.7,
      reviews: 987,
      features: [
        'AI-powered resume screening and matching',
        'Automated interview scheduling and coordination',
        'Candidate assessment and scoring algorithms',
        'Job posting optimization and distribution',
        'Talent pipeline management and nurturing',
        'Diversity and inclusion analytics',
        'Integration with ATS and HR systems',
        'Compliance with hiring regulations'
      ],
      icon: Users,
      popular: true,
      color: 'from-slate-500 to-gray-500',
      bgColor: 'bg-slate-500/10',
      borderColor: 'border-slate-500/30',
      textColor: 'text-slate-400',
      stats: { time: '60%', quality: '+45%', hires: '2K+' },
      demo: 'https://demo.ziontechgroup.com/ai-recruitment',
      docs: 'https://docs.ziontechgroup.com/ai-recruitment',
      benefits: [
        '60% reduction in hiring time',
        '45% improvement in candidate quality',
        'Automated screening and matching',
        'Advanced diversity analytics'
      ]
    },
    {
      id: 'ai-employee-engagement',
      name: 'AI Employee Engagement Platform',
      description: 'Comprehensive employee engagement platform that monitors satisfaction, predicts turnover, and provides actionable insights.',
      category: 'hr',
      price: { starting: 40, period: 'month' },
      rating: 4.5,
      reviews: 654,
      features: [
        'Employee satisfaction monitoring and surveys',
        'Turnover prediction and prevention algorithms',
        'Performance analytics and feedback systems',
        'Team collaboration and communication tools',
        'Learning and development recommendations',
        'Wellness and work-life balance tracking',
        'Manager coaching and development insights',
        'Integration with HRIS and performance systems'
      ],
      icon: Heart,
      popular: false,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      textColor: 'text-teal-400',
      stats: { retention: '+30%', satisfaction: '+25%', productivity: '+20%' },
      demo: 'https://demo.ziontechgroup.com/ai-employee-engagement',
      docs: 'https://docs.ziontechgroup.com/ai-employee-engagement',
      benefits: [
        '30% improvement in employee retention',
        '25% increase in job satisfaction',
        '20% boost in productivity',
        'Predictive turnover prevention'
      ]
    },
    // AI E-commerce & Sales
    {
      id: 'ai-ecommerce-optimizer',
      name: 'AI E-commerce Optimizer',
      description: 'Advanced e-commerce optimization platform with AI-powered product recommendations, pricing optimization, and conversion enhancement.',
      category: 'ecommerce',
      price: { starting: 65, period: 'month' },
      rating: 4.8,
      reviews: 1456,
      features: [
        'AI-powered product recommendation engine',
        'Dynamic pricing optimization algorithms',
        'Conversion rate optimization tools',
        'Customer behavior analysis and segmentation',
        'Inventory management and demand forecasting',
        'Personalized shopping experiences',
        'A/B testing and experimentation platform',
        'Integration with major e-commerce platforms'
      ],
      icon: ShoppingCart,
      popular: true,
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      textColor: 'text-amber-400',
      stats: { conversion: '+35%', revenue: '+45%', cart: '+25%' },
      demo: 'https://demo.ziontechgroup.com/ai-ecommerce',
      docs: 'https://docs.ziontechgroup.com/ai-ecommerce',
      benefits: [
        '35% increase in conversion rates',
        '45% boost in revenue',
        '25% reduction in cart abandonment',
        'Advanced personalization features'
      ]
    },
    {
      id: 'ai-sales-forecaster',
      name: 'AI Sales Forecaster Pro',
      description: 'Intelligent sales forecasting platform that predicts revenue, identifies opportunities, and optimizes sales strategies.',
      category: 'sales',
      price: { starting: 50, period: 'month' },
      rating: 4.6,
      reviews: 876,
      features: [
        'Advanced sales forecasting and prediction models',
        'Lead scoring and qualification algorithms',
        'Pipeline analysis and optimization tools',
        'Revenue prediction and planning features',
        'Sales performance analytics and insights',
        'Territory planning and optimization',
        'Integration with CRM and sales tools',
        'Custom reporting and dashboard creation'
      ],
      icon: TrendingUp,
      popular: false,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-400',
      stats: { accuracy: '92%', revenue: '+30%', deals: '+40%' },
      demo: 'https://demo.ziontechgroup.com/ai-sales-forecaster',
      docs: 'https://docs.ziontechgroup.com/ai-sales-forecaster',
      benefits: [
        '92% forecasting accuracy',
        '30% increase in revenue',
        '40% boost in deal closure rates',
        'Advanced pipeline optimization'
      ]
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Micro SaaS', icon: Grid3X3, count: microSaasServices.length },
    { id: 'productivity', name: 'Productivity', icon: Zap, count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'content', name: 'Content Creation', icon: FileText, count: microSaasServices.filter(s => s.category === 'content').length },
    { id: 'analytics', name: 'Analytics & BI', icon: BarChart, count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'customer', name: 'Customer Service', icon: MessageSquare, count: microSaasServices.filter(s => s.category === 'customer').length },
    { id: 'finance', name: 'Finance & Accounting', icon: DollarSign, count: microSaasServices.filter(s => s.category === 'finance').length },
    { id: 'marketing', name: 'Marketing & Sales', icon: Target, count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'hr', name: 'HR & Recruitment', icon: Users, count: microSaasServices.filter(s => s.category === 'hr').length },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart, count: microSaasServices.filter(s => s.category === 'ecommerce').length },
    { id: 'sales', name: 'Sales', icon: TrendingUp, count: microSaasServices.filter(s => s.category === 'sales').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSaasServices;

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
  }, [microSaasServices, selectedCategory, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SAAS solutions designed to solve specific business problems with AI-powered automation." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our collection of micro SAAS solutions designed to solve specific business problems with AI-powered automation.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SAAS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
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
                    {category.name}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg">
                          <Icon className="w-6 h-6 text-slate-900" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </h3>
                          <div className="flex items-center gap-2">
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
                            <span className="text-sm text-gray-400">
                              {service.rating} ({service.reviews} reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-2 py-1 rounded-full text-xs font-bold">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        ${service.price.starting}/{service.price.period === 'month' ? 'mo' : 'yr'}
                      </div>
                      <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
                        Learn More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No solutions found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Micro SAAS?</h2>
            <p className="text-xl text-blue-100 mb-8">Let our team help you create the perfect micro SAAS solution for your business</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASPage;
=======
    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price.starting - b.price.starting);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price.starting - a.price.starting);
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS services designed to solve specific business problems with AI-powered solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Micro SaaS Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover powerful, focused solutions that solve specific business problems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Browse Services
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search micro SaaS services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-8">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Sort Filter */}
              <div className="ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{service.rating}</span>
                        <span className="ml-2 text-sm text-gray-500">({service.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  {service.popular && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    ${service.price.starting}
                    <span className="text-sm font-normal text-gray-500">/{service.price.period}</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Try Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We can build a custom micro SaaS solution tailored to your specific business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Request Custom Solution
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-f2a7
