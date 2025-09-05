import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_CheckCircle, _ArrowRight, _Star, _TrendingUp, _Phone, _Zap, _DollarSign, _Shield, _Mail, _MapPin, _Rocket, _Brain, _Sparkles, _Atom, _Dna, _Users, _Globe, _Cpu, _Target, _Microscope, _Lock, _Cloud, _BarChart3, _Settings, _Eye, _Award, _Clock, _Heart, _Lightbulb, _Target as TargetIcon, _Zap as ZapIcon, _Shield as ShieldIcon, _Globe as GlobeIcon, _Search, _Code, _TestTube, _Server, _Database, _Network, _Shield as SecurityIcon, _Wifi, _Building, _Cpu as CpuIcon} from 'lucide-react';
import Layout from '../components/layout/Layout';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _heroStats = [
  {_label: 'Infrastructure Projects', _value: '150+', _icon: <Server className="w-5 h-5" />},
  {_label: 'Enterprise Clients', _value: '300+', _icon: <Building className="w-5 h-5" />},
  {_label: 'Uptime Guarantee', _value: '99.99%', _icon: <Award className="w-5 h-5" />},
  {_label: 'Cost Reduction', _value: '60%', _icon: <TrendingUp className="w-5 h-5" />}
];

const _serviceCategories = [
  {_title: 'Quantum Cloud Computing', _description: 'Next-generation cloud infrastructure with quantum processing capabilities', _services: advancedITInfrastructureServices2025.filter(s => s.category === 'Quantum Cloud Computing'), _icon: Cloud, _color: 'from-indigo-500 to-purple-600', _features: ['Quantum Processing', _'Hybrid Computing', _'AI Acceleration']},
  {_title: 'Edge Computing & IoT', _description: 'Autonomous edge infrastructure with intelligent optimization', _services: advancedITInfrastructureServices2025.filter(s => s.category === 'Edge Computing & IoT'), _icon: Wifi, _color: 'from-green-500 to-emerald-600', _features: ['Edge Processing', _'IoT Orchestration', _'5G Optimization']},
  {_title: 'Cybersecurity', _description: 'Comprehensive security framework with continuous verification', _services: advancedITInfrastructureServices2025.filter(s => s.category === 'Cybersecurity'), _icon: SecurityIcon, _color: 'from-red-500 to-orange-600', _features: ['Zero Trust', _'Threat Detection', _'Compliance Automation']},
  {_title: 'Data Center Infrastructure', _description: 'Self-managing data center infrastructure with AI optimization', _services: advancedITInfrastructureServices2025.filter(s => s.category === 'Data Center Infrastructure'), _icon: Building, _color: 'from-blue-500 to-cyan-600', _features: ['AI Management', _'Predictive Maintenance', _'Cost Optimization']},
  {_title: 'Quantum Networking', _description: 'Next-generation networking with quantum encryption and optimization', _services: advancedITInfrastructureServices2025.filter(s => s.category === 'Quantum Networking'), _icon: Network, _color: 'from-purple-500 to-pink-600', _features: ['Quantum Encryption', _'Network Optimization', _'Security Monitoring']}
];

const _heroFeatures = [
  {_title: 'Quantum Computing', _description: 'Revolutionary quantum processing capabilities that provide 1000x performance for specific workloads.', _icon: Atom, _gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'},
  {_title: 'AI-Powered Automation', _description: 'Intelligent automation that reduces operational costs by up to 70% while improving reliability.', _icon: Brain, _gradient: 'bg-gradient-to-r from-purple-500 to-pink-600'},
  {_title: 'Edge Computing', _description: 'Distributed edge infrastructure that reduces latency and provides real-time processing capabilities.', _icon: Wifi, _gradient: 'bg-gradient-to-r from-green-500 to-emerald-600'},
  {_title: 'Zero Trust Security', _description: 'Continuous verification and monitoring that provides comprehensive protection against modern threats.', _icon: Shield, _gradient: 'bg-gradient-to-r from-orange-500 to-red-600'}
];

const _testimonials = [
  {_name: 'Dr. Jennifer Martinez', _role: 'CTO, _QuantumTech Industries', _company: 'QuantumTech Industries', _content: 'Zion Tech Group\'s quantum cloud infrastructure has revolutionized our research capabilities. We\'ve achieved computational breakthroughs that were previously impossible.', _rating: 5, _avatar: '👩‍🔬'},
  {_name: 'Robert Thompson', _role: 'Infrastructure Director, _EdgeNet Solutions', _company: 'EdgeNet Solutions', _content: 'The autonomous edge computing network has transformed our IoT operations. We now have real-time processing with 90% lower latency and 70% cost reduction.', _rating: 5, _avatar: '👨‍💼'},
  {_name: 'Lisa Chang', _role: 'Security CISO, _SecureCorp International', _company: 'SecureCorp International', _content: 'Their zero-trust security architecture provides comprehensive protection that has prevented multiple sophisticated cyber attacks. The ROI has been exceptional.', _rating: 5, _avatar: '👩‍🔒'}
];

export default function AdvancedITInfrastructureServices() {_return (_<Layout>
      <Head>
        <title>Advanced IT Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Revolutionary IT infrastructure services including quantum cloud computing, _edge computing, _zero-trust security, _and autonomous data centers. Transform your infrastructure with cutting-edge technology." />
        <meta name="keywords" content="IT infrastructure, _quantum computing, _edge computing, _cybersecurity, _data centers, _cloud computing, _zero trust security" />
        <meta property="og:title" content="Advanced IT Infrastructure Services - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary IT infrastructure services including quantum cloud computing, _edge computing, _zero-trust security, _and autonomous data centers." />
        <meta property="og:url" content="https://ziontechgroup.com/advanced-it-infrastructure-services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/advanced-it-infrastructure-services" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Advanced IT Infrastructure Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary infrastructure solutions with quantum computing, _edge computing, _and AI-powered automation for the future
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {_heroStats.map((stat, _index) => (
                <motion.div
                  key={index}
                  initial={_{ opacity: 0, _scale: 0.8}}
                  animate={_{ opacity: 1, _scale: 1}}
                  transition={_{ duration: 0.5, _delay: index * 0.1}}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-blue-500/30"
                >
                  {_stat.icon}
                  <span className="text-blue-400 font-semibold">{_stat.value}</span>
                  <span className="text-gray-300 text-sm">{_stat.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href={_`tel:${contactInfo.mobile}`} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Infrastructure Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our infrastructure services combine cutting-edge technology with intelligent automation to deliver unprecedented performance and reliability
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_heroFeatures.map(_(feature, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="relative group"
              >
                <div className={_`${feature.gradient} p-1 rounded-xl`}>
                  <div className="bg-gray-900 rounded-xl p-6 h-full">
                    <div className="text-center">
                      <div className={_`${feature.gradient} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{_feature.title}</h3>
                      <p className="text-gray-300">{_feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              IT Infrastructure Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions covering quantum computing, edge computing, security, and data centers
            </p>
          </motion.div>

          <div className="space-y-16">
            {_serviceCategories.map(_(category, _categoryIndex) => (_<motion.div
                key={categoryIndex}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: categoryIndex * 0.2}}
                viewport={_{ once: true}}
                className="relative"
              >
                <div className="text-center mb-12">
                  <div className={_`inline-flex items-center justify-center w-20 h-20 ${category.color} rounded-2xl mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{_category.title}</h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{_category.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {_category.services.map((service, _serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={_{ opacity: 0, _scale: 0.9}}
                      whileInView={_{ opacity: 1, _scale: 1}}
                      transition={_{ duration: 0.5, _delay: serviceIndex * 0.1}}
                      viewport={_{ once: true}}
                      className="relative group"
                    >
                      <div className={_`${service.color} p-1 rounded-xl`}>
                        <div className="bg-gray-900 rounded-xl p-6 h-full">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl">{_service.icon}</span>
                            {_service.popular && (
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-2">{_service.name}</h4>
                          <p className="text-gray-300 text-sm mb-4">{_service.tagline}</p>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-white">{_service.price}</span>
                            <span className="text-gray-400">{_service.period}</span>
                          </div>
                          <p className="text-gray-300 text-sm mb-4">{_service.description}</p>
                          <div className="space-y-2 mb-6">
                            {_service.features.slice(0, _3).map(_(feature, _featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {_feature}
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <Link
                              href={_service.link}
                              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                            >
                              Learn More
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                            <Link
                              href={_`tel:${contactInfo.mobile}`}
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300"
                            >
                              Get Started
                            </Link>
                          </div>
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

      {_/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from organizations that have transformed their infrastructure with our advanced services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_testimonials.map(_(testimonial, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{_testimonial.avatar}</span>
                  <div>
                    <h4 className="text-white font-semibold">{_testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{_testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{_testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{_testimonial.content}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {_[...Array(testimonial.rating)].map(_(_, _i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already revolutionized their IT infrastructure with our advanced services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={_`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: {_contactInfo.mobile}
              </Link>
              <Link
                href={_`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-2">📍 {_contactInfo.address}</p>
              <p className="text-gray-300">🌐 {_contactInfo.website}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}