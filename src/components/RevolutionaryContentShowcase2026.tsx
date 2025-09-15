import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('revolutionary');

  const contentTabs = [
    {
      id: 'revolutionary',
      name: 'Revolutionary Tech 2026',
      icon: '🚀',
      description: 'Breakthrough technologies reshaping our world',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'ai-solutions',
      name: 'Advanced AI Solutions',
      icon: '🤖',
      description: 'Next-generation artificial intelligence',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'quantum',
      name: 'Quantum Breakthrough',
      icon: '⚛️',
      description: 'Quantum computing revolution',
      color: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'neural',
      name: 'Neural Interfaces',
      icon: '🧬',
      description: 'Mind-machine communication',
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  const contentData = {
    revolutionary: {
      title: 'Revolutionary Technology 2026',
      subtitle: 'Experience the future with groundbreaking technologies',
      features: [
        { icon: '🧠', title: 'Synthetic Intelligence', description: 'Self-evolving AI systems' },
        { icon: '⚛️', title: 'Quantum-Neural Fusion', description: 'Quantum computing meets neural networks' },
        { icon: '🧬', title: 'Neural Interface Revolution', description: 'Direct brain-computer communication' },
        { icon: '🤖', title: 'Advanced Robotics', description: 'Autonomous humanoid robots' },
        { icon: '🧪', title: 'Biotech Revolution', description: 'AI-driven biotechnology' },
        { icon: '🚀', title: 'Space Technology', description: 'Advanced space exploration' }
      ]
    },
    'ai-solutions': {
      title: 'Advanced AI Solutions 2026',
      subtitle: 'Transform your business with cutting-edge AI',
      features: [
        { icon: '🤖', title: 'Autonomous AI Agents', description: 'Self-managing business processes' },
        { icon: '💬', title: 'Conversational AI', description: 'Human-like interactions' },
        { icon: '📊', title: 'Predictive Analytics', description: 'Data-driven forecasting' },
        { icon: '👁️', title: 'Computer Vision', description: 'Advanced image analysis' },
        { icon: '📝', title: 'Natural Language Processing', description: 'Advanced text understanding' },
        { icon: '⚙️', title: 'ML Platform', description: 'Custom AI development' }
      ]
    },
    quantum: {
      title: 'Quantum Computing Breakthrough 2026',
      subtitle: 'Exponential computing power for impossible problems',
      features: [
        { icon: '⚡', title: 'Quantum Supremacy', description: 'Exponential speed increase' },
        { icon: '🔐', title: 'Quantum Cryptography', description: 'Unbreakable encryption' },
        { icon: '🧠', title: 'Quantum ML', description: 'Enhanced machine learning' },
        { icon: '🧪', title: 'Quantum Simulation', description: 'Complex system modeling' },
        { icon: '🎯', title: 'Quantum Optimization', description: 'Advanced problem solving' },
        { icon: '📡', title: 'Quantum Communication', description: 'Ultra-secure networks' }
      ]
    },
    neural: {
      title: 'Neural Interface Revolution 2026',
      subtitle: 'Bridge the gap between mind and machine',
      features: [
        { icon: '🧠', title: 'Non-Invasive BCI', description: 'Thought-controlled systems' },
        { icon: '💭', title: 'Cognitive Enhancement', description: 'Augmented mental capabilities' },
        { icon: '🔄', title: 'Neural Feedback', description: 'Real-time brain monitoring' },
        { icon: '🎮', title: 'Virtual Reality', description: 'Immersive neural experiences' },
        { icon: '🏥', title: 'Medical Applications', description: 'Therapeutic neural interfaces' },
        { icon: '🔬', title: 'Research Tools', description: 'Advanced brain research' }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT 2026 • EXCLUSIVE SHOWCASE
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-80 max-w-4xl mx-auto">
            Explore our groundbreaking new content featuring the most advanced technologies of 2026
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {contentTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </motion.div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                {contentData[activeTab as keyof typeof contentData].title}
              </h3>
              <p className="text-lg opacity-80">
                {contentData[activeTab as keyof typeof contentData].subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentData[activeTab as keyof typeof contentData].features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                  <h4 className="text-lg font-bold mb-2 text-center">{feature.title}</h4>
                  <p className="text-sm opacity-80 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className={`bg-gradient-to-r ${contentTabs.find(t => t.id === activeTab)?.color} px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                Explore {contentTabs.find(t => t.id === activeTab)?.name} →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Interactive Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Interactive Experience</h3>
            <p className="opacity-80">Explore content with immersive interactive features</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Real-time Updates</h3>
            <p className="opacity-80">Content updates automatically with latest innovations</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-2">Future-Ready</h3>
            <p className="opacity-80">Built for the technologies of tomorrow</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Dive deep into our revolutionary content and discover the technologies that will shape tomorrow
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;