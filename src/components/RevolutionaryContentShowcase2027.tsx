import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);

  const contentItems = [
    {
      id: 'ultimate-revolution',
      title: 'Ultimate Tech Revolution 2027',
      description: 'Experience the most advanced technologies that will reshape humanity\'s future',
      features: ['Quantum Consciousness', 'Synthetic Reality', 'Molecular AI', 'Temporal Engineering'],
      color: 'from-purple-600 to-pink-600',
      icon: '🚀',
      link: '/pages/UltimateTechRevolution2027'
    },
    {
      id: 'consciousness-transfer',
      title: 'Consciousness Transfer 2027',
      description: 'Achieve digital immortality through revolutionary consciousness transfer technology',
      features: ['Digital Immortality', 'Enhanced Cognition', 'Reality Manipulation', 'Infinite Possibilities'],
      color: 'from-cyan-600 to-blue-600',
      icon: '🧠',
      link: '/pages/ConsciousnessTransfer2027'
    },
    {
      id: 'synthetic-reality',
      title: 'Synthetic Reality 2027',
      description: 'Step into realities that are indistinguishable from physical reality',
      features: ['Perfect Fidelity', 'Infinite Worlds', 'Custom Physics', 'Instant Access'],
      color: 'from-emerald-600 to-teal-600',
      icon: '🌌',
      link: '/pages/SyntheticReality2027'
    },
    {
      id: 'molecular-ai',
      title: 'Molecular AI Revolution',
      description: 'AI systems that operate at the molecular level, manipulating matter atomically',
      features: ['DNA Computing', 'Molecular Assembly', 'Programmable Matter', 'Bio-Digital Fusion'],
      color: 'from-orange-600 to-red-600',
      icon: '🧬',
      link: '/pages/MolecularAIRevolution2027'
    },
    {
      id: 'temporal-engineering',
      title: 'Temporal Engineering',
      description: 'Advanced technologies that manipulate time itself for data processing',
      features: ['Quantum Time Dilation', 'Temporal Data Storage', 'Timeline Access', 'Chronological Optimization'],
      color: 'from-violet-600 to-purple-600',
      icon: '⏰',
      link: '/pages/TemporalEngineering2027'
    },
    {
      id: 'universal-translator',
      title: 'Universal Translator',
      description: 'AI systems that translate any form of communication across species and dimensions',
      features: ['Cross-Species Communication', 'Dimensional Translation', 'Quantum Messaging', 'Consciousness Interface'],
      color: 'from-pink-600 to-rose-600',
      icon: '🌐',
      link: '/pages/UniversalTranslator2027'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Future is Now
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our most revolutionary content featuring cutting-edge technologies 
            that will define the next decade of human advancement
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveContent(index)}
              className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                activeContent === index
                  ? 'border-cyan-400 bg-gradient-to-br from-cyan-600/30 to-purple-600/30'
                  : 'border-gray-600 bg-gradient-to-br from-gray-800/30 to-gray-700/30 hover:border-cyan-400/50'
              }`}
            >
              <div className="text-6xl mb-4 text-center">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-center">{item.title}</h3>
              <p className="text-gray-300 mb-4 text-center">{item.description}</p>
              <div className="space-y-2 mb-6">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href={item.link}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${item.color} text-white hover:shadow-xl`}
              >
                Explore {item.title.split(' ')[0]} →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Featured Content Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/30"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6">{contentItems[activeContent].icon}</div>
                <h3 className="text-4xl font-bold mb-6">{contentItems[activeContent].title}</h3>
                <p className="text-xl opacity-90 mb-8">{contentItems[activeContent].description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {contentItems[activeContent].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={contentItems[activeContent].link}
                    className={`bg-gradient-to-r ${contentItems[activeContent].color} text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform text-center`}
                  >
                    🚀 Experience Now
                  </a>
                  <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                    📖 Learn More
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
                  <h4 className="text-2xl font-bold mb-4 text-center">Technology Preview</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Processing Power</span>
                      <span className="text-cyan-400">10^18 ops/sec</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full w-full"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Reality Fidelity</span>
                      <span className="text-cyan-400">99.99%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full w-full"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Consciousness Transfer</span>
                      <span className="text-cyan-400">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full w-full"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Dimensional Access</span>
                      <span className="text-cyan-400">∞</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-12">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands who have already experienced these revolutionary technologies. 
              The future of human advancement starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
                🌟 Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
                📚 View All Content
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;