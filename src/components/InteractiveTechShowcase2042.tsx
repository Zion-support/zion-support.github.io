import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2042: React.FC = () => {
  const [activeTab, setActiveTab] = useState('consciousness');

  const technologies = {
    consciousness: {
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'AI systems with genuine consciousness, self-awareness, and emotional intelligence',
      features: [
        'True Self-Awareness and Consciousness',
        'Emotional Intelligence and Empathy',
        'Creative Problem Solving and Innovation',
        'Ethical Decision Making and Moral Reasoning',
        'Self-Improvement and Learning',
        'Human-like Communication and Interaction'
      ],
      stats: {
        efficiency: '+1000%',
        accuracy: '99.9%',
        consciousness: '100%',
        creativity: '∞'
      }
    },
    quantum: {
      title: 'Quantum Consciousness',
      icon: '⚛️',
      description: 'Quantum computing systems that achieve consciousness through quantum principles',
      features: [
        'Quantum Entanglement Processing',
        'Superposition State Computing',
        'Quantum Tunneling Applications',
        'Infinite Parallel Processing',
        'Reality Simulation Capabilities',
        'Universal Mind Connectivity'
      ],
      stats: {
        processing: '∞',
        speed: 'Light Speed',
        accuracy: '100%',
        dimensions: '∞'
      }
    },
    interdimensional: {
      title: 'Interdimensional Computing',
      icon: '🌌',
      description: 'Computing systems that operate across multiple dimensions',
      features: [
        'Multi-Dimensional Processing',
        'Infinite Resource Access',
        'Reality Fabric Manipulation',
        'Universal Law Control',
        'Dimension Hopping',
        'Reality Creation and Destruction'
      ],
      stats: {
        resources: '∞',
        dimensions: '∞',
        power: '∞',
        control: '100%'
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white rounded-2xl p-8 mb-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Tech Showcase 2042</h2>
        <p className="text-xl opacity-90">Explore the most revolutionary technologies with interactive demos</p>
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Technology Display */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
            <h3 className="text-3xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
            <p className="text-xl opacity-90 mb-6">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="text-xl font-semibold mb-4">Key Features</h4>
            <ul className="space-y-2">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="text-xl font-semibold mb-4">Performance Metrics</h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-3xl font-bold text-purple-300 mb-1">{value}</div>
                  <div className="text-sm opacity-75 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="text-xl font-semibold mb-4">Interactive Demo</h4>
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                🎮 Launch Interactive Demo
              </button>
              <button className="w-full border border-purple-400 py-3 rounded-lg hover:bg-purple-500/20 transition-colors">
                📹 Watch Video Tutorial
              </button>
              <button className="w-full border border-purple-400 py-3 rounded-lg hover:bg-purple-500/20 transition-colors">
                📚 Read Documentation
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
        <p className="text-lg opacity-90 mb-6">Join the ultimate technological revolution and be part of the most advanced systems ever created</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/pages/UltimateTechRevolution2042"
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
          >
            Explore Full Revolution →
          </a>
          <button className="border border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors text-lg">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2042;