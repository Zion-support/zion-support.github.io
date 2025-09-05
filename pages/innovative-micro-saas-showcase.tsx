<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Star, TrendingUp, Users, Award, Zap, Brain, Atom, Shield, Rocket,
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Globe, Cpu, Target,
  Search, Filter, Grid, List, ChevronDown, ChevronUp, ExternalLink,
  Play, Pause, Eye, Heart, Share2, Download, BookOpen, Code, Palette
} from 'lucide-react',
import Layout from '../components/layout/Layout',
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services',
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced',
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const stats = [
  { number: '50+', label: 'Innovative Services', icon: Star, color: 'text-cyan-400' },
  { number: '1000+', label: 'Companies Served', icon: Users, color: 'text-purple-400' },
  { number: '99.9%', label: 'Uptime', icon: Award, color: 'text-green-400' },
  { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400' }
],

const categories = [
  { name: 'All Services', value: 'all', icon: Globe, color: 'from-blue-500 to-cyan-600' },
  { name: 'AI & Consciousness', value: 'ai', icon: Brain, color: 'from-purple-500 to-pink-600' },
  { name: 'Quantum & Emerging Tech', value: 'quantum', icon: Atom, color: 'from-indigo-500 to-blue-600' },
  { name: 'Enterprise IT', value: 'enterprise', icon: Shield, color: 'from-green-500 to-emerald-600' },
  { name: 'Micro SAAS', value: 'saas', icon: Rocket, color: 'from-orange-500 to-red-600' },
  { name: 'Creativity & Design', value: 'creativity', icon: Palette, color: 'from-pink-500 to-rose-600' },
  { name: 'Healthcare & Biotech', value: 'healthcare', icon: Heart, color: 'from-teal-500 to-cyan-600' },
  { name: 'Finance & Trading', value: 'finance', icon: TrendingUp, color: 'from-yellow-500 to-orange-600' }
],

export default function InnovativeMicroSaasShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [searchTerm, setSearchTerm] = useState(''),
  const [viewMode, setViewMode] = useState('grid'),
  const [sortBy, setSortBy] = useState('popularity'),

  // Combine all services
  const allServices = [
    ...innovativeRealMicroSaasServices2025,
    ...emergingTechServicesEnhanced2025
  ],
=======
import React, {_useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_Star, _TrendingUp, _Users, _Award, _Zap, _Brain, _Atom, _Shield, _Rocket, _CheckCircle, _ArrowRight, _Phone, _Mail, _MapPin, _Globe, _Cpu, _Target, _Search, _Filter, _Grid, _List, _ChevronDown, _ChevronUp, _ExternalLink, _Play, _Pause, _Eye, _Heart, _Share2, _Download, _BookOpen, _Code, _Palette} from 'lucide-react';
import Layout from '../components/layout/Layout';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _stats = [
  {_number: '50+', _label: 'Innovative Services', _icon: Star, _color: 'text-cyan-400'},
  {_number: '1000+', _label: 'Companies Served', _icon: Users, _color: 'text-purple-400'},
  {_number: '99.9%', _label: 'Uptime', _icon: Award, _color: 'text-green-400'},
  {_number: '24/7', _label: 'Support', _icon: Zap, _color: 'text-pink-400'}
];

const _categories = [
  {_name: 'All Services', _value: 'all', _icon: Globe, _color: 'from-blue-500 to-cyan-600'},
  {_name: 'AI & Consciousness', _value: 'ai', _icon: Brain, _color: 'from-purple-500 to-pink-600'},
  {_name: 'Quantum & Emerging Tech', _value: 'quantum', _icon: Atom, _color: 'from-indigo-500 to-blue-600'},
  {_name: 'Enterprise IT', _value: 'enterprise', _icon: Shield, _color: 'from-green-500 to-emerald-600'},
  {_name: 'Micro SAAS', _value: 'saas', _icon: Rocket, _color: 'from-orange-500 to-red-600'},
  {_name: 'Creativity & Design', _value: 'creativity', _icon: Palette, _color: 'from-pink-500 to-rose-600'},
  {_name: 'Healthcare & Biotech', _value: 'healthcare', _icon: Heart, _color: 'from-teal-500 to-cyan-600'},
  {_name: 'Finance & Trading', _value: 'finance', _icon: TrendingUp, _color: 'from-yellow-500 to-orange-600'}
];

export default function InnovativeMicroSaasShowcase() {_const [selectedCategory, _setSelectedCategory] = useState('all');
  const [searchTerm, _setSearchTerm] = useState('');
  const [viewMode, _setViewMode] = useState('grid');
  const [sortBy, _setSortBy] = useState('popularity');

  // Combine all services
  const _allServices = [
    ...innovativeRealMicroSaasServices2025, _...emergingTechServicesEnhanced2025
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Filter services based on category and search
  const _filteredServices = allServices.filter(service => {
    const _matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory) ||
      service.name.toLowerCase().includes(selectedCategory),
    
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase()),

<<<<<<< HEAD
    return matchesCategory && matchesSearch
  }),
=======
    return matchesCategory && matchesSearch;});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Sort services
  const _sortedServices = [...filteredServices].sort(_(a, _b) => {_switch (sortBy) {
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),
      case 'price-low':
<<<<<<< HEAD
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')),
      case 'price-high':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')),
=======
        return parseFloat(a.price.replace('$', _'')) - parseFloat(b.price.replace('$', _''));
      case 'price-high':
        return parseFloat(b.price.replace('$', _'')) - parseFloat(a.price.replace('$', _''));
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

  return (_<Layout>
      <Head>
        <title>Innovative Micro SAAS Services Showcase 2025 | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Discover our comprehensive portfolio of innovative micro SAAS services, AI solutions, quantum computing platforms, and emerging technology solutions. Transform your business with cutting-edge technology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;micro SAAS, AI services, quantum computing, emerging technology, business solutions, innovation&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/innovative-micro-saas-showcase&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative py-20 lg:py-32 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black&quot;></div>
        <div className=&quot;relative z-10 container mx-auto px-4 text-center&quot;>
=======
        <meta name="description" content="Discover our comprehensive portfolio of innovative micro SAAS services, _AI solutions, _quantum computing platforms, _and emerging technology solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="micro SAAS, _AI services, _quantum computing, _emerging technology, _business solutions, _innovation" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-micro-saas-showcase" />
      </Head>

      {_/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6&quot;>
              Innovative Micro SAAS Services
            </h1>
<<<<<<< HEAD
            <p className=&quot;text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
              Discover our comprehensive portfolio of cutting-edge micro SAAS solutions, AI platforms, quantum computing services, and emerging technology innovations designed to transform your business.
            </p>
            <div className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=&quot;flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20&quot;
                >
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className=&quot;text-white font-semibold&quot;>{stat.number}</span>
                  <span className=&quot;text-gray-300 text-sm&quot;>{stat.label}</span>
=======
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge micro SAAS solutions, _AI platforms, _quantum computing services, _and emerging technology innovations designed to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {_stats.map((stat, _index) => (
                <motion.div
                  key={stat.label}
                  initial={_{ opacity: 0, _scale: 0.8}}
                  animate={_{ opacity: 1, _scale: 1}}
                  transition={_{ duration: 0.5, _delay: index * 0.1}}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
                >
                  <stat.icon className={_`w-5 h-5 ${stat.color}`} />
                  <span className="text-white font-semibold">{_stat.number}</span>
                  <span className="text-gray-300 text-sm">{_stat.label}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Bar */}
      <section className=&quot;bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-4&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;flex flex-col lg:flex-row items-center justify-between text-center lg:text-left&quot;>
            <div className=&quot;flex items-center space-x-4 mb-4 lg:mb-0&quot;>
              <Phone className=&quot;w-5 h-5 text-white&quot; />
              <span className=&quot;text-white font-semibold&quot;>{contactInfo.mobile}</span>
              <Mail className=&quot;w-5 h-5 text-white&quot; />
              <span className=&quot;text-white font-semibold&quot;>{contactInfo.email}</span>
            </div>
            <div className=&quot;flex items-center space-x-4&quot;>
              <MapPin className=&quot;w-5 h-5 text-white&quot; />
              <span className=&quot;text-white text-sm&quot;>{contactInfo.address}</span>
=======
      {_/* Contact Bar */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{_contactInfo.mobile}</span>
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{_contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white text-sm">{_contactInfo.address}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Filters and Search */}
      <section className=&quot;py-8 bg-black/50 backdrop-blur-sm border-b border-white/10&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;>
            {/* Search */}
            <div className=&quot;relative flex-1 max-w-md&quot;>
              <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search services...&quot;
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=&quot;w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent&quot;
              />
            </div>

            {/* Category Filter */}
            <div className=&quot;flex flex-wrap gap-2&quot;>
              {categories.map((category) => (
                <button
=======
      {_/* Filters and Search */}
      <section className="py-8 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {_/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={_searchTerm}
                onChange={_(_e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {_/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {_categories.map(_(category) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  key={category.value}
                  onClick={_() => setSelectedCategory(category.value)}
                  className={_`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.value
                      ? `bg-gradient-to-r ${category.color} border-transparent text-white`
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                  }`}
                >
<<<<<<< HEAD
                  <category.icon className=&quot;w-4 h-4&quot; />
                  <span className=&quot;text-sm font-medium&quot;>{category.name}</span>
=======
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{_category.name}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </button>
              ))}
            </div>

<<<<<<< HEAD
            {/* View Mode and Sort */}
            <div className=&quot;flex items-center space-x-4&quot;>
              <div className=&quot;flex bg-white/10 rounded-lg p-1&quot;>
=======
            {_/* View Mode and Sort */}
            <div className="flex items-center space-x-4">
              <div className="flex bg-white/10 rounded-lg p-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <button
                  onClick={_() => setViewMode('grid')}
                  className={_`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className=&quot;w-5 h-5&quot; />
                </button>
                <button
                  onClick={_() => setViewMode('list')}
                  className={_`p-2 rounded ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className=&quot;w-5 h-5&quot; />
                </button>
              </div>

              <select
<<<<<<< HEAD
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className=&quot;bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500&quot;
=======
                value={_sortBy}
                onChange={_(_e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <option value=&quot;popularity&quot;>Most Popular</option>
                <option value=&quot;rating&quot;>Highest Rated</option>
                <option value=&quot;price-low&quot;>Price: Low to High</option>
                <option value=&quot;price-high&quot;>Price: High to Low</option>
                <option value=&quot;newest&quot;>Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section className=&quot;py-16&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;mb-8&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-2&quot;>
              {selectedCategory === 'all' ? 'All Services' : `${categories.find(c => c.value === selectedCategory)?.name}`}
            </h2>
            <p className=&quot;text-gray-400&quot;>
              {filteredServices.length} services found
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6&quot;>
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=&quot;group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20&quot;
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className=&quot;absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full&quot;>
=======
      {_/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {_selectedCategory === 'all' ? 'All Services' : `${categories.find(c => c.value === selectedCategory)?.name}`}
            </h2>
            <p className="text-gray-400">
              {_filteredServices.length} services found
            </p>
          </div>

          {_viewMode === 'grid' ? (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedServices.map((service, _index) => (
                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _y: 20}}
                  animate={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.5, _delay: index * 0.1}}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  {_/* Popular Badge */}
                  {_service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Popular
                    </div>
                  )}

<<<<<<< HEAD
                  {/* Service Icon */}
                  <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>

                  {/* Service Info */}
                  <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors&quot;>
                    {service.name}
                  </h3>
                  <p className=&quot;text-gray-400 text-sm mb-4 line-clamp-2&quot;>
                    {service.tagline}
                  </p>

                  {/* Price */}
                  <div className=&quot;flex items-center justify-between mb-4&quot;>
                    <div className=&quot;text-2xl font-bold text-purple-400&quot;>
                      {service.price}
                      <span className=&quot;text-sm text-gray-400 font-normal&quot;>{service.period}</span>
                    </div>
                    <div className=&quot;flex items-center space-x-1&quot;>
                      <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                      <span className=&quot;text-sm text-gray-300&quot;>{service.rating}</span>
                      <span className=&quot;text-xs text-gray-500&quot;>({service.reviews})</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className=&quot;mb-4&quot;>
                    <div className=&quot;text-sm text-gray-400 mb-2&quot;>Key Features:</div>
                    <div className=&quot;space-y-1&quot;>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className=&quot;flex items-center space-x-2 text-xs text-gray-300&quot;>
                          <CheckCircle className=&quot;w-3 h-3 text-green-400&quot; />
                          <span>{feature}</span>
=======
                  {_/* Service Icon */}
                  <div className="text-4xl mb-4">{_service.icon}</div>

                  {_/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {_service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {_service.tagline}
                  </p>

                  {_/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-purple-400">
                      {_service.price}
                      <span className="text-sm text-gray-400 font-normal">{_service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{_service.rating}</span>
                      <span className="text-xs text-gray-500">({_service.reviews})</span>
                    </div>
                  </div>

                  {_/* Features */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {_service.features.slice(0, _3).map(_(feature, _idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      ))}
                    </div>
                  </div>

<<<<<<< HEAD
                  {/* Category and Setup */}
                  <div className=&quot;flex items-center justify-between text-xs text-gray-500 mb-4&quot;>
                    <span className=&quot;bg-white/10 px-2 py-1 rounded&quot;>{service.category}</span>
                    <span>Setup: {service.setupTime}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className=&quot;flex space-x-2&quot;>
                    <Link
                      href={service.link}
                      className=&quot;flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium&quot;
=======
                  {_/* Category and Setup */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="bg-white/10 px-2 py-1 rounded">{_service.category}</span>
                    <span>Setup: {_service.setupTime}</span>
                  </div>

                  {_/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Link
                      href={_service.link}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      Learn More
                    </Link>
                    <button className=&quot;p-2 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300&quot;>
                      <Heart className=&quot;w-4 h-4&quot; />
                    </button>
                  </div>

<<<<<<< HEAD
                  {/* Hover Overlay */}
                  <div className=&quot;absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-6&quot;>
                    <div className=&quot;text-center w-full&quot;>
                      <p className=&quot;text-white text-sm mb-3 line-clamp-3&quot;>{service.description}</p>
                      <Link
                        href={service.link}
                        className=&quot;inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors&quot;
=======
                  {_/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-6">
                    <div className="text-center w-full">
                      <p className="text-white text-sm mb-3 line-clamp-3">{_service.description}</p>
                      <Link
                        href={_service.link}
                        className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        <span>View Details</span>
                        <ArrowRight className=&quot;w-4 h-4&quot; />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
<<<<<<< HEAD
          ) : (
            <div className=&quot;space-y-4&quot;>
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=&quot;group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300&quot;
                >
                  <div className=&quot;flex items-start space-x-6&quot;>
                    {/* Service Icon */}
                    <div className=&quot;text-4xl&quot;>{service.icon}</div>

                    {/* Service Details */}
                    <div className=&quot;flex-1&quot;>
                      <div className=&quot;flex items-start justify-between mb-3&quot;>
                        <div>
                          <h3 className=&quot;text-xl font-bold text-white group-hover:text-purple-400 transition-colors&quot;>
                            {service.name}
                          </h3>
                          <p className=&quot;text-gray-400 text-sm&quot;>{service.tagline}</p>
                        </div>
                        <div className=&quot;text-right&quot;>
                          <div className=&quot;text-2xl font-bold text-purple-400&quot;>
                            {service.price}
                            <span className=&quot;text-sm text-gray-400 font-normal&quot;>{service.period}</span>
                          </div>
                          <div className=&quot;flex items-center justify-end space-x-1 mt-1&quot;>
                            <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                            <span className=&quot;text-sm text-gray-300&quot;>{service.rating}</span>
                            <span className=&quot;text-xs text-gray-500&quot;>({service.reviews})</span>
=======
          ) : (_<div className="space-y-4">
              {_sortedServices.map((service, _index) => (
                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _x: -20}}
                  animate={_{ opacity: 1, _x: 0}}
                  transition={_{ duration: 0.5, _delay: index * 0.1}}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    {_/* Service Icon */}
                    <div className="text-4xl">{_service.icon}</div>

                    {_/* Service Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {_service.name}
                          </h3>
                          <p className="text-gray-400 text-sm">{_service.tagline}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-400">
                            {_service.price}
                            <span className="text-sm text-gray-400 font-normal">{_service.period}</span>
                          </div>
                          <div className="flex items-center justify-end space-x-1 mt-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{_service.rating}</span>
                            <span className="text-xs text-gray-500">({_service.reviews})</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        </div>
                      </div>

<<<<<<< HEAD
                      <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-2&quot;>{service.description}</p>

                      <div className=&quot;flex items-center justify-between&quot;>
                        <div className=&quot;flex items-center space-x-4 text-xs text-gray-500&quot;>
                          <span className=&quot;bg-white/10 px-2 py-1 rounded&quot;>{service.category}</span>
                          <span>Setup: {service.setupTime}</span>
                          <span>Trial: {service.trialDays} days</span>
=======
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{_service.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="bg-white/10 px-2 py-1 rounded">{_service.category}</span>
                          <span>Setup: {_service.setupTime}</span>
                          <span>Trial: {_service.trialDays} days</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                        <div className=&quot;flex space-x-2&quot;>
                          <Link
<<<<<<< HEAD
                            href={service.link}
                            className=&quot;bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium&quot;
=======
                            href={_service.link}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          >
                            Learn More
                          </Link>
                          <button className=&quot;p-2 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300&quot;>
                            <Heart className=&quot;w-4 h-4&quot; />
                          </button>
                        </div>
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
      <section className=&quot;py-20 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
=======
      {_/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20">
        <div className="container mx-auto px-4 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Join thousands of companies already using our innovative services to gain competitive advantages and drive growth.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <Link
                href=&quot;/contact&quot;
                className=&quot;bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105&quot;
              >
                Get Started Today
              </Link>
              <Link
                href=&quot;/pricing&quot;
                className=&quot;bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300&quot;
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}