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

  const _filteredServices = allServices
    .filter(service => {_const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const _matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      const _price = parseFloat(service.price.replace('$', _'').replace(', _', _''));
      const _matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;})
    .sort(_(a, _b) => {_switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price':
          return parseFloat(a.price.replace('$', _'').replace(', _', _'')) - parseFloat(b.price.replace('$', _'').replace(', _', _''));
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;}
    });

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  };

  const _itemVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.5}
    }
  };

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
      </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2025 Advanced Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive collection of cutting-edge micro SAAS services, _advanced AI solutions, _quantum technologies, _and revolutionary IT services that are transforming industries worldwide.
            </p>
            
            {_/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{_allServices.length}+</div>
                <div className="text-white/70">Advanced Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-white/70">Technology Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-white/70">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-white/70">Expert Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
                />
              </div>
            </div>

            {_/* Filters Row */}
            <div className="flex flex-col lg:flex-row gap-6">
              {_/* Category Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white/70 mb-3">Category</label>
                <select
                  value={_selectedCategory}
                  onChange={_(_e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                >
                  {_categories.map(_(category) => (
                    <option key={category.id} value={_category.id}>
                      {_category.name} ({_category.count})
                    </option>
                  ))}
                </select>
              </div>

              {_/* Sort By */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white/70 mb-3">Sort By</label>
                <select
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value as any)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price">Price (Low to High)</option>
                  <option value="rating">Rating</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

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
                  />
                </div>
              </div>

              {_/* View Mode Toggle */}
              <div className="flex items-end">
                <div className="flex bg-white/10 rounded-xl p-1">
                  <button
                    onClick={_() => setViewMode('grid')}
                    className={_`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={_() => setViewMode('list')}
                    className={_`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
            </p>
          </motion.div>

          {_/* Services Display */}
          <motion.div
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
                          Popular
                        </span>
                      )}
                    </div>

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
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {_/* Category and Technology */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">
                          {_getCategoryIcon(service.category)} {_service.category}
                        </span>
                      </div>
                      <div className="text-white/60 text-sm">
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
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {_/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={_service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Learn More
                      </a>
                      <a
                        href={_`mailto:${service.contactInfo.email}?subject=Inquiry about ${_service.name}`}
                        className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
                      >
                        <ZapIcon className="w-4 h-4" />
                        Contact
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {_/* No Results */}
          {_filteredServices.length === 0 && (_<motion.div
              initial={{ opacity: 0}}
              animate={_{ opacity: 1}}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-white/70 mb-6">Try adjusting your search criteria or filters</p>
              <button
                onClick={_() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setPriceRange([0, _10000]);}}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {_/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Our advanced services are designed to give you a competitive edge in the rapidly evolving technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}