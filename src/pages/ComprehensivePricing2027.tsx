import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, TrendingUp, Users, Shield, Globe, Phone, Mail, MapPin, Award } from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES_2027 } from '../data/advancedMicroSaasServices2027';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2027 } from '../data/specializedITInfrastructureServices2027';

export default function ComprehensivePricing2027() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [showAnnual, setShowAnnual] = useState(false);

  // Combine all services
  const allServices = [...ADVANCED_MICRO_SAAS_SERVICES_2027, ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2027];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter services
  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      
      const matchesPrice = selectedPriceRange === 'All' || 
        (selectedPriceRange === 'Under $100' && service.price < 100) ||
        (selectedPriceRange === '$100-$299' && service.price >= 100 && service.price <= 299) ||
        (selectedPriceRange === '$300-$599' && service.price >= 300 && service.price <= 599) ||
        (selectedPriceRange === '$600+' && service.price >= 600);

      return matchesCategory && matchesPrice;
    });
  }, [selectedCategory, selectedPriceRange, allServices]);

  // Calculate annual pricing (with 20% discount)
  const getAnnualPrice = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.8);
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
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            2027 Comprehensive Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Transparent pricing for all our cutting-edge AI, IT infrastructure, and emerging technology services. 
            Choose the perfect plan for your business needs.
          </motion.p>

          {/* Pricing Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <span className={`text-lg ${!showAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setShowAnnual(!showAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                showAnnual ? 'bg-cyan-500' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  showAnnual ? 'transform translate-x-8' : 'transform translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${showAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="text-cyan-400 text-sm">(Save 20%)</span>
            </span>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Need Custom Pricing?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-zion-slate-dark text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="All" className="bg-zion-slate-dark text-white">All Prices</option>
                  <option value="Under $100" className="bg-zion-slate-dark text-white">Under $100</option>
                  <option value="$100-$299" className="bg-zion-slate-dark text-white">$100-$299</option>
                  <option value="$300-$599" className="bg-zion-slate-dark text-white">$300-$599</option>
                  <option value="$600+" className="bg-zion-slate-dark text-white">$600+</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
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
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    {service.category}
                  </span>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    ${showAnnual ? getAnnualPrice(service.price) : service.price}
                    <span className="text-lg text-gray-400 font-normal">
                      /{showAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  {showAnnual && (
                    <div className="text-sm text-gray-400 line-through">
                      ${service.price * 12}/year
                    </div>
                  )}
                  <div className="text-sm text-gray-400">{service.marketPrice}</div>
                </div>

                {/* AI Score and Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">AI Score: {service.aiScore}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-400 ml-2">({service.reviewCount})</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 5 && (
                      <div className="text-sm text-cyan-400 mt-2">
                        +{service.features.length - 5} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                        <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Perfect for:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.targetAudience.slice(0, 3).map((audience, index) => (
                      <span
                        key={index}
                        className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                {service.technicalSpecs && (
                  <div className="mb-6 pt-4 border-t border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Technical Specifications:</h4>
                    <div className="grid grid-cols-1 gap-2 text-xs text-gray-400">
                      {service.technicalSpecs.apiEndpoints && (
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span>API Endpoints: {service.technicalSpecs.apiEndpoints}</span>
                        </div>
                      )}
                      {service.technicalSpecs.uptime && (
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span>Uptime: {service.technicalSpecs.uptime}</span>
                        </div>
                      )}
                      {service.technicalSpecs.scalability && (
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span>Scalability: {service.technicalSpecs.scalability}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href={service.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 block"
                  >
                    Get Started
                  </a>
                  <a
                    href={`mailto:${service.contactEmail}?subject=Inquiry about ${service.title} - Pricing`}
                    className="w-full bg-transparent border border-cyan-500 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 block text-center"
                  >
                    Contact Sales
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your filters to see available services</p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Service Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-black/50">
                  <th className="px-6 py-4 text-left text-white font-semibold">Service</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Category</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Monthly Price</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">AI Score</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Rating</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Features</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.slice(0, 10).map((service, index) => (
                  <tr key={service.id} className={`${index % 2 === 0 ? 'bg-black/20' : 'bg-black/10'}`}>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-white">{service.title}</div>
                        <div className="text-sm text-gray-400">{service.description.substring(0, 80)}...</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm">
                        {service.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-cyan-400 font-bold">${service.price}</div>
                      <div className="text-sm text-gray-400">/month</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 font-semibold">{service.aiScore}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-400">{service.rating}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-gray-400">{service.features.length} features</div>
                      <a
                        href={service.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm"
                      >
                        View Details →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is ready to help you choose the perfect service and get you up and running quickly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm mb-4">Speak with our experts directly</p>
              <a
                href="tel:+13024640950"
                className="text-cyan-400 hover:text-cyan-300 text-lg font-medium"
              >
                +1 302 464 0950
              </a>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm mb-4">Get detailed information and quotes</p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-cyan-400 hover:text-cyan-300 text-lg font-medium"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Visit Our Website</h3>
            <p className="text-gray-400 mb-4">Explore our full range of services and learn more about Zion Tech Group</p>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 text-lg font-medium"
            >
              ziontechgroup.com →
            </a>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">Our Address</h3>
            <p className="text-gray-400">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}