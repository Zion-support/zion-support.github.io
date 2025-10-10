<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasPage: React.FC = () => {
  return(<>)
      <Helmet>)
        <title>Micro SAAS Solutions - Zion Tech Group</title>)
        <meta name="description" content="Discover our comprehensive suite of AI-powered Micro SAAS solutions designed to transform your business operations and boost productivity." />),
        <meta name="keywords" content="micro saas, ai solutions, business automation, productivity tools, ai software" />
        <link rel="canonical" href="https: //ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI-Powered Micro SAAS<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">Transform your business with our comprehensive suite of AI-powered Micro SAAS solutions.</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI-Powered Micro SAAS;
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered Micro SAAS solutions.
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"></div>
          <div className="text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI-Powered Micro SAAS</h1><p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">Transform your business with our comprehensive suite of AI-powered Micro SAAS solutions.</p>
            </p>
          </div>
        </div>
      </div>,
    </>);
};

export default MicroSaasPage;
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Search as SearchIcon, FileText as FileTextIcon } from 'lucide-react';
=======
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Package, Mic, PenTool, Box, Shirt, Wifi, Link, Atom } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
>>>>>>> origin/resolve-merge-conflicts

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
<<<<<<< HEAD
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      icon: FileText,
      category: 'ai',
      price: 29,
      features: ['Blog post generation', 'Social media content', 'Email templates', 'SEO optimization'],
      rating: 4.8,
      users: 1250,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'expense-tracker',
      name: 'Smart Expense Tracker',
      description: 'Track and categorize expenses with AI-powered insights and automated categorization.',
      icon: DollarSign,
      category: 'finance',
      price: 19,
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Tax reporting'],
      rating: 4.6,
      users: 890,
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'social-scheduler',
      name: 'Social Media Scheduler',
      description: 'Schedule and manage social media posts across multiple platforms with optimal timing.',
      icon: Calendar,
      category: 'marketing',
      price: 39,
      features: ['Multi-platform posting', 'Optimal timing', 'Content calendar', 'Analytics'],
      rating: 4.7,
      users: 2100,
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'project-manager',
      name: 'AI Project Manager',
      description: 'Intelligent project management with automated task assignment and progress tracking.',
      icon: Target,
      category: 'productivity',
      price: 49,
      features: ['Task automation', 'Team collaboration', 'Progress tracking', 'Resource planning'],
      rating: 4.9,
      users: 1800,
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 'email-automation',
      name: 'Email Automation Suite',
      description: 'Create and manage email campaigns with advanced automation and personalization.',
      icon: Mail,
      category: 'marketing',
      price: 35,
      features: ['Email templates', 'Automation workflows', 'A/B testing', 'Analytics'],
      rating: 4.5,
      users: 1650,
      color: 'from-indigo-400 to-purple-500'
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-driven insights, automated scheduling, and resource optimization.',
      category: 'ai-tools',
      price: '$29/month',
      rating: 4.8,
      users: 1250,
      features: ['AI-powered scheduling', 'Resource optimization', 'Risk prediction', 'Team collaboration'],
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'smart-analytics',
      name: 'Smart Analytics Dashboard',
      description: 'Advanced analytics and reporting with real-time insights and predictive modeling.',
      category: 'analytics',
      price: '$49/month',
      rating: 4.9,
      users: 2100,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Suite',
      description: 'Automated customer support with intelligent chatbots and ticket management.',
      category: 'customer-service',
      price: '$39/month',
      rating: 4.7,
      users: 1800,
      features: ['AI chatbots', 'Ticket automation', 'Sentiment analysis', 'Multi-channel support'],
      icon: MessageSquare,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'content-generator',
      name: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing campaigns.',
      category: 'content',
      price: '$19/month',
      rating: 4.6,
      users: 3200,
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'SEO optimization'],
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'security-monitor',
      name: 'Security Monitor Pro',
      description: 'Comprehensive security monitoring and threat detection for small businesses.',
      category: 'security',
      price: '$59/month',
      rating: 4.9,
      users: 950,
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance monitoring', 'Incident response'],
      icon: Shield,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'inventory-manager',
      name: 'Smart Inventory Manager',
      description: 'Track inventory levels with AI-powered demand forecasting and reorder alerts.',
      icon: Package,
      category: 'business',
      price: 45,
      features: ['Demand forecasting', 'Reorder alerts', 'Multi-location tracking', 'Analytics'],
      rating: 4.6,
      users: 950,
      color: 'from-teal-400 to-cyan-500'
    },
    {
      id: 'customer-support',
      name: 'AI Customer Support',
      description: 'Automated customer support with intelligent chatbots and ticket management.',
      icon: MessageSquare,
      category: 'support',
      price: 59,
      features: ['AI chatbots', 'Ticket routing', 'Knowledge base', 'Multi-language'],
      rating: 4.8,
      users: 2200,
      color: 'from-rose-400 to-pink-500'
    },
    {
      id: 'analytics-dashboard',
      name: 'Business Analytics Dashboard',
      description: 'Comprehensive business analytics with real-time insights and custom reports.',
      icon: BarChart,
      category: 'analytics',
      price: 69,
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Export options'],
      rating: 4.7,
      users: 1400,
      color: 'from-amber-400 to-orange-500'
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      category: 'inventory',
      price: '$34/month',
      rating: 4.5,
      users: 1400,
      features: ['Demand forecasting', 'Automated reordering', 'Stock optimization', 'Multi-location support'],
      icon: Database,
      color: 'from-pink-500 to-rose-500'
=======
  const [searchTerm, setSearchTerm] = useState('');

  const microSAASServices = [
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Intelligent project management with AI-powered insights and automation.',
      icon: Brain,
      category: 'productivity',
      pricing: { starting: 99, period: 'month' },
      features: ['Smart task scheduling', 'Resource optimization', 'Risk prediction', 'Team collaboration', 'Progress tracking', 'Automated reporting'],
      benefits: ['Complete projects 30% faster', 'Reduce project risks', 'Better team coordination'],
      popular: false,
      rating: 4.6,
      users: 4200,
      link: 'https://ziontechgroup.com/ai-project-manager'
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization',
      description: 'Transform complex data into beautiful, interactive visualizations with AI-powered insights.',
      icon: BarChart,
      category: 'analytics',
      pricing: { starting: 69, period: 'month' },
      features: ['Auto chart generation', 'Interactive dashboards', 'Real-time updates', 'Custom themes', 'Export options', 'Collaboration tools'],
      benefits: ['Make data accessible', 'Faster decision making', 'Professional presentations'],
      popular: true,
      rating: 4.8,
      users: 8500,
      link: 'https://ziontechgroup.com/ai-data-visualization'
    },
    {
      id: 'smart-invoice-ai',
      name: 'Smart Invoice AI',
      description: 'Automate invoice creation and management with AI-powered data extraction and processing.',
      icon: FileText,
      category: 'automation',
      pricing: { starting: 49, period: 'month' },
      features: ['Auto data extraction', 'Smart categorization', 'Payment tracking', 'Tax calculations', 'Multi-currency', 'Recurring billing'],
      benefits: ['Save 10+ hours weekly', 'Reduce errors by 95%', 'Faster payments'],
      popular: false,
      rating: 4.7,
      users: 3200,
      link: 'https://ziontechgroup.com/smart-invoice-ai'
>>>>>>> origin/resolve-merge-conflicts
    }
  ];

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI Tools', icon: Brain },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'business', name: 'Business', icon: Briefcase },
    { id: 'support', name: 'Support', icon: MessageSquare },
    { id: 'analytics', name: 'Analytics', icon: BarChart }
    { id: 'all', name: 'All Services', count: microSAASServices.length },
    { id: 'ai-tools', name: 'AI Tools', count: microSAASServices.filter(s => s.category === 'ai-tools').length },
    { id: 'analytics', name: 'Analytics', count: microSAASServices.filter(s => s.category === 'analytics').length },
    { id: 'customer-service', name: 'Customer Service', count: microSAASServices.filter(s => s.category === 'customer-service').length },
    { id: 'content', name: 'Content', count: microSAASServices.filter(s => s.category === 'content').length },
    { id: 'security', name: 'Security', count: microSAASServices.filter(s => s.category === 'security').length },
    { id: 'inventory', name: 'Inventory', count: microSAASServices.filter(s => s.category === 'inventory').length }
=======
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'productivity', name: 'Productivity', icon: Clock },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'content', name: 'Content Creation', icon: FileText },
    { id: 'automation', name: 'Automation', icon: Zap },
>>>>>>> origin/resolve-merge-conflicts
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;
<<<<<<< HEAD
=======

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
>>>>>>> origin/resolve-merge-conflicts

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

<<<<<<< HEAD
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
        return filtered.sort((a, b) => parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')));
      case 'price-high':
        return filtered.sort((a, b) => parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')));
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'users':
        return filtered.sort((a, b) => b.users - a.users);
      default:
        return filtered;
    }
  }, [searchTerm, selectedCategory, sortBy]);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'micro_saas_phone_number'});
    }
  };
=======
    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.pricing.starting - b.pricing.starting);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricing.starting - a.pricing.starting);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => b.users - a.users);
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, microSAASServices]);
>>>>>>> origin/resolve-merge-conflicts

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover powerful micro SaaS solutions designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro saas, saas solutions, business tools, productivity software, AI tools" />
=======
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover powerful micro SAAS solutions for your business. AI-powered tools for productivity, automation, content creation, and analytics." />
        <meta name="keywords" content="micro saas, saas solutions, business tools, productivity software, automation tools" />
>>>>>>> origin/resolve-merge-conflicts
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover powerful micro SaaS solutions designed to streamline your business operations and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SaaS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* Sort */}
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="users">Most Users</option>
                  </select>
                </div>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS Solutions</span>
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Powerful, focused tools for specific business needs
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Discover our collection of specialized micro SAAS applications designed to solve specific business challenges with AI-powered intelligence.
            </p>
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b8f2
  const microSaasServices = [
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and automated reporting',
      category: 'analytics',
      icon: BarChart,
      price: '$299/month',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Automated report generation',
        'Custom dashboard creation',
        'Multi-source data integration',
        'Predictive analytics',
        'Mobile-responsive design',
        'API integration'
      ],
      benefits: [
        'Make data-driven decisions faster',
        'Identify trends and opportunities',
        'Reduce manual reporting time',
        'Improve business performance'
      ],
      targetAudience: 'Small to medium businesses, Data analysts, Managers',
      setupTime: '1-2 weeks',
      freeTrial: '14 days',
      support: 'Dedicated support team',
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify'],
      link: 'https://ziontechgroup.com/micro-saas/analytics-dashboard'
    },
    {
      id: 'smart-support-bot',
      name: 'Smart Support Bot',
      description: 'AI-powered customer service automation with natural language processing',
      category: 'customer-service',
      icon: Bot,
      price: '$199/month',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Automated ticket routing',
        'Knowledge base integration',
        'Sentiment analysis',
        'Escalation to human agents',
        'Custom training',
        'Analytics and reporting'
      ],
      benefits: [
        '24/7 customer support',
        'Reduce support costs',
        'Improve response times',
        'Scale customer service'
      ],
      targetAudience: 'E-commerce, SaaS companies, Service businesses',
      setupTime: '1 week',
      freeTrial: '7 days',
      support: 'Implementation specialist',
      integrations: ['Zendesk', 'Intercom', 'Slack', 'Discord', 'WhatsApp'],
      link: 'https://ziontechgroup.com/micro-saas/support-bot'
    },
    {
      id: 'social-media-manager',
      name: 'Social Media Manager',
      description: 'AI-powered social media management with content creation and scheduling',
      category: 'marketing',
      icon: Target,
      price: '$149/month',
      features: [
        'Content creation and curation',
        'Automated posting schedule',
        'Hashtag optimization',
        'Engagement tracking',
        'Multi-platform management',
        'Analytics and insights',
        'Brand voice consistency',
        'Trend analysis'
      ],
      benefits: [
        'Save time on social media',
        'Increase engagement',
        'Maintain consistent posting',
        'Grow your following'
      ],
      targetAudience: 'Small businesses, Content creators, Marketing agencies',
      setupTime: '3-5 days',
      freeTrial: '7 days',
      support: 'Social media specialist',
      integrations: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'TikTok'],
      link: 'https://ziontechgroup.com/micro-saas/social-manager'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'customer-service', name: 'Customer Service', icon: Bot },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'finance', name: 'Finance', icon: DollarSign }
  ];

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS solutions designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, productivity software, AI solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse">
            Micro <span className="holographic-text">SaaS</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
            Powerful, affordable AI-powered micro SaaS tools designed to solve specific business problems. 
            Start with a free trial and scale as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SAAS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full sm:w-80"
                  />
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-slate-800">
                      {category.name}
                    </option>
                  ))}
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="popularity" className="bg-slate-800">Most Popular</option>
                  <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                  <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                  <option value="name" className="bg-slate-800">Name A-Z</option>
                </select>
>>>>>>> origin/resolve-merge-conflicts
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
<<<<<<< HEAD
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.users} users)</span>
                    </div>
                    <div className="text-cyan-400 font-bold text-lg">${service.price}/mo</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Try Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Custom Micro SaaS Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We can build a custom micro SaaS solution tailored to your specific business needs.
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">({service.users.toLocaleString()} users)</span>
                        </div>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-white">${service.pricing.starting}</span>
                      <span className="text-gray-400">/{service.pricing.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Starting price
                    </div>
                  </div>
                  
                  <a
                    href={service.link}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
=======
      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Free Trial:</span>
                    <span className="text-green-400">{service.freeTrial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target:</span>
                    <span className="text-white">{service.targetAudience}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    Get Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We can build a custom micro SAAS solution tailored to your specific business needs.
=======
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Purpose-Built Applications</title>
        <meta name="description" content="Discover our collection of micro SaaS applications designed to solve specific business challenges with AI-powered automation and intelligent features." />
        <meta name="keywords" content="micro SaaS, business applications, automation, AI tools, productivity software" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Purpose-built applications that solve specific business challenges. 
                Each micro SaaS tool is designed to integrate seamlessly into your workflow.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b8f2
>>>>>>> origin/resolve-merge-conflicts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
<<<<<<< HEAD
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Custom Quote
                </Link>
              </div>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS services designed to streamline your business operations." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our collection of micro SaaS services designed to streamline your business operations and boost productivity.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="rating">Sort by Rating</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="users">Most Users</option>
              </select>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 border-cyan-400 text-white'
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{service.rating}</span>
                    <span className="text-gray-400">({service.users} users)</span>
                  </div>
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We can create a custom micro SaaS solution tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
=======
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Consultation
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </div>
            
            {/* Search and Filter Section */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SaaS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <service.icon className="w-12 h-12" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-sm text-gray-400">per month</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-white">{service.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Free Trial:</span>
                        <span className="text-green-400">{service.freeTrial}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Target:</span>
                        <span className="text-white">{service.targetAudience}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Start Free Trial
                      </a>
                      <a
                        href="tel:+13024640950"
                        className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 inline mr-2" />
                        Get Demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-cyan-400 mb-8 neon-glow">
                Our micro SaaS solutions are designed to integrate seamlessly into your existing workflow. 
                All implementations include free trials, dedicated support, and ongoing optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                >
                  <Mail className="w-5 h-5" />
                  Get Custom Solution
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
>>>>>>> origin/resolve-merge-conflicts
      </div>
    
  );
};

<<<<<<< HEAD
export default MicroSAASPage;
=======
export default MicroSaasPage;
>>>>>>> origin/resolve-merge-conflicts
