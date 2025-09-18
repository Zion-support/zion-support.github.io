<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom
  Zap
  Shield
  Globe
  Rocket,
  ArrowRight,
  CheckCircle,
  Cpu,
  Lock,
  Brain,
  Target,
  BarChart3,
  Star,
  Sparkles
} from 'lucide-react';

const QuantumComputingSolutions2026 = () => {
  const [activeSolutionsetActiveSolution] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const solutions = [
    {
      id: 'quantum-optimization',
      title: 'Quantum Optimization',
      subtitle: 'Solve Complex Problems Instantly',
      icon: Target,
      color: 'from-purple-600 to-indigo-600',
      description: 'Leverage quantum algorithms to solve optimization problems that would take classical computers millennia to complete.',
      features: [
        'Logistics & Supply Chain Optimization',
        'Financial Portfolio Optimization',
        'Resource Allocation Problems',
        'Route Planning & Scheduling'
      ],
      performance: { speed: '10,000'x', 'accuracy: '99.9%' },
      useCases: [
        'Global supply chain optimization',
        'Real-time trading algorithms',
        'Energy grid management',
        'Transportation routing'
      ]
    },
    {
      id: 'quantum-encryption',
      title: 'Quantum Encryption',
      subtitle: 'Unbreakable Security',
      icon: Lock,
      color: 'from-green-600 to-teal-600',
      description: 'Implement quantum key distribution and post-quantum cryptography to protect against future quantum attacks.',
      features: [
        'Quantum Key Distribution (QKD)',
        'Post-Quantum Cryptography',
        'Quantum Random Number Generation',
        'Secure Communication Networks'
      ],
      performance: { speed: ''Instant', 'accuracy: '100%' },
      useCases: [
        'Government communications',
        'Financial transactions',
        'Healthcare data protection',
        'Military communications'
      ]
    },
    {
      id: 'quantum-simulation',
      title: 'Quantum Simulation',
      subtitle: 'Model Complex Systems',
      icon: Atom,
      color: 'from-cyan-600 to-blue-600',
      description: 'Simulate quantum systemschemical reactionsand materials at the atomic level with unprecedented accuracy.',
      features: [
        'Molecular Dynamics Simulation',
        'Drug Discovery & Development',
        'Materials Science Research',
        'Climate Modeling'
      ],
      performance: { speed: '1'Mx', 'accuracy: '99.99%' },
      useCases: [
        'Pharmaceutical research',
        'New material discovery',
        'Climate change modeling',
        'Catalyst development'
      ]
    },
    {
      id: 'quantum-machine-learning',
      title: 'Quantum Machine Learning',
      subtitle: 'Next-Gen AI Processing',
      icon: Brain,
      color: 'from-red-600 to-pink-600',
      description: 'Accelerate machine learning algorithms using quantum computing for pattern recognition and data analysis.',
      features: [
        'Quantum Neural Networks',
        'Quantum Support Vector Machines',
        'Quantum Clustering Algorithms',
        'Quantum Feature Selection'
      ],
      performance: { speed: '100'x', 'accuracy: '95%' },
      useCases: [
        'Image recognition',
        'Natural language processing',
        'Predictive analytics',
        'Anomaly detection'
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Exponential Speed',
      description: 'Process complex calculations millions of times faster than classical computers',
      value: '10,000x'
    },
    {
      icon: Shield,
      title: 'Unbreakable Security',
      description: 'Quantum encryption provides theoretically unbreakable security',
      value: '100%'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Transform industries from healthcare to finance with quantum solutions',
      value: '50+'
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'Prepare for the quantum revolution with cutting-edge technology',
      value: '2026'
    }
  ];

  const industries = [
    { name: ''Healthcare', 'icon: '🏥'applications: ['Drug 'Discovery', 'Medical 'Imaging', 'Genomics'] },
    { name: ''Finance', 'icon: '💰'applications: ['Risk 'Analysis', 'Algorithmic 'Trading', 'Fraud Detection'] },
    { name: ''Energy', 'icon: '⚡'applications: ['Grid 'Optimization', 'Renewable 'Energy', 'Storage Solutions'] },
    { name: ''Transportation', 'icon: '🚗'applications: ['Route 'Optimization', 'Autonomous 'Vehicles', 'Traffic Management'] },
    { name: ''Manufacturing', 'icon: '🏭'applications: ['Supply 'Chain', 'Quality 'Control', 'Predictive Maintenance'] },
    { name: ''Research', 'icon: '🔬'applications: ['Scientific 'Computing', 'Climate 'Modeling', 'Materials Science'] }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-cyan-900/40" />
        <div className="absolute inset-0">
          {[...Array(40)].map((_i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0-100],
                x: [0Math.random() * 20 - 10],
                opacity: [0.30.80.3],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.6delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-white text-sm font-medium mb-6"
          >
            <Atom className="w-4 h-4 mr-2" />
            Quantum Computing Solutions 2026
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Quantum
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Revolution
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Harness the power of quantum computing to solve the 'world', 's most complex problems. 
            From optimization to encryptiondiscover quantum solutions that will transform your industry.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefitindex) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <benefit.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{benefit.value}</div>
              <div className="text-lg font-semibold text-white mb-2">{benefit.title}</div>
              <div className="text-gray-300 text-sm">{benefit.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Quantum Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solutionindex) => (
              <motion.div
                key={solution.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 cursor-pointer"
                onClick={() => setActiveSolution(index)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${solution.color} mr-4`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{solution.title}</h3>
                      <p className="text-cyan-400">{solution.subtitle}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-lg font-bold text-white">{solution.performance.speed}</div>
                    <div className="text-gray-400 text-sm">Faster</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-lg font-bold text-white">{solution.performance.accuracy}</div>
                    <div className="text-gray-400 text-sm">Accuracy</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {solution.features.slice(03).map((featureindex) => (
                    <div key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Solution View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${solutions[activeSolution].color} mr-4`}>
                    <solutions[activeSolution].icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{solutions[activeSolution].title}</h3>
                    <p className="text-cyan-400 text-lg">{solutions[activeSolution].subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {solutions[activeSolution].description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {solutions[activeSolution].features.map((featureindex) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white">{solutions[activeSolution].performance.speed}</div>
                    <div className="text-gray-400">Performance Boost</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white">{solutions[activeSolution].performance.accuracy}</div>
                    <div className="text-gray-400">Accuracy Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className={`w-full h-80 bg-gradient-to-br ${solutions[activeSolution].color} rounded-2xl flex items-center justify-center`}>
                  <solutions[activeSolution].icon className="w-32 h-32 text-white opacity-80" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Industry Applications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Industry Applications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industryindex) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                <div className="space-y-2">
                  {industry.applications.map((applicationappIndex) => (
                    <div key={appIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {application}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready for the Quantum Future?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and transform your business with cutting-edge quantum computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Quantum Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumComputingSolutions2026;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
