import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Brain, Atom, Sparkles, Shield, Zap, Globe, Cpu, Database, Cloud, Smartphone, Palette, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2, Bot, ChevronRight, Crown, Infinity } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2';
import { innovative2026AIServicesV3 } from '../data/innovative-2026-ai-services-v3';
import { emergingTech2026ServicesV3 } from '../data/emerging-tech-2026-services-v3';
import { enterpriseIT2026ServicesV3 } from '../data/enterprise-it-2026-services-v3';

export default function Services2026ShowcaseEnhancedPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Map service variants to supported card variants
  const mapServiceVariantToCardVariant = (serviceVariant: string): 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk' | 'enterprise-futuristic' | 'quantum-futuristic' | 'holographic-futuristic' | 'quantum-iot' | 'quantum-logistics' | 'quantum-financial' | 'quantum-energy' | 'quantum-neural' | 'quantum-cyberpunk' => {
    if (serviceVariant.includes('quantum') && serviceVariant.includes('ai')) return 'quantum-advanced';
    if (serviceVariant.includes('quantum')) return 'quantum';
    if (serviceVariant.includes('ai')) return 'ai-futuristic';
    if (serviceVariant.includes('holographic')) return 'holographic';
    if (serviceVariant.includes('neural')) return 'neural';
    if (serviceVariant.includes('cyberpunk')) return 'cyberpunk';
    if (serviceVariant.includes('enterprise')) return 'enterprise-futuristic';
    if (serviceVariant.includes('cloud')) return 'quantum-advanced';
    if (serviceVariant.includes('security')) return 'cyberpunk';
    if (serviceVariant.includes('data')) return 'neural';
    if (serviceVariant.includes('mobility')) return 'holographic';
    if (serviceVariant.includes('network')) return 'quantum-advanced';
    if (serviceVariant.includes('backup')) return 'quantum-advanced';
    if (serviceVariant.includes('itsm')) return 'enterprise-futuristic';
    if (serviceVariant.includes('monitoring')) return 'neural';
    if (serviceVariant.includes('blockchain')) return 'quantum-advanced';
    if (serviceVariant.includes('metaverse')) return 'holographic';
    if (serviceVariant.includes('iot')) return 'quantum-iot';
    if (serviceVariant.includes('edge')) return 'quantum-advanced';
    if (serviceVariant.includes('ar')) return 'holographic';
    if (serviceVariant.includes('digital-twin')) return 'quantum-advanced';
    if (serviceVariant.includes('5g')) return 'quantum-advanced';
    if (serviceVariant.includes('biometric')) return 'cyberpunk';
    if (serviceVariant.includes('autonomous')) return 'ai-futuristic';
    if (serviceVariant.includes('revolutionary')) return 'quantum-advanced';
    if (serviceVariant.includes('consulting')) return 'enterprise-futuristic';
    if (serviceVariant.includes('api')) return 'quantum-advanced';
    if (serviceVariant.includes('integration')) return 'quantum-advanced';
    if (serviceVariant.includes('analytics')) return 'neural';
    return 'default';
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all 2026 services including new ones
  const all2026Services = [
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
    ...innovative2026AIServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3
  ];

  // Enhanced categories for 2026
  const categories = [
    { id: 'all', name: 'All 2026 Services', icon: '🚀', count: all2026Services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: all2026Services.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: '⚛️', count: all2026Services.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: all2026Services.filter(s => s.category.includes('SaaS')).length },
    { id: 'healthcare', name: 'Healthcare & Biotech', icon: '🏥', count: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length },
    { id: 'financial', name: 'Financial Technology', icon: '💰', count: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length },
    { id: 'manufacturing', name: 'Manufacturing & IoT', icon: '🏭', count: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: 'premium', name: '$20K+/month', range: '$20K+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'popularity', name: 'Most Popular' },
    { id: 'newest', name: 'Newest First' },
    { id: 'rating', name: 'Highest Rated' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = all2026Services;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'ai') {
        filtered = filtered.filter(service => service.category.includes('AI'));
      } else if (selectedCategory === 'quantum') {
        filtered = filtered.filter(service => service.category.includes('Quantum') || service.category.includes('Emerging'));
      } else if (selectedCategory === 'enterprise') {
        filtered = filtered.filter(service => service.category.includes('Enterprise') || service.category.includes('IT'));
      } else if (selectedCategory === 'micro-saas') {
        filtered = filtered.filter(service => service.category.includes('SaaS'));
      } else if (selectedCategory === 'healthcare') {
        filtered = filtered.filter(service => service.category.includes('Healthcare') || service.category.includes('Biotech'));
      } else if (selectedCategory === 'financial') {
        filtered = filtered.filter(service => service.category.includes('Financial') || service.category.includes('Trading'));
      } else if (selectedCategory === 'manufacturing') {
        filtered = filtered.filter(service => service.category.includes('Manufacturing') || service.category.includes('IoT'));
      }
    }

    // Price filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        if (selectedPriceRange === 'low') return price < 1000;
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000;
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000;
        if (selectedPriceRange === 'premium') return price >= 20000;
        return true;
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
        case 'popularity':
          return (b.rating * b.reviews) - (a.rating * a.reviews);
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [all2026Services, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  // Service statistics
  const serviceStats = {
    totalServices: all2026Services.length,
    aiServices: all2026Services.filter(s => s.category.includes('AI')).length,
    quantumServices: all2026Services.filter(s => s.category.includes('Quantum')).length,
    enterpriseServices: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length,
    microSaasServices: all2026Services.filter(s => s.category.includes('SaaS')).length,
    healthcareServices: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length,
    financialServices: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length,
    manufacturingServices: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length
  };

  return (
    <UltraFuturisticBackground variant=&quot;holographic&quot; intensity=&quot;high&quot;>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Enhanced 2026 Services Showcase - Zion Tech Group</title>
          <meta name=&quot;description&quot; content=&quot;Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services. Transform your business with cutting-edge technology.&quot; />
          <meta name=&quot;keywords&quot; content=&quot;2026 services, micro SAAS, AI services, quantum computing, enterprise IT, blockchain, 5G networks, edge computing, zero trust security&quot; />
          <link rel=&quot;icon&quot; href=&quot;/favicon.svg&quot; />
          
          {/* Open Graph */}
          <meta property=&quot;og:title&quot; content=&quot;Enhanced 2026 Services Showcase - Zion Tech Group&quot; />
          <meta property=&quot;og:description&quot; content=&quot;Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services.&quot; />
          <meta property=&quot;og:type&quot; content=&quot;website&quot; />
          <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/2026-services-showcase-enhanced&quot; />
          <meta property=&quot;og:image&quot; content=&quot;https://ziontechgroup.com/og-image.svg&quot; />
          
          {/* Twitter */}
          <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
          <meta name=&quot;twitter:title&quot; content=&quot;Enhanced 2026 Services Showcase - Zion Tech Group&quot; />
          <meta name=&quot;twitter:description&quot; content=&quot;Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services.&quot; />
          <meta name=&quot;twitter:image&quot; content=&quot;https://ziontechgroup.com/og-image.svg&quot; />
        </Head>

        {/* Enhanced Header Section */}
        <section className=&quot;relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30&quot;></div>
          <div className=&quot;max-w-7xl mx-auto relative z-10 text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6&quot;>
                Enhanced 2026 Services Showcase
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
                Discover our comprehensive collection of innovative micro SAAS services, AI solutions, quantum computing, and enterprise IT services that will transform your business in 2026 and beyond.
              </p>
              
              {/* Service Statistics */}
              <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-4 mb-12&quot;>
                {Object.entries(serviceStats).map(([key, value]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: key.length * 0.1 }}
                    className=&quot;bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30&quot;
                  >
                    <div className=&quot;text-3xl font-bold text-cyan-400&quot;>{value}</div>
                    <div className=&quot;text-sm text-gray-400 capitalize&quot;>{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Information */}
              <div className=&quot;bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 max-w-2xl mx-auto&quot;>
                <h3 className=&quot;text-xl font-semibold text-cyan-400 mb-4&quot;>Ready to Transform Your Business?</h3>
                <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm&quot;>
                  <div className=&quot;flex items-center justify-center space-x-2&quot;>
                    <Phone className=&quot;w-4 h-4 text-purple-400&quot; />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className=&quot;flex items-center justify-center space-x-2&quot;>
                    <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className=&quot;flex items-center justify-center space-x-2&quot;>
                    <MapPin className=&quot;w-4 h-4 text-purple-400&quot; />
                    <span className=&quot;text-center&quot;>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Search and Filters */}
        <section className=&quot;py-16 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <div className=&quot;bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8&quot;>
              {/* Search Bar */}
              <div className=&quot;relative mb-6&quot;>
                <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search for services, technologies, or use cases...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full bg-gray-800/50 border border-gray-600/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
                />
              </div>

              {/* Filters and Controls */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6&quot;>
                {/* Category Filter */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=&quot;w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500&quot;
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>Price Range</label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className=&quot;w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500&quot;
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className=&quot;w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500&quot;
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>View Mode</label>
                  <div className=&quot;flex bg-gray-800/50 border border-gray-600/30 rounded-lg p-1&quot;>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid className=&quot;w-4 h-4 mx-auto&quot; />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <List className=&quot;w-4 h-4 mx-auto&quot; />
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className=&quot;text-center&quot;>
                <p className=&quot;text-gray-400&quot;>
                  Showing <span className=&quot;text-cyan-400 font-semibold&quot;>{filteredServices.length}</span> of{' '}
                  <span className=&quot;text-cyan-400 font-semibold&quot;>{all2026Services.length}</span> services
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Grid */}
        <section className=&quot;py-16 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <AnimatePresence mode=&quot;wait&quot;>
              {filteredServices.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className=&quot;text-center py-20&quot;
                >
                  <div className=&quot;text-6xl mb-4&quot;>🔍</div>
                  <h3 className=&quot;text-2xl font-semibold text-gray-300 mb-2&quot;>No services found</h3>
                  <p className=&quot;text-gray-400&quot;>Try adjusting your search criteria or filters</p>
                </motion.div>
              ) : (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={viewMode === 'grid' ? '' : 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30'}
                    >
                      <UltraFuturisticCard
                        variant={mapServiceVariantToCardVariant(service.variant)}
                        className=&quot;h-full&quot;
                      >
                        <div className=&quot;p-6&quot;>
                          {/* Service Header */}
                          <div className=&quot;flex items-start justify-between mb-4&quot;>
                            <div className=&quot;text-4xl&quot;>{service.icon}</div>
                            {service.popular && (
                              <div className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium&quot;>
                                Popular
                              </div>
                            )}
                          </div>

                          {/* Service Title and Tagline */}
                          <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                          <p className=&quot;text-gray-300 text-sm mb-4&quot;>{service.tagline}</p>

                          {/* Price */}
                          <div className=&quot;mb-4&quot;>
                            <span className=&quot;text-3xl font-bold text-cyan-400&quot;>{service.price}</span>
                            <span className=&quot;text-gray-400&quot;>{service.period}</span>
                          </div>

                          {/* Description */}
                          <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>{service.description}</p>

                          {/* Key Features */}
                          <div className=&quot;mb-4&quot;>
                            <h4 className=&quot;text-sm font-semibold text-gray-200 mb-2&quot;>Key Features:</h4>
                            <ul className=&quot;space-y-1&quot;>
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className=&quot;flex items-center text-xs text-gray-400&quot;>
                                  <CheckCircle className=&quot;w-3 h-3 text-green-400 mr-2 flex-shrink-0&quot; />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            {service.features.length > 3 && (
                              <p className=&quot;text-xs text-gray-500 mt-1&quot;>+{service.features.length - 3} more features</p>
                            )}
                          </div>

                          {/* Service Stats */}
                          <div className=&quot;grid grid-cols-3 gap-2 mb-4 text-xs&quot;>
                            <div className=&quot;text-center&quot;>
                              <div className=&quot;text-cyan-400 font-semibold&quot;>{service.rating}★</div>
                              <div className=&quot;text-gray-400&quot;>{service.reviews} reviews</div>
                            </div>
                            <div className=&quot;text-center&quot;>
                              <div className=&quot;text-purple-400 font-semibold&quot;>{service.customers}</div>
                              <div className=&quot;text-gray-400&quot;>customers</div>
                            </div>
                            <div className=&quot;text-center&quot;>
                              <div className=&quot;text-green-400 font-semibold&quot;>{service.trialDays}d</div>
                              <div className=&quot;text-gray-400&quot;>trial</div>
                            </div>
                          </div>

                          {/* Market Position */}
                          <div className=&quot;mb-4 p-3 bg-gray-800/30 rounded-lg&quot;>
                            <h4 className=&quot;text-xs font-semibold text-gray-200 mb-1&quot;>Market Position:</h4>
                            <p className=&quot;text-xs text-gray-400 line-clamp-2&quot;>{service.marketPosition}</p>
                          </div>

                          {/* ROI */}
                          <div className=&quot;mb-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg&quot;>
                            <h4 className=&quot;text-xs font-semibold text-green-400 mb-1&quot;>ROI Promise:</h4>
                            <p className=&quot;text-xs text-green-300&quot;>{service.roi}</p>
                          </div>

                          {/* Action Buttons */}
                          <div className=&quot;flex space-x-2&quot;>
                            <Button
                              variant=&quot;primary&quot;
                              size=&quot;sm&quot;
                              className=&quot;flex-1&quot;
                              onClick={() => window.open(service.link, '_blank')}
                            >
                              Learn More
                              <ArrowRight className=&quot;w-4 h-4 ml-1&quot; />
                            </Button>
                            <Button
                              variant=&quot;secondary&quot;
                              size=&quot;sm&quot;
                              onClick={() => window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`)}
                            >
                              Contact
                            </Button>
                          </div>
                        </div>
                      </UltraFuturisticCard>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Enhanced Footer CTA */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30&quot;
            >
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join thousands of businesses already using our innovative services to gain competitive advantages and achieve remarkable ROI.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <Button
                  variant=&quot;primary&quot;
                  size=&quot;lg&quot;
                  onClick={() => window.open(`mailto:${contactInfo.email}?subject=Business Transformation Consultation`, '_blank')}
                >
                  <Mail className=&quot;w-5 h-5 mr-2&quot; />
                  Schedule Consultation
                </Button>
                <Button
                  variant=&quot;secondary&quot;
                  size=&quot;lg&quot;
                  onClick={() => window.open(`tel:${contactInfo.mobile}`, '_blank')}
                >
                  <Phone className=&quot;w-5 h-5 mr-2&quot; />
                  Call Now
                </Button>
              </div>
              <div className=&quot;mt-8 text-sm text-gray-400&quot;>
                <p>Contact: {contactInfo.mobile} | {contactInfo.email}</p>
                <p>{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
}