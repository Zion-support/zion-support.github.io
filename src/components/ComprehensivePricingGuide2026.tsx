import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from "../data/advancedInnovativeServices2025";
import { NEXT_GEN_INNOVATIVE_SERVICES_2026 } from "../data/nextGenInnovativeServices2026";

const ComprehensivePricingGuide2026: React.FC = () => {
  const [selectedPricingTier, setSelectedPricingTier] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  // Combine all services
  const allServices = [...ADVANCED_INNOVATIVE_SERVICES_2025, ...NEXT_GEN_INNOVATIVE_SERVICES_2026];

  const pricingTiers = [
    { id: 'all', name: 'All Services', color: 'from-purple-600 to-pink-600' },
    { id: 'starter', name: 'Starter ($5K-$15K)', color: 'from-green-600 to-emerald-600' },
    { id: 'professional', name: 'Professional ($15K-$30K)', color: 'from-blue-600 to-cyan-600' },
    { id: 'enterprise', name: 'Enterprise ($30K+)', color: 'from-purple-600 to-indigo-600' }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', icon: '🏢' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'finance', name: 'Finance', icon: '💰' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'retail', name: 'Retail', icon: '🛍️' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'government', name: 'Government', icon: '🏛️' },
    { id: 'energy', name: 'Energy', icon: '⚡' },
    { id: 'logistics', name: 'Logistics', icon: '🚚' }
  ];

  const getPricingTier = (price: number) => {
    if (price < 15000) return 'starter';
    if (price < 30000) return 'professional';
    return 'enterprise';
  };

  const getIndustryMatch = (service: any) => {
    const serviceTags = service.tags.join(' ').toLowerCase();
    const serviceDescription = service.description.toLowerCase();
    
    if (serviceTags.includes('health') || serviceDescription.includes('medical') || serviceDescription.includes('healthcare')) return 'healthcare';
    if (serviceTags.includes('financial') || serviceTags.includes('banking') || serviceTags.includes('trading')) return 'finance';
    if (serviceTags.includes('manufacturing') || serviceTags.includes('industrial')) return 'manufacturing';
    if (serviceTags.includes('retail') || serviceTags.includes('e-commerce')) return 'retail';
    if (serviceTags.includes('ai') || serviceTags.includes('technology') || serviceTags.includes('software')) return 'technology';
    if (serviceTags.includes('education') || serviceTags.includes('learning')) return 'education';
    if (serviceTags.includes('government') || serviceTags.includes('compliance')) return 'government';
    if (serviceTags.includes('energy') || serviceTags.includes('grid')) return 'energy';
    if (serviceTags.includes('logistics') || serviceTags.includes('supply chain')) return 'logistics';
    return 'technology';
  };

  const filteredServices = allServices.filter(service => {
    const matchesPricingTier = selectedPricingTier === 'all' || getPricingTier(service.price) === selectedPricingTier;
    const matchesIndustry = selectedIndustry === 'all' || getIndustryMatch(service) === selectedIndustry;
    return matchesPricingTier && matchesIndustry;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const calculateTotalValue = () => {
    return allServices.reduce((total, service) => total + service.price, 0);
  };

  const calculateAverageROI = () => {
    const rois = allServices.map(service => {
      const roiStr = service.roi;
      const match = roiStr.match(/(\d+)%/);
      return match ? parseInt(match[1]) : 0;
    });
    return rois.reduce((sum, roi) => sum + roi, 0) / rois.length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}Pricing Guide
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              2026
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our complete portfolio of innovative services with transparent pricing, 
            detailed ROI analysis, and industry-specific solutions designed to transform your business.
          </motion.p>

          {/* Statistics */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">
                ${(calculateTotalValue() / 1000).toFixed(0)}K+
              </div>
              <div className="text-gray-300">Total Service Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {allServices.length}
              </div>
              <div className="text-gray-300">Innovative Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                {calculateAverageROI().toFixed(0)}%
              </div>
              <div className="text-gray-300">Average ROI</div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="https://ziontechgroup.com/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </a>
            <a 
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Call for Pricing
            </a>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pricing Tier Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Pricing Tier</label>
              <div className="flex flex-wrap gap-2">
                {pricingTiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedPricingTier(tier.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedPricingTier === tier.id
                        ? `bg-gradient-to-r ${tier.color} text-white`
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {tier.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Industry Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Industry Focus</label>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedIndustry === industry.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {industry.icon} {industry.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-400">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">{service.marketPrice}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-purple-600/20 rounded-lg border border-purple-500/30">
                      <div className="text-2xl font-bold text-purple-300">{service.aiScore}</div>
                      <div className="text-xs text-gray-400">AI Score</div>
                    </div>
                    <div className="text-center p-3 bg-green-600/20 rounded-lg border border-green-500/30">
                      <div className="text-lg font-bold text-green-300">{service.roi}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Category:</span>
                      <div className="text-white font-medium">{service.category}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Setup Time:</span>
                      <div className="text-blue-400 font-medium">{service.setupTime}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Rating:</span>
                      <div className="text-yellow-400 font-medium">⭐ {service.rating} ({service.reviewCount})</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Availability:</span>
                      <div className="text-green-400 font-medium">{service.availability}</div>
                    </div>
                  </div>

                  {/* Competitors */}
                  {service.competitors && (
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Competitors</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.competitors.slice(0, 3).map((competitor, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-red-600/20 text-red-300 text-xs rounded-full border border-red-500/30"
                          >
                            {competitor}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-600">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Quote Request for ${service.title}`}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
                    >
                      Get Quote
                    </a>
                    <a
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-2 px-4 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your filters to see available services</p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Tiers Overview */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Pricing Tiers Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Starter Solutions</h3>
              <div className="text-3xl font-bold text-green-400 mb-2">$5K - $15K</div>
              <p className="text-gray-300 mb-6">
                Perfect for small to medium businesses looking to implement AI and innovative solutions
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  Basic AI implementation
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  Standard support
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  Core features
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  4-8 week delivery
                </li>
              </ul>
              <a 
                href="https://ziontechgroup.com/contact"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Get Started
              </a>
            </motion.div>

            {/* Professional Tier */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Solutions</h3>
              <div className="text-3xl font-bold text-blue-400 mb-2">$15K - $30K</div>
              <p className="text-gray-300 mb-6">
                Advanced solutions for growing businesses with comprehensive AI and automation needs
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-blue-400 mr-2">✓</span>
                  Advanced AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-blue-400 mr-2">✓</span>
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-blue-400 mr-2">✓</span>
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-blue-400 mr-2">✓</span>
                  8-16 week delivery
                </li>
              </ul>
              <a 
                href="https://ziontechgroup.com/contact"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Get Professional
              </a>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h3>
              <div className="text-3xl font-bold text-purple-400 mb-2">$30K+</div>
              <p className="text-gray-300 mb-6">
                Enterprise-grade solutions with cutting-edge technology and dedicated support
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  Full AI suite
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  Custom development
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  16-24 week delivery
                </li>
              </ul>
              <a 
                href="https://ziontechgroup.com/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Contact Sales
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team for a personalized quote and consultation tailored to your business needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">📞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-purple-300 hover:text-purple-200">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✉️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:text-purple-200">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌐</div>
              <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-purple-300 hover:text-purple-200">
                ziontechgroup.com
              </a>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://ziontechgroup.com/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Get Your Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2026;