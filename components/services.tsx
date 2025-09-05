import {_Search, _Filter, _Star, _Users, _TrendingUp, _DollarSign, _Clock, _CheckCircle, _ArrowRight, _Brain, _Rocket, _Dna, _Globe, _Shield, _Wifi, _Package, _Bot, _Car, _Building2, _Monitor, _Cpu, _Zap, _Atom, _Database, _Cloud, _Lock, _Code} from 'lucide-react';
import UltraAdvancedQuantumBackground from '../components/ui/UltraAdvancedQuantumBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import React, {_useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_Search, _Grid, _List, _Brain, _Atom, _Shield, _Target, _Rocket, _ArrowRight, _Check, _Palette, _Heart, _Truck, _GraduationCap, _Users, _DollarSign, _Settings, _TrendingUp, _BarChart3, _ChevronDown} from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';

// Import all the new 2025 service data

// Import new innovative services

// Import existing services for comprehensive coverage

const _allServices = [
  ...realMicroSaasServices2025,
  ...innovativeAIServices2025,
  ...innovativeITServices2025,
  ...emergingTechServices2025,
  ...additionalRealServices2025,
  ...newInnovativeAIServices
];

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const serviceCategories: Array<{_id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string}>;
  color: string;
  services: ServiceUnion[];
  gradient: string;
}> = [
  {_id: 'ai-consciousness', _title: '🧠 AI & Consciousness', _description: 'Revolutionary AI consciousness and emotional intelligence platforms', _icon: Brain, _color: 'from-violet-500 to-purple-500', _services: [...innovativeAIServices2025], _gradient: 'from-violet-500/20 to-indigo-500/20'},
  {_id: 'quantum-emerging', _title: '⚛️ Quantum & Emerging Tech', _description: 'Quantum computing, _DNA computing, _and beyond', _icon: Atom, _color: 'from-indigo-500 to-blue-500', _services: [...emergingTechServices2025], _gradient: 'from-indigo-500/20 to-cyan-500/20'},
  {_id: 'enterprise-it', _title: '🏙️ Enterprise IT', _description: 'Autonomous operations and zero-trust security', _icon: Shield, _color: 'from-blue-500 to-cyan-500', _services: [...innovativeITServices2025], _gradient: 'from-blue-500/20 to-teal-500/20'},
  {_id: 'space-metaverse', _title: '🌌 Space & Metaverse', _description: 'Space mining, _metaverse development, _and more', _icon: Rocket, _color: 'from-teal-500 to-emerald-500', _services: [...quantumSpaceServices], _gradient: 'from-teal-500/20 to-green-500/20'},
  {_id: 'micro-saas', _title: '🎯 Micro SAAS', _description: 'Innovative solutions for every business need', _icon: Target, _color: 'from-green-500 to-yellow-500', _services: [...realMicroSaasServices2025, _...enhancedRealMicroSaasServices], _gradient: 'from-green-500/20 to-orange-500/20'},
  {_id: 'financial-technology', _title: '💰 Financial Technology', _description: 'Innovative fintech, _DeFi, _and financial services', _icon: TrendingUp, _color: 'from-green-500 to-emerald-500', _services: [...innovativeFinancialServices2025], _gradient: 'from-green-500/20 to-emerald-500/20'},
  {_id: 'healthcare-biotech', _title: '🏥 Healthcare & Biotech', _description: 'AI-powered healthcare and biotechnology solutions', _icon: Shield, _color: 'from-blue-500 to-indigo-500', _services: [...innovativeHealthcareServices2025], _gradient: 'from-blue-500/20 to-indigo-500/20'},
  {_id: 'education-technology', _title: '🎓 Education Technology', _description: 'AI-powered learning and educational innovation', _icon: Brain, _color: 'from-purple-500 to-pink-500', _services: [...innovativeEducationServices2025], _gradient: 'from-purple-500/20 to-pink-500/20'},
  {_id: 'sustainability-green-tech', _title: '🌱 Sustainability & Green Tech', _description: 'Environmental technology and sustainability solutions', _icon: Globe, _color: 'from-emerald-500 to-teal-500', _services: [...innovativeSustainabilityServices2025], _gradient: 'from-emerald-500/20 to-teal-500/20'},
  {_id: 'logistics-supply-chain', _title: '🚚 Logistics & Supply Chain', _description: 'Autonomous logistics and supply chain optimization', _icon: Rocket, _color: 'from-orange-500 to-red-500', _services: [...innovativeLogisticsServices2025], _gradient: 'from-orange-500/20 to-red-500/20'},
  {_id: 'research-development', _title: '🔬 Research & Development', _description: 'Breakthrough technologies and innovations', _icon: Microscope, _color: 'from-red-500 to-pink-500', _description: 'Advanced healthcare solutions'},
  {_id: 'transportation-logistics', _name: 'Transportation & Logistics', _icon: <Truck className="w-6 h-6" />, _color: 'from-blue-500 to-cyan-500', _description: 'Smart transportation solutions'},
  {_id: 'education-research', _name: 'Education & Research', _icon: <GraduationCap className="w-6 h-6" />, _color: 'from-yellow-500 to-orange-500', _description: 'Learning and research platforms'},
  {_id: 'customer-success', _name: 'Customer Success', _icon: <Users className="w-6 h-6" />, _color: 'from-blue-500 to-indigo-600', _description: 'AI-powered customer success and retention'},
  {_id: 'financial-technology', _name: 'Financial Technology', _icon: <DollarSign className="w-6 h-6" />, _color: 'from-green-500 to-emerald-600', _description: 'Quantum and AI-powered financial solutions'},
  {_id: 'devops-infrastructure', _name: 'DevOps & Infrastructure', _icon: <Settings className="w-6 h-6" />, _color: 'from-purple-500 to-pink-600', _description: 'AI-powered DevOps and infrastructure automation'},
  {_id: 'cybersecurity', _name: 'Cybersecurity', _icon: <Shield className="w-6 h-6" />, _color: 'from-red-500 to-pink-600', _description: 'Quantum-resistant security solutions'},
  {_id: 'sales-marketing', _name: 'Sales & Marketing', _icon: <TrendingUp className="w-6 h-6" />, _color: 'from-orange-500 to-red-600', _description: 'AI-powered sales and marketing automation'},
  {_id: 'data-analytics', _name: 'Data & Analytics', _icon: <BarChart3 className="w-6 h-6" />, _color: 'from-indigo-500 to-purple-600', _description: 'Quantum-powered data analytics and insights'}
];

export default function ServicesPage() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('All');
  const [sortBy, _setSortBy] = useState('name');

  // Combine all services
  const _allServices = [
    ...enhancedRealMicroSaasServices, _...innovativeAIServices2029, _...quantumSpaceInnovations2029, _...enterpriseITInnovations2029, _...innovativeMicroSaas2029
    ...additionalEnhancedServices, _...newRealServices, _...industryRealServices, _...professionalServices, _...nextGenerationAIServices, _...cuttingEdgeITServices, _...innovativeMicroSaasV2Services, _...marketValidatedServices, _...emergingTechnologyServices, _...comprehensiveITSolutions, _...curatedMarketServices, _...realMarketServices, _...new2025Services, _...newRealInnovations, _...serviceExpansions2025, _...realVerifiedServices
  ];

  // Get unique services by ID
  const _uniqueServices = allServices.filter(_(service, _index, _self) => 
    index === self.findIndex(s => s.id === service.id)
  );

  // Get all categories
  const _categories = ['All', _...Array.from(new Set(uniqueServices.map(s => 
    Array.isArray(s.category) ? s.category[0] : s.category
  )))];

  // Filter and sort services
  const _filteredServices = uniqueServices
    .filter(service => {
      const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const _matchesCategory = selectedCategory === 'All' || 
                             (Array.isArray(service.category) ? 
                               service.category.includes(selectedCategory) : 
                               service.category === selectedCategory);
      return matchesSearch && matchesCategory;})
    .sort(_(a, _b) => {_switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, _'')) - parseFloat(b.price.replace(/[^0-9.]/g, _''));
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;}
    });

  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

  return (
    <UltraFuturisticBackground2029>
      <Head>
        <title>Revolutionary 2029 Technology Services | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology." />
        <meta name="keywords" content="AI services, quantum computing, space technology, biotechnology, 2029 technology, revolutionary services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <Layout>
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
          {_/* Enhanced Futuristic Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          
          {_/* Animated Quantum Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
            <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-50"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-30"></div>
          </div>

          {_/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            {_/* Enhanced Header */}
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-20"
            >
              <motion.div
                initial={_{ opacity: 0, _scale: 0.9}}
                animate={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 1, _delay: 0.2}}
                className="mb-6"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                  {_allServices.length}+ Revolutionary Services Available
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover our comprehensive suite of cutting-edge AI, quantum computing, emerging technology, 
                and micro SAAS services designed to transform your business and drive innovation.
              </p>
              
              <motion.div
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.4}}
                className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  AI & Consciousness
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  Quantum Computing
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  Enterprise IT
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                  Micro SAAS
                </div>
              </motion.div>
            </motion.div>

            {_/* Enhanced Search and Filters */}
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              className="mb-12"
            >
              <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl shadow-cyan-500/10">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  {_/* Enhanced Search */}
                  <div className="relative flex-1 w-full lg:w-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-6 h-6" />
                      <input
                        type="text"
                        placeholder="Search our revolutionary services..."
                        value={_searchQuery}
                                              onChange={_(_e) => setSearchQuery(e.target.value)}
                        className="w-full lg:w-96 pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-cyan-500/30"
                      />
                    </div>
                  </div>

                  {_/* Enhanced Category Filter */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <select
                        value={_selectedCategory}
                        onChange={_(_e) => setSelectedCategory(e.target.value)}
                        className="px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-cyan-500/30 appearance-none pr-10"
                      >
                        <option value="all">All Categories</option>
                        {_categories.map(_(category) => (
                          <option key={category.id} value={_category.id}>
                            {_category.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 pointer-events-none">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {_/* Enhanced Sort */}
                    <div className="relative">
                      <select
                        value={_sortBy}
                        onChange={_(_e) => setSortBy(e.target.value)}
                        className="px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-cyan-500/30 appearance-none pr-10"
                      >
                        {_sortOptions.map(_(option) => (
                          <option key={option.value} value={_option.value}>
                            {_option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 pointer-events-none">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {_/* Enhanced View Mode */}
                    <div className="flex items-center space-x-2 bg-gray-800/50 rounded-2xl p-1.5 border border-gray-700/50">
                      <button
                        onClick={_() => setViewMode('grid')}
                        className={_`p-3 rounded-xl transition-all duration-300 ${
                          viewMode === 'grid' 
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25' 
                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'}`}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={_() => setViewMode('list')}
                        className={_`p-3 rounded-xl transition-all duration-300 ${
                          viewMode === 'list' 
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25' 
                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'}`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {_/* Enhanced Results Count */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                    <span className="text-cyan-300 font-medium">
                      Showing {_filteredServices.length} of {_allServices.length} revolutionary services
                    </span>
                  </div>
                </div>
              </div>
              
              <select
                value={_selectedCategory}
                onChange={_(_e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
              >
                {_categories.map(category => (
                  <option key={category} value={_category}>{_category}</option>
                ))}
              </select>
              
              <select
                value={_sortBy}
                onChange={_(_e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="popularity">Sort by Popularity</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>

            {_/* Enhanced Category Overview */}
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.4}}
              className="mb-20"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Service Categories
                  </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Explore our comprehensive range of cutting-edge services across multiple domains
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {_categories.map(_(category, _index) => {
                  const _stats = getCategoryStats(category.id);
                  return (_<motion.div
                      key={category.id}
                      initial={_{ opacity: 0, _y: 20}}
                      animate={_{ opacity: 1, _y: 0}}
                      transition={_{ duration: 0.8, _delay: 0.6 + index * 0.1}}
                      className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 cursor-pointer group"
                      onClick={_() => setSelectedCategory(category.id)}
                    >
                      <div className={_`w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {_category.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">{_category.name}</h3>
                      <p className="text-gray-300 text-base mb-6 leading-relaxed">{_category.description}</p>
                      
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div className="group-hover:scale-105 transition-transform duration-300">
                          <div className="text-3xl font-bold text-cyan-400">{_stats.count}</div>
                          <div className="text-sm text-gray-400">Services</div>
                        </div>
                        <div className="group-hover:scale-105 transition-transform duration-300">
                          <div className="text-3xl font-bold text-purple-400">${_stats.avgPrice}</div>
                          <div className="text-sm text-gray-400">Avg Price</div>
                        </div>
                        <div className="group-hover:scale-105 transition-transform duration-300">
                          <div className="text-3xl font-bold text-green-400">{_stats.avgRating}</div>
                          <div className="text-sm text-gray-400">Rating</div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-700/50">
                        <div className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                          Click to explore →
                        </div>
                      </div>

            {_/* Services Grid/List */}
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.8}}
            >
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {_selectedCategory === 'all' ? 'All Services' : categories.find(c => c.id === selectedCategory)?.name}
                </span>
              </h2>

              {_viewMode === 'grid' ? (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedServices.map((service, _index) => (
                    <motion.div
                      key={service.id}
                      initial={_{ opacity: 0, _y: 20}}
                      animate={_{ opacity: 1, _y: 0}}
                      transition={_{ duration: 0.8, _delay: 1 + index * 0.05}}
                      className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden"
                    >
                      {_/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                      {_/* Enhanced Service Header */}
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                              {_service.name}
                            </h3>
                            <p className="text-base text-gray-300 leading-relaxed">{_service.tagline}</p>
                          </div>
                          {_service.popular && (
                            <span className="px-3 py-1.5 text-sm bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg shadow-pink-500/25">
                              ⭐ Popular
                            </span>
                          )}
                        </div>
                        
                        {_/* Service Icon */}
                        <div className="text-4xl mb-4">{_service.icon}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (_<motion.div
                initial={_{ opacity: 0}}
                animate={_{ opacity: 1}}
                className="text-center py-20"
              >
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or browse all services</p>
                <button
                  onClick={_() => {
                    setSearchTerm('');
                    setSelectedCategory('All');}}
                  className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

                      {_/* Enhanced Price */}
                      <div className="mb-6 relative z-10">
                        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-4">
                          <div className="text-3xl font-bold text-white mb-1">${_service.price.monthly}</div>
                          <div className="text-sm text-gray-300">/month</div>
                          <div className="text-xs text-cyan-400 font-medium mt-1">{_service.price.trialDays}-day free trial</div>
                        </div>
                      </div>

                      {_/* Enhanced Features */}
                      <div className="mb-6 relative z-10">
                        <div className="text-sm text-cyan-400 font-medium mb-3">✨ Key Features</div>
                        <ul className="space-y-2">
                          {_service.features.slice(0, _3).map(_(feature, _idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-center group-hover:text-white transition-colors duration-300">
                              <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                              {_feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {_/* Enhanced Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-6 text-center relative z-10">
                        <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/50 group-hover:border-cyan-500/30 transition-colors duration-300">
                          <div className="text-cyan-400 font-bold text-lg">{_service.rating}/5</div>
                          <div className="text-gray-300 text-xs">Rating</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/50 group-hover:border-purple-500/30 transition-colors duration-300">
                          <div className="text-purple-400 font-bold text-lg">{_service.customers}+</div>
                          <div className="text-gray-300 text-xs">Customers</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/50 group-hover:border-green-500/30 transition-colors duration-300">
                          <div className="text-green-400 font-bold text-lg">{_service.price.setupTime}</div>
                          <div className="text-gray-300 text-xs">Setup</div>
                        </div>
                      </div>

                      {_/* Enhanced CTA */}
                      <div className="relative z-10">
                        <a
                          href={_service.link}
                          className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 px-6 rounded-2xl text-center font-semibold text-base hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 group-hover:shadow-xl group-hover:shadow-cyan-500/40"
                        >
                          Explore Service
                          <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (_<div className="space-y-4">
                  {_sortedServices.map((service, _index) => (
                    <motion.div
                      key={service.id}
                      initial={_{ opacity: 0, _x: -20}}
                      animate={_{ opacity: 1, _x: 0}}
                      transition={_{ duration: 0.8, _delay: 1 + index * 0.05}}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        {_/* Service Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-white">{_service.name}</h3>
                            {_service.popular && (
                              <span className="px-3 py-1 text-sm bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-300 mb-3">{_service.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {_service.features.slice(0, _4).map(_(feature, _idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-800/50 text-xs text-gray-300 rounded-lg">
                                {_feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {_/* Pricing & Stats */}
                        <div className="lg:w-48 space-y-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white">${_service.price.monthly}</div>
                            <div className="text-sm text-gray-400">/month</div>
                            <div className="text-xs text-green-400">{_service.price.trialDays}-day trial</div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 text-center text-xs">
                            <div className="bg-gray-800/30 rounded-lg p-2">
                              <div className="text-cyan-400 font-semibold">{_service.rating}/5</div>
                              <div className="text-gray-400">Rating</div>
                            </div>
                            <div className="bg-gray-800/30 rounded-lg p-2">
                              <div className="text-purple-400 font-semibold">{_service.customers}+</div>
                              <div className="text-gray-400">Customers</div>
                            </div>
                          </div>
                          
                          <a
                            href={_service.link}
                            className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 inline ml-2" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {_/* Enhanced CTA Section */}
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 1.2}}
              className="text-center mt-24"
            >
              <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-3xl p-16 shadow-2xl shadow-cyan-500/10">
                {_/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={_{ opacity: 0, _scale: 0.9}}
                    animate={_{ opacity: 1, _scale: 1}}
                    transition={_{ duration: 1, _delay: 1.4}}
                    className="mb-8"
                  >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                      Transform Your Business Today
                    </div>
                  </motion.div>
                  
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Ready to Get Started?
                    </span>
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Choose from our comprehensive suite of revolutionary services and start transforming your business today with cutting-edge AI, quantum computing, and emerging technologies.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <motion.a
                      href="/contact"
                      whileHover={_{ scale: 1.05}}
                      whileTap={_{ scale: 0.95}}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
                    >
                      🚀 Get Started Today
                    </motion.a>
                    <motion.a
                      href="/pricing"
                      whileHover={_{ scale: 1.05}}
                      whileTap={_{ scale: 0.95}}
                      className="border-2 border-cyan-500/50 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      💰 View Pricing
                    </motion.a>
                  </div>
                  
                  <div className="mt-10 text-sm text-gray-400">
                    <p>Need help choosing? <a href="/contact" className="text-cyan-400 hover:text-cyan-300 underline">Contact our experts</a> for personalized guidance.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <UltraFuturisticFooter2029 />
    </UltraFuturisticBackground2029>
  );
}
