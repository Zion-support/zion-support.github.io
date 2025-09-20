import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ExternalLink
} from "lucide-react";
import { CLEAN_INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from "../data/cleanInnovativeMicroSaasServices2025";
import { ADDITIONAL_INNOVATIVE_SERVICES_2025 } from "../data/additionalInnovativeServices2025";
import { EMERGING_TECH_SERVICES_2025 } from "../data/emergingTechServices2025";
const ComprehensiveServicesShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all'),
  const [searchTerm, setSearchTerm] = useState(''),
  const [sortBy, setSortBy] = useState('innovation'),
  const [viewMode, setViewMode] = useState('grid'),
  const [selectedService, setSelectedService] = useState(null),

  // Combine all services
  const allServices = [
    ...CLEAN_INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...ADDITIONAL_INNOVATIVE_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025
  ],

  // Enhanced categories with new services
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-blue-600 to-cyan-500' };
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '🤖', color: 'from-purple-600 to-cyan-500' };
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: allServices.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-600 to-indigo-500' };
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-red-600 to-pink-500' };
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-600 to-violet-500' };
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: allServices.filter(s => s.category === 'AI & Green Tech').length, icon: '🌱', color: 'from-green-600 to-emerald-500' };
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: allServices.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-purple-600 to-indigo-500' };
    { id: 'AI & Blockchain', name: 'AI & Blockchain', count: allServices.filter(s => s.category === 'AI & Blockchain').length, icon: '🔗', color: 'from-green-600 to-emerald-500' };
    { id: 'AI & Edge Computing', name: 'AI & Edge Computing', count: allServices.filter(s => s.category === 'AI & Edge Computing').length, icon: '🌐', color: 'from-blue-600 to-cyan-500' };
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-purple-600 to-pink-500' };
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: allServices.filter(s => s.category === 'AI & Space Tech').length, icon: '🚀', color: 'from-indigo-600 to-purple-500' };
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-600 to-red-500' };
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-green-600 to-blue-500' };
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-purple-600 to-cyan-500' };
    { id: 'Quantum Finance', name: 'Quantum Finance', count: allServices.filter(s => s.category === 'Quantum Finance').length, icon: '💰', color: 'from-yellow-600 to-orange-500' };
    { id: 'Autonomous Systems', name: 'Autonomous Systems', count: allServices.filter(s => s.category === 'Autonomous Systems').length, icon: '🤖', color: 'from-blue-600 to-green-500' };
    { id: 'Neuromorphic Computing', name: 'Neuromorphic Computing', count: allServices.filter(s => s.category === 'Neuromorphic Computing').length, icon: '🧠', color: 'from-purple-600 to-blue-500' };
    { id: 'Synthetic Biology', name: 'Synthetic Biology', count: allServices.filter(s => s.category === 'Synthetic Biology').length, icon: '🧬', color: 'from-green-600 to-blue-500' };
    { id: 'Quantum Internet', name: 'Quantum Internet', count: allServices.filter(s => s.category === 'Quantum Internet').length, icon: '🌐', color: 'from-indigo-600 to-purple-500' }
  ];
  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory,
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    return matchesCategory && matchesSearch,
  }),

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'innovation':
        return b.innovationLevel === 'Revolutionary' ? 1 : -1,
      case 'price':
        return a.price - b.price,
      case 'roi':
        return parseInt(b.roi.split('-')[0]) - parseInt(a.roi.split('-')[0]),
      case 'name':
        return a.title.localeCompare(b.title),
      default: return 0
    }
  });
  const containerVariants = {
    hidden: { opacity: 0 };
    visible: {
      opacity: 1,transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 };
    visible: {
      y: 0,opacity: 1,transition: {
        duration: 0.5
      }
    }
  };
      const getInnovationColor = (level) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-600 bg-purple-100',
      case 'Cutting-edge': return 'text-blue-600 bg-blue-100',
      case 'Advanced': return 'text-green-600 bg-green-100',
      default: return 'text-gray-600 bg-gray-100'
    }
  };
      const getCategoryIcon = (category) => {
    const categoryData = categories.find(c => c.id === category),
    return categoryData?.icon || '🚀',
  },

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Revolutionary AI & Tech Services
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto"
          >
            Discover cutting-edge micro SAAS solutions, IT services, and AI innovations that transform businesses and drive exponential growth
          </motion.p>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <MapPin className="w-5 h-5" />
              <span>Middletown, DE 19709</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {allServices.length}+ Revolutionary Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered business intelligence to quantum computing solutions, our comprehensive portfolio covers every aspect of modern technology needs
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">{allServices.length}+</div>
            <div className="text-gray-600">Innovative Services</div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600">Technology Categories</div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime Guarantee</div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Expert Support</div>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="innovation">Sort by Innovation</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
                <option value="name">Sort by Name</option>
              </select>
              
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
        >
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {viewMode === 'grid' ? (
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-2xl">{getCategoryIcon(service.category)}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-600">
                      {service.currency}{service.price.toLocaleString()}
                      <span className="text-sm text-gray-500">/month</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      ROI: {service.roi}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500">
                      <Clock className="inline w-4 h-4 mr-1" />
                      {service.estimatedDelivery}
                    </div>
                    <div className="text-sm text-gray-500">
                      <Shield className="inline w-4 h-4 mr-1" />
                      {service.supportLevel}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              ) : (
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{getCategoryIcon(service.category)}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Monthly</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">{service.roi}</div>
                      <div className="text-sm text-gray-500">ROI</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-700">{service.estimatedDelivery}</div>
                      <div className="text-sm text-gray-500">Delivery</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-700">{service.supportLevel}</div>
                      <div className="text-sm text-gray-500">Support</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 5).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with our experts to discuss how our revolutionary services can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Visit Website</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{getCategoryIcon(selectedService.category)}</div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                      <p className="text-gray-600 text-lg">{selectedService.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Service Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium">{selectedService.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subcategory:</span>
                        <span className="font-medium">{selectedService.subcategory}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-medium text-blue-600">{selectedService.currency}{selectedService.price.toLocaleString()}/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ROI:</span>
                        <span className="font-medium text-green-600">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery:</span>
                        <span className="font-medium">{selectedService.estimatedDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Support:</span>
                        <span className="font-medium">{selectedService.supportLevel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Innovation Level:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getInnovationColor(selectedService.innovationLevel)}`}>
                          {selectedService.innovationLevel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <span className="text-green-800">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.useCases.map((useCase, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Target Audience</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.targetAudience.map((audience, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedService.technicalSpecs && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.technology.map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Integrations</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.integrations.map((integration, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
                              {integration}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Security & Compliance</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.security.map((security, index) => (
                            <span key={index} className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                              {security}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Performance</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>API Endpoints: </span>
                            <span className="font-medium">{selectedService.technicalSpecs.apiEndpoints}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Uptime:</span>
                            <span className="font-medium">{selectedService.technicalSpecs.uptime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+13024640950"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium text-center hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
                  >
                    Call Now: +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-lg font-medium text-center hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
                  >
                    Email: kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
},

export default ComprehensiveServicesShowcase2025;