<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, ExternalLink } from 'lucide-react',
import Layout from '../components/layout/Layout',
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services',
import { cuttingEdgeITServices2025 } from '../data/2025-cutting-edge-it-services',
import { cuttingEdgeMicroSaasServices2025 } from '../data/2025-cutting-edge-micro-saas',
import { cuttingEdgeEmergingTechServices2025 } from '../data/2025-cutting-edge-emerging-tech',
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    bgColor: 'from-violet-900/20 to-purple-900/20',
    borderColor: 'border-violet-500/30'
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: cuttingEdgeEmergingTechServices2025,
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'from-indigo-900/20 to-blue-900/20',
    borderColor: 'border-indigo-500/30'
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: cuttingEdgeITServices2025,
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'from-blue-900/20 to-cyan-900/20',
    borderColor: 'border-blue-500/30'
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: cuttingEdgeMicroSaasServices2025,
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    bgColor: 'from-teal-900/20 to-emerald-900/20',
    borderColor: 'border-teal-500/30'
  }
],
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_title: 'AI & Consciousness', _description: 'Revolutionary AI platforms with consciousness and emotional intelligence', _services: cuttingEdgeAIServices2025, _icon: Brain, _color: 'from-violet-500 to-purple-600', _bgColor: 'from-violet-900/20 to-purple-900/20', _borderColor: 'border-violet-500/30'},
  {_title: 'Quantum & Emerging Tech', _description: 'Breakthrough quantum computing and space technology solutions', _services: cuttingEdgeEmergingTechServices2025, _icon: Atom, _color: 'from-indigo-500 to-blue-600', _bgColor: 'from-indigo-900/20 to-blue-900/20', _borderColor: 'border-indigo-500/30'},
  {_title: 'Enterprise IT', _description: 'Advanced enterprise infrastructure and security solutions', _services: cuttingEdgeITServices2025, _icon: Shield, _color: 'from-blue-500 to-cyan-600', _bgColor: 'from-blue-900/20 to-cyan-900/20', _borderColor: 'border-blue-500/30'},
  {_title: 'Micro SAAS', _description: 'Innovative business solutions for modern enterprises', _services: cuttingEdgeMicroSaasServices2025, _icon: Rocket, _color: 'from-teal-500 to-emerald-600', _bgColor: 'from-teal-900/20 to-emerald-900/20', _borderColor: 'border-teal-500/30'}
];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function CuttingEdgeServices2025() {_return (
    <Layout>
      <Head>
        <title>Cutting-Edge Services 2025 | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Discover our revolutionary cutting-edge services including AI consciousness, quantum computing, enterprise IT, and micro SAAS solutions for 2025.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;cutting-edge services, AI consciousness, quantum computing, enterprise IT, micro SAAS, 2025 technology&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Cutting-Edge Services 2025 - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Revolutionary technology services for the future. AI consciousness, quantum computing, enterprise IT, and micro SAAS solutions.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/cutting-edge-services-2025&quot; />
=======
        <meta name="description" content="Discover our revolutionary cutting-edge services including AI consciousness, _quantum computing, _enterprise IT, _and micro SAAS solutions for 2025." />
        <meta name="keywords" content="cutting-edge services, _AI consciousness, _quantum computing, _enterprise IT, _micro SAAS, _2025 technology" />
        <meta property="og:title" content="Cutting-Edge Services 2025 - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary technology services for the future. AI consciousness, _quantum computing, _enterprise IT, _and micro SAAS solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/cutting-edge-services-2025" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative py-20 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black&quot;>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]&quot;></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]&quot;></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,73,153,0.1),transparent_50%)]&quot;></div>
        </div>
        
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-6 text-center&quot;>
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;>
                Cutting-Edge Services 2025
              </span>
            </h1>
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
              Experience the future of technology with our revolutionary services that combine AI consciousness, 
              quantum computing, enterprise IT, and innovative micro SAAS solutions.
            </p>
            
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <motion.a
<<<<<<< HEAD
                href=&quot;/contact&quot;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl&quot;
=======
                href="/contact"
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Get Started Today
                <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
              </motion.a>
              <motion.a
<<<<<<< HEAD
                href=&quot;tel:+13024640950&quot;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=&quot;inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300&quot;
=======
                href="tel:+13024640950"
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Phone className=&quot;mr-2 w-5 h-5&quot; />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Service Categories */}
      <section className=&quot;py-20 bg-gradient-to-b from-gray-900 to-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-6&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Service Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent&quot;>
              Revolutionary Technology Categories
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Explore our comprehensive portfolio of cutting-edge services designed to transform your business 
              and give you a competitive advantage in the digital age.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className=&quot;space-y-16&quot;>
            {serviceCategories.map((category, index) => (
              <motion.div
=======
          <div className="space-y-16">
            {_serviceCategories.map(_(category, _index) => (_<motion.div
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                key={category.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
              >
<<<<<<< HEAD
                <div className=&quot;text-center mb-12&quot;>
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} p-5 mb-6`}>
                    <category.icon className=&quot;w-10 h-10 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-3xl font-bold text-white mb-4&quot;>{category.title}</h3>
                  <p className=&quot;text-xl text-gray-300 max-w-2xl mx-auto&quot;>{category.description}</p>
                </div>

                <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className=&quot;group&quot;
                    >
                      <div className={`bg-gradient-to-br ${category.bgColor} p-8 rounded-2xl border ${category.borderColor} hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105`}>
                        <div className=&quot;flex items-start justify-between mb-4&quot;>
                          <h4 className=&quot;text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors&quot;>
                            {service.name}
                          </h4>
                          <div className=&quot;text-right&quot;>
                            <div className=&quot;text-2xl font-bold text-cyan-400&quot;>
                              ${service.pricing.starter.price}
=======
                <div className="text-center mb-12">
                  <div className={_`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} p-5 mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{_category.title}</h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{_category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {_category.services.map((service, _serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={_{ opacity: 0, _y: 20}}
                      whileInView={_{ opacity: 1, _y: 0}}
                      transition={_{ duration: 0.6, _delay: serviceIndex * 0.1}}
                      viewport={_{ once: true}}
                      className="group"
                    >
                      <div className={_`bg-gradient-to-br ${category.bgColor} p-8 rounded-2xl border ${_category.borderColor} hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105`}>
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {_service.name}
                          </h4>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-cyan-400">
                              ${_service.pricing.starter.price}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            </div>
                            <div className=&quot;text-sm text-gray-400&quot;>/month</div>
                          </div>
                        </div>
                        
<<<<<<< HEAD
                        <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>{service.description}</p>
                        
                        <div className=&quot;mb-6&quot;>
                          <h5 className=&quot;text-white font-semibold mb-3&quot;>Key Features:</h5>
                          <div className=&quot;space-y-2&quot;>
                            {service.features.slice(0, 4).map((feature, featureIndex) => (
                              <div key={featureIndex} className=&quot;flex items-center space-x-3 text-sm&quot;>
                                <CheckCircle className=&quot;w-4 h-4 text-cyan-400 flex-shrink-0&quot; />
                                <span className=&quot;text-gray-300&quot;>{feature}</span>
=======
                        <p className="text-gray-300 mb-6 leading-relaxed">{_service.description}</p>
                        
                        <div className="mb-6">
                          <h5 className="text-white font-semibold mb-3">Key Features:</h5>
                          <div className="space-y-2">
                            {_service.features.slice(0, _4).map(_(feature, _featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-3 text-sm">
                                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                <span className="text-gray-300">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className=&quot;mb-6&quot;>
                          <div className=&quot;flex items-center justify-between text-sm text-gray-400 mb-2&quot;>
                            <span>Market Size:</span>
<<<<<<< HEAD
                            <span className=&quot;text-cyan-400 font-semibold&quot;>{service.marketSize}</span>
=======
                            <span className="text-cyan-400 font-semibold">{_service.marketSize}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                          <div className=&quot;flex items-center justify-between text-sm text-gray-400&quot;>
                            <span>Category:</span>
<<<<<<< HEAD
                            <span className=&quot;text-purple-400&quot;>{service.category}</span>
=======
                            <span className="text-purple-400">{_service.category}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        </div>

                        <div className=&quot;flex flex-col sm:flex-row gap-3&quot;>
                          <a
<<<<<<< HEAD
                            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                            className=&quot;flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 text-sm&quot;
=======
                            href={_`mailto:${contactInfo.email}?subject=Inquiry about ${_service.name}`}
                            className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 text-sm"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          >
                            <Mail className=&quot;w-4 h-4 mr-2&quot; />
                            Get Quote
                          </Link>
                          <a
<<<<<<< HEAD
                            href={service.website}
                            className=&quot;flex-1 inline-flex items-center justify-center px-4 py-3 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 text-sm&quot;
=======
                            href={_service.website}
                            className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 text-sm"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          >
                            <ExternalLink className=&quot;w-4 h-4 mr-2&quot; />
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Pricing Comparison */}
      <section className=&quot;py-20 bg-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-6&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Pricing Comparison */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent&quot;>
              Transparent Pricing Plans
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Choose the plan that best fits your business needs. All plans include our cutting-edge technology 
              and expert support.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD
            {['StarterProfessionalEnterprise'].map((plan, index) => (
=======
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {['Starter', 'Professional', 'Enterprise'].map((plan, index) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group&quot;
              >
                <div className=&quot;bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105&quot;>
                  <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{plan}</h3>
                  
                  <div className=&quot;space-y-4 mb-8&quot;>
                    {plan === 'Starter' && (
=======
            {_['Starter', _'Professional', _'Enterprise'].map(_(plan, _index) => (
              <motion.div
                key={plan}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-4">{_plan}</h3>
                  
                  <div className="space-y-4 mb-8">
                    {_plan === 'Starter' && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <>
                        <div className=&quot;text-sm text-gray-400&quot;>Perfect for small businesses and startups</div>
                        <div className=&quot;text-sm text-gray-400&quot;>Basic features and standard support</div>
                        <div className=&quot;text-sm text-gray-400&quot;>Email support included</div>
                      </>
                    )}
                    {_plan === 'Professional' && (
                      <>
                        <div className=&quot;text-sm text-gray-400&quot;>Ideal for growing businesses</div>
                        <div className=&quot;text-sm text-gray-400&quot;>Advanced features and priority support</div>
                        <div className=&quot;text-sm text-gray-400&quot;>Custom configurations available</div>
                      </>
                    )}
                    {_plan === 'Enterprise' && (
                      <>
                        <div className=&quot;text-sm text-gray-400&quot;>For large enterprises and organizations</div>
                        <div className=&quot;text-sm text-gray-400&quot;>Full platform access and custom development</div>
                        <div className=&quot;text-sm text-gray-400&quot;>Dedicated specialists and 24/7 support</div>
                      </>
                    )}
                  </div>

<<<<<<< HEAD
                  <div className=&quot;text-center mb-8&quot;>
                    <div className=&quot;text-4xl font-bold text-cyan-400 mb-2&quot;>
                      {plan === 'Starter' ? 'From $149' : plan === 'Professional' ? 'From $499' : 'From $999'}
=======
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {_plan === 'Starter' ? 'From $149' : plan === 'Professional' ? 'From $499' : 'From $999'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                    <div className=&quot;text-gray-400&quot;>per month</div>
                  </div>

                  <a
                    href=&quot;/contact&quot;
                    className=&quot;w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300&quot;
                  >
                    Get Started
                    <ArrowRight className=&quot;ml-2 w-4 h-4&quot; />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center px-6&quot;>
=======
      {_/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent&quot;>
              Ready to Experience the Future?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Contact our team of experts to learn how our cutting-edge services can transform your business 
              and give you a competitive advantage in the digital age.
            </p>
            
<<<<<<< HEAD
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-8&quot;>
              <div className=&quot;text-center&quot;>
                <Phone className=&quot;w-8 h-8 text-cyan-400 mx-auto mb-3&quot; />
                <div className=&quot;text-white font-semibold&quot;>Call Us</div>
                <div className=&quot;text-cyan-400&quot;>{contactInfo.mobile}</div>
              </div>
              <div className=&quot;text-center&quot;>
                <Mail className=&quot;w-8 h-8 text-purple-400 mx-auto mb-3&quot; />
                <div className=&quot;text-white font-semibold&quot;>Email Us</div>
                <div className=&quot;text-purple-400&quot;>{contactInfo.email}</div>
              </div>
              <div className=&quot;text-center&quot;>
                <MapPin className=&quot;w-8 h-8 text-green-400 mx-auto mb-3&quot; />
                <div className=&quot;text-white font-semibold&quot;>Visit Us</div>
                <div className=&quot;text-green-400 text-sm&quot;>{contactInfo.address}</div>
=======
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-cyan-400">{_contactInfo.mobile}</div>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-purple-400">{_contactInfo.email}</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-green-400 text-sm">{_contactInfo.address}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>

            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <motion.a
<<<<<<< HEAD
                href=&quot;/contact&quot;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl&quot;
=======
                href="/contact"
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Get Started Today
                <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
              </motion.a>
              <motion.a
<<<<<<< HEAD
                href=&quot;tel:+13024640950&quot;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover: bg-cyan-500 hover:text-white transition-all duration-300"
=======
                className=&quot;inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                href="tel:+13024640950"
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Phone className=&quot;mr-2 w-5 h-5&quot; />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}