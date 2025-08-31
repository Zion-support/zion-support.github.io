import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  TrendingDown,
  Users2,
  BarChart,
  PieChart,
  Activity,
  Calculator,
  Scale,
  BookOpen,
  ShoppingCart,
  Home,
  Truck
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from '../data/advancedInnovativeServices2025';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const allServices = ADVANCED_INNOVATIVE_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: allServices.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'AI & Supply Chain', name: 'AI & Supply Chain', count: allServices.filter(s => s.category === 'AI & Supply Chain').length, icon: '📦', color: 'from-zion-blue to-zion-cyan' },
    { id: 'AI & Financial Technology', name: 'AI & Financial Technology', count: allServices.filter(s => s.category === 'AI & Financial Technology').length, icon: '💰', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Content Marketing', name: 'AI & Content Marketing', count: allServices.filter(s => s.category === 'AI & Content Marketing').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'AI & Human Resources', name: 'AI & Human Resources', count: allServices.filter(s => s.category === 'AI & Human Resources').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI & IoT', name: 'AI & IoT', count: allServices.filter(s => s.category === 'AI & IoT').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'AI & Project Management', name: 'AI & Project Management', count: allServices.filter(s => s.category === 'AI & Project Management').length, icon: '📊', color: 'from-zion-purple to-zion-indigo' },
    { id: 'AI & Customer Experience', name: 'AI & Customer Experience', count: allServices.filter(s => s.category === 'AI & Customer Experience').length, icon: '🎯', color: 'from-zion-blue to-zion-green' },
    { id: 'AI & DevOps', name: 'AI & DevOps', count: allServices.filter(s => s.category === 'AI & DevOps').length, icon: '⚙️', color: 'from-zion-gray to-zion-blue' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: allServices.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-zion-purple to-zion-indigo' },
    { id: 'AI & Legal Technology', name: 'AI & Legal Technology', count: allServices.filter(s => s.category === 'AI & Legal Technology').length, icon: '⚖️', color: 'from-zion-blue to-zion-purple' },
    { id: 'AI & Education', name: 'AI & Education', count: allServices.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & Manufacturing', name: 'AI & Manufacturing', count: allServices.filter(s => s.category === 'AI & Manufacturing').length, icon: '🏭', color: 'from-zion-gray to-zion-blue' },
    { id: 'AI & Retail', name: 'AI & Retail', count: allServices.filter(s => s.category === 'AI & Retail').length, icon: '🛒', color: 'from-zion-orange to-zion-red' },
    { id: 'AI & Real Estate', name: 'AI & Real Estate', count: allServices.filter(s => s.category === 'AI & Real Estate').length, icon: '🏠', color: 'from-zion-blue to-zion-green' },
    { id: 'AI & Transportation', name: 'AI & Transportation', count: allServices.filter(s => s.category === 'AI & Transportation').length, icon: '🚚', color: 'from-zion-blue to-zion-cyan' },
    { id: 'AI & Energy', name: 'AI & Energy', count: allServices.filter(s => s.category === 'AI & Energy').length, icon: '⚡', color: 'from-zion-yellow to-zion-green' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget ($1K - $5K)', range: '1K-5K' },
    { id: 'mid-range', name: 'Mid-Range ($5K - $10K)', range: '5K-10K' },
    { id: 'premium', name: 'Premium ($10K - $20K)', range: '10K-20K' },
    { id: 'enterprise', name: 'Enterprise ($20K+)', range: '20K+' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    let matchesPrice = true;
    if (priceRange === 'budget') matchesPrice = service.price >= 1000 && service.price < 5000;
    else if (priceRange === 'mid-range') matchesPrice = service.price >= 5000 && service.price < 10000;
    else if (priceRange === 'premium') matchesPrice = service.price >= 10000 && service.price < 20000;
    else if (priceRange === 'enterprise') matchesPrice = service.price >= 20000;
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      case 'roi':
        return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Business Intelligence': <Brain className="w-6 h-6" />,
      'Quantum Computing': <Cpu className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'AI & Healthcare': <Users className="w-6 h-6" />,
      'AI & Supply Chain': <Database className="w-6 h-6" />,
      'AI & Financial Technology': <DollarSign className="w-6 h-6" />,
      'AI & Content Marketing': <Code className="w-6 h-6" />,
      'AI & Human Resources': <Users2 className="w-6 h-6" />,
      'AI & IoT': <Network className="w-6 h-6" />,
      'AI & Project Management': <BarChart className="w-6 h-6" />,
      'AI & Customer Experience': <Target className="w-6 h-6" />,
      'AI & DevOps': <Server className="w-6 h-6" />,
      'AI & Marketing': <TrendingUp className="w-6 h-6" />,
      'AI & Research': <Lightbulb className="w-6 h-6" />,
      'AI & Legal Technology': <ShieldCheck className="w-6 h-6" />,
      'AI & Education': <BookOpen className="w-6 h-6" />,
      'AI & Manufacturing': <Server className="w-6 h-6" />,
      'AI & Retail': <ShoppingCart className="w-6 h-6" />,
      'AI & Real Estate': <Home className="w-6 h-6" />,
      'AI & Transportation': <Truck className="w-6 h-6" />,
      'AI & Energy': <Zap className="w-6 h-6" />
    };
    return iconMap[category] || <Rocket className="w-6 h-6" />;
  };

  const getPriceRangeColor = (price: number) => {
    if (price < 5000) return 'text-green-400';
    if (price < 10000) return 'text-yellow-400';
    if (price < 20000) return 'text-orange-400';
    return 'text-red-400';
  };

  const getPriceRangeBadge = (price: number) => {
    if (price < 5000) return { text: 'Budget', color: 'bg-green-500' };
    if (price < 10000) return { text: 'Mid-Range', color: 'bg-yellow-500' };
    if (price < 20000) return { text: 'Premium', color: 'bg-orange-500' };
    return { text: 'Enterprise', color: 'bg-red-500' };
  };

  const totalValue = allServices.reduce((sum, service) => sum + service.price, 0);
  const averagePrice = totalValue / allServices.length;
  const averageROI = allServices.reduce((sum, service) => sum + parseInt(service.roi.split('%')[0]), 0) / allServices.length;

  return (
    <>
      <Helmet>
        <title>Comprehensive Pricing Guide 2025 - Zion Tech Group</title>
        <meta name="description" content="Complete pricing guide for Zion Tech Group's advanced AI, IT, and Micro SaaS services. Compare prices, ROI, and market positioning across all service categories." />
        <meta name="keywords" content="pricing guide, service costs, ROI comparison, market prices, Zion Tech Group services, AI pricing, IT services pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-guide-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Comprehensive Pricing Guide
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-green to-zion-blue">
                  2025
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transparent pricing for all our advanced AI, IT, and Micro SaaS services with detailed ROI analysis and market comparisons
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <Calculator className="w-5 h-5 text-zion-green" />
                  <span>Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <TrendingUp className="w-5 h-5 text-zion-blue" />
                  <span>ROI Analysis</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <Scale className="w-5 h-5 text-zion-purple" />
                  <span>Market Comparison</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-zion-green to-zion-blue py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-6 h-6" />
                <span className="font-semibold">+1 302 464 0950</span>
                <span className="text-sm opacity-90">Mobile</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
                <span className="text-sm opacity-90">Email</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6" />
                <span className="font-semibold">364 E Main St STE 1008</span>
                <span className="text-sm opacity-90">Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Pricing Overview & Market Analysis
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understand the value proposition of each service with detailed pricing, ROI expectations, and competitive market positioning
              </p>
            </motion.div>

            {/* Pricing Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-zion-green mb-2">${(totalValue / 1000).toFixed(0)}K+</div>
                <div className="text-gray-300">Total Service Value</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-zion-blue mb-2">${averagePrice.toFixed(0)}</div>
                <div className="text-gray-300">Average Price</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-zion-purple mb-2">{averageROI.toFixed(0)}%</div>
                <div className="text-gray-300">Average ROI</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
                <div className="text-gray-300">Services Available</div>
              </motion.div>
            </div>

            {/* Price Range Distribution */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Price Range Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {allServices.filter(s => s.price < 5000).length}
                  </div>
                  <div className="text-gray-300">Budget Services</div>
                  <div className="text-sm text-gray-400">$1K - $5K</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {allServices.filter(s => s.price >= 5000 && s.price < 10000).length}
                  </div>
                  <div className="text-gray-300">Mid-Range Services</div>
                  <div className="text-sm text-gray-400">$5K - $10K</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    {allServices.filter(s => s.price >= 10000 && s.price < 20000).length}
                  </div>
                  <div className="text-gray-300">Premium Services</div>
                  <div className="text-sm text-gray-400">$10K - $20K</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">
                    {allServices.filter(s => s.price >= 20000).length}
                  </div>
                  <div className="text-gray-300">Enterprise Services</div>
                  <div className="text-sm text-gray-400">$20K+</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-green focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4">
                {/* Price Range Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-green focus:border-transparent"
                >
                  {priceRanges.map(range => (
                    <option key={range.id} value={range.id}>{range.name}</option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-green focus:border-transparent"
                >
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="roi">Sort by ROI</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg scale-105'
                      : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                  <span className="bg-white/20 rounded-full px-2 py-1 text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Pricing Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:border-zion-green/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Service Header */}
                  <div className="p-6 border-b border-white/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/10 rounded-lg">
                          {getCategoryIcon(service.category)}
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-zion-green uppercase tracking-wide">
                            {service.category}
                          </span>
                          {service.featured && (
                            <Star className="w-4 h-4 text-yellow-400 fill-current ml-2" />
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${getPriceRangeColor(service.price)}`}>
                          ${service.price.toLocaleString()}
                        </div>
                        <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white ${getPriceRangeBadge(service.price).color}`}>
                          {getPriceRangeBadge(service.price).text}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Details */}
                  <div className="p-6">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-sm text-gray-400 mb-1">Market Price</div>
                        <div className="text-lg font-semibold text-white">{service.marketPrice}</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-sm text-gray-400 mb-1">ROI</div>
                        <div className="text-lg font-semibold text-green-400">{service.roi}</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-sm text-gray-400 mb-1">Setup Time</div>
                        <div className="text-lg font-semibold text-white">{service.setupTime}</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-sm text-gray-400 mb-1">AI Score</div>
                        <div className="text-lg font-semibold text-zion-cyan">{service.aiScore}%</div>
                      </div>
                    </div>

                    {/* Rating and Reviews */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{service.rating}</span>
                        <span className="text-gray-400 text-sm">({service.reviewCount} reviews)</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Competitors</div>
                        <div className="text-xs text-gray-300">
                          {service.competitors.slice(0, 2).join(', ')}
                        </div>
                      </div>
                    </div>

                    {/* Value Proposition */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-2">Value Proposition:</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-zion-green" />
                          <span>Competitive pricing vs. market</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-zion-blue" />
                          <span>High ROI potential</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Zap className="w-4 h-4 text-zion-purple" />
                          <span>Fast setup and deployment</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-zion-green to-zion-blue text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-zion-blue hover:to-zion-green transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>Get Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Pricing Inquiry - ${service.title}`}
                        className="px-4 py-3 border border-zion-green text-zion-green rounded-lg font-semibold hover:bg-zion-green hover:text-white transition-all duration-300 flex items-center justify-center"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <div className="text-xs text-gray-400 mb-2">Contact for Custom Pricing:</div>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Phone className="w-3 h-3" />
                          <a href={`tel:${service.contactInfo.phone}`} className="hover:text-zion-green">
                            {service.contactInfo.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Mail className="w-3 h-3" />
                          <a href={`mailto:${service.contactInfo.email}`} className="hover:text-zion-green">
                            {service.contactInfo.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {sortedServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search terms, category filters, or price range
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                    setPriceRange('all');
                  }}
                  className="bg-zion-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-blue transition-colors"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Pricing Strategy Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-zion-green/20 to-zion-blue/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Pricing Strategy
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We believe in transparent, value-based pricing that delivers exceptional ROI for our clients
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl mb-4">💎</div>
                  <h3 className="text-xl font-bold text-white mb-3">Value-Based Pricing</h3>
                  <p className="text-gray-300">
                    Our prices reflect the actual value and ROI our services deliver, not just market positioning.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-white mb-3">Transparent Costs</h3>
                  <p className="text-gray-300">
                    No hidden fees or surprise charges. What you see is what you pay, with clear deliverables.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl mb-4">📈</div>
                  <h3 className="text-xl font-bold text-white mb-3">ROI Focused</h3>
                  <p className="text-gray-300">
                    Every service is designed to deliver measurable returns that justify the investment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a personalized consultation and custom pricing for your specific needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ziontechgroup.com/contact"
                  className="bg-gradient-to-r from-zion-green to-zion-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-blue hover:to-zion-green transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={`tel:+13024640950`}
                  className="border-2 border-zion-green text-zion-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-green hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call for Pricing</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-gray-400 mb-4">
                  Leading provider of innovative AI, IT, and Micro SaaS solutions with transparent, value-based pricing.
                </p>
                <div className="flex space-x-4">
                  <a href="https://ziontechgroup.com" className="text-zion-green hover:text-white transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+13024640950" className="hover:text-zion-green">+1 302 464 0950</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-green">kleber@ziontechgroup.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Pricing</h4>
                <div className="space-y-2 text-gray-400">
                  <div>Budget Services ($1K-$5K)</div>
                  <div>Mid-Range ($5K-$10K)</div>
                  <div>Premium ($10K-$20K)</div>
                  <div>Enterprise ($20K+)</div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="https://ziontechgroup.com" className="block text-gray-400 hover:text-zion-green transition-colors">
                    Home
                  </a>
                  <a href="https://ziontechgroup.com/services" className="block text-gray-400 hover:text-zion-green transition-colors">
                    Services
                  </a>
                  <a href="https://ziontechgroup.com/contact" className="block text-gray-400 hover:text-zion-green transition-colors">
                    Contact
                  </a>
                  <a href="https://ziontechgroup.com/about" className="block text-gray-400 hover:text-zion-green transition-colors">
                    About
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved. | Comprehensive Pricing Guide</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ComprehensivePricingGuide2025;