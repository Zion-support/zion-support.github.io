import React, { useState } from 'react';

const InteractiveTechShowcase2031: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Revolutionary AI 2031',
      description: 'Experience consciousness-level artificial intelligence that transcends human capabilities',
      features: [
        'Quantum Neural Networks',
        'Consciousness-Level AI',
        'Universal Problem Solver',
        'Creative Intelligence',
        'Predictive Intelligence',
        'Autonomous Innovation'
      ],
      color: 'from-pink-500 to-purple-500',
      icon: '🧠'
    },
    space: {
      title: 'Next-Gen Space Tech 2031',
      description: 'Explore the universe with revolutionary space technology and interstellar capabilities',
      features: [
        'Warp Drive Technology',
        'Interstellar Colonies',
        'Quantum Communication',
        'Anti-Gravity Vehicles',
        'Terraforming Technology',
        'Universal Observatory'
      ],
      color: 'from-cyan-500 to-blue-500',
      icon: '🚀'
    },
    quantum: {
      title: 'Ultimate Tech Revolution 2031',
      description: 'Witness the most advanced technological breakthrough in human history',
      features: [
        'Quantum Consciousness AI',
        'Universal Tech Integration',
        'Transcendent Energy Systems',
        'Molecular Reality Manipulation',
        'Planetary Engineering',
        'Precision Universe Control'
      ],
      color: 'from-indigo-500 to-purple-500',
      icon: '⚡'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 mb-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Interactive Technology Showcase 2031
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Explore our revolutionary 2031 technology portfolio with interactive demonstrations and real-time capabilities
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <span className="text-2xl mr-2">{tech.icon}</span>
            {tech.title}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-6xl mr-4">{technologies[activeTab as keyof typeof technologies].icon}</span>
              <div>
                <h3 className="text-3xl font-bold mb-2">{technologies[activeTab as keyof typeof technologies].title}</h3>
                <p className="text-gray-300">{technologies[activeTab as keyof typeof technologies].description}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <span className="text-cyan-400 mr-3 text-xl">✓</span>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                Experience {technologies[activeTab as keyof typeof technologies].title} →
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-xl p-8 border border-white/10">
            <h4 className="text-2xl font-bold mb-6 text-center">Live Demonstration</h4>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-4 border border-cyan-400/30">
                <div className="text-sm text-cyan-400 mb-2">Real-time Processing</div>
                <div className="text-2xl font-bold">99.9% Efficiency</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-400/30">
                <div className="text-sm text-purple-400 mb-2">Quantum Speed</div>
                <div className="text-2xl font-bold">∞ Operations/sec</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-400/30">
                <div className="text-sm text-green-400 mb-2">Accuracy Rate</div>
                <div className="text-2xl font-bold">100% Precision</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-400/30">
                <div className="text-sm text-orange-400 mb-2">Innovation Rate</div>
                <div className="text-2xl font-bold">∞ Solutions/min</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Links */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-6">Quick Access to Revolutionary Content</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/pages/UltimateTechRevolution2031" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            🌟 Ultimate Tech Revolution 2031
          </a>
          <a href="/pages/RevolutionaryAIBreakthrough2031" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            🧠 Revolutionary AI Breakthrough 2031
          </a>
          <a href="/pages/NextGenSpaceTech2031" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            🚀 Next-Gen Space Tech 2031
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2031;