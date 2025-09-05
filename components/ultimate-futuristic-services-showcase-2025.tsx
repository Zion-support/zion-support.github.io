import React, {_useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_Star, _TrendingUp, _Users, _Award, _Clock, _Heart, _Brain, _Atom, _Shield, _Rocket, _Zap, _Globe, _CheckCircle, _ArrowRight, _Search, _Filter, _ChevronDown, _ChevronUp, _Eye, _Play, _Sparkles, _Target, _Microscope, _Lock, _Cloud, _BarChart3, _Settings, _Cpu, _Database, _Network, _Server, _ShieldCheck, _GlobeIcon, _StarIcon, _TrendingUpIcon, _UsersIcon, _CheckCircleIcon, _ArrowRightIcon, _CpuIcon, _DollarSign, _Phone, _Mail, _MapPin, _Dna, _Target as TargetIcon, _Shield as ShieldIcon, _BookOpen, _Sparkles as SparklesIcon, _Zap as ZapIcon, _Brain as BrainIcon, _Play as PlayIcon} from 'lucide-react';
import Layout from '../components/layout/Layout';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_title: 'AI & Consciousness', _description: 'Revolutionary AI platforms with consciousness and emotional intelligence', _icon: Brain, _color: 'from-violet-500 to-purple-600', _count: 3},
  {_title: 'Quantum & Emerging Tech', _description: 'Breakthrough quantum computing and space technology solutions', _icon: Atom, _color: 'from-indigo-500 to-blue-600', _count: 4},
  {_title: 'Space Technology', _description: 'AI-powered space exploration and resource extraction', _icon: Rocket, _color: 'from-blue-500 to-cyan-600', _count: 1},
  {_title: 'Financial Technology', _description: 'Quantum AI-powered financial trading and analytics', _icon: DollarSign, _color: 'from-green-500 to-emerald-600', _count: 1},
  {_title: 'Content Automation', _description: 'Autonomous AI content creation and management', _icon: BookOpen, _color: 'from-purple-500 to-pink-600', _count: 1},
  {_title: 'Cybersecurity', _description: 'Quantum encryption and advanced threat detection', _icon: Shield, _color: 'from-red-500 to-orange-600', _count: 1},
  {_title: 'Healthcare Technology', _description: 'AI-powered medical diagnostics and treatment', _icon: Heart, _color: 'from-teal-500 to-cyan-600', _count: 1},
  {_title: 'Energy Technology', _description: 'Quantum computing for fusion power and energy optimization', _icon: Zap, _color: 'from-yellow-500 to-orange-600', _count: 1},
  {_title: 'Education Technology', _description: 'Personalized AI-powered learning platforms', _icon: BookOpen, _color: 'from-indigo-500 to-purple-600', _count: 1},
  {_title: 'Materials Science', _description: 'AI-powered quantum materials research and discovery', _icon: Microscope, _color: 'from-cyan-500 to-blue-600', _count: 1}
];

const _stats = [
  {_number: '15+', _label: 'Revolutionary Services', _icon: Star, _color: 'text-cyan-400'},
  {_number: '1000%+', _label: 'Average ROI', _icon: TrendingUp, _color: 'text-purple-400'},
  {_number: '99.9%', _label: 'Success Rate', _icon: Award, _color: 'text-green-400'},
  {_number: '24/7', _label: 'Expert Support', _icon: Clock, _color: 'text-pink-400'}
];

export default function UltimateFuturisticServicesShowcase2025() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('all');
  const [sortBy, _setSortBy] = useState('popular');
  const [viewMode, _setViewMode] = useState('grid');

  const _filteredServices = ultimateFuturisticServices2025.filter(service => {
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const _matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
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

  return (_<Layout>
      <Head>
        <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary futuristic services including AI consciousness, _quantum computing, _space technology, _and breakthrough innovations. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="futuristic services, _AI consciousness, _quantum computing, _space technology, _breakthrough innovations, _Zion Tech Group" />
        <meta property="og:title" content="Ultimate Futuristic Services Showcase 2025 | Zion Tech Group" />
        <meta property="og:description" content="Discover our revolutionary futuristic services including AI consciousness, _quantum computing, _space technology, _and breakthrough innovations." />
        <meta property="og:url" content="https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025" />
      </Head>

      {_/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ultimate Futuristic
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary services that combine AI consciousness, _quantum computing, _space technology, _and breakthrough innovations to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {_stats.map((stat, _index) => (
                <motion.div
                  key={index}
                  initial={_{ opacity: 0, _scale: 0.8}}
                  animate={_{ opacity: 1, _scale: 1}}
                  transition={_{ duration: 0.5, _delay: index * 0.1}}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
                >
                  <stat.icon className={_`w-6 h-6 ${stat.color}`} />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{_stat.number}</div>
                    <div className="text-sm text-gray-300">{_stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Search and Filter Section */}
      <section className="py-12 bg-gradient-to-r from-black via-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {_/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search futuristic services..."
                value={_searchTerm}
                onChange={_(_e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {_/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              <select
                value={_selectedCategory}
                onChange={_(_e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {_serviceCategories.map(_(category) => (
                  <option key={category.title} value={_category.title}>
                    {_category.title} ({_category.count})
                  </option>
                ))}
              </select>

              {_/* Sort Options */}
              <select
                value={_sortBy}
                onChange={_(_e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="customers">Most Customers</option>
              </select>

              {_/* View Mode Toggle */}
              <div className="flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1">
                <button
                  onClick={_() => setViewMode('grid')}
                  className={_`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                >
                  <div className="grid grid-cols-2 gap-1 w-4 h-4">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                </button>
                <button
                  onClick={_() => setViewMode('list')}
                  className={_`p-2 rounded ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                >
                  <div className="space-y-1 w-4 h-4">
                    <div className="bg-current rounded-sm h-0.5"></div>
                    <div className="bg-current rounded-sm h-0.5"></div>
                    <div className="bg-current rounded-sm h-0.5"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {_/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={_containerVariants}
            initial="hidden"
            animate="visible"
            className={_viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {_sortedServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                variants={_itemVariants}
                className={_`group relative ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105'
                    : 'bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300'}`}
              >
                {_/* Popular Badge */}
                {_service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                {_/* Service Header */}
                <div className={_`${viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center'}`}>
                  <div className={_`${viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4'}`}>
                    <div className={_`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}>
                      {_service.icon}
                    </div>
                  </div>
                  
                  <div className={_`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {_service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{_service.tagline}</p>
                    
                    {_/* Price */}
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-3xl font-bold text-white">{_service.price}</span>
                      <span className="text-gray-400">{_service.period}</span>
                    </div>
                  </div>
                </div>

                {_/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{_service.description}</p>

                {_/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {_service.features.slice(0, _4).map(_(feature, _idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {_feature}
                      </div>
                    ))}
                    {_service.features.length > 4 && (
                      <div className="text-sm text-purple-400 mt-2">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {_/* Service Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-gray-400">
                    <span className="block">Setup Time</span>
                    <span className="text-white font-medium">{_service.setupTime}</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="block">Trial</span>
                    <span className="text-white font-medium">{_service.trialDays} days</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="block">Rating</span>
                    <div className="flex items-center">
                      <span className="text-white font-medium mr-1">{_service.rating}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  <div className="text-gray-400">
                    <span className="block">Customers</span>
                    <span className="text-white font-medium">{_service.customers}+</span>
                  </div>
                </div>

                {_/* ROI and Market Info */}
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                  <div className="text-sm">
                    <div className="text-gray-300 mb-2">
                      <span className="font-semibold text-white">ROI:</span> {_service.roi}
                    </div>
                    <div className="text-gray-300">
                      <span className="font-semibold text-white">Market Size:</span> {_service.marketSize}
                    </div>
                  </div>
                </div>

                {_/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={_service.link}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {_/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-center text-sm text-gray-400">
                    <p>Contact us for custom pricing and implementation</p>
                    <div className="flex items-center justify-center space-x-4 mt-2">
                      <a href={_`tel:${contactInfo.mobile}`} className="flex items-center text-purple-400 hover:text-purple-300">
                        <Phone className="w-4 h-4 mr-1" />
                        {_contactInfo.mobile}
                      </a>
                      <a href={_`mailto:${contactInfo.email}`} className="flex items-center text-purple-400 hover:text-purple-300">
                        <Mail className="w-4 h-4 mr-1" />
                        {_contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {_/* No Results */}
          {_sortedServices.length === 0 && (_<div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or category filter</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');}}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our revolutionary futuristic services. 
              Get in touch with our experts to discuss your specific needs and implementation strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Experts
              </Link>
              <Link
                href="/pricing"
                className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}