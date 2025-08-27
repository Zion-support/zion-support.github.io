import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Sparkles, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, ChevronDown, CheckCircle, ExternalLink, Crown, Zap as ZapIcon } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { COMPREHENSIVE_PRICING_2028, SERVICE_CATEGORIES_2028, CONTACT_INFO_2028, PAYMENT_OPTIONS_2028, GUARANTEES_2028 } from '../data/comprehensivePricingGuide2028';

export default function ComprehensivePricing2028() {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  const getPrice = (basePrice: number) => {
    return selectedPeriod === 'annual' ? Math.round(basePrice * 10) : basePrice;
  };

  const getSavings = (basePrice: number) => {
    if (selectedPeriod === 'annual') {
      const monthlyTotal = basePrice * 12;
      const annualTotal = basePrice * 10;
      return Math.round(((monthlyTotal - annualTotal) / monthlyTotal) * 100);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-cyber-black">
      {/* Futuristic Background */}
      <div className="futuristic-bg">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="quantum-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <SEO 
        title="2028 Pricing - Zion Tech Group | Comprehensive Service Pricing"
        description="Explore our comprehensive 2028 pricing for AI, Quantum Computing, Blockchain, Edge Computing, and IT services. Transparent pricing with enterprise-grade solutions."
        keywords="2028 pricing, AI services pricing, quantum computing pricing, blockchain pricing, IT services pricing, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
                2028 Pricing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neon-cyan/80 mb-8 max-w-4xl mx-auto">
              Transparent, competitive pricing for revolutionary AI, Quantum Computing, Blockchain & Web3, and Enterprise IT Solutions
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${selectedPeriod === 'monthly' ? 'text-white' : 'text-neon-cyan/50'}`}>
                Monthly
              </span>
              <button
                onClick={() => setSelectedPeriod(selectedPeriod === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  selectedPeriod === 'annual' ? 'bg-neon-cyan' : 'bg-cyber-gray'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    selectedPeriod === 'annual' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${selectedPeriod === 'annual' ? 'text-white' : 'text-neon-cyan/50'}`}>
                Annual
                {selectedPeriod === 'annual' && (
                  <span className="ml-2 px-2 py-1 bg-neon-green text-cyber-black text-xs font-bold rounded">
                    Save up to 17%
                  </span>
                )}
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-neon-green">
                <CheckCircle className="w-5 h-5" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center space-x-2 text-neon-blue">
                <CheckCircle className="w-5 h-5" />
                <span>30-Day Money Back</span>
              </div>
              <div className="flex items-center space-x-2 text-neon-purple">
                <CheckCircle className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-cyber-gray/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-neon-cyan text-cyber-black'
                  : 'bg-cyber-gray text-neon-cyan hover:bg-neon-cyan/20'
              }`}
            >
              All Categories
            </button>
            {Array.from(new Set(SERVICE_CATEGORIES_2028.map(cat => cat.id))).map(categoryId => {
              const category = SERVICE_CATEGORIES_2028.find(cat => cat.id === categoryId);
              return (
                <button
                  key={categoryId}
                  onClick={() => setSelectedCategory(categoryId)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === categoryId
                      ? 'bg-neon-cyan text-cyber-black'
                      : 'bg-cyber-gray text-neon-cyan hover:bg-neon-cyan/20'
                  }`}
                >
                  {category?.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Micro SAAS Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card-futuristic"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cyber-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Micro SAAS</h3>
                <p className="text-neon-cyan/70">Essential business solutions</p>
              </div>

              <div className="space-y-6">
                {COMPREHENSIVE_PRICING_2028.microSaas.tiers.map((tier, index) => (
                  <div key={tier.id} className="border border-neon-cyan/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{tier.name}</h4>
                      {tier.popular && (
                        <span className="px-2 py-1 bg-neon-yellow text-cyber-black text-xs font-bold rounded">
                          POPULAR
                        </span>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-neon-green">
                        ${getPrice(tier.price).toLocaleString()}
                      </span>
                      <span className="text-neon-cyan/70">/{selectedPeriod === 'annual' ? 'year' : 'month'}</span>
                      {getSavings(tier.price) > 0 && (
                        <span className="ml-2 px-2 py-1 bg-neon-green text-cyber-black text-xs font-bold rounded">
                          Save {getSavings(tier.price)}%
                        </span>
                      )}
                    </div>

                    <p className="text-neon-cyan/70 text-sm mb-4">{tier.description}</p>

                    <ul className="space-y-2 mb-4">
                      {tier.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <Check className="w-4 h-4 text-neon-green flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/contact"
                      className="btn-futuristic btn-primary w-full text-center"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI Services Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-futuristic border-2 border-neon-cyan/50"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-cyber-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI Services</h3>
                <p className="text-neon-cyan/70">Advanced AI & ML solutions</p>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-neon-cyan text-cyber-black text-sm font-bold rounded">
                    MOST POPULAR
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {COMPREHENSIVE_PRICING_2028.aiServices.tiers.map((tier, index) => (
                  <div key={tier.id} className="border border-neon-purple/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{tier.name}</h4>
                      {tier.popular && (
                        <span className="px-2 py-1 bg-neon-yellow text-cyber-black text-xs font-bold rounded">
                          POPULAR
                        </span>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-neon-green">
                        ${getPrice(tier.price).toLocaleString()}
                      </span>
                      <span className="text-neon-cyan/70">/{selectedPeriod === 'annual' ? 'year' : 'month'}</span>
                      {getSavings(tier.price) > 0 && (
                        <span className="ml-2 px-2 py-1 bg-neon-green text-cyber-black text-xs font-bold rounded">
                          Save {getSavings(tier.price)}%
                        </span>
                      )}
                    </div>

                    <p className="text-neon-cyan/70 text-sm mb-4">{tier.description}</p>

                    <ul className="space-y-2 mb-4">
                      {tier.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <Check className="w-4 h-4 text-neon-green flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/contact"
                      className="btn-futuristic btn-primary w-full text-center"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* IT Services Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-futuristic"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-cyber-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">IT Services</h3>
                <p className="text-neon-cyan/70">Enterprise infrastructure solutions</p>
              </div>

              <div className="space-y-6">
                {COMPREHENSIVE_PRICING_2028.itServices.tiers.map((tier, index) => (
                  <div key={tier.id} className="border border-neon-green/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{tier.name}</h4>
                      {tier.popular && (
                        <span className="px-2 py-1 bg-neon-yellow text-cyber-black text-xs font-bold rounded">
                          POPULAR
                        </span>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-neon-green">
                        ${getPrice(tier.price).toLocaleString()}
                      </span>
                      <span className="text-neon-cyan/70">/{selectedPeriod === 'annual' ? 'year' : 'month'}</span>
                      {getSavings(tier.price) > 0 && (
                        <span className="ml-2 px-2 py-1 bg-neon-green text-cyber-black text-xs font-bold rounded">
                          Save {getSavings(tier.price)}%
                        </span>
                      )}
                    </div>

                    <p className="text-neon-cyan/70 text-sm mb-4">{tier.description}</p>

                    <ul className="space-y-2 mb-4">
                      {tier.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <Check className="w-4 h-4 text-neon-green flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/contact"
                      className="btn-futuristic btn-primary w-full text-center"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories Detail */}
      <section className="py-20 bg-cyber-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Detailed Service Pricing
            </h2>
            <p className="text-xl text-neon-cyan/80 max-w-3xl mx-auto">
              Explore our comprehensive service categories with detailed pricing and features
            </p>
          </motion.div>

          <div className="space-y-12">
            {SERVICE_CATEGORIES_2028
              .filter(cat => selectedCategory === 'all' || cat.id === selectedCategory)
              .map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-futuristic"
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-neon-cyan/70 text-lg">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={service.id} className="border border-neon-cyan/20 rounded-lg p-6 hover:border-neon-cyan/40 transition-all duration-300">
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-neon-cyan/70 text-sm mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-neon-green">
                          ${getPrice(service.basePrice).toLocaleString()}
                        </span>
                        <span className="text-neon-cyan/70">/{selectedPeriod === 'annual' ? 'year' : 'month'}</span>
                      </div>

                      <div className="mb-4">
                        <span className="text-neon-cyan text-sm">Market Price: {service.marketPrice}</span>
                      </div>

                      <div className="mb-4">
                        <span className="text-neon-green text-sm">ROI: {service.roi}</span>
                      </div>

                      <div className="mb-4">
                        <span className="text-neon-purple text-sm">Delivery: {service.estimatedDelivery}</span>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <Check className="w-4 h-4 text-neon-green flex-shrink-0" />
                            <span className="text-white/80">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="/contact"
                        className="btn-futuristic btn-secondary w-full text-center"
                      >
                        Get Quote
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Guarantees */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-neon-cyan/80 mb-8">
                Ready to transform your business with our 2028 services? Contact our experts today.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-cyber-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-neon-cyan hover:text-neon-blue transition-colors duration-300">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-purple to-neon-pink rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-cyber-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-neon-cyan hover:text-neon-blue transition-colors duration-300">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-green to-neon-cyan rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-cyber-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Website</p>
                    <a href={contactInfo.website} className="text-neon-cyan hover:text-neon-blue transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-yellow to-neon-orange rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-cyber-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-neon-cyan/70">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="btn-futuristic btn-primary text-lg px-8 py-4"
                >
                  Contact Sales Team
                </a>
              </div>
            </motion.div>

            {/* Guarantees & Payment */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Guarantees</h2>
              
              <div className="space-y-6">
                <div className="border border-neon-cyan/20 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-neon-cyan mb-2">Satisfaction Guarantee</h3>
                  <p className="text-white/80">{GUARANTEES_2028.satisfaction}</p>
                </div>

                <div className="border border-neon-green/20 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-neon-green mb-2">Quality Assurance</h3>
                  <p className="text-white/80">{GUARANTEES_2028.quality}</p>
                </div>

                <div className="border border-neon-purple/20 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-neon-purple mb-2">Support & Security</h3>
                  <p className="text-white/80">{GUARANTEES_2028.support}</p>
                  <p className="text-white/80 mt-2">{GUARANTEES_2028.security}</p>
                </div>

                <div className="border border-neon-blue/20 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-neon-blue mb-2">Uptime Guarantee</h3>
                  <p className="text-white/80">{GUARANTEES_2028.uptime}</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Payment Options</h3>
                <div className="grid grid-cols-1 gap-2">
                  {PAYMENT_OPTIONS_2028.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <Check className="w-4 h-4 text-neon-green flex-shrink-0" />
                      <span className="text-white/80">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}