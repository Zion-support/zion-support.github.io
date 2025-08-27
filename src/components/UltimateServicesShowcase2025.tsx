import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, ArrowRight, ChevronDown, Globe, Zap, Shield, Brain, Cloud, Lock, Users, TrendingUp, Award, Clock, DollarSign, CheckCircle, Sparkles, Rocket, Atom, ShieldCheck, Cpu, Database, Network, Smartphone, BarChart3, Code, Server, Chip, Wifi, Globe2, Bot, Workflow, Eye, Target, Handshake, Lightbulb, Building, Truck, Leaf, Satellite, Gamepad2, Coins, Heart, Activity, X, Phone, Mail } from 'lucide-react';
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

  // Enhanced categories with better organization and icons
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category.includes('AI')).length, icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-red-500 to-pink-500' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐', color: 'from-blue-500 to-cyan-500' },
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍', color: 'from-violet-500 to-purple-500' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-teal-500 to-cyan-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: allServices.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: allServices.filter(s => s.category === 'AI & Marketing').length, icon: '📢', color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '📊', color: 'from-blue-500 to-indigo-500' },
    { id: 'Space Technology', name: 'Space Technology', count: allServices.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-slate-500 to-gray-500' },
    { id: 'Sustainability', name: 'Sustainability', count: allServices.filter(s => s.category === 'Sustainability').length, icon: '🌱', color: 'from-green-500 to-emerald-500' }
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
      case 'rating':
        return b.price - a.price; // Using price as rating for now
      case 'price':
        return a.price - b.price;
      case 'reviews':
        return b.price - a.price; // Using price as reviews for now
      case 'name':
        return a.title.localeCompare(b.title);
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

  // Enhanced futuristic background component
  const FuturisticBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
      
      {/* Enhanced floating particles with neon glow */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 shadow-lg shadow-cyan-400/50"
            animate={{
              x: [0, 200, 0],
              y: [0, -200, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 5 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced gradient orbs with neon glow */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* New neon accent orbs */}
      <motion.div 
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Animated neon lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              top: `${15 + i * 10}%`,
              left: '0%',
              right: '0%',
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute border border-cyan-400/20 opacity-30 ${
              i % 3 === 0 ? 'w-10 h-10' : i % 3 === 1 ? 'w-8 h-8' : 'w-6 h-6'
            }`}
            style={{
              left: `${8 + i * 7}%`,
              top: `${12 + i * 6}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.3, 0.8],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <FuturisticBackground />

      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">2025 Innovation Hub</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Ultimate Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge micro SAAS solutions powered by AI, quantum computing, blockchain, and emerging technologies. 
              Transform your business with innovative, intelligent, and diversified services.
            </p>
          </motion.div>

          {/* Enhanced Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
              {/* Enhanced Search Bar */}
              <div className="relative flex-1 max-w-lg">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                />
              </div>

              {/* Enhanced Filter Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                >
                  <option value="rating" className="bg-zion-slate-dark text-white">Sort by Rating</option>
                  <option value="price" className="bg-zion-slate-dark text-white">Sort by Price</option>
                  <option value="reviews" className="bg-zion-slate-dark text-white">Sort by Reviews</option>
                  <option value="name" className="bg-zion-slate-dark text-white">Sort by Name</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500/30 text-cyan-400' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500/30 text-cyan-400' 
                      : 'text-cyan-400 hover:text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg shadow-cyan-500/25`
                      : 'bg-white/5 backdrop-blur-sm border-cyan-400/20 text-gray-300 hover:bg-white/10 hover:border-cyan-400/40'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-bold">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="relative pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
            }
          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`group cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300'
                    : 'bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300'
                }`}
                onClick={() => handleServiceClick(service)}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                  <div className="ml-4 flex flex-col items-end">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400">per month</div>
                  </div>
                </div>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                      +{service.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Service Features Preview */}
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Service Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-cyan-400/20">
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.estimatedDelivery}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Shield className="w-4 h-4 mr-1" />
                    {service.supportLevel}
                  </div>
                  <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
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
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-dark border border-cyan-400/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-cyan-400/20">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedService.title}
                    </h2>
                    <p className="text-gray-300 text-lg">
                      {selectedService.description}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="ml-4 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Pricing and Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-cyan-400/20">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      ${selectedService.price.toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm">per month</div>
                    <div className="text-gray-300 text-sm mt-2">
                      Market: {selectedService.marketPrice}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-cyan-400/20">
                    <div className="text-2xl font-bold text-green-400 mb-2">
                      {selectedService.roi}
                    </div>
                    <div className="text-gray-400 text-sm">ROI</div>
                    <div className="text-gray-300 text-sm mt-2">
                      Innovation: {selectedService.innovationLevel}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-cyan-400/20">
                    <div className="text-2xl font-bold text-purple-400 mb-2">
                      {selectedService.estimatedDelivery}
                    </div>
                    <div className="text-gray-400 text-sm">Delivery</div>
                    <div className="text-gray-300 text-sm mt-2">
                      Support: {selectedService.supportLevel}
                    </div>
                  </div>
                </div>

                {/* Features and Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Use Cases and Target Audience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Target className="w-5 h-5 text-blue-400 mr-2" />
                      Use Cases
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.useCases.map((useCase, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-400/30"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Users className="w-5 h-5 text-purple-400 mr-2" />
                      Target Audience
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.targetAudience.map((audience, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-400/30"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technical Specifications */}
                {selectedService.technicalSpecs && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Code className="w-5 h-5 text-yellow-400 mr-2" />
                      Technical Specifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-300 mb-2">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.technology.map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-400/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-300 mb-2">Security & Compliance</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.security.map((security, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-400/30"
                            >
                              {security}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Information */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-400/30">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Handshake className="w-5 h-5 text-cyan-400 mr-2" />
                    Get Started Today
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center text-gray-300">
                      <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                      {selectedService.contactInfo.phone}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Mail className="w-4 h-4 text-cyan-400 mr-2" />
                      {selectedService.contactInfo.email}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Globe className="w-4 h-4 text-cyan-400 mr-2" />
                      {selectedService.contactInfo.website}
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                      Request Custom Quote
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

export default UltimateServicesShowcase2025;