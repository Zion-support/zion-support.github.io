

'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Calendar, Download, Play, Code, Database, Smartphone, Lock, Settings, FileText, Image, Video, Music, Palette, ShoppingCart, CreditCard, PieChart, LineChart, Activity, Zap as ZapIcon, Bot, Wand2, Layers, Workflow, GitBranch, Cloud, Server, Monitor, Smartphone as PhoneIcon, Laptop, Tablet, Headphones, Camera, Mic, MicOff, Volume2, VolumeX, Wifi, Bluetooth, Battery, WifiOff, Signal, SignalZero, SignalLow, SignalMedium, SignalHigh } from 'lucide-react';

export default function MicroSAASPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const microSaasServices = [
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered insights, automated task assignment, and predictive analytics for optimal resource allocation.',
      category: 'productivity',
      icon: Target,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      price: '$49/month',
      originalPrice: '$99/month',
      discount: '50%',
      popular: true,
      features: [
        'AI-powered task prioritization',
        'Automated resource allocation',
        'Predictive project timeline analysis',
        'Real-time collaboration tools',
        'Advanced reporting & analytics',
        'Integration with 50+ tools',
        'Mobile app included',
        '24/7 AI assistant support'
      ],
      benefits: [
        'Increase project success rate by 40%',
        'Reduce project delivery time by 30%',
        'Save 15 hours per week on management tasks',
        'Improve team productivity by 25%'
      ],
      rating: 4.9,
      reviews: 1247,
      users: '10,000+',
      trial: '14-day free trial',
      demo: 'https://ziontechgroup.com/demo/ai-project-manager',
      pricing: {
        starter: { price: '$29', features: ['Up to 5 projects', 'Basic AI insights', 'Email support'] },
        pro: { price: '$49', features: ['Unlimited projects', 'Advanced AI analytics', 'Priority support', 'Custom integrations'] },
        enterprise: { price: '$99', features: ['Everything in Pro', 'White-label solution', 'Dedicated support', 'Custom AI training'] }
      }
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation, optimal posting times, engagement analysis, and cross-platform scheduling.',
      category: 'marketing',
      icon: MessageSquare,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      price: '$39/month',
      originalPrice: '$79/month',
      discount: '51%',
      popular: true,
      features: [
        'AI content generation for all platforms',
        'Optimal posting time recommendations',
        'Hashtag optimization and research',
        'Engagement rate analysis',
        'Cross-platform scheduling',
        'Brand voice consistency',
        'Competitor analysis',
        'ROI tracking and reporting'
      ],
      benefits: [
        'Increase engagement by 60%',
        'Save 20 hours per week on content creation',
        'Boost follower growth by 45%',
        'Improve brand consistency across platforms'
      ],
      rating: 4.8,
      reviews: 892,
      users: '7,500+',
      trial: '7-day free trial',
      demo: 'https://ziontechgroup.com/demo/ai-social-media-manager',
      pricing: {
        starter: { price: '$19', features: ['3 social accounts', 'Basic AI content', 'Standard scheduling'] },
        pro: { price: '$39', features: ['10 social accounts', 'Advanced AI content', 'Analytics & insights'] },
        enterprise: { price: '$79', features: ['Unlimited accounts', 'White-label solution', 'Custom AI training'] }
      }
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with AI-powered insights, predictive analytics, and automated reporting for data-driven decisions.',
      category: 'analytics',
      icon: BarChart,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      price: '$59/month',
      originalPrice: '$119/month',
      discount: '50%',
      popular: true,
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Automated report generation',
        'Custom dashboard creation',
        'Data source integration',
        'Anomaly detection',
        'Trend analysis and forecasting',
        'Mobile-responsive design'
      ],
      benefits: [
        'Make data-driven decisions 50% faster',
        'Identify opportunities 3x quicker',
        'Reduce manual reporting by 80%',
        'Improve forecast accuracy by 35%'
      ],
      rating: 4.9,
      reviews: 1563,
      users: '12,000+',
      trial: '21-day free trial',
      demo: 'https://ziontechgroup.com/demo/ai-analytics-dashboard',
      pricing: {
        starter: { price: '$29', features: ['5 data sources', 'Basic analytics', 'Standard reports'] },
        pro: { price: '$59', features: ['Unlimited sources', 'AI predictions', 'Custom dashboards'] },
        enterprise: { price: '$119', features: ['Everything in Pro', 'White-label solution', 'Dedicated support'] }
      }
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing platform with AI-powered personalization, send time optimization, and advanced segmentation for maximum engagement.',
      category: 'marketing',
      icon: Mail,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      price: '$45/month',
      originalPrice: '$89/month',
      discount: '49%',
      popular: true,
      features: [
        'AI-powered email personalization',
        'Optimal send time prediction',
        'Advanced audience segmentation',
        'A/B testing automation',
        'Subject line optimization',
        'Content generation',
        'Deliverability optimization',
        'Advanced analytics and reporting'
      ],
      benefits: [
        'Increase open rates by 40%',
        'Boost click-through rates by 55%',
        'Reduce unsubscribe rates by 30%',
        'Save 25 hours per week on campaign management'
      ],
      rating: 4.7,
      reviews: 734,
      users: '5,200+',
      trial: '14-day free trial',
      demo: 'https://ziontechgroup.com/demo/ai-email-marketing',
      pricing: {
        starter: { price: '$25', features: ['5,000 contacts', 'Basic AI features', 'Email support'] },
        pro: { price: '$45', features: ['25,000 contacts', 'Advanced AI', 'Priority support'] },
        enterprise: { price: '$89', features: ['Unlimited contacts', 'White-label solution', 'Custom AI training'] }
      }
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      description: 'Advanced AI chatbot with natural language processing, multi-language support, and seamless human handoff for 24/7 customer service.',
      category: 'support',
      icon: Bot,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      price: '$35/month',
      originalPrice: '$69/month',
      discount: '49%',
      popular: true,
      features: [
        'Natural language processing',
        'Multi-language support (50+ languages)',
        'Seamless human handoff',
        'Knowledge base integration',
        'Sentiment analysis',
        'Custom conversation flows',
        'Analytics and insights',
        'API integration capabilities'
      ],
      benefits: [
        'Reduce support tickets by 60%',
        'Provide 24/7 customer service',
        'Improve response time by 90%',
        'Increase customer satisfaction by 35%'
      ],
      rating: 4.8,
      reviews: 1089,
      users: '8,500+',
      trial: '14-day free trial',
      demo: 'https://ziontechgroup.com/demo/ai-customer-support-bot',
      pricing: {
        starter: { price: '$19', features: ['1,000 conversations/month', 'Basic AI', 'Email support'] },
        pro: { price: '$35', features: ['10,000 conversations/month', 'Advanced AI', 'Priority support'] },
        enterprise: { price: '$69', features: ['Unlimited conversations', 'White-label solution', 'Custom AI training'] }
      }
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI content creation tool that generates high-quality blog posts, social media content, product descriptions, and marketing copy.',
      category: 'content',
      icon: FileText,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      price: '$29/month',
      originalPrice: '$59/month',
      discount: '51%',
      popular: false,
      features: [
        'Blog post generation',
        'Social media content creation',
        'Product description writing',
        'Email copy generation',
        'SEO-optimized content',
        'Multiple content formats',
        'Brand voice customization',
        'Plagiarism checking'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain consistent brand voice',
        'Improve SEO rankings by 40%',
        'Save 30 hours per week on content creation'
      ],
      rating: 4.6,
      reviews: 456,
      users: '3,200+',
      trial: '7-day free trial',
      demo: 'https://ziontechgroup.com/demo/ai-content-generator',
      pricing: {
        starter: { price: '$15', features: ['1,000 words/month', 'Basic templates', 'Email support'] },
        pro: { price: '$29', features: ['10,000 words/month', 'Advanced features', 'Priority support'] },
        enterprise: { price: '$59', features: ['Unlimited words', 'White-label solution', 'Custom AI training'] }
      }
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Comprehensive SEO optimization tool with AI-powered keyword research, content optimization, and technical SEO analysis.',
      category: 'seo',
      icon: Search,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      price: '$39/month',
      originalPrice: '$79/month',
      discount: '51%',
      popular: false,
      features: [
        'AI keyword research and analysis',
        'Content optimization suggestions',
        'Technical SEO auditing',
        'Competitor analysis',
        'Rank tracking',
        'Backlink analysis',
        'Site speed optimization',
        'Mobile optimization checks'
      ],
      benefits: [
        'Improve search rankings by 60%',
        'Increase organic traffic by 45%',
        'Identify SEO opportunities 5x faster',
        'Save 20 hours per week on SEO tasks'
      ],
      rating: 4.7,
      reviews: 623,
      users: '4,100+',
      trial: '14-day free trial',
      demo: 'https://ziontechgroup.com/demo/ai-seo-optimizer',
      pricing: {
        starter: { price: '$19', features: ['1 website', 'Basic SEO analysis', 'Email support'] },
        pro: { price: '$39', features: ['5 websites', 'Advanced features', 'Priority support'] },
        enterprise: { price: '$79', features: ['Unlimited websites', 'White-label solution', 'Custom AI training'] }
      }
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Smart invoicing solution with AI-powered automation, payment tracking, and financial analytics for streamlined billing processes.',
      category: 'finance',
      icon: CreditCard,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      price: '$25/month',
      originalPrice: '$49/month',
      discount: '49%',
      popular: false,
      features: [
        'Automated invoice generation',
        'Payment tracking and reminders',
        'Financial analytics and reporting',
        'Multi-currency support',
        'Tax calculation',
        'Client portal access',
        'Recurring billing setup',
        'Integration with accounting software'
      ],
      benefits: [
        'Reduce billing time by 70%',
        'Improve payment collection by 40%',
        'Eliminate billing errors',
        'Save 15 hours per week on invoicing'
      ],
      rating: 4.5,
      reviews: 287,
      users: '1,800+',
      trial: '14-day free trial',
      demo: 'https://ziontechgroup.com/demo/ai-invoice-generator',
      pricing: {
        starter: { price: '$12', features: ['50 invoices/month', 'Basic features', 'Email support'] },
        pro: { price: '$25', features: ['500 invoices/month', 'Advanced features', 'Priority support'] },
        enterprise: { price: '$49', features: ['Unlimited invoices', 'White-label solution', 'Custom integrations'] }
      }
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Intelligent expense management with AI-powered categorization, receipt scanning, and automated expense reporting for better financial control.',
      category: 'finance',
      icon: PieChart,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      price: '$19/month',
      originalPrice: '$39/month',
      discount: '51%',
      popular: false,
      features: [
        'AI-powered expense categorization',
        'Receipt scanning and OCR',
        'Automated expense reporting',
        'Budget tracking and alerts',
        'Tax preparation assistance',
        'Multi-currency support',
        'Team expense management',
        'Integration with accounting software'
      ],
      benefits: [
        'Reduce expense processing time by 80%',
        'Improve expense accuracy by 95%',
        'Save 10 hours per week on expense management',
        'Better financial visibility and control'
      ],
      rating: 4.4,
      reviews: 198,
      users: '1,200+',
      trial: '14-day free trial',
      demo: 'https://ziontechgroup.com/demo/ai-expense-tracker',
      pricing: {
        starter: { price: '$9', features: ['100 receipts/month', 'Basic categorization', 'Email support'] },
        pro: { price: '$19', features: ['1,000 receipts/month', 'Advanced features', 'Priority support'] },
        enterprise: { price: '$39', features: ['Unlimited receipts', 'White-label solution', 'Custom integrations'] }
      }
    },
    {
      id: 'ai-time-tracker',
      name: 'AI Time Tracker',
      description: 'Smart time tracking with AI-powered productivity insights, automatic task detection, and detailed analytics for better time management.',
      category: 'productivity',
      icon: Clock,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      price: '$15/month',
      originalPrice: '$29/month',
      discount: '48%',
      popular: false,
      features: [
        'Automatic time tracking',
        'AI-powered productivity insights',
        'Task and project management',
        'Detailed time analytics',
        'Team collaboration features',
        'Integration with 100+ tools',
        'Mobile app included',
        'Custom reporting'
      ],
      benefits: [
        'Increase productivity by 25%',
        'Identify time-wasting activities',
        'Improve project time estimation',
        'Save 5 hours per week on time tracking'
      ],
      rating: 4.6,
      reviews: 342,
      users: '2,100+',
      trial: '14-day free trial',
      demo: 'https://ziontechgroup.com/demo/ai-time-tracker',
      pricing: {
        starter: { price: '$7', features: ['1 user', 'Basic tracking', 'Email support'] },
        pro: { price: '$15', features: ['5 users', 'Advanced features', 'Priority support'] },
        enterprise: { price: '$29', features: ['Unlimited users', 'White-label solution', 'Custom integrations'] }
      }
    },
    {
      id: 'ai-scheduler',
      name: 'AI Smart Scheduler',
      description: 'Intelligent scheduling assistant with AI-powered meeting optimization, conflict resolution, and automated calendar management.',
      category: 'productivity',
      icon: Calendar,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      price: '$22/month',
      originalPrice: '$44/month',
      discount: '50%',
      popular: false,
      features: [
        'AI-powered meeting scheduling',
        'Conflict detection and resolution',
        'Optimal time slot suggestions',
        'Calendar integration',
        'Meeting preparation assistance',
        'Follow-up automation',
        'Team scheduling coordination',
        'Mobile app included'
      ],
      benefits: [
        'Reduce scheduling conflicts by 90%',
        'Save 8 hours per week on scheduling',
        'Improve meeting efficiency by 35%',
        'Better time zone coordination'
      ],
      rating: 4.5,
      reviews: 156,
      users: '950+',
      trial: '14-day free trial',
      demo: 'https://ziontechgroup.com/demo/ai-scheduler',
      pricing: {
        starter: { price: '$11', features: ['1 calendar', 'Basic scheduling', 'Email support'] },
        pro: { price: '$22', features: ['5 calendars', 'Advanced features', 'Priority support'] },
        enterprise: { price: '$44', features: ['Unlimited calendars', 'White-label solution', 'Custom integrations'] }
      }
    },
    {
      id: 'ai-hr-assistant',
      name: 'AI HR Assistant',
      description: 'Comprehensive HR management with AI-powered candidate screening, employee analytics, and automated HR processes.',
      category: 'hr',
      icon: Users,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10',
      price: '$49/month',
      originalPrice: '$99/month',
      discount: '51%',
      popular: false,
      features: [
        'AI-powered candidate screening',
        'Employee performance analytics',
        'Automated onboarding processes',
        'Leave management system',
        'Payroll integration',
        'Performance review automation',
        'Employee engagement tracking',
        'Compliance monitoring'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality by 40%',
        'Automate 80% of HR processes',
        'Save 20 hours per week on HR tasks'
      ],
      rating: 4.7,
      reviews: 234,
      users: '1,500+',
      trial: '21-day free trial',
      demo: 'https://ziontechgroup.com/demo/ai-hr-assistant',
      pricing: {
        starter: { price: '$24', features: ['Up to 50 employees', 'Basic HR features', 'Email support'] },
        pro: { price: '$49', features: ['Up to 200 employees', 'Advanced features', 'Priority support'] },
        enterprise: { price: '$99', features: ['Unlimited employees', 'White-label solution', 'Custom integrations'] }
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: microSaasServices.length },
    { id: 'productivity', name: 'Productivity', icon: Target, count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'marketing', name: 'Marketing', icon: MessageSquare, count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'analytics', name: 'Analytics', icon: BarChart, count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'support', name: 'Support', icon: Bot, count: microSaasServices.filter(s => s.category === 'support').length },
    { id: 'content', name: 'Content', icon: FileText, count: microSaasServices.filter(s => s.category === 'content').length },
    { id: 'seo', name: 'SEO', icon: Search, count: microSaasServices.filter(s => s.category === 'seo').length },
    { id: 'finance', name: 'Finance', icon: CreditCard, count: microSaasServices.filter(s => s.category === 'finance').length },
    { id: 'hr', name: 'HR', icon: Users, count: microSaasServices.filter(s => s.category === 'hr').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSaasServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')));
        break;
      case 'price-high':
        filtered.sort((a, b) => parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => {
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return b.rating - a.rating;
        });
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const stats = [
    { icon: Users, label: 'Active Users', value: '50,000+', color: 'text-cyan-400' },
    { icon: Star, label: 'Average Rating', value: '4.7/5', color: 'text-yellow-400' },
    { icon: TrendingUp, label: 'ROI Improvement', value: '300%', color: 'text-green-400' },
    { icon: Clock, label: 'Time Saved', value: '25 hrs/week', color: 'text-purple-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS solutions designed to streamline your business operations. From project management to marketing automation, we have the tools you need." />
        <meta name="keywords" content="micro saas, ai tools, business automation, productivity software, marketing tools, analytics dashboard" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Powerful AI-driven micro SAAS tools designed to automate, optimize, and accelerate your business operations. 
              Choose from our curated collection of intelligent solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-white font-medium">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:text-slate-900 transition-all inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SAAS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-slate-900'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
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

              {/* Sort */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose from our carefully curated collection of AI-powered micro SAAS tools designed to solve specific business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="group relative">
                <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 h-full flex flex-col">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Popular
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center`}>
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{service.rating}</span>
                        <span className="text-gray-400 text-sm">({service.reviews})</span>
                      </div>
                      <div className="text-sm text-gray-400">{service.users} users</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-xs text-gray-500">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="text-xs text-gray-300">
                            • {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-white">{service.price}</span>
                          {service.originalPrice && (
                            <>
                              <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                              <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                                {service.discount} OFF
                              </span>
                            </>
                          )}
                        </div>
                        <div className="text-sm text-gray-400">{service.trial}</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <a
                        href={service.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all text-center text-sm"
                      >
                        <Play className="w-4 h-4 inline mr-1" />
                        Try Demo
                      </a>
                      <a
                        href="/contact"
                        className="flex-1 border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all text-center text-sm"
                      >
                        <MessageSquare className="w-4 h-4 inline mr-1" />
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or browse all services</p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              All our micro SAAS solutions come with flexible pricing plans to fit your business needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Starter', 'Pro', 'Enterprise'].map((plan, index) => (
              <div key={plan} className={`bg-slate-800/50 rounded-xl p-6 ${index === 1 ? 'ring-2 ring-cyan-400' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan}</h3>
                  {index === 1 && (
                    <div className="bg-cyan-500 text-slate-900 px-3 py-1 rounded-full text-sm font-bold mb-4">
                      Most Popular
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Core features included</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Mobile app access</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Basic integrations</span>
                  </li>
                  {index >= 1 && (
                    <li className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Advanced AI features</span>
                    </li>
                  )}
                  {index >= 2 && (
                    <li className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>White-label solution</span>
                    </li>
                  )}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    index === 1
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already automated their operations with our micro SAAS solutions. 
            Start your free trial today and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
