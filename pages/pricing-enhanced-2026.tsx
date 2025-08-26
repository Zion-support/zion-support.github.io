import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PricingEnhanced2026() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Mock pricing data
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for startups and small businesses',
      price: 99,
      period: '/month',
      features: [
        'Access to 100+ Core Services',
        'Basic AI Integration',
        'Standard Support (24/7)',
        '30-Day Free Trial',
        'Basic Analytics Dashboard'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: 299,
      period: '/month',
      features: [
        'Access to 200+ Advanced Services',
        'Advanced AI Integration',
        'Priority Support (24/7)',
        '60-Day Free Trial',
        'Advanced Analytics Dashboard',
        'Custom Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: 999,
      period: '/month',
      features: [
        'Access to ALL 500+ Services',
        'Full AI & Quantum Integration',
        'Dedicated Support Team',
        '90-Day Free Trial',
        'Enterprise Analytics Suite',
        'Custom Development',
        'White-label Solutions'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <Head>
        <title>Enhanced 2026 Pricing - Zion Tech Group | Competitive Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's competitive 2026 pricing for AI, quantum computing, and enterprise IT solutions. Transparent pricing with flexible plans." />
        <meta name="keywords" content="2026 pricing, technology pricing, AI services pricing, quantum computing pricing, enterprise IT pricing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Enhanced 2026 Pricing - Zion Tech Group" />
        <meta property="og:description" content="Competitive pricing for cutting-edge technology solutions in 2026" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing-enhanced-2026" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing-enhanced-2026" />
      </Head>

      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            2026 Enhanced Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transparent, competitive pricing for cutting-edge technology solutions. 
            Choose the plan that fits your business needs and budget.
          </p>
        </motion.div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-white">
                    ${tier.price}
                    <span className="text-lg text-gray-400">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-3">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                {contactInfo.mobile}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 text-center">{contactInfo.address}</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}