import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Check, X, AlertTriangle, Info } from 'lucide-react';

// Mock data for services
const mockServices = [
  {
    id: 'ai-consciousness',
    name: 'AI Consciousness Simulation',
    category: ['AI', 'Consciousness'],
    description: 'Advanced AI consciousness simulation platform',
    price: '$2,999',
    features: ['Neural networks', 'Consciousness modeling', 'Ethical AI']
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    category: ['Quantum', 'Computing'],
    description: 'Next-generation quantum computing services',
    price: '$4,999',
    features: ['Quantum algorithms', 'Hardware optimization', 'Research support']
  },
  {
    id: 'zero-trust-security',
    name: 'Zero Trust Security Framework',
    category: ['Security', 'IT'],
    description: 'Advanced zero trust security implementation',
    price: '$1,999',
    features: ['Identity verification', 'Access control', 'Threat detection']
  },
  {
    id: 'edge-computing',
    name: 'Edge Computing Platform',
    category: ['IT', 'Infrastructure'],
    description: 'Distributed edge computing solutions',
    price: '$1,499',
    features: ['Low latency', 'High availability', 'Scalability']
  }
];

export default function Revolutionary2025Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Service categories
  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: mockServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: mockServices.filter(s => s.category.includes('AI')).length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, count: mockServices.filter(s => s.category.some(cat => cat.includes('IT') || cat.includes('Computing'))).length },
    { id: 'security', name: 'Security', icon: Shield, count: mockServices.filter(s => s.category.includes('Security')).length }
  ];

  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all' 
    ? mockServices 
    : mockServices.filter(service => {
        if (selectedCategory === 'ai') return service.category.some(cat => cat.includes('AI'));
        if (selectedCategory === 'infrastructure') return service.category.some(cat => cat.includes('IT') || cat.includes('Computing'));
        if (selectedCategory === 'security') return service.category.some(cat => cat.includes('Security'));
        return true;
      });

  // Calculate pricing with billing cycle
  const getPrice = (service: any) => {
    const basePrice = parseInt(service.price.replace('$', '').replace(',', ''));
    if (billingCycle === 'yearly') {
      return Math.floor(basePrice * 0.8); // 20% discount for yearly
    }
    return basePrice;
  };

  // Pricing tiers for comparison
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billingCycle === 'monthly' ? 99 : 79,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 25+ Core Services',
        'Basic AI Integration',
        'Standard Support (24/7)',
        '30-Day Free Trial',
        'Basic Analytics Dashboard',
        'Email Support',
        '99.5% Uptime Guarantee',
        'Standard Security Features'
      ],
      icon: <Sparkles className="w-8 h-8" />,
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'monthly' ? 299 : 239,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 50+ Services',
        'Advanced AI Integration',
        'Priority Support (24/7)',
        '60-Day Free Trial',
        'Advanced Analytics Dashboard',
        'Phone & Email Support',
        '99.9% Uptime Guarantee',
        'Advanced Security Features',
        'Custom Integrations',
        'Performance Monitoring'
      ],
      icon: <Rocket className="w-8 h-8" />,
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: billingCycle === 'monthly' ? 999 : 799,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to All Services',
        'Full AI Integration Suite',
        'Dedicated Support Team',
        '90-Day Free Trial',
        'Enterprise Analytics',
        '24/7 Phone Support',
        '99.99% Uptime Guarantee',
        'Enterprise Security',
        'Custom Development',
        'SLA Guarantees',
        'On-site Support',
        'Training & Workshops'
      ],
      icon: <Crown className="w-8 h-8" />,
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Revolutionary 2025 Pricing - Zion Tech Group | AI, Quantum & IT Solutions</title>
        <meta name="description" content="Explore our revolutionary 2025 pricing for AI consciousness simulation, quantum computing, zero trust security, and cutting-edge IT infrastructure. Transparent pricing with flexible billing options." />
        <meta name="keywords" content="2025 pricing, AI services pricing, quantum computing pricing, IT infrastructure pricing, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2025-pricing" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8">
              Revolutionary 2025 Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Transparent pricing for our revolutionary AI, quantum computing, and IT infrastructure services. 
              Choose the perfect plan for your business transformation journey.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="text-gray-400">Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-gray-400">Annual (20% off)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-gray-900 border rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-purple-500 bg-gradient-to-br from-purple-900/20 to-blue-900/20' 
                    : 'border-gray-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm">{tier.description}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    ${tier.price}{tier.period}
                  </div>
                  {tier.savings && (
                    <div className="text-green-400 text-sm font-semibold">{tier.savings}</div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Service Categories</h2>
            <p className="text-xl text-gray-300">Filter our revolutionary services by category</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${
                  selectedCategory === category.id
                    ? 'border-purple-500 bg-purple-500 text-white'
                    : 'border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
                <span className="px-2 py-1 text-xs bg-gray-700 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.category.map((cat, catIndex) => (
                    <span key={catIndex} className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded">
                      {cat}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                      <Check className="w-3 h-3 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific needs and get a customized quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {contactInfo.mobile}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          <p className="mt-2">
            <a href={contactInfo.website} className="text-purple-400 hover:text-purple-300">
              {contactInfo.website}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
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
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </button>
                <button className="border-blue-500 text-blue-400 hover:bg-blue-500/20">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Download Pricing Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraQuantumHolographicBackground>
  );
}