import React, { useState } from 'react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTech, setActiveTech] = useState('consciousness');

  const technologies = {
    consciousness: {
      title: 'Consciousness Computing',
      description: 'AI systems with genuine consciousness and emotional intelligence',
      features: ['Self-awareness', 'Emotional intelligence', 'Creative expression', 'Empathetic understanding'],
      color: 'from-purple-600 to-pink-600',
      icon: '🧠'
    },
    interdimensional: {
      title: 'Interdimensional Tech',
      description: 'Access parallel dimensions through quantum entanglement',
      features: ['Parallel universe access', 'Quantum entanglement', 'Reality manipulation', 'Multiverse navigation'],
      color: 'from-cyan-600 to-blue-600',
      icon: '🌌'
    },
    ultimate: {
      title: 'Ultimate Revolution',
      description: 'The convergence of all breakthrough technologies',
      features: ['Cross-dimensional processing', 'Infinite computational power', 'Universal knowledge', 'Reality synthesis'],
      color: 'from-emerald-600 to-teal-600',
      icon: '⚡'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase 2027</h2>
        <p className="text-xl text-gray-300">Explore our revolutionary technologies with interactive features</p>
      </div>

      {/* Technology Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTech(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {tech.icon} {tech.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Technology Display */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-6xl mb-6">{technologies[activeTech as keyof typeof technologies].icon}</div>
          <h3 className="text-3xl font-bold mb-4">
            {technologies[activeTech as keyof typeof technologies].title}
          </h3>
          <p className="text-xl text-gray-300 mb-6">
            {technologies[activeTech as keyof typeof technologies].description}
          </p>
          <ul className="space-y-3 mb-8">
            {technologies[activeTech as keyof typeof technologies].features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          <button className={`bg-gradient-to-r ${technologies[activeTech as keyof typeof technologies].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
            Learn More →
          </button>
        </div>

        <div className="relative">
          <div className={`bg-gradient-to-br ${technologies[activeTech as keyof typeof technologies].color} rounded-2xl p-8 text-center`}>
            <div className="text-8xl mb-6 animate-pulse">
              {technologies[activeTech as keyof typeof technologies].icon}
            </div>
            <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
            <p className="text-lg opacity-90 mb-6">
              Experience this technology in action with our interactive demonstration
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Accuracy</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">∞</div>
                <div className="text-sm opacity-90">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Comparison */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">Technology Comparison</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, tech]) => (
            <div
              key={key}
              className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeTech === key ? 'ring-4 ring-white/50' : ''
              }`}
              onClick={() => setActiveTech(key)}
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h4 className="text-xl font-bold mb-2">{tech.title}</h4>
              <p className="text-sm opacity-90">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;