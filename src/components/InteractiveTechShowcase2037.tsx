import React, { useState } from 'react';

const InteractiveTechShowcase2037: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState('consciousness');

  const technologies = {
    consciousness: {
      title: 'Consciousness Transfer Technology',
      icon: '🧠',
      description: 'Achieve digital immortality with 99.7% consciousness fidelity. Transfer your mind to quantum substrates and experience enhanced cognitive capabilities.',
      features: ['Digital Immortality', 'Enhanced Memory', 'Multi-dimensional Thinking', 'Instant Transfer'],
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-400/30'
    },
    interdimensional: {
      title: 'Interdimensional Computing',
      icon: '🌌',
      description: 'Access infinite computational power through interdimensional quantum processors that exist across multiple realities.',
      features: ['Infinite Processing', 'Parallel Universe Access', 'Reality Manipulation', 'Time Dilation Computing'],
      color: 'from-cyan-600 to-blue-600',
      borderColor: 'border-cyan-400/30'
    },
    quantum: {
      title: 'Quantum Reality Engine',
      icon: '⚡',
      description: 'Create and manipulate reality itself through quantum field manipulation and consciousness-based matter generation.',
      features: ['Matter from Thought', 'Reality Programming', 'Quantum Field Control', 'Universal Constants Manipulation'],
      color: 'from-emerald-600 to-teal-600',
      borderColor: 'border-emerald-400/30'
    },
    cosmic: {
      title: 'Cosmic Intelligence Network',
      icon: '🌟',
      description: 'Connect with intelligent civilizations across the galaxy through advanced quantum communication and consciousness bridging.',
      features: ['Interstellar Communication', 'Alien Consciousness Bridge', 'Galactic Knowledge Access', 'Universal Translation'],
      color: 'from-indigo-600 to-purple-600',
      borderColor: 'border-indigo-400/30'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 INTERACTIVE DEMO • 2037 TECHNOLOGY
        </div>
        <h2 className="text-4xl font-bold mb-4">Interactive Technology Showcase 2037</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Experience the future of technology through our interactive demonstrations. 
          Select a technology below to explore its capabilities and potential applications.
        </p>
      </div>

      {/* Technology Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setSelectedTech(key)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
              selectedTech === key
                ? `bg-gradient-to-r ${tech.color} border-white/50 shadow-lg`
                : `bg-white/10 ${tech.borderColor} hover:bg-white/20`
            }`}
          >
            <div className="text-3xl mb-2">{tech.icon}</div>
            <div className="text-sm font-semibold">{tech.title.split(' ')[0]}</div>
          </button>
        ))}
      </div>

      {/* Selected Technology Display */}
      <div className={`bg-gradient-to-br ${technologies[selectedTech as keyof typeof technologies].color}/20 backdrop-blur-sm rounded-2xl p-8 border ${technologies[selectedTech as keyof typeof technologies].borderColor}`}>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-6xl">{technologies[selectedTech as keyof typeof technologies].icon}</div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{technologies[selectedTech as keyof typeof technologies].title}</h3>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                    LIVE DEMO
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                    PROTOTYPE READY
                  </span>
                </div>
              </div>
            </div>
            <p className="text-lg opacity-90 mb-6">
              {technologies[selectedTech as keyof typeof technologies].description}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {technologies[selectedTech as keyof typeof technologies].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold mb-3">Real-time Demo</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Technology Status</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Performance</span>
                  <span className="text-sm font-semibold">99.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">User Experience</span>
                  <span className="text-sm font-semibold">Transcendent</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold mb-3">Try It Now</h4>
              <button className={`w-full bg-gradient-to-r ${technologies[selectedTech as keyof typeof technologies].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Experience {technologies[selectedTech as keyof typeof technologies].title.split(' ')[0]}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="text-lg opacity-90 mb-4">
          Ready to experience these revolutionary technologies?
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/pages/RevolutionaryTechBreakthrough2037" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Explore All Technologies
          </a>
          <a href="/pages/CosmicIntelligenceRevolution2037" className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold">
            Join Cosmic Network
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2037;