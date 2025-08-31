import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Shield, 
  Link, 
  Cpu, 
  Zap, 
  Star, 
  Check, 
  ArrowRight, 
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Award,
  Rocket,
  Globe,
  Lock,
  Database,
  Cloud,
  Server,
  Smartphone,
  Monitor,
  Code,
  Palette,
  BarChart3,
  Settings,
  HelpCircle,
  BookOpen,
  Video,
  Download,
  GitHub,
  ShoppingCart,
  DollarSign,
  Calendar,
  Target,
  Lightbulb,
  Gauge,
  Workflow,
  Leaf,
  Satellite,
  Truck,
  Building,
  Factory,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  X,
  Search,
  Filter,
  ChevronDown,
  Info,
  AlertCircle,
  Crown,
  Sparkles
} from 'lucide-react';
import { innovativeServices2025, Service } from '../data/innovativeServices2025';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category' | 'popularity'>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-blue-500 to-cyan-500', count: innovativeServices2025.length },
    { id: 'AI', name: 'AI Services', icon: Brain, color: 'from-purple-500 to-pink-500', count: innovativeServices2025.filter(s => s.category === 'AI').length },
    { id: 'Quantum', name: 'Quantum Computing', icon: Atom, color: 'from-orange-500 to-red-500', count: innovativeServices2025.filter(s => s.category === 'Quantum').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-green-500 to-emerald-500', count: innovativeServices2025.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Blockchain', name: 'Blockchain', icon: Link, color: 'from-indigo-500 to-purple-500', count: innovativeServices2025.filter(s => s.category === 'Blockchain').length },
    { id: 'IoT', name: 'IoT & Edge', icon: Cpu, color: 'from-blue-500 to-cyan-500', count: innovativeServices2025.filter(s => s.category === 'IoT').length }
  ];

  const filteredServices = innovativeServices2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = (service.pricing.starter >= priceRange[0] && service.pricing.starter <= priceRange[1]) ||
                        (service.pricing.starter === 0 && priceRange[1] >= 1000); // Custom pricing
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.pricing.starter - b.pricing.starter;
      case 'category':
        return a.category.localeCompare(b.category);
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      Brain, Atom, Shield, Link, Cpu, Zap, Star, Check, ArrowRight, ExternalLink,
      Phone, Mail, MapPin, Clock, Users, TrendingUp, Award, Rocket, Globe, Lock,
      Database, Cloud, Server, Smartphone, Monitor, Code, Palette, BarChart3,
      Settings, HelpCircle, BookOpen, Video, Download, GitHub, ShoppingCart,
      DollarSign, Calendar, Target, Lightbulb, Gauge, Workflow, Leaf, Satellite,
      Truck, Building, Factory, Warehouse, Store, Bank, Hospital, School,
      University, Library, Museum, Theater, Stadium, Park, Beach, Mountain,
      Forest, Desert, Island, Ocean, River, Lake, Stream, Waterfall
    };
    return iconMap[iconName] || Zap;
  };

  const formatPrice = (price: number) => {
    if (price === 0) return 'Custom';
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our innovative AI, Quantum, Cybersecurity, Blockchain, and IoT solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <Info className="w-5 h-5 text-blue-400" />
                <span>All prices are monthly subscriptions</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Crown className="w-5 h-5 text-yellow-400" />
                <span>Enterprise pricing available</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Custom solutions available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Price Range */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="category">Sort by Category</option>
                <option value="popularity">Sort by Popularity</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                  viewMode === 'table' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Table
              </button>
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
              <span>Price Range: ${priceRange[0]} - ${priceRange[1]}</span>
              <button
                onClick={() => setPriceRange([0, 2000])}
                className="text-blue-400 hover:text-blue-300 text-xs"
              >
                Reset
              </button>
            </div>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="2000"
                step="50"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Display */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results Summary */}
          <div className="mb-8 text-center">
            <p className="text-gray-300">
              Showing {filteredServices.length} of {innovativeServices2025.length} services
            </p>
          </div>

          {viewMode === 'grid' ? (
            /* Grid View */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedServices.map((service, index) => {
                const IconComponent = getIconComponent(service.icon);
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    onClick={() => openServiceModal(service)}
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex space-x-2">
                        {service.featured && (
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </span>
                        )}
                        {service.new && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                            New
                          </span>
                        )}
                        {service.popular && (
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Category */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 bg-gradient-to-r ${service.color} text-white text-xs rounded-full`}>
                        {service.category}
                      </span>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-1">
                          {formatPrice(service.pricing.starter)}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {service.pricing.starter === 0 ? 'Custom Pricing' : 'per month'}
                        </div>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <div className="flex space-x-2">
                        {service.demoUrl && (
                          <a
                            href={service.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Video className="w-4 h-4 text-gray-400" />
                          </a>
                        )}
                        {service.documentationUrl && (
                          <a
                            href={service.documentationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <BookOpen className="w-4 h-4 text-gray-400" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* Table View */
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Service</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Starting Price</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Features</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {sortedServices.map((service, index) => {
                      const IconComponent = getIconComponent(service.icon);
                      return (
                        <tr key={service.id} className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white">{service.name}</div>
                                <div className="text-sm text-gray-400">{service.description.substring(0, 60)}...</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${service.color} text-white`}>
                              {service.category}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-white">
                              <div className="font-semibold">{formatPrice(service.pricing.starter)}</div>
                              <div className="text-gray-400 text-xs">
                                {service.pricing.starter === 0 ? 'Custom Pricing' : 'per month'}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-1">
                              {service.features.slice(0, 2).map((feature, idx) => (
                                <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                                  {feature}
                                </span>
                              ))}
                              {service.features.length > 2 && (
                                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                                  +{service.features.length - 2} more
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => openServiceModal(service)}
                                className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
                              >
                                Details
                              </button>
                              <a
                                href="/contact"
                                className="px-3 py-1 bg-white/10 text-white text-xs rounded hover:bg-white/20 transition-colors"
                              >
                                Contact
                              </a>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-4">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setPriceRange([0, 2000]);
                }}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pricing Comparison
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare our service tiers and find the perfect solution for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <p className="text-gray-400">Perfect for small teams and startups</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">$99</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Core features</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Basic integrations</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Community forum</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors inline-block"
              >
                Get Started
              </a>
            </motion.div>

            {/* Professional Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-8 text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                <p className="text-gray-400">Ideal for growing businesses</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">$299</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Everything in Starter</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Advanced integrations</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Custom training</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Analytics dashboard</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors inline-block"
              >
                Get Started
              </a>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-gray-400">For large organizations</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">Custom</div>
                <div className="text-gray-400">pricing</div>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Custom development</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>On-premise deployment</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>SLA guarantees</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors inline-block"
              >
                Contact Sales
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss pricing, implementation, and how our services can help your business
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get a Custom Quote</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View All Services</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeServiceModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-zion-slate-dark border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${selectedService.color} rounded-xl flex items-center justify-center`}>
                      {React.createElement(getIconComponent(selectedService.icon), { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedService.name}</h2>
                      <p className="text-gray-400">{selectedService.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeServiceModal}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>

                {/* Service Description */}
                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed">{selectedService.detailedDescription}</p>
                </div>

                {/* Pricing Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Pricing Plans</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedService.pricing.starter > 0 && (
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">Starter</h4>
                        <div className="text-2xl font-bold text-blue-400 mb-2">${selectedService.pricing.starter}/month</div>
                        <p className="text-gray-400 text-sm">Perfect for small teams</p>
                      </div>
                    )}
                    {selectedService.pricing.professional > 0 && (
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">Professional</h4>
                        <div className="text-2xl font-bold text-blue-400 mb-2">${selectedService.pricing.professional}/month</div>
                        <p className="text-gray-400 text-sm">Ideal for growing businesses</p>
                      </div>
                    )}
                    {selectedService.pricing.enterprise > 0 && (
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">Enterprise</h4>
                        <div className="text-2xl font-bold text-blue-400 mb-2">${selectedService.pricing.enterprise}/month</div>
                        <p className="text-gray-400 text-sm">For large organizations</p>
                      </div>
                    )}
                  </div>
                  {selectedService.pricing.custom && (
                    <div className="mt-4 text-center">
                      <p className="text-gray-400">{selectedService.pricing.custom}</p>
                    </div>
                  )}
                </div>

                {/* Features and Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-300">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.useCases.map((useCase, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  {selectedService.demoUrl && (
                    <a
                      href={selectedService.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Video className="w-5 h-5 mr-2" />
                      <span>View Demo</span>
                    </a>
                  )}
                  {selectedService.documentationUrl && (
                    <a
                      href={selectedService.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      <span>Documentation</span>
                    </a>
                  )}
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