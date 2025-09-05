<<<<<<< HEAD
import React, { useState, useMemo } from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  Search, Filter, Star, Users, TrendingUp, 
  Brain, Atom, Cpu, Shield, Database, Cloud,
  ArrowRight, CheckCircle, Zap, Sparkles
} from 'lucide-react',
import { realMicroSaasServices2024 } from '../data/2024-real-micro-saas-services',
import { innovativeITServices2024 } from '../data/2024-innovative-it-services',
import UltraFuturisticBackground2034 from '../components/backgrounds/UltraFuturisticBackground2034',
import Link from 'next/link',
const Services2024Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'customers'>('name'),
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'),

  // Combine all services
  const allServices = [...realMicroSaasServices2024, ...innovativeITServices2024],

  // Filter and sort services
  const filteredServices = useMemo(() => {
    const filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
=======
import React, {_useState, _useMemo} from 'react';
import Head from 'next/head';
import {_Search, _Filter, _Star, _Users, _TrendingUp, _Brain, _Atom, _Cpu, _Shield, _Database, _Cloud, _ArrowRight, _CheckCircle, _Zap, _Sparkles} from 'lucide-react';
import UltraFuturisticBackground2034 from '../components/backgrounds/UltraFuturisticBackground2034';
import Link from 'next/link';

const Services2024Page: React.FC = () => {_const [searchQuery, _setSearchQuery] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [sortBy, _setSortBy] = useState<'name' | 'price' | 'rating' | 'customers'>('name');
  const [sortOrder, _setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Combine all services
  const _allServices = [...realMicroSaasServices2024, _...innovativeITServices2024];

  // Filter and sort services
  const _filteredServices = useMemo__(() => {
    let _filtered = allServices.filter(service => {
      const _matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                           service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase())),
      
      const _matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && service.variant.includes('ai')) ||
                             (selectedCategory === 'quantum' && service.variant.includes('security')) ||
                             (selectedCategory === 'it' && service.variant.includes('it')) ||
                             (selectedCategory === 'api' && service.variant.includes('api')) ||
                             (selectedCategory === 'cloud' && service.variant.includes('cloud')) ||
                             (selectedCategory === 'marketing' && service.variant.includes('marketing')) ||
                             (selectedCategory === 'project' && service.variant.includes('project')) ||
                             (selectedCategory === 'customer' && service.variant.includes('customer')),
      
<<<<<<< HEAD
      return matchesSearch && matchesCategory
    }),

    // Sort services
    filtered.sort((a, b) => {
      let aValue: any, bValue: any,
      
      switch (sortBy) {
        case 'price':
          aValue = parseFloat(a.price.replace(/[^0-9.]/g, '')),
          bValue = parseFloat(b.price.replace(/[^0-9.]/g, '')),
          break,
=======
      return matchesSearch && matchesCategory;});

    // Sort services
    filtered.sort(_(a, _b) => {_let aValue: unknown, _bValue: unknown;
      
      switch (sortBy) {
        case 'price':
          aValue = parseFloat(a.price.replace(/[^0-9.]/g, _''));
          bValue = parseFloat(b.price.replace(/[^0-9.]/g, _''));
          break;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        case 'rating':
          aValue = a.rating,
          bValue = b.rating,
          break,
        case 'customers':
<<<<<<< HEAD
          aValue = parseInt(a.customers.replace(/[^0-9]/g, '')),
          bValue = parseInt(b.customers.replace(/[^0-9]/g, '')),
          break,
        default: aValue = a.name.toLowerCase(),
          bValue = b.name.toLowerCase()
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    }),
=======
          aValue = parseInt(a.customers.replace(/[^0-9]/g, _''));
          bValue = parseInt(b.customers.replace(/[^0-9]/g, _''));
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();}
      
      if (sortOrder === 'asc') {_return aValue > bValue ? 1 : -1;} else {_return aValue < bValue ? 1 : -1;}
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return filtered
  }, [allServices, searchQuery, selectedCategory, sortBy, sortOrder]),

<<<<<<< HEAD
  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: allServices.length },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: allServices.filter(s => s.variant.includes('ai')).length },
    { id: 'quantum', name: 'Quantum & Security', icon: Shield, count: allServices.filter(s => s.variant.includes('security')).length },
    { id: 'it', name: 'Enterprise IT', icon: Cpu, count: allServices.filter(s => s.variant.includes('it')).length },
    { id: 'api', name: 'API & Development', icon: Database, count: allServices.filter(s => s.variant.includes('api')).length },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: allServices.filter(s => s.variant.includes('cloud')).length },
    { id: 'marketing', name: 'Marketing & SEO', icon: TrendingUp, count: allServices.filter(s => s.variant.includes('marketing')).length },
    { id: 'project', name: 'Project Management', icon: Users, count: allServices.filter(s => s.variant.includes('project')).length },
    { id: 'customer', name: 'Customer Success', icon: CheckCircle, count: allServices.filter(s => s.variant.includes('customer')).length }
  ],

  const getVariantIcon = (variant: string) => {
    if (variant.includes('ai')) return Brain,
    if (variant.includes('security')) return Shield,
    if (variant.includes('it')) return Cpu,
    if (variant.includes('api')) return Database,
    if (variant.includes('cloud')) return Cloud,
    if (variant.includes('marketing')) return TrendingUp,
    if (variant.includes('project')) return Users,
    if (variant.includes('customer')) return CheckCircle,
    return Sparkles
  },

  const getVariantColor = (variant: string) => {
    if (variant.includes('ai')) return 'from-blue-500 to-cyan-500',
    if (variant.includes('security')) return 'from-red-500 to-pink-500',
    if (variant.includes('it')) return 'from-green-500 to-emerald-500',
    if (variant.includes('api')) return 'from-purple-500 to-violet-500',
    if (variant.includes('cloud')) return 'from-indigo-500 to-blue-500',
    if (variant.includes('marketing')) return 'from-yellow-500 to-orange-500',
    if (variant.includes('project')) return 'from-teal-500 to-cyan-500',
    if (variant.includes('customer')) return 'from-pink-500 to-rose-500',
    return 'from-gray-500 to-slate-500'
  },
=======
  const _categories = [
    {_id: 'all', _name: 'All Services', _icon: Sparkles, _count: allServices.length},
    {_id: 'ai', _name: 'AI & ML', _icon: Brain, _count: allServices.filter(s => s.variant.includes('ai')).length},
    {_id: 'quantum', _name: 'Quantum & Security', _icon: Shield, _count: allServices.filter(s => s.variant.includes('security')).length},
    {_id: 'it', _name: 'Enterprise IT', _icon: Cpu, _count: allServices.filter(s => s.variant.includes('it')).length},
    {_id: 'api', _name: 'API & Development', _icon: Database, _count: allServices.filter(s => s.variant.includes('api')).length},
    {_id: 'cloud', _name: 'Cloud & DevOps', _icon: Cloud, _count: allServices.filter(s => s.variant.includes('cloud')).length},
    {_id: 'marketing', _name: 'Marketing & SEO', _icon: TrendingUp, _count: allServices.filter(s => s.variant.includes('marketing')).length},
    {_id: 'project', _name: 'Project Management', _icon: Users, _count: allServices.filter(s => s.variant.includes('project')).length},
    {_id: 'customer', _name: 'Customer Success', _icon: CheckCircle, _count: allServices.filter(s => s.variant.includes('customer')).length}
  ];

  const _getVariantIcon = (_variant: string) => {_if (variant.includes('ai')) return Brain;
    if (variant.includes('security')) return Shield;
    if (variant.includes('it')) return Cpu;
    if (variant.includes('api')) return Database;
    if (variant.includes('cloud')) return Cloud;
    if (variant.includes('marketing')) return TrendingUp;
    if (variant.includes('project')) return Users;
    if (variant.includes('customer')) return CheckCircle;
    return Sparkles;};

  const _getVariantColor = (_variant: string) => {_if (variant.includes('ai')) return 'from-blue-500 to-cyan-500';
    if (variant.includes('security')) return 'from-red-500 to-pink-500';
    if (variant.includes('it')) return 'from-green-500 to-emerald-500';
    if (variant.includes('api')) return 'from-purple-500 to-violet-500';
    if (variant.includes('cloud')) return 'from-indigo-500 to-blue-500';
    if (variant.includes('marketing')) return 'from-yellow-500 to-orange-500';
    if (variant.includes('project')) return 'from-teal-500 to-cyan-500';
    if (variant.includes('customer')) return 'from-pink-500 to-rose-500';
    return 'from-gray-500 to-slate-500';};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <Head>
        <title>2024 Revolutionary Services - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Discover our revolutionary 2024 services including AI automation, quantum security, and enterprise IT solutions. Transform your business with cutting-edge technology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI services, quantum security, enterprise IT, automation, 2024 technology, Zion Tech Group&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services-2024&quot; />
      </Head>

      <UltraFuturisticBackground2034 intensity={0.8} theme=&quot;quantum&quot; />

      <div className=&quot;relative z-10 min-h-screen&quot;>
        {/* Hero Section */}
        <section className=&quot;pt-32 pb-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
=======
        <meta name="description" content="Discover our revolutionary 2024 services including AI automation, _quantum security, _and enterprise IT solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, _quantum security, _enterprise IT, _automation, _2024 technology, _Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services-2024" />
      </Head>

      <UltraFuturisticBackground2034 intensity={_0.8} theme="quantum" />

      <div className="relative z-10 min-h-screen">
        {_/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <div className=&quot;inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8&quot;>
                <Sparkles className=&quot;w-5 h-5 text-cyan-400&quot; />
                <span className=&quot;text-cyan-400 font-medium&quot;>2024 Revolutionary Services</span>
              </div>
              
              <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent&quot;>
                  Future-Ready
                </span>
                <br />
                <span className=&quot;text-white&quot;>Solutions</span>
              </h1>
              
<<<<<<< HEAD
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
                Experience the next generation of AI, quantum security, and enterprise IT solutions. 
                Transform your business with our revolutionary 2024 service portfolio.
              </p>

              {/* Stats */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8 mb-16&quot;>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>{allServices.length}</div>
                  <div className=&quot;text-gray-400&quot;>Revolutionary Services</div>
=======
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the next generation of AI, _quantum security, _and enterprise IT solutions. 
                Transform your business with our revolutionary 2024 service portfolio.
              </p>

              {_/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{_allServices.length}</div>
                  <div className="text-gray-400">Revolutionary Services</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>17</div>
                  <div className=&quot;text-gray-400&quot;>Service Categories</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-pink-400 mb-2&quot;>4.8</div>
                  <div className=&quot;text-gray-400&quot;>Average Rating</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>1000+</div>
                  <div className=&quot;text-gray-400&quot;>Happy Customers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Search and Filters */}
        <section className=&quot;px-4 sm:px-6 lg:px-8 mb-16&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <div className=&quot;bg-black/50 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm&quot;>
              <div className=&quot;grid grid-cols-1 lg:grid-cols-4 gap-6&quot;>
                {/* Search */}
                <div className=&quot;lg:col-span-2&quot;>
                  <div className=&quot;relative&quot;>
                    <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400&quot; />
                    <input
                      type=&quot;text&quot;
                      placeholder=&quot;Search services by name, features, or description...&quot;
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)} className=&quot;w-full pl-12 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200&quot;
=======
        {_/* Search and Filters */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/50 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {_/* Search */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services by name, _features, _or description..."
                      value={_searchQuery}
                      onChange={_(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </div>
                </div>

                {_/* Category Filter */}
                <div>
                  <select
<<<<<<< HEAD
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)} className=&quot;w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200&quot;>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
=======
                    value={_selectedCategory}
                    onChange={_(_e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200">
                    {_categories.map(_(category) => (
                      <option key={category.id} value={_category.id}>
                        {_category.name} ({_category.count})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </option>
                    ))}
                  </select>
                </div>

<<<<<<< HEAD
                {/* Sort */}
                <div className=&quot;flex space-x-2&quot;>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)} className=&quot;flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200&quot;>
                    <option value=&quot;name&quot;>Sort by Name</option>
                    <option value=&quot;price&quot;>Sort by Price</option>
                    <option value=&quot;rating&quot;>Sort by Rating</option>
                    <option value=&quot;customers&quot;>Sort by Customers</option>
                  </select>
                  <button
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} className=&quot;px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200&quot;>
                    {sortOrder === 'asc' ? '↑' : '↓'}
=======
                {_/* Sort */}
                <div className="flex space-x-2">
                  <select
                    value={_sortBy}
                    onChange={_(_e) => setSortBy(e.target.value as any)} className="flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200">
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="customers">Sort by Customers</option>
                  </select>
                  <button
                    onClick={_() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                    {_sortOrder === 'asc' ? '↑' : '↓'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section className=&quot;px-4 sm:px-6 lg:px-8 mb-20&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            {filteredServices.length === 0 ? (
              <div className=&quot;text-center py-20&quot;>
                <div className=&quot;text-6xl mb-4&quot;>🔍</div>
                <h3 className=&quot;text-2xl font-semibold text-white mb-2&quot;>No services found</h3>
                <p className=&quot;text-gray-400&quot;>Try adjusting your search criteria or filters.</p>
              </div>
            ) : (
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }} className=&quot;group&quot;>
                    <div className=&quot;bg-black/50 border border-cyan-500/30 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm&quot;>
                      {/* Service Header */}
                      <div className=&quot;flex items-start justify-between mb-4&quot;>
                        <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center&quot;>
                          {React.createElement(getVariantIcon(service.variant), { 
                            className: `w-6 h-6 text-cyan-400` 
                          })}
                        </div>
                        <div className=&quot;text-right&quot;>
                          <div className=&quot;text-2xl font-bold text-cyan-400&quot;>{service.price}</div>
                          <div className=&quot;text-sm text-gray-400&quot;>per month</div>
                        </div>
                      </div>

                      {/* Service Info */}
                      <h3 className=&quot;text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200&quot;>
                        {service.name}
                      </h3>
                      <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                        {service.tagline}
                      </p>

                      {/* Features */}
                      <div className=&quot;mb-6&quot;>
                        <h4 className=&quot;text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider&quot;>Key Features</h4>
                        <div className=&quot;space-y-2&quot;>
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className=&quot;flex items-center space-x-2&quot;>
                              <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                              <span className=&quot;text-sm text-gray-300&quot;>{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className=&quot;text-sm text-cyan-400&quot;>
=======
        {_/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            {_filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
              </div>
            ) : (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, _index) => (
                  <motion.div
                    key={service.id}
                    initial={_{ opacity: 0, _y: 20}}
                    animate={_{ opacity: 1, _y: 0}}
                    transition={_{ duration: 0.6, _delay: index * 0.1}} className="group">
                    <div className="bg-black/50 border border-cyan-500/30 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                      {_/* Service Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                          {_React.createElement(getVariantIcon(service.variant), _{ 
                            className: `w-6 h-6 text-cyan-400`})}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{_service.price}</div>
                          <div className="text-sm text-gray-400">per month</div>
                        </div>
                      </div>

                      {_/* Service Info */}
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                        {_service.name}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {_service.tagline}
                      </p>

                      {_/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Features</h4>
                        <div className="space-y-2">
                          {_service.features.slice(0, _3).map(_(feature, _featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{_feature}</span>
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
                      {/* Stats */}
                      <div className=&quot;grid grid-cols-3 gap-4 mb-6&quot;>
                        <div className=&quot;text-center&quot;>
                          <div className=&quot;flex items-center justify-center space-x-1 mb-1&quot;>
                            <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                            <span className=&quot;text-sm font-semibold text-white&quot;>{service.rating}</span>
=======
                      {_/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1 mb-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-semibold text-white">{_service.rating}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                          <div className=&quot;text-xs text-gray-400&quot;>Rating</div>
                        </div>
<<<<<<< HEAD
                        <div className=&quot;text-center&quot;>
                          <div className=&quot;text-sm font-semibold text-white mb-1&quot;>{service.customers}</div>
                          <div className=&quot;text-xs text-gray-400&quot;>Customers</div>
                        </div>
                        <div className=&quot;text-center&quot;>
                          <div className=&quot;text-sm font-semibold text-white mb-1&quot;>{service.launchDate}</div>
                          <div className=&quot;text-xs text-gray-400&quot;>Launched</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className=&quot;flex items-center justify-between&quot;>
                        <Link
                          href={service.link} className=&quot;flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group&quot;>
                          <span className=&quot;font-medium&quot;>Learn More</span>
                          <ArrowRight className=&quot;w-4 h-4 group-hover:translate-x-1 transition-transform duration-200&quot; />
=======
                        <div className="text-center">
                          <div className="text-sm font-semibold text-white mb-1">{_service.customers}</div>
                          <div className="text-xs text-gray-400">Customers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-white mb-1">{_service.launchDate}</div>
                          <div className="text-xs text-gray-400">Launched</div>
                        </div>
                      </div>

                      {_/* CTA */}
                      <div className="flex items-center justify-between">
                        <Link
                          href={_service.link} className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group">
                          <span className="font-medium">Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </Link>
<<<<<<< HEAD
                        <div className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
<<<<<<< HEAD
                          {service.variant.replace('-futuristic', '').replace('- ')}
=======
                        <div className=&quot;text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded&quot;>
                          {service.variant.replace('-futuristic', '').replace('-', ' ')}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                          {_service.variant.replace('-futuristic', _'').replace('-', _' ')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className=&quot;px-4 sm:px-6 lg:px-8 mb-20&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className=&quot;bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-2xl p-12 backdrop-blur-sm&quot;>
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
=======
        {_/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}} className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-2xl p-12 backdrop-blur-sm">
              <h2 className="text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8 leading-relaxed&quot;>
                Join thousands of businesses already leveraging our revolutionary 2024 services. 
                Get started today and experience the future of technology.
              </p>
<<<<<<< HEAD
              <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
=======
              <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                <Link
                  href=&quot;/contact&quot; className=&quot;flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 font-semibold&quot;>
                  <Zap className=&quot;w-5 h-5&quot; />
                  <span>Get Started Today</span>
                </Link>
                <Link
                  href=&quot;/pricing-2033&quot; className=&quot;flex items-center space-x-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold&quot;>
                  <span>View Pricing Plans</span>
                  <ArrowRight className=&quot;w-4 h-4&quot; />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
},

export default Services2024Page,