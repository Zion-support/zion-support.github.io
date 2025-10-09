'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Rocket, Code, Database, Smartphone, Lock, Settings, Calendar, FileText, Image, Video, Music, Palette, ShoppingCart, CreditCard, PieChart, LineChart, Activity, Zap as Lightning, Globe as World, Shield as Security, Users as Team, Clock as Time, Star as Rating, TrendingUp as Growth, BarChart as Analytics, MessageSquare as Chat, Eye as View, Sparkles as Magic, ArrowRight as Arrow, Phone as Call, Mail as Email, MapPin as Location, CheckCircle as Check, DollarSign as Money, Award as Trophy, Rocket as Launch, Code as Dev, Database as Data, Smartphone as Mobile, Lock as Secure, Settings as Config, Calendar as Schedule, FileText as Document, Image as Photo, Video as Media, Music as Audio, Palette as Design, ShoppingCart as Cart, CreditCard as Payment, PieChart as Pie, LineChart as Line, Activity as ActivityIcon } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const microSaasServices = useMemo(() => [
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered insights, automated scheduling, and real-time collaboration tools.',
      category: 'productivity',
      price: 29,
      priceType: 'month',
      features: [
        'AI-powered task prioritization',
        'Automated resource allocation',
        'Real-time progress tracking',
        'Smart deadline predictions',
        'Team collaboration tools',
        'Integration with 50+ tools',
        'Custom reporting dashboard',
        'Mobile app access'
      ],
      benefits: [
        'Increase productivity by 40%',
        'Reduce project delays by 60%',
        'Save 15 hours per week',
        'Improve team collaboration'
      ],
      icon: BarChart,
      color: 'blue',
      popular: true,
      rating: 4.9,
      users: 12500,
      launchDate: '2024-01-15',
      tags: ['AI', 'Project Management', 'Productivity', 'Collaboration']
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation, scheduling, and analytics across all platforms.',
      category: 'marketing',
      price: 49,
      priceType: 'month',
      features: [
        'AI content generation',
        'Multi-platform posting',
        'Optimal timing suggestions',
        'Hashtag optimization',
        'Engagement analytics',
        'Competitor analysis',
        'Auto-responder',
        'Content calendar'
      ],
      benefits: [
        'Increase engagement by 300%',
        'Save 20 hours per week',
        'Grow followers by 150%',
        'Boost brand awareness'
      ],
      icon: MessageSquare,
      color: 'purple',
      popular: true,
      rating: 4.8,
      users: 8900,
      launchDate: '2024-02-01',
      tags: ['AI', 'Social Media', 'Marketing', 'Automation']
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Advanced business intelligence with AI-powered insights, predictive analytics, and custom reporting.',
      category: 'analytics',
      price: 79,
      priceType: 'month',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom KPI tracking',
        'Automated insights',
        'Data integration',
        'Custom dashboards',
        'Alert system',
        'Export capabilities'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends 3x faster',
        'Reduce analysis time by 70%',
        'Increase revenue by 25%'
      ],
      icon: PieChart,
      color: 'green',
      popular: true,
      rating: 4.9,
      users: 15600,
      launchDate: '2024-01-20',
      tags: ['AI', 'Analytics', 'Business Intelligence', 'Data Visualization']
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI-powered personalization, A/B testing, and automated campaigns.',
      category: 'marketing',
      price: 39,
      priceType: 'month',
      features: [
        'AI content personalization',
        'Smart segmentation',
        'Automated workflows',
        'A/B testing',
        'Deliverability optimization',
        'Template library',
        'Performance analytics',
        'CRM integration'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates by 30%',
        'Save 10 hours per week'
      ],
      icon: Mail,
      color: 'orange',
      popular: true,
      rating: 4.7,
      users: 11200,
      launchDate: '2024-02-15',
      tags: ['AI', 'Email Marketing', 'Automation', 'Personalization']
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      description: '24/7 AI-powered customer support with natural language processing and seamless human handoff.',
      category: 'support',
      price: 59,
      priceType: 'month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Human handoff capability',
        'Knowledge base integration',
        'Sentiment analysis',
        'Ticket management',
        'Live chat integration',
        'Performance metrics'
      ],
      benefits: [
        'Reduce support costs by 50%',
        'Improve response time by 80%',
        'Increase customer satisfaction',
        'Handle 90% of queries automatically'
      ],
      icon: MessageSquare,
      color: 'cyan',
      popular: true,
      rating: 4.8,
      users: 18700,
      launchDate: '2024-01-10',
      tags: ['AI', 'Customer Support', 'Chatbot', 'Automation']
    },
    {
      id: 'ai-code-review-assistant',
      name: 'AI Code Review Assistant',
      description: 'Automated code review with AI-powered suggestions, security scanning, and best practice recommendations.',
      category: 'development',
      price: 69,
      priceType: 'month',
      features: [
        'Automated code analysis',
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Code quality metrics',
        'Best practice recommendations',
        'Multi-language support',
        'Git integration',
        'Team collaboration'
      ],
      benefits: [
        'Reduce bugs by 40%',
        'Improve code quality',
        'Save 8 hours per week',
        'Accelerate development'
      ],
      icon: Code,
      color: 'indigo',
      popular: false,
      rating: 4.6,
      users: 5600,
      launchDate: '2024-03-01',
      tags: ['AI', 'Code Review', 'Development', 'Security']
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'AI-powered content creation for blogs, social media, ads, and marketing materials with brand voice consistency.',
      category: 'content',
      price: 45,
      priceType: 'month',
      features: [
        'Multi-format content creation',
        'Brand voice training',
        'SEO optimization',
        'Plagiarism detection',
        'Content calendar',
        'Team collaboration',
        'Version control',
        'Performance tracking'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain brand consistency',
        'Improve SEO rankings',
        'Reduce content costs by 60%'
      ],
      icon: FileText,
      color: 'pink',
      popular: false,
      rating: 4.5,
      users: 7200,
      launchDate: '2024-02-20',
      tags: ['AI', 'Content Creation', 'Writing', 'SEO']
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      description: 'Comprehensive SEO optimization with AI-powered keyword research, content analysis, and ranking tracking.',
      category: 'seo',
      price: 55,
      priceType: 'month',
      features: [
        'AI keyword research',
        'Content optimization',
        'Technical SEO analysis',
        'Competitor tracking',
        'Ranking monitoring',
        'Backlink analysis',
        'Site speed optimization',
        'Local SEO tools'
      ],
      benefits: [
        'Increase organic traffic by 200%',
        'Improve search rankings',
        'Save 12 hours per week',
        'Boost conversion rates'
      ],
      icon: Target,
      color: 'yellow',
      popular: false,
      rating: 4.7,
      users: 9800,
      launchDate: '2024-03-10',
      tags: ['AI', 'SEO', 'Marketing', 'Optimization']
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered pricing suggestions, payment tracking, and financial analytics.',
      category: 'finance',
      price: 25,
      priceType: 'month',
      features: [
        'Automated invoice generation',
        'AI pricing suggestions',
        'Payment tracking',
        'Financial analytics',
        'Tax calculations',
        'Multi-currency support',
        'Client management',
        'Integration with accounting software'
      ],
      benefits: [
        'Reduce invoicing time by 80%',
        'Improve payment collection',
        'Minimize billing errors',
        'Save 5 hours per week'
      ],
      icon: CreditCard,
      color: 'emerald',
      popular: false,
      rating: 4.4,
      users: 4200,
      launchDate: '2024-03-15',
      tags: ['AI', 'Invoicing', 'Finance', 'Automation']
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Smart expense tracking with AI categorization, receipt scanning, and automated expense reports.',
      category: 'finance',
      price: 19,
      priceType: 'month',
      features: [
        'Receipt scanning with OCR',
        'AI expense categorization',
        'Automated expense reports',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support',
        'Team expense management',
        'Integration with accounting tools'
      ],
      benefits: [
        'Save 6 hours per week',
        'Improve expense accuracy',
        'Simplify tax preparation',
        'Better budget control'
      ],
      icon: PieChart,
      color: 'teal',
      popular: false,
      rating: 4.3,
      users: 3100,
      launchDate: '2024-03-20',
      tags: ['AI', 'Expense Tracking', 'Finance', 'Automation']
    },
    {
      id: 'ai-scheduler',
      name: 'AI Smart Scheduler',
      description: 'Intelligent scheduling with AI-powered meeting optimization, time zone handling, and conflict resolution.',
      category: 'productivity',
      price: 35,
      priceType: 'month',
      features: [
        'AI meeting optimization',
        'Time zone management',
        'Conflict resolution',
        'Calendar integration',
        'Meeting analytics',
        'Team scheduling',
        'Resource booking',
        'Mobile app'
      ],
      benefits: [
        'Reduce scheduling conflicts by 90%',
        'Save 3 hours per week',
        'Improve meeting efficiency',
        'Better time management'
      ],
      icon: Calendar,
      color: 'violet',
      popular: false,
      rating: 4.5,
      users: 6800,
      launchDate: '2024-04-01',
      tags: ['AI', 'Scheduling', 'Productivity', 'Time Management']
    },
    {
      id: 'ai-time-tracker',
      name: 'AI Time Tracker',
      description: 'Advanced time tracking with AI-powered productivity insights, automatic time categorization, and performance analytics.',
      category: 'productivity',
      price: 29,
      priceType: 'month',
      features: [
        'Automatic time tracking',
        'AI productivity insights',
        'Project time allocation',
        'Performance analytics',
        'Team time management',
        'Integration with project tools',
        'Billing automation',
        'Mobile tracking'
      ],
      benefits: [
        'Increase productivity by 25%',
        'Accurate time billing',
        'Better project planning',
        'Identify time wasters'
      ],
      icon: Clock,
      color: 'blue',
      popular: false,
      rating: 4.4,
      users: 5400,
      launchDate: '2024-04-05',
      tags: ['AI', 'Time Tracking', 'Productivity', 'Analytics']
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'productivity', name: 'Productivity', count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'support', name: 'Support', count: microSaasServices.filter(s => s.category === 'support').length },
    { id: 'development', name: 'Development', count: microSaasServices.filter(s => s.category === 'development').length },
    { id: 'content', name: 'Content', count: microSaasServices.filter(s => s.category === 'content').length },
    { id: 'seo', name: 'SEO', count: microSaasServices.filter(s => s.category === 'seo').length },
    { id: 'finance', name: 'Finance', count: microSaasServices.filter(s => s.category === 'finance').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSaasServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'users':
        filtered.sort((a, b) => b.users - a.users);
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
  }, [microSaasServices, searchTerm, selectedCategory, sortBy]);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      cyan: 'from-cyan-500 to-cyan-600',
      indigo: 'from-indigo-500 to-indigo-600',
      pink: 'from-pink-500 to-pink-600',
      yellow: 'from-yellow-500 to-yellow-600',
      emerald: 'from-emerald-500 to-emerald-600',
      teal: 'from-teal-500 to-teal-600',
      violet: 'from-violet-500 to-violet-600'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of AI-powered micro SAAS solutions designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro saas, ai solutions, business automation, productivity tools, software as a service" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our AI-powered micro SAAS solutions. Increase productivity, reduce costs, and accelerate growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover our comprehensive collection of AI-powered micro SAAS solutions designed to 
                streamline your business operations, boost productivity, and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">12+</div>
                <div className="text-gray-300">Micro SAAS Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">100K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">4.7</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search micro SAAS solutions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="lg:w-64">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort */}
                  <div className="lg:w-48">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="popularity">Most Popular</option>
                      <option value="rating">Highest Rated</option>
                      <option value="users">Most Users</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getColorClasses(service.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      {service.popular && (
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
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
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        ${service.price}
                        <span className="text-sm text-gray-400">/{service.priceType}</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        {service.users.toLocaleString()} users
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-300">Launched</div>
                      <div className="text-xs text-gray-400">
                        {new Date(service.launchDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex space-x-2">
                    <a
                      href={`/contact?service=${service.id}`}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                    >
                      Get Started
                    </a>
                    <a
                      href={`/demo?service=${service.id}`}
                      className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400/10 transition-all"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSortBy('popularity');
                  }}
                  className="cyber-button"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-400/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Our team can create a custom micro SAAS solution tailored to your specific business needs. 
                  Get a free consultation and see how we can help transform your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MicroSAASPage;