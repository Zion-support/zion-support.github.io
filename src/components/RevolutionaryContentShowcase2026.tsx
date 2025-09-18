import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contentTabs = [
    {
      id: 0,
      title: '🚀 Revolutionary Breakthroughs',
      content: 'Experience the most advanced technological breakthroughs in AI consciousness, quantum computing, and neural interfaces.',
      features: [
        'AI Consciousness Revolution',
        'Quantum Supremacy Achieved',
        'Neural Interface Technology',
        'Autonomous AI Systems'
      ],
      link: '/pages/RevolutionaryTechBreakthrough2026'
    },
    {
      id: 1,
      title: '🧠 AI Consciousness',
      content: 'Discover how AI systems are achieving true consciousness and self-awareness.',
      features: [
        'Self-Aware AI Systems',
        'Emotional Intelligence',
        'Creative Problem Solving',
        'Autonomous Learning'
      ],
      link: '/pages/AIConsciousnessRevolution2026'
    },
    {
      id: 2,
      title: '⚛️ Quantum Computing',
      content: 'Explore the revolutionary power of quantum computing and its applications.',
      features: [
        'Quantum Supremacy',
        'Quantum Machine Learning',
        'Quantum Cryptography',
        'Quantum Simulations'
      ],
      link: '/pages/QuantumComputingRevolution2026'
    },
    {
      id: 3,
      title: '🌐 Neural Consensus',
      content: 'Learn about neural consensus technology and collective intelligence.',
      features: [
        'Distributed Intelligence',
        'Consensus Algorithms',
        'Emergent Capabilities',
        'Scalable Coordination'
      ],
      link: '/blog/ai-2026-neural-consensus-revolution'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT SHOWCASE 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Explore the most revolutionary technological advances that will reshape our world
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentTabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
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
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border border-gray-700/50">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    {contentTabs[activeTab].title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {contentTabs[activeTab].content}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {contentTabs[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = contentTabs[activeTab].link}
                  >
                    Explore Technology →
                  </button>
                </div>

                <div className="text-center">
                  <div className="text-8xl mb-4">🚀</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Revolutionary Technology
                  </div>
                  <div className="text-gray-400 mt-2">
                    Interactive Demo Available
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;