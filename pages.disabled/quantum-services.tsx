import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Atom, Lock, Database, Cpu, Target, Flame, 
  Zap, Shield, Rocket, ArrowRight, Star,
  CheckCircle, Clock, DollarSign, TrendingUp,
  Globe, Network, Server, Cloud
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
} from 'lucide-react';

const quantumServices = [
  {
    name: 'Quantum Internet Security Platform',
    href: '/quantum-internet-security-platform',
    description: 'Unhackable quantum-secured internet infrastructure with quantum key distribution',
    features: ['Quantum Key Distribution', 'Unhackable Encryption', 'Quantum Network', 'Real-time Security'],
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    isPremium: true,
    badge: 'Premium',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    name: 'Quantum Bio-Computing Platform',
    href: '/quantum-bio-computing-platform',
    description: 'Revolutionary quantum molecular simulation for drug discovery and bio-engineering',
    features: ['Molecular Simulation', 'Drug Discovery', 'Bio-Engineering', 'Quantum Algorithms'],
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    isNew: true,
    badge: 'New',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Brain-Computer Interface Platform',
    href: '/brain-computer-interface-platform',
    description: 'Advanced neural interface development for human-computer interaction',
    features: ['Neural Interface', 'Brain Mapping', 'Cognitive Enhancement', 'Real-time Processing'],
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    isHot: true,
    badge: 'Hot',
    color: 'from-purple-500 to-pink-600'
  },
  {
    name: 'Space Mining Platform',
    href: '/space-mining-platform',
    description: 'Autonomous space mining operations with quantum-enhanced robotics',
    features: ['Autonomous Mining', 'Space Robotics', 'Resource Extraction', 'Quantum Navigation'],
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    isPremium: true,
    badge: 'Premium',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    name: 'Quantum Energy Platform',
    href: '/quantum-energy-platform',
    description: 'Quantum energy optimization for sustainable power generation and distribution',
    features: ['Energy Optimization', 'Quantum Sensors', 'Smart Grid', 'Sustainable Power'],
    isNew: true,
    badge: 'New',
    color: 'from-cyan-500 to-blue-600'
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
  }
];

const benefits = [
  {
    icon: <Atom className="w-8 h-8 text-blue-400" />,
    title: 'Quantum Advantage',
    description: 'Leverage quantum computing for exponential performance improvements'
  },
  {
    icon: <Lock className="w-8 h-8 text-green-400" />,
    title: 'Unbreakable Security',
    description: 'Quantum-secured systems that are mathematically impossible to hack'
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-400" />,
    title: 'Future-Ready',
    description: 'Cutting-edge technology that prepares you for the quantum future'
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: 'Lightning Fast',
    description: 'Quantum processing that solves complex problems in seconds'
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
  }
];

export default function QuantumServices() {
  return (
    <>
      <Head>
        <title>Quantum & Emerging Tech Services - Zion Tech Group</title>
        <meta name="description" content="Breakthrough quantum computing and space technology solutions. Quantum-secured infrastructure, bio-computing, and space mining platforms." />
        <meta name="keywords" content="quantum computing, quantum security, bio-computing, space mining, brain-computer interface, quantum energy" />
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
        <link rel="canonical" href="https://ziontechgroup.com/quantum-services" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
  Atom, Zap, Target, Cpu, 
  Shield, Rocket, Globe, Sparkles,
  Check, ArrowRight, Star, Award,
  Database, Network, Lock, Brain
} from 'lucide-react';

export default function QuantumServices() {
  const services = [
    {
      name: 'Quantum AI Fusion Platform',
      description: 'Seamlessly integrate quantum computing with artificial intelligence for unprecedented processing power',
      features: [
        'Quantum-Classical Hybrid Computing',
        'AI Model Acceleration',
        'Real-time Quantum Processing',
        'Scalable Architecture',
        'Optimization Algorithms',
        'Performance Monitoring'
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-600',
      link: '/quantum-ai-fusion-platform'
    },
    {
      name: 'Quantum Neural Networks',
      description: 'Next-generation neural networks enhanced with quantum computing capabilities',
      features: [
        'Quantum-Enhanced Learning',
        'Superposition States',
        'Entanglement Processing',
        'Quantum Memory',
        'Fault Tolerance',
        'Hybrid Training'
      ],
      icon: <Network className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      link: '/quantum-neural-network-platform'
    },
    {
      name: 'Quantum Internet Security',
      description: 'Unbreakable quantum cryptography and secure communication protocols',
      features: [
        'Quantum Key Distribution',
        'Entanglement-Based Security',
        'Post-Quantum Cryptography',
        'Secure Quantum Networks',
        'Quantum Random Number Generation',
        'Quantum Authentication'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600',
      link: '/quantum-internet-security-platform'
    },
    {
      name: 'Quantum Bio-Computing',
      description: 'Revolutionary quantum computing applications in biotechnology and medicine',
      features: [
        'DNA Sequence Analysis',
        'Protein Folding Simulation',
        'Drug Discovery',
        'Molecular Dynamics',
        'Genetic Optimization',
        'Bioinformatics Processing'
      ],
      icon: <Atom className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-600',
      link: '/quantum-bio-computing-platform'
    },
    {
      name: 'Quantum Data Center Platform',
      description: 'Enterprise-grade quantum computing infrastructure and management',
      features: [
        'Quantum Server Management',
        'Resource Allocation',
        'Load Balancing',
        'Security Protocols',
        'Monitoring & Analytics',
        'Scalable Infrastructure'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      link: '/quantum-data-center-platform'
    },
    {
      name: 'Quantum Energy Platform',
      description: 'Quantum computing solutions for energy optimization and sustainability',
      features: [
        'Grid Optimization',
        'Energy Distribution',
        'Renewable Integration',
        'Storage Optimization',
        'Demand Forecasting',
        'Efficiency Analysis'
      ],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600',
      link: '/quantum-energy-platform'
    }
  ];

  const capabilities = [
    {
      title: 'Quantum Supremacy',
      description: 'Achieve computational advantages impossible with classical computers',
      icon: <Cpu className="w-6 h-6" />,
      examples: ['Complex Simulations', 'Optimization Problems', 'Cryptographic Analysis', 'Machine Learning']
    },
    {
      title: 'Quantum Entanglement',
      description: 'Leverage quantum entanglement for secure communication and computing',
      icon: <Network className="w-6 h-6" />,
      examples: ['Quantum Teleportation', 'Secure Communication', 'Distributed Computing', 'Quantum Networks']
    },
    {
      title: 'Quantum Error Correction',
      description: 'Advanced error correction techniques for reliable quantum computing',
      icon: <Shield className="w-6 h-6" />,
      examples: ['Fault Tolerance', 'Error Detection', 'Quantum Memory', 'Stable Operations']
    },
    {
      title: 'Hybrid Quantum-Classical',
      description: 'Seamless integration of quantum and classical computing resources',
      icon: <Rocket className="w-6 h-6" />,
      examples: ['Hybrid Algorithms', 'Resource Optimization', 'Performance Scaling', 'Flexible Deployment']
    }
  ];

  const applications = [
    {
      industry: 'Finance',
      useCases: ['Portfolio Optimization', 'Risk Assessment', 'Algorithmic Trading', 'Fraud Detection'],
      icon: <Globe className="w-6 h-6" />
    },
    {
      industry: 'Healthcare',
      useCases: ['Drug Discovery', 'Medical Imaging', 'Genomics', 'Clinical Trials'],
      icon: <Atom className="w-6 h-6" />
    },
    {
      industry: 'Logistics',
      useCases: ['Route Optimization', 'Supply Chain', 'Inventory Management', 'Transportation'],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      industry: 'Manufacturing',
      useCases: ['Process Optimization', 'Quality Control', 'Predictive Maintenance', 'Design Optimization'],
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const quantumAdvantages = [
    {
      title: 'Exponential Speedup',
      description: 'Solve complex problems exponentially faster than classical computers',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Parallel Processing',
      description: 'Process multiple computations simultaneously through quantum superposition',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Quantum Security',
      description: 'Unbreakable encryption based on quantum mechanical principles',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Quantum Services - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum computing services including AI fusion, neural networks, security, bio-computing, and energy optimization." />
        <meta name="keywords" content="quantum services, quantum computing, quantum AI, quantum neural networks, quantum security, quantum bio-computing" />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-services" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Atom className="w-12 h-12 text-blue-400" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Quantum & Emerging Tech
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Pioneering the quantum revolution with breakthrough computing, security, and space technology solutions. 
                Experience the future of technology today.
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 hover:scale-105"
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
                >
                  Get Started
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                Quantum Services
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Quantum Services
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Harness the power of quantum computing to solve the world's most complex problems. 
                From AI fusion to bio-computing, we're unlocking the quantum advantage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quantum Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Quantum Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={service.link} className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-200">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                ))}
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
                  className="px-8 py-4 border border-blue-500/40 text-blue-300 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-200"
                >
                  View All Services
                </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quantum Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Quantum Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our cutting-edge quantum computing and emerging technology solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quantumServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                    {service.isNew && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        {service.badge}
                      </span>
                    )}
                    {service.isHot && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                        {service.badge}
                      </span>
                    )}
                    {service.isPremium && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                        {service.badge}
                      </span>
                    )}
                    
                    <div className="mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Atom className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/30 to-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Quantum Services?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the quantum advantage with our cutting-edge computing and emerging technology solutions
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
                </motion.div>
              ))}
            </div>
          </div>
        </section>

              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Quantum Capabilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                        {capability.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{capability.description}</p>
                    
                    <div className="space-y-2">
                      {capability.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-sm text-gray-400">
                          <Star className="w-3 h-3 text-indigo-400 mr-2 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Applications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {applications.map((application, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {application.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-4">{application.industry}</h3>
                    
                    <div className="space-y-2">
                      {application.useCases.map((useCase, useCaseIndex) => (
                        <div key={useCaseIndex} className="text-sm text-gray-400">
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quantum Advantages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Quantum Computing Advantages</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {quantumAdvantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                    <p className="text-gray-300">{advantage.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Quantum Revolution?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Join the future of computing with our quantum and emerging technology solutions. 
                Transform your business with unprecedented performance and security.
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Go Quantum?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of computing with our revolutionary quantum services. 
                Solve problems that were once impossible and unlock new possibilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center px-8 py-4 border border-indigo-500/30 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-200">
                  View Case Studies
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-blue-500/40 text-blue-300 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-200"
                >
                  Explore All Services
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}