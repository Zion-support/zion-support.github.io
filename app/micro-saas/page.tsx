'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, ArrowRight, Phone, Mail, MapPin, CheckCircle, Award, Calendar, Settings, FileText, Database, Smartphone, Lock, Code, PieChart, Activity, CreditCard, ShoppingCart, Camera, Music, Video, Palette, Wrench, Lightbulb, Rocket, Heart } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Micro SAAS', icon: Globe },
    { id: 'finance', name: 'Finance', icon: CreditCard },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'analytics', name: 'Analytics', icon: BarChart }
  ];

  const filteredServices = useMemo(() => {
    let filtered = microSAASServices;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

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