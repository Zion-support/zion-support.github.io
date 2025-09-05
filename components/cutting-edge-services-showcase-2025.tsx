<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  Brain, Atom, Shield, Rocket, Star, Award, TrendingUp,
  CheckCircle, ArrowRight, Zap, Target, Microscope,
  Lock, Cloud, BarChart3, Settings, Eye, Code, Palette,
  Search, Filter, Grid, List, ExternalLink, Phone, Mail, MapPin
} from 'lucide-react',
import Layout from '../components/layout/Layout',
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services',
import { cuttingEdgeQuantumServices2025 } from '../data/2025-cutting-edge-quantum-services',
import { cuttingEdgeEnterpriseITServices2025 } from '../data/2025-cutting-edge-enterprise-it',
import { cuttingEdgeMicroSaasServices2025 } from '../data/2025-cutting-edge-micro-saas',
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const heroStats = [
<<<<<<< HEAD
  { label: 'Cutting-Edge Services', value: '25+', icon: <Star className="w-5 h-5" /> },
  { label: 'Innovation Areas', value: '8+', icon: <Brain className="w-5 h-5" /> },
  { label: 'Market Coverage', value: '$500B+', icon: <TrendingUp className="w-5 h-5" /> },
  { label: 'Success Rate', value: '99.9%', icon: <Award className="w-5 h-5" /> }
],
=======
  { label: 'Cutting-Edge Services', value: '25+', icon: <Star className=&quot;w-5 h-5&quot; /> },
  { label: 'Innovation Areas', value: '8+', icon: <Brain className=&quot;w-5 h-5&quot; /> },
  { label: 'Market Coverage', value: '$500B+', icon: <TrendingUp className=&quot;w-5 h-5&quot; /> },
  { label: 'Success Rate', value: '99.9%', icon: <Award className=&quot;w-5 h-5&quot; /> }
=======
import React, {_useState} from 'react';
import Head from 'next/head';
import {_Brain, _Atom, _Shield, _Rocket, _Star, _Award, _TrendingUp, _CheckCircle, _ArrowRight, _Zap, _Target, _Microscope, _Lock, _Cloud, _BarChart3, _Settings, _Eye, _Code, _Palette, _Search, _Filter, _Grid, _List, _ExternalLink, _Phone, _Mail, _MapPin} from 'lucide-react';
import Layout from '../components/layout/Layout';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _heroStats = [
  {_label: 'Cutting-Edge Services', _value: '25+', _icon: <Star className="w-5 h-5" />},
  {_label: 'Innovation Areas', _value: '8+', _icon: <Brain className="w-5 h-5" />},
  {_label: 'Market Coverage', _value: '$500B+', _icon: <TrendingUp className="w-5 h-5" />},
  {_label: 'Success Rate', _value: '99.9%', _icon: <Award className="w-5 h-5" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600',
    count: cuttingEdgeAIServices2025.length
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: cuttingEdgeQuantumServices2025,
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600',
    count: cuttingEdgeQuantumServices2025.length
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: cuttingEdgeEnterpriseITServices2025,
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    gradient: 'bg-gradient-to-r from-blue-500 to-cyan-600',
    count: cuttingEdgeEnterpriseITServices2025.length
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: cuttingEdgeMicroSaasServices2025,
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    gradient: 'bg-gradient-to-r from-teal-500 to-emerald-600',
    count: cuttingEdgeMicroSaasServices2025.length
  }
],

export default function CuttingEdgeServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),

  const allServices = [
    ...cuttingEdgeAIServices2025,
    ...cuttingEdgeQuantumServices2025,
    ...cuttingEdgeEnterpriseITServices2025,
    ...cuttingEdgeMicroSaasServices2025
  ],
=======
const _serviceCategories = [
  {_title: 'AI & Consciousness', _description: 'Revolutionary AI platforms with consciousness and emotional intelligence', _services: cuttingEdgeAIServices2025, _icon: Brain, _color: 'from-violet-500 to-purple-600', _gradient: 'bg-gradient-to-r from-violet-500 to-purple-600', _count: cuttingEdgeAIServices2025.length},
  {_title: 'Quantum & Emerging Tech', _description: 'Breakthrough quantum computing and space technology solutions', _services: cuttingEdgeQuantumServices2025, _icon: Atom, _color: 'from-indigo-500 to-blue-600', _gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600', _count: cuttingEdgeQuantumServices2025.length},
  {_title: 'Enterprise IT', _description: 'Advanced enterprise infrastructure and security solutions', _services: cuttingEdgeEnterpriseITServices2025, _icon: Shield, _color: 'from-blue-500 to-cyan-600', _gradient: 'bg-gradient-to-r from-blue-500 to-cyan-600', _count: cuttingEdgeEnterpriseITServices2025.length},
  {_title: 'Micro SAAS', _description: 'Innovative business solutions for modern enterprises', _services: cuttingEdgeMicroSaasServices2025, _icon: Rocket, _color: 'from-teal-500 to-emerald-600', _gradient: 'bg-gradient-to-r from-teal-500 to-emerald-600', _count: cuttingEdgeMicroSaasServices2025.length}
];

export default function CuttingEdgeServicesShowcase2025() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('all');
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');

  const _allServices = [
    ...cuttingEdgeAIServices2025, _...cuttingEdgeQuantumServices2025, _...cuttingEdgeEnterpriseITServices2025, _...cuttingEdgeMicroSaasServices2025
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredServices = allServices.filter(service => {
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
<<<<<<< HEAD
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory,
    return matchesSearch && matchesCategory
  }),
=======
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const _matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;});
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

  return (_<>
      <Head>
        <title>Cutting-Edge Services Showcase 2025 - Zion Tech Group | Future Technology Solutions</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Explore our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions. Transform your business with future technology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;cutting-edge services, AI consciousness, quantum computing, space mining, enterprise IT, micro SAAS, future technology&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className=&quot;relative overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black&quot;></div>
          <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center&quot;
            >
              <motion.h1 
                className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6&quot;
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
=======
        <meta name="description" content="Explore our revolutionary cutting-edge services including AI consciousness, _quantum computing, _space mining, _and advanced enterprise solutions. Transform your business with future technology." />
        <meta name="keywords" content="cutting-edge services, _AI consciousness, _quantum computing, _space mining, _enterprise IT, _micro SAAS, _future technology" />
        <meta name="viewport" content="width=device-width, _initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {_/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center"
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
                initial={_{ opacity: 0, _scale: 0.9}}
                animate={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 1, _delay: 0.2}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Cutting-Edge Services
                <span className=&quot;block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90&quot;>
                  Showcase 2025
                </span>
              </motion.h1>
              
              <motion.p 
<<<<<<< HEAD
                className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
=======
                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.4}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Discover revolutionary technology solutions that are reshaping industries and defining the future. 
                From AI consciousness to space mining, _experience the cutting edge of innovation.
              </motion.p>

              {_/* Hero Stats */}
              <motion.div 
<<<<<<< HEAD
                className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {heroStats.map((stat, index) => (
                  <div key={index} className=&quot;text-center&quot;>
                    <div className=&quot;flex justify-center mb-2&quot;>
                      <div className=&quot;p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30&quot;>
                        {stat.icon}
                      </div>
                    </div>
                    <div className=&quot;text-2xl md:text-3xl font-bold text-white mb-1&quot;>{stat.value}</div>
                    <div className=&quot;text-sm text-white/70&quot;>{stat.label}</div>
=======
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.6}}
              >
                {_heroStats.map((stat, _index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                        {_stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{_stat.value}</div>
                    <div className="text-sm text-white/70">{_stat.label}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                ))}
              </motion.div>

              {_/* CTA Buttons */}
              <motion.div 
<<<<<<< HEAD
                className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
=======
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.8}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <a
                  href=&quot;#services&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25&quot;
                >
                  Explore Services
                  <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
                </a>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Get Started
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Search and Filter Section */}
        <section className=&quot;py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div 
              className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Search */}
              <div className=&quot;relative flex-1 max-w-md&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300&quot;
                />
              </div>

              {/* Category Filter */}
              <div className=&quot;flex flex-wrap gap-2&quot;>
=======
        {_/* Search and Filter Section */}
        <section className="py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="flex flex-col lg:flex-row gap-6 items-center justify-between"
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
              viewport={_{ once: true}}
            >
              {_/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={_searchTerm}
                  onChange={_(_e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              {_/* Category Filter */}
              <div className="flex flex-wrap gap-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <button
                  onClick={_() => setSelectedCategory('all')}
                  className={_`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'}`}
                >
                  All ({_allServices.length})
                </button>
                {_serviceCategories.map(_(category) => (_<button
                    key={category.title}
                    onClick={_() => setSelectedCategory(category.title)}
                    className={_`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.title
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'}`}
                  >
                    {_category.title} ({_category.count})
                  </button>
                ))}
              </div>

<<<<<<< HEAD
              {/* View Mode Toggle */}
              <div className=&quot;flex items-center gap-2&quot;>
=======
              {_/* View Mode Toggle */}
              <div className="flex items-center gap-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <button
                  onClick={_() => setViewMode('grid')}
                  className={_`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                      : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/70'}`}
                >
                  <Grid className=&quot;w-5 h-5&quot; />
                </button>
                <button
                  onClick={_() => setViewMode('list')}
                  className={_`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                      : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/70'}`}
                >
                  <List className=&quot;w-5 h-5&quot; />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section id=&quot;services&quot; className=&quot;py-20 bg-gradient-to-b from-black via-purple-900/10 to-black&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={{ once: true }}
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
=======
        {_/* Services Grid */}
        <section id="services" className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
              className={_viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_filteredServices.map(_(service, _index) => (
                <motion.div
                  key={service.id}
                  variants={_itemVariants}
                  className={_`group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''}`}
                >
<<<<<<< HEAD
                  {/* Service Header */}
                  <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                    <div className=&quot;flex items-start justify-between mb-4&quot;>
                      <div className=&quot;flex-1&quot;>
                        <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300&quot;>
                          {service.name}
                        </h3>
                        <p className=&quot;text-white/70 text-sm leading-relaxed&quot;>
                          {service.description}
=======
                  {_/* Service Header */}
                  <div className={_`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {_service.name}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {_service.description}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </p>
                      </div>
                      <div className=&quot;ml-4&quot;>
                        <div className=&quot;w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center&quot;>
                          <Star className=&quot;w-6 h-6 text-cyan-400&quot; />
                        </div>
                      </div>
                    </div>

<<<<<<< HEAD
                    {/* Tags */}
                    <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
=======
                    {_/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {_service.tags.slice(0, _3).map(_(tag, _tagIndex) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <span
                          key={tagIndex}
                          className=&quot;px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20&quot;
                        >
                          {_tag}
                        </span>
                      ))}
                    </div>

<<<<<<< HEAD
                    {/* Market Info */}
                    <div className=&quot;flex items-center justify-between text-sm text-white/60 mb-4&quot;>
                      <span>Market: {service.marketSize}</span>
                      <span className=&quot;text-cyan-400&quot;>{service.category}</span>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className={`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                    {/* Features */}
                    <div className=&quot;mb-6&quot;>
                      <h4 className=&quot;text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider&quot;>
                        Key Features
                      </h4>
                      <ul className=&quot;space-y-2&quot;>
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className=&quot;flex items-start text-sm text-white/80&quot;>
                            <CheckCircle className=&quot;w-4 h-4 text-cyan-400 mt-0.5 mr-2 flex-shrink-0&quot; />
                            <span>{feature}</span>
=======
                    {_/* Market Info */}
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <span>Market: {_service.marketSize}</span>
                      <span className="text-cyan-400">{_service.category}</span>
                    </div>
                  </div>

                  {_/* Service Details */}
                  <div className={_`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                    {_/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {_service.features.slice(0, _3).map(_(feature, _featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-white/80">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 mr-2 flex-shrink-0" />
                            <span>{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </li>
                        ))}
                      </ul>
                    </div>

<<<<<<< HEAD
                    {/* Pricing */}
                    <div className=&quot;mb-6&quot;>
                      <h4 className=&quot;text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider&quot;>
                        Starting From
                      </h4>
                      <div className=&quot;text-2xl font-bold text-white&quot;>
                        ${service.pricing.starter.price}
                        <span className=&quot;text-sm font-normal text-white/60&quot;>/{service.pricing.starter.period}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className=&quot;flex items-center justify-between&quot;>
                      <a
                        href={service.website}
                        className=&quot;inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium&quot;
=======
                    {_/* Pricing */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                        Starting From
                      </h4>
                      <div className="text-2xl font-bold text-white">
                        ${_service.pricing.starter.price}
                        <span className="text-sm font-normal text-white/60">/{_service.pricing.starter.period}</span>
                      </div>
                    </div>

                    {_/* CTA */}
                    <div className="flex items-center justify-between">
                      <a
                        href={_service.website}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        Learn More
                        <ExternalLink className=&quot;ml-1 w-4 h-4&quot; />
                      </a>
                      <a
                        href=&quot;/contact&quot;
                        className=&quot;inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;
                      >
                        Get Started
                        <ArrowRight className=&quot;ml-2 w-4 h-4&quot; />
                      </a>
                    </div>
                  </div>

<<<<<<< HEAD
                  {/* Hover Effect Overlay */}
                  <div className=&quot;absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none&quot; />
=======
                  {_/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              ))}
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
                <p className=&quot;text-white/70 mb-6&quot;>Try adjusting your search terms or category filter</p>
                <button
<<<<<<< HEAD
                  onClick={() => {
                    setSearchTerm(''),
                    setSelectedCategory('all')
                  }}
                  className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300&quot;
=======
                  onClick={_() => {
                    setSearchTerm('');
                    setSelectedCategory('all');}}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact CTA Section */}
        <section className=&quot;py-20 bg-gradient-to-br from-black via-purple-900/20 to-black&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8&quot;>
=======
        {_/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-white/80 mb-8 leading-relaxed&quot;>
                Our cutting-edge services are designed to give you a competitive advantage in the rapidly evolving technology landscape. 
                Let's discuss how we can help you achieve your goals.
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center mb-8&quot;>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25&quot;
                >
                  Start Your Journey
                  <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
                </a>
                <a
<<<<<<< HEAD
                  href={`tel:${contactInfo.mobile}`}
                  className=&quot;inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105&quot;
=======
                  href={_`tel:${contactInfo.mobile}`}
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <Phone className=&quot;mr-2 w-5 h-5&quot; />
                  Call Now
                </a>
              </div>

<<<<<<< HEAD
              {/* Contact Info */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 text-center&quot;>
                <div className=&quot;flex flex-col items-center&quot;>
                  <div className=&quot;w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3&quot;>
                    <Phone className=&quot;w-6 h-6 text-cyan-400&quot; />
                  </div>
                  <div className=&quot;text-white font-semibold&quot;>Phone</div>
                  <a href={`tel:${contactInfo.mobile}`} className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors duration-300&quot;>
                    {contactInfo.mobile}
=======
              {_/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Phone</div>
                  <a href={_`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {_contactInfo.mobile}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </a>
                </div>
                <div className=&quot;flex flex-col items-center&quot;>
                  <div className=&quot;w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3&quot;>
                    <Mail className=&quot;w-6 h-6 text-cyan-400&quot; />
                  </div>
<<<<<<< HEAD
                  <div className=&quot;text-white font-semibold&quot;>Email</div>
                  <a href={`mailto:${contactInfo.email}`} className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors duration-300&quot;>
                    {contactInfo.email}
=======
                  <div className="text-white font-semibold">Email</div>
                  <a href={_`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {_contactInfo.email}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </a>
                </div>
                <div className=&quot;flex flex-col items-center&quot;>
                  <div className=&quot;w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3&quot;>
                    <MapPin className=&quot;w-6 h-6 text-cyan-400&quot; />
                  </div>
<<<<<<< HEAD
                  <div className=&quot;text-white font-semibold&quot;>Address</div>
                  <div className=&quot;text-white/70 text-sm&quot;>{contactInfo.address}</div>
=======
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-white/70 text-sm">{_contactInfo.address}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  )
}