<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasPage: React.FC = () => {
  return(<>,)
      <Helmet>,)
        <title>Micro SAAS Solutions - Zion Tech Group</title>,)
        <meta name="description" content="Discover our comprehensive suite of AI-powered Micro SAAS solutions designed to transform your business operations and boost productivity." />),
        <meta name="keywords" content="micro saas, ai solutions, business automation, productivity tools, ai software" />
        <link rel="canonical" href="https: //ziontechgroup.com/micro-saas" />
      </Helmet>

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
<<<<<<< HEAD
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI-Powered Micro SAAS<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">Transform your business with our comprehensive suite of AI-powered Micro SAAS solutions.</p>
=======
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI-Powered Micro SAAS;
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered Micro SAAS solutions.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"></div>
          <div className="text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI-Powered Micro SAAS</h1><p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">Transform your business with our comprehensive suite of AI-powered Micro SAAS solutions.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            </p>
          </div>
        </div>
      </div>,
    </>,
  );
};

export default MicroSaasPage;
=======
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
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
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI Tools', icon: Brain },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'business', name: 'Business', icon: Briefcase },
    { id: 'support', name: 'Support', icon: MessageSquare },
    { id: 'analytics', name: 'Analytics', icon: BarChart }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

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
        event_label: 'micro_saas_phone_number',
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover powerful micro SaaS solutions designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro saas, saas solutions, business tools, productivity software, AI tools" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
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
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
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
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
