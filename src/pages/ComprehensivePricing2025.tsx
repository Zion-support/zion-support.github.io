import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Star, 
  Shield, 
  Zap, 
  Rocket, 
  Crown,
  DollarSign,
  Clock,
  Users,
  Globe,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_PRICING_GUIDE_2025 } from '../data/comprehensivePricingGuide2025';

export default function ComprehensivePricing2025() {
  const [selectedTier, setSelectedTier] = useState('professional');
  const [selectedPayment, setSelectedPayment] = useState('annual');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const pricingGuide = COMPREHENSIVE_PRICING_GUIDE_2025;
  
  const getPaymentDiscount = (paymentType: string) => {
    switch (paymentType) {
      case 'quarterly': return 0.05;
      case 'annual': return 0.15;
      case 'enterprise': return 0.25;
      default: return 0;
    }
  };

  const formatPrice = (basePrice: string, paymentType: string) => {
    const price = parseInt(basePrice.replace(/[^0-9]/g, ''));
    const discount = getPaymentDiscount(paymentType);
    const discountedPrice = price * (1 - discount);
    
    if (discount > 0) {
      return {
        original: `$${price.toLocaleString()}`,
        discounted: `$${Math.round(discountedPrice).toLocaleString()}`,
        savings: `${Math.round(discount * 100)}% off`
      };
    }
    
    return {
      original: `$${price.toLocaleString()}`,
      discounted: `$${price.toLocaleString()}`,
      savings: null
    };
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="2025 Comprehensive Pricing Guide - Zion Tech Group"
        description="Complete pricing information for our innovative AI, IT, and technology solutions. Transparent pricing with ROI guarantees and flexible payment options."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              2025 Pricing Guide
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Transparent pricing for our comprehensive portfolio of innovative AI, IT, and technology solutions. 
            Choose the plan that fits your business needs with guaranteed ROI and flexible payment options.
          </motion.p>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Choose Your Plan</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the pricing tier that best fits your business needs. All plans include our core features 
              with additional capabilities as you scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(pricingGuide.pricingTiers).map(([key, tier]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: key === 'professional' ? 0.2 : 0 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl transition-all duration-300 ${
                  key === 'professional' 
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 scale-105' 
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {key === 'professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    key === 'starter' ? 'bg-green-500/20 text-green-400' :
                    key === 'professional' ? 'bg-cyan-500/20 text-cyan-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {key === 'starter' ? <Users className="w-8 h-8" /> :
                     key === 'professional' ? <Star className="w-8 h-8" /> :
                     <Crown className="w-8 h-8" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <div className="mb-8">
                  <div className="text-3xl font-bold text-white mb-2">{tier.priceRange}</div>
                  <p className="text-gray-400 text-sm">Starting price per month</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-4">{tier.bestFor}</p>
                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    key === 'professional'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Flexible Payment Options</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the payment schedule that works best for your business. Save more with longer-term commitments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(pricingGuide.paymentOptions).map(([key, option]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  selectedPayment === key 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50' 
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-500/30'
                }`}
                onClick={() => setSelectedPayment(key)}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{option.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{option.description}</p>
                  
                  {option.discount !== "0%" && (
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {option.discount} discount
                    </div>
                  )}
                  
                  <ul className="space-y-2 text-left">
                    {option.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Pricing */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Service Category Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore detailed pricing for each service category. All prices include implementation, 
              training, and ongoing support.
            </p>
          </motion.div>

          <div className="space-y-6">
            {Object.entries(pricingGuide.serviceCategories).map(([categoryName, category]) => (
              <motion.div
                key={categoryName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20"
              >
                <button
                  onClick={() => toggleCategory(categoryName)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{categoryName}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                  {expandedCategory === categoryName ? (
                    <ChevronUp className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-cyan-400" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedCategory === categoryName && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/20 p-6"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {category.services.map((service, index) => (
                          <div key={index} className="bg-white/5 rounded-xl p-6">
                            <h4 className="text-xl font-semibold text-white mb-3">{service.name}</h4>
                            
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-cyan-400">{service.starter}</div>
                                <div className="text-xs text-gray-400">Starter</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400">{service.professional}</div>
                                <div className="text-xs text-gray-400">Professional</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-purple-400">{service.enterprise}</div>
                                <div className="text-xs text-gray-400">Enterprise</div>
                              </div>
                            </div>

                            <div className="space-y-2 mb-4">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-400">ROI:</span>
                                <span className="text-green-400 font-semibold">{service.roi}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-400">Setup:</span>
                                <span className="text-white">{service.setupTime}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {service.features.map((feature, featureIndex) => (
                                <span
                                  key={featureIndex}
                                  className="px-2 py-1 bg-white/20 rounded-lg text-xs text-gray-300"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Guarantees */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">ROI Guarantees</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're so confident in our solutions that we guarantee specific ROI targets. 
              If we don't meet our promises, we'll work with you until we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingGuide.roiGuarantees.guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{guarantee.service}</h3>
                <div className="text-2xl font-bold text-green-400 mb-2">{guarantee.guarantee}</div>
                <p className="text-gray-300 text-sm">{guarantee.terms}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Additional Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your solution with our additional services. Custom development, training, 
              and dedicated support to ensure your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(pricingGuide.addOnServices).map(([serviceName, service]) => (
              <motion.div
                key={serviceName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">{serviceName}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Pricing:</span>
                    <span className="text-cyan-400 font-semibold">{service.pricing}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Timeline:</span>
                    <span className="text-white text-sm">{service.estimatedTime}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {service.includes.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and custom pricing quote. 
              Our experts will help you choose the right solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Pricing Consultation Request"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold"
              >
                <Mail className="w-5 h-5" />
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-all duration-300 font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}