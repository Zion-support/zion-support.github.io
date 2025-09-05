import React, {_useState, _useMemo} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_Search, _Star, _DollarSign, _CheckCircle, _ArrowRight, _Rocket, _Phone, _Mail, _MapPin, _Grid, _List, _ChevronDown, _Sparkles} from 'lucide-react';

export default function Ultimate2026ServicesShowcase() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, _setSelectedPriceRange] = useState<string>('all');
  const [sortBy, _setSortBy] = useState<string>('name');
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');

  const _contactInfo = {
    mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

  // Combine all services
  const _allServices = [
    ...ultimate2026Services,
    ...revolutionary2026Innovations
  ];

  // Dynamic category counts
  const _aiCount = allServices.filter(service =>
    service.category?.includes('AI') || service.category?.includes('Machine Learning')
  ).length;
  const _quantumCount = allServices.filter(service =>
    service.category?.includes('Quantum') || service.category?.includes('Space')
  ).length;
  const _enterpriseCount = allServices.filter(service =>
    service.category?.includes('Enterprise') || service.category?.includes('IT')
  ).length;
  const _emergingCount = allServices.filter(service =>
    service.category?.includes('Emerging') || service.category?.includes('Innovation')
  ).length;

  const _categories = [
    {_id: 'all', _name: 'All Services', _icon: '🚀', _count: allServices.length},
    {_id: 'ai', _name: 'AI & Machine Learning', _icon: '🧠', _count: aiCount},
    {_id: 'quantum', _name: 'Quantum & Space', _icon: '⚛️', _count: quantumCount},
    {_id: 'enterprise', _name: 'Enterprise IT', _icon: '🏢', _count: enterpriseCount},
    {_id: 'emerging', _name: 'Emerging Tech', _icon: '✨', _count: emergingCount}
  ];

  const _priceRanges = [
    {_id: 'all', _name: 'All Prices', _range: 'All'},
    {_id: 'low', _name: 'Under $1K/month', _range: 'Under $1K'},
    {_id: 'medium', _name: '$1K - $5K/month', _range: '$1K - $5K'},
    {_id: 'high', _name: '$5K - $20K/month', _range: '$5K - $20K'},
    {_id: 'enterprise', _name: 'Custom pricing', _range: 'Custom'}
  ];

  // Filter and sort services
  const _filteredServices = useMemo__(() => {_let _filtered = allServices.filter(service => {
      const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());

      const _matchesCategory = selectedCategory === 'all' ||
        (selectedCategory === 'ai' && service.category.includes('AI')) ||
        (selectedCategory === 'quantum' && (service.category.includes('Quantum') || service.category.includes('Space'))) ||
        (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('IT'))) ||
        (selectedCategory === 'emerging' && (service.category.includes('Emerging') || service.category.includes('Innovation')));

      const _matchesPrice = selectedPriceRange === 'all' ||
        (selectedPriceRange === 'low' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, _'')) < 1000) ||
        (selectedPriceRange === 'medium' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, _'')) >= 1000 && parseInt(service.price.replace(/[^0-9]/g, _'')) <= 5000) ||
        (selectedPriceRange === 'high' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, _'')) > 5000) ||
        (selectedPriceRange === 'enterprise' && service.price === 'Custom pricing');

      return matchesSearch && matchesCategory && matchesPrice;});

    // Sort services
    switch (sortBy) {_case 'name':
        filtered.sort(_(a, _b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        filtered.sort(_(a, _b) => {
          const _priceA = a.price === 'Custom pricing' ? 999999 : parseInt(a.price.replace(/[^0-9]/g, _''));
          const _priceB = b.price === 'Custom pricing' ? 999999 : parseInt(b.price.replace(/[^0-9]/g, _''));
          return priceA - priceB;});
        break;
      case 'popularity':
        filtered.sort(_(a, _b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort(_(a, _b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const _featuredServices = allServices.filter(service => service.popular).slice(0, 6);

  return (
    <>
      <Head>
        <title>Ultimate 2026 Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary 2026 innovations including AI consciousness simulation, quantum neural interfaces, autonomous AI agents, and cutting-edge enterprise solutions. Transform your business with next-generation technology." />
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous AI, metaverse development, space technology, edge computing, 5G networks, cybersecurity, healthcare AI, climate prediction" />
        <meta property="og:title" content="Ultimate 2026 Services Showcase | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary 2026 innovations that will transform your business. AI, quantum computing, and emerging technologies." />
        <meta property="og:url" content="https://ziontechgroup.com/ultimate-2026-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ultimate-2026-services-showcase" />
      </Head>

      {_/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {_/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ultimate 2026
              <br />
              <span className="text-6xl md:text-8xl">Innovations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover revolutionary AI consciousness simulation, quantum neural interfaces, autonomous AI agents,
              and cutting-edge enterprise solutions that will transform your business in 2026 and beyond.
            </p>

            {_/* Service Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{_allServices.length}+</div>
                <div className="text-gray-400">Revolutionary Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{_aiCount}+</div>
                <div className="text-gray-400">AI Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">{_quantumCount}+</div>
                <div className="text-gray-400">Quantum Tech</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{_enterpriseCount}+</div>
                <div className="text-gray-400">Enterprise Solutions</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>

        {_/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>

      {_/* Contact Bar */}
      <section className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">{_contactInfo.mobile}</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">{_contactInfo.email}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{_contactInfo.address}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-semibold">Ready to Transform Your Business?</span>
            <Link href="/contact" className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {_/* Featured Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Revolutionary Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our most popular and innovative 2026 services that are transforming industries worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_featuredServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}} className="group relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{_service.icon}</div>
                      {_service.popular && (
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {_service.name}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {_service.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {_service.price}
                        <span className="text-sm text-gray-400">{_service.period}</span>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm text-gray-400">{_service.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {_service.customers.toLocaleString()} customers
                      </div>
                      <Link
                        href={_service.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-200">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Revolutionary Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our complete portfolio of cutting-edge 2026 innovations
            </p>
          </motion.div>

          {_/* Filters and Search */}
          <div className="mb-12 space-y-6">
            {_/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search revolutionary services..."
                value={_searchTerm}
                onChange={_(_e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            {_/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {_/* Category Filter */}
              <div className="relative">
                <select
                  value={_selectedCategory}
                  onChange={_(_e) => setSelectedCategory(e.target.value)} className="appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all">
                  {_categories.map(_(category) => (
                    <option key={category.id} value={_category.id}>
                      {_category.name} ({_category.count})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {_/* Price Filter */}
              <div className="relative">
                <select
                  value={_selectedPriceRange}
                  onChange={_(_e) => setSelectedPriceRange(e.target.value)} className="appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all">
                  {_priceRanges.map(_(range) => (
                    <option key={range.id} value={_range.id}>
                      {_range.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {_/* Sort */}
              <div className="relative">
                <select
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value)} className="appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all">
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="popularity">Sort by Popularity</option>
                  <option value="rating">Sort by Rating</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {_/* View Mode */}
              <div className="flex bg-gray-800 border border-gray-700 rounded-lg p-1">
                <button
                  onClick={_() => setViewMode('grid')}
                  className={_`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={_() => setViewMode('list')}
                  className={_`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {_/* Services Grid/List */}
          <div className={_viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {_filteredServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.05}}
                className={_viewMode === 'grid' ? 'group relative' : 'group relative bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300'}
              >
                {_viewMode === 'grid' ? (
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        {_service.popular && (
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {_service.name}
                      </h3>

                      <p className="text-gray-400 mb-4 line-clamp-3">
                        {_service.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-cyan-400">
                          {_service.price}
                          <span className="text-sm text-gray-400">{_service.period}</span>
                        </div>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm text-gray-400">{_service.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          {_service.customers.toLocaleString()} customers
                        </div>
                        <Link
                          href={_service.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-200">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-6">
                    <div className="text-4xl">{_service.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {_service.name}
                        </h3>
                        {_service.popular && (
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </div>
                        )}
                      </div>
                      <p className="text-gray-400 mb-3">{_service.description}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <span>Category: {_service.category}</span>
                        <span>{_service.customers.toLocaleString()} customers</span>
                        <span>Rating: {_service.rating}/5</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {_service.price}
                        <span className="text-sm text-gray-400">{_service.period}</span>
                      </div>
                      <Link
                        href={_service.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-200">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {_filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0}}
              animate={_{ opacity: 1}} className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </motion.div>
          )}
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with 2026 Innovations?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of forward-thinking companies already leveraging our revolutionary AI, quantum computing,
              and emerging technology solutions to gain competitive advantages and drive unprecedented growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link href="/pricing" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300">
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500%+</div>
                <div className="text-white/80">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/80">Uptime Guarantee</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Footer Contact */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Build the Future Together
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Our team of experts is ready to help you implement these revolutionary 2026 innovations
                and transform your business operations with cutting-edge technology.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{_contactInfo.mobile}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{_contactInfo.email}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{_contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-semibold mb-1">First-to-Market Innovations</h5>
                    <p className="text-gray-400">Access cutting-edge technology before your competitors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-semibold mb-1">Proven ROI</h5>
                    <p className="text-gray-400">Average customers see 300-500% return on investment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-semibold mb-1">Expert Implementation</h5>
                    <p className="text-gray-400">Full-service deployment and ongoing support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-semibold mb-1">Future-Proof Technology</h5>
                    <p className="text-gray-400">Built for the challenges and opportunities of tomorrow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}