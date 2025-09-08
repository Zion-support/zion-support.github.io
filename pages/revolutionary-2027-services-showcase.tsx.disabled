import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle, ArrowRight, Rocket, Mail, Phone, MapPin, MessageSquare, Globe, Star } from 'lucide-react';

// Mock data for services
const mockServices = [
  {
    id: 'ai-consciousness-2027',
    name: 'AI Consciousness Simulation 2027',
    category: ['AI', 'Consciousness'],
    description: 'Advanced AI consciousness simulation platform with enhanced neural networks',
    price: '$4,999',
    rating: 4.9,
    customers: 250,
    launchDate: '2027-01-15',
    features: ['Enhanced neural networks', 'Consciousness modeling', 'Ethical AI', 'Real-time learning', 'Quantum integration']
  },
  {
    id: 'quantum-computing-2027',
    name: 'Quantum Computing Solutions 2027',
    category: ['Quantum', 'Computing'],
    description: 'Next-generation quantum computing services with improved algorithms',
    price: '$6,999',
    rating: 4.8,
    customers: 120,
    launchDate: '2027-02-01',
    features: ['Advanced quantum algorithms', 'Hardware optimization', 'Research support', 'Quantum AI integration', 'Holographic interfaces']
  },
  {
    id: 'zero-trust-security-2027',
    name: 'Zero Trust Security Framework 2027',
    category: ['Security', 'IT'],
    description: 'Advanced zero trust security implementation with AI-powered threat detection',
    price: '$2,999',
    rating: 4.7,
    customers: 400,
    launchDate: '2027-01-01',
    features: ['AI threat detection', 'Identity verification', 'Access control', 'Real-time monitoring', 'Quantum encryption']
  },
  {
    id: 'edge-computing-2027',
    name: 'Edge Computing Platform 2027',
    category: ['IT', 'Infrastructure'],
    description: 'Distributed edge computing solutions with enhanced performance',
    price: '$2,499',
    rating: 4.6,
    customers: 200,
    launchDate: '2027-01-20',
    features: ['Ultra-low latency', 'High availability', 'Scalability', 'AI optimization', 'Holographic displays']
  },
  {
    id: 'micro-saas-platform-2027',
    name: 'Micro SaaS Platform 2027',
    category: ['SaaS', 'Platform'],
    description: 'Advanced micro SaaS platform with AI-powered analytics',
    price: '$999',
    rating: 4.5,
    customers: 600,
    launchDate: '2027-01-10',
    features: ['AI analytics', 'Automated scaling', 'Multi-tenant architecture', 'Advanced billing', 'Holographic dashboards']
  },
  {
    id: 'holographic-events-2027',
    name: 'Holographic Events Platform 2027',
    category: ['Holographic', 'Events'],
    description: 'Next-generation holographic event platform',
    price: '$8,999',
    rating: 4.9,
    customers: 80,
    launchDate: '2027-03-01',
    features: ['3D holographic displays', 'Virtual reality integration', 'AI-powered interactions', 'Global reach', 'Real-time translation']
  }
];

export default function Revolutionary2027ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  // Dynamic category counts
  const aiCount = mockServices.filter(service => service.category.includes('AI')).length;
  const quantumCount = mockServices.filter(service => service.category.includes('Quantum')).length;
  const itCount = mockServices.filter(service => service.category.includes('IT') || service.category.includes('Infrastructure')).length;
  const microSaasCount = mockServices.filter(service => service.category.includes('SaaS')).length;
  const holographicCount = mockServices.filter(service => service.category.includes('Holographic')).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: mockServices.length },
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum Services', icon: '⚛️', count: quantumCount },
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: itCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },
    { id: 'holographic', name: 'Holographic', icon: '🎭', count: holographicCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'under-500', name: 'Under $500', range: 'Under $500' },
    { id: '500-2000', name: '$500 - $2,000', range: '$500 - $2,000' },
    { id: '2000-10000', name: '$2,000 - $10,000', range: '$2,000 - $10,000' },
    { id: 'over-10000', name: 'Over $10,000', range: 'Over $10,000' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name' },
    { id: 'price', name: 'Price' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customers' },
    { id: 'launchDate', name: 'Launch Date' }
  ];

  const filteredServices = useMemo(() => {
    let filtered = mockServices;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai') return service.category.includes('AI');
        if (selectedCategory === 'quantum') return service.category.includes('Quantum');
        if (selectedCategory === 'it') return service.category.includes('IT') || service.category.includes('Infrastructure');
        if (selectedCategory === 'micro-saas') return service.category.includes('SaaS');
        if (selectedCategory === 'holographic') return service.category.includes('Holographic');
        return true;
      });
    }

    // Price range filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        if (selectedPriceRange === 'under-500') return price < 500;
        if (selectedPriceRange === '500-2000') return price >= 500 && price < 2000;
        if (selectedPriceRange === '2000-10000') return price >= 2000 && price < 10000;
        if (selectedPriceRange === 'over-10000') return price >= 10000;
        return true;
      });
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        case 'launchDate':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Revolutionary 2027 Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore our revolutionary 2027 services including AI consciousness simulation, quantum computing, holographic events, and cutting-edge IT infrastructure." />
        <meta name="keywords" content="2027 services, AI services, quantum computing, holographic events, IT infrastructure, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2027-services-showcase" />
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
              Revolutionary 2027 Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Experience the future of technology with our cutting-edge AI, quantum computing, 
              holographic events, and IT infrastructure services that will revolutionize your business.
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
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
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

            {/* Sort Controls */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all"
              >
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
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
                  Learn More
                </button>
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
            Contact us to discuss how our revolutionary 2027 services can transform your operations.
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
          <p>&copy; 2027 Zion Tech Group. All rights reserved.</p>
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