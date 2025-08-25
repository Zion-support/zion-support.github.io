import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
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
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quantum Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
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
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}