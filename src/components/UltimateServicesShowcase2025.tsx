import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, ArrowRight, ChevronDown, Globe, Zap, Shield, Brain, Cloud, Lock, Users, TrendingUp, Award, Clock, DollarSign, CheckCircle } from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

interface ServiceContact {
  mobile: string;
  email: string;
  address: string;
  website: string;
}

const UltimateServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '📊' },
    { id: 'AI & Legal', name: 'AI & Legal', count: allServices.filter(s => s.category === 'AI & Legal').length, icon: '⚖️' },
    { id: 'AI & Logistics', name: 'AI & Logistics', count: allServices.filter(s => s.category === 'AI & Logistics').length, icon: '🚚' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: allServices.filter(s => s.category === 'AI & Marketing').length, icon: '📢' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥' },
    { id: 'AI & Manufacturing', name: 'AI & Manufacturing', count: allServices.filter(s => s.category === 'AI & Manufacturing').length, icon: '🏭' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️' },
    { id: 'AI & Transportation', name: 'AI & Transportation', count: allServices.filter(s => s.category === 'AI & Transportation').length, icon: '🚗' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐' },
    { id: 'Sustainability', name: 'Sustainability', count: allServices.filter(s => s.category === 'Sustainability').length, icon: '🌱' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗' },
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'reviews':
        return b.reviews - a.reviews;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

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

const UltimateServicesShowcase2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ultimate Services Showcase 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our comprehensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered platforms. 
            Transform your business with cutting-edge technology solutions designed for the future.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-6 mb-8 border border-blue-500/30">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Contact Zion Tech Group</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Phone</h3>
                <p className="text-lg">+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Email</h3>
                <p className="text-lg">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Address</h3>
                <p className="text-lg">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-4">
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                Visit Our Website
              </a>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/30">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI & Machine Learning</h3>
            <p className="text-gray-300 mb-4">
              Advanced artificial intelligence solutions for business automation and insights
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Predictive Analytics</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Automated Decision Making</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/30">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cloud & DevOps</h3>
            <p className="text-gray-300 mb-4">
              Scalable cloud infrastructure and modern development practices
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Cloud Migration</li>
              <li>• Container Orchestration</li>
              <li>• CI/CD Pipelines</li>
              <li>• Infrastructure as Code</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/30">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cybersecurity</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive security solutions to protect your digital assets
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Threat Detection</li>
              <li>• Identity Management</li>
              <li>• Compliance</li>
              <li>• Incident Response</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Get Started Today
          </a>
        </div>
      </div>

      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Zion Tech Group
              <span className="block text-4xl md:text-5xl mt-2">
                Ultimate Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
              Discover our revolutionary portfolio of cutting-edge micro SAAS solutions, AI-powered innovations, and quantum computing services designed to transform your business and drive competitive advantage in the digital age
            </p>
          </motion.div>

          {/* Key Statistics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="glass rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group">
              <div className="text-3xl font-bold text-zion-cyan mb-2 group-hover:scale-110 transition-transform duration-300">{allServices.length}+</div>
              <div className="text-sm text-gray-300">Innovative Services</div>
            </motion.div>
            <motion.div variants={itemVariants} className="glass rounded-xl p-6 border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 group">
              <div className="text-3xl font-bold text-zion-purple mb-2 group-hover:scale-110 transition-transform duration-300">{categories.length}</div>
              <div className="text-sm text-gray-300">Technology Categories</div>
            </motion.div>
            <motion.div variants={itemVariants} className="glass rounded-xl p-6 border border-zion-green/20 hover:border-zion-green/40 transition-all duration-300 group">
              <div className="text-3xl font-bold text-zion-green mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </motion.div>
            <motion.div variants={itemVariants} className="glass rounded-xl p-6 border border-zion-orange/20 hover:border-zion-orange/40 transition-all duration-300 group">
              <div className="text-3xl font-bold text-zion-orange mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </motion.div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            className="max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent mb-6">
              Ultimate Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of 40+ cutting-edge AI, quantum computing, and emerging technology solutions designed to transform your business and drive unprecedented growth
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-zion-cyan/20 border border-zion-cyan/30 rounded-full px-6 py-3">
                <span className="text-zion-cyan font-semibold">🚀 {allServices.length} Services</span>
              </div>
              <div className="bg-zion-purple/20 border border-zion-purple/30 rounded-full px-6 py-3">
                <span className="text-zion-purple font-semibold">⚡ AI-Powered</span>
              </div>
              <div className="bg-zion-pink/20 border border-zion-pink/30 rounded-full px-6 py-3">
                <span className="text-zion-pink font-semibold">💎 Enterprise Grade</span>
              </div>
              <div className="bg-zion-cyan/20 border border-zion-cyan/30 rounded-full px-6 py-3">
                <span className="text-zion-cyan font-semibold">💰 ROI: 200-1000%</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
              <div className="bg-zion-slate-800/50 rounded-xl p-6 border border-zion-cyan/20">
                <h3 className="text-zion-cyan font-bold text-lg mb-3">AI & Automation</h3>
                <p className="text-zion-slate-light text-sm">From $1,299/month</p>
                <p className="text-zion-slate-light text-xs mt-2">Transform operations with intelligent automation</p>
              </div>
              
              <div className="bg-zion-slate-800/50 rounded-xl p-6 border border-zion-purple/20">
                <h3 className="text-zion-purple font-bold text-lg mb-3">Quantum Computing</h3>
                <p className="text-zion-slate-light text-sm">From $6,999/month</p>
                <p className="text-zion-slate-light text-xs mt-2">Solve impossible problems with quantum power</p>
              </div>
              
              <div className="bg-zion-slate-800/50 rounded-xl p-6 border border-zion-pink/20">
                <h3 className="text-zion-pink font-bold text-lg mb-3">Specialized Solutions</h3>
                <p className="text-zion-slate-light text-sm">From $1,699/month</p>
                <p className="text-zion-slate-light text-xs mt-2">Industry-specific AI solutions</p>
              </div>
              
              <div className="bg-zion-slate-800/50 rounded-xl p-6 border border-zion-cyan/20">
                <h3 className="text-zion-cyan font-bold text-lg mb-3">Emerging Tech</h3>
                <p className="text-zion-slate-light text-sm">Custom pricing</p>
                <p className="text-zion-slate-light text-xs mt-2">Cutting-edge innovation platforms</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search services, features, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 glass border border-zion-cyan/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 text-lg"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-zion-cyan" />
            </div>

            {/* Sort and View Controls */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-300">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="glass border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-zion-cyan"
                >
                  <option value="rating">Rating</option>
                  <option value="price">Price</option>
                  <option value="reviews">Reviews</option>
                  <option value="name">Name</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'glass text-gray-300 hover:text-white'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-zion-cyan text-white' : 'glass text-gray-300 hover:text-white'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'glass border border-white/20 text-gray-300 hover:bg-white/10 hover:border-zion-cyan/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className={viewMode === 'grid'
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
            }
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={viewMode === 'grid'
                  ? "glass rounded-2xl p-6 border border-white/20 hover:border-zion-cyan/40 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer group"
                  : "glass rounded-2xl p-6 border border-white/20 hover:border-zion-cyan/40 transition-all duration-500 cursor-pointer group"
                }
                onClick={() => handleServiceClick(service)}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-600'}`} />
                    ))}
                    <span className="text-sm text-gray-400 ml-1">({service.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">{service.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">{service.description}</p>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full border border-zion-purple/30">
                    {service.category}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-zion-green mb-2">{service.price}<span className="text-sm text-gray-400">{service.period}</span></div>
                  <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-zion-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-gray-400 flex items-center">
                        <span className="w-3 h-3 bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {service.estimatedDelivery}
                  </div>
                  <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 flex items-center gap-1 group-hover:gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results and competitive advantage
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="glass rounded-xl p-6 border border-white/20 hover:border-zion-cyan/30 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">We stay ahead of the curve with the latest technologies and methodologies, ensuring your business always has a competitive edge.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-xl p-6 border border-white/20 hover:border-zion-cyan/30 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Results Driven</h3>
              <p className="text-gray-300">Our solutions are designed to deliver measurable business outcomes, from increased efficiency to improved customer satisfaction.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-xl p-6 border border-white/20 hover:border-zion-cyan/30 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-3">Partnership Approach</h3>
              <p className="text-gray-300">We work as an extension of your team, providing ongoing support and collaboration to ensure long-term success.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-6xl">{selectedService.icon}</div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">{selectedService.name}</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">{selectedService.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-zion-cyan mb-3">Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-zion-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-zion-purple mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <TrendingUp className="w-4 h-4 text-zion-green mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-zion-green">{selectedService.price}</div>
                  <div className="text-sm text-gray-400">{selectedService.period}</div>
                </div>
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-zion-cyan">{selectedService.rating}</div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-zion-purple">{selectedService.roi}</div>
                  <div className="text-sm text-gray-400">ROI</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                {selectedService.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-zion-blue/20 text-zion-blue text-sm rounded-full border border-zion-blue/30">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300">
                  Get Started
                </button>
                <button className="flex-1 glass border border-zion-cyan/30 text-zion-cyan px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UltimateServicesShowcase2025;