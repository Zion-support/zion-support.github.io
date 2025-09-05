<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  Search, Filter, Star, CheckCircle, ArrowRight,
  Brain, Atom, Shield, Rocket, Target, Microscope,
  Phone, Mail, MapPin, TrendingUp, Users, Award,
  Zap, Globe, Cpu, Database, Lock, Cloud,
  Stethoscope, GraduationCap, Leaf, Truck
} from 'lucide-react',
import Layout from '../components/layout/Layout',
// Import all the new 2025 innovative service data
import { innovativeFinancialServices2025 } from '../data/2025-innovative-financial-services',
import { innovativeHealthcareServices2025 } from '../data/2025-innovative-healthcare-services',
import { innovativeEducationServices2025 } from '../data/2025-innovative-education-services',
import { innovativeSustainabilityServices2025 } from '../data/2025-innovative-sustainability-services',
import { innovativeLogisticsServices2025 } from '../data/2025-innovative-logistics-services',
// Import existing services for comprehensive coverage
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services',
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services',
import { innovativeITServices2025 } from '../data/2025-innovative-it-services',
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services',
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const serviceCategories = [
  {
    id: 'financial-technology',
    title: '💰 Financial Technology',
    description: 'Innovative fintech, DeFi, and financial services',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    services: [...innovativeFinancialServices2025],
    gradient: 'from-green-500/20 to-emerald-500/20',
    badge: 'New'
  },
  {
    id: 'healthcare-biotech',
    title: '🏥 Healthcare & Biotech',
    description: 'AI-powered healthcare and biotechnology solutions',
    icon: Stethoscope,
    color: 'from-blue-500 to-indigo-500',
    services: [...innovativeHealthcareServices2025],
    gradient: 'from-blue-500/20 to-indigo-500/20',
    badge: 'Hot'
  },
  {
    id: 'education-technology',
    title: '🎓 Education Technology',
    description: 'AI-powered learning and educational innovation',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
    services: [...innovativeEducationServices2025],
    gradient: 'from-purple-500/20 to-pink-500/20',
    badge: 'Innovative'
  },
  {
    id: 'sustainability-green-tech',
    title: '🌱 Sustainability & Green Tech',
    description: 'Environmental technology and sustainability solutions',
    icon: Leaf,
    color: 'from-emerald-500 to-teal-500',
    services: [...innovativeSustainabilityServices2025],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    badge: 'Eco-Friendly'
  },
  {
    id: 'logistics-supply-chain',
    title: '🚚 Logistics & Supply Chain',
    description: 'Autonomous logistics and supply chain optimization',
    icon: Truck,
    color: 'from-orange-500 to-red-500',
    services: [...innovativeLogisticsServices2025],
    gradient: 'from-orange-500/20 to-red-500/20',
    badge: 'Autonomous'
  },
  {
    id: 'ai-consciousness',
    title: '🧠 AI & Consciousness',
    description: 'Revolutionary AI consciousness and emotional intelligence platforms',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    services: [...innovativeAIServices2025],
    gradient: 'from-violet-500/20 to-indigo-500/20',
    badge: 'Revolutionary'
  },
  {
    id: 'quantum-emerging',
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing, DNA computing, and beyond',
    icon: Atom,
    color: 'from-indigo-500 to-blue-500',
    services: [...emergingTechServices2025],
    gradient: 'from-indigo-500/20 to-cyan-500/20',
    badge: 'Quantum'
  },
  {
    id: 'enterprise-it',
    title: '🏙️ Enterprise IT',
    description: 'Autonomous operations and zero-trust security',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    services: [...innovativeITServices2025],
    gradient: 'from-blue-500/20 to-teal-500/20',
    badge: 'Enterprise'
  },
  {
    id: 'micro-saas',
    title: '🎯 Micro SAAS',
    description: 'Innovative solutions for every business need',
    icon: Target,
    color: 'from-teal-500 to-green-500',
    services: [...realMicroSaasServices2025],
    gradient: 'from-teal-500/20 to-green-500/20',
    badge: 'Popular'
  }
],

export default function InnovativeServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [sortBy, setSortBy] = useState('name'),
=======
import React, {_useState} from 'react';
import Head from 'next/head';
import {_Search, _Filter, _Star, _CheckCircle, _ArrowRight, _Brain, _Atom, _Shield, _Rocket, _Target, _Microscope, _Phone, _Mail, _MapPin, _TrendingUp, _Users, _Award, _Zap, _Globe, _Cpu, _Database, _Lock, _Cloud, _Stethoscope, _GraduationCap, _Leaf, _Truck} from 'lucide-react';
import Layout from '../components/layout/Layout';

// Import all the new 2025 innovative service data

// Import existing services for comprehensive coverage

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_id: 'financial-technology', _title: '💰 Financial Technology', _description: 'Innovative fintech, _DeFi, _and financial services', _icon: TrendingUp, _color: 'from-green-500 to-emerald-500', _services: [...innovativeFinancialServices2025], _gradient: 'from-green-500/20 to-emerald-500/20', _badge: 'New'},
  {_id: 'healthcare-biotech', _title: '🏥 Healthcare & Biotech', _description: 'AI-powered healthcare and biotechnology solutions', _icon: Stethoscope, _color: 'from-blue-500 to-indigo-500', _services: [...innovativeHealthcareServices2025], _gradient: 'from-blue-500/20 to-indigo-500/20', _badge: 'Hot'},
  {_id: 'education-technology', _title: '🎓 Education Technology', _description: 'AI-powered learning and educational innovation', _icon: GraduationCap, _color: 'from-purple-500 to-pink-500', _services: [...innovativeEducationServices2025], _gradient: 'from-purple-500/20 to-pink-500/20', _badge: 'Innovative'},
  {_id: 'sustainability-green-tech', _title: '🌱 Sustainability & Green Tech', _description: 'Environmental technology and sustainability solutions', _icon: Leaf, _color: 'from-emerald-500 to-teal-500', _services: [...innovativeSustainabilityServices2025], _gradient: 'from-emerald-500/20 to-teal-500/20', _badge: 'Eco-Friendly'},
  {_id: 'logistics-supply-chain', _title: '🚚 Logistics & Supply Chain', _description: 'Autonomous logistics and supply chain optimization', _icon: Truck, _color: 'from-orange-500 to-red-500', _services: [...innovativeLogisticsServices2025], _gradient: 'from-orange-500/20 to-red-500/20', _badge: 'Autonomous'},
  {_id: 'ai-consciousness', _title: '🧠 AI & Consciousness', _description: 'Revolutionary AI consciousness and emotional intelligence platforms', _icon: Brain, _color: 'from-violet-500 to-purple-500', _services: [...innovativeAIServices2025], _gradient: 'from-violet-500/20 to-indigo-500/20', _badge: 'Revolutionary'},
  {_id: 'quantum-emerging', _title: '⚛️ Quantum & Emerging Tech', _description: 'Quantum computing, _DNA computing, _and beyond', _icon: Atom, _color: 'from-indigo-500 to-blue-500', _services: [...emergingTechServices2025], _gradient: 'from-indigo-500/20 to-cyan-500/20', _badge: 'Quantum'},
  {_id: 'enterprise-it', _title: '🏙️ Enterprise IT', _description: 'Autonomous operations and zero-trust security', _icon: Shield, _color: 'from-blue-500 to-cyan-500', _services: [...innovativeITServices2025], _gradient: 'from-blue-500/20 to-teal-500/20', _badge: 'Enterprise'},
  {_id: 'micro-saas', _title: '🎯 Micro SAAS', _description: 'Innovative solutions for every business need', _icon: Target, _color: 'from-teal-500 to-green-500', _services: [...realMicroSaasServices2025], _gradient: 'from-teal-500/20 to-green-500/20', _badge: 'Popular'}
];

export default function InnovativeServicesShowcase2025() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('all');
  const [sortBy, _setSortBy] = useState('name');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredServices = serviceCategories.flatMap(category => 
    category.services.filter(service =>
      (selectedCategory === 'all' || category.id === selectedCategory) &&
      (searchTerm === '' || 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  ),

  const _sortedServices = [...filteredServices].sort(_(a, _b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name),
      case 'price':
        return a.pricing.starter.price - b.pricing.starter.price,
      case 'category':
<<<<<<< HEAD
        return a.category.localeCompare(b.category),
      default: return 0
    }
  }),
=======
        return a.category.localeCompare(b.category);
      default:
        return 0;}
  });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<Layout>
      <Head>
        <title>Innovative Services Showcase 2025 | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Discover our comprehensive collection of innovative micro SAAS, AI, healthcare, fintech, and emerging technology services for 2025 and beyond.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;innovative services, micro SAAS, AI services, healthcare technology, fintech, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Innovative Services Showcase 2025 - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Comprehensive collection of innovative technology services.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/innovative-services-showcase-2025&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black&quot;></div>
        
        {/* Background Elements */}
        <div className=&quot;absolute inset-0 overflow-hidden pointer-events-none&quot;>
          <div className=&quot;absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse&quot;></div>
          <div className=&quot;absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000&quot;></div>
          <div className=&quot;absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500&quot;></div>
=======
        <meta name="description" content="Discover our comprehensive collection of innovative micro SAAS, _AI, _healthcare, _fintech, _and emerging technology services for 2025 and beyond." />
        <meta name="keywords" content="innovative services, _micro SAAS, _AI services, _healthcare technology, _fintech, _Zion Tech Group" />
        <meta property="og:title" content="Innovative Services Showcase 2025 - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive collection of innovative technology services." />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-services-showcase-2025" />
      </Head>

      {_/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        
        {_/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>

        <div className=&quot;relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto&quot;>
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;
=======
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="mb-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6&quot;>
              <Star className=&quot;w-4 h-4 mr-2&quot; />
              Innovation Showcase 2025
            </div>
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                Innovative Services
              </span>
              <br />
              <span className=&quot;text-white&quot;>Showcase</span>
            </h1>
<<<<<<< HEAD
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
              Discover our comprehensive collection of revolutionary micro SAAS, AI, healthcare, fintech, and emerging technology services that are transforming industries worldwide.
=======
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive collection of revolutionary micro SAAS, _AI, _healthcare, _fintech, _and emerging technology services that are transforming industries worldwide.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
          </motion.div>

          {_/* Stats */}
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto&quot;
          >
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-cyan-400 mb-2&quot;>
                {serviceCategories.reduce((total, category) => total + category.services.length, 0)}+
=======
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {_serviceCategories.reduce((total, _category) => total + category.services.length, _0)}+
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <div className=&quot;text-gray-400&quot;>Services</div>
            </div>
<<<<<<< HEAD
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-purple-400 mb-2&quot;>
                {serviceCategories.length}
=======
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {_serviceCategories.length}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <div className=&quot;text-gray-400&quot;>Categories</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-pink-400 mb-2&quot;>
                24/7
              </div>
              <div className=&quot;text-gray-400&quot;>Support</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-green-400 mb-2&quot;>
                99.9%
              </div>
              <div className=&quot;text-gray-400&quot;>Uptime</div>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Search and Filter Section */}
      <section className=&quot;py-16 bg-gradient-to-b from-black to-slate-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-8&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
              {/* Search */}
              <div className=&quot;relative&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50&quot;
=======
      {_/* Search and Filter Section */}
      <section className="py-16 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {_/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={_searchTerm}
                  onChange={_(_e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </div>

              {_/* Category Filter */}
              <div>
                <select
<<<<<<< HEAD
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className=&quot;w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50&quot;
                >
                  <option value=&quot;all&quot;>All Categories</option>
                  {serviceCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.title}
=======
                  value={_selectedCategory}
                  onChange={_(_e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="all">All Categories</option>
                  {_serviceCategories.map(category => (
                    <option key={category.id} value={_category.id}>
                      {_category.title}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </option>
                  ))}
                </select>
              </div>

              {_/* Sort By */}
              <div>
                <select
<<<<<<< HEAD
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className=&quot;w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50&quot;
=======
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <option value=&quot;name&quot;>Sort by Name</option>
                  <option value=&quot;price&quot;>Sort by Price</option>
                  <option value=&quot;category&quot;>Sort by Category</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section className=&quot;py-20 bg-slate-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105&quot;
              >
                {/* Service Header */}
                <div className=&quot;mb-6&quot;>
                  <div className=&quot;flex items-center justify-between mb-4&quot;>
                    <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center&quot;>
                      <Target className=&quot;w-6 h-6 text-white&quot; />
                    </div>
                                      <div className=&quot;text-right&quot;>
                    <div className=&quot;text-sm text-gray-400&quot;>{service.category}</div>
                    <div className=&quot;text-2xl font-bold text-white&quot;>${service.pricing?.starter?.price || 'Custom'}</div>
                    <div className=&quot;text-sm text-gray-400&quot;>/month</div>
                  </div>
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors&quot;>
                    {service.name}
                  </h3>
                  <p className=&quot;text-gray-300 text-sm leading-relaxed&quot;>
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className=&quot;mb-6&quot;>
                  <h4 className=&quot;text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide&quot;>Key Features</h4>
                  <ul className=&quot;space-y-2&quot;>
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-cyan-400 mr-2 flex-shrink-0&quot; />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className=&quot;text-sm text-cyan-400&quot;>
=======
      {_/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_sortedServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {_/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                                      <div className="text-right">
                    <div className="text-sm text-gray-400">{_service.category}</div>
                    <div className="text-2xl font-bold text-white">${_service.pricing?.starter?.price || 'Custom'}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {_service.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {_service.description}
                  </p>
                </div>

                {_/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {_service.features.slice(0, _3).map(_(feature, _featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {_feature}
                      </li>
                    ))}
                    {_service.features.length > 3 && (
                      <li className="text-sm text-cyan-400">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

<<<<<<< HEAD
                {/* Market Info */}
                <div className=&quot;mb-6 grid grid-cols-2 gap-4 text-sm&quot;>
                  <div>
                    <div className=&quot;text-gray-400&quot;>Market Size</div>
                    <div className=&quot;text-white font-semibold&quot;>{service.marketSize}</div>
                  </div>
                  <div>
                    <div className=&quot;text-gray-400&quot;>Target Audience</div>
                    <div className=&quot;text-white font-semibold truncate&quot;>{service.targetAudience}</div>
                  </div>
                </div>

                {/* CTA */}
                <div className=&quot;flex gap-3&quot;>
                  <a
                    href={service.website}
                    className=&quot;flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300&quot;
=======
                {_/* Market Info */}
                <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Market Size</div>
                    <div className="text-white font-semibold">{_service.marketSize}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Target Audience</div>
                    <div className="text-white font-semibold truncate">{_service.targetAudience}</div>
                  </div>
                </div>

                {_/* CTA */}
                <div className="flex gap-3">
                  <a
                    href={_service.website}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Learn More
                  </a>
                  <a
<<<<<<< HEAD
                    href={`mailto:${service.contact.email}`}
                    className=&quot;px-4 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300&quot;
=======
                    href={_`mailto:${service.contact.email}`}
                    className="px-4 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <Mail className=&quot;w-5 h-5&quot; />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {_sortedServices.length === 0 && (
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
              <div className=&quot;text-gray-400 text-xl mb-4&quot;>No services found</div>
              <div className=&quot;text-gray-500&quot;>Try adjusting your search or filter criteria</div>
            </motion.div>
          )}
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Section */}
      <section className=&quot;py-20 bg-gradient-to-b from-slate-900 to-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl md:text-5xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Contact our team to learn more about how our innovative services can revolutionize your operations and drive growth.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;
=======
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.1}}
              viewport={_{ once: true}}
              className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                <Phone className=&quot;w-8 h-8 text-white&quot; />
              </div>
<<<<<<< HEAD
              <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Phone</h3>
              <p className=&quot;text-gray-300&quot;>{contactInfo.mobile}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;
=======
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{_contactInfo.mobile}</p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              viewport={_{ once: true}}
              className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                <Mail className=&quot;w-8 h-8 text-white&quot; />
              </div>
<<<<<<< HEAD
              <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Email</h3>
              <p className=&quot;text-gray-300&quot;>{contactInfo.email}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;
=======
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{_contactInfo.email}</p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.3}}
              viewport={_{ once: true}}
              className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                <MapPin className=&quot;w-8 h-8 text-white&quot; />
              </div>
<<<<<<< HEAD
              <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Address</h3>
              <p className=&quot;text-gray-300&quot;>{contactInfo.address}</p>
=======
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">{_contactInfo.address}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
