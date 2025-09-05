<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Search, Filter, Star, TrendingUp, Zap, Brain, Shield,
  Globe, Database, Cloud, Lock, Palette, Target, Layers,
  Sparkles, Atom, Microscope, Satellite, CheckCircle,
  ArrowRight, Phone, Mail, MapPin, Rocket, Users,
  BarChart3, Award, Clock, DollarSign
} from 'lucide-react',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation',
import { nextGenAIServices2026 } from '../data/next-gen-ai-services-2026',
import { revolutionaryITInfrastructure2026 } from '../data/revolutionary-it-infrastructure-2026',
import { innovativeMicroSaas2026 } from '../data/innovative-micro-saas-2026',
export default function Comprehensive2026ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [sortBy, setSortBy] = useState('popularity'),
  const [viewMode, setViewMode] = useState('grid'),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
=======
import React, {_useState, _useEffect} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_Search, _Filter, _Star, _TrendingUp, _Zap, _Brain, _Shield, _Globe, _Database, _Cloud, _Lock, _Palette, _Target, _Layers, _Sparkles, _Atom, _Microscope, _Satellite, _CheckCircle, _ArrowRight, _Phone, _Mail, _MapPin, _Rocket, _Users, _BarChart3, _Award, _Clock, _DollarSign} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';

export default function Comprehensive2026ServicesShowcase() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('all');
  const [sortBy, _setSortBy] = useState('popularity');
  const [viewMode, _setViewMode] = useState('grid');

  const _contactInfo = {
    mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Combine all services
  const _allServices = [
    ...nextGenAIServices2026,
    ...revolutionaryITInfrastructure2026,
    ...innovativeMicroSaas2026
  ],

  // Categories for filtering
<<<<<<< HEAD
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: nextGenAIServices2026.length },
    { id: 'it', name: 'IT Infrastructure', icon: Shield, count: revolutionaryITInfrastructure2026.length },
    { id: 'saas', name: 'Micro SaaS', icon: Zap, count: innovativeMicroSaas2026.length },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Layers, count: allServices.filter(s => s.category.includes('Blockchain')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: Sparkles, count: allServices.filter(s => s.category.includes('Emerging')).length }
  ],
=======
  const _categories = [
    {_id: 'all', _name: 'All Services', _icon: Globe, _count: allServices.length},
    {_id: 'ai', _name: 'AI & Machine Learning', _icon: Brain, _count: nextGenAIServices2026.length},
    {_id: 'it', _name: 'IT Infrastructure', _icon: Shield, _count: revolutionaryITInfrastructure2026.length},
    {_id: 'saas', _name: 'Micro SaaS', _icon: Zap, _count: innovativeMicroSaas2026.length},
    {_id: 'quantum', _name: 'Quantum Computing', _icon: Atom, _count: allServices.filter(s => s.category.includes('Quantum')).length},
    {_id: 'blockchain', _name: 'Blockchain & Web3', _icon: Layers, _count: allServices.filter(s => s.category.includes('Blockchain')).length},
    {_id: 'emerging', _name: 'Emerging Tech', _icon: Sparkles, _count: allServices.filter(s => s.category.includes('Emerging')).length}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Filter and sort services
  const _filteredServices = allServices
    .filter(service => {_const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
<<<<<<< HEAD
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()),
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory),
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),
        case 'price-high':
          return parseFloat(b.price.replace('$', '').replace(, '')) - parseFloat(a.price.replace('$', '').replace(, '')),
=======
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const _matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory);
      return matchesSearch && matchesCategory;})
    .sort(_(a, _b) => {_switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace('$', _'').replace(', _', _'')) - parseFloat(b.price.replace('$', _'').replace(', _', _''));
        case 'price-high':
          return parseFloat(b.price.replace('$', _'').replace(', _', _'')) - parseFloat(a.price.replace('$', _'').replace(', _', _''));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        case 'rating':
          return b.rating - a.rating,
        case 'customers':
<<<<<<< HEAD
          return b.customers - a.customers,
        default: return a.popular ? -1 : 1
      }
    }),
=======
          return b.customers - a.customers;
        default:
          return a.popular ? -1 : 1;}
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  },

<<<<<<< HEAD
  return (
    <UltraAdvancedFuturisticBackground 
      intensity=&quot;extreme&quot; 
      colorScheme=&quot;quantum-fusion&quot;
      particleCount={500}
      animationSpeed={2.5}
    >
      <Head>
        <title>Comprehensive 2026 Services Showcase | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Discover our comprehensive collection of cutting-edge AI, IT infrastructure, and micro SaaS services for 2026. Transform your business with innovative technology solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI services, IT infrastructure, micro SaaS, quantum computing, blockchain, 2026 technology, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Comprehensive 2026 Services Showcase | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Discover our comprehensive collection of cutting-edge AI, IT infrastructure, and micro SaaS services for 2026.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/comprehensive-2026-services-showcase&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/comprehensive-2026-services-showcase&quot; />
=======
  return (_<UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="quantum-fusion"
      particleCount={_500}
      animationSpeed={_2.5}
    >
      <Head>
        <title>Comprehensive 2026 Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of cutting-edge AI, _IT infrastructure, _and micro SaaS services for 2026. Transform your business with innovative technology solutions." />
        <meta name="keywords" content="AI services, _IT infrastructure, _micro SaaS, _quantum computing, _blockchain, _2026 technology, _Zion Tech Group" />
        <meta property="og:title" content="Comprehensive 2026 Services Showcase | Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive collection of cutting-edge AI, _IT infrastructure, _and micro SaaS services for 2026." />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-2026-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-2026-services-showcase" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>

      <UltraAdvancedNavigation />

<<<<<<< HEAD
      <div className=&quot;min-h-screen relative z-10&quot;>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
=======
      <div className="min-h-screen relative z-10">
        {_/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6&quot;>
                Comprehensive 2026
                <br />
                <span className=&quot;text-6xl md:text-8xl&quot;>Services Showcase</span>
              </h1>
<<<<<<< HEAD
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
                Discover our revolutionary collection of AI, IT infrastructure, and micro SaaS services 
                designed to transform your business in 2026 and beyond.
              </p>
              
              {/* Service Statistics */}
              <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-12&quot;>
                <div className=&quot;bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30&quot;>
                  <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>{allServices.length}+</div>
                  <div className=&quot;text-gray-300&quot;>Total Services</div>
=======
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our revolutionary collection of AI, _IT infrastructure, _and micro SaaS services 
                designed to transform your business in 2026 and beyond.
              </p>
              
              {_/* Service Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{_allServices.length}+</div>
                  <div className="text-gray-300">Total Services</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
                <div className=&quot;bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30&quot;>
                  <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>15+</div>
                  <div className=&quot;text-gray-300&quot;>Categories</div>
                </div>
                <div className=&quot;bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30&quot;>
                  <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>4.8+</div>
                  <div className=&quot;text-gray-300&quot;>Avg Rating</div>
                </div>
                <div className=&quot;bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/30&quot;>
                  <div className=&quot;text-3xl font-bold text-orange-400 mb-2&quot;>1000+</div>
                  <div className=&quot;text-gray-300&quot;>Happy Customers</div>
                </div>
              </div>

<<<<<<< HEAD
              {/* Contact Information */}
              <div className=&quot;bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 max-w-4xl mx-auto&quot;>
                <h3 className=&quot;text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3&quot;>
                  <Rocket className=&quot;w-8 h-8 text-cyan-400&quot; />
                  Ready to Transform Your Business?
                </h3>
                <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
                  <div className=&quot;flex items-center gap-3 text-gray-300&quot;>
                    <Phone className=&quot;w-5 h-5 text-cyan-400&quot; />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className=&quot;flex items-center gap-3 text-gray-300&quot;>
                    <Mail className=&quot;w-5 h-5 text-purple-400&quot; />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className=&quot;flex items-center gap-3 text-gray-300&quot;>
                    <MapPin className=&quot;w-5 h-5 text-green-400&quot; />
                    <span>{contactInfo.address}</span>
=======
              {_/* Contact Information */}
              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                  <Rocket className="w-8 h-8 text-cyan-400" />
                  Ready to Transform Your Business?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>{_contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>{_contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span>{_contactInfo.address}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Search and Filter Section */}
        <section className=&quot;py-12 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <div className=&quot;bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30&quot;>
              {/* Search Bar */}
              <div className=&quot;relative mb-8&quot;>
                <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services by name, description, or category...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full bg-gray-800/50 border border-gray-600/30 rounded-2xl pl-14 pr-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
                />
              </div>

              {/* Filters and Controls */}
              <div className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;>
                {/* Category Filter */}
                <div className=&quot;flex flex-wrap gap-3&quot;>
                  {categories.map((category) => (
                    <button
=======
        {_/* Search and Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30">
              {_/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search services by name, _description, _or category..."
                  value={_searchTerm}
                  onChange={_(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600/30 rounded-2xl pl-14 pr-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {_/* Filters and Controls */}
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {_/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                  {_categories.map(_(category) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      key={category.id}
                      onClick={_() => setSelectedCategory(category.id)}
                      className={_`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-600 border-cyan-500 text-white'
                          : 'bg-gray-800/50 border-gray-600/30 text-gray-300 hover:border-cyan-500/50'}`}
                    >
<<<<<<< HEAD
                      <category.icon className=&quot;w-4 h-4&quot; />
                      {category.name}
                      <span className=&quot;bg-gray-700/50 px-2 py-1 rounded-lg text-xs&quot;>
                        {category.count}
=======
                      <category.icon className="w-4 h-4" />
                      {_category.name}
                      <span className="bg-gray-700/50 px-2 py-1 rounded-lg text-xs">
                        {_category.count}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </span>
                    </button>
                  ))}
                </div>

<<<<<<< HEAD
                {/* Sort and View Controls */}
                <div className=&quot;flex items-center gap-4&quot;>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className=&quot;bg-gray-800/50 border border-gray-600/30 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500&quot;
=======
                {_/* Sort and View Controls */}
                <div className="flex items-center gap-4">
                  <select
                    value={_sortBy}
                    onChange={_(_e) => setSortBy(e.target.value)}
                    className="bg-gray-800/50 border border-gray-600/30 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <option value=&quot;popularity&quot;>Most Popular</option>
                    <option value=&quot;price-low&quot;>Price: Low to High</option>
                    <option value=&quot;price-high&quot;>Price: High to Low</option>
                    <option value=&quot;rating&quot;>Highest Rated</option>
                    <option value=&quot;customers&quot;>Most Customers</option>
                  </select>

                  <div className=&quot;flex bg-gray-800/50 rounded-xl p-1 border border-gray-600/30&quot;>
                    <button
                      onClick={_() => setViewMode('grid')}
                      className={_`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      <svg className=&quot;w-5 h-5&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                        <path d=&quot;M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z&quot; />
                      </svg>
                    </button>
                    <button
                      onClick={_() => setViewMode('list')}
                      className={_`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      <svg className=&quot;w-5 h-5&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                        <path fillRule=&quot;evenodd&quot; d=&quot;M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z&quot; clipRule=&quot;evenodd&quot; />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section className=&quot;py-12 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              variants={containerVariants}
              initial=&quot;hidden&quot;
              animate=&quot;visible&quot;
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
=======
        {_/* Services Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={_containerVariants}
              initial="hidden"
              animate="visible"
              className={_viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <AnimatePresence>
                {_filteredServices.map(_(service) => (
                  <motion.div
                    key={service.id}
                    variants={_itemVariants}
                    layout
                    className={_`bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-600/30 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 group ${
                      viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''}`}
                  >
<<<<<<< HEAD
                    {/* Service Header */}
                    <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                      <div className=&quot;flex items-start justify-between mb-4&quot;>
                        <div className=&quot;text-4xl&quot;>{service.icon}</div>
                        {service.popular && (
                          <div className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1&quot;>
                            <Star className=&quot;w-3 h-3&quot; />
=======
                    {_/* Service Header */}
                    <div className={_`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{_service.icon}</div>
                        {_service.popular && (
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                            <Star className="w-3 h-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            Popular
                          </div>
                        )}
                      </div>
                      
<<<<<<< HEAD
                      <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors&quot;>
                        {service.name}
                      </h3>
                      
                      <p className=&quot;text-gray-300 text-sm mb-4 leading-relaxed&quot;>
                        {service.tagline}
                      </p>

                      <div className=&quot;flex items-center justify-between mb-4&quot;>
                        <div className=&quot;text-2xl font-bold text-cyan-400&quot;>
                          {service.price}
                          <span className=&quot;text-gray-400 text-sm font-normal&quot;>{service.period}</span>
                        </div>
                        <div className=&quot;flex items-center gap-1 text-yellow-400&quot;>
                          <Star className=&quot;w-4 h-4 fill-current&quot; />
                          <span className=&quot;text-white text-sm&quot;>{service.rating}</span>
                          <span className=&quot;text-gray-400 text-sm&quot;>({service.reviews})</span>
                        </div>
                      </div>

                      <div className=&quot;flex items-center gap-4 text-sm text-gray-400 mb-4&quot;>
                        <div className=&quot;flex items-center gap-1&quot;>
                          <Users className=&quot;w-4 h-4&quot; />
                          {service.customers.toLocaleString()}
                        </div>
                        <div className=&quot;flex items-center gap-1&quot;>
                          <Clock className=&quot;w-4 h-4&quot; />
                          {service.setupTime}
=======
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {_service.name}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {_service.tagline}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-cyan-400">
                          {_service.price}
                          <span className="text-gray-400 text-sm font-normal">{_service.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-white text-sm">{_service.rating}</span>
                          <span className="text-gray-400 text-sm">({_service.reviews})</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {_service.customers.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {_service.setupTime}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      </div>
                    </div>

<<<<<<< HEAD
                    {/* Service Details */}
                    <div className={`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                      <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                        {service.description}
                      </p>

                      {/* Key Features */}
                      <div className=&quot;mb-4&quot;>
                        <h4 className=&quot;text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider&quot;>
                          Key Features
                        </h4>
                        <div className=&quot;grid grid-cols-1 gap-2&quot;>
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className=&quot;flex items-center gap-2 text-sm text-gray-300&quot;>
                              <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                              {feature}
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className=&quot;text-sm text-cyan-400&quot;>
=======
                    {_/* Service Details */}
                    <div className={_`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {_service.description}
                      </p>

                      {_/* Key Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {_service.features.slice(0, _3).map(_(feature, _index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              {_feature}
                            </div>
                          ))}
                          {_service.features.length > 3 && (
                            <div className="text-sm text-cyan-400">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

<<<<<<< HEAD
                      {/* Market Info */}
                      <div className=&quot;grid grid-cols-2 gap-4 mb-6 text-sm&quot;>
                        <div>
                          <div className=&quot;text-gray-400 mb-1&quot;>Market Size</div>
                          <div className=&quot;text-white font-semibold&quot;>{service.marketSize}</div>
                        </div>
                        <div>
                          <div className=&quot;text-gray-400 mb-1&quot;>Growth Rate</div>
                          <div className=&quot;text-white font-semibold&quot;>{service.growthRate}</div>
                        </div>
                      </div>

                      {/* ROI */}
                      <div className=&quot;bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-4 mb-6 border border-green-500/20&quot;>
                        <div className=&quot;text-sm text-gray-400 mb-1&quot;>Expected ROI</div>
                        <div className=&quot;text-green-400 font-semibold&quot;>{service.roi}</div>
                      </div>

                      {/* Action Buttons */}
                      <div className=&quot;flex flex-col sm:flex-row gap-3&quot;>
                        <Link
                          href={service.link}
                          className=&quot;flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105&quot;
=======
                      {_/* Market Info */}
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <div className="text-gray-400 mb-1">Market Size</div>
                          <div className="text-white font-semibold">{_service.marketSize}</div>
                        </div>
                        <div>
                          <div className="text-gray-400 mb-1">Growth Rate</div>
                          <div className="text-white font-semibold">{_service.growthRate}</div>
                        </div>
                      </div>

                      {_/* ROI */}
                      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-4 mb-6 border border-green-500/20">
                        <div className="text-sm text-gray-400 mb-1">Expected ROI</div>
                        <div className="text-green-400 font-semibold">{_service.roi}</div>
                      </div>

                      {_/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={_service.link}
                          className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        >
                          Learn More
                          <ArrowRight className=&quot;w-4 h-4 group-hover:translate-x-1 transition-transform&quot; />
                        </Link>
                        <button className=&quot;bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold py-3 px-6 rounded-xl border border-gray-600/30 transition-all duration-300 flex items-center justify-center gap-2&quot;>
                          <Phone className=&quot;w-4 h-4&quot; />
                          Contact
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

<<<<<<< HEAD
            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className=&quot;text-center py-20&quot;>
                <div className=&quot;text-6xl mb-4&quot;>🔍</div>
                <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
                <p className=&quot;text-gray-400 mb-6&quot;>Try adjusting your search terms or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm(''),
                    setSelectedCategory('all')
                  }}
                  className=&quot;bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors&quot;
=======
            {_/* No Results */}
            {_filteredServices.length === 0 && (_<div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');}}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
=======
        {_/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8 leading-relaxed&quot;>
                Our team of experts is ready to help you implement the perfect solution 
                for your business needs. Get started today with a free consultation.
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <Link
<<<<<<< HEAD
                  href={`tel:${contactInfo.mobile}`}
                  className=&quot;bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg&quot;
                >
                  <Phone className=&quot;w-5 h-5&quot; />
                  Call Now: {contactInfo.mobile}
                </Link>
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className=&quot;bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg&quot;
=======
                  href={_`tel:${contactInfo.mobile}`}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: {_contactInfo.mobile}
                </Link>
                <Link
                  href={_`mailto:${contactInfo.email}`}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <Mail className=&quot;w-5 h-5&quot; />
                  Email Us
                </Link>
              </div>

<<<<<<< HEAD
              <div className=&quot;mt-8 text-gray-400&quot;>
                <p>📍 {contactInfo.address}</p>
                <p>🌐 <a href={contactInfo.website} className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>{contactInfo.website}</Link></p>
=======
              <div className="mt-8 text-gray-400">
                <p>📍 {_contactInfo.address}</p>
                <p>🌐 <a href={_contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">{_contactInfo.website}</a></p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
}