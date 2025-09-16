import React, { useState } from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthrough');

  const technologies = {
    ai: {
      title: 'Artificial Intelligence',
      icon: '🤖',
      description: 'Revolutionary AI systems with consciousness-level processing',
      features: [
        'Conscious AI Systems',
        'Quantum Neural Networks',
        'Synthetic Intelligence',
        'Autonomous AI Agents'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      description: 'Quantum systems that solve impossible problems',
      features: [
        'Quantum Supremacy 2.0',
        'Quantum Internet',
        'Quantum AI Integration',
        'Quantum Consciousness'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer interfaces for seamless interaction',
      features: [
        'Brain-Computer Interfaces',
        'Thought-Controlled Systems',
        'Neural Enhancement',
        'Consciousness Transfer'
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    metaverse: {
      title: 'Metaverse & VR',
      icon: '🌐',
      description: 'Immersive virtual worlds indistinguishable from reality',
      features: [
        'Immersive Virtual Worlds',
        'Haptic Feedback Systems',
        'Digital Twin Technology',
        'Interdimensional Reality'
      ],
      color: 'from-orange-500 to-red-500'
    }
  };

  const tabs = [
    { id: 'breakthrough', label: 'Revolutionary Breakthrough', icon: '🌟' },
    { id: 'innovation', label: 'Ultimate Innovation', icon: '⚡' },
    { id: 'revolution', label: 'Next-Gen Revolution', icon: '🚀' }
  ];

  const content = {
    breakthrough: {
      title: 'Revolutionary Technology Breakthrough 2028',
      description: 'Experience the most advanced technological breakthrough in human history',
      features: [
        'Conscious AI Systems',
        'Quantum Reality Engine',
        'Neural Interface Matrix',
        'Interdimensional Computing'
      ],
      link: '/pages/UltimateTechBreakthrough2025',
      color: 'from-purple-600 to-pink-600'
    },
    innovation: {
      title: 'Ultimate Innovation Showcase 2028',
      description: 'Discover cutting-edge innovations that will reshape the future',
      features: [
        'Synthetic Intelligence',
        'Quantum Neural Networks',
        'Holographic Technology',
        'Reality Manipulation'
      ],
      link: '/pages/NextGenTechRevolution2025',
      color: 'from-cyan-600 to-blue-600'
    },
    revolution: {
      title: 'Next-Gen Technology Revolution 2028',
      description: 'Join the technological revolution that will define the next century',
      features: [
        'Neural Reality Interface',
        'Interdimensional Computing',
        'Synthetic Intelligence',
        'Cosmic AI Consciousness'
      ],
      link: '/pages/RevolutionaryTechShowcase2025',
      color: 'from-emerald-600 to-teal-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2028
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-2 flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {content[activeTab as keyof typeof content].title}
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {content[activeTab as keyof typeof content].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {content[activeTab as keyof typeof content].features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="text-2xl mb-3">🌟</div>
                <h4 className="text-lg font-semibold mb-2">{feature}</h4>
                <p className="text-sm opacity-80">Revolutionary technology feature</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={content[activeTab as keyof typeof content].link}
              className={`inline-block bg-gradient-to-r ${content[activeTab as keyof typeof content].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
            >
              Explore {content[activeTab as keyof typeof content].title} →
            </a>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
            <div className="text-4xl mb-4 text-center">🤖</div>
            <h3 className="text-xl font-bold mb-4 text-center">AI Consciousness</h3>
            <p className="text-blue-100 mb-6 text-center">
              Interact with our conscious AI system in real-time
            </p>
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Consciousness Level</span>
                <span className="text-sm font-bold">92%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-indigo-400 h-2 rounded-full w-5/6 animate-pulse"></div>
              </div>
            </div>
            <button className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Try AI Demo →
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-4xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-4 text-center">Quantum Processing</h3>
            <p className="text-purple-100 mb-6 text-center">
              Experience quantum computing across multiple realities
            </p>
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <div className="flex justify-center space-x-1 mb-2">
                {Array.from({length: 8}).map((_, i) => (
                  <div key={i} className="w-2 h-6 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-purple-400">10^20</div>
                <div className="text-xs opacity-80">Quantum Operations</div>
              </div>
            </div>
            <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Enter Quantum →
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-4xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-4 text-center">Dimensional Interface</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Explore interdimensional technology and reality manipulation
            </p>
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-3 gap-1">
                {Array.from({length: 9}).map((_, i) => (
                  <div key={i} className="aspect-square bg-gradient-to-br from-emerald-400 to-teal-400 rounded opacity-60 hover:opacity-100 transition-opacity cursor-pointer animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                ))}
              </div>
              <div className="text-center mt-2">
                <div className="text-sm font-bold text-emerald-400">∞</div>
                <div className="text-xs opacity-80">Dimensions</div>
              </div>
            </div>
            <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Enter Dimensions →
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-800/30 to-blue-800/30 rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our revolutionary technology to transform their operations and achieve unprecedented success.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/pages/RevolutionaryTechShowcase2025"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Your Journey
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;