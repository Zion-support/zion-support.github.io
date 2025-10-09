'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, ArrowRight, Phone, Mail, MapPin, CheckCircle, Award, Calendar, Settings, FileText, Database, Smartphone, Lock, Code, PieChart, Activity, CreditCard, ShoppingCart, Camera, Music, Video, Palette, Wrench, Lightbulb, Rocket, Heart } from 'lucide-react';
=======
import { 
  Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, 
  BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, 
  DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, 
  FileText, Calendar, PieChart, Activity, ExternalLink, ChevronRight, Crown, Rocket, 
  Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, 
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, 
  Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot
} from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-f2a7

export default function MicroSaasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
<<<<<<< HEAD

  const microSAASServices = [
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Intelligent expense tracking and financial management',
      category: 'finance',
      price: { starting: 29, period: 'month' },
      rating: 4.8,
      reviews: 892,
      features: ['Smart categorization', 'Receipt scanning', 'Budget alerts', 'Tax preparation'],
      icon: BarChart,
      popular: true
    },
    {
      id: 'ai-scheduler',
      name: 'AI Scheduler',
      description: 'Automated scheduling and calendar management',
      category: 'productivity',
      price: { starting: 19, period: 'month' },
      rating: 4.7,
      reviews: 654,
      features: ['Auto-scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync'],
      icon: Calendar,
      popular: true
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Automated invoice creation and management',
      category: 'finance',
      price: { starting: 39, period: 'month' },
      rating: 4.6,
      reviews: 423,
      features: ['Auto-generation', 'Payment tracking', 'Client management', 'Tax compliance'],
      icon: FileText,
=======
  const [sortBy, setSortBy] = useState('popular');

  const microSaasServices = [
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
        'Team collaboration tools'
      ],
      price: { starting: 29, period: 'month' },
      rating: 4.8,
      reviews: 1247,
      icon: Target,
      popular: true
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      category: 'content-creation',
      description: 'Create high-quality content for blogs, social media, and marketing with AI assistance.',
      features: [
        'Multi-format content generation',
        'SEO optimization',
        'Brand voice consistency',
        'Content calendar management',
        'Performance analytics'
      ],
      price: { starting: 19, period: 'month' },
      rating: 4.6,
      reviews: 892,
      icon: FileText,
      popular: true
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      category: 'analytics',
      description: 'Advanced analytics and insights powered by AI for data-driven decision making.',
      features: [
        'Automated data visualization',
        'Predictive analytics',
        'Custom report generation',
        'Real-time monitoring',
        'Alert system'
      ],
      price: { starting: 39, period: 'month' },
      rating: 4.7,
      reviews: 654,
      icon: BarChart,
      popular: false
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Bot',
      category: 'customer-service',
      description: 'Intelligent customer support automation with natural language processing.',
      features: [
        '24/7 automated support',
        'Multi-language support',
        'Sentiment analysis',
        'Escalation management',
        'Knowledge base integration'
      ],
      price: { starting: 25, period: 'month' },
      rating: 4.5,
      reviews: 1123,
      icon: MessageSquare,
      popular: true
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      category: 'finance',
      description: 'Smart expense tracking and financial management with AI-powered categorization.',
      features: [
        'Automatic expense categorization',
        'Receipt scanning and OCR',
        'Budget planning and alerts',
        'Tax preparation assistance',
        'Financial reporting'
      ],
      price: { starting: 15, period: 'month' },
      rating: 4.4,
      reviews: 756,
      icon: DollarSign,
      popular: false
    },
    {
      id: 'ai-scheduler',
      name: 'AI Smart Scheduler',
      category: 'productivity',
      description: 'Intelligent scheduling and calendar management with AI optimization.',
      features: [
        'Smart meeting scheduling',
        'Conflict resolution',
        'Time zone management',
        'Calendar integration',
        'Availability optimization'
      ],
      price: { starting: 12, period: 'month' },
      rating: 4.6,
      reviews: 543,
      icon: Calendar,
>>>>>>> cursor/fix-errors-and-merge-to-main-f2a7
      popular: false
    }
  ];

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Micro SAAS', icon: Globe },
    { id: 'finance', name: 'Finance', icon: CreditCard },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'analytics', name: 'Analytics', icon: BarChart }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;
=======
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'project-management', name: 'Project Management', count: microSaasServices.filter(s => s.category === 'project-management').length },
    { id: 'content-creation', name: 'Content Creation', count: microSaasServices.filter(s => s.category === 'content-creation').length },
    { id: 'analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'customer-service', name: 'Customer Service', count: microSaasServices.filter(s => s.category === 'customer-service').length },
    { id: 'finance', name: 'Finance', count: microSaasServices.filter(s => s.category === 'finance').length },
    { id: 'productivity', name: 'Productivity', count: microSaasServices.filter(s => s.category === 'productivity').length }
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
>>>>>>> cursor/fix-errors-and-merge-to-main-f2a7

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

<<<<<<< HEAD
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [microSAASServices, selectedCategory, searchTerm]);

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
