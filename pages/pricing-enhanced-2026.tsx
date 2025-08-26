import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Phone, Mail, MapPin } from 'lucide-react';

export default function PricingEnhanced2026Page() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Enhanced pricing tiers with more realistic and comprehensive offerings
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billingCycle === 'monthly' ? 99 : 79,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 100+ Core Services',
        'Basic AI Integration',
        'Email Support',
        'Standard Security',
        'Monthly Reports'
      ],
      cta: 'Start Free Trial',
      popular: false,
      color: 'from-green-500 to-emerald-600',
      icon: Rocket
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: billingCycle === 'monthly' ? 299 : 239,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Everything in Starter',
        'Advanced AI Features',
        'Priority Support',
        'Enhanced Security',
        'Real-time Analytics',
        'Custom Integrations'
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'from-blue-500 to-cyan-600',
      icon: Shield
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: 'Custom',
      period: '',
      savings: '',
      features: [
        'Everything in Professional',
        'Custom AI Solutions',
        '24/7 Dedicated Support',
        'Advanced Security',
        'Custom Development',
        'SLA Guarantees',
        'On-premise Options'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-purple-500 to-pink-600',
      icon: Crown
    }
  ];

  // Enhanced service categories with pricing for 2026
  const serviceCategories = [
    {
      name: 'Next-Generation AI 2026',
      description: 'Revolutionary AI platforms with quantum integration',
      services: ['AI Quantum Financial Trading', 'AI Healthcare Diagnostics', 'AI Autonomous Manufacturing', 'AI Cybersecurity Threat Intelligence'],
      avgPrice: '$2,499/month',
      savings: 'Save 60-80% vs. competitors',
      icon: Brain,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Quantum & Emerging Tech 2026',
      description: 'Cutting-edge quantum and emerging technologies',
      services: ['Quantum Internet Security', 'Neuromorphic Computing', 'DNA Computing', 'Photonic Computing', 'Holographic Display'],
      avgPrice: '$4,199/month',
      savings: 'Save 70-85% vs. competitors',
      icon: Atom,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Enterprise IT Solutions 2026',
      description: 'Advanced enterprise infrastructure and security',
      services: ['Zero Trust Network Architecture', 'Edge Computing Orchestration', '5G Private Networks', 'Blockchain Infrastructure', 'AI DevOps Automation'],
      avgPrice: '$5,199/month',
      savings: 'Save 50-75% vs. competitors',
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    }
  ];

  // Featured services showcase
  const featuredServices = [
    {
      name: 'AI Quantum Financial Trading',
      description: 'Revolutionary AI-powered financial trading platform with quantum computing integration for unprecedented accuracy and speed.',
      price: '$2,499/month',
      features: ['Real-time market analysis', 'Quantum-powered predictions', 'Risk management', 'Multi-exchange support'],
      icon: '🧠',
      link: 'https://ziontechgroup.com/services/ai-quantum-financial-trading'
    },
    {
      name: 'Zero Trust Network Architecture',
      description: 'Advanced zero trust security architecture implementation for enterprise-grade protection.',
      price: '$5,199/month',
      features: ['Continuous verification', 'Micro-segmentation', 'Threat intelligence', 'Compliance ready'],
      icon: '🔒',
      link: 'https://ziontechgroup.com/services/zero-trust-network-architecture'
    }
  ];

  return (
    <>
      <Head>
        <title>Enhanced 2026 Pricing - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive 2026 pricing for innovative AI, quantum computing, and enterprise IT services. Achieve remarkable ROI with our cutting-edge solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/pricing-enhanced-2026" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Enhanced Header Section */}
        <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Enhanced 2026 Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive collection of innovative AI, quantum computing, and enterprise IT services. 
              Achieve remarkable ROI with transparent, competitive pricing.
            </p>

            {/* Billing Cycle Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-cyan-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly <span className="text-cyan-400 text-sm">(Save 20%)</span>
              </span>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Need Custom Pricing?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-center">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Pricing Tiers */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div
                    className={`h-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 ${
                      tier.popular ? 'ring-2 ring-cyan-500 ring-opacity-50' : ''
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${tier.color}`}>
                          <tier.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-400 mb-6">{tier.description}</p>
                      
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-cyan-400">
                          {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                        </span>
                        <span className="text-gray-400">{tier.period}</span>
                        {tier.savings && (
                          <div className="text-sm text-green-400 mt-1">{tier.savings}</div>
                        )}
                      </div>
                      
                      <ul className="text-left space-y-3 mb-8">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button 
                        className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200"
                        onClick={() => {
                          if (tier.name === 'Enterprise') {
                            window.open(`mailto:${contactInfo.email}?subject=Enterprise Pricing Inquiry`, '_blank');
                          } else {
                            window.open(`mailto:${contactInfo.email}?subject=Start Free Trial - ${tier.name}`, '_blank');
                          }
                        }}
                      >
                        {tier.cta}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Service Categories */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Service Categories & Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive service categories with transparent pricing and competitive advantages
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} mr-4`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      </div>
                      
                      <p className="text-gray-400 mb-4">{category.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{category.avgPrice}</span>
                        <div className="text-sm text-green-400">{category.savings}</div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {category.services.map((service, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                      
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center">
                        View Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Services Showcase */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular and innovative services that are transforming businesses worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-sm text-gray-400">Starting price</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center">
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Footer CTA */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our innovative services to gain competitive advantages and achieve remarkable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </button>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>Contact: {contactInfo.mobile} | {contactInfo.email}</p>
                <p>{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}