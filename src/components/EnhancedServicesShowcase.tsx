import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Search, Star, TrendingUp, Zap, Shield, Cloud, Brain, Link } from 'lucide-react';
import { ENHANCED_MICRO_SAAS_SERVICES, EnhancedMicroSaasService } from '../data/enhancedMicroSaasServices';
import FuturisticNeonButton from './ui/FuturisticNeonButton';
import FuturisticMatrixBackground from './ui/FuturisticMatrixBackground';

const EnhancedServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<EnhancedMicroSaasService | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-purple to-zion-pink' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-red to-zion-orange' },
    { id: 'Cloud Infrastructure', name: 'Cloud Infrastructure', icon: Cloud, color: 'from-zion-blue to-zion-cyan' },
    { id: 'Blockchain & Supply Chain', name: 'Blockchain', icon: Link, color: 'from-zion-green to-zion-emerald' }
  ];

  const filteredServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => service.isFeatured);
  const newServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => service.isNew);
  const popularServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => service.isPopular);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <FuturisticMatrixBackground intensity="medium" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
<<<<<<< HEAD
          <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            🚀 Revolutionary Micro SAAS Solutions
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent">
              With Innovation
            </span>
          </h1>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover cutting-edge micro SAAS solutions powered by AI, quantum security, and blockchain technology. 
            Each service is designed to deliver immediate value and long-term transformation.
=======
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover Our
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Micro SAAS Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge software solutions designed for growth, efficiency, and innovation.
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </p>

<<<<<<< HEAD
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-slate-dark/50 border-zion-cyan/30 text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-zion-cyan/20"
              />
            </div>
=======
        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
=======
import { ENHANCED_MICRO_SAAS_SERVICES, getServicesByCategory, getServicesByTag } from '../data/enhancedMicroSaasServices';
import { 
  Code, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Brain,
  Lock,
  Database,
  Cloud,
  Smartphone,
  Target,
  DollarSign,
  Clock,
  Star,
  ArrowRight,
  Filter,
  Search,
  ChevronDown
} from 'lucide-react';

export function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', ...Array.from(new Set(ENHANCED_MICRO_SAAS_SERVICES.map(s => s.category)))];
  
  const filteredServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'popularity':
        return b.price - a.price; // Higher price = more popular
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics': return Brain;
      case 'AI & Marketing': return Target;
      case 'AI & HR': return Users;
      case 'AI & Legal': return Shield;
      case 'Cybersecurity': return Lock;
      case 'Blockchain': return Database;
      case 'IoT & Edge': return Smartphone;
      case 'AI & Finance': return DollarSign;
      case 'AI & Healthcare': return Building;
      case 'AI & Education': return Globe;
      default: return Code;
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'enterprise': return 'from-purple-500 to-pink-500';
      case 'premium': return 'from-blue-500 to-cyan-500';
      case 'standard': return 'from-green-500 to-teal-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-2000"></div>
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 text-xs animate-matrix-rain opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neon-text text-cyan-400">Micro SAAS Solutions</span>
            <span className="block text-white mt-2">That Transform Businesses</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered micro SAAS solutions designed to accelerate 
            your business growth, improve efficiency, and drive innovation across all industries.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 mb-12 border border-cyan-500/30">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fbd3
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fbd3
              />
            </div>

            {/* Category Filter */}
<<<<<<< HEAD
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Pricing Filter */}
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {pricingOptions.map(pricing => (
                <option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? 'All Pricing' : pricing}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
              <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
              <option value="rating" className="bg-gray-800 text-white">Sort by Rating</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mt-6">
            <div className="bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                List View
              </button>
            </div>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-zion-slate-dark/30 border border-zion-slate-light/20">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-zion-cyan data-[state=active]:to-zion-blue data-[state=active]:text-white data-[state=active]:border-zion-cyan"
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    <span className="hidden md:inline">{category.name}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Featured Services */}
        {featuredServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Featured Services
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-zion-purple to-zion-pink bg-clip-text text-transparent">
              All Services
            </span>
          </h2>
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-zion-slate-light text-xl">No services found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          )}
=======
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-gray-300">
            Showing <span className="text-white font-semibold">{filteredServices.length}</span> of{' '}
            <span className="text-white font-semibold">{services.length}</span> services
          </p>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        </motion.div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <ServiceDetailModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}
        </AnimatePresence>
<<<<<<< HEAD
=======

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Scale Your Business?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Our micro SAAS solutions are designed to grow with your business needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-white font-semibold text-lg mb-2">Phone</p>
                <p className="text-gray-300">{services[0].contactInfo.phone}</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-white font-semibold text-lg mb-2">Email</p>
                <p className="text-gray-300">{services[0].contactInfo.email}</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-white font-semibold text-lg mb-2">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
=======
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popularity">Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sortedServices.map((service, index) => (
            <div 
              key={service.id} 
              className="group bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })}
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getSupportLevelColor(service.supportLevel)} text-white`}>
                    {service.supportLevel}
                  </span>
                </div>
              </div>

              {/* Service Title and Description */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Price and Market Price */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-cyan-400">
                    ${service.price.toLocaleString()}
                  </span>
                  <span className="text-gray-400 text-sm">/{service.pricingModel}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400">Market Price:</span>
                  <div className="text-sm text-gray-300">{service.marketPrice}</div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-cyan-400 mt-1">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-green-400 mb-2">Key Benefits:</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-300">
                      <TrendingUp className="w-3 h-3 text-green-400 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Technology:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.technology.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                  {service.technology.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                      +{service.technology.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* ROI and Delivery */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="text-green-400">
                  <span className="font-semibold">ROI:</span> {service.roi}
                </div>
                <div className="text-blue-400">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {service.estimatedDelivery}
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="text-xs text-gray-400 mb-2">Contact Information:</div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">📞</span>
                    {service.contactInfo.phone}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✉️</span>
                    {service.contactInfo.email}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">🌐</span>
                    {service.contactInfo.website}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center justify-center group">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
=======
import { Link } from 'react-router-dom';
import {;
  Brain,;
  Shield,;
  Cloud,;
  Database,;
  Globe,;
  Zap,;
  ArrowRight,;
  Star,;
  TrendingUp,;
  Users,;
  Clock,;
  CheckCircle,;
  Search} from 'lucide-react';
export const EnhancedServicesShowcase: React.FC = () => {;
  const services = [{;
      title: 'AI Workflow Automation',;
      description: 'Transform business operations with intelligent automation that learns and scales',;
      price: 'From $299/month',;
      path: '/services/ai-workflow-automation',;
              icon: GitFork,;
      category: 'AI & Automation',;
      features: ['Process optimization', 'AI-powered workflows', 'Real-time analytics', 'Scalable automation'],;
      benefits: ['Reduce manual work by 70-85%', 'Improve efficiency by 60%', 'Cut operational costs by 40-50%'],;
      color: 'from-cyan-500 to-blue-600',;
      glowColor: 'cyan'},;
    {;
      title: 'AI Cybersecurity',;
      description: 'Protect your business with AI-powered threat detection and prevention',;
      price: 'From $499/month',;
      path: '/services/ai-cybersecurity',;
      icon: Shield,;
      category: 'Security',;
      features: ['Threat detection', 'Behavioral analytics', 'Automated response', 'Compliance monitoring'],;
      benefits: ['Detect threats 10x faster', 'Reduce false positives by 85%', 'Prevent 99.9% of attacks'],;
      color: 'from-purple-500 to-indigo-600',;
      glowColor: 'purple'},;
    {;
      title: 'Quantum Computing',;
      description: 'Solve complex problems 1000x faster with quantum computing solutions',;
      price: 'From $2,999/month',;
      path: '/services/quantum-computing-solutions',;
      icon: Atom,;
      category: 'Quantum Tech',;
      features: ['Quantum algorithms', 'ML acceleration', 'Financial modeling', 'Drug discovery'],;
      benefits: ['1000x faster computation', 'Breakthrough discoveries', 'Unbreakable encryption'],;
      color: 'from-green-500 to-emerald-600',;
      glowColor: 'green'},;
    {;
      title: 'IoT Edge Computing',;
      description: 'Process data at the edge and reduce latency by 90%',;
      price: 'From $399/month',;
      path: '/services/iot-edge-computing',;
      icon: Cpu,;
      category: 'IoT & Edge',;
      features: ['Edge processing', 'Device management', 'Real-time analytics', 'AI at the edge'],;
      benefits: ['Reduce latency by 90%', 'Cut bandwidth costs by 60-80%', 'Scale to millions of devices'],;
      color: 'from-orange-500 to-red-600',;
      glowColor: 'orange'},;
    {;
      title: 'Cloud & DevOps',;
      description: 'Build, deploy, and scale with enterprise-grade cloud infrastructure',;
      price: 'From $799/month',;
      path: '/services/cloud-devops',;
      icon: Cloud,;
      category: 'Infrastructure',;
      features: ['Cloud migration', 'CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting'],;
      benefits: ['Faster deployments', 'Improved reliability', 'Cost optimization', 'Scalability'],;
      color: 'from-blue-500 to-cyan-600',;
      glowColor: 'blue'},;
    {;
      title: 'AI Sales Copilot',;
      description: 'Automate sales processes and boost conversion rates with AI',;
      price: 'From $1,500/month',;
      path: '/services/ai-sales-copilot',;
      icon: Brain,;
      category: 'Sales AI',;
      features: ['Lead scoring', 'CRM automation', 'Sales analytics', 'Predictive insights'],;
      benefits: ['Reduce admin time by 40-60%', 'Improve conversion rates', 'Shorten sales cycles'],;
      color: 'from-pink-500 to-rose-600',;
      glowColor: 'pink'}
  ];
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0.1}
    }
  }
;
const categories = ['All', 'AI & Analytics', 'Quantum Computing', 'Cybersecurity', 'Cloud & DevOps', 'Data & Analytics', 'Blockchain & Web3'];
;
export default function EnhancedServicesShowcase(...args: unknown[]): unknown {  const [selectedCategory, setSelectedCategory] = useState('All');

import { Link } from 'react-router-dom';

import {
  Brain, Shield,
  Cloud, Database,
  Globe, Zap,
  ArrowRight, Star,
  TrendingUp, Users ]

  const containerVariants = {
    hidden: { opacity: 0 }, visible: {
      opacity: 1, transition: {

    }
  }
"
const categories = ['All,AI & Analytics,Quantum Computing,Cybersecurity,Cloud & DevOps,Data & Analytics,Blockchain & Web3']
"


export default function EnhancedServicesShowcase(...args: unknown[]): unknown {  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredService, setHoveredService] = useState<string | null" >(null)"
;""
}}


        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <ServiceDetailModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}
        </AnimatePresence>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      </div>
    </div>
  );
};



  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card 
        className="bg-zion-slate-dark/50 border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 cursor-pointer group"
        onClick={onClick}
      >
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-3">
            <Badge className={`bg-gradient-to-r ${getCategoryColor(service.category)} text-white border-0`}>
              {service.category}
            </Badge>
            <div className="flex gap-1">
              {service.isNew && (
                <Badge className="bg-zion-green text-white border-0 text-xs">NEW</Badge>
              )}
              {service.isPopular && (
                <Badge className="bg-zion-orange text-white border-0 text-xs">POPULAR</Badge>
              )}
            </div>
          </div>
          
          <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors duration-300">
            {service.name}
          </CardTitle>
          
          <CardDescription className="text-zion-slate-light leading-relaxed">
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Price */}
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-zion-cyan">
                ${service.price.monthly}
              </span>
              <span className="text-zion-slate-light">/month</span>
            </div>
            <p className="text-sm text-zion-slate-light">
              ${service.price.yearly}/year (save ${(service.price.monthly * 12 - service.price.yearly)})
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
            <div className="flex flex-wrap gap-1">
              {service.features.slice(0, 3).map((feature, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs bg-zion-slate-light/20 text-zion-slate-light border-zion-slate-light/30">
                  {feature}
                </Badge>
              ))}
              {service.features.length > 3 && (
                <Badge variant="secondary" className="text-xs bg-zion-slate-light/20 text-zion-slate-light border-zion-slate-light/30">
                  +{service.features.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* ROI */}
          <div className="mb-4 p-3 bg-zion-green/10 border border-zion-green/20 rounded-lg">
            <div className="flex items-center gap-2 text-zion-green">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">ROI: {service.roi}</span>
            </div>
          </div>

          {/* Action Button */}
          <FuturisticNeonButton
            variant="primary"
            size="md"
            fullWidth
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            Learn More
          </FuturisticNeonButton>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface ServiceDetailModalProps {
  service: EnhancedMicroSaasService;
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-zion-slate-dark border border-zion-slate-light/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <Badge className="mb-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white border-0">
                {service.category}
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-2">{service.name}</h2>
              <p className="text-zion-slate-light text-lg">{service.description}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-zion-slate-light hover:text-white"
            >
              ✕
            </Button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Pricing */}
              <Card className="bg-zion-slate-dark/50 border-zion-cyan/30">
                <CardHeader>
                  <CardTitle className="text-white">Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Monthly</span>
                      <span className="text-2xl font-bold text-zion-cyan">${service.price.monthly}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Yearly</span>
                      <span className="text-2xl font-bold text-zion-cyan">${service.price.yearly}</span>
                    </div>
                    <div className="text-sm text-zion-green">
                      Save ${(service.price.monthly * 12 - service.price.yearly)} annually
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="bg-zion-slate-dark/50 border-zion-purple/30">
                <CardHeader>
                  <CardTitle className="text-white">Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-purple rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-zion-slate-dark/50 border-zion-green/30">
                <CardHeader>
                  <CardTitle className="text-white">Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-green rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* ROI & Implementation */}
              <Card className="bg-zion-slate-dark/50 border-zion-orange/30">
                <CardHeader>
                  <CardTitle className="text-white">ROI & Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-zion-orange font-semibold mb-2">Return on Investment</h4>
                      <p className="text-zion-slate-light">{service.roi}</p>
                    </div>
                    <div>
                      <h4 className="text-zion-orange font-semibold mb-2">Implementation Time</h4>
                      <p className="text-zion-slate-light">{service.implementationTime}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technology Stack */}
              <Card className="bg-zion-slate-dark/50 border-zion-blue/30">
                <CardHeader>
                  <CardTitle className="text-white">Technology Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technology.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-zion-blue/20 text-zion-blue border-zion-blue/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Integrations */}
              <Card className="bg-zion-slate-dark/50 border-zion-pink/30">
                <CardHeader>
                  <CardTitle className="text-white">Integrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.integrations.map((integration, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-zion-pink/20 text-zion-pink border-zion-pink/30">
                        {integration}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-zion-slate-light/20">
            <FuturisticNeonButton
              variant="primary"
              size="lg"
              className="flex-1"
              onClick={() => window.open(service.demoUrl, '_blank')}
            >
              View Demo
            </FuturisticNeonButton>
            <FuturisticNeonButton
              variant="secondary"
              size="lg"
              className="flex-1"
              onClick={() => window.open(service.documentationUrl, '_blank')}
            >
              Documentation
            </FuturisticNeonButton>
            <FuturisticNeonButton
              variant="success"
              size="lg"
              className="flex-1"
              onClick={() => window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`)}
            >
              Contact Sales
            </FuturisticNeonButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  );
};

export default EnhancedServicesShowcase;