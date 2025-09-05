import React, {_useState, _useEffect} from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import {_Search, _Filter, _Grid3X3, _List, _Star, _Users, _TrendingUp, _Zap, _Brain, _Atom, _Shield, _Rocket, _Palette, _BookOpen, _Truck, _DollarSign, _Settings, _ArrowRight, _ChevronDown, _CheckCircle, _Clock, _Award, _Target, _Globe, _Sparkles, _Cpu, _Lock, _Cloud, _BarChart3, _Eye, _Heart, _Lightbulb, _Palette as PaletteIcon, _Code, _Database, _Shield as ShieldIcon, _Globe as GlobeIcon, _Zap as ZapIcon, _Target as TargetIcon} from 'lucide-react';

// Import service data

interface Service {_id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  category: string;
  rating: number;
  reviews: number;
  customers: number;
  marketSize: string;
  growthRate: string;
  launchDate: string;
  badge?: string;
  icon?: React.ReactNode;}

const allServices: Service[] = [
  ...innovativeRealMicroSaasServices2025.map(service => ({_...service, _category: 'Micro SAAS', _icon: <Rocket className="w-6 h-6" />})),
  ...innovativeAIServicesEnhanced2025.map(service => ({_...service, _category: 'AI & Consciousness', _icon: <Brain className="w-6 h-6" />})),
  ...innovativeITServicesEnhanced2025.map(service => ({_...service, _category: 'Enterprise IT', _icon: <Shield className="w-6 h-6" />})),
  ...emergingTechServicesEnhanced2025.map(service => ({_...service, _category: 'Quantum & Emerging Tech', _icon: <Atom className="w-6 h-6" />}))
];

const _categories = [
  {_name: 'All Services', _icon: <Globe className="w-5 h-5" />, _count: allServices.length},
  {_name: 'Micro SAAS', _icon: <Rocket className="w-5 h-5" />, _count: innovativeRealMicroSaasServices2025.length},
  {_name: 'AI & Consciousness', _icon: <Brain className="w-5 h-5" />, _count: innovativeAIServicesEnhanced2025.length},
  {_name: 'Enterprise IT', _icon: <Shield className="w-5 h-5" />, _count: innovativeITServicesEnhanced2025.length},
  {_name: 'Quantum & Emerging Tech', _icon: <Atom className="w-5 h-5" />, _count: emergingTechServicesEnhanced2025.length}
];

const _priceRanges = [
  {_label: 'All Prices', _value: 'all'},
  {_label: 'Under $50/month', _value: 'under-50'},
  {_label: '$50 - $200/month', _value: '50-200'},
  {_label: '$200 - $500/month', _value: '200-500'},
  {_label: 'Over $500/month', _value: 'over-500'}
];

const _sortOptions = [
  {_label: 'Most Popular', _value: 'popular'},
  {_label: 'Highest Rated', _value: 'rating'},
  {_label: 'Newest', _value: 'newest'},
  {_label: 'Price: Low to High', _value: 'price-low'},
  {_label: 'Price: High to Low', _value: 'price-high'}
];

export default function ComprehensiveServicesShowcase2025() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, _setSelectedPriceRange] = useState('all');
  const [sortBy, _setSortBy] = useState('popular');
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, _setFilteredServices] = useState<Service[]>(allServices);

  useEffect__(() => {
    let _filtered = allServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      );}

    // Filter by category
    if (selectedCategory !== 'All Services') {_filtered = filtered.filter(service => service.category === selectedCategory);}

    // Filter by price range
    if (selectedPriceRange !== 'all') {_filtered = filtered.filter(service => {
        const _price = parseFloat(service.price.replace(/[^0-9.]/g, _''));
        switch (selectedPriceRange) {
          case 'under-50': return price < 50;
          case '50-200': return price >= 50 && price <= 200;
          case '200-500': return price > 200 && price <= 500;
          case 'over-500': return price > 500;
          default: return true;}
      });
    }

    // Sort services
    filtered.sort(_(a, _b) => {_switch (sortBy) {
        case 'popular':
          return b.customers - a.customers;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, _'')) - parseFloat(b.price.replace(/[^0-9.]/g, _''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, _'')) - parseFloat(a.price.replace(/[^0-9.]/g, _''));
        default:
          return 0;}
    });

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const _getCategoryColor = (_category: string) => {_switch (category) {
      case 'Micro SAAS': return 'from-blue-500 to-cyan-500';
      case 'AI & Consciousness': return 'from-purple-500 to-pink-500';
      case 'Enterprise IT': return 'from-green-500 to-emerald-500';
      case 'Quantum & Emerging Tech': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';}
  };

  const _getCategoryIcon = (_category: string) => {_switch (category) {
      case 'Micro SAAS': return <Rocket className="w-5 h-5" />;
      case 'AI & Consciousness': return <Brain className="w-5 h-5" />;
      case 'Enterprise IT': return <Shield className="w-5 h-5" />;
      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;}
  };

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs." />
        <meta name="keywords" content="micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group" />
      </Head>

      {_/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {_/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        
        {_/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {_[...Array(20)].map(_(_, _i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
              animate={_{
                x: [0, _100, _0], _y: [0, _-100, _0], _opacity: [0.2, _0.8, _0.2]}}
              transition={_{
                duration: 10 + i * 2, _repeat: Infinity, _delay: i * 0.5}}
              style={_{
                left: `${Math.random() * 100}%`,
                top: `${_Math.random() * 100}%`}}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of {_allServices.length}+ innovative micro SAAS, AI, IT, and emerging technology services
            </p>
            
            {_/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {_[
                { label: 'Total Services', _value: allServices.length, _icon: <Globe className="w-8 h-8" />},
                {_label: 'AI Solutions', _value: innovativeAIServicesEnhanced2025.length, _icon: <Brain className="w-8 h-8" />},
                {_label: 'IT Services', _value: innovativeITServicesEnhanced2025.length, _icon: <Shield className="w-8 h-8" />},
                {_label: 'Emerging Tech', _value: emergingTechServicesEnhanced2025.length, _icon: <Atom className="w-8 h-8" />}
              ].map(_(stat, _index) => (
                <motion.div
                  key={_stat.label}
                  initial={_{ opacity: 0, _y: 20}}
                  animate={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: 0.2 + index * 0.1}}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-3 text-cyan-400">
                    {_stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{_stat.value}</div>
                  <div className="text-sm text-cyan-300">{_stat.label}</div>
                </motion.div>
              ))}
            </div>

            {_/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, features, or solutions..."
                  value={_searchTerm}
                  onChange={_(_e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {_/* Filters and Controls */}
      <div className="bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {_/* Category Filters */}
            <div className="flex flex-wrap items-center space-x-2">
              {_categories.map(_(category) => (_<button
                  key={category.name}
                  onClick={_() => setSelectedCategory(category.name)}
                  className={_`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'}`}
                >
                  {_category.icon}
                  <span>{_category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {_category.count}
                  </span>
                </button>
              ))}
            </div>

            {_/* Price and Sort Controls */}
            <div className="flex flex-wrap items-center space-x-4">
              {_/* Price Range Filter */}
              <select
                value={_selectedPriceRange}
                onChange={_(_e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                {_priceRanges.map(_(range) => (
                  <option key={range.value} value={_range.value} className="bg-gray-900 text-white">
                    {_range.label}
                  </option>
                ))}
              </select>

              {_/* Sort Options */}
              <select
                value={_sortBy}
                onChange={_(_e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                {_sortOptions.map(_(option) => (
                  <option key={option.value} value={_option.value} className="bg-gray-900 text-white">
                    {_option.label}
                  </option>
                ))}
              </select>

              {_/* View Mode Toggle */}
              <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">
                <button
                  onClick={_() => setViewMode('grid')}
                  className={_`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={_() => setViewMode('list')}
                  className={_`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'
                      : 'text-white'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {_/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {_/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-400">
            Showing {_filteredServices.length} of {_allServices.length} services
          </p>
        </div>

        {_viewMode === 'grid' ? (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                {_/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={_`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                    {_getCategoryIcon(service.category)}
                    <span className="ml-2">{_service.category}</span>
                  </span>
                </div>

                {_/* Service Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {_service.icon}
                  </div>
                </div>

                {_/* Service Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                  {_service.name}
                </h3>
                <p className="text-gray-400 mb-3 line-clamp-2">
                  {_service.tagline}
                </p>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                  {_service.description}
                </p>

                {_/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{_service.price}</span>
                  <span className="text-gray-500 text-sm ml-2">/month</span>
                </div>

                {_/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white">{_service.rating}</span>
                    <span className="text-gray-500">({_service.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{_service.customers.toLocaleString()}</span>
                  </div>
                </div>

                {_/* Features Preview */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Key Features:</div>
                  <div className="space-y-1">
                    {_service.features.slice(0, _3).map(_(feature, _idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        <span className="line-clamp-1">{_feature}</span>
                      </div>
                    ))}
                    {_service.features.length > 3 && (
                      <div className="text-xs text-cyan-400">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {_/* Market Info */}
                <div className="mb-4 text-xs text-gray-500">
                  <div className="flex items-center justify-between">
                    <span>Market Size: {_service.marketSize}</span>
                    <span>Growth: {_service.growthRate}</span>
                  </div>
                </div>

                {_/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        ) : (_<div className="space-y-6">
            {_filteredServices.map((service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _x: -20}}
                animate={_{ opacity: 1, _x: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                className="group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  {_/* Service Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {_service.icon}
                    </div>
                  </div>

                  {_/* Service Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                          {_service.name}
                        </h3>
                        <p className="text-lg text-cyan-300 mb-2">
                          {_service.tagline}
                        </p>
                        <p className="text-gray-400 mb-4">
                          {_service.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{_service.price}</div>
                        <div className="text-gray-500 text-sm">/month</div>
                        <span className={_`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white mt-2`}>
                          {_service.category}
                        </span>
                      </div>
                    </div>

                    {_/* Stats Row */}
                    <div className="flex items-center space-x-8 mb-4 text-sm">
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-white font-medium">{_service.rating}</span>
                        <span className="text-gray-500">({_service.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span className="text-white font-medium">{_service.customers.toLocaleString()}</span>
                        <span className="text-gray-500">customers</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-white font-medium">{_service.growthRate}</span>
                        <span className="text-gray-500">growth</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Globe className="w-4 h-4" />
                        <span className="text-white font-medium">{_service.marketSize}</span>
                        <span className="text-gray-500">market</span>
                      </div>
                    </div>

                    {_/* Features */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                      <div className="grid grid-cols-2 gap-2">
                        {_service.features.slice(0, _6).map(_(feature, _idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                            <span>{_feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {_/* CTA */}
                    <div className="flex items-center justify-between">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
                        Learn More
                      </button>
                      <div className="text-xs text-gray-500">
                        Launched: {_new Date(service.launchDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {_/* No Results */}
        {_filteredServices.length === 0 && (_<div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All Services');
                setSelectedPriceRange('all');}}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {_/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your needs. 
              Get in touch today and discover how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/pricing"
                className="border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200"
              >
                View Pricing Plans
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
