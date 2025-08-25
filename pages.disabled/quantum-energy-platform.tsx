import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Atom, Target, Users, 
  Shield, Rocket, Globe, Sparkles,
  Check, ArrowRight, Star, Award,
  Cpu, Database, Network, Lock, Activity, TrendingUp, Building2
} from 'lucide-react';

export default function QuantumEnergyPlatform() {
  const features = [
    {
      name: 'Grid Optimization',
      description: 'Quantum-enhanced algorithms for intelligent power grid management and optimization',
      capabilities: [
        'Load Balancing',
        'Demand Forecasting',
        'Grid Stability',
        'Real-time Monitoring',
        'Predictive Maintenance',
        'Efficiency Optimization'
      ],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Energy Distribution',
      description: 'Intelligent energy routing and distribution systems for maximum efficiency',
      capabilities: [
        'Smart Routing',
        'Loss Minimization',
        'Voltage Control',
        'Frequency Regulation',
        'Load Shedding',
        'Emergency Response'
      ],
      icon: <Network className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Renewable Integration',
      description: 'Seamless integration of renewable energy sources with quantum optimization',
      capabilities: [
        'Solar Integration',
        'Wind Power Management',
        'Battery Storage',
        'Hydroelectric Control',
        'Geothermal Optimization',
        'Biomass Integration'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Storage Optimization',
      description: 'Advanced energy storage management and optimization algorithms',
      capabilities: [
        'Battery Management',
        'Storage Scheduling',
        'Peak Shaving',
        'Grid Services',
        'Lifecycle Optimization',
        'Performance Monitoring'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Demand Forecasting',
      description: 'AI-powered demand prediction using quantum computing capabilities',
      capabilities: [
        'Weather Integration',
        'Behavioral Analysis',
        'Seasonal Patterns',
        'Event Prediction',
        'Real-time Updates',
        'Accuracy Optimization'
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-teal-500 to-blue-600'
    },
    {
      name: 'Efficiency Analysis',
      description: 'Comprehensive energy efficiency analysis and optimization recommendations',
      capabilities: [
        'Performance Metrics',
        'Efficiency Scoring',
        'Optimization Suggestions',
        'Cost Analysis',
        'ROI Calculations',
        'Sustainability Metrics'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-red-500 to-pink-600'
    }
  ];

  const energySources = [
    {
      type: 'Solar Energy',
      applications: ['Grid Integration', 'Storage Optimization', 'Peak Management', 'Distributed Generation'],
      efficiency: 'High',
      icon: <Zap className="w-6 h-6" />
    },
    {
      type: 'Wind Power',
      applications: ['Offshore Farms', 'Onshore Integration', 'Grid Stability', 'Storage Coordination'],
      efficiency: 'High',
      icon: <Globe className="w-6 h-6" />
    },
    {
      type: 'Hydroelectric',
      applications: ['Reservoir Management', 'Flow Optimization', 'Grid Services', 'Environmental Impact'],
      efficiency: 'Very High',
      icon: <Activity className="w-6 h-6" />
    },
    {
      type: 'Nuclear Energy',
      applications: ['Safety Systems', 'Efficiency Optimization', 'Waste Management', 'Grid Stability'],
      efficiency: 'Very High',
      icon: <Atom className="w-6 h-6" />
    }
  ];

  const applications = [
    {
      industry: 'Utility Companies',
      useCases: ['Grid Management', 'Load Balancing', 'Customer Service', 'Infrastructure Planning'],
      icon: <Zap className="w-6 h-6" />
    },
    {
      industry: 'Industrial Facilities',
      useCases: ['Energy Optimization', 'Cost Reduction', 'Sustainability Goals', 'Compliance Management'],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      industry: 'Commercial Buildings',
      useCases: ['Smart Building Management', 'Energy Efficiency', 'Cost Control', 'Sustainability'],
      icon: <Building2 className="w-6 h-6" />
    },
    {
      industry: 'Government & Municipal',
      useCases: ['Public Infrastructure', 'Emergency Services', 'Sustainability Goals', 'Cost Management'],
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const technology = [
    {
      title: 'Quantum Algorithms',
      description: 'Specialized quantum algorithms for energy optimization and grid management',
      icon: <Atom className="w-6 h-6" />,
      features: ['Quantum Annealing', 'Optimization Algorithms', 'Machine Learning', 'Real-time Processing']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Advanced AI systems for predictive analytics and intelligent decision making',
      icon: <Cpu className="w-6 h-6" />,
      features: ['Predictive Analytics', 'Pattern Recognition', 'Anomaly Detection', 'Learning Systems']
    },
    {
      title: 'IoT Integration',
      description: 'Comprehensive IoT network for real-time monitoring and control',
      icon: <Network className="w-6 h-6" />,
      features: ['Sensor Networks', 'Real-time Data', 'Remote Control', 'Automated Systems']
    },
    {
      title: 'Blockchain Security',
      description: 'Secure energy trading and transaction management using blockchain technology',
      icon: <Lock className="w-6 h-6" />,
      features: ['Energy Trading', 'Smart Contracts', 'Security Protocols', 'Transparent Transactions']
    }
  ];

  const benefits = [
    {
      title: 'Energy Efficiency',
      description: 'Optimize energy consumption and reduce waste through intelligent management',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Cost Reduction',
      description: 'Lower energy costs through optimization and intelligent resource management',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Sustainability',
      description: 'Achieve sustainability goals through renewable integration and efficiency optimization',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Quantum Energy Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum energy platform for grid optimization, renewable integration, storage management, and energy efficiency optimization." />
        <meta name="keywords" content="quantum energy, energy optimization, grid management, renewable energy, energy storage, sustainability" />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-energy-platform" />
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-300 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Quantum Energy
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
                Quantum Energy Platform
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionary quantum computing platform for energy optimization, grid management, 
                and sustainable energy solutions. Power the future with quantum intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{feature.name}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {feature.capabilities.map((capability, capabilityIndex) => (
                        <li key={capabilityIndex} className="flex items-center text-sm text-gray-400">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Energy Sources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Energy Sources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {energySources.map((source, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {source.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">{source.type}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block ${
                      source.efficiency === 'Very High' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                      source.efficiency === 'High' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {source.efficiency} Efficiency
                    </span>
                    
                    <div className="space-y-1">
                      {source.applications.map((application, applicationIndex) => (
                        <div key={applicationIndex} className="text-sm text-gray-400">
                          {application}
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
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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

        {/* Technology Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Technology Stack</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {technology.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                        {tech.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{tech.description}</p>
                    
                    <div className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
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
                Ready to Power the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover how our quantum energy platform can transform your energy management, 
                reduce costs, and achieve sustainability goals through intelligent optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center px-8 py-4 border border-yellow-500/30 text-yellow-300 font-semibold rounded-lg hover:bg-yellow-500/10 transition-all duration-200">
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