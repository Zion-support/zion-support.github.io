'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Search as SearchIcon, FileText as FileTextIcon } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const microSaasServices = [
    // AI-Powered Business Tools
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      category: 'project-management',
      description: 'Intelligent project planning, resource allocation, and timeline optimization with AI-powered insights.',
      features: [
        'AI-powered task prioritization',
        'Resource allocation optimization',
        'Risk assessment and mitigation',
        'Real-time progress tracking',
        'Team collaboration tools',
        'Integration with 50+ tools'
      ],
      pricing: { monthly: 99, yearly: 999, setup: 0 },
      popular: true,
      icon: '📊',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      stats: { users: '10K+', rating: 4.9, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-project-manager',
      docs: 'https://docs.ziontechgroup.com/ai-project-manager'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      category: 'marketing',
      description: 'Automated social media content creation, scheduling, and engagement optimization across all platforms.',
      features: [
        'AI content generation',
        'Multi-platform scheduling',
        'Engagement analytics',
        'Hashtag optimization',
        'Competitor analysis',
        'Influencer collaboration tools'
      ],
      pricing: { monthly: 79, yearly: 799, setup: 0 },
      popular: true,
      icon: '📱',
      color: 'from-pink-500 to-purple-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      textColor: 'text-pink-400',
      stats: { users: '25K+', rating: 4.8, uptime: '99.8%' },
      demo: 'https://demo.ziontechgroup.com/ai-social-manager',
      docs: 'https://docs.ziontechgroup.com/ai-social-manager'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      category: 'analytics',
      description: 'Advanced business intelligence with AI-powered insights, predictive analytics, and custom reporting.',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboard builder',
        'Automated reporting',
        'Data integration from 100+ sources',
        'AI-powered insights'
      ],
      pricing: { monthly: 149, yearly: 1499, setup: 0 },
      popular: true,
      icon: '📈',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400',
      stats: { users: '15K+', rating: 4.9, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-analytics',
      docs: 'https://docs.ziontechgroup.com/ai-analytics'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      category: 'marketing',
      description: 'Intelligent email campaigns with AI-powered personalization, A/B testing, and deliverability optimization.',
      features: [
        'AI-powered personalization',
        'Automated A/B testing',
        'Deliverability optimization',
        'Advanced segmentation',
        'Behavioral triggers',
        'ROI tracking and analytics'
      ],
      pricing: { monthly: 59, yearly: 599, setup: 0 },
      popular: true,
      icon: '📧',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-400',
      stats: { users: '30K+', rating: 4.7, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-email-marketing',
      docs: 'https://docs.ziontechgroup.com/ai-email-marketing'
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      category: 'customer-service',
      description: '24/7 AI-powered customer support with natural language processing and seamless human handoff.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Seamless human handoff',
        'Knowledge base integration',
        'Sentiment analysis',
        'Performance analytics'
      ],
      pricing: { monthly: 199, yearly: 1999, setup: 0 },
      popular: true,
      icon: '🤖',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      stats: { users: '8K+', rating: 4.8, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-support-bot',
      docs: 'https://docs.ziontechgroup.com/ai-support-bot'
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      category: 'content-creation',
      description: 'AI-powered content creation for blogs, social media, emails, and marketing materials with brand voice consistency.',
      features: [
        'Multi-format content generation',
        'Brand voice training',
        'SEO optimization',
        'Plagiarism detection',
        'Content calendar integration',
        'Team collaboration tools'
      ],
      pricing: { monthly: 89, yearly: 899, setup: 0 },
      popular: false,
      icon: '✍️',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      textColor: 'text-teal-400',
      stats: { users: '20K+', rating: 4.6, uptime: '99.8%' },
      demo: 'https://demo.ziontechgroup.com/ai-content-generator',
      docs: 'https://docs.ziontechgroup.com/ai-content-generator'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      category: 'seo',
      description: 'Comprehensive SEO optimization with AI-powered keyword research, content analysis, and ranking tracking.',
      features: [
        'AI keyword research',
        'Content optimization suggestions',
        'Competitor analysis',
        'Ranking tracking',
        'Technical SEO audits',
        'Local SEO optimization'
      ],
      pricing: { monthly: 129, yearly: 1299, setup: 0 },
      popular: false,
      icon: '🎯',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      textColor: 'text-yellow-400',
      stats: { users: '12K+', rating: 4.7, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-seo-optimizer',
      docs: 'https://docs.ziontechgroup.com/ai-seo-optimizer'
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      category: 'finance',
      description: 'Automated invoice generation with AI-powered pricing suggestions, payment tracking, and financial analytics.',
      features: [
        'Automated invoice generation',
        'AI pricing suggestions',
        'Payment tracking',
        'Financial analytics',
        'Multi-currency support',
        'Tax calculation'
      ],
      pricing: { monthly: 39, yearly: 399, setup: 0 },
      popular: false,
      icon: '💰',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      textColor: 'text-emerald-400',
      stats: { users: '18K+', rating: 4.5, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-invoice-generator',
      docs: 'https://docs.ziontechgroup.com/ai-invoice-generator'
    },
    {
      id: 'ai-lead-scoring',
      name: 'AI Lead Scoring Engine',
      category: 'sales',
      description: 'Intelligent lead qualification and scoring with AI-powered behavioral analysis and conversion prediction.',
      features: [
        'Behavioral analysis',
        'Conversion prediction',
        'Lead qualification',
        'Scoring algorithms',
        'CRM integration',
        'Performance tracking'
      ],
      pricing: { monthly: 169, yearly: 1699, setup: 0 },
      popular: false,
      icon: '🎯',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-400',
      stats: { users: '6K+', rating: 4.8, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-lead-scoring',
      docs: 'https://docs.ziontechgroup.com/ai-lead-scoring'
    },
    {
      id: 'ai-hr-assistant',
      name: 'AI HR Assistant',
      category: 'hr',
      description: 'Comprehensive HR management with AI-powered recruitment, employee analytics, and performance tracking.',
      features: [
        'AI-powered recruitment',
        'Employee analytics',
        'Performance tracking',
        'Payroll automation',
        'Compliance monitoring',
        'Training recommendations'
      ],
      pricing: { monthly: 249, yearly: 2499, setup: 0 },
      popular: false,
      icon: '👥',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      textColor: 'text-indigo-400',
      stats: { users: '4K+', rating: 4.7, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-hr-assistant',
      docs: 'https://docs.ziontechgroup.com/ai-hr-assistant'
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      category: 'inventory',
      description: 'Smart inventory management with AI-powered demand forecasting, automated reordering, and optimization.',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Inventory optimization',
        'Multi-location support',
        'Supplier management',
        'Cost analysis'
      ],
      pricing: { monthly: 179, yearly: 1799, setup: 0 },
      popular: false,
      icon: '📦',
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      textColor: 'text-amber-400',
      stats: { users: '7K+', rating: 4.6, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-inventory-manager',
      docs: 'https://docs.ziontechgroup.com/ai-inventory-manager'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      category: 'finance',
      description: 'Intelligent expense tracking with AI-powered categorization, receipt scanning, and budget optimization.',
      features: [
        'Receipt scanning',
        'AI categorization',
        'Budget optimization',
        'Expense analytics',
        'Tax preparation',
        'Multi-currency support'
      ],
      pricing: { monthly: 29, yearly: 299, setup: 0 },
      popular: false,
      icon: '💳',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/30',
      textColor: 'text-rose-400',
      stats: { users: '35K+', rating: 4.4, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-expense-tracker',
      docs: 'https://docs.ziontechgroup.com/ai-expense-tracker'
    },
    {
      id: 'ai-time-tracker',
      name: 'AI Time Tracker',
      category: 'productivity',
      description: 'Smart time tracking with AI-powered productivity insights, automatic task detection, and team analytics.',
      features: [
        'Automatic task detection',
        'Productivity insights',
        'Team analytics',
        'Project time tracking',
        'Billing integration',
        'Performance reports'
      ],
      pricing: { monthly: 49, yearly: 499, setup: 0 },
      popular: false,
      icon: '⏰',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      textColor: 'text-violet-400',
      stats: { users: '22K+', rating: 4.5, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-time-tracker',
      docs: 'https://docs.ziontechgroup.com/ai-time-tracker'
    },
    {
      id: 'ai-scheduler',
      name: 'AI Smart Scheduler',
      category: 'productivity',
      description: 'Intelligent scheduling with AI-powered meeting optimization, conflict resolution, and calendar management.',
      features: [
        'Meeting optimization',
        'Conflict resolution',
        'Calendar management',
        'Time zone handling',
        'Resource booking',
        'Analytics and insights'
      ],
      pricing: { monthly: 69, yearly: 699, setup: 0 },
      popular: false,
      icon: '📅',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      textColor: 'text-cyan-400',
      stats: { users: '16K+', rating: 4.6, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-scheduler',
      docs: 'https://docs.ziontechgroup.com/ai-scheduler'
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processor',
      category: 'document-management',
      description: 'Intelligent document processing with AI-powered OCR, data extraction, and automated workflows.',
      features: [
        'AI-powered OCR',
        'Data extraction',
        'Automated workflows',
        'Document classification',
        'Version control',
        'Search and retrieval'
      ],
      pricing: { monthly: 119, yearly: 1199, setup: 0 },
      popular: false,
      icon: '📄',
      color: 'from-slate-500 to-gray-500',
      bgColor: 'bg-slate-500/10',
      borderColor: 'border-slate-500/30',
      textColor: 'text-slate-400',
      stats: { users: '9K+', rating: 4.7, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-document-processor',
      docs: 'https://docs.ziontechgroup.com/ai-document-processor'
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      category: 'productivity',
      description: 'Custom voice assistant for business operations with natural language processing and task automation.',
      features: [
        'Natural language processing',
        'Task automation',
        'Voice commands',
        'Integration with business tools',
        'Custom voice training',
        'Multi-language support'
      ],
      pricing: { monthly: 159, yearly: 1599, setup: 0 },
      popular: false,
      icon: '🎤',
      color: 'from-lime-500 to-green-500',
      bgColor: 'bg-lime-500/10',
      borderColor: 'border-lime-500/30',
      textColor: 'text-lime-400',
      stats: { users: '5K+', rating: 4.8, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-voice-assistant',
      docs: 'https://docs.ziontechgroup.com/ai-voice-assistant'
    },
    {
      id: 'ai-ab-testing',
      name: 'AI A/B Testing Platform',
      category: 'marketing',
      description: 'Advanced A/B testing with AI-powered experiment design, statistical analysis, and optimization recommendations.',
      features: [
        'AI experiment design',
        'Statistical analysis',
        'Optimization recommendations',
        'Multi-variate testing',
        'Real-time results',
        'Integration with analytics tools'
      ],
      pricing: { monthly: 189, yearly: 1899, setup: 0 },
      popular: false,
      icon: '🧪',
      color: 'from-fuchsia-500 to-pink-500',
      bgColor: 'bg-fuchsia-500/10',
      borderColor: 'border-fuchsia-500/30',
      textColor: 'text-fuchsia-400',
      stats: { users: '3K+', rating: 4.9, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-ab-testing',
      docs: 'https://docs.ziontechgroup.com/ai-ab-testing'
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics',
      category: 'analytics',
      description: 'Advanced predictive analytics with machine learning models for forecasting and trend analysis.',
      features: [
        'Machine learning models',
        'Forecasting algorithms',
        'Trend analysis',
        'Anomaly detection',
        'Custom model training',
        'Real-time predictions'
      ],
      pricing: { monthly: 299, yearly: 2999, setup: 0 },
      popular: false,
      icon: '🔮',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      stats: { users: '2K+', rating: 4.9, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-predictive-analytics',
      docs: 'https://docs.ziontechgroup.com/ai-predictive-analytics'
    },
    {
      id: 'ai-security-monitor',
      name: 'AI Security Monitor',
      category: 'security',
      description: 'AI-powered security monitoring with threat detection, anomaly analysis, and automated response.',
      features: [
        'Threat detection',
        'Anomaly analysis',
        'Automated response',
        'Real-time monitoring',
        'Compliance reporting',
        'Incident management'
      ],
      pricing: { monthly: 399, yearly: 3999, setup: 0 },
      popular: false,
      icon: '🛡️',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-400',
      stats: { users: '1K+', rating: 4.9, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-security-monitor',
      docs: 'https://docs.ziontechgroup.com/ai-security-monitor'
    },
    {
      id: 'ai-performance-tracker',
      name: 'AI Performance Tracker',
      category: 'analytics',
      description: 'Comprehensive performance tracking with AI-powered insights, benchmarking, and optimization recommendations.',
      features: [
        'Performance insights',
        'Benchmarking',
        'Optimization recommendations',
        'Real-time monitoring',
        'Custom metrics',
        'Team performance analysis'
      ],
      pricing: { monthly: 139, yearly: 1399, setup: 0 },
      popular: false,
      icon: '📊',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      stats: { users: '11K+', rating: 4.6, uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/ai-performance-tracker',
      docs: 'https://docs.ziontechgroup.com/ai-performance-tracker'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, count: microSaasServices.length },
    { id: 'project-management', name: 'Project Management', icon: Target, count: microSaasServices.filter(s => s.category === 'project-management').length },
    { id: 'marketing', name: 'Marketing', icon: Megaphone, count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'analytics', name: 'Analytics', icon: BarChart, count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'customer-service', name: 'Customer Service', icon: MessageSquare, count: microSaasServices.filter(s => s.category === 'customer-service').length },
    { id: 'content-creation', name: 'Content Creation', icon: FileText, count: microSaasServices.filter(s => s.category === 'content-creation').length },
    { id: 'seo', name: 'SEO', icon: Search, count: microSaasServices.filter(s => s.category === 'seo').length },
    { id: 'finance', name: 'Finance', icon: DollarSign, count: microSaasServices.filter(s => s.category === 'finance').length },
    { id: 'sales', name: 'Sales', icon: TrendingUp, count: microSaasServices.filter(s => s.category === 'sales').length },
    { id: 'hr', name: 'HR', icon: Users, count: microSaasServices.filter(s => s.category === 'hr').length },
    { id: 'inventory', name: 'Inventory', icon: Package, count: microSaasServices.filter(s => s.category === 'inventory').length },
    { id: 'productivity', name: 'Productivity', icon: Zap, count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'document-management', name: 'Document Management', icon: FileText, count: microSaasServices.filter(s => s.category === 'document-management').length },
    { id: 'security', name: 'Security', icon: Shield, count: microSaasServices.filter(s => s.category === 'security').length }
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
        filtered = filtered.sort((a, b) => a.pricing.monthly - b.pricing.monthly);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.pricing.monthly - a.pricing.monthly);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.stats.rating - a.stats.rating);
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const totalSavings = microSaasServices.reduce((total, service) => {
    const yearlySavings = (service.pricing.monthly * 12) - service.pricing.yearly;
    return total + yearlySavings;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of AI-powered micro SAAS solutions designed to streamline your business operations. From project management to marketing automation, we have the tools you need." />
        <meta name="keywords" content="micro saas, ai tools, business automation, project management, marketing tools, analytics, productivity" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            AI-Powered Business Tools for Modern Enterprises
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive collection of 20+ AI-powered micro SAAS solutions designed to streamline your business operations. 
            From project management to marketing automation, we have the tools you need to succeed.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">20+ Tools</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Comprehensive suite of AI-powered business tools</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">💰</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Save ${totalSavings.toLocaleString()}</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Annual savings with yearly plans</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">99.9% Uptime</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Enterprise-grade reliability and performance</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
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

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="cyber-card hologram-card p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SAAS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${service.borderColor} ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center text-2xl`}>
                      {service.icon}
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
                    <div className="text-2xl font-bold text-white">${service.pricing.monthly}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

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

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.users}</div>
                    <div className="text-xs text-gray-400">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.rating}</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.uptime}</div>
                    <div className="text-xs text-gray-400">Uptime</div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Monthly</span>
                    <span className="text-lg font-bold text-white">${service.pricing.monthly}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Yearly</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-white">${service.pricing.yearly}</span>
                      <span className="text-xs text-green-400 ml-2">
                        Save ${(service.pricing.monthly * 12) - service.pricing.yearly}
                      </span>
                    </div>
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
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our micro SAAS solutions today and experience the power of AI-driven business automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MicroSAASPage;