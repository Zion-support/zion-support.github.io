<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import Head from 'next/head',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star,
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  Search, Filter, Grid, List, Star as StarIcon, Eye, Heart, Share2,
  DollarSign, Calendar, Users as UsersIcon, Zap as ZapIcon
} from 'lucide-react',
import EnhancedNavigation from '../components/EnhancedNavigation',
import EnhancedFooter from '../components/EnhancedFooter',
import { advancedInnovativeServices } from '../data/2025-advanced-innovative-services-expansion',
import { emergingTechInnovations } from '../data/2025-emerging-tech-innovations',
export default function AdvancedServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity'),
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]),

  // Combine all services
  const allServices = [...advancedInnovativeServices, ...emergingTechInnovations],

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' },
    { id: 'AI & Machine Learning', name: 'AI & ML', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length, icon: '🧠' },
    { id: 'Quantum Computing & AI', name: 'Quantum AI', count: allServices.filter(s => s.category.includes('Quantum')).length, icon: '⚛️' },
    { id: 'Cybersecurity', name: 'Security', count: allServices.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Security')).length, icon: '🛡️' },
    { id: 'Edge Computing & IoT', name: 'Edge & IoT', count: allServices.filter(s => s.category.includes('Edge') || s.category.includes('IoT')).length, icon: '🌐' },
    { id: 'Space Technology & Innovation', name: 'Space Tech', count: allServices.filter(s => s.category.includes('Space')).length, icon: '🚀' },
    { id: 'Neural Technology & BCI', name: 'Neural & BCI', count: allServices.filter(s => s.category.includes('Neural') || s.category.includes('BCI')).length, icon: '🧠' },
    { id: 'Healthcare AI', name: 'Healthcare', count: allServices.filter(s => s.category.includes('Healthcare')).length, icon: '🏥' },
    { id: 'Climate & Sustainability', name: 'Climate', count: allServices.filter(s => s.category.includes('Climate') || s.category.includes('Sustainability')).length, icon: '🌍' },
    { id: 'Blockchain & DeFi', name: 'Blockchain', count: allServices.filter(s => s.category.includes('Blockchain') || s.category.includes('DeFi')).length, icon: '🔗' },
    { id: 'Metaverse & VR/AR', name: 'Metaverse', count: allServices.filter(s => s.category.includes('Metaverse') || s.category.includes('VR/AR')).length, icon: '🌐' }
  ],
=======
import React, {_useState, _useEffect} from 'react';
import Head from 'next/head';
import {_ArrowRight, _Brain, _Shield, _Rocket, _Cpu, _Database, _Atom, _Target, _Star, _Sparkles, _Zap, _Users, _Award, _Clock, _CheckCircle, _Globe, _Code, _Server, _ChevronRight, _ExternalLink, _TrendingUp, _BarChart3, _Cloud, _Network, _Search, _Filter, _Grid, _List, _Star as StarIcon, _Eye, _Heart, _Share2, _DollarSign, _Calendar, _Users as UsersIcon, _Zap as ZapIcon} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function AdvancedServicesShowcase2025() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('all');
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, _setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity');
  const [priceRange, _setPriceRange] = useState<[number, _number]>([0, _10000]);

  // Combine all services
  const _allServices = [...advancedInnovativeServices, _...emergingTechInnovations];

  const _categories = [
    { id: 'all', _name: 'All Services', _count: allServices.length, _icon: '🚀'},
    {_id: 'AI & Machine Learning', _name: 'AI & ML', _count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length, _icon: '🧠'},
    {_id: 'Quantum Computing & AI', _name: 'Quantum AI', _count: allServices.filter(s => s.category.includes('Quantum')).length, _icon: '⚛️'},
    {_id: 'Cybersecurity', _name: 'Security', _count: allServices.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Security')).length, _icon: '🛡️'},
    {_id: 'Edge Computing & IoT', _name: 'Edge & IoT', _count: allServices.filter(s => s.category.includes('Edge') || s.category.includes('IoT')).length, _icon: '🌐'},
    {_id: 'Space Technology & Innovation', _name: 'Space Tech', _count: allServices.filter(s => s.category.includes('Space')).length, _icon: '🚀'},
    {_id: 'Neural Technology & BCI', _name: 'Neural & BCI', _count: allServices.filter(s => s.category.includes('Neural') || s.category.includes('BCI')).length, _icon: '🧠'},
    {_id: 'Healthcare AI', _name: 'Healthcare', _count: allServices.filter(s => s.category.includes('Healthcare')).length, _icon: '🏥'},
    {_id: 'Climate & Sustainability', _name: 'Climate', _count: allServices.filter(s => s.category.includes('Climate') || s.category.includes('Sustainability')).length, _icon: '🌍'},
    {_id: 'Blockchain & DeFi', _name: 'Blockchain', _count: allServices.filter(s => s.category.includes('Blockchain') || s.category.includes('DeFi')).length, _icon: '🔗'},
    {_id: 'Metaverse & VR/AR', _name: 'Metaverse', _count: allServices.filter(s => s.category.includes('Metaverse') || s.category.includes('VR/AR')).length, _icon: '🌐'}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredServices = allServices
    .filter(service => {_const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
<<<<<<< HEAD
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase()),
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory),
      const price = parseFloat(service.price.replace('$', '').replace(, '')),
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1],
      return matchesSearch && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
=======
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const _matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      const _price = parseFloat(service.price.replace('$', _'').replace(', _', _''));
      const _matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;})
    .sort(_(a, _b) => {_switch (sortBy) {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),
        case 'price':
<<<<<<< HEAD
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),
=======
          return parseFloat(a.price.replace('$', _'').replace(', _', _'')) - parseFloat(b.price.replace('$', _'').replace(', _', _''));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        case 'rating':
          return b.rating - a.rating,
        case 'newest':
<<<<<<< HEAD
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
        default: return 0
      }
    }),
=======
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;}
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category),
    return categoryData?.icon || '🚀'
  },

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>2025 Advanced Services Showcase — Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our comprehensive collection of advanced innovative micro SAAS services, cutting-edge AI solutions, quantum technologies, and revolutionary IT services. Transform your business with Zion Tech Group.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;2025 Advanced Services Showcase — Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Explore our comprehensive collection of advanced innovative micro SAAS services, cutting-edge AI solutions, quantum technologies, and revolutionary IT services.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;advanced micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/2025-advanced-services-showcase&quot; />
=======
  const _getCategoryIcon = (_category: string) => {_const _categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || '🚀';};

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>2025 Advanced Services Showcase — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive collection of advanced innovative micro SAAS services, _cutting-edge AI solutions, _quantum technologies, _and revolutionary IT services. Transform your business with Zion Tech Group." />
        <meta property="og:title" content="2025 Advanced Services Showcase — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive collection of advanced innovative micro SAAS services, _cutting-edge AI solutions, _quantum technologies, _and revolutionary IT services." />
        <meta name="keywords" content="advanced micro SAAS, _AI services, _quantum computing, _cybersecurity, _edge computing, _space technology, _neural interfaces, _Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/2025-advanced-services-showcase" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>

      <EnhancedNavigation />

<<<<<<< HEAD
      {/* Hero Section */}
      <section className=&quot;relative py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
=======
      {_/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent&quot;>
              2025 Advanced Services Showcase
            </h1>
<<<<<<< HEAD
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8&quot;>
              Discover our comprehensive collection of cutting-edge micro SAAS services, advanced AI solutions, 
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.
            </p>
            
            {/* Stats */}
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-12&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>{allServices.length}+</div>
                <div className=&quot;text-white/70&quot;>Advanced Services</div>
=======
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive collection of cutting-edge micro SAAS services, _advanced AI solutions, _quantum technologies, _and revolutionary IT services that are transforming industries worldwide.
            </p>
            
            {_/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{_allServices.length}+</div>
                <div className="text-white/70">Advanced Services</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>15+</div>
                <div className=&quot;text-white/70&quot;>Technology Categories</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>99.9%</div>
                <div className=&quot;text-white/70&quot;>Uptime Guarantee</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-orange-400 mb-2&quot;>24/7</div>
                <div className=&quot;text-white/70&quot;>Expert Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Search and Filters */}
      <section className=&quot;px-6 pb-12&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=&quot;bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10&quot;
          >
            {/* Search Bar */}
            <div className=&quot;mb-6&quot;>
              <div className=&quot;relative&quot;>
                <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services by name, description, or features...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full bg-white/10 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300&quot;
=======
      {_/* Search and Filters */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            {_/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, _description, _or features..."
                  value={_searchTerm}
                  onChange={_(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </div>
            </div>

<<<<<<< HEAD
            {/* Filters Row */}
            <div className=&quot;flex flex-col lg:flex-row gap-6&quot;>
              {/* Category Filter */}
              <div className=&quot;flex-1&quot;>
                <label className=&quot;block text-sm font-medium text-white/70 mb-3&quot;>Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className=&quot;w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300&quot;
=======
            {_/* Filters Row */}
            <div className="flex flex-col lg:flex-row gap-6">
              {_/* Category Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white/70 mb-3">Category</label>
                <select
                  value={_selectedCategory}
                  onChange={_(_e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  {_categories.map(_(category) => (
                    <option key={category.id} value={_category.id}>
                      {_category.name} ({_category.count})
                    </option>
                  ))}
                </select>
              </div>

<<<<<<< HEAD
              {/* Sort By */}
              <div className=&quot;flex-1&quot;>
                <label className=&quot;block text-sm font-medium text-white/70 mb-3&quot;>Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className=&quot;w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300&quot;
=======
              {_/* Sort By */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white/70 mb-3">Sort By</label>
                <select
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value as any)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <option value=&quot;popularity&quot;>Popularity</option>
                  <option value=&quot;price&quot;>Price (Low to High)</option>
                  <option value=&quot;rating&quot;>Rating</option>
                  <option value=&quot;newest&quot;>Newest</option>
                </select>
              </div>

<<<<<<< HEAD
              {/* Price Range */}
              <div className=&quot;flex-1&quot;>
                <label className=&quot;block text-sm font-medium text-white/70 mb-3&quot;>Price Range</label>
                <div className=&quot;flex gap-2&quot;>
                  <input
                    type=&quot;number&quot;
                    placeholder=&quot;Min&quot;
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className=&quot;flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300&quot;
                  />
                  <input
                    type=&quot;number&quot;
                    placeholder=&quot;Max&quot;
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                    className=&quot;flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300&quot;
=======
              {_/* Price Range */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white/70 mb-3">Price Range</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={_priceRange[0]}
                    onChange={_(_e) => setPriceRange([parseInt(e.target.value) || 0, _priceRange[1]])}
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={_priceRange[1]}
                    onChange={_(_e) => setPriceRange([priceRange[0], _parseInt(e.target.value) || 10000])}
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </div>
              </div>

<<<<<<< HEAD
              {/* View Mode Toggle */}
              <div className=&quot;flex items-end&quot;>
                <div className=&quot;flex bg-white/10 rounded-xl p-1&quot;>
=======
              {_/* View Mode Toggle */}
              <div className="flex items-end">
                <div className="flex bg-white/10 rounded-xl p-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <button
                    onClick={_() => setViewMode('grid')}
                    className={_`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white'}`}
                  >
                    <Grid className=&quot;w-5 h-5&quot; />
                  </button>
                  <button
                    onClick={_() => setViewMode('list')}
                    className={_`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white'}`}
                  >
                    <List className=&quot;w-5 h-5&quot; />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid/List */}
      <section className=&quot;px-6 pb-20&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=&quot;mb-8&quot;
          >
            <p className=&quot;text-white/70&quot;>
              Showing {filteredServices.length} of {allServices.length} services
=======
      {_/* Services Grid/List */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {_/* Results Count */}
          <motion.div
            initial={_{ opacity: 0}}
            animate={_{ opacity: 1}}
            transition={_{ duration: 0.5}}
            className="mb-8"
          >
            <p className="text-white/70">
              Showing {_filteredServices.length} of {_allServices.length} services
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
          </motion.div>

          {_/* Services Display */}
          <motion.div
<<<<<<< HEAD
            variants={containerVariants}
            initial=&quot;hidden&quot;
            animate=&quot;visible&quot;
            className={viewMode === 'grid' 
              ? &quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
              : &quot;space-y-6&quot;
            }
          >
            <AnimatePresence mode=&quot;wait&quot;>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={viewMode === 'grid' 
                    ? &quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
                    : &quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl&quot;
                  }
                >
                  {/* Service Header */}
                  <div className=&quot;p-6&quot;>
                    <div className=&quot;flex items-start justify-between mb-4&quot;>
                      <div className=&quot;flex items-center gap-3&quot;>
                        <div className={`text-3xl ${service.color.includes('from-') ? '' : 'bg-gradient-to-r ' + service.color}`}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className=&quot;text-xl font-bold text-white mb-1&quot;>{service.name}</h3>
                          <p className=&quot;text-white/70 text-sm&quot;>{service.tagline}</p>
                        </div>
                      </div>
                      {service.popular && (
                        <span className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full&quot;>
=======
            variants={_containerVariants}
            initial="hidden"
            animate="visible"
            className={_viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"}
          >
            <AnimatePresence mode="wait">
              {_filteredServices.map(_(service, _index) => (
                <motion.div
                  key={service.id}
                  variants={_itemVariants}
                  className={_viewMode === 'grid' 
                    ? "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    : "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl"}
                >
                  {_/* Service Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={_`text-3xl ${service.color.includes('from-') ? '' : 'bg-gradient-to-r ' + service.color}`}>
                          {_service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{_service.name}</h3>
                          <p className="text-white/70 text-sm">{_service.tagline}</p>
                        </div>
                      </div>
                      {_service.popular && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          Popular
                        </span>
                      )}
                    </div>

<<<<<<< HEAD
                    {/* Description */}
                    <p className=&quot;text-white/80 mb-4 leading-relaxed&quot;>{service.description}</p>

                    {/* Price and Details */}
                    <div className=&quot;flex items-center justify-between mb-4&quot;>
                      <div className=&quot;flex items-center gap-4&quot;>
                        <div className=&quot;flex items-center gap-2&quot;>
                          <DollarSign className=&quot;w-4 h-4 text-green-400&quot; />
                          <span className=&quot;text-2xl font-bold text-green-400&quot;>{service.price}</span>
                          <span className=&quot;text-white/60&quot;>{service.period}</span>
                        </div>
                        <div className=&quot;flex items-center gap-2&quot;>
                          <UsersIcon className=&quot;w-4 h-4 text-blue-400&quot; />
                          <span className=&quot;text-white/70&quot;>{service.customers}+ customers</span>
                        </div>
                      </div>
                      <div className=&quot;flex items-center gap-1&quot;>
                        <StarIcon className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                        <span className=&quot;text-white font-medium&quot;>{service.rating}</span>
                        <span className=&quot;text-white/60&quot;>({service.reviews})</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className=&quot;mb-6&quot;>
                      <h4 className=&quot;text-white font-semibold mb-3&quot;>Key Features:</h4>
                      <div className=&quot;grid grid-cols-1 gap-2&quot;>
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className=&quot;flex items-center gap-2&quot;>
                            <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                            <span className=&quot;text-white/80 text-sm&quot;>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className=&quot;text-white/60 text-sm&quot;>
=======
                    {_/* Description */}
                    <p className="text-white/80 mb-4 leading-relaxed">{_service.description}</p>

                    {_/* Price and Details */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span className="text-2xl font-bold text-green-400">{_service.price}</span>
                          <span className="text-white/60">{_service.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <UsersIcon className="w-4 h-4 text-blue-400" />
                          <span className="text-white/70">{_service.customers}+ customers</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{_service.rating}</span>
                        <span className="text-white/60">({_service.reviews})</span>
                      </div>
                    </div>

                    {_/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {_service.features.slice(0, _3).map(_(feature, _idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-white/80 text-sm">{_feature}</span>
                          </div>
                        ))}
                        {_service.features.length > 3 && (
                          <div className="text-white/60 text-sm">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

<<<<<<< HEAD
                    {/* Category and Technology */}
                    <div className=&quot;flex items-center justify-between mb-6&quot;>
                      <div className=&quot;flex items-center gap-2&quot;>
                        <span className=&quot;text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full&quot;>
                          {getCategoryIcon(service.category)} {service.category}
=======
                    {_/* Category and Technology */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">
                          {_getCategoryIcon(service.category)} {_service.category}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </span>
                      </div>
<<<<<<< HEAD
                      <div className="text-white/60 text-sm">
<<<<<<< HEAD
                        {service.technology.slice(0, 2).join()}
=======
                      <div className=&quot;text-white/60 text-sm&quot;>
                        {service.technology.slice(0, 2).join(', ')}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                        {service.technology.length > 2 && '...'}
                      </div>
                    </div>

                    {/* ROI and Benefits */}
                    <div className=&quot;mb-6&quot;>
                      <div className=&quot;bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/20&quot;>
                        <h4 className=&quot;text-cyan-400 font-semibold mb-2&quot;>ROI & Benefits</h4>
                        <p className=&quot;text-white/80 text-sm mb-3&quot;>{service.roi}</p>
                        <div className=&quot;flex flex-wrap gap-2&quot;>
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <span key={idx} className=&quot;text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full&quot;>
                              {benefit}
=======
                        {_service.technology.slice(0, _2).join(', _')}
                        {_service.technology.length > 2 && '...'}
                      </div>
                    </div>

                    {_/* ROI and Benefits */}
                    <div className="mb-6">
                      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/20">
                        <h4 className="text-cyan-400 font-semibold mb-2">ROI & Benefits</h4>
                        <p className="text-white/80 text-sm mb-3">{_service.roi}</p>
                        <div className="flex flex-wrap gap-2">
                          {_service.benefits.slice(0, _2).map(_(benefit, _idx) => (
                            <span key={idx} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
                              {_benefit}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

<<<<<<< HEAD
                    {/* Action Buttons */}
                    <div className=&quot;flex gap-3&quot;>
                      <a
                        href={service.link}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2&quot;
=======
                    {_/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={_service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        <ExternalLink className=&quot;w-4 h-4&quot; />
                        Learn More
                      </Link>
                      <a
<<<<<<< HEAD
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                        className=&quot;bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2&quot;
=======
                        href={_`mailto:${service.contactInfo.email}?subject=Inquiry about ${_service.name}`}
                        className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        <ZapIcon className=&quot;w-4 h-4&quot; />
                        Contact
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

<<<<<<< HEAD
          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className=&quot;text-center py-20&quot;
=======
          {_/* No Results */}
          {_filteredServices.length === 0 && (_<motion.div
              initial={{ opacity: 0}}
              animate={_{ opacity: 1}}
              className="text-center py-20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;text-6xl mb-4&quot;>🔍</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
              <p className=&quot;text-white/70 mb-6&quot;>Try adjusting your search criteria or filters</p>
              <button
<<<<<<< HEAD
                onClick={() => {
                  setSearchTerm(''),
                  setSelectedCategory('all'),
                  setPriceRange([0, 10000])
                }}
                className=&quot;bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300&quot;
=======
                onClick={_() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setPriceRange([0, _10000]);}}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className=&quot;px-6 py-20&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
=======
      {_/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
<<<<<<< HEAD
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
=======
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-white/80 mb-8 max-w-2xl mx-auto&quot;>
              Our advanced services are designed to give you a competitive edge in the rapidly evolving technology landscape.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2&quot;
              >
                Schedule Consultation
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2&quot;
              >
                Call +1 302 464 0950
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
}