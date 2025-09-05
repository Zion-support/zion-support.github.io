import React, {_useState} from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import {_Brain, _Rocket, _Shield, _Zap, _Target, _Atom, _Globe, _Cpu, _Lock, _Cloud, _Settings, _Eye, _Award, _Clock, _Star, _TrendingUp, _Users, _Building, _Lightbulb, _ArrowRight, _Filter, _Search, _Grid, _List, _Phone, _Mail, _MapPin} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _categories = [
  'All Services',
  'AI & Data',
  'Quantum Technology',
  'Space Technology',
  'IT Infrastructure',
  'Cybersecurity',
  'Edge Computing',
  'Blockchain',
  'Manufacturing',
  'Healthcare AI',
  'Emerging Technology',
  'Biotechnology',
  'Human-Computer Interaction',
  'Metaverse',
  'Autonomous Systems',
  'Climate Technology'
];

const categoryIcons: {_[key: string]: React.ReactNode} = {_'AI & Data': <Brain className="w-5 h-5" />, _'Quantum Technology': <Atom className="w-5 h-5" />, _'Space Technology': <Rocket className="w-5 h-5" />, _'IT Infrastructure': <Cpu className="w-5 h-5" />, _'Cybersecurity': <Shield className="w-5 h-5" />, _'Edge Computing': <Zap className="w-5 h-5" />, _'Blockchain': <Globe className="w-5 h-5" />, _'Manufacturing': <Building className="w-5 h-5" />, _'Healthcare AI': <Eye className="w-5 h-5" />, _'Emerging Technology': <Lightbulb className="w-5 h-5" />, _'Biotechnology': <Target className="w-5 h-5" />, _'Human-Computer Interaction': <Users className="w-5 h-5" />, _'Metaverse': <Globe className="w-5 h-5" />, _'Autonomous Systems': <Rocket className="w-5 h-5" />, _'Climate Technology': <Globe className="w-5 h-5" />};

export default function InnovativeServicesShowcase2036() {_const [selectedCategory, _setSelectedCategory] = useState('All Services');
  const [searchTerm, _setSearchTerm] = useState('');
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, _setSortBy] = useState<'name' | 'price' | 'rating' | 'marketSize'>('name');

  const _allServices = [...real2036InnovativeServices, _...real2036SpecializedServices];

  const _filteredServices = allServices.filter(service => {
    const _matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;});

  const _sortedServices = [...filteredServices].sort(_(a, _b) => {_switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', _'').replace(', _', _'')) - parseFloat(b.price.replace('$', _'').replace(', _', _''));
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'marketSize':
        return parseFloat(b.marketSize?.replace('$', _'').replace('B', _'') || '0') - parseFloat(a.marketSize?.replace('$', _'').replace('B', _'') || '0');
      default:
        return a.name.localeCompare(b.name);}
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

  return (
    <Layout>
      <SEO 
        title="2036 Innovative Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2036 innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with next-generation technology."
        keywords="2036 services, innovative micro SAAS, AI platforms, quantum technology, space technology, IT solutions, Zion Tech Group"
      />
      
      {_/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {_/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        </div>
        
        {_/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {_[...Array(20)].map(_(_, _i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={_{
                left: `${Math.random() * 100}%`,
                top: `${_Math.random() * 100}%`}}
              animate={_{
                y: [0, _-100, _0], _opacity: [0.3, _1, _0.3]}}
              transition={_{
                duration: 3 + Math.random() * 2, _repeat: Infinity, _delay: Math.random() * 2}}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            2036 Innovative Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
          >
            Experience the future of technology with our cutting-edge micro SAAS services, 
            AI platforms, and quantum solutions. Transform your business with next-generation innovation.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.4}}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              Explore Services
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {_/* Contact Information */}
      <section className="py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            viewport={_{ once: true}}
          >
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <Phone className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">{_contactInfo.mobile}</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <Mail className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">{_contactInfo.email}</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300">{_contactInfo.address}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {_/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of innovative micro SAAS services, 
              AI platforms, and cutting-edge technology solutions designed for the future.
            </p>
          </motion.div>

          {_/* Filters and Controls */}
          <motion.div 
            className="mb-12 space-y-6"
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            viewport={_{ once: true}}
          >
            {_/* Search and View Controls */}
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={_searchTerm}
                  onChange={_(_e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                />
              </div>
              
              <div className="flex gap-4 items-center">
                <select
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="marketSize">Sort by Market Size</option>
                </select>
                
                <div className="flex bg-gray-800/50 border border-gray-700 rounded-lg p-1">
                  <button
                    onClick={_() => setViewMode('grid')}
                    className={_`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={_() => setViewMode('list')}
                    className={_`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {_/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {_categories.map(_(category) => (_<button
                  key={category}
                  onClick={_() => setSelectedCategory(category)}
                  className={_`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-black border-cyan-500'
                      : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-cyan-400 hover:text-cyan-400'}`}
                >
                  {_categoryIcons[category] || <Star className="w-4 h-4" />}
                  {_category}
                </button>
              ))}
            </div>
          </motion.div>

          {_/* Services Grid */}
          <motion.div
            variants={_containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={_{ once: true}}
            className={_viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {_sortedServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                variants={_itemVariants}
                className={_`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  viewMode === 'list' ? 'flex gap-6' : ''}`}
              >
                {_viewMode === 'list' && (
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
                      {categoryIcons[service.category] || <Star className="w-8 h-8" />}
                    </div>
                  </div>
                )}
                
                <div className="flex-1">
                  {_/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-semibold">{_service.price}</span>
                        {_service.period && <span className="text-gray-400 text-sm">{service.period}</span>}
                      </div>
                    </div>
                    <p className="text-cyan-400 font-medium mb-2">{_service.tagline}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{_service.description}</p>
                  </div>

                  {_/* Service Details */}
                  <div className="space-y-4">
                    {_/* Category and Rating */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gray-800 text-cyan-400 text-sm rounded-full border border-gray-700">
                        {_service.category}
                      </span>
                      {_service.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                      )}
                    </div>

                    {_/* Market Size */}
                    {_service.marketSize && (
                      <div className="text-sm text-gray-400">
                        Market Size: <span className="text-green-400 font-medium">{service.marketSize}</span>
                      </div>
                    )}

                    {_/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {_service.features.slice(0, _4).map(_(feature, _idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                            {_feature}
                          </div>
                        ))}
                        {_service.features.length > 4 && (
                          <div className="text-xs text-gray-500 mt-1">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {_/* Target Audience */}
                    {_service.targetAudience && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Target Audience:</h4>
                        <p className="text-sm text-gray-400">{service.targetAudience}</p>
                      </div>
                    )}

                    {_/* Competitive Advantage */}
                    {_service.competitiveAdvantage && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Competitive Advantage:</h4>
                        <p className="text-sm text-gray-400">{service.competitiveAdvantage}</p>
                      </div>
                    )}

                    {_/* CTA Button */}
                    <div className="mt-6">
                      <a
                        href={_service.link}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {_/* Results Summary */}
          <motion.div 
            className="mt-12 text-center text-gray-400"
            initial={_{ opacity: 0}}
            whileInView={_{ opacity: 1}}
            transition={_{ duration: 0.6}}
            viewport={_{ once: true}}
          >
            Showing {_sortedServices.length} of {_allServices.length} services
          </motion.div>
        </div>
      </section>

      {_/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            viewport={_{ once: true}}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our innovative services. 
              Contact us today to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={_`mailto:${contactInfo.email}`}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started Today
              </a>
              <a
                href={_`tel:${contactInfo.mobile}`}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
