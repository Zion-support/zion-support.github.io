import React, {_useState} from 'react';
import Head from 'next/head';
import {_Search, _Star, _Users, _TrendingUp, _DollarSign, _Clock, _CheckCircle, _ArrowRight, _Rocket, _Monitor, _Cpu, _Zap, _Database, _Cloud, _Lock, _Code, _Sparkles, _Target, _Award, _Lightbulb} from 'lucide-react';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';

export default function EnhancedServicesShowcase2025() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, _setSelectedPriceRange] = useState<string>('all');
  const [sortBy, _setSortBy] = useState<string>('name');

  const _allServices = [
    ...innovative2025Services, _...emergingTech2025Services
  ];

  // Dynamic category counts
  const _aiCount = allServices.filter(service => service.category.includes('AI')).length;
  const _quantumCount = allServices.filter(service => service.category.includes('Quantum')).length;
  const _blockchainCount = allServices.filter(service => service.category.includes('Blockchain')).length;
  const _iotCount = allServices.filter(service => service.category.includes('IoT')).length;
  const _spaceCount = allServices.filter(service => service.category.includes('Space')).length;
  const _cybersecurityCount = allServices.filter(service => service.category.includes('Security') || service.category.includes('Cybersecurity')).length;

  const _categories = [
    { id: 'all', _name: 'All Services', _icon: '🚀', _count: allServices.length},
    {_id: 'ai', _name: 'AI & Machine Learning', _icon: '🧠', _count: aiCount},
    {_id: 'quantum', _name: 'Quantum Computing', _icon: '⚛️', _count: quantumCount},
    {_id: 'blockchain', _name: 'Blockchain & Web3', _icon: '⛓️', _count: blockchainCount},
    {_id: 'iot', _name: 'IoT & Edge Computing', _icon: '🌐', _count: iotCount},
    {_id: 'space', _name: 'Space Technology', _icon: '🚀', _count: spaceCount},
    {_id: 'security', _name: 'Cybersecurity', _icon: '🔒', _count: cybersecurityCount}
  ];

  const _priceRanges = [
    {_id: 'all', _name: 'All Prices', _range: 'All'},
    {_id: 'low', _name: 'Under $2K/month', _range: 'Under $2K'},
    {_id: 'medium', _name: '$2K - $8K/month', _range: '$2K - $8K'},
    {_id: 'high', _name: '$8K - $20K/month', _range: '$8K - $20K'},
    {_id: 'premium', _name: '$20K+/month', _range: '$20K+'}
  ];

  const _sortOptions = [
    {_id: 'name', _name: 'Name A-Z'},
    {_id: 'price-low', _name: 'Price Low to High'},
    {_id: 'price-high', _name: 'Price High to Low'},
    {_id: 'rating', _name: 'Rating'},
    {_id: 'customers', _name: 'Customer Count'}
  ];

  // Filter and sort services
  const _filteredServices = React.useMemo__(() => {_const _parsePriceToNumber = (price: string | number): number => {
      if (typeof price === 'number') return price;
      if (typeof price === 'string') {
        const _match = price.replace(/[^0-9.]/g, _'');
        const _parsed = parseFloat(match || '0');
        return isNaN(parsed) ? 0 : parsed;}
      return 0;
    };

    let _filtered = allServices.filter(service => {_const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const _matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && service.category.includes('AI')) ||
                             (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||
                             (selectedCategory === 'blockchain' && service.category.includes('Blockchain')) ||
                             (selectedCategory === 'iot' && service.category.includes('IoT')) ||
                             (selectedCategory === 'space' && service.category.includes('Space')) ||
                             (selectedCategory === 'security' && (service.category.includes('Security') || service.category.includes('Cybersecurity')));

      const _matchesPrice = selectedPriceRange === 'all' || 
                          (selectedPriceRange === 'low' && parsePriceToNumber(service.price) < 2000) ||
                          (selectedPriceRange === 'medium' && parsePriceToNumber(service.price) >= 2000 && parsePriceToNumber(service.price) < 8000) ||
                          (selectedPriceRange === 'high' && parsePriceToNumber(service.price) >= 8000 && parsePriceToNumber(service.price) < 20000) ||
                          (selectedPriceRange === 'premium' && parsePriceToNumber(service.price) >= 20000);

      return matchesSearch && matchesCategory && matchesPrice;});

    // Sort services
    switch (sortBy) {_case 'price-low':
        filtered.sort(_(a, _b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price));
        break;
      case 'price-high':
        filtered.sort(_(a, _b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price));
        break;
      case 'rating':
        filtered.sort(_(a, _b) => b.rating - a.rating);
        break;
      case 'customers':
        filtered.sort(_(a, _b) => b.customers - a.customers);
        break;
      default:
        filtered.sort(_(a, _b) => a.name.localeCompare(b.name));}

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, allServices]);

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

  return (_<EnhancedFuturisticBackground 
      intensity="high" 
      colorScheme="quantum"
      particleCount={_300}
      animationSpeed={_1.5}
    >
      <div className="min-h-screen">
        <Head>
          <title>2025 Innovative Services Showcase - Zion Tech Group | Revolutionary AI, _Quantum & Emerging Tech</title>
          <meta name="description" content="Explore Zion Tech Group's revolutionary 2025 services: AI platforms, _quantum computing, _blockchain infrastructure, _IoT solutions, _and cutting-edge emerging technologies. Contact: +1 302 464 0950" />
          <meta name="keywords" content="AI services 2025, _quantum computing, _blockchain, _IoT, _edge computing, _5G, _cybersecurity, _metaverse, _space technology, _Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="2025 Innovative Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Revolutionary AI, _quantum computing, _and emerging technology services for 2025. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/enhanced-services-showcase-2025" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/enhanced-services-showcase-2025" />
        </Head>

        {_/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-12 h-12 text-cyan-400 mr-4" />
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  2025 Innovation Showcase
                </h1>
                <Sparkles className="w-12 h-12 text-pink-400 ml-4" />
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI, _Quantum Computing & Emerging Technology Services
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Discover our cutting-edge solutions that are transforming industries and driving the future of technology
              </p>
              
              {_/* Service Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-cyan-400">{_allServices.length}</div>
                  <div className="text-gray-400">Total Services</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-400">{_aiCount + quantumCount}</div>
                  <div className="text-gray-400">AI & Quantum</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-green-400">{_blockchainCount + iotCount}</div>
                  <div className="text-gray-400">Emerging Tech</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-pink-400">{_spaceCount + cybersecurityCount}</div>
                  <div className="text-gray-400">Specialized</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {_/* Search and Filters */}
        <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {_/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={_searchTerm}
                    onChange={_(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {_/* Category Filter */}
                <select
                  value={_selectedCategory}
                  onChange={_(_e) => setSelectedCategory(e.target.value)} className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  {_categories.map(_(category) => (
                    <option key={category.id} value={_category.id}>
                      {_category.name} ({_category.count})
                    </option>
                  ))}
                </select>

                {_/* Price Range Filter */}
                <select
                  value={_selectedPriceRange}
                  onChange={_(_e) => setSelectedPriceRange(e.target.value)} className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  {_priceRanges.map(_(range) => (
                    <option key={range.id} value={_range.id}>
                      {_range.name}
                    </option>
                  ))}
                </select>

                {_/* Sort Options */}
                <select
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value)} className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  {_sortOptions.map(_(option) => (
                    <option key={option.id} value={_option.id}>
                      {_option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {_/* Services Grid */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={_containerVariants}
              initial="hidden"
              animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {_filteredServices.map(_(service) => (
                  <motion.div
                    key={service.id}
                    variants={_itemVariants}
                    layout className="group relative bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
                    {_/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{_service.icon}</div>
                      {_service.popular && (
                        <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                          <Star className="w-4 h-4 fill-current" />
                          <span>Popular</span>
                        </div>
                      )}
                    </div>

                    {_/* Service Title and Description */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {_service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {_service.description}
                    </p>

                    {_/* Price and Customer Count */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {_service.price}<span className="text-gray-400 text-lg">{_service.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{_service.customers}</span>
                      </div>
                    </div>

                    {_/* Key Features */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                      <ul className="space-y-1">
                        {_service.features.slice(0, _3).map(_(feature, _index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{_feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {_/* Market Position */}
                    <div className="mb-6 p-3 bg-gray-700/40 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Market Position</div>
                      <div className="text-sm text-gray-300 line-clamp-2">
                        {_service.marketPosition}
                      </div>
                    </div>

                    {_/* ROI and Setup Time */}
                    <div className="flex items-center justify-between mb-6 text-sm">
                      <div className="flex items-center space-x-1 text-green-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>Average ROI</span>
                      </div>
                      <div className="flex items-center space-x-1 text-blue-400">
                        <Clock className="w-4 h-4" />
                        <span>{_service.setupTime}</span>
                      </div>
                    </div>

                    {_/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={_service.link} 
                        target="_blank" 
                        rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                      <a 
                        href="/contact" className="flex-1 bg-gray-700/60 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:bg-gray-600/60 transition-all duration-300 border border-gray-600 hover:border-gray-500">
                        Contact Us
                      </a>
                    </div>

                    {_/* Contact Information */}
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="text-xs text-gray-400 mb-2">Contact Information:</div>
                      <div className="text-xs text-gray-300 space-y-1">
                        <div>📱 {_service.contactInfo.mobile}</div>
                        <div>✉️ {_service.contactInfo.email}</div>
                        <div>🌐 {_service.contactInfo.website}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {_/* No Results Message */}
            {_filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0}}
                animate={_{ opacity: 1}} className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters</p>
              </motion.div>
            )}
          </div>
        </section>

        {_/* Call to Action */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies achieving breakthrough results with our revolutionary services
              </p>
              
              {_/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-lg text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-lg text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-lg text-white">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>

              {_/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" className="inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white shadow-lg hover:shadow-xl border border-blue-500/20 no-underline">
                  <span className="relative">Start Your Transformation</span>
                  <Rocket className="ml-2 w-6 h-6" />
                </a>
                <a 
                  href="/pricing" className="inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 text-white shadow-lg hover:shadow-xl border border-gray-500/20 no-underline">
                  <span className="relative">View Pricing</span>
                  <DollarSign className="ml-2 w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}