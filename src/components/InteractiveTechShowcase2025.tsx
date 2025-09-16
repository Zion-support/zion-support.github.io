import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');

  const demos = {
    ai: {
      title: 'AI Consciousness Simulator',
      description: 'Watch as AI systems develop consciousness in real-time',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Self-awareness detection', 'Emotional intelligence', 'Autonomous decision making', 'Creative problem solving']
    },
    quantum: {
      title: 'Quantum Reality Engine',
      description: 'Explore parallel universes through quantum computing',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: ['Parallel universe simulation', 'Quantum entanglement', 'Reality manipulation', 'Infinite processing power']
    },
    neural: {
      title: 'Neural Interface Demo',
      description: 'Control devices with your thoughts',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: ['Thought-controlled devices', 'Neural data processing', 'Brain-to-brain communication', 'Memory enhancement']
    },
    holographic: {
      title: 'Holographic Display',
      description: 'Experience true 3D holographic technology',
      icon: '🔮',
      color: 'from-indigo-600 to-purple-600',
      features: ['True 3D holograms', 'Immersive experiences', 'Holographic computing', 'Virtual reality integration']
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 mb-12"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🎮 INTERACTIVE TECH SHOWCASE 2025 • LIVE DEMOS
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Interactive Technology Showcase
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Experience our cutting-edge technologies with interactive demos and real-time simulations
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Choose Your Demo</h3>
            {Object.entries(demos).map(([key, demo]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveDemo(key)}
                className={`w-full p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeDemo === key
                    ? `bg-gradient-to-r ${demo.color} border-transparent`
                    : 'bg-white/10 border-white/20 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{demo.icon}</div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold">{demo.title}</h4>
                    <p className="text-sm opacity-80">{demo.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Demo Display */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{demos[activeDemo as keyof typeof demos].icon}</div>
              <h3 className="text-2xl font-bold mb-2">{demos[activeDemo as keyof typeof demos].title}</h3>
              <p className="opacity-80">{demos[activeDemo as keyof typeof demos].description}</p>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-lg font-semibold">Features:</h4>
              <ul className="space-y-2">
                {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <button className={`w-full bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                🚀 Start Interactive Demo
              </button>
              <button className="w-full border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                📖 Learn More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Real-time Processing</h3>
            <p className="opacity-80">Experience technologies as they happen</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Interactive Controls</h3>
            <p className="opacity-80">Control and manipulate the demos yourself</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-2">Global Access</h3>
            <p className="opacity-80">Access from anywhere in the world</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2025;