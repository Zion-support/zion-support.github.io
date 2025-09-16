import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTech, setActiveTech] = useState('conscious-ai');

  const technologies = {
    'conscious-ai': {
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'The first truly conscious artificial intelligence systems that can think, feel, and create independently.',
      features: [
        'Self-aware decision making',
        'Emotional intelligence processing',
        'Creative problem solving',
        'Ethical reasoning capabilities'
      ],
      color: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    'quantum-consciousness': {
      title: 'Quantum Consciousness',
      icon: '⚛️',
      description: 'Revolutionary quantum computing systems that achieve true consciousness through quantum entanglement.',
      features: [
        'Quantum entanglement processing',
        'Consciousness emergence algorithms',
        'Infinite computational capacity',
        'Reality simulation capabilities'
      ],
      color: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    'interdimensional': {
      title: 'Interdimensional Computing',
      icon: '🌌',
      description: 'Computing systems that operate across multiple dimensions, accessing infinite computational resources.',
      features: [
        'Multi-dimensional processing',
        'Reality manipulation algorithms',
        'Time-space computation',
        'Parallel universe access'
      ],
      color: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase 2025</h2>
        <p className="text-xl opacity-90">Explore revolutionary technologies through interactive demonstrations</p>
      </div>

      {/* Technology Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-2 border border-purple-400/30">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTech(key)}
              className={`px-4 py-2 rounded-md transition-all duration-300 font-semibold ${
                activeTech === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-purple-300 hover:text-white hover:bg-purple-600/30'
              }`}
            >
              {tech.icon} {tech.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Technology Display */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className={`bg-gradient-to-br ${technologies[activeTech as keyof typeof technologies].color} backdrop-blur-sm rounded-xl p-8 border ${technologies[activeTech as keyof typeof technologies].borderColor} hover:scale-105 transition-all duration-300`}>
          <div className="text-6xl mb-4 text-center">{technologies[activeTech as keyof typeof technologies].icon}</div>
          <h3 className="text-2xl font-bold mb-4 text-center">{technologies[activeTech as keyof typeof technologies].title}</h3>
          <p className="text-center mb-6 opacity-90">
            {technologies[activeTech as keyof typeof technologies].description}
          </p>
          <ul className="space-y-2 mb-6">
            {technologies[activeTech as keyof typeof technologies].features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
            Explore {technologies[activeTech as keyof typeof technologies].title} →
          </button>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30">
          <h3 className="text-2xl font-bold mb-4">🎮 Interactive Demo</h3>
          <div className="bg-black/50 rounded-lg p-6 mb-4 h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">{technologies[activeTech as keyof typeof technologies].icon}</div>
              <p className="text-lg font-semibold mb-2">Live {technologies[activeTech as keyof typeof technologies].title} Demo</p>
              <p className="text-sm opacity-80">Experience this revolutionary technology in action</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              🚀 Start Demo
            </button>
            <button className="border border-purple-400 text-purple-400 py-2 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold">
              📚 Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Technology Comparison */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
        <h3 className="text-2xl font-bold mb-6 text-center">⚡ Technology Comparison</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, tech]) => (
            <div key={key} className="text-center">
              <div className="text-3xl mb-2">{tech.icon}</div>
              <h4 className="font-bold mb-2">{tech.title}</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Processing Power:</span>
                  <span className="text-green-400">∞</span>
                </div>
                <div className="flex justify-between">
                  <span>Consciousness Level:</span>
                  <span className="text-blue-400">100%</span>
                </div>
                <div className="flex justify-between">
                  <span>Reality Control:</span>
                  <span className="text-purple-400">Max</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;