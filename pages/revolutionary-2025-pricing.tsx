import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, Phone, Mail, MapPin, BookOpen, Brain, Atom, Rocket, Crown } from 'lucide-react';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import Footer from '../components/layout/Footer';

export default function Revolutionary2025PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

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

  return (
    <>
      <Head>
        <title>Revolutionary 2025 Pricing - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary 2025 pricing for innovative AI, quantum computing, and enterprise IT services. Achieve remarkable ROI with our cutting-edge solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2025-pricing" />
      </Head>

      <EnhancedNavigation />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pt-20">
        <main className="container mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Revolutionary 2025 Pricing
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Transform your business with our comprehensive collection of innovative AI, quantum computing, and enterprise IT services. 
                Achieve remarkable ROI with transparent, competitive pricing.
              </p>

              {/* Billing Cycle Toggle */}
              <div className="flex items-center justify-center space-x-4 mt-8">
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
            </motion.div>
          </div>

          {/* Pricing Tiers */}
          <section className="mb-20">
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
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your specific needs and get a custom quote. 
                We offer flexible pricing and payment options to fit your budget.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-blue-400 font-mono">{contactInfo.mobile}</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
                  <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-green-400">{contactInfo.email}</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-purple-400 text-sm">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </button>
                <button className="border border-blue-500 text-blue-400 hover:bg-blue-500/20 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Download Pricing Guide
                </button>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
}