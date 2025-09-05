import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, 
  Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, 
  Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, 
  Eye, Award, Clock, Heart, Lightbulb, Target as TargetIcon, 
  Zap as ZapIcon, Shield as ShieldIcon, Globe as GlobeIcon,
  Search, Code, TestTube, Server, Database, Network, Shield as SecurityIcon,
  Wifi, Building, Cpu as CpuIcon
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroStats = [
  { label: 'Infrastructure Projects', value: '150+', icon: <Server className=&quot;w-5 h-5&quot; /> },
  { label: 'Enterprise Clients', value: '300+', icon: <Building className=&quot;w-5 h-5&quot; /> },
  { label: 'Uptime Guarantee', value: '99.99%', icon: <Award className=&quot;w-5 h-5&quot; /> },
  { label: 'Cost Reduction', value: '60%', icon: <TrendingUp className=&quot;w-5 h-5&quot; /> }
];

const serviceCategories = [
  {
    title: 'Quantum Cloud Computing',
    description: 'Next-generation cloud infrastructure with quantum processing capabilities',
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Quantum Cloud Computing'),
    icon: Cloud,
    color: 'from-indigo-500 to-purple-600',
    features: ['Quantum Processing', 'Hybrid Computing', 'AI Acceleration']
  },
  {
    title: 'Edge Computing & IoT',
    description: 'Autonomous edge infrastructure with intelligent optimization',
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Edge Computing & IoT'),
    icon: Wifi,
    color: 'from-green-500 to-emerald-600',
    features: ['Edge Processing', 'IoT Orchestration', '5G Optimization']
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security framework with continuous verification',
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Cybersecurity'),
    icon: SecurityIcon,
    color: 'from-red-500 to-orange-600',
    features: ['Zero Trust', 'Threat Detection', 'Compliance Automation']
  },
  {
    title: 'Data Center Infrastructure',
    description: 'Self-managing data center infrastructure with AI optimization',
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Data Center Infrastructure'),
    icon: Building,
    color: 'from-blue-500 to-cyan-600',
    features: ['AI Management', 'Predictive Maintenance', 'Cost Optimization']
  },
  {
    title: 'Quantum Networking',
    description: 'Next-generation networking with quantum encryption and optimization',
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Quantum Networking'),
    icon: Network,
    color: 'from-purple-500 to-pink-600',
    features: ['Quantum Encryption', 'Network Optimization', 'Security Monitoring']
  }
];

const heroFeatures = [
  {
    title: 'Quantum Computing',
    description: 'Revolutionary quantum processing capabilities that provide 1000x performance for specific workloads.',
    icon: Atom,
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'
  },
  {
    title: 'AI-Powered Automation',
    description: 'Intelligent automation that reduces operational costs by up to 70% while improving reliability.',
    icon: Brain,
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-600'
  },
  {
    title: 'Edge Computing',
    description: 'Distributed edge infrastructure that reduces latency and provides real-time processing capabilities.',
    icon: Wifi,
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-600'
  },
  {
    title: 'Zero Trust Security',
    description: 'Continuous verification and monitoring that provides comprehensive protection against modern threats.',
    icon: Shield,
    gradient: 'bg-gradient-to-r from-orange-500 to-red-600'
  }
];

const testimonials = [
  {
    name: 'Dr. Jennifer Martinez',
    role: 'CTO, QuantumTech Industries',
    company: 'QuantumTech Industries',
    content: 'Zion Tech Group\'s quantum cloud infrastructure has revolutionized our research capabilities. We\'ve achieved computational breakthroughs that were previously impossible.',
    rating: 5,
    avatar: '👩‍🔬'
  },
  {
    name: 'Robert Thompson',
    role: 'Infrastructure Director, EdgeNet Solutions',
    company: 'EdgeNet Solutions',
    content: 'The autonomous edge computing network has transformed our IoT operations. We now have real-time processing with 90% lower latency and 70% cost reduction.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Lisa Chang',
    role: 'Security CISO, SecureCorp International',
    company: 'SecureCorp International',
    content: 'Their zero-trust security architecture provides comprehensive protection that has prevented multiple sophisticated cyber attacks. The ROI has been exceptional.',
    rating: 5,
    avatar: '👩‍🔒'
  }
];

export default function AdvancedITInfrastructureServices() {
  return (
    <Layout>
      <Head>
        <title>Advanced IT Infrastructure Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Revolutionary IT infrastructure services including quantum cloud computing, edge computing, zero-trust security, and autonomous data centers. Transform your infrastructure with cutting-edge technology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;IT infrastructure, quantum computing, edge computing, cybersecurity, data centers, cloud computing, zero trust security&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Advanced IT Infrastructure Services - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Revolutionary IT infrastructure services including quantum cloud computing, edge computing, zero-trust security, and autonomous data centers.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/advanced-it-infrastructure-services&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/advanced-it-infrastructure-services&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative py-20 lg:py-32 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/20 to-cyan-900/20&quot;></div>
        <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className=&quot;text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6&quot;>
              Advanced IT Infrastructure Services
            </h1>
            <p className=&quot;text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
              Revolutionary infrastructure solutions with quantum computing, edge computing, and AI-powered automation for the future
            </p>
            <div className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;>
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=&quot;flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-blue-500/30&quot;
                >
                  {stat.icon}
                  <span className=&quot;text-blue-400 font-semibold&quot;>{stat.value}</span>
                  <span className=&quot;text-gray-300 text-sm&quot;>{stat.label}</span>
                </motion.div>
              ))}
            </div>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;#services&quot; className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;>
                Explore Services
                <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
              </Link>
              <Link href={`tel:${contactInfo.mobile}`} className=&quot;inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300&quot;>
                <Phone className=&quot;mr-2 w-5 h-5&quot; />
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-20 bg-gradient-to-b from-black to-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-4&quot;>
              Why Choose Our IT Infrastructure Services?
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Our infrastructure services combine cutting-edge technology with intelligent automation to deliver unprecedented performance and reliability
            </p>
          </motion.div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;relative group&quot;
              >
                <div className={`${feature.gradient} p-1 rounded-xl`}>
                  <div className=&quot;bg-gray-900 rounded-xl p-6 h-full&quot;>
                    <div className=&quot;text-center&quot;>
                      <div className={`${feature.gradient} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                        <feature.icon className=&quot;w-8 h-8 text-white&quot; />
                      </div>
                      <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                      <p className=&quot;text-gray-300&quot;>{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id=&quot;services&quot; className=&quot;py-20 bg-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-4&quot;>
              IT Infrastructure Service Categories
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Comprehensive infrastructure solutions covering quantum computing, edge computing, security, and data centers
            </p>
          </motion.div>

          <div className=&quot;space-y-16&quot;>
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className=&quot;relative&quot;
              >
                <div className=&quot;text-center mb-12&quot;>
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${category.color} rounded-2xl mb-6`}>
                    <category.icon className=&quot;w-10 h-10 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-3xl font-bold text-white mb-4&quot;>{category.title}</h3>
                  <p className=&quot;text-xl text-gray-300 max-w-2xl mx-auto&quot;>{category.description}</p>
                </div>

                <div className=&quot;grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8&quot;>
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className=&quot;relative group&quot;
                    >
                      <div className={`${service.color} p-1 rounded-xl`}>
                        <div className=&quot;bg-gray-900 rounded-xl p-6 h-full&quot;>
                          <div className=&quot;flex items-center justify-between mb-4&quot;>
                            <span className=&quot;text-3xl&quot;>{service.icon}</span>
                            {service.popular && (
                              <span className=&quot;bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full&quot;>
                                Popular
                              </span>
                            )}
                          </div>
                          <h4 className=&quot;text-xl font-semibold text-white mb-2&quot;>{service.name}</h4>
                          <p className=&quot;text-gray-300 text-sm mb-4&quot;>{service.tagline}</p>
                          <div className=&quot;flex items-center justify-between mb-4&quot;>
                            <span className=&quot;text-2xl font-bold text-white&quot;>{service.price}</span>
                            <span className=&quot;text-gray-400&quot;>{service.period}</span>
                          </div>
                          <p className=&quot;text-gray-300 text-sm mb-4&quot;>{service.description}</p>
                          <div className=&quot;space-y-2 mb-6&quot;>
                            {service.features.slice(0, 3).map((feature, featureIndex) => (
                              <div key={featureIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                                <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
                                {feature}
                              </div>
                            ))}
                          </div>
                          <div className=&quot;flex items-center justify-between&quot;>
                            <Link
                              href={service.link}
                              className=&quot;inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300&quot;
                            >
                              Learn More
                              <ArrowRight className=&quot;ml-1 w-4 h-4&quot; />
                            </Link>
                            <Link
                              href={`tel:${contactInfo.mobile}`}
                              className=&quot;inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300&quot;
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

      {/* Testimonials Section */}
      <section className=&quot;py-20 bg-gradient-to-b from-gray-900 to-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-4&quot;>
              What Our Clients Say
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Real feedback from organizations that have transformed their infrastructure with our advanced services
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20&quot;
              >
                <div className=&quot;flex items-center mb-4&quot;>
                  <span className=&quot;text-3xl mr-3&quot;>{testimonial.avatar}</span>
                  <div>
                    <h4 className=&quot;text-white font-semibold&quot;>{testimonial.name}</h4>
                    <p className=&quot;text-blue-400 text-sm&quot;>{testimonial.role}</p>
                    <p className=&quot;text-gray-400 text-sm&quot;>{testimonial.company}</p>
                  </div>
                </div>
                <p className=&quot;text-gray-300 mb-4&quot;>{testimonial.content}</p>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;flex text-yellow-400&quot;>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className=&quot;w-4 h-4 fill-current&quot; />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-indigo-900/20 via-blue-900/20 to-cyan-900/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Infrastructure?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
              Join hundreds of organizations that have already revolutionized their IT infrastructure with our advanced services
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link
                href={`tel:${contactInfo.mobile}`}
                className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
              >
                <Phone className=&quot;mr-2 w-5 h-5&quot; />
                Call Now: {contactInfo.mobile}
              </Link>
              <Link
                href={`mailto:${contactInfo.email}`}
                className=&quot;inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300&quot;
              >
                <Mail className=&quot;mr-2 w-5 h-5&quot; />
                Email Us
              </Link>
            </div>
            <div className=&quot;mt-8 text-center&quot;>
              <p className=&quot;text-gray-300 mb-2&quot;>📍 {contactInfo.address}</p>
              <p className=&quot;text-gray-300&quot;>🌐 {contactInfo.website}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}