import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Chip, 
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
  Scale,
  Heart,
  Leaf,
  Eye,
  Atom,
  Building2,
  Car,
  Home,
  Factory,
  City,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  TrendingDown,
  Users2,
  BarChart4,
  Zap2,
  Target2,
  Shield2,
  Rocket2,
  Brain2,
  Cpu2,
  Database2,
  Network2,
  Calculator,
  PieChart,
  BarChart,
  LineChart,
  Activity,
  Zap3,
  Target3,
  Shield3,
  Rocket3
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [roiFilter, setRoiFilter] = useState('all');
  const [innovationFilter, setInnovationFilter] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  // Enhanced categories with new services
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: allServices.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-zion-blue to-zion-indigo' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-zion-purple to-zion-violet' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: allServices.filter(s => s.category === 'AI & Green Tech').length, icon: '🌱', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: allServices.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-zion-purple to-zion-indigo' },
    { id: 'AI & Blockchain', name: 'AI & Blockchain', count: allServices.filter(s => s.category === 'AI & Blockchain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Edge Computing', name: 'AI & Edge Computing', count: allServices.filter(s => s.category === 'AI & Edge Computing').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: allServices.filter(s => s.category === 'AI & Space Tech').length, icon: '🚀', color: 'from-zion-indigo to-zion-purple' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    
    let matchesROI = true;
    if (roiFilter !== 'all') {
      const roiValue = parseInt(service.roi.split('-')[0]);
      switch (roiFilter) {
        case 'high': matchesROI = roiValue >= 800; break;
        case 'medium': matchesROI = roiValue >= 500 && roiValue < 800; break;
        case 'low': matchesROI = roiValue < 500; break;
      }
    }
    
    let matchesInnovation = true;
    if (innovationFilter !== 'all') {
      matchesInnovation = service.innovationLevel === innovationFilter;
    }
    
    return matchesCategory && matchesSearch && matchesPrice && matchesROI && matchesInnovation;
  });

  const sortedServices = [...filteredServices].sort((a, b) => a.price - b.price);

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
        duration: 0.5
      }
    }
  };

  const getInnovationBadge = (level: string) => {
    const badges = {
      'Basic': 'bg-gray-500 text-white',
      'Intermediate': 'bg-blue-500 text-white',
      'Advanced': 'bg-purple-500 text-white',
      'Revolutionary': 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
    };
    return badges[level as keyof typeof badges] || 'bg-gray-500 text-white';
  };

  const getROIColor = (roi: string) => {
    const roiValue = parseInt(roi.split('-')[0]);
    if (roiValue >= 800) return 'text-green-500';
    if (roiValue >= 500) return 'text-blue-500';
    if (roiValue >= 300) return 'text-yellow-500';
    return 'text-gray-500';
  };

  const getROICategory = (roi: string) => {
    const roiValue = parseInt(roi.split('-')[0]);
    if (roiValue >= 800) return 'High ROI (800%+)';
    if (roiValue >= 500) return 'Medium ROI (500-799%)';
    return 'Standard ROI (<500%)';
  };

  // Calculate pricing statistics
  const totalValue = allServices.reduce((sum, service) => sum + service.price, 0);
  const averagePrice = totalValue / allServices.length;
  const minPrice = Math.min(...allServices.map(s => s.price));
  const maxPrice = Math.max(...allServices.map(s => s.price));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2025 - Zion Tech Group"
        description="Complete pricing guide for all our AI-powered micro SAAS services, IT solutions, and technology services. Compare prices, ROI, and features to find the perfect solution for your business."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Comprehensive Pricing Guide 2025
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transparent pricing for all our AI-powered micro SAAS services, IT solutions, and revolutionary technology services. 
            Find the perfect solution that fits your budget and delivers exceptional ROI.
          </motion.p>
          
          {/* Contact Information Banner */}
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 max-w-4xl mx-auto border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-zion-cyan" />
                <div className="text-left">
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-zion-cyan" />
                <div className="text-left">
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-zion-cyan" />
                <div className="text-left">
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing Statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan">${minPrice.toLocaleString()}</div>
              <div className="text-gray-400">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-blue">${Math.round(averagePrice).toLocaleString()}</div>
              <div className="text-gray-400">Average Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple">${maxPrice.toLocaleString()}</div>
              <div className="text-gray-400">Premium Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-green">{allServices.length}+</div>
              <div className="text-gray-400">Services</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Analysis Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pricing Analysis & ROI Comparison
          </motion.h2>

          {/* Pricing Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Price Distribution */}
            <motion.div 
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <PieChart className="w-6 h-6 text-zion-cyan mr-2" />
                Price Distribution
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Budget-Friendly ($1K-$3K)</span>
                  <span className="text-white font-semibold">
                    {allServices.filter(s => s.price >= 1000 && s.price <= 3000).length} services
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-zion-cyan h-2 rounded-full" style={{ width: `${(allServices.filter(s => s.price >= 1000 && s.price <= 3000).length / allServices.length) * 100}%` }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Mid-Range ($3K-$5K)</span>
                  <span className="text-white font-semibold">
                    {allServices.filter(s => s.price > 3000 && s.price <= 5000).length} services
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-zion-blue h-2 rounded-full" style={{ width: `${(allServices.filter(s => s.price > 3000 && s.price <= 5000).length / allServices.length) * 100}%` }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Premium ($5K+)</span>
                  <span className="text-white font-semibold">
                    {allServices.filter(s => s.price > 5000).length} services
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-zion-purple h-2 rounded-full" style={{ width: `${(allServices.filter(s => s.price > 5000).length / allServices.length) * 100}%` }}></div>
                </div>
              </div>
            </motion.div>

            {/* ROI Analysis */}
            <motion.div 
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <BarChart className="w-6 h-6 text-zion-green mr-2" />
                ROI Analysis
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">High ROI (800%+)</span>
                  <span className="text-green-500 font-semibold">
                    {allServices.filter(s => parseInt(s.roi.split('-')[0]) >= 800).length} services
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(allServices.filter(s => parseInt(s.roi.split('-')[0]) >= 800).length / allServices.length) * 100}%` }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Medium ROI (500-799%)</span>
                  <span className="text-blue-500 font-semibold">
                    {allServices.filter(s => parseInt(s.roi.split('-')[0]) >= 500 && parseInt(s.roi.split('-')[0]) < 800).length} services
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(allServices.filter(s => parseInt(s.roi.split('-')[0]) >= 500 && parseInt(s.roi.split('-')[0]) < 800).length / allServices.length) * 100}%` }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Standard ROI (&lt;500%)</span>
                  <span className="text-yellow-500 font-semibold">
                    {allServices.filter(s => parseInt(s.roi.split('-')[0]) < 500).length} services
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${(allServices.filter(s => parseInt(s.roi.split('-')[0]) < 500).length / allServices.length) * 100}%` }}></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters and Search */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Advanced Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Price Range</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  />
                </div>
              </div>

              {/* ROI Filter */}
              <select
                value={roiFilter}
                onChange={(e) => setRoiFilter(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="all">All ROI Levels</option>
                <option value="high">High ROI (800%+)</option>
                <option value="medium">Medium ROI (500-799%)</option>
                <option value="low">Standard ROI (&lt;500%)</option>
              </select>

              {/* Innovation Level Filter */}
              <select
                value={innovationFilter}
                onChange={(e) => setInnovationFilter(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="all">All Innovation Levels</option>
                <option value="Revolutionary">Revolutionary</option>
                <option value="Advanced">Advanced</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Basic">Basic</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-gray-400">
                Showing {filteredServices.length} of {allServices.length} services
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sortedServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationBadge(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </div>
                </div>

                {/* Category and Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>
                </div>

                {/* ROI and Market Price */}
                <div className="bg-white/5 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Expected ROI</span>
                    <span className={`font-bold ${getROIColor(service.roi)}`}>{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Market Price</span>
                    <span className="text-white text-sm">{service.marketPrice}</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="space-y-2 mb-4">
                  <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="px-2 py-1 bg-white/20 text-white text-xs rounded">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Contact Button */}
                <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-4 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Pricing Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-gray-300 text-lg">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Pricing */}
                    <div className="bg-white/5 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Calculator className="w-6 h-6 text-zion-cyan mr-2" />
                        Pricing & ROI
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Monthly Price:</span>
                          <span className="text-2xl font-bold text-white">${selectedService.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Market Price:</span>
                          <span className="text-white">{selectedService.marketPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Expected ROI:</span>
                          <span className={`text-xl font-bold ${getROIColor(selectedService.roi)}`}>{selectedService.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">ROI Category:</span>
                          <span className="text-white">{getROICategory(selectedService.roi)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Delivery Time:</span>
                          <span className="text-white">{selectedService.estimatedDelivery}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Support Level:</span>
                          <span className="text-white capitalize">{selectedService.supportLevel}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="bg-white/5 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedService.features.map((feature: string, index: number) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-zion-cyan" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Benefits */}
                    <div className="bg-white/5 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                      <div className="space-y-2">
                        {selectedService.benefits.map((benefit: string, index: number) => (
                          <div key={index} className="flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5 text-zion-green" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="bg-white/5 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Use Cases</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedService.useCases.map((useCase: string, index: number) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Target className="w-5 h-5 text-zion-blue" />
                            <span className="text-gray-300">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specs */}
                    <div className="bg-white/5 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Technical Specifications</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-400 text-sm">Technology Stack:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {selectedService.technicalSpecs?.technology.map((tech: string, index: number) => (
                              <span key={index} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">Uptime:</span>
                          <span className="text-white ml-2">{selectedService.technicalSpecs?.uptime}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">API Endpoints:</span>
                          <span className="text-white ml-2">{selectedService.technicalSpecs?.apiEndpoints}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-8 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Get Started Today</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-zion-cyan" />
                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <p className="text-white font-semibold">{selectedService.contactInfo.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-zion-cyan" />
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <p className="text-white font-semibold">{selectedService.contactInfo.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ExternalLink className="w-5 h-5 text-zion-cyan" />
                      <div>
                        <p className="text-gray-400 text-sm">Website</p>
                        <a href={selectedService.contactInfo.website} className="text-white font-semibold hover:text-zion-cyan">
                          {selectedService.contactInfo.website.replace('https://', '')}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center justify-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Call Now</span>
                    </button>
                    <button className="flex-1 bg-white/10 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <span>Send Email</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComprehensivePricingGuide2025;