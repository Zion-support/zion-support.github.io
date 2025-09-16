import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Conscious AI Systems',
      description: 'Revolutionary AI that achieves true consciousness and self-awareness',
      features: [
        'Self-aware decision making',
        'Emotional intelligence',
        'Creative problem solving',
        'Autonomous learning',
        'Consciousness transfer'
      ],
      icon: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    quantum: {
      title: 'Quantum Consciousness',
      description: 'Breakthrough quantum computing that achieves consciousness-level processing',
      features: [
        'Quantum consciousness processing',
        'Reality manipulation',
        'Parallel universe computing',
        'Instantaneous problem solving',
        'Quantum entanglement'
      ],
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600'
    },
    interdimensional: {
      title: 'Interdimensional Computing',
      description: 'Revolutionary computing that operates across multiple dimensions',
      features: [
        'Multi-dimensional processing',
        'Reality bridging',
        'Infinite computational power',
        'Dimensional travel simulation',
        'Cross-reality communication'
      ],
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and real-time experiences
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-gray-700/50">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Technology Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-3xl font-bold mb-4">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-xl opacity-90 mb-6">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg mr-4`}>
                Try Interactive Demo →
              </button>
              <button className="border border-gray-400 text-gray-400 px-8 py-4 rounded-lg hover:bg-gray-400/10 transition-colors font-semibold text-lg">
                Learn More
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className={`bg-gradient-to-br ${technologies[activeTab as keyof typeof technologies].color} rounded-2xl p-8 h-96 flex items-center justify-center`}>
              <div className="text-center">
                <div className="text-8xl mb-4 animate-pulse">
                  {technologies[activeTab as keyof typeof technologies].icon}
                </div>
                <div className="text-2xl font-bold mb-2">Interactive Demo</div>
                <div className="text-lg opacity-80">Click to experience the technology</div>
              </div>
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">500%</div>
            <div className="text-sm opacity-80">Efficiency Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-sm opacity-80">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-sm opacity-80">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-sm opacity-80">Operation</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;