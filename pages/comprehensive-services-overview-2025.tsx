import React, {_useState} from 'react';
import Head from 'next/head';
import {_Check, _Star, _Users, _Clock, _Shield, _Zap, _Globe, _Rocket, _Brain, _Atom, _ArrowRight, _ExternalLink, _TrendingUp, _Award, _Target, _ChevronDown, _Search, _Filter, _Grid, _List, _BarChart3, _DollarSign, _Target as TargetIcon} from 'lucide-react';

export default function ComprehensiveServicesOverviewPage() {_const [selectedCategory, _setSelectedCategory] = useState('all');
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
        case 'popularity':
          return b.popular ? 1 : -1;
        case 'price':
          return parseFloat(a.price.replace('$', _'').replace(', _', _'')) - parseFloat(b.price.replace('$', _'').replace(', _', _''));
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;}
    });

  const _getCategoryIcon = (_category: string) => {_const _categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || '🚀';};

  // Calculate market statistics
  const _totalMarketSize = allServices.reduce(_(sum, _service) => {_const _marketSize = service.marketSize.match(/\$([\d.]+)B/);
    return sum + (marketSize ? parseFloat(marketSize[1]) : 0);}, 0);

  const _averageROI = allServices.reduce(_(sum, _service) => {_const _roi = service.roi.match(/(\d+)%/);
    return sum + (roi ? parseInt(roi[1]) : 0);}, 0) / allServices.length;

  const _totalCustomers = allServices.reduce(_(sum, _service) => sum + service.customers, 0);

  return (
    <>
      <Head>
        <title>Comprehensive Services Overview 2025 - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive micro SAAS services overview for 2025. Revolutionary AI, quantum computing, cybersecurity, and emerging technology solutions." />
        <meta name="keywords" content="micro SAAS services, AI services, quantum computing, cybersecurity, emerging technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-overview-2025" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {_/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Revolutionary Micro SAAS Services 2025
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Discover our cutting-edge micro SAAS solutions that are transforming industries and driving the future of technology with AI, quantum computing, and emerging technologies
              </p>
              
              {_/* Market Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-blue-400">{_allServices.length}+</div>
                  <div className="text-white/60">Services Available</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-green-400">${_totalMarketSize.toFixed(1)}B+</div>
                  <div className="text-white/60">Total Market Size</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-purple-400">{_totalCustomers.toLocaleString()}+</div>
                  <div className="text-white/60">Total Customers</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-orange-400">{_averageROI.toFixed(0)}%+</div>
                  <div className="text-white/60">Average ROI</div>
                </div>
              </div>

              {_/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-500/30">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-2">First-to-Market Solutions</h3>
                  <p className="text-white/70 text-sm">Revolutionary services that give you competitive advantages in emerging markets</p>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-2">AI-Powered Optimization</h3>
                  <p className="text-white/70 text-sm">Advanced AI algorithms that continuously optimize and improve your operations</p>
                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                  <p className="text-white/70 text-sm">Military-grade security with quantum-resistant encryption and AI threat detection</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {_/* Search and Filters */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
              className="flex flex-col lg:flex-row gap-6 items-center justify-between"
            >
              {_/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={_searchTerm}
                  onChange={_(_e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>

              {_/* Sort and View Controls */}
              <div className="flex items-center gap-4">
                <select
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value as any)}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price">Price: Low to High</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>

                <div className="flex bg-white/10 rounded-xl p-1">
                  <button
                    onClick={_() => setViewMode('grid')}
                    className={_`p-2 rounded-lg transition-all ${
                      viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-white/60 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={_() => setViewMode('list')}
                    className={_`p-2 rounded-lg transition-all ${
                      viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-white/60 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {_/* Category Filter */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
              className="flex flex-wrap justify-center gap-3"
            >
              {_categories.map(_(category) => (_<button
                  key={category.id}
                  onClick={_() => setSelectedCategory(category.id)}
                  className={_`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`}
                >
                  <span>{_category.icon}</span>
                  {_category.name}
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{_category.count}</span>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {_/* Services Display */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            {_viewMode === 'grid' ? (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="wait">
                  {filteredServices.map((service, _index) => (
                    <motion.div
                      key={service.id}
                      initial={_{ opacity: 0, _y: 30}}
                      animate={_{ opacity: 1, _y: 0}}
                      exit={_{ opacity: 0, _y: -30}}
                      transition={_{ duration: 0.6, _delay: index * 0.1}}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    >
                      {_/* Popular Badge */}
                      {_service.popular && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10">
                          <Star className="w-3 h-3" />
                          Popular
                        </div>
                      )}

                      {_/* Service Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{_service.icon}</div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white">{_service.price}</div>
                            <div className="text-white/60 text-sm">{_service.period}</div>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                        <p className="text-white/70 text-sm mb-4">{_service.tagline}</p>

                        {_/* Features */}
                        <div className="space-y-2 mb-6">
                          {_service.features.slice(0, _3).map(_(feature, _idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                              <Check className="w-4 h-4 text-green-400" />
                              {_feature}
                            </div>
                          ))}
                        </div>

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
                          </div>
                        </div>

                        {_/* CTA */}
                        <a
                          href={_service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Learn More
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (_<div className="space-y-6">
                <AnimatePresence mode="wait">
                  {_filteredServices.map((service, _index) => (
                    <motion.div
                      key={service.id}
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
                              Popular
                            </div>
                          )}
                        </div>

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
                                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="truncate">{_feature}</span>
                              </div>
                            ))}
                          </div>

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
                            </div>
                          </div>
                        </div>

                        {_/* Right Side - CTA and Category */}
                        <div className="flex-shrink-0 flex flex-col items-end gap-4">
                          <div className="text-right">
                            <div className="text-sm text-white/60 mb-1">Category</div>
                            <div className="flex items-center gap-2 text-white">
                              <span>{_getCategoryIcon(service.category)}</span>
                              <span className="text-sm">{_service.category}</span>
                            </div>
                          </div>

                          <a
                            href={_service.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
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
                initial={{ opacity: 0}}
                animate={_{ opacity: 1}}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-white/60">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {_/* Contact CTA */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of companies already using our revolutionary micro SAAS services to drive innovation and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Contact Sales Team
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}