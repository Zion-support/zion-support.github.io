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
];

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

  const _filteredServices = allServices.filter(service => {
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const _matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;});

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  };

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  };

  return (_<>
      <Head>
        <title>Cutting-Edge Services Showcase 2025 - Zion Tech Group | Future Technology Solutions</title>
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
              >
                Cutting-Edge Services
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">
                  Showcase 2025
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.4}}
              >
                Discover revolutionary technology solutions that are reshaping industries and defining the future. 
                From AI consciousness to space mining, _experience the cutting edge of innovation.
              </motion.p>

              {_/* Hero Stats */}
              <motion.div 
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
                  </div>
                ))}
              </motion.div>

              {_/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.8}}
              >
                <a
                  href="#services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

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

              {_/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={_() => setViewMode('grid')}
                  className={_`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                      : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/70'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={_() => setViewMode('list')}
                  className={_`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                      : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/70'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {_/* Services Grid */}
        <section id="services" className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
              className={_viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {_filteredServices.map(_(service, _index) => (
                <motion.div
                  key={service.id}
                  variants={_itemVariants}
                  className={_`group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''}`}
                >
                  {_/* Service Header */}
                  <div className={_`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {_service.name}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {_service.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
                          <Star className="w-6 h-6 text-cyan-400" />
                        </div>
                      </div>
                    </div>

                    {_/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {_service.tags.slice(0, _3).map(_(tag, _tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                        >
                          {_tag}
                        </span>
                      ))}
                    </div>

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
                          </li>
                        ))}
                      </ul>
                    </div>

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
                      >
                        Learn More
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                      <a
                        href="/contact"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {_/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>

            {_/* No Results */}
            {_filteredServices.length === 0 && (_<motion.div
                initial={{ opacity: 0}}
                animate={_{ opacity: 1}}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-white/70 mb-6">Try adjusting your search terms or category filter</p>
                <button
                  onClick={_() => {
                    setSearchTerm('');
                    setSelectedCategory('all');}}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {_/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Our cutting-edge services are designed to give you a competitive advantage in the rapidly evolving technology landscape. 
                Let's discuss how we can help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href={_`tel:${contactInfo.mobile}`}
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>

              {_/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Phone</div>
                  <a href={_`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {_contactInfo.mobile}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Email</div>
                  <a href={_`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {_contactInfo.email}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-white/70 text-sm">{_contactInfo.address}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}