import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, TrendingUp, Zap, Shield, Brain, Atom, Rocket, ArrowRight, CheckCircle, Users, DollarSign, Clock, Search, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2, Bot, ChevronRight, Crown, Phone, Mail, MapPin } from 'lucide-react';

// Mock data for services
const mockServices = [
  {
    id: 'ai-consciousness-2026',
    name: 'AI Consciousness Simulation 2026',
    category: ['AI', 'Consciousness'],
    description: 'Advanced AI consciousness simulation platform with enhanced neural networks',
    tagline: 'Next-generation AI consciousness',
    price: '$3,999',
    rating: 4.9,
    customers: 200,
    features: ['Enhanced neural networks', 'Consciousness modeling', 'Ethical AI', 'Real-time learning']
  },
  {
    id: 'quantum-computing-2026',
    name: 'Quantum Computing Solutions 2026',
    category: ['Quantum', 'Computing'],
    description: 'Next-generation quantum computing services with improved algorithms',
    tagline: 'Quantum computing revolution',
    price: '$5,999',
    rating: 4.8,
    customers: 100,
    features: ['Advanced quantum algorithms', 'Hardware optimization', 'Research support', 'Quantum AI integration']
  },
  {
    id: 'zero-trust-security-2026',
    name: 'Zero Trust Security Framework 2026',
    category: ['Security', 'IT'],
    description: 'Advanced zero trust security implementation with AI-powered threat detection',
    tagline: 'AI-powered security',
    price: '$2,499',
    rating: 4.7,
    customers: 300,
    features: ['AI threat detection', 'Identity verification', 'Access control', 'Real-time monitoring']
  },
  {
    id: 'edge-computing-2026',
    name: 'Edge Computing Platform 2026',
    category: ['IT', 'Infrastructure'],
    description: 'Distributed edge computing solutions with enhanced performance',
    tagline: 'Edge computing excellence',
    price: '$1,999',
    rating: 4.6,
    customers: 150,
    features: ['Ultra-low latency', 'High availability', 'Scalability', 'AI optimization']
  },
  {
    id: 'micro-saas-platform-2026',
    name: 'Micro SaaS Platform 2026',
    category: ['SaaS', 'Platform'],
    description: 'Advanced micro SaaS platform with AI-powered analytics',
    tagline: 'AI-powered SaaS platform',
    price: '$799',
    rating: 4.5,
    customers: 500,
    features: ['AI analytics', 'Automated scaling', 'Multi-tenant architecture', 'Advanced billing']
  }
];

export default function Revolutionary2026ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Dynamic category counts
  const aiCount = mockServices.filter(service => service.category.includes('AI')).length;
  const quantumCount = mockServices.filter(service => service.category.includes('Quantum')).length;
  const enterpriseCount = mockServices.filter(service => service.category.includes('IT')).length;
  const microSaasCount = mockServices.filter(service => service.category.includes('SaaS')).length;

  const categories = [
    { id: 'all', name: 'All Revolutionary Services', icon: '🚀', count: mockServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum & Advanced Tech', icon: '⚛️', count: quantumCount },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $3K/month', range: '$1K - $3K' },
    { id: 'high', name: '$3K - $8K/month', range: '$3K - $8K' },
    { id: 'enterprise', name: '$8K+/month', range: '$8K+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customer Count' }
  ];

  // Filter and sort services
  const filteredServices = mockServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
        (selectedCategory === 'ai' && service.category.includes('AI')) ||
        (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||
        (selectedCategory === 'enterprise' && service.category.includes('IT')) ||
        (selectedCategory === 'micro-saas' && service.category.includes('SaaS'));

      const matchesPrice = selectedPriceRange === 'all' ||
        (selectedPriceRange === 'low' && parseFloat(service.price.replace('$', '').replace(',', '')) < 1000) ||
        (selectedPriceRange === 'medium' && parseFloat(service.price.replace('$', '').replace(',', '')) >= 1000 && parseFloat(service.price.replace('$', '').replace(',', '')) < 3000) ||
        (selectedPriceRange === 'high' && parseFloat(service.price.replace('$', '').replace(',', '')) >= 3000 && parseFloat(service.price.replace('$', '').replace(',', '')) < 8000) ||
        (selectedPriceRange === 'enterprise' && parseFloat(service.price.replace('$', '').replace(',', '')) >= 8000);

      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'price-high':
          return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Revolutionary 2026 Services - Zion Tech Group</title>
        <meta name="description" content="Explore our revolutionary 2026 services including AI consciousness simulation, quantum computing, zero trust security, and cutting-edge IT infrastructure." />
        <meta name="keywords" content="2026 services, AI services, quantum computing, IT infrastructure, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2026-services" />
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
              Revolutionary 2026 Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Experience the future of technology with our cutting-edge AI, quantum computing, 
              and IT infrastructure services that will revolutionize your business.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search revolutionary services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Category Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {categories.map((category) => (
                <div key={category.id} className="text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="text-2xl font-bold text-purple-400">{category.count}</div>
                  <div className="text-sm text-gray-400">{category.name}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                    selectedCategory === category.id
                      ? 'border-purple-500 bg-purple-500 text-white'
                      : 'border-gray-600 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                  <span className="px-2 py-1 text-xs bg-gray-700 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Price Range Filter */}
            <div className="flex gap-2">
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setSelectedPriceRange(range.id)}
                  className={`px-3 py-2 rounded-lg border text-sm transition-all ${
                    selectedPriceRange === range.id
                      ? 'border-purple-500 bg-purple-500 text-white'
                      : 'border-gray-600 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  {range.name}
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-600 text-white px-3 py-2 rounded-lg"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>

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
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Services</h2>
            <p className="text-xl text-gray-300">
              {filteredServices.length} services found
            </p>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredServices.map((service, index) => (
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
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Revolutionize Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our revolutionary 2026 services can transform your operations.
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
          <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
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