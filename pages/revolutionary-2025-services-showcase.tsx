import React, {_useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_Search, _Filter, _Star, _Users, _TrendingUp, _DollarSign, _Clock, _CheckCircle, _ArrowRight, _Brain, _Rocket, _Dna, _Globe, _Shield, _Wifi, _Package, _Bot, _Car, _Building2, _Monitor, _Cpu, _Zap, _Atom, _Database, _Cloud, _Lock, _Code, _Phone, _Mail, _MapPin, _ExternalLink, _ChevronDown, _Award, _Target, _Zap as ZapIcon, _Globe as GlobeIcon} from 'lucide-react';

// Import the new revolutionary services

const _allServices = [...revolutionary2025Services, ...revolutionary2025ITServices];

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_id: 'ai-consciousness', _title: '🧠 AI Consciousness & Emotional Intelligence', _description: 'Revolutionary AI consciousness and emotional intelligence platforms', _icon: Brain, _color: 'from-violet-500 to-purple-500', _services: allServices.filter(s => s.category.includes('AI Consciousness') || s.category.includes('Healthcare AI')), _gradient: 'from-violet-500/20 to-indigo-500/20'},
  {_id: 'quantum-emerging', _title: '⚛️ Quantum & Emerging Tech', _description: 'Quantum computing, _DNA computing, _and beyond', _icon: Atom, _color: 'from-blue-500 to-cyan-500', _services: allServices.filter(s => s.category.includes('Quantum') || s.category.includes('DNA Computing')), _gradient: 'from-blue-500/20 to-cyan-500/20'},
  {_id: 'space-tech', _title: '🚀 Space Technology & Satellite', _description: 'Space mission management and satellite operations', _icon: Rocket, _color: 'from-indigo-500 to-blue-500', _services: allServices.filter(s => s.category.includes('Space Technology')), _gradient: 'from-indigo-500/20 to-blue-500/20'},
  {_id: 'cybersecurity', _title: '🔒 Next-Generation Cybersecurity', _description: 'Quantum encryption and AI threat detection', _icon: Shield, _color: 'from-red-500 to-pink-500', _services: allServices.filter(s => s.category.includes('Cybersecurity')), _gradient: 'from-red-500/20 to-pink-500/20'},
  {_id: 'cloud-infrastructure', _title: '☁️ Quantum Cloud & Infrastructure', _description: 'Quantum-enhanced cloud computing and infrastructure', _icon: Cloud, _color: 'from-cyan-500 to-blue-500', _services: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('Infrastructure')), _gradient: 'from-cyan-500/20 to-blue-500/20'},
  {_id: 'fintech', _title: '🏦 Financial Technology Revolution', _description: 'AI-powered trading and quantum risk management', _icon: DollarSign, _color: 'from-green-500 to-emerald-500', _services: allServices.filter(s => s.category.includes('Financial Technology')), _gradient: 'from-green-500/20 to-emerald-500/20'},
  {_id: 'industrial-iot', _title: '🏭 Industrial IoT & Smart Manufacturing', _description: 'Zero downtime manufacturing and predictive maintenance', _icon: Building2, _color: 'from-gray-500 to-slate-500', _services: allServices.filter(s => s.category.includes('Industrial IoT')), _gradient: 'from-gray-500/20 to-slate-500/20'},
  {_id: 'edtech', _title: '🎓 Education Technology Revolution', _description: 'AI-powered personalized learning and 10x faster knowledge acquisition', _icon: Users, _color: 'from-blue-500 to-cyan-500', _services: allServices.filter(s => s.category.includes('Education Technology')), _gradient: 'from-blue-500/20 to-cyan-500/20'},
  {_id: 'sustainability', _title: '🌱 Sustainability & Green Technology', _description: 'AI-powered environmental solutions for carbon neutrality', _icon: Globe, _color: 'from-green-500 to-emerald-500', _services: allServices.filter(s => s.category.includes('Sustainability')), _gradient: 'from-green-500/20 to-emerald-500/20'},
  {_id: 'logistics', _title: '🚛 Logistics & Supply Chain', _description: '99.9% delivery accuracy and zero waste supply chain', _icon: Package, _color: 'from-orange-500 to-red-500', _services: allServices.filter(s => s.category.includes('Logistics')), _gradient: 'from-orange-500/20 to-red-500/20'}
];

export default function Revolutionary2025ServicesShowcase() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('all');
  const [sortBy, _setSortBy] = useState('popularity');
  const [viewMode, _setViewMode] = useState('grid');

  const _filteredServices = allServices.filter(service => {
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const _matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;});

  const _sortedServices = [...filteredServices].sort(_(a, _b) => {_switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, _'')) - parseFloat(b.price.replace(/[^0-9.]/g, _''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, _'')) - parseFloat(a.price.replace(/[^0-9.]/g, _''));
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      default:
        return b.popular ? 1 : -1;}
  });

  return (
    <>
      <Head>
        <title>Revolutionary 2025 Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Discover the most innovative micro SAAS services, IT solutions, and AI platforms of 2025. Revolutionary technology with real implementation and proven ROI." />
        <meta name="keywords" content="AI services, quantum computing, cybersecurity, cloud infrastructure, fintech, healthcare AI, space technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2025-services-showcase" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {_/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
          
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Revolutionary 2025 Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover the most innovative micro SAAS services, IT solutions, and AI platforms that are reshaping industries and creating unprecedented value.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-300">Real Implementation</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-300">Proven ROI</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Market Leaders</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {_/* Search and Filter Section */}
        <section className="py-8 px-4 border-b border-gray-800">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {_/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search revolutionary services..."
                  value={_searchTerm}
                  onChange={_(_e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {_/* Filters */}
              <div className="flex flex-wrap gap-4 items-center">
                {_/* Category Filter */}
                <div className="relative">
                  <select
                    value={_selectedCategory}
                    onChange={_(_e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-10"
                  >
                    <option value="all">All Categories</option>
                    {_serviceCategories.map(category => (
                      <option key={category.id} value={_category.id}>
                        {_category.title.split(' ').slice(1).join(' ')}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>

                {_/* Sort Filter */}
                <div className="relative">
                  <select
                    value={_sortBy}
                    onChange={_(_e) => setSortBy(e.target.value)}
                    className="appearance-none bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-10"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="customers">Most Customers</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>

                {_/* View Mode */}
                <div className="flex bg-gray-800/50 border border-gray-700 rounded-lg p-1">
                  <button
                    onClick={_() => setViewMode('grid')}
                    className={_`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={_() => setViewMode('list')}
                    className={_`p-2 rounded ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {_/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {_/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-400">
                Showing <span className="text-white font-semibold">{_filteredServices.length}</span> revolutionary services
                {_selectedCategory !== 'all' && (
                  <> in <span className="text-white font-semibold">{serviceCategories.find(c => c.id === selectedCategory)?.title.split(' ').slice(1).join(' ')}</span></>
                )}
              </p>
            </div>

            {_/* Services Grid */}
            <AnimatePresence mode="wait">
              {_viewMode === 'grid' ? (_<motion.div
                  key="grid"
                  initial={{ opacity: 0}}
                  animate={_{ opacity: 1}}
                  exit={_{ opacity: 0}}
                  transition={_{ duration: 0.3}}
                  className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                  {_sortedServices.map((service, _index) => (
                    <motion.div
                      key={service.id}
                      initial={_{ opacity: 0, _y: 20}}
                      animate={_{ opacity: 1, _y: 0}}
                      transition={_{ duration: 0.5, _delay: index * 0.1}}
                      className="group relative"
                    >
                      <div className="relative bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-700/50 rounded-2xl p-6 h-full backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                        {_/* Popular Badge */}
                        {_service.popular && (
                          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            POPULAR
                          </div>
                        )}

                        {_/* Service Icon */}
                        <div className="text-4xl mb-4">{_service.icon}</div>

                        {_/* Service Title */}
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {_service.name}
                        </h3>

                        {_/* Tagline */}
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {_service.tagline}
                        </p>

                        {_/* Price */}
                        <div className="text-3xl font-bold text-white mb-4">
                          {_service.price}
                          <span className="text-lg text-gray-400 font-normal">{_service.period}</span>
                        </div>

                        {_/* Features */}
                        <div className="space-y-2 mb-6">
                          <h4 className="text-sm font-semibold text-purple-400">Key Features</h4>
                          <ul className="space-y-1">
                            {_service.features.slice(0, _4).map(_(feature, _featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                {_feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {_/* Market Data */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          <div className="bg-gray-800/50 rounded-lg p-3">
                            <div className="text-xs text-gray-400 mb-1">Market Size</div>
                            <div className="text-sm text-gray-200">{_service.marketSize}</div>
                          </div>
                          <div className="bg-gray-800/50 rounded-lg p-3">
                            <div className="text-xs text-gray-400 mb-1">Growth Rate</div>
                            <div className="text-sm text-gray-200">{_service.growthRate}</div>
                          </div>
                        </div>

                        {_/* Action Buttons */}
                        <div className="flex space-x-3 mb-4">
                          <Link href={_service.link} target="_blank" rel="noopener noreferrer">
                            <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-sm">
                              <ExternalLink className="w-4 h-4 mr-2 inline" />
                              Learn More
                            </button>
                          </Link>
                          <Link href="/contact">
                            <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300 text-sm">
                              Contact
                            </button>
                          </Link>
                        </div>

                        {_/* Contact Info */}
                        <div className="grid grid-cols-1 gap-2 text-xs">
                          <div className="flex items-center gap-2 text-purple-400">
                            <Phone className="w-3 h-3" />
                            <a href={_`tel:${service.contactInfo.mobile.replace(/[^+\d]/g, _'')}`} className="hover:text-white">
                              {_service.contactInfo.mobile}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-blue-400">
                            <Mail className="w-3 h-3" />
                            <a href={_`mailto:${service.contactInfo.email}`} className="hover:text-white">
                              {_service.contactInfo.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (_<motion.div
                  key="list"
                  initial={_{ opacity: 0}}
                  animate={_{ opacity: 1}}
                  exit={_{ opacity: 0}}
                  transition={_{ duration: 0.3}}
                  className="space-y-6"
                >
                  {_sortedServices.map((service, _index) => (
                    <motion.div
                      key={service.id}
                      initial={_{ opacity: 0, _x: -20}}
                      animate={_{ opacity: 1, _x: 0}}
                      transition={_{ duration: 0.5, _delay: index * 0.1}}
                      className="bg-gradient-to-r from-gray-900/80 to-black/90 border border-gray-700/50 rounded-xl p-6 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        {_/* Left Column */}
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="text-4xl">{_service.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold text-white">{_service.name}</h3>
                                {_service.popular && (
                                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    POPULAR
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-300 text-sm">{_service.tagline}</p>
                            </div>
                          </div>
                          
                          <p className="text-gray-300 mb-4 leading-relaxed">{_service.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features</h4>
                              <ul className="space-y-1">
                                {_service.features.slice(0, _4).map(_(feature, _featureIndex) => (
                                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                    {_feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-blue-400 mb-2">Technology Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {_service.technology.slice(0, _6).map(_(tech, _techIndex) => (
                                  <span key={techIndex} className="bg-gray-800/50 text-gray-300 text-xs px-2 py-1 rounded">
                                    {_tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {_/* Right Column */}
                        <div className="lg:w-80 space-y-4">
                          {_/* Price */}
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">
                              {_service.price}
                              <span className="text-lg text-gray-400 font-normal">{_service.period}</span>
                            </div>
                            <div className="text-sm text-gray-400">30-day free trial</div>
                          </div>

                          {_/* Market Data */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                              <div className="text-xs text-gray-400 mb-1">Market Size</div>
                              <div className="text-sm text-gray-200">{_service.marketSize}</div>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                              <div className="text-xs text-gray-400 mb-1">Growth Rate</div>
                              <div className="text-sm text-gray-200">{_service.growthRate}</div>
                            </div>
                          </div>

                          {_/* ROI */}
                          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                            <div className="text-xs text-green-400 mb-1">Expected ROI</div>
                            <div className="text-sm text-green-300">{_service.roi}</div>
                          </div>

                          {_/* Action Buttons */}
                          <div className="space-y-3">
                            <Link href={_service.link} target="_blank" rel="noopener noreferrer">
                              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300">
                                <ExternalLink className="w-4 h-4 mr-2 inline" />
                                Learn More
                              </button>
                            </Link>
                            <Link href="/contact">
                              <button className="w-full px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
                                Contact Sales
                              </button>
                            </Link>
                          </div>

                          {_/* Contact Info */}
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-purple-400">
                              <Phone className="w-3 h-3" />
                              <a href={_`tel:${service.contactInfo.mobile.replace(/[^+\d]/g, _'')}`} className="hover:text-white">
                                {_service.contactInfo.mobile}
                              </a>
                            </div>
                            <div className="flex items-center gap-2 text-blue-400">
                              <Mail className="w-3 h-3" />
                              <a href={_`mailto:${service.contactInfo.email}`} className="hover:text-white">
                                {_service.contactInfo.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {_/* No Results */}
            {_filteredServices.length === 0 && (_<div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');}}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {_/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of companies already leveraging our revolutionary services to achieve unprecedented growth and innovation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                  <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 mb-3">{_contactInfo.mobile}</p>
                  <a href={_`tel:${contactInfo.mobile.replace(/[^+\d]/g, _'')}`} className="text-purple-400 hover:text-purple-300">
                    Call Now →
                  </a>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-3">{_contactInfo.email}</p>
                  <a href={_`mailto:${contactInfo.email}`} className="text-blue-400 hover:text-blue-300">
                    Send Email →
                  </a>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 mb-3 text-sm">{_contactInfo.address}</p>
                  <a href={_`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                    Start Your Transformation
                  </button>
                </Link>
                <Link href={_contactInfo.website}>
                  <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300 text-lg">
                    Visit Website
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}