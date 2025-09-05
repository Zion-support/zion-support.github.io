import React, {_useState} from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';

export default function RevolutionaryServicesPage() {_const [selectedCategory, _setSelectedCategory] = useState('All');
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, _setPriceRange] = useState('All');
  const [searchQuery, _setSearchQuery] = useState('');
  const [sortBy, _setSortBy] = useState('name');
  const [showFilters, _setShowFilters] = useState(false);
  const [selectedService, _setSelectedService] = useState<any>(null);

  const _priceRanges = [
    { value: 'All', _label: 'All Prices'},
    {_value: '0-1000', _label: '$0 - $1, _000'},
    {_value: '1001-2500', _label: '$1, _001 - $2, _500'},
    {_value: '2501-5000', _label: '$2, _501 - $5, _000'},
    {_value: '5001+', _label: '$5, _001+'}
  ];

  const _sortOptions = [
    {_value: 'name', _label: 'Name A-Z'},
    {_value: 'price', _label: 'Price Low-High'},
    {_value: 'popularity', _label: 'Most Popular'},
    {_value: 'category', _label: 'Category'},
    {_value: 'roi', _label: 'Highest ROI'}
  ];

  // Filter and sort services
  let _filteredServices = revolutionaryMicroSaasServices;

  // Category filter
  if (selectedCategory !== 'All') {_filteredServices = getRevolutionaryServicesByCategory(selectedCategory);}

  // Price range filter
  if (priceRange !== 'All') {_const [min, _max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = getRevolutionaryServicesByPriceRange(min, _max);}

  // Search filter
  if (searchQuery) {_filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    );}

  // Sort services
  filteredServices.sort(_(a, _b) => {_switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', _'').replace(', _', _'')) - parseFloat(b.price.replace('$', _'').replace(', _', _''));
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':
        const _aRoi = parseFloat(a.roi.match(/\d+/)?.[0] || '0');
        const _bRoi = parseFloat(b.roi.match(/\d+/)?.[0] || '0');
        return bRoi - aRoi;
      default:
        return a.name.localeCompare(b.name);}
  });

  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

  const _popularServices = getPopularRevolutionaryServices();

  // Enhanced service categories with better descriptions
  const _enhancedCategories = [
    {_name: 'Quantum AI & Cognitive Computing', _description: 'Revolutionary quantum AI solutions with human-level reasoning capabilities', _icon: <Brain className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum AI & Cognitive Computing').length, _color: 'from-purple-500 to-indigo-600'},
    {_name: 'Autonomous Manufacturing & Industry 4.0', _description: 'Next-generation autonomous manufacturing with zero human intervention', _icon: <Factory className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Autonomous Manufacturing & Industry 4.0').length, _color: 'from-orange-500 to-red-600'},
    {_name: 'Quantum Blockchain & DeFi', _description: 'Quantum-secured blockchain platforms with infinite scalability', _icon: <Globe className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Blockchain & DeFi').length, _color: 'from-green-500 to-emerald-600'},
    {_name: 'AI Biomedical Research & Drug Discovery', _description: 'AI-powered platforms for accelerated drug discovery and medical research', _icon: <FlaskIcon className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'AI Biomedical Research & Drug Discovery').length, _color: 'from-blue-500 to-indigo-600'},
    {_name: 'Quantum Cybersecurity & Threat Detection', _description: 'Quantum-resistant cybersecurity with AI-powered threat detection', _icon: <ShieldCheck className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Cybersecurity & Threat Detection').length, _color: 'from-red-500 to-pink-600'},
    {_name: 'Space Technology & Satellite Optimization', _description: 'Revolutionary platforms for space exploration and satellite optimization', _icon: <Rocket className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Space Technology & Satellite Optimization').length, _color: 'from-indigo-500 to-purple-600'},
    {_name: 'AI Content Creation & Marketing', _description: 'Quantum-powered content creation at infinite scale', _icon: <FileText className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'AI Content Creation & Marketing').length, _color: 'from-teal-500 to-cyan-600'},
    {_name: 'Quantum Computing as a Service', _description: 'Enterprise quantum computing with real quantum processors', _icon: <Cpu className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Computing as a Service').length, _color: 'from-violet-500 to-purple-600'},
    {_name: 'Autonomous Vehicles & Smart Transportation', _description: 'AI platforms for autonomous vehicles and smart transportation', _icon: <CarIcon className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Autonomous Vehicles & Smart Transportation').length, _color: 'from-emerald-500 to-green-600'},
    {_name: 'Smart Energy & Renewable Energy', _description: 'AI platforms for smart energy grids and renewable energy optimization', _icon: <LeafIcon className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Smart Energy & Renewable Energy').length, _color: 'from-yellow-500 to-orange-600'}
  ];

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

  return (_<UltraFuturisticBackground variant="quantum" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Revolutionary Micro SaaS Services | Zion Tech Group - Quantum AI, _Autonomous Systems, _Space Technology</title>
          <meta name="description" content="Discover revolutionary micro SaaS services from Zion Tech Group. Quantum AI, _autonomous manufacturing, _space technology, _biomedical research, _and cutting-edge solutions. Start your free trial today." />
          <meta name="keywords" content="revolutionary micro SaaS, _quantum AI, _autonomous manufacturing, _space technology, _biomedical research, _quantum cybersecurity, _blockchain, _autonomous vehicles, _smart energy" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Revolutionary Micro SaaS Services | Zion Tech Group" />
          <meta property="og:description" content="Cutting-edge micro SaaS platform with quantum AI, _autonomous systems, _and revolutionary technology solutions." />
          <meta property="og:url" content="https://ziontechgroup.com/revolutionary-services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/revolutionary-services" />
        </Head>

        {_/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-8 futuristic-glow"
                initial={_{ opacity: 0, _y: 30}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8}}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="text-white">Micro SaaS Services</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.2}}
              >
                Experience the future of technology with our revolutionary micro SaaS platform. 
                Quantum AI, _autonomous systems, _space technology, _and cutting-edge solutions that redefine what's possible.
              </motion.p>
              
              {_/* Service Count Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.4}}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{_revolutionaryMicroSaasServices.length}+</div>
                  <div className="text-gray-400">Revolutionary Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.99%</div>
                  <div className="text-gray-400">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">21</div>
                  <div className="text-gray-400">Day Free Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">2000%+</div>
                  <div className="text-gray-400">Average ROI</div>
                </div>
              </motion.div>

              {_/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.6}}
              >
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={_() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth'})}
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="futuristic" 
                  size="lg"
                  onClick={_() => window.open('https://ziontechgroup.com/contact', _'_blank')}
                >
                  Get Started
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {_/* Contact Information Banner */}
        <section className="py-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-t border-b border-cyan-400/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">{_contactInfo.mobile}</span>
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-white">{_contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-white">{_contactInfo.address}</span>
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-white">{_contactInfo.website}</span>
              </div>
            </div>
          </div>
        </section>

        {_/* Category Navigation */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
            >
              {_enhancedCategories.map(_(category, _index) => (_<motion.div
                  key={category.name}
                  variants={_itemVariants}
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                >
                  <UltraFuturisticCard
                    variant="quantum-advanced"
                    size="small"
                    className="text-center cursor-pointer h-full"
                    onClick={_() => setSelectedCategory(category.name === selectedCategory ? 'All' : category.name)}
                  >
                    <div className={_`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                      {_category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{_category.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{_category.description}</p>
                    <div className="text-2xl font-bold text-cyan-400">{_category.count}</div>
                    <div className="text-xs text-gray-500">Services</div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {_/* Popular Services Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              viewport={_{ once: true}}
              transition={_{ duration: 0.6}}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Most Popular
                </span>
                <br />
                <span className="text-white">Revolutionary Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most sought-after revolutionary micro SaaS services that are transforming industries worldwide.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
            >
              {_popularServices.slice(0, _6).map(_(service, _index) => (_<motion.div
                  key={service.id}
                  variants={_itemVariants}
                  whileHover={_{ y: -10}}
                >
                  <UltraFuturisticCard
                    variant={_service.variant as any}
                    size="large"
                    className="h-full cursor-pointer"
                    onClick={_() => setSelectedService(service)}
                  >
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{_service.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{_service.name}</h3>
                      <p className="text-gray-300 mb-4">{_service.tagline}</p>
                      <div className="text-3xl font-bold text-cyan-400 mb-2">{_service.price}</div>
                      <div className="text-sm text-gray-400">{_service.period}</div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {_service.features.slice(0, _4).map(_(feature, _idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{_feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                                                 <Button 
                             variant="primary" 
                             size="md"
                             onClick={_() => window.open(service.link, _'_blank')}
                             className="w-full"
                           >
                             Learn More
                             <ExternalLink className="ml-2 w-4 h-4" />
                           </Button>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {_/* Services Grid */}
        <section id="services-grid" className="py-16">
          <div className="container mx-auto px-4">
            {_/* Filters and Controls */}
            <motion.div 
              className="mb-8"
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              viewport={_{ once: true}}
              transition={_{ duration: 0.6}}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="flex flex-wrap gap-4">
                  <select
                    value={_selectedCategory}
                    onChange={_(_e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="All">All Categories</option>
                    {_revolutionaryServiceCategories.map(category => (
                      <option key={category} value={_category}>{_category}</option>
                    ))}
                  </select>
                  
                  <select
                    value={_priceRange}
                    onChange={_(_e) => setPriceRange(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-purple-400"
                  >
                    {_priceRanges.map(range => (
                      <option key={range.value} value={_range.value}>{_range.label}</option>
                    ))}
                  </select>
                  
                  <select
                    value={_sortBy}
                    onChange={_(_e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-green-400/30 rounded-lg text-white focus:outline-none focus:border-green-400"
                  >
                    {_sortOptions.map(option => (
                      <option key={option.value} value={_option.value}>{_option.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={_searchQuery}
                      onChange={_(_e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 w-64"
                    />
                  </div>
                  
                  <div className="flex border border-gray-600 rounded-lg overflow-hidden">
                    <button
                      onClick={_() => setViewMode('grid')}
                      className={_`px-3 py-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={_() => setViewMode('list')}
                      className={_`px-3 py-2 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {_/* Services Display */}
            <motion.div 
              className={_viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"}
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
            >
              {_filteredServices.map(_(service, _index) => (_<motion.div
                  key={service.id}
                  variants={_itemVariants}
                  whileHover={_{ y: -5}}
                >
                  <UltraFuturisticCard
                    variant={_service.variant as any}
                    size={_viewMode === 'grid' ? 'large' : 'medium'}
                    className={_`h-full cursor-pointer ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
                    onClick={_() => setSelectedService(service)}
                  >
                    {_viewMode === 'grid' ? (
                      // Grid View
                      <div className="text-center">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                        <p className="text-gray-300 mb-4 text-sm">{_service.tagline}</p>
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{_service.price}</div>
                        <div className="text-sm text-gray-400 mb-4">{_service.period}</div>
                        
                        <div className="space-y-2 mb-6">
                          {_service.features.slice(0, _3).map(_(feature, _idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300">{_feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="text-center">
                          <Button 
                            variant="primary" 
                            size="sm"
                            onClick={_() => window.open(service.link, _'_blank')}
                            className="w-full"
                          >
                            Learn More
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      // List View
                      <div className="flex flex-col md:flex-row gap-6 w-full">
                        <div className="text-4xl md:text-5xl flex-shrink-0">{_service.icon}</div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                              <p className="text-gray-300 text-sm">{_service.tagline}</p>
                            </div>
                            <div className="text-right mt-2 md:mt-0">
                              <div className="text-2xl font-bold text-cyan-400">{_service.price}</div>
                              <div className="text-sm text-gray-400">{_service.period}</div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                              <div className="space-y-1">
                                {_service.features.slice(0, _4).map(_(feature, _idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                    <span className="text-gray-300">{_feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-purple-400 mb-2">Market Info</h4>
                              <div className="space-y-1 text-sm text-gray-300">
                                <div><span className="text-gray-400">ROI:</span> {_service.roi}</div>
                                <div><span className="text-gray-400">Market:</span> {_service.marketSize}</div>
                                <div><span className="text-gray-400">Growth:</span> {_service.growthRate}</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                                                         <Button 
                               variant="primary" 
                               size="sm"
                               onClick={_() => window.open(service.link, _'_blank')}
                             >
                               Learn More
                               <ExternalLink className="ml-2 w-4 h-4" />
                             </Button>
                             <Button 
                               variant="futuristic" 
                               size="sm"
                               onClick={_() => setSelectedService(service)}
                             >
                               View Details
                               <Eye className="ml-2 w-4 h-4" />
                             </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>

            {_filteredServices.length === 0 && (_<motion.div 
                className="text-center py-16"
                initial={{ opacity: 0}}
                animate={_{ opacity: 1}}
                transition={_{ duration: 0.6}}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters.</p>
                                         <Button 
                           variant="primary"
                           onClick={_() => {
                             setSearchQuery('');
                             setSelectedCategory('All');
                             setPriceRange('All');}}
                         >
                           Clear Filters
                         </Button>
              </motion.div>
            )}
          </div>
        </section>

        {_/* Service Details Modal */}
        <AnimatePresence>
          {_selectedService && (_<motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0}}
              animate={_{ opacity: 1}}
              exit={_{ opacity: 0}}
              onClick={_() => setSelectedService(null)}
            >
              <motion.div
                className="bg-slate-900 rounded-2xl border border-cyan-400/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={_{ scale: 0.9, _opacity: 0}}
                animate={_{ scale: 1, _opacity: 1}}
                exit={_{ scale: 0.9, _opacity: 0}}
                onClick={_(_e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{_selectedService.icon}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{_selectedService.name}</h2>
                        <p className="text-xl text-gray-300">{_selectedService.tagline}</p>
                      </div>
                    </div>
                    <button
                      onClick={_() => setSelectedService(null)}
                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Service Details</h3>
                      <p className="text-gray-300 mb-6">{_selectedService.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-purple-400 mb-2">Pricing</h4>
                          <div className="text-2xl font-bold text-white">{_selectedService.price}{_selectedService.period}</div>
                          <div className="text-sm text-gray-400">{_selectedService.marketPrice}</div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-green-400 mb-2">ROI & Market</h4>
                          <div className="text-sm text-gray-300 space-y-1">
                            <div><span className="text-gray-400">ROI:</span> {_selectedService.roi}</div>
                            <div><span className="text-gray-400">Market Size:</span> {_selectedService.marketSize}</div>
                            <div><span className="text-gray-400">Growth Rate:</span> {_selectedService.growthRate}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Features & Capabilities</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features</h4>
                          <div className="space-y-2">
                            {_selectedService.features.map(_(feature, _idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                <span className="text-gray-300">{_feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits</h4>
                          <div className="space-y-2">
                            {_selectedService.benefits.map(_(benefit, _idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                                <span className="text-gray-300">{_benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Capabilities</h4>
                          <div className="space-y-2">
                            {_selectedService.capabilities.map(_(capability, _idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Zap className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                                <span className="text-gray-300">{_capability}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                      <div className="text-sm text-gray-400">
                        <div>Setup Time: {_selectedService.setupTime}</div>
                        <div>Trial: {_selectedService.trialDays} days</div>
                      </div>
                      
                      <div className="flex gap-4">
                                                 <Button 
                           variant="primary"
                           onClick={_() => window.open(selectedService.link, _'_blank')}
                         >
                           Visit Service
                           <ExternalLink className="ml-2 w-4 h-4" />
                         </Button>
                         <Button 
                           variant="futuristic"
                           onClick={_() => window.open('https://ziontechgroup.com/contact', _'_blank')}
                         >
                           Contact Sales
                           <Mail className="ml-2 w-4 h-4" />
                         </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {_/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              viewport={_{ once: true}}
              transition={_{ duration: 0.8}}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already transforming their business with our revolutionary micro SaaS services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                                 <Button 
                   variant="primary" 
                   size="lg"
                   onClick={_() => window.open('https://ziontechgroup.com/contact', _'_blank')}
                 >
                   Start Free Trial
                   <Rocket className="ml-2 w-5 h-5" />
                 </Button>
                 <Button 
                   variant="futuristic" 
                   size="lg"
                   onClick={_() => window.open('https://ziontechgroup.com/contact', _'_blank')}
                 >
                   Schedule Demo
                   <Calendar className="ml-2 w-5 h-5" />
                 </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{_contactInfo.mobile}</div>
                  <div className="text-gray-400 text-sm">Call us anytime</div>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{_contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email us 24/7</div>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{_contactInfo.address}</div>
                  <div className="text-gray-400 text-sm">Visit our office</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
}