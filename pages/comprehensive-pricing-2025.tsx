<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom,
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown
} from 'lucide-react',
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion',
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025',
export default function ComprehensivePricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly'),
  const [expandedService, setExpandedService] = useState<string | null>(null),

  // Combine all services
  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices],

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠' },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥' },
    { id: 'Fintech AI', name: 'Fintech', icon: '💰' },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️' },
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️' },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗' },
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️' },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀' },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖' },
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: '🥽' },
    { id: '5G/6G Networks', name: '5G/6G', icon: '📡' },
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬' },
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡' },
    { id: 'Edge Computing', name: 'Edge', icon: '🌐' },
    { id: 'Quantum Internet', name: 'Q-Internet', icon: '🌍' },
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠' }
  ],
=======
import React, {_useState} from 'react';
import Head from 'next/head';
import {_Check, _Star, _Users, _Clock, _Shield, _Zap, _Globe, _Rocket, _Brain, _Atom, _ArrowRight, _ExternalLink, _TrendingUp, _Award, _Target, _ChevronDown} from 'lucide-react';

export default function ComprehensivePricingPage() {_const [selectedCategory, _setSelectedCategory] = useState('all');
  const [billingCycle, _setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedService, _setExpandedService] = useState<string | null>(null);

  // Combine all services
  const _allServices = [...comprehensiveMicroSaasServices, _...specializedEmergingTechServices];

  const _categories = [
    { id: 'all', _name: 'All Services', _icon: '🚀'},
    {_id: 'AI & Machine Learning', _name: 'AI & ML', _icon: '🧠'},
    {_id: 'Healthcare AI', _name: 'Healthcare', _icon: '🏥'},
    {_id: 'Fintech AI', _name: 'Fintech', _icon: '💰'},
    {_id: 'Cybersecurity', _name: 'Security', _icon: '🛡️'},
    {_id: 'IoT & Smart Cities', _name: 'Smart Cities', _icon: '🏙️'},
    {_id: 'Blockchain & DeFi', _name: 'Blockchain', _icon: '🔗'},
    {_id: 'Quantum Computing', _name: 'Quantum', _icon: '⚛️'},
    {_id: 'Space Technology', _name: 'Space Tech', _icon: '🚀'},
    {_id: 'Autonomous Systems', _name: 'Autonomous', _icon: '🤖'},
    {_id: 'AR/VR & Metaverse', _name: 'AR/VR', _icon: '🥽'},
    {_id: '5G/6G Networks', _name: '5G/6G', _icon: '📡'},
    {_id: 'Biotechnology AI', _name: 'Biotech', _icon: '🧬'},
    {_id: 'Renewable Energy', _name: 'Energy', _icon: '⚡'},
    {_id: 'Edge Computing', _name: 'Edge', _icon: '🌐'},
    {_id: 'Quantum Internet', _name: 'Q-Internet', _icon: '🌍'},
    {_id: 'Neuromorphic Computing', _name: 'Neuro', _icon: '🧠'}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory),

<<<<<<< HEAD
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category),
    return categoryData?.icon || '🚀'
  },

  const calculateYearlyPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', '').replace(, '')),
    return `$${(price * 12 * 0.8).toFixed(0)}`, // 20% discount for yearly
  },

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  },
=======
  const _getCategoryIcon = (_category: string) => {_const _categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || '🚀';};

  const _calculateYearlyPrice = (_monthlyPrice: string) => {_const _price = parseFloat(monthlyPrice.replace('$', _'').replace(', _', _''));
    return `$${(price * 12 * 0.8).toFixed(0)}`; // 20% discount for yearly
  };

  const _toggleServiceExpansion = (_serviceId: string) => {_setExpandedService(expandedService === serviceId ? null : serviceId);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <Head>
        <title>Comprehensive Pricing 2025 - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Discover our revolutionary micro SAAS services pricing for 2025. AI, quantum computing, cybersecurity, and emerging technology solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;micro SAAS pricing, AI services, quantum computing, cybersecurity, emerging technology, Zion Tech Group&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/comprehensive-pricing-2025&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950&quot;>
        {/* Header */}
        <section className=&quot;py-20 px-6&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
=======
        <meta name="description" content="Discover our revolutionary micro SAAS services pricing for 2025. AI, _quantum computing, _cybersecurity, _and emerging technology solutions." />
        <meta name="keywords" content="micro SAAS pricing, _AI services, _quantum computing, _cybersecurity, _emerging technology, _Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-2025" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {_/* Header */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
                Comprehensive Pricing 2025
              </h1>
<<<<<<< HEAD
              <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto mb-8&quot;>
                Revolutionary micro SAAS services that transform businesses with cutting-edge AI, quantum computing, and emerging technologies
              </p>
              
              {/* Billing Toggle */}
              <div className=&quot;flex items-center justify-center gap-4 mb-12&quot;>
                <span className=&quot;text-white/60&quot;>Monthly</span>
=======
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Revolutionary micro SAAS services that transform businesses with cutting-edge AI, _quantum computing, _and emerging technologies
              </p>
              
              {_/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <span className="text-white/60">Monthly</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <button
                  onClick={_() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className={_`relative w-16 h-8 rounded-full transition-all duration-300 ${
                    billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-white/20'}`}
                >
                  <div className={_`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'}`} />
                </button>
<<<<<<< HEAD
                <span className=&quot;text-white/60&quot;>Yearly</span>
                {billingCycle === 'yearly' && (
                  <span className=&quot;bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium&quot;>
=======
                <span className="text-white/60">Yearly</span>
                {_billingCycle === 'yearly' && (
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    Save 20%
                  </span>
                )}
              </div>

<<<<<<< HEAD
              {/* Stats */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto&quot;>
                <div className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;>
                  <div className=&quot;text-3xl font-bold text-blue-400&quot;>{allServices.length}+</div>
                  <div className=&quot;text-white/60&quot;>Services Available</div>
=======
              {_/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-blue-400">{_allServices.length}+</div>
                  <div className="text-white/60">Services Available</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
                <div className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;>
                  <div className=&quot;text-3xl font-bold text-green-400&quot;>99.9%</div>
                  <div className=&quot;text-white/60&quot;>Uptime Guarantee</div>
                </div>
                <div className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;>
                  <div className=&quot;text-3xl font-bold text-purple-400&quot;>24/7</div>
                  <div className=&quot;text-white/60&quot;>Support Available</div>
                </div>
                <div className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;>
                  <div className=&quot;text-3xl font-bold text-orange-400&quot;>500%+</div>
                  <div className=&quot;text-white/60&quot;>Average ROI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Category Filter */}
        <section className=&quot;px-6 mb-16&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=&quot;flex flex-wrap justify-center gap-3&quot;
=======
        {_/* Category Filter */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
              className="flex flex-wrap justify-center gap-3"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_categories.map(_(category) => (_<button
                  key={category.id}
                  onClick={_() => setSelectedCategory(category.id)}
                  className={_`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`}
                >
                  <span>{_category.icon}</span>
                  {_category.name}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section className=&quot;px-6 pb-20&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8&quot;>
              <AnimatePresence mode=&quot;wait&quot;>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300&quot;
                  >
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className=&quot;absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10&quot;>
                        <Star className=&quot;w-3 h-3&quot; />
=======
        {_/* Services Grid */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {_filteredServices.map(_(service, _index) => (
                  <motion.div
                    key={service.id}
                    initial={_{ opacity: 0, _y: 30}}
                    animate={_{ opacity: 1, _y: 0}}
                    exit={_{ opacity: 0, _y: -30}}
                    transition={_{ duration: 0.6, _delay: index * 0.1}}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
                  >
                    {_/* Popular Badge */}
                    {_service.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10">
                        <Star className="w-3 h-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Popular
                      </div>
                    )}

<<<<<<< HEAD
                    {/* Service Header */}
                    <div className=&quot;p-6&quot;>
                      <div className=&quot;flex items-start justify-between mb-4&quot;>
                        <div className=&quot;text-4xl&quot;>{service.icon}</div>
                        <div className=&quot;text-right&quot;>
                          <div className=&quot;text-3xl font-bold text-white&quot;>
                            {billingCycle === 'yearly' ? calculateYearlyPrice(service.price) : service.price}
                          </div>
                          <div className=&quot;text-white/60&quot;>
                            {billingCycle === 'yearly' ? '/year' : service.period}
=======
                    {_/* Service Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{_service.icon}</div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white">
                            {_billingCycle === 'yearly' ? calculateYearlyPrice(service.price) : service.price}
                          </div>
                          <div className="text-white/60">
                            {_billingCycle === 'yearly' ? '/year' : service.period}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        </div>
                      </div>

<<<<<<< HEAD
                      <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                      <p className=&quot;text-white/70 text-sm mb-4&quot;>{service.tagline}</p>

                      {/* Key Features */}
                      <div className=&quot;space-y-2 mb-6&quot;>
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className=&quot;flex items-center gap-2 text-sm text-white/60&quot;>
                            <Check className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                            <span className=&quot;line-clamp-2&quot;>{feature}</span>
=======
                      <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                      <p className="text-white/70 text-sm mb-4">{_service.tagline}</p>

                      {_/* Key Features */}
                      <div className="space-y-2 mb-6">
                        {_service.features.slice(0, _4).map(_(feature, _idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="line-clamp-2">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        ))}
                      </div>

<<<<<<< HEAD
                      {/* Service Stats */}
                      <div className=&quot;grid grid-cols-3 gap-4 mb-6 text-center&quot;>
                        <div>
                          <div className=&quot;text-lg font-bold text-blue-400&quot;>{service.rating}</div>
                          <div className=&quot;text-xs text-white/60&quot;>Rating</div>
                        </div>
                        <div>
                          <div className=&quot;text-lg font-bold text-green-400&quot;>{service.customers}+</div>
                          <div className=&quot;text-xs text-white/60&quot;>Customers</div>
                        </div>
                        <div>
                          <div className=&quot;text-lg font-bold text-purple-400&quot;>{service.trialDays}d</div>
                          <div className=&quot;text-xs text-white/60&quot;>Trial</div>
=======
                      {_/* Service Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                        <div>
                          <div className="text-lg font-bold text-blue-400">{_service.rating}</div>
                          <div className="text-xs text-white/60">Rating</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-400">{_service.customers}+</div>
                          <div className="text-xs text-white/60">Customers</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-purple-400">{_service.trialDays}d</div>
                          <div className="text-xs text-white/60">Trial</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      </div>

                      {_/* Expand/Collapse Button */}
                      <button
<<<<<<< HEAD
                        onClick={() => toggleServiceExpansion(service.id)}
                        className=&quot;w-full bg-white/10 text-white py-3 px-4 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 mb-4&quot;
=======
                        onClick={_() => toggleServiceExpansion(service.id)}
                        className="w-full bg-white/10 text-white py-3 px-4 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 mb-4"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        {_expandedService === service.id ? 'Show Less' : 'View Details'}
                        <ChevronDown className={_`w-4 h-4 transition-transform duration-300 ${
                          expandedService === service.id ? 'rotate-180' : ''}`} />
                      </button>

                      {_/* CTA Button */}
                      <a
<<<<<<< HEAD
                        href={service.link}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2&quot;
=======
                        href={_service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        Get Started
                        <ExternalLink className=&quot;w-4 h-4&quot; />
                      </Link>
                    </div>

                    {_/* Expanded Details */}
                    <AnimatePresence>
<<<<<<< HEAD
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className=&quot;overflow-hidden border-t border-white/10&quot;
                        >
                          <div className=&quot;p-6 bg-white/5&quot;>
                            {/* Market Position */}
                            <div className=&quot;mb-6&quot;>
                              <h4 className=&quot;text-lg font-semibold text-white mb-2&quot;>Market Position</h4>
                              <p className=&quot;text-white/70 text-sm&quot;>{service.marketPosition}</p>
                            </div>

                            {/* Technology Stack */}
                            <div className=&quot;mb-6&quot;>
                              <h4 className=&quot;text-lg font-semibold text-white mb-2&quot;>Technology Stack</h4>
                              <div className=&quot;flex flex-wrap gap-2&quot;>
                                {service.technology.map((tech, idx) => (
                                  <span key={idx} className=&quot;bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs&quot;>
                                    {tech}
=======
                      {_expandedService === service.id && (_<motion.div
                          initial={{ height: 0, _opacity: 0}}
                          animate={_{ height: 'auto', _opacity: 1}}
                          exit={_{ height: 0, _opacity: 0}}
                          transition={_{ duration: 0.3}}
                          className="overflow-hidden border-t border-white/10"
                        >
                          <div className="p-6 bg-white/5">
                            {_/* Market Position */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-white mb-2">Market Position</h4>
                              <p className="text-white/70 text-sm">{_service.marketPosition}</p>
                            </div>

                            {_/* Technology Stack */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-white mb-2">Technology Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {_service.technology.map((tech, _idx) => (
                                  <span key={idx} className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs">
                                    {_tech}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                                  </span>
                                ))}
                              </div>
                            </div>

<<<<<<< HEAD
                            {/* Use Cases */}
                            <div className=&quot;mb-6&quot;>
                              <h4 className=&quot;text-lg font-semibold text-white mb-2&quot;>Use Cases</h4>
                              <div className=&quot;space-y-1&quot;>
                                {service.useCases.map((useCase, idx) => (
                                  <div key={idx} className=&quot;flex items-center gap-2 text-sm text-white/60&quot;>
                                    <Target className=&quot;w-3 h-3 text-blue-400&quot; />
                                    {useCase}
=======
                            {_/* Use Cases */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-white mb-2">Use Cases</h4>
                              <div className="space-y-1">
                                {_service.useCases.map(_(useCase, _idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                                    <Target className="w-3 h-3 text-blue-400" />
                                    {_useCase}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                                  </div>
                                ))}
                              </div>
                            </div>

<<<<<<< HEAD
                            {/* ROI and Benefits */}
                            <div className=&quot;mb-6&quot;>
                              <h4 className=&quot;text-lg font-semibold text-white mb-2&quot;>ROI & Benefits</h4>
                              <p className=&quot;text-white/70 text-sm mb-3&quot;>{service.roi}</p>
                              <div className=&quot;grid grid-cols-2 gap-2&quot;>
                                {service.benefits.map((benefit, idx) => (
                                  <div key={idx} className=&quot;flex items-center gap-2 text-sm text-white/60&quot;>
                                    <TrendingUp className=&quot;w-3 h-3 text-green-400&quot; />
                                    {benefit}
=======
                            {_/* ROI and Benefits */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-white mb-2">ROI & Benefits</h4>
                              <p className="text-white/70 text-sm mb-3">{_service.roi}</p>
                              <div className="grid grid-cols-2 gap-2">
                                {_service.benefits.map(_(benefit, _idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                                    <TrendingUp className="w-3 h-3 text-green-400" />
                                    {_benefit}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                                  </div>
                                ))}
                              </div>
                            </div>

<<<<<<< HEAD
                            {/* Contact Information */}
                            <div className=&quot;bg-white/5 rounded-xl p-4&quot;>
                              <h4 className=&quot;text-lg font-semibold text-white mb-3&quot;>Contact Information</h4>
                              <div className=&quot;space-y-2 text-sm text-white/60&quot;>
                                <div>📱 {service.contactInfo.mobile}</div>
                                <div>✉️ {service.contactInfo.email}</div>
                                <div>📍 {service.contactInfo.address}</div>
                                <div>🌐 {service.contactInfo.website}</div>
=======
                            {_/* Contact Information */}
                            <div className="bg-white/5 rounded-xl p-4">
                              <h4 className="text-lg font-semibold text-white mb-3">Contact Information</h4>
                              <div className="space-y-2 text-sm text-white/60">
                                <div>📱 {_service.contactInfo.mobile}</div>
                                <div>✉️ {_service.contactInfo.email}</div>
                                <div>📍 {_service.contactInfo.address}</div>
                                <div>🌐 {_service.contactInfo.website}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact CTA */}
        <section className=&quot;px-6 pb-20&quot;>
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;
=======
        {_/* Contact CTA */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30&quot;>
                <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>
                  Ready to Get Started?
                </h2>
                <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
                  Contact our sales team to discuss your specific needs and get a customized quote for our revolutionary micro SAAS services.
                </p>
<<<<<<< HEAD
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
                <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  <a
                    href=&quot;mailto:kleber@ziontechgroup.com&quot;
                    className=&quot;bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2&quot;
                  >
                    Contact Sales Team
                    <ArrowRight className=&quot;w-5 h-5&quot; />
                  </Link>
                  <a
                    href=&quot;tel:+13024640950&quot;
                    className=&quot;bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2&quot;
                  >
                    Call +1 302 464 0950
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}