import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Eye, Heart, Share2, Download, Bookmark, ThumbsUp, MessageCircle, Share, Check } from 'lucide-react';

// Mock data for services
const mockServices = [
  {
    id: 'ai-consciousness',
    name: 'AI Consciousness Simulation',
    category: ['AI', 'Consciousness'],
    description: 'Advanced AI consciousness simulation platform',
    price: '$2,999',
    rating: 4.8,
    customers: 150,
    launchDate: '2025-01-15',
    features: ['Neural networks', 'Consciousness modeling', 'Ethical AI']
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    category: ['Quantum', 'Computing'],
    description: 'Next-generation quantum computing services',
    price: '$4,999',
    rating: 4.9,
    customers: 75,
    launchDate: '2025-02-01',
    features: ['Quantum algorithms', 'Hardware optimization', 'Research support']
  },
  {
    id: 'zero-trust-security',
    name: 'Zero Trust Security Framework',
    category: ['Security', 'IT'],
    description: 'Advanced zero trust security implementation',
    price: '$1,999',
    rating: 4.7,
    customers: 200,
    launchDate: '2025-01-01',
    features: ['Identity verification', 'Access control', 'Threat detection']
  },
  {
    id: 'edge-computing',
    name: 'Edge Computing Platform',
    category: ['IT', 'Infrastructure'],
    description: 'Distributed edge computing solutions',
    price: '$1,499',
    rating: 4.6,
    customers: 120,
    launchDate: '2025-01-20',
    features: ['Low latency', 'High availability', 'Scalability']
  }
];

export default function Revolutionary2025ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'popularity' | 'newest'>('popularity');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Service categories
  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: mockServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: mockServices.filter(s => s.category.includes('AI')).length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, count: mockServices.filter(s => s.category.some(cat => cat.includes('IT') || cat.includes('Computing'))).length },
    { id: 'security', name: 'Security', icon: Shield, count: mockServices.filter(s => s.category.includes('Security')).length }
  ];

  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all' 
    ? mockServices 
    : mockServices.filter(service => {
        if (selectedCategory === 'ai') return service.category.some(cat => cat.includes('AI'));
        if (selectedCategory === 'infrastructure') return service.category.some(cat => cat.includes('IT') || cat.includes('Computing'));
        if (selectedCategory === 'security') return service.category.some(cat => cat.includes('Security'));
        return true;
      });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.customers - a.customers;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return 0;
    }
  });

  // Statistics
  const stats = {
    totalServices: mockServices.length,
    totalCustomers: mockServices.reduce((sum, service) => sum + service.customers, 0),
    averageRating: (mockServices.reduce((sum, service) => sum + service.rating, 0) / mockServices.length).toFixed(1),
    totalRevenue: mockServices.reduce((sum, service) => {
      const price = parseInt(service.price.replace('$', '').replace(',', ''));
      return sum + (price * service.customers);
    }, 0)
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Revolutionary 2025 Services Showcase - Zion Tech Group | Cutting-Edge AI & IT Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's revolutionary 2025 services including AI consciousness simulation, quantum computing, zero trust security, and innovative micro SaaS solutions. Contact: +1 302 464 0950" />
        <meta name="keywords" content="AI consciousness, quantum computing, zero trust security, edge computing, 5G networks, neuromorphic computing, AI branding, holographic events, mental health AI, creative AI" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Revolutionary 2025 Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Cutting-edge AI, quantum computing, and IT infrastructure services for 2025. Contact: +1 302 464 0950" />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2025-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2025-services-showcase" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8">
              Revolutionary 2025 Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Experience the future of technology with our cutting-edge AI, quantum computing, 
              and IT infrastructure services that will revolutionize your business.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400">{stats.totalServices}</div>
                <div className="text-gray-400">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">{stats.totalCustomers.toLocaleString()}</div>
                <div className="text-gray-400">Total Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400">{stats.averageRating}</div>
                <div className="text-gray-400">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400">${(stats.totalRevenue / 1000000).toFixed(1)}M</div>
                <div className="text-gray-400">Total Revenue</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                    selectedCategory === category.id
                      ? 'border-purple-500 bg-purple-500 text-white'
                      : 'border-gray-600 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="px-2 py-1 text-xs bg-gray-700 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode and Sort */}
            <div className="flex gap-4">
              <div className="flex border border-gray-600 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-gray-800 border border-gray-600 text-white px-3 py-2 rounded-lg"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="newest">Sort by Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all ${
                  viewMode === 'list' ? 'flex gap-6' : ''
                }`}
              >
                {viewMode === 'list' ? (
                  <>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.category.map((cat, catIndex) => (
                          <span key={catIndex} className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400 mb-2">{service.price}</div>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm">{service.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">{service.customers} customers</div>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.category.map((cat, catIndex) => (
                        <span key={catIndex} className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm">{service.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">{service.customers} customers</div>
                    </div>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                          <Check className="w-3 h-3 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Revolutionize Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our revolutionary 2025 services can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {contactInfo.mobile}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          <p className="mt-2">
            <a href={contactInfo.website} className="text-purple-400 hover:text-purple-300">
              {contactInfo.website}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}