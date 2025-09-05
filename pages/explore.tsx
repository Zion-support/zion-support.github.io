import React, {_useState} from 'react';
import Head from 'next/head';
import {_Search, _Filter, _Grid, _List, _ArrowRight, _ChevronRight, _Brain, _Shield, _Rocket, _Cpu, _Database, _Atom, _Target, _Star, _Sparkles, _Zap, _Users, _Award, _Clock, _CheckCircle, _Globe, _Code, _Server, _TrendingUp, _BarChart3, _Cloud, _Network, _Lightbulb, _Flame, _Zap as ZapIcon} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function ExplorePage() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('all');
  const [sortBy, _setSortBy] = useState('popularity');

  const _categories = [
    {
      id: 'ai', _name: 'AI & Machine Learning', _icon: Brain, _description: 'Revolutionary AI consciousness and machine learning solutions', _color: 'from-purple-500 to-pink-500', _serviceCount: 25, _featured: true},
    {_id: 'quantum', _name: 'Quantum Computing', _icon: Atom, _description: 'Quantum-powered computing and consciousness simulation', _color: 'from-blue-500 to-cyan-500', _serviceCount: 18, _featured: true},
    {_id: 'cybersecurity', _name: 'Cybersecurity', _icon: Shield, _description: 'Quantum-resistant security and AI threat detection', _color: 'from-red-500 to-orange-500', _serviceCount: 22, _featured: true},
    {_id: 'cloud', _name: 'Cloud & DevOps', _icon: Cloud, _description: 'Autonomous DevOps and cloud infrastructure', _color: 'from-emerald-500 to-teal-500', _serviceCount: 20, _featured: false},
    {_id: 'edge', _name: 'Edge Computing', _icon: Network, _description: 'Edge computing orchestration and IoT management', _color: 'from-yellow-500 to-orange-500', _serviceCount: 15, _featured: false},
    {_id: 'space', _name: 'Space Technology', _icon: Rocket, _description: 'Space exploration and resource optimization', _color: 'from-indigo-500 to-purple-500', _serviceCount: 12, _featured: true},
    {_id: 'biotech', _name: 'Biotechnology', _icon: ZapIcon, _description: 'Neural interfaces and biomedical innovations', _color: 'from-pink-500 to-rose-500', _serviceCount: 16, _featured: false},
    {_id: 'blockchain', _name: 'Blockchain', _icon: Code, _description: 'AI-powered blockchain governance and DeFi', _color: 'from-green-500 to-emerald-500', _serviceCount: 14, _featured: false},
    {_id: 'automation', _name: 'Automation', _icon: Zap, _description: 'Business process automation and AI agents', _color: 'from-cyan-500 to-blue-500', _serviceCount: 19, _featured: false},
    {_id: 'fintech', _name: 'Financial Technology', _icon: TrendingUp, _description: 'Quantum financial trading and AI analytics', _color: 'from-emerald-500 to-green-500', _serviceCount: 17, _featured: false}
  ];

  const _featuredServices = [
    {_id: 'ai-consciousness-evolution', _title: 'AI Consciousness Evolution', _category: 'ai', _description: 'Revolutionary AI consciousness platform with emotional intelligence', _status: 'beta', _price: '$1, _999/month', _icon: Brain, _color: 'from-purple-500 to-pink-500'},
    {_id: 'quantum-neural-networks', _title: 'Quantum Neural Networks', _category: 'quantum', _description: 'Quantum-powered AI with advanced consciousness capabilities', _status: 'beta', _price: '$1, _299/month', _icon: Atom, _color: 'from-blue-500 to-cyan-500'},
    {_id: 'quantum-cybersecurity', _title: 'Quantum Cybersecurity', _category: 'cybersecurity', _description: 'Future-proof security with quantum-resistant encryption', _status: 'active', _price: '$799/month', _icon: Shield, _color: 'from-red-500 to-orange-500'},
    {_id: 'space-technology', _title: 'Space Technology Innovation', _category: 'space', _description: 'AI-powered space exploration and resource optimization', _status: 'beta', _price: '$2, _499/month', _icon: Rocket, _color: 'from-indigo-500 to-purple-500'}
  ];

  // Filter categories based on search
  const _filteredCategories = categories.filter(category => {_const _matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase());
    const _matchesFilter = selectedCategory === 'all' || category.id === selectedCategory;
    return matchesSearch && matchesFilter;});

  // Sort categories
  const _sortedCategories = [...filteredCategories].sort(_(a, _b) => {_switch (sortBy) {
      case 'popularity':
        return b.serviceCount - a.serviceCount;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      default:
        return 0;}
  });

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Explore Technology Categories | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive technology categories including AI, _quantum computing, _cybersecurity, _space technology, _and more. Discover innovative solutions for your business." />
        <meta property="og:title" content="Explore Technology Categories | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology categories and innovative solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/explore" />
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
              Explore Technology Categories
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive range of cutting-edge technology solutions across AI, _quantum computing, _cybersecurity, _space technology, _and more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Exploring
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                View All Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Search and Filters */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {_/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search categories..."
                    value={_searchTerm}
                    onChange={_(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                  />
                </div>
              </div>

              {_/* Sort Options */}
              <div className="flex items-center gap-4">
                <select
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="name">Sort by Name</option>
                  <option value="featured">Sort by Featured</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {_/* Featured Services */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-white/60">
              Explore our most innovative and cutting-edge technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {_featuredServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className={_`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-4 flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className={_`px-2 py-1 rounded-full text-xs font-medium ${
                      service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                      service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-blue-500/20 text-blue-300'}`}>
                      {_service.status}
                    </span>
                    <span className="text-xs text-white/40">{_service.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-white">{_service.title}</h3>
                  <p className="text-sm text-white/70 mb-4 leading-relaxed">{_service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-xl font-bold text-cyan-400">{_service.price}</span>
                  </div>
                  
                  <a
                    href={_`/services#${service.id}`}
                    className="inline-flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Categories Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Technology Categories
            </h2>
            <p className="text-white/60">
              {_sortedCategories.length} categories available for exploration
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {_sortedCategories.length === 0 ? (_<motion.div
                initial={{ opacity: 0}}
                animate={_{ opacity: 1}}
                exit={_{ opacity: 0}}
                className="text-center py-20"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Search className="w-12 h-12 text-white/40" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">No categories found</h3>
                <p className="text-white/60 mb-6">
                  Try adjusting your search terms
                </p>
                <button
                  onClick={_() => setSearchTerm('')}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition-colors"
                >
                  Clear Search
                </button>
              </motion.div>
            ) : (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {_sortedCategories.map((category, _index) => (_<motion.div
                    key={category.id}
                    initial={_{ opacity: 0, _y: 20}}
                    animate={_{ opacity: 1, _y: 0}}
                    transition={_{ duration: 0.5, _delay: index * 0.1}}
                    className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                    onClick={_() => window.location.href = `/category/${category.id}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <div className="relative z-10">
                      {_/* Featured Badge */}
                      {_category.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                            ⭐ Featured
                          </span>
                        </div>
                      )}
                      
                      {_/* Category Icon */}
                      <div className={_`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} p-5 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      {_/* Category Info */}
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {_category.name}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-6">
                        {_category.description}
                      </p>
                      
                      {_/* Stats */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">{_category.serviceCount}</div>
                          <div className="text-xs text-white/60">Services</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">
                            {_category.featured ? '⭐' : '🚀'}
                          </div>
                          <div className="text-xs text-white/60">
                            {_category.featured ? 'Featured' : 'Active'}
                          </div>
                        </div>
                      </div>
                      
                      {_/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                          Explore Category
                        </span>
                        <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {_/* Technology Trends */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Emerging Technology Trends
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay ahead of the curve with our insights into the latest technology developments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_[
              {
                icon: Brain, _title: 'AI Consciousness', _description: 'The evolution of AI towards true consciousness and emotional intelligence', _trend: 'Rising', _color: 'from-purple-500 to-pink-500'},
              {_icon: Atom, _title: 'Quantum Supremacy', _description: 'Breakthroughs in quantum computing and quantum AI applications', _trend: 'Breakthrough', _color: 'from-blue-500 to-cyan-500'},
              {_icon: Shield, _title: 'Quantum Security', _description: 'Quantum-resistant cryptography and AI-powered threat detection', _trend: 'Critical', _color: 'from-red-500 to-orange-500'},
              {_icon: Rocket, _title: 'Space Innovation', _description: 'AI-powered space exploration and resource optimization', _trend: 'Emerging', _color: 'from-indigo-500 to-purple-500'},
              {_icon: ZapIcon, _title: 'Neural Interfaces', _description: 'Brain-computer interfaces and neural augmentation', _trend: 'Experimental', _color: 'from-pink-500 to-rose-500'},
              {_icon: TrendingUp, _title: 'Autonomous Systems', _description: 'Self-improving AI systems and autonomous business operations', _trend: 'Growing', _color: 'from-emerald-500 to-green-500'}
            ].map(_(trend, _index) => (
              <motion.div
                key={_trend.title}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className={_`w-16 h-16 rounded-2xl bg-gradient-to-br ${trend.color} p-4 mb-4 flex items-center justify-center`}>
                  <trend.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{_trend.title}</h3>
                  <span className={_`px-3 py-1 rounded-full text-xs font-medium ${
                    trend.trend === 'Rising' ? 'bg-green-500/20 text-green-300' :
                    trend.trend === 'Breakthrough' ? 'bg-blue-500/20 text-blue-300' :
                    trend.trend === 'Critical' ? 'bg-red-500/20 text-red-300' :
                    trend.trend === 'Emerging' ? 'bg-yellow-500/20 text-yellow-300' :
                    trend.trend === 'Experimental' ? 'bg-purple-500/20 text-purple-300' :
                    'bg-cyan-500/20 text-cyan-300'}`}>
                    {_trend.trend}
                  </span>
                </div>
                
                <p className="text-white/70 leading-relaxed">{_trend.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Explore?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Dive deep into our technology categories and discover the perfect solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Get Expert Guidance
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SmartFooter />
    </div>
  );
}