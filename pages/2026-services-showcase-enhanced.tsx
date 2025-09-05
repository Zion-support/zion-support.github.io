import React, {_useState, _useMemo} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';

export default function Services2026ShowcaseEnhancedPage() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, _setSelectedPriceRange] = useState<string>('all');
  const [sortBy, _setSortBy] = useState<string>('name');
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');

  // Map service variants to supported card variants
  const _mapServiceVariantToCardVariant = (serviceVariant: string): 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk' | 'enterprise-futuristic' | 'quantum-futuristic' | 'holographic-futuristic' | 'quantum-iot' | 'quantum-logistics' | 'quantum-financial' | 'quantum-energy' | 'quantum-neural' | 'quantum-cyberpunk' => {
    if (serviceVariant.includes('quantum') && serviceVariant.includes('ai')) return 'quantum-advanced';
    if (serviceVariant.includes('quantum')) return 'quantum';
    if (serviceVariant.includes('ai')) return 'ai-futuristic';
    if (serviceVariant.includes('holographic')) return 'holographic';
    if (serviceVariant.includes('neural')) return 'neural';
    if (serviceVariant.includes('cyberpunk')) return 'cyberpunk';
    if (serviceVariant.includes('enterprise')) return 'enterprise-futuristic';
    if (serviceVariant.includes('cloud')) return 'quantum-advanced';
    if (serviceVariant.includes('security')) return 'cyberpunk';
    if (serviceVariant.includes('data')) return 'neural';
    if (serviceVariant.includes('mobility')) return 'holographic';
    if (serviceVariant.includes('network')) return 'quantum-advanced';
    if (serviceVariant.includes('backup')) return 'quantum-advanced';
    if (serviceVariant.includes('itsm')) return 'enterprise-futuristic';
    if (serviceVariant.includes('monitoring')) return 'neural';
    if (serviceVariant.includes('blockchain')) return 'quantum-advanced';
    if (serviceVariant.includes('metaverse')) return 'holographic';
    if (serviceVariant.includes('iot')) return 'quantum-iot';
    if (serviceVariant.includes('edge')) return 'quantum-advanced';
    if (serviceVariant.includes('ar')) return 'holographic';
    if (serviceVariant.includes('digital-twin')) return 'quantum-advanced';
    if (serviceVariant.includes('5g')) return 'quantum-advanced';
    if (serviceVariant.includes('biometric')) return 'cyberpunk';
    if (serviceVariant.includes('autonomous')) return 'ai-futuristic';
    if (serviceVariant.includes('revolutionary')) return 'quantum-advanced';
    if (serviceVariant.includes('consulting')) return 'enterprise-futuristic';
    if (serviceVariant.includes('api')) return 'quantum-advanced';
    if (serviceVariant.includes('integration')) return 'quantum-advanced';
    if (serviceVariant.includes('analytics')) return 'neural';
    return 'default';};

  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

  // Combine all 2026 services including new ones
  const _all2026Services = [
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
    ...innovative2026AIServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3
  ];

  // Enhanced categories for 2026
  const _categories = [
    {_id: 'all', _name: 'All 2026 Services', _icon: '🚀', _count: all2026Services.length},
    {_id: 'ai', _name: 'AI & Machine Learning', _icon: '🧠', _count: all2026Services.filter(s => s.category.includes('AI')).length},
    {_id: 'quantum', _name: 'Quantum & Emerging Tech', _icon: '⚛️', _count: all2026Services.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length},
    {_id: 'enterprise', _name: 'Enterprise IT', _icon: '🏢', _count: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length},
    {_id: 'micro-saas', _name: 'Micro SaaS', _icon: '💻', _count: all2026Services.filter(s => s.category.includes('SaaS')).length},
    {_id: 'healthcare', _name: 'Healthcare & Biotech', _icon: '🏥', _count: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length},
    {_id: 'financial', _name: 'Financial Technology', _icon: '💰', _count: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length},
    {_id: 'manufacturing', _name: 'Manufacturing & IoT', _icon: '🏭', _count: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length}
  ];

  const _priceRanges = [
    {_id: 'all', _name: 'All Prices', _range: 'All'},
    {_id: 'low', _name: 'Under $1K/month', _range: 'Under $1K'},
    {_id: 'medium', _name: '$1K - $5K/month', _range: '$1K - $5K'},
    {_id: 'high', _name: '$5K - $20K/month', _range: '$5K - $20K'},
    {_id: 'premium', _name: '$20K+/month', _range: '$20K+'}
  ];

  const _sortOptions = [
    {_id: 'name', _name: 'Name A-Z'},
    {_id: 'price-low', _name: 'Price Low to High'},
    {_id: 'price-high', _name: 'Price High to Low'},
    {_id: 'popularity', _name: 'Most Popular'},
    {_id: 'newest', _name: 'Newest First'},
    {_id: 'rating', _name: 'Highest Rated'}
  ];

  // Filter and sort services
  const _filteredServices = useMemo__(() => {_let _filtered = all2026Services;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );}

    // Category filter
    if (selectedCategory !== 'all') {_if (selectedCategory === 'ai') {
        filtered = filtered.filter(service => service.category.includes('AI'));} else if (selectedCategory === 'quantum') {_filtered = filtered.filter(service => service.category.includes('Quantum') || service.category.includes('Emerging'));} else if (selectedCategory === 'enterprise') {_filtered = filtered.filter(service => service.category.includes('Enterprise') || service.category.includes('IT'));} else if (selectedCategory === 'micro-saas') {_filtered = filtered.filter(service => service.category.includes('SaaS'));} else if (selectedCategory === 'healthcare') {_filtered = filtered.filter(service => service.category.includes('Healthcare') || service.category.includes('Biotech'));} else if (selectedCategory === 'financial') {_filtered = filtered.filter(service => service.category.includes('Financial') || service.category.includes('Trading'));} else if (selectedCategory === 'manufacturing') {_filtered = filtered.filter(service => service.category.includes('Manufacturing') || service.category.includes('IoT'));}
    }

    // Price filter
    if (selectedPriceRange !== 'all') {_filtered = filtered.filter(service => {
        const _price = parseInt(service.price.replace(/[^0-9]/g, _''));
        if (selectedPriceRange === 'low') return price < 1000;
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000;
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000;
        if (selectedPriceRange === 'premium') return price >= 20000;
        return true;});
    }

    // Sort services
    filtered.sort(_(a, _b) => {_switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace(/[^0-9]/g, _'')) - parseInt(b.price.replace(/[^0-9]/g, _''));
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, _'')) - parseInt(a.price.replace(/[^0-9]/g, _''));
        case 'popularity':
          return (b.rating * b.reviews) - (a.rating * a.reviews);
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);}
    });

    return filtered;
  }, [all2026Services, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  // Service statistics
  const _serviceStats = {_totalServices: all2026Services.length, _aiServices: all2026Services.filter(s => s.category.includes('AI')).length, _quantumServices: all2026Services.filter(s => s.category.includes('Quantum')).length, _enterpriseServices: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length, _microSaasServices: all2026Services.filter(s => s.category.includes('SaaS')).length, _healthcareServices: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length, _financialServices: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length, _manufacturingServices: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length};

  return (
    <UltraFuturisticBackground variant="holographic" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Enhanced 2026 Services Showcase - Zion Tech Group</title>
          <meta name="description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services. Transform your business with cutting-edge technology." />
          <meta name="keywords" content="2026 services, micro SAAS, AI services, quantum computing, enterprise IT, blockchain, 5G networks, edge computing, zero trust security" />
          <link rel="icon" href="/favicon.svg" />
          
          {_/* Open Graph */}
          <meta property="og:title" content="Enhanced 2026 Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com/2026-services-showcase-enhanced" />
          <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
          
          {_/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Enhanced 2026 Services Showcase - Zion Tech Group" />
          <meta name="twitter:description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services." />
          <meta name="twitter:image" content="https://ziontechgroup.com/og-image.svg" />
        </Head>

        {_/* Enhanced Header Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30"></div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Enhanced 2026 Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive collection of innovative micro SAAS services, AI solutions, quantum computing, and enterprise IT services that will transform your business in 2026 and beyond.
              </p>
              
              {_/* Service Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {_Object.entries(serviceStats).map(_([key, _value]) => (
                  <motion.div
                    key={key}
                    initial={_{ opacity: 0, _scale: 0.8}}
                    animate={_{ opacity: 1, _scale: 1}}
                    transition={_{ duration: 0.5, _delay: key.length * 0.1}}
                    className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30"
                  >
                    <div className="text-3xl font-bold text-cyan-400">{_value}</div>
                    <div className="text-sm text-gray-400 capitalize">{_key.replace(/([A-Z])/g, _' $1').trim()}</div>
                  </motion.div>
                ))}
              </div>

              {_/* Contact Information */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Ready to Transform Your Business?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>{_contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>{_contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-center">{_contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {_/* Enhanced Search and Filters */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              {_/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or use cases..."
                  value={_searchTerm}
                  onChange={_(_e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {_/* Filters and Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {_/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={_selectedCategory}
                    onChange={_(_e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {_categories.map(_(category) => (
                      <option key={category.id} value={_category.id}>
                        {_category.name} ({_category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {_/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                  <select
                    value={_selectedPriceRange}
                    onChange={_(_e) => setSelectedPriceRange(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {_priceRanges.map(_(range) => (
                      <option key={range.id} value={_range.id}>
                        {_range.name}
                      </option>
                    ))}
                  </select>
                </div>

                {_/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={_sortBy}
                    onChange={_(_e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {_sortOptions.map(_(option) => (
                      <option key={option.id} value={_option.id}>
                        {_option.name}
                      </option>
                    ))}
                  </select>
                </div>

                {_/* View Mode Toggle */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">View Mode</label>
                  <div className="flex bg-gray-800/50 border border-gray-600/30 rounded-lg p-1">
                    <button
                      onClick={_() => setViewMode('grid')}
                      className={_`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      <Grid className="w-4 h-4 mx-auto" />
                    </button>
                    <button
                      onClick={_() => setViewMode('list')}
                      className={_`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      <List className="w-4 h-4 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>

              {_/* Results Count */}
              <div className="text-center">
                <p className="text-gray-400">
                  Showing <span className="text-cyan-400 font-semibold">{_filteredServices.length}</span> of{_' '}
                  <span className="text-cyan-400 font-semibold">{_all2026Services.length}</span> services
                </p>
              </div>
            </div>
          </div>
        </section>

        {_/* Enhanced Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {_filteredServices.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0}}
                  animate={_{ opacity: 1}}
                  exit={_{ opacity: 0}}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-semibold text-gray-300 mb-2">No services found</h3>
                  <p className="text-gray-400">Try adjusting your search criteria or filters</p>
                </motion.div>
              ) : (_<div className={_viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                  {_filteredServices.map((service, _index) => (
                    <motion.div
                      key={service.id}
                      initial={_{ opacity: 0, _y: 20}}
                      animate={_{ opacity: 1, _y: 0}}
                      exit={_{ opacity: 0, _y: -20}}
                      transition={_{ duration: 0.5, _delay: index * 0.1}}
                      className={_viewMode === 'grid' ? '' : 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30'}
                    >
                      <UltraFuturisticCard
                        variant={_mapServiceVariantToCardVariant(service.variant)}
                        className="h-full"
                      >
                        <div className="p-6">
                          {_/* Service Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="text-4xl">{_service.icon}</div>
                            {_service.popular && (
                              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                                Popular
                              </div>
                            )}
                          </div>

                          {_/* Service Title and Tagline */}
                          <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                          <p className="text-gray-300 text-sm mb-4">{_service.tagline}</p>

                          {_/* Price */}
                          <div className="mb-4">
                            <span className="text-3xl font-bold text-cyan-400">{_service.price}</span>
                            <span className="text-gray-400">{_service.period}</span>
                          </div>

                          {_/* Description */}
                          <p className="text-gray-300 text-sm mb-4 line-clamp-3">{_service.description}</p>

                          {_/* Key Features */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {_service.features.slice(0, _3).map(_(feature, _idx) => (
                                <li key={idx} className="flex items-center text-xs text-gray-400">
                                  <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                  {_feature}
                                </li>
                              ))}
                            </ul>
                            {_service.features.length > 3 && (
                              <p className="text-xs text-gray-500 mt-1">+{service.features.length - 3} more features</p>
                            )}
                          </div>

                          {_/* Service Stats */}
                          <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                            <div className="text-center">
                              <div className="text-cyan-400 font-semibold">{_service.rating}★</div>
                              <div className="text-gray-400">{_service.reviews} reviews</div>
                            </div>
                            <div className="text-center">
                              <div className="text-purple-400 font-semibold">{_service.customers}</div>
                              <div className="text-gray-400">customers</div>
                            </div>
                            <div className="text-center">
                              <div className="text-green-400 font-semibold">{_service.trialDays}d</div>
                              <div className="text-gray-400">trial</div>
                            </div>
                          </div>

                          {_/* Market Position */}
                          <div className="mb-4 p-3 bg-gray-800/30 rounded-lg">
                            <h4 className="text-xs font-semibold text-gray-200 mb-1">Market Position:</h4>
                            <p className="text-xs text-gray-400 line-clamp-2">{_service.marketPosition}</p>
                          </div>

                          {_/* ROI */}
                          <div className="mb-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                            <h4 className="text-xs font-semibold text-green-400 mb-1">ROI Promise:</h4>
                            <p className="text-xs text-green-300">{_service.roi}</p>
                          </div>

                          {_/* Action Buttons */}
                          <div className="flex space-x-2">
                            <Button
                              variant="primary"
                              size="sm"
                              className="flex-1"
                              onClick={_() => window.open(service.link, _'_blank')}
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={_() => window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${_service.name}`)}
                            >
                              Contact
                            </Button>
                          </div>
                        </div>
                      </UltraFuturisticCard>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {_/* Enhanced Footer CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our innovative services to gain competitive advantages and achieve remarkable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={_() => window.open(`mailto:${contactInfo.email}?subject=Business Transformation Consultation`, '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={_() => window.open(`tel:${contactInfo.mobile}`, '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>Contact: {_contactInfo.mobile} | {_contactInfo.email}</p>
                <p>{_contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
}