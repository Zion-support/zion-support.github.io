<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Search, Star, Users, TrendingUp, 
  DollarSign, Clock, CheckCircle, ArrowRight,
  Rocket, Monitor, Cpu, 
  Zap, Database, Cloud, Lock, Code,
  Sparkles, Target, Award, Lightbulb
} from 'lucide-react',
import { innovative2025Services } from '../data/innovative-2025-services',
import { emergingTech2025Services } from '../data/emerging-tech-2025-services',
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground',
export default function EnhancedServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('name'),

  const allServices = [
    ...innovative2025Services,
    ...emergingTech2025Services
  ],

  // Dynamic category counts
  const aiCount = allServices.filter(service => service.category.includes('AI')).length,
  const quantumCount = allServices.filter(service => service.category.includes('Quantum')).length,
  const blockchainCount = allServices.filter(service => service.category.includes('Blockchain')).length,
  const iotCount = allServices.filter(service => service.category.includes('IoT')).length,
  const spaceCount = allServices.filter(service => service.category.includes('Space')).length,
  const cybersecurityCount = allServices.filter(service => service.category.includes('Security') || service.category.includes('Cybersecurity')).length,

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: quantumCount },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: '⛓️', count: blockchainCount },
    { id: 'iot', name: 'IoT & Edge Computing', icon: '🌐', count: iotCount },
    { id: 'space', name: 'Space Technology', icon: '🚀', count: spaceCount },
    { id: 'security', name: 'Cybersecurity', icon: '🔒', count: cybersecurityCount }
  ],

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $2K/month', range: 'Under $2K' },
    { id: 'medium', name: '$2K - $8K/month', range: '$2K - $8K' },
    { id: 'high', name: '$8K - $20K/month', range: '$8K - $20K' },
    { id: 'premium', name: '$20K+/month', range: '$20K+' }
  ],

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customer Count' }
  ],

  // Filter and sort services
  const filteredServices = React.useMemo(() => {
    const parsePriceToNumber = (price: string | number): number => {
      if (typeof price === 'number') return price,
      if (typeof price === 'string') {
        const match = price.replace(/[^0-9.]/g, ''),
        const parsed = parseFloat(match || '0'),
        return isNaN(parsed) ? 0 : parsed
      }
      return 0
    },
=======
import React, {_useState} from 'react';
import Head from 'next/head';
import {_Search, _Star, _Users, _TrendingUp, _DollarSign, _Clock, _CheckCircle, _ArrowRight, _Rocket, _Monitor, _Cpu, _Zap, _Database, _Cloud, _Lock, _Code, _Sparkles, _Target, _Award, _Lightbulb} from 'lucide-react';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';

export default function EnhancedServicesShowcase2025() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, _setSelectedPriceRange] = useState<string>('all');
  const [sortBy, _setSortBy] = useState<string>('name');

  const _allServices = [
    ...innovative2025Services, _...emergingTech2025Services
  ];

  // Dynamic category counts
  const _aiCount = allServices.filter(service => service.category.includes('AI')).length;
  const _quantumCount = allServices.filter(service => service.category.includes('Quantum')).length;
  const _blockchainCount = allServices.filter(service => service.category.includes('Blockchain')).length;
  const _iotCount = allServices.filter(service => service.category.includes('IoT')).length;
  const _spaceCount = allServices.filter(service => service.category.includes('Space')).length;
  const _cybersecurityCount = allServices.filter(service => service.category.includes('Security') || service.category.includes('Cybersecurity')).length;

  const _categories = [
    { id: 'all', _name: 'All Services', _icon: '🚀', _count: allServices.length},
    {_id: 'ai', _name: 'AI & Machine Learning', _icon: '🧠', _count: aiCount},
    {_id: 'quantum', _name: 'Quantum Computing', _icon: '⚛️', _count: quantumCount},
    {_id: 'blockchain', _name: 'Blockchain & Web3', _icon: '⛓️', _count: blockchainCount},
    {_id: 'iot', _name: 'IoT & Edge Computing', _icon: '🌐', _count: iotCount},
    {_id: 'space', _name: 'Space Technology', _icon: '🚀', _count: spaceCount},
    {_id: 'security', _name: 'Cybersecurity', _icon: '🔒', _count: cybersecurityCount}
  ];

  const _priceRanges = [
    {_id: 'all', _name: 'All Prices', _range: 'All'},
    {_id: 'low', _name: 'Under $2K/month', _range: 'Under $2K'},
    {_id: 'medium', _name: '$2K - $8K/month', _range: '$2K - $8K'},
    {_id: 'high', _name: '$8K - $20K/month', _range: '$8K - $20K'},
    {_id: 'premium', _name: '$20K+/month', _range: '$20K+'}
  ];

  const _sortOptions = [
    {_id: 'name', _name: 'Name A-Z'},
    {_id: 'price-low', _name: 'Price Low to High'},
    {_id: 'price-high', _name: 'Price High to Low'},
    {_id: 'rating', _name: 'Rating'},
    {_id: 'customers', _name: 'Customer Count'}
  ];

  // Filter and sort services
  const _filteredServices = React.useMemo__(() => {_const _parsePriceToNumber = (price: string | number): number => {
      if (typeof price === 'number') return price;
      if (typeof price === 'string') {
        const _match = price.replace(/[^0-9.]/g, _'');
        const _parsed = parseFloat(match || '0');
        return isNaN(parsed) ? 0 : parsed;}
      return 0;
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    let _filtered = allServices.filter(service => {_const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()),
      
      const _matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && service.category.includes('AI')) ||
                             (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||
                             (selectedCategory === 'blockchain' && service.category.includes('Blockchain')) ||
                             (selectedCategory === 'iot' && service.category.includes('IoT')) ||
                             (selectedCategory === 'space' && service.category.includes('Space')) ||
                             (selectedCategory === 'security' && (service.category.includes('Security') || service.category.includes('Cybersecurity'))),

      const _matchesPrice = selectedPriceRange === 'all' || 
                          (selectedPriceRange === 'low' && parsePriceToNumber(service.price) < 2000) ||
                          (selectedPriceRange === 'medium' && parsePriceToNumber(service.price) >= 2000 && parsePriceToNumber(service.price) < 8000) ||
                          (selectedPriceRange === 'high' && parsePriceToNumber(service.price) >= 8000 && parsePriceToNumber(service.price) < 20000) ||
                          (selectedPriceRange === 'premium' && parsePriceToNumber(service.price) >= 20000),

<<<<<<< HEAD
      return matchesSearch && matchesCategory && matchesPrice
    }),

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price)),
        break,
      case 'price-high':
        filtered.sort((a, b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price)),
        break,
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating),
        break,
      case 'customers':
        filtered.sort((a, b) => b.customers - a.customers),
        break,
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name))
    }
=======
      return matchesSearch && matchesCategory && matchesPrice;});

    // Sort services
    switch (sortBy) {_case 'price-low':
        filtered.sort(_(a, _b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price));
        break;
      case 'price-high':
        filtered.sort(_(a, _b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price));
        break;
      case 'rating':
        filtered.sort(_(a, _b) => b.rating - a.rating);
        break;
      case 'customers':
        filtered.sort(_(a, _b) => b.customers - a.customers);
        break;
      default:
        filtered.sort(_(a, _b) => a.name.localeCompare(b.name));}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return filtered
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, allServices]),

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.5}
    }
  },

<<<<<<< HEAD
  return (
    <EnhancedFuturisticBackground 
      intensity=&quot;high&quot; 
      colorScheme=&quot;quantum&quot;
      particleCount={300}
      animationSpeed={1.5}
=======
  return (_<EnhancedFuturisticBackground 
      intensity="high" 
      colorScheme="quantum"
      particleCount={_300}
      animationSpeed={_1.5}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    >
      <div className=&quot;min-h-screen&quot;>
        <Head>
<<<<<<< HEAD
          <title>2025 Innovative Services Showcase - Zion Tech Group | Revolutionary AI, Quantum & Emerging Tech</title>
          <meta name=&quot;description&quot; content=&quot;Explore Zion Tech Group's revolutionary 2025 services: AI platforms, quantum computing, blockchain infrastructure, IoT solutions, and cutting-edge emerging technologies. Contact: +1 302 464 0950&quot; />
          <meta name=&quot;keywords&quot; content=&quot;AI services 2025, quantum computing, blockchain, IoT, edge computing, 5G, cybersecurity, metaverse, space technology, Zion Tech Group&quot; />
          <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
          <meta property=&quot;og:title&quot; content=&quot;2025 Innovative Services Showcase - Zion Tech Group&quot; />
          <meta property=&quot;og:description&quot; content=&quot;Revolutionary AI, quantum computing, and emerging technology services for 2025. Contact: +1 302 464 0950&quot; />
          <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/enhanced-services-showcase-2025&quot; />
          <meta property=&quot;og:type&quot; content=&quot;website&quot; />
          <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/enhanced-services-showcase-2025&quot; />
        </Head>

        {/* Hero Section */}
        <section className=&quot;relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
=======
          <title>2025 Innovative Services Showcase - Zion Tech Group | Revolutionary AI, _Quantum & Emerging Tech</title>
          <meta name="description" content="Explore Zion Tech Group's revolutionary 2025 services: AI platforms, _quantum computing, _blockchain infrastructure, _IoT solutions, _and cutting-edge emerging technologies. Contact: +1 302 464 0950" />
          <meta name="keywords" content="AI services 2025, _quantum computing, _blockchain, _IoT, _edge computing, _5G, _cybersecurity, _metaverse, _space technology, _Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="2025 Innovative Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Revolutionary AI, _quantum computing, _and emerging technology services for 2025. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/enhanced-services-showcase-2025" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/enhanced-services-showcase-2025" />
        </Head>

        {_/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <div className=&quot;flex items-center justify-center mb-6&quot;>
                <Sparkles className=&quot;w-12 h-12 text-cyan-400 mr-4&quot; />
                <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent&quot;>
                  2025 Innovation Showcase
                </h1>
                <Sparkles className=&quot;w-12 h-12 text-pink-400 ml-4&quot; />
              </div>
<<<<<<< HEAD
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
                Revolutionary AI, Quantum Computing & Emerging Technology Services
=======
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI, _Quantum Computing & Emerging Technology Services
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
              <p className=&quot;text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto&quot;>
                Discover our cutting-edge solutions that are transforming industries and driving the future of technology
              </p>
              
<<<<<<< HEAD
              {/* Service Statistics */}
              <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-12&quot;>
                <div className=&quot;text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl&quot;>
                  <div className=&quot;text-3xl font-bold text-cyan-400&quot;>{allServices.length}</div>
                  <div className=&quot;text-gray-400&quot;>Total Services</div>
                </div>
                <div className=&quot;text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl&quot;>
                  <div className=&quot;text-3xl font-bold text-purple-400&quot;>{aiCount + quantumCount}</div>
                  <div className=&quot;text-gray-400&quot;>AI & Quantum</div>
                </div>
                <div className=&quot;text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl&quot;>
                  <div className=&quot;text-3xl font-bold text-green-400&quot;>{blockchainCount + iotCount}</div>
                  <div className=&quot;text-gray-400&quot;>Emerging Tech</div>
                </div>
                <div className=&quot;text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl&quot;>
                  <div className=&quot;text-3xl font-bold text-pink-400&quot;>{spaceCount + cybersecurityCount}</div>
                  <div className=&quot;text-gray-400&quot;>Specialized</div>
=======
              {_/* Service Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-cyan-400">{_allServices.length}</div>
                  <div className="text-gray-400">Total Services</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-400">{_aiCount + quantumCount}</div>
                  <div className="text-gray-400">AI & Quantum</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-green-400">{_blockchainCount + iotCount}</div>
                  <div className="text-gray-400">Emerging Tech</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-pink-400">{_spaceCount + cybersecurityCount}</div>
                  <div className="text-gray-400">Specialized</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Search and Filters */}
        <section className=&quot;relative z-10 py-8 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <div className=&quot;bg-gray-800/40 border border-gray-700 rounded-2xl p-6&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-4&quot;>
                {/* Search */}
                <div className=&quot;relative&quot;>
                  <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                  <input
                    type=&quot;text&quot;
                    placeholder=&quot;Search services...&quot;
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} className=&quot;w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
=======
        {_/* Search and Filters */}
        <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {_/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={_searchTerm}
                    onChange={_(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </div>

                {_/* Category Filter */}
                <select
<<<<<<< HEAD
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)} className=&quot;px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
=======
                  value={_selectedCategory}
                  onChange={_(_e) => setSelectedCategory(e.target.value)} className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  {_categories.map(_(category) => (
                    <option key={category.id} value={_category.id}>
                      {_category.name} ({_category.count})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </option>
                  ))}
                </select>

                {_/* Price Range Filter */}
                <select
<<<<<<< HEAD
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)} className=&quot;px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;>
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
=======
                  value={_selectedPriceRange}
                  onChange={_(_e) => setSelectedPriceRange(e.target.value)} className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  {_priceRanges.map(_(range) => (
                    <option key={range.id} value={_range.id}>
                      {_range.name}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </option>
                  ))}
                </select>

                {_/* Sort Options */}
                <select
<<<<<<< HEAD
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)} className=&quot;px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;>
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
=======
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value)} className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  {_sortOptions.map(_(option) => (
                    <option key={option.id} value={_option.id}>
                      {_option.name}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section className=&quot;relative z-10 py-16 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              variants={containerVariants}
              initial=&quot;hidden&quot;
              animate=&quot;visible&quot; className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
=======
        {_/* Services Grid */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={_containerVariants}
              initial="hidden"
              animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <AnimatePresence>
                {_filteredServices.map(_(service) => (
                  <motion.div
                    key={service.id}
<<<<<<< HEAD
                    variants={itemVariants}
                    layout className=&quot;group relative bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105&quot;>
                    {/* Service Header */}
                    <div className=&quot;flex items-start justify-between mb-4&quot;>
                      <div className=&quot;text-3xl&quot;>{service.icon}</div>
                      {service.popular && (
                        <div className=&quot;flex items-center space-x-1 text-yellow-400 text-sm&quot;>
                          <Star className=&quot;w-4 h-4 fill-current&quot; />
=======
                    variants={_itemVariants}
                    layout className="group relative bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
                    {_/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{_service.icon}</div>
                      {_service.popular && (
                        <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                          <Star className="w-4 h-4 fill-current" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          <span>Popular</span>
                        </div>
                      )}
                    </div>

<<<<<<< HEAD
                    {/* Service Title and Description */}
                    <h3 className=&quot;text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors&quot;>
                      {service.name}
                    </h3>
                    <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-2&quot;>
                      {service.description}
                    </p>

                    {/* Price and Customer Count */}
                    <div className=&quot;flex items-center justify-between mb-4&quot;>
                      <div className=&quot;text-2xl font-bold text-cyan-400&quot;>
                        {service.price}<span className=&quot;text-gray-400 text-lg&quot;>{service.period}</span>
                      </div>
                      <div className=&quot;flex items-center space-x-2 text-sm text-gray-400&quot;>
                        <Users className=&quot;w-4 h-4&quot; />
                        <span>{service.customers}</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className=&quot;mb-6&quot;>
                      <div className=&quot;text-sm text-gray-400 mb-2&quot;>Key Features:</div>
                      <ul className=&quot;space-y-1&quot;>
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className=&quot;flex items-center text-sm text-gray-300&quot;>
                            <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
                            <span className=&quot;line-clamp-1&quot;>{feature}</span>
=======
                    {_/* Service Title and Description */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {_service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {_service.description}
                    </p>

                    {_/* Price and Customer Count */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {_service.price}<span className="text-gray-400 text-lg">{_service.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{_service.customers}</span>
                      </div>
                    </div>

                    {_/* Key Features */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                      <ul className="space-y-1">
                        {_service.features.slice(0, _3).map(_(feature, _index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </li>
                        ))}
                      </ul>
                    </div>

<<<<<<< HEAD
                    {/* Market Position */}
                    <div className=&quot;mb-6 p-3 bg-gray-700/40 rounded-lg&quot;>
                      <div className=&quot;text-xs text-gray-400 mb-1&quot;>Market Position</div>
                      <div className=&quot;text-sm text-gray-300 line-clamp-2&quot;>
                        {service.marketPosition}
                      </div>
                    </div>

                    {/* ROI and Setup Time */}
                    <div className=&quot;flex items-center justify-between mb-6 text-sm&quot;>
                      <div className=&quot;flex items-center space-x-1 text-green-400&quot;>
                        <TrendingUp className=&quot;w-4 h-4&quot; />
                        <span>Average ROI</span>
                      </div>
                      <div className=&quot;flex items-center space-x-1 text-blue-400&quot;>
                        <Clock className=&quot;w-4 h-4&quot; />
                        <span>{service.setupTime}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className=&quot;flex gap-3&quot;>
                      <a 
                        href={service.link} 
                        target=&quot;_blank&quot; 
                        rel=&quot;noopener noreferrer&quot; className=&quot;flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center&quot;>
=======
                    {_/* Market Position */}
                    <div className="mb-6 p-3 bg-gray-700/40 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Market Position</div>
                      <div className="text-sm text-gray-300 line-clamp-2">
                        {_service.marketPosition}
                      </div>
                    </div>

                    {_/* ROI and Setup Time */}
                    <div className="flex items-center justify-between mb-6 text-sm">
                      <div className="flex items-center space-x-1 text-green-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>Average ROI</span>
                      </div>
                      <div className="flex items-center space-x-1 text-blue-400">
                        <Clock className="w-4 h-4" />
                        <span>{_service.setupTime}</span>
                      </div>
                    </div>

                    {_/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={_service.link} 
                        target="_blank" 
                        rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Learn More
                        <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
                      </Link>
                      <a 
                        href=&quot;/contact&quot; className=&quot;flex-1 bg-gray-700/60 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:bg-gray-600/60 transition-all duration-300 border border-gray-600 hover:border-gray-500&quot;>
                        Contact Us
                      </Link>
                    </div>

<<<<<<< HEAD
                    {/* Contact Information */}
                    <div className=&quot;mt-4 pt-4 border-t border-gray-700&quot;>
                      <div className=&quot;text-xs text-gray-400 mb-2&quot;>Contact Information:</div>
                      <div className=&quot;text-xs text-gray-300 space-y-1&quot;>
                        <div>📱 {service.contactInfo.mobile}</div>
                        <div>✉️ {service.contactInfo.email}</div>
                        <div>🌐 {service.contactInfo.website}</div>
=======
                    {_/* Contact Information */}
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="text-xs text-gray-400 mb-2">Contact Information:</div>
                      <div className="text-xs text-gray-300 space-y-1">
                        <div>📱 {_service.contactInfo.mobile}</div>
                        <div>✉️ {_service.contactInfo.email}</div>
                        <div>🌐 {_service.contactInfo.website}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {_/* No Results Message */}
            {_filteredServices.length === 0 && (
              <motion.div
<<<<<<< HEAD
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} className=&quot;text-center py-16&quot;>
                <div className=&quot;text-6xl mb-4&quot;>🔍</div>
                <h3 className=&quot;text-2xl font-semibold text-white mb-2&quot;>No services found</h3>
                <p className=&quot;text-gray-400&quot;>Try adjusting your search criteria or filters</p>
=======
                initial={{ opacity: 0}}
                animate={_{ opacity: 1}} className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </motion.div>
            )}
          </div>
        </section>

<<<<<<< HEAD
        {/* Call to Action */}
        <section className=&quot;relative z-10 py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
=======
        {_/* Call to Action */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join thousands of companies achieving breakthrough results with our revolutionary services
              </p>
              
<<<<<<< HEAD
              {/* Contact Information */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-8&quot;>
                <div className=&quot;flex items-center justify-center space-x-3&quot;>
                  <div className=&quot;w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center&quot;>
                    <Target className=&quot;w-6 h-6 text-cyan-400&quot; />
=======
              {_/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-cyan-400" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                  <span className=&quot;text-lg text-white&quot;>+1 302 464 0950</span>
                </div>
                <div className=&quot;flex items-center justify-center space-x-3&quot;>
                  <div className=&quot;w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center&quot;>
                    <Award className=&quot;w-6 h-6 text-purple-400&quot; />
                  </div>
                  <span className=&quot;text-lg text-white&quot;>kleber@ziontechgroup.com</span>
                </div>
                <div className=&quot;flex items-center justify-center space-x-3&quot;>
                  <div className=&quot;w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center&quot;>
                    <Lightbulb className=&quot;w-6 h-6 text-green-400&quot; />
                  </div>
                  <span className=&quot;text-lg text-white&quot;>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>

<<<<<<< HEAD
              {/* Action Buttons */}
<<<<<<< HEAD
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
              {_/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <a 
                  href=&quot;/contact&quot; className=&quot;inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white shadow-lg hover:shadow-xl border border-blue-500/20 no-underline&quot;>
                  <span className=&quot;relative&quot;>Start Your Transformation</span>
                  <Rocket className=&quot;ml-2 w-6 h-6&quot; />
                </Link>
                <a 
                  href=&quot;/pricing&quot; className=&quot;inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 text-white shadow-lg hover:shadow-xl border border-gray-500/20 no-underline&quot;>
                  <span className=&quot;relative&quot;>View Pricing</span>
                  <DollarSign className=&quot;ml-2 w-6 h-6&quot; />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  )
}