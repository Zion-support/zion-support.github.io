import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { COMPREHENSIVE_PRICING_GUIDE_2027 } from '@/data/comprehensivePricingGuide2027';

const ComprehensivePricingGuide2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'ai', name: 'Artificial Intelligence', icon: '🤖' },
    { id: 'blockchain', name: 'Blockchain', icon: '🔗' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'edge', name: 'Edge Computing', icon: '🌐' },
    { id: 'sustainability', name: 'Sustainability', icon: '🌱' },
    { id: 'metaverse', name: 'Metaverse', icon: '🌍' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'financial', name: 'Financial Services', icon: '💰' }
  ];

  const filteredServices = COMPREHENSIVE_PRICING_GUIDE_2027.filter(service => {
    if (selectedCategory === 'all') return true;
    return service.category.toLowerCase().includes(selectedCategory) ||
           service.subcategory.toLowerCase().includes(selectedCategory);
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Comprehensive Pricing Guide 2027 | Zion Tech Group"
        description="Explore our comprehensive pricing guide for 2027. Compare pricing tiers, features, and ROI across all our innovative micro SAAS, IT, and AI services."
        keywords="pricing guide, service pricing, micro SAAS pricing, IT services pricing, AI services pricing, 2027, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Comprehensive Pricing
            </span>
            <br />
            <span className="text-zion-neon">Guide 2027</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-cyan/80 mb-8 max-w-4xl mx-auto"
          >
            Transparent pricing for all our innovative services. Compare features, pricing tiers, and ROI across 
            our comprehensive portfolio of micro SAAS, IT, and AI solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3">
              <span className="text-zion-purple text-lg font-semibold">Transparent Pricing</span>
            </div>
            <div className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3">
              <span className="text-zion-cyan text-lg font-semibold">Multiple Tiers</span>
            </div>
            <div className="bg-zion-neon/20 backdrop-blur-sm border border-zion-neon/30 rounded-full px-6 py-3">
              <span className="text-zion-neon text-lg font-semibold">ROI Focused</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and View Toggle */}
      <section className="py-12 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-black border-zion-cyan'
                      : 'bg-transparent text-zion-cyan border-zion-cyan/30 hover:border-zion-cyan/60'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-zion-cyan text-black border-zion-cyan'
                    : 'bg-transparent text-zion-cyan border-zion-cyan/30 hover:border-zion-cyan/60'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-zion-cyan text-black border-zion-cyan'
                    : 'bg-transparent text-zion-cyan border-zion-cyan/30 hover:border-zion-cyan/60'
                }`}
              >
                List View
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' : 'space-y-8'}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/60 transition-all duration-500 ${
                  viewMode === 'grid' ? 'p-6' : 'p-8'
                }`}
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-zion-cyan/70">
                        <span>{service.category}</span>
                        <span>•</span>
                        <span>{service.subcategory}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-zion-cyan/50 mb-1">Market Price</div>
                      <div className="text-lg font-bold text-zion-neon">{service.marketPrice}</div>
                    </div>
                  </div>
                  
                  <p className="text-zion-cyan/80 mb-4">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="bg-zion-purple/20 px-3 py-1 rounded-full border border-zion-purple/30">
                      <span className="text-zion-purple">ROI: {service.roi}</span>
                    </div>
                    <div className="bg-zion-cyan/20 px-3 py-1 rounded-full border border-zion-cyan/30">
                      <span className="text-zion-cyan">Market: {service.marketSize}</span>
                    </div>
                    <div className="bg-zion-neon/20 px-3 py-1 rounded-full border border-zion-neon/30">
                      <span className="text-zion-neon">{service.innovationLevel}</span>
                    </div>
                  </div>
                </div>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {/* Starter */}
                  <div className="bg-black/30 rounded-lg p-4 border border-zion-cyan/20">
                    <div className="text-center mb-3">
                      <h4 className="text-lg font-bold text-white mb-1">Starter</h4>
                      <div className="text-2xl font-bold text-zion-cyan">
                        ${service.pricing.starter.price.toLocaleString()}
                        <span className="text-sm text-zion-cyan/70">/{service.pricing.starter.period}</span>
                      </div>
                    </div>
                    <div className="text-xs text-zion-cyan/70 mb-3">{service.pricing.starter.bestFor}</div>
                    <ul className="space-y-2">
                      {service.pricing.starter.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-zion-cyan/80">
                          <span className="text-zion-cyan">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Professional */}
                  <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg p-4 border border-zion-cyan/40 relative">
                    <div className="absolute -top-2 -right-2 bg-zion-cyan text-black text-xs px-2 py-1 rounded-full font-bold">
                      POPULAR
                    </div>
                    <div className="text-center mb-3">
                      <h4 className="text-lg font-bold text-white mb-1">Professional</h4>
                      <div className="text-2xl font-bold text-zion-cyan">
                        ${service.pricing.professional.price.toLocaleString()}
                        <span className="text-sm text-zion-cyan/70">/{service.pricing.professional.period}</span>
                      </div>
                    </div>
                    <div className="text-xs text-zion-cyan/70 mb-3">{service.pricing.professional.bestFor}</div>
                    <ul className="space-y-2">
                      {service.pricing.professional.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-zion-cyan/80">
                          <span className="text-zion-cyan">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enterprise */}
                  <div className="bg-black/30 rounded-lg p-4 border border-zion-purple/40">
                    <div className="text-center mb-3">
                      <h4 className="text-lg font-bold text-white mb-1">Enterprise</h4>
                      <div className="text-2xl font-bold text-zion-purple">
                        ${service.pricing.enterprise.price.toLocaleString()}
                        <span className="text-sm text-zion-purple/70">/{service.pricing.enterprise.period}</span>
                      </div>
                    </div>
                    <div className="text-xs text-zion-cyan/70 mb-3">{service.pricing.enterprise.bestFor}</div>
                    <ul className="space-y-2">
                      {service.pricing.enterprise.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-zion-cyan/80">
                          <span className="text-zion-cyan">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Custom */}
                  <div className="bg-gradient-to-br from-zion-neon/20 to-zion-cyan/20 rounded-lg p-4 border border-zion-neon/40">
                    <div className="text-center mb-3">
                      <h4 className="text-lg font-bold text-white mb-1">Custom</h4>
                      <div className="text-lg font-bold text-zion-neon">Tailored</div>
                    </div>
                    <div className="text-xs text-zion-cyan/70 mb-3">{service.pricing.custom.bestFor}</div>
                    <ul className="space-y-2">
                      {service.pricing.custom.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-zion-cyan/80">
                          <span className="text-zion-cyan">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Features and Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-zion-cyan/80">
                          <span className="text-zion-cyan">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 5).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-zion-cyan/80">
                          <span className="text-zion-neon">→</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Use Cases and Target Audience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.slice(0, 4).map((useCase, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Target Audience</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.targetAudience.slice(0, 4).map((audience, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Competitors and Contact */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-zion-cyan/20">
                  <div>
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Competitors</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.competitors.slice(0, 3).map((competitor, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded border border-red-500/30"
                        >
                          {competitor}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      to={`/services/${service.id}`}
                      className="bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-semibold py-2 px-6 rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-transparent border border-zion-cyan text-zion-cyan font-semibold py-2 px-6 rounded-lg hover:bg-zion-cyan hover:text-black transition-all duration-300"
                    >
                      Get Quote
                    </Link>
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
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-cyan/70">
                Try adjusting your category filter
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-cyan/80 mb-8"
          >
            Contact our team to discuss pricing, customization options, and how our services can drive your success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-bold py-4 px-8 rounded-lg text-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300"
            >
              Request Custom Quote
            </Link>
            
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-lg text-lg hover:bg-zion-cyan hover:text-black transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-zion-cyan/70"
          >
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            <p className="mt-4 text-sm">
              All prices are in USD. Custom enterprise solutions available upon request.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;