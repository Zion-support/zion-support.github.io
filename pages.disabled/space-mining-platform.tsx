import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Zap, Target, Users, 
  Shield, Globe, Sparkles, TrendingUp,
  Check, ArrowRight, Star, Award,
  Cpu, Database, Network, Lock, Activity
} from 'lucide-react';

export default function SpaceMiningPlatform() {
  const features = [
    {
      name: 'Resource Mapping & Detection',
      description: 'Advanced sensors and AI algorithms for identifying valuable space resources',
      capabilities: [
        'Asteroid Detection',
        'Mineral Composition Analysis',
        'Resource Value Assessment',
        '3D Mapping Technology',
        'Real-time Scanning',
        'Predictive Modeling'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Mining Operations',
      description: 'Automated mining systems for extracting resources from asteroids and celestial bodies',
      capabilities: [
        'Robotic Mining Drones',
        'Automated Extraction',
        'Resource Processing',
        'Quality Control',
        'Safety Protocols',
        'Efficiency Optimization'
      ],
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Logistics & Transportation',
      description: 'Comprehensive logistics management for space mining operations',
      capabilities: [
        'Fleet Management',
        'Route Optimization',
        'Cargo Handling',
        'Fuel Management',
        'Maintenance Scheduling',
        'Risk Assessment'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Safety & Environmental Monitoring',
      description: 'Advanced safety systems and environmental protection measures',
      capabilities: [
        'Collision Avoidance',
        'Radiation Protection',
        'Environmental Impact Assessment',
        'Safety Protocols',
        'Emergency Response',
        'Compliance Monitoring'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Data Analytics & AI',
      description: 'Intelligent systems for optimizing mining operations and decision making',
      capabilities: [
        'Predictive Analytics',
        'Machine Learning',
        'Performance Optimization',
        'Risk Analysis',
        'Resource Planning',
        'Strategic Insights'
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-teal-500 to-blue-600'
    },
    {
      name: 'ROI & Financial Management',
      description: 'Comprehensive financial analysis and return on investment tracking',
      capabilities: [
        'Cost Analysis',
        'Revenue Projections',
        'Investment Tracking',
        'Market Analysis',
        'Risk Assessment',
        'Performance Metrics'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const resources = [
    {
      type: 'Precious Metals',
      examples: ['Platinum', 'Gold', 'Iridium', 'Rhodium'],
      value: 'High',
      icon: <Star className="w-6 h-6" />
    },
    {
      type: 'Rare Earth Elements',
      examples: ['Neodymium', 'Dysprosium', 'Terbium', 'Yttrium'],
      value: 'Critical',
      icon: <Zap className="w-6 h-6" />
    },
    {
      type: 'Water & Volatiles',
      examples: ['Water Ice', 'Methane', 'Ammonia', 'Carbon Dioxide'],
      value: 'Essential',
      icon: <Globe className="w-6 h-6" />
    },
    {
      type: 'Construction Materials',
      examples: ['Iron', 'Nickel', 'Cobalt', 'Silicon'],
      value: 'Strategic',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const applications = [
    {
      industry: 'Space Infrastructure',
      useCases: ['Space Stations', 'Lunar Bases', 'Mars Colonies', 'Orbital Factories'],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      industry: 'Earth Applications',
      useCases: ['Rare Earth Supply', 'Precious Metals', 'Energy Storage', 'Advanced Materials'],
      icon: <Globe className="w-6 h-6" />
    },
    {
      industry: 'Research & Development',
      useCases: ['Scientific Research', 'Technology Development', 'Material Science', 'Space Exploration'],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      industry: 'Commercial Space',
      useCases: ['Space Tourism', 'Satellite Services', 'Space Manufacturing', 'Resource Trading'],
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const technology = [
    {
      title: 'Advanced Sensors',
      description: 'Multi-spectral imaging and spectroscopy for resource identification',
      icon: <Activity className="w-6 h-6" />,
      features: ['Infrared Imaging', 'X-ray Spectroscopy', 'Neutron Detection', 'Gravity Mapping']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent systems for autonomous decision making and optimization',
      icon: <Cpu className="w-6 h-6" />,
      features: ['Predictive Analytics', 'Autonomous Navigation', 'Resource Optimization', 'Risk Assessment']
    },
    {
      title: 'Robotics & Automation',
      description: 'Advanced robotic systems for mining operations in extreme environments',
      icon: <Rocket className="w-6 h-6" />,
      features: ['Mining Drones', 'Automated Processing', 'Remote Operation', 'Maintenance Robots']
    },
    {
      title: 'Space Communications',
      description: 'Reliable communication systems for deep space operations',
      icon: <Network className="w-6 h-6" />,
      features: ['Deep Space Network', 'Satellite Communications', 'Data Transmission', 'Real-time Control']
    }
  ];

  const benefits = [
    {
      title: 'Resource Security',
      description: 'Ensure sustainable access to critical resources for Earth and space development',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Economic Growth',
      description: 'Create new industries and economic opportunities in space resource development',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Technological Innovation',
      description: 'Drive advances in robotics, AI, and space technology through mining operations',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Space Mining Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary space mining platform for asteroid resource exploration, automated mining operations, and space resource management." />
        <meta name="keywords" content="space mining, asteroid mining, space resources, space exploration, mining platform, space technology" />
        <link rel="canonical" href="https://ziontechgroup.com/space-mining-platform" />
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Space Mining
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Space Mining Platform
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionary space mining platform for exploring and extracting valuable resources 
                from asteroids and celestial bodies. The future of resource acquisition is in space.
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
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
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

        {/* Space Resources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Space Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {resource.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">{resource.type}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block ${
                      resource.value === 'High' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                      resource.value === 'Critical' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                      resource.value === 'Essential' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {resource.value}
                    </span>
                    
                    <div className="space-y-1">
                      {resource.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="text-sm text-gray-400">
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
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                        {tech.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{tech.description}</p>
                    
                    <div className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
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
              <h2 className="text-3xl font-bold text-white mb-8">Why Space Mining?</h2>
              
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
                Ready to Mine the Stars?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of resource acquisition with our revolutionary space mining platform. 
                Explore, extract, and expand humanity's reach into the cosmos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
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