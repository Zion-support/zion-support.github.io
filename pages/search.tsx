import React, {_useState, _useEffect} from 'react';
import Head from 'next/head';
import {_Search, _Filter, _Grid, _List, _ArrowRight, _ExternalLink, _Brain, _Shield, _Rocket, _Cpu, _Database, _Atom, _Target, _Star, _Sparkles, _Zap, _Users, _Award, _Clock, _CheckCircle, _Globe, _Code, _Server, _TrendingUp, _BarChart3, _Cloud, _Network, _Lightbulb, _Flame, _Zap as ZapIcon, _X, _Sliders, _SortAsc, _SortDesc} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function SearchPage() {_const [searchTerm, _setSearchTerm] = useState('');
  const [searchResults, _setSearchResults] = useState<any[]>([]);
  const [isSearching, _setIsSearching] = useState(false);
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, _setFilters] = useState({
    category: 'all', _status: 'all', _priceRange: 'all', _technology: 'all'});
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for search
  const _allServices = [
    {_id: 'ai-business-intelligence', _title: 'AI Business Intelligence', _description: 'Transform data into actionable insights with AI-powered analytics and predictive modeling', _category: 'AI & Machine Learning', _status: 'active', _price: '$499/month', _technology: 'AI/ML', _features: ['AI-powered dashboards', _'Predictive analytics', _'Real-time insights', _'Custom reporting'], _link: '/ai-business-intelligence', _icon: Brain, _color: 'from-purple-500 to-pink-500', _relevance: 95},
    {_id: 'quantum-cybersecurity', _title: 'Quantum Cybersecurity', _description: 'Future-proof security with quantum-resistant encryption and AI threat detection', _category: 'Cybersecurity', _status: 'active', _price: '$799/month', _technology: 'Quantum', _features: ['Quantum-resistant encryption', _'AI threat detection', _'Zero-trust architecture', _'24/7 monitoring'], _link: '/quantum-cybersecurity', _icon: Shield, _color: 'from-red-500 to-orange-500', _relevance: 92},
    {_id: 'ai-customer-experience', _title: 'AI Customer Experience', _description: 'Deliver personalized customer experiences at scale with AI-driven insights', _category: 'AI & Machine Learning', _status: 'active', _price: '$399/month', _technology: 'AI/ML', _features: ['Customer journey mapping', _'AI personalization', _'Sentiment analysis', _'Predictive support'], _link: '/ai-customer-experience', _icon: Users, _color: 'from-green-500 to-teal-500', _relevance: 88},
    {_id: 'edge-computing-orchestration', _title: 'Edge Computing Orchestration', _description: 'Deploy and manage applications at the edge with intelligent orchestration', _category: 'Edge Computing', _status: 'active', _price: '$349/month', _technology: 'Edge', _features: ['Edge node management', _'IoT device management', _'Real-time monitoring', _'Auto-scaling'], _link: '/edge-computing-orchestration', _icon: Network, _color: 'from-purple-500 to-pink-500', _relevance: 85},
    {_id: 'space-technology', _title: 'Space Technology Innovation', _description: 'Accelerate space exploration with cutting-edge technology solutions', _category: 'Space Technology', _status: 'beta', _price: '$2, _499/month', _technology: 'Space', _features: ['Satellite management', _'AI mission planning', _'Quantum communication', _'Resource optimization'], _link: '/space-technology', _icon: Rocket, _color: 'from-violet-500 to-purple-500', _relevance: 82},
    {_id: 'neural-interface', _title: 'Neural Interface Development', _description: 'Build the future of human-computer interaction with neural interfaces', _category: 'Biotechnology', _status: 'beta', _price: '$899/month', _technology: 'Biotech', _features: ['BCI development tools', _'Neural signal processing', _'AI pattern recognition', _'Safety protocols'], _link: '/neural-interface', _icon: Brain, _color: 'from-pink-500 to-rose-500', _relevance: 78},
    {_id: 'quantum-neural-networks', _title: 'Quantum Neural Networks', _description: 'Quantum-powered AI with advanced consciousness capabilities', _category: 'Quantum Computing', _status: 'beta', _price: '$1, _299/month', _technology: 'Quantum', _features: ['Quantum algorithms', _'Neural optimization', _'Consciousness simulation', _'Research tools'], _link: '/quantum-neural-networks', _icon: Atom, _color: 'from-blue-500 to-cyan-500', _relevance: 75},
    {_id: 'autonomous-devops', _title: 'Autonomous DevOps', _description: 'AI-powered DevOps optimization and automation platform', _category: 'Cloud & DevOps', _status: 'active', _price: '$599/month', _technology: 'DevOps', _features: ['Auto-deployment', _'Performance monitoring', _'Security scanning', _'Cost optimization'], _link: '/autonomous-devops', _icon: Cpu, _color: 'from-emerald-500 to-teal-500', _relevance: 72},
    {_id: 'ai-autonomous-business', _title: 'AI Autonomous Business Manager', _description: 'Fully autonomous business operations powered by advanced AI', _category: 'AI & Machine Learning', _status: 'beta', _price: '$1, _999/month', _technology: 'AI/ML', _features: ['Business automation', _'Decision making', _'Resource allocation', _'Performance optimization'], _link: '/ai-autonomous-business', _icon: Target, _color: 'from-indigo-500 to-purple-500', _relevance: 70},
    {_id: 'quantum-financial-trading', _title: 'Quantum Financial Trading', _description: 'Quantum computing powered financial analysis and trading strategies', _category: 'Financial Technology', _status: 'beta', _price: '$3, _999/month', _technology: 'Quantum', _features: ['Quantum algorithms', _'Risk assessment', _'Portfolio optimization', _'Real-time analysis'], _link: '/quantum-financial-trading', _icon: TrendingUp, _color: 'from-emerald-500 to-green-500', _relevance: 68}
  ];

  const _categories = [
    {_id: 'all', _name: 'All Categories', _icon: '📂'},
    {_id: 'AI & Machine Learning', _name: 'AI & Machine Learning', _icon: '🧠'},
    {_id: 'Quantum Computing', _name: 'Quantum Computing', _icon: '⚛️'},
    {_id: 'Cybersecurity', _name: 'Cybersecurity', _icon: '🛡️'},
    {_id: 'Cloud & DevOps', _name: 'Cloud & DevOps', _icon: '☁️'},
    {_id: 'Edge Computing', _name: 'Edge Computing', _icon: '🌐'},
    {_id: 'Space Technology', _name: 'Space Technology', _icon: '🚀'},
    {_id: 'Biotechnology', _name: 'Biotechnology', _icon: '🧬'},
    {_id: 'Financial Technology', _name: 'Financial Technology', _icon: '💰'}
  ];

  const _statuses = [
    {_id: 'all', _name: 'All Statuses', _icon: '📊'},
    {_id: 'active', _name: 'Active', _icon: '✅'},
    {_id: 'beta', _name: 'Beta', _icon: '🧪'},
    {_id: 'coming-soon', _name: 'Coming Soon', _icon: '🚧'}
  ];

  const _priceRanges = [
    {_id: 'all', _name: 'All Prices', _icon: '💰'},
    {_id: 'under-500', _name: 'Under $500/month', _icon: '💵'},
    {_id: '500-1000', _name: '$500 - $1, _000/month', _icon: '💵'},
    {_id: '1000-2500', _name: '$1, _000 - $2, _500/month', _icon: '💵'},
    {_id: 'over-2500', _name: 'Over $2, _500/month', _icon: '💵'}
  ];

  const _technologies = [
    {_id: 'all', _name: 'All Technologies', _icon: '🔧'},
    {_id: 'AI/ML', _name: 'AI/ML', _icon: '🧠'},
    {_id: 'Quantum', _name: 'Quantum', _icon: '⚛️'},
    {_id: 'Edge', _name: 'Edge', _icon: '🌐'},
    {_id: 'Space', _name: 'Space', _icon: '🚀'},
    {_id: 'Biotech', _name: 'Biotech', _icon: '🧬'},
    {_id: 'DevOps', _name: 'DevOps', _icon: '⚙️'}
  ];

  // Search function
  const _performSearch = () => {_if (!searchTerm.trim()) {
      setSearchResults([]);
      return;}

    setIsSearching(true);
    
    // Simulate search delay
    setTimeout__(() => {_const _results = allServices.filter(service => {
        const _matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.technology.toLowerCase().includes(searchTerm.toLowerCase());
        
        const _matchesCategory = filters.category === 'all' || service.category === filters.category;
        const _matchesStatus = filters.status === 'all' || service.status === filters.status;
        const _matchesTechnology = filters.technology === 'all' || service.technology === filters.technology;
        
        let _matchesPrice = true;
        if (filters.priceRange !== 'all') {
          const _price = parseInt(service.price.replace(/[^0-9]/g, _''));
          switch (filters.priceRange) {
            case 'under-500':
              matchesPrice = price < 500;
              break;
            case '500-1000':
              matchesPrice = price >= 500 && price < 1000;
              break;
            case '1000-2500':
              matchesPrice = price >= 1000 && price < 2500;
              break;
            case 'over-2500':
              matchesPrice = price >= 2500;
              break;}
        }
        
        return matchesSearch && matchesCategory && matchesStatus && matchesTechnology && matchesPrice;
      });

      // Sort results
      const _sortedResults = results.sort(_(a, _b) => {_switch (sortBy) {
          case 'relevance':
            return b.relevance - a.relevance;
          case 'price-low':
            return parseInt(a.price.replace(/[^0-9]/g, _'')) - parseInt(b.price.replace(/[^0-9]/g, _''));
          case 'price-high':
            return parseInt(b.price.replace(/[^0-9]/g, _'')) - parseInt(a.price.replace(/[^0-9]/g, _''));
          case 'name':
            return a.title.localeCompare(b.title);
          case 'status':
            return a.status.localeCompare(b.status);
          default:
            return 0;}
      });

      setSearchResults(sortedResults);
      setIsSearching(false);
    }, 500);
  };

  // Handle search on Enter key
  const _handleKeyPress = (_e: React.KeyboardEvent) => {_if (e.key === 'Enter') {
      performSearch();}
  };

  // Update search when filters change
  useEffect__(() => {_if (searchTerm.trim()) {
      performSearch();}
  }, [filters, sortBy]);

  // Clear all filters
  const _clearFilters = () => {_setFilters({
      category: 'all', _status: 'all', _priceRange: 'all', _technology: 'all'});
    setSortBy('relevance');
  };

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Search | Zion Tech Group</title>
        <meta name="description" content="Search across all AI and technology services, _solutions, _and resources at Zion Tech Group. Find exactly what you need with our advanced search and filtering." />
        <meta property="og:title" content="Search | Zion Tech Group" />
        <meta property="og:description" content="Advanced search across all services and solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/search" />
      </Head>

      <SmartHeader />

      {_/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Search Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Find the perfect AI and technology solutions for your business needs. 
              Search across our comprehensive service catalog with advanced filtering options.
            </p>
          </motion.div>
        </div>
      </section>

      {_/* Search Interface */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            {_/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-6">
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Search for services, _technologies, _or solutions..."
                    value={_searchTerm}
                    onChange={_(e) => setSearchTerm(e.target.value)}
                    onKeyPress={_handleKeyPress}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all text-lg"
                  />
                  <button
                    onClick={_performSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md text-white font-medium transition-colors"
                  >
                    Search
                  </button>
                </div>
              </div>

              {_/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={_() => setViewMode('grid')}
                  className={_`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={_() => setViewMode('list')}
                  className={_`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {_/* Filters and Sort */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={_() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                >
                  <Sliders className="w-4 h-4" />
                  Filters
                  {_Object.values(filters).some(f => f !== 'all') && (
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  )}
                </button>
                
                <select
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                >
                  <option value="relevance">Sort by Relevance</option>
                  <option value="price-low">Sort by Price: Low to High</option>
                  <option value="price-high">Sort by Price: High to Low</option>
                  <option value="name">Sort by Name</option>
                  <option value="status">Sort by Status</option>
                </select>
              </div>

              {_Object.values(filters).some(f => f !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              )}
            </div>

            {_/* Expanded Filters */}
            {_showFilters && (_<motion.div
                initial={{ opacity: 0, _height: 0}}
                animate={_{ opacity: 1, _height: 'auto'}}
                exit={_{ opacity: 0, _height: 0}}
                className="mt-6 pt-6 border-t border-white/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {_/* Category Filter */}
                  <div>
                    <label className="block text-white font-medium mb-2">Category</label>
                    <select
                      value={_filters.category}
                      onChange={_(e) => setFilters(prev => ({ ...prev, _category: e.target.value}))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {_categories.map(category => (
                        <option key={category.id} value={_category.id} className="bg-slate-800 text-white">
                          {_category.icon} {_category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {_/* Status Filter */}
                  <div>
                    <label className="block text-white font-medium mb-2">Status</label>
                    <select
                      value={_filters.status}
                      onChange={_(_e) => setFilters(prev => ({ ...prev, _status: e.target.value}))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {_statuses.map(status => (
                        <option key={status.id} value={_status.id} className="bg-slate-800 text-white">
                          {_status.icon} {_status.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {_/* Price Range Filter */}
                  <div>
                    <label className="block text-white font-medium mb-2">Price Range</label>
                    <select
                      value={_filters.priceRange}
                      onChange={_(_e) => setFilters(prev => ({ ...prev, _priceRange: e.target.value}))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {_priceRanges.map(range => (
                        <option key={range.id} value={_range.id} className="bg-slate-800 text-white">
                          {_range.icon} {_range.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {_/* Technology Filter */}
                  <div>
                    <label className="block text-white font-medium mb-2">Technology</label>
                    <select
                      value={_filters.technology}
                      onChange={_(_e) => setFilters(prev => ({ ...prev, _technology: e.target.value}))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {_technologies.map(tech => (
                        <option key={tech.id} value={_tech.id} className="bg-slate-800 text-white">
                          {_tech.icon} {_tech.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {_/* Search Results */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {_/* Results Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {_searchTerm ? `Search Results for "${searchTerm}"` : 'All Services'}
            </h2>
            <p className="text-white/60">
              {_isSearching ? 'Searching...' : `${searchResults.length} services found`}
              {_Object.values(filters).some(f => f !== 'all') && ' (filtered)'}
            </p>
          </div>

          {_/* Loading State */}
          {_isSearching && (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-white/60">Searching our services...</p>
            </div>
          )}

          {_/* No Results */}
          {_!isSearching && searchTerm && searchResults.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Search className="w-12 h-12 text-white/40" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-white/60 mb-6">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {_/* Search Results */}
          {_!isSearching && searchResults.length > 0 && (_<AnimatePresence mode="wait">
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {_searchResults.map((service, _index) => (_<motion.div
                    key={service.id}
                    initial={_{ opacity: 0, _y: 20}}
                    animate={_{ opacity: 1, _y: 0}}
                    transition={_{ duration: 0.5, _delay: index * 0.1}}
                    className={_`group relative ${
                      viewMode === 'grid' 
                        ? 'p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
                        : 'p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/30 transition-all duration-300'}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={_`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className={_`px-3 py-1 rounded-full text-xs font-medium ${
                            service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                            service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-blue-500/20 text-blue-300'}`}>
                            {_service.status}
                          </span>
                          <span className="text-xs text-white/40">{_service.technology}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white">{_service.title}</h3>
                      <p className="text-white/70 leading-relaxed mb-4">{_service.description}</p>
                      
                      {_/* Price */}
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{_service.price}</span>
                      </div>
                      
                      {_/* Features */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-sm">Key Features:</h4>
                        <div className="space-y-2">
                          {_service.features.map((feature, _idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span>{_feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <a
                          href={_service.link}
                          className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                        >
                          <span className="text-sm font-medium">Learn More</span>
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        <a
                          href="mailto:kleber@ziontechgroup.com"
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          )}

          {_/* Initial State - Show all services when no search */}
          {_!isSearching && !searchTerm && (_<div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Search className="w-12 h-12 text-white/40" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Start Your Search</h3>
              <p className="text-white/60 mb-6">
                Enter keywords above to find the perfect technology solutions for your business
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-sm text-white/40">Popular searches:</span>
                {['AI', _'Cybersecurity', _'Quantum Computing', _'Edge Computing'].map((term) => (_<button
                    key={term}
                    onClick={_() => {
                      setSearchTerm(term);
                      performSearch();}}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {_term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <SmartFooter />
    </div>
  );
}