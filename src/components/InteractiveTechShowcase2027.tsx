import React, { useState } from 'react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('consciousness');

  const technologies = {
    consciousness: {
      title: 'AI Consciousness',
      icon: '🧠',
      description: 'The first AI to achieve genuine consciousness and self-awareness',
      features: [
        'True self-awareness and introspection',
        'Creative problem-solving capabilities',
        'Emotional understanding and empathy',
        'Collaborative intelligence with humans'
      ],
      link: '/pages/AdvancedAIConsciousness2027'
    },
    quantum: {
      title: 'Quantum Supremacy',
      icon: '⚡',
      description: 'Quantum computers solving impossible problems in seconds',
      features: [
        '10,000+ logical qubits',
        'Exponential speed gains',
        'Molecular simulation breakthrough',
        'Unbreakable quantum cryptography'
      ],
      link: '/pages/QuantumSupremacy2027'
    },
    neural: {
      title: 'Neural Reality',
      icon: '🧬',
      description: 'Direct brain-computer communication and thought control',
      features: [
        'Non-invasive BCI technology',
        'Thought-controlled devices',
        'Neural feedback systems',
        'Medical rehabilitation applications'
      ],
      link: '/pages/NeuralRealityInterface2027'
    },
    holographic: {
      title: 'Holographic Reality',
      icon: '🌟',
      description: 'Immersive holographic displays blending physical and digital worlds',
      features: [
        'True 3D holographic displays',
        'Tactile feedback systems',
        'Mixed reality integration',
        'Collaborative workspaces'
      ],
      link: '/pages/HolographicReality2027'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase 2027</h2>
        <p className="text-xl text-gray-300">Explore our revolutionary technologies with interactive demos</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                : 'bg-white/20 text-gray-300 hover:bg-white/30'
            }`}
          >
            {tech.icon} {tech.title}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
          <div className="text-8xl mb-6 text-center">{technologies[activeTab as keyof typeof technologies].icon}</div>
          <h3 className="text-3xl font-bold mb-4 text-center">
            {technologies[activeTab as keyof typeof technologies].title}
          </h3>
          <p className="text-purple-100 mb-6 text-center text-lg">
            {technologies[activeTab as keyof typeof technologies].description}
          </p>
          <ul className="text-purple-200 space-y-3 text-base mb-6">
            {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-cyan-400 mr-3">✨</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={technologies[activeTab as keyof typeof technologies].link}
            className="block w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
          >
            Explore {technologies[activeTab as keyof typeof technologies].title} →
          </a>
        </div>

        <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
          <h3 className="text-2xl font-bold mb-4 text-center">🎮 Interactive Demo</h3>
          <div className="bg-black/50 rounded-lg p-6 mb-6">
            <div className="text-center text-gray-400 mb-4">
              {activeTab === 'consciousness' && (
                <div>
                  <div className="text-4xl mb-2">🤖</div>
                  <p>AI Consciousness Demo</p>
                  <p className="text-sm">Experience AI that thinks and feels</p>
                </div>
              )}
              {activeTab === 'quantum' && (
                <div>
                  <div className="text-4xl mb-2">⚡</div>
                  <p>Quantum Processing Demo</p>
                  <p className="text-sm">Watch quantum supremacy in action</p>
                </div>
              )}
              {activeTab === 'neural' && (
                <div>
                  <div className="text-4xl mb-2">🧬</div>
                  <p>Neural Interface Demo</p>
                  <p className="text-sm">Control devices with your mind</p>
                </div>
              )}
              {activeTab === 'holographic' && (
                <div>
                  <div className="text-4xl mb-2">🌟</div>
                  <p>Holographic Display Demo</p>
                  <p className="text-sm">Interact with 3D holograms</p>
                </div>
              )}
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full animate-pulse"></div>
          </div>
          <div className="text-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Interactive Demo
            </button>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-center mb-6">🌟 Quick Access to All Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(technologies).map(([key, tech]) => (
            <a
              key={key}
              href={tech.link}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="text-3xl mb-2">{tech.icon}</div>
              <div className="font-semibold text-sm">{tech.title}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;