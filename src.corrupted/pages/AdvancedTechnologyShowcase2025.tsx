import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdvancedTechnologyShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Artificial Intelligence',
      icon: '🤖',
      description: 'Revolutionary AI systems with consciousness and autonomous capabilities',
      features: [
        'Autonomous decision making',
        'Self-learning algorithms',
        'Consciousness computing',
        'Creative problem solving',
        'Emotional intelligence',
        'Ethical AI frameworks'
      ]
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      description: 'Quantum supremacy achieved with 1000+ qubit processors',
      features: [
        '1000+ logical qubits',
        'Quantum error correction',
        'Exponential speed gains',
        'Molecular simulation',
        'Quantum cryptography',
        'Quantum machine learning'
      ]
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer communication and thought control',
      features: [
        'Non-invasive BCI technology',
        'Thought-controlled devices',
        'Neural feedback systems',
        'Mind-machine integration',
        'Medical applications',
        'Enhanced cognitive abilities'
      ]
    },
    space: {
      title: 'Space Technology',
      icon: '🚀',
      description: 'Advanced space exploration and colonization technologies',
      features: [
        'Mars colonization systems',
        'Space-based manufacturing',
        'Asteroid mining technology',
        'Interplanetary communication',
        'Space tourism platforms',
        'Lunar base operations'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 ADVANCED TECHNOLOGY SHOWCASE 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Technology Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Explore the most advanced technologies of 2025 featuring AI consciousness, quantum supremacy, 
              neural interfaces, and space exploration systems
            </p>
          </motion.div>
        </div>
      </div>

      {/* Technology Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {tech.icon} {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
        >
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
            <h2 className="text-4xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                  <span className="text-lg font-semibold">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Interactive Technology Demo</h2>
          <p className="text-xl opacity-90">Experience our technologies in action</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
          >
            <h3 className="text-2xl font-bold mb-4">🧠 AI Consciousness Demo</h3>
            <p className="text-purple-100 mb-6">
              Watch as our AI system demonstrates self-awareness and creative problem solving in real-time.
            </p>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-sm text-purple-200 mb-2">AI Response:</div>
                <div className="text-white">"I understand the problem and can see multiple solutions. Let me analyze the most ethical approach..."</div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start AI Demo →
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
          >
            <h3 className="text-2xl font-bold mb-4">⚡ Quantum Computing Demo</h3>
            <p className="text-cyan-100 mb-6">
              Experience the power of quantum computing as it solves complex problems in seconds.
            </p>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-sm text-cyan-200 mb-2">Quantum Processing:</div>
                <div className="text-white">Processing 1,000,000,000,000 calculations per second...</div>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Quantum Demo →
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technology Impact Statistics</h2>
          <p className="text-xl opacity-90">Real-world impact of our advanced technologies</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: '99.9%', label: 'AI Accuracy Rate', icon: '🎯' },
            { number: '1000x', label: 'Quantum Speed Increase', icon: '⚡' },
            { number: '95%', label: 'Neural Interface Success', icon: '🧬' },
            { number: '50+', label: 'Space Missions Completed', icon: '🚀' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2 text-cyan-400">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-cyan-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-12 border border-cyan-400/30"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most advanced technologies of 2025. Discover innovations that will reshape our world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Explore Technologies →
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-12 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors font-semibold text-xl">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedTechnologyShowcase2025;