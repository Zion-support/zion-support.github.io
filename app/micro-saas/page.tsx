'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, Cloud, Code, 
  BarChart, Users, DollarSign, FileText, MessageCircle, Eye, Mic, 
  Settings, Calendar, Target, Globe, Database, Smartphone, Lock, 
  TrendingUp, Heart, Package, Monitor, Wifi, Printer, Router, 
  Award, Rocket, Layers, Workflow, BarChart3, MessageSquare, 
  Headphones, HardDrive, Cpu, Link, Mail, Phone, MapPin,
  Search, Filter, SortAsc, Download, Upload, Share2, Copy,
  Edit, Trash2, Plus, Minus, X, Check, AlertTriangle, Info,
  Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX,
  Camera, Video, Image, Music, File, Folder, Archive, Bookmark,
  Tag, Flag, Pin, Compass, Navigation, Map, Home, Building,
  Car, Plane, Train, Ship, Bike, Walk, Run, Activity, Pulse, Grid
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', icon: Grid, color: 'from-cyan-500 to-blue-600' },
    { id: 'ai', name: 'AI-Powered', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'analytics', name: 'Analytics', icon: BarChart, color: 'from-green-500 to-emerald-600' },
    { id: 'automation', name: 'Automation', icon: Zap, color: 'from-orange-500 to-red-600' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-red-500 to-pink-600' },
    { id: 'productivity', name: 'Productivity', icon: Target, color: 'from-blue-500 to-cyan-600' },
    { id: 'communication', name: 'Communication', icon: MessageCircle, color: 'from-indigo-500 to-purple-600' },
    { id: 'content', name: 'Content', icon: FileText, color: 'from-yellow-500 to-orange-600' },
    { id: 'finance', name: 'Finance', icon: DollarSign, color: 'from-green-600 to-teal-600' },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, color: 'from-pink-500 to-rose-600' }
  ];

  const microSaasTools = [
    // AI-Powered Tools
    {
      title: 'Zion AI Content Studio Pro',
      description: 'Advanced AI content creation platform with multi-language support, SEO optimization, and brand voice customization.',
      features: [
        'Multi-language content generation', 'SEO optimization', 'Brand voice customization', 
        'Content scheduling', 'Plagiarism detection', 'Tone analysis', 'A/B testing', 'Content calendar'
      ],
      price: '$49/month',
      marketPrice: '$99-299/month',
      category: 'ai',
      icon: Brain,
      popular: true,
      benefits: ['Save 80% content creation time', 'Increase SEO rankings by 150%', 'Consistent brand voice', 'Multi-platform publishing'],
      link: 'https://ziontechgroup.com/zion-ai-content-studio-pro',
      rating: 4.9,
      reviews: 1247
    },
    {
      title: 'Zion Analytics Intelligence',
      description: 'Comprehensive business intelligence platform with real-time analytics, predictive insights, and automated reporting.',
      features: [
        'Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 
        'KPI tracking', 'ROI analysis', 'Trend forecasting', 'Automated alerts'
      ],
      price: '$79/month',
      marketPrice: '$149-499/month',
      category: 'analytics',
      icon: BarChart,
      popular: true,
      benefits: ['Data-driven decisions', '30% increase in ROI', 'Automated reporting', 'Real-time insights'],
      link: 'https://ziontechgroup.com/zion-analytics-intelligence',
      rating: 4.8,
      reviews: 892
    },
    {
      title: 'Zion Security Shield Pro',
      description: 'Enterprise-grade security monitoring with AI-powered threat detection, compliance reporting, and automated response.',
      features: [
        'Real-time threat monitoring', 'AI threat detection', 'Automated incident response', 
        'Compliance reporting', 'Vulnerability scanning', 'Security orchestration', 'Risk assessment', 'Audit trails'
      ],
      price: '$99/month',
      marketPrice: '$199-799/month',
      category: 'security',
      icon: Shield,
      popular: true,
      benefits: ['99.9% threat detection accuracy', 'Reduced security incidents by 85%', 'Automated compliance', '24/7 monitoring'],
      link: 'https://ziontechgroup.com/zion-security-shield-pro',
      rating: 4.9,
      reviews: 634
    },
    {
      title: 'Zion Workflow Automation Engine',
      description: 'Intelligent process automation platform that learns and optimizes business workflows with minimal human intervention.',
      features: [
        'Process mining', 'Workflow optimization', 'Task automation', 'Exception handling', 
        'Performance monitoring', 'Integration hub', 'Custom triggers', 'Analytics dashboard'
      ],
      price: '$69/month',
      marketPrice: '$129-399/month',
      category: 'automation',
      icon: Zap,
      popular: true,
      benefits: ['75% process efficiency gain', '90% error reduction', 'Cost savings up to $50K/year', 'Scalable automation'],
      link: 'https://ziontechgroup.com/zion-workflow-automation-engine',
      rating: 4.7,
      reviews: 1156
    },
    {
      title: 'Zion CRM Intelligence Suite',
      description: 'AI-enhanced customer relationship management with predictive analytics, automated follow-ups, and sales forecasting.',
      features: [
        'AI-powered lead scoring', 'Predictive analytics', 'Automated follow-ups', 'Sales forecasting', 
        'Customer segmentation', 'Pipeline management', 'Email automation', 'Performance tracking'
      ],
      price: '$59/month',
      marketPrice: '$99-299/month',
      category: 'ai',
      icon: Users,
      popular: true,
      benefits: ['40% increase in sales conversion', 'Automated lead nurturing', 'Better customer insights', 'Reduced manual work'],
      link: 'https://ziontechgroup.com/zion-crm-intelligence-suite',
      rating: 4.8,
      reviews: 978
    },
    {
      title: 'Zion Email Marketing Pro',
      description: 'Advanced email marketing automation with AI-powered personalization, A/B testing, and behavioral triggers.',
      features: [
        'AI personalization', 'A/B testing', 'Behavioral triggers', 'Email templates', 
        'List segmentation', 'Deliverability optimization', 'Analytics dashboard', 'Mobile optimization'
      ],
      price: '$39/month',
      marketPrice: '$79-199/month',
      category: 'communication',
      icon: Mail,
      popular: true,
      benefits: ['45% higher open rates', '60% increase in click-through rates', 'Automated campaigns', 'Better deliverability'],
      link: 'https://ziontechgroup.com/zion-email-marketing-pro',
      rating: 4.6,
      reviews: 743
    },
    {
      title: 'Zion Project Management AI',
      description: 'Intelligent project management with AI-powered resource allocation, risk prediction, and timeline optimization.',
      features: [
        'AI resource allocation', 'Risk prediction', 'Timeline optimization', 'Team collaboration', 
        'Progress tracking', 'Budget management', 'Milestone tracking', 'Performance analytics'
      ],
      price: '$49/month',
      marketPrice: '$89-249/month',
      category: 'productivity',
      icon: Calendar,
      popular: true,
      benefits: ['30% faster project delivery', 'Better resource utilization', 'Reduced project risks', 'Improved team productivity'],
      link: 'https://ziontechgroup.com/zion-project-management-ai',
      rating: 4.7,
      reviews: 856
    },
    {
      title: 'Zion Social Media Manager',
      description: 'AI-powered social media management with content scheduling, engagement analysis, and performance optimization.',
      features: [
        'Content scheduling', 'Engagement analysis', 'Performance optimization', 'Multi-platform posting', 
        'Hashtag research', 'Competitor analysis', 'Influencer tracking', 'ROI measurement'
      ],
      price: '$29/month',
      marketPrice: '$59-149/month',
      category: 'content',
      icon: Share2,
      popular: true,
      benefits: ['50% increase in engagement', 'Automated posting', 'Better content performance', 'Time savings'],
      link: 'https://ziontechgroup.com/zion-social-media-manager',
      rating: 4.5,
      reviews: 692
    },
    {
      title: 'Zion Invoice & Billing AI',
      description: 'Smart invoicing and billing system with automated invoice generation, payment tracking, and financial analytics.',
      features: [
        'Automated invoice generation', 'Payment tracking', 'Financial analytics', 'Tax calculations', 
        'Recurring billing', 'Payment reminders', 'Multi-currency support', 'Expense tracking'
      ],
      price: '$19/month',
      marketPrice: '$39-99/month',
      category: 'finance',
      icon: DollarSign,
      popular: true,
      benefits: ['90% faster invoicing', 'Reduced payment delays', 'Better cash flow management', 'Automated reminders'],
      link: 'https://ziontechgroup.com/zion-invoice-billing-ai',
      rating: 4.6,
      reviews: 534
    },
    {
      title: 'Zion Document AI Processor',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflow management.',
      features: [
        'OCR text extraction', 'Data extraction', 'Document classification', 'Automated workflows', 
        'Compliance checking', 'Version control', 'Collaboration tools', 'Search functionality'
      ],
      price: '$39/month',
      marketPrice: '$79-199/month',
      category: 'ai',
      icon: FileText,
      popular: true,
      benefits: ['95% accuracy in data extraction', '90% faster document processing', 'Reduced manual errors', 'Better compliance'],
      link: 'https://ziontechgroup.com/zion-document-ai-processor',
      rating: 4.8,
      reviews: 789
    },
    {
      title: 'Zion Customer Support Bot',
      description: 'AI-powered customer support chatbot with natural language processing and seamless human handoff.',
      features: [
        'Natural language processing', 'Multi-language support', 'Human handoff', 'Knowledge base integration', 
        'Sentiment analysis', 'Ticket management', 'Performance analytics', 'Custom responses'
      ],
      price: '$59/month',
      marketPrice: '$99-299/month',
      category: 'communication',
      icon: MessageCircle,
      popular: true,
      benefits: ['80% reduction in support tickets', '24/7 availability', 'Faster response times', 'Better customer satisfaction'],
      link: 'https://ziontechgroup.com/zion-customer-support-bot',
      rating: 4.7,
      reviews: 923
    },
    {
      title: 'Zion Video Analytics Pro',
      description: 'Advanced video analysis platform with AI-powered insights, engagement metrics, and content optimization.',
      features: [
        'AI video analysis', 'Engagement metrics', 'Content optimization', 'Audience insights', 
        'Performance tracking', 'A/B testing', 'Thumbnail optimization', 'Trend analysis'
      ],
      price: '$79/month',
      marketPrice: '$149-399/month',
      category: 'analytics',
      icon: Video,
      popular: false,
      benefits: ['40% increase in video engagement', 'Better content optimization', 'Audience insights', 'Performance tracking'],
      link: 'https://ziontechgroup.com/zion-video-analytics-pro',
      rating: 4.6,
      reviews: 456
    },
    {
      title: 'Zion HR Analytics Suite',
      description: 'Comprehensive HR analytics platform with employee insights, performance tracking, and predictive analytics.',
      features: [
        'Employee insights', 'Performance tracking', 'Predictive analytics', 'Recruitment analytics', 
        'Retention analysis', 'Skills gap analysis', 'Engagement surveys', 'Compliance reporting'
      ],
      price: '$89/month',
      marketPrice: '$179-499/month',
      category: 'analytics',
      icon: Users,
      popular: false,
      benefits: ['Better employee retention', 'Data-driven HR decisions', 'Reduced recruitment costs', 'Improved performance'],
      link: 'https://ziontechgroup.com/zion-hr-analytics-suite',
      rating: 4.8,
      reviews: 567
    },
    {
      title: 'Zion Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting, inventory management, and logistics optimization.',
      features: [
        'Demand forecasting', 'Inventory optimization', 'Logistics optimization', 'Supplier management', 
        'Risk assessment', 'Cost analysis', 'Performance tracking', 'Automated alerts'
      ],
      price: '$149/month',
      marketPrice: '$299-999/month',
      category: 'automation',
      icon: Package,
      popular: false,
      benefits: ['25% reduction in inventory costs', 'Better demand planning', 'Optimized logistics', 'Risk mitigation'],
      link: 'https://ziontechgroup.com/zion-supply-chain-optimizer',
      rating: 4.7,
      reviews: 234
    },
    {
      title: 'Zion Healthcare Analytics',
      description: 'Specialized healthcare analytics platform with patient insights, treatment optimization, and outcome prediction.',
      features: [
        'Patient insights', 'Treatment optimization', 'Outcome prediction', 'Clinical analytics', 
        'Resource optimization', 'Quality metrics', 'Compliance tracking', 'Research tools'
      ],
      price: '$199/month',
      marketPrice: '$399-1299/month',
      category: 'healthcare',
      icon: Heart,
      popular: false,
      benefits: ['Better patient outcomes', 'Optimized treatments', 'Reduced costs', 'Improved quality'],
      link: 'https://ziontechgroup.com/zion-healthcare-analytics',
      rating: 4.9,
      reviews: 345
    },
    {
      title: 'Zion Financial Forecasting AI',
      description: 'Advanced financial forecasting platform with market analysis, risk assessment, and investment optimization.',
      features: [
        'Market analysis', 'Risk assessment', 'Investment optimization', 'Portfolio management', 
        'Financial modeling', 'Scenario planning', 'Performance tracking', 'Compliance reporting'
      ],
      price: '$129/month',
      marketPrice: '$249-799/month',
      category: 'finance',
      icon: TrendingUp,
      popular: false,
      benefits: ['Better investment decisions', 'Risk mitigation', 'Portfolio optimization', 'Financial planning'],
      link: 'https://ziontechgroup.com/zion-financial-forecasting-ai',
      rating: 4.8,
      reviews: 678
    },
    {
      title: 'Zion IoT Device Manager',
      description: 'Comprehensive IoT device management platform with monitoring, analytics, and automated maintenance.',
      features: [
        'Device monitoring', 'Performance analytics', 'Automated maintenance', 'Security management', 
        'Firmware updates', 'Data collection', 'Alert system', 'Integration hub'
      ],
      price: '$69/month',
      marketPrice: '$139-399/month',
      category: 'automation',
      icon: Wifi,
      popular: false,
      benefits: ['Better device performance', 'Reduced maintenance costs', 'Improved security', 'Automated management'],
      link: 'https://ziontechgroup.com/zion-iot-device-manager',
      rating: 4.6,
      reviews: 412
    },
    {
      title: 'Zion Compliance Manager Pro',
      description: 'Automated compliance management with regulatory tracking, audit preparation, and risk assessment.',
      features: [
        'Regulatory tracking', 'Audit preparation', 'Risk assessment', 'Document management', 
        'Training modules', 'Reporting tools', 'Alert system', 'Integration capabilities'
      ],
      price: '$99/month',
      marketPrice: '$199-599/month',
      category: 'security',
      icon: CheckCircle,
      popular: false,
      benefits: ['Reduced compliance risks', 'Automated reporting', 'Better audit preparation', 'Cost savings'],
      link: 'https://ziontechgroup.com/zion-compliance-manager-pro',
      rating: 4.7,
      reviews: 289
    },
    {
      title: 'Zion Learning Management AI',
      description: 'AI-powered learning management system with personalized content, progress tracking, and skill assessment.',
      features: [
        'Personalized content', 'Progress tracking', 'Skill assessment', 'Course creation', 
        'Gamification', 'Analytics dashboard', 'Mobile learning', 'Integration tools'
      ],
      price: '$59/month',
      marketPrice: '$119-299/month',
      category: 'productivity',
      icon: Bookmark,
      popular: false,
      benefits: ['Better learning outcomes', 'Personalized experience', 'Improved engagement', 'Skill development'],
      link: 'https://ziontechgroup.com/zion-learning-management-ai',
      rating: 4.5,
      reviews: 523
    },
    {
      title: 'Zion Energy Management System',
      description: 'Smart energy management platform with consumption monitoring, optimization, and sustainability tracking.',
      features: [
        'Consumption monitoring', 'Energy optimization', 'Sustainability tracking', 'Cost analysis', 
        'Predictive maintenance', 'Renewable integration', 'Reporting tools', 'Alert system'
      ],
      price: '$79/month',
      marketPrice: '$159-399/month',
      category: 'automation',
      icon: Activity,
      popular: false,
      benefits: ['30% energy cost reduction', 'Better sustainability', 'Optimized consumption', 'Predictive maintenance'],
      link: 'https://ziontechgroup.com/zion-energy-management-system',
      rating: 4.6,
      reviews: 187
    },
    {
      title: 'Zion Real Estate Analytics',
      description: 'Comprehensive real estate analytics platform with market analysis, property valuation, and investment insights.',
      features: [
        'Market analysis', 'Property valuation', 'Investment insights', 'Trend forecasting', 
        'Portfolio management', 'Risk assessment', 'Performance tracking', 'Reporting tools'
      ],
      price: '$149/month',
      marketPrice: '$299-899/month',
      category: 'analytics',
      icon: Building,
      popular: false,
      benefits: ['Better investment decisions', 'Accurate valuations', 'Market insights', 'Risk mitigation'],
      link: 'https://ziontechgroup.com/zion-real-estate-analytics',
      rating: 4.8,
      reviews: 156
    }
  ];

  const filteredTools = microSaasTools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const features = [
    {
      title: 'Rapid Deployment',
      description: 'Get your micro SaaS solution up and running in days, not months.',
      icon: Zap,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle growth from startup to enterprise scale.',
      icon: Star,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'AI-Powered Intelligence',
      description: 'Leverage cutting-edge AI to provide intelligent features and automation.',
      icon: Brain,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security and compliance built-in from day one.',
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Real-time Analytics',
      description: 'Comprehensive analytics and insights for data-driven decisions.',
      icon: BarChart,
      color: 'from-orange-500 to-red-600'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and customer service.',
      icon: Headphones,
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '50,000+', icon: Users },
    { label: 'Micro SaaS Products', value: '25+', icon: Cpu },
    { label: 'Countries Served', value: '150+', icon: Globe },
    { label: 'Uptime', value: '99.9%', icon: Shield }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of micro SaaS solutions designed to solve specific business problems with AI-powered intelligence, rapid deployment, and enterprise-grade security." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, SaaS solutions, productivity tools, AI-powered software, business intelligence, workflow automation" />
        <meta property="og:title" content="Micro SaaS Solutions | Zion Tech Group" />
        <meta property="og:description" content="25+ AI-powered micro SaaS tools to transform your business operations with intelligent automation and real-time analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-6">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">25+ AI-Powered Micro SaaS Tools</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with our comprehensive suite of AI-powered micro SaaS tools. 
                From analytics to automation, we provide intelligent solutions that scale with your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  View All Products
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 bg-slate-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SaaS tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {selectedCategory === 'all' ? 'All Micro SaaS Tools' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-400 text-lg">
                {filteredTools.length} products found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredTools.map((tool, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative">
                  {/* Popular Badge */}
                  {tool.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(tool.rating) ? 'fill-current' : 'text-gray-600'}`} />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-2">
                      {tool.rating} ({tool.reviews} reviews)
                    </span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {tool.features.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          +{tool.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {tool.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{tool.marketPrice}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 text-sm font-medium">Save up to 50%</div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Try Free Trial
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="w-full border border-cyan-500/30 text-cyan-400 py-2 px-4 rounded-xl font-medium hover:bg-cyan-500/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS tools are designed with enterprise-grade features, 
                AI-powered intelligence, and seamless integration capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group text-center p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven micro SaaS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-gray-400 text-sm">
              <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default MicroSaasPage;