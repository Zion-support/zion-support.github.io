import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check,
  X,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Zap,
  Shield,
  Headphones,
  Globe,
  ArrowRight,
  Search,
  Filter,
  Grid3X3,
  List,
  Calculator,
  BarChart3,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import SEO from '../components/SEO';
import { COMPREHENSIVE_PRICING_GUIDE_2025 } from '../data/comprehensivePricingGuide2025';

export default function ComprehensivePricingGuide2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', count: COMPREHENSIVE_PRICING_GUIDE_2025.length },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: COMPREHENSIVE_PRICING_GUIDE_2025.filter(s => s.category === 'AI & Business Intelligence').length },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: COMPREHENSIVE_PRICING_GUIDE_2025.filter(s => s.category === 'AI & Customer Support').length },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: COMPREHENSIVE_PRICING_GUIDE_2025.filter(s => s.category === 'AI & Marketing').length },
    { id: 'AI & Content', name: 'AI & Content', count: COMPREHENSIVE_PRICING_GUIDE_2025.filter(s => s.category === 'AI & Content').length },
    { id: 'AI & HR', name: 'AI & HR', count: COMPREHENSIVE_PRICING_GUIDE_2025.filter(s => s.category === 'AI & HR').length },
    { id: 'FinTech', name: 'FinTech', count: COMPREHENSIVE_PRICING_GUIDE_2025.filter(s => s.category === 'FinTech').length }
  ];

  const filteredServices = COMPREHENSIVE_PRICING_GUIDE_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = service.pricingTiers.some(tier => 
      tier.price >= priceRange[0] && tier.price <= priceRange[1]
    );
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2025 | Zion Tech Group"
        description="Explore our comprehensive pricing guide for innovative micro SAAS services in 2025. Compare pricing tiers, features, and ROI across all our AI-powered solutions."
        keywords="pricing guide, micro SAAS pricing, AI services pricing, business intelligence pricing, marketing automation pricing, cybersecurity pricing"
        url="https://ziontechgroup.com/comprehensive-pricing-guide-2025"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                2025 Edition
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our innovative micro SAAS services. 
              Compare features, understand ROI, and choose the perfect plan for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold">{COMPREHENSIVE_PRICING_GUIDE_2025.length}</span>
                <span className="ml-2 text-gray-300">Services</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold">3</span>
                <span className="ml-2 text-gray-300">Pricing Tiers</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold">400%+</span>
                <span className="ml-2 text-gray-300">Average ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-300 text-sm">Price Range:</span>
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-32"
                  />
                  <span className="text-white text-sm w-16">{formatPrice(priceRange[1])}</span>
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-white/20 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-white/30 text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-white/30 text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Grid/List */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.serviceId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {service.serviceName}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Pricing Tiers */}
                      <div className="space-y-3">
                        {service.pricingTiers.map((tier) => (
                          <div key={tier.id} className="bg-white/5 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-white">{tier.name}</span>
                              <span className="text-lg font-bold text-blue-400">
                                ${tier.price.toLocaleString()}
                                <span className="text-sm text-gray-400">/mo</span>
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 mb-2">{tier.description}</p>
                            {tier.popular && (
                              <span className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                Most Popular
                              </span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* ROI and Market Info */}
                      <div className="pt-4 border-t border-white/20">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-gray-400">ROI:</span>
                          <span className="text-green-400 font-medium">{service.roi.percentage} in {service.roi.timeframe}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Market Price:</span>
                          <span className="text-gray-300">{service.marketComparison.averagePrice}</span>
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="pt-4 border-t border-white/20">
                        <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.core.slice(0, 3).map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                          {service.features.core.length > 3 && (
                            <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                              +{service.features.core.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/20">
                        <span className="text-sm text-gray-400">
                          {service.integrations.length} Integrations
                        </span>
                        <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                          <span className="text-sm font-medium mr-2">View Details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.serviceId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {service.serviceName}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {service.description}
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400">{service.pricingTiers.length}</div>
                            <div className="text-sm text-gray-400">Pricing Tiers</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400">{service.roi.percentage}</div>
                            <div className="text-sm text-gray-400">ROI</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-400">{service.integrations.length}</div>
                            <div className="text-sm text-gray-400">Integrations</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400">{service.support.responseTime}</div>
                            <div className="text-sm text-gray-400">Response Time</div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {service.features.core.slice(0, 5).map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:w-80 space-y-4">
                        <div className="bg-white/5 rounded-xl p-4">
                          <h4 className="text-lg font-semibold text-white mb-3">Pricing Tiers</h4>
                          {service.pricingTiers.map((tier) => (
                            <div key={tier.id} className="mb-3 last:mb-0">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium text-white">{tier.name}</span>
                                <span className="text-lg font-bold text-blue-400">
                                  ${tier.price.toLocaleString()}
                                </span>
                              </div>
                              {tier.popular && (
                                <span className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full mb-2">
                                  Most Popular
                                </span>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="text-right">
                          <div className="text-sm text-gray-400">Market Price</div>
                          <div className="text-lg font-semibold text-gray-300">{service.marketComparison.averagePrice}</div>
                        </div>

                        <div className="text-right">
                          <div className="text-sm text-gray-400">ROI Timeframe</div>
                          <div className="text-lg font-semibold text-green-400">{service.roi.timeframe}</div>
                        </div>

                        <div className="flex items-center justify-end text-blue-400 group-hover:text-blue-300 transition-colors">
                          <span className="text-sm font-medium mr-2">View Full Details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Use our ROI calculator to see exactly how much our services can save your business and what your return on investment will be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate ROI
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Talk to Sales
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <TrendingUp className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-medium">400%+ Average ROI</div>
                <div className="text-gray-400 text-sm">Within 6 months</div>
              </div>
              <div>
                <DollarSign className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-medium">$50K+ Annual Savings</div>
                <div className="text-gray-400 text-sm">Per service</div>
              </div>
              <div>
                <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-medium">2-8 Weeks Setup</div>
                <div className="text-gray-400 text-sm">Fast implementation</div>
              </div>
            </div>
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
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-3xl font-bold text-white">{selectedService.serviceName}</h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Service Overview */}
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                    <p className="text-gray-300 mb-6">{selectedService.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-slate-700 rounded-xl p-4">
                        <h4 className="text-lg font-semibold text-white mb-3">Market Comparison</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Average Market Price:</span>
                            <span className="text-white">{selectedService.marketComparison.averagePrice}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Competitors:</span>
                            <span className="text-white">{selectedService.marketComparison.competitors.join(', ')}</span>
                          </div>
                          <div className="text-sm text-gray-300 mt-2">
                            {selectedService.marketComparison.valueProposition}
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-700 rounded-xl p-4">
                        <h4 className="text-lg font-semibold text-white mb-3">ROI & Savings</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">ROI:</span>
                            <span className="text-green-400 font-bold">{selectedService.roi.percentage}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Timeframe:</span>
                            <span className="text-white">{selectedService.roi.timeframe}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Annual Savings:</span>
                            <span className="text-green-400">{selectedService.roi.savings}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Core Features</h4>
                        <ul className="space-y-2">
                          {selectedService.features.core.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Advanced Features</h4>
                        <ul className="space-y-2">
                          {selectedService.features.advanced.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Enterprise Features</h4>
                        <ul className="space-y-2">
                          {selectedService.features.enterprise.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Integrations */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Integrations</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.integrations.map((integration, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full"
                          >
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing Tiers */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Pricing Tiers</h3>
                    <div className="space-y-4">
                      {selectedService.pricingTiers.map((tier) => (
                        <div
                          key={tier.id}
                          className={`bg-slate-700 rounded-xl p-4 border-2 ${
                            tier.popular ? 'border-blue-500' : 'border-transparent'
                          }`}
                        >
                          {tier.popular && (
                            <div className="text-center mb-3">
                              <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full">
                                Most Popular
                              </span>
                            </div>
                          )}
                          
                          <h4 className="text-lg font-semibold text-white mb-2">{tier.name}</h4>
                          <div className="text-3xl font-bold text-blue-400 mb-2">
                            ${tier.price.toLocaleString()}
                            <span className="text-sm text-gray-400 font-normal">/month</span>
                          </div>
                          
                          <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                          
                          <ul className="space-y-2 mb-4">
                            {tier.features.slice(0, 6).map((feature, index) => (
                              <li key={index} className="flex items-center text-gray-300 text-sm">
                                <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                            {tier.features.length > 6 && (
                              <li className="text-gray-400 text-sm">
                                +{tier.features.length - 6} more features
                              </li>
                            )}
                          </ul>

                          {tier.setupFee && (
                            <div className="text-sm text-gray-400 mb-2">
                              Setup Fee: ${tier.setupFee.toLocaleString()}
                            </div>
                          )}
                          
                          <div className="text-sm text-gray-400 mb-4">
                            Contract: {tier.contractLength}
                          </div>

                          <Link
                            to="/request-quote"
                            className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                          >
                            Get Started
                          </Link>
                        </div>
                      ))}
                    </div>

                    {/* Support Info */}
                    <div className="mt-6 bg-slate-700 rounded-xl p-4">
                      <h4 className="text-lg font-semibold text-white mb-3">Support & SLA</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Response Time:</span>
                          <span className="text-white">{selectedService.support.responseTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Uptime SLA:</span>
                          <span className="text-white">{selectedService.support.sla}</span>
                        </div>
                        <div className="text-gray-300 mt-2">
                          Channels: {selectedService.support.channels.join(', ')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div className="text-gray-400 text-sm">
                      <div>Need help choosing? Contact our sales team</div>
                      <div>Phone: +1 302 464 0950 | Email: kleber@ziontechgroup.com</div>
                    </div>
                    <div className="flex gap-4">
                      <Link
                            to="/contact"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Contact Sales
                          </Link>
                          <Link
                            to="/request-quote"
                            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
                          >
                            <Calculator className="w-4 h-4 mr-2" />
                            Get Custom Quote
                          </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}