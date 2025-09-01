import React, { useState, useMemo } from 'react';
export default ComprehensivePricingGuide2026;
export default ComprehensivePricingGuide2026;
import {
import { ALL_PRICING_GUIDES_2026, marketSummary2026 } from '../data / comprehensivePricingGuide2026';
import { ALL_PRICING_GUIDES_2026, marketSummary2026 } from "../data / comprehensivePricingGuide2026";
import { motion } from 'framer - motion';
import { SEO } from "../components / SEO";
import SEO from '../components / SEO';


  DollarSign,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Sparkles,
  Flame,
  Crown,
  Infinity,
  Sun,
  Moon,
  Truck,
  Key,
  Globe2,
  ShieldCheck,
  Scale,
  Building2,
  Home,
  Gauge,
  GitFork,
  MessageCircle,
  HelpCircle,
  FileText,
  Settings
} from 'lucide-react';
import { innovativeServices2026 } from '../data/innovativeServices2026';

export default function ComprehensivePricingGuide2026() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredServices = innovativeServices2026.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && parseFloat(service.price.replace('$', '').replace(',', '')) < 500) ||
                        (selectedPriceRange === 'mid' && parseFloat(service.price.replace('$', '').replace(',', '')) >= 500 && parseFloat(service.price.replace('$', '').replace(',', '')) < 2000) ||
                        (selectedPriceRange === 'premium' && parseFloat(service.price.replace('$', '').replace(',', '')) >= 2000);

  const services = ['all', ...ALL_PRICING_GUIDES_2026.map (s => s.serviceName) ];
  const tiers = ['all', 'Starter', 'Professional', 'Enterprise'];

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
      case 'roi':
        return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', ''));
      case 'implementation':
        return parseInt(a.implementationTime.split('-')[0]) - parseInt(b.implementationTime.split('-')[0]);
      default:
        return b.featured ? 1 : -1;
    }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return <ShoppingCart className="w-6 h-6" />;
      case 'AI Solutions': return <Brain className="w-6 h-6" />;
      case 'IT Services': return <Server className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Data & Analytics': return <BarChart3 className="w-6 h-6" />;
      case 'Cloud & DevOps': return <Cloud className="w-6 h-6" />;
      case 'Quantum Computing': return <Atom className="w-6 h-6" />;
      case 'Blockchain & Web3': return <Code className="w-6 h-6" />;
      case 'IoT & Edge': return <Network className="w-6 h-6" />;
      case 'Green Tech': return <Leaf className="w-6 h-6" />;
      case 'Space Tech': return <Rocket className="w-6 h-6" />;
      case 'BioTech & Health': return <Heart className="w-6 h-6" />;
      case 'FinTech & DeFi': return <DollarSign className="w-6 h-6" />;
      case 'Metaverse & AR/VR': return <Eye className="w-6 h-6" />;
      case 'Autonomous Systems': return <Cpu className="w-6 h-6" />;
      case 'Sustainability': return <Leaf className="w-6 h-6" />;
      case 'Digital Transformation': return <Zap className="w-6 h-6" />;
      default: return <Rocket className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return 'from-blue-500 to-cyan-500';
      case 'AI Solutions': return 'from-purple-500 to-pink-500';
      case 'IT Services': return 'from-green-500 to-emerald-500';
      case 'Cybersecurity': return 'from-red-500 to-orange-500';
      case 'Data & Analytics': return 'from-indigo-500 to-blue-500';
      case 'Cloud & DevOps': return 'from-cyan-500 to-blue-500';
      case 'Quantum Computing': return 'from-violet-500 to-purple-500';
      case 'Blockchain & Web3': return 'from-yellow-500 to-orange-500';
      case 'IoT & Edge': return 'from-teal-500 to-green-500';
      case 'Green Tech': return 'from-green-500 to-teal-500';
      case 'Space Tech': return 'from-blue-500 to-indigo-500';
      case 'BioTech & Health': return 'from-pink-500 to-red-500';
      case 'FinTech & DeFi': return 'from-emerald-500 to-green-500';
      case 'Metaverse & AR/VR': return 'from-purple-500 to-indigo-500';
      case 'Autonomous Systems': return 'from-orange-500 to-red-500';
      case 'Sustainability': return 'from-teal-500 to-cyan-500';
      case 'Digital Transformation': return 'from-blue-500 to-purple-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'budget', label: 'Under $500' },
    { value: 'mid', label: '$500 - $2,000' },
    { value: 'premium', label: '$2,000+' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'roi', label: 'Highest ROI' },
    { value: 'implementation', label: 'Fastest Implementation' }
  ];

  const featuredServices = innovativeServices2026.filter(service => service.featured).slice(0, 6);

  const pricingStats = {
    totalServices: innovativeServices2026.length,
    averagePrice: '$1,247',
    averageROI: '385%',
    averageImplementation: '8 weeks',
    featuredServices: innovativeServices2026.filter(s => s.featured).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Pricing Guide 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transparent pricing for all our innovative micro SAAS solutions, AI services, and IT infrastructure. 
              Find the perfect solution that fits your budget and delivers exceptional ROI.
            </p>
            
            {/* Pricing Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-8">
              <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="text-2xl font-bold text-cyan-400">{pricingStats.totalServices}</div>
                <div className="text-sm text-gray-400">Total Services</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="text-2xl font-bold text-green-400">{pricingStats.averagePrice}</div>
                <div className="text-sm text-gray-400">Average Price</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="text-2xl font-bold text-blue-400">{pricingStats.averageROI}</div>
                <div className="text-sm text-gray-400">Average ROI</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="text-2xl font-bold text-purple-400">{pricingStats.averageImplementation}</div>
                <div className="text-sm text-gray-400">Implementation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or use cases..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-xl text-white transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>

              {/* View Mode Toggle */}
              <div className="flex bg-slate-700/50 rounded-xl p-1 border border-slate-600">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  List
                </button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t border-slate-700/50"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="all">All Categories</option>
                      {Array.from(new Set(innovativeServices2026.map(s => s.category))).map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                    <select
                      value={selectedPriceRange}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      {priceRanges.map(range => (
                        <option key={range.value} value={range.value}>{range.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Sort By */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

      {/* Featured Services */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions with proven ROI and exceptional value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                      {getCategoryIcon(service.category)}
                      {service.category}
                    </div>
                    {service.featured && (
                      <Star className="w-5 h-5 text-yellow-400" />
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing and ROI */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-xs text-gray-400">per {service.billing}</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">{service.roi}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Implementation Time */}
                  <div className="mb-6 p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Implementation:</span>
                      <span className="text-white font-medium">{service.implementationTime}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={service.href}
                    className="block w-full text-center py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    {service.ctaLabel}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Catalog
            </h2>
            <p className="text-xl text-gray-300">
              {filteredServices.length} services found • {innovativeServices2026.length} total services available
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                        {getCategoryIcon(service.category)}
                        <span className="hidden sm:inline">{service.category}</span>
                      </div>
                      {service.featured && (
                        <Star className="w-4 h-4 text-yellow-400" />
                      )}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-300 mb-3 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Price and ROI */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-green-400 font-medium">{service.roi} ROI</div>
                    </div>

                    {/* Implementation Time */}
                    <div className="text-xs text-gray-400 mb-3">
                      Implementation: {service.implementationTime}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={service.href}
                      className="block w-full text-center py-2 px-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {service.ctaLabel}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Left Column */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                            {getCategoryIcon(service.category)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {service.title}
                              </h3>
                              {service.featured && (
                                <Star className="w-5 h-5 text-yellow-400" />
                              )}
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                            <div className="space-y-1">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits:</h4>
                            <div className="space-y-1">
                              {service.benefits.slice(0, 3).map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="lg:w-64 space-y-4">
                        {/* Pricing Metrics */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                            <div className="text-xl font-bold text-cyan-400">{service.price}</div>
                            <div className="text-xs text-gray-400">per {service.billing}</div>
                          </div>
                          <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                            <div className="text-xl font-bold text-green-400">{service.roi}</div>
                            <div className="text-xs text-gray-400">ROI</div>
                          </div>
                        </div>

                        {/* Additional Info */}
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{service.implementationTime}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Users className="w-4 h-4" />
                            <span>{service.supportLevel}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Target className="w-4 h-4" />
                            <span>{service.marketSize}</span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <a
                          href={service.href}
                          className="block w-full text-center py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                        >
                          {service.ctaLabel}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Comparison
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare our services across different categories and find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Budget Tier */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Budget Solutions</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">Under $500</div>
                <p className="text-gray-400">Perfect for startups and small businesses</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Micro SaaS solutions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Basic AI tools</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Essential IT services</span>
                </div>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-400">Average ROI: 250%</span>
              </div>
            </div>

            {/* Mid Tier */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Mid-Range Solutions</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">$500 - $2,000</div>
                <p className="text-gray-400">Ideal for growing businesses</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Advanced AI platforms</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Enterprise features</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Priority support</span>
                </div>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-400">Average ROI: 380%</span>
              </div>
            </div>

            {/* Premium Tier */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Premium Solutions</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">$2,000+</div>
                <p className="text-gray-400">For large enterprises and complex needs</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Quantum computing</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Custom development</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 dedicated support</span>
                </div>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-400">Average ROI: 500%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our team of experts is ready to help you find the perfect solution within your budget. 
              Get in touch today for a personalized consultation and custom pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Mail className="w-5 h-5" />
                Get Custom Quote
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 text-white font-semibold rounded-xl transition-all duration-300 hover:border-cyan-500/50"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}