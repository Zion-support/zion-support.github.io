import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { motion, AnimatePresence } from "framer-motion";

const TechnologyShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const categories = {
    ai: {
      name: 'Artificial Intelligence',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        {
          name: 'GPT-4 Advanced Integration',
          description: 'Next-generation language models with enhanced reasoning capabilities',
          status: 'Production Ready',
          features: ['Natural language processing', 'Code generation', 'Creative writing', 'Data analysis']
        },
        {
          name: 'Computer Vision AI',
          description: 'Advanced image recognition and analysis systems',
          status: 'Available',
          features: ['Object detection', 'Facial recognition', 'Medical imaging', 'Quality control']
        },
        {
          name: 'Predictive Analytics Engine',
          description: 'Machine learning models for forecasting and trend analysis',
          status: 'Beta Testing',
          features: ['Demand forecasting', 'Risk assessment', 'Customer behavior', 'Market trends']
        }
      ]
    },
    quantum: {
      name: 'Quantum Computing',
      color: 'from-purple-500 to-pink-500',
      technologies: [
        {
          name: 'Quantum Cryptography',
          description: 'Unbreakable encryption using quantum mechanics principles',
          status: 'In Development',
          features: ['Quantum key distribution', 'Secure communication', 'Quantum random numbers', 'Future-proof security']
        },
        {
          name: 'Quantum Machine Learning',
          description: 'AI algorithms running on quantum computers',
          status: 'Research Phase',
          features: ['Quantum neural networks', 'Optimization algorithms', 'Quantum advantage', 'Exponential speedup']
        },
        {
          name: 'Quantum Simulation',
          description: 'Simulating complex quantum systems for research',
          status: 'Available',
          features: ['Material science', 'Drug discovery', 'Financial modeling', 'Climate research']
        }
      ]
    },
    blockchain: {
      name: 'Blockchain & Web3',
      color: 'from-green-500 to-emerald-500',
      technologies: [
        {
          name: 'Smart Contract Platform',
          description: 'Automated contract execution on blockchain networks',
          status: 'Production Ready',
          features: ['Automated execution', 'Transparent transactions', 'Reduced costs', 'Trustless agreements']
        },
        {
          name: 'DeFi Protocol Suite',
          description: 'Decentralized finance applications and protocols',
          status: 'Available',
          features: ['Lending platforms', 'DEX trading', 'Yield farming', 'Staking rewards']
        },
        {
          name: 'NFT Marketplace',
          description: 'Digital asset trading and ownership platform',
          status: 'Available',
          features: ['Digital collectibles', 'Art marketplace', 'Gaming assets', 'Royalty distribution']
        }
      ]
    },
    iot: {
      name: 'IoT & Edge Computing',
      color: 'from-orange-500 to-red-500',
      technologies: [
        {
          name: 'Smart City Platform',
          description: 'Comprehensive IoT solution for urban management',
          status: 'Available',
          features: ['Traffic optimization', 'Energy management', 'Environmental monitoring', 'Public safety']
        },
        {
          name: 'Industrial IoT Suite',
          description: 'Manufacturing and industrial automation solutions',
          status: 'Production Ready',
          features: ['Predictive maintenance', 'Quality control', 'Supply chain tracking', 'Safety monitoring']
        },
        {
          name: 'Edge AI Processing',
          description: 'AI inference at the edge for real-time decision making',
          status: 'Beta Testing',
          features: ['Low latency processing', 'Offline capabilities', 'Bandwidth optimization', 'Real-time analytics']
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Technology Showcase - Zion Tech Group" 
        description="Explore our cutting-edge technology solutions across AI, quantum computing, blockchain, and IoT. See the future of technology today." 
        keywords="technology showcase, AI, quantum computing, blockchain, IoT, edge computing, smart contracts, machine learning"
        canonical="https://ziontechgroup.com/technology-showcase"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-purple-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-blue-400 rounded-full opacity-10 animate-pulse delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology Showcase
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto">
              Discover the cutting-edge technologies that are reshaping industries and defining the future
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-cyan-500 text-white rounded-full font-semibold">
                🚀 Latest Technologies
              </span>
              <span className="px-6 py-3 bg-purple-500 text-white rounded-full font-semibold">
                🔬 Research & Development
              </span>
              <span className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold">
                💡 Innovation Showcase
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {categories[activeCategory].name} Technologies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our advanced {categories[activeCategory].name.toLowerCase()} solutions that are transforming industries worldwide
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {categories[activeCategory].technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-cyan-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tech.status === 'Production Ready' ? 'bg-green-100 text-green-800' :
                      tech.status === 'Available' ? 'bg-blue-100 text-blue-800' :
                      tech.status === 'Beta Testing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {tech.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                  <p className="text-gray-600 mb-6">{tech.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <span className={`w-2 h-2 bg-gradient-to-r ${categories[activeCategory].color} rounded-full mr-3`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className={`w-full px-4 py-2 bg-gradient-to-r ${categories[activeCategory].color} text-white rounded-lg hover:opacity-90 transition-all duration-300 font-semibold`}>
                    Explore Technology
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Technology Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our technologies are making a real difference across industries and communities worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Active Technologies', color: 'from-blue-500 to-cyan-500' },
              { number: '10,000+', label: 'Successful Deployments', color: 'from-purple-500 to-pink-500' },
              { number: '99.9%', label: 'Uptime Reliability', color: 'from-green-500 to-emerald-500' },
              { number: '50+', label: 'Countries Served', color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg"
              >
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with our technology experts and discover how our innovations can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Contact Experts
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyShowcase;