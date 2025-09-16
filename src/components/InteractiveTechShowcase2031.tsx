import React, { useState } from 'react';

const InteractiveTechShowcase2031: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Artificial Intelligence Revolution',
      icon: '🧠',
      description: 'Experience the most advanced AI breakthroughs that will transform every aspect of human life',
      features: [
        'Superintelligent AI Systems',
        'Consciousness Transfer Technology',
        'Predictive Mastery AI',
        'Creative Genius AI',
        'Scientific Discovery AI',
        'Global Optimization AI'
      ],
      link: '/pages/RevolutionaryAIBreakthrough2031'
    },
    space: {
      title: 'Space Technology Breakthrough',
      icon: '🌌',
      description: 'Discover revolutionary space technologies that will enable human expansion across the galaxy',
      features: [
        'Warp Drive System',
        'Space Colony Network',
        'Alien Communication Array',
        'Antimatter Power Core',
        'Space Defense Shield',
        'Terraforming Engine'
      ],
      link: '/pages/NextGenSpaceTech2031'
    },
    quantum: {
      title: 'Quantum Computing Revolution',
      icon: '⚛️',
      description: 'Explore quantum technologies that will revolutionize computing, communication, and reality itself',
      features: [
        'Quantum Supremacy Achieved',
        'Quantum Reality Engine',
        'Quantum Communication',
        'Quantum Cryptography',
        'Quantum Simulation',
        'Quantum Teleportation'
      ],
      link: '/pages/UltimateTechRevolution2031'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-4">
          🚀 INTERACTIVE TECH SHOWCASE 2031 🚀
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Explore the most revolutionary technologies that will define the next decade of human evolution
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-800 rounded-full p-2 flex space-x-2">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {tech.icon} {tech.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Technology Display */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
          <h3 className="text-3xl font-bold text-white mb-4">
            {technologies[activeTab as keyof typeof technologies].title}
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {technologies[activeTab as keyof typeof technologies].description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30 text-center"
            >
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-white font-semibold">{feature}</div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            href={technologies[activeTab as keyof typeof technologies].link}
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            🚀 Explore {technologies[activeTab as keyof typeof technologies].title} →
          </a>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
          <div className="text-lg text-gray-300">Technology Accuracy</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
          <div className="text-lg text-gray-300">Processing Capabilities</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
          <div className="text-lg text-gray-300">Revolutionary Impact</div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/pages/UltimateTechRevolution2031"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-cyan-300 rounded-full hover:bg-cyan-500/30 transition-all duration-300 border border-cyan-400/30"
          >
            🚀 Ultimate Tech Revolution
          </a>
          <a
            href="/pages/RevolutionaryAIBreakthrough2031"
            className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm text-purple-300 rounded-full hover:bg-purple-500/30 transition-all duration-300 border border-purple-400/30"
          >
            🧠 AI Breakthrough
          </a>
          <a
            href="/pages/NextGenSpaceTech2031"
            className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm text-green-300 rounded-full hover:bg-green-500/30 transition-all duration-300 border border-green-400/30"
          >
            🌌 Space Tech
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2031;