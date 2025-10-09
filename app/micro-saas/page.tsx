import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Package } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = useMemo(() => [
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered scheduling, resource allocation, and risk prediction.',
      icon: Calendar,
      category: 'productivity',
      pricing: { starting: 79, period: 'month' },
      features: ['Smart task scheduling', 'Resource optimization', 'Risk prediction', 'Team collaboration', 'Gantt charts', 'Time tracking'],
      benefits: ['Complete projects 30% faster', 'Reduce project risks', 'Better team coordination'],
      popular: false,
      rating: 4.6,
      users: 4200,
      link: 'https://ziontechgroup.com/ai-project-manager'
    },
    {
      id: 'ai-invoice-generator',
      name: 'Smart Invoice AI',
      description: 'Automate invoice creation and management with AI-powered data extraction and processing.',
      icon: FileText,
      category: 'automation',
      pricing: { starting: 49, period: 'month' },
      features: ['Auto data extraction', 'Smart categorization', 'Payment tracking', 'Tax calculations', 'Multi-currency', 'Recurring billing'],
      benefits: ['Save 5 hours weekly', 'Reduce errors by 95%', 'Faster payments'],
      popular: true,
      rating: 4.8,
      users: 8900,
      link: 'https://ziontechgroup.com/ai-invoice-generator'
    },
    {
      id: 'ai-content-optimizer',
      name: 'Content Optimizer Pro',
      description: 'Optimize your content for SEO, readability, and engagement with advanced AI analysis.',
      icon: Target,
      category: 'content',
      pricing: { starting: 29, period: 'month' },
      features: ['SEO optimization', 'Readability analysis', 'Engagement scoring', 'A/B testing', 'Keyword research', 'Content suggestions'],
      benefits: ['Increase traffic by 40%', 'Better user engagement', 'Higher conversion rates'],
      popular: false,
      rating: 4.7,
      users: 5600,
      link: 'https://ziontechgroup.com/content-optimizer'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'Business Intelligence AI',
      description: 'Comprehensive business analytics with AI-powered insights and predictive modeling.',
      icon: BarChart,
      category: 'analytics',
      pricing: { starting: 99, period: 'month' },
      features: ['Real-time analytics', 'Predictive insights', 'Custom reports', 'Data visualization', 'Automated alerts', 'ROI tracking'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Optimize performance'],
      popular: true,
      rating: 4.9,
      users: 12000,
      link: 'https://ziontechgroup.com/analytics-dashboard'
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Support Bot',
      description: 'Intelligent customer support automation with natural language processing and sentiment analysis.',
      icon: Bot,
      category: 'automation',
      pricing: { starting: 39, period: 'month' },
      features: ['24/7 support', 'Multi-language', 'Sentiment analysis', 'Ticket routing', 'Knowledge base', 'Live chat handoff'],
      benefits: ['Reduce support costs by 60%', 'Instant responses', 'Improved customer satisfaction'],
      popular: true,
      rating: 4.8,
      users: 15600,
      link: 'https://ziontechgroup.com/ai-support-bot'
    },
    {
      id: 'ai-social-media-manager',
      name: 'Social Media AI',
      description: 'Automated social media management with AI-powered content creation and scheduling.',
      icon: Globe,
      category: 'content',
      pricing: { starting: 59, period: 'month' },
      features: ['Auto posting', 'Content generation', 'Hashtag optimization', 'Engagement tracking', 'Multi-platform', 'Analytics'],
      benefits: ['Increase engagement by 50%', 'Save 10 hours weekly', 'Better brand consistency'],
      popular: false,
      rating: 4.6,
      users: 7200,
      link: 'https://ziontechgroup.com/social-media-ai'
    },
    {
      id: 'ai-expense-tracker',
      name: 'Smart Expense Tracker',
      description: 'AI-powered expense management with automatic categorization and receipt processing.',
      icon: Calculator,
      category: 'productivity',
      pricing: { starting: 19, period: 'month' },
      features: ['Receipt scanning', 'Auto categorization', 'Tax preparation', 'Budget tracking', 'Expense reports', 'Mobile app'],
      benefits: ['Save 3 hours weekly', 'Reduce errors by 90%', 'Better tax compliance'],
      popular: false,
      rating: 4.7,
      users: 9800,
      link: 'https://ziontechgroup.com/expense-tracker'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'SEO Optimizer AI',
      description: 'Advanced SEO optimization with AI-powered keyword research and content analysis.',
      icon: Search,
      category: 'content',
      pricing: { starting: 69, period: 'month' },
      features: ['Keyword research', 'Content optimization', 'Competitor analysis', 'Rank tracking', 'Technical SEO', 'Local SEO'],
      benefits: ['Increase organic traffic by 80%', 'Better search rankings', 'Competitive advantage'],
      popular: true,
      rating: 4.9,
      users: 13400,
      link: 'https://ziontechgroup.com/seo-optimizer'
    },
    {
      id: 'ai-email-marketing',
      name: 'Email Marketing AI',
      description: 'Intelligent email marketing with AI-powered personalization and automation.',
      icon: Mail,
      category: 'automation',
      pricing: { starting: 49, period: 'month' },
      features: ['AI personalization', 'Send time optimization', 'A/B testing', 'Segmentation', 'Analytics', 'Templates'],
      benefits: ['Increase open rates by 40%', 'Better click-through rates', 'Automated campaigns'],
      popular: false,
      rating: 4.6,
      users: 8100,
      link: 'https://ziontechgroup.com/email-marketing-ai'
    },
    {
      id: 'ai-inventory-management',
      name: 'Smart Inventory AI',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      icon: Package,
      category: 'automation',
      pricing: { starting: 89, period: 'month' },
      features: ['Demand forecasting', 'Auto reordering', 'Stock optimization', 'Multi-location', 'Barcode scanning', 'Analytics'],
      benefits: ['Reduce stockouts by 70%', 'Lower inventory costs', 'Better cash flow'],
      popular: true,
      rating: 4.8,
      users: 11200,
      link: 'https://ziontechgroup.com/inventory-ai'
    },
    {
      id: 'ai-appointment-scheduler',
      name: 'Smart Scheduler Pro',
      description: 'Intelligent appointment scheduling with AI-powered optimization and automated reminders.',
      icon: Clock,
      category: 'productivity',
      pricing: { starting: 29, period: 'month' },
      features: ['Auto scheduling', 'Calendar integration', 'Reminder automation', 'Time zone handling', 'Recurring appointments', 'Analytics'],
      benefits: ['Reduce no-shows by 50%', 'Save 5 hours weekly', 'Better customer experience'],
      popular: false,
      rating: 4.7,
      users: 6500,
      link: 'https://ziontechgroup.com/smart-scheduler'
    },
    {
      id: 'ai-lead-scoring',
      name: 'Lead Scoring AI',
      description: 'AI-powered lead qualification and scoring to identify high-value prospects.',
      icon: Target,
      category: 'analytics',
      pricing: { starting: 79, period: 'month' },
      features: ['Lead scoring', 'Behavioral analysis', 'Predictive modeling', 'CRM integration', 'Custom scoring', 'Reporting'],
      benefits: ['Increase conversion by 35%', 'Better lead quality', 'Improved sales efficiency'],
      popular: true,
      rating: 4.8,
      users: 9200,
      link: 'https://ziontechgroup.com/lead-scoring-ai'
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'content', name: 'Content Creation', icon: FileText },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'productivity', name: 'Productivity', icon: Clock },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'support', name: 'Customer Support', icon: MessageSquare }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;

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

    // Sort services
    switch (sortBy) {
      case 'popularity':
        filtered.sort((a, b) => b.users - a.users);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.pricing.starting - b.pricing.starting);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricing.starting - a.pricing.starting);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, microSAASServices]);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover powerful micro SAAS solutions for your business. AI-powered tools for productivity, automation, content creation, and analytics." />
        <meta name="keywords" content="micro saas, saas solutions, business tools, productivity software, automation tools" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS Solutions</span>
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Powerful, focused tools for specific business needs
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Discover our collection of specialized micro SAAS applications designed to solve specific business challenges with precision and efficiency.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SAAS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {categories.map(category => (
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
                  <option value="rating" className="bg-slate-800">Highest Rated</option>
                  <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                  <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        {service.popular && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-600 to-purple-600 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">${service.pricing.starting}</div>
                      <div className="text-sm text-gray-400">/{service.pricing.period}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-blue-400 mr-1" />
                      {service.users.toLocaleString()} users
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
                    >
                      <span>Try Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="/contact"
                      className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4" />
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We can build a custom micro SAAS solution tailored to your specific business needs and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Request Custom Solution
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
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