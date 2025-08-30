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
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  TrendingDown,
  Eye,
  Heart,
  Share2
} from 'lucide-react';
import { COMPREHENSIVE_EXPANDED_SERVICES_2025 } from '../data/comprehensiveExpandedServices2025';

const ComprehensiveExpandedServices2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('innovation');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = COMPREHENSIVE_EXPANDED_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'Cybersecurity & AI', name: 'Cybersecurity & AI', count: allServices.filter(s => s.category === 'Cybersecurity & AI').length, icon: '🛡️', color: 'from-zion-red to-zion-orange' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'Edge Computing & AI', name: 'Edge Computing & AI', count: allServices.filter(s => s.category === 'Edge Computing & AI').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Blockchain & Supply Chain', name: 'Blockchain & Supply Chain', count: allServices.filter(s => s.category === 'Blockchain & Supply Chain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'Metaverse & AR/VR', name: 'Metaverse & AR/VR', count: allServices.filter(s => s.category === 'Metaverse & AR/VR').length, icon: '🌍', color: 'from-zion-purple to-zion-indigo' },
    { id: 'AI & Finance', name: 'AI & Finance', count: allServices.filter(s => s.category === 'AI & Finance').length, icon: '💰', color: 'from-zion-green to-zion-blue' },
    { id: 'Green Technology', name: 'Green Technology', count: allServices.filter(s => s.category === 'Green Technology').length, icon: '🌱', color: 'from-zion-green to-zion-emerald' },
    { id: 'Space Technology', name: 'Space Technology', count: allServices.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-zion-blue to-zion-purple' },
    { id: 'RPA & Automation', name: 'RPA & Automation', count: allServices.filter(s => s.category === 'RPA & Automation').length, icon: '🤖', color: 'from-zion-orange to-zion-red' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'innovation':
        return b.innovationLevel === 'Revolutionary' ? 1 : a.innovationLevel === 'Revolutionary' ? -1 : 0;
      case 'price':
        return a.price - b.price;
      case 'roi':
        return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', ''));
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

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-600 bg-purple-100';
      case 'Cutting-Edge': return 'text-blue-600 bg-blue-100';
      case 'Advanced': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getInnovationIcon = (level: string) => {
    switch (level) {
      case 'Revolutionary': return '🚀';
      case 'Cutting-Edge': return '⚡';
      case 'Advanced': return '🔥';
      default: return '💡';
    }
  };

  return (
    <>
      <Helmet>
        <title>Comprehensive Expanded Services 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive portfolio of innovative micro SAAS services, AI solutions, and cutting-edge technology services. Transform your business with our advanced solutions." />
        <meta name="keywords" content="micro SAAS, AI services, cybersecurity, quantum computing, edge computing, blockchain, healthcare AI, metaverse, fintech, green technology, space technology, RPA automation" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-expanded-services-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Comprehensive Expanded Services 2025
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
            >
              Transform your business with Zion Tech Group's cutting-edge micro SAAS services, 
              AI solutions, and revolutionary technology platforms
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-dark text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 bg-zion-blue hover:bg-zion-blue-dark text-white font-semibold rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Banner */}
        <section className="bg-gradient-to-r from-zion-cyan to-zion-blue py-8 px-4">
          <div className="max-w-7xl mx-auto text-center text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-zion-slate-light">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-3" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-zion-slate-light">364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filters and Search */}
            <div className="mb-8 space-y-4">
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                        : 'bg-white/10 backdrop-blur-sm text-zion-slate-light hover:bg-white/20'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Sort and View Controls */}
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-zion-slate-light">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white/10 backdrop-blur-sm border border-zion-slate-light/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="innovation">Innovation Level</option>
                    <option value="price">Price</option>
                    <option value="roi">ROI</option>
                    <option value="name">Name</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-zion-slate-light">View:</span>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-zion-cyan text-white' : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Services Grid/List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}
            >
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`bg-white/5 backdrop-blur-sm border border-zion-slate-light/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group ${
                    viewMode === 'list' ? 'flex items-start space-x-6' : ''
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                            {service.title}
                          </h3>
                          <div className="flex items-center space-x-2 mb-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLevel)}`}>
                              {getInnovationIcon(service.innovationLevel)} {service.innovationLevel}
                            </span>
                            <span className="text-zion-slate-light text-sm">{service.category}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-zion-slate-light mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-zion-slate-light text-sm">Starting Price:</span>
                          <span className="text-2xl font-bold text-zion-cyan">
                            ${service.price.toLocaleString()}
                            <span className="text-sm text-zion-slate-light">/month</span>
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-zion-slate-light text-sm">ROI:</span>
                          <span className="text-green-400 font-semibold">{service.roi}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-zion-slate-light text-sm">Delivery:</span>
                          <span className="text-zion-slate-light">{service.estimatedDelivery}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 4).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <button className="text-zion-cyan hover:text-zion-cyan-dark font-medium text-sm group-hover:underline">
                          Learn More
                        </button>
                        <div className="flex items-center space-x-2 text-zion-slate-light">
                          <Eye className="w-4 h-4" />
                          <span className="text-xs">View Details</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    // List View
                    <>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                              {service.title}
                            </h3>
                            <div className="flex items-center space-x-3 mb-3">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getInnovationColor(service.innovationLevel)}`}>
                                {getInnovationIcon(service.innovationLevel)} {service.innovationLevel}
                              </span>
                              <span className="text-zion-slate-light">{service.category}</span>
                              <span className="text-zion-slate-light">•</span>
                              <span className="text-zion-slate-light">{service.subcategory}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-zion-cyan">
                              ${service.price.toLocaleString()}
                              <span className="text-sm text-zion-slate-light">/month</span>
                            </div>
                            <div className="text-green-400 font-semibold text-sm">{service.roi} ROI</div>
                          </div>
                        </div>

                        <p className="text-zion-slate-light mb-4 text-lg">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <span className="text-zion-slate-light text-sm">Delivery:</span>
                            <p className="text-white font-medium">{service.estimatedDelivery}</p>
                          </div>
                          <div>
                            <span className="text-zion-slate-light text-sm">Support:</span>
                            <p className="text-white font-medium">{service.supportLevel}</p>
                          </div>
                          <div>
                            <span className="text-zion-slate-light text-sm">Market Price:</span>
                            <p className="text-white font-medium">{service.marketPrice}</p>
                          </div>
                          <div>
                            <span className="text-zion-slate-light text-sm">Trend:</span>
                            <p className="text-white font-medium">{service.marketTrend}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-zion-slate-light/20 text-zion-slate-light text-sm rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <button className="text-zion-cyan hover:text-zion-cyan-dark font-medium group-hover:underline">
                            Learn More
                          </button>
                          <div className="flex items-center space-x-4">
                            <a href="tel:+13024640950" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                              <Phone className="w-4 h-4 inline mr-1" />
                              Call
                            </a>
                            <a href="mailto:kleber@ziontechgroup.com" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                              <Mail className="w-4 h-4 inline mr-1" />
                              Email
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {sortedServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-zion-slate-light text-lg mb-4">
                  No services found matching your criteria
                </div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="text-zion-cyan hover:text-zion-cyan-dark font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get in touch with our team to discuss how our innovative services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan-dark text-white font-semibold rounded-lg transition-colors text-lg"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-zion-blue hover:bg-zion-blue-dark text-white font-semibold rounded-lg transition-colors text-lg"
              >
                <Mail className="w-6 h-6 mr-2" />
                Send Email
              </a>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p className="mb-2">Visit our website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-dark border border-zion-slate-light/20 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-zion-slate-light hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                    <p className="text-zion-slate-light">{selectedService.description}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-zion-slate-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <TrendingUp className="w-5 h-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-zion-slate-light">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Pricing & Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Starting Price:</span>
                        <span className="text-3xl font-bold text-zion-cyan">
                          ${selectedService.price.toLocaleString()}
                          <span className="text-sm text-zion-slate-light">/month</span>
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">ROI:</span>
                        <span className="text-green-400 font-semibold">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Delivery:</span>
                        <span className="text-white">{selectedService.estimatedDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Support:</span>
                        <span className="text-white">{selectedService.supportLevel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Market Price:</span>
                        <span className="text-white">{selectedService.marketPrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Use Cases</h3>
                    <div className="space-y-2">
                      {selectedService.useCases.map((useCase, index) => (
                        <div key={index} className="flex items-center">
                          <Target className="w-4 h-4 text-zion-cyan mr-2" />
                          <span className="text-zion-slate-light">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Target Audience</h3>
                    <div className="space-y-2">
                      {selectedService.targetAudience.map((audience, index) => (
                        <div key={index} className="flex items-center">
                          <Users className="w-4 h-4 text-zion-cyan mr-2" />
                          <span className="text-zion-slate-light">{audience}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-zion-cyan mr-3" />
                        <a href={`tel:${selectedService.contactInfo.phone}`} className="text-zion-cyan hover:underline">
                          {selectedService.contactInfo.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-zion-cyan mr-3" />
                        <a href={`mailto:${selectedService.contactInfo.email}`} className="text-zion-cyan hover:underline">
                          {selectedService.contactInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-zion-cyan mr-3" />
                        <span className="text-zion-slate-light">{selectedService.contactInfo.address}</span>
                      </div>
                      <div className="flex items-center">
                        <ExternalLink className="w-5 h-5 text-zion-cyan mr-3" />
                        <a href={selectedService.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">
                          {selectedService.contactInfo.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zion-slate-light/20">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={`tel:${selectedService.contactInfo.phone}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-dark text-white font-semibold rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                  <a 
                    href={`mailto:${selectedService.contactInfo.email}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-zion-blue hover:bg-zion-blue-dark text-white font-semibold rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                  <a 
                    href={selectedService.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-zion-slate-light/20 hover:bg-zion-slate-light/30 text-white font-semibold rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visit Website
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ComprehensiveExpandedServices2025;