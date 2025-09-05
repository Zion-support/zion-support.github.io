import React, {_useState, _useMemo} from 'react';
import Head from 'next/head';



import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';

export default function Revolutionary2027ServicesShowcase() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, _setSelectedPriceRange] = useState<string>('all');
  const [sortBy, _setSortBy] = useState<string>('name');

  const _allServices = [
    ...revolutionary2027AIServices, _...revolutionary2027ITServices, _...revolutionary2027MicroSaasServices
  ];

  // Dynamic category counts
  const _aiCount = allServices.filter(service => service.category.includes('AI')).length;
  const _quantumCount = allServices.filter(service => service.category.includes('Quantum')).length;
  const _itCount = allServices.filter(service => service.category.includes('IT') || service.category.includes('Infrastructure')).length;
  const _microSaasCount = allServices.filter(service => service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health')).length;
  const _holographicCount = allServices.filter(service => service.category.includes('Holographic')).length;

  const _categories = [
    { id: 'all', _name: 'All Services', _icon: '🚀', _count: allServices.length},
    {_id: 'ai', _name: 'AI Services', _icon: '🧠', _count: aiCount},
    {_id: 'quantum', _name: 'Quantum Services', _icon: '⚛️', _count: quantumCount},
    {_id: 'it', _name: 'IT Infrastructure', _icon: '⚙️', _count: itCount},
    {_id: 'micro-saas', _name: 'Micro SaaS', _icon: '💻', _count: microSaasCount},
    {_id: 'holographic', _name: 'Holographic', _icon: '🎭', _count: holographicCount}
  ];

  const _priceRanges = [
    {_id: 'all', _name: 'All Prices', _range: 'All'},
    {_id: 'under-500', _name: 'Under $500', _range: 'Under $500'},
    {_id: '500-2000', _name: '$500 - $2, _000', _range: '$500 - $2, _000'},
    {_id: '2000-10000', _name: '$2, _000 - $10, _000', _range: '$2, _000 - $10, _000'},
    {_id: 'over-10000', _name: 'Over $10, _000', _range: 'Over $10, _000'}
  ];

  const _sortOptions = [
    {_id: 'name', _name: 'Name'},
    {_id: 'price', _name: 'Price'},
    {_id: 'rating', _name: 'Rating'},
    {_id: 'customers', _name: 'Customers'},
    {_id: 'launchDate', _name: 'Launch Date'}
  ];

  const _filteredServices = useMemo__(() => {_let _filtered = allServices;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai') return service.category.includes('AI');
        if (selectedCategory === 'quantum') return service.category.includes('Quantum');
        if (selectedCategory === 'it') return service.category.includes('IT') || service.category.includes('Infrastructure');
        if (selectedCategory === 'micro-saas') return service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health');
        if (selectedCategory === 'holographic') return service.category.includes('Holographic');
        return true;});
    }

    // Price range filter
    if (selectedPriceRange !== 'all') {_filtered = filtered.filter(service => {
        const _price = parseInt(service.price.replace(/[^0-9]/g, _''));
        if (selectedPriceRange === 'under-500') return price < 500;
        if (selectedPriceRange === '500-2000') return price >= 500 && price < 2000;
        if (selectedPriceRange === '2000-10000') return price >= 2000 && price < 10000;
        if (selectedPriceRange === 'over-10000') return price >= 10000;
        return true;});
    }

    // Search filter
    if (searchTerm) {_filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );}

    // Sort
    filtered.sort(_(a, _b) => {_switch (sortBy) {
        case 'price':
          return parseInt(a.price.replace(/[^0-9]/g, _'')) - parseInt(b.price.replace(/[^0-9]/g, _''));
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        case 'launchDate':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return a.name.localeCompare(b.name);}
    });

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

  return (_<UltraQuantumHolographicBackground intensity={_2.0}>
      <Head>
        <title>Revolutionary 2027 Services Showcase - Zion Tech Group | Next-Generation AI, _Quantum & Technology Solutions</title>
        <meta name="description" content="Discover the most revolutionary AI, _Quantum, _and Technology services of 2027. Cutting-edge solutions with proven ROI and real-world implementation." />
        <meta property="og:title" content="Revolutionary 2027 Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Explore the future of technology with our revolutionary 2027 services showcase." />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2027-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2027-services-showcase" />
      </Head>

      {_/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
              Revolutionary 2027
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Services Showcase
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our revolutionary AI, _Quantum Computing, _and Next-Generation IT services. 
              Each solution delivers measurable ROI and transforms industries.
            </p>
            
            {_/* Contact Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-center mb-8">
              <motion.div className="flex items-center gap-2 text-cyan-400"
                whileHover={_{ scale: 1.05}}
                transition={_{ type: "spring", _stiffness: 300}}
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{_contactInfo.mobile}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-purple-400"
                whileHover={_{ scale: 1.05}}
                transition={_{ type: "spring", _stiffness: 300}}
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{_contactInfo.email}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-green-400"
                whileHover={_{ scale: 1.05}}
                transition={_{ type: "spring", _stiffness: 300}}
              >
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-semibold">{_contactInfo.address}</span>
              </motion.div>
            </div>

            {_/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg px-8 py-4 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Search and Filters */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
            {_/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search revolutionary services..."
                value={_searchTerm}
                onChange={_(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {_/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {_/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={_selectedCategory}
                  onChange={_(_e) => setSelectedCategory(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
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
                  onChange={_(_e) => setSelectedPriceRange(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  {_priceRanges.map(_(range) => (
                    <option key={range.id} value={_range.id}>
                      {_range.name}
                    </option>
                  ))}
                </select>
              </div>

              {_/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  {_sortOptions.map(_(option) => (
                    <option key={option.id} value={_option.id}>
                      {_option.name}
                    </option>
                  ))}
                </select>
              </div>

              {_/* Results Count */}
              <div className="flex items-end">
                <div className="text-gray-300">
                  <span className="text-sm">Showing </span>
                  <span className="font-semibold text-cyan-400">{_filteredServices.length}</span>
                  <span className="text-sm"> of </span>
                  <span className="font-semibold text-purple-400">{_allServices.length}</span>
                  <span className="text-sm"> services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {_/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {_filteredServices.length > 0 ? (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, _index) => (
                  <motion.div
                    key={service.id}
                    initial={_{ opacity: 0, _y: 30}}
                    animate={_{ opacity: 1, _y: 0}}
                    exit={_{ opacity: 0, _y: -30}}
                    transition={_{ duration: 0.5, _delay: index * 0.1}}
                    whileHover={_{ y: -10, _scale: 1.02}} className="group">
                    <div className="h-full bg-black/40 backdrop-blur-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
                      {_/* Service Header */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{_service.icon}</div>
                          {_service.popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                              POPULAR
                            </div>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {_service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                          {_service.tagline}
                        </p>

                        {_/* Price */}
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-3xl font-bold text-white">{_service.price}</span>
                          <span className="text-gray-400">{_service.period}</span>
                        </div>

                        {_/* Description */}
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {_service.description}
                        </p>

                        {_/* Features */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {_service.features.slice(0, _3).map(_(feature, _idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                                <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                                <span className="line-clamp-1">{_feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {_/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-cyan-400">{_service.customers}</div>
                            <div className="text-xs text-gray-400">Customers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-purple-400">{_service.rating}</div>
                            <div className="text-xs text-gray-400">Rating</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-green-400">{_service.reviews}</div>
                            <div className="text-xs text-gray-400">Reviews</div>
                          </div>
                        </div>

                        {_/* Category Badge */}
                        <div className="mb-4">
                          <span className={_`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service.color} text-white`}>
                            {_service.category}
                          </span>
                        </div>

                        {_/* Action Buttons */}
                        <div className="flex gap-2">
                          <a 
                            href={_service.link} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 mr-1" />
                            Learn More
                          </a>
                          <a 
                            href="/contact" className="px-4 py-2 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-gray-500 transform hover:scale-105 transition-all duration-300">
                            <MessageSquare className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (_<motion.div
                initial={_{ opacity: 0}}
                animate={_{ opacity: 1}} className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
                <button 
                  onClick={_() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');}} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {_/* Contact CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}} className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary 2027 services. 
              Each solution is designed to deliver measurable ROI and competitive advantage.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{_contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{_contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-semibold">{_contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg px-8 py-4 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Transformation
              </a>
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                Explore All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraQuantumHolographicBackground>
  );
}