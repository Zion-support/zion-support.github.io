<<<<<<< HEAD
import React, { useState } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, 
  ChevronRight, Shield, Zap, Globe, Rocket, Brain, Atom,
  Search, Filter, Grid, List, ArrowRight, Award, Target
} from 'lucide-react',
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion',
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025',
export default function ComprehensiveServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [selectedService, setSelectedService] = useState<string | null>(null),
  const [searchTerm, setSearchTerm] = useState(''),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity'),

  // Combine all services
  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices],

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: allServices.filter(s => s.category === 'AI & Machine Learning').length },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: allServices.filter(s => s.category === 'Healthcare AI').length },
    { id: 'Fintech AI', name: 'Fintech', icon: '💰', count: allServices.filter(s => s.category === 'Fintech AI').length },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️', count: allServices.filter(s => s.category === 'IoT & Smart Cities').length },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: allServices.filter(s => s.category === 'Blockchain & DeFi').length },
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️', count: allServices.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', count: allServices.filter(s => s.category === 'Space Technology').length },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖', count: allServices.filter(s => s.category === 'Autonomous Systems').length },
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: '🥽', count: allServices.filter(s => s.category === 'AR/VR & Metaverse').length },
    { id: '5G/6G Networks', name: '5G/6G', icon: '📡', count: allServices.filter(s => s.category === '5G/6G Networks').length },
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬', count: allServices.filter(s => s.category === 'Biotechnology AI').length },
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡', count: allServices.filter(s => s.category === 'Renewable Energy').length },
    { id: 'Edge Computing', name: 'Edge', icon: '🌐', count: allServices.filter(s => s.category === 'Edge Computing').length },
    { id: 'Quantum Internet', name: 'Q-Internet', icon: '🌍', count: allServices.filter(s => s.category === 'Quantum Internet').length },
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠', count: allServices.filter(s => s.category === 'Neuromorphic Computing').length }
  ],

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory,
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase()),
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
=======
import React, {_useState} from 'react';
import {_Star, _Clock, _Users, _TrendingUp, _CheckCircle, _ExternalLink, _ChevronRight, _Shield, _Zap, _Globe, _Rocket, _Brain, _Atom, _Search, _Filter, _Grid, _List, _ArrowRight, _Award, _Target} from 'lucide-react';

export default function ComprehensiveServicesShowcase() {_const [selectedCategory, _setSelectedCategory] = useState('all');
  const [selectedService, _setSelectedService] = useState<string | null>(null);
  const [searchTerm, _setSearchTerm] = useState('');
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, _setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity');

  // Combine all services
  const _allServices = [...comprehensiveMicroSaasServices, _...specializedEmergingTechServices];

  const _categories = [
    { id: 'all', _name: 'All Services', _icon: '🚀', _count: allServices.length},
    {_id: 'AI & Machine Learning', _name: 'AI & ML', _icon: '🧠', _count: allServices.filter(s => s.category === 'AI & Machine Learning').length},
    {_id: 'Healthcare AI', _name: 'Healthcare', _icon: '🏥', _count: allServices.filter(s => s.category === 'Healthcare AI').length},
    {_id: 'Fintech AI', _name: 'Fintech', _icon: '💰', _count: allServices.filter(s => s.category === 'Fintech AI').length},
    {_id: 'Cybersecurity', _name: 'Security', _icon: '🛡️', _count: allServices.filter(s => s.category === 'Cybersecurity').length},
    {_id: 'IoT & Smart Cities', _name: 'Smart Cities', _icon: '🏙️', _count: allServices.filter(s => s.category === 'IoT & Smart Cities').length},
    {_id: 'Blockchain & DeFi', _name: 'Blockchain', _icon: '🔗', _count: allServices.filter(s => s.category === 'Blockchain & DeFi').length},
    {_id: 'Quantum Computing', _name: 'Quantum', _icon: '⚛️', _count: allServices.filter(s => s.category === 'Quantum Computing').length},
    {_id: 'Space Technology', _name: 'Space Tech', _icon: '🚀', _count: allServices.filter(s => s.category === 'Space Technology').length},
    {_id: 'Autonomous Systems', _name: 'Autonomous', _icon: '🤖', _count: allServices.filter(s => s.category === 'Autonomous Systems').length},
    {_id: 'AR/VR & Metaverse', _name: 'AR/VR', _icon: '🥽', _count: allServices.filter(s => s.category === 'AR/VR & Metaverse').length},
    {_id: '5G/6G Networks', _name: '5G/6G', _icon: '📡', _count: allServices.filter(s => s.category === '5G/6G Networks').length},
    {_id: 'Biotechnology AI', _name: 'Biotech', _icon: '🧬', _count: allServices.filter(s => s.category === 'Biotechnology AI').length},
    {_id: 'Renewable Energy', _name: 'Energy', _icon: '⚡', _count: allServices.filter(s => s.category === 'Renewable Energy').length},
    {_id: 'Edge Computing', _name: 'Edge', _icon: '🌐', _count: allServices.filter(s => s.category === 'Edge Computing').length},
    {_id: 'Quantum Internet', _name: 'Q-Internet', _icon: '🌍', _count: allServices.filter(s => s.category === 'Quantum Internet').length},
    {_id: 'Neuromorphic Computing', _name: 'Neuro', _icon: '🧠', _count: allServices.filter(s => s.category === 'Neuromorphic Computing').length}
  ];

  // Filter and sort services
  const _filteredServices = allServices
    .filter(service => {_const _matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;})
    .sort(_(a, _b) => {_switch (sortBy) {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        case 'popularity':
          return b.popular ? 1 : -1,
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

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category),
    return categoryData?.icon || '🚀'
  },

  const formatPrice = (price: string) => {
    return price.replace('$', '').replace(, '')
  },

  return (
    <section className=&quot;py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950&quot;>
      <div className=&quot;max-w-7xl mx-auto&quot;>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=&quot;text-center mb-16&quot;
=======
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;}
    });

  const _getCategoryIcon = (_category: string) => {_const _categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || '🚀';};

  const _formatPrice = (_price: string) => {_return price.replace('$', _'').replace(', _', _'');};

  return (_<section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {_/* Header */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8}}
          viewport={_{ once: true}}
          className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
            Revolutionary Micro SAAS Services 2025
          </h2>
          <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto mb-8&quot;>
            Discover our cutting-edge micro SAAS solutions that are transforming industries and driving the future of technology
          </p>
          <div className=&quot;flex items-center justify-center gap-6 text-white/60 mb-8&quot;>
            <div className=&quot;flex items-center gap-2&quot;>
              <Shield className=&quot;w-5 h-5&quot; />
              <span>Enterprise-grade security</span>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <Zap className=&quot;w-5 h-5&quot; />
              <span>AI-powered optimization</span>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <Globe className=&quot;w-5 h-5&quot; />
              <span>Global deployment</span>
            </div>
          </div>
          <div className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-6 text-center&quot;>
              <div>
<<<<<<< HEAD
                <div className=&quot;text-3xl font-bold text-blue-400&quot;>{allServices.length}+</div>
                <div className=&quot;text-white/60&quot;>Services Available</div>
=======
                <div className="text-3xl font-bold text-blue-400">{_allServices.length}+</div>
                <div className="text-white/60">Services Available</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <div>
                <div className=&quot;text-3xl font-bold text-green-400&quot;>99.9%</div>
                <div className=&quot;text-white/60&quot;>Uptime Guarantee</div>
              </div>
              <div>
                <div className=&quot;text-3xl font-bold text-purple-400&quot;>24/7</div>
                <div className=&quot;text-white/60&quot;>Support Available</div>
              </div>
              <div>
                <div className=&quot;text-3xl font-bold text-orange-400&quot;>500%+</div>
                <div className=&quot;text-white/60&quot;>Average ROI</div>
              </div>
            </div>
          </div>
        </motion.div>

        {_/* Search and Filters */}
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=&quot;mb-12&quot;
        >
          <div className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;>
            {/* Search */}
            <div className=&quot;relative flex-1 max-w-md&quot;>
              <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5&quot; />
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search services...&quot;
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=&quot;w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20&quot;
              />
            </div>

            {/* Sort and View Controls */}
            <div className=&quot;flex items-center gap-4&quot;>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className=&quot;bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400&quot;
=======
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6}}
          viewport={_{ once: true}}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {_/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={_searchTerm}
                onChange={_(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
              />
            </div>

            {_/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              <select
                value={_sortBy}
                onChange={_(_e) => setSortBy(e.target.value as any)}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <option value=&quot;popularity&quot;>Most Popular</option>
                <option value=&quot;price&quot;>Price: Low to High</option>
                <option value=&quot;rating&quot;>Highest Rated</option>
                <option value=&quot;newest&quot;>Newest First</option>
              </select>

              <div className=&quot;flex bg-white/10 rounded-xl p-1&quot;>
                <button
                  onClick={_() => setViewMode('grid')}
                  className={_`p-2 rounded-lg transition-all ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-white/60 hover:text-white'}`}
                >
                  <Grid className=&quot;w-5 h-5&quot; />
                </button>
                <button
                  onClick={_() => setViewMode('list')}
                  className={_`p-2 rounded-lg transition-all ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-white/60 hover:text-white'}`}
                >
                  <List className=&quot;w-5 h-5&quot; />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {_/* Category Filter */}
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=&quot;mb-12&quot;
        >
          <div className=&quot;flex flex-wrap justify-center gap-3&quot;>
            {categories.map((category) => (
              <button
=======
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6}}
          viewport={_{ once: true}}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {_categories.map(_(category) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                key={category.id}
                onClick={_() => setSelectedCategory(category.id)}
                className={_`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`}
              >
<<<<<<< HEAD
                <span>{category.icon}</span>
                {category.name}
                <span className=&quot;text-xs bg-white/20 px-2 py-1 rounded-full&quot;>{category.count}</span>
=======
                <span>{_category.icon}</span>
                {_category.name}
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{_category.count}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </button>
            ))}
          </div>
        </motion.div>

<<<<<<< HEAD
        {/* Services Display */}
        {viewMode === 'grid' ? (
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
=======
        {_/* Services Display */}
        {_viewMode === 'grid' ? (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <AnimatePresence>
              {filteredServices.map((service, _index) => (
                <motion.div
                  key={service.id}
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className=&quot;absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1&quot;>
                      <Star className=&quot;w-3 h-3&quot; />
=======
                  initial={_{ opacity: 0, _y: 30}}
                  animate={_{ opacity: 1, _y: 0}}
                  exit={_{ opacity: 0, _y: -30}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  {_/* Popular Badge */}
                  {_service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Popular
                    </div>
                  )}

<<<<<<< HEAD
                  {/* Service Content */}
                  <div className=&quot;p-6&quot;>
                    <div className=&quot;flex items-start justify-between mb-4&quot;>
                      <div className=&quot;text-4xl&quot;>{service.icon}</div>
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-2xl font-bold text-white&quot;>{service.price}</div>
                        <div className=&quot;text-xs text-white/60&quot;>{service.period}</div>
                      </div>
                    </div>

                    <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                    <p className=&quot;text-white/70 text-sm mb-4&quot;>{service.tagline}</p>

                    {/* Features */}
                    <div className=&quot;space-y-2 mb-6&quot;>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className=&quot;flex items-center gap-2 text-sm text-white/60&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                          {feature}
=======
                  {_/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{_service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{_service.price}</div>
                        <div className="text-xs text-white/60">{_service.period}</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                    <p className="text-white/70 text-sm mb-4">{_service.tagline}</p>

                    {_/* Features */}
                    <div className="space-y-2 mb-6">
                      {_service.features.slice(0, _3).map(_(feature, _idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      ))}
                    </div>

<<<<<<< HEAD
                    {/* Stats */}
                    <div className=&quot;grid grid-cols-3 gap-4 mb-6 text-center&quot;>
                      <div>
                        <div className=&quot;text-lg font-bold text-blue-400&quot;>{service.rating}</div>
                        <div className=&quot;text-xs text-white/60&quot;>Rating</div>
                      </div>
                      <div>
                        <div className=&quot;text-lg font-bold text-green-400&quot;>{service.customers}+</div>
                        <div className=&quot;text-xs text-white/60&quot;>Customers</div>
                      </div>
                      <div>
                        <div className=&quot;text-lg font-bold text-purple-400&quot;>{service.trialDays}d</div>
                        <div className=&quot;text-xs text-white/60&quot;>Trial</div>
=======
                    {_/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <div className="text-lg font-bold text-blue-400">{_service.rating}</div>
                        <div className="text-xs text-white/60">Rating</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-400">{_service.customers}+</div>
                        <div className="text-xs text-white/60">Customers</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-400">{_service.trialDays}d</div>
                        <div className="text-xs text-white/60">Trial</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>

                    {_/* CTA */}
                    <a
<<<<<<< HEAD
                      href={service.link}
                      target=&quot;_blank&quot;
                      rel=&quot;noopener noreferrer&quot;
                      className=&quot;w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2&quot;
=======
                      href={_service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      Learn More
                      <ExternalLink className=&quot;w-4 h-4&quot; />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
<<<<<<< HEAD
        ) : (
          <div className=&quot;space-y-6&quot;>
=======
        ) : (_<div className="space-y-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <AnimatePresence>
              {_filteredServices.map((service, _index) => (
                <motion.div
                  key={service.id}
<<<<<<< HEAD
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 p-6&quot;
                >
                  <div className=&quot;flex flex-col lg:flex-row gap-6&quot;>
                    {/* Left Side - Icon and Basic Info */}
                    <div className=&quot;flex-shrink-0&quot;>
                      <div className=&quot;text-6xl mb-4&quot;>{service.icon}</div>
                      {service.popular && (
                        <div className=&quot;bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center&quot;>
=======
                  initial={_{ opacity: 0, _x: -30}}
                  animate={_{ opacity: 1, _x: 0}}
                  exit={_{ opacity: 0, _x: 30}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 p-6"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {_/* Left Side - Icon and Basic Info */}
                    <div className="flex-shrink-0">
                      <div className="text-6xl mb-4">{_service.icon}</div>
                      {_service.popular && (
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          Popular
                        </div>
                      )}
                    </div>

<<<<<<< HEAD
                    {/* Center - Service Details */}
                    <div className=&quot;flex-1&quot;>
                      <div className=&quot;flex items-start justify-between mb-4&quot;>
                        <div>
                          <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{service.name}</h3>
                          <p className=&quot;text-white/70 text-lg mb-3&quot;>{service.tagline}</p>
                          <p className=&quot;text-white/60 text-sm&quot;>{service.description}</p>
                        </div>
                        <div className=&quot;text-right&quot;>
                          <div className=&quot;text-3xl font-bold text-white&quot;>{service.price}</div>
                          <div className=&quot;text-white/60&quot;>{service.period}</div>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className=&quot;grid grid-cols-2 gap-2 mb-4&quot;>
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className=&quot;flex items-center gap-2 text-sm text-white/60&quot;>
                            <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                            <span className=&quot;truncate&quot;>{feature}</span>
=======
                    {_/* Center - Service Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{_service.name}</h3>
                          <p className="text-white/70 text-lg mb-3">{_service.tagline}</p>
                          <p className="text-white/60 text-sm">{_service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white">{_service.price}</div>
                          <div className="text-white/60">{_service.period}</div>
                        </div>
                      </div>

                      {_/* Features Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {_service.features.slice(0, _6).map(_(feature, _idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="truncate">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        ))}
                      </div>

<<<<<<< HEAD
                      {/* Stats Row */}
                      <div className=&quot;flex items-center gap-6 text-sm text-white/60&quot;>
                        <div className=&quot;flex items-center gap-2&quot;>
                          <Star className=&quot;w-4 h-4 text-yellow-400&quot; />
                          <span>{service.rating} ({service.reviews} reviews)</span>
                        </div>
                        <div className=&quot;flex items-center gap-2&quot;>
                          <Users className=&quot;w-4 h-4 text-blue-400&quot; />
                          <span>{service.customers}+ customers</span>
                        </div>
                        <div className=&quot;flex items-center gap-2&quot;>
                          <Clock className=&quot;w-4 h-4 text-green-400&quot; />
                          <span>{service.setupTime} setup</span>
=======
                      {_/* Stats Row */}
                      <div className="flex items-center gap-6 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{_service.rating} ({_service.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span>{_service.customers}+ customers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-green-400" />
                          <span>{_service.setupTime} setup</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      </div>
                    </div>

<<<<<<< HEAD
                    {/* Right Side - CTA and Category */}
                    <div className=&quot;flex-shrink-0 flex flex-col items-end gap-4&quot;>
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-sm text-white/60 mb-1&quot;>Category</div>
                        <div className=&quot;flex items-center gap-2 text-white&quot;>
                          <span>{getCategoryIcon(service.category)}</span>
                          <span className=&quot;text-sm&quot;>{service.category}</span>
=======
                    {_/* Right Side - CTA and Category */}
                    <div className="flex-shrink-0 flex flex-col items-end gap-4">
                      <div className="text-right">
                        <div className="text-sm text-white/60 mb-1">Category</div>
                        <div className="flex items-center gap-2 text-white">
                          <span>{_getCategoryIcon(service.category)}</span>
                          <span className="text-sm">{_service.category}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      </div>

                      <a
<<<<<<< HEAD
                        href={service.link}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2&quot;
=======
                        href={_service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        Learn More
                        <ArrowRight className=&quot;w-4 h-4&quot; />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {_/* No Results */}
        {_filteredServices.length === 0 && (
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className=&quot;text-center py-20&quot;
=======
            initial={{ opacity: 0}}
            animate={_{ opacity: 1}}
            className="text-center py-20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <div className=&quot;text-6xl mb-4&quot;>🔍</div>
            <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
            <p className=&quot;text-white/60&quot;>Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {_/* Contact CTA */}
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=&quot;mt-20 text-center&quot;
=======
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8}}
          viewport={_{ once: true}}
          className="mt-20 text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30&quot;>
            <h3 className=&quot;text-3xl font-bold text-white mb-4&quot;>
              Ready to Transform Your Business?
            </h3>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Join thousands of companies already using our revolutionary micro SAAS services to drive innovation and growth.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2&quot;
              >
                Contact Sales Team
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2&quot;
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}