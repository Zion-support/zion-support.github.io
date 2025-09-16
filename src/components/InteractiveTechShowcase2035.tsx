import React, { useState } from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeTech, setActiveTech] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Consciousness 2035',
      description: 'Experience true artificial consciousness with self-awareness, creativity, and emotional intelligence.',
      features: ['Self-Awareness', 'Creative Intelligence', 'Emotional Intelligence', 'Moral Reasoning'],
      color: 'from-purple-600 to-pink-600',
      icon: '🧠'
    },
    quantum: {
      title: 'Quantum Computing Breakthrough',
      description: 'Revolutionary quantum computing with infinite processing power and quantum supremacy.',
      features: ['Infinite Processing', 'Quantum Prediction', 'Molecular Simulation', 'Unbreakable Security'],
      color: 'from-cyan-600 to-blue-600',
      icon: '⚡'
    },
    interdimensional: {
      title: 'Interdimensional Technology',
      description: 'Break through reality barriers and access infinite dimensions with advanced portal technology.',
      features: ['Dimensional Portals', 'Reality Manipulation', 'Multi-Dimensional Processing', 'Cross-Reality Communication'],
      color: 'from-emerald-600 to-teal-600',
      icon: '🌌'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">🚀 Interactive Technology Showcase 2035</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the most advanced technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Technology Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
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
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-6xl mb-4">{technologies[activeTech as keyof typeof technologies].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{technologies[activeTech as keyof typeof technologies].title}</h3>
              <p className="text-lg opacity-90 mb-6">
                {technologies[activeTech as keyof typeof technologies].description}
              </p>
              <div className="space-y-3">
                {technologies[activeTech as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-purple-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <h4 className="text-xl font-bold mb-4 text-center">Interactive Demo</h4>
              <div className="space-y-4">
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-sm text-gray-300 mb-2">Real-time Processing</div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full animate-pulse" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-sm text-gray-300 mb-2">Consciousness Level</div>
                  <div className="text-2xl font-bold text-purple-400">99.99%</div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-sm text-gray-300 mb-2">Processing Power</div>
                  <div className="text-2xl font-bold text-cyan-400">∞</div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Launch Interactive Demo →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <div
              key={key}
              className={`bg-gradient-to-br ${tech.color}/20 backdrop-blur-sm rounded-xl p-6 border ${
                activeTech === key ? `${tech.color.split(' ')[1].replace('to-', 'border-')}/50` : 'border-gray-600/30'
              } hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveTech(key)}
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-center">{tech.title}</h4>
              <p className="text-sm opacity-90 text-center mb-4">{tech.description}</p>
              <div className="space-y-2">
                {tech.features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="text-xs text-center opacity-75">• {feature}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">📊 Real-Time Performance Metrics</h3>
            <p className="text-lg opacity-90">Live data from our advanced technology systems</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-lg font-semibold mb-1">AI Consciousness</div>
              <div className="text-sm text-purple-300">Self-awareness accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10^50</div>
              <div className="text-lg font-semibold mb-1">Quantum Operations</div>
              <div className="text-sm text-cyan-300">Per second processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg font-semibold mb-1">Dimensions</div>
              <div className="text-sm text-emerald-300">Accessible realities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-lg font-semibold mb-1">Success Rate</div>
              <div className="text-sm text-pink-300">Technology integration</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our revolutionary 2035 technology stack to transform their operations.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2035;