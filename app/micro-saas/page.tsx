'use client';
import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const microSaasServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials.',
      category: 'content',
      price: '$29/month',
      rating: 4.8,
      users: 1200,
      icon: FileText,
      features: ['AI-powered writing', 'Multiple templates', 'SEO optimization', 'Brand voice matching'],
      popular: true
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive analytics with AI-powered insights and predictions.',
      category: 'analytics',
      price: '$49/month',
      rating: 4.9,
      users: 800,
      icon: BarChart,
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reports'],
      popular: true
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      description: 'Automated customer support with intelligent chatbots and ticket routing.',
      category: 'support',
      price: '$39/month',
      rating: 4.7,
      users: 950,
      icon: MessageSquare,
      features: ['24/7 availability', 'Multi-language support', 'Sentiment analysis', 'Escalation management'],
      popular: false
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing',
      description: 'Smart email campaigns with AI-driven personalization and optimization.',
      category: 'marketing',
      price: '$59/month',
      rating: 4.6,
      users: 650,
      icon: Mail,
      features: ['AI personalization', 'A/B testing', 'Send time optimization', 'Performance tracking'],
      popular: false
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      description: 'Intelligent inventory management with demand forecasting and optimization.',
      category: 'inventory',
      price: '$79/month',
      rating: 4.8,
      users: 420,
      icon: Database,
      features: ['Demand forecasting', 'Automated reordering', 'Cost optimization', 'Real-time tracking'],
      popular: false
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Smart project management with AI-powered task allocation and progress tracking.',
      category: 'productivity',
      price: '$69/month',
      rating: 4.7,
      users: 580,
      icon: Target,
      features: ['Smart task allocation', 'Progress prediction', 'Resource optimization', 'Risk assessment'],
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'content', name: 'Content', icon: FileText },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'support', name: 'Support', icon: MessageSquare },
    { id: 'marketing', name: 'Marketing', icon: Mail },
    { id: 'inventory', name: 'Inventory', icon: Database },
    { id: 'productivity', name: 'Productivity', icon: Target }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSaasServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort by selected criteria
    switch (sortBy) {
      case 'price-low':
        filtered = filtered.sort((a, b) => parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')));
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')));
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'users':
        filtered = filtered.sort((a, b) => b.users - a.users);
        break;
      default:
        // Keep original order for popularity
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const stats = [
    { icon: Users, value: '500+', label: 'Active Users' },
    { icon: Award, value: '50+', label: 'Micro SAAS Apps' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
    { icon: Shield, value: '100%', label: 'Secure' }
  ];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered Micro SAAS solutions designed to transform your business operations and boost productivity."
        keywords={["micro saas","ai solutions","business automation","productivity tools","ai software"]}
        canonicalUrl="https://ziontechgroup.com/micro-saas"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered Micro SAAS
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered Micro SAAS solutions designed to boost productivity and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Demo
              </a>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SAAS services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="users">Most Users</option>
                </select>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  service.popular
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                    : 'border-white/10'
                }`}
              >
                {service.popular && (
                  <div className="flex items-center gap-2 mb-4">
                    <Crown className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-medium">Popular</span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-2">{service.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        {service.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {service.users.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">per month</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8">
              Choose from our comprehensive suite of AI-powered Micro SAAS solutions and start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Sales
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;