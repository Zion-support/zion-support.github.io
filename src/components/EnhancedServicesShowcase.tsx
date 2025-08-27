import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  DollarSign, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Lock, 
  Globe, 
  Heart, 
  Rocket, 
  Code, 
  Building, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ALL_ENHANCED_SERVICES } from '../data/enhancedMicroSaasServices2025';

export default function EnhancedServicesShowcase() {
                </div>

                {/* Tagline */}
                <p className="text-gray-300 text-sm mb-4 text-center">{service.tagline}</p>

                {/* Pricing */}
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Pricing</h4>
                  <div className="space-y-1 text-xs text-gray-300">
                    <div>Monthly: {service.pricing.monthly}</div>
                    <div>Yearly: {service.pricing.yearly}</div>
                    <div>Setup: {service.pricing.setup}</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (<li key={idx} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (<li key={idx} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>))}
                  </ul>
                </div>

                {/* ROI and Setup */}
                <div className="bg-white/5 rounded-lg p-3 mb-4">
                  <div className="text-xs text-gray-300">
                    <div className="mb-1"><span className="text-green-400 font-medium">ROI:</span> {service.roi}</div>
                    <div><span className="text-blue-400 font-medium">Setup:</span> {service.setupTime}</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Link to={service.link} className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm">
                    Learn More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>))}
          </motion.div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (<motion.div className="text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              <button onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
            }} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                View All Services
              </button>
            </motion.div>)}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p className="text-xl text-gray-300 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Let's discuss how our innovative services can help drive your success and competitive advantage
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Contact Us Today
            </Link>
            <a href="tel:+13024640950" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
              Call: +1 302 464 0950
            </a>
          </motion.div>

          <motion.div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
            <h3 className="text-lg font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Expert AI & Technology Specialists
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Proven ROI & Performance Metrics
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                24/7 Support & Maintenance
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Custom Solutions & Integration
              </div>
            </div>
          </motion.div>

          <motion.div className="mt-8 text-sm text-gray-400" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a></p>
          </motion.div>
        </div>
      </section>
    </div>);
};
export default EnhancedServicesShowcase;
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Code, 
  Users, 
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Sparkles,
  Target,
  Lightbulb,
  BarChart3,
  Layers,
  Cpu as CpuIcon,
  Shield as ShieldIcon,
  Cloud as CloudIcon,
  Zap as ZapIcon,
  Rocket as RocketIcon,
  Code as CodeIcon,
  Users as UsersIcon,
  Globe as GlobeIcon2,
  Heart,
  Leaf,
  Flask,
  Coins,
  Microscope,
  Car,
  Factory,
  Building2,
  Wifi,
  Satellite,
  Wind,
  Sun,
  Droplets
} from 'lucide-react';
import { ALL_ENHANCED_SERVICES } from '@/data/enhancedMicroSaasServices2025';

export function EnhancedServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-zion-cyan to-zion-blue', gradient: 'from-cyan-400 via-blue-500 to-purple-600' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-zion-cyan to-zion-purple', gradient: 'from-cyan-400 to-purple-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red', gradient: 'from-purple-500 to-red-500' },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Cloud, color: 'from-zion-blue to-zion-cyan', gradient: 'from-blue-500 to-cyan-500' },
    { id: 'green-tech', name: 'Green Technology', icon: Leaf, color: 'from-zion-green to-zion-cyan', gradient: 'from-green-500 to-cyan-500' },
    { id: 'healthcare-ai', name: 'Healthcare AI', icon: Flask, color: 'from-zion-pink to-zion-purple', gradient: 'from-pink-500 to-purple-500' },
    { id: 'fintech', name: 'Financial Technology', icon: Coins, color: 'from-zion-yellow to-zion-orange', gradient: 'from-yellow-500 to-orange-500' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$1,000 - $3,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$3,000 - $6,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$6,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' }
  ];

  // Filter and sort services
  const filteredServices = ALL_ENHANCED_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 3000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 3000 && service.price <= 6000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 6000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.createdAt || '2025-01-01').getTime() - new Date(a.createdAt || '2025-01-01').getTime();
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Sparkles;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  const getCategoryGradient = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.gradient : 'from-cyan-400 via-blue-500 to-purple-600';
  };

  return (
    <div className="min-h-screen bg-futuristic relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-40 right-40 w-16 h-16 border border-zion-cyan/20 rounded-full animate-pulse delay-3000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2322ddd2" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Neon glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-zion-purple/10 to-zion-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20">
        <div className="container-responsive relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>2025 Innovation Showcase</span>
            </motion.div>

            <h1 className="heading-responsive font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Next-Generation
              </span>
              <br />
              <span className="text-white">Micro SAAS Solutions</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover cutting-edge technology solutions that are reshaping industries. From AI-powered robotics to quantum cryptography, 
              explore the future of business technology with our comprehensive micro SAAS platform.
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for services, technologies, or solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-zion-slate-dark/80 border border-zion-cyan/30 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg backdrop-blur-sm"
                  />
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: ALL_ENHANCED_SERVICES.length + '+', label: 'Innovative Services', icon: Sparkles, color: 'from-zion-cyan to-zion-blue' },
                { value: '10+', label: 'Technology Categories', icon: Layers, color: 'from-zion-purple to-zion-pink' },
                { value: '99.9%', label: 'Uptime Guarantee', icon: Shield, color: 'from-zion-green to-zion-cyan' },
                { value: '24/7', label: 'Expert Support', icon: Users, color: 'from-zion-orange to-zion-purple' }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Filters and Categories */}
      <section className="py-12 bg-zion-slate-dark/50 relative">
        <div className="container-responsive">
          {/* Category Pills */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden group ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <category.icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Advanced Filters */}
          <motion.div 
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-4">
              {/* Price Range Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-zion-cyan" />
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan backdrop-blur-sm"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>{range.name}</option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-zion-cyan" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan backdrop-blur-sm"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-zion-slate-light">
              Showing {sortedServices.length} of {ALL_ENHANCED_SERVICES.length} services
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-16 bg-zion-slate-dark relative">
        <div className="container-responsive">
          <AnimatePresence mode="wait">
            {sortedServices.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    onHoverStart={() => setHoveredService(service.id)}
                    onHoverEnd={() => setHoveredService(null)}
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryGradient(service.category)} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    {/* Service Card */}
                    <div className="relative bg-zion-slate-dark/80 border border-zion-cyan/20 rounded-2xl p-6 backdrop-blur-sm hover:border-zion-cyan/40 transition-all duration-300">
                      {/* Service Header */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-14 h-14 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center shadow-lg`}>
                            <getCategoryIcon(service.category) className="w-7 h-7 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                            <div className="text-sm text-zion-slate-light">per month</div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                          {service.title}
                        </h3>
                        
                        <p className="text-zion-slate-light leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Service Details */}
                      <div className="space-y-4 mb-6">
                        {/* Category & Innovation Level */}
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zion-cyan font-medium">{service.category}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            service.innovationLevel === 'Cutting-edge' 
                              ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30' 
                              : 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30'
                          }`}>
                            {service.innovationLevel}
                          </span>
                        </div>

                        {/* ROI & Market Price */}
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1 text-zion-green">
                            <TrendingUp className="w-4 h-4" />
                            <span>ROI: {service.roi}</span>
                          </div>
                          <div className="text-zion-slate-light">
                            Market: {service.marketPrice}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                                <CheckCircle className="w-3 h-3 text-zion-cyan" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Service Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                        <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{service.estimatedDelivery}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-zion-cyan" />
                            <span>{service.supportLevel}</span>
                          </div>
                        </div>
                        
                        <Link
                          to={`/services/${service.id}`}
                          className="btn-futuristic px-4 py-2 text-sm group-hover:scale-105 transition-transform duration-200"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your search criteria or browse all categories
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="btn-futuristic px-6 py-3"
                >
                  View All Services
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10 relative">
        <div className="container-responsive text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-responsive font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Get in touch with our technology experts to discuss your specific needs and discover 
              how our innovative solutions can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Get Free Consultation
              </Link>
              
              <a
                href="tel:+13024640950"
                className="btn-neon px-8 py-4 text-lg group"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Call Now: +1 302 464 0950
              </a>
            </div>
            
            <div className="mt-8 text-zion-slate-light">
              <p className="mb-2">📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a></p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7259
