import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contentTabs = [
    {
      id: 'ai-transformation',
      title: 'AI Transformation 2026',
      icon: '🧠',
      description: 'Advanced AI systems with synthetic consciousness and quantum enhancement',
      link: '/pages/AdvancedAITransformation2026',
      color: 'from-purple-600 to-pink-600',
      features: ['Synthetic Consciousness', 'Quantum-Enhanced AI', 'Autonomous Agents']
    },
    {
      id: 'quantum-revolution',
      title: 'Quantum Revolution 2025',
      icon: '⚡',
      description: 'Revolutionary quantum computing that solves impossible problems',
      link: '/pages/QuantumComputingRevolution2025',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum Supremacy', 'Quantum Cryptography', 'Molecular Simulation']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface 2025',
      icon: '🧬',
      description: 'Direct brain-computer communication and thought-controlled devices',
      link: '/pages/NeuralInterfaceRevolution2025',
      color: 'from-emerald-600 to-teal-600',
      features: ['Non-Invasive BCI', 'Neural Implants', 'Optical Interfaces']
    }
  ];

  const additionalContent = [
    {
      title: 'Synthetic Intelligence 2026',
      icon: '🤖',
      description: 'AI agents with synthetic consciousness and autonomous capabilities',
      link: '/pages/SyntheticIntelligence2026',
      color: 'from-violet-600 to-purple-600'
    },
    {
      title: 'Advanced Quantum Computing 2026',
      icon: '⚛️',
      description: 'Next-generation quantum processors with 1000+ logical qubits',
      link: '/pages/AdvancedQuantumComputing2026',
      color: 'from-indigo-600 to-cyan-600'
    },
    {
      title: 'Neural Interface Revolution 2026',
      icon: '🧠',
      description: 'Revolutionary brain-computer interfaces with thought control',
      link: '/pages/NeuralInterfaceRevolution2026',
      color: 'from-teal-600 to-emerald-600'
    },
    {
      title: 'Revolutionary Tech Blog 2026',
      icon: '📚',
      description: 'Comprehensive insights into cutting-edge technology trends',
      link: '/pages/RevolutionaryTechBlog2026',
      color: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 mb-12">
      <div className="text-center mb-12">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 BREAKTHROUGH 2026 • REVOLUTIONARY NEW CONTENT
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">🌟 Revolutionary Technology Showcase 2026</h2>
        <p className="text-2xl text-purple-200 max-w-4xl mx-auto">
          Experience the future with our groundbreaking new content covering the most advanced technologies 
          that are reshaping industries and creating new possibilities.
        </p>
      </div>

      {/* Interactive Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {contentTabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === index
                ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <span className="text-2xl mr-2">{tab.icon}</span>
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl mb-6">{contentTabs[activeTab].icon}</div>
                <h3 className="text-4xl font-bold text-white mb-4">{contentTabs[activeTab].title}</h3>
                <p className="text-xl text-purple-200 mb-6">{contentTabs[activeTab].description}</p>
                <div className="space-y-2 mb-8">
                  {contentTabs[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span className="text-purple-200">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={contentTabs[activeTab].link}
                  className={`inline-block bg-gradient-to-r ${contentTabs[activeTab].color} text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300`}
                >
                  Explore {contentTabs[activeTab].title} →
                </a>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <h4 className="text-2xl font-bold text-white mb-4">Key Highlights</h4>
                <ul className="space-y-3 text-purple-200">
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-400 mt-1">✨</span>
                    <span>Cutting-edge technology implementation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-400 mt-1">🚀</span>
                    <span>Revolutionary breakthrough capabilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-400 mt-1">🔬</span>
                    <span>Advanced research and development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-400 mt-1">💡</span>
                    <span>Innovative problem-solving approaches</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Additional Content Grid */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white text-center mb-8">🌟 More Revolutionary Content</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalContent.map((content, index) => (
            <motion.div
              key={content.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{content.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3 text-center">{content.title}</h4>
              <p className="text-purple-200 text-sm mb-4 text-center">{content.description}</p>
              <a
                href={content.link}
                className={`block w-full bg-gradient-to-r ${content.color} text-white py-2 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300`}
              >
                Explore →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Dive into our revolutionary technology content and discover the innovations that are shaping tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors">
              Explore All Content →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;