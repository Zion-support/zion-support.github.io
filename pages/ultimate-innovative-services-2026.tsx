import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  Database,
  Network,
  Rocket,
  Target,
  Award,
  Clock,
  Star,
  Search,
  Filter,
  DollarSign,
  BarChart,
  Lightbulb,
  Code,
  Cloud,
  Lock,
  Smartphone,
  Car,
  Heart,
  Palette,
  Briefcase,
  Building,
  Factory,
  Truck,
  Microscope,
  Atom,
  CircuitBoard,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { ULTIMATE_INNOVATIVE_SERVICES_2026 } from "@/data/ultimateInnovativeServices2026";

export default function UltimateInnovativeServices2026() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'Quantum AI', name: 'Quantum AI', icon: Atom, color: 'from-purple-500 to-pink-500' },
    { id: 'Neuromorphic AI', name: 'Neuromorphic AI', icon: Brain, color: 'from-green-500 to-emerald-500' },
    { id: 'Synthetic Biology', name: 'Synthetic Biology', icon: Microscope, color: 'from-orange-500 to-red-500' },
    { id: 'Space Technology', name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    { id: 'Advanced Materials', name: 'Advanced Materials', icon: CircuitBoard, color: 'from-yellow-500 to-orange-500' },
    { id: 'Brain-Computer Interface', name: 'Brain-Computer Interface', icon: Cpu, color: 'from-teal-500 to-cyan-500' },
    { id: 'Digital Twin', name: 'Digital Twin', icon: Eye, color: 'from-blue-500 to-indigo-500' },
    { id: 'Extended Reality', name: 'Extended Reality', icon: Palette, color: 'from-pink-500 to-purple-500' },
    { id: 'Edge AI', name: 'Edge AI', icon: Network, color: 'from-green-500 to-blue-500' },
    { id: 'Federated Learning', name: 'Federated Learning', icon: Database, color: 'from-purple-500 to-indigo-500' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', icon: Heart, color: 'from-emerald-500 to-green-500' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $15K', range: 'Under $15,000' },
    { id: 'medium', name: '$15K - $20K', range: '$15,000 - $20,000' },
    { id: 'high', name: 'Over $20K', range: 'Over $20,000' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured', icon: Star },
    { id: 'price-low', name: 'Price: Low to High', icon: DollarSign },
    { id: 'price-high', name: 'Price: High to Low', icon: DollarSign },
    { id: 'innovation', name: 'Innovation Level', icon: Lightbulb },
    { id: 'roi', name: 'ROI Potential', icon: TrendingUp }
  ];

  // Filter services based on search, category, and price
  const filteredServices = ULTIMATE_INNOVATIVE_SERVICES_2026.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange === 'low') matchesPrice = service.price < 15000;
    else if (selectedPriceRange === 'medium') matchesPrice = service.price >= 15000 && service.price <= 20000;
    else if (selectedPriceRange === 'high') matchesPrice = service.price > 20000;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services based on selected option
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'innovation':
        return b.innovationLevel.localeCompare(a.innovationLevel);
      case 'roi':
        const aROI = parseInt(a.roi.split('%')[0]);
        const bROI = parseInt(b.roi.split('%')[0]);
        return bROI - aROI;
      default:
        return 0;
    }
  });

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getCategoryIcon = (category: string) => {
    const categoryObj = categories.find(cat => cat.id === category);
    return categoryObj ? categoryObj.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const categoryObj = categories.find(cat => cat.id === category);
    return categoryObj ? categoryObj.color : 'from-blue-500 to-cyan-500';
  };

  const totalServices = ULTIMATE_INNOVATIVE_SERVICES_2026.length;
  const totalValue = ULTIMATE_INNOVATIVE_SERVICES_2026.reduce((sum, service) => sum + service.price, 0);
  const avgROI = ULTIMATE_INNOVATIVE_SERVICES_2026.reduce((sum, service) => {
    const roi = parseInt(service.roi.split('%')[0]);
    return sum + roi;
  }, 0) / totalServices;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="2026 Ultimate Innovative Services - Zion Tech Group"
        description="Discover our revolutionary 2026 innovative services portfolio featuring Quantum AI, Neuromorphic Computing, Synthetic Biology, Space Technology, and more cutting-edge solutions."
        keywords="2026 innovative services, quantum AI, neuromorphic computing, synthetic biology, space technology, brain-computer interface, digital twin, extended reality, edge AI, federated learning, sustainable technology"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            2026 Ultimate
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Innovative</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services Portfolio</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8"
          >
            Experience the future of technology with our revolutionary portfolio of 12 cutting-edge innovative services. 
            From Quantum AI to Brain-Computer Interfaces, we're redefining what's possible.
          </motion.p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{totalServices}</div>
              <div className="text-white/80">Revolutionary Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">${(totalValue / 1000).toFixed(0)}K</div>
              <div className="text-white/80">Monthly Portfolio Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{avgROI.toFixed(0)}%</div>
              <div className="text-white/80">Average ROI Potential</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4 inline mr-2" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              {priceRanges.map((range) => (
                <option key={range.id} value={range.id} className="bg-zion-slate text-white">
                  {range.name}
                </option>
              ))}
            </select>

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id} className="bg-zion-slate text-white">
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedServices.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-zion-cyan mb-6">Try adjusting your search criteria or browse all our innovative services.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-purple transition-all duration-300"
              >
                View All Services
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence>
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    {/* Service Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center`}>
                            {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                          </div>
                          <div>
                            <div className="text-xs text-gray-400 uppercase tracking-wide">{service.category}</div>
                            <div className="text-xs text-gray-400">{service.subcategory}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                          <div className="text-sm text-gray-400">/month</div>
                        </div>
                      </div>

                      {/* Service Title and Description */}
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Innovation Level Badge */}
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                          <Lightbulb className="w-3 h-3 mr-1" />
                          {service.innovationLevel}
                        </span>
                      </div>

                      {/* ROI Badge */}
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {service.roi}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 4).map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/10 text-zion-cyan text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Section */}
                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          {/* Features */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                            <div className="grid grid-cols-1 gap-1">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <div key={idx} className="flex items-center text-sm text-gray-300">
                                  <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Benefits */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                            <div className="grid grid-cols-1 gap-1">
                              {service.benefits.slice(0, 3).map((benefit, idx) => (
                                <div key={idx} className="flex items-center text-sm text-gray-300">
                                  <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                                  {benefit}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Use Cases */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                            <div className="grid grid-cols-1 gap-1">
                              {service.useCases.slice(0, 3).map((useCase, idx) => (
                                <div key={idx} className="flex items-center text-sm text-gray-300">
                                  <Target className="w-3 h-3 text-zion-blue mr-2 flex-shrink-0" />
                                  {useCase}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technical Specs */}
                          {service.technicalSpecs && (
                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-white mb-2">Technical Specifications:</h4>
                              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                                <div>
                                  <span className="font-medium">Technology:</span>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {service.technicalSpecs.technology.slice(0, 3).map((tech, idx) => (
                                      <span key={idx} className="px-2 py-1 bg-white/10 text-zion-cyan text-xs rounded">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <span className="font-medium">Uptime:</span>
                                  <div className="mt-1">{service.technicalSpecs.uptime}</div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Market Info */}
                          <div className="mb-6">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              {service.marketSize && (
                                <div>
                                  <span className="font-medium text-white">Market Size:</span>
                                  <div className="text-gray-300">{service.marketSize}</div>
                                </div>
                              )}
                              {service.competitors && (
                                <div>
                                  <span className="font-medium text-white">Competitors:</span>
                                  <div className="text-gray-300">{service.competitors.slice(0, 2).join(', ')}</div>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Unique Value */}
                          {service.uniqueValue && (
                            <div className="mb-6 p-4 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-lg border border-zion-cyan/30">
                              <h4 className="text-sm font-semibold text-white mb-2">Unique Value Proposition:</h4>
                              <p className="text-sm text-gray-300">{service.uniqueValue}</p>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => toggleServiceExpansion(service.id)}
                        className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:from-zion-blue hover:to-zion-purple transition-all duration-300"
                      >
                        {expandedService === service.id ? 'Show Less' : 'Learn More'}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <Link
                        to="/contact"
                        className="px-4 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-zion-cyan hover:text-white transition-all duration-300"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Contact
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business with 2026 Innovation?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto"
          >
            Join the future of technology with our revolutionary innovative services. 
            Our team of experts is ready to help you implement these cutting-edge solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-purple transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Innovation Journey
            </Link>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Visit Our Website
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}