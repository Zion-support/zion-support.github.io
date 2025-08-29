import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Database, 
  Network, 
  Eye, 
  Globe2, 
  Smartphone, 
  Monitor, 
  Server, 
  Atom, 
  Car, 
  Scale, 
  Leaf, 
  Factory, 
  Building, 
  Clock, 
  Phone, 
  Mail, 
  TrendingUp,
  Search,
  Filter,
  ExternalLink,
  Calendar,
  MapPin,
  Globe as GlobeIcon,
  Award,
  Clock as ClockIcon,
  Users as UsersIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Cloud as CloudIcon,
  Brain as BrainIcon,
  Rocket as RocketIcon,
  Leaf as LeafIcon,
  Satellite,
  Building2,
  Cog,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Smartphone as SmartphoneIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Lock as LockIcon,
  Key,
  Eye as EyeIcon,
  Monitor as MonitorIcon,
  Server as ServerIcon,
  HardDrive,
  Wifi,
  Bluetooth,
  Radio,
  Signal,
  WifiOff,
  BluetoothOff,
  RadioOff,
  SignalOff,
  WifiOn,
  BluetoothOn,
  RadioOn,
  SignalOn,
  WifiOff2,
  BluetoothOff2,
  RadioOff2,
  SignalOff2,
  WifiOn2,
  BluetoothOn2,
  RadioOn2,
  SignalOn2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { enhancedServicesCatalog, EnhancedServiceItem, EnhancedServiceCategory } from '@/data/enhancedServicesCatalog2025';

export default function ComprehensivePricingGuide2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());

  const filteredServices = enhancedServicesCatalog
    .flatMap(category => category.items)
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = service.price === 'Contact Us' || 
                          (parseInt(service.price.replace(/[$,]/g, '')) >= priceRange[0] && 
                           parseInt(service.price.replace(/[$,]/g, '')) <= priceRange[1]);
      return matchesCategory && matchesSearch && matchesPrice;
    });

  const toggleServiceExpansion = (serviceId: string) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
    }
    setExpandedServices(newExpanded);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return Brain;
      case 'IT Services': return Server;
      case 'AI Solutions': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Data & Analytics': return BarChart3;
      case 'Cloud & DevOps': return Cloud;
      case 'Quantum Computing': return Atom;
      case 'Blockchain & Web3': return Globe2;
      case 'IoT & Edge': return Cpu;
      case 'Green Tech': return Leaf;
      case 'Space Tech': return Satellite;
      case 'Digital Transformation': return Cog;
      default: return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return 'from-blue-500 to-cyan-500';
      case 'IT Services': return 'from-purple-500 to-pink-500';
      case 'AI Solutions': return 'from-green-500 to-emerald-500';
      case 'Cybersecurity': return 'from-red-500 to-orange-500';
      case 'Data & Analytics': return 'from-indigo-500 to-purple-500';
      case 'Cloud & DevOps': return 'from-cyan-500 to-blue-500';
      case 'Quantum Computing': return 'from-violet-500 to-purple-500';
      case 'Blockchain & Web3': return 'from-yellow-500 to-orange-500';
      case 'IoT & Edge': return 'from-teal-500 to-green-500';
      case 'Green Tech': return 'from-emerald-500 to-green-500';
      case 'Space Tech': return 'from-slate-500 to-gray-500';
      case 'Digital Transformation': return 'from-rose-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const categories = [
    { name: 'All Services', value: 'all', count: enhancedServicesCatalog.flatMap(cat => cat.items).length },
    ...enhancedServicesCatalog.map(cat => ({
      name: cat.name,
      value: cat.slug,
      count: cat.items.length
    }))
  ];

  const totalServices = enhancedServicesCatalog.flatMap(cat => cat.items).length;
  const totalCategories = enhancedServicesCatalog.length;

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2025 - Zion Tech Group"
        description="Complete pricing information for all our innovative micro SAAS, IT services, and AI solutions. Transparent pricing with proven ROI and flexible billing options."
        keywords="pricing, micro saas pricing, IT services pricing, AI solutions pricing, ROI, cost, billing, subscription"
        url="https://ziontechgroup.com/comprehensive-pricing-guide-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-6"
              >
                Comprehensive Pricing Guide{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  2025
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
              >
                Transparent pricing for all our innovative services. Discover the perfect solution for your business 
                with flexible billing options and proven ROI.
              </motion.p>
              
              {/* Pricing Statistics */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{totalServices}+</div>
                  <div className="text-slate-400">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{totalCategories}+</div>
                  <div className="text-slate-400">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">500%+</div>
                  <div className="text-slate-400">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-slate-400">Support</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Link>
                <Link
                  to="/enhanced-services-showcase-2025"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                >
                  <Star className="w-5 h-5 mr-2" />
                  View All Services
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-700 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-lg font-semibold text-white mb-2">Need Custom Pricing?</h3>
                <p className="text-slate-300">Contact our experts for personalized solutions and enterprise pricing</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex items-center text-cyan-400">
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="font-semibold">+1 302 464 0950</span>
                </div>
                <div className="flex items-center text-cyan-400">
                  <Mail className="w-5 h-5 mr-2" />
                  <span className="font-semibold">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-cyan-400">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Middletown, DE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services by name or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Price Range</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-20 px-2 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                  />
                  <span className="text-slate-400 text-sm">to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                    className="w-20 px-2 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Service Categories & Pricing
              </h2>
              <p className="text-slate-300 text-lg">
                Explore our comprehensive service categories with transparent pricing and detailed information
              </p>
            </div>

            {enhancedServicesCatalog.map((category, categoryIndex) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4">
                    {React.createElement(getCategoryIcon(category.name), { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-slate-300 max-w-2xl mx-auto">{category.description}</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.items
                    .filter(service => {
                      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
                      const matchesPrice = service.price === 'Contact Us' || 
                                          (parseInt(service.price.replace(/[$,]/g, '')) >= priceRange[0] && 
                                           parseInt(service.price.replace(/[$,]/g, '')) <= priceRange[1]);
                      return matchesSearch && matchesPrice;
                    })
                    .map((service, serviceIndex) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                      >
                        {/* Service Header */}
                        <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-white/20 rounded-lg">
                              {React.createElement(getCategoryIcon(service.category), { className: "w-5 h-5" })}
                            </div>
                            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                              {service.category}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                          <p className="text-white/90 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Service Content */}
                        <div className="p-6">
                          {/* Pricing */}
                          <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-3xl font-bold text-white">{service.price}</span>
                              <span className="text-sm text-slate-400 capitalize">{service.billing}</span>
                            </div>
                            <div className="flex gap-2">
                              {service.freeTier && (
                                <span className="inline-block bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                                  Free Tier Available
                                </span>
                              )}
                              {service.trialPeriod && (
                                <span className="inline-block bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-full">
                                  {service.trialPeriod} Trial
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Key Metrics */}
                          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                            <div>
                              <span className="text-slate-500">ROI:</span>
                              <p className="text-cyan-400 font-medium">{service.roi}</p>
                            </div>
                            <div>
                              <span className="text-slate-500">Setup:</span>
                              <p className="text-slate-300">{service.setupTime}</p>
                            </div>
                            <div>
                              <span className="text-slate-500">Market Size:</span>
                              <p className="text-slate-300">{service.marketSize}</p>
                            </div>
                            <div>
                              <span className="text-slate-500">Innovation:</span>
                              <p className="text-slate-300">{service.innovationLevel}</p>
                            </div>
                          </div>

                          {/* Expandable Details */}
                          <div className="mb-6">
                            <button
                              onClick={() => toggleServiceExpansion(service.id)}
                              className="w-full flex items-center justify-between text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <span>View Details</span>
                              {expandedServices.has(service.id) ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </button>

                            {expandedServices.has(service.id) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 space-y-4"
                              >
                                {/* Features */}
                                <div>
                                  <h5 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                                    Key Features
                                  </h5>
                                  <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                      <li key={idx} className="flex items-start text-sm text-slate-400">
                                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Benefits */}
                                <div>
                                  <h5 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                                    Key Benefits
                                  </h5>
                                  <ul className="space-y-2">
                                    {service.benefits.map((benefit, idx) => (
                                      <li key={idx} className="flex items-start text-sm text-slate-400">
                                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                        {benefit}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Target Audience */}
                                <div>
                                  <h5 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                                    Target Audience
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    {service.targetAudience.map((audience, idx) => (
                                      <span key={idx} className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-full">
                                        {audience}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Integrations */}
                                <div>
                                  <h5 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                                    Integrations
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    {service.integrations.map((integration, idx) => (
                                      <span key={idx} className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-full">
                                        {integration}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </div>

                          {/* CTA Button */}
                          <div className="flex flex-col gap-3">
                            <Link
                              to={service.href}
                              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center flex items-center justify-center"
                            >
                              {service.ctaLabel}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            
                            {/* Contact Info */}
                            <div className="text-center">
                              <p className="text-xs text-slate-500 mb-2">Or contact us directly:</p>
                              <div className="flex items-center justify-center text-xs text-slate-400">
                                <Phone className="w-3 h-3 mr-1" />
                                {service.contactInfo.phone}
                              </div>
                              <div className="flex items-center justify-center text-xs text-slate-400">
                                <Mail className="w-3 h-3 mr-1" />
                                {service.contactInfo.email}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>

                {category.items.filter(service => {
                  const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                       service.description.toLowerCase().includes(searchQuery.toLowerCase());
                  const matchesPrice = service.price === 'Contact Us' || 
                                      (parseInt(service.price.replace(/[$,]/g, '')) >= priceRange[0] && 
                                       parseInt(service.price.replace(/[$,]/g, '')) <= priceRange[1]);
                  return matchesSearch && matchesPrice;
                }).length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-slate-400">No services found in this category matching your criteria.</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to help you choose the perfect solution and provide custom pricing 
                for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Link>
                <Link
                  to="/enhanced-services-showcase-2025"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                >
                  <Star className="w-5 h-5 mr-2" />
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400 font-medium">+1 302 464 0950</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-green-400 font-medium">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-purple-400 font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GlobeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-400 font-medium hover:text-orange-300 transition-colors"
                >
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}