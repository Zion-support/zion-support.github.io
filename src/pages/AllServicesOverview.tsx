import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2024 } from '../data/innovativeMicroSaasServices2024';
import { Link } from 'react-router-dom';

export default function AllServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showInnovativeOnly, setShowInnovativeOnly] = useState(false);

  const allServices = [...COMPREHENSIVE_SERVICES, ...INNOVATIVE_MICRO_SAAS_SERVICES_2024];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    const matchesInnovative = !showInnovativeOnly || service.hasOwnProperty('marketTrend');
    return matchesCategory && matchesSearch && matchesInnovative;
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
        duration: 0.5
      }
    }
  };

  const openServiceModal = (service: any) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  const getServiceType = (service: any) => {
    if (service.hasOwnProperty('marketTrend')) {
      return 'Innovative 2024';
    }
    return 'Comprehensive';
  };

  const getServiceColor = (service: any) => {
    if (service.hasOwnProperty('marketTrend')) {
      return 'bg-gradient-to-r from-purple-500 to-pink-500';
    }
    return 'bg-gradient-to-r from-cyan-500 to-blue-500';
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            All Services Overview
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our complete portfolio of cutting-edge technology solutions, from comprehensive enterprise services to innovative micro SAAS platforms
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                {COMPREHENSIVE_SERVICES.length + INNOVATIVE_MICRO_SAAS_SERVICES_2024.length}+
              </div>
              <div className="text-zion-slate-light">Total Services</div>
            </div>
            <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                {COMPREHENSIVE_SERVICES.length}
              </div>
              <div className="text-zion-slate-light">Comprehensive Solutions</div>
            </div>
            <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                {INNOVATIVE_MICRO_SAAS_SERVICES_2024.length}
              </div>
              <div className="text-zion-slate-light">Innovative 2024 Services</div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search all services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Service Type Filter */}
              <div className="flex gap-2">
                <button
                  onClick={() => setShowInnovativeOnly(false)}
                  className={`flex-1 px-4 py-4 rounded-lg font-medium transition-all duration-300 ${
                    !showInnovativeOnly
                      ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 border border-zion-cyan/20'
                  }`}
                >
                  All Services
                </button>
                <button
                  onClick={() => setShowInnovativeOnly(true)}
                  className={`flex-1 px-4 py-4 rounded-lg font-medium transition-all duration-300 ${
                    showInnovativeOnly
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 border border-zion-cyan/20'
                  }`}
                >
                  Innovative 2024
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 border border-zion-cyan/20'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:bg-zion-blue-light/20 transition-all duration-300 cursor-pointer group"
              onClick={() => openServiceModal(service)}
            >
              {/* Service Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-medium text-white px-3 py-1 rounded-full ${getServiceColor(service)}`}>
                  {getServiceType(service)}
                </span>
                <span className="text-2xl font-bold text-zion-cyan">
                  {service.currency}{service.price}
                </span>
              </div>

              {/* Service Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-xs text-zion-slate-light">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-zion-cyan mt-2">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <div key={index} className="flex items-center text-xs text-zion-slate-light">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology & ROI */}
              <div className="flex items-center justify-between text-xs mb-4">
                <div className="text-zion-slate-light">
                  {(service as any).hasOwnProperty('roi') ? (
                    <span><span className="font-medium">ROI:</span> {(service as any).roi}</span>
                  ) : (
                    <span className="font-medium">Premium Service</span>
                  )}
                </div>
                <div className="text-zion-cyan font-medium">
                  {service.estimatedDelivery}
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-zion-cyan/20">
                <div className="flex items-center justify-between text-xs">
                  <div className="text-zion-slate-light">
                    <span className="font-medium">Market Price:</span> {service.marketPrice}
                  </div>
                  <button className="text-zion-cyan hover:text-white transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-zion-slate-light text-lg mb-4">
              No services found matching your criteria
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setShowInnovativeOnly(false);
              }}
              className="text-zion-cyan hover:text-white transition-colors"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-24"
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Our comprehensive portfolio of services is designed to drive growth, efficiency, and competitive advantage. 
              Get in touch to learn how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 bg-zion-cyan text-zion-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-2 bg-zion-blue-light/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-blue-light/30 transition-colors border border-zion-cyan/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6 text-zion-slate-light">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-white transition-colors">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zion-blue-dark border border-zion-cyan/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-zion-cyan/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-sm font-medium text-white px-3 py-1 rounded-full ${getServiceColor(selectedService)}`}>
                      {getServiceType(selectedService)}
                    </span>
                    <span className="text-sm font-medium text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
                      {selectedService.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
                </div>
                <button
                  onClick={closeServiceModal}
                  className="text-zion-slate-light hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-zion-cyan mb-3">Description</h3>
                    <p className="text-zion-slate-light leading-relaxed">{selectedService.description}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-zion-cyan mb-3">Features</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedService.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center text-zion-slate-light">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-zion-cyan mb-3">Benefits</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedService.benefits.map((benefit: string, index: number) => (
                        <div key={index} className="flex items-center text-zion-slate-light">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-zion-cyan mb-3">Pricing & Details</h3>
                    <div className="bg-zion-blue-light/10 rounded-lg p-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Price:</span>
                        <span className="text-white font-semibold">{selectedService.currency}{selectedService.price}/{selectedService.pricingModel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Market Price:</span>
                        <span className="text-white">{selectedService.marketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Delivery:</span>
                        <span className="text-white">{selectedService.estimatedDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Support:</span>
                        <span className="text-white">{selectedService.supportLevel}</span>
                      </div>
                      {selectedService.hasOwnProperty('roi') && (
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">ROI:</span>
                          <span className="text-green-400 font-semibold">{selectedService.roi}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {selectedService.hasOwnProperty('technology') && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-zion-cyan mb-3">Technology Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.technology.map((tech: string, index: number) => (
                          <span key={index} className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedService.hasOwnProperty('integrations') && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-zion-cyan mb-3">Integrations</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.integrations.map((integration: string, index: number) => (
                          <span key={index} className="bg-zion-blue-light/20 text-white px-3 py-1 rounded-full text-sm">
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-zion-cyan mb-3">Use Cases</h3>
                    <div className="space-y-2">
                      {selectedService.useCases.map((useCase: string, index: number) => (
                        <div key={index} className="text-zion-slate-light text-sm">
                          • {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Information for Innovative Services */}
              {selectedService.hasOwnProperty('marketTrend') && (
                <div className="mt-8 pt-6 border-t border-zion-cyan/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Market Trend</h4>
                      <p className="text-zion-slate-light text-sm">{selectedService.marketTrend}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Funding Status</h4>
                      <p className="text-zion-slate-light text-sm">{selectedService.fundingStatus}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Competitors</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedService.competitors.map((competitor: string, index: number) => (
                          <span key={index} className="bg-zion-blue-light/10 text-zion-slate-light px-2 py-1 rounded text-xs">
                            {competitor}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="mt-8 pt-6 border-t border-zion-cyan/20">
                <h3 className="text-lg font-semibold text-zion-cyan mb-4">Get Started Today</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-zion-blue-light/10 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Contact Information</h4>
                    <div className="space-y-2 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {selectedService.contactInfo.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {selectedService.contactInfo.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0-9c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9" />
                        </svg>
                        <a href={selectedService.contactInfo.website} className="text-zion-cyan hover:text-white transition-colors">
                          {selectedService.contactInfo.website}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-zion-blue-light/10 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Ready to Start?</h4>
                    <p className="text-sm text-zion-slate-light mb-4">
                      Contact us today to discuss how this solution can transform your business.
                    </p>
                    <div className="space-y-2">
                      <a
                        href={`tel:${selectedService.contactInfo.phone}`}
                        className="block w-full bg-zion-cyan text-zion-blue-dark text-center py-2 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-colors"
                      >
                        Call Now
                      </a>
                      <a
                        href={`mailto:${selectedService.contactInfo.email}`}
                        className="block w-full bg-zion-blue-light/20 text-white text-center py-2 rounded-lg font-semibold hover:bg-zion-blue-light/30 transition-colors border border-zion-cyan/30"
                      >
                        Send Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}